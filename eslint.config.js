/* ESLint : surtout pour qu'aucune erreur ne soit plus avalée sans un mot
   (no-empty : un catch vide doit dire pourquoi, en commentaire, ou appeler
   ignorer()). Les scripts de la page partagent leurs globales par l'ordre
   des <script> d'index.html : no-undef est donc coupé. */
'use strict';
module.exports = [
  { ignores: ['entraineur/app/vendor/**', 'entraineur/app/lecons*.js', 'entraineur/app/reps-initiaux.js', 'entraineur/app/i18n/en.js', 'node_modules/**'] },
  {
    files: ['entraineur/app/**/*.js', 'tests/**/*.js', 'eslint.config.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'script' },
    rules: {
      'no-empty': 'error',
      'no-unreachable': 'error',
      'no-dupe-keys': 'error',
      'no-self-assign': 'error',
      'no-unused-vars': ['warn', { vars: 'local', args: 'none', caughtErrors: 'none' }],   // les fonctions de premier niveau servent aux autres scripts
      eqeqeq: ['warn', 'smart'],
    },
  },
];
