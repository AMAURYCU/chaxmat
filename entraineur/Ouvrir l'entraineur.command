#!/bin/bash
# Double-clique ce fichier pour ouvrir l'entraineur d'ouvertures.
cd "$(dirname "$0")" || exit 1

PY=""
for c in python3 /usr/bin/python3 /usr/local/bin/python3 /opt/homebrew/bin/python3 python; do
  if command -v "$c" >/dev/null 2>&1; then
    v="$("$c" -c 'import sys;print(sys.version_info[0])' 2>/dev/null)"
    if [ "$v" = "3" ]; then PY="$c"; break; fi
  fi
done

if [ -n "$PY" ]; then
  echo "Demarrage de l'entraineur avec $PY... / Starting Chess Coach with $PY..."
  exec "$PY" serveur.py
fi

cat <<'MSG'
------------------------------------------------------------------
Python 3 n'est pas installe sur ce Mac.

J'ouvre quand meme l'application, en mode simplifie :
  - import des parties : OK
  - repertoire et entrainement : OK
  - analyse Stockfish (gaffes, precision) : indisponible

Pour debloquer l'analyse complete, installe les outils Apple en
tapant une seule fois dans le Terminal :

    xcode-select --install

puis relance ce fichier.
------------------------------------------------------------------
Python 3 is not installed on this Mac.

The app opens anyway, in simplified mode:
  - importing games: OK
  - repertoires and training: OK
  - Stockfish analysis (blunders, accuracy): unavailable

To unlock the full analysis, install Apple's tools by typing
this once in the Terminal:

    xcode-select --install

then run this file again.
------------------------------------------------------------------
MSG
sleep 3
open "app/index.html"
