/* Pont Android — chargé avant tous les autres scripts, uniquement dans l'APK.

   Sur ordinateur, serveur.py lit et écrit donnees.json. Dans l'APK, c'est
   MainActivity qui joue ce rôle : il sert la lecture (GET /api/donnees)
   directement. Pour l'écriture, la WebView ne transmet pas le corps des
   requêtes POST qu'elle intercepte : on détourne donc ce seul appel vers
   PontAndroid.ecrire(), avec la même réponse que le serveur (200 ou 409).

   Deuxième détournement : l'export d'un répertoire en PGN passe par un lien
   <a download href="blob:…">, que la WebView ne sait pas télécharger. On
   récupère le texte et Android demande où enregistrer le fichier. */
(function () {
  'use strict';
  var pont = window.PontAndroid;
  if (!pont) return;

  var fetchOrigine = window.fetch.bind(window);
  window.fetch = function (entree, init) {
    try {
      var adresse = typeof entree === 'string' || entree instanceof URL ? String(entree) : entree.url;
      var url = new URL(adresse, location.href);
      var methode = String((init && init.method) || (entree && entree.method) || 'GET').toUpperCase();
      if (url.origin === location.origin && url.pathname === '/api/donnees' && methode === 'POST') {
        var base = url.searchParams.get('base');
        var rep = JSON.parse(pont.ecrire(String(init && init.body != null ? init.body : ''), base || ''));
        var corps = rep.rev ? { rev: rep.rev } : {};
        return Promise.resolve(new Response(JSON.stringify(corps), {
          status: rep.status, headers: { 'Content-Type': 'application/json' },
        }));
      }
    } catch (e) {
      return Promise.reject(e);
    }
    return fetchOrigine(entree, init);
  };

  function exporter(a) {
    var nom = a.getAttribute('download') || 'export.txt';
    fetchOrigine(a.href)
      .then(function (r) { return r.blob(); })
      .then(function (b) {
        return b.text().then(function (t) { pont.enregistrer(nom, b.type || 'application/octet-stream', t); });
      })
      .catch(function (e) { console.warn('export', e); });
  }
  function telechargeable(a) {
    return a && a.hasAttribute && a.hasAttribute('download') && /^(blob|data):/.test(a.href || '');
  }

  var clicOrigine = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    if (telechargeable(this)) { exporter(this); return; }
    return clicOrigine.call(this);
  };
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[download]') : null;
    if (telechargeable(a)) { ev.preventDefault(); exporter(a); }
  }, true);
})();
