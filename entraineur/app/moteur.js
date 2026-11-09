/* Stockfish (WebAssembly) dans un worker, piloté en UCI.

   Un calcul à la fois : chaque demande attend la précédente (this.file).
   Un moteur ne reste jamais suspendu : si le worker ne démarre pas, plante
   ou ne répond plus, la demande en cours et les suivantes échouent avec une
   erreur, et l'appelant peut en recréer un. Sans cela, une seule promesse
   jamais résolue figeait toute la file (l'import restait sur « démarrage de
   Stockfish… », et « Arrêter » n'y pouvait rien). */
'use strict';

/* « go nodes NaN » : Stockfish ne répond jamais. Un nombre de nœuds illisible
   (un réglage vide, une option disparue) retombe sur une valeur raisonnable. */
function nombreDeNoeuds(n) {
  n = Math.round(Number(n));
  return Number.isFinite(n) && n > 0 ? n : 100000;
}

class Moteur {
  /**
   * @param {{ delaiPret?: number, source?: string }} [opts]
   */
  constructor({ delaiPret = 30000, source = 'vendor/stockfish.js' } = {}) {
    this.attente = null;
    this.mort = null;
    this.file = Promise.resolve();
    this.pretP = new Promise((res, rej) => { this.resPret = res; this.rejPret = rej; });
    this.gardePret = setTimeout(() => this.tuer(new Error(tx('Stockfish ne démarre pas.'))), delaiPret);
    try {
      this.w = new Worker(source);
    } catch (e) {
      this.tuer(e);
      return;
    }
    this.w.onmessage = (e) => this.recevoir(typeof e.data === 'string' ? e.data : (e.data && e.data.data) || '');
    this.w.onerror = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      this.tuer(new Error(tx('Stockfish s’est arrêté : {0}', [(e && e.message) || tx('erreur inconnue')])));
    };
    this.envoyer('uci');
  }
  envoyer(c) { if (!this.mort) this.w.postMessage(c); }
  recevoir(l) {
    if (l === 'uciok') { this.envoyer('setoption name Threads value 1'); this.envoyer('isready'); return; }
    if (l === 'readyok') {
      clearTimeout(this.gardePret);
      if (this.resPret) this.resPret(true);
      this.resPret = this.rejPret = null;
      return;
    }
    if (!this.attente) return;
    if (l.startsWith('info ') && l.includes(' pv ')) {
      const mCp = l.match(/score cp (-?\d+)/), mMate = l.match(/score mate (-?\d+)/);
      const mPv = l.match(/ pv (.+?)\s*$/), mD = l.match(/depth (\d+)/);
      if (this.attente.lignes) {                 // multi() : une ligne par rang MultiPV
        const mi = l.match(/ multipv (\d+)/), i = mi ? parseInt(mi[1], 10) : 1;
        if (!mPv || (!mCp && !mMate)) return;
        const n = mMate ? parseInt(mMate[1], 10) : 0;
        const pv = mPv[1].trim().split(/\s+/);
        this.attente.lignes.set(i, { uci: pv[0], pv, cp: mMate ? (n > 0 ? 10000 - n : -10000 - n) : parseInt(mCp[1], 10),
          depth: mD ? parseInt(mD[1], 10) : 0 });
        return;
      }
      if (mCp) this.attente.cp = parseInt(mCp[1], 10);
      if (mMate) { const n = parseInt(mMate[1], 10); this.attente.cp = n > 0 ? 10000 - n : -10000 - n; this.attente.mat = n; }
      if (mPv) { const l2 = mPv[1].trim().split(/\s+/); this.attente.best = l2[0]; this.attente.pv = l2; }
      if (mD) this.attente.depth = parseInt(mD[1], 10);
    } else if (l.startsWith('bestmove')) {
      const p = l.split(' ');
      if (p[1] && p[1] !== '(none)') this.attente.best = p[1];
      const a = this.attente; this.attente = null; a.res(a);
    }
  }
  pret() { return this.pretP; }
  /** Vrai tant que le moteur peut encore calculer. */
  vivant() { return !this.mort; }
  /**
   * Arrête le worker pour de bon et fait échouer ce qui attendait. Sert aussi à
   * libérer la mémoire (module WebAssembly, table de hachage) d'un moteur dont
   * on n'a plus besoin.
   */
  tuer(err) {
    if (this.mort) return;
    this.mort = err || new Error(tx('Stockfish arrêté.'));
    clearTimeout(this.gardePret);
    try { if (this.w) this.w.terminate(); } catch (e) { /* déjà arrêté */ }
    if (this.rejPret) { this.rejPret(this.mort); this.resPret = this.rejPret = null; }
    if (this.attente) { const a = this.attente; this.attente = null; a.rej(this.mort); }
    if (this.surMort) this.surMort(this.mort);
  }
  /* Une demande : `lancer` envoie les commandes et installe l'attente. Deux
     gardes : au bout de `delai`, « stop » force Stockfish à répondre avec ce
     qu'il a ; s'il ne répond toujours pas dix secondes plus tard, le worker
     est considéré comme mort. */
  demande(lancer, delai) {
    const executer = () => new Promise((res, rej) => {
      if (this.mort) { rej(this.mort); return; }
      let doux = null, dur = null;
      const fin = (f) => (x) => { clearTimeout(doux); clearTimeout(dur); f(x); };
      doux = setTimeout(() => {
        this.envoyer('stop');
        dur = setTimeout(() => this.tuer(new Error(tx('Stockfish ne répond plus.'))), 10000);
      }, delai);
      lancer(fin(res), fin(rej));
    });
    this.file = this.file.then(executer, executer);
    return this.file;
  }
  /**
   * Évaluation d'une position, du point de vue du trait.
   * @param {string} fen
   * @param {number} noeuds
   * @param {number} [delai] ms avant d'exiger une réponse
   */
  evaluer(fen, noeuds, delai = 120000) {
    noeuds = nombreDeNoeuds(noeuds);
    return this.demande((res, rej) => {
      this.attente = { cp: 0, best: null, pv: null, mat: null, depth: 0, res, rej };
      this.envoyer('position fen ' + fen);
      this.envoyer('go nodes ' + noeuds);
    }, delai);
  }
  /* Les n meilleurs coups de la position (MultiPV), scores du point de vue du
     trait, triés du meilleur au moins bon. Remet MultiPV à 1 ensuite : evaluer()
     n'en lit qu'un. */
  multi(fen, noeuds, n, delai = 120000) {
    noeuds = nombreDeNoeuds(noeuds);
    return this.demande((res, rej) => {
      const lignes = new Map();
      this.attente = { lignes, rej, res: () => {
        this.envoyer('setoption name MultiPV value 1');
        res([...lignes.entries()].sort((a, b) => a[0] - b[0]).map(([, x]) => x));
      } };
      this.envoyer('setoption name MultiPV value ' + n);
      this.envoyer('position fen ' + fen);
      this.envoyer('go nodes ' + noeuds);
    }, delai);
  }
  arreter() { this.envoyer('stop'); }
}
