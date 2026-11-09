# Chaxmat sur Android

L'appli Android emballe l'application web de `../entraineur/app` dans une WebView qui
remplace le serveur local. Il n'y a ni serveur ni Terminal à lancer : l'icône
ouvre directement l'application. Elle s'appelle « Chaxmat » dans toutes les langues.

La dernière version est sur la page des
[releases](https://github.com/AMAURYCU/chaxmat/releases/latest) : télécharge
`Chaxmat.apk` sur le téléphone et ouvre-le.

## Construire l'APK

Il faut Linux avec ces paquets (exemple pour Ubuntu 24.04) :

```
sudo apt install openjdk-17-jdk-headless aapt dalvik-exchange zipalign apksigner android-sdk-platform-23
```

Puis lancer :

```
./construire_apk.sh            # écrit Chaxmat.apk dans ce dossier
```

Au premier passage, le script crée la clé de signature `cle/entraineur.p12` et demande
son mot de passe (ou le lit dans la variable `MDP_CLE`).

**Garde cette clé et ne la publie jamais** (le dossier `cle/` est ignoré par git).
Android n'accepte une mise à jour que si elle est signée avec la même clé. Sinon, il
faut désinstaller, ce qui efface les données de l'appli sur le téléphone.

L'APK ne contient aucune donnée. Au premier lancement, l'appli affiche la carte
« Bienvenue », ou récupère tes données par la synchronisation GitHub.

## Installer sur le téléphone

1. Copie l'APK sur le téléphone (Google Drive, mail, câble USB…).
2. Ouvre-le et autorise l'installation d'applis inconnues pour l'application qui
   l'ouvre.
3. Si Play Protect avertit : *Plus de détails*, puis *Installer quand même*.

Sur Samsung, le *Blocage automatique* (Paramètres → Sécurité et confidentialité)
empêche l'installation tant qu'il est activé.

Google prévoit d'exiger, à partir de 2027, que les applis installées hors Play Store
viennent de développeurs vérifiés. Il restera deux façons d'installer :

- le « parcours avancé » prévu par Android pour installer une appli non vérifiée ;
- un compte gratuit de « distribution limitée », qui couvre jusqu'à 20 appareils.

## Mises à jour

Au lancement, si le téléphone est connecté, l'appli demande à GitHub la dernière
version publiée (au plus une fois par heure). Si elle est plus récente, un bandeau
propose « Mettre à jour » : l'appli télécharge l'APK joint à la release, puis Android
affiche son écran d'installation. La première fois, Android demande d'autoriser
Chaxmat à installer des applis ; c'est seulement pour sa propre mise à jour.

Tes données restent : c'est la même appli, signée avec la même clé. Si la clé diffère
(une APK que tu as construite toi-même avec ta clé), Android refuse, et le bandeau
l'explique.

L'appli n'installe que les APK des releases de son propre dépôt (`DEPOT` dans
`MainActivity.java`, en https, sur github.com, 200 Mo au plus), et Android n'accepte que
le même paquet signé de la même clé.

## Publier une version

Pour le mainteneur du dépôt. L'appli compare sa version, écrite dans
`entraineur/app/version.js`, au nom de la dernière release du dépôt indiqué dans ce même
fichier.

1. Change `version` dans `entraineur/app/version.js`, par exemple `2026.11.15`, et
   vérifie que tout passe : `npm test` (voir le README, « Développer »).
2. Construis l'APK : `./construire_apk.sh`. Son nom de version est repris de
   `version.js`. Signe-la **avec la même clé** que les versions précédentes : sinon,
   Android refusera la mise à jour.
3. Committe et pousse.
4. Crée la release `v2026.11.15` avec l'APK en pièce jointe. Ses notes s'affichent dans
   le bandeau, sous « Nouveautés ».

   ```
   gh release create v2026.11.15 Chaxmat.apk --title 2026.11.15 --notes "Ce qui change…"
   ```

   On peut aussi passer par la page du dépôt : *Releases → Draft a new release*.

Tant que le dépôt est privé, GitHub répond « introuvable » aux applis : personne ne voit
de mise à jour.

Si tu publies ta propre version de l'appli (un fork), change le dépôt à deux endroits :
`depot` dans `entraineur/app/version.js`, et `DEPOT` (en minuscules) dans
`source/java/io/github/amaurycu/entraineur/MainActivity.java`. Sinon, l'appli refuse
d'installer tes releases.

## Ce qui change par rapport à l'ordinateur

- **Données** : stockées dans l'espace privé de l'appli. Pour avoir les mêmes données
  que sur l'ordinateur, active la synchronisation GitHub (bouton « Synchro »).
- **Sauvegarde du téléphone** : l'appli n'en fait pas partie (`allowBackup="false"`).
  Ses données contiennent tes jetons GitHub et Lichess en clair, qui partiraient sinon
  dans la sauvegarde Google. Avant de changer de téléphone, active la synchronisation :
  c'est elle qui transporte tes données.
- **Export PGN** : Android demande où enregistrer le fichier. **Import PGN** : le
  sélecteur de fichiers d'Android s'ouvre.
- **Bouton retour** : il remonte l'historique de la page, puis met l'appli en
  arrière-plan sans la fermer.
- **Mode sombre** : l'appli suit le réglage du téléphone.
- **Langue** : au premier lancement, celle du téléphone ; le menu `FR · EN` la change
  ensuite. Les messages d'Android (fichier enregistré…) suivent la langue du
  téléphone : `source/res/values/strings.xml` en anglais, `values-fr/` en français.

## Comment ça marche

La WebView affiche l'application à l'adresse `https://appassets.androidplatform.net/`.
Android réserve ce nom à cet usage : aucune requête vers lui ne quitte le téléphone,
et c'est `MainActivity` qui répond.

`MainActivity` remplace `serveur.py` :

- il sert les fichiers de l'application ;
- il sert la lecture de `/api/donnees`, avec le même contrôle de version que le
  serveur : il refuse d'écraser un fichier modifié entre-temps (409) ;
- l'écriture passe par `android-pont.js`, ajouté à la page dans l'APK seulement, car
  la WebView ne transmet pas le corps d'une requête POST interceptée.

Quand l'appli passe en arrière-plan, `MainActivity` force l'écriture en attente, puis
lance la synchronisation si elle est configurée.

Pour une mise à jour, `maj.js` passe l'adresse de l'APK à `MainActivity`, qui le
télécharge lui-même : seulement une pièce jointe de release sur `github.com`, en https.
`PackageInstaller` le remet ensuite à Android, qui demande confirmation et n'accepte que
le même paquet. C'est pour cela que l'APK demande la permission
`REQUEST_INSTALL_PACKAGES`.

Le nom du paquet est `io.github.amaurycu.entraineur`. Si tu publies ta propre
version, change-le dans `source/AndroidManifest.xml` et dans le chemin de
`MainActivity.java`, pour que les deux applis ne se confondent pas.
