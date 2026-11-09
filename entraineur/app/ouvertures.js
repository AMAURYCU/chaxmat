/* ==========================================================================
   Ouvertures : répertoires nommés, éditeur par répertoire, entraînement sur
   un répertoire entier, et leçons.

   Chargé avant app.js. Les fonctions d'ici s'appuient sur les utilitaires
   d'app.js ($, el, S, sauver, Rep, Chess, miniEchiquier…), qui existent au
   moment où elles sont appelées.

   Un répertoire = { id, nom, camp: 'w'|'b', aretes: [...], notes: {cle: texte},
   srs: {cle: échéance}, ratees: [cle…], cree, maj, origine? }.
   Les arêtes ont le format du graphe de repertoire.js : {d, u, s, v, t}.
   ========================================================================== */
'use strict';

const VERSION_OUV = 2;
const FL_VERT = '#2f7d4f', FL_ROUGE = '#b5382c', FL_GRIS = '#8a8f84';

/* ---------------------------------------------------------------- modèle */

function repertoires() { S.d.reps = S.d.reps || {}; return S.d.reps; }
function repDe(id) { return id ? (repertoires()[id] || null) : null; }
const campNom = (c) => (c === 'w' ? tx('blancs') : tx('noirs'));
const cleDepart = () => Rep.cle(new Chess());

/* Blancs d'abord, puis par nom. */
function listeReps() {
  return Object.values(repertoires()).sort((a, b) =>
    (a.camp === b.camp ? 0 : (a.camp === 'w' ? -1 : 1)) || a.nom.localeCompare(b.nom, 'fr'));
}

const _graphes = new Map();
function grapheRep(id) {
  const r = repDe(id);
  if (!r) return new Rep.Graphe([]);
  const c = _graphes.get(id);
  if (c && c.src === r.aretes) return c.g;
  const g = new Rep.Graphe(r.aretes || []);
  _graphes.set(id, { src: r.aretes, g });
  return g;
}
function majGrapheRep(id, g) {
  const r = repDe(id);
  if (!r) return;
  r.aretes = g.aretes; r.maj = Date.now();
  _graphes.set(id, { src: r.aretes, g });
  if (typeof _entrantesCache !== 'undefined') _entrantesCache = null;
  _ecartsCache = null;
  sauver();
  /* Les pastilles des onglets dépendent du répertoire (positions à revoir,
     écarts) : un ajout ou une suppression dans l'éditeur doit s'y voir. */
  try { if (typeof majBadges === 'function') majBadges(); } catch (e) { ignorer(e, 'ouvertures : badges'); }
}

function nouvelIdRep() {
  return 'rep-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function creerRepertoire({ nom, camp, aretes = [], notes = {}, id = null, origine = null }) {
  const reps = repertoires();
  const k = id && !reps[id] ? id : nouvelIdRep();
  reps[k] = {
    id: k, nom: nom.trim(), camp, aretes: aretes.map(a => Object.assign({}, a)),
    notes: Object.assign({}, notes), srs: {}, ratees: [],
    cree: Date.now(), maj: Date.now(),
  };
  if (origine) reps[k].origine = origine;
  _ecartsCache = null;
  sauver();
  return k;
}
function supprimerRepertoire(id) {
  delete repertoires()[id];
  _graphes.delete(id);
  _ecartsCache = null;
  if (typeof E !== 'undefined' && E.rep === id) E.rep = null;
  if (S.d.repCourant === id) delete S.d.repCourant;
  sauver();
}

/* Les chiffres d'un répertoire : coups, positions où tu dois trouver ton coup,
   lignes (bouts de branches), révisions dues, positions ratées. */
function statsRep(r) {
  const g = grapheRep(r.id);
  const atteint = g.atteignablesDepuis(cleDepart());
  const mes = g.mesPositions(r.camp);
  let lignes = 0;
  for (const k of atteint) if (!g.coupsDe(k).length && k !== cleDepart()) lignes++;
  const dues = Rep.portees.dues(g, r.camp, r.srs || {}, Date.now()).size;
  const vues = Object.keys(r.srs || {}).filter(k => mes.has(k)).length;
  const ratees = (r.ratees || []).filter(k => mes.has(k)).length;
  return { coups: g.nbCoups, positions: mes.size, lignes, dues, vues, ratees, nouvelles: mes.size - vues };
}

/* ------------------------------------------------------- écarts de parties
   Une position de tes parties qui est dans un de tes répertoires (de ta
   couleur), où tu as joué un coup que le répertoire n'a pas. Calculé à la
   volée : modifier un répertoire met la liste à jour. On s'arrête dès que la
   partie sort de tous les répertoires. */
let _ecartsCache = null;
function contexteEcarts() {
  const sig = listeReps().map(r => r.id + ':' + (r.maj || 0) + ':' + (r.aretes || []).length).join('|');
  if (_ecartsCache && _ecartsCache.sig === sig) return _ecartsCache;
  const parCamp = { w: [], b: [] }, connues = { w: new Set(), b: new Set() };
  for (const r of listeReps()) {
    const g = grapheRep(r.id);
    parCamp[r.camp].push({ r, g });
    for (const a of g.aretes) { connues[r.camp].add(a.d); connues[r.camp].add(a.v); }
  }
  _ecartsCache = { sig, parCamp, connues, parUrl: new Map() };
  return _ecartsCache;
}
function ecartsOuverture(p, ctx) {
  ctx = ctx || contexteEcarts();
  const moi = p.couleur, gs = ctx.parCamp[moi] || [], connues = ctx.connues[moi];
  if (!gs.length) return [];
  const sans = typeof p.sans === 'string' ? p.sans.split(' ').filter(Boolean)
    : (p.coups || []).map(c => c.san);
  const j = new Chess(), out = [];
  for (let i = 0; i < sans.length && i < 60; i++) {
    const fen = j.fen(), k = Rep.cle(j);
    if (!connues.has(k)) break;                    // sorti de tous les répertoires
    let m = null;
    try { m = j.move(sans[i]); } catch (e) { break; }
    if (!m) break;
    if (m.color !== moi) continue;
    const u = m.from + m.to + (m.promotion || '');
    let hit = null, dedans = false;
    for (const { r, g } of gs) {
      const cs = g.coupsDe(k);
      if (!cs.length) continue;
      if (cs.some(a => a.u === u)) { dedans = true; break; }
      if (!hit) hit = { r, a: cs[0] };
    }
    if (dedans || !hit) continue;
    out.push({
      rep: hit.r.id, repNom: hit.r.nom, fen, joue: m.san, attendu: hit.a.s,
      numero: Math.floor(i / 2) + 1, couleur: moi, url: p.url, date: p.date,
    });
  }
  return out;
}
function ecartsDe(p) {
  const ctx = contexteEcarts();
  let e = ctx.parUrl.get(p.url);
  if (!e) { e = ecartsOuverture(p, ctx); ctx.parUrl.set(p.url, e); }
  return e;
}

/* ------------------------------------------------------------- versions
   `versionOuv` date le format des répertoires (2 : plusieurs répertoires
   nommés, chacun avec son arbre). Des données plus anciennes n'existent pas
   dans la version publique : on pose simplement le numéro. */
function migrerOuvertures() {
  if ((S.d.versionOuv || 1) >= VERSION_OUV) return false;
  S.d.versionOuv = VERSION_OUV;
  if (!S.d.reps) S.d.reps = {};
  sauver();
  return false;
}

/* Les répertoires d'exemple (reps-initiaux.js) ne sont jamais ajoutés d'office :
   on les choisit au premier lancement, ou plus tard dans la liste ci-dessous. */
function ajouterExemple(id, silencieux) {
  const r = (window.REPS_INITIAUX || []).find(x => x.id === id);
  if (!r || repertoires()[r.id]) return false;
  creerRepertoire({ nom: tx(r.nom), camp: r.camp, aretes: r.aretes, notes: r.notes || {}, id: r.id, origine: r.id });
  sauver();
  if (!silencieux) vueOuvertures();
  return true;
}

/* ===================================================== onglet Ouvertures */

function vueOuvertures() {
  if (S.leconOuverte) { afficherLecon(S.leconOuverte); return; }
  $('#ouv-accueil').hidden = false;
  $('#ouv-lecon').hidden = true;
  rendreBandeauMigration();
  rendreListeReps();
  rendreLecons();
  if (typeof rendreEcarts === 'function') rendreEcarts();
}

function rendreBandeauMigration() {
  const z = $('#ouv-migration'); if (z) z.innerHTML = '';
}

/* ---------- la liste des répertoires ---------- */
function rendreListeReps() {
  const z = $('#liste-reps'); z.innerHTML = '';
  const liste = listeReps();
  if (!liste.length) {
    z.append(el('div', { class: 'vide' },
      tx('Aucun répertoire pour l’instant. « Créer un répertoire » : un nom, une couleur, puis l’éditeur. Ou pars d’un répertoire d’exemple, ci-dessous.')));
  }
  for (const r of liste) z.append(carteRep(r));
  const exemples = (window.REPS_INITIAUX || []).filter(r => !repertoires()[r.id]);
  if (exemples.length) {
    z.append(el('div', { class: 'reps-exemples' },
      el('span', { class: 'sous' }, tx('Répertoires d’exemple, chacun avec sa leçon :')),
      ...exemples.map(r => el('button', { class: 'b g', onclick: () => ajouterExemple(r.id) },
        `+ ${tx(r.nom)} (${campNom(r.camp)})`))));
  }
}

function carteRep(r) {
  const s = statsRep(r);
  const lecon = lecons().find(l => l.rep === (r.origine || r.id));
  const etat = !s.positions ? el('span', { class: 'tag' }, tx('vide'))
    : !s.vues ? el('span', { class: 'tag' }, tx('jamais entraîné'))
      : s.dues ? el('span', { class: 'tag amb' }, tx('{0} à revoir', [s.dues]))
        : el('span', { class: 'tag grn' }, tx('à jour'));
  const neuves = s.vues && s.nouvelles ? el('span', { class: 'tag' }, tx('{0} jamais vue(s)', [s.nouvelles])) : null;
  const carte = el('div', { class: 'carte rep-carte' },
    el('div', { class: 'rep-tete' },
      el('span', { class: 'rep-pion ' + r.camp, 'aria-hidden': 'true' }),
      el('h3', {}, r.nom),
      el('span', { class: 'tag' }, campNom(r.camp)),
      etat, neuves),
    el('p', { class: 'sous', style: 'margin:4px 0 12px' },
      tx('{0} position(s) où tu dois trouver ton coup · {1} ligne(s) · {2} coups', [s.positions, s.lignes, s.coups])
      + (s.ratees ? tx(' · {0} ratée(s) à reprendre', [s.ratees]) : '')),
    el('div', { class: 'ligne-ctrl', style: 'margin:0' },
      el('button', { class: 'b', disabled: !s.positions,
        onclick: () => { onglet('entrainement'); demarrerArbre({ rep: r.id, portee: 'tout', prof: 0 }); } },
        tx('S’entraîner sur tout le répertoire')),
      s.dues ? el('button', { class: 'b g',
        onclick: () => { onglet('entrainement'); demarrerArbre({ rep: r.id, portee: 'dues', prof: 0 }); } },
        tx('Ce qui est dû ({0})', [s.dues])) : null,
      s.ratees ? el('button', { class: 'b g',
        onclick: () => { onglet('entrainement'); demarrerArbre({ rep: r.id, portee: 'erreurs', prof: 0 }); } },
        tx('Mes erreurs ({0})', [s.ratees])) : null,
      el('button', { class: 'b g', onclick: () => ouvrirRepEditeur(r.id) }, tx('Éditer')),
      lecon ? el('button', { class: 'b g', onclick: () => ouvrirLecon(lecon.id) }, tx('Lire la leçon')) : null),
    el('div', { class: 'ligne-ctrl rep-actions', style: 'margin:10px 0 0' },
      el('button', { class: 'lien', onclick: (ev) => renommerInline(r, ev.target) }, tx('renommer')),
      el('button', { class: 'lien', onclick: () => exporterRepPgn(r.id) }, tx('exporter en PGN')),
      el('button', { class: 'lien danger', onclick: (ev) => {
        if (!confirmerDeux(ev.target, tx('cliquer encore pour supprimer'))) return;
        supprimerRepertoire(r.id); vueOuvertures(); majBadges();
      } }, tx('supprimer'))));
  return carte;
}

function renommerInline(r, bouton) {
  const champ = el('input', { type: 'text', value: r.nom, maxlength: 60, 'aria-label': tx('Nouveau nom') });
  const ok = () => {
    const n = champ.value.trim();
    if (n && n !== r.nom) { r.nom = n; r.maj = Date.now(); sauver(); }
    vueOuvertures();
  };
  champ.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') ok(); if (ev.key === 'Escape') vueOuvertures(); });
  const zone = el('span', { class: 'renommer' }, champ,
    el('button', { class: 'b', onclick: ok }, 'OK'),
    el('button', { class: 'b g', onclick: () => vueOuvertures() }, tx('Annuler')));
  bouton.replaceWith(zone);
  champ.focus(); champ.select();
}

/* ---------- créer un répertoire ---------- */
function ouvrirCreation() {
  const f = $('#form-creer-rep');
  f.hidden = false;
  $('#creer-nom').value = '';
  $('#creer-etat').textContent = '';
  $('#creer-nom').focus();
}
function validerCreation() {
  const nom = $('#creer-nom').value.trim();
  const camp = ($('input[name="creer-camp"]:checked') || {}).value;
  const etat = $('#creer-etat');
  if (!nom) { etat.textContent = tx('Donne-lui un nom : c’est comme ça que tu le retrouveras.'); $('#creer-nom').focus(); return; }
  if (!camp) { etat.textContent = tx('Choisis la couleur : blancs ou noirs.'); return; }
  if (listeReps().some(r => r.nom.toLowerCase() === nom.toLowerCase())) {
    etat.textContent = tx('Un répertoire porte déjà ce nom.'); return;
  }
  const id = creerRepertoire({ nom, camp });
  $('#form-creer-rep').hidden = true;
  ouvrirRepEditeur(id);
}
function brancherCreation() {
  $('#btn-creer-rep').onclick = ouvrirCreation;
  $('#creer-ok').onclick = validerCreation;
  $('#creer-annuler').onclick = () => { $('#form-creer-rep').hidden = true; };
  $('#creer-nom').addEventListener('keydown', (ev) => { if (ev.key === 'Enter') validerCreation(); });
}

/* Ouvre l'éditeur sur un répertoire, à la position de départ — ou à la
   position k (clé), atteinte par le plus court chemin du répertoire. */
function ouvrirRepEditeur(id, k) {
  E.rep = id; S.d.repCourant = id;
  const r = repDe(id);
  E.camp = r ? r.camp : 'w'; E.vue = E.camp;
  E.jeu = new Chess(); E.ligne = []; E.dernierAjout = null; E.annuler = null;
  if (k && r) {
    const ch = grapheRep(id).cheminVers(k) || [];
    for (const a of ch) {
      const m = E.jeu.move({ from: a.u.slice(0, 2), to: a.u.slice(2, 4), promotion: a.u[4] || 'q' });
      if (!m) break;
      E.ligne.push(m.san);
    }
  }
  sauver();
  onglet('editeur');
}

/* Le sélecteur de répertoire en haut de l'éditeur. */
function majChoixRep() {
  const s = $('#ed-rep-choix'); if (!s) return;
  s.innerHTML = '';
  const liste = listeReps();
  if (!liste.length) s.append(el('option', { value: '', disabled: true, selected: true }, tx('Aucun répertoire')));
  for (const r of liste) s.append(el('option', { value: r.id }, `${r.nom} — ${campNom(r.camp)}`));
  s.append(el('option', { value: '__nouveau' }, tx('+ Nouveau répertoire…')));
  if (E.rep && repDe(E.rep)) s.value = E.rep;
}

function exporterRepPgn(id) {
  const r = repDe(id); if (!r) return;
  const pgn = Rep.exporterPgn(grapheRep(id), { nom: r.nom, camp: r.camp, commentaires: r.notes || {} });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([pgn], { type: 'application/x-chess-pgn' }));
  a.download = r.nom.replace(/[^\p{L}\p{N} _-]+/gu, '').trim().replace(/\s+/g, '-').toLowerCase() + '.pgn';
  document.body.append(a); a.click(); a.remove();
}

/* ============================================ Stockfish dans l'éditeur
   Les meilleurs coups de la position, calculés dans le navigateur. Le
   résultat est gardé par position : revenir en arrière ne relance rien. */
const _sfCache = new Map();
const NOEUDS_EDITEUR = 600000;
function evalTexteEditeur(cp, pourMoi) {
  const v = pourMoi ? cp : -cp;
  if (Math.abs(v) >= 9000) {
    const n = 10000 - Math.abs(v);
    return (v > 0 ? tx('mat en ') : tx('mat contre toi en ')) + n;
  }
  return (v >= 0 ? '+' : '−') + (Math.abs(v) / 100).toFixed(1).replace('.', I18N.dec);
}
async function remplirStockfish(k) {
  const box = $('#ed-stockfish'); if (!box) return;
  box.innerHTML = '';
  if (DEGRADE) {
    box.append(el('div', { class: 'vide' }, tx('Stockfish a besoin du serveur local : lance l’application avec le lanceur de ton système (voir le README).')));
    return;
  }
  const fen = E.jeu.fen();
  const j = new Chess(fen);
  if (j.isGameOver()) { box.append(el('div', { class: 'vide' }, tx('Partie terminée dans cette position.'))); return; }
  let res = _sfCache.get(k);
  if (!res) {
    box.append(el('div', { class: 'vide' }, tx('Stockfish réfléchit…')));
    /* on laisse passer les clics rapides : seule la position où tu t'arrêtes
       est calculée (sinon les demandes s'empilent) */
    await new Promise(ok => setTimeout(ok, 350));
    if (Rep.cle(E.jeu) !== k || !$('#p-editeur').classList.contains('actif')) return;
    try {
      await obtenirMoteur();
      res = await S.moteur.multi(fen, NOEUDS_EDITEUR, 4);
      _sfCache.set(k, res);
    } catch (e) {
      if (Rep.cle(E.jeu) !== k) return;
      box.innerHTML = '';
      box.append(el('div', { class: 'msg ko' }, tx('Stockfish n’a pas pu calculer : ') + e.message));
      return;
    }
    if (Rep.cle(E.jeu) !== k) return;          // la position a changé entre-temps
    box.innerHTML = '';
  }
  const aMoi = E.jeu.turn() === E.camp;      // les scores sont du point de vue du trait
  const g = grEd();
  res.forEach((l, i) => {
    let m = null;
    try { m = new Chess(fen).move({ from: l.uci.slice(0, 2), to: l.uci.slice(2, 4), promotion: l.uci[4] || 'q' }); } catch (e) { /* coup illégal dans cette position : on garde la valeur par défaut */ }
    if (!m) return;
    const connu = !!g.trouver(k, l.uci);
    box.append(el('div', { class: 'cp' + (connu ? ' connu' : ''), onclick: () => ajouterCoupEditeur(m.from, m.to, m) },
      el('span', { class: 'coche' }, connu ? '✓' : ''),
      el('span', { class: 'san' }, fr(m.san)),
      el('span', { class: 'sf-rang' }, i === 0 ? tx('meilleur') : tx('{0} choix', [I18N.ordinal(i + 1)])),
      el('span', { class: 'chiffre' }, evalTexteEditeur(l.cp, aMoi) + tx(' pour toi')),
      el('span', { class: 'tag ' + (connu ? 'grn' : '') },
        connu ? tx('dans le répertoire') : (aMoi ? tx('en faire ton coup') : tx('préparer')))));
  });
  box.append(el('p', { class: 'sous', style: 'margin:6px 0 0' },
    tx('Évaluations Stockfish (WebAssembly), de ton point de vue. À ton tour : le coup à jouer ; au tour adverse : les réponses les plus dangereuses pour toi, à préparer en priorité.')));
}

/* ====================================================================== leçons
   Le contenu vit dans lecons.js (window.LECONS). Une leçon :
   { id, titre, camp, rep, sous, chapeau, sections: [{ id, titre, blocs: [...] }] }
   Blocs : p, h, liste, cle, seq, pos, lignes, table. */

/* les leçons dans la langue de l'interface (lecons.en.js…), sinon en anglais, sinon en français */
const lecons = () => (I18N.langue !== 'fr'
  && (window['LECONS_' + I18N.langue.toUpperCase()] || window.LECONS_EN)) || window.LECONS || [];

function rendreLecons() {
  const z = $('#liste-lecons'); z.innerHTML = '';
  /* même ordre que les répertoires juste au-dessus */
  const ordre = listeReps().map(r => r.origine || r.id);
  const rang = (l) => { const i = ordre.indexOf(l.rep); return i < 0 ? 99 : i; };
  const ls = lecons().slice().sort((a, b) => rang(a) - rang(b));
  if (!ls.length) { z.append(el('div', { class: 'vide' }, tx('Aucune leçon pour l’instant.'))); return; }
  for (const l of ls) {
    const r = listeReps().find(x => (x.origine || x.id) === l.rep);
    z.append(el('div', { class: 'carte lecon-carte' },
      el('div', { class: 'rep-tete' },
        el('span', { class: 'rep-pion ' + l.camp, 'aria-hidden': 'true' }),
        el('h3', {}, l.titre),
        el('span', { class: 'tag' }, campNom(l.camp))),
      el('p', { class: 'sous', style: 'margin:4px 0 8px', html: comptesLecon(l.sous || '', l) }),
      /* le sommaire mène directement à la section */
      el('p', { class: 'lecon-sommaire' }, ...l.sections.flatMap((s, i) => [
        i ? ' · ' : null,
        el('a', { href: '#', class: 'lien-section', onclick: (ev) => { ev.preventDefault(); ouvrirLecon(l.id, s.id); } }, s.titre),
      ].filter(Boolean))),
      el('div', { class: 'ligne-ctrl', style: 'margin:10px 0 0' },
        el('button', { class: 'b', onclick: () => ouvrirLecon(l.id) }, tx('Lire la leçon')),
        r ? el('button', { class: 'b g', onclick: () => { onglet('entrainement'); demarrerArbre({ rep: r.id, portee: 'tout', prof: 0 }); } },
          tx('S’entraîner sur le répertoire')) : null)));
  }
}

function ouvrirLecon(id, section) {
  S.leconOuverte = id;
  if (!$('#p-ouvertures').classList.contains('actif')) onglet('ouvertures');
  else afficherLecon(id);
  const cible = section ? document.getElementById('lec-' + section) : null;
  if (cible) cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.scrollTo(0, 0);
}
function fermerLecon() {
  S.leconOuverte = null;
  vueOuvertures();
  window.scrollTo(0, 0);
}

function afficherLecon(id) {
  const l = lecons().find(x => x.id === id);
  if (!l) { S.leconOuverte = null; vueOuvertures(); return; }
  $('#ouv-accueil').hidden = true;
  const z = $('#ouv-lecon'); z.hidden = false;
  /* Déjà dessinée, et les répertoires n'ont pas bougé depuis : les blocs
     « lignes » se lisent dans le répertoire, une modification dans l'éditeur
     doit donc redessiner la leçon. */
  const sig = id + '|' + listeReps().map(x => x.id + ':' + (x.maj || 0)).join(',');
  if (z.dataset.lecon === sig && z.childNodes.length) return;
  z.dataset.lecon = sig; z.innerHTML = '';
  const r = listeReps().find(x => (x.origine || x.id) === l.rep);
  z.append(
    el('div', { class: 'ligne-ctrl', style: 'margin:0 0 14px' },
      el('button', { class: 'b g', onclick: fermerLecon }, '← Ouvertures'),
      r ? el('button', { class: 'b g', onclick: () => { onglet('entrainement'); demarrerArbre({ rep: r.id, portee: 'tout', prof: 0 }); } },
        tx('S’entraîner sur le répertoire')) : null,
      r ? el('button', { class: 'b g', onclick: () => ouvrirRepEditeur(r.id) }, tx('Ouvrir dans l’éditeur')) : null),
    el('p', { class: 'eyebrow' }, tx('Leçon · {0}', [campNom(l.camp)])),
    el('h2', { class: 'lecon-titre' }, l.titre),
    l.sous ? el('p', { class: 'sous', style: 'margin:0 0 14px', html: comptesLecon(l.sous, l) }) : null,
    l.chapeau ? el('div', { class: 'lecon-chapeau', html: l.chapeau }) : null,
    el('p', { class: 'lecon-legende-mq' },
      el('span', {}, el('i', { class: 'c' }), tx('la pièce dont parle l’explication')),
      el('span', {}, el('i', { class: 'd' }), tx('la pièce en danger, ou la cible'))),
    el('nav', { class: 'lecon-sommaire-nav', 'aria-label': tx('Sommaire') },
      ...l.sections.map((s, i) => el('button', { class: 'b g', onclick: () => {
        const c = document.getElementById('lec-' + s.id);
        if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } }, `${i + 1}. ${s.titre}`))));
  l.sections.forEach((s, i) => {
    const sec = el('section', { class: 'lecon-section', id: 'lec-' + s.id },
      el('div', { class: 'lecon-sh' }, el('span', { class: 'eyebrow' }, `${i + 1} / ${l.sections.length}`), el('span', { class: 'regle' })),
      el('h3', { class: 'lecon-h' }, s.titre));
    for (const b of s.blocs) {
      try { sec.append(blocLecon(b, l)); }
      catch (e) { console.error('bloc de leçon', b, e); sec.append(el('div', { class: 'msg ko' }, tx('Bloc illisible : ') + e.message)); }
    }
    z.append(sec);
  });
  z.append(el('div', { class: 'ligne-ctrl', style: 'margin:30px 0 0' },
    el('button', { class: 'b g', onclick: fermerLecon }, '← Ouvertures'),
    el('button', { class: 'b g', onclick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, tx('↑ Haut de la leçon'))));
}

/* Retire d'une légende le coup par lequel elle commence, s'il est celui de
   l'étiquette `lib` (« 16.Cxd5 », « 8…c4 »). Le numéro et les signes ! ?
   ne comptent pas dans la comparaison. Un point juste après le coup
   (« e3. ») disparaît avec lui ; « ! », « : » ou « , » restent. */
function sansCoupInitial(html, lib) {
  if (!html || !lib) return html;
  const norm = (t) => (t || '').replace(/^\s*\d+\s*(\.{1,3}|…)\s*/, '').replace(/^…/, '').replace(/[!?\s]/g, '');
  const cible = norm(lib);
  if (!cible) return html;
  let m = html.match(/^\s*<span class="mv[^"]*">([^<]*)<\/span>/);
  if (!m) m = html.match(/^\s*((?:\d+\s*(?:\.{1,3}|…)\s*)?…?[^\s<.,:;!?]+)/);
  if (!m || norm(m[1]) !== cible) return html;
  const reste = html.slice(m[0].length).replace(/^\.(\s+|$)/, '').replace(/^\s+/, '');
  const annot = (m[1].match(/[!?]+/) || [''])[0];       // « 14.Cg6 ! » garde son point d'exclamation
  return annot ? `${annot} ${reste}` : reste;
}

/* Rejoue `debut` (SAN) depuis la position initiale ou une FEN. */
function jeuDe(b) {
  const j = b.fen ? new Chess(b.fen) : new Chess();
  for (const s of (b.debut || [])) {
    const m = j.move(s);
    if (!m) throw new Error(tx('coup illégal dans le début : ') + s);
  }
  return j;
}
/* Libellé d'un coup avec son numéro : 3.Cc3 ou 3…Cf6. */
function libelle(fen, san) {
  const p = fen.split(' ');
  const n = parseInt(p[5], 10) || 1;
  return p[1] === 'w' ? `${n}.${fr(san)}` : `${n}…${fr(san)}`;
}
const couleurFl = (c) => (c === 'r' ? FL_ROUGE : c === 'g' ? FL_GRIS : FL_VERT);

/* Les chiffres d'un répertoire ne s'écrivent pas en dur dans une leçon : le
   texte porte {{positions}} ou {{lignes}}, remplacés ici par l'état actuel du
   répertoire (le même calcul que la carte du répertoire dans Ouvertures). */
function comptesLecon(html, l) {
  if (!html || html.indexOf('{{') < 0) return html;
  const r = listeReps().find(x => (x.origine || x.id) === l.rep);
  const st = r ? statsRep(r) : null;
  return html
    .replace(/\{\{positions\}\}/g, st ? (st.positions > 1 ? tx('{0} positions', [st.positions]) : tx('{0} position', [st.positions])) : tx('les positions'))
    .replace(/\{\{lignes\}\}/g, st ? tx('{0} fin{1} de ligne', [st.lignes, st.lignes > 1 ? 's' : '']) : tx('les lignes'));
}

function blocLecon(b, l) {
  switch (b.t) {
    case 'p': return el('p', { class: 'lecon-p', html: comptesLecon(b.html, l) });
    case 'h': return el('h4', { class: 'lecon-h4', html: b.html });
    case 'cle': return el('div', { class: 'lecon-cle', html: b.html });
    case 'liste': return el(b.num ? 'ol' : 'ul', { class: 'lecon-liste' }, ...b.items.map(h => el('li', { html: h })));
    case 'table': return el('div', { class: 'tscroll' }, el('table', { class: 'lecon-table' },
      el('thead', {}, el('tr', {}, ...b.entetes.map(h => el('th', { html: h })))),
      el('tbody', {}, ...b.lignes.map(li => el('tr', {}, ...li.map(c => el('td', { html: c })))))));
    case 'pos': return blocPosition(b, l);
    case 'seq': return lecteurSequence(b, l);
    case 'lignes': return blocLignes(b, l);
    default: return el('p', { html: b.html || '' });
  }
}

/* Un échiquier de leçon : celui des exercices, en grand, avec les coordonnées. */
/* « e4 » : pièce importante ; « e4! » : pièce en danger, ou cible. */
function marquesDe(liste) {
  const m = {};
  for (const c of liste || []) m[c.slice(0, 2)] = c.endsWith('!') ? 'danger' : 'cle';
  return m;
}
function plateauLecon(fen, fleches, orient, marques) {
  const svg = miniEchiquier(fen, fleches, orient, 400, marquesDe(marques));
  svg.removeAttribute('width'); svg.removeAttribute('height');
  svg.setAttribute('aria-label', tx('Échiquier'));
  const T = 100, col = 'abcdefgh';
  const sur = (x, y) => ((x + y) % 2 === 0 ? 'var(--board-dark)' : 'var(--board-light)');
  for (let i = 0; i < 8; i++) {
    const lettre = svgEl('text', { x: i * T + T - 7, y: 8 * T - 8, 'text-anchor': 'end', class: 'coord', fill: sur(i, 7) });
    lettre.textContent = orient === 'b' ? col[7 - i] : col[i];
    const chiffre = svgEl('text', { x: 6, y: i * T + 19, class: 'coord', fill: sur(0, i) });
    chiffre.textContent = String(orient === 'b' ? i + 1 : 8 - i);
    svg.append(lettre, chiffre);
  }
  return svg;
}

function blocPosition(b, l) {
  const j = jeuDe(b);
  const fl = (b.fleches || []).map(([u, c]) => [u, couleurFl(c)]);
  return el('figure', { class: 'lecon-fig' },
    el('div', { class: 'lecon-plateau' }, plateauLecon(j.fen(), fl, b.orientation || l.camp, b.marques)),
    b.legende ? el('figcaption', { html: b.legende }) : null);
}

/* ============================================================ quiz : moteur
   Commun aux leçons et à l'entraînement. Un quiz = { debut, coups, legendes,
   fen? } : la position se rejoue depuis le départ (animation), puis tu dois
   trouver les coups de ton camp dans `coups` ; ceux de l'adversaire se jouent
   tout seuls. Une erreur affiche l'explication du coup attendu — la même que
   sous l'échiquier de la leçon. */
const _pause = (ms) => new Promise((r) => setTimeout(r, ms));
const uciDeMove = (m) => m.from + m.to + (m.promotion || '');

function executerQuiz(q, o) {
  const p = o.plateau, camp = o.camp, orient = o.orient || camp;
  let jeton = 0, jeu = null, i = 0, fautes = 0, indice = false, faute = false, sans = [], etats = [], enAttente = false;
  const majFil = () => { if (o.fil) o.fil(sans.slice(), etats.slice()); };
  const marquerDernier = (m) => { p.persistantes = { [m.from]: 'dernier', [m.to]: 'dernier' }; p.marquer(p.persistantes); };
  const attendu = () => new Chess(jeu.fen()).move(q.coups[i]);
  const invite = () => {
    const f = jeu.fen().split(' '), n = parseInt(f[5], 10) || 1;
    return f[1] === 'w' ? `${n}.?` : `${n}…?`;
  };

  async function lancer() {
    const t = ++jeton;
    i = 0; fautes = 0; indice = false; faute = false; sans = []; etats = []; enAttente = false;
    jeu = q.fen ? new Chess(q.fen) : new Chess();
    p.onCoup = null; p.persistantes = {}; p.marques = {};
    p.position(jeu.fen(), orient);
    majFil();
    if (o.expliquer) o.expliquer('');
    o.ecrire(q.debut.length ? tx('La position se rejoue depuis le début…') : tx('C’est parti.'), '');
    await _pause(350);
    for (const s of q.debut) {
      if (t !== jeton) return;
      const m = jeu.move(s);
      sans.push(m.san); etats.push('att'); majFil();
      await p.animerVers(jeu.fen(), m, orient);
      await _pause(o.vite ? 60 : 120);
    }
    if (t !== jeton) return;
    suite(t);
  }

  async function suite(t) {
    while (i < q.coups.length) {
      const m0 = attendu();
      if (m0.color === camp) break;
      await _pause(450);
      if (t !== jeton) return;
      const m = jeu.move(q.coups[i]);
      sans.push(m.san); etats.push('att'); majFil();
      await p.animerVers(jeu.fen(), m, orient);
      if (t !== jeton) return;
      marquerDernier(m);
      i++;
    }
    if (t !== jeton) return;
    if (i >= q.coups.length) return terminer();
    faute = false; enAttente = true;
    o.ecrire(tx('À toi : trouve le coup {0} <span class="mv">{1}</span>', [camp === 'w' ? tx('des blancs') : tx('des noirs'), invite()]), '');
    p.onCoup = (de, vers, mm) => proposer(t, de, vers, mm);
  }

  async function proposer(t, de, vers, mm) {
    if (t !== jeton || !enAttente) return;
    const a = attendu();
    const uci = de + vers + (mm && mm.promotion ? mm.promotion : '');
    let joue = null;
    try { joue = new Chess(jeu.fen()).move({ from: de, to: vers, promotion: (mm && mm.promotion) || 'q' }); } catch (e) { /* coup illégal dans cette position : on garde la valeur par défaut */ }
    if (!joue) return;
    if (uci !== uciDeMove(a)) {
      fautes++; faute = true;
      p.svg.classList.add('secousse'); setTimeout(() => p.svg.classList.remove('secousse'), 340);
      if (typeof Son !== 'undefined') Son.jouer('faux');
      p.marquer(Object.assign({ [vers]: 'err' }, p.persistantes || {}));
      o.ecrire(tx('<span class="mv bad">{0}</span> : ce n’est pas le coup. Lis l’explication, puis réessaie.', [fr(joue.san)]), 'ko');
      if (o.expliquer) o.expliquer(q.legendes[i] || '');
      return;
    }
    enAttente = false; p.onCoup = null;
    const avant = jeu.fen();
    const m = jeu.move(q.coups[i]);
    sans.push(m.san); etats.push(faute ? 'ko' : 'ok'); majFil();
    o.ecrire(tx('<span class="mv good">{0}</span> — c’est ça.', [libelle(avant, m.san)]), 'ok');
    if (o.expliquer) o.expliquer(q.legendes[i] || '');
    await p.animerVers(jeu.fen(), m, orient);
    if (t !== jeton) return;
    marquerDernier(m);
    i++;
    suite(t);
  }

  function terminer() {
    enAttente = false; p.onCoup = null;
    const res = { fautes, indice, reussi: fautes === 0 && !indice };
    if (typeof Son !== 'undefined') Son.jouer(res.reussi ? 'reussi' : 'bon');
    o.surFin(res);
  }

  const ctl = {
    recommencer: () => lancer(),
    arreter: () => { jeton++; enAttente = false; p.onCoup = null; },
    indice: () => {
      if (!enAttente) return;
      indice = true; faute = true;
      const a = attendu();
      p.marquer(Object.assign({ [a.from]: 'sel', [a.to]: 'cible' }, p.persistantes || {}));
      if (typeof Son !== 'undefined') Son.jouer('indice');
      o.ecrire(tx('La pièce à jouer est marquée, sa case d’arrivée est pointée. Le quiz comptera comme raté.'), 'info');
      if (o.expliquer) o.expliquer(q.legendes[i] || '');
    },
    get enCours() { return enAttente; },
  };
  lancer();
  return ctl;
}

/* ------------------------------------------------ quiz : registre et suivi */
function tousLesQuiz() {
  const out = [];
  for (const l of lecons()) for (const q of (l.quiz || [])) out.push(Object.assign({ cle: l.id + ':' + q.id, lecon: l }, q));
  return out;
}
const quizDe = (l, id) => (l.quiz || []).find((q) => q.id === id) || null;
/* Le titre d'un quiz donne souvent la réponse (« 6.Cc3 puis Dxb7 »). Pendant le
   quiz on n'affiche que la position de départ : le dernier coup joué avant ton
   premier coup à trouver. Le vrai titre apparaît une fois le quiz fini. */
function titreQuiz(q, camp) {
  if (/^Exercice\b/.test(q.titre || '')) return q.titre;
  const j = q.fen ? new Chess(q.fen) : new Chess();
  let dernier = null;
  try {
    for (const s of q.debut || []) { const f = j.fen(); dernier = libelle(f, j.move(s).san); }
    for (const s of q.coups) {
      if (j.turn() === camp) break;
      const f = j.fen(); dernier = libelle(f, j.move(s).san);
    }
  } catch (e) { return tx('Quiz'); }
  return dernier ? tx('Après {0}', [dernier]) : tx('Depuis la position de départ');
}
function varianteDe(vid) {
  for (const l of lecons()) if (l.variantes && l.variantes[vid]) return { l, v: l.variantes[vid] };
  return null;
}
function suiviQuiz(cle) { return (S.d.quizOuv || {})[cle] || null; }
function noterQuiz(cle, reussi) {
  S.d.quizOuv = S.d.quizOuv || {};
  const e = S.d.quizOuv[cle] || {};
  S.d.quizOuv[cle] = {
    srs: Rep.prochainSrs(e.srs, reussi, Date.now()),
    ok: (e.ok || 0) + (reussi ? 1 : 0), ko: (e.ko || 0) + (reussi ? 0 : 1),
    rate: !reussi, dernier: Rep.jourLocal(Date.now()),
  };
  sauver();
}
/* jamais fait, ou revenu à échéance */

/* ======================================== lecteur de séquence (leçons)
   Trois modes sur le même échiquier :
   - ligne : la séquence de la leçon, coup par coup (‹ ›, flèches du clavier) ;
   - variante : une suite citée dans le texte (lien), avec un bouton pour
     revenir à la ligne principale ;
   - quiz : la position se remet à zéro et tu joues tes coups. */
function etapesDe(def, camp) {
  const j = jeuDe(def), etapes = [];
  def.coups.forEach((san, k) => {
    const fen = j.fen();
    const m = j.move(san);
    if (!m) throw new Error(tx('coup illégal dans la séquence : ') + san);
    const c = (def.couleurs && def.couleurs[k]) || (m.color === camp ? 'v' : 'g');
    etapes.push({ fen, uci: m.from + m.to, couleur: couleurFl(c), lib: libelle(fen, m.san), leg: (def.legendes || [])[k] || '',
      marques: (def.marques || [])[k] || [] });
  });
  etapes.push({ fen: j.fen(), uci: null, lib: null, leg: def.fin || '', marques: (def.marques || [])[def.coups.length] || [] });
  return etapes;
}

function lecteurSequence(b, l, opts) {
  opts = opts || {};
  const camp = l.camp, orient = b.orientation || camp;
  const quizIds = (b.quiz || []).filter((id) => quizDe(l, id));
  let etapes = [], i = 0, mode = 'ligne', iLigne = 0, ctl = null;

  const titre = el('div', { class: 'lseq-titre', html: b.titre || '' });
  if (!b.titre) titre.hidden = true;
  const bandeau = el('div', { class: 'lseq-bandeau', hidden: true });
  const plateau = el('div', { class: 'lecon-plateau' });
  const leg = el('div', { class: 'lseq-leg' });
  const expl = el('div', { class: 'lseq-expl', hidden: true });
  const coups = el('div', { class: 'lseq-coups' });
  const cpt = el('span', { class: 'lseq-cpt' });
  const prec = el('button', { class: 'b g', title: tx('Coup précédent (←)'), 'aria-label': tx('Coup précédent') }, '‹');
  const suiv = el('button', { class: 'b', title: tx('Coup suivant (→)'), 'aria-label': tx('Coup suivant') }, '›');
  const deb = el('button', { class: 'b g', title: tx('Début'), 'aria-label': tx('Début') }, '⏮');
  const btnQuiz = el('button', { class: 'b lseq-btnquiz', title: tx('Remet la position à zéro : à toi de jouer les coups') },
    quizIds.length > 1 ? tx('Quiz ({0})', [quizIds.length]) : tx('Quiz'));
  if (!quizIds.length) btnQuiz.hidden = true;
  const nav = el('div', { class: 'ligne-ctrl lseq-nav' }, btnQuiz, deb, prec, cpt, suiv);
  const quizListe = el('div', { class: 'lseq-quizliste', hidden: true });
  const qctrl = el('div', { class: 'ligne-ctrl lseq-qctrl', hidden: true });
  let boutonsCoups = [];

  function charger(def) {
    etapes = etapesDe(def, camp);
    coups.innerHTML = '';
    boutonsCoups = etapes.slice(0, -1).map((e, k) => {
      const bt = el('button', { class: 'lseq-c', onclick: () => aller(k) }, e.lib);
      coups.append(bt, ' ');
      return bt;
    });
  }
  function aller(n) {
    if (mode === 'quiz') return;
    i = Math.max(0, Math.min(etapes.length - 1, n));
    if (mode === 'ligne') iLigne = i;
    const e = etapes[i];
    plateau.innerHTML = '';
    plateau.append(plateauLecon(e.fen, e.uci ? [[e.uci, e.couleur]] : [], orient, e.marques));
    leg.className = 'lseq-leg';
    leg.innerHTML = '';
    /* L'étiquette du coup (« 16.Cxd5 ») précède l'explication. Quand
       l'explication commence déjà par ce coup, avec ou sans numéro, en
       surligné ou en texte (« Cxd5 ! Le cavalier… », « e3. »), on retire ce
       début : sinon le coup s'affichait deux fois. */
    const legHtml = sansCoupInitial(e.leg || '', e.lib);
    if (e.lib) leg.append(el('span', { class: 'mv ' + (e.couleur === FL_ROUGE ? 'bad' : e.couleur === FL_VERT ? 'good' : '') }, e.lib), ' ');
    leg.append(el('span', { html: legHtml || (i === etapes.length - 1 ? tx('Fin de la séquence.') : '') }));
    cpt.textContent = `${i + 1} / ${etapes.length}`;
    prec.disabled = i === 0; deb.disabled = i === 0;
    suiv.disabled = i === etapes.length - 1;
    boutonsCoups.forEach((bt, k) => bt.classList.toggle('actif', k === i));   // le coup de la flèche
  }

  /* ---- variante citée dans le texte ---- */
  function montrerVariante(vid) {
    const r = varianteDe(vid);
    if (!r) return;
    if (mode === 'quiz') quitterQuiz(false);
    mode = 'variante';
    const qv = quizDe(r.l, vid);
    bandeau.innerHTML = '';
    bandeau.append(
      el('span', { class: 'lseq-bandeau-t', html: tx('Variante · ') + (r.v.titre || '') }),
      el('span', { class: 'lseq-bandeau-b' },
        qv ? el('button', { class: 'b g', onclick: () => lancerQuizDirect(qv) }, tx('Quiz de la variante')) : null,
        el('button', { class: 'b', onclick: retourLigne }, tx('↩ Revenir à la ligne principale'))));
    bandeau.hidden = false;
    charger(r.v);
    aller(0);
    boite.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function retourLigne() {
    if (mode === 'quiz') quitterQuiz(false);
    mode = 'ligne'; bandeau.hidden = true;
    charger(b); aller(iLigne);
  }

  /* ---- quiz ---- */
  function ouvrirQuiz() {
    if (quizIds.length === 1) return lancerQuiz(0);
    quizListe.hidden = !quizListe.hidden;
    if (quizListe.hidden) return;
    quizListe.innerHTML = '';
    quizIds.forEach((id, k) => {
      const q = quizDe(l, id), e = suiviQuiz(l.id + ':' + id);
      quizListe.append(el('button', { class: 'lseq-qitem' + (e ? (e.rate ? ' rate' : ' fait') : ''), onclick: () => lancerQuiz(k) },
        el('span', { class: 'lseq-qnum' }, `${k + 1}`), el('span', { html: titreQuiz(q, camp) }),
        e ? el('span', { class: 'tag ' + (e.rate ? 'red' : 'grn') }, e.rate ? tx('raté') : tx('réussi')) : null));
    });
  }
  function lancerQuiz(k) { lancerQuizDirect(quizDe(l, quizIds[k])); }
  function lancerQuizDirect(q) {
    if (ctl) ctl.arreter();
    quizListe.hidden = true;
    const avant = mode === 'quiz' ? (boite.dataset.avant || 'ligne') : mode;
    boite.dataset.avant = avant;
    mode = 'quiz';
    const k = quizIds.indexOf(q.id);
    bandeau.innerHTML = '';
    const entete = (t) => `Quiz${k >= 0 && quizIds.length > 1 ? ` ${k + 1}/${quizIds.length}` : ''} · ${t}`;
    bandeau.append(el('span', { class: 'lseq-bandeau-t', html: entete(titreQuiz(q, camp)) }));
    bandeau.hidden = false;
    nav.hidden = true; qctrl.hidden = false; coups.innerHTML = '';
    qctrl.innerHTML = '';
    qctrl.append(
      el('button', { class: 'b g', onclick: () => ctl && ctl.indice() }, tx('Indice')),
      el('button', { class: 'b g', onclick: () => ctl && ctl.recommencer() }, tx('Recommencer')),
      el('button', { class: 'b g', onclick: () => quitterQuiz(true) }, tx('Quitter le quiz')));
    const svg = svgEl('svg', { class: 'plateau lseq-quizplateau', viewBox: '0 0 800 800' });
    plateau.innerHTML = ''; plateau.append(svg);
    const pl = new Plateau(svg);
    expl.hidden = true;
    ctl = executerQuiz(q, {
      plateau: pl, camp, orient,
      ecrire: (h, c) => { leg.className = 'lseq-leg msg ' + (c || ''); leg.innerHTML = h; },
      expliquer: (h) => { expl.hidden = !h; expl.innerHTML = h ? tx('<strong>L’explication :</strong> ') + h : ''; },
      fil: (sans) => {
        coups.innerHTML = '';
        libellesCoups(sans, q.fen).forEach((t) => coups.append(el('span', { class: 'lseq-c' }, t), ' '));
      },
      surFin: (res) => {
        noterQuiz(l.id + ':' + q.id, res.reussi);
        const bt = bandeau.querySelector('.lseq-bandeau-t'); if (bt) bt.innerHTML = entete(q.titre || '');
        if (typeof majBadges === 'function') majBadges();
        leg.className = 'lseq-leg msg ' + (res.reussi ? 'ok' : 'info');
        leg.innerHTML = res.reussi ? tx('<strong>Quiz réussi sans faute.</strong>')
          : tx('<strong>Quiz terminé</strong> avec {0} erreur(s){1}. Il reviendra dans l’entraînement.', [res.fautes, res.indice ? tx(' et un indice') : '']);
        qctrl.innerHTML = '';
        const suivant = k >= 0 && k + 1 < quizIds.length;
        qctrl.append(...[
          suivant ? el('button', { class: 'b', onclick: () => lancerQuiz(k + 1) }, tx('Quiz suivant ({0}/{1})', [k + 2, quizIds.length])) : null,
          el('button', { class: 'b g', onclick: () => lancerQuizDirect(q) }, tx('Refaire')),
          el('button', { class: 'b g', onclick: () => quitterQuiz(true) }, tx('Revoir l’explication'))].filter(Boolean));
      },
    });
  }
  function quitterQuiz(restaurer) {
    if (ctl) { ctl.arreter(); ctl = null; }
    nav.hidden = false; qctrl.hidden = true; expl.hidden = true;
    const avant = boite.dataset.avant || 'ligne';
    mode = 'ligne'; bandeau.hidden = true;
    if (restaurer) {
      if (avant === 'variante' && boite.dataset.vid) montrerVariante(boite.dataset.vid);
      else { charger(b); aller(iLigne); }
    }
  }

  prec.onclick = () => aller(i - 1);
  suiv.onclick = () => aller(i + 1);
  deb.onclick = () => aller(0);
  btnQuiz.onclick = ouvrirQuiz;
  const boite = el('figure', { class: 'lseq', tabindex: '0' },
    titre, bandeau, plateau, nav, quizListe, qctrl, leg, expl, coups);
  boite.addEventListener('keydown', (ev) => {
    if (mode === 'quiz' || /^(INPUT|TEXTAREA|SELECT)$/.test((ev.target || {}).tagName || '')) return;
    if (ev.key === 'ArrowRight') { aller(i + 1); ev.preventDefault(); }
    if (ev.key === 'ArrowLeft') { aller(i - 1); ev.preventDefault(); }
  });
  boite._lecteur = {
    variante: (vid) => { boite.dataset.vid = vid; montrerVariante(vid); },
    get mode() { return mode; },
  };
  charger(b);
  aller(0);
  return boite;
}

/* ------------------------------------------- liens vers une variante
   Un lien dans l'explication d'un échiquier affiche la variante sur cet
   échiquier ; ailleurs (paragraphe, tableau, message d'entraînement), il
   ouvre une fenêtre avec son propre échiquier. */
document.addEventListener('click', (ev) => {
  const a = ev.target.closest && ev.target.closest('a.lien-var');
  if (!a) return;
  ev.preventDefault();
  const vid = a.dataset.var;
  const box = a.closest('.lseq');
  if (box && box._lecteur && box._lecteur.mode !== 'quiz' && !box.closest('.visio')) box._lecteur.variante(vid);
  else if (box && box.closest('.visio') && box._lecteur.mode !== 'quiz') box._lecteur.variante(vid);
  else ouvrirVisionneuse(vid);
});

function fermerVisionneuse() {
  const f = document.querySelector('.visio-fond');
  if (f) f.remove();
  document.removeEventListener('keydown', _escVisio);
}
function _escVisio(ev) { if (ev.key === 'Escape') fermerVisionneuse(); }
function ouvrirVisionneuse(vid) {
  const r = varianteDe(vid);
  if (!r) return;
  fermerVisionneuse();
  const def = { t: 'seq', debut: r.v.debut, coups: r.v.coups, legendes: r.v.legendes, fin: r.v.fin, fen: r.v.fen,
    titre: r.v.titre, quiz: quizDe(r.l, vid) ? [vid] : [] };
  const lect = lecteurSequence(def, r.l);
  const fond = el('div', { class: 'visio-fond', onclick: (e) => { if (e.target === fond) fermerVisionneuse(); } },
    el('div', { class: 'visio', role: 'dialog', 'aria-modal': 'true', 'aria-label': tx('Variante') },
      el('div', { class: 'visio-tete' },
        el('span', { class: 'eyebrow' }, tx('Variante · {0}', [r.l.titre])),
        el('button', { class: 'b g', onclick: fermerVisionneuse }, tx('Fermer ✕'))),
      lect));
  document.body.append(fond);
  document.addEventListener('keydown', _escVisio);
  lect.focus();
}

/* ============================================ entraînement : quiz d'ouverture */
let QO = null;     // session en cours

function majBlocQuizOuv() {
  const z = $('#quiz-ouv-liste'); if (!z) return;
  z.innerHTML = '';
  const tous = tousLesQuiz();
  /* « À revoir » = déjà faits et revenus à échéance (même définition que la
     pastille d'Entraînement) ; les quiz jamais faits sont comptés à part. */
  let aRevoirTotal = 0, nouveauxTotal = 0;
  if (!tous.length) z.append(el('div', { class: 'vide' }, tx('Aucun quiz : les quiz viennent des leçons.')));
  for (const l of lecons()) {
    const qs = tous.filter((q) => q.lecon === l);
    if (!qs.length) continue;
    const revoir = qs.filter((q) => { const e = suiviQuiz(q.cle); return e && Rep.estDue(e.srs, Date.now()); });
    const nouveaux = qs.filter((q) => !suiviQuiz(q.cle));
    const rates = qs.filter((q) => (suiviQuiz(q.cle) || {}).rate);
    aRevoirTotal += revoir.length; nouveauxTotal += nouveaux.length;
    z.append(el('div', { class: 'exo-item rep-ent' },
      el('span', { class: 'rep-pion ' + l.camp, 'aria-hidden': 'true' }),
      el('strong', {}, l.titre),
      el('span', { class: 'tag' }, tx('{0} quiz', [qs.length])),
      revoir.length ? el('span', { class: 'tag amb' }, tx('{0} à revoir', [revoir.length]))
        : nouveaux.length < qs.length ? el('span', { class: 'tag grn' }, tx('rien à revoir aujourd’hui')) : null,
      nouveaux.length ? el('span', { class: 'tag' }, tx('{0} jamais fait(s)', [nouveaux.length])) : null,
      rates.length ? el('span', { class: 'tag red' }, tx('{0} raté(s)', [rates.length])) : null,
      el('span', { class: 'rep-ent-btns' },
        revoir.length ? el('button', { class: 'b', onclick: () => demarrerQuizOuv(revoir, l.titre + tx(' — à revoir')) }, tx('À revoir ({0})', [revoir.length])) : null,
        nouveaux.length ? el('button', { class: revoir.length ? 'b g' : 'b', onclick: () => demarrerQuizOuv(nouveaux, l.titre + tx(' — nouveaux')) }, tx('Nouveaux ({0})', [nouveaux.length])) : null,
        rates.length ? el('button', { class: 'b g', onclick: () => demarrerQuizOuv(rates, l.titre + tx(' — tes ratés')) }, tx('Mes ratés ({0})', [rates.length])) : null,
        el('button', { class: 'b g', onclick: () => demarrerQuizOuv(qs, l.titre + tx(' — tout')) }, tx('Tout ({0})', [qs.length])))));
  }
  const c = $('#cpt-quiz-ouv');
  if (c) {
    c.textContent = aRevoirTotal ? tx('{0} à revoir', [aRevoirTotal]) : nouveauxTotal ? tx('{0} jamais fait(s)', [nouveauxTotal]) : tx('à jour');
    c.className = 'tag ' + (aRevoirTotal ? 'amb' : nouveauxTotal ? '' : 'grn');
  }
}

function demarrerQuizOuv(liste, titre) {
  const l2 = liste.slice();
  for (let k = l2.length - 1; k > 0; k--) { const r = Math.floor(Math.random() * (k + 1)); [l2[k], l2[r]] = [l2[r], l2[k]]; }
  arreterDrill();
  const p = boiteDrill(tx('Quiz d’ouverture — ') + titre, '');
  QO = { liste: l2, i: 0, reussis: 0, rates: 0, ctl: null };
  S.drill = 'quiz-ouv';
  D = D || {}; D.plateau = p;
  quizOuvCourant();
}

function quizOuvCourant() {
  if (!QO) return;
  clearTimeout(QO.minuteur);
  if (QO.ctl) QO.ctl.arreter();
  const q = QO.liste[QO.i];
  if (!q) return finQuizOuv();
  $('#drill-titre').textContent = tx('Quiz d’ouverture — ') + q.lecon.titre;
  $('#drill-sous').innerHTML = `Quiz ${QO.i + 1}/${QO.liste.length} · ${titreQuiz(q, q.lecon.camp)}`;
  $('#drill-idee').innerHTML = '';
  QO.ctl = executerQuiz(q, {
    plateau: D.plateau, camp: q.lecon.camp, orient: q.lecon.camp,
    ecrire: (h, c) => msg(h, c),
    expliquer: (h) => { $('#drill-idee').innerHTML = h ? tx('<div class="msg"><strong>L’explication :</strong> {0}</div>', [h]) : ''; },
    fil: (sans, etats) => fil(sans, etats, q.fen),
    surFin: (res) => {
      noterQuiz(q.cle, res.reussi);
      $('#drill-sous').innerHTML = `Quiz ${QO.i + 1}/${QO.liste.length} · ${q.titre || ''}`;
      if (res.reussi) QO.reussis++; else QO.rates++;
      const z = $('#drill-msg'); z.innerHTML = '';
      z.append(el('div', { class: 'msg ' + (res.reussi ? 'ok' : 'info') },
        el('span', { html: res.reussi ? tx('<strong>Réussi sans faute.</strong> ') : tx('<strong>Terminé</strong> avec {0} erreur(s){1}. Ce quiz reviendra. ', [res.fautes, res.indice ? tx(' et un indice') : '']) }),
        el('button', { class: 'b', style: 'margin-left:8px', onclick: () => { QO.i++; quizOuvCourant(); } },
          QO.i + 1 < QO.liste.length ? tx('Quiz suivant ›') : tx('Terminer'))));
      if (res.reussi) {
        const ici = QO;
        const ctlFini = QO.ctl;
        QO.minuteur = setTimeout(() => {
          /* pas d'avance si tu as relancé ce quiz entre-temps (« Recommencer ») */
          if (QO === ici && QO.liste[QO.i] === q && QO.ctl === ctlFini) { QO.i++; quizOuvCourant(); }
        }, 1600);
      }
    },
  });
}

function finQuizOuv() {
  const n = QO.reussis + QO.rates;
  D.plateau.onCoup = null;
  msg(n ? tx('Session terminée : {0} réussi(s) sans faute, {1} à revoir.', [QO.reussis, QO.rates]) : tx('Session terminée.'), QO.rates ? 'info' : 'ok');
  $('#drill-idee').innerHTML = '';
  if (typeof majBadges === 'function') majBadges();
  QO = null;
  S.drill = 'quiz-fini';
}

/* Les lignes du répertoire, lues dans tes données : si tu modifies le
   répertoire dans l'éditeur, la leçon suit. Les suites sans embranchement
   sont regroupées sur une ligne ; chaque réponse adverse ouvre une branche. */
function blocLignes(b, l) {
  const r = listeReps().find(x => (x.origine || x.id) === (b.rep || l.rep));
  if (!r) return el('div', { class: 'vide' }, tx('Le répertoire de cette leçon n’est plus dans tes données (supprimé ?).'));
  const g = grapheRep(r.id);
  const j = jeuDe(b);
  const vus = new Set();
  function branche(fen, prefixe) {
    const out = [];
    let jj = new Chess(fen), texte = [], k = Rep.cle(jj);
    for (let garde = 0; garde < 60; garde++) {
      const cs = g.coupsDe(k);
      if (!cs.length) break;
      /* transposition : la suite a déjà été écrite plus haut */
      if (vus.has(k)) { texte.push(el('span', { class: 'lg-trans' }, tx('(même position que plus haut)'))); break; }
      vus.add(k);
      if (cs.length > 1) {
        const ul = el('ul', { class: 'lignes-ul' });
        for (const a of cs) {
          const j2 = new Chess(jj.fen());
          const m = j2.move({ from: a.u.slice(0, 2), to: a.u.slice(2, 4), promotion: a.u[4] || 'q' });
          if (!m) continue;
          const li = el('li', {});
          const sous = branche(j2.fen(), null);
          li.append(el('span', { class: m.color === r.camp ? 'lg-moi' : 'lg-adv' }, libelle(jj.fen(), m.san)), ' ', ...sous);
          ul.append(li);
        }
        out.push(el('span', { class: 'lg-chaine' }, ...texte), ul);
        return out;
      }
      const a = cs[0];
      const avant = jj.fen();
      const m = jj.move({ from: a.u.slice(0, 2), to: a.u.slice(2, 4), promotion: a.u[4] || 'q' });
      if (!m) break;
      texte.push(el('span', { class: m.color === r.camp ? 'lg-moi' : 'lg-adv' }, libelle(avant, m.san)), ' ');
      k = Rep.cle(jj);
    }
    out.push(el('span', { class: 'lg-chaine' }, ...texte));
    return out;
  }
  return el('div', { class: 'lecon-lignes' },
    el('p', { class: 'sous', style: 'margin:0 0 8px' },
      tx('Lu dans ton répertoire « {0} ». En vert : tes coups ; en gris : les réponses adverses.', [r.nom])),
    ...branche(j.fen(), null));
}
