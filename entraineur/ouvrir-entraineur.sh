#!/bin/sh
# Linux (et tout système avec Python 3) : lance le serveur local de l'entraîneur
# puis ouvre le navigateur. Fermer le terminal (ou Ctrl-C) arrête le serveur.
# Dépendances : requirements.txt, à la racine du dépôt.
cd "$(dirname "$0")" || exit 1

# Lancé par double-clic, le terminal se ferme à la fin : on attend Entrée
# pour laisser le temps de lire le message.
attendre() {
  if [ -t 0 ] && [ -t 1 ]; then
    printf '%s' "Appuie sur Entree pour fermer. / Press Enter to close. "
    read -r _
  fi
}

# Commande d'installation de Python selon la distribution.
installer() {
  if command -v apt-get >/dev/null 2>&1; then echo "sudo apt install python3"
  elif command -v dnf >/dev/null 2>&1; then echo "sudo dnf install python3"
  elif command -v pacman >/dev/null 2>&1; then echo "sudo pacman -S python"
  elif command -v zypper >/dev/null 2>&1; then echo "sudo zypper install python3"
  else echo "https://www.python.org/downloads/"
  fi
}

if [ ! -f serveur.py ] || [ ! -f app/index.html ]; then
  echo "serveur.py ou app/index.html est introuvable : ce fichier doit rester dans le dossier entraineur, a cote de serveur.py et du dossier app."
  echo "serveur.py or app/index.html is missing: this file must stay in the entraineur folder, next to serveur.py and the app folder."
  attendre
  exit 1
fi

# Un Python convient s'il est en version 3.7 ou plus et s'il a les modules
# dont serveur.py a besoin. Le test affiche la version puis les modules
# manquants, et sort avec 0 (bon), 3 (trop ancien) ou 4 (incomplet).
# Il tourne aussi sous Python 2, pour pouvoir dire que c'est trop ancien.
VERIF="import sys
v = sys.version_info
sys.stdout.write('%d.%d' % (v[0], v[1]))
if v < (3, 7): sys.exit(3)
import importlib.util as u
m = [x for x in ('http', 'socketserver', 'json', 'socket', 'threading', 'webbrowser', 'urllib') if u.find_spec(x) is None]
sys.stdout.write(' ' + ', '.join(m))
sys.exit(4 if m else 0)"

PY=""; VIEUX=""; INCOMPLET=""; MANQUE=""
for c in python3 python; do
  command -v "$c" >/dev/null 2>&1 || continue
  out="$("$c" -c "$VERIF" 2>/dev/null)"
  case $? in
    0) PY="$c"; break ;;
    3) [ -n "$VIEUX" ] || VIEUX="Python ${out%% *} ($(command -v "$c"))" ;;
    4) [ -n "$INCOMPLET" ] || { INCOMPLET="Python ${out%% *} ($(command -v "$c"))"; MANQUE="${out#* }"; } ;;
  esac
done

if [ -n "$PY" ]; then
  if ! "$PY" -c "import webbrowser; webbrowser.get()" >/dev/null 2>&1; then
    echo "Aucun navigateur trouve : ouvre a la main l'adresse affichee ci-dessous, dans un Chrome, Chromium, Edge ou Firefox recent."
    echo "No browser found: open the address shown below by hand, in a recent Chrome, Chromium, Edge or Firefox."
  fi
  "$PY" serveur.py
  rc=$?
  [ "$rc" -eq 0 ] || attendre
  exit "$rc"
fi

CMD="$(installer)"
if [ -n "$INCOMPLET" ]; then
  echo "$INCOMPLET est installe, mais incomplet. Modules manquants : $MANQUE."
  echo "Installe la version complete ($CMD), puis relance ce fichier."
  echo "$INCOMPLET is installed but incomplete. Missing modules: $MANQUE."
  echo "Install the full version ($CMD), then run this file again."
elif [ -n "$VIEUX" ]; then
  echo "$VIEUX est trop ancien : il faut Python 3.7 ou plus recent. Mets-le a jour ($CMD), puis relance ce fichier."
  echo "$VIEUX is too old: Python 3.7 or later is required. Update it ($CMD), then run this file again."
else
  echo "Python 3 est introuvable. Installe-le ($CMD), puis relance ce fichier."
  echo "Python 3 not found. Install it ($CMD), then run this file again."
fi
attendre
exit 1
