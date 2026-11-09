// @ts-check
/* Tactique : ce qui est en prise, et ce que rapporte une prise. Fonctions
   pures (une FEN en entrée, des nombres en sortie), sans DOM ni état : elles
   servent à l'import (app.js) et se testent sous Node (tests/tactique.test.js).

   Le bot (bot.js, seeSimple) garde sa propre version, volontairement plus
   grossière : elle ignore les clouages, « comme un coup d'œil humain », et
   les réseaux déjà entraînés sur ton jeu en dépendent. Ne pas les fusionner. */
(function (racine) {
  'use strict';

  /** Valeur des pièces, en centipions. */
  const VAL = Object.freeze({ p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 });
  /** Ce qu'on appelle « une pièce » en prise : au moins ce gain, en centipions. */
  const SEUIL_PIECE = 250;

  /** Case algébrique (« e4 ») vers l'indice 0x88 qu'utilise chess.js en interne. */
  function case0x88(sq) { return (8 - +sq[1]) * 16 + (sq.charCodeAt(0) - 97); }

  /**
   * La même position, avec `cote` au trait. On réécrit la FEN au lieu
   * d'appeler setTurn() : setTurn joue un coup nul (« -- »), que chess.js
   * refuse quand le camp au trait est en échec. Avec setTurn, une fourchette
   * avec échec (roi et dame attaqués) passait pour « rien en prise ».
   * @param {string} fen
   * @param {'w'|'b'} cote
   */
  function fenAuTrait(fen, cote) {
    const f = String(fen).split(' ');
    if (f[1] === cote) return fen;
    f[1] = cote;
    f[3] = '-';            // la prise en passant ne valait que pour l'autre camp
    return f.join(' ');
  }

  /* Les prises légales vers une case ne sont générées que pour les pièces
     qui l'attaquent, avec les fonctions internes de chess.js (_moves,
     _makeMove ; la copie de vendor/ est figée). moves({ verbose: true })
     construisait pour chaque coup sa notation et deux FEN : une seconde par
     partie à l'import, plusieurs sur un téléphone. Si une autre version de
     chess.js n'a plus ces fonctions, on retombe sur l'API publique : plus
     lent, mais juste, au lieu de répondre 0 partout sans rien dire. */
  const interne = (Chess) => !!(Chess && Chess.prototype
    && typeof Chess.prototype._moves === 'function' && typeof Chess.prototype._makeMove === 'function');
  /* pour les tests : forcer une voie (true, false), ou null pour choisir seul */
  const reglage = { rapide: null };

  /** La prise la moins chère vers `sq` pour le camp au trait (à valeur égale, la première du plateau). */
  function moindrePrise(b, sq, rapide) {
    let m = null;
    if (rapide) {
      const ici = case0x88(sq);
      for (const de of b.attackers(sq, b.turn())) {
        for (const c of b._moves({ legal: true, square: de })) {
          if (c.to === ici && c.captured && (!m || VAL[c.piece] < VAL[m.piece])) m = c;
        }
      }
      return m;
    }
    for (const c of b.moves({ verbose: true })) {
      if (c.to === sq && c.captured && (!m || VAL[c.piece] < VAL[m.piece])) m = c;
    }
    return m;
  }

  /**
   * Gain net, en centipions, de la meilleure suite de prises sur `sq` pour
   * `cote` (échange statique : la pièce la moins chère d'abord, et chacun peut
   * s'arrêter). Jamais négatif : on a toujours le droit de ne pas prendre.
   * @param {string} fen
   * @param {string} sq
   * @param {'w'|'b'} cote
   * @returns {number}
   */
  function seeGain(fen, sq, cote) {
    const Chess = racine.Chess;
    let b;
    try { b = new Chess(fenAuTrait(fen, cote)); } catch (e) { return 0; }   // FEN illisible
    const cible = b.get(sq);
    if (!cible) return 0;
    const rapide = reglage.rapide === null ? interne(Chess) : reglage.rapide;
    const gains = []; let val = VAL[cible.type];
    try {
      for (let k = 0; k < 14; k++) {
        const m = moindrePrise(b, sq, rapide);
        if (!m) break;
        gains.push(val); val = VAL[m.piece];
        if (rapide) b._makeMove(m); else b.move(m);
      }
    } catch (e) {
      /* position que chess.js ne sait pas jouer plus loin : on garde les prises déjà comptées */
    }
    let net = 0;
    for (let i = gains.length - 1; i >= 0; i--) net = Math.max(0, gains[i] - net);
    return net;
  }

  /**
   * Les pièces de `couleur` (hors roi) qu'une prise gagne, avec ce qu'elle rapporte.
   * @param {string} fen
   * @param {'w'|'b'} couleur
   * @returns {{ case: string, type: string, gain: number }[]}
   */
  function enPrise(fen, couleur) {
    const Chess = racine.Chess;
    let b; try { b = new Chess(fen); } catch (e) { return []; }            // FEN illisible
    const adv = couleur === 'w' ? 'b' : 'w', out = [];
    for (const rang of b.board()) for (const c of rang) {
      if (!c || c.color !== couleur || c.type === 'k') continue;
      let att = [];
      try { att = b.attackers(c.square, adv); } catch (e) { att = []; }  // case illisible : rien n'attaque
      if (!att.length) continue;
      const g = seeGain(fen, c.square, adv);
      if (g > 0) out.push({ case: c.square, type: c.type, gain: g });
    }
    return out;
  }

  const api = { VAL, SEUIL_PIECE, case0x88, fenAuTrait, seeGain, enPrise, interne, reglage };
  if (typeof module === 'object' && module.exports) module.exports = api;   // tests sous Node
  else racine.Tactique = api;                                              // navigateur
})(typeof window !== 'undefined' ? window : globalThis);
