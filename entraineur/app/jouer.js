/* ==========================================================================
   Onglet « Jouer » : une partie contre le bot, sur le thème que tu as écrit
   (une ouverture, pour l'instant), puis un bilan centré sur ce thème.

   Le niveau, le livre et la lecture de la demande sont dans bot.js. Les
   parties jouées ici sont rangées à part (S.d.partiesBot) : elles ne comptent
   ni dans tes indicateurs, ni dans tes gaffes, ni dans ta progression.
   ========================================================================== */
'use strict';

/* appli sans traduction : tx() rend la phrase telle quelle */
if (typeof tx === 'undefined') {
  window.tx = (s, v) => (v ? String(s).replace(/\{(\d+)\}/g, (m, k) => (v[k] !== undefined && v[k] !== null ? v[k] : m)) : s);
}
const LOCALE_JEU = () => (typeof I18N !== 'undefined' ? I18N.locale : 'fr-FR');
/* append() écrit « null » pour un enfant absent : on les retire */
const ajouterA = (z, ...kids) => z.append(...kids.filter(k => k !== null && k !== undefined && k !== false));

const NOEUDS_BOT = 150000;
const ELO_MIN = 200, ELO_MAX = 2000;
const PENDULES = { '300+0': { base: 300, inc: 0 }, '600+0': { base: 600, inc: 0 },
  '900+10': { base: 900, inc: 10 }, '1800+0': { base: 1800, inc: 0 } };
const BASE_SANS_PENDULE = 36000;      // pendule virtuelle des parties sans pendule (10 h)

const J = {
  plateau: null, moteur: null, jeu: null, enCours: false, botPense: false, jeton: 0,
  camp: 'w', elo: 450, demande: null, entree: null, ligne: null, rep: null, arbre: null,
  pendule: null, temps: { w: 0, b: 0 }, depuis: 0, minuteur: null,
  durees: [], indices: 0, sortie: null, eloManuel: false, fin: null,
  motifs: new Set(), finales: false, occasions: [], occasionEnCours: null, dernierCadeau: -99,
  perso: null, persoType: null,
};
/* Les occasions tactiques : au plus une fois tous les ATTENTE_CADEAU demi-coups
   (davantage quand tu maîtrises le motif), et pas à chaque fois qu'elle est
   possible, sinon ça se voit. */
const PROBA_CADEAU = 0.4, ATTENTE_CADEAU = 8, ATTENTE_MAITRISE = 12;
const NOMS_MOTIFS = () => Object.fromEntries(Bot.THEMES.map(t => [t.id, tx(t.nom)]));
/* au singulier, pour les phrases du bilan */
const MOTIF_UN = () => ({ fourchette: tx('une fourchette'), clouage: tx('un clouage'), enfilade: tx('une enfilade'),
  decouverte: tx('une attaque à la découverte'), mat: tx('un mat'), prise: tx('une pièce à prendre') });
const MOTIF_SEUL = () => ({ fourchette: tx('fourchette'), clouage: tx('clouage'), enfilade: tx('enfilade'),
  decouverte: tx('attaque à la découverte'), mat: tx('mat'), prise: tx('pièce en prise') });
function niveauxMotifs() { S.d.botNiveaux = S.d.botNiveaux || {}; return S.d.botNiveaux; }
const niveauDe = (m) => ((niveauxMotifs()[m] || {}).niveau || 1);
const fmtNiv = (n) => String(Math.round(n * 100) / 100).replace('.', typeof I18N !== 'undefined' ? I18N.dec : ',');
/* La finale : moins de 27 points de pièces sur l'échiquier, pions et rois
   non comptés (dame 9, tour 5, fou et cavalier 3). */
function pointsPieces(jeu) {
  const v = { q: 9, r: 5, b: 3, n: 3 };
  return jeu.board().flat().reduce((a, x) => a + (x ? (v[x.type] || 0) : 0), 0);
}
const estFinale = (jeu) => pointsPieces(jeu) <= 26;

function partiesBot() { S.d.partiesBot = S.d.partiesBot || {}; return S.d.partiesBot; }
const nomCamp = (c) => (c === 'w' ? tx('les blancs') : tx('les noirs'));

/* ------------------------------------------------------------- le niveau
   Ton dernier Elo chess.com : c'est l'échelle sur laquelle le bot est réglé.
   Sans partie chess.com, on estime ton niveau d'après tes gaffes (la même
   mesure que celle du bot) ; sans aucune partie, d'après le niveau choisi. */
function eloAuto() {
  const ps = Object.values(S.d.parties || {}).sort((a, b) => (b.fin || 0) - (a.fin || 0));
  const cc = ps.find(p => p.elo && siteDe(p) === 'chesscom');
  if (cc) return { elo: cc.elo, source: 'chesscom', date: cc.date };
  const an = ps.filter(p => p.moteur && p.moteur.nbCoups).slice(0, 30);
  const coups = an.reduce((a, p) => a + p.moteur.nbCoups, 0);
  if (coups >= 150) {
    const g = an.reduce((a, p) => a + gaffesRetenues(p).length, 0) / coups;
    const e = Math.round((Bot.REF.elo - Bot.PENTE.g * Math.log(Math.max(0.004, g) / Bot.REF.g)) / 25) * 25;
    return { elo: Math.max(ELO_MIN, Math.min(ELO_MAX, e)), source: 'gaffes', n: an.length };
  }
  const niv = { debutant: 600, intermediaire: 1300, confirme: 1800 }[S.d.reglages.niveau] || 600;
  return { elo: niv, source: 'niveau' };
}
function texteAuto(a) {
  if (a.source === 'chesscom') return tx('Réglé sur ton dernier Elo chess.com ({0}, le {1}).', [a.elo, jourCourt(a.date)]);
  if (a.source === 'gaffes') return tx('Réglé d’après tes gaffes sur tes {0} dernières parties analysées.', [a.n]);
  return tx('Réglé d’après le niveau choisi dans Aujourd’hui.');
}

/* ------------------------------------------------------------- l'écran d'accueil */
function vueJouer() {
  if (J.enCours || J.fin) { $('#jouer-accueil').hidden = true; $('#jouer-partie').hidden = false; return; }
  $('#jouer-accueil').hidden = false; $('#jouer-partie').hidden = true;
  brancherJouer();
  if (typeof majAdversaires === 'function') { majAdversaires(); rendrePerso(); }
  if (!J.eloManuel) majEloAuto();
  majCompris();
  rendreListeBot();
}
let _jouerBranche = false;
function brancherJouer() {
  if (_jouerBranche) return;
  _jouerBranche = true;
  let t = null;
  $('#jouer-texte').addEventListener('input', () => { clearTimeout(t); t = setTimeout(majCompris, 180); });
  $('#jouer-texte').addEventListener('keydown', (e) => { if (e.key === 'Enter') lancerPartie(); });
  $('#jouer-camp').addEventListener('change', majCompris);
  const r = $('#jouer-elo');
  r.addEventListener('input', () => { J.eloManuel = true; majElo(+r.value); });
  $('#jouer-pendule').value = S.d.reglages.botPendule || '';
  $('#jouer-pendule').addEventListener('change', () => { S.d.reglages.botPendule = $('#jouer-pendule').value; sauver(); });
  $('#jouer-go').addEventListener('click', lancerPartie);
  if ($('#jouer-adversaire')) $('#jouer-adversaire').addEventListener('change', () => { choisirAdversaire(); majElo(J.elo); });
  $('#jeu-tourner').addEventListener('click', () => {
    J.plateau.orientation = J.plateau.orientation === 'w' ? 'b' : 'w'; J.plateau.dessiner(); majPendules();
  });
  $('#jeu-abandon').addEventListener('click', (e) => {
    if (!J.enCours) return;
    if (!confirmerDeux(e.currentTarget, tx('Confirmer l’abandon'))) return;
    terminer({ gagnant: J.camp === 'w' ? 'b' : 'w', raison: 'abandon' });
  });
  $('#jeu-indice').addEventListener('click', indiceLigne);
}
function majEloAuto() {
  const a = eloAuto();
  J.auto = a;
  $('#jouer-elo').value = a.elo;
  majElo(a.elo);
}
function majElo(v) {
  J.elo = v;
  $('#jouer-elo-val').textContent = '≈ ' + v;
  const aide = $('#jouer-elo-aide'); aide.innerHTML = '';
  const a = J.auto || eloAuto();
  const perso = adversaireChoisi() !== 'standard';
  ajouterA(aide,
    J.eloManuel && v !== a.elo ? tx('Ton niveau : {0}. ', [a.elo]) : texteAuto(a) + ' ',
    perso ? tx('Le bot personnalisé joue comme tes adversaires ; la force décale un peu son jeu, comme il a vu leurs coups changer avec leur Elo.')
      : tx('Le bot fait autant de gaffes, d’erreurs et d’imprécisions qu’un joueur de ce niveau, mesuré sur des parties rapides chess.com.'),
    v > 500 && !perso ? tx(' Au-delà de 500, c’est une estimation.') : '',
    J.eloManuel && v !== a.elo ? el('button', { class: 'lien', onclick: () => { J.eloManuel = false; majEloAuto(); } }, tx('Revenir à ton niveau')) : null);
}

/* standard, perso ou coriace (ces deux-là seulement si le bot personnalisé existe) */
function adversaireChoisi() {
  const s = $('#jouer-adversaire');
  const v = s ? s.value : 'standard';
  return v !== 'standard' && typeof botPerso === 'function' && botPerso() ? v : 'standard';
}
const NOMS_ADVERSAIRES = () => ({ perso: tx('ton bot personnalisé'), coriace: tx('ton bot coriace') });
/* Ce que voit le bot personnalisé : la force réglée et sa pendule. */
function contextePerso() {
  return { elo: J.elo, reste: J.pendule ? J.temps[J.jeu.turn()] / 1000 : null };
}

/* Les répertoires de l'utilisateur, pour reconnaître « mon répertoire X ». */
const repsPourBot = () => (typeof listeReps === 'function' ? listeReps() : [])
  .map(r => ({ id: r.id, nom: r.nom, camp: r.camp, origine: r.origine || null }));

function majCompris() {
  const z = $('#jouer-compris'); if (!z) return;
  const r = Bot.comprendre($('#jouer-texte').value, repsPourBot());
  J.demande = r;
  z.innerHTML = '';
  const choixCamp = $('#jouer-camp').value;
  const camp = choixCamp !== 'auto' ? choixCamp : (r.type === 'ouverture' || r.camp ? r.camp : null);
  $('#jouer-camp').options[0].textContent = r.type === 'ouverture'
    ? tx('selon l’ouverture ({0})', [nomCamp(r.camp)]) : (r.camp ? nomCamp(r.camp) : tx('au hasard'));
  const themes = [].concat((r.motifs || []).map(m => NOMS_MOTIFS()[m]), r.finales ? [tx('Finales')] : []);
  const ligneThemes = () => {
    const out = [];
    if (r.motifs && r.motifs.length) out.push(el('p', { class: 'sous', style: 'margin:4px 0 0' },
      tx('De temps en temps, le bot te laissera une occasion : {0}. À toi de la voir. Ton niveau dans chaque motif monte quand tu trouves, et les occasions deviennent plus fines.',
        [r.motifs.map(m => NOMS_MOTIFS()[m].toLowerCase()).join(', ')])));
    if (r.finales) out.push(el('p', { class: 'sous', style: 'margin:4px 0 0' },
      tx('Le bot échange volontiers les pièces et se trompe moins avant la finale, pour que la partie y arrive.')));
    return out;
  };
  if (r.type === 'jeu') {
    z.append(el('p', { class: 'compris ok' },
      el('span', { class: 'tag grn' }, tx('compris')), ' ',
      el('strong', {}, themes.join(' · ')),
      ' — ', camp ? tx('tu joues {0}', [nomCamp(camp)]) : tx('ta couleur est tirée au hasard'), '.'), ...ligneThemes());
  } else if (r.type === 'ouverture') {
    const nom = r.entree ? tx(r.entree.nom) : r.rep.nom;
    z.append(el('p', { class: 'compris ok' },
      el('span', { class: 'tag grn' }, tx('compris')), ' ',
      el('strong', {}, nom), r.ligne ? ' · ' + tx(r.ligne.nom) : '',
      themes.length ? el('strong', {}, ' · ' + themes.join(' · ')) : null,
      ' — ', tx('tu joues {0}', [nomCamp(camp)]), '.',
      r.rep ? ' ' + tx('Le bot suit ton répertoire « {0} ».', [r.rep.nom]) : ''));
    const campLigne = (r.ligne && r.ligne.camp) || (r.entree && r.entree.camp);
    if (r.entree && camp !== campLigne)
      z.append(el('p', { class: 'sous', style: 'margin:4px 0 0' },
        tx('C’est le bot qui joue cette ouverture : tu t’entraînes à la rencontrer.')));
    z.append(...ligneThemes());
  } else if (r.type === 'motif') {
    z.append(el('p', { class: 'compris' },
      el('span', { class: 'tag amb' }, tx('pas encore')), ' ',
      tx('Ce thème n’est pas encore là. Le bot sait faire travailler une ouverture, les finales et ces tactiques :')),
    suggestionsThemes());
  } else if (r.type === 'aucun') {
    z.append(el('p', { class: 'compris' },
      el('span', { class: 'tag amb' }, tx('pas reconnu')), ' ',
      tx('Je n’ai pas reconnu de thème. Choisis-en un, ou lance une partie libre :')),
    suggestionsThemes(), suggestionsOuvertures());
  } else {
    z.append(el('p', { class: 'compris' }, tx('Sans demande, c’est une partie libre, sans thème. Quelques idées :')),
      suggestionsThemes(), suggestionsOuvertures());
  }
  rendreNiveaux();
}
/* « fourchettes et clouages » : les puces ajoutent au texte au lieu de le remplacer */
function suggestionsThemes() {
  const z = el('div', { class: 'suggestions' });
  const ajouter = (t) => {
    const c = $('#jouer-texte'), v = c.value.trim();
    c.value = v && Bot.comprendre(v, repsPourBot()).type !== 'aucun' ? v + ', ' + t.toLowerCase() : t;
    majCompris();
  };
  z.append(el('div', { class: 'sugg-ligne' }, el('span', { class: 'sugg-camp' }, tx('Tactiques')),
    ...Bot.THEMES.map(t => el('button', { class: 'puce', onclick: () => ajouter(tx(t.nom)) }, tx(t.nom))),
    el('button', { class: 'puce', onclick: () => ajouter(tx('Toutes les tactiques')) }, tx('Toutes les tactiques')),
    el('button', { class: 'puce', onclick: () => ajouter(tx('Finales')) }, tx('Finales'))));
  return z;
}
function rendreNiveaux() {
  const z = $('#jouer-niveaux'); if (!z) return;
  const n = niveauxMotifs(), l = Bot.THEMES.filter(t => n[t.id] && n[t.id].vus);
  z.innerHTML = '';
  if (!l.length) return;
  z.append(el('span', { class: 'sugg-camp' }, tx('Tes niveaux (de 1 à 3)')),
    ...l.map(t => el('span', { class: 'tag', title: tx('{0} trouvée(s) sur {1}', [n[t.id].trouves || 0, n[t.id].vus]) },
      tx(t.nom) + ' ' + fmtNiv(n[t.id].niveau))));
}
function suggestionsOuvertures() {
  const z = el('div', { class: 'suggestions' });
  for (const camp of ['w', 'b']) {
    const l = Bot.LIVRE.filter(e => e.camp === camp);
    z.append(el('div', { class: 'sugg-ligne' }, el('span', { class: 'sugg-camp' }, camp === 'w' ? tx('Avec les blancs') : tx('Avec les noirs')),
      ...l.map(e => el('button', { class: 'puce', onclick: () => { $('#jouer-texte').value = tx(e.nom); majCompris(); } }, tx(e.nom)))));
  }
  return z;
}

/* ------------------------------------------------------------- la liste */
const RAISONS = () => ({
  mat: tx('mat'), abandon: tx('abandon'), temps: tx('au temps'), pat: tx('pat'),
  repetition: tx('répétition'), materiel: tx('matériel insuffisant'), cinquante: tx('règle des 50 coups'),
});
function nomTheme(p) {
  const b = p.bot || {};
  const e = b.theme && Bot.LIVRE.find(x => x.id === b.theme.id);
  const morceaux = [];
  if (e) morceaux.push(tx(e.nom) + (b.theme.ligne ? ' · ' + tx(b.theme.ligne) : ''));
  else if (b.repNom) morceaux.push(b.repNom);
  for (const m of b.motifs || []) morceaux.push(NOMS_MOTIFS()[m]);
  if (b.finales) morceaux.push(tx('Finales'));
  return morceaux.length ? morceaux.join(' · ') : tx('partie libre');
}
const tagBot = (p) => (p.bot && p.bot.perso === 'coriace' ? tx('bot coriace {0}', [p.eloAdv])
  : p.bot && p.bot.perso ? tx('bot perso {0}', [p.eloAdv]) : tx('bot {0}', [p.eloAdv]));
function textePendule(pd) {
  if (!pd) return tx('sans pendule');
  return pd.inc ? tx('{0} min + {1} s', [pd.base / 60, pd.inc]) : tx('{0} min', [pd.base / 60]);
}
function rendreListeBot() {
  const z = $('#jouer-liste'); z.innerHTML = '';
  const l = Object.values(partiesBot()).sort((a, b) => (b.fin || 0) - (a.fin || 0));
  if (!l.length) { z.append(el('div', { class: 'vide' }, tx('Aucune partie contre le bot pour l’instant.'))); return; }
  for (const p of l) {
    const r = p.score === 1 ? ['grn', tx('gagnée')] : (p.score === .5 ? ['', tx('nulle')] : ['red', tx('perdue')]);
    const d = new Date(p.fin * 1000);
    const sup = el('button', { class: 'b g', onclick: (e) => {
      if (!confirmerDeux(e.currentTarget, tx('Confirmer la suppression'))) return;
      delete partiesBot()[p.url]; sauver(); rendreListeBot();
    } }, tx('Supprimer'));
    z.append(el('div', { class: 'item' },
      el('div', { class: 'haut' },
        el('span', { class: 'tag ' + r[0] }, r[1]),
        el('span', { class: 'tag' }, p.couleur === 'w' ? tx('blancs') : tx('noirs')),
        el('strong', {}, nomTheme(p)),
        el('span', { class: 'tag' }, tagBot(p)),
        el('span', { class: 'quand' }, d.toLocaleDateString(LOCALE_JEU(), { weekday: 'short', day: 'numeric', month: 'short' })
          + ' · ' + d.toLocaleTimeString(LOCALE_JEU(), { hour: '2-digit', minute: '2-digit' }))),
      el('p', { style: 'margin:0 0 8px' }, tx('{0} coups · {1} · {2}', [Math.ceil(((p.sans || '').split(' ').filter(Boolean).length) / 2),
        RAISONS()[p.termination] || p.termination, textePendule(p.bot && p.bot.pendule)])
        + (p.moteur ? tx(' · {0} cp de perte moyenne · {1} gaffe(s)', [p.moteur.cpl, gaffesRetenues(p).length]) : '')),
      el('div', { class: 'ligne-ctrl', style: 'margin:8px 0 0' },
        el('button', { class: 'b', onclick: () => ouvrirBilan(p, () => onglet('jouer')) }, tx('Bilan de la partie')),
        el('button', { class: 'b g', onclick: () => rejouerTheme(p) }, tx('Rejouer ce thème')),
        sup)));
  }
}

/* ------------------------------------------------------------- lancer */
function repLie(r) {
  if (r.rep) return repDe(r.rep.id);
  if (!r.entree) return null;
  const reps = typeof listeReps === 'function' ? listeReps() : [];
  return reps.find(x => r.entree.rep && x.origine === r.entree.rep)
    || reps.find(x => Bot.comprendre(x.nom, []).entree === r.entree) || null;
}
function lancerPartie(opts) {
  if (DEGRADE) { $('#jouer-etat').textContent = tx('Le bot a besoin de Stockfish : lance l’entraîneur avec son serveur local.'); return; }
  if (typeof BP !== 'undefined' && BP.enCours) { $('#jouer-etat').textContent = tx('Attends la fin de l’apprentissage du bot personnalisé (plus bas), ou arrête-le.'); return; }
  opts = opts && !(opts instanceof Event) ? opts : {};
  const r = opts.demande || J.demande || Bot.comprendre($('#jouer-texte').value, repsPourBot());
  const choixCamp = opts.camp || $('#jouer-camp').value;
  const themeOk = r.type === 'ouverture';
  const motifs = new Set(r.type === 'ouverture' || r.type === 'jeu' ? (r.motifs || []) : []);
  const finales = (r.type === 'ouverture' || r.type === 'jeu') && !!r.finales;
  const camp = choixCamp !== 'auto' ? choixCamp : (themeOk || r.camp ? r.camp : (Math.random() < 0.5 ? 'w' : 'b'));
  const pd = PENDULES[opts.pendule !== undefined ? opts.pendule : $('#jouer-pendule').value] || null;
  const entree = themeOk ? r.entree : null;
  const rep = themeOk ? repLie(r) : null;
  const exemple = entree && entree.rep ? (window.REPS_INITIAUX || []).find(x => x.id === entree.rep) : null;
  /* partie libre : le bot pioche ses premiers coups dans tout le livre */
  /* bot personnalisé : ses poids ; en partie libre, il ouvre comme tes adversaires */
  const adv = opts.adversaire && opts.adversaire !== 'standard' && typeof botPerso === 'function' && botPerso() ? opts.adversaire
    : (opts.adversaire ? 'standard' : adversaireChoisi());
  const bp = adv !== 'standard' ? botPerso() : null;
  J.perso = bp ? (adv === 'coriace' ? bp.mc || { w: bp.wc } : bp.m || { w: bp.w }) : null;
  J.persoType = bp ? adv : null;
  const livreAdv = bp ? Bot.arbreDuLivre(bp.livre, adv === 'coriace') : null;
  J.arbre = themeOk
    ? Bot.arbre({ entree, ligne: r.ligne, aretesRep: rep ? rep.aretes : null, aretesExemple: exemple && !rep ? exemple.aretes : null })
    : (livreAdv && livreAdv.size ? livreAdv : Bot.arbre({ entree: { lignes: Bot.LIVRE.flatMap(e => e.lignes) }, ligne: null }));
  Object.assign(J, {
    jeu: new Chess(), enCours: true, botPense: false, jeton: J.jeton + 1, camp,
    elo: opts.elo || J.elo, entree, ligne: themeOk ? r.ligne : null, rep, libre: !themeOk,
    motifs, finales, occasions: [], occasionEnCours: null, dernierCadeau: -99,
    niveauxAvant: Object.fromEntries([...motifs].map(m => [m, niveauDe(m)])),
    pendule: pd, temps: { w: (pd ? pd.base : BASE_SANS_PENDULE) * 1000, b: (pd ? pd.base : BASE_SANS_PENDULE) * 1000 },
    depuis: Date.now(), durees: [], indices: 0, sortie: null, fin: null, sortieMsg: null,
  });
  if (!J.moteur) J.moteur = new Moteur();
  if (!J.plateau) J.plateau = new Plateau($('#plateau-jeu'));
  J.plateau.onCoup = J.jeu.turn() === camp ? coupHumainPlateau : null;
  $('#jouer-accueil').hidden = true; $('#jouer-partie').hidden = false;
  $('#jeu-fin').innerHTML = '';
  $('#jeu-abandon').hidden = false; $('#jeu-abandon').disabled = false;
  const titre = [].concat(themeOk ? [(entree ? tx(entree.nom) : rep.nom) + (J.ligne ? ' · ' + tx(J.ligne.nom) : '')] : [],
    [...motifs].map(m => NOMS_MOTIFS()[m]), finales ? [tx('Finales')] : []);
  $('#jeu-titre').textContent = titre.length ? titre.join(' · ') : tx('Partie libre');
  $('#jeu-sous').textContent = J.perso
    ? tx('Tu joues {0} contre {1} ({2}) · {3}', [nomCamp(camp), NOMS_ADVERSAIRES()[J.persoType], J.elo, textePendule(pd)])
    : tx('Tu joues {0} contre le bot ({1}) · {2}', [nomCamp(camp), J.elo, textePendule(pd)]);
  J.plateau.persistantes = {};
  J.plateau.position(J.jeu.fen(), camp);
  clearInterval(J.minuteur);
  J.minuteur = setInterval(tic, 200);
  majEcran();
  window.scrollTo(0, 0);
  if (J.jeu.turn() !== camp) jouerBot();
}
function rejouerTheme(p) {
  const b = p.bot || {};
  const e = b.theme && Bot.LIVRE.find(x => x.id === b.theme.id);
  const ligne = e && b.theme.ligne ? e.lignes.find(l => l.nom === b.theme.ligne) : null;
  const rep = b.rep ? repDe(b.rep) : null;
  const extra = { motifs: b.motifs || [], finales: !!b.finales };
  const demande = e || rep ? Object.assign({ type: 'ouverture', entree: e || null, ligne, rep: !e && rep ? { id: rep.id, nom: rep.nom, camp: rep.camp } : null, camp: p.couleur }, extra)
    : (extra.motifs.length || extra.finales ? Object.assign({ type: 'jeu', camp: p.couleur }, extra) : { type: 'aucun' });
  onglet('jouer');
  if (!J.eloManuel) majEloAuto();
  const pd = b.pendule ? Object.keys(PENDULES).find(k => PENDULES[k].base === b.pendule.base && PENDULES[k].inc === b.pendule.inc) || '' : '';
  lancerPartie({ demande, camp: p.couleur, pendule: pd, elo: J.elo, adversaire: b.perso || 'standard' });
}

/* ------------------------------------------------------------- les coups */
const uciDe = (m) => m.from + m.to + (m.promotion || '');
function livreIci() {
  if (!J.arbre) return [];
  return J.arbre.get(Bot.cleDe(J.jeu)) || [];
}
/* Le temps passé sur le coup, la pendule, la sortie du livre. */
function acterCoup(mv, livre) {
  const t = Date.now(), c = mv.color;
  const passe = t - J.depuis;
  J.temps[c] -= passe;
  if (J.pendule && J.pendule.inc) J.temps[c] += J.pendule.inc * 1000;
  J.depuis = t;
  J.durees.push(passe / 1000);
  const ply = J.jeu.history().length - 1;
  if (!J.libre && !J.sortie && livre) {
    const u = uciDe(mv);
    if (!livre.length) J.sortie = { ply, qui: 'fin' };
    else if (!livre.some(a => a.u === u))
      J.sortie = { ply, qui: c === J.camp ? 'moi' : 'bot', attendu: livre.slice().sort((a, b) => b.poids - a.poids)[0].s };
  }
}
const coupHumainPlateau = (de, vers, m) => coupHumain(m);
function coupHumain(m) {
  if (!J.enCours || J.botPense || J.jeu.turn() !== J.camp) return;
  const livre = livreIci();
  let mv; try { mv = J.jeu.move({ from: m.from, to: m.to, promotion: m.promotion || 'q' }); } catch (e) { return; }
  if (!mv) return;
  acterCoup(mv, livre);
  J.plateau.onCoup = null;
  J.plateau.persistantes = { [mv.from]: 'dernier', [mv.to]: 'dernier' };
  J.plateau.marques = J.plateau.persistantes;
  J.plateau.animerVers(J.jeu.fen(), mv);
  majEcran();
  if (finSiBesoin()) return;
  setTimeout(jouerBot, 30);
}
async function jouerBot() {
  if (!J.enCours || J.jeu.turn() === J.camp) return;
  const jeton = J.jeton, fen = J.jeu.fen(), ply = J.jeu.history().length, t0 = Date.now();
  J.botPense = true; majEtat();
  const livre = livreIci();
  let uci = null;
  try {
    if (livre.length) {
      uci = Bot.tirer(livre, a => a.poids, Math.random).u;
    } else {
      await J.moteur.pret();
      /* tous les coups légaux (Stockfish.js plafonne MultiPV à 256 : au-delà,
         la valeur est ignorée et il n'en rend qu'un — le bot jouait alors
         toujours le meilleur coup) */
      const lignes = await J.moteur.multi(fen, NOEUDS_BOT, Math.min(256, J.jeu.moves().length));
      if (jeton !== J.jeton) return;
      J.nbLignes = lignes.length;
      const h = J.jeu.history({ verbose: true });
      verifierOccasion(Math.max(...lignes.map(l => l.cp)));
      const ch = choisirCoupBot(lignes, fen, ply, h.length ? h[h.length - 1] : null);
      uci = ch && ch.uci;
    }
  } catch (e) { console.warn('bot', e); }
  if (jeton !== J.jeton || !J.enCours) return;
  if (!uci) { const ls = J.jeu.moves({ verbose: true }); if (!ls.length) return; uci = uciDe(ls[0]); }
  const attente = Bot.tempsReflexion(J.pendule, J.temps[J.jeu.turn()], ply, !livre.length) - (Date.now() - t0);
  if (attente > 0) await new Promise(r => setTimeout(r, attente));
  if (jeton !== J.jeton || !J.enCours) return;
  let mv; try { mv = J.jeu.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || 'q' }); } catch (e) { mv = null; }
  J.botPense = false;
  if (!mv) return;
  acterCoup(mv, livre);
  J.plateau.persistantes = { [mv.from]: 'dernier', [mv.to]: 'dernier' };
  J.plateau.marques = J.plateau.persistantes;
  J.plateau.animerVers(J.jeu.fen(), mv);
  if (!finSiBesoin()) J.plateau.onCoup = coupHumainPlateau;
  majEcran();
}
/* Le coup du bot hors du livre : de temps en temps une occasion tactique,
   sinon un coup de son niveau. */
function choisirCoupBot(lignes, fen, ply, prec) {
  if (J.motifs.size && ply >= 10 && ply - J.dernierCadeau >= attenteCadeau() && Math.random() < PROBA_CADEAU) {
    const niveaux = Object.fromEntries([...J.motifs].map(m => [m, niveauDe(m)]));
    const c = Bot.choisirOccasion(Bot.occasions(lignes, fen, J.motifs, prec, ply), niveaux);
    if (c) {
      J.dernierCadeau = ply;
      const o = { ply, motif: c.motif, niveau: c.niveau, sol: c.sol, solSan: c.solSan, gain: c.perte,
        cp: c.cp, meilleur: c.meilleur, trouve: null };
      J.occasions.push(o); J.occasionEnCours = o;
      return { uci: c.uci, sorte: 'cadeau' };
    }
  }
  const reglage = J.finales ? { simplifier: true, avantFinale: !estFinale(J.jeu) } : null;
  if (J.perso && typeof Bot.choisirPerso === 'function')
    return Bot.choisirPerso(lignes, fen, prec, ply, J.perso, contextePerso(), Math.random, reglage);
  return Bot.choisir(lignes, fen, J.elo, ply, prec, Math.random, reglage);
}
function attenteCadeau() {
  return [...J.motifs].every(m => niveauDe(m) >= 2.5) ? ATTENTE_MAITRISE : ATTENTE_CADEAU;
}
/* As-tu saisi l'occasion ? On le sait au coup suivant du bot : si son
   meilleur score est retombé près de celui qu'il avait concédé, oui. */
function verifierOccasion(meilleurApres, mat) {
  const o = J.occasionEnCours;
  if (!o) return;
  const h = J.jeu.history({ verbose: true });
  if (h.length < o.ply + 2) return;
  J.occasionEnCours = null;
  const r = h[o.ply + 1];
  o.joue = r.san;
  o.trouve = !!mat || uciDe(r) === o.sol
    || (o.motif !== 'mat' && meilleurApres !== undefined && meilleurApres <= o.cp + 0.4 * (o.meilleur - o.cp));
  const n = niveauxMotifs(), x = n[o.motif] || { niveau: 1, vus: 0, trouves: 0 };
  x.niveau = Bot.majNiveau(x.niveau, o.trouve); x.vus++; if (o.trouve) x.trouves++;
  n[o.motif] = x;
  sauver();
}
function indiceLigne() {
  if (!J.enCours || J.botPense || J.jeu.turn() !== J.camp) return;
  const l = livreIci();
  if (!l.length) return;
  J.indices++;
  const meilleur = l.slice().sort((a, b) => b.poids - a.poids)[0];
  J.plateau.marquer(Object.assign({}, J.plateau.persistantes, { [meilleur.u.slice(0, 2)]: 'indice' }));
  if (typeof Son !== 'undefined') Son.jouer('indice');
  $('#jeu-livre').innerHTML = '';
  $('#jeu-livre').append(el('div', { class: 'msg info', html: tx('La ligne joue <span class="mv good">{0}</span>.', [fr(meilleur.s)])
    + (l.length > 1 ? tx(' Autres coups du livre : {0}.', [l.filter(a => a !== meilleur).map(a => fr(a.s)).join(', ')]) : '') }));
}

/* ------------------------------------------------------------- la pendule */
function resteDe(c) {
  return J.temps[c] - (J.enCours && J.jeu.turn() === c ? Date.now() - J.depuis : 0);
}
function texteTemps(ms) {
  const s = Math.max(0, ms) / 1000;
  if (s < 10) return '0:0' + s.toFixed(1).replace('.', typeof I18N !== 'undefined' ? I18N.dec : ',');
  const t = Math.ceil(s);
  return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
}
function majPendules() {
  const bas = J.plateau ? J.plateau.orientation : J.camp, haut = bas === 'w' ? 'b' : 'w';
  for (const [id, c] of [['#pendule-haut', haut], ['#pendule-bas', bas]]) {
    const z = $(id); if (!z) continue;
    const qui = c === J.camp ? tx('Toi') : tx('Bot {0}', [J.elo]);
    const actif = J.enCours && J.jeu.turn() === c;
    z.className = 'pendule' + (actif ? ' actif' : '') + (J.pendule && resteDe(c) < 20000 ? ' presse' : '');
    z.innerHTML = '';
    ajouterA(z, el('span', { class: 'pd-qui' }, el('span', { class: 'rep-pion ' + c, 'aria-hidden': 'true' }), qui),
      J.pendule ? el('span', { class: 'pd-temps' }, texteTemps(resteDe(c))) : null);
  }
}
function tic() {
  if (!J.enCours) return;
  majPendules();
  if (!J.pendule) return;
  const c = J.jeu.turn();
  if (resteDe(c) <= 0) {
    J.temps[c] = 0;
    /* tombé au temps : nulle si l'autre camp ne peut pas mater */
    terminer(materielPourMater(J.jeu, c === 'w' ? 'b' : 'w')
      ? { gagnant: c === 'w' ? 'b' : 'w', raison: 'temps' } : { gagnant: null, raison: 'temps' });
  }
}
function materielPourMater(jeu, c) {
  const p = jeu.board().flat().filter(x => x && x.color === c && x.type !== 'k').map(x => x.type);
  if (p.some(t => t === 'p' || t === 'r' || t === 'q')) return true;
  return p.length >= 2;
}

/* ------------------------------------------------------------- l'écran de partie */
function majEcran() {
  majPendules(); majEtat();
  const h = J.jeu.history();
  const z = $('#jeu-coups'); z.innerHTML = '';
  libellesCoups(h).forEach((t, i) => z.append(el('span', { class: (i % 2 === 0) === (J.camp === 'w') ? 'ok' : 'att' }, t)));
  $('#jeu-livre').innerHTML = '';
  if (J.libre) return;
  const l = livreIci();
  const s = J.sortie;
  if (s && !J.sortieMsg) {
    const n = Math.floor(s.ply / 2) + 1;
    J.sortieMsg = s.qui === 'moi' ? tx('Tu as quitté la ligne au coup {0} (le livre jouait {1}) : à partir d’ici, c’est une vraie partie.', [n, fr(s.attendu)])
      : s.qui === 'bot' ? tx('Le bot a quitté la ligne au coup {0}.', [n])
        : tx('Fin de la ligne au coup {0} : à toi de trouver le plan.', [n]);
  }
  if (J.sortieMsg) $('#jeu-livre').append(el('p', { class: 'sous', style: 'margin:8px 0 0' }, J.sortieMsg));
  else if (l.length) $('#jeu-livre').append(el('p', { class: 'sous', style: 'margin:8px 0 0' }, tx('Dans la ligne.')));
  $('#jeu-indice').disabled = !(J.enCours && l.length && J.jeu.turn() === J.camp);
}
function majEtat() {
  const z = $('#jeu-etat'); if (!z) return;
  if (!J.enCours) { z.hidden = true; return; }
  z.hidden = false;
  const echec = J.jeu.inCheck() ? ' ' + tx('Échec !') : '';
  z.className = 'msg' + (J.jeu.turn() === J.camp ? ' ok' : '');
  z.textContent = J.jeu.turn() === J.camp ? tx('À toi de jouer.') + echec : tx('Le bot réfléchit…') + echec;
}

/* ------------------------------------------------------------- la fin */
function finSiBesoin() {
  const j = J.jeu;
  if (j.isCheckmate()) { terminer({ gagnant: j.turn() === 'w' ? 'b' : 'w', raison: 'mat' }); return true; }
  const raison = j.isStalemate() ? 'pat' : j.isThreefoldRepetition() ? 'repetition'
    : j.isInsufficientMaterial() ? 'materiel' : j.isDrawByFiftyMoves() ? 'cinquante' : null;
  if (raison) { terminer({ gagnant: null, raison }); return true; }
  return false;
}
function terminer({ gagnant, raison }) {
  if (!J.enCours) return;
  /* le temps du dernier coup en cours (abandon, chute au temps) n'est pas un coup */
  if (raison === 'mat' && gagnant === J.camp) verifierOccasion(undefined, true);
  J.enCours = false; J.botPense = false; J.jeton++;
  clearInterval(J.minuteur);
  if (J.plateau) J.plateau.onCoup = null;
  if (J.moteur) J.moteur.arreter();
  const score = gagnant === null ? .5 : (gagnant === J.camp ? 1 : 0);
  const resultat = gagnant === null ? '1/2-1/2' : (gagnant === 'w' ? '1-0' : '0-1');
  const p = enregistrerPartie(score, resultat, raison);
  J.fin = p;
  majPendules(); majEtat();
  $('#jeu-abandon').hidden = true; $('#jeu-indice').disabled = true;
  const titre = score === 1 ? tx('Tu as gagné') : score === .5 ? tx('Partie nulle') : tx('Tu as perdu');
  const comment = {
    mat: score === 1 ? tx('par mat.') : tx('le bot t’a maté.'), abandon: tx('tu as abandonné.'),
    temps: gagnant === null ? tx('au temps, mais sans matériel pour mater.') : (score === 1 ? tx('le bot est tombé au temps.') : tx('ta pendule est tombée.')),
    pat: tx('par pat.'), repetition: tx('par triple répétition.'), materiel: tx('plus assez de matériel pour mater.'),
    cinquante: tx('par la règle des 50 coups.'),
  }[raison] || '';
  if (typeof Son !== 'undefined') Son.jouer(score === 1 ? 'mat' : 'fini');
  const z = $('#jeu-fin'); z.innerHTML = '';
  z.append(el('div', { class: 'msg ' + (score === 1 ? 'ok' : score === 0 ? 'ko' : 'info') },
    el('strong', {}, titre), ' — ', comment),
  el('div', { class: 'ligne-ctrl', style: 'margin-top:10px' },
    el('button', { class: 'b', onclick: () => { J.fin = null; ouvrirBilan(p, () => onglet('jouer')); } }, tx('Voir le bilan')),
    el('button', { class: 'b g', onclick: () => { J.fin = null; rejouerTheme(p); } }, J.libre ? tx('Rejouer') : tx('Rejouer ce thème')),
    el('button', { class: 'b g', onclick: () => { J.fin = null; vueJouer(); } }, tx('Retour'))));
}
function enregistrerPartie(score, resultat, raison) {
  const sans = J.jeu.history();
  const base = J.pendule ? J.pendule.base : BASE_SANS_PENDULE;
  /* pendule « virtuelle » : le temps restant sans l'incrément, pour que le
     bilan retrouve le temps passé sur chaque coup */
  const cumul = { w: 0, b: 0 }, clks = [];
  sans.forEach((s, i) => {
    const c = i % 2 === 0 ? 'w' : 'b';
    cumul[c] += J.durees[i] || 0;
    clks.push(Math.round((base - cumul[c]) * 10) / 10);
  });
  const fin = Math.round(Date.now() / 1000);
  const id = 'bot:' + Date.now().toString(36);
  const brut = {
    url: id, date: aujourdhui(), fin, couleur: J.camp, score, resultat,
    adversaire: (J.persoType === 'coriace' ? 'Bot coriace ' : J.perso ? 'Bot perso ' : 'Bot ') + J.elo, elo: null, eloAdv: J.elo, termination: raison, base,
    sans: sans.join(' '), clks,
  };
  const d = deplier(brut);
  brut.coups = d.coups;
  brut.stat = analyseStatique(brut);
  const p = compacter(brut);
  p.bot = {
    elo: J.elo, pendule: J.pendule, indices: J.indices, sortie: J.sortie,
    theme: J.entree ? { id: J.entree.id, ligne: J.ligne ? J.ligne.nom : null } : null,
    rep: J.rep ? J.rep.id : null, repNom: !J.entree && J.rep ? J.rep.nom : null,
  };
  if (J.motifs.size) {
    p.bot.motifs = [...J.motifs];
    p.bot.occasions = J.occasions.map(o => ({ ply: o.ply, motif: o.motif, niveau: o.niveau, sol: o.sol,
      solSan: o.solSan, gain: o.gain, trouve: o.trouve, joue: o.joue || null }));
    p.bot.niveaux = Object.fromEntries([...J.motifs].map(m => [m, [J.niveauxAvant[m] || 1, niveauDe(m)]]));
  }
  if (J.finales) p.bot.finales = true;
  if (J.perso) p.bot.perso = J.persoType;
  partiesBot()[id] = p;
  sauver();
  return p;
}

/* ------------------------------------------------------------- le bilan ciblé
   Appelé par le bilan (bilan.js) pour une partie contre le bot : ce que tu
   voulais travailler, d'abord. `B` : l'état du bilan (partie, modèle, évals). */
function bilanTheme(B) {
  const p = B.p, info = p.bot || {};
  const z = el('div', { class: 'bil-theme' });
  const entree = info.theme && Bot.LIVRE.find(e => e.id === info.theme.id);
  const rep = info.rep ? repDe(info.rep) : null;
  const tactique = !!(info.motifs && info.motifs.length), finale = !!info.finales;
  if (!entree && !rep && !tactique && !finale) {
    z.append(el('p', { style: 'margin:0' }, tx('Partie libre, sans thème : le bilan ci-dessous porte sur toute la partie.')));
    return z;
  }
  if (entree || rep) bilanOuverture(B, z, entree, rep);
  if (tactique) bilanTactique(B, z);
  if (finale) bilanFinale(B, z);
  const lecon = entree && entree.rep && typeof lecons === 'function' ? lecons().find(l => l.rep === entree.rep) : null;
  ajouterA(z, el('div', { class: 'ligne-ctrl', style: 'margin:12px 0 0' },
    el('button', { class: 'b', onclick: () => rejouerTheme(p) }, tx('Rejouer ce thème')),
    lecon ? el('button', { class: 'b g', onclick: () => ouvrirLecon(lecon.id) }, tx('La leçon : {0}', [lecon.titre])) : null,
    rep ? el('button', { class: 'b g', onclick: () => ouvrirRepEditeur(rep.id) }, tx('Ton répertoire dans l’éditeur')) : null));
  return z;
}
const sousTitre = (t) => el('p', { class: 'bil-sous-theme' }, el('strong', {}, t));

/* --- l'ouverture demandée */
function bilanOuverture(B, z, entree, rep) {
  const p = B.p, info = p.bot || {}, M = B.M, moi = p.couleur;
  if (info.motifs && info.motifs.length || info.finales) z.append(sousTitre(tx('L’ouverture')));
  const ligne = entree && info.theme.ligne ? entree.lignes.find(l => l.nom === info.theme.ligne) : null;
  const nom = entree ? tx(entree.nom) : rep.nom;
  const sans = M.coups.map(k => k.san);
  const pts = (cp) => (typeof points === 'function' ? points(cp) : (cp / 100).toFixed(1));
  const mv = (k, cls) => Expl.mvTxt(k.fen, k.san, cls);

  /* 1. l'ouverture a-t-elle eu lieu, et quelle variante */
  if (entree) {
    const defs = Bot.positionsDef(entree);
    const j = new Chess(); let atteinte = false;
    for (let i = 0; i < sans.length && i < entree.def + 4; i++) {
      try { j.move(sans[i]); } catch (e) { break; }
      if (defs.has(Bot.cleDe(j))) { atteinte = true; break; }
    }
    const v = Bot.varianteSuivie(entree, sans);
    const memes = v ? Bot.lignesDe(entree).filter(({ ligne, pas }) => ligne !== v.ligne
      && pas.length >= v.n && sans.slice(0, v.n).every((x, i) => pas[i].s === x)).map(x => x.ligne) : [];
    if (!atteinte) {
      z.append(el('p', { style: 'margin:0 0 8px' }, el('strong', {}, tx('L’ouverture demandée n’a pas eu lieu. ')),
        tx('La partie en est sortie avant ses premiers coups : relance-la et suis la ligne, avec « Coup de la ligne » si besoin.')));
    } else if (v && memes.length + 1 === entree.lignes.length) {
      z.append(el('p', { style: 'margin:0 0 8px' }, tx('La partie a suivi pendant {0} demi-coups le tronc commun de toutes les variantes de l’ouverture.', [v.n])));
    } else if (v && memes.length) {
      z.append(el('p', { style: 'margin:0 0 8px', html: tx('La partie a suivi pendant {0} demi-coups le tronc commun de plusieurs variantes : {1}.',
        [v.n, [v.ligne].concat(memes).map(l => tx(l.nom)).join(', ')]) }));
    } else if (v) {
      z.append(el('p', { style: 'margin:0 0 8px', html: tx('Ligne suivie : <strong>{0}</strong>, pendant {1} demi-coups sur les {2} de la ligne.',
        [tx(v.ligne.nom), v.n, v.total]) }));
    }
  } else {
    z.append(el('p', { style: 'margin:0 0 8px' }, tx('Le bot a suivi ton répertoire « {0} ».', [rep.nom])));
  }

  /* 2. la sortie de la ligne */
  const s = info.sortie;
  if (s && M.coups[s.ply]) {
    const k = M.coups[s.ply], n = M.notes[s.ply];
    if (s.qui === 'moi') {
      const perte = n && n.perte !== null ? n.perte : null;
      const verdict = perte === null ? tx(' L’analyse dira si c’était un problème.')
        : perte < 50 ? tx(' Le moteur n’y voit presque pas de différence : sans dommage.')
          : tx(' Ça t’a coûté {0} : c’est le coup de la ligne qu’il faut retenir.', [pts(perte)]);
      const attendu = s.attendu ? Expl.mvTxt(k.fen, s.attendu, 'good') : '';
      z.append(el('p', { style: 'margin:0 0 8px', html: tx('Au coup {0}, tu as quitté la ligne : {1} au lieu de {2}.', [k.numero, mv(k, perte !== null && perte >= 50 ? 'bad' : ''), attendu]) + verdict }),
        el('div', { class: 'ligne-ctrl', style: 'margin:0 0 10px' }, boutonCoup(s.ply)));
    } else if (s.qui === 'bot') {
      z.append(el('p', { style: 'margin:0 0 8px', html: tx('Au coup {0}, le bot a quitté la ligne avec {1}.', [k.numero, mv(k, '')]) }));
    } else {
      z.append(el('p', { style: 'margin:0 0 8px' }, tx('La ligne s’arrête au coup {0} : la suite était à toi.', [k.numero])));
    }
  } else if (s === null || s === undefined) {
    z.append(el('p', { style: 'margin:0 0 8px' }, tx('Toute la partie est restée dans la ligne.')));
  }
  if (info.indices) z.append(el('p', { class: 'sous', style: 'margin:0 0 8px' }, tx('Tu as demandé {0} fois le coup de la ligne.', [info.indices])));

  /* 3. tes coups d'ouverture : jusqu'à ton 12e coup */
  const nbMiens = M.coups.filter(k => k.c === moi).length;
  if (M.aEvals && nbMiens >= 4) {
    const mes = M.notes.filter(n => n.mien && n.perte !== null && M.coups[n.i].numero <= 12);
    const erreurs = mes.filter(n => n.perte >= 100);
    const moy = mes.length ? Math.round(mes.reduce((a, n) => a + n.perte, 0) / mes.length) : 0;
    const t = el('p', { style: 'margin:0 0 8px' });
    if (!erreurs.length) t.append(el('strong', {}, tx('Ouverture propre : ')), tx('aucune erreur d’un point ou plus sur tes 12 premiers coups ({0} cp de perte moyenne).', [moy]));
    else t.append(el('strong', {}, erreurs.length > 1 ? tx('{0} erreurs dans l’ouverture : ', [erreurs.length]) : tx('Une erreur dans l’ouverture : ')),
      ...erreurs.map(n => boutonCoup(n.i)), ' ', tx('({0} cp de perte moyenne sur tes 12 premiers coups).', [moy]));
    z.append(t);
  }

  /* 4. les principes : développement, roque, dame */
  const j2 = new Chess(); let roque = null, sortieDame = null, developpes = new Set(), deuxFois = null;
  const bouges = new Map();
  for (let i = 0; i < sans.length; i++) {
    let m; try { m = j2.move(sans[i]); } catch (e) { break; }
    if (m.color !== moi) continue;
    const num = Math.floor(i / 2) + 1;
    if (num > 12) break;
    if (m.flags.includes('k') || m.flags.includes('q')) roque = roque || num;
    if (m.piece === 'q' && num <= 6 && sortieDame === null) sortieDame = num;
    if ((m.piece === 'n' || m.piece === 'b') && num <= 10) {
      const rangOrigine = moi === 'w' ? '1' : '8';
      if (m.from[1] === rangOrigine) developpes.add(m.from);
      const deja = bouges.get(m.from);
      if (deja && !m.captured && num <= 8 && deuxFois === null) deuxFois = { num, san: m.san };
      bouges.delete(m.from); bouges.set(m.to, true);
    }
  }
  const lst = el('ul', { class: 'bil-principes' });
  const assezLongue = nbMiens >= 10;
  lst.append(el('li', {}, developpes.size >= 4 ? tx('Tes quatre pièces mineures étaient sorties avant le coup 10.')
    : tx('{0} pièce(s) mineure(s) sur quatre sorties avant le coup 10 : développe-les avant d’attaquer.', [developpes.size])));
  lst.append(el('li', {}, roque ? tx('Roque au coup {0}.', [roque]) : tx('Pas de roque dans les 12 premiers coups : ton roi est resté au centre.')));
  if (sortieDame) lst.append(el('li', {}, tx('Ta dame est sortie dès le coup {0} : tôt, elle se fait chasser et te fait perdre du temps.', [sortieDame])));
  if (deuxFois) lst.append(el('li', {}, tx('Une même pièce a bougé deux fois avant le coup 8 ({0}) : chaque coup de pièce compte, dans l’ouverture.', [fr(deuxFois.san)])));
  if (assezLongue) z.append(el('p', { style: 'margin:6px 0 2px' }, el('strong', {}, tx('Les principes'))), lst);

  /* 5. l'idée de l'ouverture */
  if (entree) z.append(el('p', { style: 'margin:8px 0 0' }, el('strong', {}, tx('L’idée de l’ouverture. ')), tx(entree.idee)));
}

/* --- les tactiques : les occasions laissées par le bot, puis les autres */
function bilanTactique(B, z) {
  const p = B.p, info = p.bot || {}, M = B.M, moi = p.couleur;
  const noms = NOMS_MOTIFS(), voulus = new Set(info.motifs);
  const mv = (k, cls) => Expl.mvTxt(k.fen, k.san, cls);
  z.append(sousTitre(tx('Les occasions que le bot t’a laissées')));
  const occ = info.occasions || [];
  if (!occ.length) z.append(el('p', { style: 'margin:0 0 8px' }, tx('Aucune cette fois : la partie n’en a pas donné l’occasion. Les occasions viennent hors des premiers coups, au plus une fois tous les quatre coups du bot.')));
  const liste = el('ul', { class: 'bil-principes' });
  for (const o of occ) {
    const k = M.coups[o.ply], suite = M.coups[o.ply + 1];
    if (!k) continue;
    const sol = suite ? Expl.mvTxt(suite.fen, o.solSan, 'good') : `<span class="mv good">${fr(o.solSan)}</span>`;
    const quoi = tx('Coup {0} : après {1}, il y avait {2} avec {3}.', [k.numero, mv(k, ''), MOTIF_UN()[o.motif], sol]);
    const verdict = o.trouve === null || o.trouve === undefined ? tx(' La partie s’est arrêtée avant ta réponse.')
      : o.trouve ? (suite && suite.san === o.solSan ? tx(' Trouvée.') : tx(' Trouvée autrement : {0} gagne aussi.', [suite ? mv(suite, 'good') : '']))
        : tx(' Ratée : tu as joué {0}.', [suite ? mv(suite, 'bad') : '']);
    liste.append(el('li', {}, el('span', { html: quoi + verdict }), ' ', boutonCoup(o.ply)));
  }
  if (occ.length) z.append(liste);
  const niv = info.niveaux || {};
  const n = Object.keys(niv);
  if (n.length) z.append(el('p', { class: 'sous', style: 'margin:0 0 8px' },
    tx('Ton niveau : {0}.', [n.map(m => `${noms[m].toLowerCase()} ${fmtNiv(niv[m][0])} → ${fmtNiv(niv[m][1])}`).join(' · ')])));
  /* les occasions que la partie a données d'elle-même (il faut l'analyse) */
  if (!M.aEvals || !B.bests) return;
  const offertes = new Set(occ.map(o => o.ply + 1));
  const autres = [];
  for (const nt of M.notes) {
    if (!nt.mien || nt.perte === null || offertes.has(nt.i)) continue;
    const k = M.coups[nt.i], best = B.bests[nt.i];
    if (!best) continue;
    const prec = nt.i ? M.coups[nt.i - 1].m : null;
    const a = Bot.motifsDuCoup(k.fen, best, prec);
    const ok = a.motifs.filter(m => voulus.has(m));
    if (!ok.length) continue;
    const trouvee = k.uci === best;
    if (!trouvee && nt.perte < 150) continue;          // le meilleur coup ne gagnait presque rien de plus
    autres.push({ i: nt.i, motif: ok[0], trouvee, best: Expl.sanDe(k.fen, best) });
  }
  if (!autres.length) return;
  z.append(sousTitre(tx('Les autres occasions de la partie')));
  const l2 = el('ul', { class: 'bil-principes' });
  for (const x of autres.slice(0, 8)) {
    const k = M.coups[x.i];
    l2.append(el('li', {}, el('span', { html: x.trouvee
      ? tx('Coup {0} : {1}, bien vu.', [k.numero, mv(k, 'good') + ' (' + MOTIF_SEUL()[x.motif] + ')'])
      : tx('Coup {0} : {1} au lieu de {2} ({3}).', [k.numero, mv(k, 'bad'), Expl.mvTxt(k.fen, x.best, 'good'), MOTIF_SEUL()[x.motif]]) }),
    ' ', boutonCoup(Math.max(0, x.i - 1))));
  }
  z.append(l2);
}

/* --- la finale : y est-on arrivé, et qu'en as-tu fait */
function bilanFinale(B, z) {
  const p = B.p, M = B.M, moi = p.couleur;
  z.append(sousTitre(tx('La finale')));
  const j = new Chess(); let entree = -1;
  for (let i = 0; i < M.coups.length; i++) {
    try { j.move(M.coups[i].san); } catch (e) { break; }
    if (estFinale(j)) { entree = i; break; }
  }
  if (entree < 0) {
    z.append(el('p', { style: 'margin:0 0 8px' }, tx('La partie s’est terminée avant la finale : il restait {0} points de pièces au dernier coup (la finale commence sous 27).',
      [pointsPieces(j)])));
    return;
  }
  const k = M.coups[entree];
  const sg = moi === 'w' ? 1 : -1;
  const ev = B.evals && B.evals[entree + 1] !== undefined ? sg * B.evals[entree + 1] : null;
  const res = p.score === 1 ? tx('gagnée') : p.score === .5 ? tx('nulle') : tx('perdue');
  z.append(el('p', { style: 'margin:0 0 8px' },
    tx('Finale atteinte au coup {0}', [k.numero]),
    ev !== null ? tx(', avec {0} pour toi', [evalTexte(ev)]) : '', '. ',
    tx('Résultat : {0}.', [res]), ' ', boutonCoup(entree)));
  if (ev !== null) {
    const verdict = ev >= 200 && p.score < 1 ? tx('Tu étais mieux en entrant en finale et tu ne l’as pas gagnée : c’est la conversion qu’il faut travailler.')
      : ev <= -200 && p.score > 0 ? tx('Tu étais moins bien en entrant en finale et tu as sauvé des points : belle défense.')
        : ev >= 200 ? tx('Avantage converti.') : '';
    if (verdict) z.append(el('p', { style: 'margin:0 0 8px' }, verdict));
  }
  if (!M.aEvals) return;
  const erreurs = M.notes.filter(n => n.mien && n.i >= entree && n.perte !== null && n.perte >= 100);
  z.append(el('p', { style: 'margin:0 0 8px' }, erreurs.length
    ? [el('strong', {}, erreurs.length > 1 ? tx('{0} erreurs en finale : ', [erreurs.length]) : tx('Une erreur en finale : ')), ...erreurs.slice(0, 8).map(n => boutonCoup(n.i))]
    : tx('Aucune erreur d’un point ou plus en finale.')));
}
