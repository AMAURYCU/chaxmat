#!/bin/bash
# Double-clique ce fichier pour ouvrir l'entraineur d'ouvertures.
# Double-click this file to open Chess Coach.
# Dependances / dependencies : requirements.txt, a la racine du depot.
cd "$(dirname "$0")" || exit 1

if [ ! -f serveur.py ] || [ ! -f app/index.html ]; then
  cat <<'MSG'
------------------------------------------------------------------
serveur.py ou app/index.html est introuvable. Ce fichier doit rester
dans le dossier entraineur, a cote de serveur.py et du dossier app.

serveur.py or app/index.html is missing. This file must stay in the
entraineur folder, next to serveur.py and the app folder.
------------------------------------------------------------------
MSG
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

PY=""; VIEUX=""; INCOMPLET=""; MANQUE=""; VUS=" "
for c in python3 /opt/homebrew/bin/python3 /usr/local/bin/python3 /usr/bin/python3 python; do
  p="$(command -v "$c" 2>/dev/null)" || continue
  case "$VUS" in *" $p "*) continue ;; esac
  VUS="$VUS$p "
  out="$("$p" -c "$VERIF" 2>/dev/null)"
  case $? in
    0) PY="$p"; break ;;
    3) [ -n "$VIEUX" ] || VIEUX="Python ${out%% *} ($p)" ;;
    4) [ -n "$INCOMPLET" ] || { INCOMPLET="Python ${out%% *} ($p)"; MANQUE="${out#* }"; } ;;
  esac
done

if [ -n "$PY" ]; then
  echo "Demarrage de l'entraineur avec $PY... / Starting Chess Coach with $PY..."
  exec "$PY" serveur.py
fi

if [ -n "$INCOMPLET" ]; then
  PB_FR="$INCOMPLET est installe, mais incomplet.
Modules manquants : $MANQUE."
  PB_EN="$INCOMPLET is installed but incomplete.
Missing modules: $MANQUE."
  FIX_FR="Pour debloquer l'analyse complete, reinstalle Python depuis
https://www.python.org/downloads/macos/ (avec Homebrew :
brew reinstall python), puis relance ce fichier."
  FIX_EN="To unlock the full analysis, reinstall Python from
https://www.python.org/downloads/macos/ (with Homebrew:
brew reinstall python), then run this file again."
else
  if [ -n "$VIEUX" ]; then
    PB_FR="$VIEUX est trop ancien : il faut Python 3.7 ou plus recent."
    PB_EN="$VIEUX is too old: Python 3.7 or later is required."
  else
    PB_FR="Python 3 n'est pas installe sur ce Mac."
    PB_EN="Python 3 is not installed on this Mac."
  fi
  FIX_FR="Pour debloquer l'analyse complete, installe les outils Apple
(Python 3 compris) en tapant une seule fois dans le Terminal :

    xcode-select --install

ou installe Python depuis https://www.python.org/downloads/macos/,
puis relance ce fichier."
  FIX_EN="To unlock the full analysis, install Apple's tools (Python 3
included) by typing this once in the Terminal:

    xcode-select --install

or install Python from https://www.python.org/downloads/macos/,
then run this file again."
fi

cat <<MSG
------------------------------------------------------------------
$PB_FR

J'ouvre quand meme l'application, en mode simplifie :
  - import des parties : OK
  - repertoire et entrainement : OK
  - analyse Stockfish (gaffes, precision) : indisponible

$FIX_FR
------------------------------------------------------------------
$PB_EN

The app opens anyway, in simplified mode:
  - importing games: OK
  - repertoires and training: OK
  - Stockfish analysis (blunders, accuracy): unavailable

$FIX_EN
------------------------------------------------------------------
MSG
sleep 3
open "app/index.html"
