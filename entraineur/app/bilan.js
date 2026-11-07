/* ==========================================================================
   Bilan de partie : rejoue la partie coup par coup et l'explique.

   En haut, un résumé : les moments clés, la courbe de la partie, ton
   ouverture comparée à ton répertoire, ce qu'il faut retenir, et le mode
   « Retrouve le coup ». En dessous, l'échiquier : des flèches (vert le bon
   coup, rouge ton coup, orange la menace), un radar des pièces en prise,
   un clic sur une case pour savoir qui l'attaque et qui la défend. À côté,
   l'explication du coup affiché, pour les deux camps.

   Les phrases viennent d'explications.js (Expl), qui n'a pas de DOM.
   ========================================================================== */
'use strict';

const B = {
  p: null, M: null, plateau: null, i: 0, evals: null, bests: null,
  vue: 'apres',           // 'apres' : la position après le coup ; 'avant' : celle d'avant, avec le bon coup
  explo: null,            // { type: 'meilleur'|'punition', depart, pv, sans, fens, pas }
  quiz: null,             // mode « Retrouve le coup »
  caseInfo: null,         // case cliquée
  survol: null,           // case survolée dans le texte
  retour: null,
};
const FL = { vert: '#2f7d4f', rouge: '#b5382c', orange: '#c2761b', gris: '#8a8f84' };
/* symboles écrits après le coup dans la liste (les notations sans symbole
   écrit — excellent, bon — ne s'y voient que par la couleur et le badge) */
const SYMBOLE = { brill: '!!', seul: '!', best: '★', gaffe: '??', err: '?', imp: '?!' };
/* un badge de notation : rond coloré + symbole, comme sur l'échiquier */
function pastille(cls, avecNom) {
  const C = Expl.CLASSES[cls]; if (!C) return null;
  return el('span', { class: 'notation' + (avecNom ? ' avec-nom' : ''), title: C.aide,
    style: `--fond-not:${C.coul};--encre-not:${C.encre || '#fff'}` },
    el('b', {}, C.sym), avecNom ? el('span', {}, C.nom) : null);
}

/* Probabilité de gain des blancs, d'après l'évaluation en centipions. */
const probaBlancs = (cp) => 1 / (1 + Math.exp(-Math.max(-1500, Math.min(1500, cp)) / 380));

function evalTexte(cp) {
  /* Le moteur code un mat en n coups par ±(10000 − n) : n = 0, c'est la
     position déjà matée. On affiche « #3 » pour un mat en 3, « mat » une fois
     qu'il est sur l'échiquier. */
  if (Math.abs(cp) >= 9000) {
    const n = 10000 - Math.abs(cp);
    if (n <= 0) return 'mat';
    return (cp > 0 ? '#' : '−#') + n;
  }
  return (cp >= 0 ? '+' : '−') + (Math.abs(cp) / 100).toFixed(1).replace('.', I18N.dec);
}
const signeLecteur = () => (B.p && B.p.couleur === 'b' ? -1 : 1);

/* ========================================================== ouverture */
function ouvrirBilan(p, retour) {
  /* Le bilan s'ouvre en haut de page ; en revenant, on retrouve la liste au
     défilement où on l'avait laissée. */
  const y = window.scrollY;
  const r0 = retour || (() => onglet('jour'));
  arreterQuiz(true);
  B.p = p; B.retour = () => { r0(); window.scrollTo(0, y); };
  window.scrollTo(0, 0);
  B.evals = (p.moteur && p.moteur.evals) || null;
  B.bests = (p.moteur && p.moteur.bests) || null;
  B.i = 0; B.explo = null; B.vue = 'apres'; B.caseInfo = null; B.survol = null;
  $$('.panneau').forEach(x => x.classList.toggle('actif', x.id === 'p-bilan'));
  $$('nav button').forEach(b => b.setAttribute('aria-selected', 'false'));
  if (!B.plateau) {
    B.plateau = new Plateau($('#plateau-bilan'));
    B.plateau.onCase = (sq) => basculerCase(sq);
    $('#bil-debut').onclick = () => allerA(0);
    $('#bil-prec').onclick = () => reculer();
    $('#bil-suiv').onclick = () => avancer();
    $('#bil-fin').onclick = () => allerA(B.M.coups.length);
    $('#bil-tourner').onclick = () => { B.orientation = B.orientation === 'w' ? 'b' : 'w'; dessinerBilan(); };
    $('#bil-meilleur').onclick = () => (B.explo ? fermerLigne() : lancerLigne('meilleur'));
    $('#bil-radar').onclick = () => {
      S.d.reglages.radarBilan = !S.d.reglages.radarBilan; sauver(); dessinerBilan();
    };
    $('#bil-retour').onclick = () => { B.jeton++; arreterQuiz(true); document.removeEventListener('keydown', clavier); B.retour(); };
    $('#bil-analyser').onclick = () => analyserPourBilan(false);
    brancherSurvols();
  }
  B.orientation = p.couleur || 'w';
  B.jeton = (B.jeton || 0) + 1;
  /* une partie analysée depuis l'ancien bilan avait « 0 cp · 0 gaffe » */
  if (p.moteur && p.moteur.evals && !p.moteur.nbCoups && p.moteur.evals.length > 1) { statsMoteur(p); sauver(); }
  document.addEventListener('keydown', clavier);
  reconstruire();
  enteteBilan();
  dessinerBilan();
  lexiqueBilan();
  /* les parties importées avant que les évaluations soient conservées n'ont
     pas de quoi remplir la barre : on les analyse tout de suite, en fond. */
  if (!B.evals) analyserPourBilan(true);
  else chercherSeulsCoups();
}

/* Le modèle de la partie (classes, réflexes, brillants) : refait quand les
   évaluations arrivent ou que les « seuls coups » sont trouvés. */
function reconstruire() {
  const p = B.p;
  B.M = Expl.modele({
    sans: p.sans, evals: B.evals, bests: B.bests, couleur: p.couleur || 'w',
    clks: p.clks || null, base: p.base || 600, seuls: (p.moteur && p.moteur.seuls) || null,
  });
  listeCoups();
  resumeBilan();
}

function clavier(e) {
  if (!$('#p-bilan').classList.contains('actif')) return;
  if (e.target && /input|textarea/i.test(e.target.tagName)) return;
  if (e.key === 'Escape') {
    if (fermerPop()) return;
    if (B.quiz) { arreterQuiz(); return; }
    if (B.explo) { fermerLigne(); return; }
    B.jeton++; document.removeEventListener('keydown', clavier); B.retour(); return;
  }
  if (B.quiz) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); avancer(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); reculer(); }
  else if (e.key === 'Home') { e.preventDefault(); allerA(0); }
  else if (e.key === 'End') { e.preventDefault(); allerA(B.M.coups.length); }
}

function enteteBilan() {
  const p = B.p;
  const r = p.score === 1 ? ['grn', tx('gagnée')] : (p.score === .5 ? ['', tx('nulle')] : ['red', tx('perdue')]);
  const d = new Date(p.fin * 1000);
  const e = $('#bil-entete'); e.innerHTML = '';
  e.append(
    el('h2', { style: 'margin:0 0 6px' }, tx('Bilan — {0}', [p.adversaire])),
    el('div', { class: 'haut', style: 'margin-bottom:4px' },
      el('span', { class: 'tag ' + r[0] }, r[1]),
      el('span', { class: 'tag' }, p.couleur === 'w' ? tx('tu jouais les blancs') : tx('tu jouais les noirs')),
      el('span', { class: 'tag' }, p.bot ? tx('bot {0}', [p.eloAdv]) : String(p.eloAdv || '?')),
      siteDe(p) === 'lichess' && !p.bot ? el('span', { class: 'tag' }, 'Lichess') : null,
      p.bot && typeof nomTheme === 'function' ? el('span', { class: 'tag grn' }, nomTheme(p)) : null,
      tagPrecision(p),
      el('span', { class: 'quand' },
        d.toLocaleDateString(I18N.locale, { weekday: 'long', day: 'numeric', month: 'long' })
        + ' · ' + d.toLocaleTimeString(I18N.locale, { hour: '2-digit', minute: '2-digit' }))),
    el('p', { class: 'sous', style: 'margin:0' },
      tx('{0} demi-coups · {1} de réflexion', [B.M.coups.length, mmss(p.stat.tempsUtilise || 0)])
      + (p.moteur ? tx(' · {0} cp de perte moyenne · {1} gaffe(s)', [p.moteur.cpl, gaffesRetenues(p).length]) : '')),
    p.bot ? el('p', { class: 'sous', style: 'margin:6px 0 0' }, tx('Partie d’entraînement contre le bot : elle ne compte pas dans tes indicateurs.'))
      : el('p', { style: 'margin:6px 0 0' },
        el('a', { href: siteDe(p) === 'lichess' && p.couleur === 'b' ? p.url + '/black' : p.url, target: '_blank', rel: 'noopener',
          class: 'sous' }, siteDe(p) === 'lichess' ? tx('ouvrir sur Lichess →') : tx('ouvrir sur chess.com →'))));
  $('#bil-analyser').hidden = !!B.evals;
}

/* ========================================================== résumé */
function resumeBilan() {
  const z = $('#bil-resume'); if (!z) return;
  /* Sur téléphone, le résumé ouvert repoussait l'échiquier cinq écrans plus
     bas : il y est replié au départ. Ensuite, ton choix est gardé. */
  const ouvert = z.firstChild ? z.firstChild.open : !matchMedia('(max-width: 620px)').matches;
  z.innerHTML = '';
  const M = B.M;
  const det = el('details', { class: 'bil-resume' }, el('summary', {}, tx('Résumé de la partie')));
  det.open = ouvert !== false;
  z.append(det);
  /* une partie contre le bot : d'abord ce que tu voulais travailler */
  if (B.p.bot && typeof bilanTheme === 'function') {
    det.append(el('h3', { class: 'bil-h' }, tx('Ce que tu voulais travailler')), bilanTheme(B));
  }
  if (!M.aEvals) {
    det.append(el('p', { class: 'sous' }, B.analyse
      ? tx('Analyse en cours : le résumé apparaît dès que le moteur a fini.')
      : tx('Le résumé a besoin de l’analyse du moteur.')));
    return;
  }
  const R = Expl.resume(M);
  B.resume = R;

  /* les moments clés */
  const cartes = el('div', { class: 'bil-moments' });
  for (const mo of R.moments) cartes.append(carteMoment(mo));
  if (!R.moments.length) cartes.append(el('div', { class: 'bil-moment' },
    el('p', { class: 'sous', style: 'margin:0' }, tx('Pas de moment marquant : aucune erreur d’un point ou plus, ni d’un côté ni de l’autre.'))));
  det.append(el('h3', { class: 'bil-h' }, tx('Les moments clés')), cartes);
  det.append(el('h3', { class: 'bil-h' }, tx('Les notations')), tableauNotations());

  /* la courbe */
  det.append(el('h3', { class: 'bil-h' }, tx('La partie en une courbe')),
    el('p', { class: 'sous bil-sous' }, tx('Au-dessus de la ligne, tu es mieux ; en dessous, c’est lui. Points rouges : tes gaffes ; ambre : tes erreurs ; creux : les siennes. Clique pour aller au coup.')),
    courbeBilan());

  /* l'ouverture */
  const ouv = ouvertureBilan();
  if (ouv) det.append(el('h3', { class: 'bil-h' }, tx('Ton ouverture')), ouv);

  /* à retenir */
  const ret = el('div', { class: 'bil-retenir' });
  if (!R.nbErreurs) {
    ret.append(el('p', {}, el('strong', {}, tx('Partie propre : ')), tx('aucune erreur d’un point ou plus de ton côté. Continue comme ça.')));
  }
  for (const l of R.lecons) {
    ret.append(el('p', {},
      el('strong', {}, l.n > 1 ? tx('{0} fois dans la partie. ', [l.n]) : tx('Une fois dans la partie. ')), l.texte, ' ',
      ...l.coups.map(i => boutonCoup(i))));
  }
  if (R.vite.length) {
    ret.append(el('p', {}, el('strong', {}, tx('Joué trop vite. ')),
      tx('{0} en moins de 3 secondes : ', [R.vite.length > 1 ? tx('{0} de tes erreurs ont été jouées', [R.vite.length]) : tx('Une de tes erreurs a été jouée')])
      + tx('sur les coups qui comptent, prends le temps de regarder les échecs, les prises et les menaces. '), ...R.vite.map(n => boutonCoup(n.i))));
  }
  det.append(el('h3', { class: 'bil-h' }, tx('À retenir')), ret);

  /* retrouve le coup */
  const aRetrouver = positionsQuiz();
  if (aRetrouver.length) {
    det.append(el('div', { class: 'bil-quiz-appel' },
      el('div', {},
        el('strong', {}, tx('Retrouve le coup')),
        el('p', { class: 'sous', style: 'margin:2px 0 0' },
          tx('{0} position{1} de cette partie où il y avait mieux. ', [aRetrouver.length, aRetrouver.length > 1 ? 's' : ''])
          + tx('À toi de trouver, avec des indices si besoin.'))),
      el('button', { class: 'b', onclick: () => demarrerQuiz() }, tx('Commencer'))));
  }
}

function boutonCoup(i) {
  const k = B.M.coups[i];
  return el('button', { class: 'mv', onclick: () => { allerA(i + 1); voirPlateau(); } },
    `${k.numero}${k.c === 'w' ? '.' : '…'}${fr(k.san)}`);
}
function voirPlateau() {
  const g = $('#p-bilan .bilan-grille');
  if (g && g.scrollIntoView) g.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function carteMoment(mo) {
  const M = B.M, k = M.coups[mo.i], n = M.notes[mo.i];
  const mv = Expl.mvTxt(k.fen, k.san, n.mien ? (mo.type === 'beau' ? 'good' : 'bad') : '');
  let titre, cls, texte;
  if (mo.type === 'erreur') {
    titre = tx('Ta plus grosse erreur'); cls = 'red';
    const d = M.diag(mo.i);
    texte = tx('{0} : {1} → {2}. ', [mv, evalTexte(signeLecteur() * B.evals[mo.i]), evalTexte(signeLecteur() * B.evals[mo.i + 1])])
      + (d ? premierePhrase(d.corps || d.html) : '');
  } else if (mo.type === 'cadeau') {
    titre = tx('Son plus gros cadeau'); cls = 'amb';
    const suite = mo.suite !== null ? M.coups[mo.suite] : null;
    const R = B.bests && B.bests[mo.i + 1] ? Expl.sanDe(k.fen2, B.bests[mo.i + 1]) : null;
    texte = `${mv}. ` + (mo.puni
      ? tx('Tu l’as puni : {0}.', [Expl.mvTxt(suite.fen, suite.san, 'good')])
      : (suite ? tx('Tu ne l’as pas puni : tu as joué {0}', [Expl.mvTxt(suite.fen, suite.san, 'bad')])
        + (R ? tx(', alors que {0} en profitait.', [Expl.mvTxt(k.fen2, R, 'good')]) : '.') : ''));
  } else {
    titre = n.cls === 'brill' ? tx('Ton coup brillant') : n.cls === 'seul' ? tx('Ton très bon coup') : tx('Ton meilleur moment'); cls = 'grn';
    texte = tx('{0} : {1}', [mv, texteBonCoup(mo.i)]);
  }
  return el('div', { class: 'bil-moment' },
    el('div', { class: 'haut' }, el('span', { class: 'tag ' + cls }, titre)),
    el('p', { html: texte }),
    el('button', { class: 'b g', onclick: () => { allerA(mo.i + 1); voirPlateau(); } }, tx('Voir sur l’échiquier')));
}
const points = (cp) => { const v = Math.abs(cp) / 100; const x = v.toFixed(1).replace('.', I18N.dec); return v >= 2 ? tx('{0} points', [x]) : tx('{0} point', [x]); };
const texteDe = (html) => String(html || '').replace(/<[^>]+>/g, '');
/* La première phrase d'une explication, pour une carte. */
function premierePhrase(html) {
  const m = html.match(/^(.*?[.!?])(\s|$)/);
  return m ? m[1] : html;
}

function texteBonCoup(i) {
  const n = B.M.notes[i];
  if (n.cls === 'brill') return tx('un sacrifice qui marche.');
  if (n.cls === 'seul') return tx('le seul coup qui gardait la position.');
  if (n.reflexe === 'mat') return tx('échec et mat !');
  if (n.reflexe === 'punition') return tx('tu as puni son erreur tout de suite.');
  if (n.reflexe === 'gratuit') return tx('tu as vu la pièce gratuite.');
  if (n.reflexe === 'sauve') return tx('tu as sauvé ta pièce attaquée.');
  return '';
}

/* ---------- le tableau des notations ----------
   Combien de coups de chaque sorte, pour toi et pour lui. Un clic sur un
   nombre emmène au coup suivant de cette sorte (et reboucle). */
function tableauNotations() {
  const M = B.M;
  const compte = (cls, mien) => M.notes.filter(n => n.cls === cls && n.mien === mien).length;
  const t = el('table', { class: 'bil-notations' },
    el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, tx('Notation')), el('th', { scope: 'col' }, tx('Toi')),
      el('th', { scope: 'col' }, B.p.adversaire))));
  const corps = el('tbody');
  for (const c of Expl.ORDRE_CLASSES) {
    const toi = compte(c, true), lui = compte(c, false);
    if (c === 'matlong' && !toi && !lui) continue;
    const cellule = (n, mien) => el('td', {}, n
      ? el('button', { class: 'nb', title: tx('Aller au coup suivant de cette sorte'), onclick: () => allerClasse(c, mien) }, n)
      : el('span', { class: 'nb zero' }, '0'));
    corps.append(el('tr', {}, el('th', { scope: 'row' }, pastille(c, true)), cellule(toi, true), cellule(lui, false)));
  }
  t.append(corps);
  return el('div', { class: 'bil-notations-zone' }, t);
}
function allerClasse(cls, mien) {
  const l = B.M.notes.filter(n => n.cls === cls && n.mien === mien);
  if (!l.length) return;
  const suivant = l.find(n => n.i + 1 > B.i) || l[0];
  allerA(suivant.i + 1);
  voirPlateau();
}

/* ---------- la courbe ---------- */
function courbeBilan() {
  const ev = B.evals, M = B.M;
  const W = 900, H = 150, G = 36, D = 10, T = 10, Bas = 22;
  const iw = W - G - D, ih = H - T - Bas;
  const n = M.coups.length;
  const X = (i) => G + (n ? i / n : 0) * iw;
  const Y = (v) => T + ih / 2 - (Math.max(-800, Math.min(800, v)) / 800) * (ih / 2);
  const sg = signeLecteur();
  const svg = svgEl('svg', { class: 'bil-courbe', viewBox: `0 0 ${W} ${H}`, role: 'img',
    'aria-label': tx('Évaluation coup par coup, de ton point de vue') });
  svg.append(svgEl('rect', { x: G, y: T, width: iw, height: ih / 2, class: 'zone-moi' }));
  svg.append(svgEl('rect', { x: G, y: T + ih / 2, width: iw, height: ih / 2, class: 'zone-lui' }));
  for (const [v, lab] of [[800, '+8'], [400, '+4'], [0, '0'], [-400, '−4'], [-800, '−8']]) {
    svg.append(svgEl('line', { x1: G, x2: W - D, y1: Y(v), y2: Y(v), class: v === 0 ? 'axe0' : 'grille' }));
    const t = svgEl('text', { x: G - 6, y: Y(v) + 3.5, 'text-anchor': 'end' }); t.textContent = lab; svg.append(t);
  }
  const pts = [];
  for (let i = 0; i <= n && i < ev.length; i++) pts.push((i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(sg * ev[i]).toFixed(1));
  svg.append(svgEl('path', { d: pts.join(''), class: 'trace' }));
  for (let c = 10; c * 2 <= n; c += 10) {
    const t = svgEl('text', { x: X(c * 2), y: H - 6, 'text-anchor': 'middle' }); t.textContent = c; svg.append(t);
  }
  svg.append(svgEl('line', { x1: X(B.i), x2: X(B.i), y1: T, y2: T + ih, class: 'curseur', id: 'bil-curseur' }));
  for (const no of M.notes) {
    if (no.perte === null) continue;
    let cls = null;
    if (no.mien && no.cls === 'gaffe') cls = 'pt-gaffe';
    else if (no.mien && no.cls === 'err') cls = 'pt-err';
    else if (!no.mien && (no.cls === 'gaffe' || no.cls === 'err')) cls = 'pt-adv';
    else if (no.mien && (no.cls === 'brill' || no.cls === 'seul')) cls = 'pt-brill';
    if (!cls) continue;
    const k = M.coups[no.i];
    const c = svgEl('circle', { cx: X(no.i + 1), cy: Y(sg * ev[no.i + 1]), r: cls === 'pt-adv' ? 4 : 5, class: cls });
    const t = svgEl('title', {}); t.textContent = `${k.numero}${k.c === 'w' ? '.' : '…'}${fr(k.san)} — ${Expl.CLASSES[no.cls].nom}`;
    c.append(t); svg.append(c);
  }
  svg.addEventListener('click', (e) => {
    const r = svg.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * W;
    const i = Math.round((x - G) / iw * n);
    allerA(Math.max(0, Math.min(n, i)));
  });
  return svg;
}
function majCurseur() {
  const c = document.getElementById('bil-curseur'); if (!c || !B.M) return;
  const W = 900, G = 36, D = 10, iw = W - G - D, n = B.M.coups.length;
  const x = G + (n ? B.i / n : 0) * iw;
  c.setAttribute('x1', x); c.setAttribute('x2', x);
}

/* ---------- l'ouverture, comparée à ton répertoire ---------- */
function ouvertureBilan() {
  if (typeof contexteEcarts !== 'function' || typeof Rep === 'undefined') return null;
  const p = B.p, moi = p.couleur, ctx = contexteEcarts();
  const gs = ctx.parCamp[moi] || [];
  const z = el('div', { class: 'bil-ouv' });
  if (!gs.length) {
    z.append(el('p', { class: 'sous', style: 'margin:0' },
      tx('Tu n’as pas de répertoire avec les {0} : rien à comparer.', [moi === 'w' ? tx('blancs') : tx('noirs')])));
    return z;
  }
  const j = new Chess();
  let sortie = null, dernier = -1, nomRep = null;
  for (let i = 0; i < B.M.coups.length && i < 60; i++) {
    const k = Rep.cle(j);
    if (!ctx.connues[moi].has(k)) break;
    const avec = gs.filter(({ g }) => g.coupsDe(k).length);
    if (!avec.length) break;
    nomRep = nomRep || avec[0].r;
    const cp = B.M.coups[i];
    const dedans = avec.some(({ g }) => g.coupsDe(k).some(a => a.u === cp.uci));
    if (!dedans) { sortie = { i, rep: avec[0].r, attendu: avec[0].g.coupsDe(k)[0].s }; break; }
    dernier = i;
    j.move(cp.san);
  }
  const lecon = (r) => (typeof lecons === 'function' ? lecons().find(l => l.rep === (r.origine || r.id)) : null);
  const boutons = (r, cle) => {
    const l = lecon(r);
    return el('div', { class: 'ligne-ctrl', style: 'margin:8px 0 0' },
      cle ? el('button', { class: 'b g', onclick: () => ouvrirRepEditeur(r.id, cle) }, tx('Voir dans l’éditeur')) : null,
      l ? el('button', { class: 'b g', onclick: () => ouvrirLecon(l.id) }, tx('La leçon : {0}', [l.titre])) : null);
  };
  if (dernier < 0 && !sortie) {
    z.append(el('p', { style: 'margin:0' }, tx('La partie n’a pas commencé par une position de ton répertoire.')));
    return z;
  }
  if (!sortie) {
    z.append(el('p', { style: 'margin:0', html: tx('Toute l’ouverture est restée dans ton répertoire « {0} ».', [nomRep.nom]) }));
    return z;
  }
  const k = B.M.coups[sortie.i], n = B.M.notes[sortie.i];
  if (k.c === moi) {
    const perte = n.perte;
    const verdict = perte === null ? ''
      : perte < 50 ? tx(' Le moteur ne voit presque pas de différence (−{0}) : sans dommage. Sortir du répertoire n’est pas une faute en soi.', [(perte / 100).toFixed(1).replace('.', I18N.dec)])
        : tx(' Ça t’a coûté {0} : c’est le coup du répertoire qu’il faut retenir.', [points(perte)]);
    z.append(el('p', { style: 'margin:0', html:
      tx('Tu as suivi ton répertoire « {0} » jusqu’au coup {1}, puis tu as joué ', [sortie.rep.nom, k.numero])
      + tx('{0} au lieu de ', [Expl.mvTxt(k.fen, k.san, perte !== null && perte >= 50 ? 'bad' : '')])
      + `${Expl.mvTxt(k.fen, sortie.attendu, 'good')}.${verdict}` }),
    boutons(sortie.rep, Rep.cle(k.fen)));
  } else {
    z.append(el('p', { style: 'margin:0', html:
      tx('Tu as suivi ton répertoire « {0} » jusqu’au coup {1}. Puis ton adversaire a joué ', [sortie.rep.nom, k.numero])
      + tx('{0}, que ton répertoire ne prévoit pas : à partir de là, c’est à toi de réfléchir.', [Expl.mvTxt(k.fen, k.san)]) }),
    boutons(sortie.rep, Rep.cle(k.fen)));
  }
  return z;
}

/* ========================================================== liste des coups */
function listeCoups() {
  const c = $('#bil-coups'); c.innerHTML = '';
  for (const k of B.M.coups) {
    const i = k.i, n = B.M.notes[i];
    if (i % 2 === 0) c.append(el('span', { class: 'num' }, (i / 2 + 1) + '.'));
    c.append(el('button', {
      class: 'coup ' + (n.cls || '') + (n.mien ? ' moi' : ''),
      'data-i': i, title: n.cls ? Expl.CLASSES[n.cls].nom : '', onclick: () => allerA(i + 1),
    }, fr(k.san), SYMBOLE[n.cls] ? el('span', { class: 'sym', style: `color:${Expl.CLASSES[n.cls].texte || Expl.CLASSES[n.cls].coul}` }, SYMBOLE[n.cls]) : null));
  }
  marquerCourant();
}

/* ========================================================== navigation */
function allerA(i) {
  if (B.quiz) return;
  B.explo = null; B.vue = 'apres'; B.caseInfo = null;
  B.i = Math.max(0, Math.min(B.M.coups.length, i));
  dessinerBilan();
}
function avancer() {
  if (B.quiz) return;
  if (B.explo) return avancerLigne();
  if (B.vue === 'avant') { B.vue = 'apres'; return dessinerBilan(); }
  if (B.i >= B.M.coups.length) return;
  const c = B.M.coups[B.i]; B.i++; B.caseInfo = null;
  dessinerBilan(c.m, c.fen2);
}
function reculer() {
  if (B.quiz) return;
  if (B.explo) { if (B.explo.pas > 0) { B.explo.pas--; return dessinerBilan(); } return fermerLigne(); }
  if (B.vue === 'avant') { B.vue = 'apres'; return dessinerBilan(); }
  if (B.i <= 0) return;
  B.i--; B.caseInfo = null; dessinerBilan();
}

/* ========================================================== échiquier */
function fenCourante() {
  if (B.quiz) return B.quiz.fen;
  if (B.explo) return B.explo.fens[B.explo.pas];
  if (B.i === 0) return new Chess().fen();
  const k = B.M.coups[B.i - 1];
  return B.vue === 'avant' ? k.fen : k.fen2;
}
function evalCourante() {
  if (!B.evals) return null;
  if (B.explo) return B.explo.depart < B.evals.length ? B.evals[B.explo.depart] : null;
  const i = B.vue === 'avant' ? B.i - 1 : B.i;
  return i >= 0 && i < B.evals.length ? B.evals[i] : null;
}

const fleche = (uci, couleur) => (uci ? { de: uci.slice(0, 2), vers: uci.slice(2, 4), couleur } : null);

/* Ce que l'échiquier montre pour la position affichée. */
function annotations() {
  const marques = {}, fleches = [];
  const ajoute = (sq, m) => { marques[sq] = [].concat(marques[sq] || [], m); };
  const fen = fenCourante();
  if (B.quiz) {
    const q = B.quiz;
    if (q.indice >= 2 && q.best) ajoute(q.best.slice(0, 2), 'indice');
    if (q.montre && q.best) fleches.push(fleche(q.best, FL.vert));
    if (q.essai) fleches.push(fleche(q.essai, FL.rouge));
  } else if (B.explo) {
    const e = B.explo;
    if (e.pas < e.pv.length) {
      const u = e.pv[e.pas];
      ajoute(u.slice(0, 2), 'sel');
      fleches.push(fleche(u, e.type === 'punition' && e.pas % 2 === 0 ? FL.orange : (e.pas % 2 === 0 ? FL.vert : FL.gris)));
    } else if (e.pv.length) {
      const u = e.pv[e.pv.length - 1];
      ajoute(u.slice(0, 2), 'dernier'); ajoute(u.slice(2, 4), 'dernier');
    }
  } else if (B.i > 0) {
    const i = B.i - 1, k = B.M.coups[i], n = B.M.notes[i];
    const best = B.bests && B.bests[i];
    if (B.vue === 'avant') {
      if (best && best !== k.uci) fleches.push(fleche(k.uci, FL.rouge));
      if (best) fleches.push(fleche(best, FL.vert));
    } else {
      ajoute(k.uci.slice(0, 2), 'dernier'); ajoute(k.uci.slice(2, 4), 'dernier');
      const reponse = B.bests && B.bests[i + 1];
      if (n.mien && n.perte !== null && n.perte >= 100 && n.cls !== 'matlong') {
        if (reponse) fleches.push(fleche(reponse, FL.orange));
      } else if (!n.mien) {
        if (n.perte !== null && n.perte >= 100 && reponse) fleches.push(fleche(reponse, FL.vert));
        else {
          /* la menace : tes pièces qui se perdent si tu ne fais rien */
          const b = Expl.plateau(fen);
          for (const x of Expl.dangers(fen, B.p.couleur).slice(0, 2)) {
            const at = Expl.forces(b, x.sq).attaquants.filter(a => !a.derriere)[0];
            if (at) fleches.push(fleche(at.sq + x.sq, FL.orange));
          }
        }
      }
    }
  }
  /* radar : ce qui se perd si on le laisse */
  if (S.d.reglages && S.d.reglages.radarBilan) {
    const moi = B.p.couleur, lui = moi === 'w' ? 'b' : 'w';
    for (const x of Expl.enPriseX(fen, moi).filter(Expl.PERD)) ajoute(x.sq, 'radar-moi');
    for (const x of Expl.enPriseX(fen, lui).filter(Expl.PERD)) ajoute(x.sq, 'radar-adv');
  }
  if (B.caseInfo) {
    const b = Expl.plateau(fen), f = Expl.forces(b, B.caseInfo);
    ajoute(B.caseInfo, 'sel');
    const p = b.get(B.caseInfo);
    for (const a of f.attaquants) ajoute(a.sq, p ? 'att' : (b.get(a.sq).color === 'w' ? 'def' : 'att'));
    for (const a of f.defenseurs) ajoute(a.sq, p ? 'def' : (b.get(a.sq).color === 'w' ? 'def' : 'att'));
  }
  if (B.survol) ajoute(B.survol, 'survol');
  return { marques, fleches: fleches.filter(Boolean) };
}

/* La notation du coup affiché, en badge sur sa case d'arrivée. */
function badgeCourant() {
  if (B.quiz || B.explo || B.vue === 'avant' || B.i === 0 || !B.M) return null;
  const k = B.M.coups[B.i - 1], n = B.M.notes[B.i - 1];
  const C = n && n.cls ? Expl.CLASSES[n.cls] : null;
  return C ? { sq: k.uci.slice(2, 4), texte: C.sym, fond: C.coul, encre: C.encre || '#fff' } : null;
}
function dessinerBilan(anim, fenApres) {
  const fen = fenCourante();
  const { marques, fleches } = annotations();
  B.plateau.persistantes = marques;
  B.plateau.marques = marques;
  B.plateau.fleches = fleches;
  B.plateau.badge = badgeCourant();
  const ori = B.quiz ? B.p.couleur : B.orientation;
  if (anim && fenApres) B.plateau.animerVers(fenApres, anim, ori);
  else B.plateau.position(fen, ori);

  barreEval();
  infoCoup();
  infoCase();
  marquerCourant();
  majCurseur();
  /* On fait défiler la liste des coups, jamais la page : scrollIntoView
     déplaçait tout l'écran à chaque coup, ce qui éloignait l'échiquier sur
     téléphone. */
  const cour = $('#bil-coups .coup.courant'), liste = $('#bil-coups');
  if (cour && liste && !B.quiz) {
    const zl = liste.getBoundingClientRect(), zc = cour.getBoundingClientRect();
    if (zc.top < zl.top) liste.scrollTop += zc.top - zl.top - 4;
    else if (zc.bottom > zl.bottom) liste.scrollTop += zc.bottom - zl.bottom + 4;
  }
  const bm = $('#bil-meilleur');
  bm.classList.toggle('actif', !!B.explo);
  bm.textContent = B.explo ? tx('Revenir à la partie') : tx('Meilleur coup');
  const radar = !!(S.d.reglages && S.d.reglages.radarBilan);
  $('#bil-radar').classList.toggle('actif', radar);
  $('#bil-radar').setAttribute('aria-pressed', String(radar));
  $('#bil-radar-leg').hidden = !radar;
  for (const id of ['#bil-debut', '#bil-prec', '#bil-suiv', '#bil-fin', '#bil-meilleur', '#bil-tourner']) {
    $(id).disabled = !!B.quiz;
  }
}

function barreEval() {
  const cp = evalCourante();
  const b = $('#bil-barre-n'), t = $('#bil-barre-txt');
  if (cp === null || cp === undefined) {
    b.style.height = '50%';
    t.textContent = B.analyse ? `${B.evals ? B.evals.length : 0}/${B.M.coups.length + 1}` : '?';
    t.className = 'bil-barre-txt';
    return;
  }
  const pBlancs = probaBlancs(cp);
  b.style.height = ((1 - pBlancs) * 100).toFixed(1) + '%';   // le noir descend du haut
  t.textContent = evalTexte(cp);
  t.className = 'bil-barre-txt ' + (cp >= 0 ? 'pour-blancs' : 'pour-noirs');
}

function marquerCourant() {
  $$('#bil-coups .coup').forEach((x) => x.classList.toggle('courant', +x.dataset.i === B.i - 1));
}

/* ---------- clic sur une case : qui l'attaque, qui la défend ---------- */
function basculerCase(sq) {
  if (B.quiz) return;
  B.caseInfo = B.caseInfo === sq ? null : sq;
  dessinerBilan();
}
function infoCase() {
  const z = $('#bil-case'); z.innerHTML = '';
  if (!B.caseInfo || B.quiz) return;
  const fen = fenCourante(), b = Expl.plateau(fen), sq = B.caseInfo, L = B.p.couleur;
  const p = b.get(sq), f = Expl.forces(b, sq);
  const nomme = (a) => Expl.pc(a.t, a.sq, b.get(a.sq).color, L) + (a.derriere ? tx(' (derrière)') : '');
  let html;
  if (p) {
    const at = f.attaquants, de = f.defenseurs;
    html = `<strong>${Expl.maj(Expl.pc(p.type, sq, p.color, L))}</strong> · `
      + (at.length ? tx('{0} par {1}', [Expl.accord(p.type, 'attaqué'), Expl.liste(at.map(nomme))]) : tx('personne ne l’attaque'))
      + ' · '
      + (de.length ? tx('{0} par {1}', [Expl.accord(p.type, 'défendu'), Expl.liste(de.map(nomme))])
        : Expl.G(p.type, 'rien ne le défend', 'rien ne la défend'));
    if (p.type !== 'k' && at.length) {
      const g = Expl.see(fen, sq, p.color === 'w' ? 'b' : 'w');
      html += g > 0 ? tx(' → <strong class="txt-danger">en prise</strong> : la prendre rapporte {0}.', [points(g)])
        : tx(' → elle tient : la prendre ne rapporte rien.');
    }
  } else {
    const blancs = b.attackers(sq, 'w').length, noirs = b.attackers(sq, 'b').length;
    const moi = L === 'w' ? blancs : noirs, lui = L === 'w' ? noirs : blancs;
    html = tx('<strong>Case {0}</strong> · contrôlée {1} fois par toi, {2} fois par lui.', [sq, moi, lui]);
  }
  z.append(el('div', { class: 'bil-case' },
    el('span', { html }),
    el('button', { class: 'b g petit', onclick: () => basculerCase(sq) }, '×')));
}

/* Survoler « ton fou c4 » dans un texte allume la case c4. */
function brancherSurvols() {
  const zone = $('#p-bilan');
  zone.addEventListener('mouseover', (e) => {
    const s = e.target.closest('.pc[data-sq]');
    if (!s || B.survol === s.dataset.sq) return;
    B.survol = s.dataset.sq; rafraichirMarques();
  });
  zone.addEventListener('mouseout', (e) => {
    const s = e.target.closest('.pc[data-sq]');
    if (!s || !B.survol) return;
    B.survol = null; rafraichirMarques();
  });
  /* les mots du lexique */
  const montrer = (e) => { const t = e.target.closest && e.target.closest('.terme'); if (t) ouvrirPop(t); };
  zone.addEventListener('mouseover', montrer);
  zone.addEventListener('focusin', montrer);
  zone.addEventListener('click', (e) => {
    const t = e.target.closest('.terme');
    if (t) { e.preventDefault(); ouvrirPop(t, true); return; }
    if (!e.target.closest('#bil-pop')) fermerPop();
  });
  zone.addEventListener('mouseout', (e) => {
    const t = e.target.closest && e.target.closest('.terme');
    if (t && !(B.pop && B.pop.fixe) && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('#bil-pop'))) fermerPop();
  });
}
function rafraichirMarques() {
  const { marques, fleches } = annotations();
  B.plateau.persistantes = marques; B.plateau.fleches = fleches;
  B.plateau.marquer(marques);
}

/* ---------- le lexique ---------- */
function ouvrirPop(t, fixe) {
  const x = Expl.lexique(t.dataset.terme); if (!x) return;
  const pop = $('#bil-pop');
  pop.innerHTML = '';
  pop.append(el('strong', {}, x.mot), el('p', {}, x.def));
  if (x.fen) pop.append(miniEchiquier(x.fen, x.fleches || [], 'w', 184, x.marques || null));
  pop.hidden = false;
  const r = t.getBoundingClientRect();
  const w = Math.min(320, window.innerWidth - 24);
  pop.style.width = w + 'px';
  let left = Math.min(window.innerWidth - w - 12, Math.max(12, r.left));
  pop.style.left = left + 'px';
  const h = pop.offsetHeight;
  const top = r.bottom + 8 + h > window.innerHeight ? Math.max(12, r.top - h - 8) : r.bottom + 8;
  pop.style.top = top + 'px';
  B.pop = { t, fixe: !!fixe };
}
function fermerPop() {
  const pop = $('#bil-pop');
  if (!pop || pop.hidden) return false;
  pop.hidden = true; B.pop = null;
  return true;
}
function lexiqueBilan() {
  const lg = $('#bil-legende');
  if (lg && !lg.childNodes.length) {
    const det = el('details', { class: 'bil-legende' }, el('summary', {}, tx('Que veulent dire les notations ?')));
    for (const c of Expl.ORDRE_CLASSES) {
      const C = Expl.CLASSES[c];
      det.append(el('p', {}, pastille(c, true), ' ', C.aide.replace(/^[^:]*: /, '')));
    }
    det.append(el('p', { class: 'sous' }, tx('Le chiffre (−1,5…) est ce que le coup a coûté, en points : un pion vaut 1, une pièce 3, une tour 5, une dame 9.')));
    lg.append(det);
  }
  const z = $('#bil-lexique'); if (!z || z.childNodes.length) return;
  const det = el('details', { class: 'bil-resume' }, el('summary', {}, tx('Lexique : les mots des explications')));
  const g = el('div', { class: 'bil-lexique' });
  for (const x of Expl.LEXIQUE) {
    g.append(el('div', { class: 'bil-lex' },
      x.fen ? miniEchiquier(x.fen, x.fleches || [], 'w', 132, x.marques || null) : null,
      el('div', {}, el('strong', {}, x.mot), el('p', {}, x.def))));
  }
  det.append(g);
  z.append(det);
}

/* ========================================================== explication du coup */
function infoCoup() {
  const z = $('#bil-info'); z.innerHTML = '';
  if (B.quiz) return infoQuiz(z);
  if (B.explo) return infoLigne(z);
  if (B.i === 0) {
    z.append(el('div', { class: 'bil-bloc' },
      el('p', { style: 'margin:0' }, tx('Position de départ. Avance avec → ou clique sur un coup dans la liste. Pour chaque coup, des deux camps, tu verras ce qu’il fait, et s’il y avait mieux.')),
      el('p', { class: 'sous', style: 'margin:8px 0 0' },
        tx('Astuce : clique sur une pièce de l’échiquier pour savoir qui l’attaque et qui la défend.'))));
    return;
  }
  const M = B.M, i = B.i - 1, k = M.coups[i], n = M.notes[i], L = B.p.couleur, mien = n.mien;
  const C = n.cls ? Expl.CLASSES[n.cls] : null;
  const ev = B.evals;

  /* en-tête */
  const tete = el('div', { class: 'bil-coup-info' },
    el('span', { class: 'num' }, k.numero + (k.c === 'w' ? '.' : '…')),
    el('span', { class: 'san ' + (n.cls || '') }, fr(k.san)),
    n.cls ? pastille(n.cls, true) : null,
    el('span', { class: 'tag' }, mien ? tx('ton coup') : tx('son coup')),
    n.temps !== null ? el('span', { class: 'tag', title: tx('Temps de réflexion sur ce coup') }, '⏱ ' + secs(n.temps)) : null,
    ev && ev.length > i + 1 ? el('span', { class: 'swing', title: tx('L’évaluation avant et après ce coup, de ton point de vue (+ : tu es mieux)') },
      `${evalTexte(signeLecteur() * ev[i])} → ${evalTexte(signeLecteur() * ev[i + 1])}`) : null,
    n.perte ? el('span', { class: 'swing perte', title: tx('Ce que le coup a coûté, en points') }, `−${(n.perte / 100).toFixed(1).replace('.', I18N.dec)}`) : null);
  z.append(tete);
  if (C) z.append(el('p', { class: 'bil-aide' }, C.aide));

  /* ce que fait le coup */
  z.append(el('p', { class: 'bil-phrase', html: Expl.phraseCoup(M.fait(i),
    { lecteur: L, sujet: Expl.mvTxt(k.fen, k.san, mien && n.perte >= 100 ? 'bad' : '') }) }));

  /* les bons coups */
  const bon = blocBonCoup(i);
  if (bon) z.append(bon);

  /* pourquoi c'est une erreur */
  const d = (n.perte !== null && (n.perte >= 50 || n.cls === 'matlong')) ? M.diag(i) : null;
  const best = B.bests && B.bests[i];
  if (d) {
    const titre = n.cls === 'matlong' ? tx('Un mat était là')
      : mien ? tx('Pourquoi c’est {0}', [n.cls === 'gaffe' ? tx('une gaffe') : n.cls === 'err' ? tx('une erreur') : tx('une imprécision')])
        : (n.cls === 'gaffe' ? tx('Son gros cadeau') : n.cls === 'err' ? tx('Son erreur') : tx('Son imprécision'));
    z.append(el('div', { class: 'bil-bloc ' + (mien ? (n.cls === 'gaffe' ? 'mauvais' : n.cls === 'err' ? 'moyen' : '') : 'cadeau') },
      el('h4', {}, titre), el('p', { html: d.html })));
  }
  if (mien && best && best !== k.uci && n.perte !== null && n.perte >= 50) {
    const fb = Expl.analyserCoup(k.fen, best, i ? M.coups[i - 1].m : null);
    const sanB = fb ? fb.san : Expl.sanDe(k.fen, best);
    const dejaDit = d && sanB && texteDe(d.html).includes(texteDe(Expl.mvTxt(k.fen, sanB)));
    const bloc = el('div', { class: 'bil-bloc bon' }, el('h4', {}, tx('Ce qu’il fallait jouer')));
    if (!dejaDit && fb) bloc.append(el('p', { html: Expl.phraseCoup(fb, { lecteur: L, sujet: Expl.mvTxt(k.fen, sanB, 'good') }) }));
    else if (dejaDit) bloc.append(el('p', { html: tx('{0} : l’idée est expliquée juste au-dessus.', [Expl.mvTxt(k.fen, sanB, 'good')]) }));
    bloc.append(el('div', { class: 'ligne-ctrl' },
      el('button', { class: 'b g', onclick: () => { B.vue = B.vue === 'avant' ? 'apres' : 'avant'; dessinerBilan(); } },
        B.vue === 'avant' ? tx('Revenir après ton coup') : tx('Voir la position d’avant')),
      el('button', { class: 'b g', onclick: () => lancerLigne('meilleur') }, tx('▶ La bonne suite')),
      B.bests && B.bests[i + 1] && n.perte >= 100 ? el('button', { class: 'b g', onclick: () => lancerLigne('punition') }, tx('▶ La punition')) : null,
      boutonExercice(i)));
    z.append(bloc);
  } else if (!mien && n.perte !== null && n.perte >= 100 && B.bests && B.bests[i + 1]) {
    /* son erreur : comment en profiter, et l'as-tu fait ? */
    const R = B.bests[i + 1];
    const fr2 = Expl.analyserCoup(k.fen2, R, k.m);
    const bloc = el('div', { class: 'bil-bloc bon' }, el('h4', {}, tx('Comment en profiter')));
    const dejaDit = d && fr2 && texteDe(d.html).includes(texteDe(Expl.mvTxt(k.fen2, fr2.san)));
    if (fr2 && !dejaDit) bloc.append(el('p', { html: Expl.phraseCoup(fr2, { lecteur: L, sujet: Expl.mvTxt(k.fen2, fr2.san, 'good') }) }));
    else if (fr2) bloc.append(el('p', { html: tx('{0} : l’idée est expliquée juste au-dessus.', [Expl.mvTxt(k.fen2, fr2.san, 'good')]) }));
    const suite = M.coups[i + 1], ns = M.notes[i + 1];
    if (suite) {
      bloc.append(el('p', { class: 'verdict', html: suite.uci === R || (ns.perte !== null && ns.perte <= 30)
        ? tx('✓ Tu l’as vu : {0}.', [Expl.mvTxt(suite.fen, suite.san, 'good')])
        : tx('✗ Tu ne l’as pas vu : tu as joué {0}.', [Expl.mvTxt(suite.fen, suite.san, 'bad')]) }));
    }
    bloc.append(el('div', { class: 'ligne-ctrl' },
      el('button', { class: 'b g', onclick: () => lancerLigne('punition') }, tx('▶ La suite'))));
    z.append(bloc);
  } else if (best && best !== k.uci && n.perte !== null && n.perte >= 20 && mien) {
    const sanB = Expl.sanDe(k.fen, best);
    if (sanB) z.append(el('p', { class: 'sous', html: tx('Le moteur préférait {0}, ', [Expl.mvTxt(k.fen, sanB, 'good')])
      + tx('mais l’écart est faible ({0}).', [(n.perte / 100).toFixed(1).replace('.', I18N.dec)]) }));
  }

  /* la menace, après son coup */
  if (!mien) {
    const ds = Expl.dangers(k.fen2, L).filter(x => x.t !== 'p' || x.gain >= 100).slice(0, 3);
    if (ds.length && !(n.perte >= 100)) {
      const b2 = Expl.plateau(k.fen2);
      z.append(el('div', { class: 'bil-bloc attention' }, el('h4', {}, tx('À surveiller')),
        el('p', { html: ds.map(x => {
          const at = Expl.forces(b2, x.sq).attaquants.filter(a => !a.derriere)[0];
          const prenable = at && Expl.see(k.fen2, at.sq, L) > 0;
          return tx('{0} est {1}', [Expl.maj(Expl.pc(x.t, x.sq, L, L)), Expl.accord(x.t, 'attaqué')])
            + (at ? tx(' par {0}', [Expl.pc(at.t, at.sq, L === 'w' ? 'b' : 'w', L)]) : '')
            + tx(' et {0}', [Expl.accord(x.t, 'mal défendu')])
            + (prenable ? tx(' — mais tu peux prendre {0}.', [Expl.pc(at.t, at.sq, L === 'w' ? 'b' : 'w', L)]) : '.');
        }).join(' ') + tx(' Avant de jouer, règle ça — ou joue plus fort ailleurs.') })));
    }
  }

  /* le temps */
  if (mien && n.perte !== null && n.perte >= 100 && n.temps !== null && n.cls !== 'matlong') {
    if (n.temps < 3) z.append(el('p', { class: 'bil-temps' },
      tx('⏱ Joué en {0}. Sur un coup qui coûte cher, prends le temps de regarder les échecs, les prises et les menaces.', [secs(n.temps)])));
    else if (n.temps >= 30) z.append(el('p', { class: 'bil-temps' },
      tx('⏱ Après {0} de réflexion : ce n’est pas le temps qui a manqué. La question à te poser : quels échecs, quelles prises, quelles menaces ?', [secs(n.temps)])));
  }

  /* la position en mots, et le matériel */
  if (ev && ev.length > i + 1) {
    const cp = signeLecteur() * ev[i + 1];
    const mat = Expl.materiel(k.fen2);
    const moi = L, lui = L === 'w' ? 'b' : 'w';
    const ecart = mat[moi] - mat[lui];
    const glyphes = (liste, couleur) => liste.map(t => ({
      w: { p: '♙', n: '♘', b: '♗', r: '♖', q: '♕' }, b: { p: '♟', n: '♞', b: '♝', r: '♜', q: '♛' } })[couleur][t]).join('');
    z.append(el('div', { class: 'bil-position' },
      el('p', { html: tx('<strong>Position :</strong> {0} ({1}). {2}', [Expl.evalMots(cp), evalTexte(cp),
        Expl.terme('évaluation', tx('Qu’est-ce que ce chiffre ?'))]) }),
      el('p', {},
        el('strong', {}, tx('Matériel : ')),
        ecart === 0 ? tx('égalité') : (ecart > 0 ? tx('tu as {0} de plus', [Expl.npts(ecart)]) : tx('il a {0} de plus', [Expl.npts(-ecart)])),
        mat.prisPar[moi].length ? el('span', { class: 'glyphes', title: tx('Ce que tu as pris') }, tx(' · tu as pris ') + glyphes(mat.prisPar[moi], lui)) : null,
        mat.prisPar[lui].length ? el('span', { class: 'glyphes', title: tx('Ce qu’il a pris') }, tx(' · il a pris ') + glyphes(mat.prisPar[lui], moi)) : null)));
  }
}

function blocBonCoup(i) {
  const M = B.M, n = M.notes[i], k = M.coups[i], L = B.p.couleur, mien = n.mien;
  const T = (tu, il) => (mien ? tu : il);
  let titre = null, html = null;
  if (n.cls === 'brill' && n.sacrifice) {
    const s = n.sacrifice;
    titre = T(tx('Coup brillant !'), tx('Son coup brillant'));
    html = Expl.G(s.t, '{0} est offert : l’adversaire peut le prendre, ', '{0} est offerte : l’adversaire peut la prendre, ',
      [Expl.maj(Expl.pc(s.t, s.sq, k.c, L))])
      + tx('et c’est pourtant le meilleur coup. C’est un {0} : la suite rapporte plus que la pièce donnée.', [Expl.terme('sacrifice')]);
  } else if (n.cls === 'seul') {
    titre = T(tx('Très bon coup !'), tx('Son très bon coup'));
    html = tx('Le seul coup qui gardait la position : tous les autres perdaient au moins deux points. ') + T(tx('Tu l’as trouvé.'), tx('Il l’a trouvé.'));
  } else if (n.reflexe && mien) {
    const f = M.fait(i);
    if (n.reflexe === 'mat') { titre = tx('Échec et mat !'); html = tx('La partie est gagnée.'); }
    else if (n.reflexe === 'gratuit') { titre = tx('Bien vu'); html = Expl.G(f.capture.t, '{0} était {1} : rien ne le défendait, et tu l’as pris.',
      '{0} était {1} : rien ne la défendait, et tu l’as prise.',
      [Expl.maj(Expl.pc(f.capture.t, f.capture.sq, L === 'w' ? 'b' : 'w', L)), Expl.terme('gratuit', Expl.accord(f.capture.t, 'gratuit'))]); }
    else if (n.reflexe === 'punition') {
      const kp = M.coups[i - 1];
      titre = tx('Tu as puni son erreur');
      html = tx('Son coup {0} était une {1}, et tu en as profité tout de suite.', [Expl.mvTxt(kp.fen, kp.san, 'bad'), Expl.CLASSES[M.notes[i - 1].cls].nom]);
    } else if (n.reflexe === 'sauve') {
      const s = f.sauve[0];
      titre = tx('Bon réflexe');
      html = Expl.G(s.t, '{0} était attaqué et mal défendu : ', '{0} était attaquée et mal défendue : ', [Expl.maj(Expl.pc(s.t, s.sq, L, L))])
        + (s.bouge ? Expl.G(s.t, 'tu l’as mis à l’abri.', 'tu l’as mise à l’abri.') : Expl.G(s.t, 'tu l’as protégé.', 'tu l’as protégée.'));
    }
  }
  if (!titre) return null;
  return el('div', { class: 'bil-bloc ' + (mien ? 'bravo' : 'cadeau') }, el('h4', {}, titre), el('p', { html }));
}

/* ---------- ajouter aux exercices ---------- */
function boutonExercice(i) {
  const M = B.M, n = M.notes[i], k = M.coups[i], p = B.p;
  if (!n.mien || !n.meilleur || n.cls === 'matlong' || n.evalAvant === null || n.evalAvant < SEUIL_GAFFE_EXO) return null;
  const id = idExoGaffe(p, { numero: k.numero, couleur: k.c });
  const deja = !!(S.d.exos && S.d.exos[id]);
  const b = el('button', { class: 'b g', disabled: deja ? true : null,
    title: tx('Cette position reviendra dans Entraînement › Gaffes en jeu, jusqu’à ce que tu la retrouves cinq fois de suite.'),
    onclick: () => { ajouterExercice(i); b.disabled = true; b.textContent = tx('✓ Dans tes exercices'); } },
    deja ? tx('✓ Dans tes exercices') : tx('+ Ajouter aux exercices'));
  return b;
}
function ajouterExercice(i) {
  const M = B.M, n = M.notes[i], k = M.coups[i], p = B.p;
  if (!n || !n.mien || !n.meilleur) return false;
  S.d.exos = S.d.exos || {};
  const id = idExoGaffe(p, { numero: k.numero, couleur: k.c });
  if (S.d.exos[id]) return false;
  const ex = {
    id, type: 'gaffe', serie: 0, reussites: 0, echecs: 0, manuel: true,
    fen: k.fen, joue: k.san, solution: n.meilleur, perte: n.perte, couleur: k.c, numero: k.numero,
    url: p.url, adversaire: p.adversaire, date: p.date,
    evalAvant: n.evalAvant, evalApres: n.evalApres, punition: (B.bests && B.bests[i + 1]) || null,
  };
  try {
    ex.categorie = classerGaffe({ san: ex.joue, fen: ex.fen, couleur: ex.couleur, perte: ex.perte,
      evalAvant: ex.evalAvant, evalApres: ex.evalApres, meilleurUci: ex.solution, punitionUci: ex.punition });
  } catch (e) { }
  S.d.exos[id] = ex;
  sauver();
  try { if (typeof majBadges === 'function') majBadges(); } catch (e) { }
  return true;
}

/* ========================================================== lignes rejouables
   « meilleur » : depuis la position d'avant le coup affiché, la bonne suite.
   « punition » : depuis la position d'après, la meilleure réponse et sa suite. */
async function lancerLigne(type) {
  if (B.quiz) return;
  const i = B.i - 1;
  const fen = type === 'punition' ? (i >= 0 ? B.M.coups[i].fen2 : null)
    : (B.i === 0 ? new Chess().fen() : B.M.coups[i].fen);
  if (!fen) return;
  const depart = type === 'punition' ? B.i : Math.max(0, B.i - 1);
  const premier = B.bests && B.bests[depart];
  const bouton = $('#bil-meilleur');
  bouton.disabled = true; bouton.textContent = tx('Calcul…');
  const jeton = B.jeton;
  /* La PV renvoyée par Stockfish est reconstruite depuis la table de
     transposition : elle est souvent tronquée à un ou deux coups. On
     construit donc la suite en réinterrogeant le moteur à chaque demi-coup. */
  let pv = null;
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    const r = await S.moteur.evaluer(fen, 400000);
    pv = (r.pv && r.pv.length) ? r.pv.slice(0, 4) : (r.best ? [r.best] : []);
    if (premier && pv[0] !== premier && type === 'punition') pv = [premier];
    const j = new Chess(fen);
    for (const u of pv) { if (!Expl.jouer(j, u)) break; }
    let garde = 0;
    while (pv.length < 4 && !j.isGameOver() && garde++ < 4) {
      bouton.textContent = tx('Calcul… {0}/4', [pv.length + 1]);
      const r2 = await S.moteur.evaluer(j.fen(), 250000);
      if (!r2.best || !Expl.jouer(j, r2.best)) break;
      pv.push(r2.best);
    }
    if (!pv.length) pv = null;
  } catch (e) { pv = null; }
  if (jeton !== B.jeton) return;
  if (!pv && premier) pv = [premier];
  bouton.disabled = false;
  if (!pv) {
    bouton.textContent = tx('Meilleur coup');
    $('#bil-info').append(el('div', { class: 'msg ko' }, tx('Le moteur n’est pas disponible ici.')));
    return;
  }
  const j = new Chess(fen); const fens = [fen]; const sans = []; const gardes = []; const mvs = [];
  for (const u of pv.slice(0, 4)) {
    const m = Expl.jouer(j, u);
    if (!m) break;
    gardes.push(u); sans.push(m.san); fens.push(j.fen()); mvs.push(m);
  }
  if (!gardes.length) { bouton.textContent = tx('Meilleur coup'); return; }
  B.explo = { type, depart, pv: gardes, sans, fens, mvs, pas: 0 };
  B.caseInfo = null;
  dessinerBilan();
}
function fermerLigne() { B.explo = null; dessinerBilan(); }
function avancerLigne() {
  const e = B.explo;
  if (e.pas >= e.pv.length) return;
  e.pas++;
  const { marques, fleches } = annotations();
  B.plateau.persistantes = marques; B.plateau.marques = marques; B.plateau.fleches = fleches;
  B.plateau.animerVers(e.fens[e.pas], e.mvs[e.pas - 1], B.orientation);
  setTimeout(() => { barreEval(); infoCoup(); }, 210);
}
function infoLigne(z) {
  const e = B.explo, L = B.p.couleur;
  const titre = e.type === 'punition'
    ? (e.fens[0].split(' ')[1] === L ? tx('Comment en profiter') : tx('La punition : ce que l’adversaire pouvait faire'))
    : tx('La meilleure suite');
  const cp0 = B.M.coups[e.depart];
  const memeCoup = e.type === 'meilleur' && cp0 && cp0.fen === e.fens[0] && cp0.uci === e.pv[0];
  const bloc = el('div', { class: 'bil-bloc ' + (e.type === 'punition' && e.fens[0].split(' ')[1] !== L ? 'mauvais' : 'bon') },
    el('h4', {}, titre),
    el('div', { class: 'rejeu-suite' }, ...e.pv.map((u, k) => el('button', {
      class: 'mv' + (k === e.pas ? ' courant' : '') + (k < e.pas ? ' good' : ''),
      onclick: () => { B.explo.pas = k; dessinerBilan(); },
    }, Expl.mvTxt(e.fens[k], e.sans[k]).replace(/<[^>]+>/g, '')))));
  if (e.pas < e.pv.length) {
    const f = Expl.analyserCoup(e.fens[e.pas], e.pv[e.pas], e.pas ? e.mvs[e.pas - 1] : null);
    bloc.append(el('p', { html: tx('Coup suivant : ') + Expl.phraseCoup(f, { lecteur: L, sujet: Expl.mvTxt(e.fens[e.pas], e.sans[e.pas]) }) }));
  } else {
    const f = Expl.analyserCoup(e.fens[e.pas - 1], e.pv[e.pas - 1], e.pas > 1 ? e.mvs[e.pas - 2] : null);
    bloc.append(el('p', { html: tx('Dernier coup : ') + Expl.phraseCoup(f, { lecteur: L, sujet: Expl.mvTxt(e.fens[e.pas - 1], e.sans[e.pas - 1]) }) }));
  }
  if (memeCoup) bloc.append(el('p', { class: 'sous' }, tx('Le premier coup est celui de la partie : le moteur n’avait rien de mieux.')));
  const restants = e.pv.length - e.pas;
  bloc.append(el('p', { class: 'sous', style: 'margin-bottom:0' },
    restants > 0 ? tx('→ pour avancer ({0} coup{1})  ·  ← pour reculer', [restants, restants > 1 ? 's' : '']) : tx('Fin de la ligne  ·  ← pour reculer, Échap pour revenir à la partie')));
  z.append(bloc);
}

/* ========================================================== Retrouve le coup */
function positionsQuiz() {
  const M = B.M; if (!M || !M.aEvals) return [];
  const ok = (n, seuil) => n.mien && n.perte !== null && n.perte >= seuil && n.cls !== 'matlong'
    && n.meilleur && n.evalAvant !== null && n.evalAvant >= SEUIL_GAFFE_EXO;
  let l = M.notes.filter(n => ok(n, 100));
  if (!l.length) l = M.notes.filter(n => ok(n, 50));
  return l.map(n => n.i);
}
function demarrerQuiz() {
  const liste = positionsQuiz();
  if (!liste.length) return;
  B.explo = null; B.vue = 'apres'; B.caseInfo = null;
  B.quiz = { liste, k: 0, resultats: [], jeton: B.jeton };
  positionQuiz();
  voirPlateau();
}
function positionQuiz() {
  const q = B.quiz, i = q.liste[q.k], k = B.M.coups[i], n = B.M.notes[i];
  Object.assign(q, { i, fen: k.fen, best: n.meilleur, indice: 0, essais: 0, montre: false, essai: null,
    trouve: false, msg: null, cpBest: null, attente: false });
  B.plateau.onCoup = (de, vers, m) => coupQuiz(m);
  dessinerBilan();
}
function arreterQuiz(silencieux) {
  if (!B.quiz) return;
  B.quiz = null;
  if (B.plateau) { B.plateau.onCoup = null; B.plateau.selection = null; }
  if (!silencieux) dessinerBilan();
}
function indiceTexte(q) {
  const f = Expl.analyserCoup(q.fen, q.best, q.i ? B.M.coups[q.i - 1].m : null);
  const d = B.M.diag(q.i);
  const n = B.M.notes[q.i];
  if (!f) return tx('Cherche le coup le plus fort.');
  if (n.evalAvant >= 9000) return tx('Il y a un mat ! Commence par regarder tous les échecs.');
  if (f.capture && f.capture.rendu === 0 && f.capture.t !== 'p') return tx('Une pièce adverse n’est pas défendue. Laquelle ?');
  if (f.fourchette) return tx('Une seule de tes pièces peut attaquer deux cibles à la fois.');
  if (f.decouvertes.some(x => Expl.V(x.t) >= 300)) return tx('Une de tes pièces en cache une autre : en bougeant, elle peut la démasquer.');
  if (f.echec) return tx('Cherche un échec.');
  if (f.capture) return tx('Regarde les prises : l’une d’elles gagne du matériel.');
  if (f.sauve.length || (d && d.type === 'deja_en_prise')) return tx('Une de tes pièces est attaquée. Laquelle ? Mets-la à l’abri.');
  if (d && (d.type === 'laisse_en_prise' || d.type === 'piece_perdue_apres')) return tx('Ton coup dans la partie laissait une pièce en danger. Cherche un coup qui ne laisse rien en prise.');
  return tx('Pas de tactique ici : cherche le coup qui améliore ta position sans rien laisser en prise.');
}
async function coupQuiz(m) {
  const q = B.quiz; if (!q || q.trouve || q.attente) return;
  const uci = m.from + m.to + (m.promotion || '');
  q.essais++; q.essai = null;
  const fini = (bien, texte) => {
    q.trouve = bien; q.msg = texte;
    if (bien) {
      q.resultats[q.k] = q.essais === 1 && q.indice === 0 && !q.montre ? 'premier' : 'trouve';
      const b = Expl.plateau(q.fen); const mv = Expl.jouer(b, uci);
      B.plateau.onCoup = null;
      const { marques } = annotations();
      B.plateau.marques = marques; B.plateau.fleches = [];
      B.plateau.animerVers(b.fen(), mv, B.p.couleur);
      setTimeout(() => infoCoup(), 220);
    } else { dessinerBilan(); }
  };
  if (uci === q.best) return fini(true, 'bon');
  /* un autre coup peut être aussi bon : on demande au moteur */
  q.attente = true; q.msg = 'calcul'; infoCoup();
  let perte = null, reponse = null, evApres = null;
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    if (q.cpBest === null) { const r = await S.moteur.evaluer(q.fen, 300000); q.cpBest = r.cp; }
    const b = Expl.plateau(q.fen); Expl.jouer(b, uci);
    if (b.isCheckmate()) perte = 0;
    else {
      const r2 = await S.moteur.evaluer(b.fen(), 300000);
      evApres = -r2.cp; reponse = r2.best;
      const cl = (x) => Math.max(-800, Math.min(800, x));
      perte = Math.max(0, cl(q.cpBest) - cl(evApres));
    }
  } catch (e) { perte = null; }
  if (!B.quiz || B.quiz !== q) return;
  q.attente = false;
  if (perte !== null && perte <= 70) return fini(true, 'aussi');
  q.essai = uci;
  let pourquoi = '';
  if (perte !== null) {
    const d = Expl.diagnostic({ fen: q.fen, uci, couleur: B.p.couleur, lecteur: B.p.couleur,
      evalAvant: q.cpBest, evalApres: evApres, perte, meilleur: q.best, punition: reponse,
      prec: q.i ? B.M.coups[q.i - 1].m : null, precFen: q.i ? B.M.coups[q.i - 1].fen : null });
    /* on ne dit pas la solution : seulement ce qui ne va pas avec l'essai */
    if (d && !['occasion', 'gratuit_rate', 'prise_ratee', 'autre', 'moins_precis'].includes(d.type)) pourquoi = premierePhrase(d.html);
  }
  q.msg = { essai: Expl.mvTxt(q.fen, m.san, 'bad'), perte, pourquoi, apres: evApres };
  dessinerBilan();
}
function infoQuiz(z) {
  const q = B.quiz, k = B.M.coups[q.i], n = B.M.notes[q.i];
  const tete = el('div', { class: 'bil-bloc quiz' },
    el('h4', {}, tx('Retrouve le coup · position {0} sur {1}', [q.k + 1, q.liste.length])),
    el('p', { html: tx('Coup {0}, {1} jouent. Dans la partie, tu as joué ', [k.numero, B.p.couleur === 'w' ? tx('les blancs') : tx('les noirs')])
      + `${Expl.mvTxt(k.fen, k.san, 'bad')} (${Expl.CLASSES[n.cls].nom}, −${(n.perte / 100).toFixed(1).replace('.', I18N.dec)}). `
      + (q.trouve ? '' : tx('Il y avait mieux : joue-le sur l’échiquier.')) }));
  z.append(tete);
  if (q.msg === 'calcul') tete.append(el('p', { class: 'sous' }, tx('Le moteur vérifie ton coup…')));
  else if (q.msg && typeof q.msg === 'object') {
    const m = q.msg;
    const ecart = m.perte !== null ? points(m.perte) : null;
    tete.append(el('div', { class: 'msg ' + (m.apres !== null && m.apres >= 100 ? 'info' : 'ko'), html:
      m.apres !== null && m.apres >= 100
        ? tx('{0} n’est pas mauvais (tu restes à {1}), mais il y a bien plus fort : ', [m.essai, evalTexte(m.apres)])
          + tx('{0} de mieux. Cherche encore.', [ecart])
        : tx('{0} : pas ça{1}.', [m.essai, ecart ? tx(', ce coup perd {0} par rapport au meilleur', [ecart]) : ''])
          + (m.pourquoi ? ' ' + m.pourquoi : '') + tx(' Essaie encore.') }));
  }
  if (q.trouve) {
    const fb = Expl.analyserCoup(q.fen, q.best, q.i ? B.M.coups[q.i - 1].m : null);
    tete.append(el('div', { class: 'msg ok', html: (q.msg === 'aussi'
      ? tx('Bon coup aussi : le moteur le juge presque aussi fort que son premier choix. ')
      : (q.resultats[q.k] === 'premier' ? tx('Trouvé du premier coup ! ') : tx('Trouvé ! ')))
      + (fb ? tx('Le meilleur coup : ') + Expl.phraseCoup(fb, { lecteur: B.p.couleur, sujet: Expl.mvTxt(q.fen, fb.san, 'good') }) : '') }));
  } else {
    if (q.indice >= 1) tete.append(el('p', { class: 'indice' }, '💡 ' + indiceTexte(q)));
    if (q.indice >= 2) tete.append(el('p', { class: 'indice' }, tx('💡 La pièce à jouer est entourée sur l’échiquier.')));
    if (q.montre) {
      const fb = Expl.analyserCoup(q.fen, q.best);
      tete.append(el('div', { class: 'msg info', html: tx('La réponse : ') + (fb ? Expl.phraseCoup(fb, { lecteur: B.p.couleur, sujet: Expl.mvTxt(q.fen, fb.san, 'good') }) : '') + tx(' Joue-le pour continuer.') }));
    }
  }
  const dernier = q.k >= q.liste.length - 1;
  tete.append(el('div', { class: 'ligne-ctrl' },
    !q.trouve && q.indice < 2 ? el('button', { class: 'b g', onclick: () => { q.indice++; q.resultats[q.k] = q.resultats[q.k] || 'aide'; dessinerBilan(); } },
      q.indice ? tx('Un autre indice') : tx('Un indice')) : null,
    !q.trouve && !q.montre ? el('button', { class: 'b g', onclick: () => { q.montre = true; q.resultats[q.k] = 'vu'; dessinerBilan(); } }, tx('Voir la réponse')) : null,
    q.trouve || q.montre ? el('button', { class: 'b', onclick: () => suiteQuiz() }, dernier ? tx('Terminer') : tx('Position suivante →'))
      : el('button', { class: 'b g', onclick: () => { q.resultats[q.k] = 'passe'; suiteQuiz(); } }, tx('Passer')),
    el('button', { class: 'b g', onclick: () => arreterQuiz() }, tx('Quitter'))));
}
function suiteQuiz() {
  const q = B.quiz;
  if (q.k < q.liste.length - 1) { q.k++; positionQuiz(); return; }
  /* fin : le bilan du quiz */
  const premiers = q.resultats.filter(r => r === 'premier').length;
  const rates = q.liste.filter((i, k) => q.resultats[k] !== 'premier');
  B.plateau.onCoup = null;
  const liste = q.liste;
  B.quiz = null;
  allerA(B.i);
  const z = $('#bil-info');
  const ajout = el('button', { class: 'b', onclick: () => {
    let n = 0; for (const i of rates) if (ajouterExercice(i)) n++;
    ajout.disabled = true; ajout.textContent = n ? tx('✓ {0} position(s) ajoutée(s)', [n]) : tx('✓ Déjà dans tes exercices');
  } }, tx('Ajouter les {0} position(s) à revoir aux exercices', [rates.length]));
  z.prepend(el('div', { class: 'bil-bloc ' + (premiers === liste.length ? 'bravo' : 'quiz') },
    el('h4', {}, tx('Retrouve le coup : terminé')),
    el('p', {}, tx('Trouvé du premier coup, sans indice : {0} sur {1}.', [premiers, liste.length])),
    rates.length ? el('div', { class: 'ligne-ctrl' }, ajout) : el('p', {}, tx('Parfait : rien à revoir.'))));
}

/* ========================================================== « seuls coups »
   Un coup est le seul quand le deuxième choix du moteur est bien plus
   mauvais. Il faut deux lignes par position (MultiPV) : on les calcule une
   fois, en fond, une position à la fois pour ne pas bloquer le moteur, et on
   garde le résultat dans la partie. */
async function chercherSeulsCoups() {
  const p = B.p, jeton = B.jeton;
  if (!p.moteur || !B.evals || p.moteur.seulsV === 1 || DEGRADE) return;
  const M = B.M;
  const cands = M.notes.filter(n => {
    if (!n.mien || n.perte === null || n.perte > 30 || n.cls === 'brill') return false;
    const k = M.coups[n.i];
    if (n.meilleur !== k.uci || k.legaux < 2 || k.san.includes('#')) return false;
    if (n.evalAvant < -300 || n.evalAvant > 500) return false;
    const prec = n.i ? M.coups[n.i - 1].m : null;
    if (prec && prec.captured && prec.to === k.m.to) return false;     // une reprise évidente
    const f = M.fait(n.i);
    if (f && f.capture && f.capture.rendu === 0) return false;          // une pièce gratuite : « bien vu », pas « seul coup »
    return true;
  });
  const seuls = {};
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    for (const n of cands) {
      if (jeton !== B.jeton) return;
      const l = await S.moteur.multi(M.coups[n.i].fen, 150000, 2);
      if (jeton !== B.jeton) return;
      if (l.length < 2) continue;
      const cl = (x) => Math.max(-1500, Math.min(1500, x));
      if (cl(l[0].cp) - cl(l[1].cp) >= 200 && l[0].uci === M.coups[n.i].uci) seuls[n.i] = 1;
    }
  } catch (e) { return; }
  if (jeton !== B.jeton) return;
  p.moteur.seuls = seuls; p.moteur.seulsV = 1;
  sauver();
  reconstruire();
  dessinerBilan();
}

/* Perte moyenne et gaffes d'une partie, à partir de ses évaluations, comme
   l'import les calcule (analyseMoteur). */
function statsMoteur(stock) {
  const M2 = Expl.modele({ sans: stock.sans, evals: stock.moteur.evals, bests: stock.moteur.bests, couleur: stock.couleur });
  const mes = M2.notes.filter(n => n.mien && n.perte !== null);
  stock.moteur.nbCoups = mes.length;
  stock.moteur.cpl = mes.length ? Math.round(mes.reduce((a, n) => a + n.perte, 0) / mes.length) : 0;
  stock.moteur.gaffes = mes.filter(n => n.perte >= 300 && !M2.coups[n.i].san.includes('#')).map(n => {
    const k = M2.coups[n.i];
    return { numero: k.numero, san: k.san, fen: k.fen, perte: n.perte, evalAvant: n.evalAvant,
      evalApres: n.evalApres, meilleurUci: n.meilleur, punitionUci: stock.moteur.bests[n.i + 1] || null,
      url: stock.url, couleur: stock.couleur, date: stock.date };
  });
  stock._prec = undefined;
  S.gaffesCache = null; S.typesCache = null;
  try { if (typeof majJour === 'function') majJour(stock.date); } catch (e) { }
}

/* ========================================================== analyse, incrémentale et annulable */
async function analyserPourBilan(auto) {
  /* Une analyse appartient à UNE partie : on capture la partie et le jeton
     d'ouverture, et on revérifie le jeton après chaque attente du moteur.
     Sinon, ouvrir une autre partie pendant le calcul écrivait les évaluations
     de la première dans la seconde. */
  const jeton = B.jeton, partie = B.p, coups = B.M.coups;
  if (B.analyse === jeton) return;              // déjà en cours pour cette partie
  const b = $('#bil-analyser');
  b.hidden = false; b.disabled = true;
  B.analyse = jeton;
  barreEval();
  const positions = [new Chess().fen(), ...coups.map(c => c.fen2)];
  const total = positions.length;
  const evals = [], bests = [];
  try {
    if (!S.moteur) { S.moteur = new Moteur(); await S.moteur.pret(); }
    for (let i = 0; i < total; i++) {
      if (jeton !== B.jeton) return;               // on a quitté cette partie
      const r = await S.moteur.evaluer(positions[i], 150000);
      if (jeton !== B.jeton) return;
      const trait = positions[i].split(' ')[1];
      evals.push(trait === 'w' ? r.cp : -r.cp);
      bests.push(r.best);
      /* on publie au fur et à mesure : la barre et la liste se remplissent
         pendant que tu navigues déjà dans la partie */
      B.evals = evals.slice(); B.bests = bests.slice(0, -1);
      b.textContent = tx('Analyse… {0}/{1}', [i + 1, total]);
      if (i % 6 === 0 || i === total - 1) { reconstruire(); barreEval(); infoCoup(); marquerCourant(); }
    }
    /* le dernier coup mate : la position est terminale, on la marque gagnée */
    const der = coups[coups.length - 1];
    if (der && der.san.includes('#')) { evals[evals.length - 1] = der.c === 'w' ? 10000 : -10000; B.evals = evals.slice(); }
    /* la partie capturée au départ est l'objet stocké lui-même */
    const stock = partie;
    if (stock) {
      const neuf = !stock.moteur;
      stock.moteur = stock.moteur || { cpl: 0, gaffes: [], nbCoups: 0 };
      stock.moteur.evals = evals; stock.moteur.bests = bests.slice(0, -1);
      /* Une partie jamais analysée n'avait ni perte moyenne ni gaffes : l'en-tête
         affichait « 0 cp · 0 gaffe ». On les calcule comme l'import le fait. */
      if (neuf) statsMoteur(stock);
      sauver();
    }
    b.hidden = true;
  } catch (e) {
    if (jeton === B.jeton) { b.textContent = tx('Analyse impossible'); b.disabled = false; }
  } finally {
    if (B.analyse === jeton) B.analyse = false;
    if (jeton === B.jeton) { reconstruire(); enteteBilan(); dessinerBilan(); chercherSeulsCoups(); }
  }
}


/* ==========================================================================
   Collection de coups brillants (onglet Aujourd'hui).
   Une grille de mini-échiquiers : la position juste avant chacun de tes coups
   brillants, la flèche du coup et son badge « !! ». Un clic ouvre le bilan de
   la partie sur ce coup. Les coups brillants de chaque partie sont cherchés
   une fois, au premier dépliage, puis gardés avec la partie.
   ========================================================================== */
const VERSION_BRILL = 1;
const brillantsEnCache = (p) => {
  const m = p.moteur;
  return m && m.evals && m.brillV === VERSION_BRILL && m.brillN === m.evals.length ? m.brill : null;
};
const partiesAnalysees = () => Object.values(S.d.parties).filter(p => p.moteur && p.moteur.evals && p.moteur.evals.length > 1);

/* Le compteur à côté du titre, tant que la collection est pliée. */
function majResumeCollection() {
  const d = document.getElementById('collection-brillants'); if (!d) return;
  const parties = partiesAnalysees();
  d.hidden = !Object.keys(S.d.parties || {}).length;
  const caches = parties.map(brillantsEnCache);
  const nb = $('#coll-nb');
  if (caches.every(c => c)) {
    const n = caches.reduce((a, c) => a + c.length, 0);
    nb.textContent = n ? tx('{0} coup{1}', [n, n > 1 ? 's' : '']) : tx('aucun pour l’instant');
  } else nb.textContent = '';
  if (d.open) rendreCollection();
}

async function ouvrirCollection() {
  const g = $('#coll-grille');
  const parties = partiesAnalysees();
  const manquantes = parties.filter(p => !brillantsEnCache(p));
  if (manquantes.length) {
    const etat = el('p', { class: 'sous', style: 'margin:0' }, tx('Recherche des coups brillants… 0/{0} partie(s)', [manquantes.length]));
    g.innerHTML = ''; g.append(etat);
    for (let k = 0; k < manquantes.length; k++) {
      const p = manquantes[k];
      let l = [];
      try { l = Expl.brillantsDe(p); } catch (e) { console.warn('coups brillants', p.url, e); }
      p.moteur.brill = l; p.moteur.brillV = VERSION_BRILL; p.moteur.brillN = p.moteur.evals.length;
      etat.textContent = tx('Recherche des coups brillants… {0}/{1} partie(s)', [k + 1, manquantes.length]);
      if (k % 3 === 2) await new Promise(r => setTimeout(r, 0));     // la page reste réactive
    }
    sauver();
  }
  majResumeCollection();
  rendreCollection();
}

function rendreCollection() {
  const g = $('#coll-grille'); if (!g) return;
  const items = [];
  for (const p of partiesAnalysees()) {
    const l = brillantsEnCache(p); if (!l || !l.length) continue;
    const sans = String(p.sans || '').split(' ').filter(Boolean);
    const b = new Chess();
    for (let i = 0; i < sans.length; i++) {
      const fen = b.fen();
      let m = null; try { m = b.move(sans[i]); } catch (e) { m = null; }
      if (!m) break;
      if (l.includes(i)) items.push({ p, i, fen, m });
    }
  }
  items.sort((a, b) => b.p.fin - a.p.fin || b.i - a.i);
  g.innerHTML = '';
  const sansEval = Object.values(S.d.parties).length - partiesAnalysees().length;
  if (!items.length) {
    g.append(el('p', { class: 'vide coll-vide' },
      tx('Aucun coup brillant pour l’instant. Un coup brillant, c’est un sacrifice qui marche : tu laisses une pièce que l’adversaire a intérêt à prendre, et la position reste bonne. Le premier viendra se ranger ici.')));
  } else {
    const grille = el('div', { class: 'coll-items' });
    for (const it of items) grille.append(carteBrillant(it));
    g.append(grille);
  }
  if (sansEval > 0) g.append(el('p', { class: 'sous coll-note' },
    tx('{0} partie(s) n’ont pas encore d’évaluations : ouvre leur bilan pour les analyser, leurs coups brillants s’ajouteront ici.', [sansEval])));
}

function carteBrillant({ p, i, fen, m }) {
  const C = Expl.CLASSES.brill, ori = p.couleur || 'w';
  const svg = miniEchiquier(fen, [[m.from + m.to, C.coul]], ori, 200, null);
  /* le badge « !! » sur la case d'arrivée, comme dans le bilan */
  const f = 'abcdefgh'.indexOf(m.to[0]), r = 8 - parseInt(m.to[1], 10);
  const x = (ori === 'b' ? 7 - f : f) * 100, y = (ori === 'b' ? 7 - r : r) * 100;
  const cx = Math.min(x + 86, 776), cy = Math.max(y + 14, 24);
  svg.append(svgEl('circle', { cx, cy, r: 26, fill: C.coul, stroke: '#fff', 'stroke-width': 4 }));
  const t = svgEl('text', { x: cx, y: cy + 9, 'text-anchor': 'middle', 'font-size': 24, 'font-weight': 800, fill: '#fff',
    'font-family': 'JetBrains Mono, monospace' });
  t.append(C.sym); svg.append(t);
  svg.setAttribute('aria-hidden', 'true');
  const num = Math.floor(i / 2) + 1;
  const coup = `${num}${m.color === 'w' ? '.' : '…'}${fr(m.san)}`;
  const sac = (() => {
    try {
      const f = Expl.analyserCoup(fen, m.from + m.to + (m.promotion || ''));
      const x = f.laisse.filter(z => z.t !== 'p').sort((a, b) => b.gain - a.gain)[0];
      return x ? `${Expl.nom(x.t)} ${x.sq}` : null;
    } catch (e) { return null; }
  })();
  return el('button', { class: 'coll-carte', title: tx('Ouvrir le bilan de la partie sur ce coup'),
    'aria-label': tx('{0}, contre {1} : ouvrir le bilan sur ce coup', [coup, p.adversaire]),
    onclick: () => { ouvrirBilan(p, () => onglet('jour')); allerA(i + 1); voirPlateau(); } },
    svg,
    el('span', { class: 'coll-coup' }, el('span', { class: 'mv' }, coup), el('b', { style: `color:${C.coul}` }, C.sym)),
    el('span', { class: 'coll-info' }, tx('contre {0} · {1}', [p.adversaire, jourCourt(p.date)])),
    sac ? el('span', { class: 'coll-info' }, tx('pièce offerte : {0}', [sac])) : null);
}

(function brancherCollection() {
  const d = document.getElementById('collection-brillants');
  if (d) d.addEventListener('toggle', () => { if (d.open) ouvrirCollection(); });
})();
