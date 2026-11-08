/* ==========================================================================
   Synchronisation entre appareils (ordinateur, téléphone) par un dépôt GitHub privé.

   Le dépôt ne contient qu'un fichier, donnees.json. Chaque appareil garde ses
   données chez lui (serveur de l'ordinateur, stockage de l'appli Android) et les
   échange avec ce fichier :
     - à l'ouverture, avant le premier affichage ;
     - 20 secondes après une modification enregistrée ;
     - quand l'app passe en arrière-plan, et quand on y revient.

   Fusion. Les deux appareils peuvent avoir travaillé chacun de leur côté.
   On compare trois versions : la dernière synchronisée (la « base »,
   retrouvée sur GitHub par son identifiant), la locale et la distante. Ce
   qu'un seul côté a changé est repris tel quel ; quand les deux ont changé
   la même collection, on fusionne élément par élément (une partie, un
   exercice, un quiz, un répertoire). Un même exercice révisé des deux côtés
   n'est pas mélangé : on garde la version la plus avancée.

   Les réglages propres à l'appareil (le jeton GitHub, le son) ne quittent
   jamais l'appareil. Le dépôt doit être privé : il contient tes parties et
   ton jeton Lichess. Un dépôt public est refusé.
   ========================================================================== */
'use strict';

const Sync = {
  FICHIER: 'donnees.json',
  LOCAUX: ['github', 'son'],          // réglages propres à l'appareil, jamais envoyés
  DELAI: 20000,                       // après une modification
  DELAI_MAX: 120000,                  // une synchro au moins toutes les 2 min pendant une série de modifications
  DEMARRAGE_MAX: 10000,               // l'ouverture n'attend pas GitHub plus longtemps
  etat: 'off', message: '', heure: null,
  minuteur: null, premierChangement: 0, enCours: null, relance: false, pret: false,

  /* ------------------------------------------------------------ réglages */
  conf() {
    const g = S.d && S.d.reglages && S.d.reglages.github;
    return g && g.depot && g.jeton ? g : null;
  },
  appareil() { return /Android|iPhone|iPad/i.test(navigator.userAgent) ? tx('téléphone') : tx('ordinateur'); },
  depotValide(d) { return /^[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/.test(d || ''); },

  /* ------------------------------------------------------------ GitHub */
  async api(chemin, opts) {
    opts = opts || {};
    const c = opts.conf || this.conf();
    const h = { Authorization: 'Bearer ' + c.jeton, Accept: opts.accept || 'application/vnd.github+json' };
    if (opts.corps) h['Content-Type'] = 'application/json';
    let r;
    try {
      r = await fetch('https://api.github.com/repos/' + c.depot + chemin, {
        method: opts.methode || 'GET', cache: 'no-store', headers: h,
        body: opts.corps ? JSON.stringify(opts.corps) : undefined,
      });
    } catch (e) {
      throw Object.assign(new Error(tx('GitHub injoignable : pas de réseau ?')), { horsLigne: true });
    }
    return r;
  },
  async erreurHttp(r, quoi) {
    let msg = '';
    try { msg = (await r.json()).message || ''; } catch (e) { }
    if (r.status === 401) return new Error(tx('jeton refusé : expiré ou mal copié'));
    if (r.status === 403 && /rate limit/i.test(msg)) return new Error(tx('trop de requêtes, nouvel essai plus tard'));
    if (r.status === 403) return new Error(tx('le jeton n’a pas le droit d’écrire (Contents : Read and write)'));
    if (r.status === 404) return new Error(tx('dépôt introuvable, ou le jeton n’y a pas accès'));
    return new Error(tx('{0} : erreur {1}', [quoi, r.status]) + (msg ? ' (' + msg + ')' : ''));
  },
  /** Vérifie le dépôt avant de l'utiliser : il doit exister et être privé. */
  async verifierDepot(conf) {
    const r = await this.api('', { conf });
    if (!r.ok) throw await this.erreurHttp(r, tx('dépôt'));
    const j = await r.json();
    if (!j.private) throw new Error(tx('ce dépôt est public : tes parties et ton jeton Lichess y seraient visibles de tous. Passe-le en privé (Settings → Change visibility) ou crée un dépôt privé.'));
    return j;
  },
  /** Identifiant (sha) de donnees.json sur GitHub, ou null s'il n'existe pas encore. */
  async shaDistant() {
    const r = await this.api('/contents/' + this.FICHIER, { accept: 'application/vnd.github.object+json' });
    if (r.status === 404) return null;
    if (!r.ok) throw await this.erreurHttp(r, 'lecture');
    const j = await r.json();
    if (j.type !== 'file') throw new Error(this.FICHIER + tx(' n’est pas un fichier dans le dépôt'));
    return j.sha;
  },
  /** Une version précise du fichier, par son sha (fonctionne aussi pour les anciennes). */
  async lireVersion(sha) {
    const r = await this.api('/git/blobs/' + sha, { accept: 'application/vnd.github.raw+json' });
    if (!r.ok) throw await this.erreurHttp(r, 'lecture');
    return JSON.parse(await r.text());
  },
  /** Écrit le fichier. Renvoie le nouveau sha, ou null si GitHub a changé entre-temps. */
  async ecrireVersion(texte, shaParent) {
    const corps = {
      message: tx('Synchro depuis le {0} · {1}', [this.appareil(), new Date().toLocaleString(I18N.locale)]),
      content: Sync.b64(texte),
    };
    if (shaParent) corps.sha = shaParent;
    const r = await this.api('/contents/' + this.FICHIER, { methode: 'PUT', corps });
    if (r.status === 409) return null;
    if (r.status === 422) {
      const j = await r.clone().json().catch(() => ({}));
      if (/sha/i.test(j.message || '')) return null;      // « sha wasn't supplied » / ne correspond plus
    }
    if (!r.ok) throw await this.erreurHttp(r, tx('écriture'));
    return (await r.json()).content.sha;
  },

  /* ------------------------------------------------------------ documents */
  /** Les données à synchroniser : tout, sauf les réglages propres à l'appareil. */
  docLocal() {
    const d = JSON.parse(JSON.stringify(S.d));
    if (d.reglages) for (const k of this.LOCAUX) delete d.reglages[k];
    return d;
  },
  texte(doc) { return JSON.stringify(doc, null, 1) + '\n'; },
  b64(texte) {
    const o = new TextEncoder().encode(texte);
    let s = '';
    for (let i = 0; i < o.length; i += 0x8000) s += String.fromCharCode.apply(null, o.subarray(i, i + 0x8000));
    return btoa(s);
  },
  /** sha d'un contenu, calculé comme Git le fait : on sait sans rien télécharger si GitHub a la même version. */
  async shaGit(texte) {
    const o = new TextEncoder().encode(texte);
    const t = new TextEncoder().encode('blob ' + o.length + '\0');
    const tout = new Uint8Array(t.length + o.length);
    tout.set(t); tout.set(o, t.length);
    const h = new Uint8Array(await crypto.subtle.digest('SHA-1', tout));
    return Array.from(h, x => x.toString(16).padStart(2, '0')).join('');
  },
  /** Remplace les données de la page par `doc`, en gardant les réglages locaux. */
  remplacer(doc) {
    const locaux = {};
    for (const k of this.LOCAUX) if (S.d.reglages && k in S.d.reglages) locaux[k] = S.d.reglages[k];
    for (const k of Object.keys(S.d)) if (!(k in doc)) delete S.d[k];
    Object.assign(S.d, doc);
    S.d.reglages = Object.assign(doc.reglages || {}, locaux);
  },
  noterBase(sha) {
    const g = S.d.reglages.github;
    this.heure = new Date();
    if (g.base === sha) return;          // inchangé : pas d'écriture, sinon la sauvegarde relancerait une synchro
    g.base = sha;
    this.ignorerProchaine = true;        // cette sauvegarde-là ne touche que le réglage local
    sauver();
  },

  /* ------------------------------------------------------------ synchro */
  synchroniser(raison) {
    if (this.enCours) { this.relance = true; return this.enCours; }
    clearTimeout(this.minuteur); this.minuteur = null; this.premierChangement = 0;
    this.enCours = this._synchroniser(raison).finally(() => {
      this.enCours = null;
      if (this.relance) { this.relance = false; this.planifier(1000); }
    });
    return this.enCours;
  },
  async _synchroniser(raison) {
    const c = this.conf();
    if (!c) return this.afficher('off');
    /* Sans lecture des données locales, S.d est vide : surtout ne rien envoyer. */
    if (typeof SAUVE !== 'undefined' && SAUVE.bloque === 'lecture')
      return this.afficher('erreur', tx('données locales illisibles : synchro suspendue'));
    this.afficher('encours');
    try {
      for (let essai = 0; essai < 4; essai++) {
        const distant = await this.shaDistant();
        const local = this.docLocal();
        let texte = this.texte(local);
        if (distant && distant === await this.shaGit(texte)) { this.noterBase(distant); return this.afficher('ok'); }
        if (distant && distant !== c.base) {
          /* L'autre appareil a écrit depuis notre dernière synchro : fusion. */
          const docDistant = await this.lireVersion(distant);
          let docBase = {};
          if (c.base) { try { docBase = await this.lireVersion(c.base); } catch (e) { docBase = {}; } }
          /* Première synchro de cet appareil (pas de base) : c'est lui qui rejoint
             des données existantes, donc en cas de désaccord sur un réglage
             (pseudo, niveau…), la version de GitHub l'emporte. */
          const fusion = Fusion.fusionner(docBase, local, docDistant, [], c.base ? 'local' : 'distant');
          this.appliquer(fusion, local);
          texte = this.texte(fusion);
          if (await this.shaGit(texte) === distant) { this.noterBase(distant); return this.afficher('ok'); }
        }
        const nouveau = await this.ecrireVersion(texte, distant);
        if (nouveau) { this.noterBase(nouveau); return this.afficher('ok'); }
        /* conflit : GitHub a changé entre la lecture et l'écriture, on recommence */
      }
      throw new Error(tx('le fichier change sans arrêt sur GitHub, nouvel essai plus tard'));
    } catch (e) {
      console.warn('synchro', raison, e);
      this.afficher(e.horsLigne ? 'hors-ligne' : 'erreur', e.message);
      if (e.horsLigne) this.planifier(60000);
    }
  },
  /** Reporte la fusion dans la page, sans perdre ce qui a changé ici pendant la synchro. */
  appliquer(fusion, instantane) {
    const actuel = this.docLocal();
    const final = Fusion.fusionner(instantane, actuel, fusion);
    if (Fusion.egal(final, actuel)) return false;
    this.remplacer(final);
    sauver();
    if (this.pret) this.proposerRechargement();
    return true;
  },
  /** Après chaque écriture locale : synchro 20 s après la dernière modification. */
  planifier(delai) {
    if (!this.conf()) return;
    /* La sauvegarde qui suit une synchro ne contient en général que la base :
       on vérifiera quand même (une lecture, rien d'autre si tout est déjà
       là-bas), mais sans annoncer « à envoyer ». */
    const discret = this.ignorerProchaine;
    this.ignorerProchaine = false;
    const maintenant = Date.now();
    if (!this.premierChangement) this.premierChangement = maintenant;
    if (!discret && (this.etat === 'ok' || this.etat === 'off')) this.afficher('attente');
    const reste = Math.max(0, this.premierChangement + this.DELAI_MAX - maintenant);
    clearTimeout(this.minuteur);
    this.minuteur = setTimeout(() => this.synchroniser('modification'),
      Math.min(delai === undefined ? this.DELAI : delai, reste));
  },
  /** À l'ouverture : on récupère le travail de l'autre appareil avant d'afficher quoi que ce soit. */
  async auDemarrage() {
    this.brancher();
    if (!this.conf()) { this.afficher('off'); this.pret = true; return; }
    await Promise.race([this.synchroniser('ouverture'),
      new Promise(r => setTimeout(r, this.DEMARRAGE_MAX))]);
    this.pret = true;                    // désormais, une fusion se signale par un bandeau
  },

  /* ------------------------------------------------------------ interface */
  brancher() {
    if (this._branche) return;
    this._branche = true;
    const b = document.getElementById('btn-sync');
    if (b) b.addEventListener('click', () => this.ouvrir());
    const $id = (i) => document.getElementById(i);
    if ($id('sync-enregistrer')) $id('sync-enregistrer').addEventListener('click', () => this.enregistrerReglages());
    if ($id('sync-maintenant')) $id('sync-maintenant').addEventListener('click', async () => {
      await this.synchroniser('bouton'); this.majFenetre();
    });
    if ($id('sync-oublier')) $id('sync-oublier').addEventListener('click', () => this.oublier());
    document.addEventListener('visibilitychange', () => {
      if (!this.conf()) return;
      /* en arrière-plan : on envoie ; au retour : on récupère ce que l'autre appareil a fait */
      this.synchroniser(document.visibilityState === 'hidden' ? 'arriere-plan' : 'retour');
    });
    window.addEventListener('online', () => { if (this.conf()) this.synchroniser('reseau'); });
  },
  afficher(etat, message) {
    this.etat = etat;
    this.message = message || '';
    const b = document.getElementById('btn-sync');
    if (b) {
      const txt = { off: tx('Synchro'), ok: tx('à jour'), attente: tx('à envoyer'), encours: tx('synchro…'),
        'hors-ligne': tx('hors ligne'), erreur: tx('erreur synchro') }[etat] || etat;
      b.dataset.etat = etat;
      b.querySelector('.sync-txt').textContent = txt;
      b.title = this.resume();
    }
    this.majFenetre();
  },
  resume() {
    const h = this.heure ? this.heure.toLocaleTimeString(I18N.locale, { hour: '2-digit', minute: '2-digit' }) : null;
    switch (this.etat) {
      case 'off': return tx('Synchronisation GitHub non configurée sur cet appareil.');
      case 'ok': return tx('Données à jour sur GitHub') + (h ? tx(' (dernière synchro à {0}).', [h]) : '.');
      case 'attente': return tx('Des modifications partiront sur GitHub dans quelques secondes.');
      case 'encours': return tx('Synchronisation en cours…');
      case 'hors-ligne': return tx('Pas de réseau : tes modifications sont gardées ici et partiront au retour du réseau.');
      default: return tx('Synchronisation impossible : ') + this.message + '.';
    }
  },
  ouvrir() {
    const d = document.getElementById('dlg-sync');
    if (!d) return;
    const g = (S.d.reglages && S.d.reglages.github) || {};
    document.getElementById('sync-depot').value = g.depot || '';
    const j = document.getElementById('sync-jeton');
    j.value = '';
    j.placeholder = g.jeton ? tx('déjà enregistré') : 'github_pat_…';
    this.majFenetre();
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  },
  majFenetre() {
    const e = document.getElementById('sync-etat');
    if (!e) return;
    e.textContent = this.resume();
    e.dataset.etat = this.etat;
    const conf = !!this.conf();
    document.getElementById('sync-maintenant').hidden = !conf;
    document.getElementById('sync-oublier').hidden = !conf;
  },
  async enregistrerReglages() {
    const depot = document.getElementById('sync-depot').value.trim().replace(/^https:\/\/github\.com\//, '').replace(/\.git$|\/$/g, '');
    const g = (S.d.reglages.github = S.d.reglages.github || {});
    const jeton = document.getElementById('sync-jeton').value.trim() || g.jeton;
    if (!this.depotValide(depot)) return this.afficher('erreur', tx('écris le dépôt sous la forme pseudo/nom-du-depot'));
    if (!jeton) return this.afficher('erreur', tx('colle le jeton d’accès'));
    const conf = { depot, jeton };
    this.afficher('encours');
    try {
      await this.verifierDepot(conf);
    } catch (e) {
      return this.afficher(e.horsLigne ? 'hors-ligne' : 'erreur', e.message);
    }
    /* changement de dépôt : l'ancienne base n'a plus de sens */
    if (g.depot !== depot) delete g.base;
    g.depot = depot; g.jeton = jeton;
    sauver();
    document.getElementById('sync-jeton').value = '';
    await this.synchroniser('configuration');
    this.majFenetre();
  },
  oublier() {
    delete S.d.reglages.github;
    sauver();
    clearTimeout(this.minuteur);
    this.afficher('off');
  },
  proposerRechargement() {
    if (document.getElementById('bandeau-sync')) return;
    const b = el('div', { id: 'bandeau-sync', class: 'bandeau-sync', role: 'status' },
      el('span', {}, tx('Le travail fait sur ton autre appareil vient d’être ajouté à tes données.')),
      el('button', { class: 'b', onclick: async () => { await ecrireDonnees(); location.reload(); } }, tx('Afficher')),
      el('button', { class: 'b g', onclick: () => b.remove() }, tx('Plus tard')));
    document.body.append(b);
  },
};

/* ==========================================================================
   Fusion à trois voies de deux versions des données.
   ========================================================================== */
const Fusion = {
  egal(a, b) {
    if (a === b) return true;
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false;
    return JSON.stringify(a) === JSON.stringify(b);
  },
  objet(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); },
  /* Éléments qu'on ne mélange jamais champ par champ : quand les deux côtés
     les ont changés, on garde le plus avancé (critères comparés dans l'ordre,
     égalité → la version de cet appareil). */
  ATOMES: {
    exos: (x) => [(x.reussites || 0) + (x.echecs || 0), x.dernier || x.vuLe || '', x.vues || 0],
    quizOuv: (x) => [(x.ok || 0) + (x.ko || 0), x.dernier || ''],
    parties: (x) => [x.moteur ? 1 : 0, JSON.stringify(x).length],
    partiesBot: (x) => [x.moteur ? 1 : 0, JSON.stringify(x).length],
    botPositions: (x) => [Array.isArray(x) ? x.length : 0],
    finales: (x) => [x.essais || 0, x.dernier || ''],
    jours: (x) => [x.parties || 0, x.coups || 0],
    cartes: (x) => [JSON.stringify(x).length],
  },
  /* fiche de révision d'une position dans un répertoire */
  srs: (x) => [x && x.reps || 0, x && x.du || ''],
  comparer(a, b) {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (a[i] === b[i]) continue;
      if (a[i] === undefined) return -1;
      if (b[i] === undefined) return 1;
      return a[i] > b[i] ? 1 : -1;
    }
    return 0;
  },
  /**
   * base : la dernière version commune ; local : celle de cet appareil ;
   * distant : celle de GitHub. `pref` décide les conflits sur une valeur
   * simple ('local' par défaut).
   */
  fusionner(base, local, distant, chemin, pref) {
    chemin = chemin || [];
    pref = pref || 'local';
    if (this.egal(local, distant)) return distant;
    if (this.egal(base, local)) return distant;
    if (this.egal(base, distant)) return local;
    /* les deux côtés ont changé cette valeur */
    const n = chemin.length;
    const critere = n === 2 ? this.ATOMES[chemin[0]]
      : (n === 4 && chemin[0] === 'reps' && chemin[2] === 'srs') ? this.srs : null;
    if (critere && this.objet(local) && this.objet(distant))
      return this.comparer(critere(local), critere(distant)) >= 0 ? local : distant;
    if (n === 1 && /^version/.test(chemin[0]) && typeof local === 'number' && typeof distant === 'number')
      return Math.max(local, distant);
    /* un répertoire modifié des deux côtés : ses coups viennent du plus récemment édité */
    if (n === 2 && chemin[0] === 'reps' && this.objet(local) && this.objet(distant))
      pref = (distant.maj || 0) > (local.maj || 0) ? 'distant' : 'local';
    if (this.objet(local) && this.objet(distant)) {
      const b = this.objet(base) ? base : {};
      const res = {};
      const cles = Object.keys(local).concat(Object.keys(distant).filter(k => !(k in local)));
      for (const k of cles) {
        const enL = k in local, enD = k in distant, enB = k in b;
        if (enL && enD) res[k] = this.fusionner(b[k], local[k], distant[k], chemin.concat(k), pref);
        else if (enL) {
          if (enB && this.egal(b[k], local[k])) continue;   // supprimé là-bas, inchangé ici
          res[k] = local[k];                                // ajouté ou modifié ici
        } else {
          if (enB && this.egal(b[k], distant[k])) continue; // supprimé ici, inchangé là-bas
          res[k] = distant[k];
        }
      }
      return res;
    }
    if (Array.isArray(local) && Array.isArray(distant)
      && local.concat(distant).every(x => x === null || typeof x !== 'object')) {
      /* liste de valeurs simples : ajouts des deux côtés, retraits des deux côtés */
      const B = new Set(Array.isArray(base) ? base : []), L = new Set(local), D = new Set(distant);
      return local.filter(x => D.has(x) || !B.has(x)).concat(distant.filter(x => !L.has(x) && !B.has(x)));
    }
    return pref === 'distant' ? distant : local;
  },
};
