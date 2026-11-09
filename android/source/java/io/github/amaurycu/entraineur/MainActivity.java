package io.github.amaurycu.entraineur;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageInstaller;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

/**
 * Entraîneur d'ouvertures, version Android.
 *
 * L'application web est rangée telle quelle dans l'APK (assets/app/). La WebView
 * la charge depuis https://appassets.androidplatform.net/, une adresse réservée
 * par Android à cet usage : aucune requête vers ce nom ne quitte le téléphone,
 * c'est ce code qui répond (shouldInterceptRequest). La page a ainsi une vraie
 * origine https, ce qui permet le worker Stockfish et le stockage local.
 *
 * Il remplace aussi le petit serveur de l'ordinateur pour la route /api/donnees :
 *   - lecture (GET) : servie ici, avec l'en-tête X-Revision ;
 *   - écriture (POST) : la WebView ne transmet pas le corps des POST
 *     interceptés, donc android-pont.js détourne cet appel vers ecrire().
 * Même règle que serveur.py : on refuse d'écraser si le fichier a changé
 * depuis la lecture de la page (409).
 *
 * Mise à jour (maj.js) : la page trouve sur GitHub une release plus récente
 * et appelle installerMaj() avec l'adresse de son APK. On le télécharge ici
 * (pas de CORS côté Java), puis PackageInstaller le remet à Android, qui
 * affiche son écran de confirmation. Android n'accepte que le même paquet,
 * signé avec la même clé : les données de l'appli restent.
 */
public class MainActivity extends Activity {

    static final String HOTE = "appassets.androidplatform.net";
    static final String ACCUEIL = "https://" + HOTE + "/index.html";
    static final Charset UTF8 = Charset.forName("UTF-8");

    private static final int REQ_FICHIER = 1;
    private static final int REQ_EXPORT = 2;
    private static final long TAILLE_MAX_APK = 200L * 1024 * 1024;
    /* Les seules releases installables : celles de ce dépôt (en minuscules).
       Si tu publies ta propre version de l'appli, change-le avec `depot` dans
       app/version.js. */
    static final String DEPOT = "amaurycu/chaxmat";
    private volatile boolean majEnCours = false;

    private WebView web;
    private File donnees;
    private final Object verrou = new Object();
    /* hôte de la page affichée : le pont ne répond qu'à l'application elle-même */
    private volatile String hotePage = HOTE;
    private ValueCallback<Uri[]> choixFichier;
    private String exportTexte;

    @Override
    protected void onCreate(Bundle etat) {
        super.onCreate(etat);
        donnees = new File(getFilesDir(), "donnees.json");
        couleursBarres();

        web = new WebView(this);
        setContentView(web);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);          // lecture des PGN choisis par l'utilisateur
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setSupportMultipleWindows(false);     // target=_blank passe par shouldOverrideUrlLoading
        web.addJavascriptInterface(new Pont(), "PontAndroid");
        web.setWebViewClient(new Client());
        web.setWebChromeClient(new Chrome());

        if (etat != null) web.restoreState(etat);
        if (web.getUrl() == null) web.loadUrl(ACCUEIL);
        if (getIntent() != null && actionMaj().equals(getIntent().getAction())) etatInstallation(getIntent());
    }

    /* L'état de l'installation revient ici (launchMode singleTask). */
    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        if (intent != null && actionMaj().equals(intent.getAction())) etatInstallation(intent);
    }

    @Override
    protected void onSaveInstanceState(Bundle sortie) {
        super.onSaveInstanceState(sortie);
        if (web != null) web.saveState(sortie);
    }

    /* Quand on quitte l'app, on force l'écriture en attente (la page attend
       350 ms après chaque modification avant d'enregistrer), puis on envoie
       sur GitHub si la synchronisation est configurée (sync.js). */
    @Override
    protected void onPause() {
        super.onPause();
        if (web != null) web.evaluateJavascript(
            "try{if(typeof ecrireDonnees==='function'&&SAUVE.sale)ecrireDonnees()}catch(e){}"
            + "try{if(typeof Sync!=='undefined'&&Sync.conf())Sync.synchroniser('pause')}catch(e){}", null);
    }

    /* Retour : on remonte l'historique de la page ; au bout, l'app passe en
       arrière-plan au lieu de se fermer, pour ne pas couper un import en cours. */
    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else moveTaskToBack(true);
    }

    /* ------------------------------------------------------------ données */

    private String revision() {
        if (!donnees.exists()) return "0";
        return donnees.lastModified() + "-" + donnees.length();
    }

    private WebResourceResponse lireDonnees() {
        byte[] corps;
        String rev;
        synchronized (verrou) {
            rev = revision();
            corps = "{}".getBytes(UTF8);
            if (donnees.exists()) {
                FileInputStream in = null;
                try {
                    in = new FileInputStream(donnees);
                    byte[] b = new byte[(int) donnees.length()];
                    int lu = 0, n;
                    while (lu < b.length && (n = in.read(b, lu, b.length - lu)) > 0) lu += n;
                    if (lu > 0) corps = b;
                } catch (IOException e) {
                    return reponse(500, "text/plain", "lecture impossible".getBytes(UTF8), null);
                } finally {
                    fermer(in);
                }
            }
        }
        Map<String, String> h = new HashMap<String, String>();
        h.put("X-Revision", rev);
        return reponse(200, "application/json", corps, h);
    }

    /** Écriture atomique, avec le même contrôle de révision que serveur.py. */
    private String ecrireDonnees(String corps, String base) {
        String t = corps == null ? "" : corps.trim();
        if (t.length() < 3 || t.charAt(0) != '{' || t.charAt(t.length() - 1) != '}')
            return "{\"status\":400}";
        synchronized (verrou) {
            String avant = revision();
            if (base != null && base.length() > 0 && !base.equals(avant))
                return "{\"status\":409,\"rev\":\"" + avant + "\"}";
            File tmp = new File(getFilesDir(), "donnees.json.tmp");
            FileOutputStream out = null;
            try {
                out = new FileOutputStream(tmp);
                out.write(corps.getBytes(UTF8));
                out.getFD().sync();
                out.close();
                out = null;
                if (!tmp.renameTo(donnees)) throw new IOException("renommage");
                /* même taille au même instant : on force une révision différente */
                if (revision().equals(avant)) donnees.setLastModified(donnees.lastModified() + 1000);
            } catch (IOException e) {
                fermer(out);
                tmp.delete();
                return "{\"status\":500}";
            }
            return "{\"status\":200,\"rev\":\"" + revision() + "\"}";
        }
    }

    /* ------------------------------------------------------------ pont JS */

    class Pont {
        private boolean autorise() { return HOTE.equals(hotePage); }

        @JavascriptInterface
        public String ecrire(String corps, String base) {
            if (!autorise()) return "{\"status\":403}";
            return ecrireDonnees(corps, base);
        }

        /** Export d'un fichier (PGN d'un répertoire) : Android demande où l'enregistrer. */
        @JavascriptInterface
        public void enregistrer(final String nom, final String type, final String texte) {
            if (!autorise()) return;
            runOnUiThread(new Runnable() {
                public void run() {
                    exportTexte = texte;
                    Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                    i.addCategory(Intent.CATEGORY_OPENABLE);
                    i.setType(type == null || type.length() == 0 ? "application/octet-stream" : type);
                    i.putExtra(Intent.EXTRA_TITLE, nom);
                    try {
                        startActivityForResult(i, REQ_EXPORT);
                    } catch (ActivityNotFoundException e) {
                        exportTexte = null;
                        Toast.makeText(MainActivity.this, getString(R.string.aucune_appli),
                            Toast.LENGTH_LONG).show();
                    }
                }
            });
        }

        /** Télécharge l'APK d'une release GitHub et lance son installation. */
        @JavascriptInterface
        public void installerMaj(final String adresse) {
            if (!autorise()) return;
            if (!adresseRelease(adresse)) { echecMaj(4, "adresse refusée"); return; }
            if (majEnCours) return;
            majEnCours = true;
            new Thread(new Runnable() {
                public void run() {
                    try {
                        installer(telecharger(adresse));
                    } catch (Exception e) {
                        echecMaj(1, e.getMessage());
                    } finally {
                        majEnCours = false;
                    }
                }
            }).start();
        }

        /** Android 8 et plus : l'utilisateur a-t-il déjà permis à l'appli d'installer des applis ? */
        @JavascriptInterface
        public boolean peutInstaller() {
            if (Build.VERSION.SDK_INT < 26) return true;
            try {
                Object pm = getPackageManager();
                return (Boolean) pm.getClass().getMethod("canRequestPackageInstalls").invoke(pm);
            } catch (Exception e) {
                return true;
            }
        }
    }

    /* ------------------------------------------------------------ mise à jour */

    private String actionMaj() { return getPackageName() + ".MAJ"; }

    /** Seulement une pièce jointe de release GitHub, en https. */
    static boolean adresseRelease(String adresse) {
        if (adresse == null) return false;
        Uri u = Uri.parse(adresse);
        if (!"https".equals(u.getScheme()) || !"github.com".equals(u.getHost())) return false;
        java.util.List<String> p = u.getPathSegments();
        if (p.size() < 5 || !"releases".equals(p.get(2)) || !"download".equals(p.get(3))) return false;
        String depot = (p.get(0) + "/" + p.get(1)).toLowerCase(java.util.Locale.ROOT);
        for (String s : p) if (s.equals("..") || s.equals(".")) return false;
        return DEPOT.equals(depot) && p.get(p.size() - 1).toLowerCase(java.util.Locale.ROOT).endsWith(".apk");
    }

    /** GitHub renvoie vers son stockage : on suit les redirections, en https seulement. */
    private File telecharger(String adresse) throws IOException {
        File f = new File(getCacheDir(), "maj.apk");
        HttpURLConnection c = null;
        InputStream in = null;
        OutputStream out = null;
        try {
            URL u = new URL(adresse);
            for (int sauts = 0; ; sauts++) {
                c = (HttpURLConnection) u.openConnection();
                c.setInstanceFollowRedirects(false);
                c.setConnectTimeout(20000);
                c.setReadTimeout(30000);
                c.setRequestProperty("Accept", "application/octet-stream");
                int code = c.getResponseCode();
                if (code >= 300 && code < 400 && sauts < 6) {
                    String loc = c.getHeaderField("Location");
                    c.disconnect();
                    if (loc == null) throw new IOException("redirection sans adresse");
                    u = new URL(u, loc);
                    if (!"https".equals(u.getProtocol())) throw new IOException("redirection hors https");
                    continue;
                }
                if (code != 200) throw new IOException("HTTP " + code);
                break;
            }
            long total = c.getContentLength();
            if (total > TAILLE_MAX_APK) throw new IOException("fichier trop gros");
            in = c.getInputStream();
            out = new FileOutputStream(f);
            byte[] b = new byte[64 * 1024];
            long fait = 0, signale = 0;
            int n;
            while ((n = in.read(b)) > 0) {
                out.write(b, 0, n);
                fait += n;
                if (fait > TAILLE_MAX_APK) throw new IOException("fichier trop gros");
                if (fait - signale >= 256 * 1024) {
                    signale = fait;
                    js("Maj.progression(" + fait + "," + total + ")");
                }
            }
            out.close();
            out = null;
            js("Maj.progression(" + fait + "," + (total > 0 ? total : fait) + ")");
            return f;
        } catch (IOException e) {
            f.delete();
            throw e;
        } finally {
            fermer(in);
            fermer(out);
            if (c != null) c.disconnect();
        }
    }

    /** Remet l'APK à Android ; la réponse arrive dans onNewIntent (etatInstallation). */
    private void installer(File f) throws IOException {
        PackageInstaller pi = getPackageManager().getPackageInstaller();
        PackageInstaller.SessionParams p = new PackageInstaller.SessionParams(
            PackageInstaller.SessionParams.MODE_FULL_INSTALL);
        p.setAppPackageName(getPackageName());   // refuse tout autre paquet
        p.setSize(f.length());
        int id = pi.createSession(p);
        PackageInstaller.Session s = pi.openSession(id);
        InputStream in = null;
        OutputStream out = null;
        try {
            out = s.openWrite("maj.apk", 0, f.length());
            in = new FileInputStream(f);
            byte[] b = new byte[64 * 1024];
            int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            s.fsync(out);
            out.close();
            out = null;
            Intent retour = new Intent(this, MainActivity.class).setAction(actionMaj());
            int drapeaux = PendingIntent.FLAG_UPDATE_CURRENT;
            if (Build.VERSION.SDK_INT >= 31) drapeaux |= 0x02000000;   // FLAG_MUTABLE : Android y ajoute l'état
            PendingIntent pe = PendingIntent.getActivity(this, 7, retour, drapeaux);
            s.commit(pe.getIntentSender());
        } catch (IOException | RuntimeException e) {
            s.abandon();
            throw e;
        } finally {
            fermer(in);
            fermer(out);
            s.close();
            f.delete();
        }
    }

    private void etatInstallation(Intent intent) {
        int st = intent.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
        if (st == PackageInstaller.STATUS_PENDING_USER_ACTION) {
            Intent confirmer = (Intent) intent.getParcelableExtra(Intent.EXTRA_INTENT);
            if (confirmer == null) { echecMaj(1, "pas d'écran de confirmation"); return; }
            try {
                startActivity(confirmer);
                js("Maj.confirmation()");
            } catch (ActivityNotFoundException e) {
                echecMaj(1, e.getMessage());
            }
            return;
        }
        if (st == PackageInstaller.STATUS_SUCCESS) return;    // Android relance la nouvelle version
        int code = st == PackageInstaller.STATUS_FAILURE_ABORTED ? 3
            : st == PackageInstaller.STATUS_FAILURE_INVALID ? 4
            : st == PackageInstaller.STATUS_FAILURE_CONFLICT || st == PackageInstaller.STATUS_FAILURE_INCOMPATIBLE ? 5
            : st == PackageInstaller.STATUS_FAILURE_STORAGE ? 6 : 1;
        echecMaj(code, intent.getStringExtra(PackageInstaller.EXTRA_STATUS_MESSAGE));
    }

    /** L'échec à la page (bandeau), et en message Android si la page n'est pas là. */
    private void echecMaj(final int code, final String detail) {
        final String d = detail == null ? "" : detail;
        js("Maj.echec(" + code + "," + JSONObject.quote(d) + ")");
        if (code != 3) runOnUiThread(new Runnable() {
            public void run() {
                Toast.makeText(MainActivity.this, getString(R.string.maj_echec, d), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void js(final String code) {
        runOnUiThread(new Runnable() {
            public void run() {
                if (web != null) web.evaluateJavascript("try{" + code + "}catch(e){}", null);
            }
        });
    }

    @Override
    protected void onActivityResult(int code, int resultat, Intent data) {
        if (code == REQ_FICHIER) {
            if (choixFichier != null)
                choixFichier.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultat, data));
            choixFichier = null;
            return;
        }
        if (code == REQ_EXPORT) {
            String texte = exportTexte;
            exportTexte = null;
            if (resultat != RESULT_OK || data == null || data.getData() == null || texte == null) return;
            OutputStream out = null;
            try {
                out = getContentResolver().openOutputStream(data.getData());
                out.write(texte.getBytes(UTF8));
                Toast.makeText(this, getString(R.string.enregistre), Toast.LENGTH_SHORT).show();
            } catch (Exception e) {
                Toast.makeText(this, getString(R.string.echec_enregistrement), Toast.LENGTH_LONG).show();
            } finally {
                fermer(out);
            }
            return;
        }
        super.onActivityResult(code, resultat, data);
    }

    /* ------------------------------------------------------------ WebView */

    class Client extends WebViewClient {
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest req) {
            Uri u = req.getUrl();
            if (!HOTE.equals(u.getHost())) return null;          // le reste passe par le réseau
            String chemin = u.getPath();
            if (chemin == null || chemin.length() == 0 || chemin.equals("/")) chemin = "/index.html";
            if (chemin.equals("/api/donnees")) {
                if ("GET".equalsIgnoreCase(req.getMethod())) return lireDonnees();
                return reponse(405, "text/plain", "via PontAndroid".getBytes(UTF8), null);
            }
            if (chemin.contains("..")) return reponse(404, "text/plain", new byte[0], null);
            try {
                InputStream in = getAssets().open("app" + chemin);
                Map<String, String> h = new HashMap<String, String>();
                h.put("Cache-Control", "no-cache");
                String t = type(chemin);
                return new WebResourceResponse(t, texte(t) ? "utf-8" : null, 200, "OK", h, in);
            } catch (IOException e) {
                return reponse(404, "text/plain", "introuvable".getBytes(UTF8), null);
            }
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView v, String url) {
            Uri u = Uri.parse(url);
            String hote = u.getHost();
            String schema = u.getScheme();
            if (HOTE.equals(hote)) return false;
            /* la connexion Lichess (OAuth) se fait dans l'app, pour revenir ici ensuite */
            if (hote != null && (hote.equals("lichess.org") || hote.endsWith(".lichess.org"))) return false;
            if ("http".equals(schema) || "https".equals(schema) || "mailto".equals(schema)) {
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (ActivityNotFoundException e) { /* rien pour l'ouvrir */ }
            }
            return true;
        }

        @Override
        public void onPageStarted(WebView v, String url, android.graphics.Bitmap icone) {
            hotePage = url == null ? null : Uri.parse(url).getHost();
        }
    }

    class Chrome extends WebChromeClient {
        @Override
        public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> rappel, FileChooserParams p) {
            if (choixFichier != null) choixFichier.onReceiveValue(null);
            choixFichier = rappel;
            Intent i = new Intent(Intent.ACTION_GET_CONTENT);
            i.addCategory(Intent.CATEGORY_OPENABLE);
            i.setType("*/*");
            try {
                startActivityForResult(Intent.createChooser(i, getString(R.string.choisir_pgn)), REQ_FICHIER);
            } catch (ActivityNotFoundException e) {
                choixFichier = null;
                return false;
            }
            return true;
        }
    }

    /* ------------------------------------------------------------ outils */

    static String type(String chemin) {
        String c = chemin.toLowerCase();
        if (c.endsWith(".html")) return "text/html";
        if (c.endsWith(".js") || c.endsWith(".mjs")) return "application/javascript";
        if (c.endsWith(".css")) return "text/css";
        if (c.endsWith(".json")) return "application/json";
        if (c.endsWith(".wasm")) return "application/wasm";
        if (c.endsWith(".svg")) return "image/svg+xml";
        if (c.endsWith(".png")) return "image/png";
        if (c.endsWith(".mp3")) return "audio/mpeg";
        if (c.endsWith(".ogg")) return "audio/ogg";
        if (c.endsWith(".wav")) return "audio/wav";
        return "application/octet-stream";
    }

    static WebResourceResponse reponse(int code, String type, byte[] corps, Map<String, String> h) {
        if (h == null) h = new HashMap<String, String>();
        h.put("Cache-Control", "no-store");
        String raison = code == 200 ? "OK" : code == 404 ? "Not Found" : code == 405 ? "Method Not Allowed"
            : code == 409 ? "Conflict" : "Error";
        return new WebResourceResponse(type, texte(type) ? "utf-8" : null, code, raison, h,
            new ByteArrayInputStream(corps));
    }

    static boolean texte(String type) {
        return type.startsWith("text/") || type.endsWith("json") || type.endsWith("javascript")
            || type.endsWith("svg+xml");
    }

    static void fermer(java.io.Closeable c) {
        if (c == null) return;
        try { c.close(); } catch (IOException e) { /* rien */ }
    }

    /** Barre d'état assortie à l'en-tête de l'app, en clair comme en sombre. */
    private void couleursBarres() {
        boolean nuit = (getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK)
            == Configuration.UI_MODE_NIGHT_YES;
        Window w = getWindow();
        w.setStatusBarColor(Color.parseColor(nuit ? "#1d2118" : "#f8f7f2"));
        w.setNavigationBarColor(Color.parseColor(nuit ? "#15180f" : "#efeee7"));
        if (!nuit) {
            int f = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            if (Build.VERSION.SDK_INT >= 26) f |= 0x10;   // SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
            w.getDecorView().setSystemUiVisibility(f);
        }
    }
}
