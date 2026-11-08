#!/bin/bash
# Construit l'APK de Chaxmat à partir de l'application web.
#
#   ./construire_apk.sh [sortie.apk]
#
# L'APK contient l'application web de ../entraineur/app, sans aucune donnée :
# au premier lancement, l'appli est vide (pseudo, niveau, répertoires
# d'exemple), ou récupère tes données par la synchronisation GitHub.
#
# Outils nécessaires (Linux, par exemple Ubuntu 24.04) :
#   apt install openjdk-17-jdk-headless aapt dalvik-exchange zipalign apksigner android-sdk-platform-23
#
# Signature : la clé est créée au premier passage dans cle/entraineur.p12
# (dossier ignoré par git : ne la publie jamais). Garde-la : Android n'accepte
# une mise à jour que si elle est signée avec la même clé ; sinon il faut
# désinstaller, ce qui efface les données de l'appli sur le téléphone.
# Le mot de passe de la clé est lu dans MDP_CLE, ou demandé au clavier.
set -euo pipefail

ICI="$(cd "$(dirname "$0")" && pwd)"
SRC="$ICI/source"
APP="$ICI/../entraineur/app"
SORTIE="${1:-$ICI/Chaxmat.apk}"
ANDROID_JAR="${ANDROID_JAR:-/usr/lib/android-sdk/platforms/android-23/android.jar}"
CLE="$ICI/cle/entraineur.p12"

if [ -z "${MDP_CLE:-}" ]; then
  read -r -s -p "Mot de passe de la clé de signature : " MDP_CLE; echo
fi
[ ${#MDP_CLE} -ge 6 ] || { echo "Le mot de passe doit faire au moins 6 caractères."; exit 1; }

T="$(mktemp -d)"
trap 'rm -rf "$T"' EXIT
mkdir -p "$T/assets/app" "$T/classes" "$T/gen"

echo "1/6 Application web"
cp -R "$APP/." "$T/assets/app/"
find "$T/assets" -name ".DS_Store" -delete
cp "$SRC/android-pont.js" "$T/assets/app/"
python3 - "$T/assets/app/index.html" <<'PY'
import sys
p = sys.argv[1]
s = open(p, encoding="utf-8").read()
balise = '<meta charset="utf-8">'
assert s.count(balise) == 1, "balise meta charset introuvable dans index.html"
s = s.replace(balise, balise + '\n<script src="android-pont.js"></script>', 1)
open(p, "w", encoding="utf-8").write(s)
PY

# minutes écoulées depuis 1970 : toujours croissant, même pour deux versions la même heure
VC="$(( $(date +%s) / 60 ))"
# le nom de version : celui de version.js, que l'appli compare aux releases GitHub
VN="$(sed -n "s/.*version: *'\([^']*\)'.*/\1/p" "$APP/version.js" | head -n 1)"
[ -n "$VN" ] || { echo "version introuvable dans $APP/version.js"; exit 1; }
echo "2/6 Ressources (version $VN, code $VC)"
aapt package -f -m -J "$T/gen" -M "$SRC/AndroidManifest.xml" -S "$SRC/res" -A "$T/assets" \
  -I "$ANDROID_JAR" --version-code "$VC" --version-name "$VN" -F "$T/base.apk"

echo "3/6 Compilation Java"
javac -nowarn -Xlint:-options -source 8 -target 8 -bootclasspath "$ANDROID_JAR" -encoding UTF-8 \
  -d "$T/classes" $(find "$SRC/java" "$T/gen" -name "*.java")

echo "4/6 Dex"
dalvik-exchange --dex --min-sdk-version=24 --output="$T/classes.dex" "$T/classes"
(cd "$T" && aapt add base.apk classes.dex >/dev/null)

echo "5/6 Alignement"
zipalign -f -p 4 "$T/base.apk" "$T/aligne.apk"

echo "6/6 Signature"
if [ ! -f "$CLE" ]; then
  mkdir -p "$(dirname "$CLE")"
  keytool -genkeypair -keystore "$CLE" -storetype PKCS12 -storepass "$MDP_CLE" -alias entraineur \
    -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Chaxmat" 2>/dev/null
  echo "   nouvelle clé : $CLE (à garder, à ne jamais publier)"
fi
apksigner sign --ks "$CLE" --ks-pass "pass:$MDP_CLE" --out "$SORTIE" "$T/aligne.apk"
apksigner verify "$SORTIE"
echo "OK : $SORTIE ($(du -h "$SORTIE" | cut -f1))"
