/* « Mettre à jour » sur ordinateur : le clone avance jusqu'à la version publiée
   demandée, pas jusqu'à ce qui a été poussé sur main depuis. */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { RACINE, demarrerServeur, requete } = require('./aide');

const git = (dossier, ...args) => execFileSync('git', ['-C', dossier, '-c', 'user.name=test', '-c', 'user.email=test@example.invalid',
  '-c', 'init.defaultBranch=main', '-c', 'advice.detachedHead=false', ...args], { encoding: 'utf8' }).trim();

test('mise à jour par tag', async (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'chaxmat-git-'));
  const origine = path.join(tmp, 'origine.git'), auteur = path.join(tmp, 'auteur'), client = path.join(tmp, 'client');
  execFileSync('git', ['init', '-q', '--bare', '-b', 'main', origine]);
  fs.mkdirSync(path.join(auteur, 'entraineur', 'app'), { recursive: true });
  git(auteur, 'init', '-q', '-b', 'main');
  fs.copyFileSync(path.join(RACINE, 'entraineur', 'serveur.py'), path.join(auteur, 'entraineur', 'serveur.py'));
  const version = (v) => { fs.writeFileSync(path.join(auteur, 'entraineur', 'app', 'version.txt'), v); git(auteur, 'add', '-A'); git(auteur, 'commit', '-qm', v); };
  version('1'); git(auteur, 'tag', 'v2026.01.01');
  version('2'); git(auteur, 'tag', 'v2026.01.02');
  const publiee = git(auteur, 'rev-parse', 'HEAD');
  version('3, pas encore publiée');
  git(auteur, 'remote', 'add', 'origin', origine);
  git(auteur, 'push', '-q', 'origin', 'main', '--tags');
  execFileSync('git', ['clone', '-q', origine, client]);
  git(client, 'reset', '-q', '--hard', 'v2026.01.01');

  const s = await demarrerServeur(undefined, path.join(client, 'entraineur', 'serveur.py'));
  t.after(async () => { await s.arreter(); fs.rmSync(tmp, { recursive: true, force: true }); });
  const maj = async (tag) => {
    const r = await requete(s.port, { methode: 'POST', chemin: '/api/maj', entetes: { 'Content-Type': 'application/json' }, corps: JSON.stringify({ tag }) });
    return Object.assign({ statut: r.statut }, JSON.parse(r.texte));
  };

  assert.deepStrictEqual(JSON.parse((await requete(s.port, { chemin: '/api/maj' })).texte), { git: true });
  const r1 = await maj('v2026.01.02');
  assert.strictEqual(r1.ok, true, r1.sortie);
  assert.strictEqual(r1.change, true);
  assert.strictEqual(git(client, 'rev-parse', 'HEAD'), publiee, 'arrêté sur la version publiée, pas sur main');
  assert.strictEqual(fs.readFileSync(path.join(client, 'entraineur', 'app', 'version.txt'), 'utf8'), '2');

  const r2 = await maj('v2026.01.02');
  assert.strictEqual(r2.ok, true);
  assert.strictEqual(r2.change, false, 'deuxième fois : rien à faire');

  const r3 = await maj('v2099.01.01');
  assert.strictEqual(r3.ok, false, 'tag inconnu : refus');
  assert.strictEqual(git(client, 'rev-parse', 'HEAD'), publiee);
});
