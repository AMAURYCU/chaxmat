/* ==========================================================================
   Le bot personnalisé : un bot qui choisit ses coups comme TES adversaires.

   1. Il récupère toutes tes parties (chess.com et Lichess, depuis le début),
      pas seulement celles importées. Celles qui ne le sont pas servent
      seulement à l'apprentissage : elles ne rejoignent pas tes parties.
   2. Dans chaque partie, il prend quelques positions où ton adversaire
      devait jouer (après le 5e coup) et fait noter par Stockfish tous les
      coups possibles, avec ta meilleure réponse à chacun.
   3. Il apprend comment ces adversaires choisissent parmi ces coups :
      35 indices par coup (perte, prise, échec, roque, pièce laissée en
      prise, fourchette concédée, pendule…), un poids par indice
      (Bot.entrainer, dans bot.js).
   4. Il mesure, sur des parties qu'il n'a pas vues, s'il prévoit leurs
      coups mieux que le bot standard.
   Deux versions : « personnalisé » (toutes tes parties) et « coriace » (les
   parties que tu as perdues comptent trois fois). Son livre d'ouvertures :
   les coups que tes adversaires t'ont joués.

   Après chaque import (app.js), les nouvelles parties sont analysées et le
   réseau réentraîné : majBotPersoApresImport().

   Données : S.d.botPositions (les positions analysées, par partie) et
   S.d.botPerso (les poids, les mesures, le livre).
   ========================================================================== */
'use strict';

const BP = {
  enCours: false, stop: false, etape: '', fait: 0, total: 0, t0: 0, message: '', erreur: null,
  cache: new Map(), moteur: null,
};
/* réglages : 8 positions par partie au plus, 4 000 en tout, 150 au moins
   pour apprendre ; le réseau à 8 neurones est essayé à partir de 2 000 */
const BP_CFG = { parPartie: 8, maxPositions: 4000, maxParties: 1500, minPositions: 150, noeuds: 150000, candidats: 60,
  minReseau: 2000, neurones: 8 };
const pauseBP = () => new Promise(r => setTimeout(r, 0));

function positionsBot() { S.d.botPositions = S.d.botPositions || {}; return S.d.botPositions; }
const botPerso = () => (S.d.botPerso && S.d.botPerso.w ? S.d.botPerso : null);
const nbPositionsBot = () => Object.values(positionsBot()).reduce((a, l) => a + l.filter(x => !x.x).length, 0);

/* tirage reproductible : les mêmes positions pour une partie donnée */
function graineBP(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function aleaBP(a) {
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

/* ------------------------------------------------------------- les parties */
/* Une partie, importée ou récupérée, sous une seule forme. */
function partieBP(p) {
  if (!p || !p.url) return null;
  let sans = p.sans, clks = p.clks;
  if (p.coups) { sans = p.coups.map(c => c.san); clks = p.coups.map(c => c.clk); }
  if (typeof sans === 'string') sans = sans.split(' ').filter(Boolean);
  if (!sans || sans.length < 2) return null;
  return { url: p.url, couleur: p.couleur, sans, clks: clks || [], eloAdv: p.eloAdv || null, score: p.score, fin: p.fin || 0 };
}
const estBotAdverse = (nom) => /^coach-/i.test(nom || '') || /bot$/i.test(nom || '');
/* Toutes tes parties : celles déjà importées, plus toutes les archives
   chess.com et toutes les parties Lichess (rapides, contre des humains). */
async function recupererPartiesBP(log) {
  const ps = { chesscom: (S.d.reglages.pseudo || '').trim(), lichess: (S.d.reglages.pseudoLichess || '').trim() };
  const toutes = new Map();
  for (const p of Object.values(S.d.parties || {})) { const n = partieBP(p); if (n) toutes.set(n.url, n); }
  log(tx('{0} partie(s) déjà importée(s).', [toutes.size]));
  if (ps.chesscom) {
    try {
      const r = await fetch(`https://api.chess.com/pub/player/${encodeURIComponent(ps.chesscom.toLowerCase())}/games/archives`);
      if (!r.ok) throw new Error(tx('chess.com a répondu {0} : réessaie plus tard.', [r.status]));
      const arch = (await r.json()).archives || [];
      let n = 0;
      for (const [i, u] of arch.entries()) {
        if (BP.stop) return [];
        log(tx('chess.com : archive {0} ({1} sur {2})…', [u.split('/').slice(-2).join('/'), i + 1, arch.length]));
        const rr = await fetch(u);
        if (!rr.ok) continue;
        for (const g of (await rr.json()).games || []) {
          if (g.rules !== 'chess' || g.time_class === 'daily' || toutes.has(g.url)) continue;
          const moi = g.white.username.toLowerCase() === ps.chesscom.toLowerCase();
          if (estBotAdverse(moi ? g.black.username : g.white.username)) continue;
          const p = partieBP(lirePgn(g, ps.chesscom));
          if (p) { toutes.set(p.url, p); n++; }
        }
      }
      log(tx('chess.com : {0} partie(s) de plus.', [n]));
    } catch (e) { log(tx('chess.com : {0}', [e.message])); }
  }
  if (ps.lichess && typeof importerLichess === 'function') {
    try {
      let n = 0;
      for (const g of await importerLichess(ps.lichess, '2000-01-01', log)) {
        if (toutes.has('https://lichess.org/' + g.id)) continue;
        const p = partieBP(lireLichess(g, ps.lichess));
        if (p) { toutes.set(p.url, p); n++; }
      }
      log(tx('Lichess : {0} partie(s) de plus.', [n]));
    } catch (e) { log(tx('Lichess : {0}', [e.message])); }
  }
  return [...toutes.values()].sort((a, b) => b.fin - a.fin).slice(0, BP_CFG.maxParties);
}

/* ------------------------------------------------------------- l'échantillon */
/* Les demi-coups de l'adversaire, après le 10e, dans un ordre tiré une fois
   pour toutes d'après l'adresse de la partie. */
function plisBP(p, k) {
  const adv = p.couleur === 'w' ? 'b' : 'w', plis = [];
  for (let i = 10; i < p.sans.length; i++) if ((i % 2 === 0) === (adv === 'w')) plis.push(i);
  const r = aleaBP(graineBP(p.url));
  for (let i = plis.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [plis[i], plis[j]] = [plis[j], plis[i]]; }
  return plis.slice(0, k);
}
/* Ce qui reste à analyser : une position de chaque partie, puis une
   deuxième de chaque partie… Un arrêt en route laisse un échantillon qui
   couvre toutes les parties. `limite` : le nombre de positions au plus. */
function fileBP(parties, limite) {
  const pos = positionsBot(), rangs = [];
  const parPartie = Math.max(1, Math.min(BP_CFG.parPartie, Math.round(BP_CFG.maxPositions / Math.max(1, parties.length))));
  const ordre = parties.slice().sort((a, b) => graineBP('o' + a.url) - graineBP('o' + b.url));
  for (const p of ordre) {
    const faits = new Set((pos[p.url] || []).map(x => x.p));
    plisBP(p, parPartie).forEach((ply, r) => { if (!faits.has(ply)) (rangs[r] = rangs[r] || []).push({ p, ply }); });
  }
  return rangs.flat().slice(0, limite);
}
/* Une position : ce que Stockfish pense de chaque coup, et ta meilleure
   réponse. Rangée en abrégé : l = « uci:score:réponse:code … », où le code
   garde les indices coûteux à recalculer (échanges, tactiques ; voir
   Bot.traitsPosition), et a = la plus grosse perte en prise avant le coup. */
async function analyserPositionBP(moteur, p, ply) {
  const b = new Chess(); let prec = null;
  for (let i = 0; i < ply; i++) { try { prec = b.move(p.sans[i]); } catch (e) { return { p: ply, x: 1 }; } }
  const fen = b.fen(), n = b.moves().length;
  let joue = null;
  try { const m = new Chess(fen).move(p.sans[ply]); joue = m.from + m.to + (m.promotion || ''); } catch (e) { return { p: ply, x: 1 }; }
  if (n < 2) return { p: ply, x: 1 };
  const lignes = await moteur.multi(fen, BP_CFG.noeuds, Math.min(BP_CFG.candidats, n));
  const reste = ply >= 2 && typeof p.clks[ply - 2] === 'number' ? Math.round(p.clks[ply - 2] * 10) / 10 : null;
  const x = {
    p: ply, f: fen, r: prec ? prec.from + prec.to + (prec.promotion || '') : null, j: joue,
    e: p.eloAdv, t: reste, s: p.score,
  };
  const t = Bot.traitsPosition(fen, x.r, lignes, { elo: x.e || 400, reste, ply });
  const code = (u) => { const i = t ? t.ucis.indexOf(u) : -1; return i < 0 ? '' : t.cout.c[i]; };
  x.a = t ? t.cout.a : 0;
  x.l = lignes.map(l => l.uci + ':' + l.cp + ':' + ((l.pv && l.pv[1]) || '') + ':' + code(l.uci)).join(' ');
  const y = t ? t.ucis.indexOf(joue) : -1;
  BP.cache.set(p.url + '|' + ply, y < 0 ? { vide: true } : { X: t.X, y, pertes: t.pertes });
  return x;
}
const lignesBP = (x) => x.l.split(' ').map(t => { const [uci, cp, rep] = t.split(':'); return { uci, cp: +cp, pv: [uci, rep || null] }; });
const coutBP = (x) => (x.a === undefined ? null
  : { a: x.a, c: x.l.split(' ').map(t => { const c = t.split(':')[3]; return c === undefined || c === '' ? null : +c; }) });

/* Analyse la file, en sauvegardant au fur et à mesure. `arret()` : vrai
   quand on a demandé d'arrêter (bouton du bot, ou celui de l'import). */
async function deroulerBP(parties, moteur, log, arret, limite) {
  const file = fileBP(parties, limite), pos = positionsBot();
  BP.fait = 0; BP.total = file.length; BP.t0 = Date.now();
  if (file.length) log(tx('{0} position(s) à faire noter par Stockfish…', [file.length]));
  for (const { p, ply } of file) {
    if (arret()) break;
    const x = await analyserPositionBP(moteur, p, ply);
    (pos[p.url] = pos[p.url] || []).push(x);
    BP.fait++;
    if (BP.fait % 25 === 0) { sauver(); majProgressionBP(); }
  }
  sauver();
}

/* ------------------------------------------------------------- l'apprentissage */
async function exemplesBP() {
  const pos = positionsBot(), rows = [];
  const total = nbPositionsBot();
  let k = 0;
  BP.fait = 0; BP.total = total; BP.t0 = Date.now();
  for (const [url, l] of Object.entries(pos)) for (const x of l) {
    if (x.x) continue;
    k++;
    const cle = url + '|' + x.p;
    let t = BP.cache.get(cle);
    if (!t) {
      const r = Bot.traitsPosition(x.f, x.r, lignesBP(x), { elo: x.e || 400, reste: x.t, ply: x.p }, coutBP(x));
      const y = r ? r.ucis.indexOf(x.j) : -1;
      t = y < 0 ? { vide: true } : { X: r.X, y, pertes: r.pertes };
      BP.cache.set(cle, t);
      if (k % 20 === 0) { BP.fait = k; majProgressionBP(); await pauseBP(); }
    }
    if (t.vide) continue;
    rows.push({ X: t.X, y: t.y, pertes: t.pertes, g: url, elo: x.e || 400, ply: x.p, s: x.s, poids: 1 });
  }
  return rows;
}
/* Validation croisée par partie (5 plis) : le bot standard, le modèle
   simple et, avec assez de positions, le réseau à 8 neurones. On garde le
   meilleur des deux modèles appris sur les parties qu'ils n'ont pas vues. */
async function comparerBP(rows, avecReseau) {
  const k = 5, parties = [...new Set(rows.map(r => r.g))];
  const pli = new Map(parties.map((g, i) => [g, i % k]));
  const acc = { regle: [], simple: [], reseau: [] }, iterations = [];
  for (let f = 0; f < k; f++) {
    const app = rows.filter(r => pli.get(r.g) !== f), test = rows.filter(r => pli.get(r.g) === f);
    if (!app.length || !test.length) continue;
    BP.message = tx('Test {0} sur {1}…', [f + 1, k]); majProgressionBP();
    const w = await Bot.entrainer(app, { pendant: pauseBP });
    acc.simple.push(Bot.mesurer(test, (r) => Bot.probasModele({ w }, r.X)));
    acc.regle.push(Bot.mesurer(test, (r) => Bot.probasRegle(r, r.elo || 400, r.ply || 30)));
    if (avecReseau) {
      /* arrêt précoce : une partie sur sept de l'apprentissage sert de contrôle */
      const gs = [...new Set(app.map(r => r.g))], val = new Set(gs.filter((g, i) => i % 7 === 3));
      const m = await Bot.entrainerReseau(app.filter(r => !val.has(r.g)),
        { H: BP_CFG.neurones, val: app.filter(r => val.has(r.g)), pendant: pauseBP });
      acc.reseau.push(Bot.mesurer(test, (r) => Bot.probasModele(m, r.X)));
      iterations.push(m.iterations);
    }
  }
  const moy = (l) => {
    const n = l.reduce((a, x) => a + x.n, 0);
    return n ? Object.fromEntries(['ll', 'top1', 'top3', 'gaffesPrevues', 'gaffesObservees'].map(c => [c, l.reduce((a, x) => a + x[c] * x.n, 0) / n])) : null;
  };
  const it = iterations.sort((a, b) => a - b)[Math.floor(iterations.length / 2)] || null;
  return { regle: moy(acc.regle), simple: moy(acc.simple), reseau: moy(acc.reseau), iterations: it };
}
async function entrainerBP(log, sansTest) {
  etapeBP(tx('Il calcule les indices de chaque coup'));
  const rows = await exemplesBP();
  if (rows.length < BP_CFG.minPositions) {
    throw new Error(tx('Pas assez de positions pour apprendre ({0}, il en faut au moins {1}).', [rows.length, BP_CFG.minPositions]));
  }
  const bp = S.d.botPerso = S.d.botPerso || {};
  const avecReseau = rows.length >= BP_CFG.minReseau;
  etapeBP(tx('Il apprend, puis se teste sur des parties qu’il n’a pas vues'));
  /* après un import, on garde la forme choisie au dernier test complet */
  let mes = bp.mesures, forme = bp.forme || 'simple', iter = bp.iterReseau || 80;
  if (!sansTest || !mes) {
    const c = await comparerBP(rows, avecReseau);
    forme = c.reseau && c.reseau.ll > c.simple.ll + 0.005 ? 'reseau' : 'simple';
    mes = { modele: forme === 'reseau' ? c.reseau : c.simple, simple: c.simple, reseau: c.reseau, regle: c.regle };
    if (c.iterations) iter = c.iterations;
  }
  BP.message = tx('Apprentissage sur toutes les positions…'); majProgressionBP();
  const coriace = rows.map(r => Object.assign({}, r, { poids: Bot.POIDS_CORIACE[r.s] || 1 }));
  const w = await Bot.entrainer(rows, { pendant: pauseBP });
  const wc = await Bot.entrainer(coriace, { pendant: pauseBP });
  let m = { w }, mc = { w: wc };
  if (forme === 'reseau') {
    /* après un import, le réseau repart du précédent : moins d'itérations */
    const avant = sansTest && bp.m && bp.m.H ? bp.m : null, suite = Math.max(10, Math.round(iter / 2));
    m = await Bot.entrainerReseau(rows, { H: BP_CFG.neurones, iterations: avant ? suite : iter, depart: avant, pendant: pauseBP });
    mc = await Bot.entrainerReseau(coriace, { H: BP_CFG.neurones, iterations: suite, depart: m, pendant: pauseBP });
  }
  const prevu = (mod) => Bot.mesurer(rows, (r) => Bot.probasModele(mod, r.X)).gaffesPrevues;
  Object.assign(bp, {
    version: 1, traits: Bot.TRAITS.slice(), forme, w, wc, m, mc, iterReseau: iter, maj: aujourdhui(),
    nbPositions: rows.length, nbParties: new Set(rows.map(r => r.g)).size,
    mesures: Object.assign({}, mes, { gaffesCoriace: prevu(mc) }),
    eloMoyen: Math.round(rows.reduce((a, r) => a + r.elo, 0) / rows.length),
  });
  sauver();
  log(tx('Bot personnalisé entraîné sur {0} positions de {1} parties.', [bp.nbPositions, bp.nbParties]));
}

/* ------------------------------------------------------------- créer, mettre à jour */
async function creerBotPerso() {
  if (BP.enCours) return;
  if (DEGRADE) { BP.erreur = tx('Le bot personnalisé a besoin de Stockfish : lance l’entraîneur avec son serveur local.'); rendrePerso(); return; }
  const ps = (S.d.reglages.pseudo || '').trim() || (S.d.reglages.pseudoLichess || '').trim();
  if (!ps && !Object.keys(S.d.parties || {}).length) {
    BP.erreur = tx('Indique d’abord ton pseudo chess.com ou Lichess dans l’onglet Importer.'); rendrePerso(); return;
  }
  Object.assign(BP, { enCours: true, stop: false, erreur: null, message: '' });
  rendrePerso();
  const log = (m) => { BP.message = m; majProgressionBP(); };
  try {
    etapeBP(tx('Il récupère toutes tes parties'));
    const parties = await recupererPartiesBP(log);
    if (BP.stop) throw new Error(tx('Interrompu.'));
    if (!parties.length) throw new Error(tx('Aucune partie trouvée : vérifie ton pseudo dans l’onglet Importer.'));
    const maj = !!botPerso();
    const neuves = ajouterAuLivreBP(parties);
    etapeBP(tx('Stockfish note tous les coups possibles de tes adversaires'));
    if (!BP.moteur) BP.moteur = new Moteur();
    await BP.moteur.pret();
    /* mise à jour : les parties nouvelles d'abord, sans plafond ; ensuite,
       jusqu'au plafond, ce qu'un arrêt avait laissé en route */
    if (maj && neuves.length) await deroulerBP(neuves, BP.moteur, log, () => BP.stop, Infinity);
    await deroulerBP(parties, BP.moteur, log, () => BP.stop, Math.max(0, BP_CFG.maxPositions - nbPositionsBot()));
    await entrainerBP(log);
  } catch (e) {
    BP.erreur = e.message; console.warn('bot perso', e);
  } finally {
    BP.enCours = false; BP.stop = false;
    rendrePerso(); majAdversaires();
  }
}
/* Le livre d'ouvertures : les parties pas encore comptées (une partie est
   comptée dès qu'elle a son entrée dans S.d.botPositions). */
function ajouterAuLivreBP(parties) {
  const pos = positionsBot();
  const neuves = parties.filter(p => !(p.url in pos));
  S.d.botPerso = S.d.botPerso || {};
  S.d.botPerso.livre = Bot.compterLivre(S.d.botPerso.livre || {}, neuves);
  for (const p of neuves) pos[p.url] = [];
  sauver();
  return neuves;
}
/* Appelé à la fin d'un import : les nouvelles parties sont apprises. */
async function majBotPersoApresImport(nouvelles, moteur, log) {
  if (!botPerso() || BP.enCours || DEGRADE) return;
  const neuves = ajouterAuLivreBP(nouvelles.map(partieBP).filter(Boolean));
  if (!neuves.length) return;
  BP.enCours = true;
  try {
    log(tx('Bot personnalisé : {0} nouvelle(s) partie(s) à apprendre…', [neuves.length]));
    if (!moteur) { moteur = BP.moteur = BP.moteur || new Moteur(); await moteur.pret(); }
    await deroulerBP(neuves, moteur, () => { }, () => S.stop || BP.stop, Infinity);
    await entrainerBP(log, true);
  } catch (e) {
    log(tx('Bot personnalisé : {0}', [e.message]));
  } finally { BP.enCours = false; }
}

/* ------------------------------------------------------------- l'affichage */
function etapeBP(t) { BP.etape = t; BP.fait = 0; BP.total = 0; majProgressionBP(); }
function majProgressionBP() {
  const z = $('#perso-prog'); if (!z) return;
  $('#perso-etape').textContent = BP.etape;
  const barre = $('#perso-barre');
  barre.hidden = !BP.total;
  if (BP.total) $('i', barre).style.width = Math.round(100 * BP.fait / BP.total) + '%';
  let t = BP.message || '';
  if (BP.total && BP.fait >= 5) {
    const reste = (Date.now() - BP.t0) / BP.fait * (BP.total - BP.fait) / 60000;
    t = tx('{0} sur {1} · encore {2} min environ', [BP.fait, BP.total, Math.max(1, Math.round(reste))]);
  }
  $('#perso-detail').textContent = t;
}
const pctBP = (v) => (Math.round(v * 1000) / 10).toLocaleString(LOCALE_JEU()) + ' %';
/* Ce qu'il a appris : les indices qui pèsent le plus, en « × n » à coup
   comparable. */
const LIBELLES_BP = () => ({
  roque: tx('Roquer'), prise: tx('Prendre'), reprise: tx('Reprendre aussitôt'), echec: tx('Faire échec'),
  sauve: tx('Mettre à l’abri une pièce attaquée'), menace_ignoree: tx('Laisser une menace sans réponse'),
  gratuite: tx('Prendre une pièce gratuite'), roi_tot: tx('Bouger le roi avant le 30e coup'),
  dame_tot: tx('Sortir la dame avant le 7e coup'), promo: tx('Sous-promouvoir'),
  gaffe_temps: tx('Gaffer avec moins d’une minute à la pendule'),
  joue_tac: tx('Jouer un coup qui crée une fourchette ou un clouage'), joue_mat: tx('Trouver un mat en un'),
  cede_tac_gaffe: tx('Gaffer sur une tactique plutôt que sur une pièce en prise'), cede_mat: tx('Laisser un mat en un'),
  p_n: tx('Jouer un cavalier'), p_b: tx('Jouer un fou'), p_r: tx('Jouer une tour'), p_q: tx('Jouer la dame'),
});
function appris(bp) {
  const L = LIBELLES_BP();
  return bp.traits.map((n, i) => ({ n, w: bp.w[i] })).filter(x => L[x.n] && Math.abs(x.w) >= 0.3)
    .sort((a, b) => Math.abs(b.w) - Math.abs(a.w)).slice(0, 8);
}
const facteurBP = (w) => (w >= 0 ? '× ' : '÷ ') + (Math.round(Math.exp(Math.abs(w)) * 10) / 10).toLocaleString(LOCALE_JEU());

function rendrePerso() {
  const z = $('#jouer-perso'); if (!z) return;
  z.innerHTML = '';
  const bp = botPerso();
  if (BP.enCours) {
    z.append(el('div', { id: 'perso-prog' },
      el('p', { style: 'margin:0 0 6px' }, el('strong', { id: 'perso-etape' })),
      el('div', { class: 'progress', id: 'perso-barre', hidden: true }, el('i')),
      el('p', { class: 'sous', id: 'perso-detail', style: 'margin:0 0 12px' }),
      el('div', { class: 'ligne-ctrl', style: 'margin:0' },
        el('button', { class: 'b g', onclick: (e) => { BP.stop = true; e.currentTarget.disabled = true; } },
          tx('Arrêter (il apprend sur ce qui est fait)')))));
    majProgressionBP();
    return;
  }
  if (!bp) {
    z.append(el('p', { style: 'margin:0 0 10px' },
      tx('Un bot qui joue comme tes adversaires. Il récupère toutes tes parties, fait noter par Stockfish les coups possibles de tes adversaires dans quelques positions de chacune, puis apprend comment ils choisissent : ce qui les attire (prendre, faire échec, roquer), ce qu’ils voient et ce qu’ils ratent, quand ils gaffent.')),
    el('p', { class: 'sous', style: 'margin:0 0 12px' },
      tx('Compte une demi-heure environ pour 500 parties, l’entraîneur ouvert. Tu peux arrêter en route : il apprend sur ce qui est fait. Ensuite, chaque import le réentraîne tout seul.')));
  } else {
    const m = bp.mesures || {}, mo = m.modele || {}, re = m.regle || {};
    z.append(el('p', { style: 'margin:0 0 10px' },
      tx('Entraîné le {0} sur {1} positions de {2} parties (adversaires de {3} Elo en moyenne).',
        [jourCourt(bp.maj), bp.nbPositions.toLocaleString(LOCALE_JEU()), bp.nbParties, bp.eloMoyen])),
    el('p', { class: 'sous', style: 'margin:0 0 6px' }, tx('Sur des parties qu’il n’a jamais vues :')),
    el('div', { class: 'table-large' }, el('table', { class: 'perso-mesures' },
      el('thead', {}, el('tr', {}, el('th', {}, ''), el('th', {}, tx('bot personnalisé')), el('th', {}, tx('bot standard')))),
      el('tbody', {},
        el('tr', {}, el('td', {}, tx('Son premier choix est le coup que ton adversaire a joué')), el('td', {}, pctBP(mo.top1)), el('td', {}, pctBP(re.top1))),
        el('tr', {}, el('td', {}, tx('Ce coup est dans ses trois premiers choix')), el('td', {}, pctBP(mo.top3)), el('td', {}, pctBP(re.top3))),
        el('tr', {}, el('td', {}, tx('Gaffes prévues (tes adversaires : {0})', [pctBP(mo.gaffesObservees)])), el('td', {}, pctBP(mo.gaffesPrevues)), el('td', {}, pctBP(re.gaffesPrevues)))))),
    el('p', { class: 'sous', style: 'margin:8px 0 4px' },
      bp.forme === 'reseau' ? tx('Forme retenue : le réseau à {0} neurones, meilleur que le modèle simple sur ces parties-là.', [bp.m.H])
        : m.reseau ? tx('Forme retenue : le modèle simple (le réseau à {0} neurones n’a pas fait mieux).', [BP_CFG.neurones])
          : tx('Forme retenue : le modèle simple. Le réseau à {0} neurones est essayé à partir de {1} positions.', [BP_CFG.neurones, BP_CFG.minReseau])),
    el('p', { class: 'sous', style: 'margin:0 0 12px' },
      tx('La version coriace compte trois fois les parties que tu as perdues : elle gaffe sur {0} des coups.', [pctBP(m.gaffesCoriace || 0)])));
    const l = appris(bp);
    if (l.length) {
      z.append(el('p', { style: 'margin:0 0 6px' }, el('strong', {}, tx('Ce qu’il a appris de tes adversaires, à coup comparable :')),
        bp.forme === 'reseau' ? ' ' + tx('(lu sur le modèle simple, plus facile à lire ; le réseau y ajoute des combinaisons de ces indices)') : null),
        el('ul', { class: 'perso-appris' }, ...l.map(x => el('li', {}, el('span', { class: 'tag ' + (x.w >= 0 ? 'grn' : 'red') }, facteurBP(x.w)), ' ', LIBELLES_BP()[x.n]))));
    }
  }
  const ligne = el('div', { class: 'ligne-ctrl', style: 'margin:12px 0 0' },
    el('button', { class: 'b', onclick: creerBotPerso }, bp ? tx('Mettre à jour') : tx('Créer mon bot personnalisé')));
  if (bp) {
    ligne.append(el('button', { class: 'b g', onclick: () => { $('#jouer-adversaire').value = 'perso'; choisirAdversaire(); window.scrollTo(0, 0); } }, tx('Jouer contre lui')),
      el('button', { class: 'b g', onclick: (e) => {
        if (!confirmerDeux(e.currentTarget, tx('Confirmer la suppression'))) return;
        delete S.d.botPerso; delete S.d.botPositions; BP.cache.clear(); sauver(); rendrePerso(); majAdversaires();
      } }, tx('Supprimer')));
  }
  z.append(ligne);
  if (BP.erreur) z.append(el('p', { class: 'msg', style: 'margin:10px 0 0' }, BP.erreur));
}
/* Le choix de l'adversaire : standard, personnalisé ou coriace. */
function majAdversaires() {
  const s = $('#jouer-adversaire'); if (!s) return;
  const ok = !!botPerso();
  for (const o of s.options) if (o.value !== 'standard') o.disabled = !ok;
  const voulu = S.d.reglages.botAdversaire || 'standard';
  s.value = ok || voulu === 'standard' ? voulu : 'standard';
}
function choisirAdversaire() {
  S.d.reglages.botAdversaire = $('#jouer-adversaire').value; sauver();
  if (typeof majCompris === 'function') majCompris();
}
