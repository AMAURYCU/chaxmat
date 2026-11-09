/* serveur.py : lecture, écriture, refus d'écraser, limites, autres sites, plusieurs requêtes à la fois. */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const net = require('node:net');
const { demarrerServeur, requete } = require('./aide');

test('serveur local', async (t) => {
  const s = await demarrerServeur();
  t.after(() => s.arreter());
  const json = { 'Content-Type': 'application/json' };

  await t.test('sans fichier : {} et révision « 0 »', async () => {
    const r = await requete(s.port, { chemin: '/api/donnees' });
    assert.strictEqual(r.statut, 200);
    assert.strictEqual(r.texte, '{}');
    assert.strictEqual(r.entetes['x-revision'], '0');
  });

  let rev;
  await t.test('écrit, puis relit la même révision', async () => {
    const corps = JSON.stringify({ parties: { a: 1 } });
    const r = await requete(s.port, { methode: 'POST', chemin: '/api/donnees?base=0', entetes: json, corps });
    assert.strictEqual(r.statut, 200);
    rev = JSON.parse(r.texte).rev;
    const g = await requete(s.port, { chemin: '/api/donnees' });
    assert.deepStrictEqual(JSON.parse(g.texte), { parties: { a: 1 } });
    assert.strictEqual(g.entetes['x-revision'], rev);
    assert.ok(!fs.existsSync(s.fichier + '.tmp'), 'pas de fichier temporaire laissé');
  });

  await t.test('une révision périmée reçoit 409 et le fichier ne bouge pas', async () => {
    const avant = fs.readFileSync(s.fichier, 'utf8');
    const r = await requete(s.port, { methode: 'POST', chemin: '/api/donnees?base=0', entetes: json, corps: '{"x":1}' });
    assert.strictEqual(r.statut, 409);
    assert.strictEqual(JSON.parse(r.texte).rev, rev);
    assert.strictEqual(fs.readFileSync(s.fichier, 'utf8'), avant);
  });

  await t.test('corps vide, illisible ou sans longueur : refusé', async () => {
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/donnees', entetes: json, corps: '{}' })).statut, 400);
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/donnees', entetes: json, corps: '{pas du json' })).statut, 400);
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/donnees', entetes: Object.assign({ 'Content-Length': '-5' }, json) })).statut, 400);
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/donnees', entetes: Object.assign({ 'Content-Length': '999999999' }, json) })).statut, 413);
  });

  await t.test('une page d’un autre site ne lit ni n’écrit', async () => {
    assert.strictEqual((await requete(s.port, { chemin: '/api/donnees', entetes: { Host: 'evil.example:' + s.port } })).statut, 403);
    assert.strictEqual((await requete(s.port, { chemin: '/api/donnees', entetes: { Origin: 'https://evil.example' } })).statut, 403);
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/donnees', entetes: Object.assign({ Origin: 'null' }, json), corps: '{"x":1}' })).statut, 403);
  });

  await t.test('mise à jour : type de contenu et version exigés', async () => {
    assert.strictEqual((await requete(s.port, { methode: 'POST', chemin: '/api/maj', entetes: { 'Content-Type': 'text/plain' }, corps: '{}' })).statut, 415);
    const r = await requete(s.port, { methode: 'POST', chemin: '/api/maj', entetes: json, corps: JSON.stringify({ tag: 'main; rm -rf /' }) });
    assert.strictEqual(r.statut, 400);
    assert.match(JSON.parse(r.texte).sortie, /version invalide/);
  });

  await t.test('une requête lente ne bloque pas les autres', async () => {
    const lent = net.connect(s.port, '127.0.0.1');
    await new Promise((ok) => lent.once('connect', ok));
    lent.write('POST /api/donnees HTTP/1.1\r\nHost: 127.0.0.1:' + s.port + '\r\n');   // en-têtes jamais finis
    const t0 = Date.now();
    const r = await requete(s.port, { chemin: '/api/donnees' });
    assert.strictEqual(r.statut, 200);
    assert.ok(Date.now() - t0 < 2000, 'réponse en ' + (Date.now() - t0) + ' ms');
    lent.destroy();
  });
});
