/* ==========================================================================
   Entraînement : mats et finales.

   Chaque thème (roi et tour contre roi, Lucena, dame contre pion…) tire une
   position au hasard, avec des règles qui la gardent instructive : les
   pièces sont posées dans les zones où le thème a du sens, puis la position
   n'est gardée que si elle a le bon résultat (gagnée quand il faut gagner,
   nulle quand il faut annuler) et qu'on peut s'y tromper.

   La vérité vient des tables de finales de Lichess (Syzygy, exactes jusqu'à
   7 pièces, gratuites, sans compte) : le résultat de la position, la
   distance au mat, et le résultat de chaque coup. Sans connexion, Stockfish
   les remplace (moins sûr dans les finales).

   L'adversaire joue parfaitement : parmi les coups qui gardent son meilleur
   résultat, il gagne au plus vite, ou résiste le plus longtemps ; quand la
   position est nulle, Stockfish départage les coups qui la gardent nulle
   pour te poser le plus de problèmes. Sans les tables : Stockfish à pleine
   force.

   Le cœur (thèmes, tirage, verdicts) est dans `Finales` et ne touche pas
   au DOM ; la séance (plateau, coups, bilan) vient ensuite.
   Données : S.d.finales[thème] = { niveau, essais, reussites, parfaites, … }.
   ========================================================================== */
'use strict';

(function (racine) {
  const Ch = () => racine.Chess;
  const COL = 'abcdefgh';
  const sq = (f, r) => COL[f] + (r + 1);
  const fi = (s) => s.charCodeAt(0) - 97, ra = (s) => +s[1] - 1;
  const dist = (a, b) => Math.max(Math.abs(fi(a) - fi(b)), Math.abs(ra(a) - ra(b)));
  const clair = (s) => (fi(s) + ra(s)) % 2 === 1;
  const bord = (s) => Math.min(fi(s), 7 - fi(s), ra(s), 7 - ra(s));
  /* un pion entre deux rangées (0 = 1re rangée), sur certaines colonnes */
  const pion = (r0, r1, cols) => (s) => ra(s) >= r0 && ra(s) <= r1 && (!cols || cols.includes(fi(s)));

  /* Pose les pièces une à une, chacune sur une case libre qui respecte sa
     condition (qui peut dépendre des pièces déjà posées). Les noms : la
     première lettre est la pièce (majuscule = blancs), la suite les
     distingue (« R2 », « P2 »). */
  function poser(alea, liste) {
    const P = {}, pris = new Set();
    for (const [nom, cond] of liste) {
      let s = null;
      for (let k = 0; k < 400 && !s; k++) {
        const c = sq(Math.floor(alea() * 8), Math.floor(alea() * 8));
        if (!pris.has(c) && (!cond || cond(c, P))) s = c;
      }
      if (!s) return null;
      P[nom] = s; pris.add(s);
    }
    return P;
  }
  function fenDe(P, tour) {
    const g = Array.from({ length: 8 }, () => Array(8).fill(''));
    for (const [nom, s] of Object.entries(P)) g[7 - ra(s)][fi(s)] = nom[0];
    const rangs = g.map(l => {
      let t = '', v = 0;
      for (const c of l) { if (!c) v++; else { if (v) t += v; v = 0; t += c; } }
      return t + (v || '');
    });
    return rangs.join('/') + ' ' + tour + ' - - 0 1';
  }
  /* Symétries : couleurs échangées (l'échiquier se retourne), ou colonnes
     inversées (a ↔ h). Elles ne changent rien au résultat. */
  function miroir(fen, couleurs, cotes) {
    const p = fen.split(' ');
    let rangs = p[0].split('/');
    if (couleurs) rangs = rangs.reverse().map(r => r.replace(/[a-zA-Z]/g, c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())));
    if (cotes) rangs = rangs.map(r => r.replace(/\d/g, d => '1'.repeat(+d)).split('').reverse().join('').replace(/1+/g, m => String(m.length)));
    p[0] = rangs.join('/');
    if (couleurs) p[1] = p[1] === 'w' ? 'b' : 'w';
    return p.join(' ');
  }
  /* Une position jouable : pas de pion sur la 1re ou la 8e rangée, le camp
     qui n'a pas le trait n'est pas en échec, la partie n'est pas finie. */
  function legale(fen) {
    if (/[pP]/.test(fen.split(' ')[0].split('/')[0] + fen.split(' ')[0].split('/')[7])) return false;
    let j, k;
    try { j = new (Ch())(fen); } catch (e) { return false; }
    const p = fen.split(' ');
    try { k = new (Ch())([p[0], p[1] === 'w' ? 'b' : 'w', '-', '-', '0', '1'].join(' ')); } catch (e) { return false; }
    if (k.isCheck()) return false;
    return !j.isGameOver();
  }

  /* ------------------------------------------------------------ les thèmes
     cotes : { camp qui a le trait: objectif } ; 'auto' = celui que donnent
     les tables. fin : ce qui compte comme réussi — 'mat', 'promotion' (ton
     pion devient une pièce et ça gagne toujours), 'conversion' (il ne lui
     reste que son roi), 'tenir' (la nulle tenue tant de coups sans faute,
     ou une nulle par la règle). mesure : la difficulté — 'dtm' (la distance
     au mat, en coups, bornes par niveau) ou 'bons' (au niveau 3, un seul
     coup tient). */
  const T = (o) => Object.assign({ mesure: 'bons', tenir: 12 }, o);
  /* Pour les mats, le niveau place d'abord le roi seul : au bord (niveau 1),
     pas loin du bord (2), n'importe où sauf collé au bord (3). Le tirage
     tombe ainsi vite sur la bonne distance au mat. */
  const zoneRoi = (niv) => (s) => (niv <= 1 ? bord(s) === 0 : niv === 2 ? bord(s) <= 2 : bord(s) >= 1);
  const mat = (id, nom, liste, bornes, idee) => T({ id, groupe: 'mats', nom, cotes: { w: 'gagner' }, fin: 'mat', mesure: 'dtm', bornes, idee,
    liste: (niv) => [['k', zoneRoi(niv)], ...liste] });
  const THEMES = [
    mat('mat-tt', 'Deux tours', [['K', (s, P) => dist(s, P.k) >= 2], ['R'], ['R2']], [[1, 3], [4, 5], [6, 99]],
      'L’escalier : une tour coupe une rangée, l’autre donne échec sur la suivante, et ainsi de suite jusqu’au bord. Le roi n’a pas besoin d’aider ; éloigne seulement une tour attaquée.'),
    mat('mat-d', 'Roi et dame', [['K', (s, P) => dist(s, P.k) >= 2], ['Q']], [[1, 4], [5, 7], [8, 99]],
      'Réduis la boîte du roi avec ta dame, à un saut de cavalier de lui ; quand il est au bord, amène ton roi et mate. Méfie-toi du pat : laisse-lui toujours une case tant que ton roi n’est pas là.'),
    mat('mat-t', 'Roi et tour', [['K', (s, P) => dist(s, P.k) >= 2], ['R']], [[1, 7], [8, 12], [13, 99]],
      'La tour coupe le roi ; ton roi se met en opposition (face à lui, une case entre les deux) et la tour donne échec : il recule d’une rangée. Quand ce n’est pas le moment, un coup d’attente de la tour.'),
    mat('mat-ff', 'Deux fous', [['K', (s, P) => dist(s, P.k) >= 2], ['B', (s) => clair(s)], ['B2', (s) => !clair(s)]], [[1, 9], [10, 14], [15, 99]],
      'Les deux fous côte à côte font un mur diagonal ; ton roi les soutient. Pousse le roi adverse vers un coin, n’importe lequel, puis mate. Attention au pat dans le coin.'),
    mat('mat-fc', 'Fou et cavalier', [['K', (s, P) => dist(s, P.k) >= 2], ['B'], ['N']], [[1, 15], [16, 24], [25, 99]],
      'On ne mate que dans un coin de la couleur du fou. Pousse le roi au bord, puis fais-le glisser vers le bon coin avec la manœuvre en W du cavalier, le fou fermant la diagonale. Il y a 50 coups : pas de temps à perdre.'),

    T({ id: 'p-gain', seuls: true, groupe: 'pions', nom: 'Roi et pion : gagner', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(1, 5, [1, 2, 3, 4, 5, 6])], ['K', (s, P) => dist(s, P.P) <= 2], ['k', (s, P) => dist(s, P.P) <= 3 && dist(s, P.K) >= 2 && ra(s) > ra(P.P)]],
      idee: 'Le roi devant le pion, pas derrière. Gagne l’opposition : face au roi adverse avec une case entre les deux, c’est à lui de céder. Un roi sur la 6e rangée devant son pion gagne toujours (sauf pion de la tour).' }),
    T({ id: 'p-nulle', seuls: true, groupe: 'pions', nom: 'Roi contre roi et pion : annuler', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 12,
      liste: [['P', pion(2, 5, [1, 2, 3, 4, 5, 6])], ['K', (s, P) => dist(s, P.P) <= 2 && ra(s) >= ra(P.P) - 1], ['k', (s, P) => dist(s, P.P) <= 3 && dist(s, P.K) >= 2 && ra(s) > ra(P.P)]],
      idee: 'Reste devant le pion et prends l’opposition. Quand il faut reculer, recule tout droit sur la case devant le pion, pas en diagonale : tu pourras reprendre l’opposition.' }),
    T({ id: 'p-carre', seuls: true, groupe: 'pions', nom: 'La règle du carré', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 8,
      liste: [['P', pion(2, 4)], ['K', (s, P) => dist(s, P.P) >= 4],
        ['k', (s, P) => { const d = dist(s, sq(fi(P.P), 7)); return d >= 2 && d <= 5 && dist(s, P.P) >= 2 && dist(s, P.K) >= 2; }]],
      idee: 'Trace le carré du pion : du pion à sa case de promotion, et autant de colonnes sur le côté. Si ton roi peut y entrer, il rattrape le pion. Va droit vers la case de promotion, en diagonale s’il le faut.' }),
    T({ id: 'p-tour', seuls: true, groupe: 'pions', nom: 'Pion de la tour : tenir le coin', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 10,
      liste: [['P', pion(2, 5, [0])], ['K', (s, P) => dist(s, P.P) <= 3], ['k', (s, P) => fi(s) <= 3 && ra(s) >= 4 && dist(s, P.K) >= 2]],
      idee: 'Contre le pion de la tour, il suffit d’atteindre le coin de promotion (ou de rester enfermé devant) : le roi adverse ne peut pas t’en chasser sans pat.' }),
    T({ id: 'p-course', seuls: true, groupe: 'pions', nom: 'Course de pions', cotes: { w: 'auto' }, fin: 'promotion', tenir: 10,
      liste: [['P', pion(2, 4)], ['p', (s, P) => ra(s) >= 3 && ra(s) <= 5 && Math.abs(fi(s) - fi(P.P)) >= 3], ['K'], ['k']],
      idee: 'Compte les coups jusqu’à la promotion des deux côtés. Celui qui promeut le premier avec échec, ou qui peut prendre la nouvelle dame, gagne. Sinon, ton roi peut rattraper son pion : vérifie le carré.' }),
    T({ id: 'p-bloques', seuls: true, groupe: 'pions', nom: 'Pions bloqués, opposition et triangulation', cotes: { w: 'auto' }, fin: 'promotion', tenir: 10,
      liste: [['P', pion(3, 4, [2, 3, 4, 5])], ['p', (s, P) => fi(s) === fi(P.P) && ra(s) === ra(P.P) + 1], ['K', (s, P) => dist(s, P.P) <= 3], ['k', (s, P) => dist(s, P.p) <= 3]],
      idee: 'Le but est de gagner le pion adverse. Les cases clés se jouent à un temps près : si l’opposition n’est pas à toi, perds un temps avec ton roi en triangle (trois cases pour revenir au même endroit).' }),
    T({ id: 'p-deux-un', seuls: true, groupe: 'pions', nom: 'Deux pions contre un', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(1, 4)], ['P2', (s, P) => pion(1, 4)(s) && fi(s) !== fi(P.P)], ['p', (s) => ra(s) >= 3 && ra(s) <= 6], ['K'], ['k', (s, P) => dist(s, P.K) >= 2]],
      idee: 'Crée un pion passé, et sers-t’en pour détourner le roi adverse pendant que ton roi va manger ses pions. Un pion passé éloigné vaut souvent plus qu’un pion de plus.' }),

    T({ id: 't-lucena', groupe: 'tours', nom: 'Lucena : gagner', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(6, 6, [1, 2, 3, 4, 5, 6])], ['K', (s, P) => fi(s) === fi(P.P) && ra(s) === 7], ['k', (s, P) => Math.abs(fi(s) - fi(P.P)) >= 2 && ra(s) >= 4], ['R', (s) => ra(s) <= 5], ['r', (s) => ra(s) <= 5]],
      idee: 'Le pont : amène ta tour sur la 4e rangée, sors ton roi de devant le pion ; quand les échecs latéraux arrivent, ton roi revient vers la tour et la tour s’interpose. Coupe d’abord le roi adverse d’une colonne de plus si besoin.' }),
    T({ id: 't-philidor', groupe: 'tours', nom: 'Philidor : annuler', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 15,
      liste: [['P', pion(3, 4, [1, 2, 3, 4, 5, 6])], ['K', (s, P) => dist(s, P.P) <= 2 && ra(s) <= ra(P.P) + 1], ['k', (s, P) => Math.abs(fi(s) - fi(P.P)) <= 1 && ra(s) >= 6], ['r', (s) => ra(s) === 5], ['R']],
      idee: 'Ta tour sur ta 3e rangée empêche le roi adverse d’avancer. Dès que le pion avance sur cette rangée, la tour part tout au fond et donne des échecs par derrière : le roi n’a plus d’abri.' }),
    T({ id: 't-tpt', groupe: 'tours', nom: 'Tour et pion contre tour', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 15,
      liste: [['P', pion(2, 5)], ['K'], ['k', (s, P) => dist(s, P.K) >= 2], ['R'], ['r']],
      idee: 'Une tour active vaut plus qu’un pion. En attaque : coupe le roi adverse, ton roi devant ton pion. En défense : roi devant le pion, sinon tour derrière lui ou échecs de loin.' }),
    T({ id: 't-tour-pion', groupe: 'tours', nom: 'Tour contre pion', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', finGain: 'conversion', tenir: 10,
      liste: [['p', (s) => ra(s) >= 1 && ra(s) <= 4], ['k', (s, P) => dist(s, P.p) <= 2], ['K', (s, P) => dist(s, P.p) >= 2 && dist(s, P.p) <= 6], ['R']],
      idee: 'Avec la tour : coupe le roi adverse de son pion le long d’une rangée ou d’une colonne, et ramène ton roi. Avec le pion : roi à côté de lui, jamais devant ; le pion avance quand la tour ne peut pas le prendre.' }),

    T({ id: 'a-dame-pion', groupe: 'autres', nom: 'Dame contre pion sur la 7e', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', finGain: 'conversion', tenir: 10,
      liste: [['p', (s) => ra(s) === 1], ['k', (s, P) => dist(s, P.p) === 1], ['K', (s, P) => dist(s, P.p) >= 3], ['Q']],
      idee: 'La dame force le roi devant son pion par échecs et clouages, et chaque fois ton roi gagne un pas. Contre un pion de la tour ou du fou, le défenseur se met au coin ou laisse prendre le pion avec pat : c’est nul.' }),
    T({ id: 'a-mauvais-fou', groupe: 'autres', nom: 'Fou de la mauvaise couleur', cotes: { b: 'annuler', w: 'gagner' }, fin: 'promotion', tenir: 10,
      liste: [['P', pion(2, 5, [0])], ['B', (s) => !clair(s)], ['K', (s, P) => dist(s, P.P) <= 3], ['k', (s, P) => fi(s) <= 2 && ra(s) >= 5 && dist(s, P.K) >= 2]],
      idee: 'Pion de la tour et fou qui ne contrôle pas la case de promotion : si le roi défenseur atteint le coin, c’est nul. En attaque, il faut l’en empêcher en le coupant avec le fou et le roi.' }),
    T({ id: 'a-cavalier-pion', groupe: 'autres', nom: 'Cavalier contre pion', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 12,
      liste: [['P', pion(2, 5)], ['K', (s, P) => dist(s, P.P) <= 2], ['k', (s, P) => dist(s, P.K) >= 2], ['n']],
      idee: 'Le cavalier arrête un pion en contrôlant une case devant lui, le plus tôt possible ; le pion de la tour est le plus dur à arrêter. Ramène ton roi vers le pion dès que tu peux.' }),
    T({ id: 'a-fous-opposes', groupe: 'autres', nom: 'Fous de couleurs opposées', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 15,
      liste: [['B'], ['b', (s, P) => clair(s) !== clair(P.B)], ['P', pion(2, 5)], ['P2', (s, P) => pion(2, 5)(s) && fi(s) !== fi(P.P)], ['K'], ['k', (s, P) => dist(s, P.K) >= 2]],
      idee: 'Bloque les pions sur la couleur de ton fou, ou sacrifie le fou pour les derniers pions : deux pions de plus ne suffisent souvent pas. Ton roi devant le pion le plus dangereux.' }),
    T({ id: 'a-dame-tour', groupe: 'autres', nom: 'Dame contre tour', cotes: { w: 'gagner' }, fin: 'conversion', mesure: 'dtm', bornes: [[1, 12], [13, 22], [23, 99]],
      liste: [['K'], ['Q'], ['k', (s, P) => dist(s, P.K) >= 2], ['r']],
      idee: 'Pousse le roi et la tour au bord ensemble, puis vise la position de Philidor : une fourchette de la dame ou un coup d’attente oblige la tour à se séparer de son roi, et elle tombe.' }),
    T({ id: 'a-tour-fou', groupe: 'autres', nom: 'Tour et fou contre tour', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 15,
      liste: [['K'], ['R'], ['B'], ['k', (s, P) => dist(s, P.K) >= 2], ['r']],
      idee: 'Garde ton roi au centre le plus longtemps possible, et ta tour active. Poussé au bord, cloue le fou avec ta tour (défense Cochrane) ou défends depuis ta 2e rangée. La plupart des positions sont nulles, mais les pièges de mat sont nombreux.' }),
    T({ id: 'a-tour-contre-fou', groupe: 'autres', nom: 'Tour contre fou', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 12,
      liste: [['K'], ['R'], ['k', (s, P) => dist(s, P.K) >= 2], ['b']],
      idee: 'Va dans le coin qui n’est PAS de la couleur de ton fou : là, la tour ne peut pas mater sans pat. Garde ton fou loin du roi adverse, pour éviter fourchettes et clouages.' }),
    T({ id: 'a-tour-contre-cavalier', groupe: 'autres', nom: 'Tour contre cavalier', cotes: { b: 'annuler' }, fin: 'tenir', tenir: 12,
      liste: [['K'], ['R'], ['k', (s, P) => dist(s, P.K) >= 2], ['n']],
      idee: 'Garde ton cavalier près de ton roi : séparés, le cavalier se fait piéger. Évite les bords et surtout les coins.' }),

    /* Finales avancées : plus de matériel (jusqu'à 7 pièces, la limite des
       tables), et des positions où peu de coups tiennent. */
    T({ id: 'x-pions-2c2', seuls: true, groupe: 'avancees', nom: 'Deux pions contre deux', cotes: { w: 'auto' }, fin: 'promotion', tenir: 12,
      liste: [['P', pion(1, 4)], ['P2', (s, P) => pion(1, 4)(s) && fi(s) !== fi(P.P)], ['p', (s) => ra(s) >= 3 && ra(s) <= 6], ['p2', (s, P) => ra(s) >= 3 && ra(s) <= 6 && fi(s) !== fi(P.p)],
        ['K', (s) => ra(s) <= 4], ['k', (s, P) => ra(s) >= 3 && dist(s, P.K) >= 2]],
      idee: 'Compte les temps : qui crée le premier un pion passé, qui gagne l’opposition, qui a des coups de réserve. Un pion passé éloigné attire le roi adverse loin de l’autre aile.' }),
    T({ id: 'x-pions-3c2', seuls: true, groupe: 'avancees', nom: 'Trois pions contre deux', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(1, 4)], ['P2', (s, P) => pion(1, 4)(s) && fi(s) !== fi(P.P)], ['P3', (s, P) => pion(1, 4)(s) && fi(s) !== fi(P.P) && fi(s) !== fi(P.P2)],
        ['p', (s) => ra(s) >= 3 && ra(s) <= 6], ['p2', (s, P) => ra(s) >= 3 && ra(s) <= 6 && fi(s) !== fi(P.p)], ['K', (s) => ra(s) <= 4], ['k', (s, P) => ra(s) >= 3 && dist(s, P.K) >= 2]],
      idee: 'La majorité crée un pion passé : avance d’abord le pion qui n’a pas de vis-à-vis, les autres le soutiennent. Ton roi entre là où le roi adverse a dû partir.' }),
    T({ id: 'x-tour-2p', groupe: 'avancees', nom: 'Tour et deux pions contre tour', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(2, 5)], ['P2', (s, P) => pion(2, 5)(s) && fi(s) !== fi(P.P)], ['K'], ['k', (s, P) => dist(s, P.K) >= 2], ['R'], ['r']],
      idee: 'Deux pions de plus gagnent presque toujours, mais pas en les poussant au hasard : coupe le roi adverse, garde ta tour active, et avance les pions ensemble ; méfie-toi des échecs par derrière.' }),
    T({ id: 'x-tour-2p-p', groupe: 'avancees', nom: 'Tour et deux pions contre tour et pion', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 15,
      liste: [['P', pion(2, 5)], ['P2', (s, P) => pion(2, 5)(s) && fi(s) !== fi(P.P)], ['p', (s) => ra(s) >= 2 && ra(s) <= 5], ['K'], ['k', (s, P) => dist(s, P.K) >= 2], ['R'], ['r']],
      idee: 'La tour la plus active l’emporte souvent sur le pion de plus. En attaque, échange les pions jusqu’à une finale gagnante connue, ou crée un pion passé loin du roi adverse. En défense, échecs, tour derrière le pion passé, et roi devant.' }),
    T({ id: 'x-tour-pions-lies', groupe: 'avancees', nom: 'Tour contre deux pions liés', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', finGain: 'conversion', tenir: 12,
      liste: [['p', (s) => ra(s) >= 1 && ra(s) <= 3 && fi(s) <= 6], ['p2', (s, P) => fi(s) === fi(P.p) + 1 && Math.abs(ra(s) - ra(P.p)) <= 1], ['k', (s, P) => dist(s, P.p) <= 2],
        ['K', (s, P) => dist(s, P.p) >= 2], ['R']],
      idee: 'Deux pions liés sur la 6e (ou plus loin) battent souvent la tour seule. Avec la tour : attaque-les par derrière ou de côté, et ramène ton roi devant. Avec les pions : pousse-les ensemble, ton roi à côté, jamais devant.' }),
    T({ id: 'x-dame-pion', groupe: 'avancees', nom: 'Dame et pion contre dame', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 15,
      liste: [['P', pion(3, 5)], ['K', (s, P) => dist(s, P.P) <= 2], ['k', (s, P) => dist(s, P.K) >= 2], ['Q'], ['q']],
      idee: 'En attaque : abrite ton roi devant ou près de ton pion, et réponds à un échec par un échec croisé ou une interposition qui échange les dames. En défense : échecs perpétuels, de loin, et ton roi devant le pion si tu peux.' }),
    T({ id: 'x-centurini', groupe: 'avancees', nom: 'Fou et pion contre fou (Centurini)', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 12,
      liste: [['P', pion(2, 5, [1, 2, 3, 4, 5, 6])], ['B'], ['b', (s, P) => clair(s) === clair(P.B)], ['K', (s, P) => dist(s, P.P) <= 2], ['k', (s, P) => dist(s, P.K) >= 2]],
      idee: 'Fous de même couleur : le défenseur annule si son roi bloque une case devant le pion, ou si son fou garde la diagonale devant le pion sur deux diagonales assez longues. Le fou adverse chasse le tien de la diagonale trop courte.' }),
    T({ id: 'x-cavalier-pion-cavalier', groupe: 'avancees', nom: 'Cavalier et pion contre cavalier', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 12,
      liste: [['P', pion(2, 5)], ['N'], ['n'], ['K', (s, P) => dist(s, P.P) <= 2], ['k', (s, P) => dist(s, P.K) >= 2]],
      idee: 'Un roi devant le pion annule presque toujours. Sinon, le cavalier défenseur doit garder une case de la route du pion ; le cavalier attaquant chasse les défenseurs par des échecs et des coups qui leur ôtent les cases.' }),
    T({ id: 'x-fou-cavalier', groupe: 'avancees', nom: 'Fou contre cavalier, avec des pions', cotes: { w: 'gagner', b: 'annuler' }, fin: 'promotion', tenir: 15,
      liste: [['P', pion(1, 4)], ['P2', (s, P) => pion(1, 4)(s) && fi(s) !== fi(P.P)], ['p', (s) => ra(s) >= 3 && ra(s) <= 6], ['B'], ['n'], ['K'], ['k', (s, P) => dist(s, P.K) >= 2]],
      idee: 'Le fou aime les pions sur les deux ailes et les positions ouvertes ; le cavalier, les pions d’un seul côté. Mets tes pions sur la couleur opposée à ton fou, et ton roi au centre.' }),
    T({ id: 'x-tour-fou-pion', groupe: 'avancees', nom: 'Tour, fou et pion contre tour', cotes: { w: 'gagner' }, fin: 'promotion',
      liste: [['P', pion(2, 5)], ['K', (s, P) => dist(s, P.P) <= 3], ['k', (s, P) => dist(s, P.K) >= 2], ['R'], ['B'], ['r']],
      idee: 'Le fou abrite ton roi des échecs et contrôle des cases devant le pion. Ne laisse pas la tour adverse s’installer derrière ton pion : coupe son roi, et avance quand les échecs s’arrêtent.' }),
    T({ id: 'x-dame-tour-pion', groupe: 'avancees', nom: 'Dame contre tour et pion', cotes: { w: 'gagner', b: 'annuler' }, fin: 'conversion', tenir: 15,
      liste: [['p', (s) => ra(s) >= 2 && ra(s) <= 5], ['k', (s, P) => dist(s, P.p) <= 2], ['r', (s, P) => dist(s, P.p) <= 2], ['K', (s, P) => dist(s, P.k) >= 3], ['Q']],
      idee: 'Tour et pion bien groupés devant leur roi font souvent une forteresse : la dame ne passe pas. En attaque, attaque avant que la forteresse se forme, et vise la tour séparée de son roi. En défense, garde la tour protégée par le pion, ton roi derrière.' }),
  ];
  const GROUPES = [['mats', 'Mats de base'], ['pions', 'Finales de pions'], ['tours', 'Finales de tours'], ['autres', 'Autres finales'], ['avancees', 'Finales avancées']];

  /* ------------------------------------------------------------ les verdicts
     v : le résultat pour le camp qui a le trait — 2 gagné, 0 nul, −2 perdu ;
     1 et −1 : gagné ou perdu, mais la règle des 50 coups l'annule ; null :
     inconnu. coups : le même verdict pour chaque coup, du point de vue de
     celui qui le joue, avec la distance au mat (dtm, en demi-coups) ou à la
     conversion (dtz) quand les tables les donnent. */
  const CAT = { win: 2, 'syzygy-win': 2, 'maybe-win': 2, 'cursed-win': 1, draw: 0, 'blessed-loss': -1, 'maybe-loss': -2, 'syzygy-loss': -2, loss: -2 };
  const nbPieces = (fen) => (fen.split(' ')[0].match(/[a-zA-Z]/g) || []).length;
  const Tables = {
    url: 'https://tablebase.lichess.ovh/standard?fen=',
    cache: new Map(), panneJusqua: 0, dernier: 0, requetes: 0, file: Promise.resolve(), espacement: 200,
    /* Une requête à la fois, au plus cinq par seconde ; après un refus pour
       excès (429), plus rien pendant une minute : Stockfish prend le relais. */
    sonder(fen) {
      const p = this.file.then(() => this._sonder(fen));
      this.file = p.catch(() => null);
      return p;
    },
    enPanne() { return Date.now() < this.panneJusqua; },
    /* joignables ? (le téléphone dit s'il est hors ligne, sans attendre) */
    disponible() {
      return !(typeof navigator !== 'undefined' && navigator.onLine === false) && !this.enPanne();
    },
    async _sonder(fen) {
      if (nbPieces(fen) > 7) return null;
      const cle = fen.split(' ').slice(0, 4).join(' ');
      if (this.cache.has(cle)) return this.cache.get(cle);
      if (!this.disponible()) return null;
      const attente = this.dernier + this.espacement - Date.now();
      if (attente > 0) await new Promise(r => setTimeout(r, attente));
      this.dernier = Date.now(); this.requetes++;
      try {
        const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const minuteur = ctl ? setTimeout(() => ctl.abort(), 8000) : null;
        const r = await fetch(this.url + encodeURIComponent(cle.replace(/ /g, '_') + '_0_1'), ctl ? { signal: ctl.signal } : {});
        if (minuteur) clearTimeout(minuteur);
        if (r.status === 429) { this.panneJusqua = Date.now() + 60000; return null; }
        if (!r.ok) { if (r.status >= 500) this.panneJusqua = Date.now() + 30000; return null; }
        const j = await r.json();
        const v = {
          source: 'tables', v: CAT[j.category] === undefined ? null : CAT[j.category], dtm: j.dtm, dtz: j.dtz,
          coups: (j.moves || []).map(m => ({ uci: m.uci, san: m.san, v: CAT[m.category] === undefined ? null : -CAT[m.category], dtm: m.dtm, dtz: m.dtz })),
        };
        this.cache.set(cle, v);
        return v;
      } catch (e) {
        this.panneJusqua = Date.now() + 30000;
        return null;
      }
    },
  };
  /* Stockfish à la place des tables (hors ligne) : un score par coup,
     traduit en gagné (1,5 point ou plus, ou un mat), nul (1 point au plus),
     perdu, ou inconnu entre les deux. Réglé sur 48 positions dont les tables
     donnent la vérité : avec le Stockfish de l'appli, les nulles restent
     sous 1 point (le fou de la mauvaise couleur à −0,94), les gains au-dessus
     de 1,7 (fou et cavalier) ; un coup inconnu n'est jamais reproché. Ses
     limites : il voit gagnants des coups que les tables jugent nuls dans
     Lucena, et ne donne pas la distance au mat. */
  const classeCp = (cp) => (cp > 9000 || cp >= 150 ? 2 : cp < -9000 || cp <= -150 ? -2 : Math.abs(cp) <= 100 ? 0 : null);
  async function verdictStockfish(moteur, fen, noeuds) {
    const j = new (Ch())(fen), n = j.moves().length;
    if (!n || !moteur) return null;
    const lignes = await moteur.multi(fen, noeuds || 300000, Math.min(40, n));
    const coups = lignes.map(l => {
      let san = l.uci;
      try { san = new (Ch())(fen).move({ from: l.uci.slice(0, 2), to: l.uci.slice(2, 4), promotion: l.uci[4] || 'q' }).san; } catch (e) { /* coup illégal dans cette position : on garde la valeur par défaut */ }
      const dtm = l.cp > 9000 ? 2 * (10000 - l.cp) - 1 : l.cp < -9000 ? -2 * (10000 + l.cp) : null;
      return { uci: l.uci, san, v: classeCp(l.cp), cp: l.cp, dtm, dtz: null };
    });
    const vs = coups.map(c => c.v).filter(v => v !== null);
    return { source: 'stockfish', v: vs.length ? Math.max(...vs) : null, dtm: coups[0] ? coups[0].dtm : null, dtz: null, coups };
  }
  async function verdict(fen, moteur) {
    return (await Tables.sonder(fen)) || (moteur ? verdictStockfish(moteur, fen) : null);
  }
  /* Un coup d'œil rapide (une ligne, 80 000 nœuds) : il écarte, hors ligne,
     les positions qui n'ont pas le bon résultat avant l'analyse complète. */
  async function apercuStockfish(moteur, fen) {
    const l = await moteur.multi(fen, 80000, 1);
    return l[0] ? classeCp(l[0].cp) : null;
  }
  /* un coup garde-t-il l'objectif ? */
  const garde = (obj, v) => v !== null && v !== undefined && (obj === 'gagner' ? v === 2 : v >= 0);

  /* ------------------------------------------------------------ le tirage */
  function classeDtm(th, dtm) {
    if (dtm === null || dtm === undefined) return null;
    const n = Math.ceil((Math.abs(dtm) + 1) / 2);              // mat en n coups
    const i = th.bornes.findIndex(([a, b]) => n >= a && n <= b);
    return i < 0 ? (n < th.bornes[0][0] ? 1 : 3) : i + 1;
  }
  /* Le trait peut-il prendre quelque chose sans rien rendre (pièce non
     défendue, ou plus forte que celle qui prend) ? Alors la position se
     résout d'un coup : on n'en veut pas. */
  const VAL = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
  function priseGratuite(fen) {
    const b = new (Ch())(fen), adv = b.turn() === 'w' ? 'b' : 'w';
    for (const m of b.moves({ verbose: true })) {
      if (!m.captured) continue;
      const b2 = new (Ch())(fen); b2.move(m);
      let def = 0;
      try { def = b2.attackers(m.to, adv).length; } catch (e) { def = 1; }
      if (!def || VAL[m.captured] > VAL[m.piece]) return true;
    }
    return false;
  }
  const finDe = (th, obj) => (th.fin === 'mat' ? 'mat' : obj === 'annuler' ? 'tenir' : th.finGain || th.fin);
  /* Tire une position du thème au niveau voulu (1 à 3). `opts` : { verdict
     (fen → verdict), alea, requetes (verdicts demandés au plus, 10 par
     défaut : les tables limitent le débit), apercu (fen → résultat rapide,
     ou undefined quand les tables répondent), apercus (combien au plus) }.
     Renvoie { fen, joueur, obj, fin, tenir, v, classe, essais } ou null. */
  async function tirer(th, niveau, opts) {
    const alea = opts.alea || Math.random, cible = Math.max(1, Math.min(3, Math.round(niveau || 1)));
    const liste = typeof th.liste === 'function' ? th.liste(cible) : th.liste;
    let repli = null, demandes = 0, apercus = 0;
    const maxReq = (opts.requetes || 10) + (th.groupe === 'avancees' ? 5 : 0), maxAp = opts.apercus || 40;
    const jusqua = Date.now() + (opts.delai || 60000);
    for (let e = 0; e < 2000 && demandes < maxReq && apercus < maxAp && Date.now() < jusqua; e++) {
      if (opts.progres && e % 5 === 0) opts.progres(demandes + apercus);
      const P = poser(alea, liste); if (!P) continue;
      const cotes = Object.entries(th.cotes);
      if (cotes.length > 1 && alea() < 0.5) cotes.reverse();
      const sym = [alea() < 0.5, alea() < 0.5];
      for (const [cote, objectif] of cotes) {
        const fen = miroir(fenDe(P, cote), sym[0], sym[1]);
        if (!legale(fen) || demandes >= maxReq || apercus >= maxAp) continue;
        if (opts.apercu) {
          const a = await opts.apercu(fen);
          if (a !== undefined) {
            apercus++;
            if (objectif === 'auto' ? a !== 2 && a !== 0 : a !== (objectif === 'gagner' ? 2 : 0)) continue;
          }
        }
        demandes++;
        const v = await opts.verdict(fen);
        if (!v || v.v === null) continue;
        const obj = objectif === 'auto' ? (v.v === 2 ? 'gagner' : v.v === 0 ? 'annuler' : null) : objectif;
        if (!obj || (obj === 'gagner' ? v.v !== 2 : v.v !== 0)) continue;
        const connus = v.coups.filter(c => c.v !== null && c.v !== undefined);
        const bons = connus.filter(c => garde(obj, c.v)).length, mauvais = connus.length - bons;
        if (!bons || (th.fin !== 'mat' && !mauvais)) continue;          // il faut un piège
        /* Et pas trop facile.
           — Jamais de prise gratuite au premier coup (le roi qui prend le
             pion d'emblée).
           — Pour gagner (hors finales de pions, où chaque poussée compte),
             au moins trois coups avant la promotion ou la prise (distance
             à la conversion des tables).
           — Dans les finales de pions, où tout se joue à un temps près, au
             plus la moitié des coups qui tiennent (trois tolérés) ; hors
             ligne, six sur dix, car Stockfish voit plus de coups « bons »
             que les tables. Ailleurs (Lucena, Philidor, dame contre tour…),
             la difficulté est la méthode sur la durée, pas le premier coup. */
        if (th.fin !== 'mat') {
          if (priseGratuite(fen)) continue;
          if (!th.seuls && obj === 'gagner' && v.dtz !== null && v.dtz !== undefined && Math.abs(v.dtz) < 5) continue;
          const part = v.source === 'stockfish' ? 0.6 : 0.5;
          if (th.seuls && bons > Math.max(3, Math.ceil(connus.length * part))) continue;
        }
        let classe = th.mesure === 'dtm' ? classeDtm(th, v.dtm) : null;
        /* sans les tables, pas de distance au mat sûre : pour les mats, la
           difficulté vient seulement de la place du roi (zoneRoi) */
        if (th.mesure === 'dtm' && v.source === 'stockfish') classe = cible;
        if (classe === null) classe = bons >= 3 ? 1 : bons === 2 ? 2 : 3;
        const r = { fen, joueur: fen.split(' ')[1], obj, fin: finDe(th, obj), tenir: th.tenir, v, classe, essais: demandes, bons, total: connus.length };
        if (classe === cible) return r;
        if (!repli || Math.abs(classe - cible) < Math.abs(repli.classe - cible)) repli = r;
      }
    }
    return repli;
  }

  /* ------------------------------------------------------------ l'adversaire
     `v` : le verdict de la position, l'adversaire au trait. Il garde son
     meilleur résultat ; gagnant, il va au plus court ; perdant, il résiste
     le plus longtemps ; nul, `departager(ucis)` (Stockfish) choisit le coup
     le plus gênant. Sans les tables, le meilleur coup de Stockfish. */
  async function coupAdverse(v, departager, alea) {
    alea = alea || Math.random;
    if (v.source === 'stockfish') return v.coups[0] ? v.coups[0].uci : null;
    const cs = v.coups.filter(c => c.v !== null && c.v !== undefined);
    if (!cs.length) return v.coups[0] ? v.coups[0].uci : null;
    const max = Math.max(...cs.map(c => c.v));
    let cands = cs.filter(c => c.v === max);
    const loin = (c) => (c.dtm !== null && c.dtm !== undefined ? Math.abs(c.dtm) : c.dtz !== null && c.dtz !== undefined ? Math.abs(c.dtz) : 0);
    if (max > 0) { const m = Math.min(...cands.map(loin)); cands = cands.filter(c => loin(c) === m); }
    else if (max < 0) { const m = Math.max(...cands.map(loin)); cands = cands.filter(c => loin(c) === m); }
    else if (departager && cands.length > 1) {
      const u = await departager(cands.map(c => c.uci));
      if (u) return u;
    }
    return cands[Math.floor(alea() * cands.length)].uci;
  }

  racine.Finales = { THEMES, GROUPES, Tables, verdict, verdictStockfish, apercuStockfish, classeCp, tirer, coupAdverse, garde, legale, miroir, fenDe, poser, classeDtm, priseGratuite, CAT, nbPieces };
})(typeof window !== 'undefined' ? window : globalThis);

/* ==========================================================================
   La séance, dans l'onglet Entraînement.
   ========================================================================== */
if (typeof tx === 'undefined' && typeof window !== 'undefined') {
  window.tx = (s, v) => (v ? String(s).replace(/\{(\d+)\}/g, (m, k) => (v[k] !== undefined && v[k] !== null ? v[k] : m)) : s);
}
const FIN = {
  th: null, pos: null, jeu: null, plateau: null, moteur: null, jeton: 0,
  enCours: false, pense: false, attente: false, vAvant: null, depart: null, source: 'tables',
  erreur: false, reprises: 0, indices: 0, coups: 0, indice: 0, fautes: new Set(),
};
const pauseF = (ms) => new Promise(r => setTimeout(r, ms));
function statsFinales() { S.d.finales = S.d.finales || {}; return S.d.finales; }
const statFinale = (id) => Object.assign({ niveau: 1, essais: 0, reussites: 0, parfaites: 0 }, statsFinales()[id] || {});
const fmtNivF = (n) => String(Math.round(n * 100) / 100).replace('.', typeof I18N !== 'undefined' ? I18N.dec : ',');
const frF = (s) => (typeof fr === 'function' ? fr(s) : s);
const objectifsDe = (th) => [...new Set(Object.values(th.cotes))];

/* ------------------------------------------------------------- l'accueil */
function rendreFinales() {
  const z = $('#finales-themes'); if (!z) return;
  z.innerHTML = '';
  const st = statsFinales();
  let total = 0;
  for (const [g, nomG] of Finales.GROUPES) {
    const grille = el('div', { class: 'fin-grille' });
    for (const th of Finales.THEMES.filter(t => t.groupe === g)) {
      const s = st[th.id];
      if (s) total += s.reussites || 0;
      const o = objectifsDe(th);
      const [cls, tag] = o.length > 1 || o[0] === 'auto' ? ['', tx('gagner ou annuler')] : o[0] === 'gagner' ? ['grn', tx('gagner')] : ['amb', tx('annuler')];
      grille.append(el('button', { class: 'fin-theme', 'data-theme': th.id, onclick: () => lancerFinale(th.id) },
        el('strong', {}, tx(th.nom)),
        el('span', { class: 'fin-meta' }, el('span', { class: 'tag ' + cls }, tag), ' ',
          s && s.essais ? tx('niveau {0} · {1} sur {2}', [fmtNivF(s.niveau), s.reussites, s.essais]) : tx('niveau 1'))));
    }
    z.append(el('h4', { class: 'fin-groupe' }, tx(nomG)), grille);
  }
  const c = $('#cpt-finales'); if (c) c.textContent = total;
}

/* ------------------------------------------------------------- lancer */
let _finBranche = false;
function brancherFinales() {
  if (_finBranche) return;
  _finBranche = true;
  $('#fin-indice').addEventListener('click', indiceF);
  $('#fin-idee-btn').addEventListener('click', () => { const z = $('#fin-idee'); z.hidden = !z.hidden; });
  $('#fin-nouvelle').addEventListener('click', () => { abandonF(); lancerFinale(FIN.th.id); });
  $('#fin-quitter').addEventListener('click', () => { abandonF(); FIN.jeton++; vueEntrainement(); });
}
function etatF(t, cls) {
  const z = $('#fin-etat');
  z.className = 'msg' + (cls ? ' ' + cls : '');
  z.innerHTML = '';
  ajouterF(z, ...[].concat(t));
}
const ajouterF = (z, ...k) => z.append(...k.filter(x => x !== null && x !== undefined && x !== false));
async function lancerFinale(id) {
  const th = Finales.THEMES.find(t => t.id === id); if (!th) return;
  const jeton = ++FIN.jeton;
  Object.assign(FIN, { th, pos: null, enCours: false, pense: true, attente: false, erreur: false, reprises: 0, indices: 0, coups: 0, indice: 0, fautes: new Set() });
  $('#ent-accueil').hidden = true; $('#ent-drill').hidden = true; $('#fin-seance').hidden = false;
  if (!FIN.plateau) FIN.plateau = new Plateau($('#plateau-fin'));
  brancherFinales();
  FIN.plateau.onCoup = null;
  $('#fin-titre').textContent = tx(th.nom);
  $('#fin-sous').innerHTML = ''; $('#fin-coups').innerHTML = ''; $('#fin-bilan').innerHTML = '';
  $('#fin-idee').hidden = true; $('#fin-idee').textContent = tx(th.idee);
  $('#fin-promo').hidden = true;
  $('#fin-indice').disabled = true;
  const enLigne = Finales.Tables.disponible();
  etatF(enLigne ? tx('Je tire une position…') : tx('Hors ligne : Stockfish cherche une position…'), 'info');
  window.scrollTo(0, 0);
  if (typeof DEGRADE === 'undefined' || !DEGRADE) {
    if (!FIN.moteur || !FIN.moteur.vivant()) FIN.moteur = new Moteur();
    await FIN.moteur.pret();
  }
  /* Hors ligne (ou les tables muettes), Stockfish fait tout : un coup d'œil
     rapide écarte les positions au mauvais résultat, puis l'analyse
     complète, coup par coup, sur celles qui restent. */
  const options = {
    verdict: (fen) => Finales.verdict(fen, FIN.moteur),
    apercu: FIN.moteur ? async (fen) => (Finales.Tables.disponible() ? undefined : Finales.apercuStockfish(FIN.moteur, fen)) : null,
    /* hors ligne, pas de limite de débit : plus d'essais, mais 20 s au plus */
    requetes: enLigne ? 10 : 20, apercus: enLigne ? 40 : 160, delai: enLigne ? 30000 : 20000,
    progres: enLigne ? null : (n) => { if (jeton === FIN.jeton && n) etatF(tx('Hors ligne : Stockfish cherche une position… ({0} essayées)', [n]), 'info'); },
  };
  let pos = await Finales.tirer(th, statFinale(id).niveau, options);
  /* en ligne, une seconde série de demandes si la première n'a rien donné */
  if (!pos && jeton === FIN.jeton && Finales.Tables.disponible()) pos = await Finales.tirer(th, statFinale(id).niveau, options);
  if (jeton !== FIN.jeton) return;
  FIN.pense = false;
  if (!pos) {
    const pourquoi = !FIN.moteur ? tx('Je n’ai pas pu tirer de position : les tables de Lichess ne répondent pas, et Stockfish ne tourne pas ici.')
      : Finales.Tables.disponible() ? tx('Je n’ai pas pu tirer de position cette fois.')
        : tx('Hors ligne, Stockfish n’a pas trouvé de position assez sûre pour ce thème cette fois.');
    etatF([pourquoi, ' ', el('button', { class: 'lien', onclick: () => lancerFinale(id) }, tx('Réessayer'))], 'ko');
    return;
  }
  Object.assign(FIN, { pos, jeu: new Chess(pos.fen), vAvant: pos.v, depart: pos.v, source: pos.v.source, enCours: true });
  /* « il ne lui reste que son roi » ne compte que s'il avait autre chose au départ */
  FIN.advArme = FIN.jeu.board().flat().some(x => x && x.color !== pos.joueur && x.type !== 'k');
  FIN.plateau.persistantes = {}; FIN.plateau.marques = {};
  FIN.plateau.position(pos.fen, pos.joueur);
  FIN.plateau.onCoup = coupFinPlateau;
  majSousF(); majCoupsF();
  $('#fin-indice').disabled = false;
  etatF(tx('À toi de jouer.'), 'info');
}
const OBJECTIFS_F = () => ({
  'w-gagner': tx('Les blancs jouent et gagnent.'), 'b-gagner': tx('Les noirs jouent et gagnent.'),
  'w-annuler': tx('Les blancs jouent et annulent.'), 'b-annuler': tx('Les noirs jouent et annulent.'),
});
const coupsMat = (dtm) => (dtm === null || dtm === undefined ? null : Math.ceil((Math.abs(dtm) + 1) / 2));
function majSousF() {
  const p = FIN.pos, z = $('#fin-sous'); if (!p) return;
  z.innerHTML = '';
  const court = FIN.depart.source === 'tables' ? coupsMat(FIN.depart.dtm) : null;
  const regle = p.fin === 'mat'
    ? (court ? tx('Mate avant la règle des 50 coups. Le plus court : mat en {0}.', [court]) : tx('Mate avant la règle des 50 coups.'))
    : p.fin === 'promotion' ? tx('Réussi quand ton pion est promu et que la position reste gagnante, ou au mat.')
      : p.fin === 'conversion' ? tx('Réussi quand il ne lui reste que son roi, ou au mat.')
        : tx('Réussi après {0} coups sans faute, ou à la nulle (pat, répétition, matériel insuffisant).', [p.tenir]);
  ajouterF(z, el('strong', {}, OBJECTIFS_F()[p.joueur + '-' + p.obj]), ' ', regle, el('br'),
    el('span', { class: 'sous' }, FIN.source === 'tables'
      ? tx('Adversaire : jeu parfait, d’après les tables de finales de Lichess.')
      : tx('Hors ligne : Stockfish a tiré la position, il joue à pleine force et juge tes coups, moins sûrement que les tables.')));
}
function majCoupsF() {
  const z = $('#fin-coups'); z.innerHTML = '';
  if (!FIN.jeu) return;
  const h = FIN.jeu.history(), moi = FIN.pos.joueur, premier = FIN.pos.fen.split(' ')[1];
  libellesCoups(h, FIN.pos.fen).forEach((t, i) => {
    const camp = (i % 2 === 0) === (premier === 'w') ? 'w' : 'b';
    z.append(el('span', { class: FIN.fautes.has(i) ? 'ko' : camp === moi ? 'ok' : 'att' }, t));
  });
}

/* ------------------------------------------------------------- tes coups */
function coupFinPlateau(de, vers, m) {
  if (!FIN.enCours || FIN.pense || FIN.attente || FIN.jeu.turn() !== FIN.pos.joueur) return;
  if (m && m.promotion) { choisirPromotionF(de, vers); return; }
  jouerFinale(de + vers);
}
function choisirPromotionF(de, vers) {
  const z = $('#fin-promo'); z.innerHTML = ''; z.hidden = false;
  z.append(el('span', { class: 'sous' }, tx('Promotion :')), ' ',
    ...[['q', tx('dame')], ['r', tx('tour')], ['b', tx('fou')], ['n', tx('cavalier')]].map(([p, nom]) =>
      el('button', { class: 'b g', onclick: () => { z.hidden = true; jouerFinale(de + vers + p); } }, nom)));
}
async function jouerFinale(uci) {
  const jeu = FIN.jeu;
  let mv;
  try { mv = jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || undefined }); } catch (e) { return; }
  if (!mv) return;
  uci = mv.from + mv.to + (mv.promotion || '');
  FIN.coups++; FIN.indice = 0;
  FIN.plateau.persistantes = { [mv.from]: 'dernier', [mv.to]: 'dernier' };
  FIN.plateau.marques = FIN.plateau.persistantes;
  FIN.plateau.animerVers(jeu.fen(), mv);
  /* une faute, c'est perdre l'objectif qu'on tenait encore : une fois la
     position perdue (après « Continuer quand même »), plus de reproche */
  const tenait = FIN.vAvant && Finales.garde(FIN.pos.obj, FIN.vAvant.v);
  const j = tenait ? FIN.vAvant.coups.find(c => c.uci === uci) : null;
  const ok = j && j.v !== null && j.v !== undefined ? Finales.garde(FIN.pos.obj, j.v) : null;
  if (ok === false) { FIN.fautes.add(jeu.history().length - 1); majCoupsF(); erreurF(); return; }
  majCoupsF();
  if (finSiBesoinF('moi', mv)) return;
  await tourAdverseF();
}
/* Le coup laisse filer le gain (ou la nulle) : on le dit tout de suite, avec
   les coups qui tenaient ; tu peux le reprendre, ou continuer pour voir. */
function erreurF() {
  FIN.erreur = true; FIN.attente = true;
  const p = FIN.pos, bons = FIN.vAvant.coups.filter(c => Finales.garde(p.obj, c.v)).slice(0, 4).map(c => frF(c.san));
  etatF([el('strong', {}, p.obj === 'gagner' ? tx('Ce coup laisse filer le gain.') : tx('Ce coup perd.')), ' ',
    bons.length ? tx('Il fallait : {0}.', [bons.join(', ')]) : '', el('br'),
    el('button', { class: 'b', onclick: reprendreF }, tx('Reprendre le coup')), ' ',
    el('button', { class: 'b g', onclick: () => { FIN.attente = false; etatF(tx('On continue : regarde comment il en profite.'), 'info'); if (!finSiBesoinF('moi')) tourAdverseF(); } }, tx('Continuer quand même'))], 'ko');
  if (typeof Son !== 'undefined') Son.jouer('faux');
}
function reprendreF() {
  if (!FIN.attente) return;
  FIN.jeu.undo();
  FIN.fautes.delete(FIN.jeu.history().length);
  FIN.coups--; FIN.reprises++; FIN.erreur = false; FIN.attente = false;
  FIN.plateau.persistantes = {}; FIN.plateau.marques = {};
  FIN.plateau.position(FIN.jeu.fen());
  majCoupsF();
  etatF(tx('Coup repris : trouve mieux.'), 'info');
}
/* L'indice : la pièce à jouer, puis la case. */
function indiceF() {
  if (!FIN.enCours || FIN.pense || FIN.attente || !FIN.vAvant) return;
  const bon = FIN.vAvant.coups.find(c => Finales.garde(FIN.pos.obj, c.v));
  if (!bon) return;
  FIN.indice = Math.min(2, FIN.indice + 1); FIN.indices++;
  const mk = { [bon.uci.slice(0, 2)]: 'indice' };
  if (FIN.indice >= 2) mk[bon.uci.slice(2, 4)] = 'indice';
  FIN.plateau.marquer(Object.assign({}, FIN.plateau.persistantes || {}, mk));
  etatF(FIN.indice >= 2 ? tx('Indice : {0}.', [frF(bon.san)]) : tx('Indice : la pièce entourée.'), 'info');
}

/* ------------------------------------------------------------- l'adversaire */
async function tourAdverseF() {
  const jeton = FIN.jeton, fen = FIN.jeu.fen(), t0 = Date.now();
  FIN.pense = true;
  etatF(tx('L’adversaire réfléchit…'), 'info');
  /* hors ligne : son meilleur coup, une seule ligne mais plus profonde */
  const v = Finales.Tables.disponible() || !FIN.moteur ? await Finales.verdict(fen, FIN.moteur) : null;
  if (jeton !== FIN.jeton) return;
  let uci = null;
  if (!v && FIN.moteur) FIN.source = 'stockfish';
  if (v) {
    FIN.source = v.source;
    const departager = FIN.moteur ? async (ucis) => {
      const l = await FIN.moteur.multi(fen, 250000, Math.min(60, FIN.jeu.moves().length));
      const x = l.find(c => ucis.includes(c.uci));
      return x ? x.uci : null;
    } : null;
    uci = await Finales.coupAdverse(v, departager);
  }
  if (!uci && FIN.moteur) { const l = await FIN.moteur.multi(fen, 600000, 1); uci = l[0] && l[0].uci; }
  if (!uci) { const l = FIN.jeu.moves({ verbose: true }); if (l[0]) uci = l[0].from + l[0].to + (l[0].promotion || ''); }
  const reste = 450 - (Date.now() - t0);
  if (reste > 0) await pauseF(reste);
  if (jeton !== FIN.jeton || !uci) return;
  let mv; try { mv = FIN.jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' }); } catch (e) { mv = null; }
  if (!mv) return;
  FIN.plateau.persistantes = { [mv.from]: 'dernier', [mv.to]: 'dernier' };
  FIN.plateau.marques = FIN.plateau.persistantes;
  FIN.plateau.animerVers(FIN.jeu.fen(), mv);
  majCoupsF();
  if (finSiBesoinF('lui', mv)) { FIN.pense = false; return; }
  FIN.vAvant = await Finales.verdict(FIN.jeu.fen(), FIN.moteur);
  if (jeton !== FIN.jeton) return;
  if (FIN.vAvant) FIN.source = FIN.vAvant.source;
  FIN.pense = false;
  majSousF();
  etatF(tx('À toi de jouer.'), 'info');
}

/* ------------------------------------------------------------- la fin */
function finSiBesoinF(qui, mv) {
  const jeu = FIN.jeu, p = FIN.pos, moi = p.joueur;
  if (jeu.isCheckmate()) { terminerF(jeu.turn() !== moi, jeu.turn() !== moi ? 'mat' : 'mate'); return true; }
  if (jeu.isGameOver()) {
    const raison = jeu.isStalemate() ? 'pat' : jeu.isInsufficientMaterial() ? 'materiel' : jeu.isThreefoldRepetition() ? 'repetition' : 'cinquante';
    terminerF(p.obj === 'annuler' && !FIN.erreur, raison);
    return true;
  }
  if (qui === 'moi' && !FIN.erreur) {
    if (p.obj === 'gagner' && p.fin !== 'mat') {
      const roiSeul = FIN.advArme && !jeu.board().flat().some(x => x && x.color !== moi && x.type !== 'k');
      if (roiSeul) { terminerF(true, 'roi-seul'); return true; }
      if (p.fin === 'promotion' && mv && mv.promotion) { terminerF(true, 'promotion'); return true; }
    }
    if (p.obj === 'annuler' && FIN.coups >= p.tenir) { terminerF(true, 'tenu'); return true; }
  }
  return false;
}
const RAISONS_F = () => ({
  mat: tx('Mat.'), mate: tx('Tu es mat.'), pat: tx('Pat : nulle.'), materiel: tx('Matériel insuffisant pour mater : nulle.'),
  repetition: tx('Nulle par répétition.'), cinquante: tx('Nulle par la règle des 50 coups.'),
  promotion: tx('Pion promu, et la position reste gagnante.'), 'roi-seul': tx('Il ne lui reste que son roi : la suite est un mat de base.'),
  tenu: tx('Coups tenus sans faute : la nulle est acquise.'), abandon: tx('Position abandonnée.'),
});
function terminerF(reussi, raison) {
  FIN.enCours = false; FIN.attente = false; FIN.pense = false;
  FIN.plateau.onCoup = null;
  $('#fin-indice').disabled = true;
  const id = FIN.th.id, st = statsFinales();
  const s = st[id] = statFinale(id), avant = s.niveau;
  const parfait = reussi && !FIN.reprises && !FIN.indices && !FIN.erreur;
  s.essais++; s.dernier = typeof aujourdhui === 'function' ? aujourdhui() : null;
  if (reussi) s.reussites++;
  if (parfait) { s.parfaites++; s.niveau = Math.min(3, s.niveau + 0.25); }
  else if (!reussi && raison !== 'abandon') s.niveau = Math.max(1, s.niveau - 0.25);
  const court = FIN.depart.source === 'tables' ? coupsMat(FIN.depart.dtm) : null;
  if (raison === 'mat' && court) s.dernierMat = [FIN.coups, court];
  sauver();
  if (raison === 'abandon') return;
  const details = [];
  if (raison === 'mat' && court) details.push(tx('Mat en {0} coups (le plus court : {1}).', [FIN.coups, court]));
  else if (raison === 'mat') details.push(tx('Mat en {0} coups.', [FIN.coups]));
  else if (raison === 'tenu') details.push(tx('{0} coups tenus sans faute : la nulle est acquise.', [FIN.coups]));
  else details.push(RAISONS_F()[raison] || '');
  if (FIN.reprises) details.push(tx('Avec {0} coup(s) repris.', [FIN.reprises]));
  if (FIN.indices) details.push(tx('Avec {0} indice(s).', [FIN.indices]));
  details.push(s.niveau !== avant ? tx('Niveau {0} → {1}.', [fmtNivF(avant), fmtNivF(s.niveau)]) : tx('Niveau {0}.', [fmtNivF(s.niveau)]));
  etatF([el('strong', {}, reussi ? (parfait ? tx('Réussi, sans faute.') : tx('Réussi.')) : tx('Raté.')), ' ', details.join(' ')], reussi ? 'ok' : 'ko');
  const z = $('#fin-bilan'); z.innerHTML = '';
  z.append(el('div', { class: 'ligne-ctrl', style: 'margin:12px 0 0' },
    el('button', { class: 'b', onclick: () => lancerFinale(id) }, tx('Position suivante')),
    el('button', { class: 'b g', onclick: () => { FIN.jeton++; vueEntrainement(); } }, tx('Autre thème'))));
  if (typeof Son !== 'undefined') Son.jouer(reussi ? 'fini' : 'faux');
}
/* « Nouvelle position » ou « Terminer » en pleine partie : un essai, sans
   effet sur le niveau. */
function abandonF() {
  if (FIN.enCours && FIN.coups > 0) terminerF(false, 'abandon');
  FIN.enCours = false;
}
