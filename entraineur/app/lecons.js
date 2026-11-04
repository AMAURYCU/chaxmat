/* Leçons d'ouvertures, une par répertoire d'exemple (reps-initiaux.js).
   Chaque séquence a été rejouée avec python-chess, chaque affirmation chiffrée vérifiée
   avec Stockfish ; les coups « les plus joués » viennent de l'explorateur Lichess
   (joueurs de 1000 à 1600 Elo, blitz et rapide). Rendu : ouvertures.js (afficherLecon). */
window.LECONS = [
 {
  "id": "gambit-dame",
  "titre": "Le Gambit Dame",
  "camp": "w",
  "rep": "rep-gambit-dame",
  "sous": "Ton répertoire blanc : 1.d4 et 2.c4 contre presque tout. {{positions}} à connaître, {{lignes}}.",
  "chapeau": "<p>Tu offres le pion c4 pour détourner le pion d5 du centre. Ce n'est pas un vrai sacrifice : dans toutes les lignes de ton répertoire, le pion revient. En échange, tu obtiens ce que tout le monde cherche dans l'ouverture : le centre, un développement rapide et des pièces actives.</p><p>La leçon suit l'arbre de ton répertoire, famille par famille, puis explique les idées, les pièges et les exceptions. Chaque séquence animée a son bouton Quiz ; tous les quiz se retrouvent aussi dans Entraînement, rubrique « Quiz d'ouverture ». Les liens soulignés en pointillé montrent la position dont on parle.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "Explication du répertoire",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire tient en une idée : <span class=\"mv\">1.d4</span>, puis <span class=\"mv\">2.c4</span> contre presque tout. Le pion c4 attaque le pion d5 par le côté. Si les noirs le prennent, tu le récupères et tu gagnes le centre ; s'ils ne le prennent pas, tu développes vite et tu mets la pression sur d5."
     },
     {
      "t": "p",
      "html": "Ce que jouent les noirs entre 1000 et 1600 sur Lichess (parties blitz et rapides) décide de la famille. Chaque échiquier ci-dessous s'anime : avance avec ›, recule avec ‹, ou clique sur un coup. La flèche verte, c'est ton coup ; la grise, celui de l'adversaire. Les coups soulignés en pointillés dans les explications sont des liens : ils montrent la variante sur l'échiquier. Le bouton <strong>Quiz</strong> remet la position à zéro et te demande de jouer tes coups."
     },
     {
      "t": "table",
      "entetes": [
       "Après",
       "Les noirs jouent",
       "Fréquence",
       "Ce que c'est"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "50 %",
        "Gambit Dame après 2.c4"
       ],
       [
        "1.d4",
        "1…Cf6",
        "15 %",
        "Défenses indiennes"
       ],
       [
        "1.d4",
        "1…e6",
        "10 %",
        "Souvent une transposition"
       ],
       [
        "1.d4 d5 2.c4",
        "2…dxc4",
        "34 %",
        "Gambit Dame accepté"
       ],
       [
        "1.d4 d5 2.c4",
        "2…e6",
        "21 %",
        "Gambit Dame refusé"
       ],
       [
        "1.d4 d5 2.c4",
        "2…Cf6",
        "16 %",
        "Défense Marshall"
       ],
       [
        "1.d4 Cf6 2.c4",
        "2…g6",
        "30 %",
        "Est-indienne ou Grünfeld"
       ],
       [
        "1.d4 Cf6 2.c4",
        "2…e6",
        "29 %",
        "Nimzo-indienne ou refusé"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. Le Gambit Dame accepté : 2…dxc4"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3"
      ],
      "legendes": [
       "Les noirs prennent le pion. C'est la réponse la plus jouée entre 1000 et 1600 Elo. Pas d'inquiétude : ce pion, tu vas le reprendre.",
       "<span class=\"mv\">3.e3</span> ouvre la diagonale de ton fou f1 : il menace déjà de reprendre en c4. Simple et solide.",
       "Les noirs développent leur cavalier. Ils ne défendent pas c4 : ils te laissent le reprendre. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 au lieu de 3…Cf6</a>, c'est pareil.",
       "Tu reprends le pion. Matériel égal, et ton fou est actif sur la diagonale qui vise f7.",
       "Les noirs ouvrent la sortie de leur fou f8. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q62b65fac6\">4…Cc6</a>, tu joues aussi 5.Cf3.",
       "Tu sors ton cavalier g1. Ensuite, hors répertoire : <span class=\"mv\">0-0</span>, <span class=\"mv\">Cc3</span>, <span class=\"mv\">De2</span>."
      ],
      "fin": "La position type de l'accepté : deux pièces sorties, le roque au coup suivant, un peu plus d'espace que les noirs. Si les noirs jouent <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 au lieu de 3…Cf6</a>, c'est pareil : 4.Fxc4 Cf6 5.Cf3 mène à la même position. Après 3…e6 4.Fxc4, contre <a class=\"lien-var\" href=\"#\" data-var=\"qf10e00271\">4…Cc6</a> joue 5.Cf3, et contre <a class=\"lien-var\" href=\"#\" data-var=\"qe7ff82d8d\">4…Fb4+</a> interpose 5.Cc3.",
      "titre": "3…Cf6 : la ligne la plus tranquille",
      "quiz": [
       "q58862f38f",
       "qfaf8ff6ad",
       "q62b65fac6",
       "qf10e00271",
       "qe7ff82d8d"
      ],
      "marques": [
       [
        "c4!"
       ],
       [
        "f1",
        "c4!"
       ],
       [
        "c4!"
       ],
       [
        "c4",
        "f7!"
       ],
       [
        "f8"
       ],
       [],
       [
        "c4",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3"
      ],
      "coups": [
       "b5",
       "a4",
       "c6",
       "axb5"
      ],
      "legendes": [
       "Les noirs défendent c4 avec le pion b. Ça a l'air solide, mais une chaîne de pions a un point faible : sa base. Ici, c'est b5.",
       "Tu attaques la base de la chaîne. Si b5 tombe, c4 tombera derrière. Stockfish préfère nettement <span class=\"mv\">4.a4</span> à 4.b3.",
       "Les noirs soutiennent b5 avec le pion c.",
       "Tu prends quand même. Si les noirs reprennent <a class=\"lien-var\" href=\"#\" data-var=\"qbe59e3b4a\">5…cxb5</a>, 6.Df3 gagne une pièce."
      ],
      "fin": "Les noirs ne doivent pas reprendre en b5. Stockfish donne environ +1,7 aux blancs : le matériel est égal pour l'instant, mais le pion c4 va tomber et tu auras un pion de plus. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q23b50555d\">4…Fd7</a>, même idée : 5.axb5. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q4e88a8472\">4…bxa4</a>, reprends simplement ton pion : 5.Fxc4.",
      "titre": "3…b5 : les noirs s'accrochent au pion",
      "quiz": [
       "q1a969d154",
       "qbe59e3b4a",
       "q23b50555d",
       "q4e88a8472"
      ],
      "marques": [
       [
        "c4",
        "b5!"
       ],
       [
        "b5!",
        "c4!"
       ],
       [
        "b5!",
        "a4"
       ],
       [
        "b5!",
        "c6",
        "d1"
       ],
       [
        "c4!",
        "f1",
        "b5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4"
      ],
      "coups": [
       "Bf5",
       "Qb3",
       "e6",
       "Nc3"
      ],
      "legendes": [
       "Le fou sort en f5. Mais il ne défend plus le pion b7.",
       "<span class=\"mv good\">5.Db3</span> ! Double attaque : ta dame vise b7, et avec ton fou c4 elle vise f7. Deux cibles à la fois.",
       "La bonne défense : le pion e6 bouche la diagonale vers f7. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Cbd7</a>, c'est mat.",
       "Pas tout de suite <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Dxb7</a> : la réponse 6…Fe4 ! embête ta dame. Avec <span class=\"mv\">6.Cc3</span> d'abord, tu contrôles e4, puis tu prends b7 tranquillement."
      ],
      "fin": "Les noirs doivent encore s'occuper de leur pion b7 : <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Cc3 d'abord, puis Dxb7</a> le gagne s'ils l'oublient. S'ils avaient répondu <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Cbd7</a> au lieu de 5…e6, c'était mat en un coup.",
      "titre": "4…Ff5 : la dame sort, pour une bonne raison",
      "quiz": [
       "qfeab54db7",
       "qc2a8bfd37",
       "qcdd21b677"
      ],
      "marques": [
       [
        "b7!"
       ],
       [
        "b3",
        "c4",
        "b7!",
        "f7!"
       ],
       [
        "e6",
        "c4",
        "f7!"
       ],
       [
        "e4",
        "b7!",
        "f5"
       ],
       [
        "b7!",
        "b3",
        "c3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. Le Gambit Dame refusé : 2…e6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3"
      ],
      "legendes": [
       "Les noirs protègent d5 avec le pion e. C'est solide, avec un défaut : le fou c8 est enfermé derrière e6.",
       "Tu ajoutes un attaquant sur d5. Compte : <span class=\"mv\">c4</span> et <span class=\"mv\">Cc3</span> attaquent d5 ; e6 et la dame le défendent.",
       "Les noirs ajoutent un défenseur à d5.",
       "<span class=\"mv\">4.Fg5</span> cloue le cavalier f6 : s'il bouge, ton fou prend la dame d8. Un défenseur de d5 est gêné.",
       "Les noirs déclouent : avec le fou en e7, le cavalier peut de nouveau bouger. C'est la réponse la plus jouée (47 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Fb4</a> et 4…h6 (séquence suivante).",
       "Tu ouvres la sortie de ton fou f1. Plan : <span class=\"mv\">Cf3</span>, <span class=\"mv\">Fd3</span>, <span class=\"mv\">0-0</span>, puis <span class=\"mv\">Tc1</span> ou <span class=\"mv\">Dc2</span>."
      ],
      "fin": "Une position classique du refusé : tu as plus d'espace, les noirs sont solides mais un peu à l'étroit. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Fb4</a>, joue aussi 5.e3 : le fou cloue ton cavalier, et si …Fxc3+, tu reprends avec le pion b.",
      "titre": "La ligne principale",
      "quiz": [
       "qdcdb92cf0",
       "qe2c942a05"
      ],
      "marques": [
       [
        "d5",
        "e6",
        "c8"
       ],
       [
        "d5!",
        "c4",
        "e6",
        "d8"
       ],
       [
        "d5!"
       ],
       [
        "g5",
        "f6!",
        "d8!",
        "d5"
       ],
       [
        "e7",
        "f6",
        "g5"
       ],
       [
        "f1"
       ],
       [
        "c3",
        "b2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5"
      ],
      "coups": [
       "h6",
       "Bxf6",
       "Qxf6",
       "cxd5",
       "exd5",
       "Nxd5"
      ],
      "legendes": [
       "Les noirs chassent ton fou.",
       "Ne recule pas en h4 : ici, prendre est plus fort (Stockfish : +1,2 contre +0,1 pour 5.Fh4). Le cavalier f6 défendait d5 : tu supprimes ce défenseur.",
       "La reprise la plus naturelle. Elle laisse d5 sans son cavalier. L'autre reprise, <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a>, abîme les pions noirs.",
       "Tu prends en d5 : seul le pion e6 peut reprendre.",
       "Les noirs reprennent.",
       "Tu gagnes un pion, et ton cavalier attaque la dame f6 au passage."
      ],
      "fin": "Un pion de plus, avec gain de temps. Si les noirs reprennent <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a> au lieu de 5…Dxf6, joue 6.cxd5 exd5 7.e3 : ils ont des pions doublés en f et un roi moins protégé.",
      "titre": "4…h6 : tu prends en f6",
      "quiz": [
       "qd63a5a9c6",
       "qd5b9c96e1"
      ],
      "marques": [
       [
        "g5!"
       ],
       [
        "f6!",
        "d5!"
       ],
       [
        "d5!",
        "f6!"
       ],
       [
        "d5!",
        "e6",
        "c3"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "f6!"
       ],
       [
        "d5",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "dxc4",
       "e4",
       "Bb4",
       "Bxc4"
      ],
      "legendes": [
       "Les noirs prennent alors que leur fou c8 est déjà enfermé par e6. Ils t'abandonnent le centre.",
       "Avec ton cavalier en c3 pour soutenir e4, tu occupes tout le centre tout de suite : <span class=\"mv good\">4.e4</span>.",
       "Le fou cloue ton cavalier c3 (la réponse la plus jouée). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Cc6</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Cf6</a>.",
       "Tu reprends le pion, avec deux pions au centre contre zéro. Stockfish : +0,8."
      ],
      "fin": "Contre <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Cc6</a>, joue 5.Cf3 ; contre <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Cf6</a>, 5.Fxc4. Dans tous les cas, le pion revient et le centre est à toi.",
      "titre": "3…dxc4 : 4.e4 !",
      "quiz": [
       "q28f23023f",
       "q84ccf2a91",
       "qfd0499a86"
      ],
      "marques": [
       [
        "c4!",
        "c8",
        "e6"
       ],
       [
        "c3",
        "e4",
        "d4"
       ],
       [
        "b4",
        "c3!",
        "e1"
       ],
       [
        "c4!",
        "d4",
        "e4"
       ],
       [
        "d4",
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "Bb4",
       "Nf3",
       "Bxc3+",
       "bxc3"
      ],
      "legendes": [
       "Le fou cloue ton cavalier c3 contre ton roi.",
       "Développe, tout simplement. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Cf6</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, tu as aussi une réponse prête.",
       "Les noirs échangent leur fou contre ton cavalier : ils te laissent la paire de fous.",
       "Reprends avec le pion b : <span class=\"mv\">bxc3</span> renforce d4 et ouvre la colonne b pour ta tour. Stockfish : +0,8."
      ],
      "fin": "Les pions doublés c3-c4 ne sont pas un problème : ta paire de fous vaut plus. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Cf6</a>, joue 5.Fg5 ; contre <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, 5.e3 puis Fxc4.",
      "titre": "3…Fb4 : le clouage",
      "quiz": [
       "qf41133586",
       "qf64608c7a",
       "qb7fe8d259"
      ],
      "marques": [
       [
        "b4",
        "c3!",
        "e1"
       ],
       [],
       [
        "c3!",
        "c1",
        "f1"
       ],
       [
        "c3!",
        "d4",
        "a1"
       ],
       [
        "c3",
        "c4",
        "c1",
        "f1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. La défense Marshall : 2…Cf6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "Nf6",
       "cxd5",
       "Nxd5",
       "Nf3",
       "Nc6",
       "e4"
      ],
      "legendes": [
       "Les noirs développent sans défendre d5. Ça s'appelle la défense Marshall, et son défaut se voit au coup suivant.",
       "Tu prends : <span class=\"mv good\">3.cxd5</span>. Aucun pion noir ne peut reprendre en d5.",
       "Le cavalier reprend (73 %). Mais un cavalier au centre, ça se chasse.",
       "D'abord développer : <span class=\"mv\">4.Cf3</span>. Le pion e viendra au coup suivant, avec gain de temps.",
       "Les noirs développent. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a>, même plan ; contre <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Fg4</a>, attention à l'exception.",
       "<span class=\"mv good\">5.e4</span> : le pion attaque le cavalier d5, qui doit partir. Tu as les deux pions centraux, les noirs aucun."
      ],
      "fin": "Stockfish : +1,4. Après <a class=\"lien-var\" href=\"#\" data-var=\"q482614658\">5…Cb6</a>, 6.d5 chasse aussi l'autre cavalier. Même plan contre <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a> : 5.e4. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Fg4</a>, joue 5.Ce5 : le cavalier attaque le fou et prépare Db3 contre b7.",
      "titre": "3…Cxd5 : le cavalier se fait chasser",
      "quiz": [
       "q310e8078c",
       "q782d57ad0",
       "qd3ed39913",
       "q482614658"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "e2",
        "d5"
       ],
       [],
       [
        "e4",
        "d5!",
        "d4"
       ],
       [
        "d5!",
        "e4",
        "d4",
        "c6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5"
      ],
      "coups": [
       "Qxd5",
       "Nc3",
       "Qd8",
       "Nf3"
      ],
      "legendes": [
       "La dame reprend. Elle est exposée au centre.",
       "Tu développes en attaquant la dame : tu gagnes un temps.",
       "La dame rentre chez elle. Les noirs ont joué deux coups de dame pour rien. Même réponse sur <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Da5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Dd6</a>.",
       "Et tu continues : e4 au prochain coup. Stockfish : +1,2."
      ],
      "fin": "Même réponse si la dame va en a5 ou en d6 : <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Da5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Dd6</a>.",
      "titre": "3…Dxd5 : la dame se fait chasser",
      "quiz": [
       "qfc1bf4ab7",
       "q19a9143dc",
       "q2199979f1"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [],
       [
        "e2",
        "e4"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5"
      ],
      "coups": [
       "e6",
       "dxe6",
       "Bxe6",
       "Nc3"
      ],
      "legendes": [
       "Un gambit rare : les noirs offrent un pion pour se développer vite.",
       "Prends le pion.",
       "Le fou reprend.",
       "Développe : tu as un pion de plus."
      ],
      "fin": "Si les noirs jouent <a class=\"lien-var\" href=\"#\" data-var=\"q7a2086efe\">4…Fb4+</a> au lieu de reprendre, interpose 5.Fd2 : tu gardes ton pion de plus.",
      "titre": "3…e6 : prends le pion",
      "quiz": [
       "q3212d6160",
       "q7a2086efe"
      ],
      "marques": [
       [
        "e6!"
       ],
       [
        "e6!"
       ],
       [
        "e6!"
       ],
       [],
       []
      ]
     },
     {
      "t": "h",
      "html": "4. 1…Cf6 : les défenses indiennes"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4"
      ],
      "coups": [
       "g6",
       "Nc3",
       "Bg7",
       "e4",
       "d6",
       "Nf3"
      ],
      "legendes": [
       "Les noirs vont placer leur fou en g7 : c'est l'Est-indienne. Ils te laissent le centre pour l'attaquer plus tard.",
       "Tu prépares e4.",
       "Le fou en g7 vise la grande diagonale : il frappera d4 dès que le cavalier f6 bougera.",
       "<span class=\"mv good\">4.e4</span> : trois pions au centre (c4, d4, e4). C'est ce que tu cherches.",
       "Les noirs empêchent e5. Les autres réponses : <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…0-0</a>, ou le piège <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Cxe4 ??</a>.",
       "Développement. Suite naturelle : <span class=\"mv\">Fe2</span>, <span class=\"mv\">0-0</span>. Ton plan : garder ce centre et prendre de l'espace."
      ],
      "fin": "Contre <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…0-0</a>, joue aussi 5.Cf3. Attention au piège <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Cxe4 ??</a> : le pion e4 est défendu par ton cavalier, tu gagnes un cavalier contre deux pions. Et contre <a class=\"lien-var\" href=\"#\" data-var=\"q63038f5a0\">4…e6</a>, 5.e5 ! chasse le cavalier.",
      "titre": "2…g6 3.Cc3 Fg7 : l'Est-indienne",
      "quiz": [
       "q54fa22f42",
       "q8939f31b6",
       "q4249f9ff9",
       "q63038f5a0"
      ],
      "marques": [
       [
        "f8",
        "g7"
       ],
       [
        "e2",
        "e4"
       ],
       [
        "g7",
        "d4!"
       ],
       [
        "c4",
        "d4",
        "e4"
       ],
       [
        "e5",
        "e4"
       ],
       [
        "c4",
        "d4",
        "e4",
        "f1"
       ],
       [
        "e4",
        "c3",
        "f6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "g6",
       "Nc3"
      ],
      "coups": [
       "d5",
       "cxd5",
       "Nxd5",
       "e4",
       "Nxc3",
       "bxc3"
      ],
      "legendes": [
       "La Grünfeld : les noirs attaquent ton centre tout de suite.",
       "Tu prends.",
       "Le cavalier reprend (95 % des cas).",
       "Même idée que contre la Marshall : <span class=\"mv good\">5.e4</span> chasse le cavalier en prenant le centre.",
       "Le cavalier s'échange contre le tien.",
       "Hors répertoire, mais naturel : reprends avec le pion b. Tes pions c3-d4-e4 forment un centre massif."
      ],
      "fin": "Stockfish donne la position à peu près égale (+0,3), mais tu as le centre. Si le cavalier recule en <a class=\"lien-var\" href=\"#\" data-var=\"q36ad42467\">5…Cb6</a> au lieu de prendre en c3, ton avantage grandit (+1,2) : en b6, il ne fait rien.",
      "titre": "3…d5 : la Grünfeld",
      "quiz": [
       "q69dd5d2a9"
      ],
      "marques": [
       [
        "c4!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "e4",
        "d5!"
       ],
       [
        "c3!"
       ],
       [
        "c3",
        "d4",
        "e4"
       ],
       [
        "c3",
        "d4",
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4"
      ],
      "coups": [
       "e6",
       "Nc3",
       "Bb4",
       "e3",
       "Bxc3+",
       "bxc3"
      ],
      "legendes": [
       "Les noirs préparent …d5 ou …Fb4.",
       "Tu menaces de jouer e4. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, c'est le Gambit refusé.",
       "La Nimzo-indienne : le fou cloue ton cavalier pour t'empêcher de jouer e4.",
       "<span class=\"mv\">4.e3</span> : solide. Tu ouvres ton fou f1 et tu protèges d4. Suite : <span class=\"mv\">Fd3</span>, <span class=\"mv\">Cf3</span>, <span class=\"mv\">0-0</span>.",
       "Les noirs prennent ton cavalier.",
       "La seule bonne reprise : <span class=\"mv\">bxc3</span>. Sur 5.Fd2 ??, …Fxd2+ et tu as perdu une pièce. Tu as la paire de fous."
      ],
      "fin": "Contre <a class=\"lien-var\" href=\"#\" data-var=\"q30dd750ab\">4…0-0</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q6b68a56c8\">4…d5</a>, joue 5.Cf3 et développe normalement. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, joue 4.Fg5 : c'est le Gambit refusé, vu plus haut.",
      "titre": "2…e6 3.Cc3 Fb4 : la Nimzo-indienne",
      "quiz": [
       "qe680fe597",
       "q8649452bf",
       "q30dd750ab",
       "q6b68a56c8"
      ],
      "marques": [
       [
        "f8",
        "d7"
       ],
       [
        "e2",
        "e4"
       ],
       [
        "b4",
        "c3!",
        "e1",
        "e4"
       ],
       [
        "f1",
        "d4"
       ],
       [
        "c3!"
       ],
       [
        "c3!",
        "c1",
        "f1"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "c5",
       "d5",
       "exd5",
       "cxd5"
      ],
      "legendes": [
       "Les noirs attaquent d4 avec le pion c.",
       "<span class=\"mv good\">4.d5</span> : tu avances au lieu d'échanger. Ton pion d5 coupe le camp noir en deux.",
       "Les noirs échangent (52 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Fe7</a>.",
       "Tu reprends avec le pion c : tu gardes un pion avancé en d5."
      ],
      "fin": "Suite naturelle : e4, Cf3, Fe2, 0-0. Stockfish : +0,8. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a>, joue 5.e4. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Fe7</a>, joue 5.d6 ! : le pion attaque le fou, qui doit retourner en f8.",
      "titre": "3…c5 : tu avances 4.d5",
      "quiz": [
       "q7e1ecd7f5",
       "q62b6ec7a2",
       "qdb840113a"
      ],
      "marques": [
       [
        "d4!"
       ],
       [
        "d5"
       ],
       [
        "d5!"
       ],
       [
        "d5"
       ],
       [
        "d5",
        "e2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "5. 1…e6"
     },
     {
      "t": "seq",
      "debut": [
       "d4"
      ],
      "coups": [
       "e6",
       "c4",
       "c5",
       "d5",
       "exd5",
       "cxd5"
      ],
      "legendes": [
       "Les noirs gardent leurs options : …d5 ou …c5.",
       "Ton coup de toujours.",
       "Ils attaquent d4. Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Cf6</a>.",
       "Même réflexe que plus haut : tu avances.",
       "Échange.",
       "Tu reprends avec le pion c. Suite : Cc3, e4."
      ],
      "fin": "Contre <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a>, joue 3.Cc3 : c'est le Gambit refusé. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Cf6</a>, joue 3.Cc3 : c'est la position de 1…Cf6 2.c4 e6 3.Cc3.",
      "titre": "1…e6 2.c4 c5 : même réflexe",
      "quiz": [
       "qe4d671d58",
       "qdf1c58899",
       "qf36f0b511"
      ],
      "marques": [
       [
        "d7",
        "c7"
       ],
       [],
       [
        "d4!"
       ],
       [],
       [
        "d5!"
       ],
       [
        "b1",
        "e2"
       ],
       [
        "b1"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Les transpositions.</strong> Beaucoup d'ordres de coups mènent aux mêmes positions : 1…e6 2.c4 d5 3.Cc3, c'est le Gambit refusé ; 1…Cf6 2.c4 d5 3.cxd5, c'est la Marshall. L'application le sait : une position déjà vue ailleurs n'est demandée qu'une fois à l'entraînement."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "Le par cœur",
    "blocs": [
     {
      "t": "p",
      "html": "Voici tout le répertoire, lu directement dans tes données : si tu le modifies dans l'éditeur, cet arbre suit. Il y a {{positions}} où c'est à toi de trouver le coup. Ne les apprends pas d'un bloc : une famille par jour suffit. Dans le tableau, clique sur un coup pour le voir sur l'échiquier ; chaque coup est aussi un quiz."
     },
     {
      "t": "h",
      "html": "Les décisions à connaître"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "Les noirs jouent",
       "Tu joues",
       "Pourquoi"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5, 1…Cf6, 1…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q67adffc86\">2.c4</a>",
        "Le pion c attaque d5"
       ],
       [
        "1.d4 d5 2.c4",
        "2…dxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q17a65f3d6\">3.e3</a>",
        "Ouvre le fou, menace Fxc4"
       ],
       [
        "",
        "2…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q88ed7211a\">3.Cc3</a>",
        "Deuxième attaquant de d5"
       ],
       [
        "",
        "2…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3f4a5eeca\">3.cxd5</a>",
        "d5 n'a plus de pion"
       ],
       [
        "Accepté, 3.e3",
        "3…b5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a>",
        "Attaque la base de la chaîne"
       ],
       [
        "",
        "3…Cf6 ou 3…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Fxc4</a>",
        "Tu reprends le pion"
       ],
       [
        "Accepté, 4.Fxc4",
        "4…Ff5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Db3</a>",
        "b7 et f7 attaqués"
       ],
       [
        "",
        "4…e6, 4…Cc6, 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q90a72d252\">5.Cf3</a>",
        "Développement"
       ],
       [
        "Refusé, 3.Cc3",
        "3…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1e4bbcf51\">4.Fg5</a>",
        "Clouage"
       ],
       [
        "",
        "3…Fb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q040b67277\">4.Cf3</a>",
        "Développement"
       ],
       [
        "",
        "3…dxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>",
        "Centre gratuit"
       ],
       [
        "Refusé, 4.Fg5",
        "4…Fe7 ou 4…Fb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb5198fd5b\">5.e3</a>",
        "Ouvre le fou f1"
       ],
       [
        "",
        "4…h6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Fxf6</a>",
        "Supprime un défenseur de d5"
       ],
       [
        "Marshall, 3.cxd5",
        "3…Cxd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q10452ca08\">4.Cf3 puis 5.e4</a>",
        "Chasse le cavalier"
       ],
       [
        "",
        "3…Dxd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q54a1797a5\">4.Cc3</a>",
        "Gain de temps sur la dame"
       ],
       [
        "1.d4 Cf6 2.c4",
        "2…g6 ou 2…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qef22133de\">3.Cc3</a>",
        "Prépare e4"
       ],
       [
        "2…g6 3.Cc3",
        "3…Fg7 ou 3…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1c8781700\">4.e4</a>",
        "Trois pions au centre"
       ],
       [
        "",
        "3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2748f9d03\">4.cxd5 puis 5.e4</a>",
        "Chasse le cavalier"
       ],
       [
        "2…e6 3.Cc3",
        "3…Fb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qcb16f2964\">4.e3</a>",
        "Solide, ouvre le fou"
       ],
       [
        "",
        "3…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>",
        "Le pion coupe le camp noir"
       ],
       [
        "Partout",
        "…Fxc3+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">bxc3</a>",
        "Toujours le pion b"
       ]
      ]
     },
     {
      "t": "h",
      "html": "L'arbre complet"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Trois réflexes couvrent presque tout.</strong> 2.c4 partout. Cc3 dès que possible. e4 dès que les noirs lâchent le centre (…dxc4 après …e6, …Cxd5, …g6)."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "La philosophie",
    "blocs": [
     {
      "t": "h",
      "html": "Pourquoi 2.c4"
     },
     {
      "t": "p",
      "html": "1.d4 prend le centre, mais contre 1…d5 les deux pions se bloquent. 2.c4 attaque d5 par le côté : les noirs doivent choisir. Le soutenir (…e6, …c6), le prendre (…dxc4) ou ignorer la question (…Cf6). S'ils prennent, il n'y a plus de pion noir en d5, et ton pion e peut avancer jusqu'en e4."
     },
     {
      "t": "p",
      "html": "Est-ce un vrai gambit ? Non. Le pion c4 se reprend presque toujours : par <a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Fxc4</a> après e3, par <a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a> contre …b5. Dans tout ton répertoire, il revient."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3"
      ],
      "fleches": [
       [
        "f1c4",
        "v"
       ]
      ],
      "legende": "Après 3.e3, la diagonale f1-c4 est ouverte : le fou menace de reprendre le pion.",
      "marques": [
       "f1",
       "c4!",
       "e3"
      ]
     },
     {
      "t": "h",
      "html": "Le plan en trois temps"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Développer.</strong> Cc3, Cf3, un fou en g5 ou d3, l'autre en c4 ou e2, roquer. Jusqu'au coup 8 environ, chaque coup sort une pièce.",
       "<strong>Prendre le centre.</strong> e4 dès que c'est possible sans perdre le pion. Ton répertoire te montre quand : après <a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q10452ca08\">4.Cf3 puis 5.e4</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q1c8781700\">4.e4</a>.",
       "<strong>Mettre la pression.</strong> Une tour en c1 (la colonne c s'ouvre souvent), la dame en c2, le fou en d3 qui vise h7."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "La batterie Fd3 + Dc2"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3"
      ],
      "fleches": [
       [
        "d3h7",
        "v"
       ]
      ],
      "legende": "Le fou devant, la dame derrière, sur la diagonale qui mène à h7. Si le cavalier f6 quitte sa case ou se fait échanger par Fxf6, h7 n'a plus que le roi pour le défendre.",
      "marques": [
       "d3",
       "c2",
       "h7!",
       "f6"
      ]
     },
     {
      "t": "p",
      "html": "C'est l'attaque la plus simple du Gambit refusé. Quand le cavalier f6 disparaît, regarde toujours si Fxh7+ marche."
     },
     {
      "t": "h",
      "html": "Le clouage Fg5"
     },
     {
      "t": "p",
      "html": "Le fou en g5 cloue le cavalier f6 contre la dame : tant que la dame est en d8, le cavalier ne peut pas bouger sans perte. Or ce cavalier défend d5 et h7. Le clouage gêne donc toute la défense noire. Attention : un clouage contre la dame n'est pas un clouage absolu. Le cavalier peut quand même bouger s'il gagne plus que la dame, c'est tout le principe du piège de l'éléphant (voir Les pièges) ; pour ne pas y tomber : <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>."
     },
     {
      "t": "h",
      "html": "Les pions doublés c3-c4"
     },
     {
      "t": "p",
      "html": "Dans la Nimzo et le refusé avec …Fb4, les noirs prennent souvent ton cavalier : <a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">…Fxc3+</a>. Tes pions c sont doublés, mais tu as la paire de fous, le pion c3 renforce d4 et la colonne b s'ouvre pour ta tour. Ne cherche pas à éviter cet échange."
     },
     {
      "t": "h",
      "html": "Quand le centre se ferme : d5"
     },
     {
      "t": "p",
      "html": "Contre …c5, tu avances d5 (<a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>). Ton pion coupe le camp noir en deux et te donne de l'espace. Ton plan : e4, Cf3, Fe2, 0-0, puis selon les cas f4 ou e5 pour ouvrir le jeu. Ne prends pas en c5 : tu rendrais le centre aux noirs."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "e6",
       "Nc3",
       "c5",
       "d5",
       "exd5",
       "cxd5",
       "d6",
       "e4"
      ],
      "fleches": [],
      "legende": "La structure à viser contre …c5 : pions d5 et e4, les noirs sont à l'étroit.",
      "marques": [
       "d5",
       "e4"
      ]
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Forces et faiblesses",
    "blocs": [
     {
      "t": "p",
      "html": "Avant de parler de plans, fais le point : ce que le Gambit Dame te donne, ce qui est plus difficile, et ce que les noirs vont essayer de faire contre toi."
     },
     {
      "t": "h",
      "html": "Ce que l'ouverture te donne"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Le centre et l'espace.</strong> Ton pion d4 tient le centre, ton pion c4 met la pression sur d5. Dès que les noirs lâchent d5, ton pion e arrive en e4 : deux pions au centre (d4, e4) contre zéro.",
       "<strong>Toujours les mêmes cases.</strong> Cc3, Fg5, e3, Cf3, Fd3, 0-0 : dans le refusé, ton développement ne change presque pas. Moins de calcul dans l'ouverture, plus d'énergie pour le milieu de jeu.",
       "<strong>Un roi tranquille.</strong> Les noirs ont rarement de quoi attaquer ton roque. C'est toi qui choisis où se passe la bataille.",
       "<strong>Des plans connus.</strong> Selon les pions, trois plans reviennent : l'attaque de minorité, le jeu autour du pion isolé, l'attaque sur le roque avec Fd3 et Dc2. Tu les trouves dans la section suivante.",
       "<strong>Des pièges naturels.</strong> Db3 contre b7, Fxf7 dans l'accepté, Df3 contre la tour a8 : les noirs y tombent en jouant des coups qui ont l'air normaux."
      ]
     },
     {
      "t": "h",
      "html": "Ce qui est plus difficile"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Les positions sont calmes.</strong> Pas d'attaque toute faite : il faut un plan, et de la patience. Si tu cherches le mat au coup 12 sans raison, tu risques de perdre du matériel.",
       "<strong>Ton fou c1 peut rester enfermé.</strong> Dans l'accepté, après 3.e3, il est derrière ton pion e3. Il se libère quand ce pion disparaît (…cxd4 exd4) ou avance en e4. Ne le laisse pas dormir jusqu'au coup 20.",
       "<strong>Le pion isolé.</strong> Dans l'accepté, tu as souvent un pion d4 qu'aucun autre pion ne peut défendre. Il te donne des pièces actives au milieu de jeu, mais il devient faible si toutes les pièces s'échangent.",
       "<strong>Les clouages.</strong> …Fb4 cloue ton cavalier c3 : tant qu'il est cloué, il ne défend plus e4. Pense-y avant de pousser ton pion e.",
       "<strong>Savoir ne pas prendre.</strong> Le pion d5 a parfois l'air gratuit (piège de l'éléphant), le pion b7 aussi (Dxb7 trop tôt). Avant de prendre, regarde la réponse des noirs."
      ]
     },
     {
      "t": "h",
      "html": "Ce que cherchent les noirs"
     },
     {
      "t": "p",
      "html": "Dans le refusé, le gros problème des noirs, c'est leur fou c8 : derrière le pion e6, il ne voit rien. Ils ont aussi moins d'espace que toi. Presque tous leurs plans servent à se libérer."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Échanger des pièces.</strong> Quand on manque de place, chaque échange soulage. L'idée la plus connue : …dxc4, puis …Cd5 pour échanger deux paires de pièces (l'échiquier ci-dessous).",
       "<strong>Les poussées libératrices …e5 et …c5.</strong> Une poussée libératrice, c'est un coup de pion qui ouvre le jeu pour les pièces. …e5 libère le fou c8 ; …c5 attaque ton pion d4.",
       "<strong>Le saut …Ce4.</strong> Le cavalier s'installe au centre pour échanger tes pièces, parfois soutenu par …f5.",
       "<strong>…Ff5 dans la structure Carlsbad.</strong> Après cxd5 exd5, le fou c8 est libre : il veut s'échanger contre ton bon fou d3.",
       "<strong>Dans l'accepté : …c5, …a6 et …b5.</strong> Les noirs attaquent ton pion d4 et sortent leur fou par b7."
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3"
      ],
      "coups": [
       "dxc4",
       "Bxc4",
       "Nd5",
       "Bxe7",
       "Qxe7",
       "O-O",
       "Nxc3",
       "Qxc3",
       "b6"
      ],
      "legendes": [
       "Les noirs prennent en c4 : ton fou doit bouger une deuxième fois pour reprendre.",
       "Tu reprends le pion.",
       "Le cavalier vient en d5 pour proposer des échanges : c'est la manœuvre de libération classique du refusé.",
       "Tu échanges les fous : c'est le plus simple.",
       "La dame reprend.",
       "Ton roi se met à l'abri.",
       "Deuxième échange.",
       "La dame reprend.",
       "Le fou c8 va sortir par b7. Ensuite, …c5 attaquera ton centre."
      ],
      "fin": "Deux paires de pièces ont disparu et le fou c8 va respirer : la position est égale (Stockfish : +0,2). Pas de panique, tu gardes plus d'espace. Mais attention au moment : si les noirs poussent …e5 sans préparation, <a class=\"lien-var\" href=\"#\" data-var=\"qf51a5c77b\">12…e5 ? 13.Cxe5</a> gagne un pion (Stockfish : +1,4).",
      "titre": "La libération des noirs : …dxc4 et …Cd5",
      "quiz": [
       "qbce42b1a6"
      ],
      "marques": [
       [
        "c4!",
        "d3"
       ],
       [
        "c4!"
       ],
       [
        "d5",
        "c3",
        "e7",
        "g5"
       ],
       [
        "e7!"
       ],
       [
        "e7!"
       ],
       [
        "g1"
       ],
       [
        "c3!"
       ],
       [
        "c3!"
       ],
       [
        "c8",
        "b7",
        "c5",
        "d4"
       ],
       [
        "c8",
        "e5",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les erreurs typiques chez les joueurs de club"
     },
     {
      "t": "p",
      "html": "Des erreurs fréquentes chez les joueurs de club. Chaque lien rouge montre l'erreur ; le lien du bon coup est un quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Pousser e4 trop tôt.</strong> Tant que le pion d5 et le cavalier f6 surveillent e4, ton pion se fait prendre : <a class=\"lien-var\" href=\"#\" data-var=\"q48e5afaa3\">4.e4 ?</a> perd un pion (Stockfish : −0,6). Attends que les noirs lâchent d5 (…dxc4) : là, e4 est fort. Ici, le bon coup est <a class=\"lien-var\" href=\"#\" data-var=\"q1e4bbcf51\">4.Fg5</a>.",
       "<strong>Oublier qu'une pièce clouée ne défend plus.</strong> Dans la Nimzo, …Fb4 cloue ton cavalier c3 contre ton roi : <a class=\"lien-var\" href=\"#\" data-var=\"qa1537baec\">4.e4 ?</a> perd un pion (Stockfish : −0,7). Joue d'abord <a class=\"lien-var\" href=\"#\" data-var=\"qcb16f2964\">4.e3</a>.",
       "<strong>Fxh7+ quand le cavalier f6 n'est pas cloué.</strong> Avec un fou noir en e7, le clouage n'existe pas : <a class=\"lien-var\" href=\"#\" data-var=\"q6ad65274d\">9.Fxh7+ ?</a> perd une pièce (Stockfish : −3,3). Compare avec l'exercice 3, où le fou noir est parti en d6.",
       "<strong>Lancer b4 sans préparation.</strong> Dans la structure Carlsbad, <a class=\"lien-var\" href=\"#\" data-var=\"q3b9482ee2\">11.b4 ?</a> laisse le fou e7 prendre le pion (Stockfish : −0,5). Joue d'abord <a class=\"lien-var\" href=\"#\" data-var=\"qd52783f32\">11.Tab1</a> : la tour soutiendra b4.",
       "<strong>Prendre en d5 avec le cavalier quand un cavalier noir est en d7.</strong> C'est le piège de l'éléphant (voir Les pièges) : joue <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>.",
       "<strong>Prendre b7 trop tôt.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Dxb7</a> laisse 6…Fe4 ! et ton avantage disparaît. Joue <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Cc3 d'abord, puis Dxb7</a>."
      ]
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "Le milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Après l'ouverture, ce sont les pions qui te disent quoi faire. Ton répertoire mène surtout à trois situations : la structure Carlsbad dans le refusé, le pion isolé en d4 dans l'accepté, et l'attaque sur le roque avec Fd3 et Dc2."
     },
     {
      "t": "h",
      "html": "1. La structure Carlsbad et l'attaque de minorité"
     },
     {
      "t": "p",
      "html": "Dans le refusé, tu peux échanger cxd5 dès que ton développement est en route, par exemple au 9e coup. Les noirs reprennent exd5. Cette structure de pions porte un nom : la structure Carlsbad."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8"
      ],
      "fleches": [
       [
        "a1b1",
        "v"
       ],
       [
        "b2b4",
        "v"
       ]
      ],
      "legende": "La structure Carlsbad. À l'aile dame, tu as deux pions (a2, b2), les noirs en ont trois (a7, b7, c6). Plan : Tb1, puis b4 et b5.",
      "marques": [
       "a2",
       "b2",
       "b7",
       "c6"
      ]
     },
     {
      "t": "p",
      "html": "L'attaque de minorité, c'est avancer ta minorité (tes deux pions a et b) contre les trois pions noirs. Le but n'est pas de percer : c'est de laisser aux noirs un pion faible. Après b5 et bxc6, il leur reste un pion c6 faible, que plus aucun pion ne peut défendre."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1",
       "Ne4",
       "Bxe7",
       "Qxe7",
       "b4",
       "a6",
       "a4",
       "Ng6"
      ],
      "coups": [
       "Rfc1",
       "Bf5",
       "b5",
       "axb5",
       "axb5",
       "h6",
       "bxc6",
       "bxc6"
      ],
      "legendes": [
       "Ta deuxième tour vient sur la colonne c : elle va s'ouvrir.",
       "Les noirs développent leur fou.",
       "C'est le moment : b5 attaque c6. Ton pion a4 et ton fou d3 le soutiennent.",
       "Les noirs prennent.",
       "Tu reprends : le pion b5 attaque encore c6.",
       "Un coup d'attente.",
       "Tu prends en c6.",
       "Voilà le résultat : un pion c6 que plus aucun pion ne défend, sur une colonne semi-ouverte."
      ],
      "fin": "Le pion c6 est ta cible pour le reste de la partie : tes tours sur la colonne c, un cavalier en e5 ou en c5, ta dame en a4. Stockfish : +0,7.",
      "titre": "L'attaque de minorité, coup par coup",
      "quiz": [
       "q5206c7648"
      ],
      "marques": [
       [
        "c1"
       ],
       [
        "f5"
       ],
       [
        "b5",
        "c6!",
        "a4",
        "d3"
       ],
       [
        "b5!"
       ],
       [
        "b5",
        "c6!"
       ],
       [],
       [
        "c6!"
       ],
       [
        "c6!",
        "c1"
       ],
       [
        "c6!",
        "c1",
        "e5",
        "a4"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Deux idées tactiques reviennent dans cette structure. Le pion d5 est surtout défendu par le pion c6 et le cavalier f6 : Fxf6 supprime un de ses défenseurs (exercice 2). Et si …cxb5 répond à b5, le pion d5 perd son soutien (exercice 1)."
     },
     {
      "t": "h",
      "html": "2. Le pion isolé en d4"
     },
     {
      "t": "p",
      "html": "Dans l'accepté, quand les noirs jouent …c5 et …cxd4, tu reprends exd4. Ton pion d4 devient un <strong>pion isolé</strong> : il n'y a plus de pion blanc sur les colonnes c et e pour le défendre. Au milieu de jeu, ce n'est pas une faiblesse : c'est une source d'activité."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Be7",
       "Nc3",
       "O-O",
       "Re1",
       "Nc6",
       "a3",
       "b6",
       "Ba2",
       "Bb7"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "c1f4",
        "v"
       ],
       [
        "d4d5",
        "v"
       ]
      ],
      "legende": "Le pion d4 te donne la case e5 pour ton cavalier. Ton fou c1 sort en f4 ou en g5, ton fou a2 vise e6 et f7, et la poussée d5 attend son heure.",
      "marques": [
       "d4",
       "e5",
       "c1",
       "a2"
      ]
     },
     {
      "t": "p",
      "html": "Le pion d4 soutient un cavalier en e5 : seul le pion f7 pourrait le chasser (…f6), et ce coup affaiblirait e6. Ton plan : des pièces actives, une attaque sur le roque, et la poussée d5 au bon moment. Évite d'échanger toutes les pièces : en finale, le pion isolé deviendrait une cible."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Nc6",
       "Nc3",
       "Be7",
       "Re1",
       "O-O",
       "a3",
       "a6",
       "Ba2",
       "b5"
      ],
      "coups": [
       "d5",
       "exd5",
       "Nxd5",
       "Nxd5",
       "Qxd5",
       "Bb7",
       "Qh5"
      ],
      "legendes": [
       "<span class=\"mv good\">12.d5</span> ! Toutes tes pièces sont prêtes : la tour e1, le fou a2, le cavalier c3. La poussée va leur ouvrir des lignes.",
       "Les noirs prennent.",
       "Le cavalier reprend : il attaque le fou e7 et le cavalier f6.",
       "Échange.",
       "La dame reprend, au centre. Avec ton fou a2 derrière elle, elle vise f7, et elle attaque le cavalier c6.",
       "Le fou défend c6 et vise ta dame derrière le cavalier : si le cavalier bouge, elle est attaquée.",
       "La dame s'en va… vers le roque noir."
      ],
      "fin": "Le pion isolé a disparu, mais il a fait son travail : tes pièces sont actives, celles des noirs encore à l'arrière (Stockfish : +1,3).",
      "titre": "La poussée d5",
      "quiz": [
       "q5e463ebba"
      ],
      "marques": [
       [
        "d5",
        "e1",
        "a2",
        "c3"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e7!",
        "f6!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "a2",
        "f7!",
        "c6!"
       ],
       [
        "b7",
        "c6",
        "d5!"
       ],
       [
        "h5",
        "g8"
       ],
       [
        "h5",
        "a2",
        "e1",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. L'attaque sur le roque : Fd3 + Dc2"
     },
     {
      "t": "p",
      "html": "Le fou en d3, la dame en c2 derrière lui : c'est une batterie, deux pièces alignées sur la même diagonale. Elle vise h7. En général, à part le roi, seul le cavalier f6 défend h7. Avant tout Fxh7+, regarde donc ce cavalier."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Le cavalier f6 est cloué</strong> (ton fou g5, sa dame d8, plus rien entre les deux) : Fxh7+ gagne un pion. Le cavalier ne peut pas reprendre sans perdre sa dame, et le roi ne peut pas reprendre si ta dame protège le fou (exercice 3).",
       "<strong>Le cavalier f6 disparaît</strong> : Fxf6 supprime le défenseur, puis Fxh7+ ou Dxh7 (exercice 4).",
       "<strong>Le cavalier f6 est libre</strong> : Fxh7+ perd une pièce (voir les erreurs typiques)."
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Nbd7",
       "e3",
       "Bd6",
       "Nf3",
       "O-O",
       "Bd3",
       "c6",
       "Qc2"
      ],
      "fleches": [
       [
        "d3h7",
        "v"
       ],
       [
        "g5d8",
        "r"
       ]
      ],
      "legende": "Les noirs ont mis leur fou en d6 au lieu de e7. Le cavalier f6 est cloué contre la dame : h7 ne tient plus. Les noirs doivent réagir (…h6 ou …dxc4), sinon Fxh7+ gagne un pion.",
      "marques": [
       "d6",
       "f6!",
       "h7!",
       "g5"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1"
      ],
      "coups": [
       "Ne6",
       "Bxf6",
       "Bxf6",
       "Bxh7+",
       "Kh8",
       "Bd3"
      ],
      "legendes": [
       "Le cavalier quitte f8, d'où il défendait h7.",
       "Tu supprimes l'autre défenseur de h7 : le cavalier f6.",
       "Les noirs reprennent.",
       "Le fou prend h7 avec échec. Le roi ne peut pas prendre : ta dame c2 protège le fou.",
       "Le roi s'écarte.",
       "Le fou revient : un pion de plus."
      ],
      "fin": "Stockfish : +1,3. Retiens l'ordre : d'abord supprimer le défenseur (Fxf6), ensuite prendre (Fxh7+).",
      "titre": "Fxf6, puis Fxh7+",
      "quiz": [
       "qa3bbaa89a"
      ],
      "marques": [
       [
        "f8",
        "h7!"
       ],
       [
        "f6!",
        "h7!"
       ],
       [
        "f6!"
       ],
       [
        "h7!",
        "c2",
        "g8"
       ],
       [
        "h8"
       ],
       [
        "d3"
       ],
       [
        "f6",
        "h7"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Où placer tes pièces"
     },
     {
      "t": "table",
      "entetes": [
       "Pièce",
       "Case",
       "Pourquoi"
      ],
      "lignes": [
       [
        "Fou f1",
        "d3 (refusé) ; a2, c2 ou b1 (pion isolé)",
        "Il vise h7, ou f7 depuis a2. La dame se met derrière lui."
       ],
       [
        "Dame",
        "c2 (refusé) ; d3 (pion isolé)",
        "Sur la diagonale de h7 avec le fou : derrière lui en c2, devant lui en d3. En c2, elle surveille aussi la colonne c."
       ],
       [
        "Fou c1",
        "g5 ; ou f4 avec le pion isolé",
        "En g5, il attaque le cavalier f6, qui défend d5 et h7 (il le cloue si le fou noir n'est pas en e7)."
       ],
       [
        "Cavalier g1",
        "f3, puis e5",
        "En e5, il est soutenu par d4 et vise c6, d7 et f7."
       ],
       [
        "Cavalier b1",
        "c3",
        "Il attaque d5 et soutient e4. Dans la Carlsbad, il peut aller en a4 vers b6 ou c5."
       ],
       [
        "Tour a1",
        "b1 (Carlsbad) ; d1 (pion isolé)",
        "Elle soutient b4-b5, ou la poussée d5."
       ],
       [
        "Tour f1",
        "c1 (Carlsbad) ; e1 (pion isolé)",
        "Sur la colonne qui s'ouvre : c après bxc6, e à côté du pion isolé."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les ruptures : quand pousser tes pions"
     },
     {
      "t": "p",
      "html": "Une rupture, c'est un coup de pion qui attaque un pion adverse pour ouvrir le jeu. Chaque structure a la sienne."
     },
     {
      "t": "table",
      "entetes": [
       "Rupture",
       "Structure",
       "Quand la jouer"
      ],
      "lignes": [
       [
        "b4-b5",
        "Carlsbad",
        "Après Tb1, et a4 si les noirs ont joué …a6. Elle crée la faiblesse c6 ; si …cxb5, le pion d5 perd son soutien."
       ],
       [
        "d4-d5",
        "Pion isolé",
        "Quand tes tours sont en d1 et e1 et que les pièces noires sont mal placées : une dame en face de ta tour d1, un fou e7 peu défendu. Elle ouvre les lignes vers le roi."
       ],
       [
        "e3-e4",
        "Refusé, accepté",
        "Quand le pion d5 ne surveille plus e4 (après …dxc4) et que ton cavalier c3 défend e4. Avec un fou noir en d6 et un cavalier en f6, e4-e5 menace une fourchette (exercice 7)."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Contre les plans habituels des noirs"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…Ce4.</strong> Échange Fxe7 Dxe7, puis compte les défenseurs du cavalier e4. Si la dame noire quitte la colonne e, le cavalier e4 n'en a plus assez : <a class=\"lien-var\" href=\"#\" data-var=\"q76da77d06\">13…Dd8 ? 14.Cxe4</a> gagne un pion (Stockfish : +2,0).",
       "<strong>…Ff5 dans la Carlsbad.</strong> Regarde d'abord si le fou est protégé. S'il ne l'est pas, <a class=\"lien-var\" href=\"#\" data-var=\"q3553b1494\">11…Ff5 ? 12.Fxf5</a> gagne une pièce (Stockfish : +5,8). S'il l'est, laisse l'échange se faire et continue ton plan.",
       "<strong>…dxc4 puis …Cd5.</strong> Échange les fous en e7, roque, et surveille …e5 : sans préparation, cette poussée perd un pion.",
       "<strong>…Fd6 au lieu de …Fe7.</strong> Le cavalier f6 se retrouve cloué contre la dame : cherche Fxh7+ (exercice 3).",
       "<strong>…a5 pour freiner b4.</strong> Prépare b4 avec a3. Si b4 est déjà joué, b5 passe à côté du pion a5 (exercice 1).",
       "<strong>…c5 dans l'accepté.</strong> Après …cxd4 exd4, tu as le pion isolé : joue actif, comme plus haut."
      ]
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "Les pièges",
    "blocs": [
     {
      "t": "p",
      "html": "Deux sortes de pièges : ceux que tu tends, où les noirs perdent du matériel s'ils jouent le coup naturel, et ceux qu'on te tend, à connaître pour ne pas tomber dedans. Tous ont été vérifiés avec Stockfish. Le quiz de chaque piège te demande le bon coup : la punition quand l'adversaire se trompe, la parade quand c'est toi qui es visé."
     },
     {
      "t": "h",
      "html": "Ceux que tu tends"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "b5",
       "a4",
       "c6",
       "axb5"
      ],
      "coups": [
       "cxb5",
       "Qf3",
       "Nc6",
       "Qxc6+"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…cxb5</span> ?? Naturel : les noirs reprennent leur pion. Mais regarde la grande diagonale f3-a8 : il n'y a plus rien dessus.",
       "<span class=\"mv good\">6.Df3</span> ! La dame attaque la tour a8, et rien ne peut la protéger.",
       "Les noirs bouchent la diagonale avec le cavalier. Sur <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Fb7</a>, même punition.",
       "Tu prends le cavalier, avec échec."
      ],
      "fin": "Tu as gagné une pièce (Stockfish : +3,7). Si les noirs bouchent avec <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Fb7</a>, 7.Dxb7 gagne le fou, et la tour a8 est encore attaquée.",
      "titre": "Accepté : 5…cxb5 ?? 6.Df3",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "qc43ff2890",
       "q713a5c386"
      ],
      "marques": [
       [
        "b5!",
        "a8!"
       ],
       [
        "f3",
        "a8!"
       ],
       [
        "c6!",
        "f3",
        "a8"
       ],
       [
        "c6!",
        "e8"
       ],
       [
        "c6",
        "a8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "Bf5",
       "Qb3"
      ],
      "coups": [
       "Nbd7",
       "Bxf7#"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…Cbd7</span> ?? Développer, ça a l'air normal. Mais le cavalier vient de prendre la case d7, la seule fuite du roi.",
       "<span class=\"mv good\">6.Fxf7#</span> : mat. Le roi n'a aucune case (d7 son cavalier, e7 son pion, d8 sa dame, f8 son fou) et ta dame b3 protège le fou."
      ],
      "fin": "Mat au sixième coup. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q05ae68862\">5…b6</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q5e60b02a7\">5…Dc8</a>, le même 6.Fxf7+ gagne au moins un pion et empêche le roi noir de roquer.",
      "titre": "Accepté : 5…Cbd7 ?? 6.Fxf7#",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "qc2a8bfd37",
       "q05ae68862",
       "q5e60b02a7"
      ],
      "marques": [
       [
        "d7",
        "e8!",
        "f7!"
       ],
       [
        "e8!",
        "f7!",
        "b3",
        "d7"
       ],
       [
        "e8!",
        "f7",
        "b3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5",
       "Nxd5",
       "Nf3",
       "Nc6",
       "e4"
      ],
      "coups": [
       "e5",
       "exd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…e5</span> ?? Les noirs contre-attaquent au centre… et oublient que leur cavalier d5 est attaqué.",
       "<span class=\"mv good\">6.exd5</span> : le cavalier tombe."
      ],
      "fin": "Un cavalier de plus (Stockfish : +4,1). Retiens la question à se poser : quand j'attaque une pièce, est-ce que l'adversaire l'a mise à l'abri ? La bonne défense des noirs était <a class=\"lien-var\" href=\"#\" data-var=\"q482614658\">5…Cb6</a>.",
      "titre": "Marshall : 5…e5 ?? 6.exd5",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q8a0046435",
       "q482614658"
      ],
      "marques": [
       [
        "d5!",
        "e4"
       ],
       [
        "d5!"
       ],
       [
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "g6",
       "Nc3",
       "Bg7",
       "e4"
      ],
      "coups": [
       "Nxe4",
       "Nxe4",
       "d5",
       "cxd5",
       "Qxd5",
       "Nc3"
      ],
      "legendes": [
       "<span class=\"mv bad\">4…Cxe4</span> ?? Les noirs prennent ton pion e4 en comptant sur un tour.",
       "Tu reprends le cavalier.",
       "L'idée des noirs : le pion d5 attaque ton cavalier e4 et ton pion c4 en même temps.",
       "Tu prends le pion.",
       "La dame attaque ton cavalier e4 et ton pion d4.",
       "Le cavalier se met à l'abri. Les noirs vont récupérer le pion d4, mais ça s'arrête là."
      ],
      "fin": "Bilan : un cavalier contre deux pions pour toi (Stockfish : +3,4). Retiens : ton pion e4 défendu par le cavalier c3 ne se prend pas gratuitement.",
      "titre": "Est-indienne : 4…Cxe4 ??",
      "couleurs": [
       "r",
       "v",
       "g",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q1b7bfa42b"
      ],
      "marques": [
       [
        "e4!",
        "c3"
       ],
       [
        "e4!"
       ],
       [
        "d5",
        "e4!",
        "c4!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e4!",
        "d4!"
       ],
       [
        "d4!",
        "d5",
        "g7"
       ],
       [
        "c3",
        "e4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Ceux qu'on te tend"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Nbd7",
       "cxd5",
       "exd5"
      ],
      "coups": [
       "Nxd5",
       "Nxd5",
       "Bxd8",
       "Bb4+",
       "Qd2",
       "Bxd2+",
       "Kxd2",
       "Kxd8"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Cxd5</span> ?? Le cavalier f6 a l'air cloué, donc le pion d5 a l'air gratuit…",
       "…mais le cavalier n'est pas cloué pour de vrai : il prend quand même, et tant pis pour la dame.",
       "Tu prends la dame, comme prévu.",
       "Échec ! Le fou attaque ton roi.",
       "Tu dois parer l'échec : la dame s'interpose.",
       "Les noirs prennent ta dame à leur tour.",
       "Tu reprends le fou.",
       "Et le roi noir reprend ton fou d8."
      ],
      "fin": "Bilan : les dames ont disparu et tu as perdu un cavalier (Stockfish : −3,3). C'est le piège de l'éléphant. La règle : dans le refusé, quand un cavalier noir est en d7, ne prends jamais en d5 avec ton cavalier. Joue <a class=\"lien-var\" href=\"#\" data-var=\"qada680846\">5.e3</a>, ou <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>.",
      "titre": "Le piège de l'éléphant",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "qada680846",
       "q8f9efb5ee"
      ],
      "marques": [
       [
        "d5!",
        "f6",
        "g5",
        "d8"
       ],
       [
        "f6",
        "d5!",
        "d8!"
       ],
       [
        "d8!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "d2!"
       ],
       [
        "d2!"
       ],
       [
        "d8!"
       ],
       [
        "d7",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e5",
       "dxe5",
       "d4"
      ],
      "coups": [
       "e3",
       "Bb4+",
       "Bd2",
       "dxe3",
       "Bxb4",
       "exf2+",
       "Ke2",
       "fxg1=N+"
      ],
      "legendes": [
       "<span class=\"mv bad\">4.e3</span> ? Naturel : tu attaques le pion d4. Mais tu lui offres une case où avancer en prenant, juste devant ton roi.",
       "Échec.",
       "Tu bouches avec le fou.",
       "Le pion prend en e3 : il menace maintenant de prendre en f2 ou en d2.",
       "<span class=\"mv bad\">6.Fxb4</span> ?? Tu prends le fou…",
       "…et le pion prend en f2, avec échec.",
       "Ton roi doit bouger.",
       "Le pion prend ton cavalier et se transforme… en cavalier, avec échec. Sur 8.Txg1, …Fg4+ gagnerait ta dame."
      ],
      "fin": "C'est le piège de Lasker (Stockfish : −5,9). Contre le contre-gambit Albin 2…e5 3.dxe5 d4, joue <a class=\"lien-var\" href=\"#\" data-var=\"q15446cc39\">4.Cf3</a> : tu gardes ton pion de plus, en sécurité. Et si un jour tu as joué 4.e3 et que 5…dxe3 arrive, reprends <a class=\"lien-var\" href=\"#\" data-var=\"q450b3a77d\">6.fxe3</a>.",
      "titre": "Le piège de Lasker (contre-gambit Albin)",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "r",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q15446cc39",
       "q450b3a77d"
      ],
      "marques": [
       [
        "d4!",
        "e3",
        "e1"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "e3",
        "f2!",
        "d2!"
       ],
       [
        "b4!",
        "e3"
       ],
       [
        "f2!",
        "e1!"
       ],
       [
        "e1!",
        "f2"
       ],
       [
        "g1!",
        "e2!",
        "d1!",
        "c8"
       ],
       [
        "g1",
        "e2!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4",
       "Qb4+",
       "Bd2",
       "Qxb2"
      ],
      "coups": [
       "Bc3",
       "Bb4",
       "Qd2",
       "Bxc3",
       "Qxc3",
       "Qc1#"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Fc3</span> ?? Le fou chasse la dame b2 et protège ta tour a1. Ça a l'air malin…",
       "Le fou noir cloue ton fou c3 contre ton roi.",
       "Tu défends le fou c3 avec la dame.",
       "Les noirs prennent ton fou.",
       "Tu reprends…",
       "…et la dame noire mate en c1 : ta dame en c3 ne protège plus c1."
      ],
      "fin": "Mat. C'est le piège du gambit Englund (1…e5). Pour l'éviter : contre 1…e5, tu prends le pion, et après 4.Ff4 Db4+ 5.Fd2 Dxb2, joue <a class=\"lien-var\" href=\"#\" data-var=\"q280c70623\">6.Cc3</a> : le cavalier se met à l'abri et ta dame défend la tour a1.",
      "titre": "Le piège du gambit Englund",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q280c70623"
      ],
      "marques": [
       [
        "c3",
        "b2!",
        "a1"
       ],
       [
        "b4",
        "c3!",
        "e1"
       ],
       [
        "c3!",
        "b4"
       ],
       [
        "c3!"
       ],
       [
        "c3!"
       ],
       [
        "c1!",
        "e1!",
        "c3"
       ],
       [
        "c1",
        "e1!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "Bf5",
       "Qb3",
       "e6"
      ],
      "coups": [
       "Qxb7",
       "Be4"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Dxb7</span> ?! Le pion b7 a l'air gratuit…",
       "Bien vu pour les noirs : le fou attaque ta dame. Quand elle bouge, …Fxg2 gagne un pion et menace la tour h1. Stockfish : position égale (0,0)."
      ],
      "fin": "Rien de grave, mais tu as gâché ton avantage. Joue <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Cc3 d'abord, puis Dxb7</a> : +0,6.",
      "titre": "Accepté : la gourmandise trop tôt",
      "couleurs": [
       "r",
       "g"
      ],
      "quiz": [
       "qcdd21b677"
      ],
      "marques": [
       [
        "b7!"
       ],
       [
        "e4",
        "b7!",
        "g2!",
        "h1"
       ],
       [
        "b7!",
        "e4",
        "b1"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "Les exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire suit des règles simples : 2.c4, Cc3, e4 quand c'est possible, développer avant d'attaquer. Voici les endroits où la règle ne marche pas, et pourquoi. Clique sur le coup à jouer pour le voir sur l'échiquier."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "La règle dirait",
       "Joue plutôt",
       "Pourquoi"
      ],
      "lignes": [
       [
        "1…e5 (gambit Englund)",
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">2.dxe5</a>",
        "Le pion est gratuit (+1,3). Sur 2.c4 exd4, ta dame doit reprendre et se fait chasser par …Cc6 (−0,2)"
       ],
       [
        "1…c5",
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">2.d5</a>",
        "Sur 2.c4 cxd4, ton pion d4 disparaît et ta dame se fait chasser (−0,2 contre +0,7)"
       ],
       [
        "Accepté : 3…b5",
        "Attaquer c4 avec 4.b3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a>",
        "On attaque plutôt la base de la chaîne, le pion b5 (+1,0 contre +0,2)"
       ],
       [
        "Accepté : 4…Ff5",
        "Ne pas sortir la dame tôt",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Db3</a>",
        "Le fou a quitté c8 : double attaque sur b7 et f7"
       ],
       [
        "Refusé : 4…h6",
        "Garder la paire de fous (5.Fh4)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Fxf6</a>",
        "Supprime un défenseur de d5 (+1,2 contre +0,1)"
       ],
       [
        "Refusé : 3…dxc4",
        "Reprendre avec 4.e3 puis Fxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>",
        "Le centre complet en un coup (+0,6)"
       ],
       [
        "Marshall : 4…Fg4",
        "Ne pas bouger deux fois la même pièce",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">5.Ce5</a>",
        "Attaque le fou et prépare Db3 contre b7 (+1,3)"
       ],
       [
        "Est-indienne : 4…0-0",
        "Pousser 5.e5 pour chasser le cavalier",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">5.Cf3</a>",
        "Sur 5.e5, le cavalier recule en e8 et Stockfish ne te donne presque plus rien (+0,1 contre +0,6 pour 5.Cf3)"
       ],
       [
        "Est-indienne : 4…e6 ?!",
        "5.Cf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q63038f5a0\">5.e5</a>",
        "Ici le cavalier n'a plus de bonne case : il doit rentrer en g8 (+1,5). Sur 5…Cg4, 6.Dxg4"
       ],
       [
        "Benoni : 4…Fe7",
        "5.e4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">5.d6</a>",
        "Le pion attaque le fou, qui doit reculer en f8 (+2,5)"
       ]
      ]
     },
     {
      "t": "h",
      "html": "La plus importante : 1…e5"
     },
     {
      "t": "seq",
      "debut": [
       "d4"
      ],
      "coups": [
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4",
       "Qb4+",
       "Bd2",
       "Qxb2",
       "Nc3"
      ],
      "legendes": [
       "Le gambit Englund : les noirs offrent un pion dès le premier coup.",
       "Ici, pas de 2.c4 : <span class=\"mv good\">2.dxe5</span>, le pion est gratuit.",
       "Les noirs attaquent ton pion e5.",
       "Tu le défends en développant.",
       "La dame attaque e5 et prépare un piège.",
       "Tu défends encore e5.",
       "Échec, et la dame vise b2.",
       "Tu bouches avec le fou.",
       "La dame prend b2 et attaque ton cavalier b1 et ta tour a1.",
       "<span class=\"mv good\">6.Cc3</span> : le cavalier se met à l'abri, et ta dame d1 défend maintenant la tour a1. Surtout pas 6.Fc3 ?? : après …Fb4, tu perds au moins la tour a1 (voir les pièges)."
      ],
      "fin": "Tu as un pion de plus et ton développement est en avance : les noirs ont joué trois coups de dame. Stockfish : +2,0.",
      "titre": "Contre 1…e5 : prends !",
      "quiz": [
       "q6cc4c9200"
      ],
      "marques": [
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "b4",
        "e1!",
        "b2!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b2",
        "b1!",
        "a1!"
       ],
       [
        "d1",
        "a1!",
        "b2"
       ],
       [
        "d1",
        "a1",
        "c3",
        "b2"
       ]
      ]
     },
     {
      "t": "p",
      "html": "À retenir : sur 4…Db4+, 5.Fd2 est le bon coup, et après 5…Dxb2, 6.Cc3 est le seul. Tout autre coup perd la tour a1, et 6.Fc3 ?? est pire encore : après …Fb4, tu peux même te faire mater (voir Les pièges)."
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Exercices de milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Huit positions tirées de ton répertoire. Chacune vient d'une suite possible depuis l'ouverture, souvent avec une erreur typique des noirs. Trouve le coup des blancs : dans chaque position, Stockfish le place nettement devant tous les autres. Le bouton Quiz te demande tes coups ; ceux des noirs se jouent tout seuls."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "b5",
       "cxb5",
       "Nxd5"
      ],
      "legendes": [
       "<span class=\"mv good\">15.b5</span> ! Le pion passe à côté du pion a5 et attaque c6. Si les noirs le laissent faire, bxc6 leur laissera un pion c6 faible.",
       "Les noirs prennent… mais le pion c6 était le soutien de d5.",
       "Cxd5 ! Le pion d5 n'avait plus de défenseur. Ton cavalier le prend et attaque la dame e7."
      ],
      "fin": "Les noirs doivent sauver leur dame, et leur cavalier e4 a perdu le soutien du pion d5 : tu vas gagner encore du matériel (Stockfish : +4,8). Meilleure défense : 15…Cg6 16.bxc6 bxc6, mais les noirs gardent deux pions faibles, a5 et c6 (Stockfish : +1,1).",
      "titre": "Exercice 1 : l'attaque de minorité",
      "fen": "r1b1rnk1/1p2qpp1/2p4p/p2p4/1P1Pn3/2NBPN2/P1Q2PPP/1R3RK1 w - - 0 15",
      "quiz": [
       "qa326464e1"
      ],
      "marques": [
       [
        "b5",
        "a5",
        "c6!"
       ],
       [
        "c6",
        "d5!"
       ],
       [
        "d5!",
        "e7!"
       ],
       [
        "e7!",
        "e4!",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf6",
       "Bxf6",
       "Nxd5",
       "Qd8"
      ],
      "legendes": [
       "Fxf6 ! Le cavalier f6 était un des deux défenseurs de d5. Tu l'échanges.",
       "Les noirs reprennent avec le fou.",
       "Cxd5 ! Le pion c6 ne peut pas reprendre : …cxd5 ouvrirait la colonne c, et ta dame c2 prendrait la dame c7.",
       "La dame quitte la colonne c."
      ],
      "fin": "Ensuite 14.Cxf6+ Dxf6 : tu as gagné un pion (Stockfish : +2,1). C'est la même idée que 5.Fxf6 contre 4…h6 dans l'ouverture : supprimer un défenseur de d5.",
      "titre": "Exercice 2 : qui défend d5 ?",
      "fen": "r1b1rnk1/ppq1bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 4 12",
      "quiz": [
       "qc5ad3a23c"
      ],
      "marques": [
       [
        "f6!",
        "d5!",
        "c6"
       ],
       [
        "f6!"
       ],
       [
        "d5!",
        "c6",
        "c2",
        "c7!"
       ],
       [
        "d8"
       ],
       [
        "d5",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kh8"
      ],
      "legendes": [
       "Fxh7+ ! Le fou noir a quitté e7 : plus rien ne s'interpose entre ton fou g5 et la dame d8. Le cavalier f6 est cloué : s'il prend en h7, Fxd8. Et le roi ne peut pas prendre : ta dame c2 protège le fou.",
       "Le roi se range en h8."
      ],
      "fin": "Ton fou recule en d3 au coup suivant : un pion de plus, et un roi noir moins abrité (Stockfish : +2,4).",
      "titre": "Exercice 3 : la batterie Fd3 + Dc2",
      "fen": "r1bq1rk1/pp1n1ppp/2pb1n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R w KQ - 2 10",
      "quiz": [
       "q546213a00"
      ],
      "marques": [
       [
        "h7!",
        "f6!",
        "g5",
        "d8"
       ],
       [
        "h8"
       ],
       [
        "h7",
        "d3",
        "h8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf6",
       "Bxf6",
       "Qxh7#"
      ],
      "legendes": [
       "Fxf6 ! Avec le roi, le cavalier f6 est le seul défenseur de h7. Ta dame d3 et ton fou c2 visent h7 : c'est la batterie, dans l'autre sens.",
       "Les noirs reprennent sans voir la menace.",
       "Dxh7#. Le roi ne peut pas prendre (ton fou c2 protège la dame), et la tour f8 lui bloque la seule case libre."
      ],
      "fin": "Mat. Sur 14…gxf6, c'est le même mat. Il fallait jouer 14…g6, mais les noirs perdaient quand même une pièce après 15.Fxe7 (Stockfish : +5,0).",
      "titre": "Exercice 4 : le pion isolé et le roque noir",
      "fen": "2rq1rk1/1b2bppp/ppn1pn2/6B1/3P4/2NQ1N2/PPB2PPP/R3R1K1 w - - 0 14",
      "quiz": [
       "q7984f39dd"
      ],
      "marques": [
       [
        "f6!",
        "h7!",
        "d3",
        "c2"
       ],
       [
        "f6!",
        "h7!"
       ],
       [
        "h7!",
        "g8!",
        "c2",
        "f8"
       ],
       [
        "h7",
        "g8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d5",
       "exd5",
       "Nxd5",
       "Nxd5",
       "Bxd5"
      ],
      "legendes": [
       "d5 ! Ta tour d1 est derrière le pion, la dame noire juste devant, en d6. Le pion menace dxc6 ou dxe6 : la colonne d s'ouvrirait sur la dame.",
       "Les noirs prennent.",
       "Cxd5 ! Le cavalier attaque le fou e7, déjà attaqué par ta dame e2, et le cavalier f6.",
       "Les noirs échangent.",
       "Fxd5 ! Ton fou se place entre ta tour d1 et la dame d6 : dès qu'il bougera (Fxc6, Fxf7+), la tour attaquera la dame. Et le fou e7 reste attaqué par ton fou g5 et ta dame e2."
      ],
      "fin": "Les noirs ne peuvent pas tout parer : ils vont perdre du matériel (Stockfish : +4,7).",
      "titre": "Exercice 5 : le pion isolé et la colonne d",
      "fen": "r4rk1/pb2bppp/1pnqpn2/6B1/2BP4/2N2N2/PP2QPPP/3RR1K1 w - - 4 13",
      "quiz": [
       "q67510174b"
      ],
      "marques": [
       [
        "d5",
        "d1",
        "d6!",
        "c6!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e7!",
        "f6!",
        "e2"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "d1",
        "d6!",
        "e7!"
       ],
       [
        "d5",
        "d1",
        "d6!",
        "e7!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qb3",
       "e6",
       "Qxb7"
      ],
      "legendes": [
       "Db3 ! Le fou a quitté c8 : le pion b7 n'a plus de défenseur. Et si le cavalier d5 recule en b6, la diagonale de ta dame vers f7 s'ouvre.",
       "Les noirs ouvrent leur fou f8, mais oublient b7.",
       "Dxb7 : un pion de plus, et ta dame attaque la tour a8."
      ],
      "fin": "Stockfish : +1,6. C'est la suite logique de 5.Ce5 : le cavalier chasse le fou, la dame prend b7. Et sur 6…Cb6 ??, 7.Dxf7 est mat : le cavalier e5 protège ta dame.",
      "titre": "Exercice 6 : la Marshall avec …Fg4",
      "fen": "rn1qkb1r/ppp1pppp/8/3nNb2/3P4/8/PP2PPPP/RNBQKB1R w KQkq - 4 6",
      "quiz": [
       "q772650314"
      ],
      "marques": [
       [
        "b3",
        "b7!",
        "d5",
        "f7"
       ],
       [
        "f8",
        "b7!",
        "b3"
       ],
       [
        "b7",
        "a8!"
       ],
       [
        "e5",
        "b7",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "Nbd7",
       "e5"
      ],
      "legendes": [
       "e4 ! Ton cavalier c3 soutient le pion. Et il y a une menace : e5 attaquerait à la fois le fou d6 et le cavalier f6.",
       "Les noirs développent sans voir la menace.",
       "e5 ! Une fourchette : le pion attaque le fou et le cavalier. L'un des deux va tomber."
      ],
      "fin": "Tu gagnes une pièce contre un pion (Stockfish : +4,5). La meilleure défense était 8…Fb4 (ou 8…Fe7) ; après 9.e5 Cd5, tu gardes un grand centre et de l'espace (Stockfish : +1,9).",
      "titre": "Exercice 7 : l'accepté avec …Fd6",
      "fen": "rnbq1rk1/ppp2pp1/3bpn1p/8/2BP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 0 8",
      "quiz": [
       "q58a52058a"
      ],
      "marques": [
       [
        "e4",
        "c3",
        "d6!",
        "f6!"
       ],
       [
        "e4",
        "d6!",
        "f6!"
       ],
       [
        "e5!",
        "d6!",
        "f6!"
       ],
       [
        "e5",
        "d6!",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Ne5",
       "Ng6"
      ],
      "legendes": [
       "Ce5 ! Avec …b6, les noirs ont retiré le pion qui défendait c6. Ton cavalier, soutenu par d4, attaque ce pion que plus rien ne protège.",
       "Les noirs attaquent ton cavalier."
      ],
      "fin": "17.Cxc6 : le pion tombe, et ton cavalier attaque la dame e7 (Stockfish : +2,3). Voilà à quoi sert l'attaque de minorité : créer un pion c6 que tu finis par gagner.",
      "titre": "Exercice 8 : après l'attaque de minorité",
      "fen": "r3rnk1/4qppp/ppp5/3p1b2/PP1Pn3/2NBPN2/2Q2PPP/1RR3K1 w - - 0 16",
      "quiz": [
       "q4343b279f"
      ],
      "marques": [
       [
        "e5",
        "c6!",
        "d4",
        "b6"
       ],
       [
        "g6",
        "e5!"
       ],
       [
        "e5",
        "c6!",
        "e7!"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Parties modèles",
    "blocs": [
     {
      "t": "p",
      "html": "Deux parties construites pour la leçon : les coups adverses sont des erreurs typiques entre 1000 et 1600 Elo, et chacun de tes coups a été vérifié avec Stockfish. Ce ne sont pas des parties réelles. Elles montrent comment les plans de cette leçon s'enchaînent, de l'ouverture jusqu'au gain. Avance coup par coup et lis les explications ; les coups clés sont en couleur."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1",
       "Ng6",
       "b4",
       "a6",
       "a4",
       "Bd7",
       "b5",
       "axb5",
       "axb5",
       "Bd6",
       "bxc6",
       "bxc6",
       "Na4",
       "Qe7",
       "Nb6",
       "Rab8",
       "Nxd7",
       "Qxd7",
       "Bxf6",
       "gxf6",
       "Rxb8",
       "Rxb8",
       "Rc1",
       "Ne7",
       "Bxh7+",
       "Kg7",
       "Bd3",
       "Nf5",
       "Bxf5",
       "Qb7",
       "Qxc6",
       "Qxc6",
       "Rxc6"
      ],
      "legendes": [
       "Ton premier coup.",
       "Les noirs répondent au centre.",
       "Le Gambit Dame.",
       "Les noirs refusent : c'est le Gambit Dame refusé.",
       "Deuxième attaquant sur d5.",
       "Un défenseur de plus.",
       "Le clouage.",
       "Les noirs déclouent.",
       "Tu ouvres ton fou f1.",
       "Les noirs roquent.",
       "Développement.",
       "L'autre cavalier sort. Rappel : avec un cavalier noir en d7, ne prends jamais en d5 avec ton cavalier.",
       "La dame prépare la batterie avec le fou.",
       "Les noirs renforcent d5.",
       "La batterie Fd3 + Dc2 est en place : elle vise h7.",
       "La tour prépare …Cf8.",
       "Tu échanges en d5 : c'est la structure Carlsbad.",
       "Les noirs reprennent avec le pion e.",
       "Ton roi est à l'abri.",
       "Le cavalier passe par f8 : de là, il défend h7.",
       "La tour vient soutenir la poussée b4 : l'attaque de minorité commence.",
       "Le cavalier se rapproche de ton roi.",
       "Premier pas de l'attaque de minorité.",
       "Les noirs surveillent b5.",
       "Tu soutiens b5 avec le pion a.",
       "Le fou se place en d7, d'où il défend c6.",
       "C'est le moment : b5 attaque c6.",
       "Les noirs prennent.",
       "Tu reprends : la colonne a s'ouvre, et le pion b5 attaque encore c6.",
       "Le fou e7 vient en d6 et se tourne vers ton roque.",
       "Tu prends en c6.",
       "Voilà la faiblesse : un pion c6 seul sur la colonne c, et plus aucun pion noir pour surveiller b6 et c5.",
       "Le cavalier vise b6 et c5, deux cases d'où aucun pion ne pourra le chasser.",
       "<span class=\"mv bad\">17…De7</span> ? La dame quitte d8, d'où elle surveillait b6.",
       "Le cavalier entre en b6 : il attaque la tour a8 et le fou d7.",
       "La tour s'échappe et attaque ton cavalier.",
       "Tu prends le fou qui défendait c6 : c'est plus fort que de laisser ton cavalier en b6.",
       "La dame reprend.",
       "Tu prends le cavalier f6 : les pions qui protègent le roi noir vont être abîmés.",
       "Le pion g reprend : le roi noir est découvert.",
       "Tu échanges les tours sur la colonne b.",
       "La tour reprend.",
       "Ta tour vise le pion faible c6. Avec ta dame c2, tu l'attaques déjà deux fois.",
       "Le cavalier vient défendre c6… mais il quitte g6, où il bouchait la diagonale de ta batterie.",
       "<span class=\"mv good\">23.Fxh7+</span> ! Plus rien ne protège h7, et le roi ne peut pas prendre : ta dame c2 soutient le fou.",
       "Le roi s'écarte.",
       "Le fou revient. Tu as un pion de plus, et le roi noir n'a plus d'abri.",
       "<span class=\"mv bad\">24…Cf5</span> ?? Le cavalier saute en f5, sur la diagonale de ta batterie.",
       "Tu prends. Le cavalier était défendu par la dame d7, mais si …Dxf5, ta dame c2 prend la dame noire : c'est la batterie.",
       "Les noirs ne reprennent pas : ils ont une pièce de moins.",
       "Tu prends le pion c6 et tu proposes l'échange des dames. Avec une pièce de plus, chaque échange te rapproche du gain.",
       "Les noirs échangent.",
       "La tour reprend."
      ],
      "fin": "Les noirs abandonnent : ils ont une pièce et deux pions de moins (Stockfish : +6,5). Le plan, dans l'ordre : la structure Carlsbad (9.cxd5), l'attaque de minorité (b4, a4, b5, bxc6), un cavalier sur le trou b6, puis la batterie Fd3 + Dc2 contre h7 et f5.",
      "titre": "Partie modèle 1 : le refusé et l'attaque de minorité",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "c4",
        "d5"
       ],
       [
        "e6",
        "d5"
       ],
       [
        "c3",
        "c4",
        "d5!"
       ],
       [
        "f6",
        "d5"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "e7",
        "f6"
       ],
       [
        "f1"
       ],
       [
        "g8"
       ],
       [
        "f3"
       ],
       [
        "d7",
        "d5",
        "c3"
       ],
       [
        "c2",
        "f1",
        "h7"
       ],
       [
        "c6",
        "d5"
       ],
       [
        "d3",
        "c2",
        "h7!"
       ],
       [
        "e8",
        "d7",
        "f8"
       ],
       [
        "d5!"
       ],
       [
        "e6",
        "d5!"
       ],
       [
        "g1"
       ],
       [
        "f8",
        "h7"
       ],
       [
        "b1",
        "b2",
        "b4"
       ],
       [
        "g6",
        "g1"
       ],
       [
        "b4"
       ],
       [
        "a6",
        "b5"
       ],
       [
        "a4",
        "b5"
       ],
       [
        "d7",
        "c6"
       ],
       [
        "b5",
        "c6!"
       ],
       [
        "b5!"
       ],
       [
        "b5",
        "c6!"
       ],
       [
        "d6",
        "h2"
       ],
       [
        "c6!"
       ],
       [
        "c6!",
        "b6",
        "c5"
       ],
       [
        "a4",
        "b6",
        "c5"
       ],
       [
        "d8",
        "b6",
        "a4"
       ],
       [
        "b6",
        "a8!",
        "d7!"
       ],
       [
        "b8",
        "b6!"
       ],
       [
        "d7!",
        "c6",
        "b6"
       ],
       [
        "d7!"
       ],
       [
        "f6!",
        "g7",
        "g8"
       ],
       [
        "f6!",
        "g8"
       ],
       [
        "b8!"
       ],
       [
        "b8!"
       ],
       [
        "c1",
        "c2",
        "c6!"
       ],
       [
        "e7",
        "g6",
        "d3",
        "h7!"
       ],
       [
        "h7!",
        "c2",
        "g8"
       ],
       [
        "g7"
       ],
       [
        "d3",
        "g7"
       ],
       [
        "f5!",
        "d3",
        "c2"
       ],
       [
        "f5!",
        "d7",
        "c2"
       ],
       [
        "f5"
       ],
       [
        "c6!",
        "b7"
       ],
       [
        "c6!"
       ],
       [
        "c6!"
       ],
       [
        "c6",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Be7",
       "Nc3",
       "O-O",
       "Re1",
       "Nc6",
       "a3",
       "b6",
       "Ba2",
       "Bb7",
       "Bf4",
       "Rc8",
       "Qd3",
       "Re8",
       "Rad1",
       "Bd6",
       "Ne5",
       "Bb8",
       "Qh3",
       "g6",
       "Nxf7",
       "Kxf7",
       "Bxe6+",
       "Kg7",
       "Bh6+",
       "Kh8",
       "Bg5",
       "Rf8",
       "Qh4",
       "Bd6",
       "d5",
       "Ne5",
       "Ne4",
       "Rc4",
       "Bxf6+",
       "Rxf6",
       "Qxf6+",
       "Qxf6",
       "Nxf6"
      ],
      "legendes": [
       "Ton premier coup.",
       "Les noirs répondent au centre.",
       "Le Gambit Dame.",
       "Les noirs acceptent : c'est le Gambit Dame accepté.",
       "Tu ouvres ton fou f1, qui menace de reprendre en c4.",
       "Les noirs développent.",
       "Tu reprends le pion.",
       "Les noirs ouvrent leur fou f8.",
       "Développement.",
       "Les noirs attaquent ton pion d4.",
       "Tu roques d'abord.",
       "Les noirs échangent.",
       "Tu reprends avec le pion e : ton pion d4 est isolé, et ton fou c1 est libéré.",
       "Développement.",
       "Le cavalier soutient la poussée d5 pour plus tard.",
       "Les noirs roquent.",
       "La tour sur la colonne e, semi-ouverte, à côté de ton pion isolé.",
       "Le cavalier attaque d4.",
       "Un coup utile : il empêche …Cb4 et prépare Fa2.",
       "Les noirs préparent …Fb7.",
       "Le fou se met à l'abri sur la diagonale qui mène à e6 et f7.",
       "Le fou se place en b7.",
       "Le fou c1 sort sur une bonne diagonale.",
       "La tour sur la colonne c.",
       "La dame se rapproche du roque noir.",
       "La tour libère f8 pour le fou.",
       "Ta dernière pièce entre en jeu : la tour soutient d4 et prépare d5.",
       "Les noirs proposent l'échange des fous.",
       "<span class=\"mv good\">15.Ce5</span> ! Le cavalier s'installe sur la case que ton pion d4 lui offre. Il vise f7 et c6.",
       "Le fou garde la diagonale.",
       "La dame passe à l'attaque : elle vise h7 et e6.",
       "<span class=\"mv bad\">16…g6</span> ?? Les noirs ne voient pas la menace Cxf7 : f7 et e6 restent faibles, ton fou a2 les vise déjà.",
       "<span class=\"mv good\">17.Cxf7</span> ! Si le roi reprend, ton fou prend e6 avec échec.",
       "Les noirs prennent.",
       "Le fou entre avec échec, protégé par ta dame h3.",
       "Le roi s'enfuit. Sur 18…Rf8 ??, 19.Dh6+ Re7 20.Dg7# : mat.",
       "Échec : le fou vient en h6, protégé par la dame.",
       "Le roi va dans le coin.",
       "Le fou revient en g5 : il cloue le cavalier f6 contre la dame d8.",
       "La tour défend f6.",
       "La dame se place derrière le fou : f6 est maintenant attaqué deux fois.",
       "Les noirs replacent leur fou.",
       "<span class=\"mv good\">22.d5</span> ! La poussée du pion isolé : il chasse le cavalier c6 et coupe le fou b7. Ton cavalier va pouvoir venir en e4.",
       "Le cavalier part en e5.",
       "Troisième attaquant sur f6 : le fou g5, la dame h4 et le cavalier e4.",
       "La tour attaque ton cavalier e4.",
       "Tu prends en f6 avec échec.",
       "La tour reprend.",
       "La dame prend la tour.",
       "La dame noire reprend.",
       "Et le cavalier reprend la dame."
      ],
      "fin": "Les noirs abandonnent. Tu as gagné la qualité (une tour contre un fou) et deux pions, et ton fou e6 domine (Stockfish : +5,6). Le plan, dans l'ordre : le pion isolé (7.exd4), des pièces actives (Fa2, Ff4, Dd3, Tad1), le cavalier en e5, l'attaque sur f7, puis la poussée d5.",
      "titre": "Partie modèle 2 : l'accepté et le pion isolé",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "c4",
        "d5"
       ],
       [
        "c4!"
       ],
       [
        "f1",
        "c4!"
       ],
       [],
       [
        "c4!"
       ],
       [
        "f8"
       ],
       [],
       [
        "c5",
        "d4!"
       ],
       [
        "g1"
       ],
       [
        "d4!"
       ],
       [
        "d4",
        "c1"
       ],
       [
        "e7"
       ],
       [
        "c3",
        "d4",
        "d5"
       ],
       [
        "g8"
       ],
       [
        "e1",
        "d4"
       ],
       [
        "c6",
        "d4!"
       ],
       [
        "a3",
        "b4",
        "c4",
        "a2"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "a2",
        "e6",
        "f7"
       ],
       [
        "b7"
       ],
       [
        "f4"
       ],
       [
        "c8"
       ],
       [
        "d3",
        "g8"
       ],
       [
        "e8",
        "f8",
        "e7"
       ],
       [
        "d1",
        "d4",
        "d5"
       ],
       [
        "d6",
        "f4"
       ],
       [
        "e5",
        "d4",
        "f7!",
        "c6!"
       ],
       [
        "b8"
       ],
       [
        "h3",
        "h7!",
        "e6!"
       ],
       [
        "f7!",
        "e6!",
        "a2",
        "e5"
       ],
       [
        "f7!",
        "e6!",
        "a2"
       ],
       [
        "f7!"
       ],
       [
        "e6",
        "h3",
        "f7!"
       ],
       [
        "g7",
        "f8",
        "h3"
       ],
       [
        "h6",
        "h3",
        "g7!"
       ],
       [
        "h8"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "f8",
        "f6!"
       ],
       [
        "h4",
        "g5",
        "f6!"
       ],
       [
        "d6"
       ],
       [
        "d5",
        "c6!",
        "b7",
        "e4"
       ],
       [
        "e5"
       ],
       [
        "e4",
        "g5",
        "h4",
        "f6!"
       ],
       [
        "c4",
        "e4!"
       ],
       [
        "f6!",
        "h8"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "e6",
        "d5"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "Il joue n'importe quoi",
    "blocs": [
     {
      "t": "p",
      "html": "Entre 1000 et 1600, beaucoup d'adversaires sortent de la théorie très tôt. Ton répertoire couvre les trois réponses les plus jouées à chaque coup ; pour le reste, voici quoi faire. Rien à apprendre par cœur : quatre principes et deux tableaux. Clique sur un plan pour le voir sur l'échiquier."
     },
     {
      "t": "h",
      "html": "Quatre principes"
     },
     {
      "t": "liste",
      "items": [
       "<strong>2.c4 tient presque toujours.</strong> Seules exceptions : <a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">1…e5</a> et <a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">1…c5</a>.",
       "<strong>Si les noirs ne jouent pas …d5, prends tout le centre.</strong> Cc3 puis e4 : trois pions au centre contre zéro (<a class=\"lien-var\" href=\"#\" data-var=\"q5d8f5345a\">exemple</a>).",
       "<strong>Si le fou c8 sort tôt, regarde b7.</strong> Db3 attaque souvent b7 (et f7 si ton fou est en c4) : <a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Db3</a> dans le gambit accepté, <a class=\"lien-var\" href=\"#\" data-var=\"q3ecc31f14\">4.Db3 contre 2…Ff5</a>.",
       "<strong>Développe avant d'attaquer.</strong> Cavaliers, fous, roque. Ne bouge pas deux fois la même pièce, sauf pour gagner du matériel ou chasser une pièce mal placée."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "Les autres premiers coups"
     },
     {
      "t": "table",
      "entetes": [
       "1.d4 …",
       "Ton plan",
       "Stockfish au bout de la ligne"
      ],
      "lignes": [
       [
        "1…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2ad83de0c\">2.c4 Fg7 3.Cc3 ; contre 3…c5, 4.d5</a>",
        "+0,3"
       ],
       [
        "1…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5d54f62ba\">2.c4 ; contre 2…e5, 3.Cf3</a>",
        "+0,3"
       ],
       [
        "1…f5 (hollandaise)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qaf9530e80\">2.c4 Cf6 3.Cc3</a>",
        "+0,6"
       ],
       [
        "1…b6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5d8f5345a\">2.c4 Fb7 3.Cc3 e6 4.e4</a>",
        "+0,4"
       ],
       [
        "1…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q24fa84b8d\">2.c4 ; contre 2…e5, 3.d5 et 4.e4</a>",
        "+0,6"
       ],
       [
        "1…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q89121ed02\">2.c4 d5</a> : c'est la Slave, voir plus bas",
        "+0,3"
       ],
       [
        "1…a6, 1…h6…",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q48c3c41c7\">2.c4, Cc3, e4</a> : le centre",
        "+0,4"
       ],
       [
        "1…Cf6 2.c4 c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb7b2a2a4b\">3.d5</a>",
        "+0,7"
       ],
       [
        "1…Cf6 2.c4 e5 (gambit de Budapest)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qe85ab425b\">3.dxe5 Cg4 4.Ff4</a>",
        "+0,5"
       ],
       [
        "1…Cf6 2.c4 Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde19d5eb8\">3.Cc3</a>",
        "+0,6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les autres deuxièmes coups après 1.d4 d5 2.c4"
     },
     {
      "t": "table",
      "entetes": [
       "2…",
       "Nom",
       "Ton plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "2…c6",
        "Défense slave",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q359f0032d\">3.Cc3 ; contre 3…dxc4, 4.e4 et 5.a4 contre …b5</a>",
        "+0,2"
       ],
       [
        "2…e5",
        "Contre-gambit Albin",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q690fb882e\">3.dxe5 d4 4.Cf3</a> (pas 4.e3 : piège de Lasker), puis g3 ou a3",
        "+0,5"
       ],
       [
        "2…Cc6",
        "Défense Tchigorine",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5c61fa650\">3.Cc3</a> ou 3.Cf3, développement normal",
        "+0,6"
       ],
       [
        "2…Ff5",
        "Défense balte",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3ecc31f14\">3.Cc3, puis Db3 contre b7</a>",
        "+0,4 à +0,8"
       ],
       [
        "2…c5",
        "Gambit symétrique",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa59d47c3c\">3.cxd5 ; contre 3…Cf6, 4.e4</a>",
        "+0,6"
       ],
       [
        "2…g6",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q33ff99518\">3.cxd5 ; contre 3…Cf6, 4.Cf3</a>",
        "+0,8"
       ],
       [
        "2…Fg4",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q143044777\">3.Cc3</a>, ou 3.Db3 contre b7",
        "+0,8 à +1,0"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "c6",
       "Nc3",
       "dxc4",
       "e4",
       "b5",
       "a4"
      ],
      "legendes": [
       "La Slave : les noirs soutiennent d5 avec le pion c, sans enfermer leur fou c8.",
       "Ton réflexe : Cc3.",
       "Les noirs prennent le pion.",
       "Même idée que dans le refusé : le centre complet.",
       "Les noirs défendent c4 avec b5, comme dans l'accepté.",
       "Même réponse : on attaque la base de la chaîne."
      ],
      "fin": "Tu reconnais les idées de ton répertoire : e4 quand les noirs lâchent d5, a4 contre …b5. Stockfish : +0,2, une position saine.",
      "titre": "2…c6, la Slave",
      "quiz": [
       "q359f0032d"
      ],
      "marques": [
       [
        "d5",
        "c8"
       ],
       [],
       [
        "c4!"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "c4",
        "b5"
       ],
       [
        "b5!",
        "c4"
       ],
       [
        "e4",
        "a4",
        "b5!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "e5",
       "dxe5",
       "d4",
       "Nf3",
       "Nc6",
       "g3"
      ],
      "legendes": [
       "Le contre-gambit Albin : les noirs offrent un pion pour gêner ton développement.",
       "Tu prends.",
       "Le pion d4 gêne ton cavalier b1 et ton pion e2.",
       "<span class=\"mv good\">4.Cf3</span> : tu développes et tu défends e5. C'est le coup qui évite le piège de Lasker.",
       "Les noirs attaquent e5.",
       "Ton fou ira en g2, sur la grande diagonale."
      ],
      "fin": "Un pion de plus et une position saine (Stockfish : +0,5). Ton plan : Fg2, 0-0, Cbd2.",
      "titre": "2…e5, l'Albin",
      "quiz": [
       "q690fb882e"
      ],
      "marques": [
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "d4",
        "b1",
        "e2"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "e5!"
       ],
       [
        "f1",
        "g2"
       ],
       [
        "e5",
        "f1",
        "b1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Après le répertoire"
     },
     {
      "t": "p",
      "html": "Ton répertoire s'arrête à ton 5e coup. Ensuite, déroule les trois temps du plan : finis ton développement et roque, pousse e4 dès que c'est possible, puis mets la pression (une tour sur la colonne c, la dame en c2). Si tu ne sais pas quoi jouer, demande-toi : quelle est ma pièce la moins active ? Améliore-la."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "À retenir",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1.d4 et 2.c4 contre tout, sauf 1…e5 (<a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">2.dxe5</a>) et 1…c5 (<a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">2.d5</a>).",
       "Le pion c4 n'est pas perdu : e3 puis <a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Fxc4</a>, ou <a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a> contre …b5.",
       "Contre …e6 : Cc3, Fg5, e3, Cf3, Fd3, 0-0 (<a class=\"lien-var\" href=\"#\" data-var=\"qb5198fd5b\">5.e3</a>).",
       "Quand les noirs lâchent d5 (…dxc4 après …e6, …Cxd5, …g6), prends le centre avec e4 (<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>).",
       "Contre …h6 dans le refusé : <a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Fxf6</a>, puis cxd5 et Cxd5 si la dame a repris.",
       "Contre …c5 : <a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>, jamais dxc5.",
       "Contre …Fxc3+ : <a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">bxc3</a>.",
       "Si le fou c8 sort tôt : Db3 contre b7 (<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Db3</a>).",
       "Ne prends jamais en d5 avec le cavalier quand un cavalier noir est en d7 (piège de l'éléphant : <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>).",
       "Contre l'Albin, <a class=\"lien-var\" href=\"#\" data-var=\"q15446cc39\">4.Cf3</a>, pas 4.e3."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "qfaf8ff6ad": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "e6",
     "Bxc4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent d'abord la sortie de leur fou f8.",
     "Tu reprends le pion, comme dans la ligne principale.",
     "Le cavalier sort.",
     "Tu sors ton cavalier : c'est exactement la même position qu'après 3…Cf6 4.Fxc4 e6 5.Cf3."
    ],
    "fin": "Même position que la ligne principale : l'ordre des coups ne change rien.",
    "titre": "Accepté : 3…e6 mène au même endroit",
    "marques": [
     [
      "f8"
     ],
     [
      "c4!"
     ],
     [],
     [],
     []
    ]
   },
   "q62b65fac6": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent l'autre cavalier.",
     "Développe, tout simplement : le cavalier défend d4 et prépare le roque."
    ],
    "fin": "",
    "titre": "Accepté : 4…Cc6 5.Cf3",
    "marques": [
     [],
     [
      "d4",
      "e1"
     ],
     []
    ]
   },
   "qf10e00271": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent leur cavalier dame.",
     "Développe : le cavalier défend d4 et prépare le roque."
    ],
    "fin": "",
    "titre": "Accepté : 3…e6 4.Fxc4 Cc6 5.Cf3",
    "marques": [
     [],
     [
      "d4",
      "e1"
     ],
     []
    ]
   },
   "qe7ff82d8d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Bb4+",
     "Nc3"
    ],
    "legendes": [
     "Échec du fou.",
     "Interpose le cavalier : il pare l'échec et se développe en même temps."
    ],
    "fin": "",
    "titre": "Accepté : 4…Fb4+ 5.Cc3",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "b4",
      "e1!"
     ],
     []
    ]
   },
   "qbe59e3b4a": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3"
    ],
    "legendes": [
     "Les noirs reprennent leur pion. Erreur : la grande diagonale f3-a8 est maintenant vide.",
     "La dame attaque la tour a8, et rien ne peut la protéger."
    ],
    "fin": "",
    "titre": "Accepté : 5…cxb5 ?? 6.Df3",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "b5!",
      "a8!"
     ],
     [
      "f3",
      "a8!"
     ],
     [
      "f3",
      "a8!"
     ]
    ]
   },
   "q23b50555d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "Bd7",
     "axb5"
    ],
    "legendes": [
     "Le fou soutient b5.",
     "Même idée : tu prends en b5, la chaîne des noirs s'effondre et c4 va tomber."
    ],
    "fin": "",
    "titre": "Accepté : 4…Fd7 5.axb5",
    "marques": [
     [
      "b5!",
      "a4"
     ],
     [
      "b5!",
      "c4!"
     ],
     []
    ]
   },
   "q4e88a8472": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "bxa4",
     "Bxc4"
    ],
    "legendes": [
     "Les noirs prennent en a4.",
     "Tu reprends ton pion c4. Les noirs gardent deux pions a isolés, faibles."
    ],
    "fin": "",
    "titre": "Accepté : 4…bxa4 5.Fxc4",
    "marques": [
     [
      "a4!"
     ],
     [
      "c4!",
      "a4!",
      "a7"
     ],
     []
    ]
   },
   "qf5304b87b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Qxb7",
     "Be4"
    ],
    "legendes": [
     "Gourmand : le pion b7 a l'air gratuit…",
     "…mais le fou attaque ta dame et menace …Fxg2."
    ],
    "fin": "",
    "titre": "Accepté : 6.Dxb7 ?! Fe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "b7!"
     ],
     [
      "e4",
      "b7!",
      "g2!"
     ],
     [
      "e4",
      "b7!"
     ]
    ]
   },
   "qc2a8bfd37": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Nbd7",
     "Bxf7#"
    ],
    "legendes": [
     "Le cavalier prend la case d7, la seule fuite du roi noir.",
     "Mat : le roi n'a plus aucune case, et ta dame b3 protège le fou."
    ],
    "fin": "",
    "titre": "Accepté : 5…Cbd7 ?? 6.Fxf7#",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "d7",
      "e8!",
      "f7!"
     ],
     [
      "f7!",
      "e8!",
      "b3"
     ],
     [
      "e8!",
      "f7"
     ]
    ]
   },
   "qcdd21b677": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Nc3",
     "Bd6",
     "Qxb7"
    ],
    "legendes": [
     "Le cavalier contrôle e4 et b5 : le fou noir ne pourra plus venir en e4.",
     "Les noirs développent.",
     "Maintenant le pion b7 tombe sans risque."
    ],
    "fin": "",
    "titre": "Accepté : 6.Cc3 puis Dxb7",
    "marques": [
     [
      "e4",
      "b5",
      "f5"
     ],
     [],
     [
      "b7!"
     ],
     []
    ]
   },
   "q713a5c386": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5",
     "cxb5",
     "Qf3"
    ],
    "coups": [
     "Bb7",
     "Qxb7"
    ],
    "legendes": [
     "Les noirs bouchent la diagonale avec le fou.",
     "Ta dame prend le fou, et la tour a8 est encore attaquée."
    ],
    "fin": "",
    "titre": "Accepté : 6…Fb7 7.Dxb7",
    "marques": [
     [
      "b7!",
      "f3",
      "a8"
     ],
     [
      "b7!",
      "a8!"
     ],
     [
      "b7",
      "a8!"
     ]
    ]
   },
   "q05ae68862": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "b6",
     "Bxf7+"
    ],
    "legendes": [
     "Les noirs mettent leur pion b à l'abri en b6, protégé par a7 et c7… mais oublient f7.",
     "Le fou prend f7 avec échec : le roi noir doit bouger et ne pourra plus roquer."
    ],
    "fin": "",
    "titre": "Accepté : 5…b6 ? 6.Fxf7+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "b6",
      "a7",
      "c7",
      "f7!"
     ],
     [
      "f7!",
      "e8!"
     ],
     [
      "f7",
      "e8!"
     ]
    ]
   },
   "q5e60b02a7": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Qc8",
     "Bxf7+"
    ],
    "legendes": [
     "La dame défend b7… mais f7 n'est défendu que par le roi, qui ne pourra pas reprendre : ta dame b3 protège le fou.",
     "Le fou prend f7 avec échec : un pion de plus, et le roi noir ne pourra plus roquer."
    ],
    "fin": "",
    "titre": "Accepté : 5…Dc8 ? 6.Fxf7+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "f7!",
      "e8",
      "b3",
      "c4"
     ],
     [
      "f7!",
      "e8!"
     ],
     [
      "f7",
      "e8!"
     ]
    ]
   },
   "qe2c942a05": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier c3 contre ton roi.",
     "Tu ouvres ton fou f1 et tu restes solide. Si …Fxc3+, tu reprendras avec le pion b."
    ],
    "fin": "",
    "titre": "Refusé : 4…Fb4 5.e3",
    "marques": [
     [
      "b4",
      "c3!",
      "e1"
     ],
     [
      "f1",
      "c3!",
      "b2"
     ],
     []
    ]
   },
   "qd5b9c96e1": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "h6",
     "Bxf6"
    ],
    "coups": [
     "gxf6",
     "cxd5",
     "exd5",
     "e3"
    ],
    "legendes": [
     "Les noirs reprennent avec le pion g.",
     "Tu échanges au centre.",
     "Les noirs reprennent.",
     "Développement : le fou f1 sortira ensuite. Les noirs gardent des pions doublés en f et un roi moins abrité."
    ],
    "fin": "",
    "titre": "Refusé : 4…h6 5.Fxf6 gxf6",
    "marques": [
     [
      "f6!"
     ],
     [
      "d5!"
     ],
     [
      "d5!"
     ],
     [
      "f1",
      "f6",
      "f7",
      "e8"
     ],
     []
    ]
   },
   "q84ccf2a91": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent leur cavalier.",
     "Tu défends d4 en développant. Si les noirs jouent ensuite …b5, ton cavalier prend le pion : Cxb5."
    ],
    "fin": "",
    "titre": "Refusé : 3…dxc4 4.e4 Cc6 5.Cf3",
    "marques": [
     [],
     [
      "d4!",
      "c3",
      "b5"
     ],
     []
    ]
   },
   "qfd0499a86": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Le cavalier attaque e4.",
     "Tu reprends le pion ; e4 reste défendu par le cavalier c3."
    ],
    "fin": "",
    "titre": "Refusé : 3…dxc4 4.e4 Cf6 5.Fxc4",
    "marques": [
     [
      "e4!"
     ],
     [
      "c4!",
      "e4",
      "c3",
      "f6"
     ],
     []
    ]
   },
   "qf64608c7a": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Les noirs développent.",
     "Le clouage, comme dans la ligne principale : ton fou cloue le cavalier f6 contre la dame."
    ],
    "fin": "",
    "titre": "Refusé : 3…Fb4 4.Cf3 Cf6 5.Fg5",
    "marques": [
     [],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "qb7fe8d259": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Les noirs prennent le pion.",
     "Tu ouvres ton fou f1 pour reprendre le pion c4."
    ],
    "fin": "",
    "titre": "Refusé : 3…Fb4 4.Cf3 dxc4 5.e3",
    "marques": [
     [
      "c4!"
     ],
     [
      "f1",
      "c4!"
     ],
     []
    ]
   },
   "qada680846": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Développe simplement : ton fou f1 va sortir. Avec un cavalier noir en d7, ne touche pas à d5 avec ton cavalier."
    ],
    "fin": "",
    "titre": "Contre le piège de l'éléphant : 5.e3",
    "marques": [
     [
      "f1",
      "d7",
      "d5",
      "c3"
     ],
     []
    ]
   },
   "q8f9efb5ee": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7",
     "cxd5",
     "exd5"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Tu continues ton développement. Surtout pas 6.Cxd5 ?? : le cavalier f6 prendrait quand même."
    ],
    "fin": "",
    "titre": "Piège de l'éléphant : 6.e3, pas 6.Cxd5",
    "marques": [
     [
      "c3",
      "d5",
      "f6"
     ],
     []
    ]
   },
   "q482614658": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "Nb6",
     "d5"
    ],
    "legendes": [
     "Le cavalier recule en b6.",
     "Le pion chasse aussi le cavalier c6 : tu gagnes encore un temps."
    ],
    "fin": "",
    "titre": "Marshall : 5…Cb6 6.d5",
    "marques": [
     [
      "b6"
     ],
     [
      "d5",
      "c6!"
     ],
     []
    ]
   },
   "q782d57ad0": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "e6",
     "e4"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Le pion chasse le cavalier d5 : tu as les deux pions centraux."
    ],
    "fin": "",
    "titre": "Marshall : 4…e6 5.e4",
    "marques": [
     [
      "f8"
     ],
     [
      "e4",
      "d4",
      "d5!"
     ],
     []
    ]
   },
   "qd3ed39913": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "Ne5"
    ],
    "legendes": [
     "Le fou attaque ton cavalier f3. Ce n'est pas un clouage : ton pion e2 est entre le cavalier et ta dame.",
     "Le cavalier attaque le fou g4 et prépare Db3 contre le pion b7, que le fou ne défend plus."
    ],
    "fin": "",
    "titre": "Marshall : 4…Fg4 5.Ce5",
    "marques": [
     [
      "g4",
      "f3!",
      "e2",
      "d1"
     ],
     [
      "e5",
      "g4!",
      "b7!",
      "d1"
     ],
     []
    ]
   },
   "q19a9143dc": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qa5",
     "Nf3"
    ],
    "legendes": [
     "La dame se met en a5.",
     "Développe. Attention : la dame a5 cloue ton cavalier c3, donc Fd2 d'abord, e4 ensuite."
    ],
    "fin": "",
    "titre": "Marshall : 4…Da5 5.Cf3",
    "marques": [
     [
      "a5"
     ],
     [
      "e2",
      "e4"
     ],
     []
    ]
   },
   "q2199979f1": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qd6",
     "Nf3"
    ],
    "legendes": [
     "La dame recule en d6.",
     "Développe : e4 viendra ensuite, avec gain de temps."
    ],
    "fin": "",
    "titre": "Marshall : 4…Dd6 5.Cf3",
    "marques": [
     [
      "d6"
     ],
     [
      "e2",
      "e4",
      "d6"
     ],
     []
    ]
   },
   "q7a2086efe": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bb4+",
     "Bd2"
    ],
    "legendes": [
     "Échec du fou.",
     "Interpose le fou. Les noirs reprendront en e6, et tu garderas un pion de plus."
    ],
    "fin": "",
    "titre": "Marshall : 3…e6 4.dxe6 Fb4+ 5.Fd2",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "d2",
      "b4"
     ],
     []
    ]
   },
   "qd50009549": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bxe6",
     "Nc3"
    ],
    "legendes": [
     "Le fou reprend le pion.",
     "Développe : tu as un pion de plus."
    ],
    "fin": "",
    "titre": "Marshall : 3…e6 4.dxe6 Fxe6 5.Cc3",
    "marques": [
     [
      "e6!"
     ],
     [],
     []
    ]
   },
   "q8939f31b6": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Les noirs roquent tout de suite.",
     "Développe, comme contre 4…d6. Ne pousse pas 5.e5 : le cavalier recule en e8 et tu n'as plus rien de mieux."
    ],
    "fin": "",
    "titre": "Est-indienne : 4…0-0 5.Cf3",
    "marques": [
     [],
     [
      "e4",
      "f6",
      "e8"
     ],
     []
    ]
   },
   "q4249f9ff9": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4"
    ],
    "legendes": [
     "Les noirs prennent ton pion e4.",
     "Tu reprends : ton cavalier c3 défendait e4. Les noirs ont perdu un cavalier pour un pion."
    ],
    "fin": "",
    "titre": "Est-indienne : 4…Cxe4 ?? 5.Cxe4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "e4!"
     ],
     [
      "c3",
      "e4!"
     ],
     []
    ]
   },
   "q63038f5a0": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "e6",
     "e5"
    ],
    "legendes": [
     "Les noirs jouent …e6 au lieu de …d6 : la case d7 reste occupée, et d5 est tenue par tes pions. Leur cavalier f6 n'aura plus de bonne case de repli.",
     "Le pion chasse le cavalier, qui n'a plus de bonne case : il doit rentrer en g8."
    ],
    "fin": "",
    "titre": "Est-indienne : 4…e6 ?! 5.e5",
    "marques": [
     [
      "f6!",
      "d7",
      "d5",
      "e4"
     ],
     [
      "e5",
      "f6!",
      "g8"
     ],
     []
    ]
   },
   "q36ad42467": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "coups": [
     "Nb6"
    ],
    "legendes": [
     "Le cavalier recule en b6 au lieu de s'échanger : il ne fait plus grand-chose, et ton centre reste intact."
    ],
    "fin": "",
    "titre": "Grünfeld : 5…Cb6",
    "marques": [
     [
      "b6",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q30dd750ab": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Les noirs roquent.",
     "Développe : Fd3 et 0-0 suivront."
    ],
    "fin": "",
    "titre": "Nimzo : 4…0-0 5.Cf3",
    "marques": [
     [],
     [
      "f1",
      "d3"
     ],
     []
    ]
   },
   "q6b68a56c8": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "d5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs occupent le centre.",
     "Développe : Fd3 et 0-0 suivront."
    ],
    "fin": "",
    "titre": "Nimzo : 4…d5 5.Cf3",
    "marques": [
     [],
     [
      "f1",
      "d3"
     ],
     []
    ]
   },
   "q8649452bf": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "Bg5"
    ],
    "legendes": [
     "Les noirs jouent …d5 : c'est un Gambit Dame refusé.",
     "Même clouage que dans le refusé : le fou cloue le cavalier f6."
    ],
    "fin": "",
    "titre": "1…Cf6 2.c4 e6 3.Cc3 d5 4.Fg5",
    "marques": [
     [
      "d5"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "q62b6ec7a2": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "d6",
     "e4"
    ],
    "legendes": [
     "Les noirs soutiennent c5 et contrôlent e5.",
     "Tu complètes le centre : pions d5 et e4."
    ],
    "fin": "",
    "titre": "Benoni : 4…d6 5.e4",
    "marques": [
     [
      "c5",
      "e5"
     ],
     [
      "d5",
      "e4"
     ],
     []
    ]
   },
   "qdb840113a": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "Be7",
     "d6"
    ],
    "legendes": [
     "Les noirs développent leur fou en e7.",
     "Le pion avance et attaque le fou : il doit retourner en f8."
    ],
    "fin": "",
    "titre": "Benoni : 4…Fe7 5.d6 !",
    "marques": [
     [
      "e7"
     ],
     [
      "d6",
      "e7!",
      "f8"
     ],
     []
    ]
   },
   "qfcb7a7d16": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Les noirs prennent ton cavalier, avec échec.",
     "Reprends avec le pion b : c'est la seule bonne reprise, elle renforce d4 et ouvre la colonne b."
    ],
    "fin": "",
    "titre": "Nimzo : …Fxc3+ bxc3",
    "marques": [
     [
      "c3!",
      "e1!"
     ],
     [
      "c3!",
      "d4"
     ],
     []
    ]
   },
   "qdf1c58899": {
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs jouent …d5.",
     "C'est le Gambit Dame refusé : Cc3, puis Fg5."
    ],
    "fin": "",
    "titre": "1…e6 2.c4 d5 3.Cc3",
    "marques": [
     [
      "d5"
     ],
     [
      "c3",
      "c1",
      "g5"
     ],
     []
    ]
   },
   "qf36f0b511": {
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Même position que 1…Cf6 2.c4 e6 3.Cc3."
    ],
    "fin": "",
    "titre": "1…e6 2.c4 Cf6 3.Cc3",
    "marques": [
     [],
     [],
     []
    ]
   },
   "q15446cc39": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4"
    ],
    "coups": [
     "Nf3"
    ],
    "legendes": [
     "Développe en défendant e5. Pas 4.e3 ? : après 4…Fb4+ 5.Fd2 dxe3, ton avantage disparaît, et 6.Fxb4 ?? tombe dans le piège de Lasker."
    ],
    "fin": "",
    "titre": "Albin : 4.Cf3, pas 4.e3",
    "marques": [
     [
      "f3",
      "e5",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q450b3a77d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4",
     "e3",
     "Bb4+",
     "Bd2",
     "dxe3"
    ],
    "coups": [
     "fxe3"
    ],
    "legendes": [
     "Reprends le pion e3 avec le pion f. Surtout pas 6.Fxb4 ?? : …exf2+ et …fxg1=C+."
    ],
    "fin": "",
    "titre": "Lasker : 6.fxe3",
    "marques": [
     [
      "e3!",
      "b4",
      "f2",
      "g1!"
     ],
     []
    ]
   },
   "q280c70623": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "Le cavalier quitte b1, et ta dame d1 défend maintenant la tour a1. Surtout pas 6.Fc3 ?? : après …Fb4, tu perds au moins la tour a1."
    ],
    "fin": "",
    "titre": "Englund : 6.Cc3",
    "marques": [
     [
      "d1",
      "a1!",
      "b2"
     ],
     []
    ]
   },
   "qc61b15ed1": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5"
    ],
    "legendes": [
     "Le gambit Englund : les noirs offrent un pion.",
     "Ici, pas de 2.c4 : prends le pion, il est gratuit."
    ],
    "fin": "",
    "titre": "1…e5 : 2.dxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q5ff71d88b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs attaquent d4 avec le pion c.",
     "Avance ton pion d : sur 2.c4, …cxd4 te prendrait ton pion central."
    ],
    "fin": "",
    "titre": "1…c5 : 2.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d4!",
      "c5"
     ],
     []
    ]
   },
   "qf3f063208": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4"
    ],
    "legendes": [
     "Les noirs défendent c4 avec le pion b.",
     "Tu attaques la base de la chaîne b5-c4."
    ],
    "fin": "",
    "titre": "Accepté : 3…b5 4.a4",
    "marques": [
     [
      "b5",
      "c4!"
     ],
     [
      "a4",
      "b5!",
      "c4"
     ],
     []
    ]
   },
   "q1288c99f9": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3"
    ],
    "legendes": [
     "Le fou sort et ne défend plus b7.",
     "Double attaque : la dame vise b7 et, avec ton fou c4, le pion f7."
    ],
    "fin": "",
    "titre": "Accepté : 4…Ff5 5.Db3",
    "marques": [
     [
      "f5",
      "b7!"
     ],
     [
      "b3",
      "b7!",
      "c4",
      "f7!"
     ],
     []
    ]
   },
   "q768ef3baa": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6"
    ],
    "legendes": [
     "Les noirs chassent ton fou.",
     "Prends en f6 : tu supprimes un défenseur de d5."
    ],
    "fin": "",
    "titre": "Refusé : 4…h6 5.Fxf6",
    "marques": [
     [
      "g5!"
     ],
     [
      "f6!",
      "d5!"
     ],
     []
    ]
   },
   "qd05c711af": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4"
    ],
    "legendes": [
     "Les noirs prennent alors que leur fou c8 est enfermé.",
     "Le centre complet en un coup : le pion c4 reviendra ensuite."
    ],
    "fin": "",
    "titre": "Refusé : 3…dxc4 4.e4",
    "marques": [
     [
      "c4!",
      "c8"
     ],
     [
      "e4",
      "d4",
      "c4!"
     ],
     []
    ]
   },
   "q2ad83de0c": {
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "c4",
     "Bg7",
     "Nc3",
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Ton coup de toujours.",
     "Le fou en g7.",
     "Tu prépares e4.",
     "Les noirs attaquent d4.",
     "Tu avances, comme contre toutes les attaques …c5."
    ],
    "fin": "",
    "titre": "1…g6",
    "marques": [
     [
      "f8"
     ],
     [],
     [
      "g7"
     ],
     [
      "c3",
      "e4"
     ],
     [
      "c5",
      "d4!"
     ],
     [
      "d5",
      "c5"
     ],
     []
    ]
   },
   "q5d54f62ba": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "c4",
     "e5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu défends d4 en développant."
    ],
    "fin": "",
    "titre": "1…d6",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [],
     [
      "e5",
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     []
    ]
   },
   "qaf9530e80": {
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "c4",
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "La hollandaise : les noirs contrôlent e4 avec le pion f.",
     "Ton coup de toujours.",
     "Le cavalier vient aussi surveiller e4.",
     "Ton cavalier dispute e4 à son tour."
    ],
    "fin": "",
    "titre": "1…f5, la hollandaise",
    "marques": [
     [
      "f5",
      "e4"
     ],
     [],
     [
      "f6",
      "e4"
     ],
     [
      "c3",
      "e4"
     ],
     []
    ]
   },
   "q5d8f5345a": {
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "c4",
     "Bb7",
     "Nc3",
     "e6",
     "e4"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto du fou c8.",
     "Ton coup de toujours.",
     "Le fou vise e4.",
     "Tu défends e4 à l'avance.",
     "Les noirs ouvrent leur fou f8.",
     "Tu prends tout le centre."
    ],
    "fin": "",
    "titre": "1…b6",
    "marques": [
     [
      "c8"
     ],
     [],
     [
      "b7",
      "e4"
     ],
     [
      "c3",
      "e4"
     ],
     [
      "f8"
     ],
     [
      "c4",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q24fa84b8d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "c4",
     "e5",
     "d5",
     "Nce7",
     "e4"
    ],
    "legendes": [
     "Le cavalier sort devant le pion c.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu avances en chassant le cavalier.",
     "Il recule.",
     "Tu complètes le centre."
    ],
    "fin": "",
    "titre": "1…Cc6",
    "marques": [
     [
      "c6",
      "c7"
     ],
     [],
     [
      "e5",
      "d4!"
     ],
     [
      "d5",
      "c6!"
     ],
     [],
     [
      "d5",
      "e4"
     ],
     []
    ]
   },
   "q89121ed02": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "c4",
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs préparent …d5.",
     "Ton coup de toujours.",
     "C'est la défense slave.",
     "Ton réflexe : Cc3."
    ],
    "fin": "",
    "titre": "1…c6 : la Slave",
    "marques": [
     [
      "c6",
      "d5"
     ],
     [],
     [
      "c6",
      "d5"
     ],
     [],
     []
    ]
   },
   "q48c3c41c7": {
    "debut": [
     "d4"
    ],
    "coups": [
     "a6",
     "c4",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Un coup d'attente.",
     "Ton coup de toujours.",
     "Les noirs ouvrent leur fou f8.",
     "Ton réflexe : Cc3, puis e4 si les noirs te laissent le centre."
    ],
    "fin": "",
    "titre": "1…a6 et autres coups d'attente",
    "marques": [
     [],
     [],
     [
      "f8"
     ],
     [
      "c3",
      "e4"
     ],
     []
    ]
   },
   "qb7b2a2a4b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu avances."
    ],
    "fin": "",
    "titre": "1…Cf6 2.c4 c5 3.d5",
    "marques": [
     [],
     [],
     [
      "c5",
      "d4!"
     ],
     [],
     []
    ]
   },
   "qe85ab425b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "e5",
     "dxe5",
     "Ng4",
     "Bf4"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "Le gambit de Budapest : un pion offert.",
     "Tu prends.",
     "Le cavalier attaque e5.",
     "Tu défends e5 en développant ton fou."
    ],
    "fin": "",
    "titre": "Gambit de Budapest",
    "marques": [
     [],
     [],
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     [
      "g4",
      "e5!"
     ],
     [
      "f4",
      "e5!",
      "g4"
     ],
     []
    ]
   },
   "qde19d5eb8": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "L'autre cavalier sort.",
     "Ton réflexe : Cc3."
    ],
    "fin": "",
    "titre": "1…Cf6 2.c4 Cc6 3.Cc3",
    "marques": [
     [],
     [],
     [],
     [
      "c3"
     ],
     []
    ]
   },
   "q359f0032d": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c6",
     "Nc3",
     "dxc4",
     "e4",
     "b5",
     "a4"
    ],
    "legendes": [
     "La Slave.",
     "Ton réflexe : Cc3.",
     "Les noirs prennent.",
     "Le centre complet.",
     "Les noirs défendent c4.",
     "Tu attaques la chaîne : le pion b5, qui tient c4, est visé."
    ],
    "fin": "",
    "titre": "2…c6, la Slave",
    "marques": [
     [],
     [],
     [
      "c4!"
     ],
     [
      "d4",
      "e4"
     ],
     [
      "b5",
      "c4!"
     ],
     [
      "a4",
      "b5!",
      "c4"
     ],
     []
    ]
   },
   "q690fb882e": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "d4",
     "Nf3",
     "Nc6",
     "g3"
    ],
    "legendes": [
     "Le contre-gambit Albin.",
     "Tu prends.",
     "Le pion d4 gêne ton développement.",
     "Tu développes en défendant e5 : c'est le coup qui évite le piège de Lasker.",
     "Les noirs attaquent e5.",
     "Ton fou ira en g2."
    ],
    "fin": "",
    "titre": "2…e5, l'Albin",
    "marques": [
     [],
     [
      "e5!"
     ],
     [
      "d4"
     ],
     [
      "f3",
      "e5"
     ],
     [
      "e5!"
     ],
     [
      "f1",
      "g2"
     ],
     []
    ]
   },
   "q5c61fa650": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "La défense Tchigorine : le cavalier devant le pion c.",
     "Ton réflexe : Cc3, développement normal."
    ],
    "fin": "",
    "titre": "2…Cc6, la Tchigorine",
    "marques": [
     [
      "c6",
      "c7"
     ],
     [
      "c3"
     ],
     []
    ]
   },
   "q3ecc31f14": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bf5",
     "Nc3",
     "Nf6",
     "Qb3"
    ],
    "legendes": [
     "Le fou sort tôt : le pion b7 n'est plus défendu.",
     "Ton réflexe : Cc3.",
     "Les noirs développent.",
     "La dame attaque b7 ; derrière ton pion c4, elle vise aussi d5."
    ],
    "fin": "",
    "titre": "2…Ff5, la défense balte",
    "marques": [
     [
      "f5",
      "b7!"
     ],
     [
      "c3"
     ],
     [],
     [
      "b3",
      "b7!",
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "qa59d47c3c": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c5",
     "cxd5",
     "Nf6",
     "e4"
    ],
    "legendes": [
     "Les noirs attaquent d4 à leur tour.",
     "Tu prends en d5.",
     "Le cavalier attaque d5.",
     "Tu défends d5 et tu prends le centre."
    ],
    "fin": "",
    "titre": "2…c5, le gambit symétrique",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d5!"
     ],
     [
      "f6",
      "d5!"
     ],
     [
      "e4",
      "d5!",
      "d4"
     ],
     []
    ]
   },
   "q33ff99518": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "g6",
     "cxd5",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Tu prends en d5.",
     "Le cavalier attaque d5.",
     "Développe : le pion d5 est à toi pour l'instant."
    ],
    "fin": "",
    "titre": "2…g6",
    "marques": [
     [
      "f8"
     ],
     [
      "d5!"
     ],
     [
      "f6",
      "d5!"
     ],
     [
      "d5!"
     ],
     []
    ]
   },
   "q143044777": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bg4",
     "Nc3"
    ],
    "legendes": [
     "Le fou sort tôt.",
     "Ton réflexe : Cc3. Db3 contre b7 est aussi une idée, puisque le fou ne défend plus ce pion."
    ],
    "fin": "",
    "titre": "2…Fg4",
    "marques": [
     [],
     [
      "c3",
      "d1",
      "b7!",
      "g4"
     ],
     []
    ]
   },
   "q67adffc86": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "c4"
    ],
    "legendes": [
     "Les noirs répondent …d5.",
     "Le pion c attaque d5 : c'est le Gambit Dame."
    ],
    "fin": "",
    "titre": "1…d5 2.c4",
    "marques": [
     [
      "d5"
     ],
     [
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "q17a65f3d6": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Les noirs prennent le pion.",
     "Tu ouvres ton fou f1, qui menace de reprendre en c4."
    ],
    "fin": "",
    "titre": "Accepté : 3.e3",
    "marques": [
     [
      "c4!"
     ],
     [
      "f1",
      "c4!"
     ],
     []
    ]
   },
   "q88ed7211a": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs soutiennent d5.",
     "Deuxième attaquant sur d5."
    ],
    "fin": "",
    "titre": "Refusé : 3.Cc3",
    "marques": [
     [
      "e6",
      "d5!"
     ],
     [
      "c3",
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "q3f4a5eeca": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5"
    ],
    "legendes": [
     "Les noirs développent sans soutenir d5 avec un pion.",
     "Tu prends en d5 : aucun pion noir ne peut reprendre."
    ],
    "fin": "",
    "titre": "Marshall : 3.cxd5",
    "marques": [
     [
      "d5!",
      "c4"
     ],
     [
      "d5!"
     ],
     []
    ]
   },
   "q4f488a73e": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Les noirs développent.",
     "Tu reprends le pion."
    ],
    "fin": "",
    "titre": "Accepté : 3…Cf6 4.Fxc4",
    "marques": [
     [],
     [
      "c4!"
     ],
     []
    ]
   },
   "q90a72d252": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Développement."
    ],
    "fin": "",
    "titre": "Accepté : 4…e6 5.Cf3",
    "marques": [
     [
      "f8"
     ],
     [],
     []
    ]
   },
   "q1e4bbcf51": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Un défenseur de plus pour d5.",
     "Tu cloues ce défenseur."
    ],
    "fin": "",
    "titre": "Refusé : 3…Cf6 4.Fg5",
    "marques": [
     [
      "f6",
      "d5!"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "q040b67277": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier.",
     "Développe, tout simplement."
    ],
    "fin": "",
    "titre": "Refusé : 3…Fb4 4.Cf3",
    "marques": [
     [
      "b4",
      "c3!",
      "e1"
     ],
     [],
     []
    ]
   },
   "qb5198fd5b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7",
     "e3"
    ],
    "legendes": [
     "Les noirs déclouent.",
     "Tu ouvres ton fou f1."
    ],
    "fin": "",
    "titre": "Refusé : 4…Fe7 5.e3",
    "marques": [
     [
      "e7",
      "f6"
     ],
     [
      "f1"
     ],
     []
    ]
   },
   "q10452ca08": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "Le cavalier reprend.",
     "D'abord développer.",
     "Les noirs développent.",
     "Le pion chasse le cavalier."
    ],
    "fin": "",
    "titre": "Marshall : 4.Cf3 et 5.e4",
    "marques": [
     [
      "d5!"
     ],
     [],
     [],
     [
      "e4",
      "d5!"
     ],
     []
    ]
   },
   "q54a1797a5": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "La dame reprend.",
     "Tu développes en attaquant la dame."
    ],
    "fin": "",
    "titre": "Marshall : 3…Dxd5 4.Cc3",
    "marques": [
     [
      "d5!"
     ],
     [
      "c3",
      "d5!"
     ],
     []
    ]
   },
   "qef22133de": {
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Tu prépares e4."
    ],
    "fin": "",
    "titre": "1…Cf6 2.c4 g6 3.Cc3",
    "marques": [
     [
      "f8"
     ],
     [
      "e2",
      "e4"
     ],
     []
    ]
   },
   "q1c8781700": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "Bg7",
     "e4"
    ],
    "legendes": [
     "Le fou en g7.",
     "Trois pions au centre."
    ],
    "fin": "",
    "titre": "Est-indienne : 4.e4",
    "marques": [
     [
      "g7"
     ],
     [
      "c4",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q2748f9d03": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "legendes": [
     "La Grünfeld.",
     "Tu prends.",
     "Le cavalier reprend.",
     "Tu chasses le cavalier en prenant le centre."
    ],
    "fin": "",
    "titre": "Grünfeld : 4.cxd5 et 5.e4",
    "marques": [
     [],
     [
      "d5!"
     ],
     [
      "d5!"
     ],
     [
      "e4",
      "d5!",
      "d4"
     ],
     []
    ]
   },
   "qcb16f2964": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "La Nimzo-indienne.",
     "Solide : tu ouvres ton fou f1 et protèges d4."
    ],
    "fin": "",
    "titre": "Nimzo : 4.e3",
    "marques": [
     [],
     [
      "f1",
      "d4"
     ],
     []
    ]
   },
   "q2f1068dfe": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Tu avances."
    ],
    "fin": "",
    "titre": "1…Cf6 2.c4 e6 3.Cc3 c5 4.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [],
     []
    ]
   },
   "q48e5afaa3": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e4",
     "dxe4"
    ],
    "legendes": [
     "Tu pousses e4 alors que le pion d5 et le cavalier f6 surveillent cette case.",
     "Le pion prend. Ton cavalier ne peut pas reprendre : le cavalier f6 défend e4."
    ],
    "fin": "",
    "titre": "Refusé : 4.e4 ? dxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "d5",
      "f6"
     ],
     [
      "e4!",
      "c3",
      "f6"
     ],
     []
    ]
   },
   "qa1537baec": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4"
    ],
    "coups": [
     "e4",
     "Nxe4"
    ],
    "legendes": [
     "Tu pousses e4, comme si ton cavalier c3 le défendait.",
     "Le cavalier prend : ton cavalier c3 est cloué contre ton roi, il ne peut pas reprendre."
    ],
    "fin": "",
    "titre": "Nimzo : 4.e4 ? Cxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "c3!",
      "b4"
     ],
     [
      "e4!",
      "c3!",
      "b4",
      "e1"
     ],
     []
    ]
   },
   "q6ad65274d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8"
    ],
    "coups": [
     "Bxh7+",
     "Nxh7"
    ],
    "legendes": [
     "Tu sacrifies en h7… mais le cavalier f6 n'est pas cloué : le fou e7 s'interpose entre ton fou g5 et la dame d8.",
     "Le cavalier reprend, et il attaque maintenant ton fou g5. Tu as donné une pièce pour un pion."
    ],
    "fin": "",
    "titre": "Refusé : 9.Fxh7+ ? Cxh7",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "h7!",
      "f6",
      "e7",
      "g5"
     ],
     [
      "h7",
      "g5!"
     ],
     []
    ]
   },
   "q3b9482ee2": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "b4",
     "Bxb4"
    ],
    "legendes": [
     "Tu lances l'attaque de minorité tout de suite…",
     "…mais rien ne défendait b4 : le fou e7 prend le pion."
    ],
    "fin": "",
    "titre": "Carlsbad : 11.b4 ? Fxb4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "b4!"
     ],
     [
      "b4!",
      "e7"
     ],
     []
    ]
   },
   "qd52783f32": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "Rab1"
    ],
    "legendes": [
     "La tour vient d'abord en b1 : elle soutiendra le pion b4. L'attaque de minorité peut commencer."
    ],
    "fin": "",
    "titre": "Carlsbad : 11.Tab1",
    "marques": [
     [
      "b1",
      "b2",
      "b4"
     ],
     []
    ]
   },
   "qf51a5c77b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "dxc4",
     "Bxc4",
     "Nd5",
     "Bxe7",
     "Qxe7",
     "O-O",
     "Nxc3",
     "Qxc3"
    ],
    "coups": [
     "e5",
     "Nxe5"
    ],
    "legendes": [
     "Les noirs poussent …e5 sans l'avoir préparé.",
     "Le pion e5 tombe : rien ne le défendait assez."
    ],
    "fin": "",
    "titre": "Libération : 12…e5 ? 13.Cxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q3553b1494": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Bf5",
     "Bxf5"
    ],
    "legendes": [
     "Les noirs veulent échanger ton bon fou d3… mais le fou f5 n'est pas protégé.",
     "Fxf5 : une pièce de plus. Les noirs ne peuvent pas reprendre."
    ],
    "fin": "",
    "titre": "Carlsbad : 11…Ff5 ? 12.Fxf5",
    "couleurs": [
     "g",
     "v"
    ],
    "marques": [
     [
      "f5!",
      "d3"
     ],
     [
      "f5!"
     ],
     []
    ]
   },
   "q76da77d06": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4"
    ],
    "coups": [
     "Qd8",
     "Nxe4",
     "dxe4",
     "Bxe4"
    ],
    "legendes": [
     "La dame quitte la colonne e : le cavalier e4 perd un défenseur.",
     "Tu échanges les cavaliers.",
     "Le pion reprend.",
     "Ton fou prend le pion e4 : il était défendu par la tour e8 seule, et ta dame c2 protège ton fou."
    ],
    "fin": "",
    "titre": "Carlsbad : 13…Dd8 ? 14.Cxe4",
    "marques": [
     [
      "e4!",
      "e7"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!",
      "e8",
      "c2"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "q58862f38f",
    "titre": "3…Cf6 : la ligne la plus tranquille",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs prennent le pion. C'est la réponse la plus jouée entre 1000 et 1600 Elo. Pas d'inquiétude : ce pion, tu vas le reprendre.",
     "<span class=\"mv\">3.e3</span> ouvre la diagonale de ton fou f1 : il menace déjà de reprendre en c4. Simple et solide.",
     "Les noirs développent leur cavalier. Ils ne défendent pas c4 : ils te laissent le reprendre. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 au lieu de 3…Cf6</a>, c'est pareil.",
     "Tu reprends le pion. Matériel égal, et ton fou est actif sur la diagonale qui vise f7.",
     "Les noirs ouvrent la sortie de leur fou f8. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q62b65fac6\">4…Cc6</a>, tu joues aussi 5.Cf3.",
     "Tu sors ton cavalier g1. Ensuite, hors répertoire : <span class=\"mv\">0-0</span>, <span class=\"mv\">Cc3</span>, <span class=\"mv\">De2</span>."
    ]
   },
   {
    "id": "qfaf8ff6ad",
    "titre": "Accepté : 3…e6 mène au même endroit",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "e6",
     "Bxc4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent d'abord la sortie de leur fou f8.",
     "Tu reprends le pion, comme dans la ligne principale.",
     "Le cavalier sort.",
     "Tu sors ton cavalier : c'est exactement la même position qu'après 3…Cf6 4.Fxc4 e6 5.Cf3."
    ]
   },
   {
    "id": "q62b65fac6",
    "titre": "Accepté : 4…Cc6 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent l'autre cavalier.",
     "Développe, tout simplement : le cavalier défend d4 et prépare le roque."
    ]
   },
   {
    "id": "qf10e00271",
    "titre": "Accepté : 3…e6 4.Fxc4 Cc6 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent leur cavalier dame.",
     "Développe : le cavalier défend d4 et prépare le roque."
    ]
   },
   {
    "id": "qe7ff82d8d",
    "titre": "Accepté : 4…Fb4+ 5.Cc3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Bb4+",
     "Nc3"
    ],
    "legendes": [
     "Échec du fou.",
     "Interpose le cavalier : il pare l'échec et se développe en même temps."
    ]
   },
   {
    "id": "q1a969d154",
    "titre": "3…b5 : les noirs s'accrochent au pion",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "legendes": [
     "Les noirs défendent c4 avec le pion b. Ça a l'air solide, mais une chaîne de pions a un point faible : sa base. Ici, c'est b5.",
     "Tu attaques la base de la chaîne. Si b5 tombe, c4 tombera derrière. Stockfish préfère nettement <span class=\"mv\">4.a4</span> à 4.b3.",
     "Les noirs soutiennent b5 avec le pion c.",
     "Tu prends quand même. Si les noirs reprennent <a class=\"lien-var\" href=\"#\" data-var=\"qbe59e3b4a\">5…cxb5</a>, 6.Df3 gagne une pièce."
    ]
   },
   {
    "id": "qbe59e3b4a",
    "titre": "Accepté : 5…cxb5 ?? 6.Df3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3"
    ],
    "legendes": [
     "Les noirs reprennent leur pion. Erreur : la grande diagonale f3-a8 est maintenant vide.",
     "La dame attaque la tour a8, et rien ne peut la protéger."
    ]
   },
   {
    "id": "q23b50555d",
    "titre": "Accepté : 4…Fd7 5.axb5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "Bd7",
     "axb5"
    ],
    "legendes": [
     "Le fou soutient b5.",
     "Même idée : tu prends en b5, la chaîne des noirs s'effondre et c4 va tomber."
    ]
   },
   {
    "id": "q4e88a8472",
    "titre": "Accepté : 4…bxa4 5.Fxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "bxa4",
     "Bxc4"
    ],
    "legendes": [
     "Les noirs prennent en a4.",
     "Tu reprends ton pion c4. Les noirs gardent deux pions a isolés, faibles."
    ]
   },
   {
    "id": "qfeab54db7",
    "titre": "4…Ff5 : la dame sort, pour une bonne raison",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Le fou sort en f5. Mais il ne défend plus le pion b7.",
     "<span class=\"mv good\">5.Db3</span> ! Double attaque : ta dame vise b7, et avec ton fou c4 elle vise f7. Deux cibles à la fois.",
     "La bonne défense : le pion e6 bouche la diagonale vers f7. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Cbd7</a>, c'est mat.",
     "Pas tout de suite <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Dxb7</a> : la réponse 6…Fe4 ! embête ta dame. Avec <span class=\"mv\">6.Cc3</span> d'abord, tu contrôles e4, puis tu prends b7 tranquillement."
    ]
   },
   {
    "id": "qc2a8bfd37",
    "titre": "Accepté : 5…Cbd7 ?? 6.Fxf7#",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Nbd7",
     "Bxf7#"
    ],
    "legendes": [
     "Le cavalier prend la case d7, la seule fuite du roi noir.",
     "Mat : le roi n'a plus aucune case, et ta dame b3 protège le fou."
    ]
   },
   {
    "id": "qcdd21b677",
    "titre": "Accepté : 6.Cc3 puis Dxb7",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Nc3",
     "Bd6",
     "Qxb7"
    ],
    "legendes": [
     "Le cavalier contrôle e4 et b5 : le fou noir ne pourra plus venir en e4.",
     "Les noirs développent.",
     "Maintenant le pion b7 tombe sans risque."
    ]
   },
   {
    "id": "qdcdb92cf0",
    "titre": "La ligne principale",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3"
    ],
    "legendes": [
     "Les noirs protègent d5 avec le pion e. C'est solide, avec un défaut : le fou c8 est enfermé derrière e6.",
     "Tu ajoutes un attaquant sur d5. Compte : <span class=\"mv\">c4</span> et <span class=\"mv\">Cc3</span> attaquent d5 ; e6 et la dame le défendent.",
     "Les noirs ajoutent un défenseur à d5.",
     "<span class=\"mv\">4.Fg5</span> cloue le cavalier f6 : s'il bouge, ton fou prend la dame d8. Un défenseur de d5 est gêné.",
     "Les noirs déclouent : avec le fou en e7, le cavalier peut de nouveau bouger. C'est la réponse la plus jouée (47 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Fb4</a> et 4…h6 (séquence suivante).",
     "Tu ouvres la sortie de ton fou f1. Plan : <span class=\"mv\">Cf3</span>, <span class=\"mv\">Fd3</span>, <span class=\"mv\">0-0</span>, puis <span class=\"mv\">Tc1</span> ou <span class=\"mv\">Dc2</span>."
    ]
   },
   {
    "id": "qe2c942a05",
    "titre": "Refusé : 4…Fb4 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier c3 contre ton roi.",
     "Tu ouvres ton fou f1 et tu restes solide. Si …Fxc3+, tu reprendras avec le pion b."
    ]
   },
   {
    "id": "qd63a5a9c6",
    "titre": "4…h6 : tu prends en f6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6",
     "Qxf6",
     "cxd5",
     "exd5",
     "Nxd5"
    ],
    "legendes": [
     "Les noirs chassent ton fou.",
     "Ne recule pas en h4 : ici, prendre est plus fort (Stockfish : +1,2 contre +0,1 pour 5.Fh4). Le cavalier f6 défendait d5 : tu supprimes ce défenseur.",
     "La reprise la plus naturelle. Elle laisse d5 sans son cavalier. L'autre reprise, <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a>, abîme les pions noirs.",
     "Tu prends en d5 : seul le pion e6 peut reprendre.",
     "Les noirs reprennent.",
     "Tu gagnes un pion, et ton cavalier attaque la dame f6 au passage."
    ]
   },
   {
    "id": "qd5b9c96e1",
    "titre": "Refusé : 4…h6 5.Fxf6 gxf6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "h6",
     "Bxf6"
    ],
    "coups": [
     "gxf6",
     "cxd5",
     "exd5",
     "e3"
    ],
    "legendes": [
     "Les noirs reprennent avec le pion g.",
     "Tu échanges au centre.",
     "Les noirs reprennent.",
     "Développement : le fou f1 sortira ensuite. Les noirs gardent des pions doublés en f et un roi moins abrité."
    ]
   },
   {
    "id": "q28f23023f",
    "titre": "3…dxc4 : 4.e4 !",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4",
     "Bb4",
     "Bxc4"
    ],
    "legendes": [
     "Les noirs prennent alors que leur fou c8 est déjà enfermé par e6. Ils t'abandonnent le centre.",
     "Avec ton cavalier en c3 pour soutenir e4, tu occupes tout le centre tout de suite : <span class=\"mv good\">4.e4</span>.",
     "Le fou cloue ton cavalier c3 (la réponse la plus jouée). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Cc6</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Cf6</a>.",
     "Tu reprends le pion, avec deux pions au centre contre zéro. Stockfish : +0,8."
    ]
   },
   {
    "id": "q84ccf2a91",
    "titre": "Refusé : 3…dxc4 4.e4 Cc6 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs développent leur cavalier.",
     "Tu défends d4 en développant. Si les noirs jouent ensuite …b5, ton cavalier prend le pion : Cxb5."
    ]
   },
   {
    "id": "qfd0499a86",
    "titre": "Refusé : 3…dxc4 4.e4 Cf6 5.Fxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Le cavalier attaque e4.",
     "Tu reprends le pion ; e4 reste défendu par le cavalier c3."
    ]
   },
   {
    "id": "qf41133586",
    "titre": "3…Fb4 : le clouage",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3",
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier c3 contre ton roi.",
     "Développe, tout simplement. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Cf6</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, tu as aussi une réponse prête.",
     "Les noirs échangent leur fou contre ton cavalier : ils te laissent la paire de fous.",
     "Reprends avec le pion b : <span class=\"mv\">bxc3</span> renforce d4 et ouvre la colonne b pour ta tour. Stockfish : +0,8."
    ]
   },
   {
    "id": "qf64608c7a",
    "titre": "Refusé : 3…Fb4 4.Cf3 Cf6 5.Fg5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Les noirs développent.",
     "Le clouage, comme dans la ligne principale : ton fou cloue le cavalier f6 contre la dame."
    ]
   },
   {
    "id": "qb7fe8d259",
    "titre": "Refusé : 3…Fb4 4.Cf3 dxc4 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Les noirs prennent le pion.",
     "Tu ouvres ton fou f1 pour reprendre le pion c4."
    ]
   },
   {
    "id": "q310e8078c",
    "titre": "3…Cxd5 : le cavalier se fait chasser",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "Les noirs développent sans défendre d5. Ça s'appelle la défense Marshall, et son défaut se voit au coup suivant.",
     "Tu prends : <span class=\"mv good\">3.cxd5</span>. Aucun pion noir ne peut reprendre en d5.",
     "Le cavalier reprend (73 %). Mais un cavalier au centre, ça se chasse.",
     "D'abord développer : <span class=\"mv\">4.Cf3</span>. Le pion e viendra au coup suivant, avec gain de temps.",
     "Les noirs développent. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a>, même plan ; contre <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Fg4</a>, attention à l'exception.",
     "<span class=\"mv good\">5.e4</span> : le pion attaque le cavalier d5, qui doit partir. Tu as les deux pions centraux, les noirs aucun."
    ]
   },
   {
    "id": "q782d57ad0",
    "titre": "Marshall : 4…e6 5.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "e6",
     "e4"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Le pion chasse le cavalier d5 : tu as les deux pions centraux."
    ]
   },
   {
    "id": "qd3ed39913",
    "titre": "Marshall : 4…Fg4 5.Ce5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "Ne5"
    ],
    "legendes": [
     "Le fou attaque ton cavalier f3. Ce n'est pas un clouage : ton pion e2 est entre le cavalier et ta dame.",
     "Le cavalier attaque le fou g4 et prépare Db3 contre le pion b7, que le fou ne défend plus."
    ]
   },
   {
    "id": "q482614658",
    "titre": "Marshall : 5…Cb6 6.d5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "Nb6",
     "d5"
    ],
    "legendes": [
     "Le cavalier recule en b6.",
     "Le pion chasse aussi le cavalier c6 : tu gagnes encore un temps."
    ]
   },
   {
    "id": "qfc1bf4ab7",
    "titre": "3…Dxd5 : la dame se fait chasser",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3",
     "Qd8",
     "Nf3"
    ],
    "legendes": [
     "La dame reprend. Elle est exposée au centre.",
     "Tu développes en attaquant la dame : tu gagnes un temps.",
     "La dame rentre chez elle. Les noirs ont joué deux coups de dame pour rien. Même réponse sur <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Da5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Dd6</a>.",
     "Et tu continues : e4 au prochain coup. Stockfish : +1,2."
    ]
   },
   {
    "id": "q19a9143dc",
    "titre": "Marshall : 4…Da5 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qa5",
     "Nf3"
    ],
    "legendes": [
     "La dame se met en a5.",
     "Développe. Attention : la dame a5 cloue ton cavalier c3, donc Fd2 d'abord, e4 ensuite."
    ]
   },
   {
    "id": "q2199979f1",
    "titre": "Marshall : 4…Dd6 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qd6",
     "Nf3"
    ],
    "legendes": [
     "La dame recule en d6.",
     "Développe : e4 viendra ensuite, avec gain de temps."
    ]
   },
   {
    "id": "q3212d6160",
    "titre": "3…e6 : prends le pion",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "e6",
     "dxe6",
     "Bxe6",
     "Nc3"
    ],
    "legendes": [
     "Un gambit rare : les noirs offrent un pion pour se développer vite.",
     "Prends le pion.",
     "Le fou reprend.",
     "Développe : tu as un pion de plus."
    ]
   },
   {
    "id": "q7a2086efe",
    "titre": "Marshall : 3…e6 4.dxe6 Fb4+ 5.Fd2",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bb4+",
     "Bd2"
    ],
    "legendes": [
     "Échec du fou.",
     "Interpose le fou. Les noirs reprendront en e6, et tu garderas un pion de plus."
    ]
   },
   {
    "id": "q54fa22f42",
    "titre": "2…g6 3.Cc3 Fg7 : l'Est-indienne",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3",
     "Bg7",
     "e4",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs vont placer leur fou en g7 : c'est l'Est-indienne. Ils te laissent le centre pour l'attaquer plus tard.",
     "Tu prépares e4.",
     "Le fou en g7 vise la grande diagonale : il frappera d4 dès que le cavalier f6 bougera.",
     "<span class=\"mv good\">4.e4</span> : trois pions au centre (c4, d4, e4). C'est ce que tu cherches.",
     "Les noirs empêchent e5. Les autres réponses : <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…0-0</a>, ou le piège <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Cxe4 ??</a>.",
     "Développement. Suite naturelle : <span class=\"mv\">Fe2</span>, <span class=\"mv\">0-0</span>. Ton plan : garder ce centre et prendre de l'espace."
    ]
   },
   {
    "id": "q8939f31b6",
    "titre": "Est-indienne : 4…0-0 5.Cf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Les noirs roquent tout de suite.",
     "Développe, comme contre 4…d6. Ne pousse pas 5.e5 : le cavalier recule en e8 et tu n'as plus rien de mieux."
    ]
   },
   {
    "id": "q4249f9ff9",
    "titre": "Est-indienne : 4…Cxe4 ?? 5.Cxe4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4"
    ],
    "legendes": [
     "Les noirs prennent ton pion e4.",
     "Tu reprends : ton cavalier c3 défendait e4. Les noirs ont perdu un cavalier pour un pion."
    ]
   },
   {
    "id": "q63038f5a0",
    "titre": "Est-indienne : 4…e6 ?! 5.e5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "e6",
     "e5"
    ],
    "legendes": [
     "Les noirs jouent …e6 au lieu de …d6 : la case d7 reste occupée, et d5 est tenue par tes pions. Leur cavalier f6 n'aura plus de bonne case de repli.",
     "Le pion chasse le cavalier, qui n'a plus de bonne case : il doit rentrer en g8."
    ]
   },
   {
    "id": "q69dd5d2a9",
    "titre": "3…d5 : la Grünfeld",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4",
     "Nxc3",
     "bxc3"
    ],
    "legendes": [
     "La Grünfeld : les noirs attaquent ton centre tout de suite.",
     "Tu prends.",
     "Le cavalier reprend (95 % des cas).",
     "Même idée que contre la Marshall : <span class=\"mv good\">5.e4</span> chasse le cavalier en prenant le centre.",
     "Le cavalier s'échange contre le tien.",
     "Hors répertoire, mais naturel : reprends avec le pion b. Tes pions c3-d4-e4 forment un centre massif."
    ]
   },
   {
    "id": "qe680fe597",
    "titre": "2…e6 3.Cc3 Fb4 : la Nimzo-indienne",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3",
     "Bb4",
     "e3",
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Les noirs préparent …d5 ou …Fb4.",
     "Tu menaces de jouer e4. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, c'est le Gambit refusé.",
     "La Nimzo-indienne : le fou cloue ton cavalier pour t'empêcher de jouer e4.",
     "<span class=\"mv\">4.e3</span> : solide. Tu ouvres ton fou f1 et tu protèges d4. Suite : <span class=\"mv\">Fd3</span>, <span class=\"mv\">Cf3</span>, <span class=\"mv\">0-0</span>.",
     "Les noirs prennent ton cavalier.",
     "La seule bonne reprise : <span class=\"mv\">bxc3</span>. Sur 5.Fd2 ??, …Fxd2+ et tu as perdu une pièce. Tu as la paire de fous."
    ]
   },
   {
    "id": "q8649452bf",
    "titre": "1…Cf6 2.c4 e6 3.Cc3 d5 4.Fg5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "Bg5"
    ],
    "legendes": [
     "Les noirs jouent …d5 : c'est un Gambit Dame refusé.",
     "Même clouage que dans le refusé : le fou cloue le cavalier f6."
    ]
   },
   {
    "id": "q30dd750ab",
    "titre": "Nimzo : 4…0-0 5.Cf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Les noirs roquent.",
     "Développe : Fd3 et 0-0 suivront."
    ]
   },
   {
    "id": "q6b68a56c8",
    "titre": "Nimzo : 4…d5 5.Cf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "d5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs occupent le centre.",
     "Développe : Fd3 et 0-0 suivront."
    ]
   },
   {
    "id": "q7e1ecd7f5",
    "titre": "3…c5 : tu avances 4.d5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5",
     "exd5",
     "cxd5"
    ],
    "legendes": [
     "Les noirs attaquent d4 avec le pion c.",
     "<span class=\"mv good\">4.d5</span> : tu avances au lieu d'échanger. Ton pion d5 coupe le camp noir en deux.",
     "Les noirs échangent (52 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Fe7</a>.",
     "Tu reprends avec le pion c : tu gardes un pion avancé en d5."
    ]
   },
   {
    "id": "q62b6ec7a2",
    "titre": "Benoni : 4…d6 5.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "d6",
     "e4"
    ],
    "legendes": [
     "Les noirs soutiennent c5 et contrôlent e5.",
     "Tu complètes le centre : pions d5 et e4."
    ]
   },
   {
    "id": "qdb840113a",
    "titre": "Benoni : 4…Fe7 5.d6 !",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "Be7",
     "d6"
    ],
    "legendes": [
     "Les noirs développent leur fou en e7.",
     "Le pion avance et attaque le fou : il doit retourner en f8."
    ]
   },
   {
    "id": "qe4d671d58",
    "titre": "1…e6 2.c4 c5 : même réflexe",
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "c4",
     "c5",
     "d5",
     "exd5",
     "cxd5"
    ],
    "legendes": [
     "Les noirs gardent leurs options : …d5 ou …c5.",
     "Ton coup de toujours.",
     "Ils attaquent d4. Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Cf6</a>.",
     "Même réflexe que plus haut : tu avances.",
     "Échange.",
     "Tu reprends avec le pion c. Suite : Cc3, e4."
    ]
   },
   {
    "id": "qdf1c58899",
    "titre": "1…e6 2.c4 d5 3.Cc3",
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs jouent …d5.",
     "C'est le Gambit Dame refusé : Cc3, puis Fg5."
    ]
   },
   {
    "id": "qf36f0b511",
    "titre": "1…e6 2.c4 Cf6 3.Cc3",
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Même position que 1…Cf6 2.c4 e6 3.Cc3."
    ]
   },
   {
    "id": "q67adffc86",
    "titre": "1…d5 2.c4",
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "c4"
    ],
    "legendes": [
     "Les noirs répondent …d5.",
     "Le pion c attaque d5 : c'est le Gambit Dame."
    ]
   },
   {
    "id": "q17a65f3d6",
    "titre": "Accepté : 3.e3",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Les noirs prennent le pion.",
     "Tu ouvres ton fou f1, qui menace de reprendre en c4."
    ]
   },
   {
    "id": "q88ed7211a",
    "titre": "Refusé : 3.Cc3",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs soutiennent d5.",
     "Deuxième attaquant sur d5."
    ]
   },
   {
    "id": "q3f4a5eeca",
    "titre": "Marshall : 3.cxd5",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5"
    ],
    "legendes": [
     "Les noirs développent sans soutenir d5 avec un pion.",
     "Tu prends en d5 : aucun pion noir ne peut reprendre."
    ]
   },
   {
    "id": "qf3f063208",
    "titre": "Accepté : 3…b5 4.a4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4"
    ],
    "legendes": [
     "Les noirs défendent c4 avec le pion b.",
     "Tu attaques la base de la chaîne b5-c4."
    ]
   },
   {
    "id": "q4f488a73e",
    "titre": "Accepté : 3…Cf6 4.Fxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Les noirs développent.",
     "Tu reprends le pion."
    ]
   },
   {
    "id": "q1288c99f9",
    "titre": "Accepté : 4…Ff5 5.Db3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3"
    ],
    "legendes": [
     "Le fou sort et ne défend plus b7.",
     "Double attaque : la dame vise b7 et, avec ton fou c4, le pion f7."
    ]
   },
   {
    "id": "q90a72d252",
    "titre": "Accepté : 4…e6 5.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Développement."
    ]
   },
   {
    "id": "q1e4bbcf51",
    "titre": "Refusé : 3…Cf6 4.Fg5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Un défenseur de plus pour d5.",
     "Tu cloues ce défenseur."
    ]
   },
   {
    "id": "q040b67277",
    "titre": "Refusé : 3…Fb4 4.Cf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier.",
     "Développe, tout simplement."
    ]
   },
   {
    "id": "qd05c711af",
    "titre": "Refusé : 3…dxc4 4.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4"
    ],
    "legendes": [
     "Les noirs prennent alors que leur fou c8 est enfermé.",
     "Le centre complet en un coup : le pion c4 reviendra ensuite."
    ]
   },
   {
    "id": "qb5198fd5b",
    "titre": "Refusé : 4…Fe7 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7",
     "e3"
    ],
    "legendes": [
     "Les noirs déclouent.",
     "Tu ouvres ton fou f1."
    ]
   },
   {
    "id": "q768ef3baa",
    "titre": "Refusé : 4…h6 5.Fxf6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6"
    ],
    "legendes": [
     "Les noirs chassent ton fou.",
     "Prends en f6 : tu supprimes un défenseur de d5."
    ]
   },
   {
    "id": "q10452ca08",
    "titre": "Marshall : 4.Cf3 et 5.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "Le cavalier reprend.",
     "D'abord développer.",
     "Les noirs développent.",
     "Le pion chasse le cavalier."
    ]
   },
   {
    "id": "q54a1797a5",
    "titre": "Marshall : 3…Dxd5 4.Cc3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "La dame reprend.",
     "Tu développes en attaquant la dame."
    ]
   },
   {
    "id": "qef22133de",
    "titre": "1…Cf6 2.c4 g6 3.Cc3",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Tu prépares e4."
    ]
   },
   {
    "id": "q1c8781700",
    "titre": "Est-indienne : 4.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "Bg7",
     "e4"
    ],
    "legendes": [
     "Le fou en g7.",
     "Trois pions au centre."
    ]
   },
   {
    "id": "q2748f9d03",
    "titre": "Grünfeld : 4.cxd5 et 5.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "legendes": [
     "La Grünfeld.",
     "Tu prends.",
     "Le cavalier reprend.",
     "Tu chasses le cavalier en prenant le centre."
    ]
   },
   {
    "id": "qcb16f2964",
    "titre": "Nimzo : 4.e3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "La Nimzo-indienne.",
     "Solide : tu ouvres ton fou f1 et protèges d4."
    ]
   },
   {
    "id": "q2f1068dfe",
    "titre": "1…Cf6 2.c4 e6 3.Cc3 c5 4.d5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Tu avances."
    ]
   },
   {
    "id": "qfcb7a7d16",
    "titre": "Nimzo : …Fxc3+ bxc3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Les noirs prennent ton cavalier, avec échec.",
     "Reprends avec le pion b : c'est la seule bonne reprise, elle renforce d4 et ouvre la colonne b."
    ]
   },
   {
    "id": "q8f9efb5ee",
    "titre": "Piège de l'éléphant : 6.e3, pas 6.Cxd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7",
     "cxd5",
     "exd5"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Tu continues ton développement. Surtout pas 6.Cxd5 ?? : le cavalier f6 prendrait quand même."
    ]
   },
   {
    "id": "qbce42b1a6",
    "titre": "La libération des noirs : …dxc4 et …Cd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3"
    ],
    "coups": [
     "dxc4",
     "Bxc4",
     "Nd5",
     "Bxe7",
     "Qxe7",
     "O-O",
     "Nxc3",
     "Qxc3",
     "b6"
    ],
    "legendes": [
     "Les noirs prennent en c4 : ton fou doit bouger une deuxième fois pour reprendre.",
     "Tu reprends le pion.",
     "Le cavalier vient en d5 pour proposer des échanges : c'est la manœuvre de libération classique du refusé.",
     "Tu échanges les fous : c'est le plus simple.",
     "La dame reprend.",
     "Ton roi se met à l'abri.",
     "Deuxième échange.",
     "La dame reprend.",
     "Le fou c8 va sortir par b7. Ensuite, …c5 attaquera ton centre."
    ]
   },
   {
    "id": "qd52783f32",
    "titre": "Carlsbad : 11.Tab1",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "Rab1"
    ],
    "legendes": [
     "La tour vient d'abord en b1 : elle soutiendra le pion b4. L'attaque de minorité peut commencer."
    ]
   },
   {
    "id": "q5206c7648",
    "titre": "L'attaque de minorité, coup par coup",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4",
     "a6",
     "a4",
     "Ng6"
    ],
    "coups": [
     "Rfc1",
     "Bf5",
     "b5",
     "axb5",
     "axb5",
     "h6",
     "bxc6",
     "bxc6"
    ],
    "legendes": [
     "Ta deuxième tour vient sur la colonne c : elle va s'ouvrir.",
     "Les noirs développent leur fou.",
     "C'est le moment : b5 attaque c6. Ton pion a4 et ton fou d3 le soutiennent.",
     "Les noirs prennent.",
     "Tu reprends : le pion b5 attaque encore c6.",
     "Un coup d'attente.",
     "Tu prends en c6.",
     "Voilà le résultat : un pion c6 que plus aucun pion ne défend, sur une colonne semi-ouverte."
    ]
   },
   {
    "id": "q5e463ebba",
    "titre": "La poussée d5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "e6",
     "Nf3",
     "c5",
     "O-O",
     "cxd4",
     "exd4",
     "Nc6",
     "Nc3",
     "Be7",
     "Re1",
     "O-O",
     "a3",
     "a6",
     "Ba2",
     "b5"
    ],
    "coups": [
     "d5",
     "exd5",
     "Nxd5",
     "Nxd5",
     "Qxd5",
     "Bb7",
     "Qh5"
    ],
    "legendes": [
     "<span class=\"mv good\">12.d5</span> ! Toutes tes pièces sont prêtes : la tour e1, le fou a2, le cavalier c3. La poussée va leur ouvrir des lignes.",
     "Les noirs prennent.",
     "Le cavalier reprend : il attaque le fou e7 et le cavalier f6.",
     "Échange.",
     "La dame reprend, au centre. Avec ton fou a2 derrière elle, elle vise f7, et elle attaque le cavalier c6.",
     "Le fou défend c6 et vise ta dame derrière le cavalier : si le cavalier bouge, elle est attaquée.",
     "La dame s'en va… vers le roque noir."
    ]
   },
   {
    "id": "qa3bbaa89a",
    "titre": "Fxf6, puis Fxh7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Ne6",
     "Bxf6",
     "Bxf6",
     "Bxh7+",
     "Kh8",
     "Bd3"
    ],
    "legendes": [
     "Le cavalier quitte f8, d'où il défendait h7.",
     "Tu supprimes l'autre défenseur de h7 : le cavalier f6.",
     "Les noirs reprennent.",
     "Le fou prend h7 avec échec. Le roi ne peut pas prendre : ta dame c2 protège le fou.",
     "Le roi s'écarte.",
     "Le fou revient : un pion de plus."
    ]
   },
   {
    "id": "q76da77d06",
    "titre": "Carlsbad : 13…Dd8 ? 14.Cxe4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4"
    ],
    "coups": [
     "Qd8",
     "Nxe4",
     "dxe4",
     "Bxe4"
    ],
    "legendes": [
     "La dame quitte la colonne e : le cavalier e4 perd un défenseur.",
     "Tu échanges les cavaliers.",
     "Le pion reprend.",
     "Ton fou prend le pion e4 : il était défendu par la tour e8 seule, et ta dame c2 protège ton fou."
    ]
   },
   {
    "id": "q3553b1494",
    "titre": "Carlsbad : 11…Ff5 ? 12.Fxf5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Bf5",
     "Bxf5"
    ],
    "legendes": [
     "Les noirs veulent échanger ton bon fou d3… mais le fou f5 n'est pas protégé.",
     "Fxf5 : une pièce de plus. Les noirs ne peuvent pas reprendre."
    ]
   },
   {
    "id": "qc43ff2890",
    "titre": "Accepté : 5…cxb5 ?? 6.Df3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3",
     "Nc6",
     "Qxc6+"
    ],
    "legendes": [
     "<span class=\"mv bad\">5…cxb5</span> ?? Naturel : les noirs reprennent leur pion. Mais regarde la grande diagonale f3-a8 : il n'y a plus rien dessus.",
     "<span class=\"mv good\">6.Df3</span> ! La dame attaque la tour a8, et rien ne peut la protéger.",
     "Les noirs bouchent la diagonale avec le cavalier. Sur <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Fb7</a>, même punition.",
     "Tu prends le cavalier, avec échec."
    ]
   },
   {
    "id": "q713a5c386",
    "titre": "Accepté : 6…Fb7 7.Dxb7",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5",
     "cxb5",
     "Qf3"
    ],
    "coups": [
     "Bb7",
     "Qxb7"
    ],
    "legendes": [
     "Les noirs bouchent la diagonale avec le fou.",
     "Ta dame prend le fou, et la tour a8 est encore attaquée."
    ]
   },
   {
    "id": "q05ae68862",
    "titre": "Accepté : 5…b6 ? 6.Fxf7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "b6",
     "Bxf7+"
    ],
    "legendes": [
     "Les noirs mettent leur pion b à l'abri en b6, protégé par a7 et c7… mais oublient f7.",
     "Le fou prend f7 avec échec : le roi noir doit bouger et ne pourra plus roquer."
    ]
   },
   {
    "id": "q5e60b02a7",
    "titre": "Accepté : 5…Dc8 ? 6.Fxf7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Qc8",
     "Bxf7+"
    ],
    "legendes": [
     "La dame défend b7… mais f7 n'est défendu que par le roi, qui ne pourra pas reprendre : ta dame b3 protège le fou.",
     "Le fou prend f7 avec échec : un pion de plus, et le roi noir ne pourra plus roquer."
    ]
   },
   {
    "id": "q8a0046435",
    "titre": "Marshall : 5…e5 ?? 6.exd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "e5",
     "exd5"
    ],
    "legendes": [
     "<span class=\"mv bad\">5…e5</span> ?? Les noirs contre-attaquent au centre… et oublient que leur cavalier d5 est attaqué.",
     "<span class=\"mv good\">6.exd5</span> : le cavalier tombe."
    ]
   },
   {
    "id": "q1b7bfa42b",
    "titre": "Est-indienne : 4…Cxe4 ??",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4",
     "d5",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "<span class=\"mv bad\">4…Cxe4</span> ?? Les noirs prennent ton pion e4 en comptant sur un tour.",
     "Tu reprends le cavalier.",
     "L'idée des noirs : le pion d5 attaque ton cavalier e4 et ton pion c4 en même temps.",
     "Tu prends le pion.",
     "La dame attaque ton cavalier e4 et ton pion d4.",
     "Le cavalier se met à l'abri. Les noirs vont récupérer le pion d4, mais ça s'arrête là."
    ]
   },
   {
    "id": "qada680846",
    "titre": "Contre le piège de l'éléphant : 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Développe simplement : ton fou f1 va sortir. Avec un cavalier noir en d7, ne touche pas à d5 avec ton cavalier."
    ]
   },
   {
    "id": "q15446cc39",
    "titre": "Albin : 4.Cf3, pas 4.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4"
    ],
    "coups": [
     "Nf3"
    ],
    "legendes": [
     "Développe en défendant e5. Pas 4.e3 ? : après 4…Fb4+ 5.Fd2 dxe3, ton avantage disparaît, et 6.Fxb4 ?? tombe dans le piège de Lasker."
    ]
   },
   {
    "id": "q450b3a77d",
    "titre": "Lasker : 6.fxe3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4",
     "e3",
     "Bb4+",
     "Bd2",
     "dxe3"
    ],
    "coups": [
     "fxe3"
    ],
    "legendes": [
     "Reprends le pion e3 avec le pion f. Surtout pas 6.Fxb4 ?? : …exf2+ et …fxg1=C+."
    ]
   },
   {
    "id": "q280c70623",
    "titre": "Englund : 6.Cc3",
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "Le cavalier quitte b1, et ta dame d1 défend maintenant la tour a1. Surtout pas 6.Fc3 ?? : après …Fb4, tu perds au moins la tour a1."
    ]
   },
   {
    "id": "qc61b15ed1",
    "titre": "1…e5 : 2.dxe5",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5"
    ],
    "legendes": [
     "Le gambit Englund : les noirs offrent un pion.",
     "Ici, pas de 2.c4 : prends le pion, il est gratuit."
    ]
   },
   {
    "id": "q5ff71d88b",
    "titre": "1…c5 : 2.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs attaquent d4 avec le pion c.",
     "Avance ton pion d : sur 2.c4, …cxd4 te prendrait ton pion central."
    ]
   },
   {
    "id": "q6cc4c9200",
    "titre": "Contre 1…e5 : prends !",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2",
     "Nc3"
    ],
    "legendes": [
     "Le gambit Englund : les noirs offrent un pion dès le premier coup.",
     "Ici, pas de 2.c4 : <span class=\"mv good\">2.dxe5</span>, le pion est gratuit.",
     "Les noirs attaquent ton pion e5.",
     "Tu le défends en développant.",
     "La dame attaque e5 et prépare un piège.",
     "Tu défends encore e5.",
     "Échec, et la dame vise b2.",
     "Tu bouches avec le fou.",
     "La dame prend b2 et attaque ton cavalier b1 et ta tour a1.",
     "<span class=\"mv good\">6.Cc3</span> : le cavalier se met à l'abri, et ta dame d1 défend maintenant la tour a1. Surtout pas 6.Fc3 ?? : après …Fb4, tu perds au moins la tour a1 (voir les pièges)."
    ]
   },
   {
    "id": "qa326464e1",
    "titre": "Exercice 1 : l'attaque de minorité",
    "debut": [],
    "coups": [
     "b5",
     "cxb5",
     "Nxd5"
    ],
    "legendes": [
     "<span class=\"mv good\">15.b5</span> ! Le pion passe à côté du pion a5 et attaque c6. Si les noirs le laissent faire, bxc6 leur laissera un pion c6 faible.",
     "Les noirs prennent… mais le pion c6 était le soutien de d5.",
     "Cxd5 ! Le pion d5 n'avait plus de défenseur. Ton cavalier le prend et attaque la dame e7."
    ],
    "fen": "r1b1rnk1/1p2qpp1/2p4p/p2p4/1P1Pn3/2NBPN2/P1Q2PPP/1R3RK1 w - - 0 15"
   },
   {
    "id": "qc5ad3a23c",
    "titre": "Exercice 2 : qui défend d5 ?",
    "debut": [],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nxd5",
     "Qd8"
    ],
    "legendes": [
     "Fxf6 ! Le cavalier f6 était un des deux défenseurs de d5. Tu l'échanges.",
     "Les noirs reprennent avec le fou.",
     "Cxd5 ! Le pion c6 ne peut pas reprendre : …cxd5 ouvrirait la colonne c, et ta dame c2 prendrait la dame c7.",
     "La dame quitte la colonne c."
    ],
    "fen": "r1b1rnk1/ppq1bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 4 12"
   },
   {
    "id": "q546213a00",
    "titre": "Exercice 3 : la batterie Fd3 + Dc2",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kh8"
    ],
    "legendes": [
     "Fxh7+ ! Le fou noir a quitté e7 : plus rien ne s'interpose entre ton fou g5 et la dame d8. Le cavalier f6 est cloué : s'il prend en h7, Fxd8. Et le roi ne peut pas prendre : ta dame c2 protège le fou.",
     "Le roi se range en h8."
    ],
    "fen": "r1bq1rk1/pp1n1ppp/2pb1n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R w KQ - 2 10"
   },
   {
    "id": "q7984f39dd",
    "titre": "Exercice 4 : le pion isolé et le roque noir",
    "debut": [],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Qxh7#"
    ],
    "legendes": [
     "Fxf6 ! Avec le roi, le cavalier f6 est le seul défenseur de h7. Ta dame d3 et ton fou c2 visent h7 : c'est la batterie, dans l'autre sens.",
     "Les noirs reprennent sans voir la menace.",
     "Dxh7#. Le roi ne peut pas prendre (ton fou c2 protège la dame), et la tour f8 lui bloque la seule case libre."
    ],
    "fen": "2rq1rk1/1b2bppp/ppn1pn2/6B1/3P4/2NQ1N2/PPB2PPP/R3R1K1 w - - 0 14"
   },
   {
    "id": "q67510174b",
    "titre": "Exercice 5 : le pion isolé et la colonne d",
    "debut": [],
    "coups": [
     "d5",
     "exd5",
     "Nxd5",
     "Nxd5",
     "Bxd5"
    ],
    "legendes": [
     "d5 ! Ta tour d1 est derrière le pion, la dame noire juste devant, en d6. Le pion menace dxc6 ou dxe6 : la colonne d s'ouvrirait sur la dame.",
     "Les noirs prennent.",
     "Cxd5 ! Le cavalier attaque le fou e7, déjà attaqué par ta dame e2, et le cavalier f6.",
     "Les noirs échangent.",
     "Fxd5 ! Ton fou se place entre ta tour d1 et la dame d6 : dès qu'il bougera (Fxc6, Fxf7+), la tour attaquera la dame. Et le fou e7 reste attaqué par ton fou g5 et ta dame e2."
    ],
    "fen": "r4rk1/pb2bppp/1pnqpn2/6B1/2BP4/2N2N2/PP2QPPP/3RR1K1 w - - 4 13"
   },
   {
    "id": "q772650314",
    "titre": "Exercice 6 : la Marshall avec …Fg4",
    "debut": [],
    "coups": [
     "Qb3",
     "e6",
     "Qxb7"
    ],
    "legendes": [
     "Db3 ! Le fou a quitté c8 : le pion b7 n'a plus de défenseur. Et si le cavalier d5 recule en b6, la diagonale de ta dame vers f7 s'ouvre.",
     "Les noirs ouvrent leur fou f8, mais oublient b7.",
     "Dxb7 : un pion de plus, et ta dame attaque la tour a8."
    ],
    "fen": "rn1qkb1r/ppp1pppp/8/3nNb2/3P4/8/PP2PPPP/RNBQKB1R w KQkq - 4 6"
   },
   {
    "id": "q58a52058a",
    "titre": "Exercice 7 : l'accepté avec …Fd6",
    "debut": [],
    "coups": [
     "e4",
     "Nbd7",
     "e5"
    ],
    "legendes": [
     "e4 ! Ton cavalier c3 soutient le pion. Et il y a une menace : e5 attaquerait à la fois le fou d6 et le cavalier f6.",
     "Les noirs développent sans voir la menace.",
     "e5 ! Une fourchette : le pion attaque le fou et le cavalier. L'un des deux va tomber."
    ],
    "fen": "rnbq1rk1/ppp2pp1/3bpn1p/8/2BP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 0 8"
   },
   {
    "id": "q4343b279f",
    "titre": "Exercice 8 : après l'attaque de minorité",
    "debut": [],
    "coups": [
     "Ne5",
     "Ng6"
    ],
    "legendes": [
     "Ce5 ! Avec …b6, les noirs ont retiré le pion qui défendait c6. Ton cavalier, soutenu par d4, attaque ce pion que plus rien ne protège.",
     "Les noirs attaquent ton cavalier."
    ],
    "fen": "r3rnk1/4qppp/ppp5/3p1b2/PP1Pn3/2NBPN2/2Q2PPP/1RR3K1 w - - 0 16"
   },
   {
    "id": "q5d8f5345a",
    "titre": "1…b6",
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "c4",
     "Bb7",
     "Nc3",
     "e6",
     "e4"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto du fou c8.",
     "Ton coup de toujours.",
     "Le fou vise e4.",
     "Tu défends e4 à l'avance.",
     "Les noirs ouvrent leur fou f8.",
     "Tu prends tout le centre."
    ]
   },
   {
    "id": "q3ecc31f14",
    "titre": "2…Ff5, la défense balte",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bf5",
     "Nc3",
     "Nf6",
     "Qb3"
    ],
    "legendes": [
     "Le fou sort tôt : le pion b7 n'est plus défendu.",
     "Ton réflexe : Cc3.",
     "Les noirs développent.",
     "La dame attaque b7 ; derrière ton pion c4, elle vise aussi d5."
    ]
   },
   {
    "id": "q2ad83de0c",
    "titre": "1…g6",
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "c4",
     "Bg7",
     "Nc3",
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Ton coup de toujours.",
     "Le fou en g7.",
     "Tu prépares e4.",
     "Les noirs attaquent d4.",
     "Tu avances, comme contre toutes les attaques …c5."
    ]
   },
   {
    "id": "q5d54f62ba",
    "titre": "1…d6",
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "c4",
     "e5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu défends d4 en développant."
    ]
   },
   {
    "id": "qaf9530e80",
    "titre": "1…f5, la hollandaise",
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "c4",
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "La hollandaise : les noirs contrôlent e4 avec le pion f.",
     "Ton coup de toujours.",
     "Le cavalier vient aussi surveiller e4.",
     "Ton cavalier dispute e4 à son tour."
    ]
   },
   {
    "id": "q24fa84b8d",
    "titre": "1…Cc6",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "c4",
     "e5",
     "d5",
     "Nce7",
     "e4"
    ],
    "legendes": [
     "Le cavalier sort devant le pion c.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu avances en chassant le cavalier.",
     "Il recule.",
     "Tu complètes le centre."
    ]
   },
   {
    "id": "q89121ed02",
    "titre": "1…c6 : la Slave",
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "c4",
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs préparent …d5.",
     "Ton coup de toujours.",
     "C'est la défense slave.",
     "Ton réflexe : Cc3."
    ]
   },
   {
    "id": "q48c3c41c7",
    "titre": "1…a6 et autres coups d'attente",
    "debut": [
     "d4"
    ],
    "coups": [
     "a6",
     "c4",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Un coup d'attente.",
     "Ton coup de toujours.",
     "Les noirs ouvrent leur fou f8.",
     "Ton réflexe : Cc3, puis e4 si les noirs te laissent le centre."
    ]
   },
   {
    "id": "qb7b2a2a4b",
    "titre": "1…Cf6 2.c4 c5 3.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "c5",
     "d5"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "Les noirs attaquent d4.",
     "Tu avances."
    ]
   },
   {
    "id": "qe85ab425b",
    "titre": "Gambit de Budapest",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "e5",
     "dxe5",
     "Ng4",
     "Bf4"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "Le gambit de Budapest : un pion offert.",
     "Tu prends.",
     "Le cavalier attaque e5.",
     "Tu défends e5 en développant ton fou."
    ]
   },
   {
    "id": "qde19d5eb8",
    "titre": "1…Cf6 2.c4 Cc6 3.Cc3",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Ton coup de toujours.",
     "L'autre cavalier sort.",
     "Ton réflexe : Cc3."
    ]
   },
   {
    "id": "q359f0032d",
    "titre": "2…c6, la Slave",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c6",
     "Nc3",
     "dxc4",
     "e4",
     "b5",
     "a4"
    ],
    "legendes": [
     "La Slave.",
     "Ton réflexe : Cc3.",
     "Les noirs prennent.",
     "Le centre complet.",
     "Les noirs défendent c4.",
     "Tu attaques la chaîne : le pion b5, qui tient c4, est visé."
    ]
   },
   {
    "id": "q690fb882e",
    "titre": "2…e5, l'Albin",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "d4",
     "Nf3",
     "Nc6",
     "g3"
    ],
    "legendes": [
     "Le contre-gambit Albin.",
     "Tu prends.",
     "Le pion d4 gêne ton développement.",
     "Tu développes en défendant e5 : c'est le coup qui évite le piège de Lasker.",
     "Les noirs attaquent e5.",
     "Ton fou ira en g2."
    ]
   },
   {
    "id": "q5c61fa650",
    "titre": "2…Cc6, la Tchigorine",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "La défense Tchigorine : le cavalier devant le pion c.",
     "Ton réflexe : Cc3, développement normal."
    ]
   },
   {
    "id": "qa59d47c3c",
    "titre": "2…c5, le gambit symétrique",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c5",
     "cxd5",
     "Nf6",
     "e4"
    ],
    "legendes": [
     "Les noirs attaquent d4 à leur tour.",
     "Tu prends en d5.",
     "Le cavalier attaque d5.",
     "Tu défends d5 et tu prends le centre."
    ]
   },
   {
    "id": "q33ff99518",
    "titre": "2…g6",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "g6",
     "cxd5",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs préparent le fianchetto.",
     "Tu prends en d5.",
     "Le cavalier attaque d5.",
     "Développe : le pion d5 est à toi pour l'instant."
    ]
   },
   {
    "id": "q143044777",
    "titre": "2…Fg4",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bg4",
     "Nc3"
    ],
    "legendes": [
     "Le fou sort tôt.",
     "Ton réflexe : Cc3. Db3 contre b7 est aussi une idée, puisque le fou ne défend plus ce pion."
    ]
   }
  ]
 },
 {
  "id": "londres",
  "titre": "Le Système de Londres",
  "camp": "w",
  "rep": "rep-londres",
  "sous": "Ton répertoire blanc : 1.d4 et 2.Ff4 contre presque tout. {{positions}} à connaître, toujours la même construction.",
  "chapeau": "<p>Le Londres est un système : tu sors ton fou en f4, puis tu construis la même pyramide de pions c3-d4-e3 presque quoi que fassent les noirs. Peu de théorie, un roi en sécurité, un plan clair. Ce qu'il faut apprendre, ce sont les quelques positions où les noirs t'obligent à faire autre chose.</p><p>La leçon suit l'arbre de ton répertoire, puis explique les idées, les pièges et les exceptions. Chaque séquence animée a son bouton Quiz ; tous les quiz se retrouvent aussi dans Entraînement, rubrique « Quiz d'ouverture ». Les liens soulignés en pointillé montrent la position dont on parle.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "Explication du répertoire",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire tient en une phrase : <span class=\"mv\">1.d4</span>, puis <span class=\"mv\">2.Ff4</span> contre les trois réponses les plus jouées (<span class=\"mv\">1…d5</span>, <span class=\"mv\">1…Cf6</span>, <span class=\"mv\">1…e6</span>). Ensuite, presque toujours la même construction : <span class=\"mv\">e3</span>, <span class=\"mv\">Cf3</span>, <span class=\"mv\">c3</span>. Le fou sort avant e3 : si tu jouais e3 d'abord, le pion l'enfermerait derrière tes pions."
     },
     {
      "t": "p",
      "html": "Ce que jouent les noirs entre 1000 et 1600 sur Lichess (parties blitz et rapides) décide de la ligne. Chaque échiquier s'anime : avance avec ›, recule avec ‹, ou clique sur un coup. La flèche verte, c'est ton coup ; la grise, celui de l'adversaire. Les cases colorées montrent les pièces dont parle l'explication. Les coups soulignés en pointillé sont des liens vers la position dont on parle. Le bouton <strong>Quiz</strong> remet la position à zéro et te demande de jouer tes coups."
     },
     {
      "t": "table",
      "entetes": [
       "Après",
       "Les noirs jouent",
       "Fréquence",
       "Ce que c'est"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "50 %",
        "Le Londres classique"
       ],
       [
        "1.d4",
        "1…Cf6",
        "15 %",
        "Souvent une défense indienne"
       ],
       [
        "1.d4",
        "1…e6",
        "10 %",
        "Souvent une transposition"
       ],
       [
        "1.d4 d5 2.Ff4",
        "2…Cc6",
        "30 %",
        "Le cavalier vise b4 et e5"
       ],
       [
        "1.d4 d5 2.Ff4",
        "2…Cf6",
        "23 %",
        "Le développement normal"
       ],
       [
        "1.d4 d5 2.Ff4",
        "2…e6",
        "17 %",
        "Le fou f8 vise d6"
       ],
       [
        "1.d4 Cf6 2.Ff4",
        "2…g6",
        "27 %",
        "Le fianchetto"
       ],
       [
        "1.d4 e6 2.Ff4",
        "2…c5",
        "12 %",
        "Les noirs frappent d4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. La construction de base : 1…d5 2.Ff4 Cf6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5"
      ],
      "coups": [
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "legendes": [
       "<span class=\"mv good\">2.Ff4</span> : ton coup signature. Le fou sort tout de suite, sur une belle diagonale.",
       "Les noirs développent.",
       "<span class=\"mv\">3.e3</span> soutient d4 et ouvre la diagonale de ton fou f1. Ton fou f4 est déjà dehors : c'est tout l'intérêt de l'ordre des coups.",
       "Les noirs ouvrent leur fou f8. Leur fou c8, lui, reste enfermé derrière e6.",
       "<span class=\"mv\">4.Cf3</span> : le cavalier sort et contrôle e5.",
       "Les noirs attaquent ta base, le pion d4.",
       "<span class=\"mv good\">5.c3</span> : la pyramide c3-d4-e3. Si les noirs prennent en d4, tu reprends avec un pion et ton centre reste debout."
      ],
      "fin": "La position type du Londres (Stockfish : +0,2). Ensuite : Cbd2, Fd3, 0-0, puis Ce5. Si les noirs jouent …Db6 pour attaquer b2, réponds <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a> : surtout pas <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Cbd2 ??</a>. Contre …Fd6, <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a> : tu gardes ton fou.",
      "titre": "La pyramide c3-d4-e3",
      "quiz": [
       "qfb0db9eb6",
       "q8efee52ab",
       "qceec2bda3"
      ],
      "marques": [
       [
        "f4"
       ],
       [],
       [
        "e3",
        "d4",
        "f1",
        "f4"
       ],
       [
        "f8",
        "c8",
        "e6"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "f4",
        "c3",
        "d4",
        "e3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. 2…Cc6 : le cavalier vise b4"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4"
      ],
      "coups": [
       "Nc6",
       "e3",
       "Nf6",
       "Nf3",
       "Bf5",
       "Bb5"
      ],
      "legendes": [
       "La réponse la plus jouée entre 1000 et 1600 Elo. Le cavalier vise b4, puis c2.",
       "Toujours e3.",
       "Les noirs développent.",
       "Cf3.",
       "Le fou c8 sort à son tour.",
       "<span class=\"mv good\">5.Fb5</span> ! Le fou cloue le cavalier c6 contre le roi : il ne peut plus bouger. Ce5 viendra l'attaquer une deuxième fois."
      ],
      "fin": "Stockfish : +0,7. Si les noirs jouent ensuite …e6, <a class=\"lien-var\" href=\"#\" data-var=\"qc7a55708c\">6.Ce5</a> met déjà le cavalier c6 sous pression. Contre …Fg4, <a class=\"lien-var\" href=\"#\" data-var=\"q1e3436fde\">c3</a> suffit.",
      "titre": "3…Cf6 4.Cf3 Ff5 5.Fb5",
      "quiz": [
       "q2c87396fd",
       "qc7a55708c",
       "q1e3436fde"
      ],
      "marques": [
       [
        "c6",
        "b4",
        "c2!"
       ],
       [],
       [],
       [],
       [
        "f5"
       ],
       [
        "b5",
        "c6!",
        "e8",
        "f3"
       ],
       [
        "b5",
        "c6!",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3"
      ],
      "coups": [
       "Bf5",
       "Nf3",
       "Nb4",
       "Bd3"
      ],
      "legendes": [
       "Le fou sort tout de suite et vise c2.",
       "Développe.",
       "La menace : …Cxc2+, échec au roi et attaque de la tour a1. Le pion c2 est attaqué deux fois (cavalier b4, fou f5), défendu une fois (ta dame).",
       "<span class=\"mv good\">5.Fd3</span> coupe la diagonale du fou f5 : c2 n'est plus attaqué qu'une fois. Si le cavalier prend en d3, reprends cxd3."
      ],
      "fin": "Égalité (Stockfish : +0,1). Attention : <a class=\"lien-var\" href=\"#\" data-var=\"q4d75699fc\">5.c3 ??</a> perd la tour, et 5.Cbd2 ?? aussi (…Cxc2+).",
      "titre": "3…Ff5 4.Cf3 Cb4 : le piège sur c2",
      "quiz": [
       "q8e0bfffdf"
      ],
      "marques": [
       [
        "f5",
        "c2!"
       ],
       [],
       [
        "c2!",
        "b4",
        "f5",
        "d1"
       ],
       [
        "d3",
        "f5",
        "c2!",
        "b4"
       ],
       [
        "b4",
        "c2!",
        "a1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. 2…e6 : le fou noir vise ton fou"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4"
      ],
      "coups": [
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3"
      ],
      "legendes": [
       "Les noirs ouvrent leur fou f8.",
       "e3.",
       "Le fou d6 attaque ton fou f4 : les noirs veulent l'échanger.",
       "<span class=\"mv good\">4.Fg3</span> : tu gardes ton fou. S'il est pris, ce sera par un pion.",
       "Les noirs échangent quand même.",
       "<span class=\"mv good\">5.hxg3</span> : reprends avec le pion h. La colonne h s'ouvre pour ta tour h1, face au pion h7."
      ],
      "fin": "Stockfish : +0,4. Ne reprends pas <a class=\"lien-var\" href=\"#\" data-var=\"qd2a5dbaee\">fxg3 ?</a> : ton pion e3 perdrait son soutien. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q918670779\">3…c5</a>, développe et reprends en d4 avec le pion e.",
      "titre": "3…Fd6 4.Fg3",
      "quiz": [
       "qd993f6a92",
       "q918670779"
      ],
      "marques": [
       [
        "f8"
       ],
       [],
       [
        "d6",
        "f4!"
       ],
       [
        "g3",
        "h2",
        "f2"
       ],
       [
        "g3!"
       ],
       [
        "g3",
        "h1",
        "h7!"
       ],
       [
        "g3",
        "f2",
        "e3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "4. 1…Cf6 2.Ff4 g6 : le fianchetto"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6"
      ],
      "coups": [
       "Bf4",
       "g6",
       "e3",
       "Bg7",
       "Nf3",
       "O-O",
       "h3"
      ],
      "legendes": [
       "Contre 1…Cf6 aussi : 2.Ff4.",
       "Les noirs préparent …Fg7 : le fianchetto.",
       "e3.",
       "Le fou g7 vise la grande diagonale.",
       "Développe.",
       "Les noirs roquent.",
       "<span class=\"mv good\">5.h3</span> ! Le cavalier f6 aimerait venir en h5 pour chasser ton fou. Avec h3, ton fou aura une retraite en h2."
      ],
      "fin": "Égalité (Stockfish : +0,1), une position saine. Sur …Ch5, <a class=\"lien-var\" href=\"#\" data-var=\"qf810435f2\">6.Fh2</a>. Ensuite : Fe2, 0-0, c3. Sans h3, …Ch5 finit souvent par échanger ton fou (<a class=\"lien-var\" href=\"#\" data-var=\"q2c341557e\">voir la ligne</a>).",
      "titre": "5.h3 : une case de retraite pour le fou",
      "quiz": [
       "qcc586f7ec",
       "qf810435f2"
      ],
      "marques": [
       [
        "f6",
        "f4"
       ],
       [
        "f8",
        "g7"
       ],
       [],
       [
        "g7"
       ],
       [],
       [],
       [
        "f6",
        "h5",
        "f4",
        "h2"
       ],
       [
        "f6",
        "f4",
        "h2",
        "h3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "5. 1…e6 : 2.Ff4 aussi"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e6"
      ],
      "coups": [
       "Bf4",
       "c5",
       "e3",
       "cxd4",
       "exd4",
       "Nc6",
       "Nf3"
      ],
      "legendes": [
       "Contre 1…e6 aussi, 2.Ff4. Sur …d5 ou …Cf6, tu retrouves les lignes précédentes.",
       "Les noirs attaquent d4 tout de suite.",
       "e3 soutient d4.",
       "Les noirs échangent.",
       "<span class=\"mv good\">4.exd4</span> : reprends tout de suite avec le pion e. Ton pion reste au centre.",
       "Le cavalier attaque d4.",
       "Cf3 défend d4."
      ],
      "fin": "Stockfish : +0,4. Ne retarde pas la reprise : <a class=\"lien-var\" href=\"#\" data-var=\"qe581c51d5\">4.Cf3 ?</a> coûte un pion.",
      "titre": "2…c5 3.e3 cxd4 4.exd4",
      "quiz": [
       "qadae236b8"
      ],
      "marques": [
       [
        "e6",
        "f4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "e3",
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "d4"
       ],
       [
        "c6",
        "d4!"
       ],
       [
        "f3",
        "d4!"
       ],
       [
        "d4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Le Londres en quatre coups :</strong> Ff4, e3, Cf3, c3. Puis Cbd2, Fd3, 0-0. Ce qui change selon les noirs tient en peu de règles : Fg3 contre …Fd6, h3 contre le fianchetto, Fb5 contre …Cc6 et …Ff5, Fd3 contre …Cb4, Db3 contre …Db6."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "Le par cœur",
    "blocs": [
     {
      "t": "p",
      "html": "Voici tout le répertoire, lu directement dans tes données : si tu le modifies dans l'éditeur, cet arbre suit. Il y a {{positions}} où c'est à toi de trouver le coup, mais la plupart se ressemblent : c'est l'avantage d'un système. Dans le tableau, clique sur un coup pour le voir sur l'échiquier ; chaque coup est aussi un quiz."
     },
     {
      "t": "h",
      "html": "Les décisions à connaître"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "Les noirs jouent",
       "Tu joues",
       "Pourquoi"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2606a729d\">2.Ff4</a>",
        "Le fou sort avant e3"
       ],
       [
        "",
        "1…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6c4c6653d\">2.Ff4</a>",
        "Même système"
       ],
       [
        "",
        "1…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q65502247c\">2.Ff4</a>",
        "Même système"
       ],
       [
        "2.Ff4",
        "presque tout",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde268baff\">3.e3</a>",
        "Soutient d4, ouvre le fou f1"
       ],
       [
        "3.e3",
        "presque tout",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbbf48a2e9\">4.Cf3</a>",
        "Développe, contrôle e5"
       ],
       [
        "4.Cf3",
        "…c5 ou rien de spécial",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q11a0c31eb\">5.c3</a>",
        "La pyramide"
       ],
       [
        "Partout",
        "…Fd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a>",
        "Garde ton fou"
       ],
       [
        "",
        "…Fxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>",
        "La colonne h s'ouvre"
       ],
       [
        "",
        "…g6 et …Fg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>",
        "Retraite en h2 contre …Ch5"
       ],
       [
        "",
        "…Cc6 et …Ff5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Fb5</a>",
        "Cloue le cavalier"
       ],
       [
        "",
        "…Cb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Fd3</a>",
        "Coupe la diagonale f5-c2"
       ],
       [
        "",
        "…Fg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1e3436fde\">c3</a>",
        "Le clouage ne gêne pas"
       ],
       [
        "",
        "…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>",
        "Reprends tout de suite"
       ],
       [
        "",
        "…Fb4+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3d1bcbb33\">c3</a>",
        "Gagne du temps sur le fou"
       ],
       [
        "Fianchetto, sans h3",
        "…Ch5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ccef8522\">Fg5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q6ae32d977\">Fe5</a>",
        "Le fou se met à l'abri"
       ],
       [
        "",
        "…d6 puis …Fg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0c016b191\">h3</a>",
        "Pose la question au fou"
       ],
       [
        "1…Cf6 2.Ff4 e6 3.e3 b6 4.Cf3",
        "4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q146a7ca31\">Cc3</a>",
        "Puis Cb5 contre c7"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Chaque ligne, en quiz"
     },
     {
      "t": "p",
      "html": "Chaque ligne de ton répertoire, de 1.d4 à ta dernière réponse, rangée selon le premier coup des noirs. Clique sur ton dernier coup pour voir la ligne ; son bouton Quiz te la fait rejouer depuis le début. Une ligne courte s'arrête là où elle rejoint une ligne déjà écrite."
     },
     {
      "t": "h",
      "html": "Contre 1…d5"
     },
     {
      "t": "table",
      "entetes": [
       "Les noirs jouent",
       "Ta ligne"
      ],
      "lignes": [
       [
        "1…d5 2…Cc6 3…Cf6 4…Fg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02936d27c\">5.c3</a>"
       ],
       [
        "1…d5 2…Cc6 3…Cf6 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q631a84079\">5.c3</a>"
       ],
       [
        "1…d5 2…Cc6 3…Cf6 4…Ff5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q784cc7745\">5.Fb5</a>"
       ],
       [
        "1…d5 2…Cc6 3…Ff5 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qffadd6d88\">5.c3</a>"
       ],
       [
        "1…d5 2…Cc6 3…Ff5 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfe8ec8644\">5.Fb5</a>"
       ],
       [
        "1…d5 2…Cc6 3…Ff5 4…Cb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8696a14d7\">5.Fd3</a>"
       ],
       [
        "1…d5 2…Cc6 3…e6 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q353844a3f\">5.c3</a>"
       ],
       [
        "1…d5 2…Cc6 3…e6 4…Fd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5192318b4\">5.Fg3</a>"
       ],
       [
        "1…d5 2…Cc6 3…e6 4…Fb4+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd2fb6049d\">5.c3</a>"
       ],
       [
        "1…d5 2…Cf6 3…e6 4…Fd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q45b3957fe\">5.Fg3</a>"
       ],
       [
        "1…d5 2…Cf6 3…e6 4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ad15f606\">5.c3</a>"
       ],
       [
        "1…d5 2…Cf6 3…e6 4…Fe7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q56e7a248e\">5.c3</a>"
       ],
       [
        "1…d5 2…Cf6 3…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q89b060082\">4.Cf3</a>"
       ],
       [
        "1…d5 2…Cf6 3…Ff5 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4cf5b36cb\">5.c3</a>"
       ],
       [
        "1…d5 2…Cf6 3…Ff5 4…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd32058728\">5.Fb5</a>"
       ],
       [
        "1…d5 2…Cf6 3…Ff5 4…h6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3560444e9\">5.Fd3</a>"
       ],
       [
        "1…d5 2…e6 3…Fd6 4…Fxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02799299e\">5.hxg3</a>"
       ],
       [
        "1…d5 2…e6 3…Fd6 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q64f71fa89\">5.Cf3</a>"
       ],
       [
        "1…d5 2…e6 3…Fd6 4…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4014ef669\">5.Cf3</a>"
       ],
       [
        "1…d5 2…e6 3…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qab11a053b\">4.Cf3</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa246f56c7\">5.c3</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa628b50c8\">5.exd4</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb8c1d925d\">5.c3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Contre 1…Cf6"
     },
     {
      "t": "table",
      "entetes": [
       "Les noirs jouent",
       "Ta ligne"
      ],
      "lignes": [
       [
        "1…Cf6 2…g6 3…Fg7 4…0-0",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q69efb6e43\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…Fg7 4…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc87f7ad17\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…Fg7 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q63fd62a1d\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…d6 4…Fg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6371c765c\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…d6 4…Fg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf9bad8772\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…d6 4…Ch5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02bb48fec\">5.Fg5</a>"
       ],
       [
        "1…Cf6 2…g6 3…d5 4…Fg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbb679dbc1\">5.h3</a>"
       ],
       [
        "1…Cf6 2…g6 3…d5 4…Ch5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5b0ecc810\">5.Fe5</a>"
       ],
       [
        "1…Cf6 2…g6 3…d5 4…Fg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2582d3a7e\">5.c3</a>"
       ],
       [
        "1…Cf6 2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd53a2b9f6\">3.e3</a>"
       ],
       [
        "1…Cf6 2…e6 3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc6ef374eb\">4.Cf3</a>"
       ],
       [
        "1…Cf6 2…e6 3…c5 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde9a63467\">5.exd4</a>"
       ],
       [
        "1…Cf6 2…e6 3…c5 4…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qee46ee0ed\">5.c3</a>"
       ],
       [
        "1…Cf6 2…e6 3…c5 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qafa5f8847\">5.c3</a>"
       ],
       [
        "1…Cf6 2…e6 3…b6 4…Fb7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q108d61713\">5.c3</a>"
       ],
       [
        "1…Cf6 2…e6 3…b6 4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8a7b338ca\">5.Cc3</a>"
       ],
       [
        "1…Cf6 2…e6 3…b6 4…Fe7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q78806fc72\">5.Fd3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Contre 1…e6"
     },
     {
      "t": "table",
      "entetes": [
       "Les noirs jouent",
       "Ta ligne"
      ],
      "lignes": [
       [
        "1…e6 2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q87498de50\">3.e3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa49a94c48\">5.Cf3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q896810dc2\">5.Cf3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1096dc836\">5.Cf3</a>"
       ],
       [
        "1…e6 2…c5 3…Cc6 4…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbf591f758\">5.c3</a>"
       ],
       [
        "1…e6 2…c5 3…Cc6 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q47914a892\">5.exd4</a>"
       ],
       [
        "1…e6 2…c5 3…Cc6 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd7baed792\">5.c3</a>"
       ],
       [
        "1…e6 2…c5 3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8cfc19009\">4.Cf3</a>"
       ],
       [
        "1…e6 2…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q97061c4d7\">3.e3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "L'arbre complet"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Trois réflexes couvrent presque tout.</strong> Ff4, e3, Cf3, c3 dans cet ordre. Ton fou f4 est ta meilleure pièce : garde-le (Fg3, h3). Et regarde b2 et c2 avant chaque coup."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "La philosophie",
    "blocs": [
     {
      "t": "h",
      "html": "Un système, pas une suite de coups"
     },
     {
      "t": "p",
      "html": "Le Londres se joue presque pareil contre tout : fou en f4, pions c3-d4-e3, cavaliers en f3 et d2, fou en d3, roque. Tu n'as pas à mémoriser des dizaines de lignes : tu construis la même position, et tu apprends les quelques cas où les noirs t'obligent à faire autrement."
     },
     {
      "t": "h",
      "html": "Pourquoi Ff4 avant e3"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "e3"
      ],
      "fleches": [],
      "legende": "Si tu joues e3 avant de sortir le fou, ton fou c1 est enfermé derrière ses propres pions : il ne voit plus que d2.",
      "marques": [
       "c1",
       "e3",
       "b2",
       "d2"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3"
      ],
      "fleches": [
       [
        "f1d3",
        "v"
       ]
      ],
      "legende": "Avec Ff4 d'abord, les deux fous sont libres : le fou f4 dehors, le fou f1 qui va en d3.",
      "marques": [
       "f4",
       "f1",
       "d3"
      ]
     },
     {
      "t": "h",
      "html": "La pyramide c3-d4-e3"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "fleches": [],
      "legende": "Les trois pions c3, d4 et e3 se tiennent : si les noirs prennent en d4, un pion reprend. Ton centre ne s'écroule jamais, et tu peux jouer sans calcul compliqué.",
      "marques": [
       "c3",
       "d4",
       "e3"
      ]
     },
     {
      "t": "h",
      "html": "Le plan : Cbd2, Fd3, 0-0, Ce5"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6"
      ],
      "coups": [
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5"
      ],
      "legendes": [
       "Le cavalier va en d2, pas en c3 : la case c3 est prise par ton pion.",
       "Les noirs proposent l'échange des fous.",
       "Comme toujours : Fg3.",
       "Les noirs roquent.",
       "Le fou d3 vise h7, la case faible du roque noir.",
       "Les noirs préparent …Fb7.",
       "Ce5 : le cavalier s'installe au centre. Seul …f6 pourrait le chasser, en affaiblissant le roque noir ; les noirs peuvent aussi l'échanger."
      ],
      "fin": "Ta position de rêve (Stockfish : +0,1, position saine). Ensuite : 0-0, puis f4 ou Df3 pour attaquer le roi, ou e4 pour ouvrir le centre.",
      "titre": "Le plan après le répertoire",
      "quiz": [
       "qc3707f8b1"
      ],
      "marques": [
       [
        "d2",
        "c3"
       ],
       [
        "d6",
        "f4!"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "e5",
        "f7",
        "c6",
        "d6"
       ],
       [
        "e5",
        "d3",
        "f2",
        "d1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Contre …Db6 : Db3"
     },
     {
      "t": "p",
      "html": "Dès que ton fou quitte c1, le pion b2 n'est plus défendu. La dame noire vient souvent en b6 pour l'attaquer. Réponds <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a> : tu défends b2 et tu proposes l'échange. Si les noirs poussent …c4, <a class=\"lien-var\" href=\"#\" data-var=\"q63e06c8f1\">7.Dc2</a>. Si c3 n'est pas encore joué, Db3 est impossible : <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Dc1</a>."
     },
     {
      "t": "h",
      "html": "Ton fou f4 est ta meilleure pièce"
     },
     {
      "t": "p",
      "html": "Les noirs essaient souvent de l'échanger : par …Fd6 ou par …Ch5. Garde-le : <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a> contre le fou, <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a> contre le cavalier. S'ils échangent quand même avec …Fxg3, <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a> t'ouvre la colonne h."
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Forces et faiblesses",
    "blocs": [
     {
      "t": "p",
      "html": "Aucune ouverture n'est parfaite. Connaître les points forts du Londres te dit quoi chercher au milieu de jeu ; connaître ses points faibles te dit quoi surveiller."
     },
     {
      "t": "h",
      "html": "Ce que le Londres te donne"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Un système.</strong> Presque quoi que fassent les noirs, tu construis la même position : fou en f4, pions c3-d4-e3, cavaliers en f3 et d2, fou en d3, roque. Tu connais ton plan avant le 10e coup.",
       "<strong>Peu de théorie.</strong> Une dizaine de règles (Fg3, h3, Fb5, Fd3, Db3…) couvrent tout ton répertoire. Tu gardes ton énergie, et ton temps à la pendule, pour le milieu de jeu.",
       "<strong>Un centre solide.</strong> La pyramide c3-d4-e3 tient toute seule : si les noirs prennent en d4, un pion reprend.",
       "<strong>Un roi en sécurité.</strong> Tu roques vite, derrière des pions qui n'ont pas bougé. Les attaques rapides contre ton roi sont rares.",
       "<strong>Des chances d'attaque.</strong> Le fou d3 vise h7, le cavalier vient en e5, la dame en f3 ou en h5. Entre 1000 et 1600, beaucoup de roques noirs ne résistent pas à ce trio : la suite de la leçon te montre comment."
      ]
     },
     {
      "t": "h",
      "html": "Ses points faibles"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Le pion b2.</strong> Ton fou c1 est parti en f4 : plus rien ne défend b2. C'est pour ça que …Db6 revient si souvent. Réponds <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a>, jamais <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Cbd2 ??</a>.",
       "<strong>La pression …c5 et …Db6.</strong> Les noirs attaquent d4 et b2 en même temps, souvent avec …Cc6 en plus. Tant que c3 et Db3 (ou Dc1 avant c3) sont en place, tout tient.",
       "<strong>Les noirs égalisent facilement.</strong> Après l'ouverture, Stockfish ne donne aux blancs qu'un petit avantage (+0,1 à +0,3). Le Londres ne gagne pas grâce à la théorie : il te donne une position saine, et c'est au milieu de jeu que la partie se décide.",
       "<strong>Ton fou f4 peut être échangé.</strong> Par …Fd6 ou par …Ch5. Ce n'est pas une catastrophe (<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a>, et <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a> t'ouvre même la colonne h), mais ta meilleure pièce disparaît.",
       "<strong>L'aile dame appartient aux noirs.</strong> Avec …c4 puis …b5, …a5 et …b4, les noirs gagnent de l'espace là où tu n'as pas de pièces. Si tu les suis là-bas, tu joues sur leur terrain : frappe plutôt au centre (voir l'échiquier ci-dessous)."
      ]
     },
     {
      "t": "h",
      "html": "Ce que cherchent les noirs"
     },
     {
      "t": "p",
      "html": "Face au Londres, les noirs ont quatre idées. Si tu les reconnais, tu sais quoi faire."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Frapper d4 et b2</strong> avec …c5, …Cc6 et …Db6. Ta réponse : la pyramide (c3) et <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a>.",
       "<strong>Échanger ton fou f4</strong> avec …Fd6 ou …Ch5. Ta réponse : <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a> contre le fianchetto, et reprendre avec le pion h si l'échange a lieu en g3.",
       "<strong>Gagner de l'espace à l'aile dame</strong> avec …c4, …b5, …a5 puis …b4. Ta réponse : ne pas les suivre là-bas, mais frapper au centre avec e4, ou frapper leur chaîne de pions avec b3 ou a4.",
       "<strong>Libérer leur jeu</strong> avec …Ce4 (pour échanger des pièces) ou, quand ils ont joué …g6 et …d6, avec la poussée …e5. Ta réponse : garder e4 et e5 sous contrôle, et ne pas mettre ton fou en d3 contre …e5-e4 (voir les erreurs plus bas)."
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3"
      ],
      "coups": [
       "c4",
       "Bc2",
       "b5",
       "O-O",
       "a5",
       "e4",
       "dxe4",
       "Nxe4",
       "Nxe4",
       "Bxe4"
      ],
      "legendes": [
       "…c4 : les noirs gagnent de l'espace à l'aile dame et chassent ton fou d3.",
       "Le fou recule en c2. Il reste sur la diagonale qui mène à h7.",
       "…b5 soutient le pion c4. Le plan noir : …a5 puis …b4, pour ouvrir des lignes contre c3.",
       "Roque : ton roi se met à l'abri avant que le centre s'ouvre.",
       "…a5 : les noirs continuent à l'aile dame.",
       "<span class=\"mv good\">11.e4</span> ! Ne suis pas les noirs à l'aile dame : frappe au centre, là où tes pièces sont prêtes. C'est le meilleur coup selon Stockfish (+0,6).",
       "Les noirs prennent.",
       "Ton cavalier reprend.",
       "Échange des cavaliers.",
       "Ton fou reprend et se place en e4 : il attaque le cavalier c6 (plus défendu depuis …b5) et vise h7."
      ],
      "fin": "Stockfish : +1,0. Le centre est ouvert et tes pièces y sont actives ; le pion c4 est loin de ses pièces et pourra devenir une cible. Retiens la règle : à une attaque sur une aile, on répond par une action au centre.",
      "titre": "Les noirs à l'aile dame, toi au centre",
      "quiz": [
       "q3dde29aa4"
      ],
      "marques": [
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "b5",
        "c4",
        "c3!"
       ],
       [
        "g1"
       ],
       [
        "a5"
       ],
       [
        "e4",
        "d5!"
       ],
       [
        "e4!"
       ],
       [
        "e4!"
       ],
       [
        "e4!",
        "f6"
       ],
       [
        "e4",
        "c6!",
        "h7!",
        "b5"
       ],
       [
        "c4!",
        "e4",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les erreurs typiques chez les joueurs de club"
     },
     {
      "t": "p",
      "html": "Elles reviennent sans cesse entre 1000 et 1600. Pour chacune, le premier lien montre l'erreur (le coup en rouge) ; le second, quand il y en a un, te fait jouer le bon coup en quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Oublier b2.</strong> C'est l'erreur numéro un du Londres : avant chaque coup, regarde où est la dame noire. <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Cbd2 ??</a> perd un pion tout de suite.",
       "<strong>Prendre en b7 trop vite.</strong> Quand le fou c8 noir est sorti, ta dame en b3 attaque b7, et c'est souvent un bon plan. Mais regarde d'abord ce que la tour noire peut faire sur la colonne b : <a class=\"lien-var\" href=\"#\" data-var=\"q2d16a28fb\">7.Dxb7 ?</a>. Le bon coup ici : <a class=\"lien-var\" href=\"#\" data-var=\"q5a8da8e87\">7.Fxd6</a>.",
       "<strong>La rupture e4 trop tôt.</strong> Avant de jouer e4, compte : le pion doit être défendu autant de fois qu'il est attaqué. Sans fou en d3, <a class=\"lien-var\" href=\"#\" data-var=\"qeeb4cb40b\">8.e4 ?</a> perd un pion. D'abord <a class=\"lien-var\" href=\"#\" data-var=\"qd1765d946\">8.Fd3</a>.",
       "<strong>Le sacrifice en h7 sans vérifier.</strong> Le sacrifice grec (Fxh7+ puis Cg5+) ne marche que si ton cavalier peut s'installer en g5. Ici, le fou e7 le prend : <a class=\"lien-var\" href=\"#\" data-var=\"qd1ecc41f4\">9.Fxh7+ ?</a>. Le bon coup était simplement 9.Te1 (Stockfish : +0,1).",
       "<strong>Le fou en d3 contre …d6 et …e5.</strong> Quand les noirs ont joué …g6 et …d6, la poussée …e5-e4 peut attaquer ton fou d3 et ton cavalier f3 en même temps : <a class=\"lien-var\" href=\"#\" data-var=\"q57a65a47e\">6.Fd3 puis 8.Fh2 ??</a>. Contre ce système, place ton fou en e2 : <a class=\"lien-var\" href=\"#\" data-var=\"qab6365049\">6.Fe2</a>."
      ],
      "num": true
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "Le milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire s'arrête à ton 5e coup. Ensuite, tu ne joues plus des coups appris par cœur : tu suis un plan. Voici les structures de pions du Londres, où placer tes pièces, et les plans qui gagnent des parties chez les joueurs de club."
     },
     {
      "t": "h",
      "html": "Les structures de pions"
     },
     {
      "t": "p",
      "html": "La « structure », c'est la forme des pions des deux camps. Elle décide des bonnes cases pour tes pièces, et des « ruptures » possibles : les poussées de pion qui ouvrent le jeu."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "d3h7",
        "v"
       ],
       [
        "e3e4",
        "v"
       ]
      ],
      "legende": "<strong>La pyramide c3-d4-e3.</strong> Ton pion d4 tient la case e5 : c'est ta « case forte », une case au centre que les pions noirs ont du mal à attaquer (seul …f6 pourrait chasser ta pièce, en affaiblissant le roque noir). Les flèches : le cavalier vers e5, le fou d3 qui vise h7, et la rupture e4.",
      "marques": [
       "c3",
       "d4",
       "e3",
       "e5"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "e6",
       "Bf4",
       "c5",
       "e3",
       "cxd4",
       "exd4",
       "d5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Nc6",
       "c3",
       "Bd6",
       "Bg3"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "d3h7",
        "v"
       ]
      ],
      "legende": "<strong>Après …cxd4 exd4.</strong> Ton pion e3 est parti en d4 (<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>) : la colonne e s'ouvre pour une tour (0-0 puis Te1), et e5 reste tenu par le pion d4. Les noirs, eux, ont la colonne c. Ton plan ne change pas : 0-0, Te1, Ce5.",
      "marques": [
       "d4",
       "e5",
       "f3"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3"
      ],
      "fleches": [
       [
        "h1h7",
        "v"
       ],
       [
        "d3h7",
        "v"
       ],
       [
        "g3g4",
        "v"
       ]
      ],
      "legende": "<strong>Après …Fxg3 hxg3.</strong> Tu as perdu ton fou de Londres, mais ta tour h1 regarde h7 sans bouger : avec le fou d3, h7 est déjà attaqué deux fois. Ne roque pas trop vite côté roi : tant que ta tour est en h1, le roi noir ne peut même pas prendre en h7 (il s'y mettrait en échec). Le pion g3 peut aussi avancer (g4-g5) pour chasser le cavalier f6.",
      "marques": [
       "h1",
       "d3",
       "h7!",
       "g3"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "g6",
       "e3",
       "Bg7",
       "Nf3",
       "O-O",
       "h3",
       "d6",
       "Be2",
       "Nbd7",
       "O-O"
      ],
      "fleches": [
       [
        "e7e5",
        "g"
       ],
       [
        "c2c3",
        "v"
       ]
      ],
      "legende": "<strong>Contre le fianchetto.</strong> Le fou g7 frappe la grande diagonale et les noirs préparent …e5 (flèche grise). Ton dispositif : h3 (retraite en h2 pour le fou), Fe2 plutôt que Fd3, c3 pour fermer la diagonale du fou g7, puis Cbd2. Quand …e5 arrive, regarde toujours ce que donnerait …e4 : avec le fou en e2, rien n'est fourché.",
      "marques": [
       "g7",
       "e2",
       "h3",
       "f4"
      ]
     },
     {
      "t": "h",
      "html": "Où placer tes pièces"
     },
     {
      "t": "table",
      "entetes": [
       "Pièce",
       "Case",
       "Pourquoi"
      ],
      "lignes": [
       [
        "Fou c1",
        "f4, puis g3 (ou h2)",
        "Il sort avant e3. Fg3 contre …Fd6 ; h2 contre …Ch5 quand tu as joué h3."
       ],
       [
        "Fou f1",
        "d3 (e2 contre …g6 et …d6 ; c2 après …c4)",
        "En d3 ou en c2, il vise h7, le point faible du roque noir."
       ],
       [
        "Cavalier g1",
        "f3, puis e5",
        "En e5, sur ta case forte, il attaque f7, d7 et c6 et soutient l'attaque."
       ],
       [
        "Cavalier b1",
        "d2",
        "c3 est pris par ton pion. De d2, il soutient e4, et il peut aller en f3 quand l'autre cavalier est en e5."
       ],
       [
        "Dame",
        "c2, e2 ou f3 (b3 contre …Db6)",
        "En c2, elle vise h7 derrière le fou. En f3 ou h5, elle rejoint l'attaque. En b3, elle défend b2."
       ],
       [
        "Tours",
        "e1, f1 ou h1",
        "Une tour va là où une colonne s'ouvre : e1 avec la rupture e4, f1 avec f4, h1 après hxg3."
       ],
       [
        "Roi",
        "g1 (0-0)",
        "À l'abri derrière f2-g2-h2. Après hxg3, ne te presse pas : la tour h1 est plus utile sur sa colonne (tu peux aussi faire le grand roque)."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 1 : Ce5, f4 et l'attaque sur le roque"
     },
     {
      "t": "p",
      "html": "Après Cbd2, Fd3 et Ce5, tu peux soutenir ton cavalier avec f4. Tes pions d4-e3-f4 forment alors un mur, comme dans l'ouverture qu'on appelle « Stonewall » (« mur de pierre » en anglais) : le cavalier e5 est solidement soutenu (seul …f6 peut encore le chasser), et si les noirs l'échangent, tu reprends avec le pion f, qui ouvre la colonne f pour ta tour."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5",
       "Bb7",
       "f4",
       "Rc8"
      ],
      "fleches": [
       [
        "g3h4",
        "v"
       ],
       [
        "d1h5",
        "v"
       ]
      ],
      "legende": "Le mur d4-e3-f4 soutient le cavalier e5. La suite : Fh4, qui sort le fou de derrière le pion f4 et cloue le cavalier f6 (il ne peut plus bouger sans laisser prendre la dame d8), puis Fxf6 pour éliminer le défenseur de h7, et la dame en h5. La partie modèle 1 montre ce plan jusqu'au mat.",
      "marques": [
       "d4",
       "e3",
       "f4",
       "e5"
      ]
     },
     {
      "t": "h",
      "html": "Plan 2 : le sacrifice grec, Fxh7+"
     },
     {
      "t": "p",
      "html": "Le « sacrifice grec » est le plus célèbre des sacrifices : ton fou se donne en h7 avec échec, ton cavalier saute en g5 avec échec, et ta dame arrive en h5. Le roi noir se retrouve seul face à trois pièces."
     },
     {
      "t": "p",
      "html": "Il ne marche que si tout est réuni. Vérifie ces quatre conditions avant de jouer Fxh7+ suivi de Cg5+ :"
     },
     {
      "t": "liste",
      "items": [
       "Ton fou vise h7 (en d3, c2 ou e4) et le cavalier f6 n'est plus là pour défendre h7 (chassé par un pion en e5, ou échangé).",
       "Ton cavalier peut aller en g5 sans être pris gratuitement : pas de fou noir en e7, et si la dame noire garde g5, ton cavalier doit y être protégé (fou en f4, pion en h4).",
       "Ta dame peut venir en h5 en un coup.",
       "Les noirs n'ont pas de défense rapide : pas de cavalier qui revient en f6, pas de fou qui vient en f5."
      ],
      "num": true
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "Qc7",
       "O-O",
       "Bxg3",
       "hxg3"
      ],
      "coups": [
       "c4",
       "Bc2",
       "b5",
       "e4",
       "b4",
       "e5",
       "Nd7",
       "Bxh7+",
       "Kxh7",
       "Ng5+",
       "Kg8",
       "Qh5"
      ],
      "legendes": [
       "…c4 chasse ton fou d3.",
       "Le fou recule en c2 : il garde la diagonale de h7.",
       "Les noirs avancent à l'aile dame.",
       "<span class=\"mv\">12.e4</span> : la rupture centrale. Si le pion arrive en e5, il chassera le cavalier f6, le seul défenseur de h7.",
       "Les noirs continuent à l'aile dame…",
       "<span class=\"mv good\">13.e5</span> ! Le cavalier f6 doit partir.",
       "Il recule en d7. h7 n'a plus que le roi pour le défendre : les conditions sont réunies (ta dame passera par h5 dès que le cavalier aura sauté en g5).",
       "<span class=\"mv good\">14.Fxh7+</span> ! Le sacrifice grec.",
       "Le roi prend.",
       "<span class=\"mv good\">15.Cg5+</span> : échec. Le cavalier est tranquille en g5 : la dame noire est en c7 et aucun fou noir ne garde g5.",
       "Le roi recule en g8, le coup le plus naturel.",
       "<span class=\"mv good\">16.Dh5</span> : la menace est Dh7 mat, et le pion e5 interdit …Cf6."
      ],
      "fin": "Il n'y a plus de défense : sur …Td8, Dxf7+ et la dame chasse le roi jusqu'au mat (Stockfish annonce un mat forcé). La meilleure défense était 15…Rg6, mais là aussi l'attaque continue (Stockfish : +2,0).",
      "titre": "Le sacrifice grec",
      "quiz": [
       "q28e19ed56"
      ],
      "marques": [
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "b5"
       ],
       [
        "e4",
        "e5",
        "f6!",
        "h7"
       ],
       [
        "b4"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "h7!",
        "f3",
        "d1"
       ],
       [
        "h7!",
        "g8!"
       ],
       [
        "h7!"
       ],
       [
        "g5",
        "h7!",
        "c7"
       ],
       [
        "g8"
       ],
       [
        "h5",
        "h7!",
        "e5",
        "g5"
       ],
       [
        "h5",
        "g5",
        "f7!",
        "g8"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 3 : la colonne h après …Fxg3 hxg3"
     },
     {
      "t": "p",
      "html": "Quand les noirs échangent ton fou par …Fxg3, la colonne h est à toi. Le défenseur de h7, c'est le cavalier f6 : si tu l'élimines, ta tour h1 prend en h7."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3",
       "b6"
      ],
      "coups": [
       "Ne5",
       "Qc7",
       "Ng4",
       "Re8",
       "Nxf6+",
       "gxf6",
       "Rxh7"
      ],
      "legendes": [
       "<span class=\"mv good\">10.Ce5</span> ! Le cavalier attaque c6, que plus rien ne défend depuis …b6.",
       "La dame défend c6.",
       "<span class=\"mv good\">11.Cg4</span> ! Le cavalier va échanger le défenseur de h7.",
       "Les noirs libèrent f8 pour leur roi.",
       "Cxf6+ : le défenseur disparaît.",
       "Les noirs reprennent avec le pion g : leur roi est à découvert.",
       "<span class=\"mv good\">13.Txh7</span> : la tour entre en jeu sans avoir eu besoin de bouger avant."
      ],
      "fin": "Stockfish : +5,9. Ta dame va arriver en h5 et le roi noir n'a plus de pions pour l'abriter. Si les noirs roquent alors que ton fou est déjà en d3, Fxh7+ peut même marcher tout de suite : c'est l'exercice 6.",
      "titre": "La colonne h",
      "quiz": [
       "q15bbe301b"
      ],
      "marques": [
       [
        "e5",
        "c6!",
        "b6"
       ],
       [
        "c7",
        "c6!",
        "e5"
       ],
       [
        "g4",
        "f6!",
        "h7"
       ],
       [
        "e8",
        "f8",
        "g8"
       ],
       [
        "f6!",
        "h7"
       ],
       [
        "f6!",
        "g8!"
       ],
       [
        "h1",
        "h7!"
       ],
       [
        "d1",
        "h5",
        "h7",
        "g8!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 4 : la rupture e4"
     },
     {
      "t": "p",
      "html": "e4 est la poussée centrale du Londres. Elle ouvre le jeu pour tes pièces et, si le pion arrive ensuite en e5, il chasse le cavalier f6. Souvent, il attaque même deux pièces à la fois. Quand la jouer ?"
     },
     {
      "t": "liste",
      "items": [
       "Tes pièces sont développées : Cbd2, Fd3 (ou Fc2), 0-0. Une dame en e2 ou c2, ou une tour en e1, aide encore.",
       "e4 est défendu au moins autant de fois qu'il est attaqué (compte le pion d5 et le cavalier f6 noirs).",
       "Le meilleur moment : quand les noirs ont fermé l'aile dame avec …c4. Ils n'ont plus de pion c pour frapper ton centre."
      ],
      "num": true
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "c4",
       "Bc2",
       "b5",
       "e4"
      ],
      "fleches": [
       [
        "e4e5",
        "v"
       ],
       [
        "e5d6",
        "r"
       ],
       [
        "e5f6",
        "r"
       ]
      ],
      "legende": "Après e4, la menace est e5 : le pion attaquerait à la fois le fou d6 et le cavalier f6. Les noirs doivent réagir tout de suite, par …dxe4 ou …Cxe4. S'ils l'oublient, c'est l'exercice 5.",
      "marques": [
       "e4",
       "e5!",
       "d6!",
       "f6!"
      ]
     },
     {
      "t": "h",
      "html": "Plan 5 : l'aile dame, contre …c4 et …b5"
     },
     {
      "t": "p",
      "html": "Quand les noirs poussent …c4, ton fou ne peut plus aller en d3 et les noirs prennent de l'espace. Deux réponses : la rupture e4 au centre, ou frapper leur chaîne de pions par en dessous : b3 attaque c4, a4 attaque b5."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2"
      ],
      "coups": [
       "c4",
       "Be2",
       "b5",
       "O-O",
       "a5",
       "b3",
       "a4",
       "Ne5"
      ],
      "legendes": [
       "…c4 : les noirs ferment l'aile dame et gagnent de l'espace. Ton fou f1 ne pourra pas aller en d3.",
       "Le fou se développe en e2.",
       "…b5 soutient le pion c4.",
       "Roque.",
       "…a5 prépare …b4 contre ton pion c3.",
       "<span class=\"mv good\">9.b3</span> ! Tu frappes la chaîne de pions par en dessous : b3 attaque c4. Si …cxb3, axb3 et ta tour a1 gagne la colonne a.",
       "Les noirs poussent encore.",
       "<span class=\"mv good\">10.Ce5</span> : pendant que les noirs avancent leurs pions, toi, tu places tes pièces. La suite : e4 au centre."
      ],
      "fin": "Stockfish : +0,6. Les pions noirs sont avancés, mais presque rien ne les soutient, et ta structure reste solide. Contre …b5 sans …c4, le levier est a4 : il attaque b5 avant que le pion arrive en b4.",
      "titre": "Contre …c4 : b3",
      "quiz": [
       "q2059e461c"
      ],
      "marques": [
       [
        "c4",
        "f1",
        "d3"
       ],
       [
        "e2"
       ],
       [
        "b5",
        "c4"
       ],
       [
        "g1"
       ],
       [
        "a5",
        "b5",
        "c3!"
       ],
       [
        "b3",
        "c4!",
        "a1"
       ],
       [
        "a4"
       ],
       [
        "e5",
        "e3"
       ],
       [
        "a4",
        "b5",
        "c4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les ruptures de pions"
     },
     {
      "t": "table",
      "entetes": [
       "Rupture",
       "Quand la jouer",
       "Ce qu'elle donne"
      ],
      "lignes": [
       [
        "e3-e4",
        "Pièces développées, e4 assez défendu ; idéal après …c4",
        "Ouvre le centre ; e4-e5 chasse le Cf6 et peut fourcher Fd6 et Cf6"
       ],
       [
        "f2-f4",
        "Après Ce5, quand les noirs ont roqué",
        "Soutient le cavalier e5 ; la colonne f s'ouvre si les noirs l'échangent"
       ],
       [
        "h2-h4-h5",
        "Quand tu attaques le roque noir et que ton roi n'est pas roqué de ce côté",
        "Le pion h attaque le roque ; ta tour h1 suit derrière"
       ],
       [
        "g3-g4-g5",
        "Après …Fxg3 hxg3",
        "Chasse le cavalier f6, le défenseur de h7"
       ],
       [
        "b2-b3",
        "Contre …c4",
        "Attaque la pointe c4 et ouvre des lignes à l'aile dame"
       ],
       [
        "a2-a4",
        "Contre …b5",
        "Attaque b5 avant qu'il avance en b4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Le plan en une phrase :</strong> Cbd2, Fd3, 0-0, Ce5 ; puis f4 et l'attaque sur le roque, ou e4 si les noirs ferment l'aile dame. Avant le sacrifice grec (Fxh7+ puis Cg5+), vérifie les quatre conditions."
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "Les pièges",
    "blocs": [
     {
      "t": "p",
      "html": "Deux sortes de pièges : ceux que tu tends, où les noirs perdent du matériel s'ils jouent le coup naturel, et ceux qu'on te tend, à connaître pour ne pas tomber dedans. Tous ont été vérifiés avec Stockfish. Le quiz de chaque piège te demande le bon coup : la punition quand l'adversaire se trompe, la parade quand c'est toi qui es visé."
     },
     {
      "t": "h",
      "html": "Ceux que tu tends"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "c5",
       "e3"
      ],
      "coups": [
       "Qb6",
       "Nc3",
       "Qxb2",
       "Nxd5",
       "Qa3",
       "Nc7+",
       "Kd8",
       "Nxa8"
      ],
      "legendes": [
       "La dame attaque b2.",
       "<span class=\"mv good\">4.Cc3</span> ! Tu laisses b2. Le cavalier vise d5.",
       "<span class=\"mv bad\">4…Dxb2</span> ?? Le pion est empoisonné.",
       "<span class=\"mv good\">5.Cxd5</span> ! Le cavalier prend un pion et menace Cc7+, échec au roi et attaque de la tour a8.",
       "La dame se replie en a3, mais elle ne défend pas c7.",
       "Échec : le roi doit bouger.",
       "Le roi s'écarte.",
       "Tu prends la tour."
      ],
      "fin": "Tu as gagné une tour (Stockfish : +4,4). Ce piège ne marche que si le pion noir est en d5 : contre 1…Cf6, …Dxb2 se joue sans danger.",
      "titre": "2…c5 3.e3 Db6 4.Cc3 : b2 empoisonné",
      "couleurs": [
       "g",
       "v",
       "r",
       "v",
       "g",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q6f1b22494"
      ],
      "marques": [
       [
        "b6",
        "b2!"
       ],
       [
        "c3",
        "b2!",
        "d5!"
       ],
       [
        "b2!"
       ],
       [
        "d5",
        "c7!",
        "e8",
        "a8!"
       ],
       [
        "a3",
        "c7!",
        "d5"
       ],
       [
        "c7",
        "e8!"
       ],
       [
        "d8"
       ],
       [
        "a8!"
       ],
       [
        "a8",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3",
       "Nf6",
       "Nf3",
       "Bf5",
       "Bb5"
      ],
      "coups": [
       "e6",
       "Ne5",
       "Bd6",
       "Nxc6",
       "bxc6",
       "Bxc6+"
      ],
      "legendes": [
       "Les noirs ouvrent leur fou f8.",
       "<span class=\"mv good\">6.Ce5</span> : le cavalier c6, cloué, est attaqué deux fois et défendu une fois.",
       "<span class=\"mv bad\">6…Fd6</span> ? Les noirs développent sans s'occuper de c6.",
       "<span class=\"mv good\">7.Cxc6</span> : tu prends le cavalier, qui ne pouvait pas bouger.",
       "<span class=\"mv bad\">7…bxc6</span> ? Les noirs reprennent…",
       "<span class=\"mv good\">8.Fxc6+</span> : échec, et le fou attaque la tour a8."
      ],
      "fin": "Tu gagnes la qualité (Stockfish : +2,9). Après 7.Cxc6, le mieux pour les noirs est 7…Dd7, et tu as quand même gagné au moins un pion (+1,2).",
      "titre": "5.Fb5 e6 6.Ce5 : le cavalier cloué",
      "couleurs": [
       "g",
       "v",
       "r",
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "q04273db10"
      ],
      "marques": [
       [
        "f8"
       ],
       [
        "e5",
        "b5",
        "c6!",
        "b7"
       ],
       [
        "d6",
        "c6!"
       ],
       [
        "c6!",
        "b5"
       ],
       [
        "c6!"
       ],
       [
        "c6",
        "e8!",
        "a8!"
       ],
       [
        "c6",
        "a8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "g6",
       "e3",
       "d6",
       "Nf3"
      ],
      "coups": [
       "Bg4",
       "h3",
       "Bh5",
       "g4"
      ],
      "legendes": [
       "Le fou cloue ton cavalier f3.",
       "<span class=\"mv good\">5.h3</span> pose la question au fou.",
       "<span class=\"mv bad\">5…Fh5</span> ?? Le fou garde le clouage…",
       "<span class=\"mv good\">6.g4</span> ! Le fou est attaqué, et sa case de retraite g6 est occupée par un pion noir."
      ],
      "fin": "Stockfish : +2,5. Pour sauver le fou, les noirs doivent jouer 6…g5 et lâcher un pion, avec un roque abîmé. Les bonnes réponses noires à 5.h3 : 5…Fxf3, ou reculer le fou en d7 ou c8.",
      "titre": "4…Fg4 5.h3 Fh5 ?? 6.g4",
      "couleurs": [
       "g",
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "q0d3cc30b4"
      ],
      "marques": [
       [
        "g4",
        "f3!",
        "d1"
       ],
       [
        "h3",
        "g4!"
       ],
       [
        "h5",
        "f3!",
        "d1"
       ],
       [
        "g4",
        "h5!",
        "g6"
       ],
       [
        "h5!",
        "g4",
        "g6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Ceux qu'on te tend"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3",
       "Bf5",
       "Nf3"
      ],
      "coups": [
       "Nb4",
       "c3",
       "Nc2+",
       "Kd2",
       "Nxa1"
      ],
      "legendes": [
       "Le cavalier vise c2, avec l'aide du fou f5.",
       "<span class=\"mv bad\">5.c3</span> ?? attaque le cavalier, mais trop tard.",
       "Échec au roi, et la tour a1 est attaquée.",
       "Le roi doit bouger : Dxc2 Fxc2 perdrait la dame.",
       "Les noirs gagnent la tour."
      ],
      "fin": "Stockfish : −3,1. La parade : <a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Fd3</a>, qui coupe la diagonale du fou f5.",
      "titre": "4…Cb4 : c2 attaqué deux fois",
      "couleurs": [
       "g",
       "r",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q740e545ff"
      ],
      "marques": [
       [
        "b4",
        "c2!",
        "f5"
       ],
       [
        "c3",
        "b4!"
       ],
       [
        "c2",
        "e1!",
        "a1!"
       ],
       [
        "e1!",
        "c2",
        "f5",
        "d1"
       ],
       [
        "a1!"
       ],
       [
        "f1",
        "d3",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "coups": [
       "Qb6",
       "Nbd2",
       "Qxb2"
      ],
      "legendes": [
       "La dame attaque b2.",
       "<span class=\"mv bad\">6.Cbd2</span> ?? Le coup naturel, mais b2 reste en l'air.",
       "Les noirs prennent le pion. Stockfish : −0,9."
      ],
      "fin": "La parade : <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a> tout de suite. Quand ta dame est en b3, b2 est défendu.",
      "titre": "5…Db6 : b2 en l'air",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q8efee52ab"
      ],
      "marques": [
       [
        "b6",
        "b2!"
       ],
       [
        "d2",
        "b2!",
        "b6"
       ],
       [
        "b2!"
       ],
       [
        "d1",
        "b3",
        "b2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4"
      ],
      "coups": [
       "Qb4+",
       "Bd2",
       "Qxb2",
       "Nc3"
      ],
      "legendes": [
       "Échec : la dame attaque aussi b2.",
       "Le fou s'interpose.",
       "La dame prend b2 et menace la tour a1.",
       "<span class=\"mv good\">6.Cc3</span> : le cavalier quitte b1, ta dame d1 défend la tour a1."
      ],
      "fin": "Stockfish : +2,0. Les noirs ont joué trois coups de dame et tu es très en avance. Surtout pas <a class=\"lien-var\" href=\"#\" data-var=\"qd9d8d2010\">6.Fc3 ??</a>.",
      "titre": "Le gambit Englund : 1…e5",
      "quiz": [
       "q1d83288e9"
      ],
      "marques": [
       [
        "b4",
        "e1!",
        "b2!"
       ],
       [
        "d2"
       ],
       [
        "b2!",
        "a1!"
       ],
       [
        "c3",
        "d1",
        "a1"
       ],
       [
        "b2",
        "c3",
        "f3",
        "d2"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "Les exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "La règle du Londres : Ff4, e3, Cf3, c3. Voici les positions de ton répertoire où les noirs t'obligent à faire autre chose."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "La règle dirait",
       "Joue plutôt",
       "Pourquoi"
      ],
      "lignes": [
       [
        "…Fd6 contre ton fou",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a>",
        "Garde ton fou"
       ],
       [
        "…Fxg3",
        "fxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>",
        "Colonne h ouverte, e3 reste soutenu"
       ],
       [
        "…g6 et …Fg7",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>",
        "Retraite en h2 contre …Ch5"
       ],
       [
        "…Cc6 et …Ff5",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Fb5</a>",
        "Clouage, +0,7"
       ],
       [
        "…Cb4",
        "c3 ??",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Fd3</a>",
        "c3 perd la tour"
       ],
       [
        "…cxd4 avant c3",
        "Cf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>",
        "Sinon …dxe3"
       ],
       [
        "…Fb4+",
        "Cbd2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3d1bcbb33\">c3</a>",
        "Gagne du temps"
       ],
       [
        "…Ch5 (sans h3)",
        "h3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ccef8522\">Fg5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q6ae32d977\">Fe5</a>",
        "Le fou doit bouger tout de suite"
       ],
       [
        "…b6 puis …c5",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q146a7ca31\">Cc3</a>",
        "Cb5 contre c7"
       ],
       [
        "…Db6 avant c3",
        "Db3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Dc1</a>",
        "Db3 n'est pas possible"
       ]
      ]
     },
     {
      "t": "h",
      "html": "La plus importante : …Db6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "coups": [
       "Qb6",
       "Qb3",
       "c4",
       "Qc2"
      ],
      "legendes": [
       "La dame attaque b2, que ton fou c1 ne défend plus.",
       "<span class=\"mv good\">6.Db3</span> : tu défends b2 et tu proposes l'échange. Si …Dxb3, axb3 et ta tour a1 gagne la colonne a.",
       "Les noirs refusent : le pion chasse ta dame.",
       "<span class=\"mv good\">7.Dc2</span> : la dame recule. De c2, elle défend toujours b2 et vise e4 et h7."
      ],
      "fin": "Stockfish : +0,5. Tu continues par Cbd2, Fe2 ou e4. Avant c3, Db3 est impossible : <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Dc1</a>.",
      "titre": "5…Db6 6.Db3",
      "quiz": [
       "q88a9da934",
       "q9fa452574"
      ],
      "marques": [
       [
        "b6",
        "b2!",
        "f4"
       ],
       [
        "b3",
        "b2",
        "b6",
        "a1"
       ],
       [
        "c4",
        "b3!"
       ],
       [
        "c2",
        "b2",
        "e4",
        "h7!"
       ],
       [
        "b1",
        "f1",
        "e3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "e6",
       "e3",
       "b6",
       "Nf3"
      ],
      "coups": [
       "c5",
       "Nc3",
       "Bb7",
       "Nb5"
      ],
      "legendes": [
       "Les noirs attaquent d4.",
       "<span class=\"mv good\">5.Cc3</span> plutôt que c3 : le cavalier veut aller en b5.",
       "Le fou sort en b7.",
       "<span class=\"mv good\">6.Cb5</span> : avec ton fou f4, le cavalier vise c7 et d6."
      ],
      "fin": "Stockfish : +0,8. Les noirs doivent défendre c7 (…Ca6), et ta pression dure.",
      "titre": "3…b6 4.Cf3 c5 5.Cc3",
      "quiz": [
       "q6dc2f04c8"
      ],
      "marques": [
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "b5"
       ],
       [
        "b7"
       ],
       [
        "b5",
        "f4",
        "c7!",
        "d6"
       ],
       [
        "b5",
        "f4",
        "c7!",
        "b8"
       ]
      ]
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Exercices de milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Huit positions tirées des plans du Londres. C'est toujours aux blancs de jouer : trouve le coup, le bouton Quiz te le demande. Chaque position vient d'une partie plausible de ton répertoire, et chaque bonne réponse est le meilleur coup de Stockfish, nettement devant tous les autres."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nc7+",
       "Kf8"
      ],
      "legendes": [
       "Cc7+ ! Avec ton fou f4 derrière lui, le cavalier entre en c7 : échec au roi et attaque de la tour a8. Si …Dxc7, Fxc7 gagne la dame.",
       "Le roi doit bouger : il perd aussi le droit de roquer."
      ],
      "fin": "Au coup suivant, Cxa8 : tu gagnes la qualité (une tour contre un cavalier). Stockfish : +2,5, contre +1,1 pour le meilleur autre coup. L'erreur noire était 6…Fe7 : il fallait défendre c7 par …Ca6.",
      "titre": "Exercice 1 : le cavalier en b5",
      "fen": "rn1qk2r/pb1pbppp/1p2pn2/1Np5/3P1B2/4PN2/PPP2PPP/R2QKB1R w KQkq - 4 7",
      "quiz": [
       "qe9130484e"
      ],
      "marques": [
       [
        "c7",
        "f4",
        "a8!",
        "e8!"
       ],
       [
        "e8!",
        "f8",
        "c7"
       ],
       [
        "c7",
        "a8!",
        "e7",
        "b8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxd6",
       "Nxd4"
      ],
      "legendes": [
       "Fxd6 ! La règle dit « Fg3 contre …Fd6 », mais regarde qui défend d6 : personne. La dame b6 ne le voit pas, son propre cavalier c6 est sur le chemin.",
       "Les noirs sauvent ce qu'ils peuvent : le cavalier prend un pion en d4."
      ],
      "fin": "Reprends en d4 (exd4 ou cxd4). La dame noire reprendra en d6, mais tu restes avec une pièce contre un pion (Stockfish : +4,6, contre +1,9 pour le meilleur autre coup). Une règle a ses exceptions : avant de jouer Fg3, regarde si le fou d6 est défendu.",
      "titre": "Exercice 2 : le fou d6",
      "fen": "r1b1k2r/pp3ppp/1qnbpn2/3p4/2pP1B2/2P1PN2/PPQN1PPP/R3KB1R w KQkq - 4 9",
      "quiz": [
       "q011a642bf"
      ],
      "marques": [
       [
        "d6!",
        "f4",
        "b6",
        "c6"
       ],
       [
        "d4!",
        "d6"
       ],
       [
        "d4!",
        "e3",
        "c3",
        "d6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxb7",
       "Nxe5"
      ],
      "legendes": [
       "Dxb7 ! Le fou c8 noir est parti en f5 : plus personne ne défend b7. Ta dame prend le pion et attaque le cavalier c6.",
       "Les noirs échangent ton fou e5."
      ],
      "fin": "Reprends 11.dxe5 : tu as un pion de plus (Stockfish : +1,1, contre +0,2 pour le meilleur autre coup). Avant d'aller prendre en b7, vérifie toujours la colonne b (voir « Prendre en b7 trop vite ») : ici, la tour noire est encore en a8 et ne fait pas peur.",
      "titre": "Exercice 3 : la dame en b3",
      "fen": "r2q1rk1/ppp2p2/2nbpn1p/3pBbp1/3P4/1QP1PN2/PP1NBPPP/R3K2R w KQ - 4 10",
      "quiz": [
       "q22fbdb7e9"
      ],
      "marques": [
       [
        "b7!",
        "f5",
        "c6!"
       ],
       [
        "e5!",
        "c6"
       ],
       [
        "e5!",
        "d4",
        "b7",
        "a8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Ng6",
       "Qd8",
       "Nxf8",
       "Bxf8"
      ],
      "legendes": [
       "Cg6 ! Le cavalier quitte e5 : ton fou f4 attaque maintenant la dame c7 (une attaque « à la découverte »). Et le cavalier g6 attaque la tour f8. Si …hxg6, Fxc7 gagne la dame.",
       "La dame se sauve.",
       "Cxf8 : tu prends la tour.",
       "Le fou reprend."
      ],
      "fin": "Tu as gagné la qualité, une tour contre un cavalier (Stockfish : +3,0, contre +1,1 pour le meilleur autre coup). Une dame noire en c7, face à ton fou f4 avec seulement ton cavalier e5 entre les deux : pense toujours à faire bouger le cavalier avec une menace.",
      "titre": "Exercice 4 : le cavalier e5 et le fou f4",
      "fen": "rnb2rk1/p1q1bppp/1p2pn2/3pN3/3P1B2/2PB4/PP1N1PPP/R2QK2R w KQ - 1 10",
      "quiz": [
       "qf46328b3e"
      ],
      "marques": [
       [
        "g6",
        "f4",
        "c7!",
        "f8!"
       ],
       [
        "c7!",
        "d8"
       ],
       [
        "f8!"
       ],
       [
        "f8!"
       ],
       [
        "f4",
        "e5",
        "c7"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e5",
       "Bc7"
      ],
      "legendes": [
       "e5 ! Le pion attaque à la fois le fou d6 et le cavalier f6 : une fourchette de pion.",
       "Le fou se sauve en c7."
      ],
      "fin": "Le cavalier f6 est pris au coup suivant : 12.exf6 gagne une pièce (Stockfish : environ +4, contre +1,5 pour le meilleur autre coup). Après 10.e4, les noirs devaient prendre en e4 tout de suite.",
      "titre": "Exercice 5 : après la rupture e4",
      "fen": "r1bqr1k1/p4ppp/2nbpn2/1p1p4/2pPP3/2P2NB1/PPBN1PPP/R2QK2R w KQ - 1 11",
      "quiz": [
       "q5d5ad9e2a"
      ],
      "marques": [
       [
        "e5",
        "d6!",
        "f6!"
       ],
       [
        "c7"
       ],
       [
        "f6!",
        "e5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Nxh7",
       "Qh5",
       "f6"
      ],
      "legendes": [
       "Fxh7+ ! Le roi ne peut pas prendre : en h7, il serait en échec par ta tour h1.",
       "Le cavalier prend.",
       "Dh5 ! La dame attaque le cavalier h7, avec ta tour h1 derrière elle : il est attaqué deux fois et défendu une seule fois (par le roi). Menace : Dxh7+.",
       "Les noirs libèrent f7 pour leur roi."
      ],
      "fin": "10.Dxh7+ : tu as repris ta pièce avec un pion de plus, et le roi noir n'a plus d'abri (Stockfish : +2,8, contre +1,2 pour le meilleur autre coup au départ). Roquer face à une tour h1 et un fou d3, c'est dangereux.",
      "titre": "Exercice 6 : la colonne h",
      "fen": "rnbq1rk1/pp3ppp/4pn2/2pp4/3P4/3BP1P1/PPPN1PP1/R2QK1NR w KQ - 0 8",
      "quiz": [
       "q06143bd3a"
      ],
      "marques": [
       [
        "h7!",
        "h1",
        "g8!"
       ],
       [
        "h7!"
       ],
       [
        "h5",
        "h7!",
        "h1",
        "g8"
       ],
       [
        "f6",
        "f7",
        "g8"
       ],
       [
        "h5",
        "h7!",
        "h1",
        "g8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kxh7",
       "Qxh5+",
       "Kg8"
      ],
      "legendes": [
       "Fxh7+ ! Ton fou était attaqué par le pion c4 : au lieu de reculer, il se sacrifie en h7 avec échec.",
       "Le roi prend.",
       "Dxh5+ ! La route d1-h5 est libre depuis que ton cavalier est en e5 : ta dame reprend le cavalier h5 avec échec.",
       "Le roi recule."
      ],
      "fin": "Tu as récupéré ta pièce avec un pion de plus, et ta dame, ton cavalier e5 et ton fou g3 sont tous tournés vers le roi noir (Stockfish : +3,6 ; prendre tout de suite en h5 ne donne que +1,0).",
      "titre": "Exercice 7 : le fou d3 est attaqué",
      "fen": "r1bq1rk1/pp3ppp/2nbp3/3pN2n/2pP4/2PBP1B1/PP1N1PPP/R2QK2R w KQ - 0 10",
      "quiz": [
       "q2cc8ebce8"
      ],
      "marques": [
       [
        "d3!",
        "c4",
        "h7!"
       ],
       [
        "h7!"
       ],
       [
        "d1",
        "h5!",
        "e5",
        "h7!"
       ],
       [
        "g8"
       ],
       [
        "h5",
        "e5",
        "g3",
        "g8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kxh7",
       "Nxf7"
      ],
      "legendes": [
       "Fxh7+ ! Le roi est attiré en h7 : il ne défend plus f7, que ton cavalier e5 peut prendre. La tour noire, elle, a quitté f8.",
       "Le roi prend.",
       "Cxf7 ! Le cavalier prend un pion et attaque la dame d8 et le fou d6 en même temps : une fourchette."
      ],
      "fin": "La dame noire s'en va, puis Cxd6 : tu as repris ta pièce avec deux pions de plus, et le roi noir est à nu (Stockfish : +3,0). La meilleure défense était 11…Rf8, mais tu gardes alors un pion de plus (+1,5, contre +0,1 pour le meilleur autre coup que Fxh7+).",
      "titre": "Exercice 8 : dame en f3, cavalier en e5",
      "fen": "r2qr1k1/pb3ppp/1pnbpn2/2ppN3/3P4/2PBPQB1/PP1N1PPP/R3K2R w KQ - 4 11",
      "quiz": [
       "q993eb619a"
      ],
      "marques": [
       [
        "h7!",
        "e5",
        "f7!",
        "e8"
       ],
       [
        "h7!"
       ],
       [
        "f7!",
        "d8!",
        "d6!"
       ],
       [
        "f7",
        "d8!",
        "d6!",
        "h7"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Parties modèles",
    "blocs": [
     {
      "t": "p",
      "html": "Deux parties construites pour la leçon : les coups adverses sont des erreurs typiques entre 1000 et 1600, et chacun de tes coups a été vérifié avec Stockfish. Ce ne sont pas des parties réellement jouées : elles montrent, du premier au dernier coup, comment ton répertoire mène aux plans du milieu de jeu."
     },
     {
      "t": "h",
      "html": "Partie 1 : le mur et l'attaque sur le roque"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5",
       "Bb7",
       "f4",
       "Rc8",
       "Bh4",
       "c4",
       "Bc2",
       "Be7",
       "Bxf6",
       "Bxf6",
       "h4",
       "b5",
       "Qh5",
       "h6",
       "Ng4",
       "Be7",
       "Rh3",
       "f5",
       "Nxh6+",
       "gxh6",
       "Qg6+",
       "Kh8",
       "Qxh6+",
       "Kg8",
       "Rg3+",
       "Bg5",
       "Qg6+",
       "Kh8",
       "hxg5",
       "Rf7",
       "Rh3+",
       "Rh7",
       "Qxh7#"
      ],
      "legendes": [
       "1.d4 : ton premier coup.",
       "Les noirs prennent le centre.",
       "Le fou sort avant e3 : c'est le Londres.",
       "Les noirs développent.",
       "e3 soutient d4 et ouvre la diagonale du fou f1.",
       "Le fou c8 noir reste enfermé derrière e6.",
       "Le cavalier sort et contrôle e5.",
       "Les noirs attaquent d4.",
       "La pyramide c3-d4-e3.",
       "Deuxième attaque sur d4.",
       "Le cavalier va en d2 : la case c3 est occupée par ton pion.",
       "Le fou attaque ton fou f4.",
       "Comme toujours : Fg3.",
       "Les noirs roquent.",
       "Le fou vise h7.",
       "Les noirs préparent …Fb7.",
       "Le cavalier s'installe sur sa case forte.",
       "Le fou sort en b7.",
       "<span class=\"mv good\">10.f4</span> : le mur d4-e3-f4. Ton cavalier e5 est solidement installé, l'attaque sur le roque peut commencer.",
       "La tour vient sur la colonne c.",
       "Le fou sort de derrière le pion f4 et cloue le cavalier f6 contre la dame d8.",
       "<span class=\"mv bad\">11…c4</span> ?! Les noirs ferment l'aile dame et vont jouer là-bas, loin de leur roi (Stockfish : +1,1).",
       "Le fou recule en c2 : il vise toujours h7.",
       "Les noirs défont le clouage.",
       "<span class=\"mv good\">13.Fxf6</span> ! Tu échanges ton fou contre le cavalier f6, le meilleur défenseur du roque noir.",
       "Les noirs reprennent.",
       "Le pion h avance. Ton roi est resté au centre : ce pion ne le protège pas, il peut attaquer. Et ta tour h1 pourra sortir par h3.",
       "Les noirs continuent leur plan à l'aile dame.",
       "La dame arrive en h5. Menace : Dxh7 mat, avec l'aide du fou c2.",
       "<span class=\"mv bad\">15…h6</span> ? Le pion bloque la menace, mais il devient une cible (Stockfish : +2,8). Il fallait …g6.",
       "<span class=\"mv good\">16.Cg4</span> ! Le cavalier attaque le fou f6 et la case h6.",
       "<span class=\"mv bad\">16…Fe7</span> ?? Le fou se sauve, mais il abandonne la défense du roi (Stockfish : +6,0).",
       "<span class=\"mv good\">17.Th3</span> ! Le pion h4 a libéré la route : la tour sort par h3 et va rejoindre l'attaque.",
       "Les noirs attaquent ton cavalier g4.",
       "<span class=\"mv good\">18.Cxh6+</span> ! Le cavalier se sacrifie pour ouvrir le roi. Stockfish annonce un mat forcé.",
       "Les noirs prennent.",
       "Échec : la dame entre en g6.",
       "Le roi va dans le coin.",
       "La dame prend h6 avec échec.",
       "Retour en g8.",
       "La tour arrive en g3, avec échec.",
       "Le fou s'interpose.",
       "Échec à nouveau.",
       "Seule case.",
       "Le pion h prend le fou : la colonne h s'ouvre pour ta tour.",
       "La tour noire vient défendre la septième rangée.",
       "La tour revient sur la colonne h : échec.",
       "La tour s'interpose.",
       "Échec et mat : la dame prend la tour, protégée par ta tour h3."
      ],
      "fin": "Mat au 25e coup. Retiens le chemin : Ce5 et f4 (le mur), Fh4 puis Fxf6 pour éliminer le défenseur, le pion h4 qui ouvre la route à la tour, la dame en h5 et le sacrifice en h6. Pendant ce temps, les noirs jouaient à l'aile dame.",
      "titre": "Partie modèle 1 : le mur et l'attaque",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "f4",
        "e2"
       ],
       [],
       [
        "e3",
        "d4",
        "f1"
       ],
       [
        "e6",
        "c8"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "d2",
        "c3"
       ],
       [
        "d6",
        "f4!"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "e5",
        "d4"
       ],
       [
        "b7"
       ],
       [
        "d4",
        "e3",
        "f4",
        "e5"
       ],
       [
        "c8"
       ],
       [
        "h4",
        "f6!",
        "d8",
        "f4"
       ],
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "e7",
        "f6",
        "h4"
       ],
       [
        "f6!",
        "h4"
       ],
       [
        "f6!"
       ],
       [
        "h4",
        "e1",
        "h1",
        "h3"
       ],
       [
        "b5"
       ],
       [
        "h5",
        "h7!",
        "c2"
       ],
       [
        "h6!",
        "h5",
        "g7"
       ],
       [
        "g4",
        "f6!",
        "h6!"
       ],
       [
        "e7",
        "g8!"
       ],
       [
        "h3",
        "h4"
       ],
       [
        "f5",
        "g4!"
       ],
       [
        "h6!",
        "g8!"
       ],
       [
        "h6!"
       ],
       [
        "g6",
        "g8!"
       ],
       [
        "h8"
       ],
       [
        "h6!",
        "h8!"
       ],
       [
        "g8"
       ],
       [
        "g3",
        "g8!"
       ],
       [
        "g5",
        "g3"
       ],
       [
        "g6",
        "g8!"
       ],
       [
        "h8"
       ],
       [
        "g5!",
        "g3"
       ],
       [
        "f7"
       ],
       [
        "h3",
        "h8!"
       ],
       [
        "h7"
       ],
       [
        "h7!",
        "h3",
        "h8!"
       ],
       [
        "h7",
        "h3",
        "h8!",
        "f4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Partie 2 : la colonne h après …Fxg3"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3",
       "h6",
       "Ne5",
       "Nd7",
       "Qh5",
       "f5",
       "Ndf3",
       "Ndxe5",
       "dxe5",
       "Qe7",
       "Qg6",
       "Re8",
       "Rxh6",
       "Rf8",
       "O-O-O",
       "Qe8",
       "Qh7+",
       "Kf7",
       "Bxf5",
       "Ke7",
       "Bg6",
       "Kd8",
       "Bxe8",
       "gxh6",
       "Bh5",
       "Bd7",
       "e4",
       "Kc8",
       "exd5",
       "exd5",
       "Rxd5",
       "Rd8",
       "Qxh6",
       "a6",
       "e6",
       "Bxe6",
       "Qxe6+"
      ],
      "legendes": [
       "1.d4 : ton premier coup.",
       "Les noirs prennent le centre.",
       "Le fou sort avant e3.",
       "Les noirs ouvrent leur fou f8.",
       "e3 soutient d4.",
       "Le fou attaque ton fou f4.",
       "Fg3 : tu gardes ton fou.",
       "Les noirs l'échangent quand même.",
       "<span class=\"mv good\">5.hxg3</span> : reprends avec le pion h. La colonne h s'ouvre pour ta tour h1.",
       "Les noirs développent.",
       "Le cavalier sort en d2 ; l'autre ira en f3.",
       "Les noirs attaquent d4.",
       "La pyramide.",
       "Le cavalier rejoint la pression sur d4.",
       "Le deuxième cavalier sort.",
       "Les noirs roquent… face à ta tour h1.",
       "Le fou vise h7 : avec la tour h1, h7 est déjà attaqué deux fois.",
       "Les noirs voient le danger et poussent leur pion h. Mais le pion h6 sera la nouvelle cible de ta tour.",
       "Le cavalier s'installe sur sa case forte.",
       "Les noirs veulent échanger ce cavalier.",
       "La dame arrive en h5 : avec la tour h1, elle attaque h6 ; avec le cavalier e5, elle vise f7.",
       "…f5 coupe la diagonale de ton fou d3 vers h7. Mais les cases e6 et g6 deviennent faibles.",
       "L'autre cavalier vient soutenir e5.",
       "Les noirs échangent.",
       "Reprends avec le pion : il interdit la case f6 aux pièces noires.",
       "<span class=\"mv bad\">13…De7</span> ? La dame ne surveille pas la case g6. Mieux valait …Dc7 ou …De8 (Stockfish : +1,7 après …De7, contre +0,2 à +0,6).",
       "<span class=\"mv good\">14.Dg6</span> ! La dame s'installe en g6 : elle cloue le pion g7 contre le roi (il ne peut plus bouger) et vise h6 et e6.",
       "<span class=\"mv bad\">14…Te8</span> ?? La tour libère f8 pour le roi… et oublie h6 (Stockfish : +7,0).",
       "<span class=\"mv good\">15.Txh6</span> ! La tour prend h6, et elle est imprenable : le pion g7 est cloué par ta dame.",
       "La tour revient en f8 pour défendre son roi.",
       "Le grand roque : ton roi se met à l'abri et ta deuxième tour arrive sur la colonne d.",
       "Les noirs proposent l'échange des dames.",
       "Pas d'échange : échec.",
       "Seule case.",
       "Le fou prend le pion f5.",
       "Le roi fuit vers le centre.",
       "Le fou attaque la dame e8.",
       "Le roi s'écarte encore.",
       "Tu gagnes la dame.",
       "Les noirs prennent enfin la tour : le pion g7 n'est plus cloué.",
       "Le fou recule. Tu as une dame contre une tour : la partie est gagnée.",
       "Les noirs développent enfin leur fou.",
       "La rupture e4 ouvre le centre pour ta tour.",
       "Le roi cherche un abri.",
       "Tu prends.",
       "Les noirs reprennent.",
       "La tour prend le pion d5.",
       "La tour vient sur la colonne d.",
       "La dame prend le pion h6.",
       "Les noirs n'ont plus de bon coup.",
       "Le pion avance et attaque le fou d7.",
       "Le fou prend le pion.",
       "La dame reprend avec échec."
      ],
      "fin": "Les noirs abandonnent : tu as une dame et une pièce de plus contre une tour (Stockfish : +9). Tout est parti de 5.hxg3 : la colonne h ouverte, la dame en g6 qui cloue le pion g7, et la tour qui prend en h6.",
      "titre": "Partie modèle 2 : la colonne h",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "f4",
        "e2"
       ],
       [
        "f8"
       ],
       [
        "e3",
        "d4"
       ],
       [
        "d6",
        "f4!"
       ],
       [
        "g3"
       ],
       [
        "g3!"
       ],
       [
        "g3!",
        "h2",
        "h1"
       ],
       [
        "f6"
       ],
       [
        "d2",
        "g1"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3"
       ],
       [
        "g8",
        "h1"
       ],
       [
        "d3",
        "h1",
        "h7!"
       ],
       [
        "h6!",
        "h1"
       ],
       [
        "e5",
        "d4"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "h5",
        "h1",
        "h6!",
        "f7!"
       ],
       [
        "f5",
        "d3",
        "e6",
        "g6"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "e5!",
        "d7"
       ],
       [
        "e5",
        "f6"
       ],
       [
        "e7",
        "g6!",
        "h5"
       ],
       [
        "g6",
        "g7!",
        "h6!",
        "e6!"
       ],
       [
        "e8",
        "f8",
        "h6!"
       ],
       [
        "h6!",
        "g7!",
        "g6"
       ],
       [
        "f8",
        "g8"
       ],
       [
        "c1",
        "d1"
       ],
       [
        "e8",
        "g6!"
       ],
       [
        "h7",
        "g8!"
       ],
       [
        "f7"
       ],
       [
        "f5!"
       ],
       [
        "e7"
       ],
       [
        "g6",
        "e8!"
       ],
       [
        "d8"
       ],
       [
        "e8!"
       ],
       [
        "h6!",
        "g7"
       ],
       [
        "h5",
        "h7"
       ],
       [
        "d7"
       ],
       [
        "e4",
        "d5!",
        "d1"
       ],
       [
        "c8"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d8"
       ],
       [
        "h6!"
       ],
       [
        "a6"
       ],
       [
        "e6",
        "d7!"
       ],
       [
        "e6!"
       ],
       [
        "e6!",
        "c8!"
       ],
       [
        "e6",
        "c8!",
        "g3"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "Il joue n'importe quoi",
    "blocs": [
     {
      "t": "p",
      "html": "Entre 1000 et 1600, beaucoup d'adversaires sortent de la théorie très tôt. Ton répertoire couvre les trois réponses les plus jouées à chaque coup ; pour le reste, le Londres a un avantage énorme : ta construction marche presque toujours. Clique sur un plan pour le voir sur l'échiquier."
     },
     {
      "t": "h",
      "html": "Quatre principes"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Ff4, e3, Cf3, c3 marche contre presque tout.</strong> Seules vraies exceptions : 1…c5 (avance d5), 1…e5 (prends le pion) et 1…d6 (2.Cf3 d'abord).",
       "<strong>Regarde b2 et c2 avant chaque coup.</strong> Ton fou parti, b2 n'a plus de défenseur. Un cavalier noir en b4 vise c2.",
       "<strong>Garde ton fou f4.</strong> Fg3 contre …Fd6, h3 contre le fianchetto.",
       "<strong>Développe avant d'attaquer.</strong> Cbd2, Fd3, 0-0, puis Ce5."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "Les autres premiers coups"
     },
     {
      "t": "table",
      "entetes": [
       "1.d4 …",
       "Ton plan",
       "Stockfish au bout de la ligne"
      ],
      "lignes": [
       [
        "1…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfb2f9d58b\">2.d5</a>",
        "+1,3"
       ],
       [
        "1…e5 (gambit Englund)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q950711fb1\">2.dxe5</a>",
        "+1,4"
       ],
       [
        "1…f5 (hollandaise)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5954cf962\">2.Ff4</a>",
        "+0,5"
       ],
       [
        "1…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf940f8435\">2.Cf3</a>",
        "+0,3"
       ],
       [
        "1…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qed17f690b\">2.Ff4</a> (2.e4 est plus fort : +0,7)",
        "+0,1"
       ],
       [
        "1…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q87abc3fb7\">2.Ff4</a>",
        "+0,5"
       ],
       [
        "1…Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q125d77b1f\">2.Ff4</a>",
        "+0,4"
       ],
       [
        "1…b6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q680fd6f28\">2.Ff4</a> (2.e4 est plus fort : +0,9)",
        "+0,2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les autres deuxièmes coups"
     },
     {
      "t": "table",
      "entetes": [
       "Après",
       "Les noirs jouent",
       "Ton plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "1.d4 d5 2.Ff4",
        "2…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q672730985\">3.e3</a>",
        "0,0"
       ],
       [
        "",
        "2…Ff5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q20e455291\">3.e3</a>",
        "+0,1"
       ],
       [
        "",
        "2…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q15e091780\">3.e3</a>",
        "+0,3"
       ],
       [
        "",
        "2…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa745f549f\">3.e3</a>",
        "+0,3"
       ],
       [
        "",
        "2…e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6a66a1d17\">3.Fxe5</a>",
        "+1,0"
       ],
       [
        "1.d4 Cf6 2.Ff4",
        "2…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q12bcb6075\">3.e3</a>",
        "+0,1"
       ],
       [
        "",
        "2…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfd8b7fc98\">3.e3</a>",
        "+0,1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Après le répertoire"
     },
     {
      "t": "p",
      "html": "Ton répertoire s'arrête à ton 5e coup. Ensuite, finis ta construction : Cbd2, Fd3 (ou Fe2), 0-0. Puis cherche Ce5 et, selon la position, Df3 et f4 pour attaquer le roi, ou e4 pour ouvrir le centre. Si tu ne sais pas quoi jouer, demande-toi : quelle est ma pièce la moins active ? Améliore-la."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "À retenir",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1.d4 et 2.Ff4 contre <a class=\"lien-var\" href=\"#\" data-var=\"q2606a729d\">1…d5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6c4c6653d\">1…Cf6</a> et <a class=\"lien-var\" href=\"#\" data-var=\"q65502247c\">1…e6</a>. Exceptions : <a class=\"lien-var\" href=\"#\" data-var=\"qfb2f9d58b\">1…c5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q950711fb1\">1…e5</a>, et contre <a class=\"lien-var\" href=\"#\" data-var=\"qf940f8435\">1…d6</a> 2.Cf3 d'abord.",
       "Puis e3, Cf3, c3 : la pyramide (<a class=\"lien-var\" href=\"#\" data-var=\"q11a0c31eb\">5.c3</a>).",
       "Contre …Fd6 : <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Fg3</a>. Si …Fxg3 : <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>.",
       "Contre le fianchetto : <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>.",
       "Contre …Cc6 et …Ff5 : <a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Fb5</a>, puis Ce5.",
       "Contre …Cb4 : <a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Fd3</a>, jamais c3 ou Cbd2.",
       "Contre …Db6 : <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Db3</a> (ou <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Dc1</a> avant c3).",
       "Contre …cxd4 : <a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a> tout de suite.",
       "Le plan après le 5e coup : Cbd2, Fd3, 0-0, Ce5."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "q2606a729d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "Bf4"
    ],
    "legendes": [
     "Les noirs prennent le centre.",
     "Le fou sort tout de suite, avant e3 : c'est le Londres."
    ],
    "fin": "",
    "titre": "1…d5 2.Ff4",
    "marques": [
     [
      "d5"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "q6c4c6653d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Même coup : le fou sort avant e3."
    ],
    "fin": "",
    "titre": "1…Cf6 2.Ff4",
    "marques": [
     [
      "f6"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "q65502247c": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Encore 2.Ff4. Sur …d5 ou …Cf6, tu retrouves les autres lignes."
    ],
    "fin": "",
    "titre": "1…e6 2.Ff4",
    "marques": [
     [
      "f8"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "qde268baff": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nf6",
     "e3"
    ],
    "legendes": [
     "Les noirs développent.",
     "e3 soutient d4 et ouvre la diagonale de ton fou f1. Ton fou f4 est déjà dehors."
    ],
    "fin": "",
    "titre": "2…Cf6 3.e3",
    "marques": [
     [],
     [
      "e3",
      "d4",
      "f1",
      "f4"
     ],
     []
    ]
   },
   "qbbf48a2e9": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Le cavalier sort et contrôle e5."
    ],
    "fin": "",
    "titre": "3…e6 4.Cf3",
    "marques": [
     [
      "f8"
     ],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q11a0c31eb": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "c3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "c3 : la pyramide c3-d4-e3. Si les noirs prennent en d4, tu reprends avec un pion."
    ],
    "fin": "",
    "titre": "4…c5 5.c3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qceec2bda3": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "Le fou d6 attaque ton fou f4.",
     "Fg3 : tu gardes ton fou. S'il est pris, tu reprendras avec le pion h."
    ],
    "fin": "",
    "titre": "4…Fd6 5.Fg3",
    "marques": [
     [
      "d6",
      "f4!"
     ],
     [
      "g3",
      "h2"
     ],
     []
    ]
   },
   "q963e69235": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Les noirs échangent les fous.",
     "Reprends avec le pion h : la colonne h s'ouvre pour ta tour h1."
    ],
    "fin": "",
    "titre": "4…Fxg3 5.hxg3",
    "marques": [
     [
      "g3!"
     ],
     [
      "g3",
      "h1"
     ],
     []
    ]
   },
   "q8729a82ac": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "coups": [
     "O-O",
     "h3"
    ],
    "legendes": [
     "Les noirs roquent derrière leur fou g7.",
     "h3 : si le cavalier vient en h5 pour chasser ton fou, il aura une retraite en h2."
    ],
    "fin": "",
    "titre": "4…0-0 5.h3",
    "marques": [
     [
      "g7",
      "g8"
     ],
     [
      "f6",
      "h5",
      "f4",
      "h2"
     ],
     []
    ]
   },
   "q2c6b4f0a5": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "Le fou c8 sort à son tour.",
     "Fb5 cloue le cavalier c6 contre le roi : il ne peut plus bouger."
    ],
    "fin": "",
    "titre": "4…Ff5 5.Fb5",
    "marques": [
     [
      "f5"
     ],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q740e545ff": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "Le cavalier menace …Cxc2+, échec au roi et attaque de la tour a1.",
     "Fd3 coupe la diagonale du fou f5 : c2 n'est plus attaqué qu'une fois, et ta dame le défend."
    ],
    "fin": "",
    "titre": "4…Cb4 5.Fd3",
    "marques": [
     [
      "b4",
      "c2!",
      "e1!",
      "a1!"
     ],
     [
      "d3",
      "f5",
      "c2!",
      "d1"
     ],
     []
    ]
   },
   "qd882e8cb0": {
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Les noirs prennent en d4.",
     "Reprends tout de suite avec le pion e : ton pion reste au centre."
    ],
    "fin": "",
    "titre": "3…cxd4 4.exd4",
    "marques": [
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q3d1bcbb33": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "Échec.",
     "c3 pare l'échec et attaque le fou : il doit reculer."
    ],
    "fin": "",
    "titre": "4…Fb4+ 5.c3",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "c3",
      "b4!"
     ],
     []
    ]
   },
   "q5ccef8522": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Sans h3, ton fou n'a pas de case en h2 : il se met à l'abri en g5."
    ],
    "fin": "",
    "titre": "4…Ch5 5.Fg5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "g5",
      "h2"
     ],
     []
    ]
   },
   "q6ae32d977": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Fe5 ! Le fou se met à l'abri et attaque la tour h8 : le fou noir n'est pas encore en g7."
    ],
    "fin": "",
    "titre": "4…Ch5 5.Fe5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "e5",
      "h8!",
      "g7",
      "f8"
     ],
     []
    ]
   },
   "q146a7ca31": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Cc3, puis Cb5 : avec ton fou f4, le cavalier visera c7."
    ],
    "fin": "",
    "titre": "4…c5 5.Cc3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "b5",
      "f4",
      "c7!"
     ],
     []
    ]
   },
   "q0c016b191": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f3 contre ta dame.",
     "h3 pose la question au fou. S'il recule en h5, g4 le met en grand danger : sa retraite g6 est bouchée par un pion noir."
    ],
    "fin": "",
    "titre": "4…Fg4 5.h3",
    "marques": [
     [
      "g4",
      "f3!",
      "d1"
     ],
     [
      "h3",
      "g4!",
      "h5",
      "g6"
     ],
     []
    ]
   },
   "q1e3436fde": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "c3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f3.",
     "Pas de panique : c3, la pyramide. Le clouage ne te gêne pas."
    ],
    "fin": "",
    "titre": "4…Fg4 5.c3",
    "marques": [
     [
      "g4",
      "f3!",
      "d1"
     ],
     [
      "c3",
      "d4",
      "e3",
      "f3"
     ],
     []
    ]
   },
   "q8efee52ab": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "Qxb3",
     "axb3"
    ],
    "legendes": [
     "La dame attaque b2 : ton fou c1 est parti en f4, plus rien ne défend ce pion.",
     "Db3 défend b2 et propose l'échange des dames.",
     "Les noirs échangent.",
     "Reprends avec le pion a : ta tour a1 gagne la colonne a."
    ],
    "fin": "",
    "titre": "5…Db6 6.Db3",
    "marques": [
     [
      "b6",
      "b2!",
      "f4"
     ],
     [
      "b3",
      "b2",
      "b6"
     ],
     [
      "b3!"
     ],
     [
      "b3",
      "a1"
     ],
     []
    ]
   },
   "q63e06c8f1": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Qb6",
     "Qb3"
    ],
    "coups": [
     "c4",
     "Qc2"
    ],
    "legendes": [
     "Le pion chasse ta dame.",
     "La dame recule en c2 : de là, elle défend toujours b2 et vise e4 et h7."
    ],
    "fin": "",
    "titre": "6…c4 7.Dc2",
    "marques": [
     [
      "c4",
      "b3!"
     ],
     [
      "c2",
      "b2",
      "e4",
      "h7!"
     ],
     []
    ]
   },
   "q4132ba7b4": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Nbd2",
     "Qxb2"
    ],
    "legendes": [
     "La dame attaque b2.",
     "Le coup naturel… mais b2 reste en l'air.",
     "Les noirs prennent le pion : la dame b2 attaque ta tour a1 et ton pion c3."
    ],
    "fin": "",
    "titre": "5…Db6 6.Cbd2 ?? Dxb2",
    "couleurs": [
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "b6",
      "b2!"
     ],
     [
      "d2",
      "b2!",
      "b6"
     ],
     [
      "b2",
      "a1!",
      "c3!"
     ],
     []
    ]
   },
   "q9fa452574": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c6",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Qc1"
    ],
    "legendes": [
     "La dame attaque b2 avant que tu aies joué c3 : Db3 n'est pas encore possible.",
     "Dc1 défend b2. Ta dame reviendra plus tard."
    ],
    "fin": "",
    "titre": "3…Db6 4.Dc1",
    "marques": [
     [
      "b6",
      "b2!",
      "d1",
      "c2"
     ],
     [
      "c1",
      "b2"
     ],
     []
    ]
   },
   "qc7a55708c": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Ce5 : le cavalier c6, cloué, est attaqué deux fois (fou b5, cavalier e5) et défendu une fois (pion b7)."
    ],
    "fin": "",
    "titre": "5…e6 6.Ce5",
    "marques": [
     [
      "f8"
     ],
     [
      "e5",
      "b5",
      "c6!",
      "b7"
     ],
     []
    ]
   },
   "q4d75699fc": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "c3",
     "Nc2+",
     "Kd2",
     "Nxa1"
    ],
    "legendes": [
     "Le cavalier vise c2.",
     "c3 attaque le cavalier… trop tard.",
     "Échec au roi, et la tour a1 est attaquée.",
     "Le roi doit bouger : Dxc2 Fxc2 perdrait la dame.",
     "Les noirs gagnent la tour."
    ],
    "fin": "",
    "titre": "4…Cb4 5.c3 ?? Cc2+",
    "couleurs": [
     "g",
     "r",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "b4",
      "c2!"
     ],
     [
      "c3",
      "b4!"
     ],
     [
      "c2",
      "e1!",
      "a1!"
     ],
     [
      "e1!",
      "c2",
      "f5",
      "d1"
     ],
     [
      "a1!"
     ],
     []
    ]
   },
   "qf810435f2": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "coups": [
     "Nh5",
     "Bh2"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Le fou recule en h2 : il reste sur la diagonale h2-b8, et le cavalier h5 n'a rien gagné."
    ],
    "fin": "",
    "titre": "5…Ch5 6.Fh2",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "h2",
      "h5"
     ],
     []
    ]
   },
   "q2c341557e": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "c3"
    ],
    "coups": [
     "Nh5",
     "Bg5",
     "h6",
     "Bh4",
     "g5",
     "Bg3",
     "Nxg3",
     "hxg3"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Pas de case en h2 : le fou part en g5.",
     "Le pion le chasse.",
     "Le fou recule.",
     "Et encore.",
     "Le fou recule en g3…",
     "…et le cavalier l'échange.",
     "Rien de grave (Stockfish : +0,2), mais ton fou de Londres a disparu."
    ],
    "fin": "",
    "titre": "Sans h3 : 5.c3 Ch5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "g5",
      "h2"
     ],
     [
      "h6",
      "g5!"
     ],
     [
      "h4"
     ],
     [
      "g5",
      "h4!"
     ],
     [
      "g3!",
      "h5"
     ],
     [
      "g3!"
     ],
     [
      "g3"
     ],
     []
    ]
   },
   "qe581c51d5": {
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "Nf3",
     "dxe3",
     "Bxe3"
    ],
    "legendes": [
     "Les noirs prennent en d4.",
     "Tu développes au lieu de reprendre…",
     "…et le pion d4 prend en e3.",
     "Tu reprends, mais tu as un pion de moins (Stockfish : −1,1)."
    ],
    "fin": "",
    "titre": "3…cxd4 4.Cf3 ?",
    "couleurs": [
     "g",
     "r",
     "g",
     "g"
    ],
    "marques": [
     [
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     [
      "e3!"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "qd2a5dbaee": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "fxg3"
    ],
    "legendes": [
     "Les noirs échangent les fous.",
     "Avec le pion f, ton pion e3 perd son soutien et ton roi est moins abrité (Stockfish : −0,5)."
    ],
    "fin": "",
    "titre": "4…Fxg3 5.fxg3 ?",
    "couleurs": [
     "g",
     "r"
    ],
    "marques": [
     [
      "g3!"
     ],
     [
      "g3",
      "e3!",
      "e1"
     ],
     []
    ]
   },
   "q918670779": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3"
    ],
    "coups": [
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Développe : le cavalier défend d4 une fois de plus.",
     "Les noirs échangent.",
     "Reprends avec le pion e : ton pion reste au centre."
    ],
    "fin": "",
    "titre": "2…e6 3.e3 c5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q2768c1506": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "coups": [
     "Bh5",
     "g4"
    ],
    "legendes": [
     "Le fou recule en h5.",
     "g4 attaque le fou, et sa retraite g6 est bouchée par un pion noir : pour le sauver, les noirs doivent lâcher un pion (…g5)."
    ],
    "fin": "",
    "titre": "5…Fh5 ?? 6.g4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "h5"
     ],
     [
      "g4",
      "h5!",
      "g6"
     ],
     []
    ]
   },
   "q0c120564b": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5",
     "e6",
     "Ne5",
     "Bd6",
     "Nxc6"
    ],
    "coups": [
     "bxc6",
     "Bxc6+"
    ],
    "legendes": [
     "Les noirs reprennent le cavalier.",
     "Échec, et le fou attaque aussi la tour a8."
    ],
    "fin": "",
    "titre": "7…bxc6 ? 8.Fxc6+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "c6!"
     ],
     [
      "c6",
      "e8!",
      "a8!"
     ],
     []
    ]
   },
   "qd2a8176b6": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "coups": [
     "Bb7",
     "Nb5"
    ],
    "legendes": [
     "Le fou sort en b7.",
     "Le cavalier arrive en b5 : avec ton fou f4, il vise c7 et d6."
    ],
    "fin": "",
    "titre": "5…Fb7 6.Cb5",
    "marques": [
     [
      "b7"
     ],
     [
      "b5",
      "f4",
      "c7!",
      "d6"
     ],
     []
    ]
   },
   "q280c70623": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "Le cavalier quitte b1 : ta dame d1 défend maintenant la tour a1, et ton développement est en avance."
    ],
    "fin": "",
    "titre": "Englund : 6.Cc3",
    "marques": [
     [
      "c3",
      "d1",
      "a1"
     ],
     []
    ]
   },
   "qd9d8d2010": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Bc3",
     "Bb4"
    ],
    "legendes": [
     "Le fou chasse la dame et défend la tour a1… en apparence.",
     "Le fou noir cloue ton fou c3 contre ton roi : la tour a1 tombe (Stockfish : −3,7)."
    ],
    "fin": "",
    "titre": "Englund : 6.Fc3 ?? Fb4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "c3",
      "b2!",
      "a1"
     ],
     [
      "b4",
      "c3!",
      "e1",
      "a1!"
     ],
     []
    ]
   },
   "qfb2f9d58b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5",
     "e5",
     "e4"
    ],
    "legendes": [
     "Les noirs attaquent d4 avec le pion c.",
     "Avance : ton pion coupe le camp noir en deux.",
     "Les noirs bloquent le centre.",
     "Prends l'espace : e4. Stockfish : +1,3."
    ],
    "fin": "",
    "titre": "1…c5 2.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "e4",
      "d5"
     ],
     []
    ]
   },
   "q950711fb1": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "legendes": [
     "Le gambit Englund : un pion offert.",
     "Prends-le.",
     "Le cavalier attaque e5.",
     "Défends e5 en développant.",
     "La dame attaque e5 une deuxième fois.",
     "Ton fou de Londres défend e5. Stockfish : +1,4."
    ],
    "fin": "",
    "titre": "1…e5 2.dxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     [
      "c6",
      "e5!"
     ],
     [
      "f3",
      "e5!"
     ],
     [
      "e7",
      "e5!",
      "c6"
     ],
     [
      "f4",
      "e5!"
     ],
     []
    ]
   },
   "q5954cf962": {
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "La hollandaise : le pion f contrôle e4.",
     "Ton système ne change pas : 2.Ff4.",
     "Les noirs développent.",
     "e3.",
     "Les noirs ouvrent leur fou f8.",
     "Cf3. Stockfish : +0,5."
    ],
    "fin": "",
    "titre": "1…f5 2.Ff4",
    "marques": [
     [
      "f5",
      "e4"
     ],
     [
      "f4"
     ],
     [],
     [],
     [
      "f8"
     ],
     [],
     []
    ]
   },
   "qf940f8435": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "Nf3",
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "Cf3 décourage …e5 : le cavalier contrôle la case.",
     "Les noirs développent.",
     "Et maintenant le fou sort. Stockfish : +0,3."
    ],
    "fin": "",
    "titre": "1…d6 2.Cf3",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "f4"
     ],
     []
    ]
   },
   "qed17f690b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "Bf4",
     "Bg7",
     "e3",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "Le fianchetto tout de suite.",
     "2.Ff4 : ton système. Stockfish préfère 2.e4 (+0,7), qui prend tout le centre, mais 2.Ff4 reste sain.",
     "Le fou g7 vise la grande diagonale.",
     "e3.",
     "Les noirs jouent …d6.",
     "Cf3. Ensuite h3, comme contre 1…Cf6 2.Ff4 g6. Stockfish : +0,1."
    ],
    "fin": "",
    "titre": "1…g6 2.Ff4",
    "marques": [
     [
      "g6",
      "f8"
     ],
     [
      "f4"
     ],
     [
      "g7",
      "d4!"
     ],
     [
      "e3"
     ],
     [
      "d6"
     ],
     [
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q87abc3fb7": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …d5.",
     "2.Ff4.",
     "On retrouve 1…d5 2.Ff4 c6.",
     "e3. Stockfish : +0,5."
    ],
    "fin": "",
    "titre": "1…c6 2.Ff4",
    "marques": [
     [
      "d7",
      "d5"
     ],
     [
      "f4"
     ],
     [
      "d5",
      "f4",
      "c6"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q125d77b1f": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Le cavalier sort tout de suite.",
     "2.Ff4.",
     "On retrouve 1…d5 2.Ff4 Cc6.",
     "e3. Stockfish : +0,4."
    ],
    "fin": "",
    "titre": "1…Cc6 2.Ff4",
    "marques": [
     [
      "c6"
     ],
     [
      "f4"
     ],
     [
      "d5",
      "f4",
      "c6"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q680fd6f28": {
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "Bf4",
     "Bb7",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …Fb7.",
     "2.Ff4 : ton système. Stockfish préfère 2.e4 (+0,9), qui prend tout le centre, mais 2.Ff4 reste sain.",
     "Le fou b7 vise e4.",
     "e3. Stockfish : +0,2."
    ],
    "fin": "",
    "titre": "1…b6 2.Ff4",
    "marques": [
     [
      "c8",
      "b7"
     ],
     [
      "f4"
     ],
     [
      "b7",
      "e4"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q672730985": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "Les noirs attaquent d4 tout de suite.",
     "e3 soutient d4.",
     "Deuxième attaquant sur d4.",
     "c3 : la pyramide. Égalité (Stockfish : 0,0)."
    ],
    "fin": "",
    "titre": "2…c5 3.e3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "e3",
      "d4!"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q20e455291": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Bf5",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs copient ton idée : leur fou sort avant …e6.",
     "e3.",
     "Les noirs ouvrent leur fou f8.",
     "Cf3. Stockfish : +0,1."
    ],
    "fin": "",
    "titre": "2…Ff5 3.e3",
    "marques": [
     [
      "f5",
      "f4",
      "e6"
     ],
     [
      "e3"
     ],
     [
      "e6",
      "f8"
     ],
     [
      "f3"
     ],
     []
    ]
   },
   "q15e091780": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs soutiennent d5 avec le pion c.",
     "e3.",
     "Le fou sort.",
     "Cf3. Stockfish : +0,3."
    ],
    "fin": "",
    "titre": "2…c6 3.e3",
    "marques": [
     [
      "c6",
      "d5"
     ],
     [
      "e3"
     ],
     [
      "f5"
     ],
     [
      "f3"
     ],
     []
    ]
   },
   "qa745f549f": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "legendes": [
     "Le fianchetto.",
     "e3.",
     "Le fou g7 vise d4.",
     "Cf3, puis h3. Stockfish : +0,3."
    ],
    "fin": "",
    "titre": "2…g6 3.e3",
    "marques": [
     [
      "g6",
      "f8"
     ],
     [
      "e3"
     ],
     [
      "g7",
      "d4!"
     ],
     [
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q6a66a1d17": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e5",
     "Bxe5"
    ],
    "legendes": [
     "Un pion offert.",
     "Ton fou le prend. Stockfish : +1,0."
    ],
    "fin": "",
    "titre": "2…e5 3.Fxe5",
    "marques": [
     [
      "e5!",
      "d4",
      "f4"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q12bcb6075": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "e3 soutient d4. Stockfish : +0,1."
    ],
    "fin": "",
    "titre": "1…Cf6 2.Ff4 c5 3.e3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "e3",
      "d4!"
     ],
     []
    ]
   },
   "qfd8b7fc98": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "d6",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "e3, puis Cf3 et h3. Stockfish : +0,1."
    ],
    "fin": "",
    "titre": "1…Cf6 2.Ff4 d6 3.e3",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [
      "e3",
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q02936d27c": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide. Le clouage du fou g4 ne te gêne pas."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 Fg4 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3",
      "g4"
     ],
     []
    ]
   },
   "q631a84079": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q784cc7745": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 Ff5 5.Fb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "qffadd6d88": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qfe8ec8644": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nf6",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 Cf6 5.Fb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q8696a14d7": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 coupe la diagonale f5-c2 : c2 n'est plus attaqué qu'une fois."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 Cb4 5.Fd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "c2!",
      "b4",
      "f5"
     ],
     []
    ]
   },
   "q353844a3f": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Cf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q5192318b4": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Fd6 5.Fg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     []
    ]
   },
   "qd2fb6049d": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 pare l'échec et attaque le fou : il doit reculer."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Fb4+ 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "b4!"
     ],
     []
    ]
   },
   "q45b3957fe": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 Fd6 5.Fg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     []
    ]
   },
   "q5ad15f606": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 c5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q56e7a248e": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 Fe7 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q89b060082": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Cc6 4.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q4cf5b36cb": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qd32058728": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "Nc6",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 Cc6 5.Fb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q3560444e9": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "h6",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 propose l'échange des fous et sort ton fou f1."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 h6 5.Fd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "f5!"
     ],
     []
    ]
   },
   "q02799299e": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "hxg3 : reprends avec le pion h, la colonne h s'ouvre pour ta tour."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Fxg3 5.hxg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "g3!",
      "h1"
     ],
     []
    ]
   },
   "q64f71fa89": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Cf6 5.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q4014ef669": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Cc6 5.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qab11a053b": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Cf6 4.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qa246f56c7": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 Cc6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qa628b50c8": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qb8c1d925d": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 Cf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q69efb6e43": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 0-0 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "qc87f7ad17": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d6",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 d6 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q63fd62a1d": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d5",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 d5 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q6371c765c": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Fg7 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "qf9bad8772": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 pose la question au fou g4 (s'il recule en h5, g4 le met en danger)."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Fg4 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "g4!",
      "h5"
     ],
     []
    ]
   },
   "q02bb48fec": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg5 : sans h3, le fou fuit le cavalier h5 par g5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Ch5 5.Fg5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g5",
      "h5"
     ],
     []
    ]
   },
   "qbb679dbc1": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Fg7 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q5b0ecc810": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fe5 : le fou fuit le cavalier h5 et attaque la tour h8."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Ch5 5.Fe5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "e5",
      "h8!",
      "h5"
     ],
     []
    ]
   },
   "q2582d3a7e": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide. Le clouage du fou g4 ne te gêne pas."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Fg4 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3",
      "g4"
     ],
     []
    ]
   },
   "qd53a2b9f6": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 d5 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "qc6ef374eb": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 d5 4.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qde9a63467": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qee46ee0ed": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 Cc6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qafa5f8847": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 d5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q108d61713": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Bb7",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 Fb7 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q8a7b338ca": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Cc3, puis Cb5 : avec ton fou f4, le cavalier visera c7."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 c5 5.Cc3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "b5",
      "f4",
      "c7!"
     ],
     []
    ]
   },
   "q78806fc72": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Be7",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 : développe, le fou vise h7."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 Fe7 5.Fd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "h7!"
     ],
     []
    ]
   },
   "q87498de50": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 d5 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "qa49a94c48": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 Cc6 5.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4!"
     ],
     []
    ]
   },
   "q896810dc2": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 d5 5.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4"
     ],
     []
    ]
   },
   "q1096dc836": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 Cf6 5.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4"
     ],
     []
    ]
   },
   "qbf591f758": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 Cf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q47914a892": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qd7baed792": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 d5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q8cfc19009": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 d5 4.Cf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q97061c4d7": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ],
    "fin": "",
    "titre": "Ligne 1.d4 e6 2.Ff4 Cf6 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "q2d16a28fb": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Qxb7",
     "Rb8",
     "Qxa7",
     "Bxf4",
     "exf4",
     "Rxb2"
    ],
    "legendes": [
     "Ta dame prend b7… et s'éloigne de ton roi.",
     "La tour noire chasse ta dame et vise b2.",
     "Ta dame prend encore un pion, mais elle est hors du jeu.",
     "Les noirs échangent ton fou f4…",
     "…tu reprends avec un pion, qui devient doublé.",
     "La tour prend b2 et s'installe sur ta deuxième rangée."
    ],
    "fin": "Tu as un pion de plus, mais ta dame est loin, tes pions f sont doublés, ton cavalier b1 et ton fou f1 n'ont pas bougé, et la tour b2 est très active : Stockfish donne l'avantage aux noirs (−0,9).",
    "titre": "7.Dxb7 ? Tb8",
    "couleurs": [
     "r",
     "g",
     "g",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "b7!",
      "e1"
     ],
     [
      "b8",
      "b7!",
      "b2!"
     ],
     [
      "a7!"
     ],
     [
      "f4!",
      "d6"
     ],
     [
      "f4!",
      "f2"
     ],
     [
      "b2!"
     ],
     [
      "a7",
      "b1",
      "f1",
      "b2"
     ]
    ]
   },
   "q5a8da8e87": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Bxd6",
     "cxd6"
    ],
    "legendes": [
     "Échange d'abord le fou d6, qui attaque ton fou f4 : tu choisis toi-même le moment de l'échange.",
     "Les noirs reprennent avec le pion c. Leur pion b7 reste faible, et ta position est saine (Stockfish : +0,2)."
    ],
    "fin": "",
    "titre": "7.Fxd6 : pas de gourmandise",
    "marques": [
     [
      "d6!",
      "f4"
     ],
     [
      "d6!",
      "b7!",
      "b3"
     ],
     []
    ]
   },
   "qeeb4cb40b": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "e4",
     "dxe4"
    ],
    "legendes": [
     "La rupture e4… mais e4 est attaqué deux fois (pion d5, cavalier f6) et défendu une seule fois (cavalier d2).",
     "Les noirs prennent : le pion e4 attaque maintenant ton cavalier f3."
    ],
    "fin": "Ton cavalier doit fuir et les noirs gardent le pion : Stockfish : −2,2.",
    "titre": "8.e4 ? dxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "d5",
      "f6",
      "d2"
     ],
     [
      "e4",
      "f3!"
     ],
     [
      "f3!",
      "e4"
     ]
    ]
   },
   "qd1765d946": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "Bd3"
    ],
    "legendes": [
     "D'abord Fd3 : le fou défend e4 à l'avance et vise h7 (Stockfish : +0,3). Ensuite 0-0, et e4 viendra quand il sera défendu assez de fois."
    ],
    "fin": "",
    "titre": "8.Fd3 : prépare e4",
    "marques": [
     [
      "d3",
      "e4",
      "h7!"
     ],
     []
    ]
   },
   "qd1ecc41f4": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3",
     "O-O",
     "Bd3",
     "c5",
     "Nbd2",
     "Nc6",
     "O-O",
     "Nh5"
    ],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Ng5+",
     "Bxg5",
     "Qxh5+",
     "Bh6"
    ],
    "legendes": [
     "Le cavalier f6 est parti en h5 : h7 n'a plus que le roi pour le défendre. Tentant…",
     "Le roi prend.",
     "Échec du cavalier…",
     "…mais le fou e7 surveillait g5 : il prend le cavalier.",
     "Ta dame reprend le cavalier h5 avec échec.",
     "Le fou recule en h6 et protège son roi."
    ],
    "fin": "Tu as donné un fou et un cavalier contre un pion et un cavalier : une pièce de moins (Stockfish : −2,6). Le sacrifice ne marche pas quand un fou noir garde g5.",
    "titre": "9.Fxh7+ ? Rxh7 10.Cg5+ Fxg5",
    "couleurs": [
     "r",
     "g",
     "g",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "h5",
      "h7!",
      "d3"
     ],
     [
      "h7!"
     ],
     [
      "g5",
      "h7!"
     ],
     [
      "e7",
      "g5!"
     ],
     [
      "h5!",
      "h7!"
     ],
     [
      "h6",
      "h7"
     ],
     [
      "h6",
      "g5"
     ]
    ]
   },
   "q57a65a47e": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Bd3",
     "Nbd7",
     "O-O",
     "e5",
     "Bh2",
     "e4"
    ],
    "legendes": [
     "Le fou se met en d3, sur la même rangée que le cavalier f3.",
     "Les noirs préparent …e5.",
     "Tu roques.",
     "…e5 attaque ton fou f4.",
     "Le fou recule en h2… et tu oublies la poussée suivante.",
     "…e4 : le pion attaque à la fois le fou d3 et le cavalier f3."
    ],
    "fin": "Une des deux pièces tombe (Stockfish : −3,1). Au 8e coup, il fallait prendre : 8.dxe5 dxe5 9.Cxe5, et la position reste équilibrée (+0,1).",
    "titre": "6.Fd3, 8.Fh2 ?? e4",
    "couleurs": [
     "g",
     "g",
     "g",
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "d3",
      "f3"
     ],
     [
      "d7",
      "e7"
     ],
     [
      "g1"
     ],
     [
      "e5",
      "f4!"
     ],
     [
      "h2",
      "e5"
     ],
     [
      "e4",
      "d3!",
      "f3!"
     ],
     [
      "e4",
      "d3!",
      "f3!"
     ]
    ]
   },
   "qab6365049": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Be2"
    ],
    "legendes": [
     "Contre …g6 et …d6, le fou va en e2 (Stockfish : +0,2, le meilleur coup) : si les noirs poussent …e5 puis …e4, il n'y a rien à fourcher en d3."
    ],
    "fin": "",
    "titre": "6.Fe2 contre le fianchetto",
    "marques": [
     [
      "e2",
      "d3",
      "g6",
      "d6"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "qfb0db9eb6",
    "titre": "La pyramide c3-d4-e3",
    "debut": [
     "d4",
     "d5"
    ],
    "coups": [
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "<span class=\"mv good\">2.Ff4</span> : ton coup signature. Le fou sort tout de suite, sur une belle diagonale.",
     "Les noirs développent.",
     "<span class=\"mv\">3.e3</span> soutient d4 et ouvre la diagonale de ton fou f1. Ton fou f4 est déjà dehors : c'est tout l'intérêt de l'ordre des coups.",
     "Les noirs ouvrent leur fou f8. Leur fou c8, lui, reste enfermé derrière e6.",
     "<span class=\"mv\">4.Cf3</span> : le cavalier sort et contrôle e5.",
     "Les noirs attaquent ta base, le pion d4.",
     "<span class=\"mv good\">5.c3</span> : la pyramide c3-d4-e3. Si les noirs prennent en d4, tu reprends avec un pion et ton centre reste debout."
    ]
   },
   {
    "id": "q8efee52ab",
    "titre": "5…Db6 6.Db3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "Qxb3",
     "axb3"
    ],
    "legendes": [
     "La dame attaque b2 : ton fou c1 est parti en f4, plus rien ne défend ce pion.",
     "Db3 défend b2 et propose l'échange des dames.",
     "Les noirs échangent.",
     "Reprends avec le pion a : ta tour a1 gagne la colonne a."
    ]
   },
   {
    "id": "qceec2bda3",
    "titre": "4…Fd6 5.Fg3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "Le fou d6 attaque ton fou f4.",
     "Fg3 : tu gardes ton fou. S'il est pris, tu reprendras avec le pion h."
    ]
   },
   {
    "id": "q2c87396fd",
    "titre": "3…Cf6 4.Cf3 Ff5 5.Fb5",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "La réponse la plus jouée entre 1000 et 1600 Elo. Le cavalier vise b4, puis c2.",
     "Toujours e3.",
     "Les noirs développent.",
     "Cf3.",
     "Le fou c8 sort à son tour.",
     "<span class=\"mv good\">5.Fb5</span> ! Le fou cloue le cavalier c6 contre le roi : il ne peut plus bouger. Ce5 viendra l'attaquer une deuxième fois."
    ]
   },
   {
    "id": "qc7a55708c",
    "titre": "5…e6 6.Ce5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Ce5 : le cavalier c6, cloué, est attaqué deux fois (fou b5, cavalier e5) et défendu une fois (pion b7)."
    ]
   },
   {
    "id": "q1e3436fde",
    "titre": "4…Fg4 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "c3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f3.",
     "Pas de panique : c3, la pyramide. Le clouage ne te gêne pas."
    ]
   },
   {
    "id": "q8e0bfffdf",
    "titre": "3…Ff5 4.Cf3 Cb4 : le piège sur c2",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3"
    ],
    "coups": [
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "Le fou sort tout de suite et vise c2.",
     "Développe.",
     "La menace : …Cxc2+, échec au roi et attaque de la tour a1. Le pion c2 est attaqué deux fois (cavalier b4, fou f5), défendu une fois (ta dame).",
     "<span class=\"mv good\">5.Fd3</span> coupe la diagonale du fou f5 : c2 n'est plus attaqué qu'une fois. Si le cavalier prend en d3, reprends cxd3."
    ]
   },
   {
    "id": "qd993f6a92",
    "titre": "3…Fd6 4.Fg3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "e3.",
     "Le fou d6 attaque ton fou f4 : les noirs veulent l'échanger.",
     "<span class=\"mv good\">4.Fg3</span> : tu gardes ton fou. S'il est pris, ce sera par un pion.",
     "Les noirs échangent quand même.",
     "<span class=\"mv good\">5.hxg3</span> : reprends avec le pion h. La colonne h s'ouvre pour ta tour h1, face au pion h7."
    ]
   },
   {
    "id": "q918670779",
    "titre": "2…e6 3.e3 c5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3"
    ],
    "coups": [
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Développe : le cavalier défend d4 une fois de plus.",
     "Les noirs échangent.",
     "Reprends avec le pion e : ton pion reste au centre."
    ]
   },
   {
    "id": "qcc586f7ec",
    "titre": "5.h3 : une case de retraite pour le fou",
    "debut": [
     "d4",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "Contre 1…Cf6 aussi : 2.Ff4.",
     "Les noirs préparent …Fg7 : le fianchetto.",
     "e3.",
     "Le fou g7 vise la grande diagonale.",
     "Développe.",
     "Les noirs roquent.",
     "<span class=\"mv good\">5.h3</span> ! Le cavalier f6 aimerait venir en h5 pour chasser ton fou. Avec h3, ton fou aura une retraite en h2."
    ]
   },
   {
    "id": "qf810435f2",
    "titre": "5…Ch5 6.Fh2",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "coups": [
     "Nh5",
     "Bh2"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Le fou recule en h2 : il reste sur la diagonale h2-b8, et le cavalier h5 n'a rien gagné."
    ]
   },
   {
    "id": "qadae236b8",
    "titre": "2…c5 3.e3 cxd4 4.exd4",
    "debut": [
     "d4",
     "e6"
    ],
    "coups": [
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Contre 1…e6 aussi, 2.Ff4. Sur …d5 ou …Cf6, tu retrouves les lignes précédentes.",
     "Les noirs attaquent d4 tout de suite.",
     "e3 soutient d4.",
     "Les noirs échangent.",
     "<span class=\"mv good\">4.exd4</span> : reprends tout de suite avec le pion e. Ton pion reste au centre.",
     "Le cavalier attaque d4.",
     "Cf3 défend d4."
    ]
   },
   {
    "id": "q2606a729d",
    "titre": "1…d5 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "Bf4"
    ],
    "legendes": [
     "Les noirs prennent le centre.",
     "Le fou sort tout de suite, avant e3 : c'est le Londres."
    ]
   },
   {
    "id": "q6c4c6653d",
    "titre": "1…Cf6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs sortent leur cavalier.",
     "Même coup : le fou sort avant e3."
    ]
   },
   {
    "id": "q65502247c",
    "titre": "1…e6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Encore 2.Ff4. Sur …d5 ou …Cf6, tu retrouves les autres lignes."
    ]
   },
   {
    "id": "qde268baff",
    "titre": "2…Cf6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nf6",
     "e3"
    ],
    "legendes": [
     "Les noirs développent.",
     "e3 soutient d4 et ouvre la diagonale de ton fou f1. Ton fou f4 est déjà dehors."
    ]
   },
   {
    "id": "qbbf48a2e9",
    "titre": "3…e6 4.Cf3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "Le cavalier sort et contrôle e5."
    ]
   },
   {
    "id": "q11a0c31eb",
    "titre": "4…c5 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "c3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "c3 : la pyramide c3-d4-e3. Si les noirs prennent en d4, tu reprends avec un pion."
    ]
   },
   {
    "id": "q963e69235",
    "titre": "4…Fxg3 5.hxg3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Les noirs échangent les fous.",
     "Reprends avec le pion h : la colonne h s'ouvre pour ta tour h1."
    ]
   },
   {
    "id": "q8729a82ac",
    "titre": "4…0-0 5.h3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "coups": [
     "O-O",
     "h3"
    ],
    "legendes": [
     "Les noirs roquent derrière leur fou g7.",
     "h3 : si le cavalier vient en h5 pour chasser ton fou, il aura une retraite en h2."
    ]
   },
   {
    "id": "q2c6b4f0a5",
    "titre": "4…Ff5 5.Fb5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "Le fou c8 sort à son tour.",
     "Fb5 cloue le cavalier c6 contre le roi : il ne peut plus bouger."
    ]
   },
   {
    "id": "q740e545ff",
    "titre": "4…Cb4 5.Fd3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "Le cavalier menace …Cxc2+, échec au roi et attaque de la tour a1.",
     "Fd3 coupe la diagonale du fou f5 : c2 n'est plus attaqué qu'une fois, et ta dame le défend."
    ]
   },
   {
    "id": "qd882e8cb0",
    "titre": "3…cxd4 4.exd4",
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Les noirs prennent en d4.",
     "Reprends tout de suite avec le pion e : ton pion reste au centre."
    ]
   },
   {
    "id": "q3d1bcbb33",
    "titre": "4…Fb4+ 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "Échec.",
     "c3 pare l'échec et attaque le fou : il doit reculer."
    ]
   },
   {
    "id": "q5ccef8522",
    "titre": "4…Ch5 5.Fg5",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Sans h3, ton fou n'a pas de case en h2 : il se met à l'abri en g5."
    ]
   },
   {
    "id": "q6ae32d977",
    "titre": "4…Ch5 5.Fe5",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "Le cavalier attaque ton fou.",
     "Fe5 ! Le fou se met à l'abri et attaque la tour h8 : le fou noir n'est pas encore en g7."
    ]
   },
   {
    "id": "q0c016b191",
    "titre": "4…Fg4 5.h3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f3 contre ta dame.",
     "h3 pose la question au fou. S'il recule en h5, g4 le met en grand danger : sa retraite g6 est bouchée par un pion noir."
    ]
   },
   {
    "id": "q146a7ca31",
    "titre": "4…c5 5.Cc3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "Cc3, puis Cb5 : avec ton fou f4, le cavalier visera c7."
    ]
   },
   {
    "id": "q02936d27c",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 Fg4 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide. Le clouage du fou g4 ne te gêne pas."
    ]
   },
   {
    "id": "q631a84079",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q784cc7745",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Cf6 4.Cf3 Ff5 5.Fb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ]
   },
   {
    "id": "qffadd6d88",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "qfe8ec8644",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 Cf6 5.Fb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nf6",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ]
   },
   {
    "id": "q8696a14d7",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 Ff5 4.Cf3 Cb4 5.Fd3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 coupe la diagonale f5-c2 : c2 n'est plus attaqué qu'une fois."
    ]
   },
   {
    "id": "q353844a3f",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Cf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q5192318b4",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Fd6 5.Fg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6."
    ]
   },
   {
    "id": "qd2fb6049d",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cc6 3.e3 e6 4.Cf3 Fb4+ 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 pare l'échec et attaque le fou : il doit reculer."
    ]
   },
   {
    "id": "q45b3957fe",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 Fd6 5.Fg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6."
    ]
   },
   {
    "id": "q5ad15f606",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 c5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q56e7a248e",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 e6 4.Cf3 Fe7 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q89b060082",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Cc6 4.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "q4cf5b36cb",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "qd32058728",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 Cc6 5.Fb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "Nc6",
     "Bb5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fb5 cloue le cavalier c6 contre le roi."
    ]
   },
   {
    "id": "q3560444e9",
    "titre": "Ligne 1.d4 d5 2.Ff4 Cf6 3.e3 Ff5 4.Cf3 h6 5.Fd3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "h6",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 propose l'échange des fous et sort ton fou f1."
    ]
   },
   {
    "id": "q02799299e",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Fxg3 5.hxg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "hxg3 : reprends avec le pion h, la colonne h s'ouvre pour ta tour."
    ]
   },
   {
    "id": "q64f71fa89",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Cf6 5.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "q4014ef669",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Fd6 4.Fg3 Cc6 5.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Fg3 : tu gardes ton fou contre …Fd6.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "qab11a053b",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 Cf6 4.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "qa246f56c7",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 Cc6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "qa628b50c8",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ]
   },
   {
    "id": "qb8c1d925d",
    "titre": "Ligne 1.d4 d5 2.Ff4 e6 3.e3 c5 4.Cf3 Cf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q69efb6e43",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 0-0 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ]
   },
   {
    "id": "qc87f7ad17",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 d6 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d6",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ]
   },
   {
    "id": "q63fd62a1d",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 Fg7 4.Cf3 d5 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d5",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ]
   },
   {
    "id": "q6371c765c",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Fg7 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ]
   },
   {
    "id": "qf9bad8772",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Fg4 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 pose la question au fou g4 (s'il recule en h5, g4 le met en danger)."
    ]
   },
   {
    "id": "q02bb48fec",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d6 4.Cf3 Ch5 5.Fg5",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fg5 : sans h3, le fou fuit le cavalier h5 par g5."
    ]
   },
   {
    "id": "qbb679dbc1",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Fg7 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "h3 : une retraite en h2 pour ton fou, contre …Ch5."
    ]
   },
   {
    "id": "q5b0ecc810",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Ch5 5.Fe5",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fe5 : le fou fuit le cavalier h5 et attaque la tour h8."
    ]
   },
   {
    "id": "q2582d3a7e",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 g6 3.e3 d5 4.Cf3 Fg4 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide. Le clouage du fou g4 ne te gêne pas."
    ]
   },
   {
    "id": "qd53a2b9f6",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 d5 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ]
   },
   {
    "id": "qc6ef374eb",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 d5 4.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "qde9a63467",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ]
   },
   {
    "id": "qee46ee0ed",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 Cc6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "qafa5f8847",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 c5 4.Cf3 d5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q108d61713",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 Fb7 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Bb7",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q8a7b338ca",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 c5 5.Cc3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Cc3, puis Cb5 : avec ton fou f4, le cavalier visera c7."
    ]
   },
   {
    "id": "q78806fc72",
    "titre": "Ligne 1.d4 Cf6 2.Ff4 e6 3.e3 b6 4.Cf3 Fe7 5.Fd3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Be7",
     "Bd3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "Fd3 : développe, le fou vise h7."
    ]
   },
   {
    "id": "q87498de50",
    "titre": "Ligne 1.d4 e6 2.Ff4 d5 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ]
   },
   {
    "id": "qa49a94c48",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 Cc6 5.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ]
   },
   {
    "id": "q896810dc2",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 d5 5.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ]
   },
   {
    "id": "q1096dc836",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 cxd4 4.exd4 Cf6 5.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "exd4 : reprends tout de suite avec le pion e.",
     "",
     "Cf3 : développe et défend d4."
    ]
   },
   {
    "id": "qbf591f758",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 Cf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q47914a892",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "exd4 : reprends tout de suite avec le pion e."
    ]
   },
   {
    "id": "qd7baed792",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 Cc6 4.Cf3 d5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5.",
     "",
     "c3 : la pyramide c3-d4-e3."
    ]
   },
   {
    "id": "q8cfc19009",
    "titre": "Ligne 1.d4 e6 2.Ff4 c5 3.e3 d5 4.Cf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1.",
     "",
     "Cf3 : développe et contrôle e5."
    ]
   },
   {
    "id": "q97061c4d7",
    "titre": "Ligne 1.d4 e6 2.Ff4 Cf6 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "legendes": [
     "1.d4 : ton premier coup, toujours.",
     "",
     "Ff4 : le fou sort avant e3, sinon il serait enfermé.",
     "",
     "e3 : soutient d4 et ouvre la diagonale de ton fou f1."
    ]
   },
   {
    "id": "qc3707f8b1",
    "titre": "Le plan après le répertoire",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3",
     "b6",
     "Ne5"
    ],
    "legendes": [
     "Le cavalier va en d2, pas en c3 : la case c3 est prise par ton pion.",
     "Les noirs proposent l'échange des fous.",
     "Comme toujours : Fg3.",
     "Les noirs roquent.",
     "Le fou d3 vise h7, la case faible du roque noir.",
     "Les noirs préparent …Fb7.",
     "Ce5 : le cavalier s'installe au centre. Seul …f6 pourrait le chasser, en affaiblissant le roque noir ; les noirs peuvent aussi l'échanger."
    ]
   },
   {
    "id": "q63e06c8f1",
    "titre": "6…c4 7.Dc2",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Qb6",
     "Qb3"
    ],
    "coups": [
     "c4",
     "Qc2"
    ],
    "legendes": [
     "Le pion chasse ta dame.",
     "La dame recule en c2 : de là, elle défend toujours b2 et vise e4 et h7."
    ]
   },
   {
    "id": "q9fa452574",
    "titre": "3…Db6 4.Dc1",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c6",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Qc1"
    ],
    "legendes": [
     "La dame attaque b2 avant que tu aies joué c3 : Db3 n'est pas encore possible.",
     "Dc1 défend b2. Ta dame reviendra plus tard."
    ]
   },
   {
    "id": "q3dde29aa4",
    "titre": "Les noirs à l'aile dame, toi au centre",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3"
    ],
    "coups": [
     "c4",
     "Bc2",
     "b5",
     "O-O",
     "a5",
     "e4",
     "dxe4",
     "Nxe4",
     "Nxe4",
     "Bxe4"
    ],
    "legendes": [
     "…c4 : les noirs gagnent de l'espace à l'aile dame et chassent ton fou d3.",
     "Le fou recule en c2. Il reste sur la diagonale qui mène à h7.",
     "…b5 soutient le pion c4. Le plan noir : …a5 puis …b4, pour ouvrir des lignes contre c3.",
     "Roque : ton roi se met à l'abri avant que le centre s'ouvre.",
     "…a5 : les noirs continuent à l'aile dame.",
     "<span class=\"mv good\">11.e4</span> ! Ne suis pas les noirs à l'aile dame : frappe au centre, là où tes pièces sont prêtes. C'est le meilleur coup selon Stockfish (+0,6).",
     "Les noirs prennent.",
     "Ton cavalier reprend.",
     "Échange des cavaliers.",
     "Ton fou reprend et se place en e4 : il attaque le cavalier c6 (plus défendu depuis …b5) et vise h7."
    ]
   },
   {
    "id": "q5a8da8e87",
    "titre": "7.Fxd6 : pas de gourmandise",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Bxd6",
     "cxd6"
    ],
    "legendes": [
     "Échange d'abord le fou d6, qui attaque ton fou f4 : tu choisis toi-même le moment de l'échange.",
     "Les noirs reprennent avec le pion c. Leur pion b7 reste faible, et ta position est saine (Stockfish : +0,2)."
    ]
   },
   {
    "id": "qd1765d946",
    "titre": "8.Fd3 : prépare e4",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "Bd3"
    ],
    "legendes": [
     "D'abord Fd3 : le fou défend e4 à l'avance et vise h7 (Stockfish : +0,3). Ensuite 0-0, et e4 viendra quand il sera défendu assez de fois."
    ]
   },
   {
    "id": "qab6365049",
    "titre": "6.Fe2 contre le fianchetto",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Be2"
    ],
    "legendes": [
     "Contre …g6 et …d6, le fou va en e2 (Stockfish : +0,2, le meilleur coup) : si les noirs poussent …e5 puis …e4, il n'y a rien à fourcher en d3."
    ]
   },
   {
    "id": "q28e19ed56",
    "titre": "Le sacrifice grec",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3",
     "Qc7",
     "O-O",
     "Bxg3",
     "hxg3"
    ],
    "coups": [
     "c4",
     "Bc2",
     "b5",
     "e4",
     "b4",
     "e5",
     "Nd7",
     "Bxh7+",
     "Kxh7",
     "Ng5+",
     "Kg8",
     "Qh5"
    ],
    "legendes": [
     "…c4 chasse ton fou d3.",
     "Le fou recule en c2 : il garde la diagonale de h7.",
     "Les noirs avancent à l'aile dame.",
     "<span class=\"mv\">12.e4</span> : la rupture centrale. Si le pion arrive en e5, il chassera le cavalier f6, le seul défenseur de h7.",
     "Les noirs continuent à l'aile dame…",
     "<span class=\"mv good\">13.e5</span> ! Le cavalier f6 doit partir.",
     "Il recule en d7. h7 n'a plus que le roi pour le défendre : les conditions sont réunies (ta dame passera par h5 dès que le cavalier aura sauté en g5).",
     "<span class=\"mv good\">14.Fxh7+</span> ! Le sacrifice grec.",
     "Le roi prend.",
     "<span class=\"mv good\">15.Cg5+</span> : échec. Le cavalier est tranquille en g5 : la dame noire est en c7 et aucun fou noir ne garde g5.",
     "Le roi recule en g8, le coup le plus naturel.",
     "<span class=\"mv good\">16.Dh5</span> : la menace est Dh7 mat, et le pion e5 interdit …Cf6."
    ]
   },
   {
    "id": "q15bbe301b",
    "titre": "La colonne h",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3",
     "Nf6",
     "Nd2",
     "c5",
     "c3",
     "Nc6",
     "Ngf3",
     "O-O",
     "Bd3",
     "b6"
    ],
    "coups": [
     "Ne5",
     "Qc7",
     "Ng4",
     "Re8",
     "Nxf6+",
     "gxf6",
     "Rxh7"
    ],
    "legendes": [
     "<span class=\"mv good\">10.Ce5</span> ! Le cavalier attaque c6, que plus rien ne défend depuis …b6.",
     "La dame défend c6.",
     "<span class=\"mv good\">11.Cg4</span> ! Le cavalier va échanger le défenseur de h7.",
     "Les noirs libèrent f8 pour leur roi.",
     "Cxf6+ : le défenseur disparaît.",
     "Les noirs reprennent avec le pion g : leur roi est à découvert.",
     "<span class=\"mv good\">13.Txh7</span> : la tour entre en jeu sans avoir eu besoin de bouger avant."
    ]
   },
   {
    "id": "q2059e461c",
    "titre": "Contre …c4 : b3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2"
    ],
    "coups": [
     "c4",
     "Be2",
     "b5",
     "O-O",
     "a5",
     "b3",
     "a4",
     "Ne5"
    ],
    "legendes": [
     "…c4 : les noirs ferment l'aile dame et gagnent de l'espace. Ton fou f1 ne pourra pas aller en d3.",
     "Le fou se développe en e2.",
     "…b5 soutient le pion c4.",
     "Roque.",
     "…a5 prépare …b4 contre ton pion c3.",
     "<span class=\"mv good\">9.b3</span> ! Tu frappes la chaîne de pions par en dessous : b3 attaque c4. Si …cxb3, axb3 et ta tour a1 gagne la colonne a.",
     "Les noirs poussent encore.",
     "<span class=\"mv good\">10.Ce5</span> : pendant que les noirs avancent leurs pions, toi, tu places tes pièces. La suite : e4 au centre."
    ]
   },
   {
    "id": "q6f1b22494",
    "titre": "2…c5 3.e3 Db6 4.Cc3 : b2 empoisonné",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Nc3",
     "Qxb2",
     "Nxd5",
     "Qa3",
     "Nc7+",
     "Kd8",
     "Nxa8"
    ],
    "legendes": [
     "La dame attaque b2.",
     "<span class=\"mv good\">4.Cc3</span> ! Tu laisses b2. Le cavalier vise d5.",
     "<span class=\"mv bad\">4…Dxb2</span> ?? Le pion est empoisonné.",
     "<span class=\"mv good\">5.Cxd5</span> ! Le cavalier prend un pion et menace Cc7+, échec au roi et attaque de la tour a8.",
     "La dame se replie en a3, mais elle ne défend pas c7.",
     "Échec : le roi doit bouger.",
     "Le roi s'écarte.",
     "Tu prends la tour."
    ]
   },
   {
    "id": "q04273db10",
    "titre": "5.Fb5 e6 6.Ce5 : le cavalier cloué",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5",
     "Bd6",
     "Nxc6",
     "bxc6",
     "Bxc6+"
    ],
    "legendes": [
     "Les noirs ouvrent leur fou f8.",
     "<span class=\"mv good\">6.Ce5</span> : le cavalier c6, cloué, est attaqué deux fois et défendu une fois.",
     "<span class=\"mv bad\">6…Fd6</span> ? Les noirs développent sans s'occuper de c6.",
     "<span class=\"mv good\">7.Cxc6</span> : tu prends le cavalier, qui ne pouvait pas bouger.",
     "<span class=\"mv bad\">7…bxc6</span> ? Les noirs reprennent…",
     "<span class=\"mv good\">8.Fxc6+</span> : échec, et le fou attaque la tour a8."
    ]
   },
   {
    "id": "q0d3cc30b4",
    "titre": "4…Fg4 5.h3 Fh5 ?? 6.g4",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3",
     "Bh5",
     "g4"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f3.",
     "<span class=\"mv good\">5.h3</span> pose la question au fou.",
     "<span class=\"mv bad\">5…Fh5</span> ?? Le fou garde le clouage…",
     "<span class=\"mv good\">6.g4</span> ! Le fou est attaqué, et sa case de retraite g6 est occupée par un pion noir."
    ]
   },
   {
    "id": "q1d83288e9",
    "titre": "Le gambit Englund : 1…e5",
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "coups": [
     "Qb4+",
     "Bd2",
     "Qxb2",
     "Nc3"
    ],
    "legendes": [
     "Échec : la dame attaque aussi b2.",
     "Le fou s'interpose.",
     "La dame prend b2 et menace la tour a1.",
     "<span class=\"mv good\">6.Cc3</span> : le cavalier quitte b1, ta dame d1 défend la tour a1."
    ]
   },
   {
    "id": "q88a9da934",
    "titre": "5…Db6 6.Db3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "c4",
     "Qc2"
    ],
    "legendes": [
     "La dame attaque b2, que ton fou c1 ne défend plus.",
     "<span class=\"mv good\">6.Db3</span> : tu défends b2 et tu proposes l'échange. Si …Dxb3, axb3 et ta tour a1 gagne la colonne a.",
     "Les noirs refusent : le pion chasse ta dame.",
     "<span class=\"mv good\">7.Dc2</span> : la dame recule. De c2, elle défend toujours b2 et vise e4 et h7."
    ]
   },
   {
    "id": "q6dc2f04c8",
    "titre": "3…b6 4.Cf3 c5 5.Cc3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3",
     "Bb7",
     "Nb5"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "<span class=\"mv good\">5.Cc3</span> plutôt que c3 : le cavalier veut aller en b5.",
     "Le fou sort en b7.",
     "<span class=\"mv good\">6.Cb5</span> : avec ton fou f4, le cavalier vise c7 et d6."
    ]
   },
   {
    "id": "qe9130484e",
    "titre": "Exercice 1 : le cavalier en b5",
    "debut": [],
    "coups": [
     "Nc7+",
     "Kf8"
    ],
    "legendes": [
     "Cc7+ ! Avec ton fou f4 derrière lui, le cavalier entre en c7 : échec au roi et attaque de la tour a8. Si …Dxc7, Fxc7 gagne la dame.",
     "Le roi doit bouger : il perd aussi le droit de roquer."
    ],
    "fen": "rn1qk2r/pb1pbppp/1p2pn2/1Np5/3P1B2/4PN2/PPP2PPP/R2QKB1R w KQkq - 4 7"
   },
   {
    "id": "q011a642bf",
    "titre": "Exercice 2 : le fou d6",
    "debut": [],
    "coups": [
     "Bxd6",
     "Nxd4"
    ],
    "legendes": [
     "Fxd6 ! La règle dit « Fg3 contre …Fd6 », mais regarde qui défend d6 : personne. La dame b6 ne le voit pas, son propre cavalier c6 est sur le chemin.",
     "Les noirs sauvent ce qu'ils peuvent : le cavalier prend un pion en d4."
    ],
    "fen": "r1b1k2r/pp3ppp/1qnbpn2/3p4/2pP1B2/2P1PN2/PPQN1PPP/R3KB1R w KQkq - 4 9"
   },
   {
    "id": "q22fbdb7e9",
    "titre": "Exercice 3 : la dame en b3",
    "debut": [],
    "coups": [
     "Qxb7",
     "Nxe5"
    ],
    "legendes": [
     "Dxb7 ! Le fou c8 noir est parti en f5 : plus personne ne défend b7. Ta dame prend le pion et attaque le cavalier c6.",
     "Les noirs échangent ton fou e5."
    ],
    "fen": "r2q1rk1/ppp2p2/2nbpn1p/3pBbp1/3P4/1QP1PN2/PP1NBPPP/R3K2R w KQ - 4 10"
   },
   {
    "id": "qf46328b3e",
    "titre": "Exercice 4 : le cavalier e5 et le fou f4",
    "debut": [],
    "coups": [
     "Ng6",
     "Qd8",
     "Nxf8",
     "Bxf8"
    ],
    "legendes": [
     "Cg6 ! Le cavalier quitte e5 : ton fou f4 attaque maintenant la dame c7 (une attaque « à la découverte »). Et le cavalier g6 attaque la tour f8. Si …hxg6, Fxc7 gagne la dame.",
     "La dame se sauve.",
     "Cxf8 : tu prends la tour.",
     "Le fou reprend."
    ],
    "fen": "rnb2rk1/p1q1bppp/1p2pn2/3pN3/3P1B2/2PB4/PP1N1PPP/R2QK2R w KQ - 1 10"
   },
   {
    "id": "q5d5ad9e2a",
    "titre": "Exercice 5 : après la rupture e4",
    "debut": [],
    "coups": [
     "e5",
     "Bc7"
    ],
    "legendes": [
     "e5 ! Le pion attaque à la fois le fou d6 et le cavalier f6 : une fourchette de pion.",
     "Le fou se sauve en c7."
    ],
    "fen": "r1bqr1k1/p4ppp/2nbpn2/1p1p4/2pPP3/2P2NB1/PPBN1PPP/R2QK2R w KQ - 1 11"
   },
   {
    "id": "q06143bd3a",
    "titre": "Exercice 6 : la colonne h",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Nxh7",
     "Qh5",
     "f6"
    ],
    "legendes": [
     "Fxh7+ ! Le roi ne peut pas prendre : en h7, il serait en échec par ta tour h1.",
     "Le cavalier prend.",
     "Dh5 ! La dame attaque le cavalier h7, avec ta tour h1 derrière elle : il est attaqué deux fois et défendu une seule fois (par le roi). Menace : Dxh7+.",
     "Les noirs libèrent f7 pour leur roi."
    ],
    "fen": "rnbq1rk1/pp3ppp/4pn2/2pp4/3P4/3BP1P1/PPPN1PP1/R2QK1NR w KQ - 0 8"
   },
   {
    "id": "q2cc8ebce8",
    "titre": "Exercice 7 : le fou d3 est attaqué",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Qxh5+",
     "Kg8"
    ],
    "legendes": [
     "Fxh7+ ! Ton fou était attaqué par le pion c4 : au lieu de reculer, il se sacrifie en h7 avec échec.",
     "Le roi prend.",
     "Dxh5+ ! La route d1-h5 est libre depuis que ton cavalier est en e5 : ta dame reprend le cavalier h5 avec échec.",
     "Le roi recule."
    ],
    "fen": "r1bq1rk1/pp3ppp/2nbp3/3pN2n/2pP4/2PBP1B1/PP1N1PPP/R2QK2R w KQ - 0 10"
   },
   {
    "id": "q993eb619a",
    "titre": "Exercice 8 : dame en f3, cavalier en e5",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Nxf7"
    ],
    "legendes": [
     "Fxh7+ ! Le roi est attiré en h7 : il ne défend plus f7, que ton cavalier e5 peut prendre. La tour noire, elle, a quitté f8.",
     "Le roi prend.",
     "Cxf7 ! Le cavalier prend un pion et attaque la dame d8 et le fou d6 en même temps : une fourchette."
    ],
    "fen": "r2qr1k1/pb3ppp/1pnbpn2/2ppN3/3P4/2PBPQB1/PP1N1PPP/R3K2R w KQ - 4 11"
   },
   {
    "id": "qfb2f9d58b",
    "titre": "1…c5 2.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5",
     "e5",
     "e4"
    ],
    "legendes": [
     "Les noirs attaquent d4 avec le pion c.",
     "Avance : ton pion coupe le camp noir en deux.",
     "Les noirs bloquent le centre.",
     "Prends l'espace : e4. Stockfish : +1,3."
    ]
   },
   {
    "id": "q950711fb1",
    "titre": "1…e5 2.dxe5",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "legendes": [
     "Le gambit Englund : un pion offert.",
     "Prends-le.",
     "Le cavalier attaque e5.",
     "Défends e5 en développant.",
     "La dame attaque e5 une deuxième fois.",
     "Ton fou de Londres défend e5. Stockfish : +1,4."
    ]
   },
   {
    "id": "q5954cf962",
    "titre": "1…f5 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "La hollandaise : le pion f contrôle e4.",
     "Ton système ne change pas : 2.Ff4.",
     "Les noirs développent.",
     "e3.",
     "Les noirs ouvrent leur fou f8.",
     "Cf3. Stockfish : +0,5."
    ]
   },
   {
    "id": "qf940f8435",
    "titre": "1…d6 2.Cf3",
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "Nf3",
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "Cf3 décourage …e5 : le cavalier contrôle la case.",
     "Les noirs développent.",
     "Et maintenant le fou sort. Stockfish : +0,3."
    ]
   },
   {
    "id": "qed17f690b",
    "titre": "1…g6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "Bf4",
     "Bg7",
     "e3",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "Le fianchetto tout de suite.",
     "2.Ff4 : ton système. Stockfish préfère 2.e4 (+0,7), qui prend tout le centre, mais 2.Ff4 reste sain.",
     "Le fou g7 vise la grande diagonale.",
     "e3.",
     "Les noirs jouent …d6.",
     "Cf3. Ensuite h3, comme contre 1…Cf6 2.Ff4 g6. Stockfish : +0,1."
    ]
   },
   {
    "id": "q87abc3fb7",
    "titre": "1…c6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …d5.",
     "2.Ff4.",
     "On retrouve 1…d5 2.Ff4 c6.",
     "e3. Stockfish : +0,5."
    ]
   },
   {
    "id": "q125d77b1f",
    "titre": "1…Cc6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Le cavalier sort tout de suite.",
     "2.Ff4.",
     "On retrouve 1…d5 2.Ff4 Cc6.",
     "e3. Stockfish : +0,4."
    ]
   },
   {
    "id": "q680fd6f28",
    "titre": "1…b6 2.Ff4",
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "Bf4",
     "Bb7",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …Fb7.",
     "2.Ff4 : ton système. Stockfish préfère 2.e4 (+0,9), qui prend tout le centre, mais 2.Ff4 reste sain.",
     "Le fou b7 vise e4.",
     "e3. Stockfish : +0,2."
    ]
   },
   {
    "id": "q672730985",
    "titre": "2…c5 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "Les noirs attaquent d4 tout de suite.",
     "e3 soutient d4.",
     "Deuxième attaquant sur d4.",
     "c3 : la pyramide. Égalité (Stockfish : 0,0)."
    ]
   },
   {
    "id": "q20e455291",
    "titre": "2…Ff5 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Bf5",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Les noirs copient ton idée : leur fou sort avant …e6.",
     "e3.",
     "Les noirs ouvrent leur fou f8.",
     "Cf3. Stockfish : +0,1."
    ]
   },
   {
    "id": "q15e091780",
    "titre": "2…c6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "legendes": [
     "Les noirs soutiennent d5 avec le pion c.",
     "e3.",
     "Le fou sort.",
     "Cf3. Stockfish : +0,3."
    ]
   },
   {
    "id": "qa745f549f",
    "titre": "2…g6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "legendes": [
     "Le fianchetto.",
     "e3.",
     "Le fou g7 vise d4.",
     "Cf3, puis h3. Stockfish : +0,3."
    ]
   },
   {
    "id": "q6a66a1d17",
    "titre": "2…e5 3.Fxe5",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e5",
     "Bxe5"
    ],
    "legendes": [
     "Un pion offert.",
     "Ton fou le prend. Stockfish : +1,0."
    ]
   },
   {
    "id": "q12bcb6075",
    "titre": "1…Cf6 2.Ff4 c5 3.e3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3"
    ],
    "legendes": [
     "Les noirs attaquent d4.",
     "e3 soutient d4. Stockfish : +0,1."
    ]
   },
   {
    "id": "qfd8b7fc98",
    "titre": "1…Cf6 2.Ff4 d6 3.e3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "d6",
     "e3"
    ],
    "legendes": [
     "Les noirs préparent …e5.",
     "e3, puis Cf3 et h3. Stockfish : +0,1."
    ]
   }
  ]
 },
 {
  "id": "francaise",
  "titre": "La Défense française",
  "camp": "b",
  "rep": "rep-francaise",
  "sous": "Ton répertoire noir contre 1.e4 : 1…e6, 2…d5, puis …c5. {{positions}} à connaître, {{lignes}}.",
  "chapeau": "<p>La française est une défense patiente. Tu laisses les blancs prendre de l'espace au centre, puis tu attaques la base de leurs pions avec …c5. Tes pions e6 et d5 forment un mur solide ; ton seul vrai souci, c'est le fou c8, enfermé derrière e6.</p><p>La leçon suit l'arbre de ton répertoire, famille par famille, puis explique les idées, les pièges et les exceptions. Chaque séquence animée a son bouton Quiz ; tous les quiz se retrouvent aussi dans Entraînement, rubrique « Quiz d'ouverture ». Les liens soulignés en pointillé montrent la position dont on parle.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "Explication du répertoire",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire noir contre 1.e4 tient en trois coups : <span class=\"mv\">1…e6</span>, <span class=\"mv\">2…d5</span>, puis <span class=\"mv\">…c5</span> dès que les blancs ferment le centre. Tu laisses les blancs prendre de l'espace, puis tu attaques la base de leurs pions."
     },
     {
      "t": "cle",
      "html": "<strong>Comment lire les chiffres.</strong> Les évaluations sont celles de Stockfish, du point de vue des blancs, comme partout dans l'application : +0,4 veut dire que les blancs sont un peu mieux, −0,4 que c'est toi. Entre −0,5 et +0,5, la partie est équilibrée."
     },
     {
      "t": "p",
      "html": "Ce que jouent les blancs entre 1000 et 1600 sur Lichess (parties blitz et rapides) décide de la famille. Les échiquiers sont vus de ton côté. Flèche verte : ton coup ; flèche grise : celui de l'adversaire."
     },
     {
      "t": "table",
      "entetes": [
       "Après",
       "Les blancs jouent",
       "Fréquence",
       "Ce que c'est"
      ],
      "lignes": [
       [
        "1.e4 e6",
        "2.d4",
        "36 %",
        "La française classique"
       ],
       [
        "1.e4 e6",
        "2.Cf3",
        "35 %",
        "Souvent une transposition"
       ],
       [
        "1.e4 e6",
        "2.Fc4",
        "7 %",
        "Le fou se fait chasser par …d5"
       ],
       [
        "2.d4 d5",
        "3.e5",
        "52 %",
        "La variante d'avance"
       ],
       [
        "2.d4 d5",
        "3.exd5",
        "26 %",
        "La variante d'échange"
       ],
       [
        "2.d4 d5",
        "3.Cc3",
        "15 %",
        "La variante classique"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. L'avance : 3.e5"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "legendes": [
       "Les blancs avancent et ferment le centre. Leur chaîne de pions d4-e5 prend de l'espace… mais toute chaîne a une base. Ici, c'est d4.",
       "Tu attaques la base tout de suite : <span class=\"mv good\">3…c5</span>. C'est LE coup de la française. Sans lui, tu étouffes.",
       "Les blancs soutiennent d4 avec le pion c (50 %). Sur <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Cf3</a>, même réponse.",
       "Deuxième attaquant sur d4. Pas de …Cf6 dans cette variante : le pion e5 prendrait ton cavalier (voir les exceptions).",
       "Les blancs défendent d4 une troisième fois. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Fb5</a> et <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Fe3</a>.",
       "<span class=\"mv good\">5…Db6</span> : ta dame se prépare à frapper d4 et vise déjà le pion b2."
      ],
      "fin": "Compte sur d4 : le pion c5 et le cavalier c6 l'attaquent ; la dame b6 entrera en jeu après …cxd4. Les blancs le défendent avec c3, le cavalier f3 et la dame.",
      "titre": "Avance : la ligne principale",
      "quiz": [
       "q76e351bbd",
       "qcf913e84e",
       "qc30bc31e9",
       "q718425163"
      ],
      "marques": [
       [
        "e5",
        "d4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3",
        "c3",
        "d1",
        "d4!"
       ],
       [
        "b6",
        "d4!",
        "b2!"
       ],
       [
        "d4!",
        "c5",
        "c6",
        "b6"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Ton plan ensuite : …Fd7, …cxd4, puis un cavalier en f5 (par e7 ou h6) pour attaquer d4 encore une fois. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Fb5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Fe3</a>, joue aussi 5…Db6 (contre 5.Fb5, 5…Da5 se joue aussi). Si les blancs jouent <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Cf3</a> au lieu de 4.c3 : 4…Cc6, puis 5…Db6 contre <a class=\"lien-var\" href=\"#\" data-var=\"q0eca7d64b\">5.Fb5</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q7a0026f6b\">5.c3</a>, et 5…cxd4 contre <a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5.Fe3</a>."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5"
      ],
      "coups": [
       "dxc5",
       "Bxc5",
       "Nf3",
       "Nc6"
      ],
      "legendes": [
       "Les blancs prennent en c5 (5 % des parties) : ils abandonnent la base de leur chaîne.",
       "Reprends tout de suite avec le fou : il se développe sur une belle diagonale, qui vise f2.",
       "Les blancs défendent e5. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Cc3</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Fb5+</a>, même réponse.",
       "Tu attaques e5 à ton tour. Ensuite …f6 ou …Dc7."
      ],
      "fin": "Stockfish penche déjà légèrement pour toi (−0,2). Sans le pion d4, le pion e5 n'est plus soutenu par un pion : c'est une cible. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Cc3</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Fb5+</a>, joue aussi 5…Cc6.",
      "titre": "4.dxc5 : le fou reprend",
      "quiz": [
       "q643c602b3",
       "q6f71ee263",
       "q5c03a7d7d"
      ],
      "marques": [
       [
        "c5!"
       ],
       [
        "c5",
        "f2!"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c6",
        "e5!"
       ],
       [
        "e5!",
        "c6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. L'échange : 3.exd5 exd5"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "exd5",
       "exd5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6"
      ],
      "legendes": [
       "Les blancs échangent. La position devient symétrique et calme.",
       "Reprends avec le pion. Bonne nouvelle : la diagonale c8-h3 s'ouvre, ton fou c8 n'est plus enfermé.",
       "Développement.",
       "Même chose pour toi.",
       "Le fou blanc vise h7. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Cc3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Fg5</a>.",
       "Tu fais pareil : <span class=\"mv\">5…Fd6</span> vise h2. Ensuite <span class=\"mv\">…0-0</span>, <span class=\"mv\">…Te8</span> sur la colonne ouverte, <span class=\"mv\">…Fg4</span>."
      ],
      "fin": "Position équilibrée (+0,2) et facile à jouer : tu développes en miroir. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Cc3</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q1deb7307e\">5.Ff4</a>, joue aussi 5…Fd6. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Fg5</a>, ton répertoire joue 5…Fe7. Ici, …Fd6 marcherait aussi, mais avec un cavalier blanc en c3 il perdrait un pion (séquence suivante) : garde un seul réflexe, Fe7 contre Fg5.",
      "titre": "Échange : la ligne principale",
      "quiz": [
       "qb2ed36575",
       "qc8d612ba1",
       "q3656d1200",
       "q1deb7307e"
      ],
      "marques": [
       [],
       [
        "c8",
        "h3"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "d6",
        "h2!"
       ],
       [
        "d6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nc3",
       "Nf6"
      ],
      "coups": [
       "Bg5",
       "Be7"
      ],
      "legendes": [
       "Le fou cloue ton cavalier f6 contre ta dame. Le pion d5 est attaqué par le cavalier c3, et défendu par ton cavalier et par ta dame.",
       "<span class=\"mv good\">5…Fe7</span> décloue le cavalier, et ta dame garde la colonne d vers d5. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Fd6 ?</a>, le fou coupe ta dame de d5 : il ne reste que le cavalier cloué, et 6.Cxd5 ! gagne un pion (+1,7). Si 6…Cxd5, 7.Fxd8."
      ],
      "fin": "La règle de l'échange : tu joues Fd6, sauf contre Fg5, où tu joues Fe7. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q1deb7307e\">5.Ff4</a>, c'est bien …Fd6.",
      "titre": "5.Fg5 : pourquoi Fe7",
      "quiz": [
       "q2ae34efee",
       "q1deb7307e"
      ],
      "marques": [
       [
        "f6!",
        "d8",
        "d5!",
        "c3"
       ],
       [
        "e7",
        "f6",
        "d8",
        "d5!"
       ],
       [
        "e7",
        "g5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Qe2+",
       "Be7",
       "Nf3",
       "Nf6"
      ],
      "legendes": [
       "Échec de la dame (10 %).",
       "Interpose le fou en développant. Stockfish trouve déjà cette position meilleure pour toi (−0,4) : la dame blanche bouche la sortie de son propre fou f1.",
       "Les blancs développent. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Cc3</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Fg5</a>.",
       "Développe ton cavalier."
      ],
      "fin": "Contre <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Cc3</a>, même réponse : 5…Cf6. Contre <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Fg5</a>, sors l'autre cavalier : 5…Cc6 (voir les exceptions).",
      "titre": "4.De2+ : interpose le fou",
      "quiz": [
       "q98712d8c3",
       "qda61c904f",
       "qa8ce55619"
      ],
      "marques": [
       [
        "e2",
        "e8!"
       ],
       [
        "e7",
        "e2",
        "f1"
       ],
       [],
       [],
       [
        "f6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. Le classique : 3.Cc3 Cf6"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5"
      ],
      "legendes": [
       "Les blancs défendent e4 avec le cavalier.",
       "Tu attaques e4 une deuxième fois.",
       "Les blancs poussent et chassent ton cavalier (58 %). Ton cavalier doit rentrer.",
       "Il rentre en d7, et c'est la bonne case : Stockfish la préfère nettement à …Ce4 ou …Cg8 (+0,4 contre +0,9 et +1,0). De d7, il soutient …c5 et pourra attaquer e5.",
       "Les blancs soutiennent e5 et d4.",
       "Et voilà le coup de la française : <span class=\"mv good\">5…c5</span>, tu frappes d4. Même réponse contre <a class=\"lien-var\" href=\"#\" data-var=\"q722e2d9e8\">5.f4</a> et contre <a class=\"lien-var\" href=\"#\" data-var=\"qcdc3eef57\">5.Fb5</a>."
      ],
      "fin": "Ensuite …Cc6 et …Db6 : la même pression sur d4 que dans l'avance. Le cavalier d7 peut aussi reprendre en e5 si le pion perd ses défenseurs, ou soutenir …f6. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q22d07b5f2\">4.exd5</a>, reprends avec le pion : c'est la variante d'échange.",
      "titre": "4.e5 : le cavalier rentre en d7",
      "quiz": [
       "q3cb05ee94",
       "q722e2d9e8",
       "qcdc3eef57",
       "q22d07b5f2"
      ],
      "marques": [
       [
        "c3",
        "e4!"
       ],
       [
        "f6",
        "d5",
        "e4!"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "f3",
        "e5",
        "d4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c5",
        "d4!",
        "d7",
        "e5!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6"
      ],
      "coups": [
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7"
      ],
      "legendes": [
       "Les blancs clouent ton cavalier f6.",
       "<span class=\"mv good\">4…dxe4</span> : tu échanges ton pion d5 contre e4. Le cavalier f6 n'a plus de pion d5 à défendre.",
       "Les blancs reprennent (65 %).",
       "Tu décloues. Attention : ton cavalier f6 attaque maintenant le cavalier e4, que rien ne défend."
      ],
      "fin": "Si les blancs jouent un coup quelconque, comme <a class=\"lien-var\" href=\"#\" data-var=\"q0b8f474f7\">6.Cf3 ??</a>, 6…Cxe4 ! gagne une pièce (−4,1). La bonne suite pour eux : <a class=\"lien-var\" href=\"#\" data-var=\"q7cbbdd8af\">6.Fxf6 Fxf6 7.Cf3</a>, position équilibrée (+0,5).",
      "titre": "4.Fg5 : la variante Burn",
      "quiz": [
       "q5dd86a571",
       "q0b8f474f7",
       "q7cbbdd8af"
      ],
      "marques": [
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "e4!",
        "f6"
       ],
       [
        "e4!"
       ],
       [
        "e7",
        "f6",
        "e4!"
       ],
       [
        "f6",
        "e4!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4"
      ],
      "coups": [
       "Bxf6",
       "gxf6",
       "Nxe4",
       "f5"
      ],
      "legendes": [
       "Les blancs prennent ton cavalier tout de suite (23 %).",
       "<span class=\"mv good\">5…gxf6</span> ! Reprends avec le pion g, pas avec la dame. Les pions doublés ne te gênent pas : tu gagnes la colonne g pour ta tour, et la paire de fous.",
       "Les blancs reprennent leur pion.",
       "Le pion f chasse le cavalier : tu gagnes un temps."
      ],
      "fin": "Stockfish : −0,6, c'est toi qui es mieux. Après <a class=\"lien-var\" href=\"#\" data-var=\"q5474b2037\">5…Dxf6</a> 6.Cxe4, c'est ta dame qui se fait attaquer : +0,2 pour les blancs. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q7a0932fc1\">5.f3</a>, joue 5…c5.",
      "titre": "5.Fxf6 : reprends avec le pion",
      "quiz": [
       "q1030cfc72",
       "q7a0932fc1"
      ],
      "marques": [
       [
        "f6!"
       ],
       [
        "f6!",
        "h8",
        "c8",
        "f8"
       ],
       [
        "e4!"
       ],
       [
        "f5",
        "e4!"
       ],
       [
        "f5",
        "e4!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "4. Contre 2.Cf3"
     },
     {
      "t": "p",
      "html": "2.Cf3 est presque aussi joué que 2.d4 entre 1000 et 1600 Elo (35 %). Ta réponse ne change pas : 2…d5. Souvent, les blancs jouent d4 un peu plus tard, et on retombe dans les lignes ci-dessus."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Nf3"
      ],
      "coups": [
       "d5",
       "e5",
       "c5",
       "Bb5+",
       "Bd7",
       "Bxd7+",
       "Nxd7"
      ],
      "legendes": [
       "Toujours le même coup.",
       "L'avance, mais sans pion en d4. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Cc3 Cf6 4.e5 Cfd7</a>.",
       "Tu prends de l'espace à l'aile dame, comme d'habitude.",
       "Échec.",
       "<span class=\"mv good\">4…Fd7</span> : tu proposes l'échange de ton fou c8, celui qui est enfermé par e6. Bien mieux que 4…Cc6 (−0,4 contre +0,4).",
       "Les blancs échangent (65 %).",
       "Reprends avec le cavalier : Stockfish le préfère à la dame."
      ],
      "fin": "Ton fou à problèmes a disparu, et tu es déjà un peu mieux (−0,4).",
      "titre": "3.e5 c5 4.Fb5+",
      "quiz": [
       "q24100b877",
       "q0186a3787",
       "q6e0727167"
      ],
      "marques": [
       [],
       [
        "e5",
        "d4"
       ],
       [],
       [
        "b5",
        "e8!"
       ],
       [
        "d7",
        "b5",
        "e6"
       ],
       [],
       [],
       []
      ]
     },
     {
      "t": "p",
      "html": "Les autres suites. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a> : joue comme dans l'échange (…Cf6, …Fd6). Contre <a class=\"lien-var\" href=\"#\" data-var=\"q60db66247\">4.De2+</a>, interpose 4…Fe7 ; si la dame continue avec 5.Db5+, 5…c6 l'attaque et elle doit encore bouger (−0,7). Contre <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Cc3 Cf6 4.e5 Cfd7</a> : 5…c5, comme dans le classique. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">4.d3</a> : 4…c5, et sur 5.Fg5, 5…d4 ! chasse le cavalier c3 (−0,7)."
     },
     {
      "t": "h",
      "html": "5. Contre 2.Fc4"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Bc4"
      ],
      "coups": [
       "d5",
       "exd5",
       "exd5",
       "Bb3",
       "Nf6",
       "Nf3",
       "Bd6"
      ],
      "legendes": [
       "<span class=\"mv good\">2…d5</span> ! Le pion attaque le fou c4 et le pion e4 en même temps.",
       "Les blancs échangent (93 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Fb3</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Fb5+</a>.",
       "Reprends avec le pion : le fou c4 est de nouveau attaqué.",
       "Il recule. Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Fb5+</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.De2+</a>.",
       "Développement normal.",
       "Les blancs aussi.",
       "Puis …0-0 et …Te8. Le fou blanc a déjà joué deux fois pour rien."
      ],
      "fin": "Stockfish : −0,2. Après 2.Fc4, c'est toi qui as la position la plus facile. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Fb5+</a>, joue 4…c6 pour chasser encore le fou ; contre <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.De2+</a>, joue 4…Fe7. Si les blancs reculent tout de suite (<a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Fb3</a>), prends le pion : 3…dxe4, il est gratuit (−0,8). Contre <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Fb5+</a>, joue 3…c6.",
      "titre": "2.Fc4 d5 : le fou se fait chasser",
      "quiz": [
       "q221770c6e",
       "qff3738e44",
       "qdeba3c71f",
       "q480cdffa7",
       "q6fcf7f369"
      ],
      "marques": [
       [
        "d5",
        "c4!",
        "e4!"
       ],
       [],
       [
        "d5",
        "c4!"
       ],
       [],
       [],
       [],
       [
        "b3"
       ],
       []
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Les transpositions.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"q126ae3a42\">2.Cf3 d5 3.exd5 exd5 4.d4</a>, c'est l'échange ; <a class=\"lien-var\" href=\"#\" data-var=\"q5e67e8b12\">2.Cf3 d5 3.e5 c5 4.d4 Cc6</a>, c'est l'avance. L'application le sait : une position déjà vue ailleurs n'est demandée qu'une fois à l'entraînement."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "Le par cœur",
    "blocs": [
     {
      "t": "p",
      "html": "Tout le répertoire, lu dans tes données : si tu le modifies dans l'éditeur, l'arbre suit. Il y a {{positions}} où c'est à toi de trouver le coup. Elles se ressemblent beaucoup : une poignée d'idées suffit à les retrouver. Dans le tableau, clique sur un coup pour le voir sur l'échiquier ; chaque coup est aussi un quiz."
     },
     {
      "t": "h",
      "html": "Les décisions à connaître"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "Les blancs jouent",
       "Tu joues",
       "Pourquoi"
      ],
      "lignes": [
       [
        "1.e4",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf2e5104df\">1…e6</a>",
        "Prépare …d5"
       ],
       [
        "1.e4 e6",
        "2.d4, 2.Cf3, 2.Fc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qeb95eb4e9\">2…d5</a>",
        "Toujours"
       ],
       [
        "Avance",
        "3.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q905fad9b4\">3…c5</a>",
        "Attaque la base d4"
       ],
       [
        "",
        "4.c3 ou 4.Cf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qadd44dab6\">4…Cc6</a>",
        "Deuxième attaquant de d4"
       ],
       [
        "",
        "4.dxc5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1b98798b2\">4…Fxc5</a>",
        "Reprendre en développant"
       ],
       [
        "",
        "5.Cf3, 5.Fb5, 5.Fe3 (après 4.c3)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9b99194ae\">5…Db6</a>",
        "d4 et b2"
       ],
       [
        "4.Cf3 Cc6",
        "5.Fe3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5…cxd4</a>",
        "Si 6.Cxd4 ?, …Cxe5"
       ],
       [
        "Échange",
        "3.exd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q25043273e\">3…exd5</a>",
        "Libère le fou c8"
       ],
       [
        "",
        "4.Cf3 ou 4.Cc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q07b1c55f5\">4…Cf6</a>",
        "Développement"
       ],
       [
        "",
        "4.De2+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd2213b49e\">4…Fe7</a>",
        "Interposer en développant"
       ],
       [
        "Échange, 5e coup",
        "Cc3, Fd3, Cf3, Ff4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qe69740756\">5…Fd6</a>",
        "En miroir"
       ],
       [
        "",
        "5.Fg5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5…Fe7</a>",
        "Décloue, d5 reste défendu"
       ],
       [
        "Classique",
        "3.Cc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q22d1b3b29\">3…Cf6</a>",
        "Attaque e4"
       ],
       [
        "",
        "4.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qdac19d728\">4…Cfd7 puis 5…c5</a>",
        "Le cavalier rentre, c5 frappe"
       ],
       [
        "",
        "4.Fg5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9d338c178\">4…dxe4</a>",
        "Variante Burn"
       ],
       [
        "Burn",
        "5.Cxe4 / 5.Fxf6 / 5.f3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9ccab60f9\">5…Fe7</a> / <a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a> / <a class=\"lien-var\" href=\"#\" data-var=\"q7a0932fc1\">5…c5</a>",
        "Voir l'explication"
       ],
       [
        "2.Cf3 d5 3.e5 c5",
        "4.Fb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Fd7</a>",
        "Échange ton mauvais fou"
       ],
       [
        "2.Cf3 d5 3.Cc3 Cf6",
        "4.d3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">4…c5</a>",
        "Espace, puis …d4 contre Fg5"
       ],
       [
        "2.Fc4 d5",
        "3.exd5 / 3.Fb3 / 3.Fb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4c0712b27\">3…exd5</a> / <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3…dxe4</a> / <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3…c6</a>",
        "Le fou se fait chasser"
       ]
      ]
     },
     {
      "t": "h",
      "html": "L'arbre complet"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Trois réflexes couvrent presque tout.</strong> …d5 au deuxième coup, toujours. Contre e5 : …c5, puis …Cc6 et …Db6. Contre l'échange : développe en miroir (…Cf6, …Fd6, …0-0), mais …Fe7 contre Fg5 et contre De2+."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "La philosophie",
    "blocs": [
     {
      "t": "h",
      "html": "Attaquer la base de la chaîne"
     },
     {
      "t": "p",
      "html": "Après 3.e5, les pions blancs d4 et e5 forment une chaîne qui pointe vers ton roi. Une chaîne de pions se défend par l'arrière : le pion e5 est protégé par d4. Si d4 tombe ou s'échange, e5 devient fragile. C'est pour ça que tu attaques la base, d4, et pas la pointe."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5"
      ],
      "fleches": [
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "La chaîne blanche d4-e5. Sa base, d4, est la cible : …c5 tout de suite. Plus tard, …f6 pourra aussi attaquer la pointe e5.",
      "marques": [
       "d4!",
       "e5",
       "c7",
       "f7"
      ]
     },
     {
      "t": "h",
      "html": "Compter les attaquants"
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "fleches": [
       [
        "c5d4",
        "v"
       ],
       [
        "c6d4",
        "v"
       ],
       [
        "b6b2",
        "v"
       ]
      ],
      "legende": "Le pion c5 et le cavalier c6 attaquent d4. La dame b6 vise b2 ; dès que le pion c5 aura pris en d4, elle frappera aussi d4 par la diagonale b6-d4.",
      "marques": [
       "c5",
       "c6",
       "d4!",
       "b6"
      ]
     },
     {
      "t": "p",
      "html": "Dans l'avance, toute la partie tourne autour de d4. Avant chaque coup, compte : combien de mes pièces attaquent d4, combien de pièces blanches le défendent ? Si tu as un attaquant de plus, il tombe. Attention à une exception, la plus célèbre de la française : le piège Fb5+ (voir Les pièges) et sa parade, <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Fd7 !</a>"
     },
     {
      "t": "h",
      "html": "Ton problème : le fou c8"
     },
     {
      "t": "p",
      "html": "Le pion e6 enferme ton fou de cases blanches. C'est le prix de la solidité de la française. Trois façons de régler le problème dès l'ouverture (le milieu de jeu en ajoute d'autres) :"
     },
     {
      "t": "liste",
      "items": [
       "<strong>L'échanger.</strong> Contre Fb5+, interpose …Fd7 (<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Fd7</a>) : si les blancs prennent, ton mauvais fou disparaît.",
       "<strong>Le sortir par d7.</strong> Dans l'avance, …Fd7 dégage la case c8 pour ta tour (…Tc8) et prépare parfois …Fb5 pour l'échanger.",
       "<strong>Profiter de l'échange.</strong> Après 3.exd5 exd5, la diagonale c8-h3 s'ouvre : ton fou devient un bon fou (…Fg4, …Ff5)."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "Le cavalier qui rentre en d7"
     },
     {
      "t": "p",
      "html": "Dans le classique, 4.e5 chasse ton cavalier f6. Rentrer en d7 ressemble à un recul, mais c'est une case active : de là, le cavalier soutient …c5, peut aller en b6, ou revenir en e5 quand le pion blanc tombe. Ce qui compte, c'est le coup suivant : …c5, qui attaque la base de la chaîne. Le cavalier d7 et le pion c5 travaillent ensemble."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3"
      ],
      "fleches": [
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "Après 4…Cfd7, le plan : …c5 (flèche verte) contre d4. Ton cavalier d7 surveille déjà e5 : si d4 disparaît, e5 tombe.",
      "marques": [
       "d4!",
       "d7",
       "e5!"
      ]
     },
     {
      "t": "h",
      "html": "L'échange : jouer en miroir"
     },
     {
      "t": "p",
      "html": "Après 3.exd5 exd5, les pions sont symétriques et personne n'a d'avantage. Développe exactement comme les blancs : cavaliers, fou en d6, roque, une tour en e8 sur la colonne ouverte. Ton fou c8 est libre : …Fg4 cloue souvent le cavalier f3. Seul piège à connaître : quand un fou blanc arrive en g5, ton fou va en e7, pas en d6 (<a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Fd6 ?</a>)."
     },
     {
      "t": "h",
      "html": "Le roque"
     },
     {
      "t": "p",
      "html": "Dans la plupart des lignes, tu roques côté roi après …Fe7 ou …Fd6. Dans l'avance, ne te presse pas : ton jeu est à l'aile dame, et ton roi peut attendre un peu au centre tant que le centre reste fermé."
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Forces et faiblesses",
    "blocs": [
     {
      "t": "p",
      "html": "Avant le milieu de jeu, fais le point : ce que la française te donne, ce qu'elle te coûte, et ce que les blancs vont essayer contre toi."
     },
     {
      "t": "h",
      "html": "Ce que la française te donne"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Une position solide.</strong> Tes pions e6 et d5 forment un mur. Le point f7, la cible préférée des débutants, est à l'abri : ton pion e6 bouche la diagonale c4-f7, celle du coup du berger.",
       "<strong>Un plan clair.</strong> Quand les blancs poussent e5, leurs pions d4 et e5 forment une <em>chaîne</em> : des pions en diagonale qui se protègent l'un l'autre. Tu attaques sa base, d4, avec …c5, …Cc6 et …Db6. Le même plan sert dans l'avance et dans le classique avec 4.e5.",
       "<strong>Du jeu à l'aile dame.</strong> Après …cxd4, la colonne c s'ouvre pour ta tour, et ta dame b6 vise b2 et d4.",
       "<strong>Des adversaires qui en font trop.</strong> Chez les joueurs de club, les blancs poussent e5, puis attaquent ton roi sans finir leur développement. Le pion d4 tombe souvent, et leurs attaques ne marchent pas toujours.",
       "<strong>Peu de théorie.</strong> Trois réflexes (…d5, …c5, le développement en miroir dans l'échange) couvrent presque tout."
      ]
     },
     {
      "t": "h",
      "html": "Ses points faibles"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Le mauvais fou c8.</strong> Un fou est « mauvais » quand tes propres pions bouchent ses diagonales. Ton fou c8 va sur les cases blanches, et tes pions e6 et d5 sont sur des cases blanches : il est enfermé.",
       "<strong>Moins d'espace.</strong> Avec un pion en e5, les blancs contrôlent f6 et d6. Ton cavalier g8 ne peut pas aller en f6, et ton roi a un défenseur de moins.",
       "<strong>Des attaques sur ton roque.</strong> Le pion e5 chasse le cavalier qui défendrait ton roi depuis f6. Les pièces blanches visent alors h7 et g7.",
       "<strong>Il faut agir.</strong> Si tu oublies …c5, tu n'as plus de plan, et les blancs t'étouffent."
      ]
     },
     {
      "t": "h",
      "html": "Ce que cherchent les blancs"
     },
     {
      "t": "p",
      "html": "Deux idées, souvent en même temps : garder le pion e5, qui leur donne de l'espace, et attaquer ton roi."
     },
     {
      "t": "liste",
      "items": [
       "<strong>L'espace avec e5.</strong> Ils soutiennent e5 avec Cf3, f4 ou Fe3, et d4 avec c3.",
       "<strong>Le fou d3 vers h7.</strong> En d3, le fou vise ton pion h7. S'il n'y a plus de cavalier en f6, seul ton roi défend h7.",
       "<strong>La dame en g4 ou en h5.</strong> Dg4 attaque g7, Dh5 vise h7.",
       "<strong>La poussée h4-h5</strong> et un cavalier en g5 pour renforcer l'attaque.",
       "<strong>Le sacrifice Fxh7+</strong>, le « sacrifice grec » (on dit aussi « cadeau grec ») : le fou se sacrifie en h7, le cavalier saute en g5 avec échec, la dame arrive en h5. Il marche quand ton roi a roqué, que rien d'autre que lui ne défend h7, et qu'aucun de tes fous ou cavaliers ne garde g5."
      ]
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3"
      ],
      "fleches": [
       [
        "d3h7",
        "g"
       ],
       [
        "f3g5",
        "g"
       ],
       [
        "d1h5",
        "g"
       ],
       [
        "e5f6",
        "r"
       ]
      ],
      "legende": "Classique après 4.e5 Cfd7 5.Cf3 c5 6.dxc5 Cc6 7.Ff4 Fxc5 8.Fd3. Tout est prêt pour une attaque : le fou d3 vise h7, le cavalier f3 peut sauter en g5, la dame peut venir en h5 dès que le cavalier f3 a bougé, et le pion e5 interdit f6 à tes cavaliers. Ton fou est en c5 : seule ta dame garde g5, et le fou f4 protège la case.",
      "marques": [
       "d3",
       "f3",
       "h7!",
       "c5"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3"
      ],
      "coups": [
       "O-O",
       "Bxh7+",
       "Kxh7",
       "Ng5+",
       "Kg8",
       "Qh5"
      ],
      "legendes": [
       "<span class=\"mv bad\">8…0-0</span> ? Tu mets ton roi à l'abri… exactement là où les blancs attaquent. Avant ce coup, la position était égale.",
       "Le sacrifice grec : le fou se sacrifie en h7.",
       "Tu prends. Refuser avec 9…Rh8 limite la casse, mais les blancs gardent un pion de plus et l'attaque (+1,9).",
       "Le cavalier saute en g5 avec échec : seule ta dame garde g5, et le fou f4 protège le cavalier.",
       "Le roi recule. 10…Rg6 résiste un peu mieux (+2,1 au lieu de +3,1), mais ton roi reste en plein air.",
       "La dame arrive en h5 et menace Dh7 mat."
      ],
      "fin": "Pour éviter le mat, tu dois rendre ta dame : 11…Dxg5 12.Dxg5, et Stockfish donne +3,2. Si 11…Te8, c'est mat en cinq coups (12.Dxf7+ Rh8 13.Dh5+ Rg8 14.Dh7+ Rf8 15.Dh8+ Re7 16.Dxg7#).",
      "titre": "Ce que cherchent les blancs : le sacrifice grec",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [],
      "marques": [
       [
        "g8",
        "d3",
        "h7!"
       ],
       [
        "h7!",
        "g8"
       ],
       [
        "h7!"
       ],
       [
        "g5",
        "d8",
        "f4",
        "h7!"
       ],
       [
        "g8!"
       ],
       [
        "h5",
        "g5",
        "h7!"
       ],
       [
        "d8!",
        "g5",
        "h5",
        "f7!"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Avant de roquer, regarde le fou d3, la case g5 et la dame. Ici, il fallait d'abord jouer …h6, …a6 ou …Fe7 (le fou garde alors g5) : la position restait égale."
     },
     {
      "t": "h",
      "html": "Les erreurs typiques chez les joueurs de club"
     },
     {
      "t": "p",
      "html": "Elles reviennent dans beaucoup de parties entre 1000 et 1600. Clique sur un coup pour voir la position ; le bon coup est aussi un quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Sortir le cavalier en f6 contre l'avance.</strong> Après 3.e5, <a class=\"lien-var\" href=\"#\" data-var=\"q3b8890834\">3…Cf6 ??</a> perd une pièce : le pion e5 contrôle f6. Le réflexe, c'est <a class=\"lien-var\" href=\"#\" data-var=\"q905fad9b4\">3…c5</a>, puis …Cc6 ; ton cavalier g8 sortira par e7 ou h6.",
       "<strong>Prendre d4 trop tôt avec le cavalier.</strong> Dans l'avance avec Fd3, <a class=\"lien-var\" href=\"#\" data-var=\"q05ab1a36a\">7…Cxd4 ??</a> tombe dans le piège Fb5+. Joue d'abord …Fd7 : <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Fd7 !</a>.",
       "<strong>Oublier g7 contre Dg4.</strong> Après 4.dxc5 Fxc5 5.Dg4, <a class=\"lien-var\" href=\"#\" data-var=\"qf6a0cad58\">5…Cc6 ??</a> perd le pion g7 et au moins une pièce. Le bon coup : <a class=\"lien-var\" href=\"#\" data-var=\"q0644bbae2\">5…Ce7</a>, qui laisse ta tour défendre la colonne g.",
       "<strong>Roquer sans défenseur.</strong> Quand le pion e5 a chassé ton cavalier de f6, <a class=\"lien-var\" href=\"#\" data-var=\"qfbac92fb5\">8…0-0 ?</a> offre le sacrifice grec (échiquier ci-dessus). Avant de roquer, assure-toi qu'un fou ou un cavalier garde g5 (ton fou en e7, par exemple).",
       "<strong>Reprendre avec la dame dans la Burn.</strong> Après 4.Fg5 dxe4 5.Fxf6, <a class=\"lien-var\" href=\"#\" data-var=\"q5474b2037\">5…Dxf6</a> fait perdre du temps à ta dame. Reprends avec le pion : <a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a>.",
       "<strong>Laisser le fou c8 enfermé.</strong> Contre Fb5+, <a class=\"lien-var\" href=\"#\" data-var=\"qb0a601108\">4…Cc6 ?!</a> garde ton mauvais fou. Interpose plutôt le fou : <a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Fd7</a>, pour l'échanger."
      ]
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "Le milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Ton répertoire mène à trois familles de positions. Pour chacune, ce qui compte, c'est la <em>structure de pions</em> : le dessin que forment les pions, qui bougent peu et décident des plans. Une <em>rupture</em>, c'est un coup de pion qui attaque les pions adverses pour ouvrir le jeu là où tu es fort."
     },
     {
      "t": "h",
      "html": "1. L'avance : tout se joue sur d4"
     },
     {
      "t": "p",
      "html": "Les pions blancs d4-e5 te prennent de l'espace. Leur base, d4, est la cible. Après …cxd4 cxd4, plus aucun pion ne protège d4 : seules les pièces le défendent. Ton travail : amener plus d'attaquants que les blancs n'ont de défenseurs."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Be2",
       "cxd4",
       "cxd4",
       "Nge7"
      ],
      "fleches": [
       [
        "e7f5",
        "v"
       ],
       [
        "c6d4",
        "v"
       ],
       [
        "b6d4",
        "v"
       ]
      ],
      "legende": "Après 6.Fe2 cxd4 7.cxd4 Cge7. Le cavalier e7 ira en f5 : trois attaquants sur d4 (cavaliers c6 et f5, dame b6) contre deux défenseurs, le cavalier f3 et la dame d1.",
      "marques": [
       "d4!",
       "e7",
       "c6",
       "b6"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Be2"
      ],
      "coups": [
       "cxd4",
       "cxd4",
       "Nge7",
       "O-O",
       "Nf5",
       "Nc3",
       "Nfxd4",
       "Nxd4",
       "Qxd4"
      ],
      "legendes": [
       "Tu prends en d4. Quand le pion c3 aura repris, plus aucun pion ne soutiendra d4.",
       "Les blancs reprennent.",
       "Le cavalier g8 prend la route de f5 (…Ch6 puis …Cf5 se joue aussi).",
       "<span class=\"mv bad\">8.0-0</span> ? Les blancs roquent, mais d4 n'a que deux défenseurs.",
       "Troisième attaquant sur d4 : il y en a maintenant trois. Stockfish passe de +0,4 à −0,9.",
       "Les blancs développent… et oublient de compter.",
       "<span class=\"mv good\">9…Cfxd4</span> ! Prends avec le cavalier f5. Celui de c6 reste en place : il bouche la diagonale de ton roi (pas de Fb5+) et vise e5. Après 9…Ccxd4 ?!, 10.Fd3 attaquerait le cavalier f5, et les blancs auraient assez de jeu pour leur pion (−0,1).",
       "Les blancs reprennent.",
       "Ta dame reprend : un pion de plus, et elle attaque e5 et la dame d1."
      ],
      "fin": "Stockfish : −0,8. Le pion d4 avait trois attaquants pour deux défenseurs : il est tombé. Si les blancs avaient défendu d4 avec 9.Fe3, ta dame aurait pris b2 : le fou c1 ne le protégeait plus (−1,2).",
      "titre": "Avance : trois attaquants contre deux",
      "quiz": [
       "q1e1753281"
      ],
      "marques": [
       [
        "d4!",
        "c3"
       ],
       [
        "d4"
       ],
       [
        "e7",
        "f5"
       ],
       [
        "d4!",
        "f3",
        "d1"
       ],
       [
        "d4!",
        "f5",
        "c6",
        "b6"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "d4!",
        "c6",
        "e5!"
       ],
       [
        "d4"
       ],
       [
        "d4",
        "e5!",
        "d1!"
       ],
       [
        "d4",
        "b2!",
        "c1"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Quand d4 est bien défendu, ou quand il a disparu (après 4.dxc5), change de cible : …f6 attaque la pointe e5. Après exf6, la colonne f s'ouvre pour ta tour, et tes pions e6 et d5 retrouvent de l'air. Attention : le pion e6 devient plus faible, garde-le défendu."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5"
      ],
      "coups": [
       "dxc5",
       "Bxc5",
       "Nf3",
       "Nc6",
       "Bd3",
       "f6",
       "Qe2",
       "fxe5",
       "Nxe5",
       "Nxe5",
       "Qxe5",
       "Nf6"
      ],
      "legendes": [
       "Les blancs prennent en c5 : la chaîne n'a plus de base.",
       "Le fou reprend en se développant.",
       "Le cavalier défend e5.",
       "Tu attaques e5.",
       "Le fou vise h7.",
       "<span class=\"mv good\">6…f6</span> ! Sans pion d4, e5 n'a que le cavalier f3 pour le défendre. Tu l'attaques une deuxième fois.",
       "La dame soutient e5.",
       "Tu prends.",
       "Le cavalier reprend.",
       "Tu échanges.",
       "La dame reprend : le pion e5 a disparu.",
       "Tu développes. Ton centre d5-e6 est libre, et ta tour ira sur la colonne f après le roque."
      ],
      "fin": "Stockfish : −0,3. Le pion e5 gênait toutes tes pièces ; maintenant, c'est toi qui as le centre.",
      "titre": "Avance 4.dxc5 : la rupture …f6",
      "quiz": [
       "q3bfed4174"
      ],
      "marques": [
       [
        "c5",
        "e5!"
       ],
       [
        "c5!"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c6",
        "e5!"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "f6",
        "e5!",
        "f3",
        "c6"
       ],
       [
        "e2",
        "e5"
       ],
       [
        "e5!"
       ],
       [
        "e5"
       ],
       [
        "e5"
       ],
       [
        "e5"
       ],
       [
        "f6",
        "d5",
        "e6",
        "h8"
       ],
       [
        "d5",
        "e6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. L'échange : ce sont les pièces qui décident"
     },
     {
      "t": "p",
      "html": "Après 3.exd5 exd5, les pions sont symétriques et la colonne e est ouverte. Personne n'a de faiblesse : le camp le plus actif l'emporte. Bonne nouvelle : ton fou c8 est libre, la diagonale c8-h3 est ouverte."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6",
       "O-O",
       "O-O",
       "Bg5"
      ],
      "fleches": [
       [
        "f8e8",
        "v"
       ],
       [
        "c8g4",
        "v"
       ]
      ],
      "legende": "Ta tour va sur la colonne ouverte (…Te8), ton fou c8 sort en g4 : il cloue le cavalier f3 contre la dame d1 (le cavalier ne peut pas bouger sans laisser prendre la dame).",
      "marques": [
       "c8",
       "f3!",
       "d1",
       "f8"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6",
       "O-O",
       "O-O",
       "Bg5",
       "Bg4",
       "Nbd2",
       "Re8"
      ],
      "legendes": [
       "Développement.",
       "Toi aussi.",
       "Le fou vise h7.",
       "En miroir : ton fou vise h2.",
       "Les blancs roquent.",
       "Toi aussi.",
       "Le fou cloue ton cavalier f6.",
       "Tu fais pareil : ton fou cloue le cavalier f3.",
       "Le cavalier sort.",
       "<span class=\"mv good\">8…Te8</span> : la tour prend la colonne ouverte."
      ],
      "fin": "Stockfish : +0,3, la position est équilibrée, mais toutes tes pièces jouent. Ensuite : …Cbd7 (ou …Cc6), …c6 pour solidifier d5, …Dc7. Si la tour blanche vient en e1, échange les tours sur la colonne e.",
      "titre": "Échange : les pièces d'abord",
      "quiz": [
       "qe1ac3c984"
      ],
      "marques": [
       [],
       [
        "f6"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "d6",
        "h2!"
       ],
       [
        "g1"
       ],
       [
        "g8"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "g4",
        "f3!",
        "d1"
       ],
       [
        "d2"
       ],
       [
        "e8"
       ],
       [
        "b8",
        "d5",
        "e8",
        "f1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. Après …dxe4 : le classique et la Burn"
     },
     {
      "t": "p",
      "html": "Avec 4…dxe4, tu échanges ton pion d5 contre le pion e4. Les blancs gardent d4, toi e6 : le centre s'ouvre. En échange, tes pièces respirent. Après Fxf6, tu as la <em>paire de fous</em> (tes deux fous contre un fou et un cavalier), et ton fou f6 vise d4 et b2. Ta rupture : …c5, qui attaque d4."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O",
       "Bc4",
       "c5"
      ],
      "fleches": [
       [
        "c5d4",
        "v"
       ],
       [
        "f6d4",
        "v"
       ],
       [
        "d8d4",
        "v"
       ]
      ],
      "legende": "Burn, après 8.Fc4 c5. Compte sur d4 : ton pion c5, ton fou f6 et ta dame d8 l'attaquent ; le cavalier f3 et la dame d1 le défendent.",
      "marques": [
       "d4!",
       "c5",
       "f6",
       "d8"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O"
      ],
      "coups": [
       "Bc4",
       "c5",
       "c3",
       "cxd4",
       "cxd4",
       "Nc6"
      ],
      "legendes": [
       "Le fou vise e6.",
       "<span class=\"mv good\">8…c5</span> ! La rupture : tu attaques d4.",
       "Les blancs soutiennent d4.",
       "Tu échanges.",
       "Les blancs reprennent avec le pion : d4 est maintenant <em>isolé</em>, aucun pion voisin (c ou e) ne peut le défendre.",
       "Le cavalier attaque d4 à son tour : trois attaquants (fou f6, cavalier c6, dame d8)."
      ],
      "fin": "Stockfish : −0,6. Un pion isolé est une cible : on le bloque, on l'attaque, il finit par tomber. L'exercice 8 montre ce qui arrive si les blancs le défendent mal.",
      "titre": "Burn : …c5 et le pion isolé",
      "quiz": [
       "q4d544098b"
      ],
      "marques": [
       [
        "c4",
        "e6!"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4"
       ],
       [
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "c6",
        "d4!",
        "f6",
        "d8"
       ],
       [
        "d4!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Le fou c8 : quatre façons de le réveiller"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…b6 puis …Fb7 ou …Fa6.</strong> Surtout après …dxe4 : en b7, le fou vise la grande diagonale vers g2 et h1, dès que les pièces du centre s'en vont ; en a6, il propose l'échange du fou blanc f1 ou d3.",
       "<strong>…Fd7 puis …Fb5.</strong> Dans l'avance : en b5, ton fou propose l'échange du bon fou blanc (celui de d3 ou e2). Ton problème disparaît, et le fou qui visait h7 aussi.",
       "<strong>…f6 puis …e5.</strong> Après la rupture …f6 et l'échange en f6, le pion e6 peut avancer : la diagonale c8-h3 s'ouvre.",
       "<strong>L'échange contre Fb5+.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Fd7</a> : si les blancs prennent, ton mauvais fou a disparu."
      ],
      "num": true
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O",
       "Qd2",
       "b6",
       "O-O-O",
       "Bb7"
      ],
      "fleches": [
       [
        "b7e4",
        "v"
       ],
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "Burn : 8.Dd2 b6 9.0-0-0 Fb7. Le fou c8 est devenu une pièce active : il attaque le cavalier e4. Et après …c5, ton fou f6 frappera d4 : si ce pion disparaît, sa diagonale s'ouvrira vers b2, à côté du roi blanc.",
      "marques": [
       "b7",
       "e4!",
       "f6",
       "d4"
      ]
     },
     {
      "t": "h",
      "html": "Défendre ton roi"
     },
     {
      "t": "p",
      "html": "Les blancs vont attaquer ton roque. Pas de panique : une attaque a besoin de cases et de pièces. Quelques règles :"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Garde g5.</strong> Avec un fou en e7 ou ta dame en f6, le sacrifice grec Fxh7+ ne marche plus (exercice 6).",
       "<strong>Un cavalier en f5 vaut de l'or.</strong> Il attaque d4, et il bouche la diagonale du fou d3 vers h7.",
       "<strong>Ne roque pas trop vite dans l'avance.</strong> Tant que le centre est fermé, ton roi est bien en e8. Roque quand tes pièces sont prêtes à le défendre.",
       "<strong>Contre Dg4 : g7 d'abord.</strong> …Ce7 puis …Tg8, ou …Rf8. Si la dame prend g7 et h7, elle s'éloigne : ta dame et ton fou attaquent f2 (exercice 4).",
       "<strong>Contre-attaque au centre.</strong> Une attaque sur l'aile se punit souvent au centre : …c5, …cxd4, …f6 ouvrent le jeu là où tes pièces sont fortes."
      ]
     },
     {
      "t": "h",
      "html": "Où placer tes pièces"
     },
     {
      "t": "table",
      "entetes": [
       "Pièce",
       "Case",
       "Pourquoi"
      ],
      "lignes": [
       [
        "Pion c",
        "c5, puis …cxd4",
        "Attaque la base d4 et ouvre la colonne c"
       ],
       [
        "Cavalier b8",
        "c6",
        "Attaque d4 ; et e5 dès que d4 a disparu"
       ],
       [
        "Cavalier g8",
        "e7 puis f5 (avance) ; f6 puis d7 (classique)",
        "En f5 : attaque d4 et protège ton roque. Jamais en f6 contre un pion e5"
       ],
       [
        "Dame",
        "b6 (avance), c7",
        "b6 vise d4 et b2. Dans la Burn, c'est ton fou qui s'installe en f6 (après Fxf6 Fxf6), pas ta dame : il vise d4 et garde g5"
       ],
       [
        "Fou f8",
        "e7 ; d6 dans l'échange ; c5 après dxc5",
        "En e7, il garde g5 contre Fxh7+"
       ],
       [
        "Fou c8",
        "d7 puis b5 ; b7 après …b6 ; g4 dans l'échange",
        "Échanger ou activer ton mauvais fou"
       ],
       [
        "Tours",
        "c8 (avance), e8 (échange), d8 (Burn)",
        "Sur la colonne ouverte, ou face au pion d4"
       ],
       [
        "Roi",
        "0-0 quand g5 et h7 sont gardés",
        "Dans l'avance, il peut attendre en e8"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les ruptures, et quand les jouer"
     },
     {
      "t": "table",
      "entetes": [
       "Rupture",
       "Dans",
       "Quand",
       "Ce qu'elle donne"
      ],
      "lignes": [
       [
        "…c5",
        "Avance, classique 4.e5, Burn",
        "Tout de suite (au 3e ou au 5e coup), ou après …0-0 dans la Burn",
        "Attaque la base d4"
       ],
       [
        "…cxd4",
        "Avance",
        "Quand tes pièces sont prêtes à frapper d4 (Cc6, Db6, Cf5)",
        "Ouvre la colonne c, prive d4 de pion défenseur"
       ],
       [
        "…f6",
        "Avance (surtout après dxc5), classique 4.e5",
        "Quand d4 est trop bien défendu ou a disparu",
        "Attaque la pointe e5, ouvre la colonne f"
       ],
       [
        "…e5",
        "Burn, classique après …dxe4",
        "Quand tes pièces contrôlent e5",
        "Libère le fou c8, frappe d4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>En une phrase.</strong> Compte les attaquants et les défenseurs de d4 avant chaque coup ; si d4 tient, frappe e5 avec …f6 ; et avant de roquer, vérifie que g5 et h7 sont gardés."
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "Les pièges",
    "blocs": [
     {
      "t": "p",
      "html": "Deux sortes de pièges : ceux que tu tends, où les blancs perdent du matériel s'ils jouent le coup naturel, et ceux qu'on te tend, à connaître pour ne pas tomber dedans. Tous ont été vérifiés avec Stockfish. Le quiz de chaque piège te demande le bon coup : la punition quand l'adversaire se trompe, la parade quand c'est toi qui es visé."
     },
     {
      "t": "h",
      "html": "Ceux que tu tends"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7"
      ],
      "coups": [
       "Nf3",
       "Nxe4",
       "Bxe7",
       "Qxe7"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Cf3</span> ?? Les blancs développent… et oublient que leur cavalier e4 n'est pas défendu.",
       "<span class=\"mv good\">6…Cxe4</span> ! Ton cavalier n'est plus cloué (le fou e7 protège la dame) : il prend.",
       "Les blancs échangent les fous…",
       "…et tu as une pièce de plus."
      ],
      "fin": "Stockfish : −4,1. Après 5…Fe7, regarde toujours si le cavalier e4 est défendu.",
      "titre": "Burn : 6.Cf3 ?? Cxe4",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q417c44d8e"
      ],
      "marques": [
       [
        "e4!",
        "f6"
       ],
       [
        "f6",
        "e7",
        "d8",
        "e4!"
       ],
       [],
       [
        "e4"
       ],
       [
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "coups": [
       "Be3",
       "Qxb2"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Fe3</span> ? Le fou défend d4… mais il ne défend plus b2.",
       "<span class=\"mv good\">6…Dxb2</span> ! Un pion gratuit, et ta dame menace la tour a1."
      ],
      "fin": "Stockfish : −1,2. Avant de prendre en b2, vérifie toujours que ta dame pourra ressortir.",
      "titre": "Avance : 6.Fe3 ? Dxb2",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q40330eae4"
      ],
      "marques": [
       [
        "e3",
        "d4",
        "b2!",
        "b6"
       ],
       [
        "b2!",
        "a1!"
       ],
       [
        "b2",
        "a1!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "Nf3",
       "Nc6",
       "Be3"
      ],
      "coups": [
       "cxd4",
       "Nxd4",
       "Nxe5"
      ],
      "legendes": [
       "Tu prends en d4.",
       "<span class=\"mv bad\">6.Cxd4</span> ? Le cavalier reprend, mais il ne défend plus e5.",
       "<span class=\"mv good\">6…Cxe5</span> : un pion central gratuit."
      ],
      "fin": "Stockfish : −1,4. La bonne reprise pour les blancs était <a class=\"lien-var\" href=\"#\" data-var=\"q255883eed\">6.Fxd4</a> (−0,6).",
      "titre": "Avance : 5.Fe3 cxd4 6.Cxd4 ?",
      "couleurs": [
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "qd7776a221"
      ],
      "marques": [
       [
        "d4!"
       ],
       [
        "d4",
        "e5!",
        "c6"
       ],
       [
        "e5!"
       ],
       [
        "e3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5"
      ],
      "coups": [
       "Bd3",
       "cxd4",
       "Nxd4",
       "Nxe5"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Fd3</span> ? Développement naturel, mais d4 va tomber.",
       "Tu prends en d4, et ton pion attaque le cavalier c3.",
       "Les blancs reprennent avec le cavalier f3… qui défendait e5.",
       "<span class=\"mv good\">7…Cxe5</span> : ton cavalier d7 prend e5 et attaque le fou d3."
      ],
      "fin": "Un pion de plus (−1,1). Retiens le lien : quand le cavalier f3 quitte sa case, le pion e5 perd son défenseur, et ton cavalier d7 est là pour le prendre.",
      "titre": "Classique : 6.Fd3 ? cxd4",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q23cf26d7c"
      ],
      "marques": [
       [
        "d3",
        "d4!"
       ],
       [
        "d4",
        "c3!"
       ],
       [
        "f3",
        "e5!",
        "d7"
       ],
       [
        "e5!",
        "d3!"
       ],
       [
        "e5",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Bc4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Bxd5",
       "Qxd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">4.Fxd5</span> ?? Le pion d5 a l'air de pendre…",
       "…mais ta dame le défendait. Une pièce de plus."
      ],
      "fin": "Stockfish : −4,9. Ça arrive plus souvent qu'on ne croit entre 1000 et 1600.",
      "titre": "2.Fc4 : 4.Fxd5 ??",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q6631cd413"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d8",
        "d5!"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Bg5",
       "Qxg5"
      ],
      "legendes": [
       "<span class=\"mv bad\">3.Fg5</span> ?? Le fou vient attaquer ta dame… sur une case que ta dame contrôle.",
       "Prends-le. Une pièce de plus (−4,6)."
      ],
      "fin": "Ça a l'air trop beau, mais ça se voit : vérifie toujours si la pièce qui t'attaque est défendue.",
      "titre": "3.Fg5 ??",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q837fb5f81"
      ],
      "marques": [
       [
        "g5!",
        "d8"
       ],
       [
        "g5!"
       ],
       [
        "g5"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Ceux qu'on te tend"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Bd3",
       "cxd4",
       "cxd4"
      ],
      "coups": [
       "Nxd4",
       "Nxd4",
       "Qxd4",
       "Bb5+"
      ],
      "legendes": [
       "<span class=\"mv bad\">7…Cxd4</span> ?? Tout semble compté : d4 a l'air de tomber.",
       "Les blancs reprennent.",
       "<span class=\"mv bad\">8…Dxd4</span> ? Tu reprends, et ta dame se retrouve sur la colonne d, en face de la dame blanche…",
       "…cachée derrière le fou d3. Le fou s'en va avec échec et découvre la dame d1, qui attaque la tienne. Tu dois parer l'échec, et ta dame tombe."
      ],
      "fin": "Stockfish : +6,8 pour les blancs. C'est le piège le plus célèbre de l'avance. Contre 6.Fd3, joue <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Fd7 !</a> (0,0) : ton fou couvre b5. Après 8.0-0, 8…Cxd4 gagne alors le pion pour de bon (−0,3).",
      "titre": "Avance : le piège Fb5+",
      "couleurs": [
       "r",
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q621dcb38f"
      ],
      "marques": [
       [
        "d4!",
        "c6",
        "b6"
       ],
       [],
       [
        "d4!",
        "d1"
       ],
       [
        "d3",
        "d1",
        "d4!",
        "e8!"
       ],
       [
        "d4!",
        "d1",
        "b5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Bb5",
       "Qb6"
      ],
      "coups": [
       "Bxc6+",
       "Bd7",
       "Bxd7+",
       "Kxd7"
      ],
      "legendes": [
       "Le fou prend ton cavalier, avec échec.",
       "<span class=\"mv bad\">6…Fd7</span> ?? Tu bouches l'échec… mais le fou c6 est toujours vivant.",
       "Il prend aussi ton fou, avec échec.",
       "Tu reprends, mais tu as perdu une pièce."
      ],
      "fin": "+5,4 pour les blancs. Après Fxc6+, reprends tout de suite : <a class=\"lien-var\" href=\"#\" data-var=\"q85034861e\">6…bxc6</a> (−0,7). <a class=\"lien-var\" href=\"#\" data-var=\"qd5032a2ba\">6…Dxc6</a> se joue aussi, mais c'est moins bon (0,0).",
      "titre": "Avance : après Fxc6+, reprends",
      "couleurs": [
       "g",
       "r",
       "g",
       "g"
      ],
      "quiz": [
       "q85034861e"
      ],
      "marques": [
       [
        "c6!",
        "e8!"
       ],
       [
        "d7!",
        "c6"
       ],
       [
        "d7!",
        "e8!"
       ],
       [],
       [
        "b7"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "dxc5",
       "Bxc5"
      ],
      "coups": [
       "Qg4",
       "Nc6",
       "Qxg7"
      ],
      "legendes": [
       "La dame attaque ton pion g7.",
       "<span class=\"mv bad\">5…Cc6</span> ?? Tu développes sans voir la menace.",
       "La dame prend g7 et attaque ta tour h8."
      ],
      "fin": "+3,9 pour les blancs. Contre 5.Dg4, joue <a class=\"lien-var\" href=\"#\" data-var=\"q0644bbae2\">5…Ce7</a> (−0,3). Si les blancs prennent quand même, <a class=\"lien-var\" href=\"#\" data-var=\"q85dc2f165\">6.Dxg7 Tg8 7.Dxh7 Db6</a> : ta dame et ton fou visent f2, et Stockfish te donne l'avantage (−0,5).",
      "titre": "4.dxc5 Fxc5 5.Dg4",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q0644bbae2",
       "q85dc2f165"
      ],
      "marques": [
       [
        "g4",
        "g7!"
       ],
       [
        "g4",
        "g7!"
       ],
       [
        "g7!",
        "h8!"
       ],
       [
        "g7",
        "h8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nc3",
       "Nf6",
       "Bg5"
      ],
      "coups": [
       "Bd6",
       "Nxd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…Fd6</span> ? Le coup de ton plan habituel… mais ici le cavalier f6 est cloué.",
       "Le cavalier blanc prend d5 : si 6…Cxd5, 7.Fxd8 prend ta dame."
      ],
      "fin": "Un pion de moins (+1,7). Contre Fg5 dans l'échange, joue toujours <a class=\"lien-var\" href=\"#\" data-var=\"q646d2d492\">5…Fe7</a>.",
      "titre": "Échange : 5…Fd6 ? contre Fg5",
      "couleurs": [
       "r",
       "g"
      ],
      "quiz": [
       "q646d2d492"
      ],
      "marques": [
       [
        "f6!",
        "g5",
        "d8"
       ],
       [
        "d5!",
        "f6",
        "g5",
        "d8!"
       ],
       [
        "d5"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "Les exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "Les règles de ton répertoire : …d5 au deuxième coup, …c5 contre la chaîne, développement en miroir dans l'échange. Voici les endroits où la règle ne s'applique pas, et pourquoi. Clique sur le coup à jouer pour le voir sur l'échiquier."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "La règle dirait",
       "Joue plutôt",
       "Pourquoi"
      ],
      "lignes": [
       [
        "Avance 3.e5",
        "Développer avec …Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q315c6f16d\">…c5 et …Cc6</a>",
        "Sur 3…Cf6 ??, 4.exf6 prend le cavalier (+3,7)"
       ],
       [
        "Avance 4.dxc5",
        "Développer d'abord",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1b98798b2\">4…Fxc5</a>",
        "Reprendre le pion en développant"
       ],
       [
        "2.Cf3 d5 3.e5 c5 4.Fb5+",
        "Développer avec …Cc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Fd7</a>",
        "Échange ton fou enfermé (−0,4 contre +0,4)"
       ],
       [
        "Échange + Fg5",
        "…Fd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q646d2d492\">…Fe7</a>",
        "Sinon Cxd5 gagne un pion"
       ],
       [
        "Échange 4.De2+ Fe7 5.Fg5",
        "…Cf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5…Cc6</a>",
        "Ton fou e7 est cloué sur ton roi par la dame : sur 5…Cf6, 6.Fxf6 et tu ne peux pas reprendre avec le fou"
       ],
       [
        "Burn 5.Fxf6",
        "Reprendre avec la dame",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a>",
        "Colonne g, paire de fous, …f5 avec gain de temps (−0,6 contre +0,2)"
       ],
       [
        "2.Cf3 d5 3.Cc3 Cf6 4.d3 c5 5.Fg5",
        "Déclouer avec …Fe7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">5…d4</a>",
        "Chasse le cavalier c3 (−0,7 contre −0,1)"
       ],
       [
        "2.Fc4 d5 3.Fb3",
        "Garder la tension",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3…dxe4</a>",
        "Le pion est gratuit (−0,8)"
       ],
       [
        "Avance 4.Cf3 Cc6 5.Fe3",
        "5…Db6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5…cxd4</a>",
        "Si 6.Cxd4 ?, 6…Cxe5 gagne un pion"
       ],
       [
        "2.De2 (rare)",
        "2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a>",
        "Sur 2…d5 3.exd5, tu ne peux pas reprendre avec le pion : le pion e6 est cloué, la reprise ouvrirait la colonne e entre la dame e2 et ton roi"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Le cas 2.De2"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6"
      ],
      "coups": [
       "Qe2",
       "d5",
       "exd5"
      ],
      "legendes": [
       "Une sortie de dame rare mais piégeuse.",
       "<span class=\"mv bad\">2…d5</span> ?! Le coup habituel…",
       "…et maintenant 3…exd5 est impossible : ce coup ouvrirait la colonne e entre la dame e2 et ton roi. Les blancs sont mieux (+0,3 à +0,5)."
      ],
      "fin": "Contre 2.De2, joue plutôt <a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a> (0,0), puis …Cc6 et …d6 ou …d5 plus tard. Ton roi ne doit pas rester sur la même colonne que la dame blanche quand cette colonne peut s'ouvrir.",
      "titre": "2.De2 : pas de …d5 tout de suite",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "qba48194ee"
      ],
      "marques": [
       [
        "e2"
       ],
       [],
       [
        "e2",
        "e6!",
        "e8"
       ],
       [
        "e2",
        "e8!"
       ]
      ]
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Exercices de milieu de jeu",
    "blocs": [
     {
      "t": "p",
      "html": "Huit positions tirées de ton répertoire, avec les noirs au trait. Chaque fois, il y a un coup clairement meilleur que les autres : Stockfish (profondeur 20) le place devant le deuxième meilleur coup d'au moins 0,8. Cherche d'abord le thème (d4, b2, f2, e5, g5…), puis le coup. Le bouton Quiz remet la position à zéro."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nxd4",
       "Nxd4",
       "Qxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Cxd4</span> ! Compte : d4 est attaqué par ton cavalier c6 et ta dame b6. Il n'a qu'un défenseur, le cavalier f3 : la dame d1 est bouchée par le fou d3. Et le piège Fb5+ ne marche plus, ton fou d7 couvre b5.",
       "Les blancs reprennent.",
       "Ta dame reprend : un pion de plus, au centre."
      ],
      "fin": "Stockfish : −0,8. La position venait de 6.Fd3 cxd4 7.cxd4 Fd7 8.Cc3 ? : deux attaquants contre un défenseur, le pion tombe. Les autres coups (…Tc8, …Cge7) laissent les blancs mieux (+0,8).",
      "titre": "Exercice 1 : compte les défenseurs de d4",
      "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 2 8",
      "quiz": [
       "q2817eb383"
      ],
      "marques": [
       [
        "d4!",
        "c6",
        "b6",
        "f3"
       ],
       [
        "d4"
       ],
       [
        "d4"
       ],
       [
        "d4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nf5"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Cf5</span> ! Le cavalier e7 vient attaquer d4 à son tour. Compte : trois attaquants (cavaliers c6 et f5, dame b6) contre deux défenseurs (cavalier f3, dame d1)."
      ],
      "fin": "Stockfish : −1,3, d4 va tomber. Les blancs ont perdu un temps avec 8.a3 au lieu de défendre d4 (après 6.Fe2 cxd4 7.cxd4 Cge7). Les autres coups, comme …Fd7 ou …a6, leur laissent le temps de respirer (+0,5 environ).",
      "titre": "Exercice 2 : un renfort pour l'attaque",
      "fen": "r1b1kb1r/pp2nppp/1qn1p3/3pP3/3P4/P4N2/1P2BPPP/RNBQK2R b KQkq - 0 8",
      "quiz": [
       "qf1aa155cc"
      ],
      "marques": [
       [
        "f5",
        "d4!",
        "c6",
        "b6"
       ],
       [
        "d4!",
        "a3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxb2"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Dxb2</span> ! Le fou e3 défend d4… mais il a quitté c1, d'où il défendait b2. Ta dame prend un pion et menace la tour a1."
      ],
      "fin": "Stockfish : −2,3. La dame ne craint rien : après 9.Cbd2, 9…Cb4 attaque le fou d3. Avant de prendre en b2, vérifie toujours que ta dame pourra ressortir. La position venait de 6.Fd3 cxd4 7.cxd4 Fd7 8.Fe3 ?",
      "titre": "Exercice 3 : le fou c1 a bougé",
      "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3BBN2/PP3PPP/RN1QK2R b KQkq - 2 8",
      "quiz": [
       "qb0af03074"
      ],
      "marques": [
       [
        "b2!",
        "e3",
        "a1!"
       ],
       [
        "b2",
        "d3!",
        "c6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf2+",
       "Kd1",
       "Bxg1"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Fxf2+</span> ! Ta dame b6 et ton fou c5 visaient f2, que seul le roi défendait. Le fou prend avec échec.",
       "Le roi doit bouger.",
       "<span class=\"mv good\">9…Fxg1</span> ! Le fou prend aussi le cavalier g1. Si 10.Txg1, ta dame reprend en g1."
      ],
      "fin": "Stockfish : −4,4. La dame blanche a pris g7 et h7 (5.Dg4 Ce7 6.Dxg7 Tg8 7.Dxh7 Db6), puis elle est revenue trop tard : 8.Dd3 ? ne défend pas f2. Pendant qu'elle mangeait des pions, elle ne protégeait plus rien.",
      "titre": "Exercice 4 : la dame blanche a fait un long voyage",
      "fen": "rnb1k1r1/pp2np2/1q2p3/2bpP3/8/3Q4/PPP2PPP/RNB1KBNR b KQq - 2 8",
      "quiz": [
       "qf0d0c9eca"
      ],
      "marques": [
       [
        "f2!",
        "c5",
        "b6",
        "e1"
       ],
       [
        "d1"
       ],
       [
        "g1!",
        "b6",
        "h1"
       ],
       [
        "d3",
        "g1"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "f6",
       "exf6",
       "Qxf6"
      ],
      "legendes": [
       "<span class=\"mv good\">11…f6</span> ! Il n'y a plus de pion d4 : la chaîne n'a plus de base. Tu attaques donc la pointe, e5, déjà visée par ton cavalier c6.",
       "Les blancs prennent.",
       "<span class=\"mv good\">12…Dxf6</span> ! La dame reprend et la colonne f s'ouvre : ta dame et ta tour f8 pèsent sur le cavalier f3 et sur f2, que ton fou b6 vise déjà."
      ],
      "fin": "Stockfish : −1,9. Ton roi a roqué, pas celui des blancs : la colonne f ouverte est pour toi. La position venait de 4.dxc5 Fxc5 5.Cd2 Cc6 6.Cb3 Fb6 7.Fb5 Ce7 8.Cf3 0-0 9.a4 a6 10.Fxc6 Cxc6 11.De2.",
      "titre": "Exercice 5 : la pointe de la chaîne",
      "fen": "r1bq1rk1/1p3ppp/pbn1p3/3pP3/P7/1N3N2/1PP1QPPP/R1B1K2R b KQ - 1 11",
      "quiz": [
       "q4084c4eed"
      ],
      "marques": [
       [
        "f6",
        "e5!",
        "c6"
       ],
       [
        "f6"
       ],
       [
        "f6",
        "f8",
        "f3!",
        "f2!"
       ],
       [
        "g8",
        "e1",
        "f8",
        "f6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Kxh7",
       "Ng5+",
       "Bxg5"
      ],
      "legendes": [
       "<span class=\"mv good\">10…Rxh7</span> ! Accepte le sacrifice. Refuser avec 10…Rh8 laisse aux blancs un pion de plus et ton roi ouvert (+1,3). Pour savoir si le sacrifice marche, regarde la suite.",
       "Le cavalier saute en g5 avec échec : c'est le plan des blancs.",
       "<span class=\"mv good\">11…Fxg5</span> ! Ton fou e7 garde g5 : il prend le cavalier. Si 12.Fxg5, 12…Dxg5."
      ],
      "fin": "Tu as deux pièces de plus pour un pion : Stockfish −5,1. Le sacrifice grec ne marche pas quand un de tes fous ou cavaliers garde g5. La position venait de 4.e5 Cfd7 5.Cf3 c5 6.dxc5 Cc6 7.Ff4 Cxc5 8.Fd3 Fe7 9.0-0 0-0 10.Fxh7+ ?",
      "titre": "Exercice 6 : le sacrifice grec",
      "fen": "r1bq1rk1/pp2bppB/2n1p3/2npP3/5B2/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 10",
      "quiz": [
       "q9cbd2c570"
      ],
      "marques": [
       [
        "h7!"
       ],
       [
        "g5",
        "h7!"
       ],
       [
        "g5!",
        "e7",
        "f4",
        "d8"
       ],
       [
        "g5",
        "h7"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Compare avec le sacrifice grec de « Forces et faiblesses » : là, ton fou était en c5 et seule ta dame gardait g5, mais le fou f4 protégeait le cavalier."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">7…Dxd4</span> ! En reculant en d2, le cavalier a coupé la dame d1 de son pion d4. Plus rien ne défend d4 : ta dame le prend."
      ],
      "fin": "Un pion de plus, Stockfish : −1,6. Après …dxe4, le pion d4 est le point faible des blancs : chaque fois qu'une pièce bouge, demande-toi s'il est encore défendu. La position venait de 4.Fg5 dxe4 5.Fxf6 gxf6 6.Cxe4 f5 7.Cd2 ?",
      "titre": "Exercice 7 : le cavalier recule",
      "fen": "rnbqkb1r/ppp2p1p/4p3/5p2/3P4/8/PPPN1PPP/R2QKBNR b KQkq - 1 7",
      "quiz": [
       "q257a444ac"
      ],
      "marques": [
       [
        "d4!",
        "d2",
        "d1"
       ],
       [
        "d4",
        "d2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">11…Fxd4</span> ! Compte : d4 est attaqué trois fois (fou f6, cavalier c6, dame d8) et défendu deux fois (cavalier f3, dame d2). Le fou prend, et ta dame d8 le soutient."
      ],
      "fin": "Un pion de plus, Stockfish : −1,3. Si 12.Cxd4 Cxd4, la dame d2 ne peut pas reprendre : ta dame d8 garde d4. La position venait de la Burn (échiquier « …c5 et le pion isolé ») : 8.Fc4 c5 9.c3 cxd4 10.cxd4 Cc6 11.Dd2 ?",
      "titre": "Exercice 8 : le pion isolé",
      "fen": "r1bq1rk1/pp3ppp/2n1pb2/8/2BPN3/5N2/PP1Q1PPP/R3K2R b KQ - 2 11",
      "quiz": [
       "q6fe165385"
      ],
      "marques": [
       [
        "d4!",
        "f6",
        "c6",
        "d8"
       ],
       [
        "d4",
        "d8",
        "d2",
        "f3"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Parties modèles",
    "blocs": [
     {
      "t": "p",
      "html": "Deux parties construites pour la leçon : les coups adverses sont des erreurs typiques entre 1000 et 1600, et chacun de tes coups a été vérifié avec Stockfish. Ce ne sont pas des parties réelles. Elles montrent comment ton répertoire mène aux plans du milieu de jeu. Avance coup par coup et lis les explications."
     },
     {
      "t": "h",
      "html": "Partie 1 : l'avance, d4 puis tout le reste"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Bd3",
       "cxd4",
       "cxd4",
       "Bd7",
       "O-O",
       "Nxd4",
       "Nxd4",
       "Qxd4",
       "Nc3",
       "a6",
       "Qe2",
       "Ne7",
       "Be3",
       "Qxe5",
       "Rae1",
       "d4",
       "Ne4",
       "dxe3",
       "Qxe3",
       "Nd5",
       "Qf3",
       "Bc6",
       "Bc4",
       "Nf6",
       "Nxf6+",
       "Qxf6",
       "Qh3",
       "Bb4",
       "Rd1",
       "O-O",
       "a3",
       "Ba5",
       "Bd3",
       "g6",
       "Rc1",
       "Rfd8",
       "Qe3",
       "Qxb2",
       "Be4",
       "Bd2",
       "Bxc6",
       "Bxe3",
       "fxe3",
       "bxc6"
      ],
      "legendes": [
       "1.e4.",
       "La française.",
       "Les blancs prennent le centre.",
       "Tu attaques e4.",
       "L'avance : les blancs ferment le centre.",
       "Tu attaques la base de la chaîne, d4.",
       "Les blancs soutiennent d4.",
       "Deuxième attaquant sur d4.",
       "Troisième défenseur.",
       "Ta dame vise d4 et b2.",
       "Le fou se développe… et prépare le piège Fb5+.",
       "Tu prends en d4.",
       "Les blancs reprennent.",
       "<span class=\"mv good\">7…Fd7</span> ! La parade : pas encore …Cxd4, à cause de Fb5+. Ton fou couvre d'abord b5.",
       "Les blancs roquent et abandonnent d4 : ils comptent sur leur avance de développement.",
       "Maintenant, tu prends : le fou d7 empêche Fb5+.",
       "Les blancs échangent.",
       "Ta dame reprend : un pion de plus (−0,4).",
       "Les blancs développent et visent la case b5.",
       "Le pion a6 enlève b5 au cavalier et au fou. Stockfish : −0,8.",
       "La dame libère d1 pour une tour.",
       "Ton dernier cavalier sort ; il ira en c6, d5 ou f5.",
       "Le fou chasse ta dame. Mais elle a une bonne case, avec un pion gratuit : e5.",
       "Ta dame prend e5 : deux pions de plus (−1,2).",
       "<span class=\"mv bad\">13.Tae1</span> ? La tour vient sur la colonne e, derrière la dame et le fou. Mais regarde le fou e3 et le cavalier c3 : ton pion d5 peut avancer en d4 et les attaquer tous les deux.",
       "<span class=\"mv good\">13…d4</span> ! Une <em>fourchette</em> : un coup qui attaque deux pièces à la fois. Le pion attaque le fou e3 et le cavalier c3 ; l'un des deux va tomber (−2,4).",
       "Le cavalier se sauve au centre.",
       "Tu prends le fou.",
       "La dame reprend. Tu as une pièce et un pion de plus (−5,5).",
       "Le cavalier attaque la dame et s'installe au centre.",
       "La dame se replie et vise f7.",
       "Le fou c6 protège le cavalier d5. Ton « mauvais fou » est devenu une pièce utile.",
       "Le fou attaque le cavalier d5.",
       "Le cavalier recule en f6 : il protège ton roque et attaque le cavalier e4.",
       "Les blancs échangent.",
       "Ta dame reprend. Avec une pièce de plus, chaque échange te rapproche de la victoire.",
       "La dame vise e6 et h7.",
       "Le fou sort en attaquant la tour e1.",
       "La tour s'en va.",
       "Tu roques : ton roi est à l'abri et tes tours sont reliées.",
       "Le pion attaque ton fou.",
       "Le fou recule en gardant la diagonale a5-e1.",
       "Le fou vise h7.",
       "Tu fermes la diagonale du fou d3. Le pion h7 reste défendu par ton roi.",
       "La tour vise ton fou c6.",
       "Ta tour prend la colonne d ouverte.",
       "La dame revient au centre.",
       "Ta dame prend le pion b2 et attaque la tour c1.",
       "Le fou attaque ton fou c6.",
       "<span class=\"mv good\">25…Fd2</span> ! Le fou attaque à la fois la dame e3 et la tour c1. Il est protégé par ta tour d8 et par ta dame.",
       "Les blancs prennent ton fou c6… et laissent leur dame.",
       "Ton fou prend la dame.",
       "Les blancs reprennent.",
       "Tu reprends le fou. Ta dame et tes deux tours contre deux tours."
      ],
      "fin": "Les blancs abandonnent : Stockfish −8,4. Les trois étapes à retenir : …Fd7 avant …Cxd4 (la parade contre Fb5+), les pions d4 puis e5 gagnés en comptant les défenseurs, et la fourchette …d4 quand deux pièces blanches sont alignées devant ton pion.",
      "titre": "Partie 1 : l'avance",
      "quiz": [],
      "marques": [
       [
        "e4"
       ],
       [
        "e6"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "d5",
        "e4!"
       ],
       [
        "e5",
        "d4",
        "d5",
        "e6"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3",
        "d4"
       ],
       [
        "b6",
        "d4!",
        "b2!"
       ],
       [
        "d3",
        "b5"
       ],
       [
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "d7",
        "b5",
        "d4"
       ],
       [
        "g1",
        "d4!"
       ],
       [
        "d4!",
        "d7"
       ],
       [
        "d4!"
       ],
       [
        "d4"
       ],
       [
        "c3",
        "d3",
        "b5"
       ],
       [
        "a6",
        "b5",
        "c3",
        "d3"
       ],
       [
        "e2",
        "d1",
        "f1"
       ],
       [
        "e7",
        "c6",
        "d5",
        "f5"
       ],
       [
        "e3",
        "d4!",
        "e5!"
       ],
       [
        "e5"
       ],
       [
        "e1",
        "e3!",
        "c3!",
        "d5"
       ],
       [
        "d4",
        "e3!",
        "c3!"
       ],
       [
        "e4",
        "e3!"
       ],
       [
        "e3!"
       ],
       [
        "e3"
       ],
       [
        "d5",
        "e3!"
       ],
       [
        "f3",
        "f7!"
       ],
       [
        "c6",
        "d5"
       ],
       [
        "c4",
        "d5!"
       ],
       [
        "f6",
        "e4!"
       ],
       [
        "f6"
       ],
       [
        "f6"
       ],
       [
        "h3",
        "e6!",
        "h7!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "d1"
       ],
       [
        "g8",
        "f8",
        "a8"
       ],
       [
        "a3",
        "b4!"
       ],
       [
        "a5"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "g6",
        "d3",
        "h7",
        "g8"
       ],
       [
        "c1",
        "c6!"
       ],
       [
        "d8"
       ],
       [
        "e3"
       ],
       [
        "b2!",
        "c1!"
       ],
       [
        "e4",
        "c6!"
       ],
       [
        "d2",
        "e3!",
        "c1!",
        "d8"
       ],
       [
        "c6!",
        "e3!",
        "d2"
       ],
       [
        "e3!"
       ],
       [
        "e3"
       ],
       [
        "c6!",
        "b2",
        "a8",
        "d8"
       ],
       []
      ]
     },
     {
      "t": "h",
      "html": "Partie 2 : le classique, de …c5 jusqu'au mat"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3",
       "h6",
       "h3",
       "a6",
       "Bg3",
       "O-O",
       "Qd2",
       "Qc7",
       "Qe2",
       "Nd4",
       "Qd1",
       "Nxf3+",
       "Qxf3",
       "Nxe5",
       "O-O-O",
       "Bd7",
       "Rhe1",
       "Nxf3",
       "Bxc7",
       "Nxe1",
       "Rxe1",
       "Bxf2",
       "Rf1",
       "Bc5",
       "Ne2",
       "Bb5",
       "b4",
       "Bxd3",
       "cxd3",
       "Bxb4",
       "Kb1",
       "Rae8",
       "Rf4",
       "Rc8",
       "Ng3",
       "Ba3",
       "Ra4",
       "Rxc7",
       "Ne2",
       "Bd6",
       "Rd4",
       "Rfc8",
       "g3",
       "Rc2",
       "Rf4",
       "Rxe2",
       "Re4",
       "dxe4",
       "g4",
       "Ba3",
       "g5",
       "Re1#"
      ],
      "legendes": [
       "1.e4.",
       "La française.",
       "Le centre.",
       "Tu attaques e4.",
       "Le classique : le cavalier défend e4.",
       "Tu attaques e4 une deuxième fois.",
       "Le pion chasse ton cavalier.",
       "Il rentre en d7, d'où il soutiendra …c5.",
       "Le cavalier soutient d4 et e5.",
       "La rupture : tu frappes la base d4.",
       "Les blancs prennent : la chaîne n'a plus de base, et e5 n'a plus de pion pour le soutenir.",
       "Tu attaques e5 ; tu reprendras le pion c5 au coup suivant.",
       "Le fou défend e5.",
       "Tu reprends ton pion en développant le fou.",
       "Le fou vise h7. C'est la position du sacrifice grec de « Forces et faiblesses » : 8…0-0 ? serait une erreur.",
       "Un petit coup de pion : avec le pion en h6, le sacrifice Fxh7+ n'existe plus. Ton roi pourra roquer tranquillement.",
       "Les blancs aussi jouent un petit coup de pion.",
       "Encore un coup utile : la case b5 est interdite aux pièces blanches.",
       "Le fou se met à l'abri.",
       "Maintenant tu roques : rien ne menace ton roi.",
       "<span class=\"mv bad\">11.Dd2</span> ? La dame prépare le grand roque, mais elle ne regarde pas e5 : en e2, elle l'aurait défendu.",
       "Ta dame attaque e5. La pointe de la chaîne est attaquée trois fois (cavaliers c6 et d7, dame) et défendue deux fois (cavalier f3, fou g3).",
       "La dame vient défendre e5.",
       "<span class=\"mv good\">12…Cd4</span> ! Le cavalier attaque la dame e2 et le cavalier f3, un défenseur de e5.",
       "La dame recule.",
       "Tu échanges un défenseur de e5, avec échec.",
       "La dame reprend.",
       "Le pion e5 tombe, et ton cavalier attaque la dame f3 (−2,3).",
       "Les blancs roquent en laissant leur dame attaquée : si ton cavalier la prend, le fou g3 prendra ta dame c7.",
       "Pas d'échange de dames pour l'instant : tu développes ton dernier fou.",
       "<span class=\"mv bad\">16.The1</span> ?? La tour vient sur la colonne e… sur la case où ton cavalier va arriver.",
       "Tu prends la dame.",
       "Le fou prend la tienne…",
       "…et ton cavalier prend encore la tour e1. Bilan, après la reprise : une tour contre un cavalier, plus le pion e5 (−5,2).",
       "La tour reprend.",
       "Ton fou prend un pion et attaque la tour e1.",
       "La tour attaque ton fou.",
       "Le fou revient en c5.",
       "Le cavalier se replie.",
       "<span class=\"mv good\">20…Fb5</span> ! Le plan du mauvais fou : il propose l'échange du fou d3, la meilleure pièce blanche.",
       "Le pion attaque ton fou c5.",
       "Tu échanges d'abord les fous.",
       "Les blancs reprennent.",
       "Ton fou prend un pion.",
       "Le roi s'écarte.",
       "Ta tour se place sur la colonne e.",
       "La tour attaque ton fou b4.",
       "Ta tour change de colonne et attaque le fou c7.",
       "Le cavalier sort.",
       "Le fou s'écarte de la tour.",
       "La tour attaque ton fou a3.",
       "Tu prends le fou c7. Ton fou a3 est attaqué, mais avec autant de matériel de plus, les échanges t'arrangent.",
       "Le cavalier revient… et les blancs oublient de prendre ton fou.",
       "Ton fou se met à l'abri au centre.",
       "La tour attaque ton pion d5.",
       "Tes deux tours sur la colonne c ouverte.",
       "Les blancs n'ont plus de plan.",
       "Ta tour entre au deuxième rang : elle attaque le cavalier e2 et le pion a2.",
       "La tour s'en va.",
       "Ta tour prend le cavalier.",
       "La tour se met devant ton pion d5…",
       "…qui la prend.",
       "Les blancs n'ont plus que des pions.",
       "Le fou garde b2 et c1 : le roi blanc n'a presque plus de cases.",
       "Dernier coup de pion.",
       "Mat. La tour e1 donne échec ; le fou a3 et la tour c8 gardent b2 et c2, la tour e1 couvre a1."
      ],
      "fin": "Mat au 33e coup (0-1). Les étapes à retenir : …c5 contre la chaîne, …h6 avant de roquer pour supprimer le sacrifice grec, la pression sur la pointe e5 une fois d4 disparu (…Dc7, puis …Cd4 qui élimine son défenseur), et …Fb5 pour échanger ton mauvais fou.",
      "titre": "Partie 2 : le classique",
      "quiz": [],
      "marques": [
       [
        "e4"
       ],
       [
        "e6"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "d5",
        "e4!"
       ],
       [
        "c3",
        "e4"
       ],
       [
        "f6",
        "d5",
        "e4!"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "c5"
       ],
       [
        "f3",
        "d4",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c5",
        "e5!"
       ],
       [
        "c6",
        "e5!",
        "c5!"
       ],
       [
        "f4",
        "e5"
       ],
       [
        "c5!"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "h6",
        "d3",
        "e8"
       ],
       [
        "h3"
       ],
       [
        "a6",
        "b5"
       ],
       [
        "g3"
       ],
       [
        "g8",
        "h6"
       ],
       [
        "d2",
        "e5!",
        "e2"
       ],
       [
        "e5!",
        "c7",
        "c6",
        "d7"
       ],
       [
        "e2",
        "e5"
       ],
       [
        "d4",
        "e2!",
        "f3!",
        "e5"
       ],
       [
        "d1"
       ],
       [
        "f3!",
        "e5!"
       ],
       [
        "f3"
       ],
       [
        "e5",
        "f3!"
       ],
       [
        "f3!",
        "e5",
        "g3",
        "c7!"
       ],
       [
        "d7"
       ],
       [
        "e1!",
        "e5",
        "f3!"
       ],
       [
        "f3!"
       ],
       [
        "c7!"
       ],
       [
        "e1!",
        "d1"
       ],
       [
        "e1"
       ],
       [
        "f2",
        "e1!"
       ],
       [
        "f1",
        "f2!"
       ],
       [
        "c5"
       ],
       [
        "e2"
       ],
       [
        "b5",
        "d3"
       ],
       [
        "b4",
        "c5!"
       ],
       [
        "d3!",
        "c5!"
       ],
       [
        "d3"
       ],
       [
        "b4!"
       ],
       [
        "b1"
       ],
       [
        "e8"
       ],
       [
        "f4",
        "b4!"
       ],
       [
        "c8",
        "c7!"
       ],
       [
        "g3"
       ],
       [
        "a3",
        "f4"
       ],
       [
        "a4",
        "a3!"
       ],
       [
        "c7!",
        "a3!",
        "a4"
       ],
       [
        "e2",
        "a3!"
       ],
       [
        "d6"
       ],
       [
        "d4",
        "d5!"
       ],
       [
        "c8",
        "c7"
       ],
       [],
       [
        "c2",
        "e2!",
        "a2!"
       ],
       [
        "f4",
        "e2!"
       ],
       [
        "e2!"
       ],
       [
        "e4!",
        "d5"
       ],
       [
        "e4!"
       ],
       [],
       [
        "a3",
        "b2",
        "c1",
        "b1!"
       ],
       [
        "g5"
       ],
       [
        "e1",
        "b1!",
        "a3",
        "c8"
       ],
       [
        "b1!",
        "e1"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "Il joue n'importe quoi",
    "blocs": [
     {
      "t": "p",
      "html": "Entre 1000 et 1600, beaucoup d'adversaires sortent de la théorie dès le deuxième ou le troisième coup. Ton répertoire couvre les trois coups les plus joués à chaque étape ; pour le reste, quatre principes et deux tableaux."
     },
     {
      "t": "h",
      "html": "Quatre principes"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…d5 au deuxième coup, presque toujours.</strong> Seule exception courante : 2.De2.",
       "<strong>Si e4 n'est pas défendu, prends-le.</strong> Après 2.d4 d5, tout coup qui ne protège pas e4 (ni Cc3, ni Cd2, ni Fd3, ni e5, ni exd5) te donne un pion : 3…dxe4.",
       "<strong>Si les blancs ferment le centre avec e5, frappe avec …c5.</strong> Puis …Cc6, …Db6 : la base de la chaîne, toujours.",
       "<strong>Si la dame blanche sort tôt, développe en l'attaquant.</strong> Contre Dh5 ou Dg4, …Cf6 attaque la dame et te fait gagner un temps. Il n'y a pas de mat sur f7 : ton roi le défend."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "Les autres deuxièmes coups"
     },
     {
      "t": "table",
      "entetes": [
       "1.e4 e6 …",
       "Ton plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "2.d3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc4dd92c1b\">2…d5, puis …c5 ou …Cf6</a>",
        "0,0"
       ],
       [
        "2.Cc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5f3591c2b\">2…d5 ; sur 3.d4, 3…Cf6</a> (le classique) ; sur 3.exd5, 3…exd5",
        "+0,4"
       ],
       [
        "2.De2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a> (pas 2…d5, voir les exceptions)",
        "0,0"
       ],
       [
        "2.f4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb273202ec\">2…d5 ; sur 3.e5, 3…c5</a>",
        "−0,1 à −0,2"
       ],
       [
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qafa5924cc\">2…d5</a>",
        "0,0"
       ],
       [
        "2.b3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q25e9551db\">2…d5</a>",
        "−0,3"
       ],
       [
        "2.Dh5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q97a7ae10a\">2…Cf6</a> ou 2…d5",
        "−0,3 à −0,5"
       ],
       [
        "2.Dg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q7aa507992\">2…d5</a>",
        "−0,5"
       ],
       [
        "2.Df3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qff02778e8\">2…c5</a> ou 2…d5",
        "−0,2 à −0,4"
       ],
       [
        "2.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q220ded635\">2…c5</a> et …d6",
        "−0,2"
       ],
       [
        "2.g3, 2.a3, 2.h3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0bf9f0df2\">2…d5</a>",
        "0,0 à +0,2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Les autres troisièmes coups après 2.d4 d5"
     },
     {
      "t": "table",
      "entetes": [
       "2.d4 d5 …",
       "Ton plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "3.Cd2 (Tarrasch)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5fed1032e\">3…c5</a> ou 3…Cf6",
        "+0,4"
       ],
       [
        "3.Fd3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q101cdac30\">3…dxe4 4.Fxe4 Cf6</a>, puis …c5",
        "0,0"
       ],
       [
        "3.Fb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q071a1772e\">3…c6</a> : le fou doit reculer",
        "−0,2"
       ],
       [
        "3.Cf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q462b27776\">3…dxe4</a> : e4 n'est plus défendu",
        "−0,8"
       ],
       [
        "3.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0f441dccc\">3…dxe4</a>",
        "−0,7"
       ],
       [
        "3.f3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q930d31ca2\">3…c5</a> ou 3…dxe4",
        "−0,4 à −0,7"
       ],
       [
        "3.Fe3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q11c4afcf8\">3…dxe4</a>",
        "−0,4"
       ],
       [
        "3.c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2bcbe9bec\">3…dxe4</a>",
        "−0,4"
       ],
       [
        "3.De2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde110d333\">3…dxe4 4.Dxe4 Cf6</a> : gain de temps sur la dame",
        "−0,2"
       ],
       [
        "3.Fg5 ??",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q837fb5f81\">3…Dxg5</a> : une pièce gratuite",
        "−4,6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Nf3",
       "dxe4",
       "Ne5",
       "Nd7"
      ],
      "legendes": [
       "Le cavalier sort… mais il ne défend pas e4.",
       "Alors tu prends.",
       "Le cavalier saute en e5 pour ne pas se faire attaquer.",
       "Et tu le chasses à son tour."
      ],
      "fin": "Un pion de plus (−0,9). C'est le principe numéro 2 : après 2.d4 d5, demande-toi à chaque fois si e4 est encore défendu.",
      "titre": "3.Cf3 ? dxe4 : le principe en action",
      "quiz": [
       "q7b175c345"
      ],
      "marques": [
       [
        "e4!",
        "d5"
       ],
       [
        "e4!"
       ],
       [
        "e5",
        "e4"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6"
      ],
      "coups": [
       "Qh5",
       "Nf6",
       "Qe2",
       "d5"
      ],
      "legendes": [
       "La dame sort tôt et vise f7.",
       "Tu développes en attaquant la dame.",
       "Elle doit reculer.",
       "Et tu prends le centre. Stockfish : −0,3."
      ],
      "fin": "Pas de panique face à une dame qui sort tôt : chaque coup qu'elle joue, tu le gagnes en développant une pièce.",
      "titre": "2.Dh5 : gagner du temps sur la dame",
      "quiz": [
       "q33095372c"
      ],
      "marques": [
       [
        "h5",
        "f7!"
       ],
       [
        "f6",
        "h5!"
       ],
       [
        "h5!",
        "f6"
       ],
       [],
       [
        "e2",
        "f6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Après le répertoire"
     },
     {
      "t": "p",
      "html": "Ton répertoire s'arrête à ton 5e coup. Ensuite : finis ton développement (les deux cavaliers, le fou f8, le roque), garde la pression sur d4 dans l'avance, mets une tour sur la colonne c ou e quand elle s'ouvre. Si tu ne sais pas quoi jouer, cherche ta pièce la moins active et améliore-la — souvent, c'est le fou c8."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "À retenir",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1…e6 puis 2…d5 contre tout, sauf 2.De2 (2…c5).",
       "Contre 3.e5 : …c5, …Cc6, …Db6. On attaque la base d4. Jamais …Cf6 : le pion e5 prendrait le cavalier.",
       "Contre 4.dxc5 : …Fxc5 tout de suite.",
       "Dans l'avance, ne prends jamais en d4 avec le cavalier quand Fb5+ est possible : joue d'abord …Fd7.",
       "Après Fxc6+, reprends tout de suite.",
       "Contre l'échange : …Cf6, …Fd6, …0-0, …Te8 ; mais …Fe7 contre Fg5 et contre De2+.",
       "Contre 4.e5 dans le classique : …Cfd7 puis …c5.",
       "Contre 4.Fg5 : …dxe4 ; sur 5.Cxe4 Fe7, regarde si le cavalier e4 est défendu ; sur 5.Fxf6, …gxf6.",
       "Contre Fb5+ : …Fd7, pour échanger ton fou enfermé.",
       "Après 2.d4 d5, si e4 n'est pas défendu : …dxe4."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "qc30bc31e9": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "Le fou cloue ton cavalier c6.",
     "La dame attaque le fou b5. Une fois le fou parti, elle visera b2 et d4."
    ],
    "fin": "",
    "titre": "Avance : 5.Fb5 Db6",
    "marques": [
     [
      "b5",
      "c6!",
      "e8"
     ],
     [
      "b6",
      "b5!",
      "d4!"
     ],
     []
    ]
   },
   "q718425163": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "Qb6"
    ],
    "legendes": [
     "Le fou défend d4.",
     "Même plan : la dame vise b2, que le fou e3 ne défend plus, et d4."
    ],
    "fin": "",
    "titre": "Avance : 5.Fe3 Db6",
    "marques": [
     [
      "e3",
      "d4!"
     ],
     [
      "b6",
      "b2!",
      "e3",
      "d4!"
     ],
     []
    ]
   },
   "q0eca7d64b": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "Le fou cloue ton cavalier.",
     "La dame attaque le fou b5."
    ],
    "fin": "",
    "titre": "Avance, 4.Cf3 Cc6 5.Fb5 Db6",
    "marques": [
     [
      "b5",
      "c6!",
      "e8"
     ],
     [
      "b6",
      "b5!",
      "d4!"
     ],
     []
    ]
   },
   "q7a0026f6b": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "c3",
     "Qb6"
    ],
    "legendes": [
     "Les blancs soutiennent d4 : on retombe dans la ligne principale.",
     "Ta dame vise b2, et d4 derrière ton pion c5, comme d'habitude."
    ],
    "fin": "",
    "titre": "Avance, 4.Cf3 Cc6 5.c3 Db6",
    "marques": [
     [
      "c3",
      "d4!"
     ],
     [
      "b6",
      "d4!",
      "b2!"
     ],
     []
    ]
   },
   "qa2013ae9d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "cxd4"
    ],
    "legendes": [
     "Le fou défend d4.",
     "Tu prends en d4 tout de suite : si le cavalier f3 reprend, le pion e5 n'aura plus de défenseur."
    ],
    "fin": "",
    "titre": "Avance, 4.Cf3 Cc6 5.Fe3 cxd4",
    "marques": [
     [
      "e3",
      "d4!"
     ],
     [
      "d4!",
      "f3",
      "e5!"
     ],
     []
    ]
   },
   "qcf913e84e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs développent au lieu de soutenir d4 avec c3.",
     "Même réponse : le cavalier attaque d4."
    ],
    "fin": "",
    "titre": "Avance : 4.Cf3 Cc6",
    "marques": [
     [
      "f3",
      "d4!"
     ],
     [
      "c6",
      "d4!"
     ],
     []
    ]
   },
   "q6f71ee263": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Nc3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Tu attaques e5, qui n'a plus de pion d4 pour le soutenir."
    ],
    "fin": "",
    "titre": "Avance, 4.dxc5 Fxc5 5.Cc3 Cc6",
    "marques": [
     [],
     [
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "q5c03a7d7d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Échec.",
     "Interpose le cavalier : il se développe et attaque e5."
    ],
    "fin": "",
    "titre": "Avance, 4.dxc5 Fxc5 5.Fb5+ Cc6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "qc8d612ba1": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Nc3",
     "Bd6"
    ],
    "legendes": [
     "Les blancs développent.",
     "En miroir : ton fou vise h2."
    ],
    "fin": "",
    "titre": "Échange : 5.Cc3 Fd6",
    "marques": [
     [],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q1deb7307e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "Bd6"
    ],
    "legendes": [
     "Le fou blanc sort en f4.",
     "Tu proposes l'échange des fous : ton fou d6 neutralise le sien."
    ],
    "fin": "",
    "titre": "Échange : 5.Ff4 Fd6",
    "marques": [
     [
      "f4"
     ],
     [
      "d6",
      "f4"
     ],
     []
    ]
   },
   "q3656d1200": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f6.",
     "Décloue : contre Fg5, ton fou va toujours en e7."
    ],
    "fin": "",
    "titre": "Échange : 5.Fg5 Fe7",
    "marques": [
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "e7",
      "f6",
      "g5"
     ],
     []
    ]
   },
   "qa5aaf376f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bd6",
     "Nxd5"
    ],
    "legendes": [
     "Le coup du plan habituel… mais il coupe ta dame de d5.",
     "Le cavalier prend d5 : ton cavalier f6 est cloué : s'il reprend, Fxd8 prend ta dame."
    ],
    "fin": "",
    "titre": "Échange : 5…Fd6 ? 6.Cxd5",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "d6",
      "d8",
      "d5!"
     ],
     [
      "d5!",
      "f6!",
      "g5",
      "d8"
     ],
     [
      "d5"
     ]
    ]
   },
   "qda61c904f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Développe ton cavalier."
    ],
    "fin": "",
    "titre": "Échange, 4.De2+ Fe7 5.Cc3 Cf6",
    "marques": [
     [],
     [],
     []
    ]
   },
   "qa8ce55619": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Bg5",
     "Nc6"
    ],
    "legendes": [
     "Le fou attaque ton fou e7, cloué sur ton roi par la dame e2.",
     "Le cavalier sort par c6 : sur …Cf6, Fxf6 t'obligerait à reprendre avec le pion g, car ton fou e7 ne peut pas bouger."
    ],
    "fin": "",
    "titre": "Échange, 4.De2+ Fe7 5.Fg5 Cc6",
    "marques": [
     [
      "g5",
      "e7!",
      "e2",
      "e8"
     ],
     [
      "c6",
      "e7!",
      "e2",
      "g5"
     ],
     []
    ]
   },
   "q722e2d9e8": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "f4",
     "c5"
    ],
    "legendes": [
     "Les blancs renforcent e5.",
     "Même réponse : …c5 frappe d4."
    ],
    "fin": "",
    "titre": "Classique : 5.f4 c5",
    "marques": [
     [
      "f4",
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "qcdc3eef57": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "Bb5",
     "c5"
    ],
    "legendes": [
     "Le fou cloue ton cavalier d7.",
     "Même réponse : …c5 frappe d4."
    ],
    "fin": "",
    "titre": "Classique : 5.Fb5 c5",
    "marques": [
     [
      "b5",
      "d7!",
      "e8"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q22d07b5f2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion : c'est la variante d'échange."
    ],
    "fin": "",
    "titre": "Classique : 4.exd5 exd5",
    "marques": [
     [],
     [],
     []
    ]
   },
   "q0b8f474f7": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4"
    ],
    "legendes": [
     "Les blancs développent, mais leur cavalier e4 n'est pas défendu.",
     "Prends-le : ton cavalier n'est plus cloué, le fou e7 protège la dame."
    ],
    "fin": "",
    "titre": "Burn : 6.Cf3 ?? Cxe4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "e4!",
      "f6"
     ],
     [
      "f6",
      "e7",
      "d8",
      "e4!"
     ],
     [
      "e4"
     ]
    ]
   },
   "q7cbbdd8af": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nf3"
    ],
    "legendes": [
     "Les blancs échangent sur f6 : la bonne suite pour eux.",
     "Reprends avec le fou : il devient un bon fou sur la grande diagonale.",
     "Les blancs développent."
    ],
    "fin": "",
    "titre": "Burn : 6.Fxf6 Fxf6",
    "marques": [
     [
      "f6!"
     ],
     [
      "f6"
     ],
     [],
     []
    ]
   },
   "q7a0932fc1": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "Les blancs offrent un pion pour ouvrir la colonne f.",
     "Tu frappes d4 au lieu de défendre e4."
    ],
    "fin": "",
    "titre": "Burn : 5.f3 c5",
    "marques": [
     [
      "f3!",
      "e4"
     ],
     [
      "c5",
      "d4!",
      "e4!"
     ],
     []
    ]
   },
   "q5474b2037": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "Qxf6",
     "Nxe4"
    ],
    "legendes": [
     "Les blancs prennent ton cavalier.",
     "Reprendre avec la dame…",
     "…et c'est ta dame qui se fait attaquer."
    ],
    "fin": "",
    "titre": "Burn : 5…Dxf6 ?!",
    "couleurs": [
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "f6!"
     ],
     [
      "f6!"
     ],
     [
      "e4",
      "f6!"
     ],
     [
      "f6!"
     ]
    ]
   },
   "q0186a3787": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "d4",
     "Bd6"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion.",
     "Les blancs développent.",
     "Toi aussi.",
     "Les blancs jouent d4 : c'est la variante d'échange.",
     "En miroir : ton fou vise h2."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.exd5 exd5",
    "marques": [
     [],
     [],
     [],
     [],
     [
      "d4"
     ],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q60db66247": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Qb5+",
     "c6"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant.",
     "La dame continue.",
     "Le pion c6 bouche l'échec et attaque la dame, qui doit encore bouger."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.exd5 exd5 4.De2+ Fe7 5.Db5+ c6",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q6e0727167": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "d4",
     "c5"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4.",
     "Le pion chasse ton cavalier.",
     "Il rentre en d7.",
     "Les blancs complètent la chaîne.",
     "Comme dans le classique : …c5 frappe d4."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.Cc3 Cf6 4.e5",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     [
      "e5",
      "f6!"
     ],
     [
      "d7"
     ],
     [
      "d4",
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q4b8196402": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "d3",
     "c5",
     "Bg5",
     "d4"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4.",
     "Les blancs soutiennent e4 avec un pion.",
     "Tu prends de l'espace.",
     "Le fou cloue ton cavalier.",
     "Le pion avance et chasse le cavalier c3."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.Cc3 Cf6 4.d3 c5 5.Fg5 d4",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     [
      "d3",
      "e4!"
     ],
     [
      "c5"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "d4",
      "c3!"
     ],
     []
    ]
   },
   "q480cdffa7": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec du fou.",
     "Le pion c6 bouche l'échec et attaque le fou, qui doit encore bouger."
    ],
    "fin": "",
    "titre": "2.Fc4 d5 3.exd5 exd5 4.Fb5+ c6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q6fcf7f369": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant."
    ],
    "fin": "",
    "titre": "2.Fc4 d5 3.exd5 exd5 4.De2+ Fe7",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     []
    ]
   },
   "qff3738e44": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb3",
     "dxe4"
    ],
    "legendes": [
     "Le fou recule sans échanger.",
     "Prends le pion e4 : il n'est pas défendu."
    ],
    "fin": "",
    "titre": "2.Fc4 d5 3.Fb3 dxe4",
    "marques": [
     [
      "b3"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "qdeba3c71f": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec.",
     "Le pion bouche l'échec et chasse le fou."
    ],
    "fin": "",
    "titre": "2.Fc4 d5 3.Fb5+ c6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q126ae3a42": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "exd5",
     "exd5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "Échange.",
     "Reprends avec le pion.",
     "Les blancs jouent d4 : c'est l'échange.",
     "Développe."
    ],
    "fin": "",
    "titre": "Transposition vers l'échange",
    "marques": [
     [
      "f3"
     ],
     [
      "d5"
     ],
     [
      "d5!"
     ],
     [],
     [
      "d4"
     ],
     [
      "f6"
     ],
     []
    ]
   },
   "q5e67e8b12": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "e5",
     "c5",
     "d4",
     "Nc6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "Les blancs avancent.",
     "Tu prends de l'espace et tu contrôles d4.",
     "Les blancs jouent d4 : c'est l'avance.",
     "Deuxième attaquant sur d4."
    ],
    "fin": "",
    "titre": "Transposition vers l'avance",
    "marques": [
     [
      "f3"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "c5"
     ],
     [
      "d4",
      "e5"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q621dcb38f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Bd7",
     "O-O",
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "Tu prends en d4.",
     "Les blancs reprennent.",
     "Le fou va couvrir b5 dès que ton cavalier c6 bougera : plus de Fb5+ possible. Ne prends pas encore en d4.",
     "Les blancs roquent.",
     "Maintenant tu peux prendre d4 : le fou d7 empêche Fb5+.",
     "Les blancs échangent.",
     "Ta dame reprend, en sécurité : tu as gagné un pion."
    ],
    "fin": "",
    "titre": "Avance : 6.Fd3 cxd4 7.cxd4 Fd7 !",
    "marques": [
     [
      "d4!"
     ],
     [
      "d4!"
     ],
     [
      "d7",
      "b5",
      "d4"
     ],
     [
      "g1",
      "f1"
     ],
     [
      "d4!",
      "d7",
      "b5"
     ],
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q85034861e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "bxc6"
    ],
    "legendes": [
     "Reprends tout de suite avec le pion b : il soutient d5, et la colonne b s'ouvre pour ta dame vers b2."
    ],
    "fin": "",
    "titre": "Avance : après Fxc6+, 6…bxc6",
    "marques": [
     [
      "c6!",
      "c8",
      "f8"
     ],
     []
    ]
   },
   "q0644bbae2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7"
    ],
    "legendes": [
     "Le cavalier sort en e7 sans bloquer ton jeu. Le pion g7 n'est pas défendu, mais si la dame le prend, ta tour vient en g8 et la chasse."
    ],
    "fin": "",
    "titre": "Avance, 4.dxc5 Fxc5 5.Dg4 Ce7",
    "marques": [
     [
      "e7",
      "g7!",
      "g4",
      "h8"
     ],
     []
    ]
   },
   "q85dc2f165": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7",
     "Qxg7",
     "Rg8",
     "Qxh7",
     "Qb6"
    ],
    "legendes": [
     "Le cavalier sort en e7.",
     "La dame prend g7…",
     "La tour attaque la dame.",
     "La dame prend h7…",
     "…et ta dame vise f2 avec ton fou c5 : c'est toi qui attaques."
    ],
    "fin": "",
    "titre": "5.Dg4 Ce7 6.Dxg7 Tg8 7.Dxh7 Db6",
    "marques": [
     [
      "e7"
     ],
     [
      "g7!"
     ],
     [
      "g8",
      "g7!"
     ],
     [
      "h7!"
     ],
     [
      "b6",
      "c5",
      "f2!"
     ],
     []
    ]
   },
   "q646d2d492": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7"
    ],
    "legendes": [
     "Décloue : ta dame continue de défendre d5."
    ],
    "fin": "",
    "titre": "Échange : 5.Fg5 Fe7",
    "marques": [
     [
      "e7",
      "f6",
      "d8",
      "d5!"
     ],
     []
    ]
   },
   "qba48194ee": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qe2",
     "c5"
    ],
    "legendes": [
     "La dame sort en e2.",
     "Joue …c5 : tu prends de l'espace sans ouvrir la colonne e devant ton roi."
    ],
    "fin": "",
    "titre": "2.De2 c5",
    "marques": [
     [
      "e2"
     ],
     [
      "c5",
      "e2",
      "e8"
     ],
     []
    ]
   },
   "q255883eed": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6",
     "Be3",
     "cxd4"
    ],
    "coups": [
     "Bxd4"
    ],
    "legendes": [
     "La bonne reprise pour les blancs : le fou reprend et le cavalier f3 continue de défendre e5."
    ],
    "fin": "",
    "titre": "Avance : 6.Fxd4",
    "marques": [
     [
      "d4!",
      "f3",
      "e5!"
     ],
     []
    ]
   },
   "qd5032a2ba": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "Qxc6"
    ],
    "legendes": [
     "Reprendre avec la dame se joue aussi, mais c'est moins bon : la dame est exposée sur la colonne c."
    ],
    "fin": "",
    "titre": "Avance : 6…Dxc6",
    "marques": [
     [
      "c6!"
     ],
     []
    ]
   },
   "qc4dd92c1b": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d3",
     "d5",
     "Nd2",
     "c5"
    ],
    "legendes": [
     "Les blancs préparent un système fermé.",
     "Ton coup de toujours.",
     "Les blancs soutiennent e4.",
     "Tu prends de l'espace."
    ],
    "fin": "",
    "titre": "2.d3",
    "marques": [
     [
      "d3"
     ],
     [
      "d5"
     ],
     [
      "d2",
      "e4!"
     ],
     [
      "c5"
     ],
     []
    ]
   },
   "q5f3591c2b": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nc3",
     "d5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "On retrouve 2.d4 d5 3.Cc3.",
     "Le classique : tu attaques e4."
    ],
    "fin": "",
    "titre": "2.Cc3",
    "marques": [
     [
      "c3"
     ],
     [
      "d5"
     ],
     [
      "d4",
      "d5",
      "c3"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "qb273202ec": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "f4",
     "d5",
     "e5",
     "c5"
    ],
    "legendes": [
     "Le pion f avance.",
     "Ton coup de toujours.",
     "Les blancs ferment le centre.",
     "Tu prends de l'espace et tu contrôles d4."
    ],
    "fin": "",
    "titre": "2.f4",
    "marques": [
     [
      "f4"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "c5"
     ],
     []
    ]
   },
   "qafa5924cc": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "c4",
     "d5"
    ],
    "legendes": [
     "Le pion c avance.",
     "Ton coup de toujours : tu attaques e4 et c4."
    ],
    "fin": "",
    "titre": "2.c4",
    "marques": [
     [
      "c4"
     ],
     [
      "d5",
      "e4!",
      "c4!"
     ],
     []
    ]
   },
   "q25e9551db": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "b3",
     "d5"
    ],
    "legendes": [
     "Les blancs préparent Fb2.",
     "Ton coup de toujours."
    ],
    "fin": "",
    "titre": "2.b3",
    "marques": [
     [
      "c1",
      "b2"
     ],
     [
      "d5"
     ],
     []
    ]
   },
   "q97a7ae10a": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6"
    ],
    "legendes": [
     "La dame sort tôt.",
     "Tu développes en attaquant la dame."
    ],
    "fin": "",
    "titre": "2.Dh5",
    "marques": [
     [
      "h5"
     ],
     [
      "f6",
      "h5!"
     ],
     []
    ]
   },
   "q7aa507992": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qg4",
     "d5"
    ],
    "legendes": [
     "La dame sort tôt.",
     "Ton coup de toujours : la dame g4 ne gêne pas …d5."
    ],
    "fin": "",
    "titre": "2.Dg4",
    "marques": [
     [
      "g4"
     ],
     [
      "d5",
      "g4"
     ],
     []
    ]
   },
   "qff02778e8": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qf3",
     "c5"
    ],
    "legendes": [
     "La dame sort en f3.",
     "Tu prends de l'espace ; …Cc6 et …d5 suivront."
    ],
    "fin": "",
    "titre": "2.Df3",
    "marques": [
     [
      "f3"
     ],
     [
      "c5",
      "c6",
      "d5"
     ],
     []
    ]
   },
   "q220ded635": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "Le pion avance tout seul.",
     "Tu prends de l'espace ; …Cc6 attaquera e5."
    ],
    "fin": "",
    "titre": "2.e5",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "q0bf9f0df2": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "g3",
     "d5"
    ],
    "legendes": [
     "Les blancs préparent Fg2.",
     "Ton coup de toujours."
    ],
    "fin": "",
    "titre": "2.g3",
    "marques": [
     [
      "f1",
      "g2"
     ],
     [
      "d5"
     ],
     []
    ]
   },
   "q5fed1032e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nd2",
     "c5"
    ],
    "legendes": [
     "La Tarrasch : le cavalier défend e4 depuis d2.",
     "Tu frappes d4 tout de suite."
    ],
    "fin": "",
    "titre": "3.Cd2 (Tarrasch)",
    "marques": [
     [
      "d2",
      "e4!"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q101cdac30": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bd3",
     "dxe4",
     "Bxe4",
     "Nf6"
    ],
    "legendes": [
     "Le fou défend e4.",
     "Tu échanges.",
     "Le fou reprend.",
     "Tu développes en attaquant le fou."
    ],
    "fin": "",
    "titre": "3.Fd3",
    "marques": [
     [
      "d3",
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q071a1772e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec.",
     "Le pion bouche l'échec et chasse le fou."
    ],
    "fin": "",
    "titre": "3.Fb5+",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q462b27776": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4"
    ],
    "legendes": [
     "Le cavalier sort, mais e4 n'est toujours pas défendu.",
     "Prends-le."
    ],
    "fin": "",
    "titre": "3.Cf3 ?",
    "marques": [
     [
      "f3",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q0f441dccc": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c4",
     "dxe4"
    ],
    "legendes": [
     "Le pion c avance, e4 n'est toujours pas défendu.",
     "Prends-le."
    ],
    "fin": "",
    "titre": "3.c4",
    "marques": [
     [
      "c4",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q930d31ca2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "Les blancs défendent e4 avec un pion.",
     "Tu frappes d4."
    ],
    "fin": "",
    "titre": "3.f3",
    "marques": [
     [
      "f3",
      "e4!"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q11c4afcf8": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Be3",
     "dxe4"
    ],
    "legendes": [
     "Le fou sort, e4 n'est toujours pas défendu.",
     "Prends-le."
    ],
    "fin": "",
    "titre": "3.Fe3",
    "marques": [
     [
      "e3",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q2bcbe9bec": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c3",
     "dxe4"
    ],
    "legendes": [
     "Les blancs soutiennent d4, pas e4.",
     "Prends le pion e4."
    ],
    "fin": "",
    "titre": "3.c3",
    "marques": [
     [
      "c3",
      "d4",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "qde110d333": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Qe2",
     "dxe4",
     "Qxe4",
     "Nf6"
    ],
    "legendes": [
     "La dame défend e4.",
     "Tu échanges.",
     "La dame reprend.",
     "Tu développes en attaquant la dame."
    ],
    "fin": "",
    "titre": "3.De2",
    "marques": [
     [
      "e2",
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q837fb5f81": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bg5",
     "Qxg5"
    ],
    "legendes": [
     "Le fou attaque ta dame… sur une case que ta dame contrôle.",
     "Prends-le : une pièce gratuite."
    ],
    "fin": "",
    "titre": "3.Fg5 ??",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "g5!",
      "d8"
     ],
     [
      "g5!"
     ],
     []
    ]
   },
   "q1030cfc72": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "gxf6",
     "Nxe4",
     "f5"
    ],
    "legendes": [
     "Les blancs prennent ton cavalier.",
     "Reprends avec le pion g : colonne g et paire de fous.",
     "Les blancs reprennent leur pion.",
     "Le pion chasse le cavalier."
    ],
    "fin": "",
    "titre": "Burn : 5.Fxf6 gxf6 !",
    "marques": [
     [
      "f6!"
     ],
     [
      "f6!",
      "c8",
      "f8"
     ],
     [
      "e4!"
     ],
     [
      "f5",
      "e4!"
     ],
     []
    ]
   },
   "qf2e5104df": {
    "debut": [],
    "coups": [
     "e4",
     "e6"
    ],
    "legendes": [
     "Les blancs jouent 1.e4.",
     "La française : tu prépares …d5."
    ],
    "fin": "",
    "titre": "1.e4 e6",
    "marques": [
     [
      "e4"
     ],
     [
      "e6",
      "d5"
     ],
     []
    ]
   },
   "qeb95eb4e9": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d4",
     "d5"
    ],
    "legendes": [
     "Les blancs prennent le centre.",
     "Tu attaques e4."
    ],
    "fin": "",
    "titre": "2.d4 d5",
    "marques": [
     [
      "d4",
      "e4"
     ],
     [
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "q905fad9b4": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "L'avance.",
     "Tu attaques la base d4."
    ],
    "fin": "",
    "titre": "Avance : 3…c5",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "qadd44dab6": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "c3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs soutiennent d4.",
     "Deuxième attaquant sur d4."
    ],
    "fin": "",
    "titre": "Avance : 4.c3 Cc6",
    "marques": [
     [
      "c3",
      "d4!"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q1b98798b2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5"
    ],
    "legendes": [
     "Les blancs prennent en c5.",
     "Le fou reprend en se développant."
    ],
    "fin": "",
    "titre": "Avance : 4.dxc5 Fxc5",
    "marques": [
     [
      "c5!"
     ],
     [
      "c5!"
     ],
     []
    ]
   },
   "q9b99194ae": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "Les blancs défendent d4.",
     "La dame vise b2, et d4 derrière ton pion c5."
    ],
    "fin": "",
    "titre": "Avance : 5.Cf3 Db6",
    "marques": [
     [
      "f3",
      "d4!"
     ],
     [
      "b6",
      "d4!",
      "b2!"
     ],
     []
    ]
   },
   "q25043273e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "L'échange.",
     "Reprends avec le pion : ton fou c8 est libéré."
    ],
    "fin": "",
    "titre": "Échange : 3…exd5",
    "marques": [
     [
      "d5!"
     ],
     [
      "d5!",
      "c8"
     ],
     []
    ]
   },
   "q07b1c55f5": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Toi aussi."
    ],
    "fin": "",
    "titre": "Échange : 4.Cf3 Cf6",
    "marques": [
     [
      "f3"
     ],
     [
      "f6"
     ],
     []
    ]
   },
   "qd2213b49e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant."
    ],
    "fin": "",
    "titre": "Échange : 4.De2+ Fe7",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     []
    ]
   },
   "qe69740756": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "Le fou vise h7.",
     "En miroir : ton fou vise h2."
    ],
    "fin": "",
    "titre": "Échange : 5.Fd3 Fd6",
    "marques": [
     [
      "d3",
      "h7!"
     ],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q22d1b3b29": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4 une deuxième fois."
    ],
    "fin": "",
    "titre": "Classique : 3…Cf6",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "qdac19d728": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "Le pion chasse ton cavalier.",
     "Il rentre en d7.",
     "Les blancs soutiennent d4.",
     "Tu frappes d4."
    ],
    "fin": "",
    "titre": "Classique : 4.e5 Cfd7 5.Cf3 c5",
    "marques": [
     [
      "e5",
      "f6!"
     ],
     [
      "d7"
     ],
     [
      "f3",
      "d4"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q9d338c178": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4"
    ],
    "legendes": [
     "Le clouage.",
     "Tu échanges d5 contre e4."
    ],
    "fin": "",
    "titre": "Classique : 4.Fg5 dxe4",
    "marques": [
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "q9ccab60f9": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "Les blancs reprennent.",
     "Tu décloues ; ton cavalier attaque e4."
    ],
    "fin": "",
    "titre": "Burn : 5.Cxe4 Fe7",
    "marques": [
     [
      "e4!"
     ],
     [
      "e7",
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q4f50b8890": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Bd7"
    ],
    "legendes": [
     "Échec.",
     "Interpose le fou : tu proposes l'échange de ton mauvais fou."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.e5 c5 4.Fb5+ Fd7",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "d7",
      "b5",
      "e8!"
     ],
     []
    ]
   },
   "q4c0712b27": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion : le fou c4 est de nouveau attaqué."
    ],
    "fin": "",
    "titre": "2.Fc4 d5 3.exd5 exd5",
    "marques": [
     [
      "d5!"
     ],
     [
      "d5",
      "c4!"
     ],
     []
    ]
   },
   "q315c6f16d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs avancent.",
     "Tu frappes la base.",
     "Les blancs soutiennent d4.",
     "Deuxième attaquant ; ton cavalier g8 sortira par e7 ou h6, pas par f6."
    ],
    "fin": "",
    "titre": "Avance : …c5 et …Cc6, pas …Cf6",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4!"
     ],
     [
      "c6",
      "d4!",
      "g8",
      "f6!"
     ],
     []
    ]
   },
   "q3b8890834": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5"
    ],
    "coups": [
     "Nf6",
     "exf6"
    ],
    "legendes": [
     "Le cavalier sort… sur une case contrôlée par le pion e5.",
     "Le pion le prend : une pièce de moins (+3,7)."
    ],
    "fin": "",
    "titre": "Avance : 3…Cf6 ??",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "f6!",
      "e5"
     ],
     [
      "f6!"
     ],
     []
    ]
   },
   "q05ab1a36a": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3",
     "cxd4",
     "cxd4"
    ],
    "coups": [
     "Nxd4",
     "Nxd4",
     "Qxd4",
     "Bb5+"
    ],
    "legendes": [
     "Tu prends d4 tout de suite…",
     "Les blancs reprennent.",
     "Ta dame reprend, en face de la dame d1, cachée derrière le fou d3…",
     "…et le fou s'en va avec échec : la dame d1 attaque la tienne. Tu perds ta dame (+6,8)."
    ],
    "fin": "",
    "titre": "Avance : 7…Cxd4 ?? et Fb5+",
    "couleurs": [
     "r",
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "d4!"
     ],
     [],
     [
      "d4!",
      "d1",
      "d3"
     ],
     [
      "b5",
      "e8!",
      "d1",
      "d4!"
     ],
     []
    ]
   },
   "qf6a0cad58": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Nc6",
     "Qxg7"
    ],
    "legendes": [
     "Tu développes sans regarder la dame g4.",
     "Elle prend g7 et attaque ta tour h8 (+3,9)."
    ],
    "fin": "",
    "titre": "4.dxc5 Fxc5 5.Dg4 Cc6 ??",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "c6",
      "g4",
      "g7!"
     ],
     [
      "g7",
      "h8!"
     ],
     []
    ]
   },
   "qfbac92fb5": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5",
     "dxc5",
     "Nc6",
     "Bf4",
     "Bxc5",
     "Bd3"
    ],
    "coups": [
     "O-O",
     "Bxh7+"
    ],
    "legendes": [
     "Tu roques… sans fou ni cavalier pour défendre h7 et g5.",
     "Le fou se sacrifie en h7 : les blancs sont nettement mieux (+1,8)."
    ],
    "fin": "",
    "titre": "Classique : 8…0-0 ? Fxh7+",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "g8",
      "h7!",
      "g5"
     ],
     [
      "h7!",
      "g8"
     ],
     []
    ]
   },
   "qb0a601108": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Échec.",
     "Le cavalier bouche l'échec, et ton fou c8 reste enfermé derrière e6 (+0,4)."
    ],
    "fin": "",
    "titre": "2.Cf3 d5 3.e5 c5 4.Fb5+ Cc6 ?!",
    "couleurs": [
     "g",
     "r"
    ],
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5",
      "c8",
      "e6"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "q76e351bbd",
    "titre": "Avance : la ligne principale",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "Les blancs avancent et ferment le centre. Leur chaîne de pions d4-e5 prend de l'espace… mais toute chaîne a une base. Ici, c'est d4.",
     "Tu attaques la base tout de suite : <span class=\"mv good\">3…c5</span>. C'est LE coup de la française. Sans lui, tu étouffes.",
     "Les blancs soutiennent d4 avec le pion c (50 %). Sur <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Cf3</a>, même réponse.",
     "Deuxième attaquant sur d4. Pas de …Cf6 dans cette variante : le pion e5 prendrait ton cavalier (voir les exceptions).",
     "Les blancs défendent d4 une troisième fois. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Fb5</a> et <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Fe3</a>.",
     "<span class=\"mv good\">5…Db6</span> : ta dame se prépare à frapper d4 et vise déjà le pion b2."
    ]
   },
   {
    "id": "qcf913e84e",
    "titre": "Avance : 4.Cf3 Cc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs développent au lieu de soutenir d4 avec c3.",
     "Même réponse : le cavalier attaque d4."
    ]
   },
   {
    "id": "qc30bc31e9",
    "titre": "Avance : 5.Fb5 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "Le fou cloue ton cavalier c6.",
     "La dame attaque le fou b5. Une fois le fou parti, elle visera b2 et d4."
    ]
   },
   {
    "id": "q718425163",
    "titre": "Avance : 5.Fe3 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "Qb6"
    ],
    "legendes": [
     "Le fou défend d4.",
     "Même plan : la dame vise b2, que le fou e3 ne défend plus, et d4."
    ]
   },
   {
    "id": "q0eca7d64b",
    "titre": "Avance, 4.Cf3 Cc6 5.Fb5 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "Le fou cloue ton cavalier.",
     "La dame attaque le fou b5."
    ]
   },
   {
    "id": "q7a0026f6b",
    "titre": "Avance, 4.Cf3 Cc6 5.c3 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "c3",
     "Qb6"
    ],
    "legendes": [
     "Les blancs soutiennent d4 : on retombe dans la ligne principale.",
     "Ta dame vise b2, et d4 derrière ton pion c5, comme d'habitude."
    ]
   },
   {
    "id": "qa2013ae9d",
    "titre": "Avance, 4.Cf3 Cc6 5.Fe3 cxd4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "cxd4"
    ],
    "legendes": [
     "Le fou défend d4.",
     "Tu prends en d4 tout de suite : si le cavalier f3 reprend, le pion e5 n'aura plus de défenseur."
    ]
   },
   {
    "id": "q643c602b3",
    "titre": "4.dxc5 : le fou reprend",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5",
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs prennent en c5 (5 % des parties) : ils abandonnent la base de leur chaîne.",
     "Reprends tout de suite avec le fou : il se développe sur une belle diagonale, qui vise f2.",
     "Les blancs défendent e5. Contre <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Cc3</a> ou <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Fb5+</a>, même réponse.",
     "Tu attaques e5 à ton tour. Ensuite …f6 ou …Dc7."
    ]
   },
   {
    "id": "q6f71ee263",
    "titre": "Avance, 4.dxc5 Fxc5 5.Cc3 Cc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Nc3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Tu attaques e5, qui n'a plus de pion d4 pour le soutenir."
    ]
   },
   {
    "id": "q5c03a7d7d",
    "titre": "Avance, 4.dxc5 Fxc5 5.Fb5+ Cc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Échec.",
     "Interpose le cavalier : il se développe et attaque e5."
    ]
   },
   {
    "id": "qb2ed36575",
    "titre": "Échange : la ligne principale",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nf3",
     "Nf6",
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "Les blancs échangent. La position devient symétrique et calme.",
     "Reprends avec le pion. Bonne nouvelle : la diagonale c8-h3 s'ouvre, ton fou c8 n'est plus enfermé.",
     "Développement.",
     "Même chose pour toi.",
     "Le fou blanc vise h7. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Cc3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Fg5</a>.",
     "Tu fais pareil : <span class=\"mv\">5…Fd6</span> vise h2. Ensuite <span class=\"mv\">…0-0</span>, <span class=\"mv\">…Te8</span> sur la colonne ouverte, <span class=\"mv\">…Fg4</span>."
    ]
   },
   {
    "id": "qc8d612ba1",
    "titre": "Échange : 5.Cc3 Fd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Nc3",
     "Bd6"
    ],
    "legendes": [
     "Les blancs développent.",
     "En miroir : ton fou vise h2."
    ]
   },
   {
    "id": "q3656d1200",
    "titre": "Échange : 5.Fg5 Fe7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f6.",
     "Décloue : contre Fg5, ton fou va toujours en e7."
    ]
   },
   {
    "id": "q1deb7307e",
    "titre": "Échange : 5.Ff4 Fd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "Bd6"
    ],
    "legendes": [
     "Le fou blanc sort en f4.",
     "Tu proposes l'échange des fous : ton fou d6 neutralise le sien."
    ]
   },
   {
    "id": "q2ae34efee",
    "titre": "5.Fg5 : pourquoi Fe7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "Le fou cloue ton cavalier f6 contre ta dame. Le pion d5 est attaqué par le cavalier c3, et défendu par ton cavalier et par ta dame.",
     "<span class=\"mv good\">5…Fe7</span> décloue le cavalier, et ta dame garde la colonne d vers d5. Sur <a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Fd6 ?</a>, le fou coupe ta dame de d5 : il ne reste que le cavalier cloué, et 6.Cxd5 ! gagne un pion (+1,7). Si 6…Cxd5, 7.Fxd8."
    ]
   },
   {
    "id": "q98712d8c3",
    "titre": "4.De2+ : interpose le fou",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "Échec de la dame (10 %).",
     "Interpose le fou en développant. Stockfish trouve déjà cette position meilleure pour toi (−0,4) : la dame blanche bouche la sortie de son propre fou f1.",
     "Les blancs développent. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Cc3</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Fg5</a>.",
     "Développe ton cavalier."
    ]
   },
   {
    "id": "qda61c904f",
    "titre": "Échange, 4.De2+ Fe7 5.Cc3 Cf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Développe ton cavalier."
    ]
   },
   {
    "id": "qa8ce55619",
    "titre": "Échange, 4.De2+ Fe7 5.Fg5 Cc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Bg5",
     "Nc6"
    ],
    "legendes": [
     "Le fou attaque ton fou e7, cloué sur ton roi par la dame e2.",
     "Le cavalier sort par c6 : sur …Cf6, Fxf6 t'obligerait à reprendre avec le pion g, car ton fou e7 ne peut pas bouger."
    ]
   },
   {
    "id": "q3cb05ee94",
    "titre": "4.e5 : le cavalier rentre en d7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "Les blancs défendent e4 avec le cavalier.",
     "Tu attaques e4 une deuxième fois.",
     "Les blancs poussent et chassent ton cavalier (58 %). Ton cavalier doit rentrer.",
     "Il rentre en d7, et c'est la bonne case : Stockfish la préfère nettement à …Ce4 ou …Cg8 (+0,4 contre +0,9 et +1,0). De d7, il soutient …c5 et pourra attaquer e5.",
     "Les blancs soutiennent e5 et d4.",
     "Et voilà le coup de la française : <span class=\"mv good\">5…c5</span>, tu frappes d4. Même réponse contre <a class=\"lien-var\" href=\"#\" data-var=\"q722e2d9e8\">5.f4</a> et contre <a class=\"lien-var\" href=\"#\" data-var=\"qcdc3eef57\">5.Fb5</a>."
    ]
   },
   {
    "id": "q722e2d9e8",
    "titre": "Classique : 5.f4 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "f4",
     "c5"
    ],
    "legendes": [
     "Les blancs renforcent e5.",
     "Même réponse : …c5 frappe d4."
    ]
   },
   {
    "id": "qcdc3eef57",
    "titre": "Classique : 5.Fb5 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "Bb5",
     "c5"
    ],
    "legendes": [
     "Le fou cloue ton cavalier d7.",
     "Même réponse : …c5 frappe d4."
    ]
   },
   {
    "id": "q22d07b5f2",
    "titre": "Classique : 4.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion : c'est la variante d'échange."
    ]
   },
   {
    "id": "q5dd86a571",
    "titre": "4.Fg5 : la variante Burn",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "Les blancs clouent ton cavalier f6.",
     "<span class=\"mv good\">4…dxe4</span> : tu échanges ton pion d5 contre e4. Le cavalier f6 n'a plus de pion d5 à défendre.",
     "Les blancs reprennent (65 %).",
     "Tu décloues. Attention : ton cavalier f6 attaque maintenant le cavalier e4, que rien ne défend."
    ]
   },
   {
    "id": "q0b8f474f7",
    "titre": "Burn : 6.Cf3 ?? Cxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4"
    ],
    "legendes": [
     "Les blancs développent, mais leur cavalier e4 n'est pas défendu.",
     "Prends-le : ton cavalier n'est plus cloué, le fou e7 protège la dame."
    ]
   },
   {
    "id": "q7cbbdd8af",
    "titre": "Burn : 6.Fxf6 Fxf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nf3"
    ],
    "legendes": [
     "Les blancs échangent sur f6 : la bonne suite pour eux.",
     "Reprends avec le fou : il devient un bon fou sur la grande diagonale.",
     "Les blancs développent."
    ]
   },
   {
    "id": "q1030cfc72",
    "titre": "5.Fxf6 : reprends avec le pion",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "gxf6",
     "Nxe4",
     "f5"
    ],
    "legendes": [
     "Les blancs prennent ton cavalier tout de suite (23 %).",
     "<span class=\"mv good\">5…gxf6</span> ! Reprends avec le pion g, pas avec la dame. Les pions doublés ne te gênent pas : tu gagnes la colonne g pour ta tour, et la paire de fous.",
     "Les blancs reprennent leur pion.",
     "Le pion f chasse le cavalier : tu gagnes un temps."
    ]
   },
   {
    "id": "q7a0932fc1",
    "titre": "Burn : 5.f3 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "Les blancs offrent un pion pour ouvrir la colonne f.",
     "Tu frappes d4 au lieu de défendre e4."
    ]
   },
   {
    "id": "q24100b877",
    "titre": "3.e5 c5 4.Fb5+",
    "debut": [
     "e4",
     "e6",
     "Nf3"
    ],
    "coups": [
     "d5",
     "e5",
     "c5",
     "Bb5+",
     "Bd7",
     "Bxd7+",
     "Nxd7"
    ],
    "legendes": [
     "Toujours le même coup.",
     "L'avance, mais sans pion en d4. Les autres coups : <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Cc3 Cf6 4.e5 Cfd7</a>.",
     "Tu prends de l'espace à l'aile dame, comme d'habitude.",
     "Échec.",
     "<span class=\"mv good\">4…Fd7</span> : tu proposes l'échange de ton fou c8, celui qui est enfermé par e6. Bien mieux que 4…Cc6 (−0,4 contre +0,4).",
     "Les blancs échangent (65 %).",
     "Reprends avec le cavalier : Stockfish le préfère à la dame."
    ]
   },
   {
    "id": "q0186a3787",
    "titre": "2.Cf3 d5 3.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "d4",
     "Bd6"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion.",
     "Les blancs développent.",
     "Toi aussi.",
     "Les blancs jouent d4 : c'est la variante d'échange.",
     "En miroir : ton fou vise h2."
    ]
   },
   {
    "id": "q6e0727167",
    "titre": "2.Cf3 d5 3.Cc3 Cf6 4.e5",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "d4",
     "c5"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4.",
     "Le pion chasse ton cavalier.",
     "Il rentre en d7.",
     "Les blancs complètent la chaîne.",
     "Comme dans le classique : …c5 frappe d4."
    ]
   },
   {
    "id": "q60db66247",
    "titre": "2.Cf3 d5 3.exd5 exd5 4.De2+ Fe7 5.Db5+ c6",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Qb5+",
     "c6"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant.",
     "La dame continue.",
     "Le pion c6 bouche l'échec et attaque la dame, qui doit encore bouger."
    ]
   },
   {
    "id": "q4b8196402",
    "titre": "2.Cf3 d5 3.Cc3 Cf6 4.d3 c5 5.Fg5 d4",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "d3",
     "c5",
     "Bg5",
     "d4"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4.",
     "Les blancs soutiennent e4 avec un pion.",
     "Tu prends de l'espace.",
     "Le fou cloue ton cavalier.",
     "Le pion avance et chasse le cavalier c3."
    ]
   },
   {
    "id": "q221770c6e",
    "titre": "2.Fc4 d5 : le fou se fait chasser",
    "debut": [
     "e4",
     "e6",
     "Bc4"
    ],
    "coups": [
     "d5",
     "exd5",
     "exd5",
     "Bb3",
     "Nf6",
     "Nf3",
     "Bd6"
    ],
    "legendes": [
     "<span class=\"mv good\">2…d5</span> ! Le pion attaque le fou c4 et le pion e4 en même temps.",
     "Les blancs échangent (93 %). Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Fb3</a> et <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Fb5+</a>.",
     "Reprends avec le pion : le fou c4 est de nouveau attaqué.",
     "Il recule. Les autres : <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Fb5+</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.De2+</a>.",
     "Développement normal.",
     "Les blancs aussi.",
     "Puis …0-0 et …Te8. Le fou blanc a déjà joué deux fois pour rien."
    ]
   },
   {
    "id": "qff3738e44",
    "titre": "2.Fc4 d5 3.Fb3 dxe4",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb3",
     "dxe4"
    ],
    "legendes": [
     "Le fou recule sans échanger.",
     "Prends le pion e4 : il n'est pas défendu."
    ]
   },
   {
    "id": "qdeba3c71f",
    "titre": "2.Fc4 d5 3.Fb5+ c6",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec.",
     "Le pion bouche l'échec et chasse le fou."
    ]
   },
   {
    "id": "q480cdffa7",
    "titre": "2.Fc4 d5 3.exd5 exd5 4.Fb5+ c6",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec du fou.",
     "Le pion c6 bouche l'échec et attaque le fou, qui doit encore bouger."
    ]
   },
   {
    "id": "q6fcf7f369",
    "titre": "2.Fc4 d5 3.exd5 exd5 4.De2+ Fe7",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant."
    ]
   },
   {
    "id": "q126ae3a42",
    "titre": "Transposition vers l'échange",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "exd5",
     "exd5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "Échange.",
     "Reprends avec le pion.",
     "Les blancs jouent d4 : c'est l'échange.",
     "Développe."
    ]
   },
   {
    "id": "q5e67e8b12",
    "titre": "Transposition vers l'avance",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "e5",
     "c5",
     "d4",
     "Nc6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "Les blancs avancent.",
     "Tu prends de l'espace et tu contrôles d4.",
     "Les blancs jouent d4 : c'est l'avance.",
     "Deuxième attaquant sur d4."
    ]
   },
   {
    "id": "qf2e5104df",
    "titre": "1.e4 e6",
    "debut": [],
    "coups": [
     "e4",
     "e6"
    ],
    "legendes": [
     "Les blancs jouent 1.e4.",
     "La française : tu prépares …d5."
    ]
   },
   {
    "id": "qeb95eb4e9",
    "titre": "2.d4 d5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d4",
     "d5"
    ],
    "legendes": [
     "Les blancs prennent le centre.",
     "Tu attaques e4."
    ]
   },
   {
    "id": "q905fad9b4",
    "titre": "Avance : 3…c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "L'avance.",
     "Tu attaques la base d4."
    ]
   },
   {
    "id": "qadd44dab6",
    "titre": "Avance : 4.c3 Cc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "c3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs soutiennent d4.",
     "Deuxième attaquant sur d4."
    ]
   },
   {
    "id": "q1b98798b2",
    "titre": "Avance : 4.dxc5 Fxc5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5"
    ],
    "legendes": [
     "Les blancs prennent en c5.",
     "Le fou reprend en se développant."
    ]
   },
   {
    "id": "q9b99194ae",
    "titre": "Avance : 5.Cf3 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "Les blancs défendent d4.",
     "La dame vise b2, et d4 derrière ton pion c5."
    ]
   },
   {
    "id": "q25043273e",
    "titre": "Échange : 3…exd5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "L'échange.",
     "Reprends avec le pion : ton fou c8 est libéré."
    ]
   },
   {
    "id": "q07b1c55f5",
    "titre": "Échange : 4.Cf3 Cf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs développent.",
     "Toi aussi."
    ]
   },
   {
    "id": "qd2213b49e",
    "titre": "Échange : 4.De2+ Fe7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Échec de la dame.",
     "Interpose le fou en développant."
    ]
   },
   {
    "id": "qe69740756",
    "titre": "Échange : 5.Fd3 Fd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "Le fou vise h7.",
     "En miroir : ton fou vise h2."
    ]
   },
   {
    "id": "q22d1b3b29",
    "titre": "Classique : 3…Cf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "Les blancs défendent e4.",
     "Tu attaques e4 une deuxième fois."
    ]
   },
   {
    "id": "qdac19d728",
    "titre": "Classique : 4.e5 Cfd7 5.Cf3 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "Le pion chasse ton cavalier.",
     "Il rentre en d7.",
     "Les blancs soutiennent d4.",
     "Tu frappes d4."
    ]
   },
   {
    "id": "q9d338c178",
    "titre": "Classique : 4.Fg5 dxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4"
    ],
    "legendes": [
     "Le clouage.",
     "Tu échanges d5 contre e4."
    ]
   },
   {
    "id": "q9ccab60f9",
    "titre": "Burn : 5.Cxe4 Fe7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "Les blancs reprennent.",
     "Tu décloues ; ton cavalier attaque e4."
    ]
   },
   {
    "id": "q4f50b8890",
    "titre": "2.Cf3 d5 3.e5 c5 4.Fb5+ Fd7",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Bd7"
    ],
    "legendes": [
     "Échec.",
     "Interpose le fou : tu proposes l'échange de ton mauvais fou."
    ]
   },
   {
    "id": "q4c0712b27",
    "titre": "2.Fc4 d5 3.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "Les blancs échangent.",
     "Reprends avec le pion : le fou c4 est de nouveau attaqué."
    ]
   },
   {
    "id": "q621dcb38f",
    "titre": "Avance : 6.Fd3 cxd4 7.cxd4 Fd7 !",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Bd7",
     "O-O",
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "Tu prends en d4.",
     "Les blancs reprennent.",
     "Le fou va couvrir b5 dès que ton cavalier c6 bougera : plus de Fb5+ possible. Ne prends pas encore en d4.",
     "Les blancs roquent.",
     "Maintenant tu peux prendre d4 : le fou d7 empêche Fb5+.",
     "Les blancs échangent.",
     "Ta dame reprend, en sécurité : tu as gagné un pion."
    ]
   },
   {
    "id": "q0644bbae2",
    "titre": "Avance, 4.dxc5 Fxc5 5.Dg4 Ce7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7"
    ],
    "legendes": [
     "Le cavalier sort en e7 sans bloquer ton jeu. Le pion g7 n'est pas défendu, mais si la dame le prend, ta tour vient en g8 et la chasse."
    ]
   },
   {
    "id": "q1e1753281",
    "titre": "Avance : trois attaquants contre deux",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Be2"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Nge7",
     "O-O",
     "Nf5",
     "Nc3",
     "Nfxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "Tu prends en d4. Quand le pion c3 aura repris, plus aucun pion ne soutiendra d4.",
     "Les blancs reprennent.",
     "Le cavalier g8 prend la route de f5 (…Ch6 puis …Cf5 se joue aussi).",
     "<span class=\"mv bad\">8.0-0</span> ? Les blancs roquent, mais d4 n'a que deux défenseurs.",
     "Troisième attaquant sur d4 : il y en a maintenant trois. Stockfish passe de +0,4 à −0,9.",
     "Les blancs développent… et oublient de compter.",
     "<span class=\"mv good\">9…Cfxd4</span> ! Prends avec le cavalier f5. Celui de c6 reste en place : il bouche la diagonale de ton roi (pas de Fb5+) et vise e5. Après 9…Ccxd4 ?!, 10.Fd3 attaquerait le cavalier f5, et les blancs auraient assez de jeu pour leur pion (−0,1).",
     "Les blancs reprennent.",
     "Ta dame reprend : un pion de plus, et elle attaque e5 et la dame d1."
    ]
   },
   {
    "id": "q3bfed4174",
    "titre": "Avance 4.dxc5 : la rupture …f6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5",
     "Nf3",
     "Nc6",
     "Bd3",
     "f6",
     "Qe2",
     "fxe5",
     "Nxe5",
     "Nxe5",
     "Qxe5",
     "Nf6"
    ],
    "legendes": [
     "Les blancs prennent en c5 : la chaîne n'a plus de base.",
     "Le fou reprend en se développant.",
     "Le cavalier défend e5.",
     "Tu attaques e5.",
     "Le fou vise h7.",
     "<span class=\"mv good\">6…f6</span> ! Sans pion d4, e5 n'a que le cavalier f3 pour le défendre. Tu l'attaques une deuxième fois.",
     "La dame soutient e5.",
     "Tu prends.",
     "Le cavalier reprend.",
     "Tu échanges.",
     "La dame reprend : le pion e5 a disparu.",
     "Tu développes. Ton centre d5-e6 est libre, et ta tour ira sur la colonne f après le roque."
    ]
   },
   {
    "id": "qe1ac3c984",
    "titre": "Échange : les pièces d'abord",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6",
     "Bd3",
     "Bd6",
     "O-O",
     "O-O",
     "Bg5",
     "Bg4",
     "Nbd2",
     "Re8"
    ],
    "legendes": [
     "Développement.",
     "Toi aussi.",
     "Le fou vise h7.",
     "En miroir : ton fou vise h2.",
     "Les blancs roquent.",
     "Toi aussi.",
     "Le fou cloue ton cavalier f6.",
     "Tu fais pareil : ton fou cloue le cavalier f3.",
     "Le cavalier sort.",
     "<span class=\"mv good\">8…Te8</span> : la tour prend la colonne ouverte."
    ]
   },
   {
    "id": "q4d544098b",
    "titre": "Burn : …c5 et le pion isolé",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7",
     "Bxf6",
     "Bxf6",
     "Nf3",
     "O-O"
    ],
    "coups": [
     "Bc4",
     "c5",
     "c3",
     "cxd4",
     "cxd4",
     "Nc6"
    ],
    "legendes": [
     "Le fou vise e6.",
     "<span class=\"mv good\">8…c5</span> ! La rupture : tu attaques d4.",
     "Les blancs soutiennent d4.",
     "Tu échanges.",
     "Les blancs reprennent avec le pion : d4 est maintenant <em>isolé</em>, aucun pion voisin (c ou e) ne peut le défendre.",
     "Le cavalier attaque d4 à son tour : trois attaquants (fou f6, cavalier c6, dame d8)."
    ]
   },
   {
    "id": "q417c44d8e",
    "titre": "Burn : 6.Cf3 ?? Cxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4",
     "Bxe7",
     "Qxe7"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Cf3</span> ?? Les blancs développent… et oublient que leur cavalier e4 n'est pas défendu.",
     "<span class=\"mv good\">6…Cxe4</span> ! Ton cavalier n'est plus cloué (le fou e7 protège la dame) : il prend.",
     "Les blancs échangent les fous…",
     "…et tu as une pièce de plus."
    ]
   },
   {
    "id": "q40330eae4",
    "titre": "Avance : 6.Fe3 ? Dxb2",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6"
    ],
    "coups": [
     "Be3",
     "Qxb2"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Fe3</span> ? Le fou défend d4… mais il ne défend plus b2.",
     "<span class=\"mv good\">6…Dxb2</span> ! Un pion gratuit, et ta dame menace la tour a1."
    ]
   },
   {
    "id": "qd7776a221",
    "titre": "Avance : 5.Fe3 cxd4 6.Cxd4 ?",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6",
     "Be3"
    ],
    "coups": [
     "cxd4",
     "Nxd4",
     "Nxe5"
    ],
    "legendes": [
     "Tu prends en d4.",
     "<span class=\"mv bad\">6.Cxd4</span> ? Le cavalier reprend, mais il ne défend plus e5.",
     "<span class=\"mv good\">6…Cxe5</span> : un pion central gratuit."
    ]
   },
   {
    "id": "q23cf26d7c",
    "titre": "Classique : 6.Fd3 ? cxd4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "coups": [
     "Bd3",
     "cxd4",
     "Nxd4",
     "Nxe5"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Fd3</span> ? Développement naturel, mais d4 va tomber.",
     "Tu prends en d4, et ton pion attaque le cavalier c3.",
     "Les blancs reprennent avec le cavalier f3… qui défendait e5.",
     "<span class=\"mv good\">7…Cxe5</span> : ton cavalier d7 prend e5 et attaque le fou d3."
    ]
   },
   {
    "id": "q6631cd413",
    "titre": "2.Fc4 : 4.Fxd5 ??",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bxd5",
     "Qxd5"
    ],
    "legendes": [
     "<span class=\"mv bad\">4.Fxd5</span> ?? Le pion d5 a l'air de pendre…",
     "…mais ta dame le défendait. Une pièce de plus."
    ]
   },
   {
    "id": "q837fb5f81",
    "titre": "3.Fg5 ??",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bg5",
     "Qxg5"
    ],
    "legendes": [
     "<span class=\"mv bad\">3.Fg5</span> ?? Le fou vient attaquer ta dame… sur une case que ta dame contrôle.",
     "Prends-le. Une pièce de plus (−4,6)."
    ]
   },
   {
    "id": "q85034861e",
    "titre": "Avance : après Fxc6+, 6…bxc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "bxc6"
    ],
    "legendes": [
     "Reprends tout de suite avec le pion b : il soutient d5, et la colonne b s'ouvre pour ta dame vers b2."
    ]
   },
   {
    "id": "q85dc2f165",
    "titre": "5.Dg4 Ce7 6.Dxg7 Tg8 7.Dxh7 Db6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7",
     "Qxg7",
     "Rg8",
     "Qxh7",
     "Qb6"
    ],
    "legendes": [
     "Le cavalier sort en e7.",
     "La dame prend g7…",
     "La tour attaque la dame.",
     "La dame prend h7…",
     "…et ta dame vise f2 avec ton fou c5 : c'est toi qui attaques."
    ]
   },
   {
    "id": "q646d2d492",
    "titre": "Échange : 5.Fg5 Fe7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7"
    ],
    "legendes": [
     "Décloue : ta dame continue de défendre d5."
    ]
   },
   {
    "id": "q315c6f16d",
    "titre": "Avance : …c5 et …Cc6, pas …Cf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "legendes": [
     "Les blancs avancent.",
     "Tu frappes la base.",
     "Les blancs soutiennent d4.",
     "Deuxième attaquant ; ton cavalier g8 sortira par e7 ou h6, pas par f6."
    ]
   },
   {
    "id": "qba48194ee",
    "titre": "2.De2 c5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qe2",
     "c5"
    ],
    "legendes": [
     "La dame sort en e2.",
     "Joue …c5 : tu prends de l'espace sans ouvrir la colonne e devant ton roi."
    ]
   },
   {
    "id": "q2817eb383",
    "titre": "Exercice 1 : compte les défenseurs de d4",
    "debut": [],
    "coups": [
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Cxd4</span> ! Compte : d4 est attaqué par ton cavalier c6 et ta dame b6. Il n'a qu'un défenseur, le cavalier f3 : la dame d1 est bouchée par le fou d3. Et le piège Fb5+ ne marche plus, ton fou d7 couvre b5.",
     "Les blancs reprennent.",
     "Ta dame reprend : un pion de plus, au centre."
    ],
    "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 2 8"
   },
   {
    "id": "qf1aa155cc",
    "titre": "Exercice 2 : un renfort pour l'attaque",
    "debut": [],
    "coups": [
     "Nf5"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Cf5</span> ! Le cavalier e7 vient attaquer d4 à son tour. Compte : trois attaquants (cavaliers c6 et f5, dame b6) contre deux défenseurs (cavalier f3, dame d1)."
    ],
    "fen": "r1b1kb1r/pp2nppp/1qn1p3/3pP3/3P4/P4N2/1P2BPPP/RNBQK2R b KQkq - 0 8"
   },
   {
    "id": "qb0af03074",
    "titre": "Exercice 3 : le fou c1 a bougé",
    "debut": [],
    "coups": [
     "Qxb2"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Dxb2</span> ! Le fou e3 défend d4… mais il a quitté c1, d'où il défendait b2. Ta dame prend un pion et menace la tour a1."
    ],
    "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3BBN2/PP3PPP/RN1QK2R b KQkq - 2 8"
   },
   {
    "id": "qf0d0c9eca",
    "titre": "Exercice 4 : la dame blanche a fait un long voyage",
    "debut": [],
    "coups": [
     "Bxf2+",
     "Kd1",
     "Bxg1"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Fxf2+</span> ! Ta dame b6 et ton fou c5 visaient f2, que seul le roi défendait. Le fou prend avec échec.",
     "Le roi doit bouger.",
     "<span class=\"mv good\">9…Fxg1</span> ! Le fou prend aussi le cavalier g1. Si 10.Txg1, ta dame reprend en g1."
    ],
    "fen": "rnb1k1r1/pp2np2/1q2p3/2bpP3/8/3Q4/PPP2PPP/RNB1KBNR b KQq - 2 8"
   },
   {
    "id": "q4084c4eed",
    "titre": "Exercice 5 : la pointe de la chaîne",
    "debut": [],
    "coups": [
     "f6",
     "exf6",
     "Qxf6"
    ],
    "legendes": [
     "<span class=\"mv good\">11…f6</span> ! Il n'y a plus de pion d4 : la chaîne n'a plus de base. Tu attaques donc la pointe, e5, déjà visée par ton cavalier c6.",
     "Les blancs prennent.",
     "<span class=\"mv good\">12…Dxf6</span> ! La dame reprend et la colonne f s'ouvre : ta dame et ta tour f8 pèsent sur le cavalier f3 et sur f2, que ton fou b6 vise déjà."
    ],
    "fen": "r1bq1rk1/1p3ppp/pbn1p3/3pP3/P7/1N3N2/1PP1QPPP/R1B1K2R b KQ - 1 11"
   },
   {
    "id": "q9cbd2c570",
    "titre": "Exercice 6 : le sacrifice grec",
    "debut": [],
    "coups": [
     "Kxh7",
     "Ng5+",
     "Bxg5"
    ],
    "legendes": [
     "<span class=\"mv good\">10…Rxh7</span> ! Accepte le sacrifice. Refuser avec 10…Rh8 laisse aux blancs un pion de plus et ton roi ouvert (+1,3). Pour savoir si le sacrifice marche, regarde la suite.",
     "Le cavalier saute en g5 avec échec : c'est le plan des blancs.",
     "<span class=\"mv good\">11…Fxg5</span> ! Ton fou e7 garde g5 : il prend le cavalier. Si 12.Fxg5, 12…Dxg5."
    ],
    "fen": "r1bq1rk1/pp2bppB/2n1p3/2npP3/5B2/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 10"
   },
   {
    "id": "q257a444ac",
    "titre": "Exercice 7 : le cavalier recule",
    "debut": [],
    "coups": [
     "Qxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">7…Dxd4</span> ! En reculant en d2, le cavalier a coupé la dame d1 de son pion d4. Plus rien ne défend d4 : ta dame le prend."
    ],
    "fen": "rnbqkb1r/ppp2p1p/4p3/5p2/3P4/8/PPPN1PPP/R2QKBNR b KQkq - 1 7"
   },
   {
    "id": "q6fe165385",
    "titre": "Exercice 8 : le pion isolé",
    "debut": [],
    "coups": [
     "Bxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">11…Fxd4</span> ! Compte : d4 est attaqué trois fois (fou f6, cavalier c6, dame d8) et défendu deux fois (cavalier f3, dame d2). Le fou prend, et ta dame d8 le soutient."
    ],
    "fen": "r1bq1rk1/pp3ppp/2n1pb2/8/2BPN3/5N2/PP1Q1PPP/R3K2R b KQ - 2 11"
   },
   {
    "id": "qc4dd92c1b",
    "titre": "2.d3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d3",
     "d5",
     "Nd2",
     "c5"
    ],
    "legendes": [
     "Les blancs préparent un système fermé.",
     "Ton coup de toujours.",
     "Les blancs soutiennent e4.",
     "Tu prends de l'espace."
    ]
   },
   {
    "id": "q5f3591c2b",
    "titre": "2.Cc3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nc3",
     "d5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "Le cavalier sort.",
     "Ton coup de toujours.",
     "On retrouve 2.d4 d5 3.Cc3.",
     "Le classique : tu attaques e4."
    ]
   },
   {
    "id": "qb273202ec",
    "titre": "2.f4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "f4",
     "d5",
     "e5",
     "c5"
    ],
    "legendes": [
     "Le pion f avance.",
     "Ton coup de toujours.",
     "Les blancs ferment le centre.",
     "Tu prends de l'espace et tu contrôles d4."
    ]
   },
   {
    "id": "qafa5924cc",
    "titre": "2.c4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "c4",
     "d5"
    ],
    "legendes": [
     "Le pion c avance.",
     "Ton coup de toujours : tu attaques e4 et c4."
    ]
   },
   {
    "id": "q25e9551db",
    "titre": "2.b3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "b3",
     "d5"
    ],
    "legendes": [
     "Les blancs préparent Fb2.",
     "Ton coup de toujours."
    ]
   },
   {
    "id": "q97a7ae10a",
    "titre": "2.Dh5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6"
    ],
    "legendes": [
     "La dame sort tôt.",
     "Tu développes en attaquant la dame."
    ]
   },
   {
    "id": "q7aa507992",
    "titre": "2.Dg4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qg4",
     "d5"
    ],
    "legendes": [
     "La dame sort tôt.",
     "Ton coup de toujours : la dame g4 ne gêne pas …d5."
    ]
   },
   {
    "id": "qff02778e8",
    "titre": "2.Df3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qf3",
     "c5"
    ],
    "legendes": [
     "La dame sort en f3.",
     "Tu prends de l'espace ; …Cc6 et …d5 suivront."
    ]
   },
   {
    "id": "q220ded635",
    "titre": "2.e5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "Le pion avance tout seul.",
     "Tu prends de l'espace ; …Cc6 attaquera e5."
    ]
   },
   {
    "id": "q0bf9f0df2",
    "titre": "2.g3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "g3",
     "d5"
    ],
    "legendes": [
     "Les blancs préparent Fg2.",
     "Ton coup de toujours."
    ]
   },
   {
    "id": "q5fed1032e",
    "titre": "3.Cd2 (Tarrasch)",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nd2",
     "c5"
    ],
    "legendes": [
     "La Tarrasch : le cavalier défend e4 depuis d2.",
     "Tu frappes d4 tout de suite."
    ]
   },
   {
    "id": "q101cdac30",
    "titre": "3.Fd3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bd3",
     "dxe4",
     "Bxe4",
     "Nf6"
    ],
    "legendes": [
     "Le fou défend e4.",
     "Tu échanges.",
     "Le fou reprend.",
     "Tu développes en attaquant le fou."
    ]
   },
   {
    "id": "q071a1772e",
    "titre": "3.Fb5+",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Échec.",
     "Le pion bouche l'échec et chasse le fou."
    ]
   },
   {
    "id": "q462b27776",
    "titre": "3.Cf3 ?",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4"
    ],
    "legendes": [
     "Le cavalier sort, mais e4 n'est toujours pas défendu.",
     "Prends-le."
    ]
   },
   {
    "id": "q0f441dccc",
    "titre": "3.c4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c4",
     "dxe4"
    ],
    "legendes": [
     "Le pion c avance, e4 n'est toujours pas défendu.",
     "Prends-le."
    ]
   },
   {
    "id": "q930d31ca2",
    "titre": "3.f3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "Les blancs défendent e4 avec un pion.",
     "Tu frappes d4."
    ]
   },
   {
    "id": "q11c4afcf8",
    "titre": "3.Fe3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Be3",
     "dxe4"
    ],
    "legendes": [
     "Le fou sort, e4 n'est toujours pas défendu.",
     "Prends-le."
    ]
   },
   {
    "id": "q2bcbe9bec",
    "titre": "3.c3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c3",
     "dxe4"
    ],
    "legendes": [
     "Les blancs soutiennent d4, pas e4.",
     "Prends le pion e4."
    ]
   },
   {
    "id": "qde110d333",
    "titre": "3.De2",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Qe2",
     "dxe4",
     "Qxe4",
     "Nf6"
    ],
    "legendes": [
     "La dame défend e4.",
     "Tu échanges.",
     "La dame reprend.",
     "Tu développes en attaquant la dame."
    ]
   },
   {
    "id": "q7b175c345",
    "titre": "3.Cf3 ? dxe4 : le principe en action",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4",
     "Ne5",
     "Nd7"
    ],
    "legendes": [
     "Le cavalier sort… mais il ne défend pas e4.",
     "Alors tu prends.",
     "Le cavalier saute en e5 pour ne pas se faire attaquer.",
     "Et tu le chasses à son tour."
    ]
   },
   {
    "id": "q33095372c",
    "titre": "2.Dh5 : gagner du temps sur la dame",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6",
     "Qe2",
     "d5"
    ],
    "legendes": [
     "La dame sort tôt et vise f7.",
     "Tu développes en attaquant la dame.",
     "Elle doit reculer.",
     "Et tu prends le centre. Stockfish : −0,3."
    ]
   }
  ]
 }
];
