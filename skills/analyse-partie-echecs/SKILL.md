---
name: analyse-partie-echecs
description: Analyser une ou plusieurs parties d'échecs (chess.com, Lichess ou PGN collé) avec Stockfish et en faire un rapport HTML avec échiquiers, où chaque affirmation est vérifiée. À utiliser quand on demande d'analyser une partie, « ma dernière partie », une séance de jeu ou ses erreurs récurrentes.
---

# Analyser des parties d'échecs

Ce skill transforme une ou plusieurs parties en **rapport HTML avec des échiquiers
visibles** : les moments clés, des séquences qui avancent coup par coup, et pour chaque
erreur le coup qu'il fallait jouer. Les outils sont dans `scripts/` (Python,
`python-chess` et Stockfish).

Deux fonctions. Identifier laquelle est demandée avant de commencer :

| Demande | Fonction | Sections |
|---|---|---|
| « ma dernière partie », « la partie contre X » | **A. Une partie** | 1 à 8 |
| « mes parties d'aujourd'hui », « ma séance » | **B. Plusieurs parties** | 1 à 9 |

Réponds dans la langue de l'utilisateur. Les gabarits HTML sont en français ; les
textes du rapport sont ceux que tu écris.

## 0. Le profil du joueur

Si un fichier `profil.md` existe à côté de ce SKILL.md, et qu'il est rempli, le lire
d'abord : pseudo, site, niveau, ton souhaité, habitudes déjà observées.
`profil-exemple.md` montre le format.

**S'il manque, ou s'il est encore l'exemple** (pseudo `mon_pseudo`, lignes
« Exemple : … »), le remplir avec l'utilisateur avant d'analyser, au lieu de lui demander
de le faire. Poser les questions en une fois, dans sa langue, avec l'outil de questions
quand il existe (choix proposés et réponse libre), sinon dans le message :

1. Son pseudo, et le site : chess.com, Lichess ou les deux.
2. Son niveau : l'Elo et la cadence habituelle (sinon, le lire dans ses parties).
3. Le ton : tutoiement ou vouvoiement, direct ou plus doux.
4. Ce qu'il veut dans les rapports : toutes les erreurs ou les cinq moments clés,
   séquences animées ou diagrammes simples.
5. Ce qu'il pense rater le plus souvent (facultatif) : ce sera la première hypothèse à
   vérifier, pas une conclusion.

Écrire ensuite `profil.md` à côté de ce SKILL.md, au format de `profil-exemple.md`,
avec ses réponses et sans les lignes d'exemple. Laisser « Habitudes déjà observées » vide
tant qu'aucune analyse ne l'a montré, puis le compléter à la fin de chaque analyse avec
ce qui a été vérifié sur ses parties. Si l'utilisateur ne veut pas répondre, analyser
quand même : demander seulement le pseudo et le site, et déduire le niveau de l'Elo des
parties.

Si le skill ne peut pas écrire de fichier (Claude sur le web), donner le contenu de
`profil.md` à la fin pour que l'utilisateur l'enregistre.

Un profil est un **diagnostic à confirmer ou à infirmer** à chaque partie, pas un texte
à recopier.

---

# A. Analyser une partie

## 1. Outils

- Python 3 avec `python-chess` (`pip install chess`).
- Stockfish : la variable `STOCKFISH`, sinon `stockfish` dans le PATH, sinon
  `/usr/games/stockfish`. Sous Linux : `apt install stockfish`. Sous macOS :
  `brew install stockfish`.
- `scripts/gabarit.html` doit rester à côté de `scripts/rapport_partie.py`.

## 2. Trouver la partie

- **chess.com** : `https://api.chess.com/pub/player/{pseudo}/games/archives`, puis
  l'archive du mois `…/games/AAAA/MM` (JSON ; chaque partie a un champ `pgn`). Le
  pseudo s'écrit en minuscules dans l'URL. Les parties contre les bots « Coach » et par
  correspondance ne sont en général pas celles qu'on veut.
- **Lichess** : `https://lichess.org/api/games/user/{pseudo}?max=10&clocks=true`
  (PGN, la plus récente d'abord).
- **Pas de réseau** dans ton environnement, ou API refusée : demander à l'utilisateur
  de coller le PGN. Sur chess.com, c'est Partager puis PGN. Sur Lichess, c'est
  Partager et exporter.

Identifier la bonne partie avec l'heure, l'adversaire et le résultat. En cas de doute,
demander.

**L'Elo inscrit dans le PGN chess.com peut être celui d'après la partie.** Ne pas
l'annoncer comme le classement de départ sans vérification.

## 3. Récupérer le PGN mot pour mot

Garder le PGN **verbatim, commentaires `{[%clk …]}` compris**. Ne jamais le retaper à la
main : le temps passé par coup est un élément de diagnostic central (« 40 s sur ce coup,
ce n'est donc pas de la précipitation »).

Vérifier après écriture :

```python
import chess.pgn
g = chess.pgn.read_game(open('partie.pgn')); b = g.board(); n = clk = 0
for nd in g.mainline():
    b.push(nd.move); n += 1
    if nd.clock() is not None: clk += 1
print(n, clk, b.is_checkmate(), b.fen())
```

Le nombre de pendules doit égaler le nombre de coups, et la position finale doit
correspondre à celle de l'en-tête (`CurrentPosition` sur chess.com ; comparer
`board_fen()`, la case de prise en passant pouvant différer).

## 4. Analyser

```
python3 scripts/analyser.py partie.pgn <pseudo> analyse.json 22
```

Compte environ 3 minutes pour 35 coups à profondeur 22 sur deux cœurs. Si ta commande
est limitée en durée, lance-la en arrière-plan (`nohup … &`) et surveille la sortie.

La sortie donne, pour chaque coup du joueur :

- `eval_before` et `eval_after`, de son point de vue ;
- `loss`, `best_san` et `best_line` ;
- `punish_line`, la suite qui punit le coup joué ;
- `hang_before` et `opp_hang_before`, le matériel en l'air des deux côtés ;
- `clk`, la pendule, et `spent`, le temps passé sur le coup.

Les mats sont codés `10000 − n` (mat en n coups).

Précision (formule de Lichess) :

```python
import math
P = lambda cp: 100/(1+math.exp(-0.00368208*max(-1500, min(1500, cp))))
def precision(moves):
    w = []
    for m in moves: w += [P(m["eval_before"]), P(m["eval_after"])]
    fen = max(2, min(8, round((len(w)+1)/10)))
    sd = lambda a: (sum((x-sum(a)/len(a))**2 for x in a)/len(a))**.5
    notes, poids = [], []
    for k, m in enumerate(moves):
        i = 2*k; chute = max(0, w[i]-w[i+1])
        notes.append(max(1, min(100, 103.1668*math.exp(-0.04354*chute)-3.1669)))
        poids.append(max(.5, min(12, sd(w[max(0, i+1-fen):i+1]))))
    pond = sum(n*p for n, p in zip(notes, poids))/sum(poids)
    harm = len(notes)/sum(1/n for n in notes)
    return (pond+harm)/2
```

Seuils : **gaffe** à partir de 300 centipions perdus, **erreur** de 100 à 299.

## 5. Vérifier AVANT d'écrire — non négociable

Chaque affirmation chiffrée ou tactique du rapport se vérifie avec `python-chess` ou
Stockfish. Les erreurs typiques d'un commentaire écrit « à l'œil » :

- annoncer « il a raté le mat » alors que c'est un mat **qu'il a porté** ;
- désigner comme l'erreur un coup que le moteur trouve bon ;
- se tromper dans un décompte d'attaquants et de défenseurs ;
- affirmer « le seul coup gagnant » sans l'avoir comparé aux autres ;
- dire « le roi ne peut pas bouger » alors qu'il a des cases ;
- appeler « pion passé » un pion qui ne l'est pas ;
- conseiller une ligne sans vérifier la position **après** cette ligne.

À vérifier systématiquement :

- **Légalité de chaque séquence** : rejouer les coups depuis la FEN de départ, et
  confirmer `is_checkmate()` quand on annonce un mat.
- **Attaquants et défenseurs** : `board.attackers(couleur, case)`, jamais à l'œil.
  Pour les cases de fuite d'un roi, lister les coups légaux.
- **« Le seul coup »** : passer les alternatives plausibles au moteur et citer l'écart réel.
- **Le coup du moteur laisse-t-il le même matériel en prise ?** Si oui, ce matériel
  n'était pas la faute : la position l'exigeait.
- **Mats en 1** : essayer tous les coups légaux de chaque position. **Mats en 2 ou 3** :
  réinterroger le moteur partout où l'analyse signale un mat, y compris ceux que
  l'adversaire avait.
- **Évaluation à l'abandon** : celle de la position finale, pas celle d'après le
  dernier coup du joueur.
- **Statistiques sur plusieurs parties** : les calculer sur les données, jamais à
  l'estime.

## 6. Écrire le commentaire

Un fichier `commentaires.json` consommé par `scripts/rapport_partie.py` :

```json
{
  "titre": "...", "eyebrow": "Partie du 12 septembre · 16 h 24",
  "sous_titre": "Blancs (elo) — Noirs (elo) · ouverture · résultat",
  "resultat_court": "Victoire", "resultat_note": "par mat, 33 coups",
  "chapeau": "<p>…</p>", "legende_courbe": "…",
  "moments": [{
    "coup": 6, "genre": "rate|reussi|neutre", "titre": "…",
    "etiquettes": ["…"], "pastille": "<span class='tag grn'>…</span>",
    "texte": "<p>…</p>", "note": "…",
    "montrer": "les_deux|meilleur|joue", "uci_bon": "b1c3",
    "ligne_bonne": "6...Bxa3 7.bxa3", "ligne_jouee": "6...Bd6 7.exd6",
    "sequence": {
      "depart": 6,
      "coups": ["Bd6", "Qe2", "f6"],
      "couleurs": ["rouge", "neutre", "rouge"],
      "legendes": ["…", "…", "…"], "legende_fin": "…"
    },
    "sequence_bonne": { "...": "même format, affiché sous la séquence jouée" }
  }],
  "sections": [{"eyebrow": "Diagnostic", "titre": "…", "html": "<p>…</p>"}],
  "conclusion": "<p>…</p>", "methode": "…"
}
```

`sequence.depart` donne le numéro du coup du joueur. On peut le remplacer par
`"depart_apres": 10`, ou par `"fen": "…"` pour partir d'une position quelconque. Les
coups des séquences et des lignes s'écrivent en notation anglaise (SAN).

**Toute idée qui tient en plusieurs coups passe par une `sequence`** : un échiquier qui
avance coup par coup, pas un diagramme figé. Chaque étape montre la position avant le
coup, avec sa flèche, et une étape finale montre le résultat. Les couleurs :

- `vert` pour un coup du joueur ;
- `neutre` pour un coup de l'adversaire ;
- `rouge` pour le coup du joueur quand c'est l'erreur.

Une légende par étape dit ce qu'il faut regarder.

**Chaque erreur montre le coup qu'il fallait jouer.** Pour tout moment `"genre": "rate"` :

- s'il a une `sequence` qui rejoue l'erreur, lui ajouter une `sequence_bonne` : la ligne
  du moteur depuis la même position, de 2 à 7 demi-coups, chacun réévalué ;
- s'il n'a pas de séquence : `"montrer": "les_deux"` avec `uci_bon`.

Le gabarit préfixe chaque légende par le coup et ajoute le temps de réflexion : ne pas
les répéter. Dans le texte, écrire les coups cités en `<span class='mv good'>` ou
`<span class='mv bad'>`, en notation française (C, F, T, D, R).

Contrôle avant de construire :

```python
for m in com["moments"]:
    if m.get("genre") == "rate":
        s = m.get("sequence")
        assert (m.get("sequence_bonne")
                or (not s and m.get("montrer", "les_deux") == "les_deux" and m.get("uci_bon"))
                or (s and s["couleurs"][0] == "vert")), f"coup {m['coup']} : bon coup non illustré"
```

## 7. Construire et regarder le rendu

```
python3 scripts/rapport_partie.py analyse.json commentaires.json partie.html
```

Si tu peux ouvrir un navigateur (Playwright, par exemple), vérifie :

- aucun `__PLACEHOLDER__` restant et aucune erreur JavaScript ;
- chaque lecteur de séquence, avancé jusqu'à sa dernière étape ;
- l'absence de défilement horizontal à 390 px de large.

Regarde vraiment une ou deux cartes.

## 8. Livrer

Donne le fichier HTML à l'utilisateur. La réponse dans la conversation reste courte : ce
qui a décidé la partie, en deux ou trois phrases.

---

# B. Analyser plusieurs parties

## 9. Une séance

1. Récupérer toutes les parties d'un coup et les vérifier (§3), dans un seul fichier PGN.
2. `python3 scripts/analyser.py seance.pgn <pseudo> seance.json 20` analyse toutes les
   parties du fichier où le joueur apparaît.
3. Écrire un `commentaires.json` de séance, au format décrit en tête de
   `scripts/rapport_session.py`. Les moments y portent un champ `partie`, le pseudo de
   l'adversaire.
4. `python3 scripts/rapport_session.py seance.json commentaires.json seance.html`.

Si tu peux lancer des sous-agents, confie-leur une partie chacun (vérification et
commentaire), puis fais la synthèse toi-même. **Tout chiffre qui traverse plusieurs
parties est recalculé depuis les JSON**, jamais recopié d'un résumé. Compare des parties
de longueurs différentes sur une fenêtre commune, par exemple les 15 premiers coups. Reste
honnête sur la taille de l'échantillon.

Deux autres gabarits suivent le même principe :

- `fiche_ouverture.py` : une ouverture expliquée avec des positions ;
- `briefing.py` : une page de rappels à garder ouverte pendant qu'on joue.

Leurs formats d'entrée sont décrits en tête de chaque script.

---

## Pièges connus

- **Un coup qui mate ne perd rien.** La position d'après est terminale et le moteur n'en
  donne pas de score : un code naïf lit 0 et compte le mat porté comme une perte énorme.
  `analyser.py` corrige déjà ce cas.
- **Un pion qui attaque une pièce la gagne**, quel que soit le nombre de défenseurs.
  Compter attaquants et défenseurs ne suffit pas : il faut comparer les valeurs.
- **L'échange statique (SEE) s'arrête à zéro**, puisqu'on a toujours le droit de ne pas
  prendre. Pour juger une prise, calculer `valeur_cible − gain_SEE(position_après)`.
- **La ligne principale (PV) de Stockfish est souvent tronquée** : reconstruire une ligne
  en réinterrogeant le moteur demi-coup par demi-coup.
- **Sortir de son répertoire n'est pas une erreur.** Une erreur, c'est un coup qui perd :
  vérifier la perte avant de reprocher quoi que ce soit.
- **Mats longs** : un débutant n'a pas à voir un mat en quatre coups ou plus. Le
  signaler à part, hors décompte des gaffes. Les mats en 1, 2 et 3 se travaillent.
- **Dans une position déjà gagnée à +5 ou plus**, une perte d'un point compte peu : le
  dire plutôt que de la classer comme une erreur ordinaire.
- **« Un échec qui attaque une pièce » ne gagne la pièce que si elle n'est pas défendue.**

## Abandonner trop tôt n'est pas ragequitter

Deux choses différentes, qui appellent deux réponses différentes.

- **Ragequit** : un abandon sous le coup de l'émotion.
  - Signes : partie expédiée, abandon juste après sa propre erreur, position encore
    jouable, partie suivante relancée aussitôt, série de défaites.
  - La réponse n'est pas un conseil d'échecs : c'est le signal d'une pause.
- **Abandon prématuré** : un jugement trop pessimiste.
  - Signe : une position à −3 ou −6 abandonnée tôt, avec encore du matériel sur
    l'échiquier.
  - La réponse est d'échecs : à bas niveau, ces positions se retournent souvent.
- **Abandon justifié** : mat inévitable, ou retard énorme en finale.

S'appuyer sur des chiffres : évaluation finale, durée de la partie, délai avant la
suivante. Décrire les faits et laisser la conclusion au joueur.

## Design

Les gabarits portent tout le style, il n'y a pas de CSS à réinventer :

- polices Bricolage Grotesque, Source Serif 4 et JetBrains Mono ;
- cases `#e8e6db` et `#7f8f6b` ;
- flèche verte pour le bon coup, rouge pour le coup joué, grise pour celui de
  l'adversaire.
