#!/usr/bin/env python3
"""Mini-serveur local de Chaxmat, l'entraineur d'echecs.

Sert le dossier app/ et deux routes, qui refusent tout autre site que la
page elle-meme :
- /api/donnees, pour lire (GET) et ecrire (POST) donnees/donnees.json ; elle
  refuse d'ecraser le fichier si un autre onglet l'a modifie entre-temps ;
- /api/maj, pour la mise a jour : GET dit si l'appli vient d'un clone git,
  POST avance le clone jusqu'a la version publiee demandee (un tag vAAAA.MM.JJ),
  en avance rapide seulement (tes donnees, ignorees par git, restent).
Rien ne sort de ta machine, sauf les appels que le navigateur fait aux API
publiques de chess.com et de Lichess, a GitHub pour savoir si une nouvelle
version est publiee, et a GitHub encore si tu actives la synchronisation.

Lancement : python3 serveur.py
  macOS   : double-clic sur "Ouvrir l'entraineur.command"
  Windows : double-clic sur "ouvrir-entraineur.bat"
  Linux   : ./ouvrir-entraineur.sh

Variables d'environnement, pour les tests surtout :
  CHAXMAT_DONNEES    dossier des donnees (defaut : donnees/ a cote de ce fichier)
  CHAXMAT_PORT       premier port essaye (defaut : 8787)
  CHAXMAT_NAVIGATEUR 0 pour ne pas ouvrir le navigateur
"""
import hashlib, http.server, socketserver, json, os, re, sys, threading, webbrowser, socket, subprocess
from urllib.parse import urlsplit, parse_qs

BASE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(BASE, "app")
DATA_DIR = os.environ.get("CHAXMAT_DONNEES") or os.path.join(BASE, "donnees")
DATA = os.path.join(DATA_DIR, "donnees.json")
os.makedirs(DATA_DIR, exist_ok=True)

# Un corps plus gros n'est pas des donnees d'entraineur : on refuse au lieu
# de tout charger en memoire. (2 Mo pour ~500 parties analysees.)
TAILLE_MAX = 64 * 1024 * 1024
# Le controle de revision et l'ecriture se font d'un seul tenant : deux
# onglets qui enregistrent en meme temps ne peuvent pas passer tous les deux.
VERROU = threading.Lock()
# Une seule mise a jour a la fois.
VERROU_MAJ = threading.Lock()
# Les versions publiees : v2026.11.09, v2026.11.09.1...
TAG = re.compile(r"^v\d{4}\.\d{2}\.\d{2}(\.\d{1,3})?$")

MIMES = {
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".wasm": "application/wasm",
    ".svg": "image/svg+xml",
}


def empreinte(octets):
    """Revision d'un contenu ; "0" pour un fichier absent ou vide."""
    return hashlib.blake2b(octets, digest_size=8).hexdigest() if octets else "0"


def revision():
    """Identifiant de la version du fichier sur le disque : l'empreinte de son
    contenu. Un onglet reste ouvert depuis longtemps detecte toute ecriture,
    meme sur un disque dont l'horloge des fichiers est grossiere (exFAT : 2 s),
    la ou date et taille pouvaient ne pas bouger."""
    try:
        with open(DATA, "rb") as f:
            return empreinte(f.read())
    except OSError:
        return "0"


def git(*args, timeout=30):
    """git dans le dossier de l'entraineur, sans jamais attendre une saisie
    (mot de passe, phrase de passe SSH) : on echoue plutot que de bloquer."""
    env = dict(os.environ, GIT_TERMINAL_PROMPT="0")
    env.setdefault("GIT_SSH_COMMAND", "ssh -o BatchMode=yes")
    return subprocess.run(["git", "-C", BASE] + list(args), capture_output=True, text=True,
                          timeout=timeout, env=env, stdin=subprocess.DEVNULL)


def etat_git():
    try:
        r = git("rev-parse", "--is-inside-work-tree", timeout=10)
    except (OSError, subprocess.SubprocessError):
        return {"git": False}
    return {"git": r.returncode == 0 and r.stdout.strip() == "true"}


def mettre_a_jour(tag):
    """Avance le clone jusqu'a la version publiee `tag`, et seulement elle :
    pas ce qui a ete pousse sur la branche depuis. Avance rapide uniquement :
    jamais de fusion ni d'ecrasement. S'il y a des modifications locales en
    conflit, git refuse et on rend son message."""
    if not TAG.match(tag or ""):
        return 400, {"ok": False, "sortie": "version invalide : %r" % (tag,)}
    if not etat_git()["git"]:
        return 400, {"ok": False, "sortie": "pas un clone git"}
    try:
        avant = git("rev-parse", "HEAD").stdout.strip()
        f = git("fetch", "--tags", "origin", timeout=120)
        if f.returncode != 0:
            return 500, {"ok": False, "sortie": (f.stdout + f.stderr)[-2000:]}
        r = git("merge", "--ff-only", "refs/tags/" + tag, timeout=60)
        apres = git("rev-parse", "HEAD").stdout.strip()
    except subprocess.TimeoutExpired:
        return 500, {"ok": False, "sortie": "git trop long (plus de 2 minutes)"}
    except (OSError, subprocess.SubprocessError) as e:
        return 500, {"ok": False, "sortie": str(e)}
    fichiers = []
    if avant and apres and avant != apres:
        fichiers = git("diff", "--name-only", avant, apres).stdout.split()
    return (200 if r.returncode == 0 else 500), {
        "ok": r.returncode == 0, "sortie": (r.stdout + r.stderr)[-2000:],
        "change": avant != apres, "fichiers": len(fichiers),
        "serveur": any(f.endswith("entraineur/serveur.py") for f in fichiers),
    }


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=WEB, **kw)

    def log_message(self, fmt, *args):
        if "/api/" in (self.path or ""):
            sys.stderr.write("  %s %s\n" % (self.command, self.path))

    def guess_type(self, path):
        ext = os.path.splitext(path)[1].lower()
        return MIMES.get(ext) or super().guess_type(path)

    def end_headers(self):
        # le moteur wasm a besoin d'etre servi sans cache pendant le dev
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def hote_local(self):
        """Refuse les requetes venues d'un autre site. Le serveur n'ecoute que
        sur 127.0.0.1, mais une page web ouverte dans le navigateur pourrait
        sinon ecrire dans tes donnees (ou les lire par rebond DNS)."""
        port = self.server.server_address[1]
        permis = {"127.0.0.1:%d" % port, "localhost:%d" % port}
        if (self.headers.get("Host") or "") not in permis:
            return False
        origine = self.headers.get("Origin")
        if origine and origine not in {"http://" + h for h in permis}:
            return False
        return True

    def lire_corps(self):
        """Le corps de la requete, ou (None, code d'erreur) : longueur absente,
        illisible, negative ou trop grande."""
        try:
            n = int(self.headers.get("Content-Length") or "")
        except ValueError:
            return None, 411
        if n > TAILLE_MAX:
            return None, 413
        if n <= 0:
            return None, 400
        return self.rfile.read(n), 200

    def do_GET(self):
        if urlsplit(self.path).path == "/api/maj":
            if not self.hote_local():
                self.send_error(403)
                return
            self.repondre_json(200, etat_git())
            return
        if urlsplit(self.path).path == "/api/donnees":
            if not self.hote_local():
                self.send_error(403)
                return
            with VERROU:
                payload = b""
                if os.path.exists(DATA):
                    with open(DATA, "rb") as f:
                        payload = f.read()
                rev = empreinte(payload)
            payload = payload or b"{}"
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("X-Revision", rev)
            self.end_headers()
            self.wfile.write(payload)
            return
        return super().do_GET()

    def repondre_json(self, code, obj):
        corps = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(corps)))
        self.end_headers()
        self.wfile.write(corps)

    def do_POST(self):
        url = urlsplit(self.path)
        if url.path not in ("/api/donnees", "/api/maj"):
            self.send_error(404)
            return
        if not self.hote_local():
            self.send_error(403)
            return
        if url.path == "/api/maj":
            # seulement depuis la page : un formulaire d'un autre site ne peut
            # pas envoyer ce type de contenu sans une requete preliminaire
            if not (self.headers.get("Content-Type") or "").startswith("application/json"):
                self.send_error(415)
                return
            raw, code = self.lire_corps()
            if raw is None:
                self.send_error(code)
                return
            try:
                demande = json.loads(raw.decode("utf-8"))
            except ValueError:
                self.send_error(400, "JSON invalide")
                return
            if not VERROU_MAJ.acquire(blocking=False):
                self.repondre_json(409, {"ok": False, "sortie": "mise a jour deja en cours"})
                return
            try:
                code, rep = mettre_a_jour(demande.get("tag") if isinstance(demande, dict) else None)
            finally:
                VERROU_MAJ.release()
            self.repondre_json(code, rep)
            return
        raw, code = self.lire_corps()
        if raw is None:
            self.send_error(code)
            return
        try:
            obj = json.loads(raw.decode("utf-8"))
        except ValueError as e:
            self.send_error(400, "JSON invalide: %s" % e)
            return
        if not isinstance(obj, dict) or not obj:
            self.send_error(400, "Donnees vides : rien n'est ecrit.")
            return
        # La page envoie la revision qu'elle a lue. Si le fichier a change
        # depuis (un autre onglet a enregistre), on refuse au lieu d'ecraser.
        base = (parse_qs(url.query).get("base") or [None])[0]
        texte = json.dumps(obj, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        with VERROU:
            actuelle = revision()
            if base is not None and base != actuelle:
                self.repondre_json(409, {"rev": actuelle})
                return
            tmp = DATA + ".tmp"
            with open(tmp, "wb") as f:
                f.write(texte)
                f.flush()
                # sur le disque avant le renommage : une coupure de courant
                # laisse l'ancien fichier ou le nouveau, jamais un fichier vide
                os.fsync(f.fileno())
            os.replace(tmp, DATA)
            rev = empreinte(texte)
        self.repondre_json(200, {"rev": rev})


class Serveur(socketserver.ThreadingMixIn, socketserver.TCPServer):
    """Une requete par fil : une mise a jour git (jusqu'a 2 minutes)
    n'empeche plus d'enregistrer ni de charger la page."""
    daemon_threads = True
    allow_reuse_address = True


def port_libre(depart=8787):
    for p in range(depart, depart + 40):
        with socket.socket() as s:
            try:
                s.bind(("127.0.0.1", p))
                return p
            except OSError:
                continue
    return 0


def main():
    port = port_libre(int(os.environ.get("CHAXMAT_PORT") or 8787))
    if not port:
        print("Aucun port libre trouve a partir de 8787. / No free port from 8787.")
        sys.exit(1)
    url = "http://127.0.0.1:%d/" % port
    with Serveur(("127.0.0.1", port), Handler) as httpd:
        print("=" * 58)
        print("  Chaxmat - entraineur d'echecs / chess trainer")
        print("  " + url)
        print("  Donnees / Data : %s" % DATA)
        print("  Ferme cette fenetre (ou Ctrl-C) pour arreter.")
        print("  Close this window (or press Ctrl-C) to stop.")
        print("=" * 58, flush=True)
        if os.environ.get("CHAXMAT_NAVIGATEUR") != "0":
            threading.Timer(0.8, lambda: webbrowser.open(url)).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nArret. / Stopped.")


if __name__ == "__main__":
    main()
