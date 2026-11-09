/* ==========================================================================
   Le bot d'entraînement : un adversaire réglé sur un niveau Elo, un livre
   d'ouvertures, et la lecture d'une demande écrite (« j'aimerais travailler
   la défense française »).

   Pas de DOM ici : le fichier tourne aussi sous node (tests et calibrage).
   L'écran de jeu est dans jouer.js. Les textes du livre sont en français ;
   l'interface les passe à tx() au moment de les afficher.
   ========================================================================== */
(function (racine) {
  'use strict';
  const Echecs = racine.Chess;

  /* ------------------------------------------------------------- le livre
     Une entrée = une ouverture : `camp`, le camp qui la choisit (la française
     est un choix des noirs) ; `def`, le nombre de demi-coups qui la
     définissent (1.e4 e6 : 2) ; `lignes`, les variantes jouées par le bot,
     notation anglaise ; `mots`, ce qui désigne la variante dans une demande.
     `rep` : le répertoire d'exemple qui lui correspond, s'il y en a un. */
  const LIVRE = [
    { id: 'francaise', nom: 'Défense française', camp: 'b', def: 2, rep: 'rep-francaise',
      alias: ['francaise', 'french'],
      idee: 'Les noirs laissent le centre aux blancs pour l’attaquer ensuite par …c5, et parfois …f6. Le revers : le fou c8, enfermé derrière e6, est la pièce à soigner.',
      lignes: [
        { nom: 'Variante d’avance', mots: ['avance', 'advance'], coups: 'e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 c4' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'e4 e6 d4 d5 exd5 exd5 Nf3 Nf6 Bd3 Bd6 O-O O-O' },
        { nom: 'Variante Tarrasch', mots: ['tarrasch'], coups: 'e4 e6 d4 d5 Nd2 c5 exd5 Qxd5 Ngf3 cxd4 Bc4 Qd6 O-O Nf6' },
        { nom: 'Variante Winawer', mots: ['winawer'], coups: 'e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7' },
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7' },
        { nom: 'Variante Rubinstein', mots: ['rubinstein'], coups: 'e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6' },
      ] },
    { id: 'sicilienne', nom: 'Défense sicilienne', camp: 'b', def: 2,
      alias: ['sicilienne', 'sicilian'],
      idee: 'Les noirs échangent leur pion c contre le pion d des blancs : ils gardent un pion central de plus et la colonne c semi-ouverte. Le prix : un léger retard de développement, que les blancs essaient d’exploiter par une attaque rapide.',
      lignes: [
        { nom: 'Variante Najdorf', mots: ['najdorf'], coups: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5' },
        { nom: 'Variante du dragon', mots: ['dragon'], coups: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O' },
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6' },
        { nom: 'Variante Alapin', camp: 'w', mots: ['alapin'], coups: 'e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6' },
        { nom: 'Sicilienne fermée', camp: 'w', mots: ['fermee', 'closed'], coups: 'e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4 e6' },
        { nom: 'Gambit Smith-Morra', camp: 'w', mots: ['smith morra', 'morra'], coups: 'e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6' },
      ] },
    { id: 'caro-kann', nom: 'Défense Caro-Kann', camp: 'b', def: 2,
      alias: ['caro kann', 'carokann', 'caro'],
      idee: 'Comme dans la française, …d5 conteste e4, mais le fou c8 sort avant que …e6 ferme sa diagonale. Position solide, avec une bonne structure de pions pour la finale.',
      lignes: [
        { nom: 'Variante d’avance', mots: ['avance', 'advance'], coups: 'e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 O-O Nc6' },
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4' },
        { nom: 'Attaque Panov', camp: 'w', mots: ['panov'], coups: 'e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7' },
        { nom: 'Variante des deux cavaliers', mots: ['deux cavaliers', 'two knights'], coups: 'e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6' },
      ] },
    { id: 'scandinave', nom: 'Défense scandinave', camp: 'b', def: 2,
      alias: ['scandinave', 'scandinavian', 'centre counter', 'center counter'],
      idee: 'Les noirs attaquent e4 dès le premier coup. Après exd5 Dxd5, la dame est chassée par Cc3 : il faut la mettre à l’abri (a5 ou d6) et finir vite son développement.',
      lignes: [
        { nom: 'Variante …Da5', mots: ['da5', 'qa5'], coups: 'e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5' },
        { nom: 'Variante …Dd6', mots: ['dd6', 'qd6'], coups: 'e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6' },
        { nom: 'Variante …Cf6', mots: ['cf6', 'nf6'], coups: 'e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 c4 Nb6' },
      ] },
    { id: 'pirc', nom: 'Défense Pirc', camp: 'b', def: 4,
      alias: ['pirc'],
      idee: 'Les noirs laissent les blancs bâtir un grand centre, mettent le fou en g7, et l’attaquent plus tard par …c5 ou …e5. Il faut savoir attendre, sans laisser passer e5 au mauvais moment.',
      lignes: [
        { nom: 'Attaque autrichienne', camp: 'w', mots: ['autrichienne', 'austrian'], coups: 'e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3 Na6' },
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6' },
        { nom: 'Attaque 150', camp: 'w', mots: ['150'], coups: 'e4 d6 d4 Nf6 Nc3 g6 Be3 c6 Qd2 b5' },
      ] },
    { id: 'moderne', nom: 'Défense moderne', camp: 'b', def: 2,
      alias: ['defense moderne', 'modern defense', 'modern defence'],
      idee: 'Comme la Pirc, mais le cavalier g8 attend : les noirs gardent le choix entre …c6, …a6 et …b5, ou un retour vers la Pirc.',
      lignes: [
        { nom: 'Avec …a6 et …b5', mots: [], coups: 'e4 g6 d4 Bg7 Nc3 d6 Be3 a6 Qd2 b5' },
        { nom: 'Avec Fc4', mots: [], coups: 'e4 g6 d4 Bg7 Nf3 d6 Bc4 Nf6 Qe2 O-O' },
      ] },
    { id: 'alekhine', nom: 'Défense Alekhine', camp: 'b', def: 2,
      alias: ['alekhine', 'aljechin'],
      idee: 'Le cavalier provoque les pions blancs pour qu’ils avancent trop. Ensuite, les noirs attaquent ce centre avancé avec …d6, …c5 ou …Cc6.',
      lignes: [
        { nom: 'Variante moderne', mots: ['moderne', 'modern'], coups: 'e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7' },
        { nom: 'Attaque des quatre pions', camp: 'w', mots: ['quatre pions', 'four pawns'], coups: 'e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 exd6 exd6 Nc3 Be7' },
      ] },
    { id: 'italienne', nom: 'Partie italienne', camp: 'w', def: 5,
      alias: ['italienne', 'italian', 'giuoco piano', 'giuoco'],
      idee: 'Le fou c4 vise f7, le point faible des noirs. Les blancs jouent ensuite c3 et d3, roquent, puis préparent d4 avant d’attaquer.',
      lignes: [
        { nom: 'Giuoco piano, avec d3', mots: ['piano', 'd3'], coups: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6' },
        { nom: 'Giuoco piano, avec d4', mots: ['d4'], coups: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 d5' },
        { nom: 'Deux cavaliers, avec d3', mots: [], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6' },
      ] },
    { id: 'deux-cavaliers', nom: 'Défense des deux cavaliers', camp: 'b', def: 6,
      alias: ['deux cavaliers', 'two knights'],
      idee: 'Au lieu de …Fc5, les noirs attaquent e4 tout de suite. Contre Cg5, il faut connaître …d5 puis …Ca5 : reprendre en d5 avec le cavalier est puni par Cxf7.',
      lignes: [
        { nom: 'Avec Cg5 et …Ca5', mots: ['cg5', 'ng5'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6' },
        { nom: 'Avec d3', mots: ['d3'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6' },
        { nom: 'Avec d4', mots: ['d4'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1 d5 Bxd5 Qxd5 Nc3 Qa5' },
      ] },
    { id: 'fegatello', nom: 'Attaque Fegatello', camp: 'w', def: 7,
      alias: ['fegatello', 'fried liver', 'foie frit'],
      idee: 'Le cavalier g5 et le fou c4 attaquent f7 ensemble. Si les noirs reprennent en d5 avec le cavalier, Cxf7 lance une attaque sur leur roi ; après …Ca5, c’est aux blancs de rester précis.',
      lignes: [
        { nom: 'Le sacrifice en f7', mots: ['cxf7', 'nxf7'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3 Ncb4' },
        { nom: 'La défense …Ca5', mots: ['ca5', 'na5'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4' },
        { nom: 'Contre-attaque Traxler', camp: 'b', mots: ['traxler'], coups: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 Nxf7 Bxf2+ Kxf2 Nxe4+' },
      ] },
    { id: 'espagnole', nom: 'Partie espagnole', camp: 'w', def: 5,
      alias: ['espagnole', 'ruy lopez', 'lopez', 'spanish'],
      idee: 'Le fou b5 menace le cavalier qui défend e5 : une pression lente sur le centre. Les blancs roquent, jouent Te1, c3 puis d4, et gardent l’initiative longtemps.',
      lignes: [
        { nom: 'Variante fermée', mots: ['fermee', 'closed'], coups: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5' },
        { nom: 'Défense berlinoise', camp: 'b', mots: ['berlinoise', 'berlin'], coups: 'e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 exd4 Nxd4 c5' },
        { nom: 'Défense Steinitz', camp: 'b', mots: ['steinitz'], coups: 'e4 e5 Nf3 Nc6 Bb5 d6 d4 Bd7 Nc3 Nf6 O-O Be7' },
      ] },
    { id: 'ecossaise', nom: 'Partie écossaise', camp: 'w', def: 5,
      alias: ['ecossaise', 'scotch'],
      idee: 'Les blancs ouvrent le centre tout de suite par d4. Jeu ouvert et clair : se développer vite, roquer, et viser les pièces noires restées au centre.',
      lignes: [
        { nom: 'Variante …Cf6', mots: ['cf6', 'nf6'], coups: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6' },
        { nom: 'Variante …Fc5', mots: ['fc5', 'bc5'], coups: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4 O-O' },
        { nom: 'Gambit écossais', mots: ['gambit ecossais', 'scotch gambit'], coups: 'e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 d5 Bb5 Ne4' },
      ] },
    { id: 'gambit-roi', nom: 'Gambit du roi', camp: 'w', def: 3,
      alias: ['gambit du roi', 'gambit roi', 'king s gambit', 'kings gambit'],
      idee: 'Les blancs donnent le pion f pour ouvrir la colonne f et prendre le centre avec d4. Attaque tranchante : le roi blanc est exposé lui aussi, il faut se développer vite.',
      lignes: [
        { nom: 'Gambit accepté, …g5', mots: ['g5'], coups: 'e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6' },
        { nom: 'Gambit accepté, …d5', mots: ['d5'], coups: 'e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6' },
        { nom: 'Gambit refusé', mots: ['refuse', 'declined'], coups: 'e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4 exd4' },
      ] },
    { id: 'viennoise', nom: 'Partie viennoise', camp: 'w', def: 3,
      alias: ['viennoise', 'vienne', 'vienna'],
      idee: 'Cc3 protège e4 et prépare f4, comme un gambit du roi plus prudent. Les blancs visent f7 avec Fc4 et ouvrent la colonne f.',
      lignes: [
        { nom: 'Gambit viennois', mots: ['gambit viennois', 'vienna gambit'], coups: 'e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O' },
        { nom: 'Variante …Cc6', mots: ['cc6', 'nc6'], coups: 'e4 e5 Nc3 Nc6 Bc4 Nf6 d3 Bc5 f4 d6 Nf3 a6' },
        { nom: 'Variante …Fc5', mots: ['fc5', 'bc5'], coups: 'e4 e5 Nc3 Bc5 Nf3 d6 d4 exd4 Nxd4 Nf6' },
      ] },
    { id: 'petrov', nom: 'Défense Petrov', camp: 'b', def: 4,
      alias: ['petrov', 'petroff', 'defense russe', 'russian'],
      idee: 'Les noirs répondent à l’attaque sur e5 par une contre-attaque sur e4. Défense très solide, avec un piège classique : après Cxe5, on joue d’abord …d6, et seulement ensuite …Cxe4.',
      lignes: [
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7' },
        { nom: 'Attaque moderne', mots: ['moderne', 'modern'], coups: 'e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5 Nxe5 Nd7 Nxd7 Bxd7' },
        { nom: 'Le piège …Cxe4', mots: ['piege', 'trap'], coups: 'e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Qe7 Qxe4 d6 d4 dxe5 dxe5 Nc6' },
      ] },
    { id: 'philidor', nom: 'Défense Philidor', camp: 'b', def: 4,
      alias: ['philidor'],
      idee: 'Les noirs défendent e5 avec un pion plutôt qu’avec une pièce. Position un peu passive mais solide ; il faut surveiller la diagonale du fou c4 vers f7.',
      lignes: [
        { nom: 'Variante Hanham', mots: ['hanham'], coups: 'e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O' },
      ] },
    { id: 'stafford', nom: 'Gambit Stafford', camp: 'b', def: 6,
      alias: ['stafford'],
      idee: 'Un gambit plein de pièges : les noirs donnent un pion pour ouvrir les lignes vers le roi blanc (…Fc5, …h5, …Cg4). Objectivement douteux, mais redoutable si les blancs ne connaissent pas les réponses sûres.',
      lignes: [
        { nom: 'Avec d3', mots: ['d3'], coups: 'e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2 h5' },
        { nom: 'Avec Cc3', mots: ['cc3', 'nc3'], coups: 'e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 Nc3 Bc5 Be2 h5' },
        { nom: 'Le refus Cf3', mots: ['cf3', 'nf3'], coups: 'e4 e5 Nf3 Nf6 Nxe5 Nc6 Nf3 Nxe4 Qe2 Qe7 d3 Nf6' },
      ] },
    { id: 'quatre-cavaliers', nom: 'Partie des quatre cavaliers', camp: 'w', def: 5,
      alias: ['quatre cavaliers', 'four knights'],
      idee: 'Les quatre cavaliers sortent en premier : un développement sain et symétrique. Il faut ensuite choisir un plan, d4 ou Fb5, sans laisser l’adversaire prendre le centre.',
      lignes: [
        { nom: 'Variante écossaise', mots: ['ecossaise', 'scotch'], coups: 'e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5' },
        { nom: 'Variante espagnole', mots: ['espagnole', 'spanish'], coups: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6' },
        { nom: 'Variante italienne', mots: ['italienne', 'italian'], coups: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Nxe4 Nxe4 d5 Bd3 dxe4 Bxe4 Bd6' },
      ] },
    { id: 'evans', nom: 'Gambit Evans', camp: 'w', def: 7,
      alias: ['evans'],
      idee: 'Les blancs donnent le pion b4 pour gagner du temps : c3 puis d4 chassent le fou et ouvrent le centre. Idéal pour s’entraîner à attaquer vite, avant que les noirs aient roqué.',
      lignes: [
        { nom: 'Gambit accepté', mots: ['accepte', 'accepted'], coups: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7' },
        { nom: 'Gambit refusé', mots: ['refuse', 'declined'], coups: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 a4 a6 Nc3 Nf6' },
      ] },
    { id: 'gambit-dame', nom: 'Gambit Dame', camp: 'w', def: 3, rep: 'rep-gambit-dame',
      alias: ['gambit dame', 'gambit de la dame', 'queen s gambit', 'queens gambit'],
      idee: 'Les blancs offrent le pion c4 pour détourner le pion d5 du centre. Ce n’est pas un vrai gambit : si les noirs gardent le pion, e3 et Fxc4 le récupèrent. Le plan : e4 et un centre fort.',
      lignes: [
        { nom: 'Gambit dame refusé', mots: ['refuse', 'declined'], coups: 'd4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7' },
        { nom: 'Gambit dame accepté', camp: 'b', mots: ['accepte', 'accepted'], coups: 'd4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6' },
        { nom: 'Défense slave', camp: 'b', mots: ['slave', 'slav'], coups: 'd4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6' },
        { nom: 'Contre-gambit Albin', camp: 'b', mots: ['albin'], coups: 'd4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Be6' },
        { nom: 'Défense Tchigorine', camp: 'b', mots: ['tchigorine', 'chigorin'], coups: 'd4 d5 c4 Nc6 Nc3 dxc4 Nf3 Nf6 e4 Bg4' },
      ] },
    { id: 'gdr', nom: 'Gambit Dame refusé', camp: 'b', def: 4,
      alias: ['gambit dame refuse', 'gambit de la dame refuse', 'queen s gambit declined', 'queens gambit declined', 'qgd'],
      idee: 'Les noirs tiennent d5 avec …e6 : position solide, mais le fou c8 est enfermé. Les libérations typiques : …c5, ou …dxc4 suivi de …e5.',
      lignes: [
        { nom: 'Variante orthodoxe', mots: ['orthodoxe', 'orthodox'], coups: 'd4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'd4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 c6 Bd3 O-O' },
        { nom: 'Avec Ff4', mots: ['ff4', 'bf4'], coups: 'd4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 c5' },
        { nom: 'Défense Tarrasch', mots: ['tarrasch'], coups: 'd4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6' },
      ] },
    { id: 'slave', nom: 'Défense slave', camp: 'b', def: 4,
      alias: ['slave', 'slav'],
      idee: 'Comme le gambit dame refusé, mais …c6 garde la diagonale du fou c8 ouverte : il sortira en f5 ou g4 avant …e6.',
      lignes: [
        { nom: 'Variante principale', mots: [], coups: 'd4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4' },
        { nom: 'Semi-slave', mots: ['semi'], coups: 'd4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7 Bd3 dxc4 Bxc4 b5' },
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'd4 d5 c4 c6 cxd5 cxd5 Nc3 Nf6 Bf4 Nc6 e3 Bf5' },
      ] },
    { id: 'londres', nom: 'Système de Londres', camp: 'w', def: 3, rep: 'rep-londres',
      alias: ['londres', 'london'],
      idee: 'Un système plutôt qu’une ligne : d4, Ff4, e3, c3, Cf3, Cbd2 et Fd3, contre presque tout. Les blancs bâtissent une structure solide et attaquent souvent à l’aile roi.',
      lignes: [
        { nom: 'Contre …d5', mots: ['d5'], coups: 'd4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Bd6 Bg3 O-O' },
        { nom: 'Contre …Cf6 et …g6', mots: ['g6'], coups: 'd4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2 d6 h3 c5' },
        { nom: 'Contre …c5 et …Db6', mots: ['db6', 'qb6'], coups: 'd4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5' },
      ] },
    { id: 'trompowsky', nom: 'Attaque Trompowsky', camp: 'w', def: 3,
      alias: ['trompowsky', 'trompovsky', 'tromp'],
      idee: 'Fg5 menace de doubler les pions noirs en prenant le cavalier f6. Ouverture directe, qui sort les noirs de leur théorie habituelle dès le deuxième coup.',
      lignes: [
        { nom: 'Avec …Ce4', mots: ['ce4', 'ne4'], coups: 'd4 Nf6 Bg5 Ne4 Bf4 c5 f3 Qa5 c3 Nf6' },
        { nom: 'Avec …e6', mots: ['e6'], coups: 'd4 Nf6 Bg5 e6 e4 h6 Bxf6 Qxf6 Nc3 d6' },
      ] },
    { id: 'est-indienne', nom: 'Défense est-indienne', camp: 'b', def: 6,
      alias: ['est indienne', 'king s indian', 'kings indian'],
      idee: 'Les noirs laissent les blancs occuper le centre, roquent vite, puis frappent par …e5 ou …c5. Souvent, les blancs attaquent à l’aile dame et les noirs à l’aile roi avec …f5 : c’est une course.',
      lignes: [
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7' },
        { nom: 'Variante Sämisch', camp: 'w', mots: ['samisch', 'saemisch'], coups: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5' },
        { nom: 'Variante du fianchetto', mots: ['fianchetto'], coups: 'd4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nc6 Nc3 a6' },
      ] },
    { id: 'nimzo', nom: 'Défense nimzo-indienne', camp: 'b', def: 6,
      alias: ['nimzo indienne', 'nimzo indian', 'nimzo'],
      idee: 'Le fou b4 cloue le cavalier c3 qui veut soutenir e4. Les noirs acceptent souvent de donner ce fou contre le cavalier, puis visent les pions doublés des blancs.',
      lignes: [
        { nom: 'Variante Rubinstein', mots: ['rubinstein', 'e3'], coups: 'd4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6' },
        { nom: 'Variante classique', mots: ['classique', 'classical', 'dc2', 'qc2'], coups: 'd4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 d5 Nf3 dxc4' },
        { nom: 'Variante Sämisch', camp: 'w', mots: ['samisch', 'saemisch'], coups: 'd4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 e3 Nc6' },
      ] },
    { id: 'grunfeld', nom: 'Défense Grünfeld', camp: 'b', def: 6,
      alias: ['grunfeld', 'gruenfeld'],
      idee: 'Les noirs laissent les blancs construire un grand centre (c3, d4, e4) pour l’attaquer aussitôt avec le fou g7, …c5 et …Cc6. Partie concrète et tactique.',
      lignes: [
        { nom: 'Variante d’échange', mots: ['echange', 'exchange'], coups: 'd4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 Be3 Qa5' },
        { nom: 'Avec Ff4', mots: ['ff4', 'bf4'], coups: 'd4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O Nf3 c5' },
      ] },
    { id: 'hollandaise', nom: 'Défense hollandaise', camp: 'b', def: 2,
      alias: ['hollandaise', 'dutch'],
      idee: 'Le pion f5 contrôle e4 et prépare une attaque à l’aile roi. Contrepartie : la diagonale h5-e8 vers le roi noir s’ouvre, il faut la surveiller.',
      lignes: [
        { nom: 'Variante classique', mots: ['classique', 'classical'], coups: 'd4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8' },
        { nom: 'Stonewall', mots: ['stonewall'], coups: 'd4 f5 g3 Nf6 Bg2 e6 Nf3 d5 O-O Bd6 c4 c6' },
        { nom: 'Variante Leningrad', mots: ['leningrad'], coups: 'd4 f5 g3 Nf6 Bg2 g6 Nf3 Bg7 O-O O-O c4 d6' },
        { nom: 'Gambit Staunton', camp: 'w', mots: ['staunton'], coups: 'd4 f5 e4 fxe4 Nc3 Nf6 Bg5 Nc6 d5 Ne5' },
      ] },
    { id: 'benoni', nom: 'Défense Benoni', camp: 'b', def: 6,
      alias: ['benoni', 'benko'],
      idee: 'Les noirs laissent les blancs avancer d5 et prennent la majorité de pions à l’aile dame. Leur plan : …b5, le fou g7 sur la grande diagonale, et une partie très active.',
      lignes: [
        { nom: 'Benoni moderne', mots: ['moderne', 'modern'], coups: 'd4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O' },
        { nom: 'Gambit Benko', mots: ['benko', 'volga'], coups: 'd4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6' },
      ] },
    { id: 'catalane', nom: 'Ouverture catalane', camp: 'w', def: 5,
      alias: ['catalane', 'catalan'],
      idee: 'Un gambit dame où le fou blanc se place en g2 : il pèse sur la grande diagonale jusqu’à b7 et a8. Si les noirs prennent c4, les blancs ont le temps de le récupérer.',
      lignes: [
        { nom: 'Catalane ouverte', mots: ['ouverte', 'open'], coups: 'd4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2 a6' },
        { nom: 'Catalane fermée', mots: ['fermee', 'closed'], coups: 'd4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2 Nbd7' },
      ] },
    { id: 'anglaise', nom: 'Partie anglaise', camp: 'w', def: 1,
      alias: ['anglaise', 'english'],
      idee: 'Les blancs contrôlent d5 depuis l’aile, sans s’engager au centre. Souvent g3 et Fg2 : une position souple, où l’on joue sur les cases blanches.',
      lignes: [
        { nom: 'Contre …e5', mots: ['e5'], coups: 'c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7' },
        { nom: 'Anglaise symétrique', mots: ['symetrique', 'symmetrical'], coups: 'c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e6 O-O Nge7' },
        { nom: 'Contre …Cf6 et …e6', mots: ['cf6', 'nf6'], coups: 'c4 Nf6 Nc3 e6 e4 d5 e5 d4 exf6 dxc3 bxc3 Qxf6' },
      ] },
    { id: 'reti', nom: 'Ouverture Réti', camp: 'w', def: 3,
      alias: ['reti'],
      idee: 'Les blancs laissent les noirs prendre le centre pour l’attaquer de côté, avec c4 et le fou en g2. Ouverture souple, qui peut rejoindre beaucoup d’autres.',
      lignes: [
        { nom: 'Avec c4 et …e6', mots: ['e6'], coups: 'Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5' },
        { nom: 'Avec c4 et …d4', mots: ['d4'], coups: 'Nf3 d5 c4 d4 e3 Nc6 exd4 Nxd4 Nxd4 Qxd4' },
        { nom: 'Avec g3', mots: ['g3'], coups: 'Nf3 d5 g3 Nf6 Bg2 c6 O-O Bg4 d3 Nbd7' },
      ] },
    { id: 'bird', nom: 'Ouverture Bird', camp: 'w', def: 1,
      alias: ['bird'],
      idee: 'f4 contrôle e5, comme une hollandaise jouée par les blancs. Le plan : Cf3, e3, b3 et Fb2, puis une attaque à l’aile roi. Attention : la diagonale e1-h4 vers le roi blanc s’ouvre.',
      lignes: [
        { nom: 'Contre …d5', mots: ['d5'], coups: 'f4 d5 Nf3 Nf6 e3 g6 b3 Bg7 Bb2 O-O Be2 c5' },
        { nom: 'Gambit From', camp: 'b', mots: ['gambit from', 'from gambit', 'from s gambit'], coups: 'f4 e5 fxe5 d6 exd6 Bxd6 Nf3 Nf6 d4 Ng4 Qd3 c5' },
      ] },
  ];

  /* ------------------------------------------------------------ texte libre */
  const normaliser = (s) => ' ' + String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';

  function distance(a, b) {          // Levenshtein, pour les fautes de frappe
    if (Math.abs(a.length - b.length) > 2) return 3;
    let p = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const c = [i];
      for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      p = c;
    }
    return p[b.length];
  }
  /* Une expression (« caro kann ») est-elle dans le texte ? 1 si elle y est
     telle quelle, 0,8 avec une faute de frappe par mot long, sinon 0. */
  function presence(texte, expr) {
    const e = normaliser(expr);
    if (e.trim() === '') return 0;
    if (texte.includes(e)) return 1;
    const mt = texte.trim().split(' '), me = e.trim().split(' ');
    for (let i = 0; i + me.length <= mt.length; i++) {
      let ok = true;
      for (let j = 0; j < me.length && ok; j++) {
        const a = mt[i + j], b = me[j];
        if (a === b) continue;
        const tol = b.length >= 8 ? 2 : (b.length >= 5 ? 1 : 0);
        ok = tol > 0 && distance(a, b) <= tol;
      }
      if (ok) return 0.8;
    }
    return 0;
  }
  /* ------------------------------------------------------------ les thèmes de jeu
     Ce que le bot fait travailler pendant la partie : des occasions
     tactiques qu'il te laisse de temps en temps, ou une partie qui va vers la
     finale. `mots` : début de mot ou mot entier ; `expr` : expressions. */
  const THEMES = [
    { id: 'fourchette', nom: 'Fourchettes', mots: [/^fourchett/, /^forks?$/],
      expr: ['double attaque', 'doubles attaques', 'double attack', 'double attacks'] },
    { id: 'clouage', nom: 'Clouages', mots: [/^clouag/, /^clouer$/, /^pins?$/, /^pinned$/, /^pinning$/] },
    { id: 'enfilade', nom: 'Enfilades', mots: [/^enfilad/, /^skewers?$/] },
    { id: 'decouverte', nom: 'Attaques à la découverte', mots: [/^decouvert/, /^discovered$/] },
    { id: 'mat', nom: 'Mats', mots: [/^mats?$/, /^mater$/, /^mates?$/, /^checkmates?$/, /^mating$/] },
    { id: 'prise', nom: 'Pièces en prise', mots: [],
      expr: ['en prise', 'pieces gratuites', 'piece gratuite', 'hanging piece', 'hanging pieces', 'free piece', 'free pieces'] },
  ];
  const TOUTES_TACTIQUES = [/^tactiq/, /^tactic/, /^combinaison/, /^combination/];
  const FINALES = { mots: [/^finale?s?$/, /^endgames?$/], expr: ['fin de partie', 'fins de partie'] };
  /* ce qu'on reconnaît sans savoir encore le faire travailler */
  const PAS_ENCORE = [/^surcharg/, /^deviation/, /^attraction/, /^interception/, /^zwischenzug/, /^overload/,
    /^deflection/, /^sacrific/];
  /* les mots de variante trop courants pour désigner une ouverture à eux seuls */
  const GENERIQUES = new Set(['avance', 'advance', 'echange', 'exchange', 'classique', 'classical', 'moderne',
    'modern', 'fermee', 'closed', 'ouverte', 'open', 'refuse', 'declined', 'accepte', 'accepted', 'semi',
    'piege', 'trap', 'symetrique', 'symmetrical', 'fianchetto', 'orthodoxe', 'orthodox']);
  const BLANCS = [' avec les blancs ', ' avec blancs ', ' en blancs ', ' en blanc ', ' les blancs ', ' as white ', ' with white ', ' playing white '];
  const NOIRS = [' avec les noirs ', ' avec noirs ', ' en noirs ', ' en noir ', ' les noirs ', ' as black ', ' with black ', ' playing black '];
  const CONTRE = [' contre ', ' face a ', ' face au ', ' face aux ', ' affronter ', ' against ', ' versus ', ' vs ', ' facing '];

  /* La demande écrite → { type, entree, ligne, camp, score, motif }.
     `reps` : les répertoires de l'utilisateur ({ id, nom, camp, origine }),
     pour reconnaître « mon répertoire Londres ». */
  function comprendre(texte, reps) {
    const t = normaliser(texte);
    if (!t.trim()) return { type: 'vide' };
    const cands = [];
    for (const e of LIVRE) {
      let s = 0;
      for (const a of [e.nom].concat(e.alias)) s = Math.max(s, presence(t, a) * normaliser(a).trim().length);
      /* une variante nommée (« la Najdorf ») désigne son ouverture même seule ;
         un mot courant (« avance ») ne précise qu'une ouverture déjà nommée */
      let ligne = null, sl = 0, seule = 0;
      for (const l of e.lignes) for (const m of l.mots) {
        const lg = normaliser(m).trim().length;
        if (lg < 3) continue;
        const v = presence(t, m) * lg;
        if (v > sl) { sl = v; ligne = l; }
        if (v > seule && !GENERIQUES.has(normaliser(m).trim())) seule = v;
      }
      if (s > 0) cands.push({ entree: e, ligne: sl > 0 ? ligne : null, score: s + (sl > 0 ? 0.5 : 0) });
      else if (seule > 0) cands.push({ entree: e, ligne, score: seule - 0.5, parLigne: true });
    }
    for (const r of reps || []) {
      const s = presence(t, r.nom) * normaliser(r.nom).trim().length;
      if (s > 0) cands.push({ rep: r, score: s + 0.25 });
    }
    cands.sort((a, b) => b.score - a.score);
    const contre = CONTRE.some(c => t.includes(c)) && !/ contre gambit /.test(t);
    const campDemande = BLANCS.some(c => t.includes(c)) ? 'w' : (NOIRS.some(c => t.includes(c)) ? 'b' : null);
    const mots = t.trim().split(' ');
    const a = (rs) => mots.some(w => rs.some(r => r.test(w)));
    let motifs = THEMES.filter(th => a(th.mots) || (th.expr || []).some(e => presence(t, e) === 1)).map(th => th.id);
    if (a(TOUTES_TACTIQUES)) motifs = THEMES.map(th => th.id);
    const finales = a(FINALES.mots) || FINALES.expr.some(e => presence(t, e) === 1);
    const pasEncore = mots.find(w => PAS_ENCORE.some(r => r.test(w))) || null;
    const base = { motifs, finales, pasEncore, campDemande };
    if (!cands.length) {
      if (motifs.length || finales) return Object.assign(base, { type: 'jeu', camp: campDemande });
      return Object.assign(base, { type: pasEncore ? 'motif' : 'aucun', motif: pasEncore });
    }
    const c = cands[0];
    let entree = c.entree || null;
    /* un répertoire de l'utilisateur : son ouverture du livre, s'il y en a une */
    if (c.rep) {
      entree = LIVRE.find(e => e.rep && e.rep === c.rep.origine)
        || LIVRE.find(e => e.camp === c.rep.camp && [e.nom].concat(e.alias).some(a => presence(normaliser(c.rep.nom), a)))
        || null;
    }
    const campOuv = c.rep ? c.rep.camp : ((c.ligne && c.ligne.camp) || entree.camp);
    const camp = campDemande || (contre ? (campOuv === 'w' ? 'b' : 'w') : campOuv);
    return Object.assign(base, { type: 'ouverture', entree, rep: c.rep || null, ligne: c.ligne || null, camp, contre, score: c.score });
  }

  /* ------------------------------------------------------------ l'arbre du livre
     Une position (clé sans compteurs) → les coups possibles, avec un poids.
     Sources : les lignes du livre, le répertoire de l'utilisateur et le
     répertoire d'exemple de l'ouverture (qui contient les réponses adverses
     les plus jouées sur Lichess entre 1000 et 1600). `ligne` : la variante
     demandée, jouée en priorité. */
  function cleDe(jeu) {
    const f = jeu.fen().split(' ');
    let ep = f[3];
    if (ep !== '-' && !jeu.moves({ verbose: true }).some(m => m.flags.includes('e'))) ep = '-';
    return [f[0], f[1], f[2], ep].join(' ');
  }
  function lignesDe(entree) {
    const out = [];
    for (const l of (entree ? entree.lignes : [])) {
      const j = new Echecs(), pas = [];
      for (const san of l.coups.split(' ')) {
        const k = cleDe(j); let m;
        try { m = j.move(san); } catch (e) { m = null; }
        if (!m) throw new Error('livre : ' + l.nom + ' : coup illégal ' + san);
        pas.push({ k, u: m.from + m.to + (m.promotion || ''), s: m.san, v: cleDe(j) });
      }
      out.push({ ligne: l, pas });
    }
    return out;
  }
  function arbre({ entree, ligne, aretesRep, aretesExemple }) {
    const A = new Map();
    const ajouter = (k, u, s, poids, src) => {
      const l = A.get(k) || [];
      const x = l.find(a => a.u === u);
      if (x) { x.poids += poids; x.src.add(src); } else l.push({ u, s, poids, src: new Set([src]) });
      A.set(k, l);
    };
    for (const { ligne: l, pas } of lignesDe(entree)) {
      const p = ligne ? (l === ligne ? 30 : 0.5) : 1;
      for (const a of pas) ajouter(a.k, a.u, a.s, p, 'livre');
    }
    for (const a of aretesRep || []) ajouter(a.d, a.u, a.s, 2, 'rep');
    for (const a of aretesExemple || []) ajouter(a.d, a.u, a.s, 1, 'exemple');
    return A;
  }
  /* Les positions qui définissent l'ouverture (après `def` demi-coups). */
  function positionsDef(entree) {
    return new Set(lignesDe(entree).map(({ pas }) => pas[Math.min(entree.def, pas.length) - 1].v));
  }
  /* La variante la plus longtemps suivie par une partie (liste de SAN). */
  function varianteSuivie(entree, sans) {
    let best = null;
    for (const { ligne, pas } of lignesDe(entree)) {
      const j = new Echecs(); let n = 0;
      const cles = new Set(pas.map(a => a.v));
      for (let i = 0; i < sans.length && i < pas.length + 4; i++) {
        try { j.move(sans[i]); } catch (e) { break; }
        if (cles.has(cleDe(j))) n = i + 1;
      }
      if (n > (best ? best.n : 0)) best = { ligne, n, total: pas.length };
    }
    return best;
  }
  function tirer(liste, poids, alea) {
    const tot = liste.reduce((a, x) => a + poids(x), 0);
    if (!(tot > 0)) return liste[0];
    let r = alea() * tot;
    for (const x of liste) { r -= poids(x); if (r <= 0) return x; }
    return liste[liste.length - 1];
  }

  /* ------------------------------------------------------------- le niveau
     Ce qu'un joueur d'un Elo donné rate, par coup, d'après 476 parties
     rapides chess.com (10 min) entre 200 et 500 Elo, toutes analysées par
     Stockfish, en ne gardant que les positions encore jouables (moins de 6
     points d'écart) : `g` les coups qui perdent 3 points ou plus (gaffes),
     `e` de 1 à 3 points (erreurs), `i` de 0,5 à 1 (imprécisions). À 426 Elo
     de moyenne : 7,1 %, 13,2 % et 12,5 % des coups ; à 262 : 9,6 %, 17 % et
     13,7 %. Au-delà de 500, c'est une extrapolation. */
  const REF = { elo: 426, g: 0.0706, e: 0.132, i: 0.125 };
  const PENTE = { g: 560, e: 650, i: 1800 };
  function cible(elo) {
    const d = Math.max(100, Math.min(2400, elo)) - REF.elo;
    return { g: REF.g * Math.exp(-d / PENTE.g), e: REF.e * Math.exp(-d / PENTE.e), i: REF.i * Math.exp(-d / PENTE.i) };
  }
  /* Les mêmes joueurs se trompent peu dans les douze premiers demi-coups,
     et beaucoup plus ensuite. */
  const PHASES = [
    { jusqua: 12, g: 0.23, e: 0.53, i: 1.01 },
    { jusqua: 20, g: 1.11, e: 1.22, i: 1.11 },
    { jusqua: 60, g: 1.44, e: 1.26, i: 0.97 },
    { jusqua: Infinity, g: 1.37, e: 0.90, i: 0.89 },
  ];
  const phaseDe = (ply) => PHASES.find(p => ply < p.jusqua);
  /* Réglage du tirage. Calibré par simulation : des parties bot contre bot,
     analysées exactement comme les parties importées (Stockfish, 150 000
     nœuds par position), jusqu'à retrouver les proportions ci-dessus phase
     par phase. Un coup tiré « erreur » est parfois mesuré « gaffe », et un
     coup « normal » parfois « erreur » : d'où des coefficients différents de 1. */
  const CALIB = { kg: 0.92, ke: 1.15, t0: 34, tPente: 900 };

  const borne = (cp) => Math.max(-1500, Math.min(1500, cp));
  /* L'attrait d'un coup pour un joueur humain : on prend volontiers, on
     reprend, on fait échec, on roque ; on bouge peu le roi en milieu de
     partie, et la dame tôt moins qu'un cavalier. */
  function attrait(m, prec, ply) {
    let w = 1;
    if (m.captured) w *= 2.2;
    if (m.captured && prec && prec.to === m.to) w *= 2;
    if (m.san.includes('+')) w *= 1.5;
    if (m.flags.includes('k') || m.flags.includes('q')) w *= 2;
    else if (m.piece === 'k' && ply < 60) w *= 0.35;
    if (m.piece === 'q' && ply < 14) w *= 0.6;
    if (m.promotion && m.promotion !== 'q') w *= 0.03;
    return w;
  }

  /* Le choix du bot. `lignes` : tous les coups de la position avec leur
     score (Moteur.multi, du point de vue du trait). On tire d'abord la sorte
     de coup (gaffe, erreur, ou coup normal) avec les proportions du niveau,
     puis le coup lui-même parmi ceux de cette sorte, les plus naturels ayant
     plus de chances. Renvoie { uci, sorte, perte }. */
  function choisir(lignes, fen, elo, ply, prec, alea, reglage) {
    alea = alea || Math.random;
    const R = Object.assign({}, CALIB, reglage || {});
    const jeu = new Echecs(fen);
    const legaux = new Map(jeu.moves({ verbose: true }).map(m => [m.from + m.to + (m.promotion || ''), m]));
    const cs = lignes.filter(l => legaux.has(l.uci));
    if (!cs.length) { const m = [...legaux.values()][0]; return m ? { uci: m.from + m.to + (m.promotion || ''), sorte: 'seul', perte: 0 } : null; }
    if (cs.length === 1) return { uci: cs[0].uci, sorte: 'seul', perte: 0 };
    const meilleur = Math.max(...cs.map(l => l.cp));
    const coups = cs.map(l => ({ uci: l.uci, m: legaux.get(l.uci), perte: Math.max(0, borne(meilleur) - borne(l.cp)) }));
    for (const c of coups) c.attrait = attrait(c.m, prec, ply);
    /* thème « finales » : le bot échange volontiers (une prise que l'adversaire
       reprend aussitôt), surtout les dames, et se trompe moins avant d'y être,
       pour que la partie arrive jusqu'à la finale */
    if (R.simplifier) {
      const pv = new Map(cs.map(l => [l.uci, l.pv || []]));
      for (const c of coups) {
        const suite = pv.get(c.uci);
        if (c.m.captured && suite[1] && suite[1].slice(2, 4) === c.m.to) c.attrait *= (c.m.captured === 'q' ? 8 : 4);
      }
    }
    const prudence = R.simplifier && R.avantFinale ? 0.5 : 1;
    const c = cible(elo), ph = phaseDe(ply);
    const pG = Math.min(0.6, R.kg * c.g * ph.g * prudence), pE = Math.min(0.6, R.ke * c.e * ph.e * prudence);
    const T = R.t0 * Math.exp(-(Math.max(100, Math.min(2400, elo)) - REF.elo) / R.tPente) * ph.i;
    const r = alea();
    const gaffes = coups.filter(x => x.perte >= 300);
    const erreurs = coups.filter(x => x.perte >= 100 && x.perte < 300);
    const bons = coups.filter(x => x.perte < 100);
    let sorte = 'normal', pool = bons, poids = (x) => x.attrait * Math.exp(-x.perte / T);
    if (r < pG && gaffes.length) {
      sorte = 'gaffe'; pool = gaffes; poids = (x) => x.attrait * Math.exp(-(x.perte - 300) / 450);
    } else if (r < pG + pE && erreurs.length) {
      sorte = 'erreur'; pool = erreurs; poids = (x) => x.attrait;
    }
    const x = tirer(pool, poids, alea);
    return { uci: x.uci, sorte, perte: x.perte };
  }

  /* ------------------------------------------------------------ les occasions tactiques
     Le bot peut jouer un coup qui te laisse une tactique : il ne pare pas
     une fourchette, il laisse un clouage ou un mat. Les candidats viennent
     de l'analyse de tous ses coups (Moteur.multi) : pour chaque coup, la
     ligne principale donne ta meilleure réponse, qu'on reconnaît avec les
     règles des explications (explications.js). Difficulté :
       1 — la réponse gagnante est un coup forcé (échec ou prise) ;
       2 — c'est un coup tranquille ;
       3 — elle vient en deux temps : un coup forcé d'abord, puis la tactique.
     Pour le mat : mat en 1, en 2 ou en 3. */
  const expl = () => (typeof Expl !== 'undefined' ? Expl : racine.Expl);
  function motifsDuCoup(fen, uci, prec) {
    const E = expl();
    let f = null;
    try { f = E.analyserCoup(fen, uci, prec); } catch (e) { f = null; }
    if (!f) return { motifs: [], force: false };
    const out = [];
    if (f.mat) out.push('mat');
    if (f.fourchette) out.push('fourchette');
    if (f.clouages.some(k => f.menaces.some(x => x.sq === k.cloue.sq))) out.push('clouage');
    if (f.enfilades.length) out.push('enfilade');
    if (f.decouvertes.some(x => x.t === 'k' || E.V(x.t) >= 300)) out.push('decouverte');
    if (f.capture && f.capture.net >= 250 && !f.capture.reprise) out.push('prise');
    return { motifs: out, force: !!(f.echec || f.capture), san: f.san };
  }
  function jouerUci(j, uci) {
    try { return j.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' }); } catch (e) { return null; }
  }
  /* Les coups du bot qui te laissent un des `voulus` : [{ uci, perte, motif,
     niveau, sol, solSan, attrait }]. `lignes` : du point de vue du bot. */
  function occasions(lignes, fen, voulus, prec, ply) {
    const jeu = new Echecs(fen);
    const legaux = new Map(jeu.moves({ verbose: true }).map(m => [m.from + m.to + (m.promotion || ''), m]));
    const cs = lignes.filter(l => legaux.has(l.uci));
    if (cs.length < 2) return [];
    const meilleur = Math.max(...cs.map(l => l.cp));
    const out = [];
    for (const l of cs) {
      const pv = l.pv || [];
      if (pv.length < 2) continue;
      const perte = Math.max(0, borne(meilleur) - borne(l.cp));
      const matEn = l.cp <= -9997 ? 10000 + l.cp : 0;               // le bot se fait mater en 1, 2 ou 3
      if (matEn) { if (!voulus.has('mat')) continue; }
      else if (perte < 150 || perte > 950) continue;                 // ni un rien, ni un cadeau grossier
      const j = new Echecs(fen);
      const m = jouerUci(j, l.uci); if (!m) continue;
      const fen2 = j.fen();
      let trouve = null;
      if (matEn) trouve = { motif: 'mat', niveau: Math.min(3, matEn) };
      else {
        const a = motifsDuCoup(fen2, pv[1], m);
        const ok = a.motifs.filter(x => voulus.has(x) && x !== 'mat');
        if (ok.length) trouve = { motif: ok[0], niveau: ok[0] === 'prise' || a.force ? 1 : 2 };
        else if (a.force && pv.length >= 4) {
          /* en deux temps : ton coup forcé, sa réponse, puis la tactique */
          const r1 = jouerUci(j, pv[1]), r2 = r1 && jouerUci(j, pv[2]);
          if (r2) {
            const b = motifsDuCoup(j.fen(), pv[3], r2);
            const ok2 = b.motifs.filter(x => voulus.has(x) && x !== 'mat' && x !== 'prise');
            if (ok2.length) trouve = { motif: ok2[0], niveau: 3 };
          }
        }
      }
      if (!trouve) continue;
      const j2 = new Echecs(fen2);
      const sol = jouerUci(j2, pv[1]);
      out.push(Object.assign(trouve, { uci: l.uci, perte, sol: pv[1], solSan: sol ? sol.san : pv[1],
        attrait: attrait(m, prec, ply), cp: l.cp, meilleur }));
    }
    return out;
  }
  /* Le coup-cadeau : la difficulté la plus proche de ton niveau dans ce
     motif, un coup naturel plutôt qu'absurde, et le moins coûteux possible
     pour qu'il ne saute pas aux yeux. `niveaux` : { motif: 1 à 3 }. */
  function choisirOccasion(cands, niveaux, alea) {
    if (!cands.length) return null;
    const poids = (x) => x.attrait * Math.exp(-1.6 * Math.abs(x.niveau - ((niveaux || {})[x.motif] || 1)))
      * Math.exp(-(x.perte - 150) / 500);
    return tirer(cands, poids, alea || Math.random);
  }
  /* Ton niveau dans un motif, de 1 à 3 : un quart de point en plus quand tu
     trouves, en moins quand tu rates. */
  function majNiveau(n, trouve) {
    return Math.max(1, Math.min(3, Math.round(((n || 1) + (trouve ? 0.25 : -0.25)) * 100) / 100));
  }

  /* ------------------------------------------------------------ le bot personnalisé
     Un réseau à une couche (un logit conditionnel) qui apprend, sur les
     parties de l'utilisateur, comment SES adversaires choisissent parmi les
     coups que Stockfish juge possibles. Stockfish note chaque coup ; le
     réseau ne sait pas jouer aux échecs, il sait seulement quel coup un de
     ces humains aurait préféré : prendre, reprendre, faire échec, roquer,
     laisser une pièce attaquée, rater une pièce gratuite, gaffer quand le
     temps presse, tomber dans une fourchette plutôt que dans une pièce
     simplement en prise… L'étude faite sur 2 901 coups des adversaires
     d'Amaury : un réseau à couche cachée ne faisait pas mieux que ce modèle,
     et les six indices tactiques l'améliorent un peu, de façon régulière.
     Les huit derniers disent dans quel sens va la pièce. Sans eux, sur
     5 078 coups de ses adversaires, le bot reculait deux fois plus souvent
     qu'eux une pièce que rien ne menaçait (6,2 % des coups contre 3,3 %) et
     remettait quatre fois plus souvent une pièce sur sa case de départ
     (2,2 % contre 0,5 %) ; avec eux, il retrouve leurs proportions et
     prévoit mieux leurs coups (−2,176 contre −2,197 pour le réseau). */
  const TRAITS = ['l1', 'l2', 'l3', 'gaffe', 'erreur', 'prise_v', 'prise', 'reprise', 'echec', 'roque',
    'p_n', 'p_b', 'p_r', 'p_q', 'p_k', 'roi_tot', 'dame_tot', 'sauve', 'laisse', 'menace_ignoree',
    'gratuite', 'promo', 'l1_elo', 'l3_elo', 'gaffe_elo', 'l1_temps', 'gaffe_temps', 'l1_phase', 'gaffe_phase',
    'joue_tac', 'joue_tac_bon', 'joue_mat', 'cede_tac', 'cede_tac_gaffe', 'cede_mat',
    'recul_menace', 'recul_libre', 'rentre', 'rentre_libre', 'retour_depart', 'avance', 'developpe', 'centre'];
  /* cases de départ des pièces, par colonne (sur la première rangée) */
  const DEPARTS = { n: 'bg', b: 'cf', q: 'd', r: 'ah' };
  /* éloignement du centre : 0 sur d4-e5, 3 au bord */
  const loinCentre = (sq) => Math.max(Math.abs(sq.charCodeAt(0) - 100.5), Math.abs(+sq[1] - 4.5)) - 0.5;
  const TACTIQUES = new Set(['fourchette', 'clouage', 'enfilade', 'decouverte']);
  const VALP = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
  const autreC = (c) => (c === 'w' ? 'b' : 'w');
  /* Gain net en prenant sur `sq` (reprises en chaîne, la pièce la moins
     chère d'abord) ; ignore les clouages, comme un coup d'œil humain. */
  function seeSimple(jeu, sq, cote) {
    const b = new Echecs(jeu.fen());
    const cible = b.get(sq);
    if (!cible) return 0;
    const gains = []; let val = VALP[cible.type], c = cote;
    for (let k = 0; k < 16; k++) {
      let att = [];
      try { att = b.attackers(sq, c); } catch (e) { att = []; }
      if (!att.length) break;
      let s = att[0];
      for (const x of att) if (VALP[b.get(x).type] < VALP[b.get(s).type]) s = x;
      const pc = b.get(s);
      b.remove(s); b.remove(sq); b.put(pc, sq);
      gains.push(val); val = VALP[pc.type]; c = autreC(c);
    }
    let net = 0;
    for (let i = gains.length - 1; i >= 0; i--) net = Math.max(0, gains[i] - net);
    return net;
  }
  function pireEnPrise(jeu, couleur) {
    let pire = 0;
    for (const rg of jeu.board()) for (const x of rg) {
      if (!x || x.color !== couleur || x.type === 'k') continue;
      let att = [];
      try { att = jeu.attackers(x.square, autreC(couleur)); } catch (e) { att = []; }
      if (att.length) pire = Math.max(pire, seeSimple(jeu, x.square, autreC(couleur)));
    }
    return pire;
  }
  /* Les traits de chaque coup candidat. ctx : { elo (de l'adversaire
     imité), reste (secondes à sa pendule, ou null), ply }. `lignes` :
     Moteur.multi, dont pv[1] (ta meilleure réponse) sert aux indices
     « laisse une tactique ». Les parties coûteuses (échanges, tactiques)
     reviennent dans `cout` ({ a: pire perte avant /10, c: un code par
     coup }) : rangées avec la position, elles évitent de les recalculer à
     chaque apprentissage. */
  function traitsPosition(fen, precUci, lignes, ctx, cout) {
    const b = new Echecs(fen), c = b.turn(), adv = autreC(c);
    const legaux = new Map(b.moves({ verbose: true }).map(m => [m.from + m.to + (m.promotion || ''), m]));
    const cs = lignes.filter(l => legaux.has(l.uci));
    if (!cs.length) return null;
    const meilleur = Math.max(...cs.map(l => l.cp));
    const pireAvant = cout ? cout.a * 10 : pireEnPrise(b, c);
    const eloz = ((ctx.elo || 400) - 400) / 100;
    const court = ctx.reste !== null && ctx.reste !== undefined && ctx.reste < 60 ? 1 : 0;
    const phase = Math.max(-1, Math.min(1.5, (ctx.ply - 30) / 30));
    const precTo = precUci ? precUci.slice(2, 4) : null;
    const precM = precUci ? { from: precUci.slice(0, 2), to: precUci.slice(2, 4) } : null;
    const rangDe = (sq) => (c === 'w' ? +sq[1] - 1 : 8 - +sq[1]);
    const X = [], ucis = [], pertes = [], codes = [];
    for (const l of cs) {
      const m = legaux.get(l.uci);
      const perte = Math.max(0, borne(meilleur) - borne(l.cp));
      const capt = m.captured || null;
      const roque = m.flags.includes('k') || m.flags.includes('q');
      let attaque, pireApres, gratuite, jt, jmat, ct, cmat;
      const code = cout ? cout.c[lignes.indexOf(l)] : undefined;
      if (code !== undefined && code !== null) {
        [attaque, gratuite, jt, jmat, ct, cmat] = [1, 2, 4, 8, 16, 32].map(bit => (code & bit ? 1 : 0));
        pireApres = Math.floor(code / 64) * 10;
      } else {
        attaque = 0;
        try { attaque = b.attackers(m.from, adv).length > 0 && seeSimple(b, m.from, adv) > 0 ? 1 : 0; } catch (e) { /* position que chess.js refuse : pas d'attaque comptée */ }
        const b2 = new Echecs(fen); b2.move(m);
        pireApres = pireEnPrise(b2, c);
        gratuite = capt && VALP[capt] - seeSimple(b2, m.to, adv) >= 200 ? 1 : 0;
        const jm = motifsDuCoup(fen, l.uci, precM).motifs;
        const rep = (l.pv || [])[1];
        const cm = rep ? motifsDuCoup(b2.fen(), rep, m).motifs : [];
        jt = jm.some(t => TACTIQUES.has(t)) ? 1 : 0; jmat = jm.includes('mat') ? 1 : 0;
        ct = cm.some(t => TACTIQUES.has(t)) ? 1 : 0; cmat = cm.includes('mat') ? 1 : 0;
      }
      codes.push(attaque + 2 * gratuite + 4 * jt + 8 * jmat + 16 * ct + 32 * cmat + 64 * Math.round(pireApres / 10));
      const l1 = Math.min(perte, 100) / 100, l2 = Math.min(Math.max(perte - 100, 0), 200) / 200;
      const l3 = Math.min(Math.max(perte - 300, 0), 1200) / 1200;
      const g = perte >= 300 ? 1 : 0, e = perte >= 100 && perte < 300 ? 1 : 0;
      const roi = m.piece === 'k' && !roque;
      /* le sens du coup, vu du camp qui joue (rangée 0 = la sienne) */
      const fig = m.piece !== 'p' && m.piece !== 'k', calme = fig && !capt;
      const r0 = rangDe(m.from), r1 = rangDe(m.to);
      const recul = calme && r1 < r0, rentre = calme && m.piece !== 'r' && r1 === 0 && r0 > 0;
      X.push([l1, l2, l3, g, e, capt ? VALP[capt] / 100 : 0, capt ? 1 : 0, capt && precTo === m.to ? 1 : 0,
        /[+#]/.test(m.san) ? 1 : 0, roque ? 1 : 0,
        m.piece === 'n' ? 1 : 0, m.piece === 'b' ? 1 : 0, m.piece === 'r' ? 1 : 0, m.piece === 'q' ? 1 : 0, roi ? 1 : 0,
        roi && ctx.ply < 60 ? 1 : 0, m.piece === 'q' && ctx.ply < 14 ? 1 : 0,
        attaque, Math.max(0, pireApres - pireAvant) / 100, pireAvant >= 100 && pireApres >= pireAvant ? 1 : 0,
        gratuite, m.promotion && m.promotion !== 'q' ? 1 : 0,
        l1 * eloz, l3 * eloz, g * eloz, l1 * court, g * court, l1 * phase, g * phase,
        jt, jt * (perte < 50 ? 1 : 0), jmat, ct, ct * g, cmat,
        recul && attaque ? 1 : 0, recul && !attaque ? 1 : 0, rentre ? 1 : 0, rentre && !attaque ? 1 : 0,
        calme && r1 === 0 && (DEPARTS[m.piece] || '').includes(m.to[0]) ? 1 : 0, calme && r1 > r0 ? 1 : 0,
        !capt && (m.piece === 'n' || m.piece === 'b') && r0 === 0 && r1 > 0 ? 1 : 0,
        fig ? (loinCentre(m.from) - loinCentre(m.to)) / 3 : 0]);
      ucis.push(l.uci); pertes.push(perte);
    }
    return { X, ucis, pertes, lignes: cs, cout: { a: Math.round(pireAvant / 10), c: codes } };
  }
  const produit = (w, x) => { let s = 0; for (let k = 0; k < x.length; k++) s += w[k] * x[k]; return s; };
  function softmax(sc) {
    const mx = Math.max(...sc), e = sc.map(v => Math.exp(v - mx)), t = e.reduce((a, v) => a + v, 0);
    return e.map(v => v / t);
  }
  /* Apprentissage : méthode de Newton sur la vraisemblance du coup joué,
     avec une pénalité L2 (λ = 0,5) qui garde les poids raisonnables quand
     les données manquent. rows : [{ X, y, poids }]. */
  async function entrainer(rows, opts) {
    opts = opts || {};
    const F = rows.length ? rows[0].X[0].length : TRAITS.length, lam = opts.l2 === undefined ? 0.5 : opts.l2;
    let w = new Array(F).fill(0);
    const vraisemblance = (w) => {
      let ll = 0;
      for (const r of rows) {
        const sc = r.X.map(x => produit(w, x)), mx = Math.max(...sc);
        let t = 0; for (const v of sc) t += Math.exp(v - mx);
        ll += (r.poids || 1) * (sc[r.y] - mx - Math.log(t));
      }
      return ll - lam * produit(w, w);
    };
    let ll = vraisemblance(w);
    for (let it = 0; it < (opts.iterations || 25); it++) {
      const g = new Array(F).fill(0), H = Array.from({ length: F }, () => new Array(F).fill(0));
      for (const r of rows) {
        const pw = r.poids || 1;
        const p = softmax(r.X.map(x => produit(w, x)));
        const moy = new Array(F).fill(0);
        for (let j = 0; j < r.X.length; j++) for (let k = 0; k < F; k++) moy[k] += p[j] * r.X[j][k];
        for (let k = 0; k < F; k++) g[k] += pw * (r.X[r.y][k] - moy[k]);
        for (let j = 0; j < r.X.length; j++) {
          if (p[j] < 1e-6) continue;
          const x = r.X[j];
          for (let a = 0; a < F; a++) {
            const da = x[a] - moy[a];
            if (da === 0) continue;
            for (let c2 = a; c2 < F; c2++) H[a][c2] += pw * p[j] * da * (x[c2] - moy[c2]);
          }
        }
      }
      for (let a = 0; a < F; a++) { g[a] -= 2 * lam * w[a]; H[a][a] += 2 * lam; for (let c2 = 0; c2 < a; c2++) H[a][c2] = H[c2][a]; }
      const d = resoudre(H, g);
      let pas = 1, w2, ll2;
      for (let k = 0; k < 12; k++) {
        w2 = w.map((v, i) => v + pas * d[i]); ll2 = vraisemblance(w2);
        if (ll2 >= ll - 1e-9) break;
        pas /= 2;
      }
      const gain = ll2 - ll;
      w = w2; ll = ll2;
      if (opts.pendant) await opts.pendant(it);
      if (gain < 1e-4) break;
    }
    return w;
  }
  /* Le réseau à une couche cachée : H neurones (tanh) plus le lien direct
     du modèle simple, score = v·tanh(xW + b) + w·x. Avec peu de positions il
     fait moins bien que le modèle simple ; avec 4 000 positions d'Amaury, il
     fait nettement mieux. Méthode L-BFGS, pénalité L2 (λ = 1), et surtout
     arrêt précoce : avec `val` (des positions d'autres parties), on garde
     l'itération où il prévoit le mieux ces parties-là — sans arrêt, il
     apprend trop les parties d'apprentissage (−2,210 à 400 itérations,
     −2,194 à 80, sur 5 078 positions). Sans `val`, `iterations` fixe. */
  function aleaGauss(graine) {
    let a = graine >>> 0;
    const u = () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    return () => Math.sqrt(-2 * Math.log(u() + 1e-12)) * Math.cos(2 * Math.PI * u());
  }
  function deballer(t, F, H) {
    return { W: t.subarray(0, F * H), b: t.subarray(F * H, F * H + H), v: t.subarray(F * H + H, F * H + 2 * H), w: t.subarray(F * H + 2 * H) };
  }
  function scoresReseau(m, X) {
    const F = X[0].length, H = m.H, t = Float64Array.from(m.t), { W, b, v, w } = deballer(t, F, H);
    return X.map(x => {
      let s = 0;
      for (let k = 0; k < F; k++) s += w[k] * x[k];
      for (let h = 0; h < H; h++) {
        let a = b[h];
        for (let k = 0; k < F; k++) if (x[k]) a += x[k] * W[k * H + h];
        s += v[h] * Math.tanh(a);
      }
      return s;
    });
  }
  /* Un modèle appris avant l'ajout d'indices n'en connaît que les premiers :
     on lui donne ceux-là (les nouveaux sont toujours ajoutés à la fin), et
     il joue exactement comme avant jusqu'au prochain apprentissage. */
  const nbEntrees = (m) => (m.H ? (m.t.length - 2 * m.H) / (m.H + 1) : m.w.length);
  function adapter(m, X) {
    const F = nbEntrees(m);
    return X.length && F < X[0].length ? X.map(x => x.slice(0, F)) : X;
  }
  const probasModele = (m, X) => { X = adapter(m, X); return softmax(m.H ? scoresReseau(m, X) : X.map(x => produit(m.w, x))); };
  async function entrainerReseau(rows, opts) {
    opts = opts || {};
    const F = rows[0].X[0].length, H = opts.H || 8, lam = opts.l2 === undefined ? 1 : opts.l2;
    const P = F * H + 2 * H + F;
    const R = rows.map(r => ({ n: r.X.length, x: Float64Array.from(r.X.flat()), y: r.y, p: r.poids || 1 }));
    const nMax = Math.max(...R.map(r => r.n));
    const A = new Float64Array(nMax * H), Hh = new Float64Array(nMax * H), S = new Float64Array(nMax);
    const f = (t) => {
      const { W, b, v, w } = deballer(t, F, H), g = new Float64Array(P);
      const gW = g.subarray(0, F * H), gb = g.subarray(F * H, F * H + H), gv = g.subarray(F * H + H, F * H + 2 * H), gw = g.subarray(F * H + 2 * H);
      let ll = 0;
      for (const r of R) {
        const x = r.x;
        let mx = -Infinity;
        for (let j = 0; j < r.n; j++) {
          const o = j * F; let s = 0;
          for (let k = 0; k < F; k++) s += w[k] * x[o + k];
          for (let h = 0; h < H; h++) A[j * H + h] = b[h];
          for (let k = 0; k < F; k++) {
            const xv = x[o + k]; if (!xv) continue;
            const ow = k * H;
            for (let h = 0; h < H; h++) A[j * H + h] += xv * W[ow + h];
          }
          for (let h = 0; h < H; h++) { const th = Math.tanh(A[j * H + h]); Hh[j * H + h] = th; s += v[h] * th; }
          S[j] = s; if (s > mx) mx = s;
        }
        let tot = 0;
        for (let j = 0; j < r.n; j++) { S[j] = Math.exp(S[j] - mx); tot += S[j]; }
        ll += r.p * Math.log(Math.max(1e-300, S[r.y] / tot));
        for (let j = 0; j < r.n; j++) {
          const gs = r.p * ((j === r.y ? 1 : 0) - S[j] / tot);
          if (Math.abs(gs) < 1e-12) continue;
          const o = j * F;
          for (let k = 0; k < F; k++) gw[k] += gs * x[o + k];
          for (let h = 0; h < H; h++) {
            const th = Hh[j * H + h];
            gv[h] += gs * th;
            const d = gs * v[h] * (1 - th * th);
            gb[h] += d;
            for (let k = 0; k < F; k++) { const xv = x[o + k]; if (xv) gW[k * H + h] += xv * d; }
          }
        }
      }
      let pen = 0;
      for (let i = 0; i < P; i++) { pen += t[i] * t[i]; g[i] = -g[i] + 2 * lam * t[i]; }
      return [-ll + lam * pen, g];
    };
    /* départ : tiré au hasard (graine fixe), ou un réseau déjà appris
       (après un import, ou pour la version coriace) */
    const z = aleaGauss(opts.graine || 1), t0 = new Float64Array(P);
    if (opts.depart && opts.depart.t && opts.depart.t.length === P) t0.set(opts.depart.t);
    else {
      for (let i = 0; i < F * H; i++) t0[i] = 0.1 * z();
      for (let i = F * H + H; i < F * H + 2 * H; i++) t0[i] = 0.1 * z();
    }
    let meilleur = null, sans = 0;
    const suivi = opts.val && opts.val.length ? (it, t) => {
      const m = { H, t };
      let ll = 0;
      for (const r of opts.val) ll += Math.log(Math.max(1e-12, probasModele(m, r.X)[r.y]));
      if (!meilleur || ll > meilleur.ll) { meilleur = { ll, it: it + 1, t: Float64Array.from(t) }; sans = 0; } else sans++;
      return sans >= (opts.patience || 30);
    } : null;
    let t = await lbfgs(f, t0, opts.iterations || (suivi ? 400 : 80), opts.pendant, suivi);
    if (meilleur) t = meilleur.t;
    return { H, t: Array.from(t, (x) => Math.round(x * 1e6) / 1e6), iterations: meilleur ? meilleur.it : null };
  }
  async function lbfgs(f, x0, iters, pendant, suivi) {
    const dot = (a, c) => { let s = 0; for (let i = 0; i < a.length; i++) s += a[i] * c[i]; return s; };
    let x = x0, [fx, g] = f(x);
    const Ss = [], Ys = [];
    for (let it = 0; it < iters; it++) {
      const q = Float64Array.from(g), al = [];
      for (let i = Ss.length - 1; i >= 0; i--) {
        al[i] = dot(Ss[i], q) / dot(Ys[i], Ss[i]);
        for (let k = 0; k < q.length; k++) q[k] -= al[i] * Ys[i][k];
      }
      const n = Ss.length;
      const gam = n ? dot(Ss[n - 1], Ys[n - 1]) / dot(Ys[n - 1], Ys[n - 1]) : 1 / Math.max(1, Math.sqrt(dot(g, g)));
      for (let k = 0; k < q.length; k++) q[k] *= gam;
      for (let i = 0; i < n; i++) {
        const be = dot(Ys[i], q) / dot(Ys[i], Ss[i]);
        for (let k = 0; k < q.length; k++) q[k] += (al[i] - be) * Ss[i][k];
      }
      let d = q.map(v => -v), gd = dot(g, d);
      if (!(gd < 0)) { d = g.map(v => -v); gd = -dot(g, g); Ss.length = 0; Ys.length = 0; }
      let pas = 1, xn, fn, gn;
      for (let k = 0; k < 30; k++) {
        xn = x.map((v, i) => v + pas * d[i]); [fn, gn] = f(xn);
        if (fn <= fx + 1e-4 * pas * gd) break;
        pas /= 2;
      }
      if (!(fn <= fx)) break;
      const s = xn.map((v, i) => v - x[i]), y = gn.map((v, i) => v - g[i]);
      if (dot(s, y) > 1e-10) { Ss.push(s); Ys.push(y); if (Ss.length > 10) { Ss.shift(); Ys.shift(); } }
      const gain = (fx - fn) / Math.max(1, Math.abs(fx));
      x = xn; fx = fn; g = gn;
      if (pendant) await pendant(it);
      if (suivi && suivi(it, x)) break;
      if (gain < 1e-8 && it > 20) break;
    }
    return x;
  }

  function resoudre(A0, b0) {          // Gauss avec pivot partiel ; A symétrique définie positive
    const n = b0.length, A = A0.map(r => r.slice()), b = b0.slice();
    for (let i = 0; i < n; i++) {
      let p = i; for (let k = i + 1; k < n; k++) if (Math.abs(A[k][i]) > Math.abs(A[p][i])) p = k;
      [A[i], A[p]] = [A[p], A[i]]; [b[i], b[p]] = [b[p], b[i]];
      const piv = A[i][i] || 1e-12;
      for (let k = i + 1; k < n; k++) {
        const f = A[k][i] / piv; if (!f) continue;
        for (let c2 = i; c2 < n; c2++) A[k][c2] -= f * A[i][c2];
        b[k] -= f * b[i];
      }
    }
    const x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      let t = b[i]; for (let k = i + 1; k < n; k++) t -= A[i][k] * x[k];
      x[i] = t / (A[i][i] || 1e-12);
    }
    return x;
  }
  /* La règle du bot de base, en probabilités (même tirage que choisir()) :
     pour comparer honnêtement le modèle appris à ce qu'on avait. */
  function probasRegle(r, elo, ply) {
    const R = CALIB, x = r.X, l = r.pertes;
    const c = cible(elo), ph = phaseDe(ply);
    const pG = Math.min(0.6, R.kg * c.g * ph.g), pE = Math.min(0.6, R.ke * c.e * ph.e);
    const T = R.t0 * Math.exp(-(Math.max(100, Math.min(2400, elo)) - REF.elo) / R.tPente) * ph.i;
    const i = (n) => TRAITS.indexOf(n);
    const att = x.map(f => (f[i('prise')] ? 2.2 : 1) * (f[i('reprise')] ? 2 : 1) * (f[i('echec')] ? 1.5 : 1)
      * (f[i('roque')] ? 2 : 1) * (f[i('roi_tot')] ? 0.35 : 1) * (f[i('dame_tot')] ? 0.6 : 1) * (f[i('promo')] ? 0.03 : 1));
    const G = l.map(v => v >= 300), E = l.map(v => v >= 100 && v < 300), Bn = l.map(v => v < 100);
    const aG = G.some(Boolean), aE = E.some(Boolean);
    const PgC = aG ? pG : 0, PeC = aE ? (aG ? pE : pG + pE) : 0, PnC = 1 - PgC - PeC;
    const p = new Array(l.length).fill(0);
    const ajouter = (masque, poids, P) => {
      const w = l.map((v, j) => (masque[j] ? poids(j) : 0)), t = w.reduce((a, v) => a + v, 0);
      if (t > 0) for (let j = 0; j < l.length; j++) p[j] += P * w[j] / t;
    };
    if (aG) ajouter(G, (j) => att[j] * Math.exp(-(l[j] - 300) / 450), PgC);
    if (aE) ajouter(E, (j) => att[j], PeC);
    ajouter(Bn, (j) => att[j] * Math.exp(-l[j] / T), PnC);
    return p;
  }
  /* Mesures sur des positions : vraisemblance moyenne du coup joué, coup
     joué dans le premier choix ou les trois premiers, part de gaffes
     prévue et observée. `probas(r)` : probabilité de chaque candidat. */
  function mesurer(rows, probas) {
    let ll = 0, t1 = 0, t3 = 0, gp = 0, go = 0;
    for (const r of rows) {
      const p = probas(r);
      ll += Math.log(Math.max(1e-12, p[r.y]));
      const rang = p.filter(v => v > p[r.y]).length;
      if (rang < 1) t1++; if (rang < 3) t3++;
      gp += p.reduce((a, v, j) => a + (r.pertes[j] >= 300 ? v : 0), 0);
      go += r.pertes[r.y] >= 300 ? 1 : 0;
    }
    const n = rows.length || 1;
    return { ll: ll / n, top1: t1 / n, top3: t3 / n, gaffesPrevues: gp / n, gaffesObservees: go / n, n: rows.length };
  }
  /* Validation croisée par partie (aucune partie à la fois dans
     l'apprentissage et dans le test) : le modèle contre la règle de base. */
  async function valider(rows, k, pendant) {
    const parties = [...new Set(rows.map(r => r.g))];
    const pli = new Map(parties.map((g, i) => [g, i % k]));
    const res = { modele: [], regle: [] };
    for (let f = 0; f < k; f++) {
      const app = rows.filter(r => pli.get(r.g) !== f), test = rows.filter(r => pli.get(r.g) === f);
      if (!test.length || !app.length) continue;
      const w = await entrainer(app, { pendant });
      res.modele.push(mesurer(test, (r) => softmax(r.X.map(x => produit(w, x)))));
      res.regle.push(mesurer(test, (r) => probasRegle(r, r.elo || 400, r.ply || 30)));
    }
    const moy = (l, c) => l.reduce((a, x) => a + x[c] * x.n, 0) / l.reduce((a, x) => a + x.n, 0);
    const out = {};
    for (const m of ['modele', 'regle']) out[m] = Object.fromEntries(['ll', 'top1', 'top3', 'gaffesPrevues', 'gaffesObservees'].map(c => [c, moy(res[m], c)]));
    return out;
  }
  /* Le coup du bot personnalisé. reglage : comme choisir() (finales). */
  function choisirPerso(lignes, fen, prec, ply, modele, ctx, alea, reglage) {
    alea = alea || Math.random;
    const t = traitsPosition(fen, prec ? prec.from + prec.to + (prec.promotion || '') : null, lignes, Object.assign({ ply }, ctx));
    if (!t) return null;
    if (t.ucis.length === 1) return { uci: t.ucis[0], sorte: 'seul', perte: 0 };
    const Xm = adapter(modele, t.X);
    const sc = modele.H ? scoresReseau(modele, Xm) : Xm.map(x => produit(modele.w, x));
    if (reglage && reglage.simplifier) {
      t.ucis.forEach((u, j) => {
        const m = jouerUci(new Echecs(fen), u), suite = (t.lignes[j].pv || [])[1];
        if (m && m.captured && suite && suite.slice(2, 4) === m.to) sc[j] += Math.log(m.captured === 'q' ? 8 : 4);
        if (reglage.avantFinale && t.pertes[j] >= 300) sc[j] += Math.log(0.5);
      });
    }
    const p = softmax(sc);
    const j = tirer(t.ucis.map((u, k) => k), (k) => p[k], alea);
    const perte = t.pertes[j];
    return { uci: t.ucis[j], sorte: perte >= 300 ? 'gaffe' : perte >= 100 ? 'erreur' : 'normal', perte };
  }
  /* Le livre des adversaires : les coups qu'ils t'ont joués dans les douze
     premiers demi-coups. `livre` : { clé de position: [[uci, san, n, nCoriace]] },
     complété en place par chaque partie { sans: [...], couleur (la tienne),
     score (le tien) } ; nCoriace compte trois fois les parties perdues. */
  const POIDS_CORIACE = { 0: 3, 0.5: 1.5, 1: 1 };
  function compterLivre(livre, parties) {
    for (const p of parties) {
      const j = new Echecs(); const adv = p.couleur === 'w' ? 'b' : 'w';
      const pc = POIDS_CORIACE[p.score] || 1;
      for (let i = 0; i < Math.min(12, p.sans.length); i++) {
        const k = cleDe(j);
        let m; try { m = j.move(p.sans[i]); } catch (e) { break; }
        if (m.color !== adv) continue;
        const u = m.from + m.to + (m.promotion || '');
        const l = livre[k] || (livre[k] = []);
        let x = l.find(a => a[0] === u);
        if (!x) { x = [u, m.san, 0, 0]; l.push(x); }
        x[2]++; x[3] += pc;
      }
    }
    return livre;
  }
  /* L'arbre du bot (même forme que arbre()) : les positions vues au moins
     deux fois, chaque coup pesant sa fréquence. */
  function arbreDuLivre(livre, coriace) {
    const out = new Map();
    for (const [k, v] of Object.entries(livre || {})) {
      if (v.reduce((a, x) => a + x[2], 0) < 2) continue;
      out.set(k, v.map(([u, s, n, nc]) => ({ u, s, poids: coriace ? nc : n, src: new Set(['adv']) })));
    }
    return out;
  }

  /* ------------------------------------------------------------ la pendule
     Temps de réflexion d'un joueur humain : en partie de 10 min, 8,3 s par
     coup en moyenne et 5,5 s la moitié du temps (mêmes parties). Une loi
     log-normale reproduit ces deux chiffres. */
  function tempsReflexion(pendule, reste, ply, horsLivre, alea) {
    alea = alea || Math.random;
    if (!pendule) return 600 + alea() * 1200;
    const moyenne = (pendule.base + 40 * (pendule.inc || 0)) / 72 * 1000;
    const g = Math.sqrt(-2 * Math.log(Math.max(1e-9, alea()))) * Math.cos(2 * Math.PI * alea());
    let t = moyenne * Math.exp(0.9 * g - 0.405);
    if (!horsLivre) t *= 0.35;
    if (ply < 2) t = Math.min(t, 2500);
    return Math.max(700, Math.min(t, reste / 10));
  }

  racine.Bot = {
    LIVRE, normaliser, comprendre, arbre, cleDe, lignesDe, positionsDef, varianteSuivie, tirer,
    cible, phaseDe, CALIB, choisir, attrait, tempsReflexion, REF, PENTE,
    THEMES, motifsDuCoup, occasions, choisirOccasion, majNiveau,
    TRAITS, traitsPosition, entrainer, mesurer, valider, probasRegle, choisirPerso, softmax, produit,
    entrainerReseau, scoresReseau, probasModele, nbEntrees,
    compterLivre, arbreDuLivre, seeSimple, POIDS_CORIACE,
  };
})(typeof window !== 'undefined' ? window : globalThis);
