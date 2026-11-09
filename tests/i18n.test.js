/* Toute phrase de l'interface a sa traduction anglaise (outils/traductions.py). */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { RACINE } = require('./aide');

test('aucune phrase sans traduction anglaise', () => {
  const r = spawnSync(process.env.PYTHON || 'python3', [path.join(RACINE, 'outils', 'traductions.py'), 'verifier'], { encoding: 'utf8' });
  assert.strictEqual(r.status, 0, r.stdout + r.stderr);
});
