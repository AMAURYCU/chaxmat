/* ==========================================================================
   Traductions de l'interface.

   Le texte de référence est le français : chaque phrase affichée passe par
   tx('phrase en français', [valeurs]) et chaque langue fournit un dictionnaire
   « phrase française → traduction » (i18n/en.js, …). Une phrase absente d'un
   dictionnaire s'affiche en anglais si possible, sinon en français : une
   traduction incomplète reste utilisable.

   Les valeurs se placent avec {0}, {1}… dans la phrase et dans sa traduction,
   dans l'ordre qui convient à chaque langue.

   La langue est un réglage de l'appareil (localStorage), pas une donnée
   synchronisée : par défaut, celle du navigateur ou du téléphone. Changer de
   langue recharge la page.

   Ajouter une langue : copier i18n/en.js en i18n/xx.js, changer le code et
   traduire les valeurs, puis ajouter <script src="i18n/xx.js"> dans
   index.html, juste après en.js. Les leçons d'ouvertures ont leur propre
   fichier (lecons.js en français, lecons.en.js en anglais) : sans fichier
   pour la langue, elles s'affichent en anglais.
   ========================================================================== */
'use strict';

const I18N = (() => {
  const LANGUES = {
    fr: {
      nom: 'Français', locale: 'fr-FR', dec: ',', dict: {},
      /* lettres des pièces dans la notation des coups ; null : celles de l'anglais */
      lettres: { N: 'C', B: 'F', R: 'T', Q: 'D', K: 'R' }, roque: '0',
      ordinal: (n) => (n === 1 ? '1er' : n + 'e'),
    },
  };
  let langue = null;

  /* o : { nom, locale, dec, lettres, roque, ordinal, dict } */
  function ajouter(code, o) {
    const avant = LANGUES[code] || {};
    LANGUES[code] = Object.assign({ dec: '.', lettres: null, roque: 'O', ordinal: (n) => String(n) }, avant, o,
      { dict: Object.assign({}, avant.dict, o.dict) });
  }
  function lireChoix() {
    try { return localStorage.getItem('langue'); } catch (e) { return null; }
  }
  function choisir() {
    let l = lireChoix();
    if (!l || !LANGUES[l]) {
      const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'fr';
      const c = nav.slice(0, 2).toLowerCase();
      l = LANGUES[c] ? c : (LANGUES.en ? 'en' : 'fr');
    }
    langue = l;
    document.documentElement.lang = l;
    return l;
  }
  /* la langue se choisit au premier besoin : les dictionnaires sont chargés */
  const L = () => LANGUES[langue || choisir()];
  function changer(code) {
    try { localStorage.setItem('langue', code); } catch (e) { /* stockage du navigateur interdit : la langue reviendra au défaut */ }
    location.reload();
  }
  function tx(fr, valeurs) {
    let s = fr;
    const l = L();
    if (l !== LANGUES.fr) {
      s = l.dict[fr] !== undefined ? l.dict[fr]
        : (LANGUES.en && LANGUES.en.dict[fr] !== undefined ? LANGUES.en.dict[fr] : fr);
    }
    if (valeurs) s = s.replace(/\{(\d+)\}/g, (m, k) => (valeurs[k] !== undefined && valeurs[k] !== null ? valeurs[k] : m));
    return s;
  }
  /* Le texte écrit en dur dans index.html : chaque morceau de texte et les
     attributs lisibles (title, placeholder, aria-label) sont traduits sur
     place au démarrage. */
  const ATTRS = ['title', 'placeholder', 'aria-label', 'label'];
  function traduireDom(racine) {
    if (L() === LANGUES.fr) return;
    const marche = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const noeuds = [];
    while (marche.nextNode()) noeuds.push(marche.currentNode);
    for (const n of noeuds) {
      const brut = n.nodeValue, cle = brut.replace(/\s+/g, ' ').trim();
      if (!cle) continue;
      const tr = tx(cle);
      if (tr === cle) continue;
      const avant = /^\s/.test(brut) ? ' ' : '', apres = /\s$/.test(brut) ? ' ' : '';
      n.nodeValue = avant + tr + apres;
    }
    for (const el of racine.querySelectorAll('*')) {
      for (const a of ATTRS) {
        if (!el.hasAttribute(a)) continue;
        const v = el.getAttribute(a).replace(/\s+/g, ' ').trim(), tr = tx(v);
        if (tr !== v) el.setAttribute(a, tr);
      }
    }
  }

  return {
    ajouter, choisir, changer, tx, traduireDom,
    get langue() { L(); return langue; },
    get locale() { return L().locale; },
    get dec() { return L().dec; },
    get lettres() { return L().lettres; },
    get roque() { return L().roque; },
    ordinal: (n) => L().ordinal(n),
    langues: () => Object.entries(LANGUES).map(([code, l]) => ({ code, nom: l.nom })),
  };
})();
const tx = I18N.tx;
