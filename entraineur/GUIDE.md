# Guide de Chaxmat

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

Cinq blocs : tes erreurs d'ouverture, tes gaffes en jeu, tes répertoires, les quiz
d'ouverture, et les mats et finales.

L'entraînement sur un répertoire avance ligne par ligne. À chaque position, il faut
retrouver tes coups ; l'adversaire joue ses réponses préparées. Le menu « Réviser »
limite la révision à tes premiers coups.

Une position ou un quiz réussi revient le lendemain, puis de plus en plus loin. Raté,
il revient le lendemain.

### Mats et finales

35 thèmes, en cinq groupes :

- **Mats de base** : deux tours, roi et dame, roi et tour, deux fous, fou et cavalier.
- **Finales de pions** : roi et pion (gagner, et annuler en défense), la règle du carré,
  le pion de la tour, la course de pions, les pions bloqués (opposition et
  triangulation), deux pions contre un.
- **Finales de tours** : Lucena (gagner), Philidor (annuler), tour et pion contre tour,
  tour contre pion.
- **Autres finales** : dame contre pion sur la 7e, fou de la mauvaise couleur, cavalier
  contre pion, fous de couleurs opposées, dame contre tour, tour et fou contre tour,
  tour contre fou, tour contre cavalier.
- **Finales avancées** : deux pions contre deux, trois contre deux, tour et deux pions
  contre tour, tour et deux pions contre tour et pion, tour contre deux pions liés, dame
  et pion contre dame, fou et pion contre fou (Centurini), cavalier et pion contre
  cavalier, fou contre cavalier avec des pions, tour, fou et pion contre tour, dame
  contre tour et pion.

**La position.** Chaque clic sur un thème tire une position au hasard : les pièces sont
posées là où le thème a du sens (pour Lucena, le pion sur la 7e et le roi devant lui ;
pour le carré, le roi adverse loin de son pion), puis l'échiquier est parfois retourné
ou inversé de gauche à droite. La position n'est gardée que si elle a le bon résultat
(gagnée quand il faut gagner, nulle quand il faut annuler) et qu'on peut s'y tromper :
au moins un de tes coups doit laisser filer le gain ou la nulle. Tu joues tantôt les
blancs, tantôt les noirs.

Et elle ne doit pas être triviale : jamais de prise gratuite au premier coup (le roi qui
prend le pion d'emblée) ; pour gagner, au moins trois coups avant la promotion ou la
prise ; dans les finales de pions, où tout se joue à un temps près, pas plus de la
moitié des coups qui tiennent.

**La vérité** vient des tables de finales de Lichess (Syzygy, exactes jusqu'à 7 pièces,
gratuites, sans compte) : le résultat de la position et de chacun de tes coups, et la
distance au mat. Si les tables refusent pour un moment (trop de demandes), Stockfish
prend le relais une minute.

**Hors connexion**, tout marche avec Stockfish seul : il tire la position (un coup
d'œil rapide écarte celles qui n'ont pas le bon résultat, puis il analyse chaque coup
de celles qui restent), joue l'adversaire à pleine force et juge tes coups. Il compte
un coup gagnant à partir de 1,5 point d'avance (ou un mat), nul jusqu'à 1 point, et
ne te reproche jamais un coup entre les deux. Il est moins sûr que les tables (dans
Lucena, il voit gagnants des coups qui ne le sont pas), ne donne pas la distance au
mat, et met un peu plus de temps à tirer une position (20 secondes au plus). L'écran
dit quand c'est lui qui juge.

**L'adversaire** joue parfaitement : il garde son meilleur résultat, gagne au plus vite
quand il gagne, résiste le plus longtemps quand il perd, et quand la position est
nulle, Stockfish choisit parmi les coups qui la gardent nulle celui qui te pose le plus
de problèmes. Sans les tables, c'est Stockfish à pleine force.

**Pendant la partie.** Si ton coup laisse filer le gain (ou perd une position nulle),
tu le sais tout de suite, avec les coups qui tenaient. « Reprendre le coup » revient en
arrière ; « Continuer quand même » laisse l'adversaire te montrer comment il en profite.
« Indice » entoure la pièce à jouer, puis la case. « L'idée » rappelle la méthode du
thème. Pour une promotion, tu choisis la pièce.

**Réussi** quand :

- pour un mat de base : tu mates avant la règle des 50 coups (le bilan compare ton
  nombre de coups au plus court) ;
- pour gagner une finale : ton pion est promu et la position reste gagnante, ou il ne
  lui reste que son roi, ou tu mates ;
- pour annuler : tu tiens 8 à 15 coups sans faute selon le thème, ou la partie est
  nulle par la règle (pat, répétition, matériel insuffisant, 50 coups).

**Le niveau.** Chaque thème a son niveau, de 1 à 3. Il monte d'un quart quand tu
réussis sans faute, sans reprise ni indice, et descend d'un quart quand tu rates.
Pour les mats, le niveau allonge la distance au mat (au niveau 1, le roi adverse part
du bord) ; pour les finales, il réduit le nombre de bons coups (au niveau 3, un seul
coup tient). « Nouvelle position » ou « Terminer » en pleine partie compte un essai,
sans toucher au niveau.

## Jouer

Une partie contre le bot, sur ce que tu veux travailler.

1. Écris ta demande : « j'aimerais travailler la défense française », « la Najdorf »,
   « contre la sicilienne », « mon répertoire Londres », « les fourchettes et les
   clouages », « les finales », « la française et les fourchettes »… L'application
   affiche ce qu'elle a compris : l'ouverture, la variante s'il y en a une, les
   tactiques, les finales, et la couleur que tu joues. Elle connaît une trentaine
   d'ouvertures, tes propres répertoires, six motifs tactiques (fourchettes, clouages,
   enfilades, attaques à la découverte, mats, pièces en prise ; « les tactiques » les
   prend tous) et les finales. Sans thème reconnu, c'est une partie libre.
2. Choisis ta couleur, la pendule, l'adversaire (le bot standard, ou ton bot
   personnalisé, plus bas) et la force du bot. Par défaut, tu joues le camp qui
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

**Les tactiques.** Quand tu demandes un motif, le bot te laisse de temps en temps une
occasion : il ne pare pas une fourchette, il laisse un clouage ou un mat. Pas à chaque
coup, sinon ça se verrait : hors des premiers coups, au plus une fois tous les quatre
coups du bot, et pas à chaque fois que c'est possible. Chaque motif a un niveau, de 1
à 3 : au niveau 1, la réponse gagnante est un coup forcé (un échec, une prise) ; au
niveau 2, c'est un coup tranquille ; au niveau 3, elle vient en deux temps. Pour le
mat : mat en 1, en 2, en 3. Le niveau monte d'un quart quand tu trouves, descend d'un
quart quand tu rates. Tes niveaux s'affichent sous le formulaire.

**Les finales.** Le bot échange volontiers les pièces, surtout les dames, et se trompe
moins avant la finale, pour que la partie y arrive. La finale commence quand il reste
moins de 27 points de pièces sur l'échiquier (dame 9, tour 5, fou et cavalier 3, pions
et rois non comptés).

Pendant la partie, « Coup de la ligne » montre le coup du livre tant que tu es dedans.
« Abandonner » se confirme d'un second clic.

**Le bilan.** « Voir le bilan » ouvre le bilan habituel, avec en tête « Ce que tu
voulais travailler » :

- la variante suivie et le coup où la partie a quitté la ligne, avec ce que ça t'a
  coûté si c'est toi qui en es sorti ;
- tes erreurs sur tes 12 premiers coups ;
- les principes : pièces mineures sorties avant le coup 10, roque, dame sortie tôt ;
- l'idée de l'ouverture, et sa leçon quand il y en a une ;
- pour les tactiques : chaque occasion que le bot t'a laissée, trouvée ou ratée, ton
  niveau avant et après, puis les autres occasions du même motif que la partie a
  données d'elle-même ;
- pour les finales : le coup où la partie y est arrivée, l'évaluation à ce moment, ce
  que tu en as fait (avantage converti, défense réussie, ou conversion à travailler)
  et tes erreurs dans la finale.

### Le bot personnalisé

Un bot qui choisit ses coups comme tes adversaires. « Créer mon bot personnalisé »,
sous le formulaire :

1. il récupère toutes tes parties : tes parties importées, toutes tes archives
   chess.com depuis l'ouverture du compte, toutes tes parties Lichess. Il garde les
   parties rapides contre des humains (pas le différé, pas les bots). Celles qui ne
   sont pas importées servent seulement à l'apprentissage : elles ne rejoignent pas tes
   parties ;
2. dans chaque partie, il prend jusqu'à 8 positions où ton adversaire devait jouer
   (après le 5e coup), 4 000 au plus en tout, et fait noter par Stockfish tous les coups
   possibles, avec ta meilleure réponse à chacun ;
3. il apprend comment tes adversaires choisissent parmi ces coups.

Compte une demi-heure environ pour 500 parties, l'entraîneur ouvert. « Arrêter » en
route garde ce qui est fait et apprend dessus (150 positions au moins).

**Ce qu'il regarde.** Pour chaque coup possible, 43 indices, avec un poids chacun :
ce que le coup perd selon Stockfish ; la prise et sa valeur ; la reprise ; l'échec ; le
roque ; la pièce qui bouge ; le roi qui se promène et la dame sortie tôt ; la pièce
attaquée mise à l'abri, le matériel laissé en prise, la menace laissée sans réponse ;
la pièce gratuite ; la sous-promotion ; le coup qui crée une fourchette, un clouage,
une enfilade ou une attaque à la découverte ; le mat ; la tactique ou le mat en 1
laissé à ta meilleure réponse ; la façon dont la perte pèse selon l'Elo de
l'adversaire, sa pendule (moins d'une minute) et l'avancement de la partie ; et le sens
du coup : la pièce recule (menacée ou non), rentre sur sa première rangée ou sur sa case
de départ, avance, sort un cavalier ou un fou, se rapproche du centre. Il ne voit pas
la position dans son ensemble.

**Deux formes.** Le modèle simple donne un poids à chaque indice. À partir de 2 000
positions, il essaie aussi un petit réseau à 8 neurones, qui combine les indices, et
garde celui des deux qui prévoit le mieux sur des parties qu'il n'a pas vues. Sur 5 078
positions d'un joueur à 450 Elo, le réseau l'emportait : premier choix juste 38,5 % du
temps, contre 37,7 % pour le modèle simple et 36,0 % pour le bot standard. Avec 2 900
positions, les deux faisaient jeu égal : il faut des positions, pas seulement des
parties.

**Le sens des coups.** Les huit derniers indices sont arrivés plus tard. Avant eux, le
bot ne savait pas si une pièce avance ou recule, et ça se voyait : sur les 5 078
positions de ce joueur, il reculait une pièce que rien ne menaçait sur 6,2 % de ses
coups (les humains : 3,3 %), rentrait un cavalier, un fou ou la dame sur sa première
rangée sur 3,0 % (eux : 0,8 %) et remettait une pièce sur sa case de départ quatre fois
trop souvent (2,2 % contre 0,5 %). Avec eux, il retrouve leurs proportions, et prévoit
mieux leurs coups sur des parties qu'il n'a pas vues. Un bot appris avant ces indices
joue comme avant ; un encart te propose de les lui apprendre, sur les positions déjà
notées, sans Stockfish ni connexion.

**Ce qu'il affiche.** Sur des parties qu'il n'a jamais vues (validation croisée par
partie) : combien de fois son premier choix est le coup que ton adversaire a joué,
combien de fois ce coup est dans ses trois premiers choix, et la part de gaffes qu'il
prévoit, à côté des mêmes mesures pour le bot standard. Puis ce qu'il a appris de tes
adversaires, à coup comparable : « Roquer × 4,6 », « Laisser une menace sans réponse
÷ 3,7 »…

**Coriace.** La version coriace compte trois fois les parties que tu as perdues, et
son livre d'ouvertures aussi : elle imite surtout les adversaires qui te battent.

**Jouer contre lui.** Choisis « bot personnalisé » ou « bot personnalisé coriace »
dans « Adversaire ». En partie libre, il ouvre comme tes adversaires : les coups
qu'ils t'ont joués dans les six premiers coups, avec leur fréquence. Avec une
ouverture demandée, il suit la ligne comme le bot standard, puis joue comme tes
adversaires. Les occasions tactiques et le thème des finales marchent aussi avec lui.
La force décale un peu son jeu, comme il a vu les coups de tes adversaires changer
avec leur Elo.

**Il continue d'apprendre.** À la fin de chaque import, les nouvelles parties sont
analysées (quelques secondes par partie) et le réseau réentraîné ; le réseau repart du
précédent, une minute environ. « Mettre à jour »
va chercher les parties jouées depuis sur chess.com et Lichess. « Supprimer » efface
le modèle et les positions analysées.

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

## Mises à jour

Au lancement, si tu es connecté, l'application demande à GitHub la dernière version
publiée, au plus une fois par heure. Si elle est plus récente que la tienne, un bandeau
s'affiche en haut de la page, avec ses nouveautés :

- **« Mettre à jour »**, sur l'ordinateur, si l'application vient d'un clone git : le
  serveur local fait `git pull`, puis la page se recharge. S'il refuse (un fichier que
  tu as modifié serait écrasé), il le dit, et rien ne change. Si le serveur lui-même a
  changé, ferme sa fenêtre et relance l'entraîneur ;
- **« Télécharger »**, si tu l'as téléchargée en ZIP : remplace le dossier de
  l'application, et garde `entraineur/donnees` ;
- **« Mettre à jour »**, sur Android : l'appli télécharge l'APK, puis Android demande de
  confirmer. La première fois, il demande aussi d'autoriser Chaxmat à installer
  des applis. Tes données restent.

« Plus tard » ferme le bandeau jusqu'au prochain lancement.

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
