# L'entraîneur sur Android

L'appli Android emballe l'application web de `../entraineur/app` dans une WebView qui
remplace le serveur local. Il n'y a ni serveur ni Terminal à lancer : l'icône
ouvre directement l'application. Elle s'appelle « Entraîneur » sur un téléphone réglé
en français, « Chess Coach » dans les autres langues.

## Construire l'APK

Il faut Linux avec ces paquets (exemple pour Ubuntu 24.04) :

```
sudo apt install openjdk-17-jdk-headless aapt dalvik-exchange zipalign apksigner android-sdk-platform-23
```

Puis lancer :

```
./construire_apk.sh            # écrit Entraineur.apk dans ce dossier
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

## Ce qui change par rapport à l'ordinateur

- **Données** : stockées dans l'espace privé de l'appli. Pour avoir les mêmes données
  que sur l'ordinateur, active la synchronisation GitHub (bouton « Synchro »).
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

Le nom du paquet est `io.github.amaurycu.entraineur`. Si tu publies ta propre
version, change-le dans `source/AndroidManifest.xml` et dans le chemin de
`MainActivity.java`, pour que les deux applis ne se confondent pas.
