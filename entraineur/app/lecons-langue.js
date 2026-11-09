/* Les leçons d'ouvertures ne sont chargées que dans la langue de
   l'interface : chaque fichier pèse plus de 600 Ko, et le navigateur les
   lisait et compilait tous les deux à chaque lancement. Sans fichier pour la
   langue, les leçons s'affichent en anglais (voir lecons() dans ouvertures.js).

   document.write, et non un <script> ajouté au DOM : le fichier est ainsi lu
   avant les scripts qui suivent dans index.html, comme avant, et lecons()
   reste synchrone. Ce script doit venir après i18n/en.js (et les autres
   langues), et avant ouvertures.js. */
'use strict';
(function () {
  const PAR_LANGUE = { fr: 'lecons.js', en: 'lecons.en.js' };
  const fichier = PAR_LANGUE[I18N.langue] || PAR_LANGUE.en;
  document.write('<script src="' + fichier + '"></scr' + 'ipt>');
})();
