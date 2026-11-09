#!/usr/bin/env python3
"""Traductions de l'interface : chaque phrase passe par tx('phrase en francais')
et i18n/en.js donne sa traduction (voir i18n/i18n.js).

  python3 outils/traductions.py verifier         liste les phrases sans traduction
                                                 (code de sortie 1 s'il en manque)
  python3 outils/traductions.py manquantes > a.tsv
                                                 les memes, en squelette a remplir :
                                                 phrase<TAB>traduction, une par ligne
  python3 outils/traductions.py ajouter a.tsv    ajoute (ou corrige) ces traductions
                                                 dans i18n/en.js

Les phrases sont lues dans le code (tx(...), G(...), nb(...), accord(...), y
compris dans les ${...} des gabarits) et dans index.html (textes et attributs
title, placeholder, aria-label, label, que i18n.js traduit au chargement).
Une phrase changee d'une virgule est une nouvelle phrase : sans traduction,
l'anglais retombe sur le francais. D'ou ce controle, lance par les tests.

ajouter ne retire jamais une traduction : certaines phrases sont construites
au vol et ne se lisent pas dans le code.
"""
import json, os, re, sys
from html.parser import HTMLParser

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(RACINE, 'entraineur', 'app')
EN = os.path.join(APP, 'i18n', 'en.js')
# donnees, pas du code d'interface : les lecons ont leurs propres fichiers par langue
HORS = {'lecons.js', 'lecons.en.js', 'reps-initiaux.js', 'lecons-langue.js'}


# ------------------------------------------------------------------ JS
def scanner(src):
    """Les litteraux '...', "..." et `...` d'un source JS, hors commentaires :
    [(debut, fin, apostrophe, contenu, ligne)]."""
    out, i, n, ligne = [], 0, len(src), 1
    while i < n:
        c = src[i]
        if c == '\n':
            ligne += 1; i += 1; continue
        if src.startswith('//', i):
            j = src.find('\n', i); i = n if j < 0 else j; continue
        if src.startswith('/*', i):
            j = src.find('*/', i + 2); ligne += src.count('\n', i, j + 2); i = j + 2; continue
        if c in '\'"`':
            q, j, l0 = c, i + 1, ligne
            while j < n:
                if src[j] == '\\':
                    j += 2; continue
                if src[j] == q:
                    break
                if q == '`' and src.startswith('${', j):
                    k, prof = j + 2, 1          # saute l'expression (accolades equilibrees)
                    while k < n and prof:
                        if src[k] == '{': prof += 1
                        elif src[k] == '}': prof -= 1
                        elif src[k] in '\'"`':
                            qq = src[k]; k += 1
                            while k < n and src[k] != qq:
                                k += 2 if src[k] == '\\' else 1
                        k += 1
                    j = k; continue
                if src[j] == '\n' and q != '`':
                    break
                j += 1
            ligne += src.count('\n', i, j + 1)
            out.append((i, j + 1, q, src[i + 1:j], l0))
            i = j + 1; continue
        i += 1
    return out


def expressions_gabarit(c):
    """Les expressions des ${...} d'un gabarit."""
    exprs, i = [], 0
    while i < len(c):
        if c.startswith('${', i):
            k, prof = i + 2, 1
            while prof:
                if c[k] == '{': prof += 1
                elif c[k] == '}': prof -= 1
                elif c[k] in '\'"`':
                    qq = c[k]; k += 1
                    while c[k] != qq:
                        k += 2 if c[k] == '\\' else 1
                k += 1
            exprs.append(c[i + 2:k - 1]); i = k
        else:
            i += 1
    return exprs


def valeur(q, c):
    """Le texte d'un litteral JS, echappements decodes."""
    if q == '`':
        return c.replace('\\`', '`').replace('\\$', '$')
    out, i = [], 0
    while i < len(c):
        if c[i] == '\\' and c[i + 1:i + 2] == 'u':
            out.append(chr(int(c[i + 2:i + 6], 16))); i += 6
        elif c[i] == '\\' and i + 1 < len(c):
            out.append({'n': '\n', 't': '\t', '\\': '\\', "'": "'", '"': '"'}.get(c[i + 1], c[i + 1])); i += 2
        else:
            out.append(c[i]); i += 1
    return ''.join(out)


def litteraux(src, l0=1):
    for a, b, q, c, l in scanner(src):
        yield src, a, q, c, l + l0 - 1
        if q == '`' and '${' in c:
            try:
                exprs = expressions_gabarit(c)
            except IndexError:
                continue
            for e in exprs:
                yield from litteraux(e, l + l0 - 1)


def cles_js(chemin):
    cles = {}
    nom = os.path.basename(chemin)
    for src, a, q, c, l in litteraux(open(chemin, encoding='utf-8').read()):
        avant = src[max(0, a - 300):a]
        k = None
        if re.search(r'\btx\(\s*$', avant) or re.search(r'\btx\([^()]*[?:]\s*$', avant):
            k = [valeur(q, c)]
        elif re.search(r'\b(G|nb)\([^()]*,\s*$', avant):
            k = [valeur(q, c)]
        elif re.search(r'\baccord\([^(),]*,\s*$', avant):
            v = valeur(q, c); k = [v, v + 'e']
        for x in k or []:
            cles.setdefault(x, []).append('%s:%d' % (nom, l))
    return cles


# ------------------------------------------------------------------ HTML
class LecteurHtml(HTMLParser):
    VIDES = ('br', 'meta', 'link', 'input', 'img', 'use', 'path', 'circle', 'hr')

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pile, self.cles, self.corps = [], {}, False

    def attributs(self, a):
        for k, v in a:
            if self.corps and k in ('title', 'placeholder', 'aria-label', 'label') and v:
                self.cles.setdefault(re.sub(r'\s+', ' ', v).strip(), ['index.html (' + k + ')'])

    def handle_starttag(self, t, a):
        if t == 'body': self.corps = True
        if t not in self.VIDES: self.pile.append(t)
        self.attributs(a)

    def handle_startendtag(self, t, a):
        self.attributs(a)

    def handle_endtag(self, t):
        while self.pile and self.pile[-1] != t: self.pile.pop()
        if self.pile: self.pile.pop()

    def handle_data(self, d):
        if not self.corps or (self.pile and self.pile[-1] in ('script', 'style')): return
        k = re.sub(r'\s+', ' ', d).strip()
        if k and re.search('[A-Za-zÀ-ÿ]', k): self.cles.setdefault(k, ['index.html'])


# ------------------------------------------------------------------ en.js
LIGNE = re.compile(r'^    ("(?:[^"\\]|\\.)*"): ("(?:[^"\\]|\\.)*"),?$')


def lire_en():
    """(avant, {phrase: traduction}, apres) : le texte autour du dictionnaire, et le dictionnaire."""
    texte = open(EN, encoding='utf-8').read()
    debut = texte.index('  dict: {\n') + len('  dict: {\n')
    fin = texte.index('\n  },\n});', debut)
    dico = {}
    for l in texte[debut:fin].split('\n'):
        if not l.strip():
            continue
        m = LIGNE.match(l)
        if not m:
            raise SystemExit('ligne illisible dans en.js : ' + l[:80])
        dico[json.loads(m.group(1))] = json.loads(m.group(2))
    return texte[:debut], dico, texte[fin:]


def ecrire_en(avant, dico, apres):
    corps = '\n'.join('    %s: %s,' % (json.dumps(k, ensure_ascii=False), json.dumps(v, ensure_ascii=False))
                      for k, v in dico.items())
    open(EN, 'w', encoding='utf-8').write(avant + corps + apres)


# ------------------------------------------------------------------ commandes
def phrases():
    toutes = {}
    for nom in sorted(os.listdir(APP)):
        if nom.endswith('.js') and nom not in HORS:
            for k, ou in cles_js(os.path.join(APP, nom)).items():
                toutes.setdefault(k, []).extend(ou)
    p = LecteurHtml()
    p.feed(open(os.path.join(APP, 'index.html'), encoding='utf-8').read())
    for k, ou in p.cles.items():
        toutes.setdefault(k, []).extend(ou)
    return toutes


def manquantes():
    _, dico, _ = lire_en()
    # une phrase identique dans les deux langues (« Score », « Quiz ») s'écrit
    # aussi, traduite par elle-même : ainsi rien n'est deviné
    return {k: ou for k, ou in phrases().items() if k not in dico and re.search('[A-Za-zÀ-ÿ]', k)}


def main(args):
    if not args or args[0] in ('-h', '--help'):
        print(__doc__); return 0
    if args[0] == 'verifier':
        m = manquantes()
        for k, ou in m.items():
            print('SANS TRADUCTION', json.dumps(k, ensure_ascii=False), ' '.join(ou[:3]))
        print(len(m), 'phrase(s) sans traduction anglaise')
        return 1 if m else 0
    if args[0] == 'manquantes':
        for k in manquantes():
            print(k.replace('\t', ' ').replace('\n', '\\n') + '\t')
        return 0
    if args[0] == 'ajouter' and len(args) == 2:
        avant, dico, apres = lire_en()
        n = 0
        for l in open(args[1], encoding='utf-8'):
            l = l.rstrip('\n')
            if not l or l.startswith('#') or '\t' not in l:
                continue
            k, t = l.split('\t', 1)
            k, t = k.replace('\\n', '\n'), t.replace('\\n', '\n')
            if not t.strip():
                continue
            if dico.get(k) != t:
                dico[k] = t; n += 1
        ecrire_en(avant, dico, apres)
        print(n, 'traduction(s) ajoutée(s) ou corrigée(s) ;', len(dico), 'en tout')
        return 0
    print(__doc__); return 2


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
