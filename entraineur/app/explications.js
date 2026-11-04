/* ==========================================================================
   Niveau du joueur. Réglé dans l'onglet Aujourd'hui (et au premier lancement).
   Il ajuste ce qui dépend du niveau : les mots qui qualifient la précision
   d'une partie, et la longueur à partir de laquelle un mat forcé non vu n'est
   plus compté comme une gaffe (un débutant n'a pas à voir un mat en quatre).
   ========================================================================== */
const NIVEAUX_JOUEUR = {
  debutant: { nom: tx('Débutant (moins de 1000 Elo)'), matLong: 4, precision: [86, 76, 64, 52] },
  intermediaire: { nom: tx('Intermédiaire (1000 à 1600 Elo)'), matLong: 6, precision: [90, 82, 72, 60] },
  confirme: { nom: tx('Confirmé (plus de 1600 Elo)'), matLong: Infinity, precision: [94, 88, 80, 70] },
};
function niveauJoueur() {
  const n = typeof S !== 'undefined' && S.d && S.d.reglages && S.d.reglages.niveau;
  return NIVEAUX_JOUEUR[n] || NIVEAUX_JOUEUR.debutant;
}

/* ==========================================================================
   Explications du bilan de partie.

   Tout ce qui transforme un coup en phrases : ce que le coup fait (prise,
   échec, double attaque, attaque à la découverte, clouage…), pourquoi c'est
   une erreur, ce que faisait le meilleur coup, les coups brillants, l'éval
   en mots, le matériel. Aucun accès au DOM : bilan.js s'occupe d'afficher.

   Chargé avant bilan.js et app.js. Utilise à l'appel, pas au chargement :
   Chess (vendor), fr() (app.js).

   Le lecteur est toujours toi : « ton fou », « sa dame ». Les prises
   s'évaluent par un échange statique (SEE) qui ignore qui a le trait : on
   peut ainsi juger une menace même quand le coup donne échec — c'est
   justement le cas d'une double attaque avec échec, que le calcul « légal »
   de l'application ne voyait pas (il refusait de passer le trait à un roi
   en échec).
   ========================================================================== */
'use strict';

const Expl = (() => {
  const NOMS = { p: 'pion', n: 'cavalier', b: 'fou', r: 'tour', q: 'dame', k: 'roi' };
  const FEM = { r: true, q: true };
  const PTS = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
  const VALEUR = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
  const V = (t) => VALEUR[t] || 0;
  const autre = (c) => (c === 'w' ? 'b' : 'w');
  const camp = (c) => (c === 'w' ? tx('blancs') : tx('noirs'));
  const nom = (t) => tx(NOMS[t]);
  const plateau = (fen) => { try { return new Chess(fen); } catch (e) { return null; } };
  const jouer = (b, uci) => {
    if (!b || !uci) return null;
    try { return b.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' }); }
    catch (e) { return null; }
  };
  const uciDe = (m) => m.from + m.to + (m.promotion || '');
  /* Les accords se font sur le genre français de la pièce (la tour, la
     dame) : chaque phrase existe au masculin et au féminin, et chaque langue
     traduit les deux. */
  const accord = (t, mot) => tx(mot + (FEM[t] ? 'e' : ''));     // attaqué → attaquée
  const G = (t, masc, fem, vals) => tx(FEM[t] ? fem : masc, vals);
  const frs = (san) => (typeof fr === 'function' ? fr(san) : san);
  const pts = (cp) => (Math.abs(cp) / 100).toFixed(1).replace('.', I18N.dec);
  const npts = (n) => (Math.abs(n) > 1 ? tx('{0} points', [n]) : tx('{0} point', [n]));
  const nb = (n, un, plus) => tx(n > 1 ? plus : un, [n]);
  /* « ton fou », « sa dame », sans case ni survol */
  const nomDe = (t, mien) => tx((mien ? (FEM[t] ? 'ta' : 'ton') : (FEM[t] ? 'sa' : 'son')) + ' ' + NOMS[t]);

  /* ------------------------------------------------------------ mots */
  /* « ton fou c4 », « sa dame d8 » ; `def` donne « le fou c4 ». Un span
     porte la case : survolé dans le bilan, il allume la case. */
  function pc(t, sq, couleur, lecteur, o = {}) {
    const mien = couleur === lecteur;
    const det = o.def ? (FEM[t] ? 'la' : 'le')
      : mien ? (FEM[t] ? 'ta' : 'ton') : (FEM[t] ? 'sa' : 'son');
    return `<span class="pc ${mien ? 'pc-moi' : 'pc-adv'}" data-sq="${sq}">`
      + `${tx(det + ' ' + NOMS[t])}${o.sansCase ? '' : ' ' + sq}</span>`;
  }
  const liste = (xs) => (xs.length <= 1 ? (xs[0] || '')
    : xs.slice(0, -1).join(', ') + tx(' et ') + xs[xs.length - 1]);
  /* `id` reste en français : c'est la clé du lexique ; `txt` est déjà traduit */
  const terme = (id, txt) => `<span class="terme" data-terme="${id}" tabindex="0">${txt || tx(id)}</span>`;
  /* majuscule à la première lettre visible, même derrière une balise */
  const maj = (s) => (s ? s.replace(/^((?:<[^>]+>)*)([^<\s])/, (m0, t, ch) => t + ch.toUpperCase()) : s);

  function numero(fen) {
    const f = fen.split(' ');
    return { n: parseInt(f[5], 10) || 1, c: f[1] };
  }
  /* « 8.Da4+ », « 8…c6 », dans une pastille */
  function mvTxt(fen, san, cls) {
    const { n, c } = numero(fen);
    return `<span class="mv${cls ? ' ' + cls : ''}">${n}${c === 'w' ? '.' : '…'}${frs(san)}</span>`;
  }
  function sanDe(fen, uci) {
    const b = plateau(fen); const m = jouer(b, uci);
    return m ? m.san : null;
  }

  /* ------------------------------------------------------- géométrie */
  const fx = (sq) => sq.charCodeAt(0) - 97, ry = (sq) => parseInt(sq[1], 10) - 1;
  const caseDe = (x, y) => String.fromCharCode(97 + x) + (y + 1);
  /* b est-il strictement entre a et c, sur une même ligne, colonne ou diagonale ? */
  function entre(a, b, c) {
    const dx = Math.sign(fx(c) - fx(a)), dy = Math.sign(ry(c) - ry(a));
    const lx = fx(c) - fx(a), ly = ry(c) - ry(a);
    if (!(lx === 0 || ly === 0 || Math.abs(lx) === Math.abs(ly))) return false;
    let x = fx(a) + dx, y = ry(a) + dy;
    while (x !== fx(c) || y !== ry(c)) {
      if (caseDe(x, y) === b) return true;
      x += dx; y += dy;
    }
    return false;
  }
  const DIRS = {
    b: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    r: [[1, 0], [-1, 0], [0, 1], [0, -1]],
  };
  DIRS.q = DIRS.b.concat(DIRS.r);

  function pieces(b, couleur) {
    const out = [];
    for (const r of b.board()) for (const x of r) if (x && (!couleur || x.color === couleur)) out.push(x);
    return out;
  }
  function roi(b, couleur) {
    for (const x of pieces(b, couleur)) if (x.type === 'k') return x.square;
    return null;
  }

  /* Une pièce clouée sur son roi ne peut prendre que le long du clouage. */
  function clouee(b, s, vers) {
    const p = b.get(s); if (!p || p.type === 'k') return false;
    const k = roi(b, p.color); if (!k) return false;
    const avant = b.attackers(k, autre(p.color)).length;
    b.remove(s);
    const apres = b.attackers(k, autre(p.color));
    b.put(p, s);
    if (apres.length <= avant) return false;
    /* elle peut encore prendre le cloueur, ou bouger sur la ligne */
    return !apres.some(a => a === vers || entre(k, vers, a) || entre(k, s, vers));
  }

  /* ----------------------------------------------------------- SEE
     Ce que `cote` gagne à attaquer la case `sq`, échanges compris, en
     prenant toujours avec la pièce la moins chère. On peut toujours
     s'arrêter : le résultat n'est jamais négatif. */
  function see(fen, sq, cote) {
    const b = plateau(fen); if (!b) return 0;
    const cible = b.get(sq); if (!cible) return 0;
    let tour = cote, val = V(cible.type);
    const gains = [];
    for (let k = 0; k < 32; k++) {
      const att = b.attackers(sq, tour)
        .filter(s => !clouee(b, s, sq))
        .map(s => ({ s, t: b.get(s).type }))
        .sort((x, y) => V(x.t) - V(y.t));
      if (!att.length) break;
      const a = att[0];
      if (a.t === 'k' && b.attackers(sq, autre(tour)).length) break;   // le roi ne prend pas une case gardée
      gains.push(val); val = V(a.t);
      const p = b.get(a.s);
      b.remove(a.s); b.remove(sq);
      if (!b.put(p, sq)) break;
      tour = autre(tour);
    }
    let net = 0;
    for (let i = gains.length - 1; i >= 0; i--) net = Math.max(0, gains[i] - net);
    return net;
  }
  /* Les pièces de `couleur` qui se perdent si l'adversaire prend. */
  function enPriseX(fen, couleur) {
    const b = plateau(fen); if (!b) return [];
    const out = [];
    for (const x of pieces(b, couleur)) {
      if (x.type === 'k') continue;
      if (!b.attackers(x.square, autre(couleur)).length) continue;
      const g = see(fen, x.square, autre(couleur));
      if (g > 0) out.push({ sq: x.square, t: x.type, gain: g });
    }
    return out;
  }
  const PERD = (x) => (x.t === 'p' ? x.gain >= 90 : x.gain >= 100);
  const PIECE = (x) => x.t !== 'p' && x.gain >= 100;

  /* qui attaque, qui défend une case (la pièce qui y est n'est pas comptée) */
  /* Les pièces alignées derrière un attaquant comptent aussi (une dame
     derrière un fou sur la même diagonale) : c'est la « batterie ». */
  function forces(b, sq) {
    const p = b.get(sq);
    const de = (c) => {
      const directs = b.attackers(sq, c).map(s => ({ sq: s, t: b.get(s).type }));
      const out = directs.slice();
      for (const a of directs) {
        const dx = Math.sign(fx(a.sq) - fx(sq)), dy = Math.sign(ry(a.sq) - ry(sq));
        const lx = fx(a.sq) - fx(sq), ly = ry(a.sq) - ry(sq);
        if (!(lx === 0 || ly === 0 || Math.abs(lx) === Math.abs(ly))) continue;   // cavalier
        const diag = dx !== 0 && dy !== 0;
        let x = fx(a.sq) + dx, y = ry(a.sq) + dy;
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
          const q = b.get(caseDe(x, y));
          if (q) {
            const ok = q.color === c && (q.type === 'q' || (diag ? q.type === 'b' : q.type === 'r'));
            if (!ok) break;
            out.push({ sq: caseDe(x, y), t: q.type, derriere: a.sq });
          }
          x += dx; y += dy;
        }
      }
      return out.sort((x, y) => (x.derriere ? 1 : 0) - (y.derriere ? 1 : 0) || V(x.t) - V(y.t));
    };
    if (!p) return { attaquants: de('w'), defenseurs: de('b'), piece: null };
    return { piece: p, attaquants: de(autre(p.color)), defenseurs: de(p.color) };
  }

  /* --------------------------------------------- ce que fait un coup
     Les faits, sans les mots. `prec` : le coup d'avant (objet chess.js),
     pour reconnaître une reprise. */
  function analyserCoup(fen, coup, prec) {
    const b1 = plateau(fen); if (!b1) return null;
    const b2 = plateau(fen);
    const m = typeof coup === 'string' && /^[a-h][1-8][a-h][1-8]/.test(coup) ? jouer(b2, coup)
      : (() => { try { return b2.move(coup); } catch (e) { return null; } })();
    if (!m) return null;
    const c = m.color, adv = autre(c), fen2 = b2.fen();
    const { n: num } = numero(fen);
    const f = {
      fen, fen2, m, c, san: m.san, uci: uciDe(m), piece: m.piece, de: m.from, vers: m.to,
      numero: num, capture: null, echec: b2.isCheck(), mat: b2.isCheckmate(), echecDouble: false,
      roque: m.flags.includes('k') ? 'k' : (m.flags.includes('q') ? 'q' : null),
      promo: m.promotion || null, parade: null,
      menaces: [], fourchette: false, decouvertes: [], clouages: [], enfilades: [],
      sauve: [], laisse: [], developpe: false, centre: false, occupeCentre: false,
      dameTot: false, roiBouge: false, pat: b2.isStalemate(),
    };
    if (f.echec) {
      const k = roi(b2, adv);
      f.echecDouble = k ? b2.attackers(k, c).length >= 2 : false;
    }
    /* parer un échec */
    if (b1.isCheck()) {
      if (m.piece === 'k') f.parade = 'roi';
      else if (m.captured) f.parade = 'prise';
      else f.parade = 'interpose';
    }
    /* prise */
    if (m.captured) {
      const sqPris = m.flags.includes('e') ? m.to[0] + m.from[1] : m.to;
      const rendu = see(fen2, m.to, adv);
      const reprise = !!(prec && prec.captured && prec.to === m.to);
      f.capture = {
        t: m.captured, sq: sqPris, passant: m.flags.includes('e'), reprise,
        rendu, net: V(m.captured) - rendu,
      };
    }
    /* menaces : pièces adverses nouvellement attaquées, qui se gagnent */
    const roqueTour = f.roque ? (f.roque === 'k' ? 'f' : 'd') + m.to[1] : null;
    for (const x of pieces(b2, adv)) {
      const att2 = b2.attackers(x.square, c);
      if (!att2.length) continue;
      const att1 = b1.get(x.square) ? b1.attackers(x.square, c) : [];
      const nouveaux = att2.filter(s => {
        if (s === m.to) return !att1.includes(m.from);
        if (s === roqueTour) return true;
        return !att1.includes(s);
      });
      if (!nouveaux.length) continue;
      const gain = x.type === 'k' ? Infinity : see(fen2, x.square, c);
      if (x.type !== 'k' && gain < 90) continue;
      for (const s of nouveaux) {
        const dec = s !== m.to && s !== roqueTour && entre(s, m.from, x.square);
        const menace = { t: x.type, sq: x.square, par: s, parT: b2.get(s).type, decouverte: dec, gain };
        f.menaces.push(menace);
        if (dec) f.decouvertes.push(menace);
      }
    }
    const parLui = f.menaces.filter(x => x.par === m.to && x.t !== 'p');
    /* Une double attaque ne compte que si la pièce qui attaque ne se fait
       pas prendre avec profit : sinon l'adversaire la prend, et c'est fini. */
    f.attaquantPris = see(fen2, m.to, adv) > 0;
    f.fourchette = new Set(parLui.map(x => x.sq)).size >= 2 && !f.attaquantPris;
    /* pièces sauvées / laissées en prise */
    const av = enPriseX(fen, c).filter(PERD);
    const ap = enPriseX(fen2, c).filter(PERD);
    const apres = new Map(ap.map(x => [x.sq, x]));
    for (const x of av.filter(PIECE)) {
      const ou = x.sq === m.from ? m.to : x.sq;
      if (!apres.has(ou) && b2.get(ou)) f.sauve.push({ t: x.t, sq: ou, bouge: x.sq === m.from });
    }
    const avant = new Map(av.map(x => [x.sq === m.from ? m.to : x.sq, x]));
    for (const x of ap) {
      const a = avant.get(x.sq);
      if (!a || x.gain >= a.gain + 100) f.laisse.push(x);
    }
    /* clouage et enfilade créés par la pièce qui vient de bouger */
    if (DIRS[m.piece] || (f.promo && DIRS[f.promo])) {
      const t = f.promo || m.piece;
      for (const [dx, dy] of DIRS[t]) {
        let x = fx(m.to) + dx, y = ry(m.to) + dy;
        const vus = [];
        while (x >= 0 && x < 8 && y >= 0 && y < 8 && vus.length < 2) {
          const p = b2.get(caseDe(x, y));
          if (p) vus.push(Object.assign({ sq: caseDe(x, y) }, p));
          x += dx; y += dy;
        }
        if (vus.length < 2 || vus[0].color !== adv || vus[1].color !== adv) continue;
        const [X, Y] = vus;
        if (X.type !== 'k' && X.type !== 'p' && (Y.type === 'k' || (V(Y.type) > V(X.type) && Y.type !== 'p'
            && V(Y.type) > V(t)))) {
          f.clouages.push({ cloue: X, contre: Y });
        } else if ((X.type === 'k' || V(X.type) > V(Y.type)) && Y.type !== 'p' && X.type !== 'p'
            && see(fen2, Y.sq, c) === 0 && V(Y.type) >= 300) {
          /* enfilade : la pièce de devant doit bouger, celle de derrière tombe.
             On ne la signale que si celle de derrière n'est pas défendue. */
          const def = b2.attackers(Y.sq, adv).length;
          const exposee = f.laisse.some(z => z.sq === m.to);
          if (!def && !exposee) f.enfilades.push({ devant: X, derriere: Y });
        }
      }
    }
    /* ouverture : développement, centre, sorties de dame, roi */
    if (num <= 12) {
      const dep = c === 'w' ? ['b1', 'g1', 'c1', 'f1'] : ['b8', 'g8', 'c8', 'f8'];
      const CENTRE = ['d4', 'e4', 'd5', 'e5'];
      if ((m.piece === 'n' || m.piece === 'b') && dep.includes(m.from)) {
        f.developpe = true;
        f.centre = CENTRE.some(s => b2.attackers(s, c).includes(m.to));
      }
      if (m.piece === 'p' && CENTRE.includes(m.to)) f.occupeCentre = true;
      if (m.piece === 'q' && num <= 6 && !m.captured && !f.echec) f.dameTot = true;
      if (m.piece === 'k' && !f.roque) {
        const droits = fen.split(' ')[2] || '-';
        if (c === 'w' ? /[KQ]/.test(droits) : /[kq]/.test(droits)) f.roiBouge = true;
      }
    }
    return f;
  }

  /* -------------------------------------------------- les mots du coup
     Une phrase dont le coup est le sujet : « 8.Da4+ donne échec et attaque
     son fou b4 et son cavalier a5 : c'est une double attaque. »
     o.lecteur : 'w'|'b' ; o.sujet : HTML du sujet ; o.court : sans les remarques. */
  function phraseCoup(f, o) {
    if (!f) return '';
    const L = o.lecteur, c = f.c, adv = autre(c), mien = c === L;
    const P = (t, sq) => pc(t, sq, adv, L);
    const PM = (t, sq) => pc(t, sq, c, L);
    const PMs = (t, sq) => pc(t, sq, c, L, { sansCase: true });
    const Ps = (t, sq) => pc(t, sq, adv, L, { sansCase: true });
    const sujet = o.sujet;
    if (f.roque) {
      const tourApres = (f.roque === 'k' ? 'f' : 'd') + (c === 'w' ? '1' : '8');
      const qui = f.roque === 'k' ? (mien ? tx('tu roques côté roi') : tx('il roque côté roi'))
        : (mien ? tx('tu roques côté dame') : tx('il roque côté dame'));
      return tx('{0} : {1}. ', [sujet, qui])
        + tx('{0} se met à l’abri derrière ses pions, et {1} quitte le coin pour entrer en jeu.',
          [maj(PMs('k', f.vers)), PMs('r', tourApres)])
        + (f.echec ? tx(' Et la tour donne échec !') : '');
    }
    const verbes = [], phrases = [];
    if (f.parade === 'roi') verbes.push(tx('pare l’échec en déplaçant le roi'));
    else if (f.parade === 'interpose') verbes.push(tx('pare l’échec en s’interposant'));
    if (f.capture) {
      const k = f.capture;
      const cible = P(k.t, k.sq);
      let v = k.reprise ? tx('reprend {0}', [cible]) : tx('prend {0}', [cible]);
      if (k.passant) v += ' ' + terme('en passant');
      if (!k.reprise && k.rendu === 0 && k.t !== 'p') v += tx(' gratuitement');
      else if (!k.reprise && k.rendu > 0 && Math.abs(k.net) < 100 && k.t !== 'p' && f.piece !== 'p')
        v = tx('échange {0} contre {1}', [PMs(f.piece, f.vers), cible]);
      verbes.push(v);
      if (!k.reprise && k.rendu > 0 && k.net >= 200) {
        const gain = PTS[k.t] - PTS[f.piece];
        if (gain > 0) phrases.push(mien ? tx('Même s’il reprend {0}, tu gagnes {1}.', [nomDe(f.piece, true), npts(gain)])
          : tx('Même si tu reprends {0}, il gagne {1}.', [nomDe(f.piece, false), npts(gain)]));
      }
    }
    if (f.promo) verbes.push(tx('transforme {0} en {1}', [PMs('p', f.vers), nom(f.promo)]));
    if (f.mat) {
      verbes.push(tx('donne échec et {0}', [terme('mat')]));
      return tx('{0} {1} !', [sujet, liste(verbes)]);
    }
    if (f.occupeCentre && !f.capture) verbes.unshift(tx('occupe le centre'));
    if (f.echec) {
      const dec = f.decouvertes.some(x => x.t === 'k');
      verbes.push(f.echecDouble ? tx('donne un échec double')
        : dec ? tx('donne un {0}', [terme('découverte', tx('échec à la découverte'))]) : tx('donne échec'));
    }
    /* menaces de la pièce qui a bougé (le roi mis à part : c'est l'échec) */
    const parLui = f.menaces.filter(x => x.par === f.vers && x.t !== 'k');
    const dejaVus = new Set();
    if (parLui.length) {
      const noms = parLui.map(x => { dejaVus.add(x.sq); return P(x.t, x.sq); });
      const aussi = f.capture || f.echec;
      verbes.push(aussi ? tx('attaque aussi {0}', [liste(noms)]) : tx('attaque {0}', [liste(noms)]));
      if (f.fourchette) {
        phrases.push(tx('Une seule pièce attaque deux cibles : c’est une {0}{1}.', [
          f.piece === 'n' || f.piece === 'p' ? terme('fourchette') : terme('fourchette', tx('double attaque')),
          f.echec ? tx(', avec échec : il faut d’abord parer l’échec, et la deuxième cible tombe') : '']));
      }
    }
    /* découvertes (l'échec à la découverte est déjà dit) */
    const decs = f.decouvertes.filter(x => x.t !== 'k' && !dejaVus.has(x.sq));
    const fortes = decs.filter(x => V(x.t) >= 300);
    if (fortes.length) {
      const lignes = fortes.slice(0, 2).map(d => tx('de {0} vers {1}', [PM(d.parT, d.par), P(d.t, d.sq)]));
      phrases.push(tx('En partant, {0} libère {1} {2} : c’est une {3}.', [PMs(f.piece, f.vers),
        fortes.length > 1 ? tx('les lignes') : tx('la ligne'), liste(lignes),
        terme('découverte', tx('attaque à la découverte'))]));
    } else if (decs.length) {
      const d = decs[0];
      verbes.push(tx('ouvre la ligne de {0}, qui attaque maintenant {1}', [PM(d.parT, d.par), P(d.t, d.sq)]));
    }
    for (const k of f.clouages.slice(0, 1)) {
      const contre = P(k.contre.type, k.contre.sq);
      verbes.push(tx('{0} {1} sur {2}', [terme('clouage', tx('cloue')), P(k.cloue.type, k.cloue.sq), contre]));
      phrases.push(k.contre.type === 'k'
        ? G(k.cloue.type, '{0} ne peut plus bouger : il protège {1}.', '{0} ne peut plus bouger : elle protège {1}.',
          [maj(Ps(k.cloue.type, k.cloue.sq)), Ps('k', k.contre.sq)])
        : G(k.contre.type, 'Si {0} bouge, {1} est pris.', 'Si {0} bouge, {1} est prise.',
          [Ps(k.cloue.type, k.cloue.sq), Ps(k.contre.type, k.contre.sq)]));
    }
    for (const k of f.enfilades.slice(0, 1)) {
      if (k.devant.type !== 'k' && !dejaVus.has(k.devant.sq)) verbes.push(tx('attaque {0}', [P(k.devant.type, k.devant.sq)]));
      phrases.push(G(k.derriere.type, 'Quand {0} bougera, {1}, derrière, sera pris : c’est une {2}.',
        'Quand {0} bougera, {1}, derrière, sera prise : c’est une {2}.',
        [Ps(k.devant.type, k.devant.sq), P(k.derriere.type, k.derriere.sq), terme('enfilade')]));
    }
    for (const sv of f.sauve.slice(0, 1)) {
      if (f.capture) continue;
      verbes.push(sv.bouge ? tx('met {0} à l’abri', [PMs(sv.t, sv.sq)]) : tx('protège {0}', [PM(sv.t, sv.sq)]));
    }
    const seulParade = verbes.length === 1 && f.parade;
    if (!verbes.length || seulParade) {
      const v = f.developpe ? tx('développe {0}', [PMs(f.piece, f.vers)]) + (f.centre ? tx(' vers le centre') : '')
        : f.piece === 'p' ? tx('avance {0} en {1}', [PMs('p', f.vers), f.vers])
          : f.piece === 'k' ? tx('déplace {0} en {1}', [PMs('k', f.vers), f.vers])
            : tx('place {0} en {1}', [PMs(f.piece, f.vers), f.vers]);
      if (!seulParade) verbes.push(v);
    } else if (f.developpe && !f.capture && !f.echec) {
      verbes.unshift(tx('développe {0}', [PMs(f.piece, f.vers)]));
    }
    if (o.verbes) return liste(verbes);
    /* une pièce offerte : on peut la prendre, mais ça coûte plus cher */
    const offerte = f.laisse.filter(x => x.t !== 'p' && !(f.capture && V(f.capture.t) >= V(x.t)))
      .sort((a, b) => V(b.t) - V(a.t))[0];
    if (offerte) {
      const cible = f.menaces.filter(x => x.t !== 'k').sort((a, b) => V(b.t) - V(a.t))[0];
      if (f.echec || (cible && V(cible.t) >= V(offerte.t))) {
        phrases.push(tx('{0} peut être {1}, mais ', [maj(PM(offerte.t, offerte.sq)), accord(offerte.t, 'pris')])
          + (cible && V(cible.t) >= V(offerte.t)
            ? tx('ce serait au prix de {0}.', [P(cible.t, cible.sq)])
            : (mien ? tx('il doit d’abord parer l’échec.') : tx('tu dois d’abord parer l’échec.'))));
      }
    }
    let s = `${sujet} ${liste(verbes)}.`;
    if (phrases.length) s += ' ' + phrases.join(' ');
    if (o.court) return s;
    if (f.dameTot) s += mien
      ? tx(' Une dame sortie si tôt se fait souvent chasser : l’adversaire développe ses pièces en l’attaquant.')
      : tx(' Sa dame sort très tôt : tu peux la chasser en développant tes pièces.');
    if (f.roiBouge) s += mien ? tx(' Ton roi a bougé : tu ne pourras plus roquer.')
      : tx(' Son roi a bougé : il ne pourra plus roquer.');
    return s;
  }

  /* --------------------------------------------- l'évaluation en mots
     cp du point de vue du lecteur. */
  function evalMots(cp) {
    if (cp === null || cp === undefined) return null;
    if (cp >= 9000) { const n = 10000 - cp; return n <= 0 ? tx('échec et mat : tu as gagné') : tx('tu as un mat en {0}', [n]); }
    if (cp <= -9000) { const n = 10000 + cp; return n <= 0 ? tx('échec et mat : tu as perdu') : tx('il a un mat en {0} contre toi', [n]); }
    const a = Math.abs(cp), toi = cp > 0;
    if (a < 30) return tx('égalité');
    if (a < 80) return toi ? tx('un tout petit avantage pour toi') : tx('un tout petit avantage pour lui');
    if (a < 180) return toi ? tx('tu as l’équivalent d’un pion de plus') : tx('il a l’équivalent d’un pion de plus');
    if (a < 280) return toi ? tx('tu as l’équivalent de deux pions de plus') : tx('il a l’équivalent de deux pions de plus');
    if (a < 600) return toi ? tx('tu as l’équivalent d’une pièce de plus') : tx('il a l’équivalent d’une pièce de plus');
    if (a < 900) return toi ? tx('tu as plus qu’une pièce d’avance : c’est gagnant')
      : tx('il a plus qu’une pièce d’avance : c’est perdant pour toi');
    return toi ? tx('tu es largement gagnant (l’équivalent d’une dame de plus ou presque)')
      : tx('tu es largement perdant (l’équivalent d’une dame de moins ou presque)');
  }
  function evalChiffre(cp) {
    if (Math.abs(cp) >= 9000) { const n = 10000 - Math.abs(cp); return n <= 0 ? tx('mat') : (cp > 0 ? '#' : '−#') + n; }
    return (cp >= 0 ? '+' : '−') + pts(cp);
  }

  /* --------------------------------------------------------- matériel */
  const DEPART = { p: 8, n: 2, b: 2, r: 2, q: 1 };
  function materiel(fen) {
    const b = plateau(fen); if (!b) return null;
    const n = { w: { p: 0, n: 0, b: 0, r: 0, q: 0 }, b: { p: 0, n: 0, b: 0, r: 0, q: 0 } };
    for (const x of pieces(b)) if (x.type !== 'k') n[x.color][x.type]++;
    const total = (c) => Object.entries(n[c]).reduce((a, [t, k]) => a + PTS[t] * k, 0);
    /* pièces prises : ce qui manque au camp adverse par rapport au départ
       (une promotion peut donner « moins que rien » : on borne à zéro) */
    const pris = (c) => {
      const o = n[autre(c)], out = [];
      for (const t of ['q', 'r', 'b', 'n', 'p']) for (let k = 0; k < Math.max(0, DEPART[t] - o[t]); k++) out.push(t);
      return out;
    };
    return { w: total('w'), b: total('b'), prisPar: { w: pris('w'), b: pris('b') } };
  }

  /* ------------------------------------------------ pourquoi c'est faux
     d : { fen, uci, san, couleur, lecteur, evalAvant, evalApres (pdv du
     joueur), perte, meilleur (uci), punition (uci : meilleure réponse),
     prec (coup d'avant, objet chess.js) }.
     Renvoie { type, html, cases: {sq: classe}, fleches: [[uci, couleur]] }. */
  function diagnostic(d) {
    const r0 = diagnostic0(d);
    if (r0) r0.corps = r0.html;
    if (r0 && d.evalApres >= 400 && d.evalApres < 9000 && r0.type !== 'moins_precis' && !/^mat/.test(r0.type)) {
      const mien = d.couleur === d.lecteur;
      r0.html = (mien ? tx('Tu restes largement devant ({0}), mais tu laisses filer une partie de l’avantage. ', [evalChiffre(d.evalApres)])
        : tx('Il reste largement devant ({0}), mais il laisse filer une partie de l’avantage. ', [evalChiffre(d.evalApres)])) + r0.html;
    }
    return r0;
  }
  function diagnostic0(d) {
    const L = d.lecteur, c = d.couleur, adv = autre(c), mien = c === L;
    const T = (tu, il) => (mien ? tu : il);
    const PM = (t, sq) => pc(t, sq, c, L), PA = (t, sq) => pc(t, sq, adv, L);
    const b0 = plateau(d.fen); if (!b0) return null;
    const f = analyserCoup(d.fen, d.uci || d.san, d.prec);
    if (!f) return null;
    const apres = f.fen2;
    const out = { type: 'autre', html: '', cases: {}, fleches: [] };
    const motMat = (n) => (n === 1 ? tx('un mat en un coup') : tx('un mat forcé en {0} coups', [n]));

    /* mat raté */
    if (d.evalAvant >= 9000 && !(d.evalApres >= 9000)) {
      const n = 10000 - d.evalAvant;
      const best = d.meilleur ? sanDe(d.fen, d.meilleur) : null;
      out.type = n === 1 ? 'mat1_rate' : (n >= niveauJoueur().matLong ? 'mat_long_rate' : 'mat_rate');
      out.html = T(tx('Tu avais {0}', [motMat(n)]), tx('Il avait {0}', [motMat(n)]))
        + (best ? tx(', qui commençait par {0}', [mvTxt(d.fen, best, 'good')]) : '') + '. '
        + (n >= niveauJoueur().matLong ? tx('Un mat aussi long n’est pas attendu à ton niveau : on ne le compte pas comme une gaffe.')
          : tx('Quand le roi adverse est exposé, cherche d’abord les échecs.'));
      return out;
    }
    /* mat encaissé */
    if (d.evalApres <= -9000) {
      const n = 10000 + d.evalApres;
      const pun = d.punition ? sanDe(apres, d.punition) : null;
      out.type = n <= 1 ? 'mat1_encaisse' : 'mat_encaisse';
      out.html = T(tx('Ton coup permet {0}', [motMat(Math.max(1, n))]), tx('Son coup permet {0}', [motMat(Math.max(1, n))]))
        + (pun ? (n > 1 ? tx(', qui commence par {0}', [mvTxt(apres, pun, 'bad')]) : tx(' : {0}', [mvTxt(apres, pun, 'bad')])) : '') + '. '
        + T(tx('Avant de jouer, regarde les échecs que l’adversaire peut donner, surtout près de ton roi.'),
          tx('Il n’a pas regardé les échecs que tu pouvais donner.'));
      if (d.punition) out.fleches.push([d.punition, 'menace']);
      return out;
    }
    /* prise mal comptée */
    if (f.capture && f.capture.net <= -100 && !f.capture.reprise) {
      const bb = plateau(apres);
      const fo = forces(bb, f.vers);
      const rep = fo.attaquants[0];
      out.type = 'prise_mal_comptee';
      const avec = [PA(f.capture.t, f.capture.sq), pc(f.piece, f.vers, c, L, { sansCase: true }), f.vers];
      out.html = T(tx('Tu prends {0} avec {1}, mais la case {2} est défendue', avec),
        tx('Il prend {0} avec {1}, mais la case {2} est défendue', avec))
        + (rep ? tx(' par {0}', [PA(rep.t, rep.sq)]) : '') + '. '
        + T(tx('Tu perds {0} pour en prendre {1}. ', [npts(PTS[f.piece]), PTS[f.capture.t]]),
          tx('Il perd {0} pour en prendre {1}. ', [npts(PTS[f.piece]), PTS[f.capture.t]]))
        + T(tx('Avant de prendre, compte : qui peut reprendre ?'), '');
      out.cases[f.vers] = 'att';
      if (rep) { out.cases[rep.sq] = 'att'; out.fleches.push([rep.sq + f.vers, 'menace']); }
      return out;
    }
    /* Ce que le meilleur coup laisse aussi en prise n'est pas une faute :
       la position l'exige (même règle que la typologie des gaffes). */
    const exigees = new Set();
    if (d.meilleur) {
      const bm = plateau(d.fen); const mm = jouer(bm, d.meilleur);
      if (mm) for (const z of enPriseX(bm.fen(), c)) exigees.add(z.sq);
    }
    const nous = (l) => l.filter(x => !exigees.has(x.sq));
    const av = nous(enPriseX(d.fen, c)).filter(PERD);
    const ap = nous(enPriseX(apres, c)).filter(PERD);
    const avantCases = new Set(av.map(x => (x.sq === f.de ? f.vers : x.sq)));
    const pieceAp = ap.filter(PIECE).sort((a, b) => b.gain - a.gain);
    const decrireForces = (bb, x, maintenant, depuis) => {
      const fo = forces(bb, x.sq);
      const at = fo.attaquants, de = fo.defenseurs;
      const qui = at.map(a => PA(a.t, a.sq) + (a.derriere ? ', ' + terme('batterie', tx('juste derrière')) : ''));
      let s = tx('{0} par {1}', [accord(x.t, 'attaqué'), liste(qui)]) + (depuis ? ` (${depuis})` : '');
      const moinsCher = at.length && V(at[0].t) < V(x.t) - 50;
      if (moinsCher && de.length && at.length === 1) {
        s += G(x.t, ', une pièce qui vaut moins que lui : il se perd même défendu',
          ', une pièce qui vaut moins qu’elle : elle se perd même défendue');
      } else if (moinsCher && de.length) {
        s += G(x.t, '. {0} vaut moins que lui : il se perd même défendu',
          '. {0} vaut moins qu’elle : elle se perd même défendue', [maj(PA(at[0].t, at[0].sq))]);
      } else if (!de.length) {
        s += maintenant ? G(x.t, ', et rien ne le défend', ', et rien ne la défend')
          : G(x.t, ', et rien ne le défendait', ', et rien ne la défendait');
      } else {
        s += tx(' ({0} pour {1})', [nb(at.length, '{0} attaquant', '{0} attaquants'),
          nb(de.length, '{0} défenseur', '{0} défenseurs')]);
      }
      for (const a of at) out.cases[a.sq] = out.cases[a.sq] || 'att';
      for (const z of de) out.cases[z.sq] = out.cases[z.sq] || 'def';
      out.cases[x.sq] = 'cible';
      if (at[0]) out.fleches.push([at[0].sq + x.sq, 'menace']);
      return s;
    };
    /* Une pièce « offerte » n'est pas une pièce oubliée : si le coup crée
       une menace qui vaut au moins autant (échec, attaque sur la dame…),
       la prendre coûte plus cher à l'adversaire. */
    const compensation = Math.max(0, ...f.menaces.map(x => (x.t === 'k' ? 99999 : V(x.t))));
    const offerte = (x) => compensation >= V(x.t)
      || (x.sq === f.vers && f.capture && V(f.capture.t) >= V(x.t) - 50);    // un échange, pas un oubli
    while (pieceAp.length && offerte(pieceAp[0])) pieceAp.shift();
    /* Le coup a une vraie idée et la position reste gagnante : ce n'est
       pas une faute, juste moins précis que le premier choix du moteur. */
    const tactique = (r) => r && (r.mat || r.fourchette || r.decouvertes.some(x => V(x.t) >= 300)
      || r.clouages.some(k => r.menaces.some(x => x.sq === k.cloue.sq)) || r.enfilades.length
      || (r.echec && r.menaces.some(x => x.t !== 'k' && x.t !== 'p')));
    if (d.evalApres >= 300 && tactique(f) && !pieceAp.length) {
      const best = d.meilleur ? sanDe(d.fen, d.meilleur) : null;
      out.type = 'moins_precis';
      out.html = T(tx('Ton coup a une vraie idée, et tu restes largement devant ({0} pour toi). ', [evalChiffre(d.evalApres)]),
        tx('Son coup a une vraie idée, et il reste largement devant ({0} pour lui). ', [evalChiffre(d.evalApres)]))
        + (best ? tx('{0} était seulement un peu plus fort ({1}).', [mvTxt(d.fen, best, 'good'), evalChiffre(d.evalAvant)]) : '');
      if (d.meilleur) out.fleches.push([d.meilleur, 'bon']);
      return out;
    }
    if (pieceAp.length) {
      const x = pieceAp[0];
      const bb = plateau(apres);
      if (!avantCases.has(x.sq)) {
        out.type = 'laisse_en_prise';
        const bouge = x.sq === f.vers;
        const fo = decrireForces(bb, x, true);
        const laisse = [PM(x.t, x.sq), terme('en prise'), fo];
        out.html = bouge
          ? G(x.t, '{0} se pose en {1}, une case où il est {2}.', '{0} se pose en {1}, une case où elle est {2}.',
            [maj(pc(x.t, x.sq, c, L, { sansCase: true })), x.sq, fo])
          : T(G(x.t, 'Ton coup laisse {0} {1} : il est {2}.', 'Ton coup laisse {0} {1} : elle est {2}.', laisse),
            G(x.t, 'Son coup laisse {0} {1} : il est {2}.', 'Son coup laisse {0} {1} : elle est {2}.', laisse));
        out.html += ' ' + T(tx('Avant de lâcher une pièce, regarde si la case est attaquée, et par quoi.'),
          G(x.t, 'Tu peux le prendre.', 'Tu peux la prendre.'));
      } else if (x.sq === f.vers) {
        /* la pièce attaquée a fui… sur une autre case attaquée */
        out.type = 'laisse_en_prise';
        const xAv = av.find(y => y.sq === f.de) || x;
        const atAv = forces(plateau(d.fen), f.de).attaquants[0];
        out.html = tx('{0} était {1}', [maj(PM(xAv.t, f.de)), accord(x.t, 'attaqué')])
          + (atAv ? tx(' par {0}', [PA(atAv.t, atAv.sq)]) : '')
          + G(x.t, '. En fuyant, il se pose en {0}, une case où il est {1}. ',
            '. En fuyant, elle se pose en {0}, une case où elle est {1}. ', [x.sq, decrireForces(bb, x, true)])
          + T(tx('Quand tu sauves une pièce, vérifie que sa nouvelle case est sûre.'), G(x.t, 'Tu peux le prendre.', 'Tu peux la prendre.'));
      } else {
        out.type = 'deja_en_prise';
        const bAv = plateau(d.fen);
        const xAv = av.find(y => (y.sq === f.de ? f.vers : y.sq) === x.sq) || x;
        let depuis = '';
        if (d.prec && d.precFen && d.prec.color === adv) {
          const ap0 = plateau(d.fen);
          const atts = ap0 ? ap0.attackers(xAv.sq, adv) : [];
          if (atts.includes(d.prec.to) || atts.some(a => entre(a, d.prec.from, xAv.sq))) {
            depuis = T(tx('depuis son coup {0}', [mvTxt(d.precFen, d.prec.san)]), tx('depuis ton coup {0}', [mvTxt(d.precFen, d.prec.san)]));
          }
        }
        out.html = tx('{0} était déjà {1}. ', [maj(PM(xAv.t, xAv.sq)), decrireForces(bAv, xAv, false, depuis)])
          + T(G(xAv.t, 'Ton coup ne le sauve pas. ', 'Ton coup ne la sauve pas. '), G(xAv.t, 'Son coup ne le sauve pas. ', 'Son coup ne la sauve pas. '))
          + T(tx('Avant chaque coup, regarde ce que le dernier coup de l’adversaire attaque.'), G(xAv.t, 'Tu peux le prendre.', 'Tu peux la prendre.'));
      }
      return out;
    }
    /* Une pièce déjà attaquée que même le meilleur coup ne sauvait pas : ce
       n'est pas elle la faute, mais elle est perdue quand même — on le dit
       avant d'expliquer ce qu'il y avait de mieux à faire. */
    let avantPropos = '', pieceAP = null;
    {
      const avBrut = enPriseX(d.fen, c).filter(PIECE);
      const apBrut = new Set(enPriseX(apres, c).filter(PIECE).map(x => x.sq));
      const x = avBrut.find(y => exigees.has(y.sq) && apBrut.has(y.sq === f.de ? f.vers : y.sq));
      if (x) {
        pieceAP = x;
        const fo = forces(plateau(d.fen), x.sq);
        const at = fo.attaquants[0];
        avantPropos = tx('{0} était {1}', [maj(PM(x.t, x.sq)), accord(x.t, 'attaqué')])
          + (at ? tx(' par {0}', [PA(at.t, at.sq)]) : '')
          + (fo.defenseurs.length ? '' : G(x.t, ' et rien ne le défendait', ' et rien ne la défendait')) + '. ';
        out.cases[x.sq] = 'cible';
        if (at) { out.cases[at.sq] = 'att'; }
      }
    }
    /* le meilleur coup : une prise, ou une combinaison ? */
    if (d.meilleur) {
      const r = analyserCoup(d.fen, d.meilleur, d.prec);
      if (r && r.capture && r.capture.net >= 90 && !r.capture.reprise) {
        const gratuit = r.capture.rendu === 0;
        out.type = gratuit && r.capture.t !== 'p' ? 'gratuit_rate' : 'prise_ratee';
        out.html = avantPropos + tx('{0} était {1} : ', [maj(PA(r.capture.t, r.capture.sq)),
          gratuit ? terme('gratuit', accord(r.capture.t, 'gratuit')) : tx('à prendre')])
          + `${mvTxt(d.fen, r.san, 'good')} ${gratuit ? G(r.capture.t, 'le prenait sans contrepartie', 'la prenait sans contrepartie')
            : tx('gagnait {0} après les échanges', [npts(Math.round(r.capture.net / 100))])}. `
          + T(tx('À chaque coup, cherche les pièces adverses qui ne sont pas défendues.'), '');
        out.cases[r.capture.sq] = 'cible';
        out.fleches.push([d.meilleur, 'bon']);
        return out;
      }
      if (r && (r.mat || r.fourchette || r.decouvertes.some(x => V(x.t) >= 300)
          || r.clouages.some(k => r.menaces.some(x => x.sq === k.cloue.sq)) || r.enfilades.length
          || (r.echec && r.menaces.some(x => x.t !== 'k' && x.t !== 'p')))) {
        out.type = 'occasion';
        out.html = avantPropos
          + (avantPropos ? G(pieceAP.t, 'Il y avait mieux que le sauver : ', 'Il y avait mieux que la sauver : ')
            : T(tx('Tu avais une {0} : ', [terme('tactique', tx('combinaison'))]), tx('Il avait une {0} : ', [terme('tactique', tx('combinaison'))])))
          + phraseCoup(r, { lecteur: L, sujet: mvTxt(d.fen, r.san, 'good'), court: true })
          + ' ' + T(tx('Avant un coup tranquille, passe en revue les échecs, les prises et les attaques.'), '');
        out.fleches.push([d.meilleur, 'bon']);
        return out;
      }
    }
    /* rien ne pend tout de suite : et après la meilleure réponse ? */
    if (d.punition) {
      const r = analyserCoup(apres, d.punition, f.m);
      if (r) {
        const perdus = nous(enPriseX(r.fen2, c)).filter(PIECE);
        const prend = r.capture && r.capture.t !== 'p' && r.capture.net >= 100 && !exigees.has(r.capture.sq);
        if (prend || r.fourchette || r.decouvertes.some(x => V(x.t) >= 300)
            || r.clouages.some(k => r.menaces.some(x => x.sq === k.cloue.sq)) || r.enfilades.length
            || (perdus.length && r.echec)) {
          out.type = 'piece_perdue_apres';
          out.html = avantPropos + T(tx('Après ton coup, '), tx('Après son coup, '))
            + phraseCoup(r, { lecteur: L, sujet: mvTxt(apres, r.san, 'bad'), court: true })
            + (mien ? tx(' Avant de jouer, regarde la meilleure réponse de l’adversaire : ses échecs, ses prises, ses attaques.') : '');
          out.fleches.push([d.punition, 'menace']);
          for (const x of r.menaces) out.cases[x.sq] = 'cible';
          return out;
        }
      }
    }
    if (ap.length) {
      const x = ap[0];
      out.type = 'pion_en_prise';
      const laisse = [PM(x.t, x.sq), terme('en prise')];
      out.html = avantPropos + T(
        G(x.t, 'Ton coup laisse {0} {1} : l’adversaire peut le prendre sans rien rendre.',
          'Ton coup laisse {0} {1} : l’adversaire peut la prendre sans rien rendre.', laisse),
        G(x.t, 'Son coup laisse {0} {1} : tu peux le prendre sans rien rendre.',
          'Son coup laisse {0} {1} : tu peux la prendre sans rien rendre.', laisse));
      out.cases[x.sq] = 'cible';
      return out;
    }
    if (avantPropos) {
      out.type = 'autre';
      out.html = avantPropos + G(pieceAP.t, 'Même le meilleur coup ne le sauvait pas : il était perdu de toute façon. ',
        'Même le meilleur coup ne la sauvait pas : elle était perdue de toute façon. ')
        + (d.meilleur ? tx('{0} limitait mieux les dégâts.', [mvTxt(d.fen, sanDe(d.fen, d.meilleur), 'good')]) : '');
      if (d.meilleur) out.fleches.push([d.meilleur, 'bon']);
      return out;
    }
    out.type = 'autre';
    const best = d.meilleur ? sanDe(d.fen, d.meilleur) : null;
    let quoi = '';
    if (d.meilleur) {
      const r = analyserCoup(d.fen, d.meilleur, d.prec);
      if (r && !r.roque) quoi = tx(' : il {0}', [phraseCoup(r, { lecteur: L, sujet: '', verbes: true })]);
      else if (r && r.roque) quoi = T(tx(' : tu mets ton roi à l’abri'), tx(' : il met son roi à l’abri'));
    }
    const pun = d.punition ? sanDe(apres, d.punition) : null;
    if (d.perte >= 300 && pun) {
      out.html = tx('Rien ne se perd tout de suite : c’est quelques coups plus loin que ça coûte. La réponse ')
        + tx('{0} prépare une suite qui gagne. ', [mvTxt(apres, pun, mien ? 'bad' : 'good')])
        + T(tx('Rejoue « La punition » pour la voir coup par coup.'), tx('Rejoue « La suite » pour voir comment en profiter.'))
        + (best ? tx(' {0} évitait tout ça{1}.', [mvTxt(d.fen, best, 'good'), quoi]) : '');
      out.fleches.push([d.punition, 'menace']);
      return out;
    }
    out.html = T(tx('Rien n’est perdu tout de suite : ton coup est simplement moins bon pour la suite'),
      tx('Rien n’est perdu tout de suite : son coup est simplement moins bon pour la suite'))
      + (best ? tx('. {0} était plus fort{1}', [mvTxt(d.fen, best, 'good'), quoi]) : '') + '.';
    if (d.meilleur) out.fleches.push([d.meilleur, 'bon']);
    return out;
  }

  /* --------------------------------------------------- coups brillants
     Un sacrifice qui marche : le coup est (presque) le meilleur, il laisse
     une pièce que l'adversaire peut prendre avec profit — ou il prend en
     rendant plus qu'il ne gagne — et la position reste bonne. Comme sur
     chess.com, on ne compte pas une position déjà écrasante. */
  function sacrifice(fen, uci, evalAvant, evalApres, perte, nbLegaux, reponse) {
    if (perte > 20 || nbLegaux < 2) return null;
    if (evalApres < -50 || evalAvant > 500 || evalApres >= 9000) return null;
    const b0 = plateau(fen);
    if (!b0 || b0.isCheck()) return null;                 // parer un échec n'est pas un sacrifice
    const f = analyserCoup(fen, uci);
    if (!f || f.mat || (f.capture && f.capture.reprise)) return null;
    /* ce que l'adversaire peut gagner, moins ce que le coup a pris */
    const pris = f.capture ? V(f.capture.t) : 0;
    const offertes = f.laisse.filter(x => x.t !== 'p');
    if (!offertes.length) return null;
    const x = offertes.sort((a, b) => b.gain - a.gain)[0];
    if (x.gain - pris < 200) return null;
    /* Un vrai sacrifice : la meilleure défense est de prendre. Si le moteur
       ne prend pas, la pièce était seulement « empoisonnée ». */
    if (!reponse || reponse.slice(2, 4) !== x.sq) return null;
    return { t: x.t, sq: x.sq, gain: x.gain - pris, f };
  }

  /* --------------------------------------------------- bons réflexes */
  function reflexe(fen, uci, perte, prec, precPerte) {
    if (perte > 50) return null;
    const f = analyserCoup(fen, uci, prec);
    if (!f) return null;
    if (f.mat) return { type: 'mat', f };
    if (f.capture && !f.capture.reprise && f.capture.rendu === 0 && f.capture.t !== 'p') return { type: 'gratuit', f };
    if (precPerte !== null && precPerte >= 150 && perte <= 30) return { type: 'punition', f };
    if (f.sauve.length) return { type: 'sauve', f };
    return null;
  }

  /* ------------------------------------------------ ce qui te menace
     Après le coup de l'adversaire : tes pièces qui se perdent si tu ne
     fais rien. */
  function dangers(fen, lecteur) {
    return enPriseX(fen, lecteur).filter(PERD).sort((a, b) => b.gain - a.gain);
  }

  /* ======================================================== le modèle
     Tout ce que le bilan affiche, calculé une fois pour la partie.
     p : { sans: [san…], evals: [cp pdv blancs, n+1], bests: [uci, n],
           couleur, clks, base, seuls: {i: 1} }
     Les diagnostics, plus coûteux, se calculent à la demande (diag(i)). */
  /* Les notations, avec les noms et symboles de chess.com en français.
     `sym` : le symbole affiché dans la liste et sur l'échiquier ; `coul` : la
     couleur du badge (la même dans les deux thèmes, texte blanc ou foncé). */
  const CLASSES = {
    brill: { nom: tx('brillant'), sym: '!!', coul: '#1baca6', tag: 'brill',
      aide: tx('Coup brillant : un sacrifice qui marche. Tu laisses du matériel exprès, et la position reste bonne — souvent meilleure.') },
    seul: { nom: tx('très bon coup'), sym: '!', coul: '#5c8bb0', tag: 'seul',
      aide: tx('Très bon coup : le seul qui garde la position. Tous les autres coups perdaient au moins deux points.') },
    best: { nom: tx('meilleur coup'), sym: '★', coul: '#81b64c', tag: 'grn', aide: tx('Meilleur coup : le premier choix du moteur.') },
    bon: { nom: tx('excellent'), sym: '✓', coul: '#5f9c3a', tag: 'grn',
      aide: tx('Excellent : presque aussi fort que le meilleur coup (moins de 0,2 point d’écart).') },
    ok: { nom: tx('bon'), sym: '✓', coul: '#8f9c7c', tag: '',
      aide: tx('Bon : moins d’un demi-point d’écart avec le meilleur coup. Rien de grave.') },
    imp: { nom: tx('imprécision'), sym: '?!', coul: '#e6b422', encre: '#3a2c05', texte: '#b38600', tag: 'amb',
      aide: tx('Imprécision : un demi-point à un point de perdu. Il y avait mieux, sans que ce soit grave.') },
    err: { nom: tx('erreur'), sym: '?', coul: '#e58f2a', tag: 'amb', aide: tx('Erreur : un à trois points de perdus, l’équivalent d’un ou deux pions.') },
    gaffe: { nom: tx('gaffe'), sym: '??', coul: '#ca3431', tag: 'red',
      aide: tx('Gaffe : trois points ou plus de perdus, l’équivalent d’une pièce. C’est ce qui décide les parties à ton niveau.') },
    matlong: { nom: tx('mat long manqué'), sym: '#', coul: '#8a8f84', tag: '',
      aide: tx('Un mat forcé plus long que ce qu’on attend à ton niveau (réglage « Niveau », onglet Aujourd’hui) était là. On ne le compte pas comme une gaffe.') },
  };
  /* l'ordre du tableau des notations, comme chess.com */
  const ORDRE_CLASSES = ['brill', 'seul', 'best', 'bon', 'ok', 'imp', 'err', 'gaffe', 'matlong'];
  const clamp = (x) => Math.max(-1200, Math.min(1200, x));

  function modele(p) {
    const sans = Array.isArray(p.sans) ? p.sans : String(p.sans || '').split(' ').filter(Boolean);
    const ev = p.evals || null, bests = p.bests || null;
    const coups = [];
    const b = new Chess();
    for (let i = 0; i < sans.length; i++) {
      const fen = b.fen(), legaux = b.moves().length;
      let m = null;
      try { m = b.move(sans[i]); } catch (e) { m = null; }
      if (!m) break;
      coups.push({ i, fen, fen2: b.fen(), m, san: m.san, uci: uciDe(m), c: m.color, legaux,
        numero: Math.floor(i / 2) + 1 });
    }
    const notes = coups.map((k, i) => {
      const n = { i, c: k.c, mien: k.c === p.couleur, perte: null, cls: null, evalAvant: null, evalApres: null,
        meilleur: bests && bests[i] || null, temps: null };
      if (p.clks && p.clks[i] !== null && p.clks[i] !== undefined) {
        const prev = i >= 2 ? p.clks[i - 2] : (p.base || null);
        if (prev !== null && prev !== undefined) n.temps = Math.max(0, Math.round((prev - p.clks[i]) * 10) / 10);
      }
      if (ev && ev.length > i + 1) {
        const sg = k.c === 'w' ? 1 : -1;
        n.evalAvant = sg * ev[i];
        n.evalApres = k.san.includes('#') ? 10000 : sg * ev[i + 1];
        n.perte = k.san.includes('#') ? 0 : Math.max(0, Math.round(sg * (clamp(ev[i]) - clamp(ev[i + 1]))));
        const meilleurJoue = n.meilleur && n.meilleur === k.uci;
        if (n.evalAvant >= 9000 && !(n.evalApres >= 9000) && 10000 - n.evalAvant >= niveauJoueur().matLong) n.cls = 'matlong';
        else if (meilleurJoue) n.cls = 'best';
        else if (n.perte >= 300) n.cls = 'gaffe';
        else if (n.perte >= 100) n.cls = 'err';
        else if (n.perte >= 50) n.cls = 'imp';
        else if (n.perte >= 20) n.cls = 'ok';
        else n.cls = 'bon';
      }
      return n;
    });
    /* coups brillants, seuls coups, bons réflexes */
    for (const n of notes) {
      if (n.perte === null) continue;
      const k = coups[n.i];
      const sac = sacrifice(k.fen, k.uci, n.evalAvant, n.evalApres, n.perte, k.legaux, bests && bests[n.i + 1]);
      if (sac) { n.cls = 'brill'; n.sacrifice = sac; }
      const prec = n.i ? coups[n.i - 1].m : null;
      const pp = n.i ? notes[n.i - 1].perte : null;
      const r = reflexe(k.fen, k.uci, n.perte, prec, pp);
      if (r) n.reflexe = r.type;
      if (!sac && p.seuls && p.seuls[n.i] && n.perte <= 30 && n.reflexe !== 'gratuit') n.cls = 'seul';
    }
    const diags = new Map();
    const diag = (i) => {
      if (diags.has(i)) return diags.get(i);
      const n = notes[i], k = coups[i];
      let d = null;
      if (n && n.perte !== null && (n.perte >= 50 || n.cls === 'matlong')) {
        d = diagnostic({
          fen: k.fen, uci: k.uci, san: k.san, couleur: k.c, lecteur: p.couleur,
          evalAvant: n.evalAvant, evalApres: n.evalApres, perte: n.perte,
          meilleur: n.meilleur, punition: bests && bests[i + 1] || null,
          prec: i ? coups[i - 1].m : null, precFen: i ? coups[i - 1].fen : null,
        });
      }
      diags.set(i, d);
      return d;
    };
    const faits = new Map();
    const fait = (i) => {
      if (!faits.has(i)) faits.set(i, analyserCoup(coups[i].fen, coups[i].uci, i ? coups[i - 1].m : null));
      return faits.get(i);
    };
    return { coups, notes, diag, fait, couleur: p.couleur, aEvals: !!(ev && ev.length > coups.length) };
  }

  /* Les coups brillants d'une partie, pour toi seulement, sans calculer tout
     le modèle : mêmes règles que modele() (perte, évaluations, sacrifice). */
  function brillantsDe(p) {
    const ev = p.moteur && p.moteur.evals, bests = p.moteur && p.moteur.bests;
    if (!ev) return [];
    const sans = String(p.sans || '').split(' ').filter(Boolean);
    const b = new Chess(), out = [];
    for (let i = 0; i < sans.length && i + 1 < ev.length; i++) {
      const fen = b.fen(), c = b.turn();
      let m = null, legaux = 0;
      if (c === p.couleur) legaux = b.moves().length;
      try { m = b.move(sans[i]); } catch (e) { m = null; }
      if (!m) break;
      if (c !== p.couleur || m.san.includes('#')) continue;
      const sg = c === 'w' ? 1 : -1;
      const perte = Math.max(0, Math.round(sg * (clamp(ev[i]) - clamp(ev[i + 1]))));
      if (perte > 20) continue;
      const sac = sacrifice(fen, uciDe(m), sg * ev[i], sg * ev[i + 1], perte, legaux, bests && bests[i + 1]);
      if (sac) out.push(i);
    }
    return out;
  }

  /* ---------------------------------------------------- le résumé
     Les moments clés et les leçons à retenir. */
  const LECONS = {
    deja_en_prise: tx('Avant chaque coup, regarde ce que le dernier coup de l’adversaire attaque. Une pièce déjà attaquée doit être sauvée d’abord.'),
    laisse_en_prise: tx('Avant de lâcher une pièce, demande-toi : la case est-elle attaquée ? Par quoi ? Qui la défend ?'),
    piece_perdue_apres: tx('Avant de jouer, imagine la meilleure réponse de l’adversaire : ses échecs, ses prises, ses doubles attaques.'),
    prise_mal_comptee: tx('Avant de prendre, compte : qui peut reprendre ? Une prise n’est bonne que si tu gagnes plus que ce que tu rends.'),
    mat1_rate: tx('Quand le roi adverse est exposé, cherche d’abord les échecs : un mat est peut-être là.'),
    mat_rate: tx('Quand le roi adverse est exposé, cherche d’abord les échecs : un mat est peut-être là.'),
    mat1_encaisse: tx('Regarde les échecs que l’adversaire peut donner, surtout quand ton roi a peu de cases.'),
    mat_encaisse: tx('Regarde les échecs que l’adversaire peut donner, surtout quand ton roi a peu de cases.'),
    gratuit_rate: tx('À chaque coup, cherche les pièces adverses qui ne sont pas défendues : elles sont peut-être gratuites.'),
    prise_ratee: tx('À chaque coup, compte les attaquants et les défenseurs des pièces adverses : une pièce attaquée deux fois et défendue une fois se gagne.'),
    occasion: tx('Avant un coup tranquille, passe en revue les coups forcés : échecs, prises, attaques. Une combinaison était là.'),
    pion_en_prise: tx('Les pions comptent aussi : avant de jouer, regarde lesquels l’adversaire peut prendre gratuitement.'),
    autre: tx('Quand rien ne presse, cherche le coup qui améliore ta plus mauvaise pièce.'),
  };
  function resume(M) {
    const mes = M.notes.filter(n => n.mien && n.perte !== null);
    const siens = M.notes.filter(n => !n.mien && n.perte !== null);
    const moments = [];
    const pire = mes.filter(n => n.perte >= 100 && n.cls !== 'matlong').sort((a, b) => b.perte - a.perte)[0];
    if (pire) moments.push({ type: 'erreur', i: pire.i });
    const cadeau = siens.filter(n => n.perte >= 100 && n.cls !== 'matlong').sort((a, b) => b.perte - a.perte)[0];
    if (cadeau) {
      const suite = M.notes[cadeau.i + 1];
      const puni = !!(suite && suite.perte !== null && suite.perte <= 50);
      moments.push({ type: 'cadeau', i: cadeau.i, puni, suite: suite ? suite.i : null });
    }
    const note = (n) => {
      if (n.cls === 'brill') return 2000;
      if (n.cls === 'seul') return 1500;
      if (n.reflexe === 'mat') return 1200;
      if (n.reflexe === 'punition') return 300 + Math.min(900, M.notes[n.i - 1].perte || 0);
      if (n.reflexe === 'gratuit') { const f = M.fait(n.i); return f && f.capture ? V(f.capture.t) / 2 : 0; }
      if (n.reflexe === 'sauve') return 100;
      return 0;
    };
    const beau = mes.map(n => [note(n), n]).filter(x => x[0] > 0).sort((a, b) => b[0] - a[0])[0];
    if (beau) moments.push({ type: 'beau', i: beau[1].i });
    /* les leçons : les types d'erreur les plus fréquents, pondérés par leur coût */
    const parType = new Map();
    for (const n of mes.filter(x => x.perte >= 100 && x.cls !== 'matlong')) {
      const d = M.diag(n.i); if (!d) continue;
      const t = d.type === 'moins_precis' ? null : d.type;
      if (!t) continue;
      const o = parType.get(t) || { type: t, n: 0, cout: 0, coups: [] };
      o.n++; o.cout += n.perte; o.coups.push(n.i);
      parType.set(t, o);
    }
    const lecons = [...parType.values()].sort((a, b) => b.n - a.n || b.cout - a.cout).slice(0, 2)
      .map(o => Object.assign(o, { texte: LECONS[o.type] || LECONS.autre }));
    const vite = mes.filter(n => n.perte >= 100 && n.temps !== null && n.temps < 3 && n.cls !== 'matlong');
    return { moments, lecons, vite, nbErreurs: mes.filter(n => n.perte >= 100 && n.cls !== 'matlong').length };
  }

  /* ======================================================== lexique
     Chaque position d'exemple a été vérifiée avec python-chess (légalité,
     cases attaquées, mat, clouage, prise en passant). */
  const VERT = '#2f7d4f', ROUGE = '#b5382c', ORANGE = '#c2761b';
  const LEXIQUE = [
    { id: 'en prise', mot: tx('En prise'),
      def: tx('Une pièce est en prise quand l’adversaire peut la prendre en y gagnant : elle n’est pas assez défendue, ou elle est attaquée par une pièce qui vaut moins qu’elle. Ici, le cavalier e5 est attaqué par le pion d6 et rien ne le défend.'),
      fen: '4k3/8/3p4/4N3/8/8/8/4K3 w - - 0 1', fleches: [['d6e5', ROUGE]], marques: { e5: 'danger' } },
    { id: 'gratuit', mot: tx('Pièce gratuite'),
      def: tx('Une pièce qu’on peut prendre sans rien rendre, parce que rien ne la défend. Ici, la tour d1 prend le cavalier d5 pour rien.'),
      fen: '4k3/8/8/3n4/8/8/8/3RK3 w - - 0 1', fleches: [['d1d5', VERT]], marques: { d5: 'danger' } },
    { id: 'fourchette', mot: tx('Fourchette (double attaque)'),
      def: tx('Une seule pièce attaque deux cibles à la fois. L’adversaire ne peut en sauver qu’une. Avec un cavalier ou un pion, on parle de fourchette ; avec une autre pièce, de double attaque. Ici, le cavalier c7 attaque le roi e8 et la tour a8 : le roi doit bouger, la tour tombe.'),
      fen: 'r3k3/2N5/8/8/8/8/8/4K3 b - - 0 1', fleches: [['c7e8', VERT], ['c7a8', VERT]], marques: { e8: 'danger', a8: 'danger' } },
    { id: 'découverte', mot: tx('Attaque à la découverte'),
      def: tx('Une pièce bouge et démasque une autre pièce de son camp, qui attaque à son tour. Si la pièce qui bouge attaque aussi quelque chose, l’adversaire a deux menaces à parer. Ici, Cf6+ donne échec, et le fou c2, démasqué, attaque la dame h7.'),
      fen: '4k3/7q/8/8/4N3/8/2B5/6K1 w - - 0 1', fleches: [['e4f6', VERT], ['c2h7', ORANGE]], marques: { h7: 'danger' } },
    { id: 'clouage', mot: tx('Clouage'),
      def: tx('Une pièce clouée ne peut pas bouger sans exposer, derrière elle, une pièce plus importante. Clouée sur le roi, elle n’a même pas le droit de bouger. Ici, le cavalier c6 est cloué sur le roi e8 par le fou b5.'),
      fen: '4k3/8/2n5/1B6/8/8/8/4K3 b - - 0 1', fleches: [['b5e8', ORANGE]], marques: { c6: 'danger', e8: 'cle' } },
    { id: 'enfilade', mot: tx('Enfilade'),
      def: tx('Un clouage à l’envers : la pièce de devant est la plus précieuse. Elle doit s’écarter, et celle de derrière tombe. Ici, le fou c4 donne échec au roi e6 ; le roi s’écarte et la tour g8 est prise.'),
      fen: '6r1/8/4k3/8/2B5/8/8/4K3 b - - 0 1', fleches: [['c4g8', ORANGE]], marques: { e6: 'cle', g8: 'danger' } },
    { id: 'batterie', mot: tx('Batterie'),
      def: tx('Deux pièces alignées l’une derrière l’autre, qui attaquent ensemble la même ligne. Quand la première prend et se fait reprendre, la seconde reprend à son tour : il faut la compter. Ici, la dame a1 soutient le fou b2 sur la grande diagonale.'),
      fen: '4k3/8/8/8/8/8/1B6/Q3K3 w - - 0 1', fleches: [['b2h8', VERT]], marques: { a1: 'cle' } },
    { id: 'tactique', mot: tx('Combinaison (tactique)'),
      def: tx('Une suite de coups forcés — échecs, prises, menaces — qui gagne quelque chose : du matériel ou le mat. Ici, 8.Da4+ donne échec et attaque le fou b4, que rien ne défend.'),
      fen: 'r1bqk1nr/ppp2ppp/8/n2Pp3/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 1 8', fleches: [['d1a4', VERT]], marques: { b4: 'danger', e8: 'cle' } },
    { id: 'sacrifice', mot: tx('Sacrifice'),
      def: tx('Donner du matériel exprès, pour obtenir mieux ensuite : une attaque, un mat, ou plus de matériel. Un sacrifice qui marche s’appelle un coup brillant.') },
    { id: 'mat', mot: tx('Échec et mat'),
      def: tx('Le roi est attaqué et ne peut ni fuir, ni bloquer l’échec, ni prendre l’attaquant : la partie est finie. Ici, Td8 est mat : les pions f7, g7 et h7 enferment leur propre roi (le « mat du couloir »).'),
      fen: '6k1/5ppp/8/8/8/8/8/3R2K1 w - - 0 1', fleches: [['d1d8', VERT]], marques: { g8: 'danger' } },
    { id: 'en passant', mot: tx('Prise en passant'),
      def: tx('Quand un pion avance de deux cases et se pose à côté d’un pion adverse, ce pion peut le prendre comme s’il n’avait avancé que d’une case. Seulement au coup qui suit. Ici, les noirs viennent de jouer …d5 : le pion e5 peut prendre en d6.'),
      fen: '4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 1', fleches: [['e5d6', VERT]], marques: { d5: 'danger' } },
    { id: 'roque', mot: tx('Roque'),
      def: tx('Un seul coup qui déplace le roi de deux cases vers une tour, et fait passer cette tour de l’autre côté du roi. Le roi se met à l’abri, la tour entre en jeu. Interdit si le roi ou la tour a déjà bougé, si le roi est en échec, ou s’il traverse une case attaquée.'),
      fen: 'r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1', fleches: [['e1g1', VERT], ['h1f1', VERT]] },
    { id: 'développement', mot: tx('Développement'),
      def: tx('Sortir ses cavaliers et ses fous de leur case de départ pour qu’ils participent au jeu. Avec le contrôle du centre et le roque, c’est le premier objectif de l’ouverture.'),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', fleches: [['g1f3', VERT], ['b1c3', VERT], ['f1c4', VERT]] },
    { id: 'centre', mot: tx('Le centre'),
      def: tx('Les cases d4, e4, d5 et e5. Une pièce au centre contrôle plus de cases qu’au bord ; un pion au centre gêne les pièces adverses.'),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', marques: { d4: 'cle', e4: 'cle', d5: 'cle', e5: 'cle' } },
    { id: 'qualité', mot: tx('La qualité'),
      def: tx('La différence entre une tour (5 points) et un cavalier ou un fou (3 points). « Gagner la qualité », c’est prendre une tour en ne donnant qu’une pièce mineure.') },
    { id: 'évaluation', mot: tx('L’évaluation'),
      def: tx('Le chiffre du moteur, en points. Un pion vaut 1, un cavalier ou un fou 3, une tour 5, une dame 9. +1 veut dire que les blancs ont l’équivalent d’un pion d’avance ; −3, que les noirs ont l’équivalent d’une pièce. « #3 » : un mat en trois coups.') },
    { id: 'brillant', mot: tx('Coup brillant'), def: CLASSES.brill.aide },
    { id: 'seul coup', mot: tx('Très bon coup'), def: CLASSES.seul.aide },
  ];
  const lexique = (id) => LEXIQUE.find(x => x.id === id) || null;

  return {
    NOMS, nom, nomDe, PTS, V, autre, camp, plateau, jouer, uciDe, pc, terme, liste, mvTxt, sanDe, maj, accord, G, nb, npts,
    see, enPriseX, forces, analyserCoup, phraseCoup, evalMots, evalChiffre, materiel,
    diagnostic, sacrifice, reflexe, dangers, PERD, PIECE, numero, pts,
    modele, resume, brillantsDe, CLASSES, ORDRE_CLASSES, LECONS, LEXIQUE, lexique,
  };
})();
if (typeof module !== 'undefined') module.exports = Expl;
