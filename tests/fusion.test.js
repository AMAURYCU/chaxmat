/* fusion.js : la fusion à trois voies de la synchronisation GitHub. Des
   centaines de cas tirés au hasard : ce que chaque appareil a fait seul doit
   se retrouver dans le résultat, rien de plus, rien de moins. */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { APP } = require('./aide');
const { Fusion } = require(path.join(APP, 'fusion.js'));

const copie = (x) => JSON.parse(JSON.stringify(x));
function hasard(graine) {
  let x = graine;
  return (n) => { x = (x * 1103515245 + 12345) & 0x7fffffff; return x % n; };
}
function base(h) {
  const d = { reglages: { pseudo: 'moi', son: true }, parties: {}, exos: {}, liste: ['a', 'b', 'c', 'd'] };
  for (let i = 0; i < 12; i++) d.parties['p' + i] = { date: '2026-10-' + String(10 + i), score: h(3) / 2, stat: { menaces: h(5) } };
  for (let i = 0; i < 6; i++) d.exos['e' + i] = { reussites: h(4), echecs: h(4) };
  return d;
}
/* Un appareil modifie, ajoute et supprime, mais seulement « ses » éléments
   (pairs ou impairs) : les deux côtés ne se contredisent jamais. */
function modifier(d, h, cote) {
  const miens = (k) => (+k.slice(1)) % 2 === (cote === 'L' ? 0 : 1);
  for (const col of ['parties', 'exos']) {
    for (const k of Object.keys(d[col]).filter(miens)) {
      const r = h(4);
      if (r === 0) delete d[col][k];
      else if (r === 1) d[col][k].change = cote + h(100);
    }
    d[col][cote + 'nouveau' + h(1000)] = { de: cote };
  }
  if (cote === 'L') { d.liste.push('L'); d.liste = d.liste.filter((x) => x !== 'b'); }
  else { d.liste.push('D'); d.liste = d.liste.filter((x) => x !== 'c'); }
  if (cote === 'D') d.reglages.pseudo = 'autre';
  return d;
}

test('modifications sans conflit : tout est gardé, sur 300 cas au hasard', () => {
  for (let g = 1; g <= 300; g++) {
    const h = hasard(g);
    const b = base(h);
    const l = modifier(copie(b), h, 'L');
    const d = modifier(copie(b), h, 'D');
    /* le résultat attendu : les modifications des deux côtés, appliquées à la base */
    const attendu = copie(b);
    for (const col of ['parties', 'exos']) {
      for (const k of Object.keys(b[col])) {
        const cote = (+k.slice(1)) % 2 === 0 ? l : d;
        if (!(k in cote[col])) delete attendu[col][k]; else attendu[col][k] = cote[col][k];
      }
      for (const src of [l, d]) for (const k of Object.keys(src[col])) if (!(k in b[col])) attendu[col][k] = src[col][k];
    }
    attendu.reglages.pseudo = 'autre';
    const f = Fusion.fusionner(b, l, d);
    assert.deepStrictEqual(Object.assign({}, f, { liste: null }), Object.assign({}, attendu, { liste: null }), 'cas ' + g);
    assert.deepStrictEqual([...f.liste].sort(), ['L', 'D', 'a', 'd'].sort(), 'liste, cas ' + g);
  }
});

test('supprimé des deux côtés : reste supprimé ; supprimé d’un côté, modifié de l’autre : la modification gagne', () => {
  const b = { parties: { x: { a: 1 }, y: { a: 1 } } };
  const f = Fusion.fusionner(b, { parties: { y: { a: 2 } } }, { parties: {} });
  assert.deepStrictEqual(f, { parties: { y: { a: 2 } } });
});

test('une même partie changée des deux côtés : on garde celle que Stockfish a analysée', () => {
  const b = { parties: { x: { date: 'j' } } };
  const l = { parties: { x: { date: 'j', note: 'ici' } } };
  const d = { parties: { x: { date: 'j', moteur: { cpl: 40 } } } };
  assert.deepStrictEqual(Fusion.fusionner(b, l, d), d);
  assert.deepStrictEqual(Fusion.fusionner(b, d, l), d);
});

test('versions de format : la plus grande', () => {
  assert.strictEqual(Fusion.fusionner({ versionJours: 3 }, { versionJours: 4 }, { versionJours: 5 }).versionJours, 5);
});

test('égalité : ordre des clés indifférent, undefined compte comme absent, tableau ≠ objet', () => {
  assert.ok(Fusion.egal({ a: 1, b: [1, { c: 2 }] }, { b: [1, { c: 2 }], a: 1 }));
  assert.ok(Fusion.egal({ a: undefined, b: 1 }, { b: 1 }));
  assert.ok(!Fusion.egal([1], { 0: 1 }));
  assert.ok(!Fusion.egal({ a: 1 }, { a: '1' }));
  assert.ok(!Fusion.egal({ a: [1, 2] }, { a: [1, 2, 3] }));
});
