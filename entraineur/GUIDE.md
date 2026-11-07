# Guide de l'entraîneur

Ce guide décrit chaque onglet de l'application. Pour l'installer, voir le
[README](../README.fr.md).

L'application s'ouvre dans la langue du navigateur (français, sinon anglais). Le menu
`FR · EN`, à côté du bouton Synchro, la change ; ce choix reste propre à l'appareil.

## Premier lancement

La carte « Bienvenue » demande trois choses :

- **ton pseudo chess.com, ton pseudo Lichess, ou les deux** : au moins l'un des deux ;
- **ton niveau** : débutant (moins de 1000 Elo), intermédiaire (1000 à 1600) ou
  confirmé (plus de 1600) ;
- **les répertoires d'exemple** que tu veux, chacun avec sa leçon : Gambit Dame
  (blancs), Défense française (noirs), Système de Londres (blancs).

Tout se modifie ensuite. Les pseudos et le niveau sont dans la carte d'import de
l'onglet Aujourd'hui. Les répertoires d'exemple non choisis restent proposés dans
l'onglet Ouvertures.

Si tes données existent déjà sur un autre appareil, « J'ai déjà mes données sur un
autre appareil » ouvre la synchronisation GitHub (voir plus bas) au lieu de tout
refaire.

Le niveau ajuste deux choses :

- **les mots qui qualifient la précision d'une partie** (très propre, propre,
  correcte…) ;
- **la longueur à partir de laquelle un mat forcé non vu n'est plus compté comme une
  gaffe** : quatre coups ou plus pour un débutant, six pour un intermédiaire. En
  confirmé, tous les mats manqués comptent.

## Aujourd'hui

1. Choisis la date de départ. Au premier lancement, elle est réglée 30 jours en
   arrière.
2. Clique sur « Importer et analyser ».

L'application récupère tes parties sur chess.com et sur Lichess, selon les pseudos
remplis : un champ vide est ignoré, mais il en faut au moins un. Avant de télécharger
quoi que ce soit, elle vérifie que chaque pseudo existe ; si l'un est faux, elle le
signale et n'importe rien. Elle écarte les parties contre des bots ou l'ordinateur, les
parties par correspondance et, sur Lichess, les variantes (Chess960…).

Les parties des deux sites se retrouvent dans les mêmes indicateurs, gaffes et
exercices. Seul le classement Elo reste séparé : l'onglet Progression trace une courbe
par site, car un classement chess.com et un classement Lichess ne se comparent pas. Elle passe ensuite chaque coup à Stockfish, en comptant
une quinzaine de secondes par partie en qualité normale. Tu obtiens les indicateurs
du jour, la liste des parties et celle des gaffes.

Chaque indicateur est comparé à **deux repères** :

- **ton départ** : la moyenne de tes 30 premiers jours de jeu enregistrés. Après une
  pause de plus de deux mois, le départ repart de ta reprise. Il mesure le chemin
  parcouru.
- **ta forme des 30 derniers jours**, recalculée à chaque import. Elle donne ta
  tendance récente.

La **collection de coups brillants** est un bloc plié qui rassemble tes coups
brillants (!!) de toutes tes parties. Un clic ouvre le bilan de la partie sur ce
coup.

## Ouvertures

- **Tes répertoires.** Un répertoire a un nom, une couleur et un arbre de coups.
  « Créer un répertoire » demande un nom et une couleur, puis ouvre l'éditeur. Chaque
  carte propose de s'entraîner (tout, ce qui est dû, tes erreurs), d'éditer, de lire
  la leçon, de renommer, d'exporter en PGN ou de supprimer. Les répertoires d'exemple
  que tu n'as pas encore ajoutés sont proposés sous la liste.
- **Leçons.** Une leçon complète par répertoire d'exemple :
  - l'explication avec échiquiers animés ;
  - le par cœur, lu dans ton propre arbre, donc tes modifications sont suivies ;
  - la philosophie, les forces et faiblesses, le milieu de jeu, les pièges ;
  - des exercices et des parties modèles, construites pour la leçon ;
  - plus de 100 quiz par ouverture.
- **Correctifs d'ouverture.** Chaque coup de tes parties est comparé à tes
  répertoires de la même couleur. Un écart ne compte comme erreur que s'il est aussi
  mauvais selon Stockfish.

Les répertoires d'exemple vont jusqu'au 5e coup. À chaque coup adverse, ils donnent
les trois réponses les plus jouées sur l'explorateur Lichess par les joueurs de 1000 à
1600 Elo, en blitz et en rapide. Les coups du répertoire ont été choisis par Stockfish
(profondeur 20), en gardant un système cohérent quand il ne coûte pas plus d'un tiers
de pion.

## Éditeur

Choisis le répertoire en haut de l'onglet. Joue un coup sur l'échiquier pour
l'ajouter, ou clique sur un coup proposé. Trois sources de propositions :

- **les plus joués sur Lichess** : il faut d'abord se connecter à Lichess (bouton dans
  l'éditeur), en lecture seule ;
- **ceux de tes parties** ;
- **ceux de Stockfish**, calculés dans le navigateur.

« Importer un PGN » accepte la notation anglaise (Nf3, O-O) comme la française (Cf3,
0-0).

## Entraînement

Quatre blocs : tes erreurs d'ouverture, tes gaffes en jeu, tes répertoires et les
quiz d'ouverture.

L'entraînement sur un répertoire avance ligne par ligne. À chaque position, il faut
retrouver tes coups ; l'adversaire joue ses réponses préparées. Le menu « Réviser »
limite la révision à tes premiers coups.

Une position ou un quiz réussi revient le lendemain, puis de plus en plus loin. Raté,
il revient le lendemain.

## Jouer

Une partie contre le bot, sur ce que tu veux travailler.

1. Écris ta demande : « j'aimerais travailler la défense française », « la Najdorf »,
   « contre la sicilienne », « mon répertoire Londres »… L'application affiche ce
   qu'elle a compris : l'ouverture, la variante s'il y en a une, et la couleur que tu
   joues. Elle connaît une trentaine d'ouvertures et tes propres répertoires. Les
   thèmes tactiques (fourchettes, enfilades, finales) ne sont pas encore disponibles ;
   sans ouverture reconnue, c'est une partie libre.
2. Choisis ta couleur, la pendule et la force du bot. Par défaut, tu joues le camp qui
   choisit l'ouverture : les noirs pour la française, les blancs pour l'italienne ;
   « contre la sicilienne » te donne les blancs. La pendule va de « sans pendule » à
   30 minutes.
3. Clique sur « Lancer la partie ».

**Le bot.** Il commence par la ligne demandée : celle de ton répertoire s'il en a un
pour cette ouverture, sinon celle du répertoire d'exemple, et les variantes du livre de
l'application. Ensuite, il joue avec Stockfish, mais à ton niveau : il fait autant de
gaffes (coups qui perdent 3 points ou plus), d'erreurs et d'imprécisions qu'un joueur
de cet Elo. Ces proportions viennent de 476 parties rapides chess.com entre 200 et 500
Elo, analysées par Stockfish ; au-delà de 500 Elo, c'est une estimation. La force part
de ton dernier Elo chess.com ; sans partie chess.com, elle est estimée d'après tes
gaffes. Le curseur la change pour une partie.

Avec une pendule, le bot prend le temps de réflexion d'un joueur de ce niveau : en
moyenne 8 secondes par coup en partie de 10 minutes, moins dans la ligne.

Pendant la partie, « Coup de la ligne » montre le coup du livre tant que tu es dedans.
« Abandonner » se confirme d'un second clic.

**Le bilan.** « Voir le bilan » ouvre le bilan habituel, avec en tête « Ce que tu
voulais travailler » :

- la variante suivie et le coup où la partie a quitté la ligne, avec ce que ça t'a
  coûté si c'est toi qui en es sorti ;
- tes erreurs sur tes 12 premiers coups ;
- les principes : pièces mineures sorties avant le coup 10, roque, dame sortie tôt ;
- l'idée de l'ouverture, et sa leçon quand il y en a une.

Les parties contre le bot sont listées sous le formulaire. Elles ne comptent ni dans
tes indicateurs, ni dans tes gaffes, ni dans ta progression. Une position ajoutée aux
exercices depuis leur bilan reste dans Entraînement.

## Progression

Un point par jour de jeu sur quatre indicateurs, avec deux repères en pointillés :
gris pour ton départ, bleu pour ta forme des 30 derniers jours. On y trouve aussi la
courbe Elo et le détail jour par jour.

## Bilan de partie

Le bouton « Bilan de la partie », sous chaque partie, explique chaque coup des deux
camps.

- **Le résumé** (repliable) contient :
  - les moments clés : ta plus grosse erreur, son plus gros cadeau, ton meilleur
    coup ;
  - la courbe de la partie ;
  - ton ouverture comparée à ton répertoire ;
  - ce qu'il faut retenir ;
  - le bouton « Retrouve le coup ».
- **L'explication du coup** dit en mots ce que fait le coup : prise, échec, double
  attaque, clouage… Elle donne aussi l'évaluation en mots et le matériel. Pour une
  erreur, elle dit pourquoi c'en est une et ce qu'il fallait jouer, avec trois
  boutons : « La bonne suite », « La punition » et « + Ajouter aux exercices ».
- **Les notations** reprennent celles de chess.com : Brillant (!!), Très bon coup
  (!), Meilleur coup (★), Excellent, Bon, Imprécision (?!), Erreur (?) et Gaffe (??).
- **L'échiquier** :
  - flèches verte (le bon coup), rouge (ton coup) et orange (la menace) ;
  - « Radar » entoure les pièces qui se perdent si on les prend ;
  - un clic sur une pièce montre qui l'attaque et qui la défend.
- **Retrouve le coup** : le bilan s'arrête avant chacune de tes erreurs et te demande
  de trouver mieux, avec deux indices.
- **Le lexique** : les mots soulignés (fourchette, clouage…) montrent leur définition.
- **Sur téléphone** :
  - le résumé est replié au départ ;
  - l'échiquier prend toute la largeur et reste en haut pendant la lecture ;
  - les flèches ⏮ ‹ › ⏭ restent en bas de l'écran.

Les explications sont calculées dans l'application, à partir des évaluations déjà
enregistrées. Elles disent ce qui est sur l'échiquier (attaques, défenses, échanges),
pas les plans à long terme.

## Comment l'application juge un coup

- **Gaffe** : au moins 300 centipions perdus par rapport au meilleur coup, selon
  Stockfish. **Erreur** : de 100 à 299. Les évaluations sont bornées à ±12, pour que
  les positions déjà décidées ne faussent pas les moyennes.
- **Pièce en prise et pièce gratuite** : calcul statique des suites de prises (SEE)
  sur chaque case. Une « pièce » vaut au moins 250 centipions.
- **Menace gérée** : après ton coup, plus rien de gagnable ne reste en prise, ou tu as
  repris au moins l'équivalent.
- **Coup brillant** : le meilleur coup ou presque, qui laisse à l'adversaire au moins
  2 points de matériel à prendre, alors que le prendre est justement sa meilleure
  réponse. La position doit rester bonne.
- **Très bon coup** : le premier choix du moteur, quand le deuxième était au moins
  2 points moins bon.
- **Mat long manqué** : un mat forcé trop long pour le niveau choisi n'est pas compté
  comme une gaffe. Il apparaît en gris.
- **Précision** : formule de Lichess, à partir des évaluations coup par coup.

## Synchronisation entre appareils

Le bouton **Synchro**, à côté du titre, relie l'ordinateur et le téléphone par un
dépôt GitHub **privé** qui ne contient que `donnees.json`. Les étapes de mise en place
sont détaillées dans la fenêtre Synchro.

- **Quand elle se fait** : à l'ouverture, 20 secondes après une modification, et
  quand l'application passe en arrière-plan ou y revient.
- **Fusion** : si les deux appareils ont travaillé chacun de leur côté, leurs travaux
  sont réunis élément par élément. Un même exercice révisé des deux côtés garde la
  version qui compte le plus de tentatives.
- **Ce qui ne voyage pas** : le jeton GitHub et le réglage du son restent sur chaque
  appareil. Le jeton Lichess, lui, voyage avec les données.
- **Dépôt public refusé** : tes parties et ton jeton Lichess y seraient visibles de
  tous.
- **Historique** : chaque envoi crée une version du fichier sur GitHub.

## Si ça ne marche pas

- **Rien ne s'ouvre au double-clic** (macOS ou Linux) : le lanceur a peut-être perdu
  son droit d'exécution. Lance une fois `chmod +x "Ouvrir l'entraineur.command"
  ouvrir-entraineur.sh`.
- **Le lanceur parle de Python** : il faut Python 3.7 ou plus récent, avec sa
  bibliothèque standard complète. Le lanceur distingue trois cas : Python
  introuvable, trop ancien (il affiche la version trouvée) ou incomplet (il
  nomme les modules manquants). Installe ou mets à jour Python, puis relance :
  - macOS : `xcode-select --install`, ou https://www.python.org/downloads/macos/.
  - Windows : https://www.python.org/downloads/, en cochant « Add python.exe to
    PATH ».
  - Linux : `sudo apt install python3` (le lanceur donne la commande de ta
    distribution).

  Sur macOS, la page s'ouvre quand même en mode simplifié : l'import et
  l'entraînement marchent, mais pas l'analyse Stockfish. La liste complète des
  dépendances est dans `requirements.txt`, à la racine du dépôt.
- **L'import ne renvoie rien** : vérifie le pseudo et la date. Les parties par
  correspondance et contre les bots Coach sont exclues volontairement.
- **L'analyse est lente** : passe la qualité sur « Rapide ».
- **Un bandeau rouge parle de sauvegarde** : deux causes possibles.
  - Le serveur a été fermé : relance-le sans fermer la page, qui réessaie toute
    seule.
  - L'entraîneur est ouvert dans deux onglets et l'autre a enregistré entre-temps :
    clique sur « Recharger ».

  Dans les deux cas, rien n'est écrasé.
