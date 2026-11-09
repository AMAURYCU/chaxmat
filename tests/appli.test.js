/* L'application dans un vrai navigateur (Chromium, par Playwright), sur un
   serveur aux données jetables, réseau simulé : sécurité du rendu, import,
   longues tâches, moteur, recalcul des statistiques, langue des leçons, mode
   fichier. Lent (une à deux minutes) : Stockfish tourne pour de vrai. */
'use strict';
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const { APP, demarrerServeur } = require('./aide');
const { archives } = require('./factices');

const PSEUDO = 'testeur';
const ARCH = archives(PSEUDO);

async function nouvellePage(navigateur, { langue = 'fr-FR' } = {}) {
  const ctx = await navigateur.newContext({ locale: langue, viewport: { width: 390, height: 844 } });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com|api\.github\.com|https:\/\/([a-z]+\.)?lichess\.(org|ovh)/, (r) => r.abort());
  await ctx.route(/api\.chess\.com/, (r) => {
    const m = r.request().url().match(/games\/(\d{4}\/\d{2})$/);
    r.fulfill({ status: 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' },
      body: m ? JSON.stringify(ARCH[m[1]] || { games: [] }) : JSON.stringify({ username: PSEUDO }) });
  });
  const page = await ctx.newPage();
  const suivi = { erreurs: [], csp: [] };
  page.on('pageerror', (e) => suivi.erreurs.push(e.message));
  page.on('console', (m) => { if (/Content Security Policy|Refused to/.test(m.text())) suivi.csp.push(m.text().slice(0, 200)); });
  return { ctx, page, suivi };
}
async function accueil(page, url) {
  await page.goto(url);
  await page.waitForFunction(() => typeof S !== 'undefined' && document.querySelector('#acc-pseudo'));
  if (await page.isVisible('#acc-pseudo')) {
    await page.fill('#acc-pseudo', PSEUDO);
    await page.click('#acc-ok');
  }
  await page.waitForTimeout(300);
}
const journal = (page) => page.evaluate(() => document.getElementById('journal').textContent);

test('application', { timeout: 600000 }, async (t) => {
  const s = await demarrerServeur();
  const navigateur = await chromium.launch();
  t.after(async () => { await navigateur.close(); await s.arreter(); });
  const { page, suivi } = await nouvellePage(navigateur);
  await accueil(page, s.url);

  await t.test('tous les onglets s’ouvrent, sans erreur ni refus de la politique de sécurité', async () => {
    const onglets = await page.$$eval('nav button[data-onglet]', (bs) => bs.map((b) => b.dataset.onglet));
    assert.ok(onglets.length >= 5, onglets.join(','));
    for (const o of onglets) { await page.click(`nav button[data-onglet="${o}"]`); await page.waitForTimeout(250); }
    assert.deepStrictEqual(suivi.erreurs, []);
    assert.deepStrictEqual(suivi.csp, []);
  });

  await t.test('un commentaire de PGN piégé ne s’exécute pas et s’affiche comme du texte', async () => {
    const pgn = '[Event "R"]\n\n{ <img src=x onerror="window.__xss=1"> Plan : c4 }\n1. d4 d5 2. c4 *\n';
    const note = await page.evaluate(async (pgn) => {
      const lu = Rep.lirePgn(pgn);
      const rep = listeReps().find((r) => r.camp === 'w');
      IMP = { lu, rep: rep.id };
      try { appliquerImport(false); } catch (e) { /* l'éditeur n'est pas ouvert : les notes sont déjà posées */ }
      demarrerArbre({ rep: rep.id, portee: 'tout', prof: 0 });
      await new Promise((ok) => setTimeout(ok, 800));
      return { texte: document.getElementById('drill-idee').textContent, html: document.getElementById('drill-idee').innerHTML };
    }, pgn);
    assert.strictEqual(await page.evaluate(() => window.__xss || null), null, 'le script ne s’est pas exécuté');
    assert.match(note.texte, /<img src=x onerror=/, 'la note est affichée telle quelle');
    assert.ok(!/<img/.test(note.html), 'aucune balise créée');
    await page.evaluate(() => arreterDrill());
  });

  await t.test('import : lecture, analyse Stockfish, et une seule longue tâche à la fois', async () => {
    await page.click('nav button[data-onglet="jour"]');
    await page.evaluate(() => {
      document.getElementById('depuis').value = '2026-08-01';
      const choix = document.getElementById('profondeur');          // une profondeur de test, rapide
      choix.append(Object.assign(document.createElement('option'), { value: '20000', textContent: 'test' }));
      choix.value = '20000';
    });
    await page.evaluate(() => document.getElementById('btn-import').click());
    await page.waitForFunction(() => /analyse Stockfish : partie/.test(document.getElementById('journal').textContent), null, { timeout: 120000 });
    const refus = await page.evaluate(() => analyserManquantes(Object.values(S.d.parties).filter((p) => !p.moteur)));
    assert.ok(refus && refus.refus, 'une deuxième tâche est refusée pendant l’import');
    await page.waitForFunction(() => Object.values(S.d.parties).filter((p) => p.moteur).length >= 3, null, { timeout: 240000 });
    await page.evaluate(() => document.getElementById('btn-stop').click());
    await page.waitForFunction(() => /terminé\.|erreur/.test(document.getElementById('journal').textContent), null, { timeout: 120000 });
    const j = await journal(page);
    assert.match(j, /interrompu : \d+ partie\(s\) analysée\(s\)/);
    const n = await page.evaluate(() => ({ parties: Object.keys(S.d.parties).length, analysees: Object.values(S.d.parties).filter((p) => p.moteur).length }));
    assert.strictEqual(n.parties, 40);
    assert.ok(n.analysees >= 3 && n.analysees < 40, JSON.stringify(n));
    assert.ok(await page.evaluate(() => !document.getElementById('btn-import').disabled && !Taches.courante));
    await page.waitForFunction(() => !SAUVE.sale && !SAUVE.enCours, null, { timeout: 10000 });
    assert.strictEqual(Object.keys(JSON.parse(fs.readFileSync(s.fichier, 'utf8')).parties).length, 40, 'tout est écrit sur le disque');
  });

  await t.test('un Stockfish mort est remplacé, un Stockfish introuvable échoue au lieu d’attendre', async () => {
    const r = await page.evaluate(async () => {
      const avant = await obtenirMoteur();
      avant.tuer();
      const apres = await obtenirMoteur();
      const e = await apres.evaluer('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1', 20000);
      const t0 = Date.now();
      let echec = null;
      try { await new Moteur({ source: 'vendor/introuvable.js' }).pret(); } catch (err) { echec = err.message; }
      return { autre: avant !== apres, best: e.best, echec, ms: Date.now() - t0 };
    });
    assert.ok(r.autre && /^[a-h][1-8][a-h][1-8]/.test(r.best), JSON.stringify(r));
    assert.ok(r.echec && r.ms < 10000, JSON.stringify(r));
  });

  await t.test('les menaces sont recomptées une fois après la mise à jour', async () => {
    const vraies = await page.evaluate(() => Object.values(S.d.parties).reduce((a, p) => a + p.stat.menaces, 0));
    assert.ok(vraies > 0);
    await page.evaluate(() => { S.d.versionJours = 3; for (const p of Object.values(S.d.parties)) { p.stat.menaces = 0; p.stat.menacesOk = 0; } sauver(); });
    await page.waitForFunction(() => !SAUVE.sale && !SAUVE.enCours, null, { timeout: 10000 });
    await page.reload();
    await page.waitForFunction(() => typeof S !== 'undefined' && S.d.versionJours === 4, null, { timeout: 60000 });
    const r = await page.evaluate(() => ({ menaces: Object.values(S.d.parties).reduce((a, p) => a + p.stat.menaces, 0),
      champs: Object.values(S.d.jours).every((j) => typeof j.coupsMoteur === 'number' && !('elo' in j)) }));
    assert.strictEqual(r.menaces, vraies);
    assert.ok(r.champs);
  });

  await t.test('la référence de départ couvre 30 jours de calendrier', async () => {
    const r = await page.evaluate(() => ({ ref: refDepart(), jours: Object.keys(S.d.jours).sort() }));
    assert.strictEqual(r.jours[0], '2026-08-01');
    assert.strictEqual(r.ref.jours, r.jours.filter((d) => d < '2026-08-31').length);
  });

  await t.test('seules les leçons de la langue de l’interface sont chargées', async () => {
    assert.deepStrictEqual(await page.evaluate(() => [Array.isArray(window.LECONS), typeof window.LECONS_EN]), [true, 'undefined']);
    const en = await nouvellePage(navigateur, { langue: 'en-GB' });
    await en.page.goto(s.url);
    await en.page.evaluate(() => { try { localStorage.setItem('langue', 'en'); } catch (e) { /* rien */ } });
    await en.page.reload();
    await en.page.waitForFunction(() => typeof S !== 'undefined');
    assert.deepStrictEqual(await en.page.evaluate(() => [typeof window.LECONS, Array.isArray(window.LECONS_EN), lecons().length > 0]), ['undefined', true, true]);
    await en.ctx.close();
  });

  await t.test('mode fichier : un stockage plein le dit au lieu de perdre en silence', async () => {
    const f = await nouvellePage(navigateur);
    await f.page.goto('file://' + path.join(APP, 'index.html'));
    await f.page.waitForFunction(() => typeof S !== 'undefined' && DEGRADE === true);
    const r = await f.page.evaluate(async () => {
      Storage.prototype.setItem = function () { const e = new Error('plein'); e.name = 'QuotaExceededError'; throw e; };
      S.d.reglages.pseudo = 'x'; sauver();
      await new Promise((ok) => setTimeout(ok, 2500));
      const b = document.getElementById('bandeau-sauvegarde');
      return { visible: b && !b.hidden, texte: b && b.textContent, sale: SAUVE.sale };
    });
    assert.ok(r.visible && /QuotaExceededError/.test(r.texte) && r.sale, JSON.stringify(r));
    assert.deepStrictEqual(f.suivi.csp, []);
    await f.ctx.close();
  });

  assert.deepStrictEqual(suivi.erreurs, [], 'aucune erreur JavaScript');
});
