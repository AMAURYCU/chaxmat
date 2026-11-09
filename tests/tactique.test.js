/* tactique.js : échanges statiques, clouages, menaces sous échec, et la voie
   rapide (fonctions internes de chess.js) contre la voie publique. */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { APP } = require('./aide');
require(path.join(APP, 'vendor', 'chess.js'));          // pose globalThis.Chess
const T = require(path.join(APP, 'tactique.js'));
const { seeGain, enPrise, fenAuTrait } = T;

/* parties au hasard, reproductibles (générateur à graine) */
function* positionsAuHasard(nbParties, graine = 7) {
  let x = graine;
  const hasard = (n) => { x = (x * 1103515245 + 12345) & 0x7fffffff; return x % n; };
  for (let g = 0; g < nbParties; g++) {
    const c = new Chess();
    for (let i = 0; i < 90 && !c.isGameOver(); i++) {
      const coups = c.moves();
      c.move(coups[hasard(coups.length)]);
      yield c.fen();
    }
  }
}

test('dame défendue par un pion : la tour gagne 900 − 500', () => {
  assert.strictEqual(seeGain('4k3/8/4p3/3q4/8/8/8/3RK3 w - - 0 1', 'd5', 'w'), 400);
});

test('un fou cloué ne prend pas', () => {
  assert.strictEqual(seeGain('1k6/1b6/8/8/4N3/8/8/1R2K3 b - - 0 1', 'e4', 'b'), 0);
  assert.strictEqual(seeGain('k7/1b6/8/8/4N3/8/8/4K3 b - - 0 1', 'e4', 'b'), 320);
});

test('une pièce en prise reste vue quand son camp est en échec (fourchette avec échec)', () => {
  // noirs au trait, en échec par Fb5 ; la dame d5 est en prise de la tour d1
  const fen = '4k3/8/8/1B1q4/8/8/8/3RK3 b - - 0 1';
  assert.strictEqual(seeGain(fen, 'd5', 'w'), 900);
  assert.deepStrictEqual(enPrise(fen, 'b'), [{ case: 'd5', type: 'q', gain: 900 }]);
  // la vraie fourchette : Cc7+ attaque roi e8 et dame a8
  assert.deepStrictEqual(enPrise('q3k3/2N5/8/8/8/8/8/4K3 b - - 0 1', 'b').map((x) => x.case), ['a8']);
});

test('fenAuTrait change le trait et oublie la prise en passant', () => {
  assert.strictEqual(fenAuTrait('4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 2', 'b'), '4k3/8/8/3pP3/8/8/8/4K3 b - - 0 2');
  assert.strictEqual(fenAuTrait('4k3/8/8/8/8/8/8/4K3 w - - 0 1', 'w'), '4k3/8/8/8/8/8/8/4K3 w - - 0 1');
});

test('FEN illisible : rien en prise, pas d’exception', () => {
  assert.strictEqual(seeGain('n’importe quoi', 'e4', 'w'), 0);
  assert.deepStrictEqual(enPrise('n’importe quoi', 'w'), []);
});

test('voie rapide = voie publique de chess.js, sur 400 positions au hasard', () => {
  assert.ok(T.interne(Chess), 'la copie de vendor/ a bien _moves et _makeMove');
  const rapides = [];
  const fens = [...positionsAuHasard(5)];
  for (const fen of fens) rapides.push(JSON.stringify([enPrise(fen, 'w'), enPrise(fen, 'b')]));
  try {
    T.reglage.rapide = false;          // comme avec une version de chess.js sans _moves ni _makeMove
    fens.forEach((fen, i) => assert.strictEqual(JSON.stringify([enPrise(fen, 'w'), enPrise(fen, 'b')]), rapides[i], fen));
  } finally {
    T.reglage.rapide = null;
  }
  assert.ok(!T.interne(function SansInternes() {}), 'une autre version est bien détectée');
  assert.ok(fens.length >= 400, fens.length + ' positions');
});
