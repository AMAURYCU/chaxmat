#!/usr/bin/env python3
"""Mini-serveur local de l'entraineur d'ouvertures.

Sert le dossier app/ et deux routes, qui refusent tout autre site que la
page elle-meme :
- /api/donnees, pour lire (GET) et ecrire (POST) donnees/donnees.json ; elle
  refuse d'ecraser le fichier si un autre onglet l'a modifie entre-temps ;
- /api/maj, pour la mise a jour : GET dit si l'appli vient d'un clone git,
  POST fait "git pull --ff-only" (tes donnees, ignorees par git, restent).
Rien ne sort de ta machine, sauf les appels que le navigateur fait aux API
publiques de chess.com et de Lichess, a GitHub pour savoir si une nouvelle
version est publiee, et a GitHub encore si tu actives la synchronisation.

Lancement : python3 serveur.py
  macOS   : double-clic sur "Ouvrir l'entraineur.command"
  Windows : double-clic sur "ouvrir-entraineur.bat"
  Linux   : ./ouvrir-entraineur.sh
"""
import http.server, socketserver, json, os, sys, threading, webbrowser, socket, subprocess
from urllib.parse import urlsplit, parse_qs

BASE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(BASE, "app")
DATA_DIR = os.path.join(BASE, "donnees")
DATA = os.path.join(DATA_DIR, "donnees.json")
os.makedirs(DATA_DIR, exist_ok=True)

MIMES = {
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".wasm": "application/wasm",
    ".svg": "image/svg+xml",
}


def revision():
    """Identifiant de la version du fichier sur le disque. Change a chaque
    ecriture : un onglet reste ouvert depuis longtemps le detecte."""
    try:
        st = os.stat(DATA)
        return "%d-%d" % (st.st_mtime_ns, st.st_size)
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


def mettre_a_jour():
    """git pull --ff-only : jamais de fusion ni d'ecrasement. S'il y a des
    modifications locales en conflit, git refuse et on rend son message."""
    if not etat_git()["git"]:
        return 400, {"ok": False, "sortie": "pas un clone git"}
    try:
        avant = git("rev-parse", "HEAD").stdout.strip()
        r = git("pull", "--ff-only", timeout=120)
        apres = git("rev-parse", "HEAD").stdout.strip()
    except subprocess.TimeoutExpired:
        return 500, {"ok": False, "sortie": "git pull trop long (plus de 2 minutes)"}
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
            payload = b"{}"
            if os.path.exists(DATA):
                with open(DATA, "rb") as f:
                    payload = f.read() or b"{}"
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("X-Revision", revision())
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
            code, rep = mettre_a_jour()
            self.repondre_json(code, rep)
            return
        n = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(n)
        try:
            obj = json.loads(raw.decode("utf-8"))
        except Exception as e:
            self.send_error(400, "JSON invalide: %s" % e)
            return
        if not isinstance(obj, dict) or not obj:
            self.send_error(400, "Donnees vides : rien n'est ecrit.")
            return
        # La page envoie la revision qu'elle a lue. Si le fichier a change
        # depuis (un autre onglet a enregistre), on refuse au lieu d'ecraser.
        base = (parse_qs(url.query).get("base") or [None])[0]
        if base is not None and base != revision():
            self.repondre_json(409, {"rev": revision()})
            return
        tmp = DATA + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, indent=1)
        os.replace(tmp, DATA)
        self.repondre_json(200, {"rev": revision()})


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
    port = port_libre()
    if not port:
        print("Aucun port libre trouve entre 8787 et 8827. / No free port between 8787 and 8827.")
        sys.exit(1)
    url = "http://127.0.0.1:%d/" % port
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", port), Handler) as httpd:
        print("=" * 58)
        print("  Entraineur d'ouvertures / Chess Coach")
        print("  " + url)
        print("  Donnees / Data : %s" % DATA)
        print("  Ferme cette fenetre (ou Ctrl-C) pour arreter.")
        print("  Close this window (or press Ctrl-C) to stop.")
        print("=" * 58)
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nArret. / Stopped.")


if __name__ == "__main__":
    main()
