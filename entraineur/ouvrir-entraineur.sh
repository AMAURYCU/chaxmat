#!/bin/sh
# Linux (et tout système avec Python 3) : lance le serveur local de l'entraîneur
# puis ouvre le navigateur. Fermer le terminal (ou Ctrl-C) arrête le serveur.
cd "$(dirname "$0")" || exit 1
for c in python3 python; do
  if command -v "$c" >/dev/null 2>&1 && "$c" -c 'import sys; sys.exit(sys.version_info[0] != 3)' 2>/dev/null; then
    exec "$c" serveur.py
  fi
done
echo "Python 3 est introuvable. Installe-le (par exemple : sudo apt install python3), puis relance ce fichier."
echo "Python 3 not found. Install it (for example: sudo apt install python3), then run this file again."
exit 1
