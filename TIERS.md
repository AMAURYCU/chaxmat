# Composants tiers et crédits

Ce projet est distribué sous licence **GNU GPL version 3** (voir [LICENSE](LICENSE)).
Il contient ou utilise les composants suivants.

## Stockfish.js — GPL version 3

`entraineur/app/vendor/stockfish.js` et `stockfish.wasm` sont Stockfish.js 18 :

- © Chess.com, LLC, https://github.com/nmrugg/stockfish.js ;
- d'après Stockfish (© T. Romstad, M. Costalba, J. Kiiski, G. Linscott et les autres
  contributeurs, https://github.com/official-stockfish/Stockfish) ;
- avec le réseau de neurones nn-9067e33176e de Linmiao Xu (linrock).

Tous sont sous licence GNU GPL version 3. Le code source est disponible aux adresses
ci-dessus.

## chess.js — licence BSD à deux clauses

`entraineur/app/vendor/chess.js` est chess.js 1.4 (https://github.com/jhlywa/chess.js).

```
Copyright (c) Jeff Hlywa (jhlywa@gmail.com)
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
```

## Pièces d'échecs — jeu « cburnett », GPL version 2 ou ultérieure

Les dessins des pièces (dans `entraineur/app/index.html`) sont le jeu « cburnett » de
Colin M.L. Burnett, sous licence GPL version 2 ou ultérieure. C'est le jeu de pièces
par défaut de Lichess.

## Polices

L'interface et les rapports chargent depuis Google Fonts trois polices sous licence
SIL Open Font License 1.1 : Bricolage Grotesque, Source Serif 4 et JetBrains Mono.
Elles ne sont pas incluses dans le dépôt.

## Données d'ouvertures

Les réponses adverses des répertoires d'exemple et les statistiques citées dans les
leçons viennent de l'explorateur d'ouvertures de Lichess (https://lichess.org), pour
les joueurs de 1000 à 1600 Elo en blitz et en rapide. Les coups des répertoires ont été
choisis et vérifiés avec Stockfish.

## Services utilisés

- **chess.com**, API publique (https://www.chess.com/news/view/published-data-api) :
  import des parties.
- **Lichess** : explorateur d'ouvertures (connexion OAuth, sans aucun droit sur le
  compte).
- **GitHub** : synchronisation facultative entre appareils, dans un dépôt privé de
  l'utilisateur.
