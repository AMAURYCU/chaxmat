/* Outils communs aux tests : un serveur Chaxmat sur un dossier de données
   jetable (jamais le vrai donnees/donnees.json), et des requêtes HTTP brutes. */
'use strict';
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');

const RACINE = path.join(__dirname, '..');
const APP = path.join(RACINE, 'entraineur', 'app');

/** Lance serveur.py sur un dossier temporaire. Renvoie { url, port, dossier, arreter }. */
function demarrerServeur(donnees, script = path.join(RACINE, 'entraineur', 'serveur.py')) {
  const dossier = fs.mkdtempSync(path.join(os.tmpdir(), 'chaxmat-test-'));
  if (donnees !== undefined) fs.writeFileSync(path.join(dossier, 'donnees.json'), JSON.stringify(donnees));
  const port = 20000 + Math.floor(Math.random() * 20000);
  const p = spawn(process.env.PYTHON || 'python3', [script], {
    env: Object.assign({}, process.env, { CHAXMAT_DONNEES: dossier, CHAXMAT_PORT: String(port), CHAXMAT_NAVIGATEUR: '0' }),
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return new Promise((ok, ko) => {
    let sortie = '';
    const minuteur = setTimeout(() => { p.kill(); ko(new Error('le serveur ne démarre pas : ' + sortie)); }, 10000);
    p.stdout.on('data', (d) => {
      sortie += d;
      const m = sortie.match(/http:\/\/127\.0\.0\.1:(\d+)\//);
      if (m) {
        clearTimeout(minuteur);
        ok({
          url: m[0], port: +m[1], dossier,
          fichier: path.join(dossier, 'donnees.json'),
          arreter: () => new Promise((fin) => { p.once('exit', fin); p.kill(); }),
        });
      }
    });
    p.stderr.on('data', (d) => { sortie += d; });
    p.once('exit', (c) => { clearTimeout(minuteur); ko(new Error('serveur arrêté (' + c + ') : ' + sortie)); });
  });
}

/** Requête HTTP avec des en-têtes libres (fetch interdit de changer Host). */
function requete(port, { methode = 'GET', chemin = '/', entetes = {}, corps = null } = {}) {
  return new Promise((ok, ko) => {
    const r = http.request({ host: '127.0.0.1', port, method: methode, path: chemin,
      headers: Object.assign({ Host: '127.0.0.1:' + port },
        corps !== null ? { 'Content-Length': Buffer.byteLength(corps) } : {}, entetes) }, (rep) => {
      let t = '';
      rep.setEncoding('utf8');
      rep.on('data', (d) => { t += d; });
      rep.on('end', () => ok({ statut: rep.statusCode, entetes: rep.headers, texte: t }));
    });
    r.on('error', ko);
    if (corps !== null) r.write(corps);
    r.end();
  });
}

module.exports = { RACINE, APP, demarrerServeur, requete };
