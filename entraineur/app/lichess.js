/* ==========================================================================
   Connexion Lichess (OAuth 2 PKCE, client public).

   Depuis peu l'explorateur d'ouvertures répond 401 sans jeton : c'est ce qui
   cassait l'onglet « Coups populaires ». L'application Android fait déjà ça,
   avec les mêmes points d'entrée ; on reprend le même schéma côté navigateur.

   Aucun secret client, aucune inscription préalable, aucun scope demandé :
   on n'obtient que le droit de lire ce qui est déjà public. Le jeton reste
   dans le stockage local de ce navigateur et n'est envoyé qu'à lichess.org.
   ========================================================================== */
'use strict';

const Lichess = {
  CLIENT: 'entraineur-ouvertures',
  AUTORISER: 'https://lichess.org/oauth',
  JETON: 'https://lichess.org/api/token',
  COMPTE: 'https://lichess.org/api/account',
  CLE: 'lichess_token',
  CLE_NOM: 'lichess_pseudo',

  /* --- petits utilitaires --- */
  _alea(n = 64) {
    const o = new Uint8Array(n);
    crypto.getRandomValues(o);
    return this._b64url(o.buffer);
  },
  _b64url(buf) {
    const b = new Uint8Array(buf);
    let s = '';
    for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },
  async _defi(verif) {
    const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verif));
    return this._b64url(d);
  },

  /* --- stockage ---
     Le jeton vit dans TES données (donnees.json), pas seulement dans le
     navigateur : le serveur local choisit un port libre à partir de 8787, et
     localStorage est attaché à l'origine — un changement de port te
     déconnectait. Le stockage navigateur reste en miroir, pour le cas où
     l'application tourne sans serveur. */
  _reglages() {
    if (typeof S === 'undefined' || !S.d) return null;
    S.d.reglages = S.d.reglages || {};
    return S.d.reglages;
  },
  token() {
    const r = this._reglages();
    if (r && r.lichessJeton) return r.lichessJeton;
    try { return localStorage.getItem(this.CLE); } catch (e) { return null; }
  },
  pseudo() {
    const r = this._reglages();
    if (r && r.lichessPseudo) return r.lichessPseudo;
    try { return localStorage.getItem(this.CLE_NOM); } catch (e) { return null; }
  },
  connecte() { return !!this.token(); },
  _poser(t, nom) {
    try {
      if (t) localStorage.setItem(this.CLE, t); else localStorage.removeItem(this.CLE);
      if (nom) localStorage.setItem(this.CLE_NOM, nom); else localStorage.removeItem(this.CLE_NOM);
    } catch (e) { }
    const r = this._reglages();
    if (r) {
      if (t) r.lichessJeton = t; else delete r.lichessJeton;
      if (nom) r.lichessPseudo = nom; else delete r.lichessPseudo;
      if (typeof sauver === 'function') { try { sauver(); } catch (e) { } }
    }
  },

  /* Le jeton a pu être posé avant le chargement des données (retour OAuth) :
     on recopie alors ce qu'a gardé le navigateur. */
  reprendre() {
    const r = this._reglages();
    if (!r) return;
    if (!r.lichessJeton) {
      let t = null, n = null;
      try { t = localStorage.getItem(this.CLE); n = localStorage.getItem(this.CLE_NOM); } catch (e) { }
      if (t) { r.lichessJeton = t; if (n) r.lichessPseudo = n; }
    } else {
      try { localStorage.setItem(this.CLE, r.lichessJeton); } catch (e) { }
    }
  },

  /* L'URL de retour doit être exactement la même à l'aller et au retour. */
  redirection() { return location.origin + location.pathname; },

  /* Pourquoi la connexion est impossible, le cas échéant. */
  obstacle() {
    if (location.protocol === 'file:')
      return tx('L’application est ouverte comme un simple fichier. Lance-la avec le lanceur de ton système (voir le README ; elle passera par une adresse locale) : la connexion Lichess a besoin d’une vraie adresse pour te ramener ici.');
    if (!window.crypto || !crypto.subtle)
      return tx('Ce navigateur ne fournit pas les fonctions de chiffrement nécessaires (WebCrypto).');
    return null;
  },

  /* --- aller --- */
  async connecter() {
    const o = this.obstacle();
    if (o) throw new Error(o);
    const verif = this._alea(64);
    const etat = this._alea(16);
    try {
      sessionStorage.setItem('lichess_verif', verif);
      sessionStorage.setItem('lichess_etat', etat);
    } catch (e) { throw new Error(tx('Stockage de session indisponible : la connexion ne peut pas aboutir.')); }
    const u = new URL(this.AUTORISER);
    u.searchParams.set('response_type', 'code');
    u.searchParams.set('client_id', this.CLIENT);
    u.searchParams.set('redirect_uri', this.redirection());
    u.searchParams.set('code_challenge_method', 'S256');
    u.searchParams.set('code_challenge', await this._defi(verif));
    u.searchParams.set('state', etat);
    /* pas de `scope` : lecture publique seulement */
    location.assign(u.toString());
  },

  /* --- retour : à appeler au chargement de la page --- */
  async finirConnexion() {
    const p = new URLSearchParams(location.search);
    const code = p.get('code'), etat = p.get('state'), err = p.get('error');
    if (!code && !err) return null;
    const propre = () => history.replaceState({}, '', this.redirection());
    if (err) { propre(); return { ok: false, message: tx('Lichess a refusé la connexion (') + err + ').' }; }
    let verif = null, attendu = null;
    try {
      verif = sessionStorage.getItem('lichess_verif');
      attendu = sessionStorage.getItem('lichess_etat');
      sessionStorage.removeItem('lichess_verif');
      sessionStorage.removeItem('lichess_etat');
    } catch (e) { }
    propre();
    if (!verif) return { ok: false, message: tx('Demande de connexion introuvable : recommence depuis l’éditeur.') };
    if (attendu && etat !== attendu) return { ok: false, message: tx('Réponse inattendue (état non concordant). Connexion annulée.') };
    let j;
    try {
      const r = await fetch(this.JETON, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code, code_verifier: verif,
          redirect_uri: this.redirection(),
          client_id: this.CLIENT,
        }),
      });
      if (!r.ok) return { ok: false, message: tx('Échange du code refusé par Lichess (HTTP ') + r.status + ').' };
      j = await r.json();
    } catch (e) {
      return { ok: false, message: tx('Impossible de joindre Lichess pour terminer la connexion.') };
    }
    if (!j || !j.access_token) return { ok: false, message: tx('Lichess n’a pas renvoyé de jeton.') };
    this._poser(j.access_token, null);
    const nom = await this.rafraichirPseudo();
    return { ok: true, pseudo: nom };
  },

  async rafraichirPseudo() {
    const t = this.token();
    if (!t) return null;
    try {
      const r = await fetch(this.COMPTE, { headers: { Authorization: 'Bearer ' + t } });
      if (r.status === 401) { this._poser(null, null); return null; }
      if (!r.ok) return this.pseudo();
      const j = await r.json();
      if (j && j.username) { this._poser(t, j.username); return j.username; }
    } catch (e) { }
    return this.pseudo();
  },

  /* --- départ --- */
  async deconnecter() {
    const t = this.token();
    this._poser(null, null);
    if (!t) return;
    try { await fetch(this.JETON, { method: 'DELETE', headers: { Authorization: 'Bearer ' + t } }); } catch (e) { }
  },

  /* Le jeton a été refusé : on l'oublie, il ne sert plus à rien. */
  invalider() { this._poser(null, null); },
};

if (typeof module !== 'undefined' && module.exports) module.exports = Lichess;
