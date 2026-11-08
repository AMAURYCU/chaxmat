/* Entraîneur d'ouvertures — application locale.
   Tout tourne dans le navigateur : chess.js pour les règles, Stockfish (WebAssembly)
   pour l'analyse, les API publiques de chess.com et de Lichess pour l'import. */
'use strict';

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const el = (tag, attrs, ...kids) => {
  const n = document.createElement(tag);
  for (const k in (attrs || {})) {
    if (k === 'class') n.className = attrs[k];
    else if (k === 'html') n.innerHTML = attrs[k];
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), attrs[k]);
    else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) n.setAttribute(k, attrs[k]);
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined) n.append(c.nodeType ? c : String(c));
  return n;
};
const NS = 'http://www.w3.org/2000/svg';
const svgEl = (tag, attrs) => {
  const n = document.createElementNS(NS, tag);
  for (const k in (attrs || {})) n.setAttribute(k, attrs[k]);
  return n;
};

const DEGRADE = location.protocol === 'file:';
const VAL = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
const SEUIL_PIECE = 250;   // cp : ce qu'on appelle « une pièce »


/* Notation des coups dans la langue de l'interface. En français : N→C,
   B→F, R→T, Q→D, K→R, et le roque s'écrit 0-0. En anglais, rien ne change. */
function fr(san) {
  if (!san) return san;
  const L = I18N.lettres;
  let s = String(san);
  if (s.startsWith('O-O')) return s.replace(/O/g, I18N.roque);
  if (!L) return s;
  if (L[s[0]]) s = L[s[0]] + s.slice(1);
  return s.replace(/=([NBRQ])/, (m, p) => '=' + L[p]);
}

const iso = (d) => Rep.jourLocal(d);
const aujourdhui = () => iso(new Date());
const frDate = (s) => new Date(s + 'T12:00:00').toLocaleDateString(I18N.locale,
  { weekday: 'long', day: 'numeric', month: 'long' });
const jourCourt = (s) => new Date(s + 'T12:00:00').toLocaleDateString(I18N.locale,
  { day: 'numeric', month: 'long' });
const nfen = (fen) => fen.split(' ').slice(0, 4).join(' ');   // clé de position (sans compteurs)
/* « 12 min 05 s » ; on arrondit avant de découper, sinon 59,6 s donnait « 0 min 60 » */
const mmss = (s) => { const t = Math.round(s || 0); return `${Math.floor(t / 60)} min ${String(t % 60).padStart(2, '0')} s`; };
const secs = (s) => (s >= 10 ? Math.round(s) : s.toFixed(1).replace('.', I18N.dec)) + ' s';

/* ---------- barre de chargement ----------
   Une bande fine en haut de la page. `debut()` sans total affiche une barre
   indéterminée ; avec un total, elle se remplit. Toujours refermée dans un
   `finally`, sinon elle reste allumée après une erreur. */
const Chargement = {
  n: 0,
  debut(texte, total) {
    this.n++;
    this.total = total || 0; this.fait = 0;
    const b = document.querySelector('#chargement');
    if (!b) return;
    b.hidden = false;
    b.classList.toggle('indef', !total);
    b.querySelector('i').style.width = total ? '0%' : '';
    b.querySelector('span').textContent = texte || '';
  },
  avancer(fait, texte) {
    const b = document.querySelector('#chargement');
    if (!b || b.hidden) return;
    this.fait = fait;
    if (this.total) b.querySelector('i').style.width = Math.round(100 * fait / this.total) + '%';
    if (texte !== undefined) b.querySelector('span').textContent = texte;
  },
  fin() {
    this.n = Math.max(0, this.n - 1);
    if (this.n) return;
    const b = document.querySelector('#chargement');
    if (!b) return;
    b.querySelector('i').style.width = '100%';
    setTimeout(() => { if (!Chargement.n) { b.hidden = true; b.classList.remove('indef'); b.querySelector('span').textContent = ''; } }, 220);
  },
  async pendant(texte, f, total) {
    this.debut(texte, total);
    try { return await f(); } finally { this.fin(); }
  },
};

/* ========================================================== état & stockage */
const S = {
  d: { reglages: { pseudo: '', pseudoLichess: '' }, parties: {}, jours: {}, cartes: {} },
  moteur: null, stop: false, joursAffiches: 1,
};

async function charger() {
  if (DEGRADE) {
    try { Object.assign(S.d, JSON.parse(localStorage.getItem('entraineur') || '{}')); } catch (e) { }
  } else {
    try {
      const r = await fetch('/api/donnees', { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const donnees = await r.json();
      SAUVE.rev = r.headers.get('X-Revision');
      Object.assign(S.d, donnees);
      SAUVE.dernier = JSON.stringify(S.d);
    } catch (e) {
      /* Sans lecture, S.d est vide : la moindre sauvegarde écraserait tes
         données. On bloque l'écriture et on le dit. */
      console.warn('lecture données', e);
      SAUVE.bloque = 'lecture';
      bandeauSauvegarde(tx('Tes données n’ont pas pu être lues. Pour ne rien écraser, rien ne sera enregistré dans cette page. Vérifie que la fenêtre du serveur est ouverte, puis recharge.'), true);
    }
  }
  S.d.reglages = S.d.reglages || { pseudo: '' };
  if (S.d.reglages.pseudoLichess === undefined) S.d.reglages.pseudoLichess = '';
  /* Le bouton du son a longtemps affiché l'inverse de son état, et un clic
     dessus vidait la page (il recevait aussi le gestionnaire des onglets).
     Un réglage « coupé » hérité de cette époque ne traduit donc pas un choix.
     On réactive une fois — une seule, le drapeau le garantit — maintenant que
     les deux bugs sont corrigés. Ensuite le bouton fait foi. */
  if (S.d.reglages.sonRepare !== 1) {
    S.d.reglages.son = true;
    S.d.reglages.sonRepare = 1;
  }
  /* Le réglage arrive après le premier dessin du bouton : sans ce rappel, le
     bouton affichait « son activé » alors que le son était coupé — d'où une
     application muette sans qu'on comprenne pourquoi. */
  if (typeof Son !== 'undefined' && S.d.reglages.son !== undefined) {
    Son.actif = !!S.d.reglages.son;
    if (typeof majBoutonSon === 'function') majBoutonSon();
  }
  S.d.parties = S.d.parties || {}; S.d.jours = S.d.jours || {}; S.d.cartes = S.d.cartes || {};
  // migration : les parties enregistrées à l'ancien format sont compactées
  let migrees = 0;
  for (const [k, p] of Object.entries(S.d.parties)) {
    if (p.coups) {
      if (p.stat && p.stat.nbCoups === undefined && p.stat.mesCoups) p.stat.nbCoups = p.stat.mesCoups.length;
      S.d.parties[k] = compacter(p); migrees++;
    } else if (p.stat && p.stat.mesCoups) { delete p.stat.mesCoups; migrees++; }
  }
  if (migrees) { console.log(migrees + ' partie(s) compactée(s)'); sauver(); }
}
/* ---------- sauvegarde ----------
   Une écriture à la fois, 350 ms après la dernière modification. La page
   envoie la révision du fichier qu'elle a lue : si une autre fenêtre a
   enregistré entre-temps, le serveur refuse (409) au lieu d'écraser, et la
   page demande d'être rechargée. Un échec réseau est réessayé toutes les
   10 s, avec un bandeau tant que ce n'est pas passé. */
const SAUVE = { rev: null, bloque: null, sale: false, enCours: false, relance: false, essai: null, dernier: null };
let tSave = null;
function sauver() {
  SAUVE.sale = true;
  clearTimeout(tSave);
  tSave = setTimeout(ecrireDonnees, 350);
}
async function ecrireDonnees() {
  clearTimeout(tSave); tSave = null;
  clearTimeout(SAUVE.essai); SAUVE.essai = null;
  if (DEGRADE) {
    try { localStorage.setItem('entraineur', JSON.stringify(S.d)); SAUVE.sale = false; } catch (e) { }
    if (typeof Sync !== 'undefined') Sync.planifier();
    return;
  }
  if (SAUVE.bloque || !SAUVE.sale) return;
  if (SAUVE.enCours) { SAUVE.relance = true; return; }
  /* Rien n'a changé depuis la dernière lecture ou écriture : on n'écrit pas.
     Ouvrir l'entraîneur ne réécrit donc plus le fichier, et une deuxième
     fenêtre ouverte « pour voir » ne bloque pas la première. */
  const corps = JSON.stringify(S.d);
  if (corps === SAUVE.dernier) { SAUVE.sale = false; bandeauSauvegarde(null); return; }
  SAUVE.enCours = true; SAUVE.sale = false;
  try {
    const url = '/api/donnees' + (SAUVE.rev ? '?base=' + encodeURIComponent(SAUVE.rev) : '');
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: corps,
    });
    if (r.status === 409) {
      SAUVE.bloque = 'conflit'; SAUVE.sale = true;
      bandeauSauvegarde(tx('L’entraîneur a été enregistré depuis une autre fenêtre. Pour ne pas l’écraser, cette page n’enregistre plus rien : recharge-la (tes dernières actions ici seront perdues).'), true);
      return;
    }
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json().catch(() => ({}));
    if (j.rev) SAUVE.rev = j.rev;
    SAUVE.dernier = corps;
    bandeauSauvegarde(null);
    /* enregistré ici : la synchro GitHub (sync.js) suivra dans quelques secondes */
    if (typeof Sync !== 'undefined') Sync.planifier();
  } catch (e) {
    console.warn('écriture données', e);
    SAUVE.sale = true;
    bandeauSauvegarde(tx('Sauvegarde impossible : le serveur ne répond pas. Laisse cette page ouverte et relance le serveur (le lanceur de ton système, voir le README) ; nouvel essai toutes les 10 secondes.'), false);
    SAUVE.essai = setTimeout(ecrireDonnees, 10000);
  } finally {
    SAUVE.enCours = false;
    if (SAUVE.relance) { SAUVE.relance = false; ecrireDonnees(); }
  }
}
function bandeauSauvegarde(texte, recharger) {
  const b = document.getElementById('bandeau-sauvegarde');
  if (!b) return;
  if (!texte) { b.hidden = true; return; }
  b.innerHTML = '';
  b.append(el('span', {}, texte));
  if (recharger) b.append(el('button', { class: 'b', onclick: () => location.reload() }, tx('Recharger')));
  b.hidden = false;
}

/* ========================================================== moteur Stockfish */
class Moteur {
  constructor() {
    this.w = new Worker('vendor/stockfish.js');
    this.attente = null;
    this.w.onmessage = (e) => this.recevoir(typeof e.data === 'string' ? e.data : (e.data && e.data.data) || '');
    this.pretP = new Promise((res) => { this.resPret = res; });
    this.envoyer('uci');
  }
  envoyer(c) { this.w.postMessage(c); }
  recevoir(l) {
    if (l === 'uciok') { this.envoyer('setoption name Threads value 1'); this.envoyer('isready'); return; }
    if (l === 'readyok') { this.resPret && this.resPret(true); this.resPret = null; return; }
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
  evaluer(fen, noeuds) {
    /* un seul calcul à la fois : le worker n'a qu'une place d'attente */
    const lancer = () => new Promise((res) => {
      this.attente = { cp: 0, best: null, pv: null, mat: null, depth: 0, res };
      this.envoyer('position fen ' + fen);
      this.envoyer('go nodes ' + noeuds);
    });
    this.file = (this.file || Promise.resolve()).then(lancer, lancer);
    return this.file;
  }
  /* Les n meilleurs coups de la position (MultiPV), scores du point de vue du
     trait, triés du meilleur au moins bon. Remet MultiPV à 1 ensuite : evaluer()
     n'en lit qu'un. */
  multi(fen, noeuds, n) {
    const lancer = () => new Promise((res) => {
      const lignes = new Map();
      this.attente = { lignes, res: () => {
        this.envoyer('setoption name MultiPV value 1');
        res([...lignes.entries()].sort((a, b) => a[0] - b[0]).map(([, x]) => x));
      } };
      this.envoyer('setoption name MultiPV value ' + n);
      this.envoyer('position fen ' + fen);
      this.envoyer('go nodes ' + noeuds);
    });
    this.file = (this.file || Promise.resolve()).then(lancer, lancer);
    return this.file;
  }
  arreter() { try { this.envoyer('stop'); } catch (e) { } }
}

/* ========================================================== règles / tactique */
function seeGain(fen, sq, cote) {
  let b;
  try { b = new Chess(fen); } catch (e) { return 0; }
  const cible = b.get(sq);
  if (!cible) return 0;
  try { b.setTurn(cote); } catch (e) { return 0; }
  const gains = []; let val = VAL[cible.type];
  for (let k = 0; k < 14; k++) {
    let cands = [];
    try { cands = b.moves({ verbose: true }).filter(m => m.to === sq && m.captured); } catch (e) { break; }
    if (!cands.length) break;
    cands.sort((x, y) => VAL[x.piece] - VAL[y.piece]);
    const m = cands[0];
    gains.push(val); val = VAL[m.piece];
    try { b.move(m); } catch (e) { break; }
  }
  let net = 0;
  for (let i = gains.length - 1; i >= 0; i--) net = Math.max(0, gains[i] - net);
  return net;
}
function enPrise(fen, couleur) {
  let b; try { b = new Chess(fen); } catch (e) { return []; }
  const adv = couleur === 'w' ? 'b' : 'w', out = [];
  for (const rang of b.board()) for (const c of rang) {
    if (!c || c.color !== couleur || c.type === 'k') continue;
    let att = []; try { att = b.attackers(c.square, adv); } catch (e) { }
    if (!att.length) continue;
    const g = seeGain(fen, c.square, adv);
    if (g > 0) out.push({ case: c.square, type: c.type, gain: g });
  }
  return out;
}

/* ========================================================== import */
function parseClk(txt) {
  const m = (txt || '').match(/\[%clk (\d+):(\d+):([\d.]+)\]/);
  return m ? (+m[1]) * 3600 + (+m[2]) * 60 + parseFloat(m[3]) : null;
}
function moisEntre(depuis, jusqua) {
  const out = [], d = new Date(depuis + 'T12:00:00'), f = new Date(jusqua + 'T12:00:00');
  d.setDate(1);
  while (d <= f) { out.push(`${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`); d.setMonth(d.getMonth() + 1); }
  return out.length ? out : [`${f.getFullYear()}/${String(f.getMonth() + 1).padStart(2, '0')}`];
}
/* Les coups d'une partie, rejoués depuis le début. `pendule(i)` : le temps
   restant après le demi-coup i, en secondes (null si inconnu). */
function rejouer(sans, pendule) {
  const b = new Chess(); const coups = [];
  for (const san of sans) {
    const fenAvant = b.fen();
    let mv; try { mv = b.move(san); } catch (e) { break; }
    coups.push({
      san: mv.san, from: mv.from, to: mv.to, captured: mv.captured || null,
      fenAvant, fenApres: b.fen(), trait: mv.color, clk: pendule(coups.length, b.fen()),
      numero: Math.floor(coups.length / 2) + 1,
    });
  }
  return coups;
}
/* site d'une partie : chess.com pour toutes celles importées avant Lichess */
const siteDe = (p) => p.site || (/lichess\.org/.test(p.url || '') ? 'lichess' : 'chesscom');
function lirePgn(g, pseudo) {
  const c = new Chess();
  try { c.loadPgn(g.pgn); } catch (e) { return null; }
  const cm = {}; for (const x of c.getComments()) cm[x.fen] = x.comment;
  const blanc = g.white.username.toLowerCase() === pseudo.toLowerCase();
  const moi = blanc ? 'w' : 'b';
  const coups = rejouer(c.history(), (i, fen) => parseClk(cm[fen]));
  const res = g.white.result === 'win' ? '1-0' : (g.black.result === 'win' ? '0-1' : '1/2-1/2');
  const score = res === '1/2-1/2' ? .5 : ((res === '1-0') === blanc ? 1 : 0);
  const base = parseInt((g.time_control || '600').split('+')[0], 10) || 600;
  return {
    url: g.url, date: Rep.jourLocal(g.end_time * 1000),
    fin: g.end_time, couleur: moi, score, resultat: res,
    adversaire: blanc ? g.black.username : g.white.username,
    elo: blanc ? g.white.rating : g.black.rating,
    eloAdv: blanc ? g.black.rating : g.white.rating,
    termination: (g.pgn.match(/\[Termination "([^"]+)"\]/) || [, ''])[1],
    base, coups,
  };
}
/* Une partie Lichess (export ndjson). Les pendules viennent du tableau
   `clocks` (centièmes de seconde, une valeur par demi-coup), plus précis que
   les [%clk] du PGN, arrondis à la seconde. Comme pour chess.com, le
   classement retenu est celui d'APRÈS la partie : avant + ratingDiff. */
function lireLichess(g, pseudo) {
  const sans = (g.moves || '').split(' ').filter(Boolean);
  if (!sans.length) return null;
  const W = g.players.white || {}, N = g.players.black || {};
  const blanc = ((W.user || {}).id || '') === pseudo.toLowerCase();
  const moi = blanc ? 'w' : 'b';
  const cl = Array.isArray(g.clocks) ? g.clocks : [];
  const coups = rejouer(sans, (i) => (typeof cl[i] === 'number' ? cl[i] / 100 : null));
  const res = g.winner === 'white' ? '1-0' : (g.winner === 'black' ? '0-1' : '1/2-1/2');
  const score = res === '1/2-1/2' ? .5 : ((res === '1-0') === blanc ? 1 : 0);
  const apres = (j) => (typeof j.rating === 'number' ? j.rating + (j.ratingDiff || 0) : null);
  const lui = blanc ? N : W;
  return {
    site: 'lichess', url: 'https://lichess.org/' + g.id, date: Rep.jourLocal(g.lastMoveAt),
    fin: Math.round(g.lastMoveAt / 1000), couleur: moi, score, resultat: res,
    adversaire: (lui.user && lui.user.name) || tx('Anonyme'),
    elo: apres(blanc ? W : N), eloAdv: apres(lui),
    termination: g.status || '', base: (g.clock && g.clock.initial) || 600, coups,
  };
}

/* Un pseudo rempli doit exister : sinon on n'importe rien et on dit lequel
   est faux. Renvoie null si tout va bien, sinon { champ, message }. */
async function verifierPseudos(ps) {
  const essai = async (url) => {
    try { return await fetch(url, { headers: { Accept: 'application/json' } }); } catch (e) { return null; }
  };
  if (ps.chesscom) {
    const r = await essai(`https://api.chess.com/pub/player/${encodeURIComponent(ps.chesscom.toLowerCase())}`);
    if (!r) return { champ: 'pseudo', message: tx('chess.com injoignable : pas de réseau ?') };
    if (r.status === 404) return { champ: 'pseudo', message: tx('Pseudo chess.com introuvable : « {0} ».', [ps.chesscom]) };
    if (!r.ok) return { champ: 'pseudo', message: tx('chess.com a répondu {0} : réessaie plus tard.', [r.status]) };
  }
  if (ps.lichess) {
    const r = await essai(`https://lichess.org/api/user/${encodeURIComponent(ps.lichess)}`);
    if (!r) return { champ: 'pseudo-lichess', message: tx('Lichess injoignable : pas de réseau ?') };
    if (r.status === 404) return { champ: 'pseudo-lichess', message: tx('Pseudo Lichess introuvable : « {0} ».', [ps.lichess]) };
    if (r.status === 429) return { champ: 'pseudo-lichess', message: tx('Trop de requêtes d’un coup : Lichess limite le débit. Attends une minute puis réessaie.') };
    if (!r.ok) return { champ: 'pseudo-lichess', message: tx('Lichess a répondu {0} : réessaie plus tard.', [r.status]) };
    const u = await r.json().catch(() => ({}));
    if (u.disabled || u.closed) return { champ: 'pseudo-lichess', message: tx('Ce compte Lichess est fermé : « {0} ».', [ps.lichess]) };
  }
  return null;
}

/* Les parties Lichess depuis une date, en ndjson (une partie par ligne),
   lues au fil de l'eau : Lichess envoie une vingtaine de parties par
   seconde, on affiche où on en est. */
async function importerLichess(pseudo, depuis, log) {
  const t0 = new Date(depuis + 'T00:00:00').getTime();
  const url = `https://lichess.org/api/games/user/${encodeURIComponent(pseudo)}?since=${t0}`
    + '&perfType=ultraBullet,bullet,blitz,rapid,classical&clocks=true&evals=false&opening=false&sort=dateAsc';
  log(tx('Lichess : parties de {0}…', [pseudo]));
  const r = await fetch(url, { headers: { Accept: 'application/x-ndjson' } });
  if (r.status === 429) throw new Error(tx('Trop de requêtes d’un coup : Lichess limite le débit. Attends une minute puis réessaie.'));
  if (!r.ok) throw new Error(tx('Lichess a répondu {0} : réessaie plus tard.', [r.status]));
  const brut = [];
  const lire = (l) => { if (l.trim()) { try { brut.push(JSON.parse(l)); } catch (e) { } } };
  if (r.body && r.body.getReader) {
    const lecteur = r.body.getReader(), dec = new TextDecoder();
    let reste = '', dernier = 0;
    for (;;) {
      const { done, value } = await lecteur.read();
      if (done) break;
      reste += dec.decode(value, { stream: true });
      const lignes = reste.split('\n'); reste = lignes.pop();
      lignes.forEach(lire);
      if (brut.length - dernier >= 50) { dernier = brut.length; log(tx('  {0} parties reçues…', [brut.length])); }
    }
    lire(reste + dec.decode());
  } else {
    (await r.text()).split('\n').forEach(lire);
  }
  const moi = pseudo.toLowerCase();
  const gardees = brut.filter(g => {
    if (g.variant !== 'standard' || g.speed === 'correspondence') return false;
    if (['created', 'started', 'aborted', 'noStart', 'unknownFinish'].includes(g.status)) return false;
    const W = g.players.white || {}, N = g.players.black || {};
    const lui = ((W.user || {}).id === moi) ? N : W;
    if (lui.aiLevel || (lui.user && lui.user.title === 'BOT')) return false;   // l'ordinateur, ou un bot
    return (g.lastMoveAt || 0) >= t0;
  });
  log(tx('Lichess : {0} partie(s) contre des humains depuis le {1}.', [gardees.length, depuis]));
  return gardees;
}

async function importerParties(pseudo, depuis, log) {
  const mois = moisEntre(depuis, aujourdhui());
  let brut = [];
  for (const m of mois) {
    log(tx('chess.com : archive {0}…', [m]));
    const r = await fetch(`https://api.chess.com/pub/player/${pseudo.toLowerCase()}/games/${m}`);
    if (!r.ok) { log(tx('  archive {0} indisponible ({1})', [m, r.status])); continue; }
    brut = brut.concat((await r.json()).games || []);
  }
  const t0 = new Date(depuis + 'T00:00:00').getTime() / 1000;
  const gardees = brut.filter(g => {
    if (g.end_time < t0) return false;
    if (g.rules !== 'chess') return false;
    if (g.time_class === 'daily') return false;
    const adv = g.white.username.toLowerCase() === pseudo.toLowerCase() ? g.black.username : g.white.username;
    return !/^coach-/i.test(adv) && !/bot$/i.test(adv);
  });
  log(tx('{0} partie(s) contre des humains depuis le {1}.', [gardees.length, depuis]));
  return gardees;
}

/* ========================================================== analyse */
function analyseStatique(p) {
  const moi = p.couleur;
  let roque = null, menaces = 0, menacesOk = 0, gratuites = 0, gratuitesPrises = 0;
  const mesCoups = [];
  let precedentClk = p.base;
  for (const c of p.coups) {
    if (c.trait !== moi) continue;
    const t = (c.clk !== null && precedentClk !== null) ? Math.max(0, precedentClk - c.clk) : null;
    if (c.clk !== null) precedentClk = c.clk;
    const av = enPrise(c.fenAvant, moi).filter(x => x.gain >= SEUIL_PIECE);
    const advAv = enPrise(c.fenAvant, moi === 'w' ? 'b' : 'w').filter(x => x.gain >= SEUIL_PIECE);
    const ap = enPrise(c.fenApres, moi).filter(x => x.gain >= SEUIL_PIECE);
    if (av.length) {
      menaces++;
      const pireAvant = Math.max(...av.map(x => x.gain));
      const pireApres = ap.length ? Math.max(...ap.map(x => x.gain)) : 0;
      const contre = c.captured ? VAL[c.captured] : 0;
      if (pireApres < SEUIL_PIECE || contre >= pireAvant) menacesOk++;
    }
    if (advAv.length) {
      gratuites++;
      if (c.captured && advAv.some(x => x.case === c.to)) gratuitesPrises++;
    }
    if (roque === null && c.san.startsWith('O-O')) roque = c.numero;
    mesCoups.push(Object.assign({}, c, { temps: t, enPriseAvant: av, gratuitesDispo: advAv, enPriseApres: ap }));
  }
  const dernier = p.coups.length ? p.coups[p.coups.length - 1] : null;
  const clkFin = [...p.coups].reverse().find(c => c.trait === moi && c.clk !== null);
  return {
    roque, menaces, menacesOk, gratuites, gratuitesPrises,
    tempsUtilise: clkFin ? Math.round(p.base - clkFin.clk) : null,
    nbCoups: mesCoups.length, mesCoups,
  };
}
async function analyseMoteur(p, noeuds, onTick) {
  const moi = p.couleur;
  const positions = [p.coups.length ? p.coups[0].fenAvant : null].filter(Boolean);
  for (const c of p.coups) positions.push(c.fenApres);
  const brut = [];
  for (let i = 0; i < positions.length; i++) {
    if (S.stop) return null;
    const r = await S.moteur.evaluer(positions[i], noeuds);
    const trait = positions[i].split(' ')[1];
    brut.push({ cp: r.cp, best: r.best, trait });          // cp du point de vue du trait
    onTick && onTick();
  }
  const clamp = (x) => Math.max(-1200, Math.min(1200, x));
  const gaffes = [];
  let somme = 0, n = 0;
  for (let i = 0; i < p.coups.length; i++) {
    const c = p.coups[i];
    if (c.trait !== moi) continue;
    const avant = brut[i].cp;                 // trait = moi
    /* Si mon coup mate, la position d'après est terminale : Stockfish ne renvoie
       pas de score pour elle et on lirait 0, ce qui comptait le mat porté comme
       une perte de 12 points. Mater ne fait rien perdre. */
    const mate = c.san.includes('#');
    const apres = mate ? avant : -brut[i + 1].cp;
    const perte = mate ? 0 : Math.max(0, clamp(avant) - clamp(apres));
    somme += perte; n++;
    c.evalAvant = avant; c.evalApres = apres; c.perte = perte;
    c.meilleur = brut[i].best;
    if (perte >= 300) gaffes.push({
      numero: c.numero, san: c.san, fen: c.fenAvant, perte,
      evalAvant: avant, evalApres: apres, meilleurUci: brut[i].best,
      punitionUci: brut[i + 1].best, url: p.url, couleur: moi, date: p.date,
    });
  }
  /* évaluations du point de vue des blancs + meilleur coup de chaque position :
     ~1,5 Ko par partie, c'est ce qui alimente le bilan de partie. */
  const evals = brut.map(b => b.trait === 'w' ? b.cp : -b.cp);
  const dernier = p.coups[p.coups.length - 1];
  if (dernier && dernier.san.includes('#'))
    evals[evals.length - 1] = dernier.trait === 'w' ? 10000 : -10000;
  const bests = brut.slice(0, -1).map(b => b.best);
  return { cpl: n ? Math.round(somme / n) : 0, gaffes, nbCoups: n, evals, bests };
}

/* ========================================================== stockage compact */
/* Une partie analysée pèse ~44 Ko si on garde toutes les positions. On ne garde
   que la liste des coups et les pendules : tout le reste se recalcule en
   rejouant la partie, et l'affichage n'en a pas besoin. */
function compacter(p) {
  const c = {
    url: p.url, date: p.date, fin: p.fin, couleur: p.couleur, score: p.score,
    resultat: p.resultat, adversaire: p.adversaire, elo: p.elo, eloAdv: p.eloAdv,
    termination: p.termination, base: p.base,
    sans: p.coups.map(x => x.san).join(' '),
    clks: p.coups.map(x => x.clk === null ? null : Math.round(x.clk * 10) / 10),
    stat: {
      roque: p.stat.roque, menaces: p.stat.menaces, menacesOk: p.stat.menacesOk,
      gratuites: p.stat.gratuites, gratuitesPrises: p.stat.gratuitesPrises,
      tempsUtilise: p.stat.tempsUtilise, nbCoups: p.stat.nbCoups,
    },
  };
  if (p.site) c.site = p.site;
  if (p.moteur) c.moteur = p.moteur;
  return c;
}
/* Reconstruit les positions à partir des coups (pour ré-analyser plus tard). */
function deplier(p) {
  if (p.coups) return p;
  const b = new Chess(), coups = [];
  for (const [i, san] of (p.sans || '').split(' ').filter(Boolean).entries()) {
    const fenAvant = b.fen();
    let mv; try { mv = b.move(san); } catch (e) { break; }
    coups.push({
      san: mv.san, from: mv.from, to: mv.to, captured: mv.captured || null,
      fenAvant, fenApres: b.fen(), trait: mv.color,
      clk: (p.clks && p.clks[i] !== undefined) ? p.clks[i] : null,
      numero: Math.floor(i / 2) + 1,
    });
  }
  return Object.assign({}, p, { coups });
}
const nbCoupsDe = (p) => (p.stat && (p.stat.nbCoups !== undefined ? p.stat.nbCoups
  : (p.stat.mesCoups ? p.stat.mesCoups.length : 0))) || 0;

/* ========================================================== précision
   Un coup se note sur la chute de la probabilité de gain qu'il provoque, pas
   sur les centipions perdus : lâcher un demi-pion à +8 ne change rien à
   l'issue, le lâcher à 0,0 peut tout changer, et les centipions comptent les
   deux pareil. La conversion et la courbe de note sont celles de Lichess ;
   la moyenne est arithmétique sur tes seuls coups.
   Un score de mat est encodé ±10000 : le bornage à ±1500 le ramène à
   « gagné », ce qu'il est. */
const probaGain = (cp) =>
  100 / (1 + Math.exp(-0.00368208 * Math.max(-1500, Math.min(1500, cp))));

function notesPrecision(p) {
  const ev = p.moteur && p.moteur.evals;
  if (!ev || ev.length < 2) return null;
  const sans = (p.sans || '').split(/\s+/).filter(Boolean);
  const moi = p.couleur === 'b' ? 'b' : 'w';
  const signe = moi === 'w' ? 1 : -1;
  const w = ev.map(x => probaGain(signe * x));         // probabilité de gain, ton point de vue
  /* Le poids d'un coup, c'est l'agitation de la position autour de lui : dans
     une finale gagnée à +8, aucun coup ne pèse ; dans une position tendue,
     chacun compte. Sans ça, quarante coups de conversion tranquille noient
     trois catastrophes et la note ne veut plus rien dire. */
  const fenetre = Math.max(2, Math.min(8, Math.round(w.length / 10)));
  const ecartType = (a) => {
    const m = a.reduce((x, y) => x + y, 0) / a.length;
    return Math.sqrt(a.reduce((x, y) => x + (y - m) * (y - m), 0) / a.length);
  };
  const notes = [], poids = [];
  const j = new Chess();
  for (let i = 0; i < sans.length && i + 1 < ev.length; i++) {
    const trait = j.turn();
    let m = null;
    try { m = j.move(sans[i]); } catch (e) { break; }
    if (!m) break;
    if (trait !== moi) continue;
    const chute = Math.max(0, w[i] - w[i + 1]);
    notes.push(Math.max(1, Math.min(100, 103.1668 * Math.exp(-0.04354 * chute) - 3.1669)));
    poids.push(Math.max(0.5, Math.min(12, ecartType(w.slice(Math.max(0, i + 1 - fenetre), i + 1)))));
  }
  return notes.length ? { notes, poids } : null;
}

/* Moyenne pondérée et moyenne harmonique, puis moyenne des deux : la
   pondérée dit comment tu as joué les moments qui comptaient, l'harmonique
   refuse qu'une série de coups faciles efface une gaffe. */
function precisionPartie(p) {
  const cle = (p.moteur && p.moteur.evals || []).length;
  if (p._prec !== undefined && p._precN === cle) return p._prec;
  const r = notesPrecision(p);
  if (!r) { p._prec = null; p._precN = cle; return null; }
  const sp = r.poids.reduce((a, b) => a + b, 0);
  const ponderee = sp > 0
    ? r.notes.reduce((a, n, i) => a + n * r.poids[i], 0) / sp
    : r.notes.reduce((a, b) => a + b, 0) / r.notes.length;
  const harmonique = r.notes.length / r.notes.reduce((a, n) => a + 1 / n, 0);
  p._prec = Math.max(0, Math.min(100, Math.round((ponderee + harmonique) / 2)));
  p._precN = cle;
  return p._prec;
}

/* Repères calés sur le niveau choisi (explications.js, NIVEAUX_JOUEUR), pas sur ceux
   d'un maître : pour un débutant, une partie à 70 % est déjà propre. */
function niveauPrecision(v) {
  const [a, b, c, d] = niveauJoueur().precision;
  const paliers = [[a, 'grn', tx('très propre')], [b, 'grn', tx('propre')], [c, '', tx('correcte')],
    [d, 'amb', tx('accidentée')], [0, 'red', tx('en chute libre')]];
  return paliers.find(n => v >= n[0]) || paliers[paliers.length - 1];
}

function tagPrecision(p) {
  const v = precisionPartie(p);
  /* Les parties importées avant qu'on garde les évaluations n'ont pas de quoi
     la calculer. On le dit, au lieu de laisser un trou inexpliqué : ouvrir le
     bilan lance l'analyse et la remplit. */
  if (v === null) {
    if (!p.moteur) return null;
    return el('span', { class: 'tag', style: 'opacity:.65',
      title: tx('Évaluations manquantes : cette partie a été importée avant qu’on les conserve. Ouvre son bilan, l’analyse se lance et la précision apparaît.') },
      tx('précision à calculer'));
  }
  const [, cls, mot] = niveauPrecision(v);
  return el('span', {
    class: 'tag ' + cls,
    title: tx('Précision {0} % — partie {1}. Chaque coup est noté sur ce qu’il ', [v, mot])
      + tx('fait perdre en probabilité de gain, puis on fait la moyenne de tes coups.'),
  }, tx('précision {0} %', [v]));
}

/* ========================================================== échiquier */
class Plateau {
  static DUREE = 190;
  static ANNEAUX = new Set(['radar-moi', 'radar-adv', 'att', 'def', 'survol', 'indice']);
  constructor(svg) {
    this.svg = svg; this.orientation = 'w'; this.fen = new Chess().fen();
    this.selection = null; this.surCoup = null; this.marques = {};
    svg.addEventListener('click', (e) => this.clic(e));
  }
  static cases(orientation) {
    const files = 'abcdefgh'.split(''), rangs = '87654321'.split('');
    const F = orientation === 'w' ? files : files.slice().reverse();
    const R = orientation === 'w' ? rangs : rangs.slice().reverse();
    const out = [];
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) out.push({ sq: F[x] + R[y], x, y });
    return out;
  }
  dessiner() {
    const s = this.svg; s.innerHTML = '';
    const T = 100, b = new Chess(this.fen);
    for (const { sq, x, y } of Plateau.cases(this.orientation)) {
      const clair = (x + y) % 2 === 0;
      s.append(svgEl('rect', {
        x: x * T, y: y * T, width: T, height: T, class: 'sq', 'data-sq': sq,
        fill: clair ? 'var(--board-light)' : 'var(--board-dark)'
      }));
      /* Une case peut porter plusieurs marques (le bilan superpose le
         dernier coup, le radar et la case survolée) : une chaîne ou une liste. */
      const ms = [].concat(this.marques[sq] || []);
      const p = b.get(sq);
      for (const m of ms) {
        /* Les cases d'arrivée possibles : un disque au centre, comme sur
           chess.com — et un anneau autour de la pièce quand la case est
           occupée, sinon le disque passerait sous la pièce. */
        if (m === 'cible') {
          s.append(p
            ? svgEl('circle', { cx: x * T + T / 2, cy: y * T + T / 2, r: T * 0.44,
              class: 'cible-prise', 'pointer-events': 'none' })
            : svgEl('circle', { cx: x * T + T / 2, cy: y * T + T / 2, r: T * 0.165,
              class: 'cible', 'pointer-events': 'none' }));
        } else if (Plateau.ANNEAUX.has(m)) {
          s.append(svgEl('rect', { x: x * T + 5, y: y * T + 5, width: T - 10, height: T - 10, rx: 12,
            class: m, 'pointer-events': 'none' }));
        } else {
          s.append(svgEl('rect', { x: x * T, y: y * T, width: T, height: T, class: m, 'pointer-events': 'none' }));
        }
      }
      if (p) {
        const u = svgEl('use', {
          href: `#${p.color === 'w' ? 'white' : 'black'}-${{ p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' }[p.type]}`,
          transform: `translate(${x * T + 5} ${y * T + 5}) scale(2)`, 'pointer-events': 'none',
          'data-piece': sq
        });
        s.append(u);
      }
      if (x === 0) {
        const t = svgEl('text', {
          x: x * T + 5, y: y * T + 18, 'font-size': 15, fill: clair ? '#7f8f6b' : '#e8e6db',
          'font-family': 'JetBrains Mono, monospace', 'pointer-events': 'none'
        });
        t.append(sq[1]); s.append(t);
      }
      if (y === 7) {
        const t = svgEl('text', {
          x: x * T + T - 15, y: y * T + T - 7, 'font-size': 15, fill: clair ? '#7f8f6b' : '#e8e6db',
          'font-family': 'JetBrains Mono, monospace', 'pointer-events': 'none'
        });
        t.append(sq[0]); s.append(t);
      }
    }
    /* flèches (bilan) : [{ de, vers, couleur }], au-dessus des pièces */
    for (const f of (this.fleches || [])) {
      const a = this.coordonnees(f.de), z = this.coordonnees(f.vers);
      if (!a || !z) continue;
      const g = flecheSvg(a.x + T / 2, a.y + T / 2, z.x + T / 2, z.y + T / 2, f.couleur);
      g.setAttribute('pointer-events', 'none');
      s.append(g);
    }
    /* notation du coup (bilan) : un rond coloré en haut à droite de la case
       d'arrivée, comme sur chess.com. { sq, texte, fond, encre } */
    const bd = this.badge;
    if (bd && bd.sq) {
      const c = this.coordonnees(bd.sq);
      if (c) {
        const g = svgEl('g', { class: 'badge-coup', 'pointer-events': 'none' });
        const cx = Math.min(c.x + 86, 776), cy = Math.max(c.y + 14, 24);
        g.append(svgEl('circle', { cx, cy, r: 23, fill: bd.fond, stroke: '#fff', 'stroke-width': 3.5 }));
        const t = svgEl('text', { x: cx, y: cy + 8.5, 'text-anchor': 'middle', 'font-size': bd.texte.length > 1 ? 21 : 25,
          'font-weight': 800, fill: bd.encre || '#fff', 'font-family': 'JetBrains Mono, monospace' });
        t.append(bd.texte); g.append(t); s.append(g);
      }
    }
  }
  position(fen, orientation) {
    this.jeton = (this.jeton || 0) + 1;          // annule une animation en cours
    this.fen = fen; if (orientation) this.orientation = orientation;
    this.selection = null; this.dessiner();
  }
  marquer(obj) { this.marques = obj || {}; this.dessiner(); }

  /* ---- animation d'un coup -------------------------------------------- */
  coordonnees(sq) {
    const c = Plateau.cases(this.orientation).find(o => o.sq === sq);
    return c ? { x: c.x * 100, y: c.y * 100 } : null;
  }
  /* `mv` : l'objet renvoyé par chess.js (from, to, flags, color, captured). */
  animerVers(fenApres, mv, orientation) {
    this.jeton = (this.jeton || 0) + 1;
    const jeton = this.jeton;
    const memeSens = !orientation || orientation === this.orientation;
    if (orientation) this.orientation = orientation;
    const reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const trajets = [];
    if (mv && mv.from && mv.to && memeSens && !reduit) {
      trajets.push([mv.from, mv.to]);
      const f = mv.flags || '';
      const r = mv.color === 'w' ? '1' : '8';
      if (f.includes('k')) trajets.push(['h' + r, 'f' + r]);
      if (f.includes('q')) trajets.push(['a' + r, 'd' + r]);
    }
    const pieces = [];
    for (const [de, vers] of trajets) {
      const el = this.svg.querySelector(`use[data-piece="${de}"]`);
      const a = this.coordonnees(de), b = this.coordonnees(vers);
      if (el && a && b) pieces.push({ el, x0: a.x, y0: a.y, dx: b.x - a.x, dy: b.y - a.y });
    }

    if (typeof Son !== 'undefined' && mv) Son.pourCoup(mv);
    this.fen = fenApres; this.selection = null;
    if (!pieces.length) { this.dessiner(); return Promise.resolve(); }

    // la pièce capturée s'efface pendant le déplacement
    if (mv.captured) {
      const sqPris = (mv.flags || '').includes('e')
        ? mv.to[0] + (mv.color === 'w' ? '5' : '4') : mv.to;
      const pris = this.svg.querySelector(`use[data-piece="${sqPris}"]`);
      if (pris) { pris.style.transition = `opacity ${Plateau.DUREE}ms ease-out`; pris.style.opacity = '0'; }
    }
    for (const p of pieces) this.svg.append(p.el);     // au-dessus du reste

    return new Promise((fini) => {
      const t0 = performance.now();
      const pas = (t) => {
        if (jeton !== this.jeton) return fini();        // un autre appel a pris la main
        const k = Math.min(1, (t - t0) / Plateau.DUREE);
        const e = 1 - Math.pow(1 - k, 3);               // décélération
        for (const p of pieces) {
          p.el.setAttribute('transform',
            `translate(${p.x0 + p.dx * e + 5} ${p.y0 + p.dy * e + 5}) scale(2)`);
        }
        if (k < 1) return requestAnimationFrame(pas);
        this.dessiner(); fini();
      };
      requestAnimationFrame(pas);
    });
  }
  clic(e) {
    const r = e.target.closest('[data-sq]'); if (!r) return;
    const sq = r.getAttribute('data-sq');
    /* Sans coup à jouer, un clic interroge la case (le bilan s'en sert
       pour dire qui l'attaque et qui la défend). */
    if (!this.onCoup) { if (this.onCase) this.onCase(sq); return; }
    const b = new Chess(this.fen);
    if (this.selection) {
      const legaux = b.moves({ square: this.selection, verbose: true });
      /* chess.js range les promotions cavalier, fou, tour, dame : sans ce tri,
         un pion qui arrive au bout deviendrait un cavalier. On prend la dame. */
      const cands = legaux.filter(x => x.to === sq);
      const m = cands.find(x => x.promotion === 'q') || cands[0];
      if (m) { const s = this.selection; this.selection = null; this.onCoup(s, sq, m); return; }
    }
    const p = b.get(sq);
    if (p && p.color === b.turn()) {
      this.selection = sq;
      const mk = { [sq]: 'sel' };
      for (const m of b.moves({ square: sq, verbose: true })) mk[m.to] = 'cible';
      this.marquer(mk);
    } else { this.selection = null; this.marquer(this.persistantes || {}); }
  }
}

/* ========================================================== référence glissante */
/* Moyenne des 30 derniers jours de jeu, recalculée à chaque import.
   `avant` (optionnel) exclut ce jour-là et tout ce qui le suit, pour qu'une
   journée ne soit jamais comparée à une fenêtre qui la contient. */
function refGlissante(avant) {
  const fin = avant ? new Date(avant + 'T00:00:00') : new Date();
  const debut = new Date(fin); debut.setDate(debut.getDate() - 30);
  const jours = Object.entries(S.d.jours)
    .filter(([d]) => {
      const t = new Date(d + 'T00:00:00');
      return t >= debut && (avant ? t < fin : t <= fin);
    })
    .map(([d, j]) => j);
  return moyenneJours(jours, 2, 4);
}

/* Le point de départ : la moyenne des 30 premiers jours de jeu enregistrés.
   Il se fige tout seul une fois ces 30 jours passés ; avant, il porte sur ce
   qui existe. Aucun chiffre n'est écrit en dur : chacun a le sien.
   Une pause de plus de deux mois remet le départ à la reprise : on se compare
   à son retour au jeu, pas à des parties d'il y a un an. */
function refDepart() {
  const dates = Object.keys(S.d.jours).sort();
  if (!dates.length) return null;
  const t = (d) => new Date(d + 'T00:00:00').getTime();
  let debut = dates[0];
  for (let i = 1; i < dates.length; i++) if (t(dates[i]) - t(dates[i - 1]) > 60 * 864e5) debut = dates[i];
  const fin = t(debut) + 30 * 864e5;
  const jours = Object.entries(S.d.jours).filter(([d]) => t(d) >= t(debut) && t(d) < fin).map(([, j]) => j);
  return moyenneJours(jours, 1, 1);
}

function moyenneJours(jours, minJours, minParties) {
  const nbParties = jours.reduce((a, j) => a + (j.parties || 0), 0);
  if (jours.length < minJours || nbParties < minParties) return null;

  const sommeSi = (f, filtre) => jours.filter(filtre || (() => true)).reduce((a, j) => a + (f(j) || 0), 0);
  const avecMoteur = (j) => j.cpl !== null && j.cpl !== undefined;
  const poidsMoteur = sommeSi(j => j.coups || j.parties, avecMoteur);
  const partiesMoteur = sommeSi(j => j.parties, avecMoteur);
  const men = sommeSi(j => j.menaces), gr = sommeSi(j => j.gratuites);

  return {
    jours: jours.length, parties: nbParties,
    temps: Math.round(sommeSi(j => (j.temps || 0) * j.parties) / nbParties),
    tempsCoup: (() => {
      const c = sommeSi(j => j.coups || 0);
      return c ? +(sommeSi(j => (j.tempsCoup || 0) * (j.coups || 0)) / c).toFixed(2) : null;
    })(),
    cpl: poidsMoteur ? Math.round(sommeSi(j => avecMoteur(j) ? j.cpl * (j.coups || j.parties) : 0) / poidsMoteur) : null,
    gaffes: partiesMoteur ? sommeSi(j => avecMoteur(j) ? j.gaffes * j.parties : 0) / partiesMoteur : null,
    menaces: men ? sommeSi(j => j.menacesOk) / men : null,
    gratuites: gr ? sommeSi(j => j.gratuitesPrises) / gr : null,
    roque: sommeSi(j => j.roques) / nbParties,
  };
}

/* ========================================================== vues */
function onglet(nom) {
  /* `[data-onglet]` et pas `nav button` : le bouton du son vit dans la même
     barre et n'est pas un onglet. */
  $$('nav button[data-onglet]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.onglet === nom)));
  $$('.panneau').forEach(p => p.classList.toggle('actif', p.id === 'p-' + nom));
  if (nom === 'jour') {
    /* il ne se redessinait qu'à l'import : revenir dessus après avoir changé
       quoi que ce soit affichait un état périmé */
    const jours = Object.keys(S.d.jours).sort();
    if (jours.length) vueJour(S.dernierJour || jours[jours.length - 1]);
  }
  if (nom === 'ouvertures') vueOuvertures();
  /* Un entraînement en cours reprend où il en était : aller voir une leçon
     ou l'éditeur pendant une révision ne doit pas la faire perdre. */
  if (nom === 'entrainement' && !(S.drill && !$('#ent-drill').hidden) && !($('#fin-seance') && !$('#fin-seance').hidden)) vueEntrainement();
  if (nom === 'editeur') vueEditeur();
  if (nom === 'jouer' && typeof vueJouer === 'function') vueJouer();
  /* chaque onglet s'ouvre en haut de page, pas au défilement du précédent */
  window.scrollTo(0, 0);
  if (nom === 'progression') vueProgression();
}

/* ---------- aujourd'hui ---------- */
function statTuile(k, v, n, cls) {
  return el('div', { class: 'stat' },
    el('div', { class: 'k' }, k), el('div', { class: 'v ' + (cls || '') }, v),
    el('div', { class: 'n', html: n }));
}
/* deux repères sous une tuile : le point de départ (figé) et la forme récente */
function reperes(depart, glissant) {
  if (glissant === null || glissant === undefined) return tx('départ : {0}', [depart]);
  return tx('départ : {0} · <span class="rec">30 j d’avant : {1}</span>', [depart, glissant]);
}
/* Les jours où tu as joué, du plus récent au plus ancien. */
function joursJoues() {
  return [...new Set(Object.values(S.d.parties).map(p => p.date))].sort().reverse();
}
const libelleJour = (d) => new Date(d + 'T12:00:00')
  .toLocaleDateString(I18N.locale, { weekday: 'long', day: 'numeric', month: 'long' });

function vueJour(dateISO) {
  S.dernierJour = dateISO;
  const j = S.d.jours[dateISO];
  const parties = Object.values(S.d.parties).filter(p => p.date === dateISO);
  const tousJours = joursJoues();
  if (typeof majResumeCollection === 'function') majResumeCollection();
  if (!tousJours.length) { $('#jour-vide').hidden = false; $('#jour-contenu').hidden = true; return; }
  if (!parties.length) { return vueJour(tousJours[0]); }
  $('#jour-vide').hidden = true; $('#jour-contenu').hidden = false;
  $('#titre-jour').textContent = tx('Tes parties');
  /* Les tuiles ne portent que sur un jour : on dit lequel. Le jour affiché
     est le dernier où tu as joué, pas forcément aujourd'hui. */
  $('#titre-indicateurs').textContent = dateISO === aujourdhui()
    ? tx('Ta journée d’aujourd’hui ({0})', [libelleJour(dateISO)])
    : tx('Ton dernier jour joué\u00a0: {0}', [libelleJour(dateISO)]);

  const n = parties.length;
  const V = parties.filter(p => p.score === 1).length, N = parties.filter(p => p.score === .5).length;
  const somme = (f) => parties.reduce((a, p) => a + (f(p) || 0), 0);
  const coupsTotal = parties.reduce((a, p) => a + nbCoupsDe(p), 0);
  const tempsCoup = coupsTotal ? somme(p => p.stat.tempsUtilise) / coupsTotal : null;
  const men = somme(p => p.stat.menaces), menOk = somme(p => p.stat.menacesOk);
  const gr = somme(p => p.stat.gratuites), grOk = somme(p => p.stat.gratuitesPrises);
  const roques = parties.filter(p => p.stat.roque !== null).length;
  const avecMoteur = parties.filter(p => p.moteur);
  const cpl = avecMoteur.length
    ? Math.round(avecMoteur.reduce((a, p) => a + p.moteur.cpl * p.moteur.nbCoups, 0)
      / avecMoteur.reduce((a, p) => a + p.moteur.nbCoups, 0)) : null;
  const gaffes = avecMoteur.reduce((a, p) => a + gaffesRetenues(p).length, 0);

  const cmp = (val, ref, sensInverse) => {
    if (val === null || val === undefined) return '';
    const mieux = sensInverse ? val < ref : val > ref;
    return mieux ? 'up' : 'down';
  };
  const R = refGlissante(dateISO);
  const D = refDepart() || {};
  const pc = (x) => x === null || x === undefined ? null : tx('{0} %', [Math.round(x * 100)]);
  const ou = (x, f) => x === null || x === undefined ? '—' : f(x);
  const virg = (x) => x.toFixed(2).replace('.', I18N.dec);
  const cmpD = (val, ref, inv) => ref === null || ref === undefined ? '' : cmp(val, ref, inv);
  const g = $('#indicateurs'); g.innerHTML = '';
  g.append(
    statTuile(tx('Parties'), tx('{0}V {1}N {2}D', [V, N, n - V - N]), tx('{0} partie(s), Elo adverse {1}', [n, (() => { const e = parties.filter(p => p.eloAdv).map(p => p.eloAdv); return e.length ? Math.round(e.reduce((a, b) => a + b, 0) / e.length) : '?'; })()])),
    statTuile(tx('Temps par coup'), tempsCoup === null ? '—' : secs(tempsCoup),
      reperes(ou(D.tempsCoup, secs), R && R.tempsCoup ? secs(R.tempsCoup) : null),
      tempsCoup === null ? '' : cmpD(tempsCoup, D.tempsCoup)),
    statTuile(tx('Gaffes / partie'), avecMoteur.length ? virg(gaffes / avecMoteur.length) : '—',
      reperes(ou(D.gaffes, virg), R && R.gaffes !== null ? virg(R.gaffes) : null),
      avecMoteur.length ? cmpD(gaffes / avecMoteur.length, D.gaffes, true) : ''),
    statTuile(tx('Perte moyenne'), cpl === null ? '—' : cpl + ' cp',
      reperes(ou(D.cpl, x => x + ' cp'), R && R.cpl !== null ? R.cpl + ' cp' : null),
      cpl === null ? '' : cmpD(cpl, D.cpl, true)),
    statTuile(tx('Menaces gérées'), men ? tx('{0} %', [Math.round(100 * menOk / men)]) : '—',
      `${menOk}/${men} · ` + reperes(ou(D.menaces, pc), R ? pc(R.menaces) : null),
      men ? cmpD(menOk / men, D.menaces) : ''),
    statTuile(tx('Pièces gratuites'), gr ? tx('{0} %', [Math.round(100 * grOk / gr)]) : '—',
      `${grOk}/${gr} · ` + reperes(ou(D.gratuites, pc), R ? pc(R.gratuites) : null),
      gr ? cmpD(grOk / gr, D.gratuites) : ''),
    statTuile(tx('Roque'), `${roques}/${n}`,
      reperes(ou(D.roque, pc), R ? pc(R.roque) : null), cmpD(roques / n, D.roque)),
  );

  /* la liste des parties couvre les N derniers jours joués, pas seulement celui
     des indicateurs ci-dessus */
  const iJour = Math.max(0, tousJours.indexOf(dateISO));
  const visibles = tousJours.slice(iJour, iJour + S.joursAffiches);
  const ensemble = Object.values(S.d.parties)
    .filter(p => visibles.includes(p.date))
    .sort((a, b) => b.fin - a.fin);                                  // la plus récente d'abord
  const restants = tousJours.length - (iJour + visibles.length);
  $('#titre-parties').textContent = visibles.length > 1
    ? tx('Les parties — {0} sur {1} jours', [ensemble.length, visibles.length])
    : tx('Les parties du {0}', [libelleJour(dateISO)]);

  const lp = $('#liste-parties'); lp.innerHTML = '';
  let jourCourant = null;
  for (const p of ensemble) {
    if (p.date !== jourCourant) {
      jourCourant = p.date;
      const dj = ensemble.filter(x => x.date === p.date);
      const v = dj.filter(x => x.score === 1).length, n = dj.filter(x => x.score === .5).length;
      lp.append(el('div', { class: 'jour-sep' },
        el('span', {}, libelleJour(p.date)),
        el('span', { class: 'bilan-jour' }, tx('{0} partie(s) · {1}V {2}N {3}D', [dj.length, v, n, dj.length - v - n])),
        el('span', { class: 'trait' })));
    }
    const r = p.score === 1 ? ['grn', tx('gagnée')] : (p.score === .5 ? ['', tx('nulle')] : ['red', tx('perdue')]);
    lp.append(el('div', { class: 'item' },
      el('div', { class: 'haut' },
        el('span', { class: 'tag ' + r[0] }, r[1]),
        el('span', { class: 'tag' }, p.couleur === 'w' ? tx('blancs') : tx('noirs')),
        siteDe(p) === 'lichess' ? el('span', { class: 'tag' }, 'Lichess') : null,
        el('strong', {}, p.adversaire), el('span', { class: 'tag' }, String(p.eloAdv || '?')),
        el('span', { class: 'quand' },
          new Date(p.fin * 1000).toLocaleDateString(I18N.locale, { weekday: 'short', day: 'numeric', month: 'short' })
          + ' · ' + new Date(p.fin * 1000).toLocaleTimeString(I18N.locale, { hour: '2-digit', minute: '2-digit' }))),
      el('p', { style: 'margin:0 0 8px' },
        tx('{0} coups · {1}', [nbCoupsDe(p), nbCoupsDe(p) ? tx('{0} par coup', [secs((p.stat.tempsUtilise || 0) / nbCoupsDe(p))]) : '—'])
        + tx(' ({0} au total)', [mmss(p.stat.tempsUtilise || 0)])
        + (p.moteur ? tx(' · {0} cp de perte moyenne · {1} gaffe(s)', [p.moteur.cpl, gaffesRetenues(p).length]) : tx(' · analyse moteur non faite'))
        + (p.stat.roque ? tx(' · roque au coup {0}', [p.stat.roque]) : tx(' · pas de roque'))),
      tagPrecision(p) ? el('div', { style: 'margin:0 0 8px' }, tagPrecision(p)) : null,
      el('div', { class: 'ligne-ctrl', style: 'margin-top:8px' },
        el('button', { class: 'b', onclick: () => ouvrirBilan(p, () => onglet('jour')) }, tx('Bilan de la partie')))
    ));
  }

  /* « voir plus » : deux jours de plus à chaque clic */
  const zp = $('#zone-plus'); zp.hidden = restants <= 0;
  if (restants > 0) {
    $('#btn-plus').textContent = restants === 1 ? tx('Voir le jour précédent') : tx('Voir 2 jours de plus');
    $('#btn-plus').onclick = () => { S.joursAffiches += 2; vueJour(dateISO); };
    $('#btn-tout').textContent = tx('Tout afficher ({0} jour(s) de plus)', [restants]);
    $('#btn-tout').onclick = () => { S.joursAffiches = tousJours.length; vueJour(dateISO); };
  }

  const lg = $('#liste-gaffes'); lg.innerHTML = '';
  $('#titre-gaffes').textContent = visibles.length > 1
    ? tx('Tes gaffes sur ces {0} jours', [visibles.length]) : tx('Tes gaffes du jour');
  const toutes = ensemble.flatMap(p => gaffesRetenues(p));
  if (!toutes.length) {
    lg.append(el('div', { class: 'vide' }, ensemble.some(p => p.moteur) ? tx('Aucune gaffe détectée. Belle journée.') :
      tx('Analyse moteur non disponible dans ce mode.')));
  } else {
    for (const g2 of toutes.sort((a, b) => b.perte - a.perte)) {
      const b = new Chess(g2.fen);
      let mieux = g2.meilleurUci, punition = g2.punitionUci;
      try { const m = b.move({ from: mieux.slice(0, 2), to: mieux.slice(2, 4), promotion: mieux[4] }); mieux = m.san; } catch (e) { }
      const b2 = new Chess(g2.fen);
      try { b2.move(g2.san); const m2 = b2.move({ from: punition.slice(0, 2), to: punition.slice(2, 4), promotion: punition[4] }); punition = m2.san; } catch (e) { }
      lg.append(el('div', { class: 'item' },
        el('div', { class: 'haut' },
          el('span', { class: 'tag red' }, `−${(g2.perte / 100).toFixed(1).replace('.', I18N.dec)}`),
          el('span', { class: 'tag' }, tx('coup {0}', [g2.numero])),
          el('span', { class: 'tag' }, g2.couleur === 'w' ? tx('blancs') : tx('noirs'))),
        el('p', { html: tx('Tu as joué <span class="mv bad">{0}</span> — le bon coup était <span class="mv good">{1}</span>, et la punition <span class="mv">{2}</span>. L’évaluation (de ton point de vue) passe de {3} à {4}.', [fr(g2.san), fr(mieux), fr(punition), evalTexte(g2.evalAvant), evalTexte(g2.evalApres)]) }),
        el('div', { class: 'ligne-ctrl', style: 'margin-top:8px' },
          el('button', { class: 'b g', onclick: () => {
            const part = S.d.parties[g2.url];
            if (!part) return;
            ouvrirBilan(part, () => onglet('jour'));
            const demi = (g2.numero - 1) * 2 + (g2.couleur === 'w' ? 1 : 2);
            allerA(demi);
          } }, tx('Revoir dans le bilan')))
      ));
    }
  }
}

/* ---------- import ---------- */
/* Un champ en erreur : bulle du navigateur sur le champ, et la même phrase
   dans le journal d'import quand il est ouvert. */
function signalerChamp(id, message, log) {
  const c = $('#' + id);
  if (log) log(tx('erreur : ') + message);
  if (!c) return;
  c.setCustomValidity(message);
  c.focus();
  if (c.reportValidity) c.reportValidity();
}
async function lancerImport() {
  const ps = { chesscom: $('#pseudo').value.trim(), lichess: $('#pseudo-lichess').value.trim() };
  const depuis = $('#depuis').value || aujourdhui();
  const noeuds = parseInt($('#profondeur').value, 10);
  const jr = $('#journal'); jr.hidden = false; jr.textContent = '';
  const log = (m) => { jr.textContent += m + '\n'; jr.scrollTop = jr.scrollHeight; };
  const prog = $('#prog'), barre = $('i', prog);
  /* Aucun pseudo : erreur. Un seul : on importe ce site-là. */
  if (!ps.chesscom && !ps.lichess) {
    signalerChamp('pseudo', tx('Indique au moins un pseudo : chess.com ou Lichess.'), log);
    return;
  }
  $('#btn-import').disabled = true; $('#btn-stop').hidden = false; S.stop = false;

  try {
    log(tx('vérification des pseudos…'));
    const pb = await verifierPseudos(ps);
    if (pb) { signalerChamp(pb.champ, pb.message, log); return; }
    S.d.reglages.pseudo = ps.chesscom; S.d.reglages.pseudoLichess = ps.lichess; sauver();
    const nouvelles = [];
    if (ps.chesscom) {
      for (const g of await importerParties(ps.chesscom, depuis, log)) {
        if (S.d.parties[g.url]) continue;
        const p = lirePgn(g, ps.chesscom);
        if (p) nouvelles.push(p);
      }
    }
    if (ps.lichess) {
      for (const g of await importerLichess(ps.lichess, depuis, log)) {
        if (S.d.parties['https://lichess.org/' + g.id]) continue;
        const p = lireLichess(g, ps.lichess);
        if (p) nouvelles.push(p);
      }
    }
    nouvelles.sort((a, b) => a.fin - b.fin);
    log(tx('{0} nouvelle(s) partie(s) à analyser.', [nouvelles.length]));
    for (const p of nouvelles) {
      p.stat = analyseStatique(p);
    }
    if (!DEGRADE && nouvelles.length) {
      if (!S.moteur) { log(tx('démarrage de Stockfish…')); S.moteur = new Moteur(); await S.moteur.pret(); }
      const total = nouvelles.reduce((a, p) => a + p.coups.length + 1, 0);
      let fait = 0; prog.hidden = false;
      for (const p of nouvelles) {
        if (S.stop) { log(tx('interrompu.')); break; }
        log(tx('analyse : {0} ({1} demi-coups)…', [p.adversaire, p.coups.length]));
        const r = await analyseMoteur(p, noeuds, () => {
          fait++; barre.style.width = Math.round(100 * fait / total) + '%';
        });
        if (r) p.moteur = r;
      }
      prog.hidden = true;
    } else if (DEGRADE) {
      log(tx('mode simplifié : analyse Stockfish ignorée.'));
    }
    for (const p of nouvelles) {
      S.d.parties[p.url] = compacter(p);
    }
    const jours = new Set(nouvelles.map(p => p.date));
    for (const d of jours) majJour(d);
    const avant = Object.keys(S.d.exos || {}).length;
    collecterExos();
    const ajout = Object.keys(S.d.exos).length - avant;
    if (ajout > 0) log(tx('{0} exercice(s) ajouté(s) à l’entraînement.', [ajout]));
    sauver();
    /* le bot personnalisé apprend les nouvelles parties */
    if (!DEGRADE && nouvelles.length && typeof majBotPersoApresImport === 'function') {
      await majBotPersoApresImport(nouvelles, S.moteur, log);
    }
    log(tx('terminé.'));
    const derniere = nouvelles.length ? nouvelles[nouvelles.length - 1].date : depuis;
    vueJour(derniere);
    majBadges();
  } catch (e) {
    log(tx('erreur : ') + e.message);
    console.error(e);
  } finally {
    $('#btn-import').disabled = false; $('#btn-stop').hidden = true;
  }
}
/* ---------- ce qu'on compte vraiment contre lui ----------
   Deux coups sont écartés du décompte des gaffes :
   — celui qui mate (il gagne la partie : la position d'après est terminale,
     Stockfish n'en renvoie pas de score et on lisait 0, ce qui facturait le mat
     porté comme douze points perdus) ;
   — le mat forcé non vu trop long pour le niveau choisi (NIVEAUX_JOUEUR.matLong).
     Il reste visible, à part, pour information.
   Le mat en un, en deux et en trois restent comptés : ils sont apprenables. */
function gaffeRetenue(g) {
  if (!g || !g.san) return false;
  if (g.san.includes('#')) return false;
  if (g.evalAvant >= 9000 && !matApres(g.fen, g.meilleurUci) && (10000 - g.evalAvant) >= niveauJoueur().matLong) return false;
  return true;
}
const gaffesRetenues = (p) => ((p.moteur && p.moteur.gaffes) || []).filter(gaffeRetenue);

/* Les statistiques par jour ont été calculées avant que certaines gaffes
   soient écartées du décompte (coups qui matent, mats longs). Sans recalcul,
   la courbe de Progression et le tableau par jour affichent un total différent
   de celui de l'entraînement. On recalcule une fois, à la bonne version. */
const VERSION_JOURS = 3;   // 3 : temps par coup
function migrerJours() {
  if (S.d.versionJours === VERSION_JOURS) return;
  for (const d of Object.keys(S.d.jours || {})) majJour(d);
  S.d.versionJours = VERSION_JOURS;
  sauver();
}

function majJour(dateISO) {
  const parties = Object.values(S.d.parties).filter(p => p.date === dateISO);
  if (!parties.length) return;
  const n = parties.length, somme = (f) => parties.reduce((a, p) => a + (f(p) || 0), 0);
  const avecMoteur = parties.filter(p => p.moteur);
  S.d.jours[dateISO] = {
    parties: n,
    coups: parties.reduce((a, p) => a + nbCoupsDe(p), 0),
    score: somme(p => p.score) / n,
    temps: Math.round(somme(p => p.stat.tempsUtilise) / n),
    /* Le temps par partie dépend surtout de sa longueur : une partie de 20
       coups vite perdue en « utilise » moins qu'une de 60 bien jouée. Le temps
       par coup, lui, dit vraiment si tu prends le temps de regarder. */
    tempsCoup: (() => {
      const c = parties.reduce((a, p) => a + nbCoupsDe(p), 0);
      return c ? +(somme(p => p.stat.tempsUtilise) / c).toFixed(2) : null;
    })(),
    menaces: somme(p => p.stat.menaces), menacesOk: somme(p => p.stat.menacesOk),
    gratuites: somme(p => p.stat.gratuites), gratuitesPrises: somme(p => p.stat.gratuitesPrises),
    roques: parties.filter(p => p.stat.roque !== null).length,
    cpl: avecMoteur.length ? Math.round(avecMoteur.reduce((a, p) => a + p.moteur.cpl * p.moteur.nbCoups, 0)
      / avecMoteur.reduce((a, p) => a + p.moteur.nbCoups, 0)) : null,
    gaffes: avecMoteur.length ? avecMoteur.reduce((a, p) => a + gaffesRetenues(p).length, 0) / avecMoteur.length : null,
    elo: parties[parties.length - 1].elo,
  };
}

/* ---------- ouvertures ---------- */
/* ---------- un écart n'est pas une erreur ----------
   Sortir du répertoire n'a rien de fautif en soi : la question est de savoir
   si le coup était mauvais. On relit la perte depuis les évaluations déjà
   stockées par l'analyse — inutile de relancer Stockfish. */
function perteEcart(p, e) {
  const ev = p && p.moteur && p.moteur.evals;
  if (!ev) return null;
  const i = (e.numero - 1) * 2 + (e.couleur === 'w' ? 0 : 1);
  if (i + 1 >= ev.length) return null;
  const sg = e.couleur === 'w' ? 1 : -1;
  const cl = (x) => Math.max(-1200, Math.min(1200, x * sg));
  const avant = cl(ev[i]), apres = cl(ev[i + 1]);
  const best = (p.moteur.bests && p.moteur.bests[i]) || null;
  return { perte: Math.max(0, avant - apres), avant, apres, best };
}

const NIVEAUX = {
  gaffe:      { rang: 4, nom: tx('gaffe'), cls: 'red' },
  erreur:     { rang: 3, nom: tx('erreur'), cls: 'red' },
  imprecision:{ rang: 2, nom: tx('imprécision'), cls: 'amb' },
  jouable:    { rang: 1, nom: 'jouable', cls: 'grn' },
  inconnu:    { rang: 0, nom: tx('non chiffré'), cls: '' },
};
function niveauEcart(perte) {
  if (perte === null || perte === undefined) return 'inconnu';
  if (perte >= 300) return 'gaffe';
  if (perte >= 100) return 'erreur';
  if (perte >= 50) return 'imprecision';
  return 'jouable';
}

/* Le coup joué était-il en fait le choix du moteur ? Alors ce n'est pas un
   écart à corriger, c'est le livre qui est en retard. */
function meilleurQueLeLivre(p, e, d) {
  if (!d || !d.best) return false;
  try {
    const b = new Chess(e.fen);
    const m = b.move({ from: d.best.slice(0, 2), to: d.best.slice(2, 4), promotion: d.best[4] || 'q' });
    return !!m && m.san === e.joue;
  } catch (err) { return false; }
}

/* Deux clics pour supprimer, sans confirm() qui bloque la page. */
function confirmerDeux(bouton, texte) {
  if (bouton.dataset.arme === '1') return true;
  const av = bouton.textContent;
  bouton.dataset.arme = '1'; bouton.textContent = texte;
  setTimeout(() => { bouton.dataset.arme = ''; bouton.textContent = av; }, 3000);
  return false;
}

/* Regroupement des écarts par position + coup joué, avec la gravité réelle.
   Une seule définition pour toute l'application : la pastille de l'onglet, la
   liste ci-dessous et les exercices d'ouverture s'appuient dessus. Sans ça,
   la pastille annonçait des corrections que l'entraînement ne proposait pas
   (elle comptait chaque occurrence à 50 cp, l'entraînement la moyenne à 100). */
function ecartsGroupes() {
  const parCle = new Map();
  for (const p of Object.values(S.d.parties)) {
    for (const e of ecartsDe(p)) {
      const k = nfen(e.fen) + '|' + e.joue;
      const d = perteEcart(p, e);
      if (!parCle.has(k)) parCle.set(k, { cle: k, e, p, n: 0, dates: new Set(), pertes: [], mieux: 0, best: null });
      const o = parCle.get(k); o.n++; o.dates.add(e.date);
      if (d) { o.pertes.push(d.perte); if (!o.best) o.best = d.best; }
      if (meilleurQueLeLivre(p, e, d)) o.mieux++;
      if (e.date > o.e.date) { o.e = e; o.p = p; }
    }
  }
  for (const o of parCle.values()) {
    o.perteMoy = o.pertes.length ? Math.round(o.pertes.reduce((a, b2) => a + b2, 0) / o.pertes.length) : null;
    o.niveau = o.mieux ? 'jouable' : niveauEcart(o.perteMoy);
  }
  return [...parCle.values()];
}
/* Hors répertoire ET mauvais : imprécision (50 cp) ou pire, et pas un coup
   que le moteur préfère au livre. */
const rangEcart = (o) => NIVEAUX[o.niveau].rang;
const estErreurOuverture = (o) => rangEcart(o) >= 2;

function rendreEcarts() {
  const ec = $('#ecarts'); ec.innerHTML = '';
  if (!listeReps().length) {
    ec.append(el('div', { class: 'vide' }, tx('Crée un répertoire : tes parties y seront comparées automatiquement.')));
    return;
  }

  const toutes = ecartsGroupes();
  const rang = rangEcart;
  const fautifs = toutes.filter(o => rang(o) >= 2).sort((a, b) => rang(b) - rang(a) || b.n - a.n);
  const anodins = toutes.filter(o => rang(o) === 1).sort((a, b) => b.n - a.n);
  const inconnus = toutes.filter(o => rang(o) === 0).sort((a, b) => b.n - a.n);

  if (!toutes.length) {
    ec.append(el('div', { class: 'vide' }, tx('Aucun écart : dans tes parties importées, chaque fois qu’une position de tes répertoires est apparue, tu as joué ton coup.')));
  } else if (fautifs.length) {
    /* La règle « sortir du répertoire n'est pas une faute » est déjà écrite
       juste au-dessus, dans la page : on ne la répète pas ici. */
    ec.append(el('p', { class: 'sous', style: 'margin:22px 0 14px', html:
      tx('<strong>{0} écart(s) qui te coûte(nt) un demi-pion ou plus</strong>, sur {1} ', [fautifs.length, toutes.length])
      + tx('positions où tu es sorti du répertoire. Les autres sont listés plus bas, sans reproche.') }));
  } else {
    const verdict = !anodins.length
      ? tx('mais aucun de ces coups n’a encore été chiffré par le moteur (voir plus bas).')
      : inconnus.length
      ? tx('et aucun de ceux que le moteur a chiffrés ne coûte un demi-pion ({0} restent à chiffrer, voir plus bas).', [inconnus.length])
      : tx('et aucun de ces coups ne coûte un demi-pion. Ton répertoire est trop étroit, tu ne joues pas mal.');
    ec.append(el('div', { class: anodins.length ? 'msg ok' : 'msg', style: 'margin:22px 0 14px', html:
      tx('<strong>Aucune erreur d’ouverture repérée.</strong> Tu es sorti du répertoire dans {0} position(s), ', [toutes.length])
      + verdict }));
  }

  const ligneEcart = ({ e, n, dates, perteMoy, niveau, mieux, best }, anodin) => {
    const niv = NIVEAUX[niveau];
    let bestSan = null;
    if (best) { try { const b = new Chess(e.fen); const m = b.move({ from: best.slice(0, 2), to: best.slice(2, 4), promotion: best[4] || 'q' }); bestSan = m && m.san; } catch (err) { } }
    return el('div', { class: 'item' + (anodin ? ' ecart-jouable' : '') },
      el('div', { class: 'haut' },
        el('span', { class: 'tag ' + niv.cls }, `${n}×`),
        el('span', { class: 'tag ' + niv.cls }, mieux ? tx('meilleur que le livre') : niv.nom),
        perteMoy !== null ? el('span', { class: 'tag' }, tx('−{0} en moyenne', [(perteMoy / 100).toFixed(2).replace('.', I18N.dec)])) : null,
        el('span', { class: 'tag' }, e.repNom || ''),
        el('span', { class: 'tag' }, tx('coup {0}', [e.numero])),
        el('span', { class: 'quand' }, [...dates].sort().reverse()[0])),
      el('p', { html: mieux
        ? tx('Tu as joué <span class="mv good">{0}</span> au lieu de <span class="mv">{1}</span> — ', [fr(e.joue), fr(e.attendu)])
          + tx('et c’est <strong>le premier choix du moteur</strong>. C’est ton répertoire qu’il faut corriger, pas toi.')
        : tx('Tu as joué <span class="mv {0}">{1}</span> au lieu de ', [niv.rang >= 2 ? 'bad' : '', fr(e.joue)])
          + `<span class="mv good">${fr(e.attendu)}</span>.`
          + (perteMoy === null ? tx(' <em>L’évaluation de ce coup n’a pas été gardée : impossible de dire s’il était mauvais.</em>')
            : perteMoy < 50 ? tx(' Le moteur ne voit quasiment pas de différence (−{0}) : c’est jouable.', [(perteMoy / 100).toFixed(2).replace('.', I18N.dec)])
              : tx(' Le moteur chiffre la différence à −{0}.', [(perteMoy / 100).toFixed(2).replace('.', I18N.dec)]))
          + (bestSan && bestSan !== e.attendu && bestSan !== e.joue ? tx(' Son premier choix : <span class="mv good">{0}</span>.', [fr(bestSan)]) : '') }),
      el('div', { class: 'ligne-ctrl', style: 'margin:10px 0 0' },
        el('button', { class: 'b', onclick: () => { onglet('entrainement'); demarrerArbre({ rep: e.rep, portee: 'depuis', depuis: Rep.cle(e.fen) }); } }, tx('S’entraîner depuis cette position')),
        el('button', { class: 'b g', onclick: () => ouvrirRepEditeur(e.rep, Rep.cle(e.fen)) }, tx('Voir dans l’éditeur'))));
  };

  for (const o of fautifs) ec.append(ligneEcart(o, false));

  if (anodins.length) {
    const zone = el('div', { hidden: true });
    const b = el('button', { class: 'b g', style: 'margin:18px 0 0', onclick: () => {
      zone.hidden = !zone.hidden;
      b.textContent = zone.hidden ? tx('Voir les {0} écart(s) sans gravité', [anodins.length]) : tx('Masquer');
      if (!zone.childNodes.length) {
        zone.append(el('p', { class: 'sous', style: 'margin:14px 0 10px' },
          tx('Ces coups sortent du répertoire mais ne perdent rien. Soit ton répertoire est trop étroit, soit tu as trouvé une transposition correcte — dans les deux cas il n’y a rien à corriger.')));
        for (const o of anodins) zone.append(ligneEcart(o, true));
      }
    } }, tx('Voir les {0} écart(s) sans gravité', [anodins.length]));
    ec.append(b, zone);
  }

  if (inconnus.length) {
    const zone2 = el('div', { hidden: true });
    const b2 = el('button', { class: 'b g', style: 'margin:12px 0 0', onclick: () => {
      zone2.hidden = !zone2.hidden;
      b2.textContent = zone2.hidden ? tx('Voir les {0} écart(s) non chiffré(s)', [inconnus.length]) : tx('Masquer');
      if (!zone2.childNodes.length) {
        /* Ces parties datent d'avant la conservation des évaluations coup par
           coup (ou n'ont jamais été analysées) : on les analyse d'ici, sans
           renvoyer vers un bouton caché ailleurs. */
        const cles = new Set(inconnus.map(o => o.cle));
        const aAnalyser = Object.values(S.d.parties)
          .filter(p => !(p.moteur && p.moteur.evals) && ecartsDe(p).some(e => cles.has(nfen(e.fen) + '|' + e.joue)));
        zone2.append(el('p', { class: 'sous', style: 'margin:14px 0 10px' },
          tx('Le moteur n’a pas gardé l’évaluation de ces coups : impossible de dire s’ils étaient mauvais. ')
          + (aAnalyser.length && !DEGRADE
            ? tx('Le bouton ci-dessous analyse les {0} partie(s) concernée(s) ; tu peux continuer à naviguer pendant ce temps.', [aAnalyser.length])
            : '')));
        if (aAnalyser.length && !DEGRADE) {
          const barre = el('div', { class: 'barre', hidden: true }, el('i', { style: 'width:0%' }));
          const go = el('button', { class: 'b', style: 'margin:0 0 12px', onclick: async () => {
            go.disabled = true; barre.hidden = false;
            await analyserManquantes(aAnalyser, (fait, total, nom) => {
              barre.querySelector('i').style.width = Math.round(100 * fait / total) + '%';
              go.textContent = tx('Analyse… {0}/{1}', [fait, total]) + (nom ? ' (' + nom + ')' : '');
            });
            S.gaffesCache = null; S.typesCache = null; _ecartsCache = null;
            majBadges(); rendreEcarts();
          } }, tx('Analyser ces {0} partie(s)', [aAnalyser.length]));
          zone2.append(go, barre);
        }
        for (const o of inconnus) zone2.append(ligneEcart(o, true));
      }
    } }, tx('Voir les {0} écart(s) non chiffré(s)', [inconnus.length]));
    ec.append(b2, zone2);
  }
}

function majBadges() {
  const exos = Object.values(S.d.exos || {}).filter(x => x.solution).length;
  /* Les positions de répertoire déjà travaillées et revenues à échéance. Une
     position jamais vue n'est pas « à revoir » : elle attend son premier passage. */
  const maintenant = Date.now();
  /* Même calcul que le bloc 3 d'Entraînement, profondeur de révision comprise. */
  let aRevoir = 0;
  for (const r of listeReps()) aRevoir += statsRepLimite(r).dues;
  let quizDus = 0;
  if (typeof tousLesQuiz === 'function') {
    for (const q of tousLesQuiz()) { const e = suiviQuiz(q.cle); if (e && Rep.estDue(e.srs, maintenant)) quizDus++; }
  }
  const dues = aRevoir + exos + quizDus;
  const b1 = $('#badge-ent'); b1.hidden = !dues; b1.textContent = dues;
  /* La pastille additionne deux choses très différentes ; sans cette
     infobulle, le chiffre ne se retrouvait nulle part dans la page. */
  b1.title = dues ? tx('{0} exercice(s) + {1} position(s) de répertoire + {2} quiz à revoir', [exos, aRevoir, quizDus]) : '';
  /* le badge ne compte que les vraies erreurs : hors répertoire ET mauvaises.
     Un écart jouable n'a rien à réclamer. Même définition que la liste et que
     les exercices — voir ecartsGroupes(). */
  const n2 = ecartsGroupes().filter(estErreurOuverture).length;
  const b2 = $('#badge-ouv'); b2.hidden = !n2; b2.textContent = n2;
  /* Éditeur : les positions où un répertoire propose plusieurs coups à toi.
     Le modèle en veut un seul, donc ce sont des arbitrages en attente. */
  const b3 = $('#badge-edit');
  if (b3) {
    let aTrancher = 0;
    for (const r of listeReps()) {
      const g = grapheRep(r.id);
      for (const k of g.mesPositions(r.camp)) if (g.coupsDe(k).length > 1) aTrancher++;
    }
    b3.hidden = !aTrancher; b3.textContent = aTrancher;
    b3.title = aTrancher ? tx('{0} position(s) où tu as plusieurs coups à toi', [aTrancher]) : '';
  }
}

/* ---------- petit échiquier statique, pour illustrer une position ----------
   Réutilise les silhouettes de pièces déjà dans la page et le repère 100
   unités par case du grand plateau. */
const FLECHE_VERTE = '#2f7d4f', FLECHE_ROUGE = '#b5382c';

function flecheSvg(x1, y1, x2, y2, couleur) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L;
  const tete = 34, demiLarg = 21, ep = 14, recul = 20;
  const bx = x2 - ux * tete, by = y2 - uy * tete;
  const px = -uy, py = ux;
  const g = svgEl('g', { opacity: '.88' });
  g.append(svgEl('line', {
    x1: x1 + ux * recul, y1: y1 + uy * recul, x2: bx, y2: by,
    stroke: couleur, 'stroke-width': ep, 'stroke-linecap': 'butt',
  }));
  g.append(svgEl('polygon', {
    points: `${x2},${y2} ${bx + px * demiLarg},${by + py * demiLarg} ${bx - px * demiLarg},${by - py * demiLarg}`,
    fill: couleur,
  }));
  return g;
}

function miniEchiquier(fen, fleches, orientation, taille, marques) {
  const T = 100;
  const svg = svgEl('svg', {
    class: 'mini', viewBox: '0 0 800 800', width: taille || 168, height: taille || 168,
    role: 'img', 'aria-label': tx('Position avant le coup'),
  });
  let b; try { b = new Chess(fen); } catch (e) { return svg; }
  const centre = (sq) => {
    const f = 'abcdefgh'.indexOf(sq[0]), r = 8 - parseInt(sq[1], 10);
    const x = orientation === 'b' ? 7 - f : f, y = orientation === 'b' ? 7 - r : r;
    return { x: x * T + T / 2, y: y * T + T / 2 };
  };
  for (const { sq, x, y } of Plateau.cases(orientation)) {
    svg.append(svgEl('rect', {
      x: x * T, y: y * T, width: T, height: T,
      fill: (x + y) % 2 === 0 ? 'var(--board-light)' : 'var(--board-dark)',
    }));
    /* Pièces mises en valeur (leçons) : un aplat ambre sous la pièce
       importante, rouge sous la pièce en danger ou la cible. */
    const mq = marques && marques[sq];
    if (mq) svg.append(svgEl('rect', {
      x: x * T + 3, y: y * T + 3, width: T - 6, height: T - 6, rx: 10,
      class: mq === 'danger' ? 'mq-danger' : 'mq-cle',
    }));
    const p = b.get(sq);
    if (p) svg.append(svgEl('use', {
      href: `#${p.color === 'w' ? 'white' : 'black'}-${{ p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' }[p.type]}`,
      transform: `translate(${x * T + 5} ${y * T + 5}) scale(2)`,
    }));
  }
  for (const [uci, couleur] of (fleches || [])) {
    if (!uci || uci.length < 4) continue;
    const a = centre(uci.slice(0, 2)), z = centre(uci.slice(2, 4));
    svg.append(flecheSvg(a.x, a.y, z.x, z.y, couleur));
  }
  return svg;
}

/* ==========================================================================
   Exercices : les positions à refaire.

   Deux sources, une seule mécanique. Une position sort de la base quand tu as
   retrouvé le bon coup cinq fois d'affilée sans faute ; une faute remet la
   série à zéro. Un passage du quiz compte pour une incrémentation au plus.
   ========================================================================== */

const SERIE_ACQUISE = 5;
const SEUIL_GAFFE_EXO = -150;   // cp : en dessous, la position était déjà perdue

const idExoGaffe = (p, g) => 'g:' + p.url + ':' + g.numero + ':' + g.couleur;
const idExoOuv = (e) => 'o:' + nfen(e.fen) + '|' + e.joue;

/* Reconstruit la base d'exercices depuis les parties stockées, en gardant la
   progression déjà acquise. Idempotent : on peut le relancer à chaque import. */
function collecterExos() {
  S.d.exos = S.d.exos || {};
  const vus = new Set();
  for (const p of Object.values(S.d.parties)) {
    /* --- gaffes en jeu --- */
    for (const g of gaffesRetenues(p)) {
      if (!g.meilleurUci || g.evalAvant < SEUIL_GAFFE_EXO) continue;
      const id = idExoGaffe(p, g);
      vus.add(id);
      const ex = S.d.exos[id] || { id, type: 'gaffe', serie: 0, reussites: 0, echecs: 0 };
      Object.assign(ex, {
        fen: g.fen, joue: g.san, solution: g.meilleurUci, perte: g.perte,
        couleur: g.couleur, numero: g.numero, url: p.url,
        adversaire: p.adversaire, date: g.date || p.date,
        evalAvant: g.evalAvant, evalApres: g.evalApres,
        punition: g.punitionUci || null, categorie: classerGaffeCache(g),
      });
      S.d.exos[id] = ex;
    }
  }
  /* --- erreurs d'ouverture : hors répertoire ET mauvaises ---
     Groupées par position + coup, comme la liste de l'onglet Ouvertures et la
     pastille : une position revue deux fois reste un seul exercice. */
  for (const o of ecartsGroupes()) {
    if (!estErreurOuverture(o)) continue;
    const e = o.e, p = o.p;
    const id = idExoOuv(e);
    vus.add(id);
    const ex = S.d.exos[id] || { id, type: 'ouverture', serie: 0, reussites: 0, echecs: 0 };
    let solution = null;
    try { const b = new Chess(e.fen); const m = b.move(e.attendu); solution = m && (m.from + m.to + (m.promotion || '')); } catch (err) { }
    Object.assign(ex, {
      fen: e.fen, joue: e.joue, attendu: e.attendu, solution,
      alternative: o.best || null, perte: o.perteMoy, couleur: e.couleur,
      numero: e.numero, rep: e.rep, repNom: e.repNom, url: p.url,
      adversaire: p.adversaire, date: e.date || p.date, vues: o.n,
    });
    S.d.exos[id] = ex;
  }
  /* une partie supprimée emporte ses exercices, sauf ceux déjà commencés ;
     une position ajoutée depuis le bilan reste tant que sa partie existe */
  for (const id of Object.keys(S.d.exos)) {
    const x = S.d.exos[id];
    if (x.manuel && (S.d.parties[x.url] || (S.d.partiesBot || {})[x.url])) continue;
    if (!vus.has(id) && !x.serie && !x.reussites) delete S.d.exos[id];
  }
  return S.d.exos;
}

/* L'ordre de la pile : d'abord ce qui a le moins progressé, puis ce qui n'a
   pas été revu depuis le plus longtemps, la gravité ne servant qu'à départager.
   Trier par gravité seule remettait les mêmes positions en tête à chaque
   reprise : en t'arrêtant au bout de dix, tu refaisais éternellement les dix
   mêmes et tu n'atteignais jamais les autres. Une position retrouvée passe
   en bas de la pile. */
function ordreExo(a, b) {
  return (a.serie || 0) - (b.serie || 0)
    || (a.vuLe || 0) - (b.vuLe || 0)
    || (b.perte || 0) - (a.perte || 0);
}
const exosDe = (type) => Object.values(S.d.exos || {})
  .filter(x => x.type === type && x.solution)
  .sort(ordreExo);

/* ---------- le quiz ---------- */
function demarrerExos(type, unSeul) {
  arreterDrill();
  collecterExos();
  const liste = unSeul ? [unSeul] : exosDe(type);
  if (!liste.length) {
    const p0 = boiteDrill(type === 'gaffe' ? tx('Gaffes en jeu') : tx('Erreurs d’ouverture'), '');
    msg(tx('Rien à revoir ici : tout est acquis, ou aucune partie analysée ne fournit d’exercice.'), 'info');
    p0.position(new Chess().fen(), 'w'); p0.onCoup = null;
    S.drill = 'exo-vide';
    return;
  }
  A = null; window.A = null; S.drill = 'exo';
  const p = boiteDrill(type === 'gaffe' ? tx('Gaffes en jeu') : tx('Erreurs d’ouverture'), '');
  D = Object.assign(D || {}, {
    mode: 'exo', typeExo: type, liste: liste.slice(), i: 0, fautes: 0,
    plateau: p, ch: null, carte: null, comptes: new Set(), acquises: 0,
    rates: new Set(),                     // fautes ou indices pendant ce passage
    session: ((D && D.session) || 0) + 1, // les minuteries d'un ancien passage s'éteignent
  });
  positionExo();
}

function positionExo() {
  const ex = D.liste[D.i];
  if (!ex) return finExos();
  D.exo = ex; D.fautes = 0;
  D.b = new Chess(ex.fen);
  /* Un mat manqué ne se valide pas sur un coup : il faut le mener au bout.
     L'adversaire se défend au mieux entre chaque coup. */
  const nMat = matManque(ex) ? distanceMat(ex.evalAvant) : 0;
  D.mat = nMat > 0 && nMat <= 3 ? { n: nMat, joues: [] } : null;
  D.plateau.marques = {};
  D.plateau.position(ex.fen, ex.couleur);
  D.plateau.onCoup = coupJoueur;
  $('#drill-titre').textContent = ex.type === 'gaffe' ? tx('Gaffes en jeu') : tx('Erreurs d’ouverture');
  majSousExo();
  $('#drill-fil').innerHTML = ''; $('#drill-msg').innerHTML = '';
  D.rejeu = construireRejeu(ex);
  /* Pendant le rejeu de la gaffe, toucher l'échiquier rend la main : on
     revient sur la position de l'exercice et le clic sert déjà à jouer. */
  if (!D.plateau._rendMain) {
    D.plateau._rendMain = true;
    D.plateau.svg.addEventListener('pointerdown', () => {
      if (S.drill === 'exo' && D && D.rejeu && D.rejeu.actif && D.exo) finRejeu();
    }, true);
  }
  majIdeeExo();
  /* On montre d'abord ce que le coup a coûté : la gaffe est jouée sur
     l'échiquier, puis la réfutation. Au troisième passage tu la connais par
     cœur, alors la séquence ne se déclenche plus toute seule — elle reste à
     un clic sur la pastille rouge ou sur ▶. */
  if (D.rejeu) {
    if ((ex.serie || 0) < 2) allerRejeu(1);
    etendreRejeu(ex);
  }
}

function majSousExo() {
  const ex = D.exo; if (!ex) return;
  let s = tx('Position {0} sur {1} · {2}, coup {3} · ', [D.i + 1, D.liste.length, ex.adversaire, ex.numero])
    + tx('aux {0} de jouer', [ex.couleur === 'w' ? tx('blancs') : tx('noirs')]);
  if (D.mat) {
    const faits = D.mat.joues.length;
    s += tx(' · mat en {0} — {1}', [D.mat.n, faits ? tx('{0} coup(s) joué(s), mène-le au bout', [faits]) : tx('joue toute la séquence')]);
  }
  $('#drill-sous').textContent = s;
}

/* ---------- rejouer la gaffe et sa punition ----------
   Même principe que les séquences des rapports de partie : ton coup, puis
   les réponses qui montrent ce qu'il a coûté, avec navigation au coup par
   coup. La suite est celle du moteur, pas celle que l'adversaire a jouée :
   c'est la punition qui existait, qu'il l'ait vue ou non. */
function construireRejeu(ex) {
  if (ex.type !== 'gaffe') return null;
  let b;
  try { b = new Chess(ex.fen); } catch (e) { return null; }
  const coups = [];
  const pousser = (uci, mien) => {
    try {
      const m = b.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
      if (!m) return false;
      coups.push({ uci, san: m.san, mv: m, fen: b.fen(), mien });
      return true;
    } catch (e) { return false; }
  };
  let mv = null;
  try { mv = b.move(ex.joue); } catch (e) { mv = null; }
  if (!mv) return null;
  coups.push({ uci: mv.from + mv.to + (mv.promotion || ''), san: mv.san, mv, fen: b.fen(), mien: true });
  /* Mat manqué : l'adversaire ne punit rien, il joue normalement. Dérouler
     six demi-coups de partie ordinaire n'apprend rien — le coup joué suffit,
     et c'est le mat, montré par « Voir le meilleur coup », qui compte. */
  if (!matManque(ex)) {
    for (const u of (ex.ligneP || (ex.punition ? [ex.punition] : []))) if (!pousser(u, false)) break;
  }
  return { fen0: ex.fen, coups: tronquerRejeu(coups, ex.fen), pas: 0, actif: false, idExo: ex.id };
}
const matManque = (ex) => distanceMat(ex.evalAvant || 0) > 0;

/* Le matériel d'une position, en centipions, du point de vue des blancs. */
function materiel(fen) {
  let n = 0;
  for (const c of (fen.split(' ')[0] || '')) {
    const v = VAL[c.toLowerCase()];
    if (v) n += (c === c.toUpperCase() ? v : -v);
  }
  return n;
}

/* La sanction est tombée quand le matériel a fini de bouger : « Ff7 Cxf7 » dit
   tout, la suite de la partie n'apprend rien. On coupe après le dernier coup
   qui change le compte — à partir de la réponse adverse, pas de ton propre
   coup — ou après le mat. Sans aucun changement, la ligne est positionnelle et
   c'est justement l'enchaînement qui l'explique : on la garde entière. */
function tronquerRejeu(coups, fen0) {
  if (coups.length < 2) return coups;
  const m = [materiel(fen0), ...coups.map(c => materiel(c.fen))];
  let dernier = 0;
  for (let i = 2; i < m.length; i++) if (m[i] !== m[i - 1]) dernier = i;
  const iMat = coups.findIndex(c => c.san.includes('#'));
  if (iMat >= 0) dernier = Math.max(dernier, iMat + 1);
  return dernier >= 2 ? coups.slice(0, dernier) : coups;
}

/* Prolonge la punition jusqu'à quatre demi-coups, en interrogeant le moteur
   demi-coup par demi-coup : la variante renvoyée d'un coup est souvent
   tronquée. Le résultat est gardé sur l'exercice, donc calculé une fois. */
async function etendreRejeu(ex) {
  if (!D.rejeu || matManque(ex) || (ex.ligneP && ex.ligneP.length >= 4)) return;
  const id = ex.id;
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    const ligne = (ex.ligneP || (ex.punition ? [ex.punition] : [])).slice();
    const b = new Chess(ex.fen);
    b.move(ex.joue);
    for (const u of ligne) {
      try { b.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' }); } catch (e) { return; }
    }
    let garde = 0;
    while (ligne.length < 4 && !b.isGameOver() && garde++ < 5) {
      const r = await S.moteur.evaluer(b.fen(), 250000);
      if (!D.exo || D.exo.id !== id) return;           // l'exercice a changé
      if (!r.best) break;
      let m = null;
      try { m = b.move({ from: r.best.slice(0, 2), to: r.best.slice(2, 4), promotion: r.best[4] || 'q' }); } catch (e) { m = null; }
      if (!m) break;
      ligne.push(r.best);
    }
    ex.ligneP = ligne;
    if (D.exo && D.exo.id === id) {
      const pas = D.rejeu ? D.rejeu.pas : 0, actif = D.rejeu ? D.rejeu.actif : false;
      D.rejeu = construireRejeu(ex);
      if (D.rejeu) { D.rejeu.pas = Math.min(pas, D.rejeu.coups.length); D.rejeu.actif = actif; }
      majIdeeExo();
    }
    sauver();
  } catch (e) { }
}

/* Aller au demi-coup `n` de la séquence : 0 = la position d'avant ta gaffe. */
function allerRejeu(n) {
  const r = D.rejeu; if (!r) return;
  const ex = D.exo;
  r.pas = Math.max(0, Math.min(n, r.coups.length));
  r.actif = true;
  D.plateau.onCoup = null;                 // pas de coup pendant le rejeu
  D.plateau.marques = {};
  const c = r.pas ? r.coups[r.pas - 1] : null;
  const fen = c ? c.fen : r.fen0;
  const marques = c ? { [c.mv.from]: 'dernier', [c.mv.to]: 'dernier' } : {};
  const avant = r.pas > 1 ? r.coups[r.pas - 2].fen : r.fen0;
  const pose = (c && D.plateau.fen === avant)
    ? D.plateau.animerVers(fen, c.mv, ex.couleur)      // on avance d'un coup : on l'anime
    : (D.plateau.position(fen, ex.couleur),
      (typeof Son !== 'undefined' && Son.jouer('retour')), Promise.resolve());
  pose.then(() => { if (D.rejeu === r && r.actif && r.pas === (c ? r.coups.indexOf(c) + 1 : 0)) D.plateau.marquer(marques); });
  majIdeeExo();
}

/* Rendre la main : l'échiquier revient à la position de l'exercice. */
function finRejeu() {
  const r = D.rejeu; if (!r) return;
  r.actif = false;
  D.plateau.marques = {};
  /* Au milieu d'une séquence de mat, on revient où tu en étais, pas au début. */
  D.plateau.position((D.b && D.mat && D.mat.joues.length) ? D.b.fen() : r.fen0, D.exo.couleur);
  D.plateau.onCoup = coupJoueur;
  majIdeeExo();
}

function majIdeeExo() {
  const ex = D.exo; if (!ex) return;
  const z = $('#drill-idee'); z.innerHTML = '';
  const r = D.rejeu;
  const chip = (san, n, cls) => el('button', {
    class: 'mv ' + cls + (r && r.actif && r.pas === n ? ' courant' : ''),
    title: tx('Voir ce coup sur l’échiquier'),
    onclick: () => allerRejeu(n),
  }, fr(san));

  const tete = el('p', { style: 'margin:0' });
  if (ex.type === 'gaffe') {
    const enCours = D.mat && D.mat.joues.length;
    tete.append(tx('Tu avais joué '), r ? chip(ex.joue, 1, 'bad') : el('span', { class: 'mv bad' }, fr(ex.joue)),
      tx(' et '), ...coutGaffe(ex),
      enCours ? tx('. {0} — mène le mat au bout.', [D.mat.joues.map(fr).join(' ')])
        : (D.mat ? tx('. Joue toute la séquence jusqu’au mat.') : tx('. Trouve le coup.')));
  } else {
    tete.innerHTML = tx('Tu avais joué <span class="mv bad">{0}</span> au lieu de ', [fr(ex.joue)])
      + tx('<span class="mv">…</span> — le coup du répertoire. Retrouve-le.');
  }

  const bloc = el('div', { class: 'msg' }, tete);

  if (r) {
    const n = r.coups.length;
    const suite = el('div', { class: 'rejeu-suite' },
      el('span', { class: 'sous', style: 'margin:0' }, tx('Ce qui suit : ')),
      ...r.coups.slice(1).map((c, i) => chip(c.san, i + 2, '')));
    const nav = el('div', { class: 'rejeu-nav' },
      el('button', { class: 'b g', disabled: !r.actif || r.pas === 0, onclick: () => allerRejeu(r.pas - 1) }, '◀'),
      el('span', { class: 'sous', style: 'margin:0;min-width:64px;text-align:center' },
        r.actif ? tx('coup {0} / {1}', [r.pas, n]) : tx('à toi')),
      el('button', { class: 'b g', disabled: r.actif && r.pas >= n, onclick: () => allerRejeu(r.actif ? r.pas + 1 : 1) }, '▶'),
      el('button', { class: 'b' + (r.actif ? '' : ' g'), disabled: !r.actif, onclick: () => finRejeu() },
        tx('À toi de jouer')));
    /* `append` écrirait « null » en toutes lettres : el() filtre, pas lui. */
    if (n > 1) bloc.append(suite);
    bloc.append(nav, el('p', { class: 'sous', style: 'margin:8px 0 0' }, legendeRejeu(r, ex)));
  }

  /* Le diagnostic est déjà calculé pour chaque gaffe ; il reste caché derrière
     un bouton parce qu'il nomme le motif (« mat en un non vu ») et donnerait
     la réponse à qui cherche encore. */
  if (ex.type === 'gaffe' && categorieExo(ex)) {
    const zone = el('div', { id: 'exo-diag', hidden: true });
    bloc.append(el('div', { class: 'ligne-ctrl', style: 'margin-top:10px' },
      el('button', { class: 'b g', onclick: (ev) => { montrerCategorie(ex, zone); ev.currentTarget.disabled = true; } },
        tx('Pourquoi c’est une gaffe ?'))), zone);
  }

  bloc.append(el('div', { class: 'ligne-ctrl', style: 'margin-top:9px;align-items:center' },
    el('span', { class: 'sous', style: 'margin:0' }, tx('Série : ')),
    serieDots(ex.serie),
    el('span', { class: 'sous', style: 'margin:0' }, tx('{0}/{1} avant de la retirer', [ex.serie, SERIE_ACQUISE]))));
  z.append(bloc);
}

/* ---------- ce que la gaffe a coûté, en mots ----------
   Une évaluation de mat est encodée ±10000 : « laissé 100,0 point(s) » n'avait
   aucun sens, et pour un mat manqué ce n'est pas un nombre de points qui
   compte, c'est le mat. */
const distanceMat = (cp) => (cp >= 9000 ? 10000 - cp : (cp <= -9000 ? -10000 - cp : 0));
function coutGaffe(ex) {
  const n = distanceMat(ex.evalAvant || 0);
  if (n > 0) return [tx('laissé échapper '), el('strong', {}, n === 1 ? tx('un mat en un') : tx('un mat forcé en {0}', [n]))];
  const apres = ex.evalApres !== undefined && ex.evalApres !== null ? ex.evalApres : null;
  if (apres !== null && apres <= -9000) {
    const m = Math.abs(distanceMat(apres));
    return [tx('permis '), el('strong', {}, m === 1 ? tx('un mat en un') : tx('un mat forcé en {0}', [m])), tx(' contre toi')];
  }
  return [tx('laissé '), el('strong', {}, tx('{0} point(s)', [((ex.perte || 0) / 100).toFixed(1).replace('.', I18N.dec)]))];
}

/* La catégorie est calculée à l'import ; on la recalcule si elle manque
   (exercices créés avant que la taxinomie existe). */
function categorieExo(ex) {
  if (ex.categorie === undefined && ex.type === 'gaffe') {
    ex.categorie = classerGaffe({
      san: ex.joue, fen: ex.fen, couleur: ex.couleur, perte: ex.perte,
      evalAvant: ex.evalAvant, evalApres: ex.evalApres,
      meilleurUci: ex.solution, punitionUci: ex.punition,
    });
  }
  return ex.categorie || null;
}

function montrerCategorie(ex, zone) {
  const t = typeGaffe(categorieExo(ex));
  zone.innerHTML = ''; zone.hidden = false;
  zone.append(el('div', { class: 'msg', style: 'margin:10px 0 0' },
    el('div', { class: 'ligne-ctrl', style: 'margin:0 0 6px' },
      el('span', { class: 'tag ' + (t.cls || '') }, t.nom)),
    el('p', { class: 'sous', style: 'margin:0' }, t.aide)));
}

/* Un mat est encodé ±10000 : le diviser par 100 donnait « −100,0 point ». */
function legendeRejeu(r, ex) {
  const mat = (x) => x >= 9000 || x <= -9000;
  const ev = (x) => (x >= 0 ? '+' : '−') + (Math.abs(x) / 100).toFixed(1).replace('.', I18N.dec);
  const apres = ex.evalApres !== undefined && ex.evalApres !== null
    ? ex.evalApres : (ex.evalAvant || 0) - (ex.perte || 0);
  if (!r.actif) return D.mat && D.mat.joues.length
    ? tx('L’échiquier est à l’endroit où tu en es dans le mat : à toi de jouer.')
    : (D.mat ? tx('À toi de jouer : trouve le premier coup, puis mène le mat jusqu’au bout.')
      : tx('À toi de jouer : retrouve le coup que tu aurais dû trouver ici.'));
  if (r.pas === 0) {
    const n = distanceMat(ex.evalAvant || 0);
    return n > 0
      ? tx('La position juste avant ton coup — tu avais {0}.', [n === 1 ? tx('mat en un') : tx('un mat forcé en ') + n])
      : tx('La position juste avant ton coup — tu étais à {0}.', [ev(ex.evalAvant || 0)]);
  }
  const matRate = matManque(ex);
  if (r.pas === 1) return matRate
    ? tx('Ton coup. Le mat s’est envolé, il reste {0} — une partie à gagner au lieu d’une partie finie.', [ev(apres)])
      + tx(' Le coup qui matait est sous « Voir le meilleur coup », une fois la position retrouvée.')
    : (mat(apres) ? tx('Ton coup. À partir d’ici, le mat est forcé contre toi.')
      : tx('Ton coup. L’évaluation tombe à {0}.', [ev(apres)]));
  if (r.pas === r.coups.length) {
    const fin = r.coups[r.pas - 1].san;
    return fin.includes('#')
      ? tx('Mat. Voilà ce que ce coup donnait — reviens à la position et trouve mieux.')
      : tx('Voilà ce que ce coup donnait. Reviens à la position et trouve mieux.');
  }
  if (matRate) return tx('La partie continue normalement : ton coup n’a rien perdu, il a manqué la fin.');
  return r.pas % 2 ? tx('La suite pour toi, si tu laisses faire.') : tx('La réponse qui punit.');
}

function serieDots(n) {
  const d = el('span', { class: 'serie' });
  for (let i = 0; i < SERIE_ACQUISE; i++) d.append(el('i', { class: i < n ? 'on' : '' }));
  return d;
}

/* Le coup proposé dans un exercice. Renvoie 'bon' | 'autre' | 'faux'.
   Pour une gaffe, le verdict des coups qui ne sont pas LE meilleur passe par
   le moteur — voir jugerCoupGaffe. */
function jugerExo(ex, uci, san) {
  if (uci === ex.solution) return 'bon';
  if (ex.type === 'ouverture') {
    /* le premier choix du moteur, s'il diffère du livre, reste un bon coup */
    if (ex.alternative && uci === ex.alternative) return 'autre';
    /* un coup qui est dans ton répertoire ici n'est pas une faute */
    if (coupDuRepertoire(ex.fen, uci, ex.couleur)) return 'autre';
  }
  return 'faux';
}

/* ---------- ce que coûte un coup, par rapport au meilleur ----------
   Exiger le premier choix du moteur au centipion près est trop dur : dans la
   plupart de ces positions, plusieurs coups sauvent la pièce ou gagnent le
   matériel. On mesure donc ce que le coup perd vraiment, et on l'accepte s'il
   ne perd presque rien. Le plafond à 8 points évite de refuser +8,5 parce que
   le moteur, lui, voyait le mat : à ton niveau ce n'est pas une erreur. */
const SEUIL_ACCEPTABLE = 70;    // cp perdus face au meilleur coup
const PLAFOND_JUGE = 800;       // au-delà, la position est gagnée de toute façon
const NOEUDS_JUGE = 300000;

async function perteDuCoup(ex, uci) {
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    if (ex.cpBest === undefined || ex.cpBest === null) {
      const r = await S.moteur.evaluer(ex.fen, NOEUDS_JUGE);
      if (r.cp === undefined || r.cp === null) return null;
      ex.cpBest = r.cp;
    }
    const b = new Chess(ex.fen);
    let m = null;
    try { m = b.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' }); } catch (e) { }
    if (!m) return null;
    if (b.isCheckmate()) return 0;                       // mater ne perd rien
    if (b.isStalemate() || b.isInsufficientMaterial()) return Math.max(0, clampJuge(ex.cpBest));
    const r2 = await S.moteur.evaluer(b.fen(), NOEUDS_JUGE);
    if (r2.cp === undefined || r2.cp === null) return null;
    return Math.max(0, clampJuge(ex.cpBest) - clampJuge(-r2.cp));
  } catch (e) { return null; }
}
const clampJuge = (x) => Math.max(-PLAFOND_JUGE, Math.min(PLAFOND_JUGE, x));

/* ---------- mats manqués : il faut aller au bout ----------
   Trouver le premier coup ne prouve rien si la suite t'échappe. Tu joues, la
   défense la meilleure est jouée pour toi, et la position n'est validée qu'au
   mat. Tout coup qui garde un mat forcé est accepté, pas seulement celui du
   moteur : plusieurs chemins matent souvent. */
async function jugerCoupMat(ex, uci, san, t0) {
  const plateau = D.plateau;
  const mv = t0.history({ verbose: true }).pop();
  if (t0.isCheckmate()) {
    D.b = t0; D.mat.joues.push(san);
    return succesExo(ex, san, t0, uci, true);
  }
  plateau.onCoup = null;
  msg(tx('<span class="mv">{0}</span> — je vérifie que le mat tient…', [fr(san)]), 'info');
  let r = null;
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    r = await S.moteur.evaluer(t0.fen(), NOEUDS_JUGE);
  } catch (e) { r = null; }
  if (D.exo !== ex || S.drill !== 'exo') return;
  plateau.onCoup = coupJoueur;
  /* Le score est du point de vue du trait, donc de l'adversaire : un mat pour
     toi s'y lit en négatif. */
  const tient = r && r.cp !== undefined && r.cp !== null && r.cp <= -9000;
  if (!tient) {
    D.fautes++; ex.serie = 0; ex.echecs++;
    plateau.svg.classList.add('secousse');
    if (typeof Son !== 'undefined') Son.jouer('faux');
    setTimeout(() => plateau.svg.classList.remove('secousse'), 340);
    plateau.marquer({ [uci.slice(2, 4)]: 'err' });
    msg(tx('<span class="mv bad">{0}</span> — le mat ne tient plus après ça. ', [fr(san)])
      + tx('La série repart de zéro. Réessaie, ou clique sur « Indice ».'), 'ko');
    sauver();
    return;
  }
  /* Accepté : on joue la meilleure défense et on te rend la main. */
  D.b = t0; D.mat.joues.push(san);
  plateau.marques = {};
  await plateau.animerVers(t0.fen(), mv, ex.couleur);
  if (D.exo !== ex) return;
  const def = r.best;
  let md = null;
  const apres = new Chess(t0.fen());
  try { md = apres.move({ from: def.slice(0, 2), to: def.slice(2, 4), promotion: def[4] || 'q' }); } catch (e) { md = null; }
  if (!md) { msg(tx('Plus de défense : la position est gagnée.'), 'ok'); return succesExo(ex, san, t0, uci, true); }
  plateau.onCoup = null;
  await new Promise(res => setTimeout(res, 220));
  if (D.exo !== ex) return;
  await plateau.animerVers(apres.fen(), md, ex.couleur);
  if (D.exo !== ex) return;
  D.b = apres; D.mat.joues.push(md.san);
  plateau.marquer({ [md.from]: 'dernier', [md.to]: 'dernier' });
  plateau.onCoup = coupJoueur;
  const reste = Math.max(1, D.mat.n - Math.ceil(D.mat.joues.length / 2));
  if (typeof Son !== 'undefined') Son.jouer('bon');
  msg(tx('<span class="mv good">{0}</span> — le mat tient. Il répond ', [fr(san)])
    + tx('<span class="mv">{0}</span> : continue, mat en {1}.', [fr(md.san), reste]), 'ok');
  majSousExo();
  majIdeeExo();
}

/* Verdict d'un coup de gaffe qui n'est pas le premier choix du moteur. */
async function jugerCoupGaffe(ex, uci, san, t0) {
  const plateau = D.plateau;
  plateau.onCoup = null;                    // un seul coup à la fois pendant le calcul
  msg(tx('<span class="mv">{0}</span> — je regarde ce que ça vaut…', [fr(san)]), 'info');
  const perte = await perteDuCoup(ex, uci);
  if (D.exo !== ex || S.drill !== 'exo') return;         // on a changé d'exercice entre-temps
  plateau.onCoup = coupJoueur;
  if (perte === null) return echecExo(ex, san, uci, null);
  if (perte <= SEUIL_ACCEPTABLE) return succesExo(ex, san, t0, uci);
  echecExo(ex, san, uci, perte);
}

/* Ce coup existe-t-il dans ton graphe depuis cette position ? */
function coupDuRepertoire(fen, uci, camp) {
  try {
    const k = Rep.cle(new Chess(fen));
    return listeReps().some(r => r.camp === camp && !!grapheRep(r.id).trouver(k, uci));
  } catch (e) { return false; }
}

/* ---------- issue d'une tentative ---------- */
function echecExo(ex, san, uci, perte) {
  D.fautes++; ex.serie = 0; ex.echecs++;
  if (D.rates) D.rates.add(ex.id);
  D.plateau.svg.classList.add('secousse');
  if (typeof Son !== 'undefined') Son.jouer('faux');
  setTimeout(() => D.plateau.svg.classList.remove('secousse'), 340);
  D.plateau.marquer({ [uci.slice(2, 4)]: 'err' });
  const tete = ex.type === 'ouverture'
    ? tx('ce n’est pas le coup du répertoire.')
    : (perte === null
      ? tx('ce n’est pas le coup.')
      : tx('ce n’est pas assez : il coûte <strong>{0} point(s)</strong> de plus que le meilleur.', [(perte / 100).toFixed(1).replace('.', I18N.dec)]));
  msg(tx('<span class="mv bad">{0}</span> — {1} La série repart de zéro. ', [fr(san), tete])
    + tx('Réessaie, ou clique sur « Indice ».'), 'ko');
  sauver();
}

/* `t0` : la position après le coup (pour l'animation). `force` : la réussite
   ne se juge pas au coup (séquence de mat menée à son terme). */
function succesExo(ex, san, t0, uci, force) {
  const acquise = reussirExo(ex);
  if (acquise) D.acquises = (D.acquises || 0) + 1;
  const exact = force || uci === ex.solution;
  D.plateau.marques = {};
  D.plateau.animerVers(t0.fen(), t0.history({ verbose: true }).pop());
  const mate = D.mat && san.includes('#');
  const tete = acquise
    ? tx('<span class="mv good">{0}</span> — {1}cinq fois de suite : cette position est acquise, je la retire.', [fr(san), mate ? tx('mat, et ') : ''])
    : `<span class="mv good">${fr(san)}</span> — ${mate ? tx('mat !') : (exact ? tx('c’est ça') : tx('ça marche aussi'))}. `
      + (D.rates && D.rates.has(ex.id)
        ? tx('Après une faute ou un indice, la série reste à zéro : cette position reviendra.')
        : tx('Série {0}/{1}.', [ex.serie, SERIE_ACQUISE]));
  msg(tete, 'ok');
  /* La pièce sonne déjà par l'animation : la clochette arrive juste après,
     pour ne pas se superposer au bois. */
  if (typeof Son !== 'undefined') setTimeout(() => Son.jouer(acquise ? 'acquis' : 'reussi'), mate ? 520 : 170);
  /* Ta position est sauvegardée tout de suite : tu peux quitter au milieu
     d'un passage sans rien reperdre. */
  sauver();
  /* Le premier choix du moteur enchaîne ; un coup seulement acceptable
     s'arrête un instant, le temps de te montrer ce qu'il y avait de mieux. */
  const session = D.session;
  if (exact) { setTimeout(() => { if (D && D.session === session && S.drill === 'exo') { D.i++; positionExo(); } }, acquise ? 1300 : 900); return; }
  D.plateau.onCoup = null;
  $('#drill-msg').firstChild.append(el('div', { class: 'ligne-ctrl', style: 'margin:10px 0 0' },
    el('button', { class: 'b g', onclick: (ev) => montrerMeilleur(ex, ev.currentTarget) },
      tx('Voir le meilleur coup')),
    el('button', { class: 'b', onclick: () => { D.i++; positionExo(); } }, tx('Position suivante'))));
  /* La position est résolue : le diagnostic ne spoile plus rien, on le donne. */
  const diag = $('#exo-diag');
  if (diag && diag.hidden) montrerCategorie(ex, diag);
}

/* Montre le coup que le moteur préférait, sur la position de l'exercice. */
function montrerMeilleur(ex, bouton) {
  const u = ex.solution;
  let mv = null;
  try { mv = new Chess(ex.fen).move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' }); } catch (e) { }
  if (!mv) { if (bouton) bouton.disabled = true; return; }
  if (D.rejeu) D.rejeu.actif = false;
  const apres = new Chess(ex.fen); apres.move(mv.san);
  D.plateau.marques = {};
  D.plateau.position(ex.fen, ex.couleur);
  setTimeout(() => {
    Promise.resolve(D.plateau.animerVers(apres.fen(), mv, ex.couleur))
      .then(() => D.plateau.marquer({ [mv.from]: 'sel', [mv.to]: 'cible' }));
  }, 160);
  if (bouton) { bouton.textContent = fr(mv.san); bouton.disabled = true; }
}

function reussirExo(ex) {
  ex.reussites++;
  /* Après une faute ou un indice dans ce passage, la série ne bouge pas. */
  if (D.rates && D.rates.has(ex.id)) { ex.dernier = aujourdhui(); ex.vuLe = Date.now(); return false; }
  if (!D.comptes.has(ex.id)) {           // une incrémentation par passage
    D.comptes.add(ex.id);
    ex.serie = (ex.serie || 0) + 1;
  }
  ex.dernier = aujourdhui();
  ex.vuLe = Date.now();                  // elle repart en bas de la pile
  if (ex.serie >= SERIE_ACQUISE) {
    delete S.d.exos[ex.id];
    return true;
  }
  return false;
}

function finExos() {
  const n = D.comptes.size, a = D.acquises || 0;
  msg(tx('Passage terminé — {0} position(s) retrouvée(s) sur {1}', [n, D.liste.length])
    + (a ? tx(', dont {0} retirée(s) définitivement.', [a]) : '.'), n ? 'ok' : 'info');
  D.plateau.onCoup = null;
  if (typeof Son !== 'undefined') Son.jouer(n ? 'fini' : 'bon');
  /* Le passage est fini : plus d'exercice courant, sinon « Indice » dévoilait
     encore la solution de la dernière position — et remettait sa série à
     zéro — alors que l'échiquier n'accepte plus rien. */
  D.exo = null; D.rejeu = null; D.mat = null;
  $('#drill-idee').innerHTML = '';
  sauver(); majBadges();
}

/* ---------- entraînement ---------- */
let D = null;   // session de drill en cours
function vueEntrainement(note) {
  $('#ent-accueil').hidden = false; $('#ent-drill').hidden = true;
  const vieille = $('#ent-note'); if (vieille) vieille.remove();
  if (note) $('#ent-accueil').prepend(el('div', { class: 'msg ok', id: 'ent-note', html: note }));
  majBlocsExos();
  majBlocRepertoires();
  if (typeof majBlocQuizOuv === 'function') majBlocQuizOuv();
  if ($('#fin-seance')) $('#fin-seance').hidden = true;
  if (typeof rendreFinales === 'function') rendreFinales();
}

/* ---------- profondeur de révision ----------
   Par défaut on révise tout le répertoire ; on peut s'arrêter à son n-ième
   coup (« jusqu'à ton 3e coup »). Le réglage est propre à chaque répertoire
   et vit dans tes données. */
const ordinal = n => I18N.ordinal(n);
function profRevision(id) {
  const p = ((S.d.reglages || {}).profRevision || {})[id];
  return Number.isInteger(p) && p > 0 ? p : 0;
}
function regleProfRevision(id, n) {
  S.d.reglages = S.d.reglages || {};
  S.d.reglages.profRevision = S.d.reglages.profRevision || {};
  if (n) S.d.reglages.profRevision[id] = n; else delete S.d.reglages.profRevision[id];
  sauver();
}
/* Les chiffres du bloc, restreints à la profondeur choisie. */
function statsRepLimite(r) {
  const s = statsRep(r);
  const g = grapheRep(r.id);
  s.max = g.profondeurMax(r.camp);
  const prof = profRevision(r.id);
  if (!prof || prof >= s.max) return s;
  const mes = Rep.portees.jusquA(g, r.camp, g.mesPositions(r.camp), prof);
  s.positions = mes.size;
  s.dues = Rep.portees.jusquA(g, r.camp, Rep.portees.dues(g, r.camp, r.srs || {}, Date.now()), prof).size;
  s.ratees = (r.ratees || []).filter(k => mes.has(k)).length;
  s.vues = Object.keys(r.srs || {}).filter(k => mes.has(k)).length;
  s.nouvelles = s.positions - s.vues;
  return s;
}
function choixProfondeur(r, max) {
  if (!max || max < 2) return null;
  const prof = Math.min(profRevision(r.id), max);
  const sel = el('select', { class: 'rep-prof', 'aria-label': tx('Profondeur de révision — {0}', [r.nom]),
    onchange: e => { regleProfRevision(r.id, +e.target.value >= max ? 0 : +e.target.value); majBlocRepertoires(); } },
    el('option', { value: '0' }, tx('tout le répertoire')),
    ...Array.from({ length: max - 1 }, (_, i) => el('option', { value: String(i + 1) }, tx('jusqu’à ton {0} coup', [ordinal(i + 1)]))));
  sel.value = String(prof >= max ? 0 : prof);
  return el('label', { class: 'rep-prof-l' }, tx('Réviser '), sel);
}

/* ---------- bloc 3 : les répertoires, et ce qui a raté en les révisant ----------
   Rien d'autre : les positions isolées relèvent des blocs 1 et 2. */
function majBlocRepertoires() {
  const zt = $('#rep-tout'); zt.innerHTML = '';
  const reps = listeReps();
  let duesTotal = 0, rateesTotal = 0;
  if (!reps.length) {
    zt.append(el('div', { class: 'vide' },
      tx('Aucun répertoire. Crée-en un dans l’onglet Ouvertures (« Créer un répertoire »).')));
  }
  for (const r of reps) {
    const s = statsRepLimite(r);
    const dues = s.vues ? s.dues : 0;
    duesTotal += dues; rateesTotal += s.ratees;
    zt.append(el('div', { class: 'exo-item rep-ent' },
      el('span', { class: 'rep-pion ' + r.camp, 'aria-hidden': 'true' }),
      el('strong', {}, r.nom),
      el('span', { class: 'tag' }, tx('{0} position(s)', [s.positions])),
      !s.positions ? el('span', { class: 'tag' }, 'vide')
        : !s.vues ? el('span', { class: 'tag' }, tx('jamais entraîné'))
          : dues ? el('span', { class: 'tag amb' }, tx('{0} à revoir', [dues]))
            : el('span', { class: 'tag grn' }, tx('à jour')),
      s.vues && s.nouvelles ? el('span', { class: 'tag' }, tx('{0} jamais vue(s)', [s.nouvelles])) : null,
      s.ratees ? el('span', { class: 'tag red' }, tx('{0} ratée(s)', [s.ratees])) : null,
      choixProfondeur(r, s.max),
      el('span', { class: 'rep-ent-btns' },
        el('button', { class: 'b', disabled: !s.positions, onclick: () => demarrerArbre({ rep: r.id, portee: 'tout' }) },
          tx('Tout le répertoire')),
        dues ? el('button', { class: 'b g', onclick: () => demarrerArbre({ rep: r.id, portee: 'dues' }) },
          tx('Ce qui est dû ({0})', [dues])) : null,
        s.ratees ? el('button', { class: 'b g', onclick: () => demarrerArbre({ rep: r.id, portee: 'erreurs' }) },
          tx('Mes erreurs ({0})', [s.ratees])) : null)));
  }
  /* Le compteur du bloc annonce ce qu'il y a à faire ici : les positions dues
     d'abord, puis ce qui a échoué. */
  const c3 = $('#cpt-rep');
  const bouts = [];
  if (duesTotal) bouts.push(tx('{0} à revoir', [duesTotal]));
  if (rateesTotal) bouts.push(tx('{0} ratée(s)', [rateesTotal]));
  c3.textContent = bouts.length ? bouts.join(' · ') : (reps.length ? tx('{0} répertoire(s)', [reps.length]) : tx('aucun répertoire'));
  c3.className = 'tag ' + (rateesTotal ? 'red' : (duesTotal ? 'amb' : (reps.length ? 'grn' : '')));
  majBadges();
}

/* Les compteurs et les listes illustrées des deux premiers blocs. */
function majBlocsExos() {
  collecterExos();
  for (const [type, cpt, zone, btn, btnL] of [
    ['ouverture', '#cpt-ouv', '#liste-exo-ouv', '#btn-exo-ouv', '#btn-liste-ouv'],
    ['gaffe', '#cpt-gaffes', '#liste-exo-gaffes', '#btn-exo-gaffes', '#btn-liste-gaffes'],
  ]) {
    const liste = exosDe(type);
    const c = $(cpt);
    c.textContent = liste.length || tx('rien à revoir');
    c.className = 'tag ' + (liste.length ? 'red' : 'grn');
    $(btn).disabled = !liste.length;
    $(btnL).disabled = !liste.length;
    const z = $(zone); z.innerHTML = '';
    for (const ex of liste.slice(0, 40)) {
      let uciJoue = null, sanBon = null;
      try { const bb = new Chess(ex.fen); const m = bb.move(ex.joue);
        if (m) uciJoue = m.from + m.to + (m.promotion || ''); } catch (e) { }
      try { const bb = new Chess(ex.fen); const u = ex.solution;
        const m = bb.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' });
        sanBon = m && m.san; } catch (e) { }
      /* position avant le coup : flèche rouge sur ce qui a été joué, flèche
         verte sur le bon coup — masquée tant qu'on ne la demande pas, sinon
         l'exercice est résolu avant d'avoir commencé. */
      const diag = el('div', { class: 'exo-diag' },
        miniEchiquier(ex.fen, [[uciJoue, FLECHE_ROUGE], [ex.solution, FLECHE_VERTE]], ex.couleur),
        el('div', { class: 'exo-corps' },
          el('div', { class: 'exo-h' },
            serieDots(ex.serie || 0),
            el('span', { class: 'tag red' }, `−${((ex.perte || 0) / 100).toFixed(1).replace('.', I18N.dec)}`),
            el('strong', {}, ex.adversaire),
            el('span', { class: 'tag' }, tx('coup {0}', [ex.numero])),
            el('span', { class: 'tag' }, ex.couleur === 'w' ? tx('blancs') : tx('noirs')),
            el('span', { class: 'quand' }, ex.date || '')),
          el('p', { style: 'margin:8px 0 0', html: tx('Tu as joué <span class="mv bad">{0}</span>.', [fr(ex.joue)]) }),
          el('div', { class: 'exo-ctrl' },
            el('button', { class: 'b', onclick: () => demarrerExos(type, ex) }, tx('Refaire celle-ci')),
            el('button', { class: 'b g', onclick: (ev) => {
              const b2 = ev.currentTarget;
              const montre = b2.dataset.on === '1';
              b2.dataset.on = montre ? '' : '1';
              b2.textContent = montre ? tx('Montrer le bon coup') : (sanBon ? fr(sanBon) : '?');
              diag.querySelector('svg.mini').classList.toggle('cache-verte', montre);
            } }, tx('Montrer le bon coup')))));
      diag.querySelector('svg.mini').classList.add('cache-verte');
      z.append(diag);
    }
    if (liste.length > 40) z.append(el('p', { class: 'sous', style: 'margin:10px 0 0' },
      tx('… et {0} autre(s).', [liste.length - 40])));
  }
}

/* Arrête proprement l'entraînement en cours : minuteries, contrôleur de quiz,
   rejeu d'exercice et clics sur l'échiquier. Appelé avant d'en lancer un
   autre et en quittant, pour qu'aucune minuterie de l'ancien n'agisse sur
   le nouveau. */
function arreterDrill() {
  if (A) clearTimeout(A.minuteur);
  A = null; window.A = null;
  if (typeof QO !== 'undefined' && QO) { clearTimeout(QO.minuteur); if (QO.ctl) QO.ctl.arreter(); QO = null; }
  if (D) {
    D.session = (D.session || 0) + 1;     // les minuteries d'exercice comparent ce numéro
    D.exo = null; D.rejeu = null; D.mat = null;
    if (D.plateau) D.plateau.onCoup = null;
  }
  S.drill = null;
}

function boiteDrill(titre, sous) {
  $('#ent-accueil').hidden = true; $('#ent-drill').hidden = false;
  $('#drill-titre').textContent = titre; $('#drill-sous').textContent = sous || '';
  $('#drill-msg').innerHTML = ''; $('#drill-idee').innerHTML = ''; $('#drill-fil').innerHTML = '';
  if (!D || !D.plateau) { D = D || {}; D.plateau = new Plateau($('#plateau')); }
  return D.plateau;
}
/* Les numéros d'une suite de coups jouée depuis `fen` (par défaut la position
   initiale) : un quiz qui part d'une position de milieu de jeu ne commence pas
   au coup 1, ni forcément par les blancs. */
function libellesCoups(coups, fen) {
  const p = (fen || '').split(' ');
  let n = parseInt(p[5], 10) || 1, blanc = p[1] !== 'b';
  return coups.map((c, i) => {
    const t = (blanc ? `${n}.` : (i === 0 ? `${n}…` : '')) + fr(c);
    if (!blanc) n++;
    blanc = !blanc;
    return t;
  });
}
function fil(coups, etat, fen) {
  const f = $('#drill-fil'); f.innerHTML = '';
  const lib = libellesCoups(coups, fen);
  coups.forEach((c, i) => f.append(el('span', { class: etat[i] || 'att' }, lib[i])));
}
function msg(txt, cls) { $('#drill-msg').innerHTML = ''; $('#drill-msg').append(el('div', { class: 'msg ' + (cls || '') , html: txt })); }


function coupJoueur(from, to, m) {
  /* Seuls les exercices passent par ici : l'entraînement en arbre a son
     propre gestionnaire (coupArbre). */
  if (!D || D.mode !== 'exo' || !D.exo) return;
  const uci = from + to + (m && m.promotion ? m.promotion : '');
  const t0 = new Chess(D.b.fen());
  let san0 = null;
  try { san0 = t0.move({ from, to, promotion: 'q' }).san; } catch (e) { return; }
  const ex = D.exo;
  /* Mat manqué : la séquence entière compte, pas seulement le premier coup. */
  if (D.mat) { jugerCoupMat(ex, uci, san0, t0); return; }
  const v = jugerExo(ex, uci, san0);
  if (v === 'bon') return succesExo(ex, san0, t0, uci);
  if (v === 'autre') {
    /* dans le répertoire mais pas le coup attendu ici : pas une faute */
    D.plateau.marquer({ [to]: 'dernier' });
    msg(tx('<span class="mv good">{0}</span> — il existe un autre coup. ', [fr(san0)])
      + tx('Celui-ci est bon aussi, mais ce n’est pas celui que je te demande ici. Essaie encore.'), 'info');
    return;
  }
  /* Une gaffe : on ne refuse pas un coup juste parce qu'il n'est pas LE
     premier choix. Le moteur dit ce qu'il perd, et on tranche là-dessus. */
  if (ex.type === 'gaffe') { jugerCoupGaffe(ex, uci, san0, t0); return; }
  return echecExo(ex, san0, uci, null);
}

/* ---------- classement Elo ----------
   L'Elo stocké dans une partie est celui d'APRÈS la partie (c'est ce que
   renvoie chess.com dans le PGN ; pour Lichess, avant + ratingDiff), donc la
   courbe se lit « où j'en étais en sortant de chaque partie ».
   Une courbe par site : les classements chess.com et Lichess ne se comparent
   pas. Le nom du site n'apparaît que quand les deux sont là. */
const NOMS_SITES = { chesscom: 'chess.com', lichess: 'Lichess' };
function cartesElo() {
  const sites = [...new Set(Object.values(S.d.parties).map(siteDe))].sort();
  if (!sites.length) return [carteElo('chesscom', null)];
  return sites.map(st => carteElo(st, sites.length > 1 ? NOMS_SITES[st] : null));
}
function carteElo(site, nomSite) {
  const parties = Object.values(S.d.parties)
    .filter(p => siteDe(p) === site && typeof p.elo === 'number' && p.elo > 0)
    .sort((a, b) => a.fin - b.fin);
  const carte = el('div', { class: 'carte' }, el('h3', {},
    nomSite ? tx('Classement Elo — {0}', [nomSite]) : tx('Classement Elo')));
  if (parties.length < 2) {
    carte.append(el('div', { class: 'vide' }, tx('Pas encore assez de parties importées pour tracer la courbe.')));
    return carte;
  }
  const actuel = parties[parties.length - 1].elo;
  const depart = parties[0].elo;   // repère : le classement après la 1re partie connue
  const pic = Math.max(...parties.map(p => p.elo));
  const creux = Math.min(...parties.map(p => p.elo));
  const v = parties.filter(p => p.score === 1).length;
  const n = parties.filter(p => p.score === .5).length;
  const d = parties.filter(p => p.score === 0).length;
  const battus = parties.filter(p => p.score === 1 && p.eloAdv);
  const meilleure = battus.length ? battus.reduce((a, b) => b.eloAdv > a.eloAdv ? b : a) : null;
  const delta = actuel - depart;

  /* en-tête chiffré */
  const chiffre = (val, lib, cls) => el('div', { class: 'elo-chiffre' },
    el('strong', { class: cls || '' }, val), el('span', {}, lib));
  carte.append(el('div', { class: 'elo-haut' },
    chiffre(actuel, tx('après ta dernière partie (') + jourCourt(parties[parties.length - 1].date) + ')'),
    chiffre((delta >= 0 ? '+' : '−') + Math.abs(delta), tx('depuis le ') + jourCourt(parties[0].date), delta >= 0 ? 'up' : 'down'),
    chiffre(pic, tx('record')),
    chiffre(`${v}–${n}–${d}`, tx('victoires · nulles · défaites')),
    meilleure ? chiffre(meilleure.eloAdv, tx('meilleure victoire')) : null));

  /* courbe partie par partie */
  const W = 720, H = 170, L = 46, R = 16, T = 14, B = 26;
  const iw = W - L - R, ih = H - T - B;
  const marge = Math.max(10, Math.round((pic - creux) * .15));
  const lo = creux - marge, hi = pic + marge;
  const X = (i) => parties.length === 1 ? L + iw / 2 : L + i / (parties.length - 1) * iw;
  const Y = (e) => T + ih - (e - lo) / (hi - lo || 1) * ih;
  const svg = svgEl('svg', { class: 'chart', viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': tx('Courbe Elo') });
  for (const e of [lo, Math.round((lo + hi) / 2), hi]) {
    svg.append(svgEl('line', { x1: L, y1: Y(e), x2: W - R, y2: Y(e), class: 'grid' }));
    const t = svgEl('text', { x: L - 8, y: Y(e) + 3.5, 'text-anchor': 'end' });
    t.append(String(Math.round(e))); svg.append(t);
  }
  /* séparateurs de journée + étiquettes */
  let jourPrec = null;
  parties.forEach((p, i) => {
    if (p.date === jourPrec) return;
    if (jourPrec !== null) svg.append(svgEl('line', {
      x1: X(i) - (iw / (parties.length - 1)) / 2, y1: T, x2: X(i) - (iw / (parties.length - 1)) / 2, y2: T + ih,
      stroke: 'var(--line-2)', 'stroke-width': 1, 'stroke-dasharray': '2 3'
    }));
    jourPrec = p.date;
    /* L'étiquette part du premier point de la journée — mais la dernière
       journée commence tout à droite, et « 13 sept. » débordait alors du
       cadre (svg.chart laisse volontairement dépasser). On l'accroche par la
       droite dès qu'elle ne tient plus. */
    const lib = new Date(p.date + 'T12:00:00').toLocaleDateString(I18N.locale, { day: 'numeric', month: 'short' });
    const larg = lib.length * 6.2;
    const droite = X(i) + larg > W - R;
    const t = svgEl('text', {
      x: droite ? W - R : X(i), y: H - 8,
      'text-anchor': droite ? 'end' : 'start',
    });
    t.append(lib);
    svg.append(t);
  });
  svg.append(svgEl('polyline', {
    points: parties.map((p, i) => `${X(i)},${Y(p.elo)}`).join(' '),
    fill: 'none', stroke: 'var(--accent)', 'stroke-width': 2,
    'stroke-linejoin': 'round', 'stroke-linecap': 'round'
  }));
  parties.forEach((p, i) => {
    const c = svgEl('circle', {
      cx: X(i), cy: Y(p.elo), r: 3.6,
      fill: p.score === 1 ? 'var(--accent)' : p.score === 0 ? 'var(--danger)' : 'var(--muted)',
      stroke: 'var(--surface)', 'stroke-width': 1.5, style: 'cursor:pointer'
    });
    const titre = svgEl('title');
    titre.append(`${frDate(p.date)} — ${p.adversaire} (${p.eloAdv || '?'}) · `
      + (p.score === 1 ? tx('victoire') : p.score === 0 ? tx('défaite') : tx('nulle')) + ` → ${p.elo}`);
    c.append(titre);
    c.addEventListener('click', () => ouvrirBilan(p, () => onglet('progression')));
    svg.append(c);
  });
  carte.append(svg);
  carte.append(el('p', { class: 'sous', style: 'margin:8px 0 20px' },
    tx('Un point par partie, dans l’ordre. Vert : gagnée, rouge : perdue. Les pointillés verticaux séparent les journées. Clique un point pour ouvrir le bilan. Le classement affiché est celui d’après la partie : la toute première sert de repère, sa propre variation n’est donc pas comptée.')));

  /* bilan journalier */
  const jours = [];
  for (const p of parties) {
    const j = jours.length && jours[jours.length - 1].date === p.date ? jours[jours.length - 1]
      : (jours.push({ date: p.date, parties: [] }), jours[jours.length - 1]);
    j.parties.push(p);
  }
  const tbl = el('table', {}, el('thead', {}, el('tr', {},
    el('th', {}, tx('Jour')), el('th', {}, tx('Parties')), el('th', {}, tx('Bilan')),
    el('th', {}, tx('Elo en fin de journée')), el('th', {}, tx('Variation')),
    el('th', {}, tx('Elo moyen adverse')))));
  const tb = el('tbody', {});
  for (const j of jours.slice().reverse()) {
    const idx = parties.indexOf(j.parties[0]);
    const avant = idx > 0 ? parties[idx - 1].elo : depart;
    const fin = j.parties[j.parties.length - 1].elo;
    const dv = fin - avant;
    const advs = j.parties.filter(p => p.eloAdv).map(p => p.eloAdv);
    tb.append(el('tr', {},
      el('td', {}, frDate(j.date)),
      el('td', { class: 'n' }, j.parties.length),
      el('td', { class: 'n' }, tx('{0}V {1}N {2}D', [j.parties.filter(p => p.score === 1).length,
        j.parties.filter(p => p.score === .5).length, j.parties.filter(p => p.score === 0).length])),
      el('td', { class: 'n' }, fin),
      el('td', { class: 'n ' + (dv > 0 ? 'up' : dv < 0 ? 'down' : '') },
        (dv > 0 ? '+' : dv < 0 ? '−' : '') + (dv ? Math.abs(dv) : '—')),
      el('td', { class: 'n' }, advs.length ? Math.round(advs.reduce((a, b) => a + b, 0) / advs.length) : '—')));
  }
  tbl.append(tb); carte.append(el('div', { class: 'table-large' }, tbl));
  return carte;
}

/* ---------- progression ---------- */
function vueProgression() {
  const c = $('#progression'); c.innerHTML = '';
  const jours = Object.entries(S.d.jours).sort((a, b) => a[0] < b[0] ? -1 : 1);
  if (jours.length < 1) { c.append(el('div', { class: 'vide' }, tx('Pas encore de données. Importe tes parties.'))); return; }
  c.append(...cartesElo());
  const R = refGlissante(null);
  const D = refDepart() || {};
  const series = [
    { cle: 'tempsCoup', titre: tx('Temps par coup'), unite: 's', ref: D.tempsCoup, sensHaut: true,
      ref2: R ? R.tempsCoup : null },
    { cle: 'gaffes', titre: tx('Gaffes par partie'), unite: '', ref: D.gaffes, sensHaut: false,
      ref2: R ? R.gaffes : null },
    { cle: 'cpl', titre: tx('Perte moyenne par coup'), unite: 'cp', ref: D.cpl, sensHaut: false,
      ref2: R ? R.cpl : null },
    { cle: 'ratioMenaces', titre: tx('Menaces gérées'), unite: '%',
      ref: D.menaces === null || D.menaces === undefined ? null : D.menaces * 100, sensHaut: true,
      ref2: R && R.menaces !== null ? R.menaces * 100 : null },
  ];
  if (R) c.append(el('p', { class: 'sous', style: 'margin:-8px 0 20px', html:
    tx('Trait plein : tes journées. Pointillé gris : ton point de départ (30 jours analysés). ') +
    tx('<span class="rec">Pointillé bleu : ta forme des 30 derniers jours</span> — {0} parties sur {1} jours, recalculée à chaque import.', [R.parties, R.jours]) }));
  for (const s of series) {
    const pts = jours.map(([d, j]) => {
      let v = j[s.cle];
      if (s.cle === 'ratioMenaces') v = j.menaces ? 100 * j.menacesOk / j.menaces : null;
      return { d, v };
    }).filter(p => p.v !== null && p.v !== undefined);
    if (!pts.length) continue;
    c.append(carteSerie(s, pts));
    if (s.cle === 'gaffes') c.append(carteTypesGaffes());   // le détail juste sous la courbe
  }
  if (!c.querySelector('.gtype') && !$('#progression .carte h3')) { /* rien à ajouter */ }
  const t = el('div', { class: 'carte' }, el('h3', {}, tx('Détail par jour')));
  const tbl = el('table', {}, el('thead', {}, el('tr', {},
    el('th', {}, tx('Jour')), el('th', {}, tx('Parties')), el('th', {}, tx('Score')), el('th', {}, tx('Temps')),
    el('th', {}, tx('Gaffes')), el('th', {}, tx('Perte')), el('th', {}, tx('Menaces')), el('th', {}, tx('Gratuites')))));
  const tb = el('tbody', {});
  for (const [d, j] of jours.slice().reverse()) {
    tb.append(el('tr', {},
      el('td', {}, frDate(d)), el('td', { class: 'n' }, j.parties),
      el('td', { class: 'n' }, tx('{0} %', [Math.round(j.score * 100)])),
      el('td', { class: 'n' }, mmss(j.temps || 0)),
      el('td', { class: 'n' }, j.gaffes === null || j.gaffes === undefined ? '—' : j.gaffes.toFixed(2).replace('.', I18N.dec)),
      el('td', { class: 'n' }, j.cpl === null || j.cpl === undefined ? '—' : j.cpl + ' cp'),
      el('td', { class: 'n' }, j.menaces ? tx('{0} %', [Math.round(100 * j.menacesOk / j.menaces)]) : '—'),
      el('td', { class: 'n' }, j.gratuites ? tx('{0} %', [Math.round(100 * j.gratuitesPrises / j.gratuites)]) : '—')));
  }
  tbl.append(tb); t.append(el('div', { class: 'table-large' }, tbl)); c.append(t);
}
function carteSerie(s, pts) {
  const W = 720, H = 150, L = 46, R = 16, T = 14, B = 26;
  const iw = W - L - R, ih = H - T - B;
  const vals = pts.map(p => p.v).concat([s.ref], s.ref2 !== null && s.ref2 !== undefined ? [s.ref2] : []);
  const lo = Math.min(...vals) * .92, hi = Math.max(...vals) * 1.08 || 1;
  const X = (i) => pts.length === 1 ? L + iw / 2 : L + i / (pts.length - 1) * iw;
  const Y = (v) => T + ih - (v - lo) / (hi - lo || 1) * ih;
  const svg = svgEl('svg', { class: 'chart', viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': s.titre });
  for (const v of [lo, (lo + hi) / 2, hi]) {
    svg.append(svgEl('line', { x1: L, y1: Y(v), x2: W - R, y2: Y(v), class: 'grid' }));
    const t = svgEl('text', { x: L - 8, y: Y(v) + 3.5, 'text-anchor': 'end' });
    t.append((hi < 10 ? v.toFixed(1).replace('.', I18N.dec) : Math.round(v)) + (s.unite ? ' ' + s.unite : '')); svg.append(t);
  }
  svg.append(svgEl('line', {
    x1: L, y1: Y(s.ref), x2: W - R, y2: Y(s.ref),
    stroke: 'var(--muted)', 'stroke-dasharray': '4 4', 'stroke-width': 1
  }));
  const tref = svgEl('text', { x: W - R, y: Y(s.ref) - 5, 'text-anchor': 'end' });
  tref.append(tx('départ ') + (s.ref < 10 ? s.ref.toFixed(2).replace('.', I18N.dec) : Math.round(s.ref))); svg.append(tref);
  if (s.ref2 !== null && s.ref2 !== undefined) {
    svg.append(svgEl('line', {
      x1: L, y1: Y(s.ref2), x2: W - R, y2: Y(s.ref2),
      stroke: 'var(--info)', 'stroke-dasharray': '2 3', 'stroke-width': 1.5
    }));
    const t2 = svgEl('text', { x: L + 4, y: Y(s.ref2) - 5, 'text-anchor': 'start', style: 'fill:var(--info)' });
    t2.append(tx('30 derniers jours, aujourd’hui compris : ') + (s.ref2 < 10 ? s.ref2.toFixed(2).replace('.', I18N.dec) : Math.round(s.ref2)));
    svg.append(t2);
  }
  let d = '';
  pts.forEach((p, i) => { d += (i ? 'L' : 'M') + X(i) + ',' + Y(p.v); });
  svg.append(svgEl('path', { d, fill: 'none', stroke: 'var(--accent)', 'stroke-width': 2, 'stroke-linejoin': 'round' }));
  pts.forEach((p, i) => {
    const mieux = s.sensHaut ? p.v >= s.ref : p.v <= s.ref;
    svg.append(svgEl('circle', {
      cx: X(i), cy: Y(p.v), r: 4, fill: mieux ? 'var(--accent)' : 'var(--danger)',
      stroke: 'var(--surface)', 'stroke-width': 2
    }));
  });
  pts.forEach((p, i) => {
    if (i && i !== pts.length - 1 && pts.length > 6) return;
    const t = svgEl('text', { x: X(i), y: H - 8, 'text-anchor': i === 0 ? 'start' : (i === pts.length - 1 ? 'end' : 'middle') });
    t.append(p.d.slice(5)); svg.append(t);
  });
  return el('div', { class: 'carte' }, el('h3', {}, s.titre), svg);
}

/* Filet de sécurité. Les données dépassent les 64 Ko que permet un envoi en
   fermeture de page (sendBeacon) : on enregistre donc dès que la page passe
   en arrière-plan (autre onglet, autre application), et si une écriture est
   encore en attente au moment de fermer, le navigateur demande confirmation. */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && SAUVE.sale) ecrireDonnees();
});
window.addEventListener('pagehide', () => { if (SAUVE.sale) ecrireDonnees(); });
window.addEventListener('beforeunload', (ev) => {
  if (DEGRADE) { try { localStorage.setItem('entraineur', JSON.stringify(S.d)); } catch (e) { } return; }
  if (SAUVE.bloque) return;
  if (SAUVE.enCours || (SAUVE.sale && JSON.stringify(S.d) !== SAUVE.dernier)) {
    ecrireDonnees(); ev.preventDefault(); ev.returnValue = '';
  }
});

/* ========================================================== niveau et premier lancement */
function remplirNiveaux(sel) {
  sel.innerHTML = '';
  for (const [k, n] of Object.entries(NIVEAUX_JOUEUR)) sel.append(el('option', { value: k }, n.nom));
  sel.value = S.d.reglages.niveau || 'debutant';
}
function brancherNiveau() {
  const sel = $('#niveau'); if (!sel) return;
  remplirNiveaux(sel);
  sel.onchange = () => {
    S.d.reglages.niveau = sel.value; sauver();
    /* précision, mats longs et gaffes retenues en dépendent : on redessine */
    majBadges();
    if (S.dernierJour) vueJour(S.dernierJour);
  };
}
/* Aucune donnée et pas de pseudo : on demande l'essentiel une fois. */
function premierLancement() {
  const z = $('#accueil-nouveau'); if (!z) return;
  const importCarte = z.nextElementSibling;   // la carte d'import revient une fois les réglages faits
  z.hidden = false;
  if (importCarte) importCarte.hidden = true;
  remplirNiveaux($('#acc-niveau'));
  const reps = $('#acc-reps'); reps.innerHTML = '';
  for (const r of (window.REPS_INITIAUX || [])) {
    reps.append(el('label', { class: 'acc-rep' },
      el('input', { type: 'checkbox', value: r.id, checked: true }), ` ${tx(r.nom)} (${campNom(r.camp)})`));
  }
  $('#acc-ok').onclick = () => {
    const ps = $('#acc-pseudo').value.trim(), pl = $('#acc-pseudo-lichess').value.trim();
    if (!ps && !pl) { signalerChamp('acc-pseudo', tx('Indique au moins un pseudo : chess.com ou Lichess.')); return; }
    S.d.reglages.pseudo = ps; S.d.reglages.pseudoLichess = pl;
    S.d.reglages.niveau = $('#acc-niveau').value;
    for (const c of $$('#acc-reps input:checked')) ajouterExemple(c.value, true);
    sauver();
    z.hidden = true;
    if (importCarte) importCarte.hidden = false;
    $('#pseudo').value = ps; $('#pseudo-lichess').value = pl;
    $('#niveau').value = S.d.reglages.niveau;
    majBadges();
    $('#btn-import').focus();
  };
  $('#acc-sync').onclick = () => { if (typeof Sync !== 'undefined') Sync.ouvrir(); };
}

/* ========================================================== init */
/* Le texte écrit en dur dans index.html, puis le menu des langues (i18n/). */
function brancherLangue() {
  I18N.traduireDom(document.body);
  document.title = tx(document.title);
  const sel = $('#sel-langue');
  if (!sel) return;
  for (const l of I18N.langues()) sel.append(el('option', { value: l.code, title: l.nom }, l.code.toUpperCase()));
  sel.value = I18N.langue;
  sel.onchange = () => I18N.changer(sel.value);
}

async function init() {
  brancherLangue();
  const bs = $('#btn-son');
  if (bs) { bs.onclick = () => Son.basculer(); majBoutonSon(); }
  if (DEGRADE) $('#bandeau-degrade').hidden = false;
  Chargement.debut(tx('chargement…'));
  await charger();               // les données d'abord : le jeton Lichess y vit
  /* puis ce que l'autre appareil a fait depuis la dernière fois (synchro GitHub) */
  if (typeof Sync !== 'undefined') await Sync.auDemarrage();
  await amorcerLichess();
  /* format des répertoires (versionOuv), voir ouvertures.js */
  migrerOuvertures();
  brancherCreation();
  $('#pseudo').value = S.d.reglages.pseudo || '';
  $('#pseudo-lichess').value = S.d.reglages.pseudoLichess || '';
  for (const id of ['pseudo', 'pseudo-lichess', 'acc-pseudo', 'acc-pseudo-lichess']) {
    const c = $('#' + id); if (c) c.addEventListener('input', () => c.setCustomValidity(''));
  }
  brancherNiveau();
  /* première fois : on importe le dernier mois, pas seulement aujourd'hui */
  const ilYa30 = new Date(); ilYa30.setDate(ilYa30.getDate() - 30);
  $('#depuis').value = Object.keys(S.d.parties).length ? aujourdhui() : iso(ilYa30);
  if (!S.d.reglages.pseudo && !S.d.reglages.pseudoLichess && !Object.keys(S.d.parties).length) premierLancement();
  /* Sans le filtre, le bouton du son recevait aussi ce gestionnaire : un clic
     appelait onglet(undefined), aucun panneau ne correspondait, et la page
     devenait blanche. */
  $$('nav button[data-onglet]').forEach(b => b.addEventListener('click', () => onglet(b.dataset.onglet)));
  $('#btn-import').addEventListener('click', lancerImport);
  $('#btn-stop').addEventListener('click', () => { S.stop = true; S.moteur && S.moteur.arreter(); });
  $('#btn-exo-ouv').addEventListener('click', () => demarrerExos('ouverture'));
  $('#btn-exo-gaffes').addEventListener('click', () => demarrerExos('gaffe'));
  /* Flèches du clavier pour dérouler la gaffe et sa punition. On ne prend la
     main que pendant un exercice, et jamais dans un champ de saisie. */
  document.addEventListener('keydown', (ev) => {
    if (S.drill !== 'exo' || !D || !D.rejeu) return;
    if (!$('#p-entrainement').classList.contains('actif')) return;   // autre onglet
    if (ev.key !== 'ArrowLeft' && ev.key !== 'ArrowRight') return;
    const c = document.activeElement;
    if (c && /^(INPUT|TEXTAREA|SELECT)$/.test(c.tagName)) return;
    ev.preventDefault();
    const r = D.rejeu;
    if (ev.key === 'ArrowRight') allerRejeu(r.actif ? r.pas + 1 : 1);
    else if (r.actif && r.pas === 0) finRejeu();
    else if (r.actif) allerRejeu(r.pas - 1);
  });
  for (const [b, z] of [['#btn-liste-ouv', '#liste-exo-ouv'], ['#btn-liste-gaffes', '#liste-exo-gaffes']]) {
    $(b).addEventListener('click', () => {
      const zone = $(z);
      zone.hidden = !zone.hidden;
      $(b).textContent = zone.hidden ? tx('Voir la liste') : tx('Masquer la liste');
    });
  }
  /* Un seul gestionnaire par bouton : l'entraînement en arbre posait autrefois
     son propre onclick par-dessus celui-ci, et les deux se déclenchaient — d'où
     un indice qui désignait le coup de l'autre camp. */
  $('#btn-indice').addEventListener('click', () => {
    if (S.drill === 'arbre') return indiceArbre();
    /* l'arbre peut se terminer sur une portée vide : dans cet état aucun
       entraînement n'est en cours et les boutons ne doivent rien réveiller */
    if (S.drill === 'exo') return indiceExo();
    if (S.drill === 'quiz-ouv') return QO && QO.ctl && QO.ctl.indice();
  });
  $('#btn-recommencer').addEventListener('click', () => {
    if (S.drill === 'arbre') return demarrerArbre(S.dernierArbre);
    /* On repart de la base, pas de la liste du passage précédent : les
       positions acquises entre-temps n'ont plus à revenir. */
    if (S.drill === 'exo') return demarrerExos(D.typeExo);
    if (S.drill === 'quiz-ouv') { if (QO) clearTimeout(QO.minuteur); return QO && QO.ctl && QO.ctl.recommencer(); }
  });
  $('#btn-quitter').addEventListener('click', () => {
    /* Quitter en cours de route ne coûte rien : tout ce qui est retrouvé est
       déjà enregistré. On le dit, sinon on n'ose pas s'arrêter. */
    const n = (S.drill === 'arbre' && A && A.actees) ? A.actees.size : 0;
    arreterDrill();
    vueEntrainement(n
      ? tx('<strong>{0} position(s) enregistrée(s).</strong> Elles ne reviendront pas aujourd’hui — ', [n])
        + tx('tu peux reprendre le reste quand tu veux.')
      : null);
  });
  const jours = Object.keys(S.d.jours).sort();
  if (jours.length) vueJour(jours[jours.length - 1]);
  migrerJours();
  majBadges();
  Chargement.fin();
  /* La collecte classe les gaffes non encore classées : au premier lancement
     après une mise à jour de la taxinomie, c'est une à deux secondes. On la
     fait après le premier affichage pour ne pas retarder l'ouverture. */
  setTimeout(async () => {
    const aClasser = Object.values(S.d.parties)
      .flatMap(p => (p.moteur && p.moteur.gaffes) || [])
      .filter(g => g._clsV !== VERSION_TAXO).length;
    await Chargement.pendant(aClasser ? tx('classement de {0} gaffes…', [aClasser]) : '', () => {
      collecterExos(); sauver(); majBadges();
    });
  }, 60);
  /* une nouvelle version sur GitHub ? (maj.js) : après l'ouverture, sans la retarder */
  if (typeof Maj !== 'undefined') setTimeout(() => Maj.auDemarrage().catch(e => console.warn('maj', e)), 1500);
}
init().catch(e => { console.error(e); alert(tx('Erreur au démarrage : ') + e.message); });


/* ==========================================================================
   Répertoires en graphe : éditeur et entraînement en arbre. Chaque répertoire
   nommé a son graphe (ouvertures.js) ; l'éditeur travaille sur l'un d'eux.
   ========================================================================== */

/* ---------- explorateur local, construit depuis tes parties importées ---------- */
let _exLocal = null, _exLocalN = -1;
function explorateurLocal() {
  const parties = Object.values(S.d.parties || {});
  if (_exLocal && _exLocalN === parties.length) return _exLocal;
  /* Les parties gardent `sans` sous forme de chaîne (« d4 g6 e4 … ») et la
     couleur en `couleur` w/b. L'explorateur, lui, attend une liste de coups et
     `color` en clair : sans cette conversion il lisait la chaîne caractère par
     caractère, échouait au premier coup, et la source « tes parties » restait
     vide en toutes circonstances. */
  _exLocal = Rep.explorateurLocal(parties.map(p => ({
    sans: typeof p.sans === 'string' ? p.sans.split(/\s+/).filter(Boolean) : (p.sans || p.coups || []),
    color: p.couleur === 'b' ? 'black' : 'white',
    score: p.score,
  })), S.d.reglages.pseudo);
  _exLocalN = parties.length;
  return _exLocal;
}

/* ================================================================ éditeur */
/* rep : le répertoire ouvert ; camp : sa couleur ; vue : le sens de l'échiquier */
const E = { jeu: null, camp: 'w', vue: 'w', rep: null, plateau: null, source: 'lichess', ligne: [] };
const grEd = () => grapheRep(E.rep);

function vueEditeur() {
  if (!E.rep || !repDe(E.rep)) {
    const c = repDe(S.d.repCourant) ? S.d.repCourant : ((listeReps()[0] || {}).id || null);
    if (c !== E.rep) { E.rep = c; E.jeu = new Chess(); E.ligne = []; }
  }
  majChoixRep();
  const r = repDe(E.rep);
  $('#ed-sans-rep').hidden = !!r;
  $('#ed-zone').hidden = !r;
  if (!r) return;
  if (E.camp !== r.camp || !E.vue) { E.camp = r.camp; E.vue = r.camp; }
  if (!E.plateau) {
    E.plateau = new Plateau($('#plateau-edit'));
    if (!E.jeu) { E.jeu = new Chess(); E.ligne = []; }      // ouvrirRepEditeur a pu le placer
    E.plateau.onCoup = (de, vers, m) => ajouterCoupEditeur(de, vers, m);
    $('#ed-debut').onclick = () => { E.jeu = new Chess(); E.ligne = []; dessinerEditeur(); };
    $('#ed-rep-choix').onchange = (ev) => {
      const v = ev.target.value;
      if (v === '__nouveau') { ev.target.value = E.rep || ''; onglet('ouvertures'); ouvrirCreation(); return; }
      ouvrirRepEditeur(v);
    };
    $('#ed-reculer').onclick = () => { E.jeu.undo(); E.ligne.pop(); dessinerEditeur(); };
    $('#ed-avancer').onclick = () => { if (avancerEditeur()) dessinerEditeur(); };
    $('#ed-fin').onclick = () => { if (finDeLigneEditeur()) dessinerEditeur(); };
    $('#ed-graphe-btn').onclick = () => {
      const b2 = $('#ed-graphe');
      b2.hidden = !b2.hidden;
      $('#ed-graphe-btn').textContent = b2.hidden ? tx('Voir le graphe') : tx('Masquer le graphe');
      if (!b2.hidden) {
        dessinerGraphe();
        /* le graphe s'ouvre sous l'échiquier, souvent hors de l'écran */
        requestAnimationFrame(() => b2.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
      }
    };
    $('#ed-tourner').onclick = () => { E.vue = E.vue === 'w' ? 'b' : 'w'; dessinerEditeur(); };
    /* flèches du clavier quand l'éditeur a le focus */
    $('#plateau-edit').addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowLeft') { $('#ed-reculer').click(); ev.preventDefault(); }
      if (ev.key === 'ArrowRight') { $('#ed-avancer').click(); ev.preventDefault(); }
    });
    $('#plateau-edit').tabIndex = 0;
    $('#ed-pgn').onclick = () => exporterRepPgn(E.rep);
    $('#ed-src-lichess').onclick = () => { E.source = 'lichess'; E.echecLichess = null; dessinerEditeur(); };
    $('#ed-src-moi').onclick = () => { E.source = 'moi'; dessinerEditeur(); };
    $('#ed-src-retry').onclick = () => { E.source = 'lichess'; E.echecLichess = null; dessinerEditeur(); };
    brancherImport();
    $('#ed-note').onchange = () => {
      const k = Rep.cle(E.jeu);
      const t = $('#ed-note').value.trim();
      const rr = repDe(E.rep); if (!rr) return;
      rr.notes = rr.notes || {};
      if (t) rr.notes[k] = t; else delete rr.notes[k];
      sauver();
    };
  }
  dessinerEditeur();
}

/* ---------- navigation dans le répertoire ----------
   Le graphe est un DAG : une même position peut être atteinte par plusieurs
   ordres de coups. On appelle « jonction » une position où plusieurs lignes
   se rejoignent, et « embranchement » une position d'où plusieurs coups
   partent. L'avance rapide s'arrête aux deux. */
let _entrantesCache = null;
function entrantesDe(g) {
  if (_entrantesCache && _entrantesCache.g === g) return _entrantesCache.m;
  const m = new Map();
  for (const a of g.aretes) m.set(a.v, (m.get(a.v) || 0) + 1);
  _entrantesCache = { g, m };
  return m;
}
const estJonction = (g, k) => (entrantesDe(g).get(k) || 0) > 1;

function jouerUciEditeur(uci) {
  const m = E.jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
  if (m) E.ligne.push(m.san);          // le fil affiche du SAN, jamais de l'UCI
  return m;
}

function avancerEditeur() {
  const g = grEd();
  const c = g.coupsDe(Rep.cle(E.jeu));
  if (!c.length) return false;
  return !!jouerUciEditeur(c[0].u);
}

/* Avance le long de la ligne principale (la première arête de chaque position,
   c'est-à-dire la plus anciennement enregistrée). On s'arrête au bout de la
   ligne, ou sur une jonction — une position où plusieurs lignes se rejoignent :
   continuer au-delà n'aurait plus de sens, le chemin n'est plus unique. */
function finDeLigneEditeur() {
  const g = grEd();
  let n = 0;
  for (let i = 0; i < 80; i++) {
    const c = g.coupsDe(Rep.cle(E.jeu));
    if (!c.length) break;                       // bout de ligne
    if (!jouerUciEditeur(c[0].u)) break;
    n++;
    if (estJonction(g, Rep.cle(E.jeu))) break;  // on s'arrête sur la jonction
  }
  return n;
}

function majNavEditeur() {
  const g = grEd(), k = Rep.cle(E.jeu);
  const sortantes = g.coupsDe(k);
  const enArriere = E.jeu.history().length > 0;
  $('#ed-debut').disabled = !enArriere;
  $('#ed-reculer').disabled = !enArriere;
  $('#ed-avancer').disabled = !sortantes.length;
  $('#ed-fin').disabled = !sortantes.length;
  const bouts = [];
  if (estJonction(g, k)) bouts.push(tx('jonction : plusieurs lignes arrivent ici'));
  if (sortantes.length > 1) bouts.push(tx('embranchement : {0} suites', [sortantes.length]));
  else if (sortantes.length === 1) bouts.push(tx('une seule suite'));
  else bouts.push(tx('bout de ligne'));
  $('#ed-fin').title = sortantes.length > 1
    ? tx('Suivre la ligne principale jusqu’au bout ou à la première jonction')
    : tx('Aller au bout de la ligne (arrêt à la première jonction)');
  $('#ed-nav-etat').textContent = bouts.join(' · ');
}

/* ---------- le graphe du répertoire ----------
   On dessine une fenêtre : les ancêtres de la position courante, puis tout ce
   qui en descend jusqu'à une profondeur donnée. Dessiner les 500 arêtes d'un
   coup serait illisible. */
function dessinerGraphe() {
  const box = $('#ed-graphe');
  if (!box || box.hidden) return;
  const g = grEd();
  const memeGraphe = E._grapheDessine === g && E._grapheCamp === E.camp;
  E._grapheDessine = g; E._grapheCamp = E.camp;

  /* --- tout le graphe, pas une fenêtre --- */
  const noeuds = new Map();
  const liens = [];
  const K0 = Rep.cle(new Chess());
  const ajouter = (k, d, chemin, san) => {
    const n = noeuds.get(k);
    if (n) { if (d < n.d) { n.d = d; n.chemin = chemin; } return n; }
    const nn = { k, d, chemin, san, enfants: [] };
    noeuds.set(k, nn); return nn;
  };
  ajouter(K0, 0, [], tx('départ'));
  const file = [K0];
  const vus = new Set([K0]);
  while (file.length) {
    const k = file.shift();
    const n = noeuds.get(k);
    for (const a of g.coupsDe(k)) {
      let san = a.u;
      try { const t = Rep.jeuDepuisCle(k); const m = t.move({ from: a.u.slice(0, 2), to: a.u.slice(2, 4), promotion: a.u[4] || 'q' }); if (m) san = m.san; } catch (e) { }
      const nv = ajouter(a.v, n.d + 1, [...n.chemin, a.u], san);
      liens.push({ de: n, vers: nv });
      if (!vus.has(a.v)) { vus.add(a.v); file.push(a.v); }
    }
  }
  for (const l of liens) if (l.vers.d > l.de.d) l.de.enfants.push(l.vers);

  /* --- placement : une ligne par feuille, parents centrés --- */
  let rang = 0;
  const y = new Map();
  const placer = (n, pile) => {
    if (y.has(n.k)) return y.get(n.k);
    if (pile.has(n.k)) return rang;
    pile.add(n.k);
    const enf = n.enfants.filter(e => e.d > n.d);
    const v = enf.length
      ? enf.map(e => placer(e, pile)).reduce((a, b) => a + b, 0) / enf.length
      : rang++;
    pile.delete(n.k);
    y.set(n.k, v); return v;
  };
  placer(noeuds.get(K0), new Set());
  for (const n of noeuds.values()) if (!y.has(n.k)) y.set(n.k, rang++);

  const LX = 132, LY = 40, MX = 18, MY = 40, LARG = 100, HAUT = 28;
  const maxD = Math.max(0, ...[...noeuds.values()].map(n => n.d));
  const W = MX * 2 + (maxD + 1) * LX, H = MY * 2 + (rang + 1) * LY;

  /* position courante et sa colonne vertébrale */
  const kc = Rep.cle(E.jeu);
  const courant = noeuds.get(kc) || null;
  const spine = new Set();
  if (courant) {
    const jj = new Chess(); spine.add(Rep.cle(jj));
    for (const u of courant.chemin) {
      jj.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' });
      spine.add(Rep.cle(jj));
    }
  }

  /* --- barre d'outils --- */
  box.innerHTML = '';
  const zoomTxt = el('span', { class: 'sous', style: 'margin:0;min-width:52px;text-align:right' });
  const outils = el('div', { class: 'barre-outils' },
    el('button', { class: 'b g', onclick: () => zoomer(-0.2) }, '−'),
    el('button', { class: 'b g', onclick: () => zoomer(0.2) }, '+'),
    el('button', { class: 'b g', onclick: () => ajuster() }, tx('Tout voir')),
    el('button', { class: 'b g', onclick: () => centrerSurCourant(true) }, tx('Ma position')),
    zoomTxt,
    el('span', { class: 'legende', style: 'margin-left:14px' },
      el('i', { class: 'legende-pastille' }), tx('coup blanc'),
      el('i', { class: 'legende-pastille noir', style: 'margin-left:8px' }), tx('coup noir'),
      el('i', { class: 'legende-pastille alerte', style: 'margin-left:8px' }), tx('plusieurs coups à toi')),
    el('button', { class: 'b g', style: 'margin-left:auto', onclick: () => {
      box.classList.toggle('plein'); dessinerGraphe();
    } }, box.classList.contains('plein') ? tx('Réduire') : tx('Agrandir')),
    el('span', { class: 'sous', style: 'margin:0' },
      tx('{0} positions · {1} coups · répertoire {2}', [noeuds.size, g.nbCoups, E.camp === 'w' ? tx('blanc') : tx('noir')])));
  box.append(outils);

  const vue = el('div', { class: 'graphe-vue' });
  const svg = svgEl('svg', { class: 'graphe', width: W, height: H, viewBox: `0 0 ${W} ${H}` });
  const X = (n) => MX + n.d * LX, Y = (n) => MY + y.get(n.k) * LY;

  for (const d of new Set([...noeuds.values()].map(n => n.d))) {
    const t = svgEl('text', { x: MX + d * LX + LARG / 2, y: 20, 'text-anchor': 'middle', class: 'prof' });
    t.append(d === 0 ? tx('départ') : `${Math.ceil(d / 2)}${d % 2 ? '.' : '…'}`);
    svg.append(t);
  }
  for (const l of liens) {
    const x1 = X(l.de) + LARG, y1 = Y(l.de) + HAUT / 2;
    const x2 = X(l.vers), y2 = Y(l.vers) + HAUT / 2;
    const mx = (x1 + x2) / 2;
    const surSpine = spine.has(l.de.k) && spine.has(l.vers.k);
    svg.append(svgEl('path', {
      d: `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`,
      class: 'lien' + (surSpine ? ' spine' : ''),
    }));
  }
  const monCamp = E.camp;
  for (const n of noeuds.values()) {
    const sortantes = g.coupsDe(n.k);
    const aMoi = Rep.traitDe(n.k) === monCamp;
    const cls = ['noeud'];
    if (n.d > 0 && n.d % 2 === 0) cls.push('noir');
    if (courant && n.k === courant.k) cls.push('courant');
    else if (spine.has(n.k)) cls.push('spine');
    if (estJonction(g, n.k)) cls.push('jonction');
    if (!sortantes.length) cls.push('feuille');
    /* ton répertoire prévoit UN coup par position à toi : plusieurs = à trancher */
    if (aMoi && sortantes.length > 1) cls.push('alerte');
    const gr = svgEl('g', { class: cls.join(' '), 'data-k': n.k });
    gr.append(svgEl('rect', { x: X(n), y: Y(n), width: LARG, height: HAUT }));
    const t = svgEl('text', { x: X(n) + LARG / 2, y: Y(n) + HAUT / 2 + 1, 'text-anchor': 'middle' });
    t.append(fr(n.san).slice(0, 11)); gr.append(t);
    const ti = svgEl('title');
    ti.append(`${fr(n.san)} · ${n.d === 0 ? tx('départ') : tx('coup {0}', [Math.ceil(n.d / 2)])}`
      + (estJonction(g, n.k) ? tx(' · jonction') : '')
      + (aMoi && sortantes.length > 1 ? tx(' · {0} coups à toi ici, il n’en faut qu’un', [sortantes.length]) : '')
      + (sortantes.length ? tx(' · {0} suite(s)', [sortantes.length]) : tx(' · bout de ligne')));
    gr.append(ti);
    gr.addEventListener('click', () => allerAuNoeud(n.chemin));
    svg.append(gr);
  }
  vue.append(svg); box.append(vue);

  /* --- zoom et déplacement --- */
  if (!memeGraphe || !E.zoom) E.zoom = null;
  const appliquer = () => {
    svg.style.width = Math.round(W * E.zoom) + 'px';
    svg.style.height = Math.round(H * E.zoom) + 'px';
    zoomTxt.textContent = tx('{0} %', [Math.round(E.zoom * 100)]);
  };
  const zoomer = (d, ancre) => {
    const av = E.zoom;
    E.zoom = Math.max(0.15, Math.min(2, +(E.zoom + d).toFixed(2)));
    const r = E.zoom / av;
    const cx = ancre ? ancre.x : vue.clientWidth / 2, cy = ancre ? ancre.y : vue.clientHeight / 2;
    appliquer();
    vue.scrollLeft = (vue.scrollLeft + cx) * r - cx;
    vue.scrollTop = (vue.scrollTop + cy) * r - cy;
  };
  const ajuster = () => {
    E.zoom = Math.max(0.15, Math.min(1, (vue.clientWidth - 8) / W, (vue.clientHeight - 8) / H));
    appliquer(); vue.scrollLeft = 0; vue.scrollTop = 0;
  };
  const centrerSurCourant = (zoomAuto) => {
    if (!courant) return;
    if (zoomAuto) { E.zoom = Math.min(1, Math.max(E.zoom, 0.7)); appliquer(); }
    vue.scrollLeft = Math.max(0, (X(courant) + LARG / 2) * E.zoom - vue.clientWidth / 2);
    vue.scrollTop = Math.max(0, (Y(courant) + HAUT / 2) * E.zoom - vue.clientHeight / 2);
  };
  if (E.zoom === null) E.zoom = Math.max(0.3, Math.min(1, (vue.clientWidth - 8) / W));
  appliquer();

  /* glisser pour déplacer */
  let tire = null;
  vue.addEventListener('pointerdown', (ev) => {
    if (ev.target.closest('g.noeud')) return;
    tire = { x: ev.clientX, y: ev.clientY, sl: vue.scrollLeft, st: vue.scrollTop };
    vue.setPointerCapture(ev.pointerId); vue.classList.add('tire');
  });
  vue.addEventListener('pointermove', (ev) => {
    if (!tire) return;
    vue.scrollLeft = tire.sl - (ev.clientX - tire.x);
    vue.scrollTop = tire.st - (ev.clientY - tire.y);
  });
  const lacher = () => { tire = null; vue.classList.remove('tire'); };
  vue.addEventListener('pointerup', lacher);
  vue.addEventListener('pointercancel', lacher);
  vue.addEventListener('wheel', (ev) => {
    if (!ev.ctrlKey && !ev.metaKey) return;
    ev.preventDefault();
    const r = vue.getBoundingClientRect();
    zoomer(ev.deltaY < 0 ? 0.12 : -0.12, { x: ev.clientX - r.left, y: ev.clientY - r.top });
  }, { passive: false });

  if (noeuds.size <= 1) {
    box.append(el('div', { class: 'vide' },
      tx('Ce répertoire est vide : joue des coups sur l’échiquier pour le construire.')));
    return;
  }
  centrerSurCourant(false);
}

/* Téléportation : on rejoue le chemin depuis le départ. */
function allerAuNoeud(chemin) {
  E.jeu = new Chess(); E.ligne = [];
  for (const u of chemin) if (!jouerUciEditeur(u)) break;
  dessinerEditeur();
}

function ajouterCoupEditeur(de, vers, m) {
  const uci = de + vers + (m && m.promotion ? m.promotion : '');
  const a = Rep.fabriquerArete(E.jeu, uci, Date.now());
  if (!a) return;
  const etaitAMoi = E.jeu.turn() === E.camp;
  const dejaLa = !!grEd().trouver(a.d, a.u);
  const freres = grEd().coupsDe(a.d).length;
  if (!dejaLa) majGrapheRep(E.rep, grEd().avec(a));
  const mj = E.jeu.move({ from: de, to: vers, promotion: uci[4] || 'q' });
  if (typeof Son !== 'undefined') Son.pourCoup(mj);
  E.ligne.push(a.s);
  /* Le message « coup ajouté » ne vaut que pour la position d'arrivée : dès
     qu'on navigue ailleurs, il disparaît (voir dessinerEditeur). */
  E.dernierAjout = dejaLa ? null : { aMoi: etaitAMoi, freres, ou: Rep.cle(E.jeu) };
  dessinerEditeur();
}

function supprimerCoupEditeur(uci, bouton) {
  const k = Rep.cle(E.jeu);
  const aSupprimer = grEd().suppressionPour(k, uci);
  if (!aSupprimer.length) return;
  const n = aSupprimer.length;
  if (n > 1 && bouton && bouton.dataset.arme !== '1') {
    bouton.dataset.arme = '1';
    bouton.textContent = tx('supprimer {0} coups ?', [n]);
    bouton.style.fontSize = '11px';
    setTimeout(() => { if (bouton.isConnected) { bouton.dataset.arme = ''; bouton.textContent = '×'; bouton.style.fontSize = ''; } }, 4000);
    return;
  }
  /* Supprimer un coup emporte tout ce qui devient inatteignable : à la racine
     cela peut faire des centaines d'arêtes. On garde de quoi revenir en arrière. */
  E.annuler = { rep: E.rep, aretes: aSupprimer, quand: Date.now() };
  majGrapheRep(E.rep, grEd().sans(aSupprimer));
  dessinerEditeur();
}

function annulerSuppression() {
  const a = E.annuler;
  if (!a) return;
  const g = grapheRep(a.rep);
  majGrapheRep(a.rep, new Rep.Graphe([...g.aretes, ...a.aretes]));
  E.annuler = null;
  dessinerEditeur();
}

function dessinerEditeur() {
  const jeu = E.jeu, k = Rep.cle(jeu);
  E.plateau.position(jeu.fen(), E.vue || E.camp);
  const dernier = jeu.history({ verbose: true }).slice(-1)[0];
  E.plateau.persistantes = dernier ? { [dernier.from]: 'dernier', [dernier.to]: 'dernier' } : {};
  E.plateau.marquer(E.plateau.persistantes);

  /* fil de la ligne, cliquable pour revenir en arrière */
  const f = $('#ed-fil'); f.innerHTML = '';
  f.append(el('span', { class: 'att', style: 'cursor:pointer', onclick: () => { E.jeu = new Chess(); E.ligne = []; dessinerEditeur(); } }, tx('début')));
  E.ligne.forEach((san, i) => f.append(el('span', {
    class: 'ok', style: 'cursor:pointer',
    onclick: () => { const l = E.ligne.slice(0, i + 1); E.jeu = new Chess(); l.forEach(s => E.jeu.move(s)); E.ligne = l; dessinerEditeur(); },
  }, (i % 2 === 0 ? `${i / 2 + 1}.` : '') + fr(san))));

  /* en-tête */
  const g = grEd();
  const tot = g.nbCoups, mesP = g.mesPositions(E.camp).size;
  $('#ed-entete').innerHTML = '';
  $('#ed-entete').append(
    el('span', { class: 'tag grn' }, tx('{0} · {1}', [(repDe(E.rep) || {}).nom || tx('répertoire'), campNom(E.camp)])),
    el('span', { class: 'tag' }, tx('{0} coups', [tot])),
    el('span', { class: 'tag' }, tx('{0} positions à savoir', [mesP])),
    el('span', { class: 'tag ' + (Rep.traitDe(k) === E.camp ? 'grn' : '') },
      Rep.traitDe(k) === E.camp ? tx('à toi de jouer') : tx('coup de l’adversaire')));

  /* mes coups ici */
  /* Un répertoire, c'est : ton coup (un seul), puis toutes les réponses
     adverses que tu veux préparer, et ainsi de suite. L'affichage dit donc
     des choses différentes selon le trait. */
  const aMoi = E.jeu.turn() === E.camp;
  const mi = $('#ed-miens'); mi.innerHTML = '';
  const miens = g.coupsDe(k);
  $('#ed-miens-titre').textContent = aMoi
    ? tx('Ton coup dans cette position')
    : tx('Réponses de l’adversaire ({0})', [miens.length]);
  $('#ed-miens-aide').innerHTML = aMoi
    ? (miens.length > 1
      ? tx('<strong class="alerte-txt">{0} coups à toi ici.</strong> Un répertoire prévoit ', [miens.length])
        + tx('un seul coup par position à toi. Si tu joues les deux, garde-les ; sinon supprime celui que tu ne joues plus.')
      : tx('Un seul coup à toi par position. Joue-le sur l’échiquier pour le définir')
        + (miens.length ? tx(', ou clique dessus pour avancer.') : '.'))
    : tx('Prépare autant de réponses adverses que tu veux affronter. Joue-les une par une sur l’échiquier — après chaque ajout, reviens ici pour la suivante.');
  if (!miens.length) mi.append(el('div', { class: 'vide' },
    aMoi ? tx('Aucun coup à toi ici. Joue-le sur l’échiquier.')
      : tx('Aucune réponse adverse préparée. Joue-en une sur l’échiquier.')));
  miens.forEach((a, i) => {
    mi.append(el('div', { class: 'cp' + (i === 0 ? ' principal' : ''), onclick: (ev) => {
      if (ev.target.classList.contains('sup')) return;
      const mj = E.jeu.move(a.s); if (typeof Son !== 'undefined') Son.pourCoup(mj);
      E.ligne.push(a.s); dessinerEditeur();
    } },
      el('span', { class: 'san' }, fr(a.s)),
      el('span', { class: 'chiffre' }, aMoi ? (i === 0 ? tx('ton coup') : tx('à trancher')) : tx('réponse {0}', [i + 1])),
      el('span', { class: 'chiffre' }, tx('{0} pos.', [g.atteignablesDepuis(a.v).size])),
      el('button', { class: 'sup', title: tx('Supprimer ce coup'), onclick: (ev) => { ev.stopPropagation(); supprimerCoupEditeur(a.u, ev.target); } }, '×')));
  });

  /* note */
  $('#ed-note').value = ((repDe(E.rep) || {}).notes || {})[k] || '';

  /* que faire juste après un ajout ou une suppression */
  const zoneAjout = $('#ed-apres-ajout');
  if (zoneAjout) {
    zoneAjout.innerHTML = ''; zoneAjout.hidden = true;
    if (E.annuler && Date.now() - E.annuler.quand < 120000) {
      const n = E.annuler.aretes.length;
      zoneAjout.hidden = false;
      zoneAjout.append(el('div', { class: 'msg' },
        el('p', { style: 'margin:0' },
          tx('{0} coup(s) supprimé(s) du répertoire « {1} ».', [n, (repDe(E.annuler.rep) || {}).nom || ''])),
        el('div', { class: 'ligne-ctrl', style: 'margin-top:9px' },
          el('button', { class: 'b', onclick: () => annulerSuppression() }, tx('Annuler la suppression')),
          el('button', { class: 'b g', onclick: () => { E.annuler = null; dessinerEditeur(); } }, tx('C’est voulu')))));
    } else if (E.dernierAjout && E.dernierAjout.ou !== Rep.cle(E.jeu)) {
      E.dernierAjout = null;
    } else if (E.dernierAjout) {
      const { aMoi, freres } = E.dernierAjout;
      zoneAjout.hidden = false;
      zoneAjout.append(el('div', { class: 'msg ok' },
        el('p', { style: 'margin:0', html: aMoi
          ? (freres >= 1
            ? tx('<strong>Attention :</strong> tu avais déjà un coup à toi dans la position précédente. Un répertoire n’en prévoit qu’un — reviens en arrière pour trancher.')
            : tx('Coup ajouté. À l’adversaire de répondre : prépare ses réponses une par une.'))
          : tx('Réponse ajoutée. Tu peux en préparer d’autres dans la même position.') }),
        el('div', { class: 'ligne-ctrl', style: 'margin-top:9px' },
          el('button', { class: 'b', onclick: () => {
            E.jeu.undo(); E.ligne.pop(); E.dernierAjout = null; dessinerEditeur();
          } }, aMoi ? tx('← Revenir à la position précédente') : tx('← Ajouter une autre réponse ici')),
          el('button', { class: 'b g', onclick: () => { E.dernierAjout = null; dessinerEditeur(); } }, tx('Continuer')))));
    }
  }

  /* navigation et graphe */
  majNavEditeur();
  dessinerGraphe();

  majBlocLichess();
  if (S.msgLichess) {
    $('#ed-lichess').append(el('p', { class: 'sous', style: 'flex-basis:100%;margin:6px 0 0' }, S.msgLichess));
    S.msgLichess = null;
  }

  /* explorateur */
  $('#ed-src-lichess').classList.toggle('actif', E.source === 'lichess');
  $('#ed-src-moi').classList.toggle('actif', E.source === 'moi');
  $('#ed-src-retry').hidden = !E.echecLichess;
  remplirExplorateur(k);
  remplirStockfish(k);
}

function ligneCoup(san, uci, blancs, nulles, noirs, extra) {
  const tot = blancs + nulles + noirs || 1;
  const pc = (x) => (x / tot * 100).toFixed(0) + '%';
  /* Un coup déjà dans ton répertoire se repère au premier coup d'œil : c'est
     l'information la plus utile quand on lit une liste de coups populaires. */
  const k = Rep.cle(E.jeu);
  const connu = !!grEd().trouver(k, uci);
  const aMoi = E.jeu.turn() === E.camp;
  return el('div', { class: 'cp' + (connu ? ' connu' : ''), onclick: () => {
    const m = E.jeu.moves({ verbose: true }).find(x => (x.from + x.to + (x.promotion || '')) === uci || x.san === san);
    if (m) ajouterCoupEditeur(m.from, m.to, m);
  } },
    el('span', { class: 'coche' }, connu ? '✓' : ''),
    el('span', { class: 'san' }, fr(san)),
    el('span', { class: 'barre' },
      el('i', { class: 'b', style: `width:${pc(blancs)}` }),
      el('i', { class: 'n', style: `width:${pc(nulles)}` }),
      el('i', { class: 'no', style: `width:${pc(noirs)}` })),
    el('span', { class: 'chiffre' }, extra || tx('{0} parties', [tot.toLocaleString(I18N.locale)])),
    el('span', { class: 'tag ' + (connu ? 'grn' : '') },
      connu ? tx('dans ton répertoire') : (aMoi ? tx('en faire ton coup') : tx('préparer'))));
}

/* ---------- connexion Lichess ----------
   L'explorateur d'ouvertures répond 401 sans jeton depuis peu. On propose la
   même connexion que l'application Android : OAuth PKCE, sans scope, le jeton
   ne quitte pas ce navigateur. */
function majBlocLichess() {
  const box = $('#ed-lichess');
  if (!box) return;
  box.innerHTML = '';
  const obstacle = Lichess.obstacle();
  if (Lichess.connecte()) {
    const nom = Lichess.pseudo();
    box.append(
      el('span', { class: 'tag grn' }, tx('connecté')),
      el('span', { class: 'sous' }, nom ? tx('Lichess : {0}', [nom]) : 'Lichess'),
      el('button', { class: 'b g', onclick: async () => {
        await Lichess.deconnecter(); majBlocLichess(); dessinerEditeur();
      } }, tx('Se déconnecter')));
    return;
  }
  box.append(el('span', { class: 'tag' }, tx('hors ligne')));
  if (obstacle) {
    box.append(el('span', { class: 'sous' }, obstacle));
    return;
  }
  box.append(
    el('span', { class: 'sous' }, tx('L’explorateur Lichess demande une connexion depuis peu.')),
    el('button', { class: 'b', onclick: async () => {
      try { await Lichess.connecter(); }
      catch (e) { $('#ed-lichess').append(el('p', { class: 'sous' }, e.message)); }
    } }, tx('Se connecter à Lichess')));
}

async function amorcerLichess() {
  if (typeof Lichess === 'undefined') return;
  Lichess.reprendre();           // reprend un jeton laissé par le navigateur
  let r = null;
  try { r = await Lichess.finirConnexion(); } catch (e) { r = { ok: false, message: e.message }; }
  if (r) {
    S.msgLichess = r.ok
      ? tx('Connecté à Lichess{0}. L’explorateur est de nouveau disponible.', [r.pseudo ? ' (' + r.pseudo + ')' : ''])
      : r.message;
    if (r.ok) { onglet('editeur'); }
  } else if (Lichess.connecte() && !Lichess.pseudo()) {
    Lichess.rafraichirPseudo().then(majBlocLichess);
  }
}

async function remplirExplorateur(k) {
  const box = $('#ed-explorateur'); box.innerHTML = '';
  if (E.source === 'moi') {
    const cps = explorateurLocal().coups(k);
    if (!cps.length) { box.append(el('div', { class: 'vide' }, tx('Tu n’as jamais joué cette position.'))); return; }
    for (const c of cps) {
      const v = Math.round(c.score * c.n), d = c.n - v;
      box.append(ligneCoup(c.san, c.uci, v, 0, d, tx('{0} partie(s) · {1} % de score', [c.n, Math.round(c.score * 100)])));
    }
    return;
  }
  /* Sans jeton, l'explorateur répond 401 à tous les coups : inutile de lancer
     la requête pour afficher ensuite un encadré rouge « injoignable », qui
     laisse croire à une panne alors qu'il suffit de se connecter. */
  if (!Lichess.connecte() && !E.forcerLichess) {
    box.append(el('div', { class: 'msg', style: 'margin:0 0 12px' },
      el('strong', {}, tx('Explorateur Lichess : connexion requise')),
      el('p', { class: 'sous', style: 'margin:6px 0 0' },
        Lichess.obstacle() || tx('Lichess demande désormais une connexion pour consulter sa base de parties. Le bouton « Se connecter à Lichess » plus haut suffit : aucun droit n’est demandé sur ton compte, seulement la lecture de données publiques.')),
      el('div', { class: 'ligne-ctrl', style: 'margin-top:10px' },
        el('button', { class: 'b g', onclick: () => { E.forcerLichess = true; dessinerEditeur(); } },
          tx('Essayer quand même')))));
    const cps0 = explorateurLocal().coups(k);
    box.append(el('p', { class: 'sous', style: 'margin:0 0 8px' },
      cps0.length ? tx('En attendant, voici tes propres parties dans cette position :')
        : tx('Tu n’as jamais joué cette position, donc rien à afficher depuis tes parties non plus.')));
    for (const c of cps0) {
      const v = Math.round(c.score * c.n), d = c.n - v;
      box.append(ligneCoup(c.san, c.uci, v, 0, d, tx('{0} partie(s) · {1} % de score', [c.n, Math.round(c.score * 100)])));
    }
    return;
  }
  box.append(el('div', { class: 'vide' }, tx('Chargement de l’explorateur Lichess…')));
  const ucis = E.jeu.history({ verbose: true }).map(m => m.from + m.to + (m.promotion || ''));
  try {
    const r = await Rep.explorateurLichess(ucis, { token: Lichess.token() });
    if (Rep.cle(E.jeu) !== k) return;                     // la position a changé
    box.innerHTML = '';
    if (r.ouverture) box.append(el('p', { class: 'sous', style: 'margin:0 0 8px' }, r.ouverture));
    if (!r.coups.length) { box.append(el('div', { class: 'vide' }, tx('Aucune partie dans la base pour cette position.'))); return; }
    for (const c of r.coups.slice(0, 10)) box.append(ligneCoup(c.san, c.uci, c.blancs, c.nulles, c.noirs));
  } catch (e) {
    if (Rep.cle(E.jeu) !== k) return;
    /* jeton refusé : il ne sert plus à rien, on l'oublie pour reproposer
       la connexion plutôt que de rejouer indéfiniment le même échec */
    if (e.statut === 401 && Lichess.connecte()) { Lichess.invalider(); majBlocLichess(); }
    E.echecLichess = e;
    $('#ed-src-retry').hidden = false;
    box.innerHTML = '';
    box.append(el('div', { class: 'msg ko', style: 'margin:0 0 12px' },
      el('strong', {}, tx('Explorateur Lichess injoignable')),
      el('p', { class: 'sous', style: 'margin:6px 0 0' }, causeLichess(e)),
      el('div', { class: 'ligne-ctrl', style: 'margin-top:10px' },
        el('button', { class: 'b g', onclick: () => { E.echecLichess = null; dessinerEditeur(); } }, tx('Réessayer')))));
    /* on bascule vraiment, au lieu de le suggérer */
    const cps = explorateurLocal().coups(k);
    box.append(el('p', { class: 'sous', style: 'margin:0 0 8px' },
      cps.length ? tx('En attendant, voici tes propres parties dans cette position :')
        : tx('Tu n’as jamais joué cette position, donc rien à afficher depuis tes parties non plus.')));
    for (const c of cps) {
      const v = Math.round(c.score * c.n), d = c.n - v;
      box.append(ligneCoup(c.san, c.uci, v, 0, d, tx('{0} partie(s) · {1} % de score', [c.n, Math.round(c.score * 100)])));
    }
  }
}

/* Traduire l'échec en une cause lisible. L'explorateur était public ; il
   réclame désormais un jeton, d'où le 401 quand on interroge sans être
   connecté. Le 403, lui, vient bien d'entre le navigateur et Lichess. */
function causeLichess(e) {
  if (e.statut === 429) return tx('Trop de requêtes d’un coup : Lichess limite le débit. Attends une minute puis réessaie.');
  if (e.statut === 401) return Lichess.connecte()
    ? tx('Réponse 401 : ton jeton Lichess a été refusé (expiré ou révoqué). Reconnecte-toi avec le bouton ci-dessus.')
    : tx('Réponse 401 : l’explorateur Lichess demande une connexion. Le bouton « Se connecter à Lichess » ci-dessus règle ça — aucun droit n’est demandé sur ton compte, seulement la lecture de données publiques.');
  if (e.statut === 403) return tx('Réponse 403 : accès refusé. Un VPN, un filtrage réseau ou une extension du navigateur bloque probablement la requête.');
  if (e.statut >= 500) return tx('Réponse {0} : panne côté Lichess. Rien à faire de ton côté, réessaie plus tard.', [e.statut]);
  if (e.statut) return tx('Réponse HTTP {0}.', [e.statut]);
  if (e.abandon) return tx('Pas de réponse en 8 secondes. Connexion lente ou explorateur surchargé.');
  return tx('La requête n’a même pas abouti : pas de réseau, DNS bloqué, ou requête coupée par une extension.');
}

/* ============================================ entraînement en arbre */
let A = null;
window.A = null;

function demarrerArbre(opts) {
  arreterDrill();
  const o = opts || S.dernierArbre || {};
  const r = repDe(o.rep) || listeReps()[0];
  if (!r) {
    const p0 = boiteDrill(tx('Entraînement'), '');
    msg(tx('Aucun répertoire : crée-en un dans l’onglet Ouvertures.'), 'info');
    p0.position(new Chess().fen(), 'w'); p0.onCoup = null;
    S.drill = 'arbre-vide';
    return;
  }
  S.dernierArbre = Object.assign({}, o, { rep: r.id });
  const g = grapheRep(r.id), camp = r.camp;
  const nomPortee = o.portee || 'tout';
  let portee, ligneDepart = [], titre;
  if (nomPortee === 'depuis' && o.depuis) {
    /* depuis une position (un écart de tes parties) : on y va par le chemin
       le plus court, puis tout ce qui suit dans le répertoire */
    const ch = g.cheminVers(o.depuis);
    portee = ch ? Rep.portees.sousArbre(g, camp, o.depuis) : new Set();
    ligneDepart = ch ? ch.map(a => a.u) : [];
    titre = tx('{0} — depuis la position de ta partie', [r.nom]);
  } else if (nomPortee === 'erreurs') {
    portee = Rep.portees.erreurs(g, camp, new Set(r.ratees || []));
    titre = tx('{0} — tes positions ratées', [r.nom]);
  } else if (nomPortee === 'dues') {
    portee = Rep.portees.dues(g, camp, r.srs || {}, Date.now());
    titre = tx('{0} — ce qui est dû', [r.nom]);
  } else {
    portee = Rep.portees.tout(g, camp);
    titre = tx('{0} — tout le répertoire', [r.nom]);
  }
  /* profondeur choisie dans le bloc Entraînement (pas pour « depuis une
     position » : là, c'est la suite de ta partie qui compte) */
  const prof = nomPortee === 'depuis' ? 0 : (o.prof !== undefined ? o.prof : profRevision(r.id));
  if (prof) {
    portee = Rep.portees.jusquA(g, camp, portee, prof);
    titre += tx(' · jusqu’à ton {0} coup', [ordinal(prof)]);
  }
  lancerArbre({ g, camp, portee, ligneDepart, titre, rep: r.id, vide: nomPortee === 'erreurs'
    ? tx('Aucune position ratée dans ce répertoire : tu n’as rien raté depuis la dernière révision.')
    : nomPortee === 'dues'
    ? tx('Rien à réviser aujourd’hui : tout est à jour. Choisis « Tout le répertoire » pour travailler quand même.')
    : nomPortee === 'depuis'
    ? tx('Cette position n’est plus dans le répertoire (modifié depuis ?).')
    : tx('Ce répertoire est vide : ajoute des coups dans l’éditeur.') });
}

/* Démarrage commun à tous les entraînements en arbre : la portée change, le
   reste non. */
function lancerArbre({ g, camp, portee, ligneDepart = [], titre, sous, vide, rep = null }) {
  if (!portee.size) {
    const p0 = boiteDrill(titre, '');
    msg(vide || tx('Rien à travailler dans cette sélection.'), 'info');
    p0.position(new Chess().fen(), camp); p0.onCoup = null;
    S.drill = 'arbre-vide';
    return false;
  }
  const p = boiteDrill(titre, sous
    || tx('{0} position(s) à retrouver — {1}', [portee.size, camp === 'w' ? tx('tu joues les blancs') : tx('tu joues les noirs')]));
  A = { moteur: new Rep.Moteur({ graphe: g, camp, portee, ligneDepart }), camp, portee, joues: [], etats: [],
    actees: new Set(), g, rep };
  window.A = A;
  D = D || {}; D.plateau = p;
  p.onCoup = coupArbre;
  S.drill = 'arbre';
  avancerArbre();
  return true;
}

/* Un seul pas d'avance programmé à la fois : un coup joué pendant que le coup
   adverse s'anime ne doit pas lancer deux avancées en parallèle (le fil des
   coups se décalait de l'échiquier). */
function planifierArbre(ms) {
  if (!A) return;
  const a = A;
  clearTimeout(a.minuteur);
  a.minuteur = setTimeout(() => { if (A === a) avancerArbre(); }, ms);
}

function avancerArbre() {
  if (!A || A.anim) return;
  clearTimeout(A.minuteur);
  const p = D.plateau, s = A.moteur.suivant();
  if (s.type === 'coup') {
    A.joues.push(s.san); A.etats.push('att'); fil(A.joues, A.etats);
    const j = new Chess(s.avant);
    const m = j.move({ from: s.uci.slice(0, 2), to: s.uci.slice(2, 4), promotion: s.uci[4] || 'q' });
    p.animerVers(s.apres, m, A.camp);
    planifierArbre(380);
    return;
  }
  if (s.type === 'saut' && A.moteur.attente && A.moteur.attente.fen === s.fen) {
    /* Position où tu as plusieurs coups : tu viens d'en trouver un, on revient
       sur la même position sans rejouer toute la partie. */
    const a = A;
    a.joues.pop(); a.etats.pop(); fil(a.joues, a.etats);
    a.anim = true;
    setTimeout(() => {
      if (A !== a) return;
      a.anim = false;
      p.position(s.fen, a.camp);
      avancerArbre();
    }, 700);
    return;
  }
  if (s.type === 'saut') {
    /* Ligne terminée : on revient à la dernière bifurcation qui a encore une
       branche à voir. La partie est rejouée depuis le début, coup par coup,
       pour que tu voies tout le chemin jusqu'à l'embranchement. */
    rejouerJusqua(s);
    return;
  }
  if (s.type === 'attente') {
    p.position(s.fen, A.camp);
    if (s.uci) { p.persistantes = { [s.uci.slice(0, 2)]: 'dernier', [s.uci.slice(2, 4)]: 'dernier' }; p.marquer(p.persistantes); }
    const reste = s.total - s.trouves;
    msg(s.total > 1
      ? tx('À toi : <strong>{0}</strong> coup(s) à retrouver sur {1} dans cette position.', [reste, s.total])
      : tx('À toi de jouer.'), '');
    const note = ((repDe(A.rep) || {}).notes || {})[Rep.cle(new Chess(s.fen))];
    $('#drill-idee').innerHTML = note ? `<div class="msg">${note}</div>` : '';
    majAvancement();
    return;
  }
  finArbre(s);
}

/* Rejoue la ligne depuis la position initiale jusqu'à la bifurcation `s`
   (animation coup par coup), puis rend la main à avancerArbre. */
async function rejouerJusqua(s) {
  const p = D.plateau, a = A;
  a.anim = true; a.ligne = (a.ligne || 1) + 1;
  p.onCoup = null;
  msg(tx('Ligne terminée. On rejoue la partie jusqu’à la prochaine bifurcation (ligne {0}).', [a.ligne]), 'info');
  await new Promise(r => setTimeout(r, 900));
  if (A !== a) return;
  const ucis = a.moteur.chemin();
  const j = new Chess();
  a.joues = []; a.etats = []; fil(a.joues, a.etats);
  p.persistantes = {}; p.marques = {};
  p.position(j.fen(), a.camp);
  await new Promise(r => setTimeout(r, 350));
  let m = null;
  for (const u of ucis) {
    if (A !== a) return;
    try { m = j.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' }); } catch (e) { m = null; }
    if (!m) break;
    a.joues.push(m.san); a.etats.push('att'); fil(a.joues, a.etats);
    await p.animerVers(j.fen(), m, a.camp);
    await new Promise(r => setTimeout(r, 160));
  }
  if (A !== a) return;
  /* garde-fou : si le chemin ne mène pas exactement à la bifurcation, on s'y place */
  if (Rep.cle(j) !== Rep.cle(new Chess(s.fen))) {
    const ch = a.g.cheminVers(Rep.cle(new Chess(s.fen)));
    a.joues = ch ? ch.map(x => x.s) : []; a.etats = a.joues.map(() => 'att'); fil(a.joues, a.etats);
    p.position(s.fen, a.camp);
  }
  if (s.uci) { p.persistantes = { [s.uci.slice(0, 2)]: 'dernier', [s.uci.slice(2, 4)]: 'dernier' }; p.marquer(p.persistantes); }
  a.anim = false;
  p.onCoup = coupArbre;
  planifierArbre(300);
}

function coupArbre(de, vers, m) {
  if (!A || A.anim || !A.moteur.enAttente) return;
  const uci = de + vers + (m && m.promotion ? m.promotion : '');
  const avant = A.moteur.attente.fen;
  const kPos = A.moteur.attente.k;                 // la position, avant que proposer() la solde
  const r = A.moteur.proposer(uci);
  /* La position est soldée dès qu'elle est complète, pas à la fin du passage :
     réviser 229 positions d'une traite n'est pas réaliste, et tout ce qui était
     retrouvé était perdu si tu quittais en route. */
  if (r.verdict === 'bon' && r.complet !== false) acterPositionArbre(kPos);
  const p = D.plateau;
  if (r.verdict === 'faux') {
    p.svg.classList.add('secousse'); setTimeout(() => p.svg.classList.remove('secousse'), 340);
    if (typeof Son !== 'undefined') Son.jouer('faux');
    p.marquer(Object.assign({ [vers]: 'err' }, p.persistantes || {}));
    const t = new Chess(avant); let san = '?';
    try { san = t.move({ from: de, to: vers, promotion: 'q' }).san; } catch (e) { }
    msg(tx('<span class="mv bad">{0}</span> n’est pas dans ton répertoire ici. Réessaie, ou clique sur « Indice ».', [fr(san)]), 'ko');
    majAvancement();
    return;
  }
  if (r.verdict === 'deja') {
    msg(tx('Ce coup-là, tu l’as déjà trouvé dans cette position : il en reste un autre.'), 'info');
    p.marquer(p.persistantes || {});
    return;
  }
  A.joues.push(r.san); A.etats.push('ok'); fil(A.joues, A.etats);
  const j = new Chess(avant);
  const mm = j.move({ from: de, to: vers, promotion: 'q' });
  p.animerVers(j.fen(), mm, A.camp);
  msg(tx('<span class="mv good">{0}</span> — c’est ça.', [fr(r.san)]), 'ok');
  majAvancement();
  planifierArbre(420);
}

function indiceExo() {
  if (S.drill !== 'exo' || !D) return;
  if (!D.exo) { msg(tx('Le passage est terminé — clique sur « Recommencer » pour un nouveau tour.'), 'info'); return; }
  if (!D.exo.solution) return;
  if (D.rejeu && D.rejeu.actif) finRejeu();    // l'indice se montre sur la position de l'exercice
  const ex = D.exo;
  ex.serie = 0;                                   // un indice remet la série à zéro
  if (D.rates) D.rates.add(ex.id);
  /* Au milieu d'une séquence de mat, le coup attendu n'est plus celui de
     l'exercice : on redemande au moteur depuis la position courante. */
  if (typeof Son !== 'undefined') Son.jouer('indice');
  if (D.mat && D.mat.joues.length) return indiceMat(ex);
  const u = ex.solution;
  let mv = null;
  try { mv = new Chess(ex.fen).move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] || 'q' }); } catch (e) { }
  D.plateau.marquer(mv ? { [mv.from]: 'sel', [mv.to]: 'cible' } : {});
  msg(mv
    ? tx('Le coup est <span class="mv good">{0}</span> — la pièce est marquée, sa case d’arrivée pointée. ', [fr(mv.san)])
      + tx('La série repart de zéro.')
    : tx('Aucun indice disponible pour cette position.'), 'info');
  sauver();
}

async function indiceMat(ex) {
  msg(tx('Je cherche le coup…'), 'info');
  let r = null;
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    r = await S.moteur.evaluer(D.b.fen(), NOEUDS_JUGE);
  } catch (e) { r = null; }
  if (D.exo !== ex || S.drill !== 'exo') return;
  if (!r || !r.best) { msg(tx('Aucun indice disponible pour cette position.'), 'info'); return; }
  let mv = null;
  try { mv = new Chess(D.b.fen()).move({ from: r.best.slice(0, 2), to: r.best.slice(2, 4), promotion: r.best[4] || 'q' }); } catch (e) { }
  D.plateau.marquer(mv ? { [mv.from]: 'sel', [mv.to]: 'cible' } : {});
  if (typeof Son !== 'undefined') Son.jouer('indice');
  msg(mv
    ? tx('Le coup est <span class="mv good">{0}</span> — la pièce est marquée, sa case d’arrivée pointée. ', [fr(mv.san)])
      + tx('La série repart de zéro.')
    : tx('Aucun indice disponible pour cette position.'), 'info');
  sauver();
}

function indiceArbre() {
  if (S.drill !== 'arbre' || !A || A.anim || !A.moteur.enAttente) return;
  const uci = A.moteur.indice();
  if (!uci) { msg(tx('Aucun indice disponible pour cette position.'), 'info'); return; }
  D.plateau.marquer(Object.assign(
    { [uci.slice(0, 2)]: 'sel', [uci.slice(2, 4)]: 'cible' }, D.plateau.persistantes || {}));
  if (typeof Son !== 'undefined') Son.jouer('indice');
  msg(tx('La pièce à jouer est marquée, sa case d’arrivée est pointée. Cette position sera reproposée demain.'), 'info');
}

function majAvancement() {
  const m = A.moteur;
  $('#drill-sous').textContent =
    tx('Ligne {0} · {1}/{2} positions · {3} bon(s), {4} erreur(s)', [A.ligne || 1, m.faites, m.total, m.bons, m.mauvais]);
}

/* Enregistre le sort d'une position sitôt qu'elle est complète : prochaine
   échéance, et entrée ou sortie de la liste des ratées. Idempotent. */
function acterPositionArbre(k) {
  if (!A || !k || A.actees.has(k)) return;
  A.actees.add(k);
  const reussi = !A.moteur.ratees.has(k);
  const r = repDe(A.rep); if (!r) return;
  r.srs = r.srs || {};
  r.srs[k] = Rep.prochainSrs(r.srs[k], reussi, Date.now());
  const ratees = new Set(r.ratees || []);
  if (reussi) ratees.delete(k); else ratees.add(k);
  r.ratees = [...ratees];
  sauver();
}

function finArbre(s) {
  const maintenant = Date.now();
  const dejaFait = (A && A.actees) || new Set();
  const r = repDe(A && A.rep);
  if (r) {
    r.srs = r.srs || {};
    for (const k of s.vues) {
      if (dejaFait.has(k)) continue;               // déjà soldée en cours de route
      const reussi = !s.ratees.has(k);
      r.srs[k] = Rep.prochainSrs(r.srs[k], reussi, maintenant);
    }
    const ratees = new Set(r.ratees || []);
    for (const k of s.vues) { if (dejaFait.has(k)) continue; if (s.ratees.has(k)) ratees.add(k); else ratees.delete(k); }
    r.ratees = [...ratees];
  }
  sauver();
  D.plateau.onCoup = null;
  const parfait = s.mauvais === 0;
  if (typeof Son !== 'undefined') Son.jouer(parfait ? 'fini' : 'bon');
  msg(parfait
    ? tx('Terminé sans faute : {0} position(s) revue(s). Elles reviendront plus tard.', [s.vues.size])
    : tx('Terminé : {0} position(s), {1} erreur(s). Les {2} position(s) ratée(s) reviennent demain.', [s.vues.size, s.mauvais, s.ratees.size]),
    parfait ? 'ok' : 'info');
  $('#drill-idee').innerHTML = s.ratees.size
    ? tx('<div class="msg">Dans Ouvertures ou ici, « Mes erreurs » ne reprend que celles-là.</div>') : '';
  A = null; window.A = null;
}

/* ------------------------------------------------------------ import PGN */
let IMP = null;   // résultat de la dernière analyse

function brancherImport() {
  const zone = $('#ed-zone-import');
  $('#ed-import').onclick = () => {
    zone.hidden = !zone.hidden;
    if (!zone.hidden) $('#ed-pgn-texte').focus();
  };
  $('#ed-annuler-import').onclick = () => { zone.hidden = true; IMP = null; $('#ed-apercu').innerHTML = ''; };
  $('#ed-fichier-btn').onclick = () => $('#ed-fichier').click();
  $('#ed-fichier').onchange = async (ev) => {
    const f = ev.target.files[0]; if (!f) return;
    $('#ed-pgn-texte').value = await f.text();
    analyserImport(f.name);
    ev.target.value = '';
  };
  $('#ed-analyser').onclick = () => analyserImport();
  /* glisser-déposer sur toute la zone d'import */
  for (const e of ['dragenter', 'dragover']) zone.addEventListener(e, (ev) => {
    ev.preventDefault(); zone.classList.add('survol');
  });
  for (const e of ['dragleave', 'drop']) zone.addEventListener(e, (ev) => {
    ev.preventDefault(); zone.classList.remove('survol');
  });
  zone.addEventListener('drop', async (ev) => {
    const f = ev.dataTransfer.files[0]; if (!f) return;
    $('#ed-pgn-texte').value = await f.text();
    analyserImport(f.name);
  });
}

function analyserImport(nomFichier) {
  const texte = $('#ed-pgn-texte').value.trim();
  const ap = $('#ed-apercu'); ap.innerHTML = ''; IMP = null;
  if (!texte) { ap.append(el('div', { class: 'vide' }, tx('Colle un PGN ou choisis un fichier.'))); return; }
  let lu;
  try { lu = Rep.lirePgn(texte, Date.now()); }
  catch (e) { ap.append(el('div', { class: 'msg ko' }, tx('PGN illisible : ') + e.message)); return; }
  if (!lu.aretes.length) {
    ap.append(el('div', { class: 'msg ko' }, tx('Aucun coup trouvé dans ce PGN.')));
    return;
  }
  /* simulation sur le répertoire ouvert, pour montrer ce qui changerait */
  const essai = Rep.fusionner(grEd(), lu.aretes);
  IMP = { lu, camp: E.camp, rep: E.rep };
  const nb = Object.keys(lu.commentaires).length;
  ap.innerHTML = '';
  ap.append(el('div', { class: 'item' },
    el('div', { class: 'haut' },
      el('span', { class: 'tag grn' }, tx('vers « {0} »', [(repDe(E.rep) || {}).nom || ''])),
      lu.camp !== E.camp ? el('span', { class: 'tag amb' }, tx('écrit pour les {0}', [campNom(lu.camp)])) : null,
      lu.nom && lu.nom.toLowerCase() !== (lu.camp === 'w' ? tx('répertoire blanc') : tx('répertoire noir'))
        ? el('span', { class: 'tag' }, lu.nom) : null,
      nomFichier ? el('span', { class: 'tag' }, nomFichier) : null,
      lu.erreurs.length ? el('span', { class: 'tag red' }, tx('{0} coup(s) illisible(s)', [lu.erreurs.length])) : null),
    el('p', { html:
      tx('<strong>{0}</strong> coup(s) à ajouter, <strong>{1}</strong> déjà présent(s)', [essai.ajoutes, essai.deja]) +
      (nb ? tx(', {0} note(s) de position.', [nb]) : '.') }),
    lu.erreurs.length
      ? el('p', { class: 'sous' }, tx('Ignorés : ') + lu.erreurs.slice(0, 8).join(', ')) : null,
    el('div', { class: 'ligne-ctrl', style: 'margin-top:10px' },
      el('button', { class: 'b', onclick: () => appliquerImport(false) },
        essai.ajoutes ? tx('Ajouter ces {0} coups', [essai.ajoutes]) : tx('Rien à ajouter')),
      el('button', {
        class: 'b g', title: tx('Efface ce répertoire puis importe'),
        onclick: (ev) => {
          if (ev.target.dataset.arme !== '1') {
            ev.target.dataset.arme = '1'; ev.target.textContent = tx('Confirmer le remplacement');
            setTimeout(() => { if (ev.target.isConnected) { ev.target.dataset.arme = ''; ev.target.textContent = tx('Remplacer tout'); } }, 4000);
            return;
          }
          appliquerImport(true);
        },
      }, tx('Remplacer tout')))));
}

function appliquerImport(remplacer) {
  if (!IMP) return;
  const { lu, rep: idRep } = IMP;
  const rr = repDe(idRep); if (!rr) return;
  const base = remplacer ? new Rep.Graphe([]) : grapheRep(idRep);
  const r = Rep.fusionner(base, lu.aretes);
  majGrapheRep(idRep, r.graphe);
  rr.notes = rr.notes || {};
  for (const [k, t] of Object.entries(lu.commentaires)) if (!rr.notes[k] || remplacer) rr.notes[k] = t;
  sauver();
  E.jeu = new Chess(); E.ligne = [];
  IMP = null;
  $('#ed-pgn-texte').value = '';
  $('#ed-zone-import').hidden = true;
  dessinerEditeur();
  $('#ed-apercu').innerHTML = '';
  const m = el('div', { class: 'msg ok' },
    tx('{0} coup(s) ajouté(s) au répertoire « {1} »', [r.ajoutes, rr.nom]) +
    (remplacer ? tx(' (ancien contenu remplacé).') : tx(', {0} déjà connu(s).', [r.deja])));
  $('#ed-entete').after(m);
  setTimeout(() => m.remove(), 6000);
}

/* ==========================================================================
   Typologie des gaffes : de quoi une gaffe est-elle faite ?
   Chaque gaffe est rangée dans une seule catégorie, par ordre de priorité :
   un mat manqué reste un mat manqué même si une pièce traînait en prise.
   ========================================================================== */

const TYPES_GAFFE = [
  { id: 'mat1_rate', nom: tx('Mat en un non vu'), cls: 'amb',
    aide: tx('Tu avais mat en un coup et tu as joué autre chose.') },
  { id: 'mat_rate', nom: tx('Mat en deux ou trois non vu'), cls: 'amb',
    aide: tx('Un mat forcé en deux ou trois coups était là. À ton niveau c’est du travail utile : les motifs sont courts et se reconnaissent.') },
  { id: 'mat_long_rate', nom: tx('Mat forcé long non vu'), cls: '', horsNiveau: true,
    aide: tx('Un mat forcé plus long que ce qu’on attend à ton niveau (réglage « Niveau »). Ces coups sont listés pour information et ne comptent pas dans tes gaffes.') },
  { id: 'mat1_encaisse', nom: tx('Mat en un encaissé'), cls: 'red',
    aide: tx('Ton coup permettait le mat au coup suivant.') },
  { id: 'mat_encaisse', nom: tx('Mat encaissé'), cls: 'red',
    aide: tx('Ton coup laissait un mat forcé à l’adversaire.') },
  { id: 'prise_mal_comptee', nom: tx('Prise mal comptée'), cls: 'red',
    aide: tx('Tu as pris sur une case plus défendue qu’attaquée, ou avec la mauvaise pièce.') },
  { id: 'laisse_en_prise', nom: tx('Pièce laissée en prise'), cls: 'red',
    aide: tx('Ton coup a posé une pièce sur une case où elle se prend gratuitement.') },
  { id: 'deja_en_prise', nom: tx('Pièce déjà en prise, non sauvée'), cls: 'red',
    aide: tx('Une pièce à toi était déjà attaquée et tu as joué ailleurs.') },
  { id: 'piece_perdue_apres', nom: tx('Pièce attrapée au coup d’après'), cls: 'red',
    aide: tx('Rien ne pendait tout de suite : c’est la réponse adverse — double attaque, pièce piégée, clouage — qui gagne la pièce. Il faut regarder le coup d’après, pas seulement la position actuelle.') },
  { id: 'pion_en_prise', nom: tx('Pion laissé en prise'), cls: 'amb',
    aide: tx('Un pion à toi se prend gratuitement. Moins cher qu’une pièce, mais à ton niveau trois pions perdus finissent par coûter la partie.') },
  { id: 'gratuit_rate', nom: tx('Pièce gratuite non prise'), cls: '',
    aide: tx('Du matériel adverse était à prendre et tu as joué autre chose.') },
  { id: 'prise_ratee', nom: tx('Prise gagnante non jouée'), cls: '',
    aide: tx('Une prise rapportait du matériel après les échanges — pas gratuite, mais gagnante au compte.') },
  { id: 'autre', nom: tx('Erreur de calcul'), cls: '',
    aide: tx('Ni matériel en l’air ni mat : un coup simplement moins bon (mauvais plan, mauvaise case, roi affaibli).') },
];
/* Ce qui compte comme « en prise » : une pièce (pas un pion) qu'on perd pour
   au moins un pion net, ou un pion qu'on perd tout court. On juge par le type
   de la pièce et non par un seuil en centipions, sinon un fou faiblement
   défendu (gain 230) passe sous le radar d'un seuil à 250. */
const PERD_PIECE = (x) => x.type !== 'p' && x.gain >= 100;
const PERD_PION = (x) => x.type === 'p' && x.gain >= 90;
const typeGaffe = (id) => TYPES_GAFFE.find(t => t.id === id) || TYPES_GAFFE[TYPES_GAFFE.length - 1];

function matApres(fen, uci) {
  if (!uci) return false;
  try {
    const b = new Chess(fen);
    b.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' });
    return b.isCheckmate();
  } catch (e) { return false; }
}

function classerGaffe(g) {
  const moi = g.couleur;
  let apres = null;
  try { const b = new Chess(g.fen); b.move(g.san); apres = b.fen(); } catch (e) { }

  /* Mat porté : le coup gagne la partie, ce n'est jamais une gaffe. Sécurité
     pour les données analysées avant le correctif. */
  if (g.san.includes('#')) return null;
  if (g.evalAvant >= 9000) {
    if (matApres(g.fen, g.meilleurUci)) return 'mat1_rate';
    /* score de mat encodé 10000 − n : n est la distance en coups */
    return (10000 - g.evalAvant) >= niveauJoueur().matLong ? 'mat_long_rate' : 'mat_rate';
  }
  if (g.evalApres <= -9000) return apres && matApres(apres, g.punitionUci) ? 'mat1_encaisse' : 'mat_encaisse';

  /* Ma prise était-elle rentable ? seeGain s'arrête à zéro (on a toujours le
     droit de ne pas prendre), donc on compte explicitement : ce que je gagne
     moins ce que l'adversaire récupère en reprenant. */
  if (g.san.includes('x')) {
    try {
      const b = new Chess(g.fen);
      const m = b.move(g.san);
      if (m && m.captured) {
        const gagne = VAL[m.captured] || 0;
        const rendu = seeGain(b.fen(), m.to, moi === 'w' ? 'b' : 'w');
        if (gagne - rendu <= -100) return 'prise_mal_comptee';
      }
    } catch (e) { }
  }

  /* Ce que le coup du moteur laisse aussi en prise n'est pas de notre fait : si
     le meilleur coup abandonne la même pièce, c'est que la position l'exige —
     sacrifice qui rapporte, ou pièce déjà imperdable. L'erreur est ailleurs, et
     on retire ces cases du diagnostic. */
  const exigees = new Set();
  if (g.meilleurUci) {
    try {
      const b = new Chess(g.fen);
      b.move({ from: g.meilleurUci.slice(0, 2), to: g.meilleurUci.slice(2, 4), promotion: g.meilleurUci[4] || 'q' });
      for (const z of enPrise(b.fen(), moi)) exigees.add(z.case);
    } catch (e) { }
  }
  const nous = (l) => l.filter(x => !exigees.has(x.case));

  const avant = apres === null ? [] : nous(enPrise(g.fen, moi));
  const aprs = apres ? nous(enPrise(apres, moi)) : [];
  const casesAvant = new Set(avant.map(x => x.case));
  const pieceApres = aprs.filter(PERD_PIECE);
  if (pieceApres.length) {
    if (pieceApres.some(x => !casesAvant.has(x.case))) return 'laisse_en_prise';
    return 'deja_en_prise';
  }
  /* Pas de repli sur « ça pendait avant » : si plus rien ne pend après le coup,
     c'est que le coup a réglé le problème et que la perte vient d'ailleurs. */

  /* Rien ne pend maintenant : et après la réponse de l'adversaire ?
     C'est la signature de la double attaque et de la pièce piégée. */
  if (apres && g.punitionUci) {
    try {
      const b = new Chess(apres);
      b.move({ from: g.punitionUci.slice(0, 2), to: g.punitionUci.slice(2, 4), promotion: g.punitionUci[4] || 'q' });
      if (nous(enPrise(b.fen(), moi)).filter(PERD_PIECE).length) return 'piece_perdue_apres';
    } catch (e) { }
  }

  if (aprs.filter(PERD_PION).length) return 'pion_en_prise';

  /* le meilleur coup était-il une prise qu'on a laissée passer ? */
  if (g.meilleurUci) {
    try {
      const b = new Chess(g.fen);
      const m = b.move({ from: g.meilleurUci.slice(0, 2), to: g.meilleurUci.slice(2, 4), promotion: g.meilleurUci[4] || 'q' });
      if (m && m.captured) {
        const net = seeGain(g.fen, m.to, moi);
        if (net >= SEUIL_PIECE) return 'gratuit_rate';
        if (net >= 90) return 'prise_ratee';
      }
    } catch (e) { }
  }
  return 'autre';
}

/* ---------- progression d'une catégorie ----------
   La courbe est une moyenne glissante sur une fenêtre de parties : avec trois
   jours de données, un point par jour serait illisible. On garde l'ordre réel
   des parties, et on repère les journées en dessous. */
function typesParPartie() {
  if (S.typesCache && S.typesCache.n === Object.keys(S.d.parties).length) return S.typesCache.m;
  const m = new Map();
  for (const x of gaffesClassees()) {
    if (!m.has(x.p.url)) m.set(x.p.url, []);
    m.get(x.p.url).push(x.type);
  }
  S.typesCache = { n: Object.keys(S.d.parties).length, m };
  return m;
}

function courbeType(t) {
  const zone = el('div', { class: 'gtype-courbe' });
  const parties = Object.values(S.d.parties).filter(p => p.moteur).sort((a, b) => a.fin - b.fin);
  const manquantes = Object.values(S.d.parties).filter(p => !p.moteur);
  const parUrl = typesParPartie();
  const compte = parties.map(p => (parUrl.get(p.url) || []).filter(x => x === t.id).length);
  const n = parties.length;

  if (n < 6) {
    zone.append(el('div', { class: 'vide' },
      tx('Il faut au moins 6 parties analysées pour une tendance ; tu en as {0}.', [n])));
  } else {
    const f = Math.max(4, Math.min(10, Math.round(n / 4)));   // fenêtre glissante
    const pts = [];
    for (let i = f - 1; i < n; i++) {
      const tr = compte.slice(i - f + 1, i + 1);
      pts.push({ i, v: tr.reduce((a, b) => a + b, 0) / f });
    }
    const moy = compte.reduce((a, b) => a + b, 0) / n;
    const W = 720, H = 152, L = 46, R = 16, T = 12, B = 40;
    const iw = W - L - R, ih = H - T - B;
    const hi = Math.max(moy, ...pts.map(p => p.v)) * 1.3 || 1;
    const X = (i) => L + (n === 1 ? iw / 2 : i / (n - 1) * iw);
    const Y = (v) => T + ih - v / (hi || 1) * ih;
    const svg = svgEl('svg', { class: 'chart', viewBox: `0 0 ${W} ${H}`, role: 'img',
      'aria-label': tx('Progression : ') + t.nom });
    for (const v of [0, hi / 2, hi]) {
      svg.append(svgEl('line', { x1: L, y1: Y(v), x2: W - R, y2: Y(v), class: 'grid' }));
      const e = svgEl('text', { x: L - 8, y: Y(v) + 3.5, 'text-anchor': 'end' });
      e.append(v.toFixed(hi < 1.5 ? 2 : 1).replace('.', I18N.dec)); svg.append(e);
    }
    /* moyenne de référence */
    svg.append(svgEl('line', { x1: L, y1: Y(moy), x2: W - R, y2: Y(moy),
      stroke: 'var(--muted)', 'stroke-dasharray': '4 4', 'stroke-width': 1 }));
    const tm = svgEl('text', { x: L + 5, y: Y(moy) - 5, 'text-anchor': 'start' });
    tm.append(tx('moyenne {0} par partie', [moy.toFixed(2).replace('.', I18N.dec)])); svg.append(tm);
    /* séparateurs + étiquettes de journée */
    let jourPrec = null;
    parties.forEach((p, i) => {
      if (p.date === jourPrec) return;
      if (jourPrec !== null) svg.append(svgEl('line', { x1: X(i) - iw / (n - 1) / 2, y1: T,
        x2: X(i) - iw / (n - 1) / 2, y2: T + ih, stroke: 'var(--line-2)',
        'stroke-width': 1, 'stroke-dasharray': '2 3' }));
      jourPrec = p.date;
      const e = svgEl('text', { x: X(i), y: H - 4, 'text-anchor': 'start' });
      e.append(new Date(p.date + 'T12:00:00').toLocaleDateString(I18N.locale, { day: 'numeric', month: 'short' }));
      svg.append(e);
    });
    /* une encoche par partie où la gaffe est tombée */
    parties.forEach((p, i) => {
      for (let k = 0; k < compte[i]; k++) svg.append(svgEl('line', {
        x1: X(i), y1: T + ih + 3 + k * 4, x2: X(i), y2: T + ih + 6 + k * 4,
        stroke: t.cls === 'red' ? 'var(--danger)' : t.cls === 'amb' ? 'var(--amber)' : 'var(--muted)',
        'stroke-width': 2, 'stroke-linecap': 'round' }));
    });
    svg.append(svgEl('polyline', { points: pts.map(p => `${X(p.i)},${Y(p.v)}`).join(' '),
      fill: 'none', stroke: 'var(--accent)', 'stroke-width': 2,
      'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
    const der = pts[pts.length - 1];
    svg.append(svgEl('circle', { cx: X(der.i), cy: Y(der.v), r: 4,
      fill: 'var(--accent)', stroke: 'var(--surface)', 'stroke-width': 1.5 }));
    zone.append(svg);

    /* verdict chiffré : première moitié contre seconde moitié */
    const total = compte.reduce((a, b) => a + b, 0);
    const mi = Math.floor(n / 2);
    const r1 = compte.slice(0, mi).reduce((a, b) => a + b, 0) / mi;
    const r2 = compte.slice(mi).reduce((a, b) => a + b, 0) / (n - mi);
    const d = r2 - r1;
    let verdict;
    if (total < 5) {
      verdict = tx('Seulement {0} occurrence(s) : trop peu pour parler de tendance, ', [total])
        + tx('la courbe est là pour repérer les rechutes.');
    } else {
      const mieux = d < -0.02, pire = d > 0.02;
      verdict = tx('Première moitié de tes parties : <strong>{0}</strong> par partie. ', [r1.toFixed(2).replace('.', I18N.dec)])
        + tx('Seconde moitié : <strong>{0}</strong>. ', [r2.toFixed(2).replace('.', I18N.dec)])
        + (mieux ? tx('<span class="up">En baisse — ce que tu travailles porte.</span>')
          : pire ? tx('<span class="down">En hausse — à remettre au programme.</span>')
            : tx('Stable : rien n’a bougé sur la période.'));
    }
    zone.append(el('p', { class: 'sous', style: 'margin:10px 0 0', html:
      tx('Moyenne glissante sur {0} parties. Les encoches du bas marquent les parties où la gaffe est tombée. ', [f])
      + verdict }));
    /* un mat manqué suppose un mat disponible : la courbe monte mécaniquement
       quand on gagne plus souvent. À dire, sinon le verdict est trompeur. */
    if (t.id === 'mat1_rate' || t.id === 'mat_rate') zone.append(el('p', { class: 'sous', style: 'margin:6px 0 0' },
      tx('Attention à la lecture : on ne rate un mat que dans une position gagnante. Cette courbe monte donc en partie parce que tu gagnes plus souvent — compare-la à ta courbe Elo avant de conclure.')));
  }

  /* ré-analyse des parties sans données moteur */
  if (manquantes.length) {
    const info = el('p', { class: 'sous', style: 'margin:12px 0 6px' },
      tx('{0} partie(s) importée(s) sans analyse Stockfish : elles ne comptent pas dans la courbe.', [manquantes.length]));
    const barre = el('div', { class: 'barre', hidden: true }, el('i', { style: 'width:0%' }));
    const bouton = el('button', { class: 'b g', onclick: async () => {
      bouton.disabled = true; barre.hidden = false;
      await analyserManquantes(manquantes, (fait, total, nom) => {
        barre.querySelector('i').style.width = Math.round(100 * fait / total) + '%';
        info.textContent = tx('analyse : {0} ({1}/{2})…', [nom, fait, total]);
      });
      S.gaffesCache = null; S.typesCache = null;
      vueProgression();
    } }, DEGRADE ? tx('Analyse indisponible en mode fichier') : tx('Analyser ces {0} partie(s)', [manquantes.length]));
    if (DEGRADE) bouton.disabled = true;
    zone.append(info, barre, bouton);
  }
  return zone;
}

/* Relance Stockfish sur les parties stockées qui n'ont pas de données moteur. */
async function analyserManquantes(liste, onTick) {
  if (DEGRADE) return;
  if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
  S.stop = false;
  let fait = 0;
  for (const p of liste) {
    if (S.stop) break;
    onTick && onTick(fait, liste.length, p.adversaire);
    const plein = deplier(p);
    const noeuds = parseInt(($('#profondeur') || {}).value, 10) || 120000;
    const r = await analyseMoteur(plein, noeuds);
    if (r) { p.moteur = r; S.d.parties[p.url] = p; }
    fait++;
    onTick && onTick(fait, liste.length, p.adversaire);
  }
  const jours = new Set(liste.map(p => p.date));
  for (const d of jours) majJour(d);
  sauver();
}

/* ---------- affinage : relire les positions de gaffe en profondeur ----------
   Le classement dépend de l'évaluation stockée, calculée à 120 000 nœuds à
   l'import. À cette profondeur Stockfish rate les mats longs : un mat en
   quinze non vu se retrouve rangé en « pion laissé en prise ». On relit donc
   les seules positions de gaffe à 800 000 nœuds, ce qui les trouve. */
const NOEUDS_AFFINAGE = 800000;
const clampCp = (x) => Math.max(-1200, Math.min(1200, x));

async function affinerGaffes(onTick) {
  if (DEGRADE) return null;
  if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
  S.stop = false;
  const boulot = [];
  /* seulement les gaffes pas encore relues : c'est le nombre annoncé sur le bouton */
  for (const p of Object.values(S.d.parties))
    for (const g of (p.moteur && p.moteur.gaffes) || []) if (!g.affine) boulot.push({ p, g });
  let fait = 0, bouge = 0, retirees = 0;
  const touchees = new Set();
  for (const { p, g } of boulot) {
    if (S.stop) break;
    let apres = null;
    try { const b = new Chess(g.fen); b.move(g.san); apres = b.fen(); } catch (e) { }
    const a = await S.moteur.evaluer(g.fen, NOEUDS_AFFINAGE);
    const b2 = apres ? await S.moteur.evaluer(apres, NOEUDS_AFFINAGE) : null;
    const av = a.cp, ap = b2 ? -b2.cp : g.evalApres;
    if (Math.abs(av - g.evalAvant) > 100 || Math.abs(ap - g.evalApres) > 100) bouge++;
    g.evalAvant = av;
    if (a.best) g.meilleurUci = a.best;
    if (b2) { g.evalApres = ap; if (b2.best) g.punitionUci = b2.best; }
    g.perte = Math.max(0, clampCp(av) - clampCp(ap));
    g.affine = true;
    /* le type était calculé sur l'ancienne évaluation et gardé en cache :
       sans ceci, l'affinage ne changeait jamais le classement affiché */
    delete g._cls; delete g._clsV;
    touchees.add(p.url);
    fait++;
    onTick && onTick(fait, boulot.length);
  }
  /* une « gaffe » que la profondeur disculpe n'en est plus une */
  for (const url of touchees) {
    const p = S.d.parties[url];
    const n0 = p.moteur.gaffes.length;
    p.moteur.gaffes = p.moteur.gaffes.filter(g => g.perte >= 300);
    retirees += n0 - p.moteur.gaffes.length;
  }
  for (const d of new Set([...touchees].map(u => S.d.parties[u].date))) majJour(d);
  sauver();
  S.gaffesCache = null; S.typesCache = null;
  return { vues: fait, total: boulot.length, bouge, retirees };
}

/* Classer une gaffe coûte cher : quatre analyses de prises sur des positions
   de milieu de partie, soit ~25 ms pièce. On garde le résultat sur la gaffe
   elle-même — il part dans donnees.json et n'est plus jamais recalculé, sauf
   si la taxinomie change (VERSION_TAXO). */
const VERSION_TAXO = 3;
function classerGaffeCache(g) {
  if (g._cls !== undefined && g._clsV === VERSION_TAXO) return g._cls;
  const t = classerGaffe(g);
  g._cls = t; g._clsV = VERSION_TAXO;
  return t;
}

/* Toutes les gaffes classées, avec leur partie d'origine. */
function gaffesClassees() {
  if (S.gaffesCache && S.gaffesCache.n === Object.keys(S.d.parties).length) return S.gaffesCache.liste;
  const out = [];
  for (const p of Object.values(S.d.parties)) {
    for (const g of (p.moteur && p.moteur.gaffes) || []) {
      const type = classerGaffeCache(g);
      if (type === null) continue;                       // coup qui mate
      out.push({ g, p, type, hors: !!typeGaffe(type).horsNiveau });
    }
  }
  out.sort((a, b) => b.g.perte - a.g.perte);
  S.gaffesCache = { n: Object.keys(S.d.parties).length, liste: out };
  return out;
}

/* ---------- la carte « par type » dans Progression ---------- */
function carteTypesGaffes() {
  const tout = gaffesClassees();
  const liste = tout.filter(x => !x.hors);        // ce qui compte
  const hors = tout.filter(x => x.hors);          // listé pour information
  const carte = el('div', { class: 'carte' },
    el('h3', {}, tx('De quoi tes gaffes sont faites')));
  if (!liste.length && !hors.length) {
    carte.append(el('div', { class: 'vide' }, tx('Aucune gaffe analysée pour l’instant.')));
    return carte;
  }
  const partiesAnalysees = Object.values(S.d.parties).filter(p => p.moteur).length;
  carte.append(el('p', { class: 'sous', style: 'margin:0 0 14px' },
    tx('{0} gaffes sur {1} parties analysées, rangées par type. ', [liste.length, partiesAnalysees])
    + tx('Chaque gaffe compte une seule fois, dans sa cause principale, et la liste commence par ce qui te coûte le plus cher.')));
  if (S.dernierAffinage) carte.append(el('div', { class: 'msg ok', style: 'margin:0 0 14px' }, S.dernierAffinage));
  const brutes = liste.filter(x => !x.g.affine).length;
  if (brutes && !DEGRADE) {
    const info = el('p', { class: 'sous', style: 'margin:-6px 0 10px' },
      tx('{0} de ces gaffes sont encore classées sur l’analyse rapide de l’import ', [brutes])
      + tx('(120 000 nœuds), qui rate les mats longs : un mat en quinze non vu peut se retrouver rangé ailleurs. L’affinage relit ces seules positions en profondeur.'));
    const barre = el('div', { class: 'barre', hidden: true }, el('i', { style: 'width:0%' }));
    const b = el('button', { class: 'b g', style: 'margin-bottom:16px', onclick: async () => {
      b.disabled = true; barre.hidden = false;
      const r = await affinerGaffes((fait, total) => {
        barre.querySelector('i').style.width = Math.round(100 * fait / total) + '%';
        info.textContent = tx('affinage : {0}/{1} positions…', [fait, total]);
      });
      if (r) S.dernierAffinage = tx('Affinage terminé : {0} évaluation(s) corrigée(s) ', [r.bouge])
        + tx('sur {0} positions relues, {1} gaffe(s) disculpée(s) et retirée(s).', [r.vues, r.retirees]);
      vueProgression();
    } }, tx('Affiner le classement ({0} positions)', [brutes]));
    carte.append(info, barre, b);
  }

  /* tendance : cadence par partie sur les 7 derniers jours de jeu contre les 7 d'avant */
  const jours = [...new Set(Object.values(S.d.parties).map(p => p.date))].sort().reverse();
  const recents = new Set(jours.slice(0, 7)), anciens = new Set(jours.slice(7, 14));
  const nbP = (s) => Object.values(S.d.parties).filter(p => p.moteur && s.has(p.date)).length;
  const pR = nbP(recents), pA = nbP(anciens);

  const max = Math.max(1, ...TYPES_GAFFE.map(t => liste.filter(x => x.type === t.id).length));
  /* on montre d'abord ce qui coûte le plus cher, pas l'ordre de la taxinomie */
  const rangs = TYPES_GAFFE
    .map(t => ({ t, dans: liste.filter(x => x.type === t.id) }))
    .filter(r => r.dans.length)
    .map(r => Object.assign(r, { cout: r.dans.reduce((a, x) => a + x.g.perte, 0) / 100 }))
    .sort((x, y) => y.cout - x.cout);
  for (const { t, dans, cout } of rangs) {
    let tendance = null;
    if (pR >= 3 && pA >= 3) {
      const cr = dans.filter(x => recents.has(x.p.date)).length / pR;
      const ca = dans.filter(x => anciens.has(x.p.date)).length / pA;
      const d = cr - ca;
      if (Math.abs(d) >= 0.08) tendance = { mieux: d < 0, txt: (d > 0 ? '+' : '−') + Math.abs(d).toFixed(2).replace('.', I18N.dec) + tx('/partie') };
    }
    const ligne = el('div', { class: 'gtype' },
      el('div', { class: 'gtype-h' },
        el('span', { class: 'tag ' + t.cls }, dans.length),
        el('strong', {}, t.nom),
        tendance ? el('span', { class: 'tag ' + (tendance.mieux ? 'grn' : 'red') }, tendance.txt) : null,
        el('span', { class: 'gtype-cout' }, tx('{0} points perdus', [cout.toFixed(1).replace('.', I18N.dec)]))),
      el('div', { class: 'gtype-barre' },
        el('i', { class: t.cls === 'red' ? 'r' : (t.cls === 'amb' ? 'a' : 'g'),
          style: `width:${Math.round(100 * dans.length / max)}%` })),
      el('p', { class: 'sous', style: 'margin:6px 0 0' }, t.aide),
      el('div', { class: 'gtype-ex', hidden: true }),
      el('div', { class: 'gtype-courbe-zone', hidden: true }));
    const zone = ligne.querySelector('.gtype-ex');
    const zoneC = ligne.querySelector('.gtype-courbe-zone');
    const bouton = el('button', { class: 'b g', onclick: () => {
      if (!zone.hidden) { zone.hidden = true; bouton.textContent = tx('Voir {0} exemple(s)', [Math.min(3, dans.length)]); return; }
      zone.hidden = false; bouton.textContent = tx('Masquer les exemples');
      if (zone.childNodes.length) return;
      for (const { g, p } of dans.slice(0, 3)) {
        let mieux = g.meilleurUci;
        try {
          const b = new Chess(g.fen);
          const m = b.move({ from: mieux.slice(0, 2), to: mieux.slice(2, 4), promotion: mieux[4] || 'q' });
          mieux = m ? m.san : mieux;
        } catch (e) { }
        zone.append(el('div', { class: 'item' },
          el('div', { class: 'haut' },
            el('span', { class: 'tag red' }, `−${(g.perte / 100).toFixed(1).replace('.', I18N.dec)}`),
            el('span', { class: 'tag' }, tx('coup {0}', [g.numero])),
            el('strong', {}, p.adversaire),
            el('span', { class: 'quand' }, frDate(g.date))),
          el('p', { html: tx('Tu as joué <span class="mv bad">{0}</span>', [fr(g.san)])
            + (mieux ? tx(', le moteur voulait <span class="mv good">{0}</span>.', [fr(mieux)]) : '.') }),
          el('div', { class: 'ligne-ctrl', style: 'margin-top:8px' },
            el('button', { class: 'b g', onclick: () => {
              ouvrirBilan(p, () => onglet('progression'));
              allerA((g.numero - 1) * 2 + (g.couleur === 'w' ? 1 : 2));
            } }, tx('Voir dans le bilan')))));
      }
    } }, tx('Voir {0} exemple(s)', [Math.min(3, dans.length)]));
    const boutonC = el('button', { class: 'b g', onclick: () => {
      if (!zoneC.hidden) { zoneC.hidden = true; boutonC.textContent = tx('Voir la progression'); return; }
      zoneC.hidden = false; boutonC.textContent = tx('Masquer la progression');
      if (!zoneC.childNodes.length) zoneC.append(courbeType(t));
    } }, tx('Voir la progression'));
    ligne.append(el('div', { class: 'gtype-btns' }, bouton, boutonC));
    carte.append(ligne);
  }

  /* --- hors décompte : ce qui n'est pas attendu à son niveau --- */
  if (hors.length) {
    const bloc = el('div', { class: 'gtype horsniv' },
      el('div', { class: 'gtype-h' },
        el('span', { class: 'tag' }, hors.length),
        el('strong', {}, tx('Non compté à ton niveau')),
        el('span', { class: 'gtype-cout' }, tx('hors décompte'))));
    const groupes = TYPES_GAFFE.filter(t => t.horsNiveau)
      .map(t => ({ t, dans: hors.filter(x => x.type === t.id) })).filter(r => r.dans.length);
    for (const { t, dans } of groupes) {
      bloc.append(el('p', { class: 'sous', style: 'margin:4px 0 0' },
        `${dans.length} × ${t.nom.toLowerCase()} — ${t.aide}`));
      const ul = el('div', { class: 'horsniv-liste' });
      for (const { g, p: pa } of dans.slice(0, 6)) {
        const n = g.evalAvant >= 9000 ? 10000 - g.evalAvant : null;
        ul.append(el('button', { class: 'lien-gaffe', onclick: () => {
          ouvrirBilan(pa, () => onglet('progression'));
          allerA((g.numero - 1) * 2 + (g.couleur === 'w' ? 1 : 2));
        } }, tx('{0} · coup {1}', [pa.adversaire, g.numero]) + (n ? tx(' · mat en {0}', [n]) : '')));
      }
      bloc.append(ul);
    }
    carte.append(bloc);
  }
  return carte;
}
