// @ts-check
/* Petits outils partagés par tous les scripts, chargés en premier. */
'use strict';

/* Pour interpoler un texte venu de l'extérieur (nom de répertoire, commentaire
   de PGN, pseudo) dans un gabarit HTML de tx(). Ailleurs, passer le texte en
   enfant de el() suffit : il n'est jamais lu comme du HTML. */
const ECHAPPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
/** @param {unknown} s @returns {string} */
const echapper = (s) => String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, (c) => ECHAPPE[c]);

/* Une erreur dont on se remet (un affichage secondaire qui échoue), mais qui
   ne doit pas disparaître sans trace : elle reste visible dans la console.
   Les erreurs attendues (coup illégal essayé exprès, stockage interdit) ont,
   elles, un commentaire qui dit pourquoi on les laisse passer. */
function ignorer(e, ou) {
  if (typeof console !== 'undefined') console.warn('[ignoré] ' + (ou || ''), e);
}

if (typeof module === 'object' && module.exports) module.exports = { echapper, ignorer };
