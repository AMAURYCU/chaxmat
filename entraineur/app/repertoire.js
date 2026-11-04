/* ==========================================================================
   Répertoire : graphe de positions, moteur d'entraînement, export PGN.
   Porté depuis l'application Flutter openingRepertory (lib/domain).
   Aucune dépendance hors chess.js. Utilisable aussi sous node (tests).
   ========================================================================== */
(function (racine) {
  const Echecs = racine.Chess;

  /* ---------------------------------------------------------------- clés */

  const CLE_INITIALE = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -';

  /* FEN sans compteurs. La case de prise en passant n'est gardée que si la
     prise est réellement jouable : deux ordres de coups menant à la même
     position donnent alors la même clé. */
  function cle(jeu) {
    const f = (typeof jeu === 'string' ? jeu : jeu.fen()).split(' ');
    let ep = f[3];
    if (ep !== '-') {
      const j = typeof jeu === 'string' ? new Echecs(jeu) : jeu;
      if (!j.moves({ verbose: true }).some((m) => m.flags.includes('e'))) ep = '-';
    }
    return [f[0], f[1], f[2], ep].join(' ');
  }

  const traitDe = (k) => k.split(' ')[1];          // 'w' ou 'b'

  /* UCI canonique : le roque s'écrit toujours roi-vers-destination (e1g1). */
  const uciDe = (m) => m.from + m.to + (m.promotion || '');

  function jeuDepuisCle(k) { return new Echecs(k + ' 0 1'); }

  /* -------------------------------------------------------------- graphe */

  /* Une arête = un coup enregistré. {d: clé départ, u: uci, s: san,
     v: clé arrivée, t: date de création (ms)}. Le plus ancien coup d'une
     position est la ligne principale. */

  class Graphe {
    constructor(aretes) {
      this.sortantes = new Map();
      for (const a of aretes || []) {
        const l = this.sortantes.get(a.d) || [];
        if (!l.some((x) => x.u === a.u)) l.push(a);
        this.sortantes.set(a.d, l);
      }
      for (const l of this.sortantes.values()) {
        l.sort((x, y) => (x.t - y.t) || (x.u < y.u ? -1 : 1));
      }
    }
    get aretes() { return [...this.sortantes.values()].flat(); }
    get nbCoups() { return this.aretes.length; }
    get estVide() { return this.sortantes.size === 0; }
    coupsDe(k) { return this.sortantes.get(k) || []; }
    trouver(k, uci) { return this.coupsDe(k).find((a) => a.u === uci) || null; }

    avec(arete) {
      return this.trouver(arete.d, arete.u) ? this : new Graphe([...this.aretes, arete]);
    }
    sans(aretes) {
      const hs = new Set(aretes.map((a) => a.d + '|' + a.u));
      return new Graphe(this.aretes.filter((a) => !hs.has(a.d + '|' + a.u)));
    }

    /* Clés atteignables depuis k, k comprise. */
    atteignablesDepuis(k) {
      const vues = new Set([k]); const pile = [k];
      while (pile.length) {
        for (const a of this.coupsDe(pile.pop())) if (!vues.has(a.v)) { vues.add(a.v); pile.push(a.v); }
      }
      return vues;
    }

    /* Clés d'où l'on peut encore atteindre une des cibles (cibles comprises). */
    clesMenantA(cibles) {
      const atteignables = this.atteignablesDepuis(CLE_INITIALE);
      const inverse = new Map();
      for (const a of this.aretes) {
        if (!atteignables.has(a.d)) continue;
        const l = inverse.get(a.v) || []; l.push(a.d); inverse.set(a.v, l);
      }
      const res = new Set(); const pile = [];
      for (const c of cibles) if (atteignables.has(c) && !res.has(c)) { res.add(c); pile.push(c); }
      while (pile.length) {
        for (const p of inverse.get(pile.pop()) || []) if (!res.has(p)) { res.add(p); pile.push(p); }
      }
      return res;
    }

    /* Pour chaque position atteignable : le numéro du coup que j'y joue (1 pour
       mon premier coup, 2 pour le deuxième…), par le plus court chemin depuis
       la position initiale. Sert à limiter une révision « jusqu'à mon n-ième
       coup ». */
    numerosDeCoup(camp) {
      const num = new Map([[CLE_INITIALE, 1]]);
      let front = [CLE_INITIALE];
      while (front.length) {
        const suiv = [];
        for (const k of front) {
          const n = num.get(k), moi = traitDe(k) === camp;
          for (const a of this.coupsDe(k)) {
            const n2 = n + (moi ? 1 : 0);
            if (!num.has(a.v) || num.get(a.v) > n2) { num.set(a.v, n2); suiv.push(a.v); }
          }
        }
        front = suiv;
      }
      return num;
    }

    /* Le plus grand numéro de coup à moi dans le répertoire. */
    profondeurMax(camp) {
      const num = this.numerosDeCoup(camp);
      let m = 0;
      for (const k of this.mesPositions(camp)) m = Math.max(m, num.get(k) || 0);
      return m;
    }

    /* Positions atteignables où c'est à moi de jouer et où j'ai un coup. */
    mesPositions(camp) {
      const out = new Set();
      for (const k of this.atteignablesDepuis(CLE_INITIALE)) {
        if (traitDe(k) === camp && this.coupsDe(k).length) out.add(k);
      }
      return out;
    }

    /* L'arête visée, plus tout ce qui devient inatteignable si on l'enlève. */
    suppressionPour(k, uci) {
      const a = this.trouver(k, uci);
      if (!a) return [];
      const reste = this.sans([a]);
      const atteignables = reste.atteignablesDepuis(CLE_INITIALE);
      return [a, ...reste.aretes.filter((x) => !atteignables.has(x.d))];
    }

    /* Chemin (liste d'arêtes) le plus court de la position initiale vers k. */
    cheminVers(k) {
      if (k === CLE_INITIALE) return [];
      const vus = new Set([CLE_INITIALE]);
      let file = [[CLE_INITIALE, []]];
      while (file.length) {
        const suivante = [];
        for (const [cour, chemin] of file) {
          for (const a of this.coupsDe(cour)) {
            if (a.v === k) return [...chemin, a];
            if (!vus.has(a.v)) { vus.add(a.v); suivante.push([a.v, [...chemin, a]]); }
          }
        }
        file = suivante;
      }
      return null;
    }
  }

  /* Fabrique l'arête correspondant au coup `uci` joué dans `jeu`. */
  function fabriquerArete(jeu, uci, quand) {
    const depart = cle(jeu);
    const j = new Echecs(jeu.fen());
    const m = j.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
    if (!m) return null;
    return { d: depart, u: uciDe(m), s: m.san, v: cle(j), t: quand || Date.now() };
  }

  /* ------------------------------------------------------------- amorçage */


  /* ------------------------------------------------------------------ SRS */

  const AISANCE_INIT = 2.5, AISANCE_MIN = 1.3;

  /* La date du jour à l'heure locale (AAAA-MM-JJ). toISOString donnait la date
     UTC : à Paris, une révision « pour demain » revenait dès le jour même. */
  const jourLocal = (t) => {
    const d = new Date(t);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  function prochainSrs(precedent, reussi, maintenant) {
    const a0 = (precedent && precedent.aisance) || AISANCE_INIT;
    let reps, intervalle, aisance;
    if (reussi) {
      reps = ((precedent && precedent.reps) || 0) + 1;
      intervalle = reps === 1 ? 1 : reps === 2 ? 3
        : Math.round(((precedent && precedent.intervalle) || 1) * a0);
      aisance = a0;
    } else {
      reps = 0; intervalle = 1; aisance = Math.max(AISANCE_MIN, a0 - 0.2);
    }
    const d = new Date(maintenant); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + intervalle);
    return { reps, intervalle, aisance, du: jourLocal(d) };
  }
  const estDue = (e, maintenant) => !e || e.du <= jourLocal(maintenant);

  /* --------------------------------------------------------------- portées */

  const portees = {
    /* Restreint une portée aux positions où je joue mon coup n° 1 à `max`.
       Sans limite (0, null), la portée est rendue telle quelle. */
    jusquA: (g, camp, portee, max) => {
      if (!max) return portee;
      const num = g.numerosDeCoup(camp);
      return new Set([...portee].filter((k) => (num.get(k) || Infinity) <= max));
    },
    tout: (g, camp) => g.mesPositions(camp),
    sousArbre: (g, camp, depart) => {
      const dans = g.atteignablesDepuis(depart);
      return new Set([...g.mesPositions(camp)].filter((k) => dans.has(k)));
    },
    /* Positions déjà travaillées et revenues à échéance. Une position jamais
       vue n'est pas « due » : elle attend son premier passage (« Tout »). */
    dues: (g, camp, srs, maintenant) =>
      new Set([...g.mesPositions(camp)].filter((k) => srs[k] && estDue(srs[k], maintenant))),
    /* Mes positions sur les lignes complètes qui passent par une position ratée. */
    erreurs: (g, camp, ratees) => {
      const miennes = g.mesPositions(camp);
      const rate = new Set([...ratees].filter((k) => miennes.has(k)));
      if (!rate.size) return new Set();
      const apres = new Set();
      for (const k of rate) for (const x of g.atteignablesDepuis(k)) apres.add(x);
      const avant = g.clesMenantA(rate);
      return new Set([...miennes].filter((k) => avant.has(k) || apres.has(k)));
    },
  };

  /* ------------------------------------------------- moteur d'entraînement */

  /* Parcours en profondeur du répertoire. À chaque position de la portée où
     c'est à moi de jouer, il faut retrouver TOUS les coups enregistrés. */
  class Moteur {
    constructor({ graphe, camp, portee, ligneDepart = [], melange = true }) {
      this.g = graphe; this.camp = camp; this.portee = portee;
      this.utiles = graphe.clesMenantA(portee);
      this.fileDepart = [...ligneDepart];
      this.ligneDepart = [...ligneDepart];
      this.melange = melange;
      this.pile = []; this.surChemin = new Set(); this.vues = new Set(); this.ratees = new Set();
      this.jeu = new Echecs(); this.demarre = false; this.attente = null;
      this.bons = 0; this.mauvais = 0;
      this.dernierUci = null; this.dernierSan = null;
    }
    get total() { return this.portee.size; }

    /* Les coups (uci) qui mènent de la position initiale à la position du
       haut de la pile : la ligne en cours, ou la bifurcation où l'on revient
       après un « saut ». Sert à rejouer la partie depuis le début. */
    chemin() {
      const ucis = [...this.ligneDepart];
      this.pile.forEach((f, i) => { if (i > 0 || !this.ligneDepart.length) { if (f.uci) ucis.push(f.uci); } });
      return ucis;
    }
    /* Reste-t-il, en partant de la position k, une position de la portée que
       tu n'as pas encore vue ? Une branche qui ne mène qu'à du déjà-vu est
       sautée : sinon on rejouerait la partie pour rien. */
    resteAFaire(k, vus = new Set()) {
      if (vus.has(k) || this.surChemin.has(k)) return false;
      vus.add(k);
      if (k.split(' ')[1] === this.camp && this.portee.has(k)) return !this.vues.has(k);
      return this.g.coupsDe(k).some((a) => this.utiles.has(a.v) && this.resteAFaire(a.v, vus));
    }
    get faites() { return this.vues.size; }
    get enAttente() { return this.attente !== null; }

    suivant() {
      if (this.attente) {
        const a = this.attente;
        if (this.jeu.fen() !== a.fen) {
          this.jeu = new Echecs(a.fen);
          return { type: 'saut', fen: a.fen, uci: a.uci };
        }
        return {
          type: 'attente', fen: a.fen, san: a.san, uci: a.uci,
          trouves: a.trouves.length, total: a.requis.length,
        };
      }
      if (this.fileDepart.length) {
        const uci = this.fileDepart.shift();
        const avant = this.jeu.fen();
        const m = this.jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
        if (!m) return this.fin();
        this.dernierUci = uciDe(m); this.dernierSan = m.san;
        if (!this.fileDepart.length) { this.demarre = true; this.visiter(this.jeu.fen(), this.dernierUci, m.san); }
        return { type: 'coup', avant, apres: this.jeu.fen(), uci: this.dernierUci, san: m.san };
      }
      if (!this.demarre) {
        this.demarre = true;
        this.visiter(this.jeu.fen(), this.dernierUci, this.dernierSan);
        if (this.attente) return this.suivant();
      }
      while (this.pile.length) {
        const haut = this.pile[this.pile.length - 1];
        haut.reste = haut.reste.filter((u) => {
          const a = this.g.trouver(haut.k, u);
          return !a || this.resteAFaire(a.v);
        });
        if (!haut.reste.length) { this.pile.pop(); this.surChemin.delete(haut.k); continue; }
        if (this.jeu.fen() !== haut.fen) {
          this.jeu = new Echecs(haut.fen);
          return { type: 'saut', fen: haut.fen, uci: haut.uci };
        }
        const uci = haut.reste.shift();
        const avant = haut.fen;
        const m = this.jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
        if (!m) continue;
        this.visiter(this.jeu.fen(), uciDe(m), m.san);
        return { type: 'coup', avant, apres: this.jeu.fen(), uci: uciDe(m), san: m.san };
      }
      return this.fin();
    }

    fin() {
      const ratees = new Set([...this.ratees].filter((k) => this.vues.has(k)));
      return { type: 'fini', bons: this.bons, mauvais: this.mauvais, vues: new Set(this.vues), ratees };
    }

    proposer(uci) {
      const c = this.attente;
      if (!c) throw new Error(tx('aucun coup attendu'));
      /* Un coup déjà trouvé dans cette position n'est ni bon ni faux. */
      if (c.trouves.includes(uci)) return { verdict: 'deja' };
      if (!c.requis.includes(uci)) {
        this.mauvais++; this.ratees.add(c.k);
        return { verdict: 'faux' };
      }
      /* Après une faute ou un indice, le coup trouvé ne compte pas comme « bon ». */
      if (!this.ratees.has(c.k)) this.bons++;
      c.trouves.push(uci);
      const j = new Echecs(c.fen);
      const m = j.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
      this.jeu = j;
      if (c.trouves.length < c.requis.length) return { verdict: 'bon', san: m.san, complet: false };
      this.attente = null; this.vues.add(c.k);
      /* on repassera par les autres coups de cette position, sauf le dernier
         joué que l'on vient d'emprunter */
      c.reste = c.trouves.slice(0, -1).filter((u) => {
        const a = this.g.trouver(c.k, u);
        return a && this.utiles.has(a.v);
      });
      if (this.utiles.has(cle(j))) this.visiter(j.fen(), uciDe(m), m.san);
      return { verdict: 'bon', san: m.san, complet: true };
    }

    indice() {
      const c = this.attente;
      if (!c) throw new Error(tx('aucun coup attendu'));
      if (!this.ratees.has(c.k)) this.mauvais++;       // un indice compte comme une erreur
      this.ratees.add(c.k);
      return c.requis.find((u) => !c.trouves.includes(u));
    }

    visiter(fen, uci, san) {
      const j = new Echecs(fen); const k = cle(j);
      if (this.surChemin.has(k)) return;                 // répétition : fin de ligne
      const cadre = { fen, k, uci, san, reste: [], requis: [], trouves: [] };
      const coups = this.g.coupsDe(k);
      if (j.turn() === this.camp && this.portee.has(k)) {
        if (this.vues.has(k)) return;                    // transposition déjà vue
        cadre.requis = coups.map((a) => a.u);
        this.attente = cadre;
      } else {
        cadre.reste = coups.filter((a) => this.utiles.has(a.v)).map((a) => a.u);
        if (this.melange) {
          for (let i = cadre.reste.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [cadre.reste[i], cadre.reste[r]] = [cadre.reste[r], cadre.reste[i]];
          }
        }
      }
      this.pile.push(cadre); this.surChemin.add(k);
    }
  }

  /* ----------------------------------------------------------- export PGN */

  function exporterPgn(graphe, { nom = tx('Répertoire'), camp = 'w', commentaires = {} } = {}) {
    const cm = (k) => {
      const t = (commentaires[k] || '').trim();
      return t ? ` {${t.replace(/[{}]/g, '')}}` : '';
    };
    /* Déroule l'arbre : le coup le plus ancien est la ligne principale, les
       autres deviennent des variantes. `numeroDu` force le numéro après une
       variante ou en tête de branche. */
    function suite(k, fen, chemin, numeroDu) {
      const coups = graphe.coupsDe(k);
      if (!coups.length) return '';
      const [principal, ...variantes] = coups;
      const jeu = new Echecs(fen);
      const n = jeu.moveNumber(), blanc = jeu.turn() === 'w';
      const prefixe = blanc ? `${n}. ` : (numeroDu ? `${n}... ` : '');
      const morceaux = [prefixe + principal.s + cm(principal.v)];
      for (const v of variantes) {
        const jv = new Echecs(fen); jv.move(v.s);
        const tete = (blanc ? `${n}. ` : `${n}... `) + v.s + cm(v.v);
        const apres = chemin.has(v.v) ? '' : suite(v.v, jv.fen(), new Set([...chemin, v.v]), false);
        morceaux.push(`(${tete}${apres ? ' ' + apres : ''})`);
      }
      const jp = new Echecs(fen); jp.move(principal.s);
      if (!chemin.has(principal.v)) {
        const ap = suite(principal.v, jp.fen(), new Set([...chemin, principal.v]), variantes.length > 0);
        if (ap) morceaux.push(ap);
      }
      return morceaux.join(' ');
    }
    const debut = cm(CLE_INITIALE).trim();       // note sur la position de départ
    const corps = (debut ? debut + ' ' : '') + suite(CLE_INITIALE, new Echecs().fen(), new Set([CLE_INITIALE]), true);
    const entete = [
      `[Event "${nom}"]`, tx('[Site "Entraîneur d\'ouvertures"]'),
      `[Date "${new Date().toISOString().slice(0, 10).replace(/-/g, '.')}"]`,
      '[Result "*"]', `[Orientation "${camp === 'w' ? 'white' : 'black'}"]`,
    ].join('\n');
    return `${entete}\n\n${corps} *\n`;
  }

  /* ----------------------------------------------------------- import PGN */

  /* Découpe le mouvement en jetons : coups, variantes, commentaires, NAG. */
  function jetonsPgn(texte) {
    const jetons = []; let i = 0;
    const fin = texte.length;
    while (i < fin) {
      const c = texte[i];
      if (c === '{') {                                   // commentaire
        const j = texte.indexOf('}', i);
        jetons.push({ t: 'com', v: texte.slice(i + 1, j < 0 ? fin : j).trim() });
        i = j < 0 ? fin : j + 1; continue;
      }
      if (c === ';') { const j = texte.indexOf('\n', i); i = j < 0 ? fin : j + 1; continue; }
      if (c === '(') { jetons.push({ t: 'ouvre' }); i++; continue; }
      if (c === ')') { jetons.push({ t: 'ferme' }); i++; continue; }
      if (c === '$') { while (i < fin && /\S/.test(texte[i])) i++; continue; }
      if (/\s/.test(c)) { i++; continue; }
      let j = i;
      while (j < fin && !/[\s{}();]/.test(texte[j])) j++;
      const mot = texte.slice(i, j); i = j;
      if (/^(1-0|0-1|1\/2-1\/2|\*)$/.test(mot)) { jetons.push({ t: 'fin' }); continue; }
      if (/^\d+(\.*|…)$/.test(mot)) continue;          // numéro de coup (« 3. », « 3… »)
      if (mot === '--' || mot === '...' || mot === '…') continue;
      jetons.push({ t: 'coup', v: mot.replace(/^\d+(\.+|…)/, '').replace(/^…/, '') });
    }
    return jetons;
  }

  /* Notation française (C, F, T, D, R ; 0-0) vers la notation anglaise que
     comprend chess.js. On ne convertit que si le texte est en français : le
     « R » français est le roi, l'anglais est la tour. Un PGN est français dès
     qu'un coup commence par C, F, T ou D (lettres absentes de l'anglais) ou
     par 0-0. */
  const PIECE_FR = { C: 'N', F: 'B', T: 'R', D: 'Q', R: 'K' };
  const estFrancais = (jetons) => jetons.some((j) => j.t === 'coup' && /^([CFTD][a-h1-8x]|0-0)|=[CFTD]/.test(j.v));
  function sanAnglais(s) {
    let t = s.replace(/^0-0-0/, 'O-O-O').replace(/^0-0/, 'O-O');
    if (PIECE_FR[t[0]]) t = PIECE_FR[t[0]] + t.slice(1);
    return t.replace(/([a-h][18])=?([CFTD])/, (m, c, p) => c + '=' + PIECE_FR[p]);   // promotion
  }

  /* Lit un PGN (une ou plusieurs parties, variantes imbriquées) et le rend
     sous forme d'arêtes de graphe + commentaires par position. */
  function lirePgn(texte, quand) {
    const t0 = quand || Date.now();
    const parties = texte.split(/(?=\[Event\s)/).filter((x) => /\S/.test(x));
    const blocs = parties.length ? parties : [texte];
    const aretes = []; const vues = new Set(); const commentaires = {};
    const entetes = {}; const erreurs = []; let rang = 0;

    for (const bloc of blocs) {
      for (const m of bloc.matchAll(/\[(\w+)\s+"([^"]*)"\]/g)) {
        if (entetes[m[1]] === undefined) entetes[m[1]] = m[2];
      }
      const mouvement = bloc.replace(/\[(\w+)\s+"([^"]*)"\]/g, '');
      const jetons = jetonsPgn(mouvement);
      const francais = estFrancais(jetons);
      /* pile des positions : à `(` on repart d'avant le dernier coup joué */
      let jeu = new Echecs();
      let avantDernier = null;                 // fen d'avant le dernier coup
      const pile = [];
      for (const jt of jetons) {
        if (jt.t === 'fin') break;
        if (jt.t === 'ouvre') { pile.push([jeu.fen(), avantDernier]); jeu = new Echecs(avantDernier || jeu.fen()); avantDernier = null; continue; }
        if (jt.t === 'ferme') {
          const p = pile.pop();
          if (p) { jeu = new Echecs(p[0]); avantDernier = p[1]; }
          continue;
        }
        if (jt.t === 'com') { const k = cle(jeu); if (jt.v) commentaires[k] = jt.v; continue; }
        const avant = jeu.fen();
        let mv = null;
        try { mv = jeu.move(francais ? sanAnglais(jt.v) : jt.v); } catch (e) { mv = null; }
        if (!mv) { erreurs.push(jt.v); continue; }
        const a = fabriquerArete(new Echecs(avant), uciDe(mv), t0 + (rang++));
        if (a) {
          const id = a.d + '|' + a.u;
          if (!vues.has(id)) { vues.add(id); aretes.push(a); }
        }
        avantDernier = avant;
      }
    }
    /* couleur : l'en-tête Orientation de l'appli Android, sinon on devine
       d'après la position de départ (un seul premier coup = répertoire blanc). */
    let camp = null;
    const o = (entetes.Orientation || '').toLowerCase();
    if (o.startsWith('w') || o === 'blanc' || o === 'blancs') camp = 'w';
    else if (o.startsWith('b') && o !== 'blanc' && o !== 'blancs') camp = 'b';
    if (!camp) {
      const g = new Graphe(aretes);
      camp = g.mesPositions('w').size >= g.mesPositions('b').size ? 'w' : 'b';
    }
    return { entetes, aretes, commentaires, erreurs, camp, nom: entetes.Event || null };
  }

  /* Ajoute les arêtes manquantes sans toucher aux existantes. */
  function fusionner(graphe, aretes) {
    let ajoutes = 0, deja = 0;
    let g = graphe;
    /* on décale les dates d'ajout après les coups déjà présents pour que la
       ligne principale actuelle le reste */
    const max = g.aretes.reduce((m, a) => Math.max(m, a.t), 0);
    for (const a of aretes) {
      if (g.trouver(a.d, a.u)) { deja++; continue; }
      g = g.avec({ ...a, t: max + 1 + ajoutes });
      ajoutes++;
    }
    return { graphe: g, ajoutes, deja };
  }

  /* ------------------------------------- explorateur local (tes parties) */

  /* Index position -> coups joués, construit depuis tes propres parties.
     Sert quand l'explorateur Lichess n'est pas joignable, et donne la
     statistique qui te concerne vraiment. */
  function explorateurLocal(parties, moi) {
    const idx = new Map();
    for (const p of parties || []) {
      const sans = p.sans || p.coups || [];
      if (!sans.length) continue;
      const jeBlanc = p.color ? p.color === 'white' : p.blanc === moi;
      const score = p.score !== undefined ? p.score : 0.5;
      const j = new Echecs();
      for (let i = 0; i < Math.min(sans.length, 24); i++) {
        const k = cle(j);
        let m; try { m = j.move(sans[i]); } catch (e) { break; }
        if (!m) break;
        const l = idx.get(k) || new Map();
        const e = l.get(m.san) || { san: m.san, uci: uciDe(m), n: 0, pts: 0 };
        e.n++; e.pts += (j.turn() === 'b') === jeBlanc ? score : 1 - score;
        l.set(m.san, e); idx.set(k, l);
      }
    }
    return {
      coups(k) {
        const l = idx.get(k);
        if (!l) return [];
        return [...l.values()].sort((a, b) => b.n - a.n)
          .map((e) => ({ ...e, score: e.n ? e.pts / e.n : 0 }));
      },
      taille: idx.size,
    };
  }

  /* --------------------------------------------- explorateur Lichess */

  const cacheLichess = new Map();
  async function explorateurLichess(ucis, { cotes = '1600,1800,2000', cadences = 'blitz,rapid,classical', token = null } = {}) {
    const k = cotes + '|' + ucis.join(',');
    if (cacheLichess.has(k)) return cacheLichess.get(k);
    /* explorer.lichess.org : l'hôte .ovh renvoie la même chose, mais c'est
       celui-ci qui est documenté et que l'application Android utilise. */
    const u = new URL('https://explorer.lichess.org/lichess');
    u.searchParams.set('variant', 'standard');
    u.searchParams.set('speeds', cadences);
    u.searchParams.set('ratings', cotes);
    u.searchParams.set('moves', '12');
    u.searchParams.set('topGames', '0');
    u.searchParams.set('recentGames', '0');
    if (ucis.length) u.searchParams.set('play', ucis.join(','));
    const ctrl = new AbortController();
    const chrono = setTimeout(() => ctrl.abort(), 8000);
    try {
      let r;
      /* L'explorateur exige un jeton depuis peu : sans en-tête, il répond 401. */
      const entetes = token ? { Authorization: 'Bearer ' + token } : {};
      try {
        r = await fetch(u, { signal: ctrl.signal, headers: entetes });
      } catch (e) {
        /* fetch ne rejette que sur un échec réseau ou CORS : pas de statut HTTP */
        const err = new Error(e && e.name === 'AbortError' ? tx('délai dépassé (8 s)') : tx('connexion impossible'));
        err.reseau = true; err.abandon = !!(e && e.name === 'AbortError'); throw err;
      }
      if (!r.ok) {
        const err = new Error(tx('réponse HTTP ') + r.status);
        err.statut = r.status; throw err;
      }
      const j = await r.json();
      const res = {
        ouverture: j.opening ? j.opening.name : null,
        coups: (j.moves || []).map((m) => ({
          san: m.san, uci: m.uci, blancs: m.white, nulles: m.draws, noirs: m.black,
          total: m.white + m.draws + m.black,
        })).sort((a, b) => b.total - a.total),
      };
      cacheLichess.set(k, res);
      return res;
    } finally { clearTimeout(chrono); }
  }

  const api = {
    CLE_INITIALE, cle, traitDe, uciDe, jeuDepuisCle, Graphe, fabriquerArete,
    prochainSrs, estDue, jourLocal, portees, Moteur, exporterPgn,
    lirePgn, fusionner,
    explorateurLocal, explorateurLichess,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  racine.Rep = api;
})(typeof window !== 'undefined' ? window : globalThis);
