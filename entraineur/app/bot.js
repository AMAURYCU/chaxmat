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
  /* les thèmes tactiques (pas encore jouables) : début de mot, ou mot entier */
  const MOTIFS = [/^enfilad/, /^fourchett/, /^clouag/, /^decouvert/, /^tactiq/, /^sacrific/, /^final/, /^mats?$/,
    /^mater$/, /^skewer/, /^forks?$/, /^pins?$/, /^endgame/, /^mates?$/, /^checkmate/, /^tactic/, /^combinaison/,
    /^surcharg/, /^deviation/, /^attraction/, /^zwischenzug/, /^interception/];
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
    const motif = mots.find(w => MOTIFS.some(r => r.test(w))) || null;
    if (!cands.length) return { type: motif ? 'motif' : 'aucun', motif };
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
    return { type: 'ouverture', entree, rep: c.rep || null, ligne: c.ligne || null, camp, contre, campDemande, score: c.score };
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
    const c = cible(elo), ph = phaseDe(ply);
    const pG = Math.min(0.6, R.kg * c.g * ph.g), pE = Math.min(0.6, R.ke * c.e * ph.e);
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
  };
})(typeof window !== 'undefined' ? window : globalThis);
