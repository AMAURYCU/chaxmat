/* ==========================================================================
   Sons de l'échiquier, synthétisés à la volée (Web Audio) : aucun fichier à
   charger, donc rien à télécharger et tout marche hors ligne.

   Le principe : un coup n'est pas un « clic », c'est une pièce de bois qu'on
   pose sur un plateau de bois. Le contact est bref et sourd — du bruit passé
   au filtre passe-bas, pas de brillance — et le corps est une courte note
   grave qui descend, comme une caisse qui résonne. Le tout part dans une
   petite réverbération commune : c'est elle qui donne l'impression d'une
   pièce plutôt que d'un casque.

   Les récompenses (mat, position trouvée, série acquise) utilisent une voix
   de cloche additive — quatre partiels inharmoniques aux décroissances
   décalées — beaucoup plus douce qu'une sinusoïde nue.
   ========================================================================== */
'use strict';

const Son = {
  ctx: null, actif: true, volume: 0.5,
  sec: null, humide: null, master: null, bruit: null, reverb: null,

  demarrer() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { this.ctx = new AC(); } catch (e) { return null; }
      const c = this.ctx;

      /* Sortie : un adoucisseur d'aigus, puis un compresseur doux qui empêche
         deux sons superposés de saturer. */
      this.master = c.createGain();
      this.master.gain.value = this.volume;
      const doux = c.createBiquadFilter();
      doux.type = 'lowpass'; doux.frequency.value = 9500; doux.Q.value = 0.7;
      const comp = c.createDynamicsCompressor();
      comp.threshold.value = -14; comp.knee.value = 24;
      comp.ratio.value = 3; comp.attack.value = 0.004; comp.release.value = 0.18;
      this.master.connect(doux); doux.connect(comp); comp.connect(c.destination);

      /* Deux bus : le son direct, et ce qui part dans la réverbération. */
      this.sec = c.createGain(); this.sec.gain.value = 1;
      this.sec.connect(this.master);
      this.reverb = c.createConvolver();
      this.reverb.buffer = this._impulsion(1.15, 2.6);
      this.humide = c.createGain(); this.humide.gain.value = 1;
      this.humide.connect(this.reverb); this.reverb.connect(this.master);

      /* 0,4 s de bruit blanc, réutilisé pour toutes les attaques */
      const n = Math.floor(c.sampleRate * 0.4);
      this.bruit = c.createBuffer(1, n, c.sampleRate);
      const d = this.bruit.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => { });
    return this.ctx;
  },

  /* Réponse impulsionnelle : du bruit qui décroît, assombri au fil du temps —
     une petite pièce boisée, pas une cathédrale. */
  _impulsion(duree, courbe) {
    const c = this.ctx, n = Math.floor(c.sampleRate * duree);
    const buf = c.createBuffer(2, n, c.sampleRate);
    for (let canal = 0; canal < 2; canal++) {
      const d = buf.getChannelData(canal);
      let lisse = 0;
      for (let i = 0; i < n; i++) {
        const k = 1 - i / n;
        const brut = (Math.random() * 2 - 1) * Math.pow(k, courbe);
        lisse = lisse * 0.62 + brut * 0.38;        // passe-bas : queue feutrée
        d[i] = lisse;
      }
    }
    return buf;
  },

  /* Envoie une source vers les deux bus. `envoi` = part de réverbération. */
  _router(noeud, envoi) {
    noeud.connect(this.sec);
    if (envoi > 0) {
      const g = this.ctx.createGain(); g.gain.value = envoi;
      noeud.connect(g); g.connect(this.humide);
    }
  },

  /* ---- une pièce posée : contact sourd + corps qui descend ---- */
  toc(t0, { freq = 158, gain = 0.78, duree = 0.11, contact = 0.5,
    coupure = 1600, envoi = 0.12 } = {}) {
    const c = this.ctx;

    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(freq, t0);
    o.frequency.exponentialRampToValueAtTime(Math.max(38, freq * 0.5), t0 + duree);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree);
    o.connect(g); this._router(g, envoi);
    o.start(t0); o.stop(t0 + duree + 0.02);

    /* le contact : du bruit, mais sans aigus — c'est ce qui fait « feutré »
       plutôt que « clic de souris ». */
    const b = c.createBufferSource(); b.buffer = this.bruit;
    b.playbackRate.value = 0.9 + Math.random() * 0.25;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = coupure; lp.Q.value = 0.9;
    const hp = c.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 140;
    const gb = c.createGain();
    gb.gain.setValueAtTime(gain * contact, t0);
    gb.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.03);
    b.connect(hp); hp.connect(lp); lp.connect(gb);
    this._router(gb, envoi * 0.8);
    b.start(t0); b.stop(t0 + 0.06);
  },

  /* ---- voix de cloche : quatre partiels inharmoniques ----
     Les rapports 1 / 2 / 2,98 / 4,12 et des décroissances de plus en plus
     courtes donnent un timbre de petite cloche, chaud au lieu de strident. */
  cloche(t0, freq, { gain = 0.16, duree = 1.1, envoi = 0.5 } = {}) {
    const c = this.ctx;
    const partiels = [[1, 1, 1], [2, 0.42, 0.7], [2.98, 0.24, 0.5], [4.12, 0.12, 0.34]];
    for (const [rapport, amp, part] of partiels) {
      const f = freq * rapport;
      if (f > 12000) continue;
      const o = c.createOscillator();
      o.type = rapport === 1 ? 'sine' : 'triangle';
      o.frequency.setValueAtTime(f, t0);
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.linearRampToValueAtTime(gain * amp, t0 + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree * part);
      o.connect(g); this._router(g, envoi);
      o.start(t0); o.stop(t0 + duree * part + 0.03);
    }
  },

  /* ---- souffle grave, pour l'erreur : sourd, jamais agressif ---- */
  sourd(t0, { freq = 116, gain = 0.36, duree = 0.3 } = {}) {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(freq, t0);
    o.frequency.exponentialRampToValueAtTime(freq * 0.72, t0 + duree);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duree);
    o.connect(g); this._router(g, 0.22);
    o.start(t0); o.stop(t0 + duree + 0.02);
  },

  jouer(type) {
    if (!this.actif) return;
    const c = this.demarrer(); if (!c) return;
    const t = c.currentTime + 0.001;
    switch (type) {
      case 'coup':
        this.toc(t);
        break;
      case 'prise':                       /* deux bois qui se heurtent */
        this.toc(t, { freq: 122, gain: 0.95, contact: 0.85, coupure: 2300, duree: 0.14 });
        this.toc(t + 0.026, { freq: 205, gain: 0.4, contact: 0.5, duree: 0.06, envoi: 0.1 });
        break;
      case 'roque':                       /* roi puis tour, posés coup sur coup */
        this.toc(t, { freq: 150, gain: 0.58 });
        this.toc(t + 0.085, { freq: 186, gain: 0.54 });
        break;
      case 'echec':                       /* le coup, puis une clochette claire */
        this.toc(t, { freq: 146, gain: 0.76, contact: 0.55 });
        this.cloche(t + 0.04, 1318, { gain: 0.1, duree: 0.5, envoi: 0.55 });
        break;
      case 'mat':                         /* la pastille : arpège qui se referme */
        this.toc(t, { freq: 116, gain: 0.95, contact: 0.75, coupure: 2000, duree: 0.15 });
        this.cloche(t + 0.05, 523.25, { gain: 0.14, duree: 1.1 });   // do
        this.cloche(t + 0.15, 659.25, { gain: 0.13, duree: 1.1 });   // mi
        this.cloche(t + 0.25, 783.99, { gain: 0.13, duree: 1.3 });   // sol
        this.cloche(t + 0.38, 1046.5, { gain: 0.115, duree: 1.9, envoi: 0.62 }); // do aigu
        this.cloche(t + 0.38, 130.81, { gain: 0.1, duree: 2.1, envoi: 0.4 });    // fondamentale
        break;
      case 'reussi':                      /* position retrouvée */
        this.cloche(t, 659.25, { gain: 0.135, duree: 0.5 });
        this.cloche(t + 0.085, 987.77, { gain: 0.13, duree: 0.8, envoi: 0.55 });
        break;
      case 'acquis':                      /* cinq fois de suite : elle sort */
        this.cloche(t, 880, { gain: 0.11, duree: 0.7 });
        this.cloche(t + 0.09, 1108.7, { gain: 0.1, duree: 0.8 });
        this.cloche(t + 0.18, 1318.5, { gain: 0.1, duree: 1.6, envoi: 0.62 });
        this.cloche(t + 0.18, 220, { gain: 0.075, duree: 1.6, envoi: 0.4 });
        break;
      case 'faux':                        /* sourd, sans reproche */
        this.sourd(t, { freq: 124, gain: 0.34, duree: 0.26 });
        this.sourd(t + 0.075, { freq: 98, gain: 0.26, duree: 0.34 });
        break;
      case 'bon':                         /* validation discrète en cours de route */
        this.cloche(t, 783.99, { gain: 0.115, duree: 0.38, envoi: 0.4 });
        break;
      case 'indice':                      /* on souffle la réponse */
        this.cloche(t, 587.33, { gain: 0.1, duree: 0.42, envoi: 0.45 });
        this.cloche(t + 0.07, 698.46, { gain: 0.085, duree: 0.5, envoi: 0.45 });
        break;
      case 'retour':                      /* navigation arrière dans le rejeu */
        this.toc(t, { freq: 132, gain: 0.4, contact: 0.35, duree: 0.07, coupure: 900, envoi: 0.08 });
        break;
      case 'fini':                        /* fin d'un passage */
        this.cloche(t, 523.25, { gain: 0.1, duree: 0.6 });
        this.cloche(t + 0.11, 659.25, { gain: 0.1, duree: 0.6 });
        this.cloche(t + 0.22, 783.99, { gain: 0.105, duree: 1.5, envoi: 0.6 });
        break;
      default:
        this.toc(t);
    }
  },

  /* Déduit le son à jouer depuis un coup chess.js. */
  pourCoup(m) {
    if (!m) return this.jouer('coup');
    const san = m.san || '';
    if (san.includes('#')) return this.jouer('mat');
    if (san.includes('+')) return this.jouer('echec');
    if (san.startsWith('O-O')) return this.jouer('roque');
    if (m.captured) return this.jouer('prise');
    return this.jouer('coup');
  },

  basculer() {
    this.actif = !this.actif;
    if (this.actif) { this.demarrer(); this.jouer('coup'); }
    if (typeof S !== 'undefined' && S.d && S.d.reglages) { S.d.reglages.son = this.actif; sauver(); }
    majBoutonSon();
    return this.actif;
  },
};

/* Le bouton est un dessin, pas du texte : on ne touche qu'aux attributs, la
   feuille de style s'occupe de rentrer les ondes et de tracer la croix.
   L'infobulle dit l'état ET ce que le clic fera — une icône seule laisse
   toujours planer le doute. */
function majBoutonSon() {
  const b = document.querySelector('#btn-son');
  if (!b) return;
  b.setAttribute('aria-pressed', String(Son.actif));
  b.setAttribute('aria-label', Son.actif ? tx('Son activé') : tx('Son coupé'));
  b.title = Son.actif ? tx('Son activé — cliquer pour couper') : tx('Son coupé — cliquer pour activer');
}

/* Le navigateur n'autorise l'audio qu'après une interaction : on prépare le
   contexte au premier clic, une seule fois. */
document.addEventListener('pointerdown', function amorce() {
  Son.demarrer();
  document.removeEventListener('pointerdown', amorce);
}, { once: true });

if (typeof module !== 'undefined' && module.exports) module.exports = Son;
