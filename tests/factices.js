/* Des parties chess.com factices, reproductibles : des coups au hasard, avec
   pendules, comme les archives mensuelles de l'API publique. Aucune vraie
   partie dans le dépôt. */
'use strict';
const path = require('node:path');
const { APP } = require('./aide');
require(path.join(APP, 'vendor', 'chess.js'));

function hasard(graine) {
  let x = graine;
  return (n) => { x = (x * 1103515245 + 12345) & 0x7fffffff; return x % n; };
}
const pendule = (s) => `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

/** { 'AAAA/MM': { games: [...] } } pour `pseudo`, `parJour` parties par jour sur `jours` jours à partir de `debut`. */
function archives(pseudo, { debut = '2026-08-01', jours = 20, parJour = 2, graine = 11 } = {}) {
  const h = hasard(graine);
  const out = {};
  const t0 = Date.parse(debut + 'T12:00:00Z') / 1000;
  let n = 0;
  for (let j = 0; j < jours; j++) {
    for (let k = 0; k < parJour; k++) {
      const c = new Chess();
      const temps = { w: 600, b: 600 };
      for (let i = 0; i < 70 && !c.isGameOver(); i++) {
        const coups = c.moves();
        const trait = c.turn();
        c.move(coups[h(coups.length)]);
        temps[trait] = Math.max(1, temps[trait] - 1 - h(15));
        c.setComment(`[%clk ${pendule(temps[trait])}]`);
      }
      const blanc = (n % 2) === 0, adv = 'adversaire' + (n % 7);
      const fin = t0 + j * 86400 + k * 1800;
      c.header('Event', 'Live Chess', 'Site', 'Chess.com', 'White', blanc ? pseudo : adv, 'Black', blanc ? adv : pseudo,
        'Result', '*', 'TimeControl', '600', 'Termination', 'test');
      const rang = { rating: 450 + h(60) };
      const g = {
        url: 'https://www.chess.com/game/live/' + (900000 + n), pgn: c.pgn(), end_time: fin,
        rules: 'chess', time_class: 'rapid', time_control: '600',
        white: Object.assign({ username: blanc ? pseudo : adv, result: blanc ? 'win' : 'resigned' }, rang),
        black: Object.assign({ username: blanc ? adv : pseudo, result: blanc ? 'resigned' : 'win' }, { rating: 450 + h(60) }),
      };
      const d = new Date(fin * 1000);
      const cle = d.getUTCFullYear() + '/' + String(d.getUTCMonth() + 1).padStart(2, '0');
      (out[cle] = out[cle] || { games: [] }).games.push(g);
      n++;
    }
  }
  return out;
}

module.exports = { archives };
