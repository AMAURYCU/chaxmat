/* Mises à jour. Au lancement, si l'appareil est en ligne, l'appli demande à
   GitHub la dernière version publiée (la dernière release du dépôt de
   version.js). Si elle est plus récente que la sienne, un bandeau propose de
   mettre à jour :
   - sur Android, l'APK joint à la release est téléchargé, puis Android
     affiche son écran d'installation. Tes données restent : c'est la même
     appli, signée avec la même clé ;
   - sur l'ordinateur, le serveur local fait « git pull » si l'appli vient
     d'un clone git, puis la page se recharge. Sinon, un lien vers la release.
   Une seule requête, qui n'envoie rien de toi, et au plus une par heure : la
   réponse est gardée dans le navigateur. Sans release (ou tant que le dépôt
   est privé), GitHub répond 404 et rien ne s'affiche. */
'use strict';

const Maj = {
  INTERVALLE: 3600 * 1000,
  CLE: 'entraineur.maj',
  info: null,
  conf() { return window.VERSION_APPLI || null; },
  /* « v2026.11.15 » → [2026, 11, 15] ; comparaison nombre par nombre */
  morceaux(v) { return String(v || '').replace(/^v/i, '').split(/[^0-9]+/).filter(Boolean).map(Number); },
  plusRecente(a, b) {
    const x = this.morceaux(a), y = this.morceaux(b);
    for (let i = 0; i < Math.max(x.length, y.length); i++) {
      const d = (x[i] || 0) - (y[i] || 0);
      if (d) return d > 0;
    }
    return false;
  },
  android() { return !!(window.PontAndroid && typeof PontAndroid.installerMaj === 'function'); },
  memoire(v) {
    try {
      if (v === undefined) return JSON.parse(localStorage.getItem(this.CLE) || 'null');
      localStorage.setItem(this.CLE, JSON.stringify(v));
    } catch (e) { /* stockage indisponible : on redemandera */ }
    return null;
  },
  /* La release, sous une forme sûre : seulement des adresses de GitHub. */
  lire(j, depot) {
    const tag = String(j.tag_name || '');
    const apk = (j.assets || []).find(a => /\.apk$/i.test(a.name || '')
      && String(a.browser_download_url || '').startsWith('https://github.com/' + depot + '/releases/download/'));
    const page = String(j.html_url || '');
    return {
      version: tag.replace(/^v/i, ''), tag,
      page: page.startsWith('https://github.com/') ? page : 'https://github.com/' + depot + '/releases/latest',
      apk: apk ? apk.browser_download_url : null, taille: apk ? apk.size || 0 : 0,
      notes: String(j.body || '').replace(/\r/g, '').trim().slice(0, 1200),
    };
  },
  async auDemarrage() {
    const c = this.conf();
    if (!c || !c.depot || !/^[\w.-]+\/[\w.-]+$/.test(c.depot)) return;
    let m = this.memoire();
    if (!m || m.depot !== c.depot || Date.now() - (m.t || 0) > this.INTERVALLE) {
      if (navigator.onLine === false) return;
      let r;
      try {
        r = await fetch('https://api.github.com/repos/' + c.depot + '/releases/latest',
          { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' });
      } catch (e) { return; }                     // hors ligne, ou GitHub injoignable
      /* 404 : aucune release, ou dépôt privé ; 403 : trop de demandes */
      if (r.status === 404) { this.memoire({ t: Date.now(), depot: c.depot, info: null }); return; }
      if (!r.ok) return;
      let j; try { j = await r.json(); } catch (e) { return; }
      m = { t: Date.now(), depot: c.depot, info: this.lire(j, c.depot) };
      this.memoire(m);
    }
    if (!m.info || !this.plusRecente(m.info.version, c.version)) return;
    this.info = m.info;
    await this.afficher();
  },

  /* ------------------------------------------------------------ le bandeau */
  zone() { return document.getElementById('bandeau-maj'); },
  mo(octets) {
    const loc = typeof LOCALE_JEU === 'function' ? LOCALE_JEU() : undefined;
    return (octets / 1048576).toLocaleString(loc, { maximumFractionDigits: 1 });
  },
  async afficher() {
    const z = this.zone(), i = this.info, c = this.conf();
    if (!z || !i) return;
    z.innerHTML = '';
    z.append(el('p', { class: 'maj-titre' },
      el('strong', {}, tx('Nouvelle version disponible : {0}.', [i.version])), ' ',
      tx('Tu as la {0}.', [c.version])));
    if (i.notes) z.append(el('details', { class: 'maj-notes' }, el('summary', {}, tx('Nouveautés')), el('div', {}, i.notes)));
    const etat = el('p', { class: 'maj-etat', hidden: true });
    const boutons = el('div', { class: 'ligne-ctrl' });
    const plusTard = el('button', { class: 'b g', type: 'button', onclick: () => { z.hidden = true; } }, tx('Plus tard'));
    const lien = el('a', { class: 'b g', href: i.page, target: '_blank', rel: 'noopener' }, tx('Voir sur GitHub'));
    if (this.android()) {
      if (i.apk) {
        boutons.append(el('button', { class: 'b', type: 'button', onclick: (e) => this.installer(e.currentTarget) },
          tx('Mettre à jour ({0} Mo)', [this.mo(i.taille)])));
        let peut = true; try { peut = PontAndroid.peutInstaller(); } catch (e) { }
        if (!peut) {
          etat.hidden = false;
          etat.textContent = tx('La première fois, Android te demandera d’autoriser l’Entraîneur à installer des applis : c’est pour sa propre mise à jour.');
        }
      }
      boutons.append(lien, plusTard);
    } else {
      const git = await this.etatServeur();
      if (git) {
        boutons.append(el('button', { class: 'b', type: 'button', onclick: (e) => this.tirer(e.currentTarget) }, tx('Mettre à jour')), lien, plusTard);
      } else {
        etat.hidden = false;
        etat.textContent = tx('Télécharge-la sur GitHub et remplace le dossier de l’application : tes données (le dossier entraineur/donnees) restent. Si tu l’as installée avec git, fais « git pull » dans son dossier.');
        boutons.append(el('a', { class: 'b', href: i.page, target: '_blank', rel: 'noopener' }, tx('Télécharger')), plusTard);
      }
    }
    z.append(etat, boutons);
    z.hidden = false;
  },
  message(t, erreur) {
    const e = this.zone() && this.zone().querySelector('.maj-etat');
    if (!e) return;
    e.hidden = false; e.textContent = t;
    e.classList.toggle('maj-erreur', !!erreur);
  },
  rearmer() {
    const b = this.zone() && this.zone().querySelector('button.b:not(.g)');
    if (b) { b.disabled = false; b.textContent = tx('Réessayer'); }
  },

  /* ------------------------------------------------------------ Android */
  installer(bouton) {
    bouton.disabled = true;
    this.message(tx('Téléchargement…'));
    try { PontAndroid.installerMaj(this.info.apk); } catch (e) { this.echec(0, e.message); }
  },
  /* appelés par MainActivity */
  progression(fait, total) {
    this.message(total > 0 ? tx('Téléchargement : {0} %', [Math.floor(100 * fait / total)]) : tx('Téléchargement : {0} Mo', [this.mo(fait)]));
  },
  confirmation() {
    this.message(tx('Android te demande de confirmer l’installation. Tes données restent : l’appli redémarre dans sa nouvelle version.'));
  },
  echec(code, detail) {
    const textes = {
      3: tx('Installation annulée.'),
      4: tx('Android refuse ce fichier : il est peut-être abîmé. Réessaie.'),
      5: tx('Android refuse : cette version n’est pas signée avec la même clé que celle de ton téléphone. Pour l’installer, il faut désinstaller l’ancienne, ce qui efface ses données : synchronise-les d’abord.'),
      6: tx('Pas assez de place sur le téléphone.'),
    };
    this.message((textes[code] || tx('La mise à jour a échoué.')) + (detail && !textes[code] ? ' (' + detail + ')' : ''), code !== 3);
    this.rearmer();
  },

  /* ------------------------------------------------------------ ordinateur */
  /* Le serveur local sait-il faire « git pull » ? (pas en mode simplifié, ni
     avec un serveur d'avant cette fonction) */
  async etatServeur() {
    if (typeof DEGRADE !== 'undefined' && DEGRADE) return false;
    try {
      const r = await fetch('/api/maj', { cache: 'no-store' });
      if (!r.ok) return false;
      return !!(await r.json()).git;
    } catch (e) { return false; }
  },
  async tirer(bouton) {
    bouton.disabled = true;
    this.message(tx('Mise à jour en cours (git pull)…'));
    let j = null;
    try {
      const r = await fetch('/api/maj', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
      j = await r.json();
    } catch (e) { j = { ok: false, sortie: e.message }; }
    if (!j.ok) {
      this.message(tx('git pull a échoué : {0} Tu peux le faire à la main dans le dossier de l’application.', [(j.sortie || '').trim().split('\n').slice(-3).join(' ')]), true);
      this.rearmer();
      return;
    }
    if (!j.change) { this.message(tx('Rien de nouveau dans ton clone : la release n’est peut-être pas encore sur ta branche.')); return; }
    if (j.serveur) {
      this.message(tx('Mise à jour faite. Le serveur a changé aussi : ferme sa fenêtre et relance l’entraîneur.'));
      bouton.replaceWith(el('button', { class: 'b', type: 'button', onclick: () => location.reload() }, tx('Recharger')));
      return;
    }
    this.message(tx('Mise à jour faite : la page se recharge.'));
    setTimeout(() => location.reload(), 1200);
  },
};
