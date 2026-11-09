// @ts-check
/* Fusion à trois voies de deux versions des données (synchronisation GitHub,
   sync.js). Fonctions pures, sans DOM ni réseau : elles se testent sous Node
   (tests/fusion.test.js).

   base : la dernière version commune ; local : celle de cet appareil ;
   distant : celle de GitHub. Ce qui n'a changé que d'un côté est gardé ; une
   suppression d'un côté l'emporte sur l'absence de changement de l'autre ;
   quand les deux côtés ont changé la même chose, des règles par collection
   (ATOMES) gardent la version « la plus avancée ». */
'use strict';

const Fusion = {
  /* Égalité de valeur, champ par champ, qui s'arrête au premier écart. Avant :
     JSON.stringify des deux côtés, à chaque niveau de la fusion (six
     sérialisations par nœud, sur un document de plus de 2 Mo), et deux objets
     égaux construits dans un ordre de clés différent passaient pour changés.
     Comme JSON, un champ qui vaut undefined compte comme absent. */
  egal(a, b) {
    if (a === b) return true;
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      return typeof a === 'number' && typeof b === 'number' && Number.isNaN(a) && Number.isNaN(b);
    }
    const ta = Array.isArray(a), tb = Array.isArray(b);
    if (ta !== tb) return false;
    if (ta) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) if (!this.egal(a[i] === undefined ? null : a[i], b[i] === undefined ? null : b[i])) return false;
      return true;
    }
    const ka = Object.keys(a).filter((k) => a[k] !== undefined);
    const kb = Object.keys(b).filter((k) => b[k] !== undefined);
    if (ka.length !== kb.length) return false;
    for (const k of ka) if (!Object.prototype.hasOwnProperty.call(b, k) || !this.egal(a[k], b[k])) return false;
    return true;
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
  /**
   * @param {any} base   valeurs JSON quelconques
   * @param {any} local
   * @param {any} distant
   * @param {string[]} [chemin] où l'on est dans le document (règles par collection)
   * @param {'local'|'distant'} [pref] qui l'emporte sur une valeur simple changée des deux côtés
   * @returns {any}
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

if (typeof module === 'object' && module.exports) module.exports = { Fusion };
