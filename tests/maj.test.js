/* maj.js : comparer les versions, lire la réponse de GitHub (sans réseau). */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { APP } = require('./aide');

function chargerMaj() {
  const ctx = vm.createContext({ window: {}, console, localStorage: { getItem: () => null, setItem() {} },
    navigator: { onLine: true }, tx: (s) => s, document: { getElementById: () => null } });
  vm.runInContext(fs.readFileSync(path.join(APP, 'maj.js'), 'utf8'), ctx);
  return vm.runInContext('Maj', ctx);
}

test('comparaison de versions', () => {
  const Maj = chargerMaj();
  assert.ok(Maj.plusRecente('2026.11.09.1', '2026.11.09'));
  assert.ok(Maj.plusRecente('2026.11.10', '2026.11.09.1'));
  assert.ok(Maj.plusRecente('2026.11.9.2', '2026.11.09.1'), 'les zéros de tête ne comptent pas');
  assert.ok(!Maj.plusRecente('2026.11.09', '2026.11.09'));
  assert.ok(!Maj.plusRecente('2026.11.08', '2026.11.09.1'));
  assert.ok(!Maj.plusRecente('', '2026.11.09'));
});

test('réponse de GitHub : seul un APK de ce dépôt est retenu', () => {
  const Maj = chargerMaj();
  const r = Maj.lire({
    tag_name: 'v2026.11.10', html_url: 'https://github.com/AMAURYCU/chaxmat/releases/tag/v2026.11.10', body: 'notes',
    assets: [
      { name: 'Piege.apk', browser_download_url: 'https://github.com/quelquun/autre/releases/download/v1/Piege.apk', size: 1 },
      { name: 'Chaxmat.apk', browser_download_url: 'https://github.com/AMAURYCU/chaxmat/releases/download/v2026.11.10/Chaxmat.apk', size: 9 },
    ],
  }, 'AMAURYCU/chaxmat');
  assert.strictEqual(r.version, '2026.11.10');
  assert.strictEqual(r.tag, 'v2026.11.10');
  assert.strictEqual(r.apk, 'https://github.com/AMAURYCU/chaxmat/releases/download/v2026.11.10/Chaxmat.apk');
  const sans = Maj.lire({ tag_name: 'v1', html_url: 'https://evil.example/', assets: [] }, 'AMAURYCU/chaxmat');
  assert.strictEqual(sans.apk, null);
  assert.ok(sans.page.startsWith('https://github.com/'), 'jamais de lien hors de GitHub');
});
