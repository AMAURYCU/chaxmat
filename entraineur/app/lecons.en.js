/* English version of lecons.js: same structure, same sequences and quiz ids;
   only the texts are translated. Rendered by ouvertures.js (afficherLecon). */
window.LECONS_EN = [
 {
  "id": "gambit-dame",
  "titre": "The Queen's Gambit",
  "camp": "w",
  "rep": "rep-gambit-dame",
  "sous": "Your White repertoire: 1.d4 and 2.c4 against almost everything. {{positions}} to know, {{lignes}}.",
  "chapeau": "<p>You offer the c4 pawn to lure the d5 pawn away from the centre. It is not a real sacrifice: in every line of your repertoire, the pawn comes back. In exchange, you get what everyone is after in the opening: the centre, quick development and active pieces.</p><p>The lesson follows the tree of your repertoire, family by family, then explains the ideas, the traps and the exceptions. Each animated sequence has its Quiz button; all the quizzes are also in Training, under “Opening quizzes”. The links underlined with dots show the position being discussed.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "The repertoire explained",
    "blocs": [
     {
      "t": "p",
      "html": "Your repertoire comes down to one idea: <span class=\"mv\">1.d4</span>, then <span class=\"mv\">2.c4</span> against almost everything. The c4 pawn hits the d5 pawn from the side. If Black takes it, you win it back and gain the centre; if not, you develop quickly and put pressure on d5."
     },
     {
      "t": "p",
      "html": "What Black plays between 1000 and 1600 on Lichess (blitz and rapid games) decides the family. Each board below is animated: step forward with ›, back with ‹, or click a move. The green arrow is your move; the grey one, your opponent's. The moves underlined with dots in the explanations are links: they show the variation on the board. The <strong>Quiz</strong> button resets the position and asks you to play your moves."
     },
     {
      "t": "table",
      "entetes": [
       "After",
       "Black plays",
       "Frequency",
       "What it is"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "50%",
        "Queen's Gambit after 2.c4"
       ],
       [
        "1.d4",
        "1…Nf6",
        "15%",
        "Indian defences"
       ],
       [
        "1.d4",
        "1…e6",
        "10%",
        "Often a transposition"
       ],
       [
        "1.d4 d5 2.c4",
        "2…dxc4",
        "34%",
        "Queen's Gambit Accepted"
       ],
       [
        "1.d4 d5 2.c4",
        "2…e6",
        "21%",
        "Queen's Gambit Declined"
       ],
       [
        "1.d4 d5 2.c4",
        "2…Nf6",
        "16%",
        "Marshall Defence"
       ],
       [
        "1.d4 Nf6 2.c4",
        "2…g6",
        "30%",
        "King's Indian or Grünfeld"
       ],
       [
        "1.d4 Nf6 2.c4",
        "2…e6",
        "29%",
        "Nimzo-Indian or Declined"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. The Queen's Gambit Accepted: 2…dxc4"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3"
      ],
      "legendes": [
       "Black takes the pawn. It is the most played reply between 1000 and 1600 Elo. No need to worry: you are going to win this pawn back.",
       "<span class=\"mv\">3.e3</span> opens the diagonal of your bishop on f1: it already threatens to take back on c4. Simple and solid.",
       "Black develops the knight. They do not defend c4: they let you take it back. After <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 instead of 3…Nf6</a>, it is the same.",
       "You take the pawn back. Material is level, and your bishop is active on the diagonal aiming at f7.",
       "Black opens the way for the f8 bishop. Against <a class=\"lien-var\" href=\"#\" data-var=\"q62b65fac6\">4…Nc6</a>, you also play 5.Nf3.",
       "You bring out your g1 knight. Next, outside the repertoire: <span class=\"mv\">O-O</span>, <span class=\"mv\">Nc3</span>, <span class=\"mv\">Qe2</span>."
      ],
      "fin": "The typical position of the Accepted: two pieces out, castling next move, a little more space than Black. If Black plays <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 instead of 3…Nf6</a>, it is the same: 4.Bxc4 Nf6 5.Nf3 leads to the same position. After 3…e6 4.Bxc4, against <a class=\"lien-var\" href=\"#\" data-var=\"qf10e00271\">4…Nc6</a> play 5.Nf3, and against <a class=\"lien-var\" href=\"#\" data-var=\"qe7ff82d8d\">4…Bb4+</a> block with 5.Nc3.",
      "titre": "3…Nf6: the quietest line",
      "quiz": [
       "q58862f38f",
       "qfaf8ff6ad",
       "q62b65fac6",
       "qf10e00271",
       "qe7ff82d8d"
      ],
      "marques": [
       [
        "c4!"
       ],
       [
        "f1",
        "c4!"
       ],
       [
        "c4!"
       ],
       [
        "c4",
        "f7!"
       ],
       [
        "f8"
       ],
       [],
       [
        "c4",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3"
      ],
      "coups": [
       "b5",
       "a4",
       "c6",
       "axb5"
      ],
      "legendes": [
       "Black defends c4 with the b-pawn. It looks solid, but a pawn chain has a weak point: its base. Here, that is b5.",
       "You attack the base of the chain. If b5 falls, c4 will fall after it. Stockfish clearly prefers <span class=\"mv\">4.a4</span> to 4.b3.",
       "Black supports b5 with the c-pawn.",
       "You take anyway. If Black takes back <a class=\"lien-var\" href=\"#\" data-var=\"qbe59e3b4a\">5…cxb5</a>, 6.Qf3 wins a piece."
      ],
      "fin": "Black must not take back on b5. Stockfish gives White about +1.7: material is level for now, but the c4 pawn is going to fall and you will be a pawn up. Against <a class=\"lien-var\" href=\"#\" data-var=\"q23b50555d\">4…Bd7</a>, same idea: 5.axb5. Against <a class=\"lien-var\" href=\"#\" data-var=\"q4e88a8472\">4…bxa4</a>, simply win your pawn back: 5.Bxc4.",
      "titre": "3…b5: Black hangs on to the pawn",
      "quiz": [
       "q1a969d154",
       "qbe59e3b4a",
       "q23b50555d",
       "q4e88a8472"
      ],
      "marques": [
       [
        "c4",
        "b5!"
       ],
       [
        "b5!",
        "c4!"
       ],
       [
        "b5!",
        "a4"
       ],
       [
        "b5!",
        "c6",
        "d1"
       ],
       [
        "c4!",
        "f1",
        "b5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4"
      ],
      "coups": [
       "Bf5",
       "Qb3",
       "e6",
       "Nc3"
      ],
      "legendes": [
       "The bishop comes out to f5. But it no longer defends the b7 pawn.",
       "<span class=\"mv good\">5.Qb3</span>! Double attack: your queen aims at b7, and together with your bishop on c4 it aims at f7. Two targets at once.",
       "The right defence: the e6 pawn blocks the diagonal to f7. After <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Nbd7</a>, it is mate.",
       "Not <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Qxb7</a> right away: the reply 6…Be4! bothers your queen. With <span class=\"mv\">6.Nc3</span> first, you control e4, then you take on b7 at your leisure."
      ],
      "fin": "Black still has to take care of the b7 pawn: <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Nc3 first, then Qxb7</a> wins it if they forget. Had they answered <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Nbd7</a> instead of 5…e6, it was mate in one.",
      "titre": "4…Bf5: the queen comes out, for a good reason",
      "quiz": [
       "qfeab54db7",
       "qc2a8bfd37",
       "qcdd21b677"
      ],
      "marques": [
       [
        "b7!"
       ],
       [
        "b3",
        "c4",
        "b7!",
        "f7!"
       ],
       [
        "e6",
        "c4",
        "f7!"
       ],
       [
        "e4",
        "b7!",
        "f5"
       ],
       [
        "b7!",
        "b3",
        "c3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. The Queen's Gambit Declined: 2…e6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3"
      ],
      "legendes": [
       "Black protects d5 with the e-pawn. It is solid, with one flaw: the c8 bishop is shut in behind e6.",
       "You add an attacker on d5. Count: <span class=\"mv\">c4</span> and <span class=\"mv\">Nc3</span> attack d5; e6 and the queen defend it.",
       "Black adds a defender to d5.",
       "<span class=\"mv\">4.Bg5</span> pins the f6 knight: if it moves, your bishop takes the queen on d8. One defender of d5 is hampered.",
       "Black unpins: with the bishop on e7, the knight can move again. It is the most played reply (47%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Bb4</a> and 4…h6 (next sequence).",
       "You open the way for your f1 bishop. Plan: <span class=\"mv\">Nf3</span>, <span class=\"mv\">Bd3</span>, <span class=\"mv\">O-O</span>, then <span class=\"mv\">Rc1</span> or <span class=\"mv\">Qc2</span>."
      ],
      "fin": "A classic Declined position: you have more space, Black is solid but a little cramped. Against <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Bb4</a>, also play 5.e3: the bishop pins your knight, and if …Bxc3+, you take back with the b-pawn.",
      "titre": "The main line",
      "quiz": [
       "qdcdb92cf0",
       "qe2c942a05"
      ],
      "marques": [
       [
        "d5",
        "e6",
        "c8"
       ],
       [
        "d5!",
        "c4",
        "e6",
        "d8"
       ],
       [
        "d5!"
       ],
       [
        "g5",
        "f6!",
        "d8!",
        "d5"
       ],
       [
        "e7",
        "f6",
        "g5"
       ],
       [
        "f1"
       ],
       [
        "c3",
        "b2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5"
      ],
      "coups": [
       "h6",
       "Bxf6",
       "Qxf6",
       "cxd5",
       "exd5",
       "Nxd5"
      ],
      "legendes": [
       "Black chases your bishop.",
       "Do not retreat to h4: here, taking is stronger (Stockfish: +1.2 against +0.1 for 5.Bh4). The f6 knight was defending d5: you remove that defender.",
       "The most natural recapture. It leaves d5 without its knight. The other recapture, <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a>, damages Black's pawns.",
       "You take on d5: only the e6 pawn can take back.",
       "Black takes back.",
       "You win a pawn, and your knight attacks the queen on f6 on the way."
      ],
      "fin": "A pawn up, with a gain of time. If Black takes back <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a> instead of 5…Qxf6, play 6.cxd5 exd5 7.e3: they have doubled f-pawns and a less protected king.",
      "titre": "4…h6: you take on f6",
      "quiz": [
       "qd63a5a9c6",
       "qd5b9c96e1"
      ],
      "marques": [
       [
        "g5!"
       ],
       [
        "f6!",
        "d5!"
       ],
       [
        "d5!",
        "f6!"
       ],
       [
        "d5!",
        "e6",
        "c3"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "f6!"
       ],
       [
        "d5",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "dxc4",
       "e4",
       "Bb4",
       "Bxc4"
      ],
      "legendes": [
       "Black takes even though their c8 bishop is already shut in by e6. They hand you the centre.",
       "With your knight on c3 to support e4, you occupy the whole centre at once: <span class=\"mv good\">4.e4</span>.",
       "The bishop pins your c3 knight (the most played reply). The others: <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Nc6</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Nf6</a>.",
       "You win the pawn back, with two pawns in the centre against none. Stockfish: +0.8."
      ],
      "fin": "Against <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Nc6</a>, play 5.Nf3; against <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Nf6</a>, 5.Bxc4. In every case, the pawn comes back and the centre is yours.",
      "titre": "3…dxc4: 4.e4!",
      "quiz": [
       "q28f23023f",
       "q84ccf2a91",
       "qfd0499a86"
      ],
      "marques": [
       [
        "c4!",
        "c8",
        "e6"
       ],
       [
        "c3",
        "e4",
        "d4"
       ],
       [
        "b4",
        "c3!",
        "e1"
       ],
       [
        "c4!",
        "d4",
        "e4"
       ],
       [
        "d4",
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "Bb4",
       "Nf3",
       "Bxc3+",
       "bxc3"
      ],
      "legendes": [
       "The bishop pins your c3 knight to your king.",
       "Just develop. Against <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Nf6</a> or <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, you also have a reply ready.",
       "Black trades their bishop for your knight: they leave you the bishop pair.",
       "Take back with the b-pawn: <span class=\"mv\">bxc3</span> strengthens d4 and opens the b-file for your rook. Stockfish: +0.8."
      ],
      "fin": "The doubled c3-c4 pawns are not a problem: your bishop pair is worth more. Against <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Nf6</a>, play 5.Bg5; against <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, 5.e3 then Bxc4.",
      "titre": "3…Bb4: the pin",
      "quiz": [
       "qf41133586",
       "qf64608c7a",
       "qb7fe8d259"
      ],
      "marques": [
       [
        "b4",
        "c3!",
        "e1"
       ],
       [],
       [
        "c3!",
        "c1",
        "f1"
       ],
       [
        "c3!",
        "d4",
        "a1"
       ],
       [
        "c3",
        "c4",
        "c1",
        "f1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. The Marshall Defence: 2…Nf6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "Nf6",
       "cxd5",
       "Nxd5",
       "Nf3",
       "Nc6",
       "e4"
      ],
      "legendes": [
       "Black develops without defending d5. It is called the Marshall Defence, and its flaw shows on the next move.",
       "You take: <span class=\"mv good\">3.cxd5</span>. No black pawn can take back on d5.",
       "The knight takes back (73%). But a knight in the centre can be chased.",
       "Develop first: <span class=\"mv\">4.Nf3</span>. The e-pawn will come next move, with a gain of time.",
       "Black develops. Against <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a>, same plan; against <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Bg4</a>, watch out for the exception.",
       "<span class=\"mv good\">5.e4</span>: the pawn attacks the knight on d5, which has to leave. You have both central pawns, Black has none."
      ],
      "fin": "Stockfish: +1.4. After <a class=\"lien-var\" href=\"#\" data-var=\"q482614658\">5…Nb6</a>, 6.d5 chases the other knight too. Same plan against <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a>: 5.e4. Against <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Bg4</a>, play 5.Ne5: the knight attacks the bishop and prepares Qb3 against b7.",
      "titre": "3…Nxd5: the knight gets chased",
      "quiz": [
       "q310e8078c",
       "q782d57ad0",
       "qd3ed39913",
       "q482614658"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "e2",
        "d5"
       ],
       [],
       [
        "e4",
        "d5!",
        "d4"
       ],
       [
        "d5!",
        "e4",
        "d4",
        "c6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5"
      ],
      "coups": [
       "Qxd5",
       "Nc3",
       "Qd8",
       "Nf3"
      ],
      "legendes": [
       "The queen takes back. She is exposed in the centre.",
       "You develop while attacking the queen: you gain a tempo.",
       "The queen goes home. Black has made two queen moves for nothing. Same reply after <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Qa5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Qd6</a>.",
       "And you carry on: e4 next move. Stockfish: +1.2."
      ],
      "fin": "Same reply if the queen goes to a5 or d6: <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Qa5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Qd6</a>.",
      "titre": "3…Qxd5: the queen gets chased",
      "quiz": [
       "qfc1bf4ab7",
       "q19a9143dc",
       "q2199979f1"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [],
       [
        "e2",
        "e4"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5"
      ],
      "coups": [
       "e6",
       "dxe6",
       "Bxe6",
       "Nc3"
      ],
      "legendes": [
       "A rare gambit: Black offers a pawn to develop quickly.",
       "Take the pawn.",
       "The bishop takes back.",
       "Develop: you are a pawn up."
      ],
      "fin": "If Black plays <a class=\"lien-var\" href=\"#\" data-var=\"q7a2086efe\">4…Bb4+</a> instead of taking back, block with 5.Bd2: you keep your extra pawn.",
      "titre": "3…e6: take the pawn",
      "quiz": [
       "q3212d6160",
       "q7a2086efe"
      ],
      "marques": [
       [
        "e6!"
       ],
       [
        "e6!"
       ],
       [
        "e6!"
       ],
       [],
       []
      ]
     },
     {
      "t": "h",
      "html": "4. 1…Nf6: the Indian defences"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4"
      ],
      "coups": [
       "g6",
       "Nc3",
       "Bg7",
       "e4",
       "d6",
       "Nf3"
      ],
      "legendes": [
       "Black is going to put the bishop on g7: it is the King's Indian. They leave you the centre to attack it later.",
       "You prepare e4.",
       "The g7 bishop aims down the long diagonal: it will hit d4 as soon as the f6 knight moves.",
       "<span class=\"mv good\">4.e4</span>: three pawns in the centre (c4, d4, e4). That is what you are after.",
       "Black stops e5. The other replies: <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…O-O</a>, or the trap <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Nxe4??</a>.",
       "Development. Natural follow-up: <span class=\"mv\">Be2</span>, <span class=\"mv\">O-O</span>. Your plan: keep this centre and gain space."
      ],
      "fin": "Against <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…O-O</a>, also play 5.Nf3. Watch out for the trap <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Nxe4??</a>: the e4 pawn is defended by your knight, and you win a knight for two pawns. And against <a class=\"lien-var\" href=\"#\" data-var=\"q63038f5a0\">4…e6</a>, 5.e5! chases the knight.",
      "titre": "2…g6 3.Nc3 Bg7: the King's Indian",
      "quiz": [
       "q54fa22f42",
       "q8939f31b6",
       "q4249f9ff9",
       "q63038f5a0"
      ],
      "marques": [
       [
        "f8",
        "g7"
       ],
       [
        "e2",
        "e4"
       ],
       [
        "g7",
        "d4!"
       ],
       [
        "c4",
        "d4",
        "e4"
       ],
       [
        "e5",
        "e4"
       ],
       [
        "c4",
        "d4",
        "e4",
        "f1"
       ],
       [
        "e4",
        "c3",
        "f6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "g6",
       "Nc3"
      ],
      "coups": [
       "d5",
       "cxd5",
       "Nxd5",
       "e4",
       "Nxc3",
       "bxc3"
      ],
      "legendes": [
       "The Grünfeld: Black attacks your centre right away.",
       "You take.",
       "The knight takes back (95% of games).",
       "Same idea as against the Marshall: <span class=\"mv good\">5.e4</span> chases the knight while taking the centre.",
       "The knight trades itself for yours.",
       "Outside the repertoire, but natural: take back with the b-pawn. Your c3-d4-e4 pawns form a massive centre."
      ],
      "fin": "Stockfish rates the position roughly equal (+0.3), but you have the centre. If the knight retreats to <a class=\"lien-var\" href=\"#\" data-var=\"q36ad42467\">5…Nb6</a> instead of taking on c3, your advantage grows (+1.2): on b6, it does nothing.",
      "titre": "3…d5: the Grünfeld",
      "quiz": [
       "q69dd5d2a9"
      ],
      "marques": [
       [
        "c4!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "e4",
        "d5!"
       ],
       [
        "c3!"
       ],
       [
        "c3",
        "d4",
        "e4"
       ],
       [
        "c3",
        "d4",
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4"
      ],
      "coups": [
       "e6",
       "Nc3",
       "Bb4",
       "e3",
       "Bxc3+",
       "bxc3"
      ],
      "legendes": [
       "Black prepares …d5 or …Bb4.",
       "You threaten to play e4. Against <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, it is the Queen's Gambit Declined.",
       "The Nimzo-Indian: the bishop pins your knight to stop you playing e4.",
       "<span class=\"mv\">4.e3</span>: solid. You open your f1 bishop and protect d4. Next: <span class=\"mv\">Bd3</span>, <span class=\"mv\">Nf3</span>, <span class=\"mv\">O-O</span>.",
       "Black takes your knight.",
       "The only good recapture: <span class=\"mv\">bxc3</span>. After 5.Bd2??, …Bxd2+ and you have lost a piece. You have the bishop pair."
      ],
      "fin": "Against <a class=\"lien-var\" href=\"#\" data-var=\"q30dd750ab\">4…O-O</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q6b68a56c8\">4…d5</a>, play 5.Nf3 and develop normally. Against <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, play 4.Bg5: it is the Queen's Gambit Declined, seen above.",
      "titre": "2…e6 3.Nc3 Bb4: the Nimzo-Indian",
      "quiz": [
       "qe680fe597",
       "q8649452bf",
       "q30dd750ab",
       "q6b68a56c8"
      ],
      "marques": [
       [
        "f8",
        "d7"
       ],
       [
        "e2",
        "e4"
       ],
       [
        "b4",
        "c3!",
        "e1",
        "e4"
       ],
       [
        "f1",
        "d4"
       ],
       [
        "c3!"
       ],
       [
        "c3!",
        "c1",
        "f1"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "e6",
       "Nc3"
      ],
      "coups": [
       "c5",
       "d5",
       "exd5",
       "cxd5"
      ],
      "legendes": [
       "Black attacks d4 with the c-pawn.",
       "<span class=\"mv good\">4.d5</span>: you advance instead of trading. Your d5 pawn cuts Black's camp in two.",
       "Black trades (52%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Be7</a>.",
       "You take back with the c-pawn: you keep an advanced pawn on d5."
      ],
      "fin": "Natural follow-up: e4, Nf3, Be2, O-O. Stockfish: +0.8. Against <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a>, play 5.e4. Against <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Be7</a>, play 5.d6!: the pawn attacks the bishop, which has to go back to f8.",
      "titre": "3…c5: you advance 4.d5",
      "quiz": [
       "q7e1ecd7f5",
       "q62b6ec7a2",
       "qdb840113a"
      ],
      "marques": [
       [
        "d4!"
       ],
       [
        "d5"
       ],
       [
        "d5!"
       ],
       [
        "d5"
       ],
       [
        "d5",
        "e2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "5. 1…e6"
     },
     {
      "t": "seq",
      "debut": [
       "d4"
      ],
      "coups": [
       "e6",
       "c4",
       "c5",
       "d5",
       "exd5",
       "cxd5"
      ],
      "legendes": [
       "Black keeps their options open: …d5 or …c5.",
       "Your usual move.",
       "They attack d4. The others: <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Nf6</a>.",
       "Same reflex as above: you advance.",
       "Trade.",
       "You take back with the c-pawn. Next: Nc3, e4."
      ],
      "fin": "Against <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a>, play 3.Nc3: it is the Queen's Gambit Declined. Against <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Nf6</a>, play 3.Nc3: it is the position of 1…Nf6 2.c4 e6 3.Nc3.",
      "titre": "1…e6 2.c4 c5: same reflex",
      "quiz": [
       "qe4d671d58",
       "qdf1c58899",
       "qf36f0b511"
      ],
      "marques": [
       [
        "d7",
        "c7"
       ],
       [],
       [
        "d4!"
       ],
       [],
       [
        "d5!"
       ],
       [
        "b1",
        "e2"
       ],
       [
        "b1"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Transpositions.</strong> Many move orders lead to the same positions: 1…e6 2.c4 d5 3.Nc3 is the Queen's Gambit Declined; 1…Nf6 2.c4 d5 3.cxd5 is the Marshall. The app knows it: a position already seen elsewhere is asked only once in training."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "What to know by heart",
    "blocs": [
     {
      "t": "p",
      "html": "Here is the whole repertoire, read straight from your data: if you change it in the editor, this tree follows. There are {{positions}} where it is up to you to find the move. Do not learn them all at once: one family a day is enough. In the table, click a move to see it on the board; each move is also a quiz."
     },
     {
      "t": "h",
      "html": "The decisions to know"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "Black plays",
       "You play",
       "Why"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5, 1…Nf6, 1…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q67adffc86\">2.c4</a>",
        "The c-pawn attacks d5"
       ],
       [
        "1.d4 d5 2.c4",
        "2…dxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q17a65f3d6\">3.e3</a>",
        "Opens the bishop, threatens Bxc4"
       ],
       [
        "",
        "2…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q88ed7211a\">3.Nc3</a>",
        "Second attacker of d5"
       ],
       [
        "",
        "2…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3f4a5eeca\">3.cxd5</a>",
        "d5 has no pawn left"
       ],
       [
        "Accepted, 3.e3",
        "3…b5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a>",
        "Attacks the base of the chain"
       ],
       [
        "",
        "3…Nf6 or 3…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Bxc4</a>",
        "You take the pawn back"
       ],
       [
        "Accepted, 4.Bxc4",
        "4…Bf5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Qb3</a>",
        "b7 and f7 attacked"
       ],
       [
        "",
        "4…e6, 4…Nc6, 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q90a72d252\">5.Nf3</a>",
        "Development"
       ],
       [
        "Declined, 3.Nc3",
        "3…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1e4bbcf51\">4.Bg5</a>",
        "Pin"
       ],
       [
        "",
        "3…Bb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q040b67277\">4.Nf3</a>",
        "Development"
       ],
       [
        "",
        "3…dxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>",
        "Free centre"
       ],
       [
        "Declined, 4.Bg5",
        "4…Be7 or 4…Bb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb5198fd5b\">5.e3</a>",
        "Opens the f1 bishop"
       ],
       [
        "",
        "4…h6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Bxf6</a>",
        "Removes a defender of d5"
       ],
       [
        "Marshall, 3.cxd5",
        "3…Nxd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q10452ca08\">4.Nf3 then 5.e4</a>",
        "Chases the knight"
       ],
       [
        "",
        "3…Qxd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q54a1797a5\">4.Nc3</a>",
        "Gains time on the queen"
       ],
       [
        "1.d4 Nf6 2.c4",
        "2…g6 or 2…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qef22133de\">3.Nc3</a>",
        "Prepares e4"
       ],
       [
        "2…g6 3.Nc3",
        "3…Bg7 or 3…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1c8781700\">4.e4</a>",
        "Three pawns in the centre"
       ],
       [
        "",
        "3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2748f9d03\">4.cxd5 then 5.e4</a>",
        "Chases the knight"
       ],
       [
        "2…e6 3.Nc3",
        "3…Bb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qcb16f2964\">4.e3</a>",
        "Solid, opens the bishop"
       ],
       [
        "",
        "3…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>",
        "The pawn cuts Black's camp"
       ],
       [
        "Everywhere",
        "…Bxc3+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">bxc3</a>",
        "Always the b-pawn"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The full tree"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Three reflexes cover almost everything.</strong> 2.c4 everywhere. Nc3 as soon as possible. e4 as soon as Black gives up the centre (…dxc4 after …e6, …Nxd5, …g6)."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "The ideas",
    "blocs": [
     {
      "t": "h",
      "html": "Why 2.c4"
     },
     {
      "t": "p",
      "html": "1.d4 takes the centre, but against 1…d5 the two pawns block each other. 2.c4 hits d5 from the side: Black has to choose. Support it (…e6, …c6), take it (…dxc4) or ignore the question (…Nf6). If they take, there is no black pawn left on d5, and your e-pawn can advance to e4."
     },
     {
      "t": "p",
      "html": "Is it a real gambit? No. The c4 pawn is almost always won back: by <a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Bxc4</a> after e3, by <a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a> against …b5. Throughout your repertoire, it comes back."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3"
      ],
      "fleches": [
       [
        "f1c4",
        "v"
       ]
      ],
      "legende": "After 3.e3, the f1-c4 diagonal is open: the bishop threatens to take the pawn back.",
      "marques": [
       "f1",
       "c4!",
       "e3"
      ]
     },
     {
      "t": "h",
      "html": "The plan in three steps"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Develop.</strong> Nc3, Nf3, one bishop to g5 or d3, the other to c4 or e2, castle. Until about move 8, every move brings out a piece.",
       "<strong>Take the centre.</strong> e4 as soon as it is possible without losing the pawn. Your repertoire shows you when: after <a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q10452ca08\">4.Nf3 then 5.e4</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q1c8781700\">4.e4</a>.",
       "<strong>Put on pressure.</strong> A rook on c1 (the c-file often opens), the queen on c2, the bishop on d3 aiming at h7."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "The Bd3 + Qc2 battery"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3"
      ],
      "fleches": [
       [
        "d3h7",
        "v"
       ]
      ],
      "legende": "The bishop in front, the queen behind, on the diagonal leading to h7. If the f6 knight leaves its square or is traded off by Bxf6, h7 has only the king left to defend it.",
      "marques": [
       "d3",
       "c2",
       "h7!",
       "f6"
      ]
     },
     {
      "t": "p",
      "html": "It is the simplest attack in the Queen's Gambit Declined. When the f6 knight disappears, always check whether Bxh7+ works."
     },
     {
      "t": "h",
      "html": "The Bg5 pin"
     },
     {
      "t": "p",
      "html": "The bishop on g5 pins the f6 knight to the queen: as long as the queen is on d8, the knight cannot move without loss. And this knight defends d5 and h7. So the pin hampers Black's whole defence. Careful: a pin to the queen is not an absolute pin. The knight can still move if it wins more than the queen, which is the whole point of the Elephant Trap (see The traps); to avoid falling into it: <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>."
     },
     {
      "t": "h",
      "html": "The doubled c3-c4 pawns"
     },
     {
      "t": "p",
      "html": "In the Nimzo and in the Declined with …Bb4, Black often takes your knight: <a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">…Bxc3+</a>. Your c-pawns are doubled, but you have the bishop pair, the c3 pawn strengthens d4 and the b-file opens for your rook. Do not try to avoid this trade."
     },
     {
      "t": "h",
      "html": "When the centre closes: d5"
     },
     {
      "t": "p",
      "html": "Against …c5, you advance d5 (<a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>). Your pawn cuts Black's camp in two and gives you space. Your plan: e4, Nf3, Be2, O-O, then depending on the case f4 or e5 to open the game. Do not take on c5: you would hand the centre back to Black."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "e6",
       "Nc3",
       "c5",
       "d5",
       "exd5",
       "cxd5",
       "d6",
       "e4"
      ],
      "fleches": [],
      "legende": "The structure to aim for against …c5: pawns on d5 and e4, Black is cramped.",
      "marques": [
       "d5",
       "e4"
      ]
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Strengths and weaknesses",
    "blocs": [
     {
      "t": "p",
      "html": "Before talking about plans, take stock: what the Queen's Gambit gives you, what is harder, and what Black will try to do against you."
     },
     {
      "t": "h",
      "html": "What the opening gives you"
     },
     {
      "t": "liste",
      "items": [
       "<strong>The centre and space.</strong> Your d4 pawn holds the centre, your c4 pawn puts pressure on d5. As soon as Black gives up d5, your e-pawn arrives on e4: two pawns in the centre (d4, e4) against none.",
       "<strong>Always the same squares.</strong> Nc3, Bg5, e3, Nf3, Bd3, O-O: in the Declined, your development hardly changes. Less calculation in the opening, more energy for the middlegame.",
       "<strong>A quiet king.</strong> Black rarely has the means to attack your castled king. You choose where the battle takes place.",
       "<strong>Well-known plans.</strong> Depending on the pawns, three plans keep coming back: the minority attack, play around the isolated pawn, and the attack on the castled king with Bd3 and Qc2. You will find them in the next section.",
       "<strong>Natural traps.</strong> Qb3 against b7, Bxf7 in the Accepted, Qf3 against the a8 rook: Black falls into them by playing moves that look normal."
      ]
     },
     {
      "t": "h",
      "html": "What is harder"
     },
     {
      "t": "liste",
      "items": [
       "<strong>The positions are calm.</strong> No ready-made attack: you need a plan, and patience. If you go for mate on move 12 for no reason, you risk losing material.",
       "<strong>Your c1 bishop can stay shut in.</strong> In the Accepted, after 3.e3, it is behind your e3 pawn. It gets free when that pawn disappears (…cxd4 exd4) or advances to e4. Do not let it sleep until move 20.",
       "<strong>The isolated pawn.</strong> In the Accepted, you often have a d4 pawn that no other pawn can defend. It gives you active pieces in the middlegame, but it becomes weak if all the pieces get traded.",
       "<strong>Pins.</strong> …Bb4 pins your c3 knight: as long as it is pinned, it no longer defends e4. Think about it before pushing your e-pawn.",
       "<strong>Knowing when not to take.</strong> The d5 pawn sometimes looks free (the Elephant Trap), and so does the b7 pawn (Qxb7 too early). Before you take, look at Black's reply."
      ]
     },
     {
      "t": "h",
      "html": "What Black is after"
     },
     {
      "t": "p",
      "html": "In the Declined, Black's big problem is the c8 bishop: behind the e6 pawn, it sees nothing. They also have less space than you. Almost all their plans aim at freeing themselves."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Trading pieces.</strong> When you are short of space, every trade is a relief. The best-known idea: …dxc4, then …Nd5 to trade two pairs of pieces (the board below).",
       "<strong>The freeing pushes …e5 and …c5.</strong> A freeing push is a pawn move that opens the game for the pieces. …e5 frees the c8 bishop; …c5 attacks your d4 pawn.",
       "<strong>The …Ne4 jump.</strong> The knight settles in the centre to trade off your pieces, sometimes supported by …f5.",
       "<strong>…Bf5 in the Carlsbad structure.</strong> After cxd5 exd5, the c8 bishop is free: it wants to trade itself for your good d3 bishop.",
       "<strong>In the Accepted: …c5, …a6 and …b5.</strong> Black attacks your d4 pawn and brings the bishop out via b7."
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3"
      ],
      "coups": [
       "dxc4",
       "Bxc4",
       "Nd5",
       "Bxe7",
       "Qxe7",
       "O-O",
       "Nxc3",
       "Qxc3",
       "b6"
      ],
      "legendes": [
       "Black takes on c4: your bishop has to move a second time to take back.",
       "You take the pawn back.",
       "The knight comes to d5 to offer trades: it is the classic freeing manoeuvre of the Declined.",
       "You trade bishops: it is the simplest.",
       "The queen takes back.",
       "Your king gets to safety.",
       "Second trade.",
       "The queen takes back.",
       "The c8 bishop is going to come out via b7. Then …c5 will attack your centre."
      ],
      "fin": "Two pairs of pieces have gone and the c8 bishop is going to breathe: the position is equal (Stockfish: +0.2). No panic, you keep more space. But watch the timing: if Black pushes …e5 without preparation, <a class=\"lien-var\" href=\"#\" data-var=\"qf51a5c77b\">12…e5? 13.Nxe5</a> wins a pawn (Stockfish: +1.4).",
      "titre": "Black frees their game: …dxc4 and …Nd5",
      "quiz": [
       "qbce42b1a6"
      ],
      "marques": [
       [
        "c4!",
        "d3"
       ],
       [
        "c4!"
       ],
       [
        "d5",
        "c3",
        "e7",
        "g5"
       ],
       [
        "e7!"
       ],
       [
        "e7!"
       ],
       [
        "g1"
       ],
       [
        "c3!"
       ],
       [
        "c3!"
       ],
       [
        "c8",
        "b7",
        "c5",
        "d4"
       ],
       [
        "c8",
        "e5",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Typical mistakes among club players"
     },
     {
      "t": "p",
      "html": "Frequent mistakes among club players. Each red link shows the mistake; the link to the right move is a quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Pushing e4 too early.</strong> As long as the d5 pawn and the f6 knight watch e4, your pawn gets taken: <a class=\"lien-var\" href=\"#\" data-var=\"q48e5afaa3\">4.e4?</a> loses a pawn (Stockfish: −0.6). Wait until Black gives up d5 (…dxc4): then e4 is strong. Here, the right move is <a class=\"lien-var\" href=\"#\" data-var=\"q1e4bbcf51\">4.Bg5</a>.",
       "<strong>Forgetting that a pinned piece no longer defends.</strong> In the Nimzo, …Bb4 pins your c3 knight to your king: <a class=\"lien-var\" href=\"#\" data-var=\"qa1537baec\">4.e4?</a> loses a pawn (Stockfish: −0.7). Play <a class=\"lien-var\" href=\"#\" data-var=\"qcb16f2964\">4.e3</a> first.",
       "<strong>Bxh7+ when the f6 knight is not pinned.</strong> With a black bishop on e7, there is no pin: <a class=\"lien-var\" href=\"#\" data-var=\"q6ad65274d\">9.Bxh7+?</a> loses a piece (Stockfish: −3.3). Compare with exercise 3, where the black bishop has gone to d6.",
       "<strong>Launching b4 without preparation.</strong> In the Carlsbad structure, <a class=\"lien-var\" href=\"#\" data-var=\"q3b9482ee2\">11.b4?</a> lets the e7 bishop take the pawn (Stockfish: −0.5). Play <a class=\"lien-var\" href=\"#\" data-var=\"qd52783f32\">11.Rab1</a> first: the rook will support b4.",
       "<strong>Taking on d5 with the knight when a black knight is on d7.</strong> It is the Elephant Trap (see The traps): play <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>.",
       "<strong>Taking on b7 too early.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Qxb7</a> allows 6…Be4! and your advantage disappears. Play <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Nc3 first, then Qxb7</a>."
      ]
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "The middlegame",
    "blocs": [
     {
      "t": "p",
      "html": "After the opening, the pawns tell you what to do. Your repertoire mainly leads to three situations: the Carlsbad structure in the Declined, the isolated pawn on d4 in the Accepted, and the attack on the castled king with Bd3 and Qc2."
     },
     {
      "t": "h",
      "html": "1. The Carlsbad structure and the minority attack"
     },
     {
      "t": "p",
      "html": "In the Declined, you can trade with cxd5 as soon as your development is under way, for example on move 9. Black takes back with exd5. This pawn structure has a name: the Carlsbad structure."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8"
      ],
      "fleches": [
       [
        "a1b1",
        "v"
       ],
       [
        "b2b4",
        "v"
       ]
      ],
      "legende": "The Carlsbad structure. On the queenside, you have two pawns (a2, b2), Black has three (a7, b7, c6). Plan: Rb1, then b4 and b5.",
      "marques": [
       "a2",
       "b2",
       "b7",
       "c6"
      ]
     },
     {
      "t": "p",
      "html": "The minority attack means advancing your minority (your two a- and b-pawns) against the three black pawns. The goal is not to break through: it is to leave Black with a weak pawn. After b5 and bxc6, they are left with a weak c6 pawn that no pawn can defend any more."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1",
       "Ne4",
       "Bxe7",
       "Qxe7",
       "b4",
       "a6",
       "a4",
       "Ng6"
      ],
      "coups": [
       "Rfc1",
       "Bf5",
       "b5",
       "axb5",
       "axb5",
       "h6",
       "bxc6",
       "bxc6"
      ],
      "legendes": [
       "Your second rook comes to the c-file: it is going to open.",
       "Black develops the bishop.",
       "Now is the moment: b5 attacks c6. Your a4 pawn and your d3 bishop support it.",
       "Black takes.",
       "You take back: the b5 pawn attacks c6 again.",
       "A waiting move.",
       "You take on c6.",
       "Here is the result: a c6 pawn that no pawn defends any more, on a half-open file."
      ],
      "fin": "The c6 pawn is your target for the rest of the game: your rooks on the c-file, a knight on e5 or c5, your queen on a4. Stockfish: +0.7.",
      "titre": "The minority attack, move by move",
      "quiz": [
       "q5206c7648"
      ],
      "marques": [
       [
        "c1"
       ],
       [
        "f5"
       ],
       [
        "b5",
        "c6!",
        "a4",
        "d3"
       ],
       [
        "b5!"
       ],
       [
        "b5",
        "c6!"
       ],
       [],
       [
        "c6!"
       ],
       [
        "c6!",
        "c1"
       ],
       [
        "c6!",
        "c1",
        "e5",
        "a4"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Two tactical ideas keep coming back in this structure. The d5 pawn is mainly defended by the c6 pawn and the f6 knight: Bxf6 removes one of its defenders (exercise 2). And if …cxb5 answers b5, the d5 pawn loses its support (exercise 1)."
     },
     {
      "t": "h",
      "html": "2. The isolated pawn on d4"
     },
     {
      "t": "p",
      "html": "In the Accepted, when Black plays …c5 and …cxd4, you take back with exd4. Your d4 pawn becomes an <strong>isolated pawn</strong>: there is no white pawn left on the c- and e-files to defend it. In the middlegame, it is not a weakness: it is a source of activity."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Be7",
       "Nc3",
       "O-O",
       "Re1",
       "Nc6",
       "a3",
       "b6",
       "Ba2",
       "Bb7"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "c1f4",
        "v"
       ],
       [
        "d4d5",
        "v"
       ]
      ],
      "legende": "The d4 pawn gives your knight the e5 square. Your c1 bishop comes out to f4 or g5, your a2 bishop aims at e6 and f7, and the d5 push is waiting for its moment.",
      "marques": [
       "d4",
       "e5",
       "c1",
       "a2"
      ]
     },
     {
      "t": "p",
      "html": "The d4 pawn supports a knight on e5: only the f7 pawn could chase it (…f6), and that move would weaken e6. Your plan: active pieces, an attack on the castled king, and the d5 push at the right moment. Avoid trading all the pieces: in the endgame, the isolated pawn would become a target."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Nc6",
       "Nc3",
       "Be7",
       "Re1",
       "O-O",
       "a3",
       "a6",
       "Ba2",
       "b5"
      ],
      "coups": [
       "d5",
       "exd5",
       "Nxd5",
       "Nxd5",
       "Qxd5",
       "Bb7",
       "Qh5"
      ],
      "legendes": [
       "<span class=\"mv good\">12.d5</span>! All your pieces are ready: the e1 rook, the a2 bishop, the c3 knight. The push is going to open lines for them.",
       "Black takes.",
       "The knight takes back: it attacks the e7 bishop and the f6 knight.",
       "Trade.",
       "The queen takes back, in the centre. With your a2 bishop behind her, she aims at f7, and she attacks the c6 knight.",
       "The bishop defends c6 and aims at your queen behind the knight: if the knight moves, she is attacked.",
       "The queen moves away… towards Black's castled king."
      ],
      "fin": "The isolated pawn has gone, but it has done its job: your pieces are active, Black's are still at the back (Stockfish: +1.3).",
      "titre": "The d5 push",
      "quiz": [
       "q5e463ebba"
      ],
      "marques": [
       [
        "d5",
        "e1",
        "a2",
        "c3"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e7!",
        "f6!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "a2",
        "f7!",
        "c6!"
       ],
       [
        "b7",
        "c6",
        "d5!"
       ],
       [
        "h5",
        "g8"
       ],
       [
        "h5",
        "a2",
        "e1",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. The attack on the castled king: Bd3 + Qc2"
     },
     {
      "t": "p",
      "html": "The bishop on d3, the queen on c2 behind it: it is a battery, two pieces lined up on the same diagonal. It aims at h7. In general, apart from the king, only the f6 knight defends h7. So before any Bxh7+, look at that knight."
     },
     {
      "t": "liste",
      "items": [
       "<strong>The f6 knight is pinned</strong> (your bishop on g5, their queen on d8, nothing left in between): Bxh7+ wins a pawn. The knight cannot take back without losing the queen, and the king cannot take back if your queen protects the bishop (exercise 3).",
       "<strong>The f6 knight disappears</strong>: Bxf6 removes the defender, then Bxh7+ or Qxh7 (exercise 4).",
       "<strong>The f6 knight is free</strong>: Bxh7+ loses a piece (see the typical mistakes)."
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Nbd7",
       "e3",
       "Bd6",
       "Nf3",
       "O-O",
       "Bd3",
       "c6",
       "Qc2"
      ],
      "fleches": [
       [
        "d3h7",
        "v"
       ],
       [
        "g5d8",
        "r"
       ]
      ],
      "legende": "Black has put the bishop on d6 instead of e7. The f6 knight is pinned to the queen: h7 no longer holds. Black must react (…h6 or …dxc4), otherwise Bxh7+ wins a pawn.",
      "marques": [
       "d6",
       "f6!",
       "h7!",
       "g5"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1"
      ],
      "coups": [
       "Ne6",
       "Bxf6",
       "Bxf6",
       "Bxh7+",
       "Kh8",
       "Bd3"
      ],
      "legendes": [
       "The knight leaves f8, from where it was defending h7.",
       "You remove the other defender of h7: the f6 knight.",
       "Black takes back.",
       "The bishop takes on h7 with check. The king cannot take: your queen on c2 protects the bishop.",
       "The king steps aside.",
       "The bishop comes back: a pawn up."
      ],
      "fin": "Stockfish: +1.3. Remember the order: first remove the defender (Bxf6), then take (Bxh7+).",
      "titre": "Bxf6, then Bxh7+",
      "quiz": [
       "qa3bbaa89a"
      ],
      "marques": [
       [
        "f8",
        "h7!"
       ],
       [
        "f6!",
        "h7!"
       ],
       [
        "f6!"
       ],
       [
        "h7!",
        "c2",
        "g8"
       ],
       [
        "h8"
       ],
       [
        "d3"
       ],
       [
        "f6",
        "h7"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Where to put your pieces"
     },
     {
      "t": "table",
      "entetes": [
       "Piece",
       "Square",
       "Why"
      ],
      "lignes": [
       [
        "f1 bishop",
        "d3 (Declined); a2, c2 or b1 (isolated pawn)",
        "It aims at h7, or at f7 from a2. The queen goes behind it."
       ],
       [
        "Queen",
        "c2 (Declined); d3 (isolated pawn)",
        "On the h7 diagonal with the bishop: behind it on c2, in front of it on d3. On c2, she also watches the c-file."
       ],
       [
        "c1 bishop",
        "g5; or f4 with the isolated pawn",
        "On g5, it attacks the f6 knight, which defends d5 and h7 (it pins it if the black bishop is not on e7)."
       ],
       [
        "g1 knight",
        "f3, then e5",
        "On e5, it is supported by d4 and eyes c6, d7 and f7."
       ],
       [
        "b1 knight",
        "c3",
        "It attacks d5 and supports e4. In the Carlsbad, it can go to a4 heading for b6 or c5."
       ],
       [
        "a1 rook",
        "b1 (Carlsbad); d1 (isolated pawn)",
        "It supports b4-b5, or the d5 push."
       ],
       [
        "f1 rook",
        "c1 (Carlsbad); e1 (isolated pawn)",
        "On the file that opens: c after bxc6, e next to the isolated pawn."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Pawn breaks: when to push your pawns"
     },
     {
      "t": "p",
      "html": "A pawn break is a pawn move that attacks an enemy pawn to open the game. Each structure has its own."
     },
     {
      "t": "table",
      "entetes": [
       "Break",
       "Structure",
       "When to play it"
      ],
      "lignes": [
       [
        "b4-b5",
        "Carlsbad",
        "After Rb1, and a4 if Black has played …a6. It creates the c6 weakness; if …cxb5, the d5 pawn loses its support."
       ],
       [
        "d4-d5",
        "Isolated pawn",
        "When your rooks are on d1 and e1 and Black's pieces are badly placed: a queen facing your d1 rook, a poorly defended e7 bishop. It opens lines towards the king."
       ],
       [
        "e3-e4",
        "Declined, Accepted",
        "When the d5 pawn no longer watches e4 (after …dxc4) and your c3 knight defends e4. With a black bishop on d6 and a knight on f6, e4-e5 threatens a fork (exercise 7)."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Against Black's usual plans"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…Ne4.</strong> Trade with Bxe7 Qxe7, then count the defenders of the e4 knight. If the black queen leaves the e-file, the e4 knight no longer has enough: <a class=\"lien-var\" href=\"#\" data-var=\"q76da77d06\">13…Qd8? 14.Nxe4</a> wins a pawn (Stockfish: +2.0).",
       "<strong>…Bf5 in the Carlsbad.</strong> First check whether the bishop is protected. If it is not, <a class=\"lien-var\" href=\"#\" data-var=\"q3553b1494\">11…Bf5? 12.Bxf5</a> wins a piece (Stockfish: +5.8). If it is, let the trade happen and carry on with your plan.",
       "<strong>…dxc4 then …Nd5.</strong> Trade bishops on e7, castle, and watch out for …e5: without preparation, this push loses a pawn.",
       "<strong>…Bd6 instead of …Be7.</strong> The f6 knight ends up pinned to the queen: look for Bxh7+ (exercise 3).",
       "<strong>…a5 to slow down b4.</strong> Prepare b4 with a3. If b4 has already been played, b5 slips past the a5 pawn (exercise 1).",
       "<strong>…c5 in the Accepted.</strong> After …cxd4 exd4, you have the isolated pawn: play actively, as above."
      ]
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "The traps",
    "blocs": [
     {
      "t": "p",
      "html": "Two kinds of traps: the ones you set, where Black loses material by playing the natural move, and the ones set for you, which you need to know so as not to fall into them. All have been checked with Stockfish. Each trap's quiz asks you for the right move: the punishment when your opponent goes wrong, the defence when you are the target."
     },
     {
      "t": "h",
      "html": "The ones you set"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "b5",
       "a4",
       "c6",
       "axb5"
      ],
      "coups": [
       "cxb5",
       "Qf3",
       "Nc6",
       "Qxc6+"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…cxb5</span>?? Natural: Black takes their pawn back. But look at the long f3-a8 diagonal: there is nothing left on it.",
       "<span class=\"mv good\">6.Qf3</span>! The queen attacks the a8 rook, and nothing can protect it.",
       "Black blocks the diagonal with the knight. After <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Bb7</a>, same punishment.",
       "You take the knight, with check."
      ],
      "fin": "You have won a piece (Stockfish: +3.7). If Black blocks with <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Bb7</a>, 7.Qxb7 wins the bishop, and the a8 rook is still attacked.",
      "titre": "Accepted: 5…cxb5?? 6.Qf3",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "qc43ff2890",
       "q713a5c386"
      ],
      "marques": [
       [
        "b5!",
        "a8!"
       ],
       [
        "f3",
        "a8!"
       ],
       [
        "c6!",
        "f3",
        "a8"
       ],
       [
        "c6!",
        "e8"
       ],
       [
        "c6",
        "a8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "Bf5",
       "Qb3"
      ],
      "coups": [
       "Nbd7",
       "Bxf7#"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…Nbd7</span>?? Developing looks normal. But the knight has just taken the d7 square, the king's only escape.",
       "<span class=\"mv good\">6.Bxf7#</span>: mate. The king has no square (d7 its knight, e7 its pawn, d8 its queen, f8 its bishop) and your queen on b3 protects the bishop."
      ],
      "fin": "Mate on move six. Against <a class=\"lien-var\" href=\"#\" data-var=\"q05ae68862\">5…b6</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q5e60b02a7\">5…Qc8</a>, the same 6.Bxf7+ wins at least a pawn and stops the black king from castling.",
      "titre": "Accepted: 5…Nbd7?? 6.Bxf7#",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "qc2a8bfd37",
       "q05ae68862",
       "q5e60b02a7"
      ],
      "marques": [
       [
        "d7",
        "e8!",
        "f7!"
       ],
       [
        "e8!",
        "f7!",
        "b3",
        "d7"
       ],
       [
        "e8!",
        "f7",
        "b3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "Nf6",
       "cxd5",
       "Nxd5",
       "Nf3",
       "Nc6",
       "e4"
      ],
      "coups": [
       "e5",
       "exd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…e5</span>?? Black counter-attacks in the centre… and forgets that the d5 knight is attacked.",
       "<span class=\"mv good\">6.exd5</span>: the knight falls."
      ],
      "fin": "A knight up (Stockfish: +4.1). Remember the question to ask: when I attack a piece, has my opponent moved it to safety? Black's right defence was <a class=\"lien-var\" href=\"#\" data-var=\"q482614658\">5…Nb6</a>.",
      "titre": "Marshall: 5…e5?? 6.exd5",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q8a0046435",
       "q482614658"
      ],
      "marques": [
       [
        "d5!",
        "e4"
       ],
       [
        "d5!"
       ],
       [
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "c4",
       "g6",
       "Nc3",
       "Bg7",
       "e4"
      ],
      "coups": [
       "Nxe4",
       "Nxe4",
       "d5",
       "cxd5",
       "Qxd5",
       "Nc3"
      ],
      "legendes": [
       "<span class=\"mv bad\">4…Nxe4</span>?? Black takes your e4 pawn, counting on a trick.",
       "You take the knight back.",
       "Black's idea: the d5 pawn attacks your e4 knight and your c4 pawn at the same time.",
       "You take the pawn.",
       "The queen attacks your e4 knight and your d4 pawn.",
       "The knight gets to safety. Black is going to win back the d4 pawn, but that is as far as it goes."
      ],
      "fin": "Result: a knight for two pawns in your favour (Stockfish: +3.4). Remember: your e4 pawn defended by the c3 knight cannot be taken for free.",
      "titre": "King's Indian: 4…Nxe4??",
      "couleurs": [
       "r",
       "v",
       "g",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q1b7bfa42b"
      ],
      "marques": [
       [
        "e4!",
        "c3"
       ],
       [
        "e4!"
       ],
       [
        "d5",
        "e4!",
        "c4!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e4!",
        "d4!"
       ],
       [
        "d4!",
        "d5",
        "g7"
       ],
       [
        "c3",
        "e4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The ones set for you"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Nbd7",
       "cxd5",
       "exd5"
      ],
      "coups": [
       "Nxd5",
       "Nxd5",
       "Bxd8",
       "Bb4+",
       "Qd2",
       "Bxd2+",
       "Kxd2",
       "Kxd8"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Nxd5</span>?? The f6 knight looks pinned, so the d5 pawn looks free…",
       "…but the knight is not really pinned: it takes anyway, and never mind the queen.",
       "You take the queen, as planned.",
       "Check! The bishop attacks your king.",
       "You must deal with the check: the queen steps in between.",
       "Black takes your queen in turn.",
       "You take back the bishop.",
       "And the black king takes back your bishop on d8."
      ],
      "fin": "Result: the queens have gone and you have lost a knight (Stockfish: −3.3). It is the Elephant Trap. The rule: in the Declined, when a black knight is on d7, never take on d5 with your knight. Play <a class=\"lien-var\" href=\"#\" data-var=\"qada680846\">5.e3</a>, or <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>.",
      "titre": "The Elephant Trap",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "qada680846",
       "q8f9efb5ee"
      ],
      "marques": [
       [
        "d5!",
        "f6",
        "g5",
        "d8"
       ],
       [
        "f6",
        "d5!",
        "d8!"
       ],
       [
        "d8!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "d2!"
       ],
       [
        "d2!"
       ],
       [
        "d8!"
       ],
       [
        "d7",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "e5",
       "dxe5",
       "d4"
      ],
      "coups": [
       "e3",
       "Bb4+",
       "Bd2",
       "dxe3",
       "Bxb4",
       "exf2+",
       "Ke2",
       "fxg1=N+"
      ],
      "legendes": [
       "<span class=\"mv bad\">4.e3</span>? Natural: you attack the d4 pawn. But you give it a square to advance to by capturing, right in front of your king.",
       "Check.",
       "You block with the bishop.",
       "The pawn takes on e3: it now threatens to take on f2 or d2.",
       "<span class=\"mv bad\">6.Bxb4</span>?? You take the bishop…",
       "…and the pawn takes on f2, with check.",
       "Your king has to move.",
       "The pawn takes your knight and promotes… to a knight, with check. After 8.Rxg1, …Bg4+ would win your queen."
      ],
      "fin": "It is the Lasker Trap (Stockfish: −5.9). Against the Albin Countergambit 2…e5 3.dxe5 d4, play <a class=\"lien-var\" href=\"#\" data-var=\"q15446cc39\">4.Nf3</a>: you keep your extra pawn, safely. And if one day you have played 4.e3 and 5…dxe3 comes, take back with <a class=\"lien-var\" href=\"#\" data-var=\"q450b3a77d\">6.fxe3</a>.",
      "titre": "The Lasker Trap (Albin Countergambit)",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "r",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q15446cc39",
       "q450b3a77d"
      ],
      "marques": [
       [
        "d4!",
        "e3",
        "e1"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "e3",
        "f2!",
        "d2!"
       ],
       [
        "b4!",
        "e3"
       ],
       [
        "f2!",
        "e1!"
       ],
       [
        "e1!",
        "f2"
       ],
       [
        "g1!",
        "e2!",
        "d1!",
        "c8"
       ],
       [
        "g1",
        "e2!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4",
       "Qb4+",
       "Bd2",
       "Qxb2"
      ],
      "coups": [
       "Bc3",
       "Bb4",
       "Qd2",
       "Bxc3",
       "Qxc3",
       "Qc1#"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Bc3</span>?? The bishop chases the queen on b2 and protects your a1 rook. It looks clever…",
       "The black bishop pins your c3 bishop to your king.",
       "You defend the c3 bishop with the queen.",
       "Black takes your bishop.",
       "You take back…",
       "…and the black queen mates on c1: your queen on c3 no longer protects c1."
      ],
      "fin": "Mate. It is the Englund Gambit trap (1…e5). To avoid it: against 1…e5, take the pawn, and after 4.Bf4 Qb4+ 5.Bd2 Qxb2, play <a class=\"lien-var\" href=\"#\" data-var=\"q280c70623\">6.Nc3</a>: the knight gets to safety and your queen defends the a1 rook.",
      "titre": "The Englund Gambit trap",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q280c70623"
      ],
      "marques": [
       [
        "c3",
        "b2!",
        "a1"
       ],
       [
        "b4",
        "c3!",
        "e1"
       ],
       [
        "c3!",
        "b4"
       ],
       [
        "c3!"
       ],
       [
        "c3!"
       ],
       [
        "c1!",
        "e1!",
        "c3"
       ],
       [
        "c1",
        "e1!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "Bf5",
       "Qb3",
       "e6"
      ],
      "coups": [
       "Qxb7",
       "Be4"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Qxb7</span>?! The b7 pawn looks free…",
       "Well spotted by Black: the bishop attacks your queen. When she moves, …Bxg2 wins a pawn and threatens the h1 rook. Stockfish: equal position (0.0)."
      ],
      "fin": "Nothing serious, but you have thrown away your advantage. Play <a class=\"lien-var\" href=\"#\" data-var=\"qcdd21b677\">6.Nc3 first, then Qxb7</a>: +0.6.",
      "titre": "Accepted: greed too early",
      "couleurs": [
       "r",
       "g"
      ],
      "quiz": [
       "qcdd21b677"
      ],
      "marques": [
       [
        "b7!"
       ],
       [
        "e4",
        "b7!",
        "g2!",
        "h1"
       ],
       [
        "b7!",
        "e4",
        "b1"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "The exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "Your repertoire follows simple rules: 2.c4, Nc3, e4 when possible, develop before attacking. Here are the places where the rule does not work, and why. Click the move to play to see it on the board."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "The rule would say",
       "Play instead",
       "Why"
      ],
      "lignes": [
       [
        "1…e5 (Englund Gambit)",
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">2.dxe5</a>",
        "The pawn is free (+1.3). After 2.c4 exd4, your queen has to take back and gets chased by …Nc6 (−0.2)"
       ],
       [
        "1…c5",
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">2.d5</a>",
        "After 2.c4 cxd4, your d4 pawn disappears and your queen gets chased (−0.2 against +0.7)"
       ],
       [
        "Accepted: 3…b5",
        "Attack c4 with 4.b3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a>",
        "Attack the base of the chain instead, the b5 pawn (+1.0 against +0.2)"
       ],
       [
        "Accepted: 4…Bf5",
        "Do not bring the queen out early",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Qb3</a>",
        "The bishop has left c8: double attack on b7 and f7"
       ],
       [
        "Declined: 4…h6",
        "Keep the bishop pair (5.Bh4)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Bxf6</a>",
        "Removes a defender of d5 (+1.2 against +0.1)"
       ],
       [
        "Declined: 3…dxc4",
        "Take back with 4.e3 then Bxc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>",
        "The full centre in one move (+0.6)"
       ],
       [
        "Marshall: 4…Bg4",
        "Do not move the same piece twice",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">5.Ne5</a>",
        "Attacks the bishop and prepares Qb3 against b7 (+1.3)"
       ],
       [
        "King's Indian: 4…O-O",
        "Push 5.e5 to chase the knight",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">5.Nf3</a>",
        "After 5.e5, the knight retreats to e8 and Stockfish gives you almost nothing any more (+0.1 against +0.6 for 5.Nf3)"
       ],
       [
        "King's Indian: 4…e6?!",
        "5.Nf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q63038f5a0\">5.e5</a>",
        "Here the knight has no good square left: it has to go back to g8 (+1.5). After 5…Ng4, 6.Qxg4"
       ],
       [
        "Benoni: 4…Be7",
        "5.e4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">5.d6</a>",
        "The pawn attacks the bishop, which has to retreat to f8 (+2.5)"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The most important one: 1…e5"
     },
     {
      "t": "seq",
      "debut": [
       "d4"
      ],
      "coups": [
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4",
       "Qb4+",
       "Bd2",
       "Qxb2",
       "Nc3"
      ],
      "legendes": [
       "The Englund Gambit: Black offers a pawn on the very first move.",
       "Here, no 2.c4: <span class=\"mv good\">2.dxe5</span>, the pawn is free.",
       "Black attacks your e5 pawn.",
       "You defend it while developing.",
       "The queen attacks e5 and prepares a trap.",
       "You defend e5 again.",
       "Check, and the queen aims at b2.",
       "You block with the bishop.",
       "The queen takes on b2 and attacks your b1 knight and your a1 rook.",
       "<span class=\"mv good\">6.Nc3</span>: the knight gets to safety, and your queen on d1 now defends the a1 rook. Certainly not 6.Bc3??: after …Bb4, you lose at least the a1 rook (see the traps)."
      ],
      "fin": "You are a pawn up and ahead in development: Black has made three queen moves. Stockfish: +2.0.",
      "titre": "Against 1…e5: take!",
      "quiz": [
       "q6cc4c9200"
      ],
      "marques": [
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "b4",
        "e1!",
        "b2!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "b2",
        "b1!",
        "a1!"
       ],
       [
        "d1",
        "a1!",
        "b2"
       ],
       [
        "d1",
        "a1",
        "c3",
        "b2"
       ]
      ]
     },
     {
      "t": "p",
      "html": "To remember: after 4…Qb4+, 5.Bd2 is the right move, and after 5…Qxb2, 6.Nc3 is the only one. Any other move loses the a1 rook, and 6.Bc3?? is even worse: after …Bb4, you can even get mated (see The traps)."
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Middlegame exercises",
    "blocs": [
     {
      "t": "p",
      "html": "Eight positions taken from your repertoire. Each one comes from a possible continuation from the opening, often with a typical mistake by Black. Find White's move: in each position, Stockfish ranks it clearly ahead of all the others. The Quiz button asks you for your moves; Black's play themselves."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "b5",
       "cxb5",
       "Nxd5"
      ],
      "legendes": [
       "<span class=\"mv good\">15.b5</span>! The pawn slips past the a5 pawn and attacks c6. If Black lets it happen, bxc6 will leave them a weak c6 pawn.",
       "Black takes… but the c6 pawn was the support of d5.",
       "Nxd5! The d5 pawn had no defender left. Your knight takes it and attacks the queen on e7."
      ],
      "fin": "Black has to save the queen, and the e4 knight has lost the support of the d5 pawn: you are going to win more material (Stockfish: +4.8). Best defence: 15…Ng6 16.bxc6 bxc6, but Black keeps two weak pawns, a5 and c6 (Stockfish: +1.1).",
      "titre": "Exercise 1: the minority attack",
      "fen": "r1b1rnk1/1p2qpp1/2p4p/p2p4/1P1Pn3/2NBPN2/P1Q2PPP/1R3RK1 w - - 0 15",
      "quiz": [
       "qa326464e1"
      ],
      "marques": [
       [
        "b5",
        "a5",
        "c6!"
       ],
       [
        "c6",
        "d5!"
       ],
       [
        "d5!",
        "e7!"
       ],
       [
        "e7!",
        "e4!",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf6",
       "Bxf6",
       "Nxd5",
       "Qd8"
      ],
      "legendes": [
       "Bxf6! The f6 knight was one of the two defenders of d5. You trade it off.",
       "Black takes back with the bishop.",
       "Nxd5! The c6 pawn cannot take back: …cxd5 would open the c-file, and your queen on c2 would take the queen on c7.",
       "The queen leaves the c-file."
      ],
      "fin": "Then 14.Nxf6+ Qxf6: you have won a pawn (Stockfish: +2.1). It is the same idea as 5.Bxf6 against 4…h6 in the opening: remove a defender of d5.",
      "titre": "Exercise 2: who defends d5?",
      "fen": "r1b1rnk1/ppq1bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 4 12",
      "quiz": [
       "qc5ad3a23c"
      ],
      "marques": [
       [
        "f6!",
        "d5!",
        "c6"
       ],
       [
        "f6!"
       ],
       [
        "d5!",
        "c6",
        "c2",
        "c7!"
       ],
       [
        "d8"
       ],
       [
        "d5",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kh8"
      ],
      "legendes": [
       "Bxh7+! The black bishop has left e7: nothing stands between your g5 bishop and the queen on d8 any more. The f6 knight is pinned: if it takes on h7, Bxd8. And the king cannot take: your queen on c2 protects the bishop.",
       "The king tucks itself away on h8."
      ],
      "fin": "Your bishop goes back to d3 next move: a pawn up, and a less sheltered black king (Stockfish: +2.4).",
      "titre": "Exercise 3: the Bd3 + Qc2 battery",
      "fen": "r1bq1rk1/pp1n1ppp/2pb1n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R w KQ - 2 10",
      "quiz": [
       "q546213a00"
      ],
      "marques": [
       [
        "h7!",
        "f6!",
        "g5",
        "d8"
       ],
       [
        "h8"
       ],
       [
        "h7",
        "d3",
        "h8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf6",
       "Bxf6",
       "Qxh7#"
      ],
      "legendes": [
       "Bxf6! Along with the king, the f6 knight is the only defender of h7. Your queen on d3 and your bishop on c2 aim at h7: it is the battery, the other way round.",
       "Black takes back without seeing the threat.",
       "Qxh7#. The king cannot take (your c2 bishop protects the queen), and the f8 rook blocks its only free square."
      ],
      "fin": "Mate. After 14…gxf6, it is the same mate. Black had to play 14…g6, but was still losing a piece after 15.Bxe7 (Stockfish: +5.0).",
      "titre": "Exercise 4: the isolated pawn and Black's castled king",
      "fen": "2rq1rk1/1b2bppp/ppn1pn2/6B1/3P4/2NQ1N2/PPB2PPP/R3R1K1 w - - 0 14",
      "quiz": [
       "q7984f39dd"
      ],
      "marques": [
       [
        "f6!",
        "h7!",
        "d3",
        "c2"
       ],
       [
        "f6!",
        "h7!"
       ],
       [
        "h7!",
        "g8!",
        "c2",
        "f8"
       ],
       [
        "h7",
        "g8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d5",
       "exd5",
       "Nxd5",
       "Nxd5",
       "Bxd5"
      ],
      "legendes": [
       "d5! Your d1 rook is behind the pawn, the black queen right in front, on d6. The pawn threatens dxc6 or dxe6: the d-file would open onto the queen.",
       "Black takes.",
       "Nxd5! The knight attacks the e7 bishop, already attacked by your queen on e2, and the f6 knight.",
       "Black trades.",
       "Bxd5! Your bishop stands between your d1 rook and the queen on d6: as soon as it moves (Bxc6, Bxf7+), the rook will attack the queen. And the e7 bishop is still attacked by your g5 bishop and your queen on e2."
      ],
      "fin": "Black cannot parry everything: they are going to lose material (Stockfish: +4.7).",
      "titre": "Exercise 5: the isolated pawn and the d-file",
      "fen": "r4rk1/pb2bppp/1pnqpn2/6B1/2BP4/2N2N2/PP2QPPP/3RR1K1 w - - 4 13",
      "quiz": [
       "q67510174b"
      ],
      "marques": [
       [
        "d5",
        "d1",
        "d6!",
        "c6!"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "e7!",
        "f6!",
        "e2"
       ],
       [
        "d5!"
       ],
       [
        "d5",
        "d1",
        "d6!",
        "e7!"
       ],
       [
        "d5",
        "d1",
        "d6!",
        "e7!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qb3",
       "e6",
       "Qxb7"
      ],
      "legendes": [
       "Qb3! The bishop has left c8: the b7 pawn has no defender left. And if the d5 knight retreats to b6, your queen's diagonal to f7 opens.",
       "Black opens the f8 bishop, but forgets b7.",
       "Qxb7: a pawn up, and your queen attacks the a8 rook."
      ],
      "fin": "Stockfish: +1.6. It is the logical follow-up to 5.Ne5: the knight chases the bishop, the queen takes b7. And after 6…Nb6??, 7.Qxf7 is mate: the e5 knight protects your queen.",
      "titre": "Exercise 6: the Marshall with …Bg4",
      "fen": "rn1qkb1r/ppp1pppp/8/3nNb2/3P4/8/PP2PPPP/RNBQKB1R w KQkq - 4 6",
      "quiz": [
       "q772650314"
      ],
      "marques": [
       [
        "b3",
        "b7!",
        "d5",
        "f7"
       ],
       [
        "f8",
        "b7!",
        "b3"
       ],
       [
        "b7",
        "a8!"
       ],
       [
        "e5",
        "b7",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "Nbd7",
       "e5"
      ],
      "legendes": [
       "e4! Your c3 knight supports the pawn. And there is a threat: e5 would attack both the d6 bishop and the f6 knight.",
       "Black develops without seeing the threat.",
       "e5! A fork: the pawn attacks the bishop and the knight. One of the two is going to fall."
      ],
      "fin": "You win a piece for a pawn (Stockfish: +4.5). The best defence was 8…Bb4 (or 8…Be7); after 9.e5 Nd5, you keep a big centre and space (Stockfish: +1.9).",
      "titre": "Exercise 7: the Accepted with …Bd6",
      "fen": "rnbq1rk1/ppp2pp1/3bpn1p/8/2BP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 0 8",
      "quiz": [
       "q58a52058a"
      ],
      "marques": [
       [
        "e4",
        "c3",
        "d6!",
        "f6!"
       ],
       [
        "e4",
        "d6!",
        "f6!"
       ],
       [
        "e5!",
        "d6!",
        "f6!"
       ],
       [
        "e5",
        "d6!",
        "f6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Ne5",
       "Ng6"
      ],
      "legendes": [
       "Ne5! With …b6, Black has removed the pawn that defended c6. Your knight, supported by d4, attacks this pawn that nothing protects any more.",
       "Black attacks your knight."
      ],
      "fin": "17.Nxc6: the pawn falls, and your knight attacks the queen on e7 (Stockfish: +2.3). That is what the minority attack is for: creating a c6 pawn that you end up winning.",
      "titre": "Exercise 8: after the minority attack",
      "fen": "r3rnk1/4qppp/ppp5/3p1b2/PP1Pn3/2NBPN2/2Q2PPP/1RR3K1 w - - 0 16",
      "quiz": [
       "q4343b279f"
      ],
      "marques": [
       [
        "e5",
        "c6!",
        "d4",
        "b6"
       ],
       [
        "g6",
        "e5!"
       ],
       [
        "e5",
        "c6!",
        "e7!"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Model games",
    "blocs": [
     {
      "t": "p",
      "html": "Two games built for the lesson: the opponent's moves are typical mistakes between 1000 and 1600 Elo, and each of your moves has been checked with Stockfish. They are not real games. They show how the plans of this lesson link together, from the opening to the win. Step through move by move and read the explanations; the key moves are in colour."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "c4",
       "e6",
       "Nc3",
       "Nf6",
       "Bg5",
       "Be7",
       "e3",
       "O-O",
       "Nf3",
       "Nbd7",
       "Qc2",
       "c6",
       "Bd3",
       "Re8",
       "cxd5",
       "exd5",
       "O-O",
       "Nf8",
       "Rab1",
       "Ng6",
       "b4",
       "a6",
       "a4",
       "Bd7",
       "b5",
       "axb5",
       "axb5",
       "Bd6",
       "bxc6",
       "bxc6",
       "Na4",
       "Qe7",
       "Nb6",
       "Rab8",
       "Nxd7",
       "Qxd7",
       "Bxf6",
       "gxf6",
       "Rxb8",
       "Rxb8",
       "Rc1",
       "Ne7",
       "Bxh7+",
       "Kg7",
       "Bd3",
       "Nf5",
       "Bxf5",
       "Qb7",
       "Qxc6",
       "Qxc6",
       "Rxc6"
      ],
      "legendes": [
       "Your first move.",
       "Black replies in the centre.",
       "The Queen's Gambit.",
       "Black declines: it is the Queen's Gambit Declined.",
       "A second attacker on d5.",
       "One more defender.",
       "The pin.",
       "Black unpins.",
       "You open your f1 bishop.",
       "Black castles.",
       "Development.",
       "The other knight comes out. Reminder: with a black knight on d7, never take on d5 with your knight.",
       "The queen prepares the battery with the bishop.",
       "Black reinforces d5.",
       "The Bd3 + Qc2 battery is in place: it aims at h7.",
       "The rook prepares …Nf8.",
       "You trade on d5: it is the Carlsbad structure.",
       "Black takes back with the e-pawn.",
       "Your king is safe.",
       "The knight goes via f8: from there, it defends h7.",
       "The rook comes to support the b4 push: the minority attack begins.",
       "The knight comes closer to your king.",
       "First step of the minority attack.",
       "Black watches b5.",
       "You support b5 with the a-pawn.",
       "The bishop goes to d7, from where it defends c6.",
       "Now is the moment: b5 attacks c6.",
       "Black takes.",
       "You take back: the a-file opens, and the b5 pawn attacks c6 again.",
       "The e7 bishop comes to d6 and turns towards your castled king.",
       "You take on c6.",
       "There is the weakness: a lone c6 pawn on the c-file, and no black pawn left to watch b6 and c5.",
       "The knight aims at b6 and c5, two squares from which no pawn can chase it.",
       "<span class=\"mv bad\">17…Qe7</span>? The queen leaves d8, from where she was watching b6.",
       "The knight lands on b6: it attacks the a8 rook and the d7 bishop.",
       "The rook escapes and attacks your knight.",
       "You take the bishop that was defending c6: it is stronger than leaving your knight on b6.",
       "The queen takes back.",
       "You take the f6 knight: the pawns protecting the black king are going to be damaged.",
       "The g-pawn takes back: the black king is exposed.",
       "You trade rooks on the b-file.",
       "The rook takes back.",
       "Your rook aims at the weak c6 pawn. With your queen on c2, you are already attacking it twice.",
       "The knight comes to defend c6… but it leaves g6, where it was blocking your battery's diagonal.",
       "<span class=\"mv good\">23.Bxh7+</span>! Nothing protects h7 any more, and the king cannot take: your queen on c2 backs up the bishop.",
       "The king steps aside.",
       "The bishop comes back. You are a pawn up, and the black king has no shelter left.",
       "<span class=\"mv bad\">24…Nf5</span>?? The knight jumps to f5, onto your battery's diagonal.",
       "You take. The knight was defended by the queen on d7, but if …Qxf5, your queen on c2 takes the black queen: that is the battery.",
       "Black does not take back: they are a piece down.",
       "You take the c6 pawn and offer a queen trade. With an extra piece, every trade brings you closer to the win.",
       "Black trades.",
       "The rook takes back."
      ],
      "fin": "Black resigns: they are a piece and two pawns down (Stockfish: +6.5). The plan, in order: the Carlsbad structure (9.cxd5), the minority attack (b4, a4, b5, bxc6), a knight on the b6 hole, then the Bd3 + Qc2 battery against h7 and f5.",
      "titre": "Model game 1: the Declined and the minority attack",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "c4",
        "d5"
       ],
       [
        "e6",
        "d5"
       ],
       [
        "c3",
        "c4",
        "d5!"
       ],
       [
        "f6",
        "d5"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "e7",
        "f6"
       ],
       [
        "f1"
       ],
       [
        "g8"
       ],
       [
        "f3"
       ],
       [
        "d7",
        "d5",
        "c3"
       ],
       [
        "c2",
        "f1",
        "h7"
       ],
       [
        "c6",
        "d5"
       ],
       [
        "d3",
        "c2",
        "h7!"
       ],
       [
        "e8",
        "d7",
        "f8"
       ],
       [
        "d5!"
       ],
       [
        "e6",
        "d5!"
       ],
       [
        "g1"
       ],
       [
        "f8",
        "h7"
       ],
       [
        "b1",
        "b2",
        "b4"
       ],
       [
        "g6",
        "g1"
       ],
       [
        "b4"
       ],
       [
        "a6",
        "b5"
       ],
       [
        "a4",
        "b5"
       ],
       [
        "d7",
        "c6"
       ],
       [
        "b5",
        "c6!"
       ],
       [
        "b5!"
       ],
       [
        "b5",
        "c6!"
       ],
       [
        "d6",
        "h2"
       ],
       [
        "c6!"
       ],
       [
        "c6!",
        "b6",
        "c5"
       ],
       [
        "a4",
        "b6",
        "c5"
       ],
       [
        "d8",
        "b6",
        "a4"
       ],
       [
        "b6",
        "a8!",
        "d7!"
       ],
       [
        "b8",
        "b6!"
       ],
       [
        "d7!",
        "c6",
        "b6"
       ],
       [
        "d7!"
       ],
       [
        "f6!",
        "g7",
        "g8"
       ],
       [
        "f6!",
        "g8"
       ],
       [
        "b8!"
       ],
       [
        "b8!"
       ],
       [
        "c1",
        "c2",
        "c6!"
       ],
       [
        "e7",
        "g6",
        "d3",
        "h7!"
       ],
       [
        "h7!",
        "c2",
        "g8"
       ],
       [
        "g7"
       ],
       [
        "d3",
        "g7"
       ],
       [
        "f5!",
        "d3",
        "c2"
       ],
       [
        "f5!",
        "d7",
        "c2"
       ],
       [
        "f5"
       ],
       [
        "c6!",
        "b7"
       ],
       [
        "c6!"
       ],
       [
        "c6!"
       ],
       [
        "c6",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "c4",
       "dxc4",
       "e3",
       "Nf6",
       "Bxc4",
       "e6",
       "Nf3",
       "c5",
       "O-O",
       "cxd4",
       "exd4",
       "Be7",
       "Nc3",
       "O-O",
       "Re1",
       "Nc6",
       "a3",
       "b6",
       "Ba2",
       "Bb7",
       "Bf4",
       "Rc8",
       "Qd3",
       "Re8",
       "Rad1",
       "Bd6",
       "Ne5",
       "Bb8",
       "Qh3",
       "g6",
       "Nxf7",
       "Kxf7",
       "Bxe6+",
       "Kg7",
       "Bh6+",
       "Kh8",
       "Bg5",
       "Rf8",
       "Qh4",
       "Bd6",
       "d5",
       "Ne5",
       "Ne4",
       "Rc4",
       "Bxf6+",
       "Rxf6",
       "Qxf6+",
       "Qxf6",
       "Nxf6"
      ],
      "legendes": [
       "Your first move.",
       "Black replies in the centre.",
       "The Queen's Gambit.",
       "Black accepts: it is the Queen's Gambit Accepted.",
       "You open your f1 bishop, which threatens to take back on c4.",
       "Black develops.",
       "You take the pawn back.",
       "Black opens the f8 bishop.",
       "Development.",
       "Black attacks your d4 pawn.",
       "You castle first.",
       "Black trades.",
       "You take back with the e-pawn: your d4 pawn is isolated, and your c1 bishop is freed.",
       "Development.",
       "The knight supports the d5 push for later.",
       "Black castles.",
       "The rook on the half-open e-file, next to your isolated pawn.",
       "The knight attacks d4.",
       "A useful move: it prevents …Nb4 and prepares Ba2.",
       "Black prepares …Bb7.",
       "The bishop gets to safety on the diagonal leading to e6 and f7.",
       "The bishop settles on b7.",
       "The c1 bishop comes out onto a good diagonal.",
       "The rook on the c-file.",
       "The queen comes closer to Black's castled king.",
       "The rook frees f8 for the bishop.",
       "Your last piece comes into play: the rook supports d4 and prepares d5.",
       "Black offers a bishop trade.",
       "<span class=\"mv good\">15.Ne5</span>! The knight settles on the square your d4 pawn offers it. It eyes f7 and c6.",
       "The bishop keeps the diagonal.",
       "The queen goes on the attack: she aims at h7 and e6.",
       "<span class=\"mv bad\">16…g6</span>?? Black does not see the Nxf7 threat: f7 and e6 stay weak, and your a2 bishop is already aiming at them.",
       "<span class=\"mv good\">17.Nxf7</span>! If the king takes back, your bishop takes e6 with check.",
       "Black takes.",
       "The bishop comes in with check, protected by your queen on h3.",
       "The king runs away. After 18…Kf8??, 19.Qh6+ Ke7 20.Qg7#: mate.",
       "Check: the bishop comes to h6, protected by the queen.",
       "The king goes into the corner.",
       "The bishop goes back to g5: it pins the f6 knight to the queen on d8.",
       "The rook defends f6.",
       "The queen gets behind the bishop: f6 is now attacked twice.",
       "Black repositions the bishop.",
       "<span class=\"mv good\">22.d5</span>! The isolated pawn's push: it chases the c6 knight and cuts off the b7 bishop. Your knight will be able to come to e4.",
       "The knight goes to e5.",
       "A third attacker on f6: the g5 bishop, the queen on h4 and the e4 knight.",
       "The rook attacks your e4 knight.",
       "You take on f6 with check.",
       "The rook takes back.",
       "The queen takes the rook.",
       "The black queen takes back.",
       "And the knight takes back the queen."
      ],
      "fin": "Black resigns. You have won the exchange (a rook for a bishop) and two pawns, and your e6 bishop dominates (Stockfish: +5.6). The plan, in order: the isolated pawn (7.exd4), active pieces (Ba2, Bf4, Qd3, Rad1), the knight on e5, the attack on f7, then the d5 push.",
      "titre": "Model game 2: the Accepted and the isolated pawn",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "c4",
        "d5"
       ],
       [
        "c4!"
       ],
       [
        "f1",
        "c4!"
       ],
       [],
       [
        "c4!"
       ],
       [
        "f8"
       ],
       [],
       [
        "c5",
        "d4!"
       ],
       [
        "g1"
       ],
       [
        "d4!"
       ],
       [
        "d4",
        "c1"
       ],
       [
        "e7"
       ],
       [
        "c3",
        "d4",
        "d5"
       ],
       [
        "g8"
       ],
       [
        "e1",
        "d4"
       ],
       [
        "c6",
        "d4!"
       ],
       [
        "a3",
        "b4",
        "c4",
        "a2"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "a2",
        "e6",
        "f7"
       ],
       [
        "b7"
       ],
       [
        "f4"
       ],
       [
        "c8"
       ],
       [
        "d3",
        "g8"
       ],
       [
        "e8",
        "f8",
        "e7"
       ],
       [
        "d1",
        "d4",
        "d5"
       ],
       [
        "d6",
        "f4"
       ],
       [
        "e5",
        "d4",
        "f7!",
        "c6!"
       ],
       [
        "b8"
       ],
       [
        "h3",
        "h7!",
        "e6!"
       ],
       [
        "f7!",
        "e6!",
        "a2",
        "e5"
       ],
       [
        "f7!",
        "e6!",
        "a2"
       ],
       [
        "f7!"
       ],
       [
        "e6",
        "h3",
        "f7!"
       ],
       [
        "g7",
        "f8",
        "h3"
       ],
       [
        "h6",
        "h3",
        "g7!"
       ],
       [
        "h8"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "f8",
        "f6!"
       ],
       [
        "h4",
        "g5",
        "f6!"
       ],
       [
        "d6"
       ],
       [
        "d5",
        "c6!",
        "b7",
        "e4"
       ],
       [
        "e5"
       ],
       [
        "e4",
        "g5",
        "h4",
        "f6!"
       ],
       [
        "c4",
        "e4!"
       ],
       [
        "f6!",
        "h8"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "f6!"
       ],
       [
        "e6",
        "d5"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "When they play anything",
    "blocs": [
     {
      "t": "p",
      "html": "Between 1000 and 1600, many opponents leave theory very early. Your repertoire covers the three most played replies at every move; for the rest, here is what to do. Nothing to learn by heart: four principles and two tables. Click a plan to see it on the board."
     },
     {
      "t": "h",
      "html": "Four principles"
     },
     {
      "t": "liste",
      "items": [
       "<strong>2.c4 almost always works.</strong> The only exceptions: <a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">1…e5</a> and <a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">1…c5</a>.",
       "<strong>If Black does not play …d5, take the whole centre.</strong> Nc3 then e4: three pawns in the centre against none (<a class=\"lien-var\" href=\"#\" data-var=\"q5d8f5345a\">example</a>).",
       "<strong>If the c8 bishop comes out early, look at b7.</strong> Qb3 often attacks b7 (and f7 if your bishop is on c4): <a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Qb3</a> in the Queen's Gambit Accepted, <a class=\"lien-var\" href=\"#\" data-var=\"q3ecc31f14\">4.Qb3 against 2…Bf5</a>.",
       "<strong>Develop before attacking.</strong> Knights, bishops, castling. Do not move the same piece twice, except to win material or to chase a badly placed piece."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "The other first moves"
     },
     {
      "t": "table",
      "entetes": [
       "1.d4 …",
       "Your plan",
       "Stockfish at the end of the line"
      ],
      "lignes": [
       [
        "1…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2ad83de0c\">2.c4 Bg7 3.Nc3; against 3…c5, 4.d5</a>",
        "+0.3"
       ],
       [
        "1…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5d54f62ba\">2.c4; against 2…e5, 3.Nf3</a>",
        "+0.3"
       ],
       [
        "1…f5 (Dutch)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qaf9530e80\">2.c4 Nf6 3.Nc3</a>",
        "+0.6"
       ],
       [
        "1…b6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5d8f5345a\">2.c4 Bb7 3.Nc3 e6 4.e4</a>",
        "+0.4"
       ],
       [
        "1…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q24fa84b8d\">2.c4; against 2…e5, 3.d5 and 4.e4</a>",
        "+0.6"
       ],
       [
        "1…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q89121ed02\">2.c4 d5</a>: it is the Slav, see below",
        "+0.3"
       ],
       [
        "1…a6, 1…h6…",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q48c3c41c7\">2.c4, Nc3, e4</a>: the centre",
        "+0.4"
       ],
       [
        "1…Nf6 2.c4 c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb7b2a2a4b\">3.d5</a>",
        "+0.7"
       ],
       [
        "1…Nf6 2.c4 e5 (Budapest Gambit)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qe85ab425b\">3.dxe5 Ng4 4.Bf4</a>",
        "+0.5"
       ],
       [
        "1…Nf6 2.c4 Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde19d5eb8\">3.Nc3</a>",
        "+0.6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The other second moves after 1.d4 d5 2.c4"
     },
     {
      "t": "table",
      "entetes": [
       "2…",
       "Name",
       "Your plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "2…c6",
        "Slav Defence",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q359f0032d\">3.Nc3; against 3…dxc4, 4.e4 and 5.a4 against …b5</a>",
        "+0.2"
       ],
       [
        "2…e5",
        "Albin Countergambit",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q690fb882e\">3.dxe5 d4 4.Nf3</a> (not 4.e3: Lasker Trap), then g3 or a3",
        "+0.5"
       ],
       [
        "2…Nc6",
        "Chigorin Defence",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5c61fa650\">3.Nc3</a> or 3.Nf3, normal development",
        "+0.6"
       ],
       [
        "2…Bf5",
        "Baltic Defence",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3ecc31f14\">3.Nc3, then Qb3 against b7</a>",
        "+0.4 to +0.8"
       ],
       [
        "2…c5",
        "Symmetrical Gambit",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa59d47c3c\">3.cxd5; against 3…Nf6, 4.e4</a>",
        "+0.6"
       ],
       [
        "2…g6",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q33ff99518\">3.cxd5; against 3…Nf6, 4.Nf3</a>",
        "+0.8"
       ],
       [
        "2…Bg4",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q143044777\">3.Nc3</a>, or 3.Qb3 against b7",
        "+0.8 to +1.0"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "c6",
       "Nc3",
       "dxc4",
       "e4",
       "b5",
       "a4"
      ],
      "legendes": [
       "The Slav: Black supports d5 with the c-pawn, without shutting in the c8 bishop.",
       "Your reflex: Nc3.",
       "Black takes the pawn.",
       "Same idea as in the Declined: the full centre.",
       "Black defends c4 with b5, as in the Accepted.",
       "Same reply: attack the base of the chain."
      ],
      "fin": "You recognise the ideas of your repertoire: e4 when Black gives up d5, a4 against …b5. Stockfish: +0.2, a healthy position.",
      "titre": "2…c6, the Slav",
      "quiz": [
       "q359f0032d"
      ],
      "marques": [
       [
        "d5",
        "c8"
       ],
       [],
       [
        "c4!"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "c4",
        "b5"
       ],
       [
        "b5!",
        "c4"
       ],
       [
        "e4",
        "a4",
        "b5!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "c4"
      ],
      "coups": [
       "e5",
       "dxe5",
       "d4",
       "Nf3",
       "Nc6",
       "g3"
      ],
      "legendes": [
       "The Albin Countergambit: Black offers a pawn to hamper your development.",
       "You take.",
       "The d4 pawn gets in the way of your b1 knight and your e2 pawn.",
       "<span class=\"mv good\">4.Nf3</span>: you develop and defend e5. It is the move that avoids the Lasker Trap.",
       "Black attacks e5.",
       "Your bishop will go to g2, on the long diagonal."
      ],
      "fin": "A pawn up and a healthy position (Stockfish: +0.5). Your plan: Bg2, O-O, Nbd2.",
      "titre": "2…e5, the Albin",
      "quiz": [
       "q690fb882e"
      ],
      "marques": [
       [
        "e5!"
       ],
       [
        "e5!"
       ],
       [
        "d4",
        "b1",
        "e2"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "e5!"
       ],
       [
        "f1",
        "g2"
       ],
       [
        "e5",
        "f1",
        "b1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "After the repertoire"
     },
     {
      "t": "p",
      "html": "Your repertoire stops at your 5th move. After that, follow the three steps of the plan: finish your development and castle, push e4 as soon as possible, then put on pressure (a rook on the c-file, the queen on c2). If you do not know what to play, ask yourself: which is my least active piece? Improve it."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "To remember",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1.d4 and 2.c4 against everything, except 1…e5 (<a class=\"lien-var\" href=\"#\" data-var=\"qc61b15ed1\">2.dxe5</a>) and 1…c5 (<a class=\"lien-var\" href=\"#\" data-var=\"q5ff71d88b\">2.d5</a>).",
       "The c4 pawn is not lost: e3 then <a class=\"lien-var\" href=\"#\" data-var=\"q4f488a73e\">4.Bxc4</a>, or <a class=\"lien-var\" href=\"#\" data-var=\"qf3f063208\">4.a4</a> against …b5.",
       "Against …e6: Nc3, Bg5, e3, Nf3, Bd3, O-O (<a class=\"lien-var\" href=\"#\" data-var=\"qb5198fd5b\">5.e3</a>).",
       "When Black gives up d5 (…dxc4 after …e6, …Nxd5, …g6), take the centre with e4 (<a class=\"lien-var\" href=\"#\" data-var=\"qd05c711af\">4.e4</a>).",
       "Against …h6 in the Declined: <a class=\"lien-var\" href=\"#\" data-var=\"q768ef3baa\">5.Bxf6</a>, then cxd5 and Nxd5 if the queen has taken back.",
       "Against …c5: <a class=\"lien-var\" href=\"#\" data-var=\"q2f1068dfe\">4.d5</a>, never dxc5.",
       "Against …Bxc3+: <a class=\"lien-var\" href=\"#\" data-var=\"qfcb7a7d16\">bxc3</a>.",
       "If the c8 bishop comes out early: Qb3 against b7 (<a class=\"lien-var\" href=\"#\" data-var=\"q1288c99f9\">5.Qb3</a>).",
       "Never take on d5 with the knight when a black knight is on d7 (Elephant Trap: <a class=\"lien-var\" href=\"#\" data-var=\"q8f9efb5ee\">5.cxd5 exd5 6.e3</a>).",
       "Against the Albin, <a class=\"lien-var\" href=\"#\" data-var=\"q15446cc39\">4.Nf3</a>, not 4.e3."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "qfaf8ff6ad": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "e6",
     "Bxc4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Black first opens the way for the f8 bishop.",
     "You take the pawn back, as in the main line.",
     "The knight comes out.",
     "You bring out your knight: it is exactly the same position as after 3…Nf6 4.Bxc4 e6 5.Nf3."
    ],
    "fin": "Same position as the main line: the move order changes nothing.",
    "titre": "Accepted: 3…e6 leads to the same place",
    "marques": [
     [
      "f8"
     ],
     [
      "c4!"
     ],
     [],
     [],
     []
    ]
   },
   "q62b65fac6": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the other knight.",
     "Just develop: the knight defends d4 and prepares castling."
    ],
    "fin": "",
    "titre": "Accepted: 4…Nc6 5.Nf3",
    "marques": [
     [],
     [
      "d4",
      "e1"
     ],
     []
    ]
   },
   "qf10e00271": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the queen's knight.",
     "Develop: the knight defends d4 and prepares castling."
    ],
    "fin": "",
    "titre": "Accepted: 3…e6 4.Bxc4 Nc6 5.Nf3",
    "marques": [
     [],
     [
      "d4",
      "e1"
     ],
     []
    ]
   },
   "qe7ff82d8d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Bb4+",
     "Nc3"
    ],
    "legendes": [
     "Bishop check.",
     "Block with the knight: it parries the check and develops at the same time."
    ],
    "fin": "",
    "titre": "Accepted: 4…Bb4+ 5.Nc3",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "b4",
      "e1!"
     ],
     []
    ]
   },
   "qbe59e3b4a": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3"
    ],
    "legendes": [
     "Black takes their pawn back. A mistake: the long f3-a8 diagonal is now empty.",
     "The queen attacks the a8 rook, and nothing can protect it."
    ],
    "fin": "",
    "titre": "Accepted: 5…cxb5?? 6.Qf3",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "b5!",
      "a8!"
     ],
     [
      "f3",
      "a8!"
     ],
     [
      "f3",
      "a8!"
     ]
    ]
   },
   "q23b50555d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "Bd7",
     "axb5"
    ],
    "legendes": [
     "The bishop supports b5.",
     "Same idea: you take on b5, Black's chain collapses and c4 is going to fall."
    ],
    "fin": "",
    "titre": "Accepted: 4…Bd7 5.axb5",
    "marques": [
     [
      "b5!",
      "a4"
     ],
     [
      "b5!",
      "c4!"
     ],
     []
    ]
   },
   "q4e88a8472": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "bxa4",
     "Bxc4"
    ],
    "legendes": [
     "Black takes on a4.",
     "You win back your c4 pawn. Black is left with two isolated, weak a-pawns."
    ],
    "fin": "",
    "titre": "Accepted: 4…bxa4 5.Bxc4",
    "marques": [
     [
      "a4!"
     ],
     [
      "c4!",
      "a4!",
      "a7"
     ],
     []
    ]
   },
   "qf5304b87b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Qxb7",
     "Be4"
    ],
    "legendes": [
     "Greedy: the b7 pawn looks free…",
     "…but the bishop attacks your queen and threatens …Bxg2."
    ],
    "fin": "",
    "titre": "Accepted: 6.Qxb7?! Be4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "b7!"
     ],
     [
      "e4",
      "b7!",
      "g2!"
     ],
     [
      "e4",
      "b7!"
     ]
    ]
   },
   "qc2a8bfd37": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Nbd7",
     "Bxf7#"
    ],
    "legendes": [
     "The knight takes the d7 square, the black king's only escape.",
     "Mate: the king has no square left, and your queen on b3 protects the bishop."
    ],
    "fin": "",
    "titre": "Accepted: 5…Nbd7?? 6.Bxf7#",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "d7",
      "e8!",
      "f7!"
     ],
     [
      "f7!",
      "e8!",
      "b3"
     ],
     [
      "e8!",
      "f7"
     ]
    ]
   },
   "qcdd21b677": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Nc3",
     "Bd6",
     "Qxb7"
    ],
    "legendes": [
     "The knight controls e4 and b5: the black bishop can no longer come to e4.",
     "Black develops.",
     "Now the b7 pawn falls without risk."
    ],
    "fin": "",
    "titre": "Accepted: 6.Nc3 then Qxb7",
    "marques": [
     [
      "e4",
      "b5",
      "f5"
     ],
     [],
     [
      "b7!"
     ],
     []
    ]
   },
   "q713a5c386": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5",
     "cxb5",
     "Qf3"
    ],
    "coups": [
     "Bb7",
     "Qxb7"
    ],
    "legendes": [
     "Black blocks the diagonal with the bishop.",
     "Your queen takes the bishop, and the a8 rook is still attacked."
    ],
    "fin": "",
    "titre": "Accepted: 6…Bb7 7.Qxb7",
    "marques": [
     [
      "b7!",
      "f3",
      "a8"
     ],
     [
      "b7!",
      "a8!"
     ],
     [
      "b7",
      "a8!"
     ]
    ]
   },
   "q05ae68862": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "b6",
     "Bxf7+"
    ],
    "legendes": [
     "Black puts the b-pawn to safety on b6, protected by a7 and c7… but forgets f7.",
     "The bishop takes on f7 with check: the black king has to move and will no longer be able to castle."
    ],
    "fin": "",
    "titre": "Accepted: 5…b6? 6.Bxf7+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "b6",
      "a7",
      "c7",
      "f7!"
     ],
     [
      "f7!",
      "e8!"
     ],
     [
      "f7",
      "e8!"
     ]
    ]
   },
   "q5e60b02a7": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Qc8",
     "Bxf7+"
    ],
    "legendes": [
     "The queen defends b7… but f7 is defended only by the king, which will not be able to take back: your queen on b3 protects the bishop.",
     "The bishop takes on f7 with check: a pawn up, and the black king will no longer be able to castle."
    ],
    "fin": "",
    "titre": "Accepted: 5…Qc8? 6.Bxf7+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "f7!",
      "e8",
      "b3",
      "c4"
     ],
     [
      "f7!",
      "e8!"
     ],
     [
      "f7",
      "e8!"
     ]
    ]
   },
   "qe2c942a05": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "The bishop pins your c3 knight to your king.",
     "You open your f1 bishop and stay solid. If …Bxc3+, you will take back with the b-pawn."
    ],
    "fin": "",
    "titre": "Declined: 4…Bb4 5.e3",
    "marques": [
     [
      "b4",
      "c3!",
      "e1"
     ],
     [
      "f1",
      "c3!",
      "b2"
     ],
     []
    ]
   },
   "qd5b9c96e1": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "h6",
     "Bxf6"
    ],
    "coups": [
     "gxf6",
     "cxd5",
     "exd5",
     "e3"
    ],
    "legendes": [
     "Black takes back with the g-pawn.",
     "You trade in the centre.",
     "Black takes back.",
     "Development: the f1 bishop will come out next. Black keeps doubled f-pawns and a less sheltered king."
    ],
    "fin": "",
    "titre": "Declined: 4…h6 5.Bxf6 gxf6",
    "marques": [
     [
      "f6!"
     ],
     [
      "d5!"
     ],
     [
      "d5!"
     ],
     [
      "f1",
      "f6",
      "f7",
      "e8"
     ],
     []
    ]
   },
   "q84ccf2a91": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the knight.",
     "You defend d4 while developing. If Black then plays …b5, your knight takes the pawn: Nxb5."
    ],
    "fin": "",
    "titre": "Declined: 3…dxc4 4.e4 Nc6 5.Nf3",
    "marques": [
     [],
     [
      "d4!",
      "c3",
      "b5"
     ],
     []
    ]
   },
   "qfd0499a86": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "The knight attacks e4.",
     "You take the pawn back; e4 stays defended by the c3 knight."
    ],
    "fin": "",
    "titre": "Declined: 3…dxc4 4.e4 Nf6 5.Bxc4",
    "marques": [
     [
      "e4!"
     ],
     [
      "c4!",
      "e4",
      "c3",
      "f6"
     ],
     []
    ]
   },
   "qf64608c7a": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Black develops.",
     "The pin, as in the main line: your bishop pins the f6 knight to the queen."
    ],
    "fin": "",
    "titre": "Declined: 3…Bb4 4.Nf3 Nf6 5.Bg5",
    "marques": [
     [],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "qb7fe8d259": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Black takes the pawn.",
     "You open your f1 bishop to win back the c4 pawn."
    ],
    "fin": "",
    "titre": "Declined: 3…Bb4 4.Nf3 dxc4 5.e3",
    "marques": [
     [
      "c4!"
     ],
     [
      "f1",
      "c4!"
     ],
     []
    ]
   },
   "qada680846": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Just develop: your f1 bishop is going to come out. With a black knight on d7, do not touch d5 with your knight."
    ],
    "fin": "",
    "titre": "Against the Elephant Trap: 5.e3",
    "marques": [
     [
      "f1",
      "d7",
      "d5",
      "c3"
     ],
     []
    ]
   },
   "q8f9efb5ee": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7",
     "cxd5",
     "exd5"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "You continue your development. Certainly not 6.Nxd5??: the f6 knight would take anyway."
    ],
    "fin": "",
    "titre": "Elephant Trap: 6.e3, not 6.Nxd5",
    "marques": [
     [
      "c3",
      "d5",
      "f6"
     ],
     []
    ]
   },
   "q482614658": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "Nb6",
     "d5"
    ],
    "legendes": [
     "The knight retreats to b6.",
     "The pawn chases the c6 knight too: you gain another tempo."
    ],
    "fin": "",
    "titre": "Marshall: 5…Nb6 6.d5",
    "marques": [
     [
      "b6"
     ],
     [
      "d5",
      "c6!"
     ],
     []
    ]
   },
   "q782d57ad0": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "e6",
     "e4"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "The pawn chases the d5 knight: you have both central pawns."
    ],
    "fin": "",
    "titre": "Marshall: 4…e6 5.e4",
    "marques": [
     [
      "f8"
     ],
     [
      "e4",
      "d4",
      "d5!"
     ],
     []
    ]
   },
   "qd3ed39913": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "Ne5"
    ],
    "legendes": [
     "The bishop attacks your f3 knight. It is not a pin: your e2 pawn is between the knight and your queen.",
     "The knight attacks the g4 bishop and prepares Qb3 against the b7 pawn, which the bishop no longer defends."
    ],
    "fin": "",
    "titre": "Marshall: 4…Bg4 5.Ne5",
    "marques": [
     [
      "g4",
      "f3!",
      "e2",
      "d1"
     ],
     [
      "e5",
      "g4!",
      "b7!",
      "d1"
     ],
     []
    ]
   },
   "q19a9143dc": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qa5",
     "Nf3"
    ],
    "legendes": [
     "The queen goes to a5.",
     "Develop. Careful: the queen on a5 pins your c3 knight, so Bd2 first, e4 afterwards."
    ],
    "fin": "",
    "titre": "Marshall: 4…Qa5 5.Nf3",
    "marques": [
     [
      "a5"
     ],
     [
      "e2",
      "e4"
     ],
     []
    ]
   },
   "q2199979f1": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qd6",
     "Nf3"
    ],
    "legendes": [
     "The queen retreats to d6.",
     "Develop: e4 will come next, with a gain of time."
    ],
    "fin": "",
    "titre": "Marshall: 4…Qd6 5.Nf3",
    "marques": [
     [
      "d6"
     ],
     [
      "e2",
      "e4",
      "d6"
     ],
     []
    ]
   },
   "q7a2086efe": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bb4+",
     "Bd2"
    ],
    "legendes": [
     "Bishop check.",
     "Block with the bishop. Black will take back on e6, and you will keep an extra pawn."
    ],
    "fin": "",
    "titre": "Marshall: 3…e6 4.dxe6 Bb4+ 5.Bd2",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "d2",
      "b4"
     ],
     []
    ]
   },
   "qd50009549": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bxe6",
     "Nc3"
    ],
    "legendes": [
     "The bishop takes the pawn back.",
     "Develop: you are a pawn up."
    ],
    "fin": "",
    "titre": "Marshall: 3…e6 4.dxe6 Bxe6 5.Nc3",
    "marques": [
     [
      "e6!"
     ],
     [],
     []
    ]
   },
   "q8939f31b6": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Black castles right away.",
     "Develop, as against 4…d6. Do not push 5.e5: the knight retreats to e8 and you have nothing better any more."
    ],
    "fin": "",
    "titre": "King's Indian: 4…O-O 5.Nf3",
    "marques": [
     [],
     [
      "e4",
      "f6",
      "e8"
     ],
     []
    ]
   },
   "q4249f9ff9": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4"
    ],
    "legendes": [
     "Black takes your e4 pawn.",
     "You take back: your c3 knight was defending e4. Black has lost a knight for a pawn."
    ],
    "fin": "",
    "titre": "King's Indian: 4…Nxe4?? 5.Nxe4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "e4!"
     ],
     [
      "c3",
      "e4!"
     ],
     []
    ]
   },
   "q63038f5a0": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "e6",
     "e5"
    ],
    "legendes": [
     "Black plays …e6 instead of …d6: the d7 square stays occupied, and d5 is held by your pawns. Their f6 knight will have no good retreat square left.",
     "The pawn chases the knight, which has no good square left: it has to go back to g8."
    ],
    "fin": "",
    "titre": "King's Indian: 4…e6?! 5.e5",
    "marques": [
     [
      "f6!",
      "d7",
      "d5",
      "e4"
     ],
     [
      "e5",
      "f6!",
      "g8"
     ],
     []
    ]
   },
   "q36ad42467": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "coups": [
     "Nb6"
    ],
    "legendes": [
     "The knight retreats to b6 instead of trading itself: it no longer does much, and your centre stays intact."
    ],
    "fin": "",
    "titre": "Grünfeld: 5…Nb6",
    "marques": [
     [
      "b6",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q30dd750ab": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Black castles.",
     "Develop: Bd3 and O-O will follow."
    ],
    "fin": "",
    "titre": "Nimzo: 4…O-O 5.Nf3",
    "marques": [
     [],
     [
      "f1",
      "d3"
     ],
     []
    ]
   },
   "q6b68a56c8": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "d5",
     "Nf3"
    ],
    "legendes": [
     "Black occupies the centre.",
     "Develop: Bd3 and O-O will follow."
    ],
    "fin": "",
    "titre": "Nimzo: 4…d5 5.Nf3",
    "marques": [
     [],
     [
      "f1",
      "d3"
     ],
     []
    ]
   },
   "q8649452bf": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "Bg5"
    ],
    "legendes": [
     "Black plays …d5: it is a Queen's Gambit Declined.",
     "Same pin as in the Declined: the bishop pins the f6 knight."
    ],
    "fin": "",
    "titre": "1…Nf6 2.c4 e6 3.Nc3 d5 4.Bg5",
    "marques": [
     [
      "d5"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "q62b6ec7a2": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "d6",
     "e4"
    ],
    "legendes": [
     "Black supports c5 and controls e5.",
     "You complete the centre: pawns on d5 and e4."
    ],
    "fin": "",
    "titre": "Benoni: 4…d6 5.e4",
    "marques": [
     [
      "c5",
      "e5"
     ],
     [
      "d5",
      "e4"
     ],
     []
    ]
   },
   "qdb840113a": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "Be7",
     "d6"
    ],
    "legendes": [
     "Black develops the bishop to e7.",
     "The pawn advances and attacks the bishop: it has to go back to f8."
    ],
    "fin": "",
    "titre": "Benoni: 4…Be7 5.d6!",
    "marques": [
     [
      "e7"
     ],
     [
      "d6",
      "e7!",
      "f8"
     ],
     []
    ]
   },
   "qfcb7a7d16": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Black takes your knight, with check.",
     "Take back with the b-pawn: it is the only good recapture, it strengthens d4 and opens the b-file."
    ],
    "fin": "",
    "titre": "Nimzo: …Bxc3+ bxc3",
    "marques": [
     [
      "c3!",
      "e1!"
     ],
     [
      "c3!",
      "d4"
     ],
     []
    ]
   },
   "qdf1c58899": {
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Black plays …d5.",
     "It is the Queen's Gambit Declined: Nc3, then Bg5."
    ],
    "fin": "",
    "titre": "1…e6 2.c4 d5 3.Nc3",
    "marques": [
     [
      "d5"
     ],
     [
      "c3",
      "c1",
      "g5"
     ],
     []
    ]
   },
   "qf36f0b511": {
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Same position as 1…Nf6 2.c4 e6 3.Nc3."
    ],
    "fin": "",
    "titre": "1…e6 2.c4 Nf6 3.Nc3",
    "marques": [
     [],
     [],
     []
    ]
   },
   "q15446cc39": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4"
    ],
    "coups": [
     "Nf3"
    ],
    "legendes": [
     "Develop while defending e5. Not 4.e3?: after 4…Bb4+ 5.Bd2 dxe3, your advantage disappears, and 6.Bxb4?? falls into the Lasker Trap."
    ],
    "fin": "",
    "titre": "Albin: 4.Nf3, not 4.e3",
    "marques": [
     [
      "f3",
      "e5",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q450b3a77d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4",
     "e3",
     "Bb4+",
     "Bd2",
     "dxe3"
    ],
    "coups": [
     "fxe3"
    ],
    "legendes": [
     "Take back the e3 pawn with the f-pawn. Certainly not 6.Bxb4??: …exf2+ and …fxg1=N+."
    ],
    "fin": "",
    "titre": "Lasker: 6.fxe3",
    "marques": [
     [
      "e3!",
      "b4",
      "f2",
      "g1!"
     ],
     []
    ]
   },
   "q280c70623": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "The knight leaves b1, and your queen on d1 now defends the a1 rook. Certainly not 6.Bc3??: after …Bb4, you lose at least the a1 rook."
    ],
    "fin": "",
    "titre": "Englund: 6.Nc3",
    "marques": [
     [
      "d1",
      "a1!",
      "b2"
     ],
     []
    ]
   },
   "qc61b15ed1": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5"
    ],
    "legendes": [
     "The Englund Gambit: Black offers a pawn.",
     "Here, no 2.c4: take the pawn, it is free."
    ],
    "fin": "",
    "titre": "1…e5: 2.dxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q5ff71d88b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Black attacks d4 with the c-pawn.",
     "Advance your d-pawn: after 2.c4, …cxd4 would take your central pawn."
    ],
    "fin": "",
    "titre": "1…c5: 2.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d4!",
      "c5"
     ],
     []
    ]
   },
   "qf3f063208": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4"
    ],
    "legendes": [
     "Black defends c4 with the b-pawn.",
     "You attack the base of the b5-c4 chain."
    ],
    "fin": "",
    "titre": "Accepted: 3…b5 4.a4",
    "marques": [
     [
      "b5",
      "c4!"
     ],
     [
      "a4",
      "b5!",
      "c4"
     ],
     []
    ]
   },
   "q1288c99f9": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3"
    ],
    "legendes": [
     "The bishop comes out and no longer defends b7.",
     "Double attack: the queen aims at b7 and, together with your bishop on c4, at the f7 pawn."
    ],
    "fin": "",
    "titre": "Accepted: 4…Bf5 5.Qb3",
    "marques": [
     [
      "f5",
      "b7!"
     ],
     [
      "b3",
      "b7!",
      "c4",
      "f7!"
     ],
     []
    ]
   },
   "q768ef3baa": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6"
    ],
    "legendes": [
     "Black chases your bishop.",
     "Take on f6: you remove a defender of d5."
    ],
    "fin": "",
    "titre": "Declined: 4…h6 5.Bxf6",
    "marques": [
     [
      "g5!"
     ],
     [
      "f6!",
      "d5!"
     ],
     []
    ]
   },
   "qd05c711af": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4"
    ],
    "legendes": [
     "Black takes even though their c8 bishop is shut in.",
     "The full centre in one move: the c4 pawn will come back afterwards."
    ],
    "fin": "",
    "titre": "Declined: 3…dxc4 4.e4",
    "marques": [
     [
      "c4!",
      "c8"
     ],
     [
      "e4",
      "d4",
      "c4!"
     ],
     []
    ]
   },
   "q2ad83de0c": {
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "c4",
     "Bg7",
     "Nc3",
     "c5",
     "d5"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "Your usual move.",
     "The bishop on g7.",
     "You prepare e4.",
     "Black attacks d4.",
     "You advance, as against every …c5 attack."
    ],
    "fin": "",
    "titre": "1…g6",
    "marques": [
     [
      "f8"
     ],
     [],
     [
      "g7"
     ],
     [
      "c3",
      "e4"
     ],
     [
      "c5",
      "d4!"
     ],
     [
      "d5",
      "c5"
     ],
     []
    ]
   },
   "q5d54f62ba": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "c4",
     "e5",
     "Nf3"
    ],
    "legendes": [
     "Black prepares …e5.",
     "Your usual move.",
     "Black attacks d4.",
     "You defend d4 while developing."
    ],
    "fin": "",
    "titre": "1…d6",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [],
     [
      "e5",
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     []
    ]
   },
   "qaf9530e80": {
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "c4",
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "The Dutch: Black controls e4 with the f-pawn.",
     "Your usual move.",
     "The knight also comes to watch e4.",
     "Your knight contests e4 in turn."
    ],
    "fin": "",
    "titre": "1…f5, the Dutch",
    "marques": [
     [
      "f5",
      "e4"
     ],
     [],
     [
      "f6",
      "e4"
     ],
     [
      "c3",
      "e4"
     ],
     []
    ]
   },
   "q5d8f5345a": {
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "c4",
     "Bb7",
     "Nc3",
     "e6",
     "e4"
    ],
    "legendes": [
     "Black prepares the fianchetto of the c8 bishop.",
     "Your usual move.",
     "The bishop aims at e4.",
     "You defend e4 in advance.",
     "Black opens the f8 bishop.",
     "You take the whole centre."
    ],
    "fin": "",
    "titre": "1…b6",
    "marques": [
     [
      "c8"
     ],
     [],
     [
      "b7",
      "e4"
     ],
     [
      "c3",
      "e4"
     ],
     [
      "f8"
     ],
     [
      "c4",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q24fa84b8d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "c4",
     "e5",
     "d5",
     "Nce7",
     "e4"
    ],
    "legendes": [
     "The knight comes out in front of the c-pawn.",
     "Your usual move.",
     "Black attacks d4.",
     "You advance, chasing the knight.",
     "It retreats.",
     "You complete the centre."
    ],
    "fin": "",
    "titre": "1…Nc6",
    "marques": [
     [
      "c6",
      "c7"
     ],
     [],
     [
      "e5",
      "d4!"
     ],
     [
      "d5",
      "c6!"
     ],
     [],
     [
      "d5",
      "e4"
     ],
     []
    ]
   },
   "q89121ed02": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "c4",
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Black prepares …d5.",
     "Your usual move.",
     "It is the Slav Defence.",
     "Your reflex: Nc3."
    ],
    "fin": "",
    "titre": "1…c6: the Slav",
    "marques": [
     [
      "c6",
      "d5"
     ],
     [],
     [
      "c6",
      "d5"
     ],
     [],
     []
    ]
   },
   "q48c3c41c7": {
    "debut": [
     "d4"
    ],
    "coups": [
     "a6",
     "c4",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "A waiting move.",
     "Your usual move.",
     "Black opens the f8 bishop.",
     "Your reflex: Nc3, then e4 if Black leaves you the centre."
    ],
    "fin": "",
    "titre": "1…a6 and other waiting moves",
    "marques": [
     [],
     [],
     [
      "f8"
     ],
     [
      "c3",
      "e4"
     ],
     []
    ]
   },
   "qb7b2a2a4b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "c5",
     "d5"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "Black attacks d4.",
     "You advance."
    ],
    "fin": "",
    "titre": "1…Nf6 2.c4 c5 3.d5",
    "marques": [
     [],
     [],
     [
      "c5",
      "d4!"
     ],
     [],
     []
    ]
   },
   "qe85ab425b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "e5",
     "dxe5",
     "Ng4",
     "Bf4"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "The Budapest Gambit: a pawn offered.",
     "You take.",
     "The knight attacks e5.",
     "You defend e5 while developing your bishop."
    ],
    "fin": "",
    "titre": "Budapest Gambit",
    "marques": [
     [],
     [],
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     [
      "g4",
      "e5!"
     ],
     [
      "f4",
      "e5!",
      "g4"
     ],
     []
    ]
   },
   "qde19d5eb8": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "The other knight comes out.",
     "Your reflex: Nc3."
    ],
    "fin": "",
    "titre": "1…Nf6 2.c4 Nc6 3.Nc3",
    "marques": [
     [],
     [],
     [],
     [
      "c3"
     ],
     []
    ]
   },
   "q359f0032d": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c6",
     "Nc3",
     "dxc4",
     "e4",
     "b5",
     "a4"
    ],
    "legendes": [
     "The Slav.",
     "Your reflex: Nc3.",
     "Black takes.",
     "The full centre.",
     "Black defends c4.",
     "You attack the chain: the b5 pawn, which holds c4, is targeted."
    ],
    "fin": "",
    "titre": "2…c6, the Slav",
    "marques": [
     [],
     [],
     [
      "c4!"
     ],
     [
      "d4",
      "e4"
     ],
     [
      "b5",
      "c4!"
     ],
     [
      "a4",
      "b5!",
      "c4"
     ],
     []
    ]
   },
   "q690fb882e": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "d4",
     "Nf3",
     "Nc6",
     "g3"
    ],
    "legendes": [
     "The Albin Countergambit.",
     "You take.",
     "The d4 pawn hampers your development.",
     "You develop while defending e5: it is the move that avoids the Lasker Trap.",
     "Black attacks e5.",
     "Your bishop will go to g2."
    ],
    "fin": "",
    "titre": "2…e5, the Albin",
    "marques": [
     [],
     [
      "e5!"
     ],
     [
      "d4"
     ],
     [
      "f3",
      "e5"
     ],
     [
      "e5!"
     ],
     [
      "f1",
      "g2"
     ],
     []
    ]
   },
   "q5c61fa650": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "The Chigorin Defence: the knight in front of the c-pawn.",
     "Your reflex: Nc3, normal development."
    ],
    "fin": "",
    "titre": "2…Nc6, the Chigorin",
    "marques": [
     [
      "c6",
      "c7"
     ],
     [
      "c3"
     ],
     []
    ]
   },
   "q3ecc31f14": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bf5",
     "Nc3",
     "Nf6",
     "Qb3"
    ],
    "legendes": [
     "The bishop comes out early: the b7 pawn is no longer defended.",
     "Your reflex: Nc3.",
     "Black develops.",
     "The queen attacks b7; behind your c4 pawn, she also aims at d5."
    ],
    "fin": "",
    "titre": "2…Bf5, the Baltic Defence",
    "marques": [
     [
      "f5",
      "b7!"
     ],
     [
      "c3"
     ],
     [],
     [
      "b3",
      "b7!",
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "qa59d47c3c": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c5",
     "cxd5",
     "Nf6",
     "e4"
    ],
    "legendes": [
     "Black attacks d4 in turn.",
     "You take on d5.",
     "The knight attacks d5.",
     "You defend d5 and take the centre."
    ],
    "fin": "",
    "titre": "2…c5, the Symmetrical Gambit",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d5!"
     ],
     [
      "f6",
      "d5!"
     ],
     [
      "e4",
      "d5!",
      "d4"
     ],
     []
    ]
   },
   "q33ff99518": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "g6",
     "cxd5",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "You take on d5.",
     "The knight attacks d5.",
     "Develop: the d5 pawn is yours for now."
    ],
    "fin": "",
    "titre": "2…g6",
    "marques": [
     [
      "f8"
     ],
     [
      "d5!"
     ],
     [
      "f6",
      "d5!"
     ],
     [
      "d5!"
     ],
     []
    ]
   },
   "q143044777": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bg4",
     "Nc3"
    ],
    "legendes": [
     "The bishop comes out early.",
     "Your reflex: Nc3. Qb3 against b7 is also an idea, since the bishop no longer defends that pawn."
    ],
    "fin": "",
    "titre": "2…Bg4",
    "marques": [
     [],
     [
      "c3",
      "d1",
      "b7!",
      "g4"
     ],
     []
    ]
   },
   "q67adffc86": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "c4"
    ],
    "legendes": [
     "Black replies …d5.",
     "The c-pawn attacks d5: it is the Queen's Gambit."
    ],
    "fin": "",
    "titre": "1…d5 2.c4",
    "marques": [
     [
      "d5"
     ],
     [
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "q17a65f3d6": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Black takes the pawn.",
     "You open your f1 bishop, which threatens to take back on c4."
    ],
    "fin": "",
    "titre": "Accepted: 3.e3",
    "marques": [
     [
      "c4!"
     ],
     [
      "f1",
      "c4!"
     ],
     []
    ]
   },
   "q88ed7211a": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Black supports d5.",
     "A second attacker on d5."
    ],
    "fin": "",
    "titre": "Declined: 3.Nc3",
    "marques": [
     [
      "e6",
      "d5!"
     ],
     [
      "c3",
      "c4",
      "d5!"
     ],
     []
    ]
   },
   "q3f4a5eeca": {
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5"
    ],
    "legendes": [
     "Black develops without supporting d5 with a pawn.",
     "You take on d5: no black pawn can take back."
    ],
    "fin": "",
    "titre": "Marshall: 3.cxd5",
    "marques": [
     [
      "d5!",
      "c4"
     ],
     [
      "d5!"
     ],
     []
    ]
   },
   "q4f488a73e": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Black develops.",
     "You take the pawn back."
    ],
    "fin": "",
    "titre": "Accepted: 3…Nf6 4.Bxc4",
    "marques": [
     [],
     [
      "c4!"
     ],
     []
    ]
   },
   "q90a72d252": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "Development."
    ],
    "fin": "",
    "titre": "Accepted: 4…e6 5.Nf3",
    "marques": [
     [
      "f8"
     ],
     [],
     []
    ]
   },
   "q1e4bbcf51": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "One more defender for d5.",
     "You pin this defender."
    ],
    "fin": "",
    "titre": "Declined: 3…Nf6 4.Bg5",
    "marques": [
     [
      "f6",
      "d5!"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     []
    ]
   },
   "q040b67277": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3"
    ],
    "legendes": [
     "The bishop pins your knight.",
     "Just develop."
    ],
    "fin": "",
    "titre": "Declined: 3…Bb4 4.Nf3",
    "marques": [
     [
      "b4",
      "c3!",
      "e1"
     ],
     [],
     []
    ]
   },
   "qb5198fd5b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7",
     "e3"
    ],
    "legendes": [
     "Black unpins.",
     "You open your f1 bishop."
    ],
    "fin": "",
    "titre": "Declined: 4…Be7 5.e3",
    "marques": [
     [
      "e7",
      "f6"
     ],
     [
      "f1"
     ],
     []
    ]
   },
   "q10452ca08": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "The knight takes back.",
     "Develop first.",
     "Black develops.",
     "The pawn chases the knight."
    ],
    "fin": "",
    "titre": "Marshall: 4.Nf3 and 5.e4",
    "marques": [
     [
      "d5!"
     ],
     [],
     [],
     [
      "e4",
      "d5!"
     ],
     []
    ]
   },
   "q54a1797a5": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "The queen takes back.",
     "You develop while attacking the queen."
    ],
    "fin": "",
    "titre": "Marshall: 3…Qxd5 4.Nc3",
    "marques": [
     [
      "d5!"
     ],
     [
      "c3",
      "d5!"
     ],
     []
    ]
   },
   "qef22133de": {
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "You prepare e4."
    ],
    "fin": "",
    "titre": "1…Nf6 2.c4 g6 3.Nc3",
    "marques": [
     [
      "f8"
     ],
     [
      "e2",
      "e4"
     ],
     []
    ]
   },
   "q1c8781700": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "Bg7",
     "e4"
    ],
    "legendes": [
     "The bishop on g7.",
     "Three pawns in the centre."
    ],
    "fin": "",
    "titre": "King's Indian: 4.e4",
    "marques": [
     [
      "g7"
     ],
     [
      "c4",
      "d4",
      "e4"
     ],
     []
    ]
   },
   "q2748f9d03": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "legendes": [
     "The Grünfeld.",
     "You take.",
     "The knight takes back.",
     "You chase the knight while taking the centre."
    ],
    "fin": "",
    "titre": "Grünfeld: 4.cxd5 and 5.e4",
    "marques": [
     [],
     [
      "d5!"
     ],
     [
      "d5!"
     ],
     [
      "e4",
      "d5!",
      "d4"
     ],
     []
    ]
   },
   "qcb16f2964": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "The Nimzo-Indian.",
     "Solid: you open your f1 bishop and protect d4."
    ],
    "fin": "",
    "titre": "Nimzo: 4.e3",
    "marques": [
     [],
     [
      "f1",
      "d4"
     ],
     []
    ]
   },
   "q2f1068dfe": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Black attacks d4.",
     "You advance."
    ],
    "fin": "",
    "titre": "1…Nf6 2.c4 e6 3.Nc3 c5 4.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [],
     []
    ]
   },
   "q48e5afaa3": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e4",
     "dxe4"
    ],
    "legendes": [
     "You push e4 while the d5 pawn and the f6 knight are watching that square.",
     "The pawn takes. Your knight cannot take back: the f6 knight defends e4."
    ],
    "fin": "",
    "titre": "Declined: 4.e4? dxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "d5",
      "f6"
     ],
     [
      "e4!",
      "c3",
      "f6"
     ],
     []
    ]
   },
   "qa1537baec": {
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4"
    ],
    "coups": [
     "e4",
     "Nxe4"
    ],
    "legendes": [
     "You push e4, as if your c3 knight were defending it.",
     "The knight takes: your c3 knight is pinned to your king, it cannot take back."
    ],
    "fin": "",
    "titre": "Nimzo: 4.e4? Nxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "c3!",
      "b4"
     ],
     [
      "e4!",
      "c3!",
      "b4",
      "e1"
     ],
     []
    ]
   },
   "q6ad65274d": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8"
    ],
    "coups": [
     "Bxh7+",
     "Nxh7"
    ],
    "legendes": [
     "You sacrifice on h7… but the f6 knight is not pinned: the e7 bishop stands between your g5 bishop and the queen on d8.",
     "The knight takes back, and now it attacks your g5 bishop. You have given a piece for a pawn."
    ],
    "fin": "",
    "titre": "Declined: 9.Bxh7+? Nxh7",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "h7!",
      "f6",
      "e7",
      "g5"
     ],
     [
      "h7",
      "g5!"
     ],
     []
    ]
   },
   "q3b9482ee2": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "b4",
     "Bxb4"
    ],
    "legendes": [
     "You launch the minority attack right away…",
     "…but nothing was defending b4: the e7 bishop takes the pawn."
    ],
    "fin": "",
    "titre": "Carlsbad: 11.b4? Bxb4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "b4!"
     ],
     [
      "b4!",
      "e7"
     ],
     []
    ]
   },
   "qd52783f32": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "Rab1"
    ],
    "legendes": [
     "The rook comes to b1 first: it will support the b4 pawn. The minority attack can begin."
    ],
    "fin": "",
    "titre": "Carlsbad: 11.Rab1",
    "marques": [
     [
      "b1",
      "b2",
      "b4"
     ],
     []
    ]
   },
   "qf51a5c77b": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "dxc4",
     "Bxc4",
     "Nd5",
     "Bxe7",
     "Qxe7",
     "O-O",
     "Nxc3",
     "Qxc3"
    ],
    "coups": [
     "e5",
     "Nxe5"
    ],
    "legendes": [
     "Black pushes …e5 without having prepared it.",
     "The e5 pawn falls: nothing was defending it enough."
    ],
    "fin": "",
    "titre": "Freeing: 12…e5? 13.Nxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q3553b1494": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Bf5",
     "Bxf5"
    ],
    "legendes": [
     "Black wants to trade your good d3 bishop… but the f5 bishop is not protected.",
     "Bxf5: a piece up. Black cannot take back."
    ],
    "fin": "",
    "titre": "Carlsbad: 11…Bf5? 12.Bxf5",
    "couleurs": [
     "g",
     "v"
    ],
    "marques": [
     [
      "f5!",
      "d3"
     ],
     [
      "f5!"
     ],
     []
    ]
   },
   "q76da77d06": {
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4"
    ],
    "coups": [
     "Qd8",
     "Nxe4",
     "dxe4",
     "Bxe4"
    ],
    "legendes": [
     "The queen leaves the e-file: the e4 knight loses a defender.",
     "You trade knights.",
     "The pawn takes back.",
     "Your bishop takes the e4 pawn: it was defended by the e8 rook alone, and your queen on c2 protects your bishop."
    ],
    "fin": "",
    "titre": "Carlsbad: 13…Qd8? 14.Nxe4",
    "marques": [
     [
      "e4!",
      "e7"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!",
      "e8",
      "c2"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "q58862f38f",
    "titre": "3…Nf6: the quietest line",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black takes the pawn. It is the most played reply between 1000 and 1600 Elo. No need to worry: you are going to win this pawn back.",
     "<span class=\"mv\">3.e3</span> opens the diagonal of your bishop on f1: it already threatens to take back on c4. Simple and solid.",
     "Black develops the knight. They do not defend c4: they let you take it back. After <a class=\"lien-var\" href=\"#\" data-var=\"qfaf8ff6ad\">3…e6 instead of 3…Nf6</a>, it is the same.",
     "You take the pawn back. Material is level, and your bishop is active on the diagonal aiming at f7.",
     "Black opens the way for the f8 bishop. Against <a class=\"lien-var\" href=\"#\" data-var=\"q62b65fac6\">4…Nc6</a>, you also play 5.Nf3.",
     "You bring out your g1 knight. Next, outside the repertoire: <span class=\"mv\">O-O</span>, <span class=\"mv\">Nc3</span>, <span class=\"mv\">Qe2</span>."
    ]
   },
   {
    "id": "qfaf8ff6ad",
    "titre": "Accepted: 3…e6 leads to the same place",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "e6",
     "Bxc4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Black first opens the way for the f8 bishop.",
     "You take the pawn back, as in the main line.",
     "The knight comes out.",
     "You bring out your knight: it is exactly the same position as after 3…Nf6 4.Bxc4 e6 5.Nf3."
    ]
   },
   {
    "id": "q62b65fac6",
    "titre": "Accepted: 4…Nc6 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the other knight.",
     "Just develop: the knight defends d4 and prepares castling."
    ]
   },
   {
    "id": "qf10e00271",
    "titre": "Accepted: 3…e6 4.Bxc4 Nc6 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the queen's knight.",
     "Develop: the knight defends d4 and prepares castling."
    ]
   },
   {
    "id": "qe7ff82d8d",
    "titre": "Accepted: 4…Bb4+ 5.Nc3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "e6",
     "Bxc4"
    ],
    "coups": [
     "Bb4+",
     "Nc3"
    ],
    "legendes": [
     "Bishop check.",
     "Block with the knight: it parries the check and develops at the same time."
    ]
   },
   {
    "id": "q1a969d154",
    "titre": "3…b5: Black hangs on to the pawn",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "legendes": [
     "Black defends c4 with the b-pawn. It looks solid, but a pawn chain has a weak point: its base. Here, that is b5.",
     "You attack the base of the chain. If b5 falls, c4 will fall after it. Stockfish clearly prefers <span class=\"mv\">4.a4</span> to 4.b3.",
     "Black supports b5 with the c-pawn.",
     "You take anyway. If Black takes back <a class=\"lien-var\" href=\"#\" data-var=\"qbe59e3b4a\">5…cxb5</a>, 6.Qf3 wins a piece."
    ]
   },
   {
    "id": "qbe59e3b4a",
    "titre": "Accepted: 5…cxb5?? 6.Qf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3"
    ],
    "legendes": [
     "Black takes their pawn back. A mistake: the long f3-a8 diagonal is now empty.",
     "The queen attacks the a8 rook, and nothing can protect it."
    ]
   },
   {
    "id": "q23b50555d",
    "titre": "Accepted: 4…Bd7 5.axb5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "Bd7",
     "axb5"
    ],
    "legendes": [
     "The bishop supports b5.",
     "Same idea: you take on b5, Black's chain collapses and c4 is going to fall."
    ]
   },
   {
    "id": "q4e88a8472",
    "titre": "Accepted: 4…bxa4 5.Bxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4"
    ],
    "coups": [
     "bxa4",
     "Bxc4"
    ],
    "legendes": [
     "Black takes on a4.",
     "You win back your c4 pawn. Black is left with two isolated, weak a-pawns."
    ]
   },
   {
    "id": "qfeab54db7",
    "titre": "4…Bf5: the queen comes out, for a good reason",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "The bishop comes out to f5. But it no longer defends the b7 pawn.",
     "<span class=\"mv good\">5.Qb3</span>! Double attack: your queen aims at b7, and together with your bishop on c4 it aims at f7. Two targets at once.",
     "The right defence: the e6 pawn blocks the diagonal to f7. After <a class=\"lien-var\" href=\"#\" data-var=\"qc2a8bfd37\">5…Nbd7</a>, it is mate.",
     "Not <a class=\"lien-var\" href=\"#\" data-var=\"qf5304b87b\">6.Qxb7</a> right away: the reply 6…Be4! bothers your queen. With <span class=\"mv\">6.Nc3</span> first, you control e4, then you take on b7 at your leisure."
    ]
   },
   {
    "id": "qc2a8bfd37",
    "titre": "Accepted: 5…Nbd7?? 6.Bxf7#",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Nbd7",
     "Bxf7#"
    ],
    "legendes": [
     "The knight takes the d7 square, the black king's only escape.",
     "Mate: the king has no square left, and your queen on b3 protects the bishop."
    ]
   },
   {
    "id": "qcdd21b677",
    "titre": "Accepted: 6.Nc3 then Qxb7",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3",
     "e6"
    ],
    "coups": [
     "Nc3",
     "Bd6",
     "Qxb7"
    ],
    "legendes": [
     "The knight controls e4 and b5: the black bishop can no longer come to e4.",
     "Black develops.",
     "Now the b7 pawn falls without risk."
    ]
   },
   {
    "id": "qdcdb92cf0",
    "titre": "The main line",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3"
    ],
    "legendes": [
     "Black protects d5 with the e-pawn. It is solid, with one flaw: the c8 bishop is shut in behind e6.",
     "You add an attacker on d5. Count: <span class=\"mv\">c4</span> and <span class=\"mv\">Nc3</span> attack d5; e6 and the queen defend it.",
     "Black adds a defender to d5.",
     "<span class=\"mv\">4.Bg5</span> pins the f6 knight: if it moves, your bishop takes the queen on d8. One defender of d5 is hampered.",
     "Black unpins: with the bishop on e7, the knight can move again. It is the most played reply (47%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"qe2c942a05\">4…Bb4</a> and 4…h6 (next sequence).",
     "You open the way for your f1 bishop. Plan: <span class=\"mv\">Nf3</span>, <span class=\"mv\">Bd3</span>, <span class=\"mv\">O-O</span>, then <span class=\"mv\">Rc1</span> or <span class=\"mv\">Qc2</span>."
    ]
   },
   {
    "id": "qe2c942a05",
    "titre": "Declined: 4…Bb4 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "The bishop pins your c3 knight to your king.",
     "You open your f1 bishop and stay solid. If …Bxc3+, you will take back with the b-pawn."
    ]
   },
   {
    "id": "qd63a5a9c6",
    "titre": "4…h6: you take on f6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6",
     "Qxf6",
     "cxd5",
     "exd5",
     "Nxd5"
    ],
    "legendes": [
     "Black chases your bishop.",
     "Do not retreat to h4: here, taking is stronger (Stockfish: +1.2 against +0.1 for 5.Bh4). The f6 knight was defending d5: you remove that defender.",
     "The most natural recapture. It leaves d5 without its knight. The other recapture, <a class=\"lien-var\" href=\"#\" data-var=\"qd5b9c96e1\">5…gxf6</a>, damages Black's pawns.",
     "You take on d5: only the e6 pawn can take back.",
     "Black takes back.",
     "You win a pawn, and your knight attacks the queen on f6 on the way."
    ]
   },
   {
    "id": "qd5b9c96e1",
    "titre": "Declined: 4…h6 5.Bxf6 gxf6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "h6",
     "Bxf6"
    ],
    "coups": [
     "gxf6",
     "cxd5",
     "exd5",
     "e3"
    ],
    "legendes": [
     "Black takes back with the g-pawn.",
     "You trade in the centre.",
     "Black takes back.",
     "Development: the f1 bishop will come out next. Black keeps doubled f-pawns and a less sheltered king."
    ]
   },
   {
    "id": "q28f23023f",
    "titre": "3…dxc4: 4.e4!",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4",
     "Bb4",
     "Bxc4"
    ],
    "legendes": [
     "Black takes even though their c8 bishop is already shut in by e6. They hand you the centre.",
     "With your knight on c3 to support e4, you occupy the whole centre at once: <span class=\"mv good\">4.e4</span>.",
     "The bishop pins your c3 knight (the most played reply). The others: <a class=\"lien-var\" href=\"#\" data-var=\"q84ccf2a91\">4…Nc6</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qfd0499a86\">4…Nf6</a>.",
     "You win the pawn back, with two pawns in the centre against none. Stockfish: +0.8."
    ]
   },
   {
    "id": "q84ccf2a91",
    "titre": "Declined: 3…dxc4 4.e4 Nc6 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Black develops the knight.",
     "You defend d4 while developing. If Black then plays …b5, your knight takes the pawn: Nxb5."
    ]
   },
   {
    "id": "qfd0499a86",
    "titre": "Declined: 3…dxc4 4.e4 Nf6 5.Bxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "dxc4",
     "e4"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "The knight attacks e4.",
     "You take the pawn back; e4 stays defended by the c3 knight."
    ]
   },
   {
    "id": "qf41133586",
    "titre": "3…Bb4: the pin",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3",
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "The bishop pins your c3 knight to your king.",
     "Just develop. Against <a class=\"lien-var\" href=\"#\" data-var=\"qf64608c7a\">4…Nf6</a> or <a class=\"lien-var\" href=\"#\" data-var=\"qb7fe8d259\">4…dxc4</a>, you also have a reply ready.",
     "Black trades their bishop for your knight: they leave you the bishop pair.",
     "Take back with the b-pawn: <span class=\"mv\">bxc3</span> strengthens d4 and opens the b-file for your rook. Stockfish: +0.8."
    ]
   },
   {
    "id": "qf64608c7a",
    "titre": "Declined: 3…Bb4 4.Nf3 Nf6 5.Bg5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "Black develops.",
     "The pin, as in the main line: your bishop pins the f6 knight to the queen."
    ]
   },
   {
    "id": "qb7fe8d259",
    "titre": "Declined: 3…Bb4 4.Nf3 dxc4 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "Nf3"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Black takes the pawn.",
     "You open your f1 bishop to win back the c4 pawn."
    ]
   },
   {
    "id": "q310e8078c",
    "titre": "3…Nxd5: the knight gets chased",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "Black develops without defending d5. It is called the Marshall Defence, and its flaw shows on the next move.",
     "You take: <span class=\"mv good\">3.cxd5</span>. No black pawn can take back on d5.",
     "The knight takes back (73%). But a knight in the centre can be chased.",
     "Develop first: <span class=\"mv\">4.Nf3</span>. The e-pawn will come next move, with a gain of time.",
     "Black develops. Against <a class=\"lien-var\" href=\"#\" data-var=\"q782d57ad0\">4…e6</a>, same plan; against <a class=\"lien-var\" href=\"#\" data-var=\"qd3ed39913\">4…Bg4</a>, watch out for the exception.",
     "<span class=\"mv good\">5.e4</span>: the pawn attacks the knight on d5, which has to leave. You have both central pawns, Black has none."
    ]
   },
   {
    "id": "q782d57ad0",
    "titre": "Marshall: 4…e6 5.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "e6",
     "e4"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "The pawn chases the d5 knight: you have both central pawns."
    ]
   },
   {
    "id": "qd3ed39913",
    "titre": "Marshall: 4…Bg4 5.Ne5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "Ne5"
    ],
    "legendes": [
     "The bishop attacks your f3 knight. It is not a pin: your e2 pawn is between the knight and your queen.",
     "The knight attacks the g4 bishop and prepares Qb3 against the b7 pawn, which the bishop no longer defends."
    ]
   },
   {
    "id": "q482614658",
    "titre": "Marshall: 5…Nb6 6.d5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "Nb6",
     "d5"
    ],
    "legendes": [
     "The knight retreats to b6.",
     "The pawn chases the c6 knight too: you gain another tempo."
    ]
   },
   {
    "id": "qfc1bf4ab7",
    "titre": "3…Qxd5: the queen gets chased",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3",
     "Qd8",
     "Nf3"
    ],
    "legendes": [
     "The queen takes back. She is exposed in the centre.",
     "You develop while attacking the queen: you gain a tempo.",
     "The queen goes home. Black has made two queen moves for nothing. Same reply after <a class=\"lien-var\" href=\"#\" data-var=\"q19a9143dc\">4…Qa5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q2199979f1\">4…Qd6</a>.",
     "And you carry on: e4 next move. Stockfish: +1.2."
    ]
   },
   {
    "id": "q19a9143dc",
    "titre": "Marshall: 4…Qa5 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qa5",
     "Nf3"
    ],
    "legendes": [
     "The queen goes to a5.",
     "Develop. Careful: the queen on a5 pins your c3 knight, so Bd2 first, e4 afterwards."
    ]
   },
   {
    "id": "q2199979f1",
    "titre": "Marshall: 4…Qd6 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "coups": [
     "Qd6",
     "Nf3"
    ],
    "legendes": [
     "The queen retreats to d6.",
     "Develop: e4 will come next, with a gain of time."
    ]
   },
   {
    "id": "q3212d6160",
    "titre": "3…e6: take the pawn",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "e6",
     "dxe6",
     "Bxe6",
     "Nc3"
    ],
    "legendes": [
     "A rare gambit: Black offers a pawn to develop quickly.",
     "Take the pawn.",
     "The bishop takes back.",
     "Develop: you are a pawn up."
    ]
   },
   {
    "id": "q7a2086efe",
    "titre": "Marshall: 3…e6 4.dxe6 Bb4+ 5.Bd2",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "e6",
     "dxe6"
    ],
    "coups": [
     "Bb4+",
     "Bd2"
    ],
    "legendes": [
     "Bishop check.",
     "Block with the bishop. Black will take back on e6, and you will keep an extra pawn."
    ]
   },
   {
    "id": "q54fa22f42",
    "titre": "2…g6 3.Nc3 Bg7: the King's Indian",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3",
     "Bg7",
     "e4",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "Black is going to put the bishop on g7: it is the King's Indian. They leave you the centre to attack it later.",
     "You prepare e4.",
     "The g7 bishop aims down the long diagonal: it will hit d4 as soon as the f6 knight moves.",
     "<span class=\"mv good\">4.e4</span>: three pawns in the centre (c4, d4, e4). That is what you are after.",
     "Black stops e5. The other replies: <a class=\"lien-var\" href=\"#\" data-var=\"q8939f31b6\">4…O-O</a>, or the trap <a class=\"lien-var\" href=\"#\" data-var=\"q4249f9ff9\">4…Nxe4??</a>.",
     "Development. Natural follow-up: <span class=\"mv\">Be2</span>, <span class=\"mv\">O-O</span>. Your plan: keep this centre and gain space."
    ]
   },
   {
    "id": "q8939f31b6",
    "titre": "King's Indian: 4…O-O 5.Nf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Black castles right away.",
     "Develop, as against 4…d6. Do not push 5.e5: the knight retreats to e8 and you have nothing better any more."
    ]
   },
   {
    "id": "q4249f9ff9",
    "titre": "King's Indian: 4…Nxe4?? 5.Nxe4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4"
    ],
    "legendes": [
     "Black takes your e4 pawn.",
     "You take back: your c3 knight was defending e4. Black has lost a knight for a pawn."
    ]
   },
   {
    "id": "q63038f5a0",
    "titre": "King's Indian: 4…e6?! 5.e5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "e6",
     "e5"
    ],
    "legendes": [
     "Black plays …e6 instead of …d6: the d7 square stays occupied, and d5 is held by your pawns. Their f6 knight will have no good retreat square left.",
     "The pawn chases the knight, which has no good square left: it has to go back to g8."
    ]
   },
   {
    "id": "q69dd5d2a9",
    "titre": "3…d5: the Grünfeld",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4",
     "Nxc3",
     "bxc3"
    ],
    "legendes": [
     "The Grünfeld: Black attacks your centre right away.",
     "You take.",
     "The knight takes back (95% of games).",
     "Same idea as against the Marshall: <span class=\"mv good\">5.e4</span> chases the knight while taking the centre.",
     "The knight trades itself for yours.",
     "Outside the repertoire, but natural: take back with the b-pawn. Your c3-d4-e4 pawns form a massive centre."
    ]
   },
   {
    "id": "qe680fe597",
    "titre": "2…e6 3.Nc3 Bb4: the Nimzo-Indian",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3",
     "Bb4",
     "e3",
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Black prepares …d5 or …Bb4.",
     "You threaten to play e4. Against <a class=\"lien-var\" href=\"#\" data-var=\"q8649452bf\">3…d5</a>, it is the Queen's Gambit Declined.",
     "The Nimzo-Indian: the bishop pins your knight to stop you playing e4.",
     "<span class=\"mv\">4.e3</span>: solid. You open your f1 bishop and protect d4. Next: <span class=\"mv\">Bd3</span>, <span class=\"mv\">Nf3</span>, <span class=\"mv\">O-O</span>.",
     "Black takes your knight.",
     "The only good recapture: <span class=\"mv\">bxc3</span>. After 5.Bd2??, …Bxd2+ and you have lost a piece. You have the bishop pair."
    ]
   },
   {
    "id": "q8649452bf",
    "titre": "1…Nf6 2.c4 e6 3.Nc3 d5 4.Bg5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "Bg5"
    ],
    "legendes": [
     "Black plays …d5: it is a Queen's Gambit Declined.",
     "Same pin as in the Declined: the bishop pins the f6 knight."
    ]
   },
   {
    "id": "q30dd750ab",
    "titre": "Nimzo: 4…O-O 5.Nf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "O-O",
     "Nf3"
    ],
    "legendes": [
     "Black castles.",
     "Develop: Bd3 and O-O will follow."
    ]
   },
   {
    "id": "q6b68a56c8",
    "titre": "Nimzo: 4…d5 5.Nf3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "d5",
     "Nf3"
    ],
    "legendes": [
     "Black occupies the centre.",
     "Develop: Bd3 and O-O will follow."
    ]
   },
   {
    "id": "q7e1ecd7f5",
    "titre": "3…c5: you advance 4.d5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5",
     "exd5",
     "cxd5"
    ],
    "legendes": [
     "Black attacks d4 with the c-pawn.",
     "<span class=\"mv good\">4.d5</span>: you advance instead of trading. Your d5 pawn cuts Black's camp in two.",
     "Black trades (52%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"q62b6ec7a2\">4…d6</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qdb840113a\">4…Be7</a>.",
     "You take back with the c-pawn: you keep an advanced pawn on d5."
    ]
   },
   {
    "id": "q62b6ec7a2",
    "titre": "Benoni: 4…d6 5.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "d6",
     "e4"
    ],
    "legendes": [
     "Black supports c5 and controls e5.",
     "You complete the centre: pawns on d5 and e4."
    ]
   },
   {
    "id": "qdb840113a",
    "titre": "Benoni: 4…Be7 5.d6!",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "c5",
     "d5"
    ],
    "coups": [
     "Be7",
     "d6"
    ],
    "legendes": [
     "Black develops the bishop to e7.",
     "The pawn advances and attacks the bishop: it has to go back to f8."
    ]
   },
   {
    "id": "qe4d671d58",
    "titre": "1…e6 2.c4 c5: same reflex",
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "c4",
     "c5",
     "d5",
     "exd5",
     "cxd5"
    ],
    "legendes": [
     "Black keeps their options open: …d5 or …c5.",
     "Your usual move.",
     "They attack d4. The others: <a class=\"lien-var\" href=\"#\" data-var=\"qdf1c58899\">2…d5</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qf36f0b511\">2…Nf6</a>.",
     "Same reflex as above: you advance.",
     "Trade.",
     "You take back with the c-pawn. Next: Nc3, e4."
    ]
   },
   {
    "id": "qdf1c58899",
    "titre": "1…e6 2.c4 d5 3.Nc3",
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Black plays …d5.",
     "It is the Queen's Gambit Declined: Nc3, then Bg5."
    ]
   },
   {
    "id": "qf36f0b511",
    "titre": "1…e6 2.c4 Nf6 3.Nc3",
    "debut": [
     "d4",
     "e6",
     "c4"
    ],
    "coups": [
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Same position as 1…Nf6 2.c4 e6 3.Nc3."
    ]
   },
   {
    "id": "q67adffc86",
    "titre": "1…d5 2.c4",
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "c4"
    ],
    "legendes": [
     "Black replies …d5.",
     "The c-pawn attacks d5: it is the Queen's Gambit."
    ]
   },
   {
    "id": "q17a65f3d6",
    "titre": "Accepted: 3.e3",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "dxc4",
     "e3"
    ],
    "legendes": [
     "Black takes the pawn.",
     "You open your f1 bishop, which threatens to take back on c4."
    ]
   },
   {
    "id": "q88ed7211a",
    "titre": "Declined: 3.Nc3",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e6",
     "Nc3"
    ],
    "legendes": [
     "Black supports d5.",
     "A second attacker on d5."
    ]
   },
   {
    "id": "q3f4a5eeca",
    "titre": "Marshall: 3.cxd5",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nf6",
     "cxd5"
    ],
    "legendes": [
     "Black develops without supporting d5 with a pawn.",
     "You take on d5: no black pawn can take back."
    ]
   },
   {
    "id": "qf3f063208",
    "titre": "Accepted: 3…b5 4.a4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "b5",
     "a4"
    ],
    "legendes": [
     "Black defends c4 with the b-pawn.",
     "You attack the base of the b5-c4 chain."
    ]
   },
   {
    "id": "q4f488a73e",
    "titre": "Accepted: 3…Nf6 4.Bxc4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3"
    ],
    "coups": [
     "Nf6",
     "Bxc4"
    ],
    "legendes": [
     "Black develops.",
     "You take the pawn back."
    ]
   },
   {
    "id": "q1288c99f9",
    "titre": "Accepted: 4…Bf5 5.Qb3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "Bf5",
     "Qb3"
    ],
    "legendes": [
     "The bishop comes out and no longer defends b7.",
     "Double attack: the queen aims at b7 and, together with your bishop on c4, at the f7 pawn."
    ]
   },
   {
    "id": "q90a72d252",
    "titre": "Accepted: 4…e6 5.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "Development."
    ]
   },
   {
    "id": "q1e4bbcf51",
    "titre": "Declined: 3…Nf6 4.Bg5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Nf6",
     "Bg5"
    ],
    "legendes": [
     "One more defender for d5.",
     "You pin this defender."
    ]
   },
   {
    "id": "q040b67277",
    "titre": "Declined: 3…Bb4 4.Nf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "Nf3"
    ],
    "legendes": [
     "The bishop pins your knight.",
     "Just develop."
    ]
   },
   {
    "id": "qd05c711af",
    "titre": "Declined: 3…dxc4 4.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "dxc4",
     "e4"
    ],
    "legendes": [
     "Black takes even though their c8 bishop is shut in.",
     "The full centre in one move: the c4 pawn will come back afterwards."
    ]
   },
   {
    "id": "qb5198fd5b",
    "titre": "Declined: 4…Be7 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7",
     "e3"
    ],
    "legendes": [
     "Black unpins.",
     "You open your f1 bishop."
    ]
   },
   {
    "id": "q768ef3baa",
    "titre": "Declined: 4…h6 5.Bxf6",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "h6",
     "Bxf6"
    ],
    "legendes": [
     "Black chases your bishop.",
     "Take on f6: you remove a defender of d5."
    ]
   },
   {
    "id": "q10452ca08",
    "titre": "Marshall: 4.Nf3 and 5.e4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "legendes": [
     "The knight takes back.",
     "Develop first.",
     "Black develops.",
     "The pawn chases the knight."
    ]
   },
   {
    "id": "q54a1797a5",
    "titre": "Marshall: 3…Qxd5 4.Nc3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5"
    ],
    "coups": [
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "The queen takes back.",
     "You develop while attacking the queen."
    ]
   },
   {
    "id": "qef22133de",
    "titre": "1…Nf6 2.c4 g6 3.Nc3",
    "debut": [
     "d4",
     "Nf6",
     "c4"
    ],
    "coups": [
     "g6",
     "Nc3"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "You prepare e4."
    ]
   },
   {
    "id": "q1c8781700",
    "titre": "King's Indian: 4.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "Bg7",
     "e4"
    ],
    "legendes": [
     "The bishop on g7.",
     "Three pawns in the centre."
    ]
   },
   {
    "id": "q2748f9d03",
    "titre": "Grünfeld: 4.cxd5 and 5.e4",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3"
    ],
    "coups": [
     "d5",
     "cxd5",
     "Nxd5",
     "e4"
    ],
    "legendes": [
     "The Grünfeld.",
     "You take.",
     "The knight takes back.",
     "You chase the knight while taking the centre."
    ]
   },
   {
    "id": "qcb16f2964",
    "titre": "Nimzo: 4.e3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "Bb4",
     "e3"
    ],
    "legendes": [
     "The Nimzo-Indian.",
     "Solid: you open your f1 bishop and protect d4."
    ]
   },
   {
    "id": "q2f1068dfe",
    "titre": "1…Nf6 2.c4 e6 3.Nc3 c5 4.d5",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Black attacks d4.",
     "You advance."
    ]
   },
   {
    "id": "qfcb7a7d16",
    "titre": "Nimzo: …Bxc3+ bxc3",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "e6",
     "Nc3",
     "Bb4",
     "e3"
    ],
    "coups": [
     "Bxc3+",
     "bxc3"
    ],
    "legendes": [
     "Black takes your knight, with check.",
     "Take back with the b-pawn: it is the only good recapture, it strengthens d4 and opens the b-file."
    ]
   },
   {
    "id": "q8f9efb5ee",
    "titre": "Elephant Trap: 6.e3, not 6.Nxd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7",
     "cxd5",
     "exd5"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "You continue your development. Certainly not 6.Nxd5??: the f6 knight would take anyway."
    ]
   },
   {
    "id": "qbce42b1a6",
    "titre": "Black frees their game: …dxc4 and …Nd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3"
    ],
    "coups": [
     "dxc4",
     "Bxc4",
     "Nd5",
     "Bxe7",
     "Qxe7",
     "O-O",
     "Nxc3",
     "Qxc3",
     "b6"
    ],
    "legendes": [
     "Black takes on c4: your bishop has to move a second time to take back.",
     "You take the pawn back.",
     "The knight comes to d5 to offer trades: it is the classic freeing manoeuvre of the Declined.",
     "You trade bishops: it is the simplest.",
     "The queen takes back.",
     "Your king gets to safety.",
     "Second trade.",
     "The queen takes back.",
     "The c8 bishop is going to come out via b7. Then …c5 will attack your centre."
    ]
   },
   {
    "id": "qd52783f32",
    "titre": "Carlsbad: 11.Rab1",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8"
    ],
    "coups": [
     "Rab1"
    ],
    "legendes": [
     "The rook comes to b1 first: it will support the b4 pawn. The minority attack can begin."
    ]
   },
   {
    "id": "q5206c7648",
    "titre": "The minority attack, move by move",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4",
     "a6",
     "a4",
     "Ng6"
    ],
    "coups": [
     "Rfc1",
     "Bf5",
     "b5",
     "axb5",
     "axb5",
     "h6",
     "bxc6",
     "bxc6"
    ],
    "legendes": [
     "Your second rook comes to the c-file: it is going to open.",
     "Black develops the bishop.",
     "Now is the moment: b5 attacks c6. Your a4 pawn and your d3 bishop support it.",
     "Black takes.",
     "You take back: the b5 pawn attacks c6 again.",
     "A waiting move.",
     "You take on c6.",
     "Here is the result: a c6 pawn that no pawn defends any more, on a half-open file."
    ]
   },
   {
    "id": "q5e463ebba",
    "titre": "The d5 push",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "e6",
     "Nf3",
     "c5",
     "O-O",
     "cxd4",
     "exd4",
     "Nc6",
     "Nc3",
     "Be7",
     "Re1",
     "O-O",
     "a3",
     "a6",
     "Ba2",
     "b5"
    ],
    "coups": [
     "d5",
     "exd5",
     "Nxd5",
     "Nxd5",
     "Qxd5",
     "Bb7",
     "Qh5"
    ],
    "legendes": [
     "<span class=\"mv good\">12.d5</span>! All your pieces are ready: the e1 rook, the a2 bishop, the c3 knight. The push is going to open lines for them.",
     "Black takes.",
     "The knight takes back: it attacks the e7 bishop and the f6 knight.",
     "Trade.",
     "The queen takes back, in the centre. With your a2 bishop behind her, she aims at f7, and she attacks the c6 knight.",
     "The bishop defends c6 and aims at your queen behind the knight: if the knight moves, she is attacked.",
     "The queen moves away… towards Black's castled king."
    ]
   },
   {
    "id": "qa3bbaa89a",
    "titre": "Bxf6, then Bxh7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Ne6",
     "Bxf6",
     "Bxf6",
     "Bxh7+",
     "Kh8",
     "Bd3"
    ],
    "legendes": [
     "The knight leaves f8, from where it was defending h7.",
     "You remove the other defender of h7: the f6 knight.",
     "Black takes back.",
     "The bishop takes on h7 with check. The king cannot take: your queen on c2 protects the bishop.",
     "The king steps aside.",
     "The bishop comes back: a pawn up."
    ]
   },
   {
    "id": "q76da77d06",
    "titre": "Carlsbad: 13…Qd8? 14.Nxe4",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1",
     "Ne4",
     "Bxe7",
     "Qxe7",
     "b4"
    ],
    "coups": [
     "Qd8",
     "Nxe4",
     "dxe4",
     "Bxe4"
    ],
    "legendes": [
     "The queen leaves the e-file: the e4 knight loses a defender.",
     "You trade knights.",
     "The pawn takes back.",
     "Your bishop takes the e4 pawn: it was defended by the e8 rook alone, and your queen on c2 protects your bishop."
    ]
   },
   {
    "id": "q3553b1494",
    "titre": "Carlsbad: 11…Bf5? 12.Bxf5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Be7",
     "e3",
     "O-O",
     "Nf3",
     "Nbd7",
     "Qc2",
     "c6",
     "Bd3",
     "Re8",
     "cxd5",
     "exd5",
     "O-O",
     "Nf8",
     "Rab1"
    ],
    "coups": [
     "Bf5",
     "Bxf5"
    ],
    "legendes": [
     "Black wants to trade your good d3 bishop… but the f5 bishop is not protected.",
     "Bxf5: a piece up. Black cannot take back."
    ]
   },
   {
    "id": "qc43ff2890",
    "titre": "Accepted: 5…cxb5?? 6.Qf3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5"
    ],
    "coups": [
     "cxb5",
     "Qf3",
     "Nc6",
     "Qxc6+"
    ],
    "legendes": [
     "<span class=\"mv bad\">5…cxb5</span>?? Natural: Black takes their pawn back. But look at the long f3-a8 diagonal: there is nothing left on it.",
     "<span class=\"mv good\">6.Qf3</span>! The queen attacks the a8 rook, and nothing can protect it.",
     "Black blocks the diagonal with the knight. After <a class=\"lien-var\" href=\"#\" data-var=\"q713a5c386\">6…Bb7</a>, same punishment.",
     "You take the knight, with check."
    ]
   },
   {
    "id": "q713a5c386",
    "titre": "Accepted: 6…Bb7 7.Qxb7",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "b5",
     "a4",
     "c6",
     "axb5",
     "cxb5",
     "Qf3"
    ],
    "coups": [
     "Bb7",
     "Qxb7"
    ],
    "legendes": [
     "Black blocks the diagonal with the bishop.",
     "Your queen takes the bishop, and the a8 rook is still attacked."
    ]
   },
   {
    "id": "q05ae68862",
    "titre": "Accepted: 5…b6? 6.Bxf7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "b6",
     "Bxf7+"
    ],
    "legendes": [
     "Black puts the b-pawn to safety on b6, protected by a7 and c7… but forgets f7.",
     "The bishop takes on f7 with check: the black king has to move and will no longer be able to castle."
    ]
   },
   {
    "id": "q5e60b02a7",
    "titre": "Accepted: 5…Qc8? 6.Bxf7+",
    "debut": [
     "d4",
     "d5",
     "c4",
     "dxc4",
     "e3",
     "Nf6",
     "Bxc4",
     "Bf5",
     "Qb3"
    ],
    "coups": [
     "Qc8",
     "Bxf7+"
    ],
    "legendes": [
     "The queen defends b7… but f7 is defended only by the king, which will not be able to take back: your queen on b3 protects the bishop.",
     "The bishop takes on f7 with check: a pawn up, and the black king will no longer be able to castle."
    ]
   },
   {
    "id": "q8a0046435",
    "titre": "Marshall: 5…e5?? 6.exd5",
    "debut": [
     "d4",
     "d5",
     "c4",
     "Nf6",
     "cxd5",
     "Nxd5",
     "Nf3",
     "Nc6",
     "e4"
    ],
    "coups": [
     "e5",
     "exd5"
    ],
    "legendes": [
     "<span class=\"mv bad\">5…e5</span>?? Black counter-attacks in the centre… and forgets that the d5 knight is attacked.",
     "<span class=\"mv good\">6.exd5</span>: the knight falls."
    ]
   },
   {
    "id": "q1b7bfa42b",
    "titre": "King's Indian: 4…Nxe4??",
    "debut": [
     "d4",
     "Nf6",
     "c4",
     "g6",
     "Nc3",
     "Bg7",
     "e4"
    ],
    "coups": [
     "Nxe4",
     "Nxe4",
     "d5",
     "cxd5",
     "Qxd5",
     "Nc3"
    ],
    "legendes": [
     "<span class=\"mv bad\">4…Nxe4</span>?? Black takes your e4 pawn, counting on a trick.",
     "You take the knight back.",
     "Black's idea: the d5 pawn attacks your e4 knight and your c4 pawn at the same time.",
     "You take the pawn.",
     "The queen attacks your e4 knight and your d4 pawn.",
     "The knight gets to safety. Black is going to win back the d4 pawn, but that is as far as it goes."
    ]
   },
   {
    "id": "qada680846",
    "titre": "Against the Elephant Trap: 5.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e6",
     "Nc3",
     "Nf6",
     "Bg5",
     "Nbd7"
    ],
    "coups": [
     "e3"
    ],
    "legendes": [
     "Just develop: your f1 bishop is going to come out. With a black knight on d7, do not touch d5 with your knight."
    ]
   },
   {
    "id": "q15446cc39",
    "titre": "Albin: 4.Nf3, not 4.e3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4"
    ],
    "coups": [
     "Nf3"
    ],
    "legendes": [
     "Develop while defending e5. Not 4.e3?: after 4…Bb4+ 5.Bd2 dxe3, your advantage disappears, and 6.Bxb4?? falls into the Lasker Trap."
    ]
   },
   {
    "id": "q450b3a77d",
    "titre": "Lasker: 6.fxe3",
    "debut": [
     "d4",
     "d5",
     "c4",
     "e5",
     "dxe5",
     "d4",
     "e3",
     "Bb4+",
     "Bd2",
     "dxe3"
    ],
    "coups": [
     "fxe3"
    ],
    "legendes": [
     "Take back the e3 pawn with the f-pawn. Certainly not 6.Bxb4??: …exf2+ and …fxg1=N+."
    ]
   },
   {
    "id": "q280c70623",
    "titre": "Englund: 6.Nc3",
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "The knight leaves b1, and your queen on d1 now defends the a1 rook. Certainly not 6.Bc3??: after …Bb4, you lose at least the a1 rook."
    ]
   },
   {
    "id": "qc61b15ed1",
    "titre": "1…e5: 2.dxe5",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5"
    ],
    "legendes": [
     "The Englund Gambit: Black offers a pawn.",
     "Here, no 2.c4: take the pawn, it is free."
    ]
   },
   {
    "id": "q5ff71d88b",
    "titre": "1…c5: 2.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5"
    ],
    "legendes": [
     "Black attacks d4 with the c-pawn.",
     "Advance your d-pawn: after 2.c4, …cxd4 would take your central pawn."
    ]
   },
   {
    "id": "q6cc4c9200",
    "titre": "Against 1…e5: take!",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2",
     "Nc3"
    ],
    "legendes": [
     "The Englund Gambit: Black offers a pawn on the very first move.",
     "Here, no 2.c4: <span class=\"mv good\">2.dxe5</span>, the pawn is free.",
     "Black attacks your e5 pawn.",
     "You defend it while developing.",
     "The queen attacks e5 and prepares a trap.",
     "You defend e5 again.",
     "Check, and the queen aims at b2.",
     "You block with the bishop.",
     "The queen takes on b2 and attacks your b1 knight and your a1 rook.",
     "<span class=\"mv good\">6.Nc3</span>: the knight gets to safety, and your queen on d1 now defends the a1 rook. Certainly not 6.Bc3??: after …Bb4, you lose at least the a1 rook (see the traps)."
    ]
   },
   {
    "id": "qa326464e1",
    "titre": "Exercise 1: the minority attack",
    "debut": [],
    "coups": [
     "b5",
     "cxb5",
     "Nxd5"
    ],
    "legendes": [
     "<span class=\"mv good\">15.b5</span>! The pawn slips past the a5 pawn and attacks c6. If Black lets it happen, bxc6 will leave them a weak c6 pawn.",
     "Black takes… but the c6 pawn was the support of d5.",
     "Nxd5! The d5 pawn had no defender left. Your knight takes it and attacks the queen on e7."
    ],
    "fen": "r1b1rnk1/1p2qpp1/2p4p/p2p4/1P1Pn3/2NBPN2/P1Q2PPP/1R3RK1 w - - 0 15"
   },
   {
    "id": "qc5ad3a23c",
    "titre": "Exercise 2: who defends d5?",
    "debut": [],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nxd5",
     "Qd8"
    ],
    "legendes": [
     "Bxf6! The f6 knight was one of the two defenders of d5. You trade it off.",
     "Black takes back with the bishop.",
     "Nxd5! The c6 pawn cannot take back: …cxd5 would open the c-file, and your queen on c2 would take the queen on c7.",
     "The queen leaves the c-file."
    ],
    "fen": "r1b1rnk1/ppq1bppp/2p2n2/3p2B1/3P4/2NBPN2/PPQ2PPP/1R3RK1 w - - 4 12"
   },
   {
    "id": "q546213a00",
    "titre": "Exercise 3: the Bd3 + Qc2 battery",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kh8"
    ],
    "legendes": [
     "Bxh7+! The black bishop has left e7: nothing stands between your g5 bishop and the queen on d8 any more. The f6 knight is pinned: if it takes on h7, Bxd8. And the king cannot take: your queen on c2 protects the bishop.",
     "The king tucks itself away on h8."
    ],
    "fen": "r1bq1rk1/pp1n1ppp/2pb1n2/3p2B1/3P4/2NBPN2/PPQ2PPP/R3K2R w KQ - 2 10"
   },
   {
    "id": "q7984f39dd",
    "titre": "Exercise 4: the isolated pawn and Black's castled king",
    "debut": [],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Qxh7#"
    ],
    "legendes": [
     "Bxf6! Along with the king, the f6 knight is the only defender of h7. Your queen on d3 and your bishop on c2 aim at h7: it is the battery, the other way round.",
     "Black takes back without seeing the threat.",
     "Qxh7#. The king cannot take (your c2 bishop protects the queen), and the f8 rook blocks its only free square."
    ],
    "fen": "2rq1rk1/1b2bppp/ppn1pn2/6B1/3P4/2NQ1N2/PPB2PPP/R3R1K1 w - - 0 14"
   },
   {
    "id": "q67510174b",
    "titre": "Exercise 5: the isolated pawn and the d-file",
    "debut": [],
    "coups": [
     "d5",
     "exd5",
     "Nxd5",
     "Nxd5",
     "Bxd5"
    ],
    "legendes": [
     "d5! Your d1 rook is behind the pawn, the black queen right in front, on d6. The pawn threatens dxc6 or dxe6: the d-file would open onto the queen.",
     "Black takes.",
     "Nxd5! The knight attacks the e7 bishop, already attacked by your queen on e2, and the f6 knight.",
     "Black trades.",
     "Bxd5! Your bishop stands between your d1 rook and the queen on d6: as soon as it moves (Bxc6, Bxf7+), the rook will attack the queen. And the e7 bishop is still attacked by your g5 bishop and your queen on e2."
    ],
    "fen": "r4rk1/pb2bppp/1pnqpn2/6B1/2BP4/2N2N2/PP2QPPP/3RR1K1 w - - 4 13"
   },
   {
    "id": "q772650314",
    "titre": "Exercise 6: the Marshall with …Bg4",
    "debut": [],
    "coups": [
     "Qb3",
     "e6",
     "Qxb7"
    ],
    "legendes": [
     "Qb3! The bishop has left c8: the b7 pawn has no defender left. And if the d5 knight retreats to b6, your queen's diagonal to f7 opens.",
     "Black opens the f8 bishop, but forgets b7.",
     "Qxb7: a pawn up, and your queen attacks the a8 rook."
    ],
    "fen": "rn1qkb1r/ppp1pppp/8/3nNb2/3P4/8/PP2PPPP/RNBQKB1R w KQkq - 4 6"
   },
   {
    "id": "q58a52058a",
    "titre": "Exercise 7: the Accepted with …Bd6",
    "debut": [],
    "coups": [
     "e4",
     "Nbd7",
     "e5"
    ],
    "legendes": [
     "e4! Your c3 knight supports the pawn. And there is a threat: e5 would attack both the d6 bishop and the f6 knight.",
     "Black develops without seeing the threat.",
     "e5! A fork: the pawn attacks the bishop and the knight. One of the two is going to fall."
    ],
    "fen": "rnbq1rk1/ppp2pp1/3bpn1p/8/2BP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 0 8"
   },
   {
    "id": "q4343b279f",
    "titre": "Exercise 8: after the minority attack",
    "debut": [],
    "coups": [
     "Ne5",
     "Ng6"
    ],
    "legendes": [
     "Ne5! With …b6, Black has removed the pawn that defended c6. Your knight, supported by d4, attacks this pawn that nothing protects any more.",
     "Black attacks your knight."
    ],
    "fen": "r3rnk1/4qppp/ppp5/3p1b2/PP1Pn3/2NBPN2/2Q2PPP/1RR3K1 w - - 0 16"
   },
   {
    "id": "q5d8f5345a",
    "titre": "1…b6",
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "c4",
     "Bb7",
     "Nc3",
     "e6",
     "e4"
    ],
    "legendes": [
     "Black prepares the fianchetto of the c8 bishop.",
     "Your usual move.",
     "The bishop aims at e4.",
     "You defend e4 in advance.",
     "Black opens the f8 bishop.",
     "You take the whole centre."
    ]
   },
   {
    "id": "q3ecc31f14",
    "titre": "2…Bf5, the Baltic Defence",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bf5",
     "Nc3",
     "Nf6",
     "Qb3"
    ],
    "legendes": [
     "The bishop comes out early: the b7 pawn is no longer defended.",
     "Your reflex: Nc3.",
     "Black develops.",
     "The queen attacks b7; behind your c4 pawn, she also aims at d5."
    ]
   },
   {
    "id": "q2ad83de0c",
    "titre": "1…g6",
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "c4",
     "Bg7",
     "Nc3",
     "c5",
     "d5"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "Your usual move.",
     "The bishop on g7.",
     "You prepare e4.",
     "Black attacks d4.",
     "You advance, as against every …c5 attack."
    ]
   },
   {
    "id": "q5d54f62ba",
    "titre": "1…d6",
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "c4",
     "e5",
     "Nf3"
    ],
    "legendes": [
     "Black prepares …e5.",
     "Your usual move.",
     "Black attacks d4.",
     "You defend d4 while developing."
    ]
   },
   {
    "id": "qaf9530e80",
    "titre": "1…f5, the Dutch",
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "c4",
     "Nf6",
     "Nc3"
    ],
    "legendes": [
     "The Dutch: Black controls e4 with the f-pawn.",
     "Your usual move.",
     "The knight also comes to watch e4.",
     "Your knight contests e4 in turn."
    ]
   },
   {
    "id": "q24fa84b8d",
    "titre": "1…Nc6",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "c4",
     "e5",
     "d5",
     "Nce7",
     "e4"
    ],
    "legendes": [
     "The knight comes out in front of the c-pawn.",
     "Your usual move.",
     "Black attacks d4.",
     "You advance, chasing the knight.",
     "It retreats.",
     "You complete the centre."
    ]
   },
   {
    "id": "q89121ed02",
    "titre": "1…c6: the Slav",
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "c4",
     "d5",
     "Nc3"
    ],
    "legendes": [
     "Black prepares …d5.",
     "Your usual move.",
     "It is the Slav Defence.",
     "Your reflex: Nc3."
    ]
   },
   {
    "id": "q48c3c41c7",
    "titre": "1…a6 and other waiting moves",
    "debut": [
     "d4"
    ],
    "coups": [
     "a6",
     "c4",
     "e6",
     "Nc3"
    ],
    "legendes": [
     "A waiting move.",
     "Your usual move.",
     "Black opens the f8 bishop.",
     "Your reflex: Nc3, then e4 if Black leaves you the centre."
    ]
   },
   {
    "id": "qb7b2a2a4b",
    "titre": "1…Nf6 2.c4 c5 3.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "c5",
     "d5"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "Black attacks d4.",
     "You advance."
    ]
   },
   {
    "id": "qe85ab425b",
    "titre": "Budapest Gambit",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "e5",
     "dxe5",
     "Ng4",
     "Bf4"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "The Budapest Gambit: a pawn offered.",
     "You take.",
     "The knight attacks e5.",
     "You defend e5 while developing your bishop."
    ]
   },
   {
    "id": "qde19d5eb8",
    "titre": "1…Nf6 2.c4 Nc6 3.Nc3",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "c4",
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Your usual move.",
     "The other knight comes out.",
     "Your reflex: Nc3."
    ]
   },
   {
    "id": "q359f0032d",
    "titre": "2…c6, the Slav",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c6",
     "Nc3",
     "dxc4",
     "e4",
     "b5",
     "a4"
    ],
    "legendes": [
     "The Slav.",
     "Your reflex: Nc3.",
     "Black takes.",
     "The full centre.",
     "Black defends c4.",
     "You attack the chain: the b5 pawn, which holds c4, is targeted."
    ]
   },
   {
    "id": "q690fb882e",
    "titre": "2…e5, the Albin",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "d4",
     "Nf3",
     "Nc6",
     "g3"
    ],
    "legendes": [
     "The Albin Countergambit.",
     "You take.",
     "The d4 pawn hampers your development.",
     "You develop while defending e5: it is the move that avoids the Lasker Trap.",
     "Black attacks e5.",
     "Your bishop will go to g2."
    ]
   },
   {
    "id": "q5c61fa650",
    "titre": "2…Nc6, the Chigorin",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Nc6",
     "Nc3"
    ],
    "legendes": [
     "The Chigorin Defence: the knight in front of the c-pawn.",
     "Your reflex: Nc3, normal development."
    ]
   },
   {
    "id": "qa59d47c3c",
    "titre": "2…c5, the Symmetrical Gambit",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "c5",
     "cxd5",
     "Nf6",
     "e4"
    ],
    "legendes": [
     "Black attacks d4 in turn.",
     "You take on d5.",
     "The knight attacks d5.",
     "You defend d5 and take the centre."
    ]
   },
   {
    "id": "q33ff99518",
    "titre": "2…g6",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "g6",
     "cxd5",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "Black prepares the fianchetto.",
     "You take on d5.",
     "The knight attacks d5.",
     "Develop: the d5 pawn is yours for now."
    ]
   },
   {
    "id": "q143044777",
    "titre": "2…Bg4",
    "debut": [
     "d4",
     "d5",
     "c4"
    ],
    "coups": [
     "Bg4",
     "Nc3"
    ],
    "legendes": [
     "The bishop comes out early.",
     "Your reflex: Nc3. Qb3 against b7 is also an idea, since the bishop no longer defends that pawn."
    ]
   }
  ]
 },
 {
  "id": "londres",
  "titre": "The London System",
  "camp": "w",
  "rep": "rep-londres",
  "sous": "Your White repertoire: 1.d4 and 2.Bf4 against almost everything. {{positions}} to know, always the same set-up.",
  "chapeau": "<p>The London is a system: you bring your bishop out to f4, then build the same c3-d4-e3 pawn pyramid almost whatever Black does. Little theory, a safe king, a clear plan. What you need to learn are the few positions where Black forces you to do something else.</p><p>The lesson follows the tree of your repertoire, then explains the ideas, the traps and the exceptions. Each animated sequence has its Quiz button; all the quizzes are also in Training, under “Opening quizzes”. The links underlined with dots show the position being discussed.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "The repertoire explained",
    "blocs": [
     {
      "t": "p",
      "html": "Your repertoire fits in one sentence: <span class=\"mv\">1.d4</span>, then <span class=\"mv\">2.Bf4</span> against the three most played replies (<span class=\"mv\">1…d5</span>, <span class=\"mv\">1…Nf6</span>, <span class=\"mv\">1…e6</span>). After that, almost always the same set-up: <span class=\"mv\">e3</span>, <span class=\"mv\">Nf3</span>, <span class=\"mv\">c3</span>. The bishop comes out before e3: if you played e3 first, the pawn would shut it in behind your pawns."
     },
     {
      "t": "p",
      "html": "What Black plays between 1000 and 1600 on Lichess (blitz and rapid games) decides the line. Each board is animated: step forward with ›, back with ‹, or click a move. The green arrow is your move; the grey one, your opponent's. The coloured squares show the pieces the explanation talks about. The moves underlined with dots are links to the position being discussed. The <strong>Quiz</strong> button resets the position and asks you to play your moves."
     },
     {
      "t": "table",
      "entetes": [
       "After",
       "Black plays",
       "Frequency",
       "What it is"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "50%",
        "The classical London"
       ],
       [
        "1.d4",
        "1…Nf6",
        "15%",
        "Often an Indian defence"
       ],
       [
        "1.d4",
        "1…e6",
        "10%",
        "Often a transposition"
       ],
       [
        "1.d4 d5 2.Bf4",
        "2…Nc6",
        "30%",
        "The knight eyes b4 and e5"
       ],
       [
        "1.d4 d5 2.Bf4",
        "2…Nf6",
        "23%",
        "Normal development"
       ],
       [
        "1.d4 d5 2.Bf4",
        "2…e6",
        "17%",
        "The f8 bishop eyes d6"
       ],
       [
        "1.d4 Nf6 2.Bf4",
        "2…g6",
        "27%",
        "The fianchetto"
       ],
       [
        "1.d4 e6 2.Bf4",
        "2…c5",
        "12%",
        "Black hits d4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. The basic set-up: 1…d5 2.Bf4 Nf6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5"
      ],
      "coups": [
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "legendes": [
       "<span class=\"mv good\">2.Bf4</span>: your signature move. The bishop comes out at once, onto a fine diagonal.",
       "Black develops.",
       "<span class=\"mv\">3.e3</span> supports d4 and opens the diagonal of your f1 bishop. Your f4 bishop is already out: that is the whole point of the move order.",
       "Black opens the f8 bishop. Their c8 bishop, on the other hand, stays shut in behind e6.",
       "<span class=\"mv\">4.Nf3</span>: the knight comes out and controls e5.",
       "Black attacks your base, the d4 pawn.",
       "<span class=\"mv good\">5.c3</span>: the c3-d4-e3 pyramid. If Black takes on d4, you take back with a pawn and your centre stays standing."
      ],
      "fin": "The typical London position (Stockfish: +0.2). Next: Nbd2, Bd3, O-O, then Ne5. If Black plays …Qb6 to attack b2, reply <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a>: certainly not <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Nbd2??</a>. Against …Bd6, <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>: you keep your bishop.",
      "titre": "The c3-d4-e3 pyramid",
      "quiz": [
       "qfb0db9eb6",
       "q8efee52ab",
       "qceec2bda3"
      ],
      "marques": [
       [
        "f4"
       ],
       [],
       [
        "e3",
        "d4",
        "f1",
        "f4"
       ],
       [
        "f8",
        "c8",
        "e6"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "f4",
        "c3",
        "d4",
        "e3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. 2…Nc6: the knight eyes b4"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4"
      ],
      "coups": [
       "Nc6",
       "e3",
       "Nf6",
       "Nf3",
       "Bf5",
       "Bb5"
      ],
      "legendes": [
       "The most played reply between 1000 and 1600 Elo. The knight eyes b4, then c2.",
       "Always e3.",
       "Black develops.",
       "Nf3.",
       "The c8 bishop comes out in turn.",
       "<span class=\"mv good\">5.Bb5</span>! The bishop pins the c6 knight to the king: it can no longer move. Ne5 will come to attack it a second time."
      ],
      "fin": "Stockfish: +0.7. If Black then plays …e6, <a class=\"lien-var\" href=\"#\" data-var=\"qc7a55708c\">6.Ne5</a> already puts the c6 knight under pressure. Against …Bg4, <a class=\"lien-var\" href=\"#\" data-var=\"q1e3436fde\">c3</a> is enough.",
      "titre": "3…Nf6 4.Nf3 Bf5 5.Bb5",
      "quiz": [
       "q2c87396fd",
       "qc7a55708c",
       "q1e3436fde"
      ],
      "marques": [
       [
        "c6",
        "b4",
        "c2!"
       ],
       [],
       [],
       [],
       [
        "f5"
       ],
       [
        "b5",
        "c6!",
        "e8",
        "f3"
       ],
       [
        "b5",
        "c6!",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3"
      ],
      "coups": [
       "Bf5",
       "Nf3",
       "Nb4",
       "Bd3"
      ],
      "legendes": [
       "The bishop comes out at once and aims at c2.",
       "Develop.",
       "The threat: …Nxc2+, check to the king and an attack on the a1 rook. The c2 pawn is attacked twice (b4 knight, f5 bishop), defended once (your queen).",
       "<span class=\"mv good\">5.Bd3</span> cuts the f5 bishop's diagonal: c2 is now attacked only once. If the knight takes on d3, take back with cxd3."
      ],
      "fin": "Equal (Stockfish: +0.1). Careful: <a class=\"lien-var\" href=\"#\" data-var=\"q4d75699fc\">5.c3??</a> loses the rook, and so does 5.Nbd2?? (…Nxc2+).",
      "titre": "3…Bf5 4.Nf3 Nb4: the trap on c2",
      "quiz": [
       "q8e0bfffdf"
      ],
      "marques": [
       [
        "f5",
        "c2!"
       ],
       [],
       [
        "c2!",
        "b4",
        "f5",
        "d1"
       ],
       [
        "d3",
        "f5",
        "c2!",
        "b4"
       ],
       [
        "b4",
        "c2!",
        "a1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. 2…e6: the black bishop targets your bishop"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4"
      ],
      "coups": [
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3"
      ],
      "legendes": [
       "Black opens the f8 bishop.",
       "e3.",
       "The d6 bishop attacks your f4 bishop: Black wants to trade it off.",
       "<span class=\"mv good\">4.Bg3</span>: you keep your bishop. If it gets taken, it will be by a pawn.",
       "Black trades anyway.",
       "<span class=\"mv good\">5.hxg3</span>: take back with the h-pawn. The h-file opens for your h1 rook, facing the h7 pawn."
      ],
      "fin": "Stockfish: +0.4. Do not take back with <a class=\"lien-var\" href=\"#\" data-var=\"qd2a5dbaee\">fxg3?</a>: your e3 pawn would lose its support. Against <a class=\"lien-var\" href=\"#\" data-var=\"q918670779\">3…c5</a>, develop and take back on d4 with the e-pawn.",
      "titre": "3…Bd6 4.Bg3",
      "quiz": [
       "qd993f6a92",
       "q918670779"
      ],
      "marques": [
       [
        "f8"
       ],
       [],
       [
        "d6",
        "f4!"
       ],
       [
        "g3",
        "h2",
        "f2"
       ],
       [
        "g3!"
       ],
       [
        "g3",
        "h1",
        "h7!"
       ],
       [
        "g3",
        "f2",
        "e3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "4. 1…Nf6 2.Bf4 g6: the fianchetto"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6"
      ],
      "coups": [
       "Bf4",
       "g6",
       "e3",
       "Bg7",
       "Nf3",
       "O-O",
       "h3"
      ],
      "legendes": [
       "Against 1…Nf6 too: 2.Bf4.",
       "Black prepares …Bg7: the fianchetto.",
       "e3.",
       "The g7 bishop aims down the long diagonal.",
       "Develop.",
       "Black castles.",
       "<span class=\"mv good\">5.h3</span>! The f6 knight would like to come to h5 to chase your bishop. With h3, your bishop will have a retreat on h2."
      ],
      "fin": "Equal (Stockfish: +0.1), a healthy position. After …Nh5, <a class=\"lien-var\" href=\"#\" data-var=\"qf810435f2\">6.Bh2</a>. Next: Be2, O-O, c3. Without h3, …Nh5 often ends up trading off your bishop (<a class=\"lien-var\" href=\"#\" data-var=\"q2c341557e\">see the line</a>).",
      "titre": "5.h3: a retreat square for the bishop",
      "quiz": [
       "qcc586f7ec",
       "qf810435f2"
      ],
      "marques": [
       [
        "f6",
        "f4"
       ],
       [
        "f8",
        "g7"
       ],
       [],
       [
        "g7"
       ],
       [],
       [],
       [
        "f6",
        "h5",
        "f4",
        "h2"
       ],
       [
        "f6",
        "f4",
        "h2",
        "h3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "5. 1…e6: 2.Bf4 as well"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e6"
      ],
      "coups": [
       "Bf4",
       "c5",
       "e3",
       "cxd4",
       "exd4",
       "Nc6",
       "Nf3"
      ],
      "legendes": [
       "Against 1…e6 too, 2.Bf4. After …d5 or …Nf6, you are back in the previous lines.",
       "Black attacks d4 right away.",
       "e3 supports d4.",
       "Black trades.",
       "<span class=\"mv good\">4.exd4</span>: take back at once with the e-pawn. Your pawn stays in the centre.",
       "The knight attacks d4.",
       "Nf3 defends d4."
      ],
      "fin": "Stockfish: +0.4. Do not delay the recapture: <a class=\"lien-var\" href=\"#\" data-var=\"qe581c51d5\">4.Nf3?</a> costs a pawn.",
      "titre": "2…c5 3.e3 cxd4 4.exd4",
      "quiz": [
       "qadae236b8"
      ],
      "marques": [
       [
        "e6",
        "f4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "e3",
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "d4"
       ],
       [
        "c6",
        "d4!"
       ],
       [
        "f3",
        "d4!"
       ],
       [
        "d4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>The London in four moves:</strong> Bf4, e3, Nf3, c3. Then Nbd2, Bd3, O-O. What changes depending on Black comes down to a few rules: Bg3 against …Bd6, h3 against the fianchetto, Bb5 against …Nc6 and …Bf5, Bd3 against …Nb4, Qb3 against …Qb6."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "What to know by heart",
    "blocs": [
     {
      "t": "p",
      "html": "Here is the whole repertoire, read straight from your data: if you change it in the editor, this tree follows. There are {{positions}} where it is up to you to find the move, but most of them look alike: that is the advantage of a system. In the table, click a move to see it on the board; each move is also a quiz."
     },
     {
      "t": "h",
      "html": "The decisions to know"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "Black plays",
       "You play",
       "Why"
      ],
      "lignes": [
       [
        "1.d4",
        "1…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2606a729d\">2.Bf4</a>",
        "The bishop comes out before e3"
       ],
       [
        "",
        "1…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6c4c6653d\">2.Bf4</a>",
        "Same system"
       ],
       [
        "",
        "1…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q65502247c\">2.Bf4</a>",
        "Same system"
       ],
       [
        "2.Bf4",
        "almost everything",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde268baff\">3.e3</a>",
        "Supports d4, opens the f1 bishop"
       ],
       [
        "3.e3",
        "almost everything",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbbf48a2e9\">4.Nf3</a>",
        "Develops, controls e5"
       ],
       [
        "4.Nf3",
        "…c5 or nothing special",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q11a0c31eb\">5.c3</a>",
        "The pyramid"
       ],
       [
        "Everywhere",
        "…Bd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>",
        "Keep your bishop"
       ],
       [
        "",
        "…Bxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>",
        "The h-file opens"
       ],
       [
        "",
        "…g6 and …Bg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>",
        "Retreat to h2 against …Nh5"
       ],
       [
        "",
        "…Nc6 and …Bf5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Bb5</a>",
        "Pins the knight"
       ],
       [
        "",
        "…Nb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Bd3</a>",
        "Cuts the f5-c2 diagonal"
       ],
       [
        "",
        "…Bg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1e3436fde\">c3</a>",
        "The pin is no bother"
       ],
       [
        "",
        "…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>",
        "Take back at once"
       ],
       [
        "",
        "…Bb4+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3d1bcbb33\">c3</a>",
        "Gains time on the bishop"
       ],
       [
        "Fianchetto, without h3",
        "…Nh5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ccef8522\">Bg5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q6ae32d977\">Be5</a>",
        "The bishop gets to safety"
       ],
       [
        "",
        "…d6 then …Bg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0c016b191\">h3</a>",
        "Puts the question to the bishop"
       ],
       [
        "1…Nf6 2.Bf4 e6 3.e3 b6 4.Nf3",
        "4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q146a7ca31\">Nc3</a>",
        "Then Nb5 against c7"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Every line, as a quiz"
     },
     {
      "t": "p",
      "html": "Every line of your repertoire, from 1.d4 to your last reply, sorted by Black's first move. Click your last move to see the line; its Quiz button has you replay it from the start. A short line stops where it joins a line already written."
     },
     {
      "t": "h",
      "html": "Against 1…d5"
     },
     {
      "t": "table",
      "entetes": [
       "Black plays",
       "Your line"
      ],
      "lignes": [
       [
        "1…d5 2…Nc6 3…Nf6 4…Bg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02936d27c\">5.c3</a>"
       ],
       [
        "1…d5 2…Nc6 3…Nf6 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q631a84079\">5.c3</a>"
       ],
       [
        "1…d5 2…Nc6 3…Nf6 4…Bf5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q784cc7745\">5.Bb5</a>"
       ],
       [
        "1…d5 2…Nc6 3…Bf5 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qffadd6d88\">5.c3</a>"
       ],
       [
        "1…d5 2…Nc6 3…Bf5 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfe8ec8644\">5.Bb5</a>"
       ],
       [
        "1…d5 2…Nc6 3…Bf5 4…Nb4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8696a14d7\">5.Bd3</a>"
       ],
       [
        "1…d5 2…Nc6 3…e6 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q353844a3f\">5.c3</a>"
       ],
       [
        "1…d5 2…Nc6 3…e6 4…Bd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5192318b4\">5.Bg3</a>"
       ],
       [
        "1…d5 2…Nc6 3…e6 4…Bb4+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd2fb6049d\">5.c3</a>"
       ],
       [
        "1…d5 2…Nf6 3…e6 4…Bd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q45b3957fe\">5.Bg3</a>"
       ],
       [
        "1…d5 2…Nf6 3…e6 4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ad15f606\">5.c3</a>"
       ],
       [
        "1…d5 2…Nf6 3…e6 4…Be7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q56e7a248e\">5.c3</a>"
       ],
       [
        "1…d5 2…Nf6 3…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q89b060082\">4.Nf3</a>"
       ],
       [
        "1…d5 2…Nf6 3…Bf5 4…e6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4cf5b36cb\">5.c3</a>"
       ],
       [
        "1…d5 2…Nf6 3…Bf5 4…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd32058728\">5.Bb5</a>"
       ],
       [
        "1…d5 2…Nf6 3…Bf5 4…h6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3560444e9\">5.Bd3</a>"
       ],
       [
        "1…d5 2…e6 3…Bd6 4…Bxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02799299e\">5.hxg3</a>"
       ],
       [
        "1…d5 2…e6 3…Bd6 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q64f71fa89\">5.Nf3</a>"
       ],
       [
        "1…d5 2…e6 3…Bd6 4…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4014ef669\">5.Nf3</a>"
       ],
       [
        "1…d5 2…e6 3…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qab11a053b\">4.Nf3</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa246f56c7\">5.c3</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa628b50c8\">5.exd4</a>"
       ],
       [
        "1…d5 2…e6 3…c5 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb8c1d925d\">5.c3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Against 1…Nf6"
     },
     {
      "t": "table",
      "entetes": [
       "Black plays",
       "Your line"
      ],
      "lignes": [
       [
        "1…Nf6 2…g6 3…Bg7 4…O-O",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q69efb6e43\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…Bg7 4…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc87f7ad17\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…Bg7 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q63fd62a1d\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…d6 4…Bg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6371c765c\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…d6 4…Bg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf9bad8772\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…d6 4…Nh5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q02bb48fec\">5.Bg5</a>"
       ],
       [
        "1…Nf6 2…g6 3…d5 4…Bg7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbb679dbc1\">5.h3</a>"
       ],
       [
        "1…Nf6 2…g6 3…d5 4…Nh5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5b0ecc810\">5.Be5</a>"
       ],
       [
        "1…Nf6 2…g6 3…d5 4…Bg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2582d3a7e\">5.c3</a>"
       ],
       [
        "1…Nf6 2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd53a2b9f6\">3.e3</a>"
       ],
       [
        "1…Nf6 2…e6 3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc6ef374eb\">4.Nf3</a>"
       ],
       [
        "1…Nf6 2…e6 3…c5 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde9a63467\">5.exd4</a>"
       ],
       [
        "1…Nf6 2…e6 3…c5 4…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qee46ee0ed\">5.c3</a>"
       ],
       [
        "1…Nf6 2…e6 3…c5 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qafa5f8847\">5.c3</a>"
       ],
       [
        "1…Nf6 2…e6 3…b6 4…Bb7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q108d61713\">5.c3</a>"
       ],
       [
        "1…Nf6 2…e6 3…b6 4…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8a7b338ca\">5.Nc3</a>"
       ],
       [
        "1…Nf6 2…e6 3…b6 4…Be7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q78806fc72\">5.Bd3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Against 1…e6"
     },
     {
      "t": "table",
      "entetes": [
       "Black plays",
       "Your line"
      ],
      "lignes": [
       [
        "1…e6 2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q87498de50\">3.e3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa49a94c48\">5.Nf3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q896810dc2\">5.Nf3</a>"
       ],
       [
        "1…e6 2…c5 3…cxd4 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1096dc836\">5.Nf3</a>"
       ],
       [
        "1…e6 2…c5 3…Nc6 4…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qbf591f758\">5.c3</a>"
       ],
       [
        "1…e6 2…c5 3…Nc6 4…cxd4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q47914a892\">5.exd4</a>"
       ],
       [
        "1…e6 2…c5 3…Nc6 4…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd7baed792\">5.c3</a>"
       ],
       [
        "1…e6 2…c5 3…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8cfc19009\">4.Nf3</a>"
       ],
       [
        "1…e6 2…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q97061c4d7\">3.e3</a>"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The full tree"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Three reflexes cover almost everything.</strong> Bf4, e3, Nf3, c3 in that order. Your f4 bishop is your best piece: keep it (Bg3, h3). And look at b2 and c2 before every move."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "The ideas",
    "blocs": [
     {
      "t": "h",
      "html": "A system, not a string of moves"
     },
     {
      "t": "p",
      "html": "The London is played almost the same way against everything: bishop on f4, pawns on c3-d4-e3, knights on f3 and d2, bishop on d3, castling. You do not have to memorise dozens of lines: you build the same position, and you learn the few cases where Black forces you to do otherwise."
     },
     {
      "t": "h",
      "html": "Why Bf4 before e3"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "e3"
      ],
      "fleches": [],
      "legende": "If you play e3 before bringing out the bishop, your c1 bishop is shut in behind its own pawns: it only sees d2.",
      "marques": [
       "c1",
       "e3",
       "b2",
       "d2"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3"
      ],
      "fleches": [
       [
        "f1d3",
        "v"
       ]
      ],
      "legende": "With Bf4 first, both bishops are free: the f4 bishop outside, the f1 bishop heading for d3.",
      "marques": [
       "f4",
       "f1",
       "d3"
      ]
     },
     {
      "t": "h",
      "html": "The c3-d4-e3 pyramid"
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "fleches": [],
      "legende": "The three pawns c3, d4 and e3 hold each other: if Black takes on d4, a pawn takes back. Your centre never collapses, and you can play without complicated calculation.",
      "marques": [
       "c3",
       "d4",
       "e3"
      ]
     },
     {
      "t": "h",
      "html": "The plan: Nbd2, Bd3, O-O, Ne5"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6"
      ],
      "coups": [
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5"
      ],
      "legendes": [
       "The knight goes to d2, not c3: the c3 square is taken by your pawn.",
       "Black offers a bishop trade.",
       "As always: Bg3.",
       "Black castles.",
       "The d3 bishop aims at h7, the weak square of Black's castled position.",
       "Black prepares …Bb7.",
       "Ne5: the knight settles in the centre. Only …f6 could chase it, weakening Black's castled position; Black can also trade it off."
      ],
      "fin": "Your dream position (Stockfish: +0.1, a healthy position). Next: O-O, then f4 or Qf3 to attack the king, or e4 to open the centre.",
      "titre": "The plan after the repertoire",
      "quiz": [
       "qc3707f8b1"
      ],
      "marques": [
       [
        "d2",
        "c3"
       ],
       [
        "d6",
        "f4!"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "e5",
        "f7",
        "c6",
        "d6"
       ],
       [
        "e5",
        "d3",
        "f2",
        "d1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Against …Qb6: Qb3"
     },
     {
      "t": "p",
      "html": "As soon as your bishop leaves c1, the b2 pawn is no longer defended. The black queen often comes to b6 to attack it. Reply <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a>: you defend b2 and offer a trade. If Black pushes …c4, <a class=\"lien-var\" href=\"#\" data-var=\"q63e06c8f1\">7.Qc2</a>. If c3 has not been played yet, Qb3 is impossible: <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Qc1</a>."
     },
     {
      "t": "h",
      "html": "Your f4 bishop is your best piece"
     },
     {
      "t": "p",
      "html": "Black often tries to trade it off: with …Bd6 or with …Nh5. Keep it: <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a> against the bishop, <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a> against the knight. If they trade anyway with …Bxg3, <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a> opens the h-file for you."
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Strengths and weaknesses",
    "blocs": [
     {
      "t": "p",
      "html": "No opening is perfect. Knowing the London's strengths tells you what to look for in the middlegame; knowing its weaknesses tells you what to watch out for."
     },
     {
      "t": "h",
      "html": "What the London gives you"
     },
     {
      "t": "liste",
      "items": [
       "<strong>A system.</strong> Almost whatever Black does, you build the same position: bishop on f4, pawns on c3-d4-e3, knights on f3 and d2, bishop on d3, castling. You know your plan before move 10.",
       "<strong>Little theory.</strong> About ten rules (Bg3, h3, Bb5, Bd3, Qb3…) cover your whole repertoire. You save your energy, and your clock time, for the middlegame.",
       "<strong>A solid centre.</strong> The c3-d4-e3 pyramid holds on its own: if Black takes on d4, a pawn takes back.",
       "<strong>A safe king.</strong> You castle quickly, behind pawns that have not moved. Quick attacks against your king are rare.",
       "<strong>Attacking chances.</strong> The d3 bishop aims at h7, the knight comes to e5, the queen to f3 or h5. Between 1000 and 1600, many black castled positions do not withstand this trio: the rest of the lesson shows you how."
      ]
     },
     {
      "t": "h",
      "html": "Its weak points"
     },
     {
      "t": "liste",
      "items": [
       "<strong>The b2 pawn.</strong> Your c1 bishop has gone to f4: nothing defends b2 any more. That is why …Qb6 comes up so often. Reply <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a>, never <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Nbd2??</a>.",
       "<strong>The …c5 and …Qb6 pressure.</strong> Black attacks d4 and b2 at the same time, often with …Nc6 as well. As long as c3 and Qb3 (or Qc1 before c3) are in place, everything holds.",
       "<strong>Black equalises easily.</strong> After the opening, Stockfish gives White only a small edge (+0.1 to +0.3). The London does not win thanks to theory: it gives you a healthy position, and the game is decided in the middlegame.",
       "<strong>Your f4 bishop can be traded off.</strong> By …Bd6 or by …Nh5. It is not a disaster (<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>, and <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a> even opens the h-file for you), but your best piece disappears.",
       "<strong>The queenside belongs to Black.</strong> With …c4 then …b5, …a5 and …b4, Black gains space where you have no pieces. If you follow them there, you are playing on their ground: strike in the centre instead (see the board below)."
      ]
     },
     {
      "t": "h",
      "html": "What Black is after"
     },
     {
      "t": "p",
      "html": "Against the London, Black has four ideas. If you recognise them, you know what to do."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Hitting d4 and b2</strong> with …c5, …Nc6 and …Qb6. Your answer: the pyramid (c3) and <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a>.",
       "<strong>Trading off your f4 bishop</strong> with …Bd6 or …Nh5. Your answer: <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a> against the fianchetto, and taking back with the h-pawn if the trade happens on g3.",
       "<strong>Gaining space on the queenside</strong> with …c4, …b5, …a5 then …b4. Your answer: do not follow them there, but strike in the centre with e4, or hit their pawn chain with b3 or a4.",
       "<strong>Freeing their game</strong> with …Ne4 (to trade pieces) or, when they have played …g6 and …d6, with the …e5 push. Your answer: keep e4 and e5 under control, and do not put your bishop on d3 against …e5-e4 (see the mistakes below)."
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3"
      ],
      "coups": [
       "c4",
       "Bc2",
       "b5",
       "O-O",
       "a5",
       "e4",
       "dxe4",
       "Nxe4",
       "Nxe4",
       "Bxe4"
      ],
      "legendes": [
       "…c4: Black gains space on the queenside and chases your d3 bishop.",
       "The bishop retreats to c2. It stays on the diagonal leading to h7.",
       "…b5 supports the c4 pawn. Black's plan: …a5 then …b4, to open lines against c3.",
       "Castling: your king gets to safety before the centre opens.",
       "…a5: Black carries on on the queenside.",
       "<span class=\"mv good\">11.e4</span>! Do not follow Black to the queenside: strike in the centre, where your pieces are ready. It is the best move according to Stockfish (+0.6).",
       "Black takes.",
       "Your knight takes back.",
       "Knights are traded.",
       "Your bishop takes back and settles on e4: it attacks the c6 knight (no longer defended since …b5) and aims at h7."
      ],
      "fin": "Stockfish: +1.0. The centre is open and your pieces are active there; the c4 pawn is far from its pieces and may become a target. Remember the rule: an attack on a wing is answered by action in the centre.",
      "titre": "Black on the queenside, you in the centre",
      "quiz": [
       "q3dde29aa4"
      ],
      "marques": [
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "b5",
        "c4",
        "c3!"
       ],
       [
        "g1"
       ],
       [
        "a5"
       ],
       [
        "e4",
        "d5!"
       ],
       [
        "e4!"
       ],
       [
        "e4!"
       ],
       [
        "e4!",
        "f6"
       ],
       [
        "e4",
        "c6!",
        "h7!",
        "b5"
       ],
       [
        "c4!",
        "e4",
        "f3"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Typical mistakes among club players"
     },
     {
      "t": "p",
      "html": "They keep coming up between 1000 and 1600. For each one, the first link shows the mistake (the move in red); the second, when there is one, has you play the right move as a quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Forgetting b2.</strong> It is the number one mistake in the London: before every move, look where the black queen is. <a class=\"lien-var\" href=\"#\" data-var=\"q4132ba7b4\">6.Nbd2??</a> loses a pawn at once.",
       "<strong>Taking on b7 too quickly.</strong> When Black's c8 bishop has come out, your queen on b3 attacks b7, and it is often a good plan. But first look at what the black rook can do on the b-file: <a class=\"lien-var\" href=\"#\" data-var=\"q2d16a28fb\">7.Qxb7?</a>. The right move here: <a class=\"lien-var\" href=\"#\" data-var=\"q5a8da8e87\">7.Bxd6</a>.",
       "<strong>The e4 break too early.</strong> Before playing e4, count: the pawn must be defended as many times as it is attacked. Without a bishop on d3, <a class=\"lien-var\" href=\"#\" data-var=\"qeeb4cb40b\">8.e4?</a> loses a pawn. First <a class=\"lien-var\" href=\"#\" data-var=\"qd1765d946\">8.Bd3</a>.",
       "<strong>The sacrifice on h7 without checking.</strong> The Greek gift (Bxh7+ then Ng5+) only works if your knight can settle on g5. Here, the e7 bishop takes it: <a class=\"lien-var\" href=\"#\" data-var=\"qd1ecc41f4\">9.Bxh7+?</a>. The right move was simply 9.Re1 (Stockfish: +0.1).",
       "<strong>The bishop on d3 against …d6 and …e5.</strong> When Black has played …g6 and …d6, the …e5-e4 push can attack your d3 bishop and your f3 knight at the same time: <a class=\"lien-var\" href=\"#\" data-var=\"q57a65a47e\">6.Bd3 then 8.Bh2??</a>. Against this set-up, put your bishop on e2: <a class=\"lien-var\" href=\"#\" data-var=\"qab6365049\">6.Be2</a>."
      ],
      "num": true
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "The middlegame",
    "blocs": [
     {
      "t": "p",
      "html": "Your repertoire stops at your 5th move. After that, you no longer play moves learnt by heart: you follow a plan. Here are the London's pawn structures, where to put your pieces, and the plans that win games among club players."
     },
     {
      "t": "h",
      "html": "The pawn structures"
     },
     {
      "t": "p",
      "html": "The “structure” is the shape of both sides' pawns. It decides the good squares for your pieces, and the possible “breaks”: the pawn pushes that open the game."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "d3h7",
        "v"
       ],
       [
        "e3e4",
        "v"
       ]
      ],
      "legende": "<strong>The c3-d4-e3 pyramid.</strong> Your d4 pawn holds the e5 square: it is your “outpost”, a central square that Black's pawns find hard to attack (only …f6 could chase your piece, weakening Black's castled position). The arrows: the knight heading for e5, the d3 bishop aiming at h7, and the e4 break.",
      "marques": [
       "c3",
       "d4",
       "e3",
       "e5"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "e6",
       "Bf4",
       "c5",
       "e3",
       "cxd4",
       "exd4",
       "d5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Nc6",
       "c3",
       "Bd6",
       "Bg3"
      ],
      "fleches": [
       [
        "f3e5",
        "v"
       ],
       [
        "d3h7",
        "v"
       ]
      ],
      "legende": "<strong>After …cxd4 exd4.</strong> Your e3 pawn has gone to d4 (<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>): the e-file opens for a rook (O-O then Re1), and e5 stays held by the d4 pawn. Black, for their part, has the c-file. Your plan does not change: O-O, Re1, Ne5.",
      "marques": [
       "d4",
       "e5",
       "f3"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3"
      ],
      "fleches": [
       [
        "h1h7",
        "v"
       ],
       [
        "d3h7",
        "v"
       ],
       [
        "g3g4",
        "v"
       ]
      ],
      "legende": "<strong>After …Bxg3 hxg3.</strong> You have lost your London bishop, but your h1 rook eyes h7 without moving: with the d3 bishop, h7 is already attacked twice. Do not castle kingside too quickly: as long as your rook is on h1, the black king cannot even take on h7 (it would walk into check). The g3 pawn can also advance (g4-g5) to chase the f6 knight.",
      "marques": [
       "h1",
       "d3",
       "h7!",
       "g3"
      ]
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "g6",
       "e3",
       "Bg7",
       "Nf3",
       "O-O",
       "h3",
       "d6",
       "Be2",
       "Nbd7",
       "O-O"
      ],
      "fleches": [
       [
        "e7e5",
        "g"
       ],
       [
        "c2c3",
        "v"
       ]
      ],
      "legende": "<strong>Against the fianchetto.</strong> The g7 bishop hits the long diagonal and Black prepares …e5 (grey arrow). Your set-up: h3 (a retreat on h2 for the bishop), Be2 rather than Bd3, c3 to close the g7 bishop's diagonal, then Nbd2. When …e5 comes, always check what …e4 would do: with the bishop on e2, nothing gets forked.",
      "marques": [
       "g7",
       "e2",
       "h3",
       "f4"
      ]
     },
     {
      "t": "h",
      "html": "Where to put your pieces"
     },
     {
      "t": "table",
      "entetes": [
       "Piece",
       "Square",
       "Why"
      ],
      "lignes": [
       [
        "c1 bishop",
        "f4, then g3 (or h2)",
        "It comes out before e3. Bg3 against …Bd6; h2 against …Nh5 when you have played h3."
       ],
       [
        "f1 bishop",
        "d3 (e2 against …g6 and …d6; c2 after …c4)",
        "On d3 or c2, it aims at h7, the weak point of Black's castled position."
       ],
       [
        "g1 knight",
        "f3, then e5",
        "On e5, on your outpost, it attacks f7, d7 and c6 and supports the attack."
       ],
       [
        "b1 knight",
        "d2",
        "c3 is taken by your pawn. From d2, it supports e4, and it can go to f3 when the other knight is on e5."
       ],
       [
        "Queen",
        "c2, e2 or f3 (b3 against …Qb6)",
        "On c2, she aims at h7 behind the bishop. On f3 or h5, she joins the attack. On b3, she defends b2."
       ],
       [
        "Rooks",
        "e1, f1 or h1",
        "A rook goes where a file opens: e1 with the e4 break, f1 with f4, h1 after hxg3."
       ],
       [
        "King",
        "g1 (O-O)",
        "Safe behind f2-g2-h2. After hxg3, do not hurry: the h1 rook is more useful on its file (you can also castle queenside)."
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 1: Ne5, f4 and the attack on the castled king"
     },
     {
      "t": "p",
      "html": "After Nbd2, Bd3 and Ne5, you can support your knight with f4. Your d4-e3-f4 pawns then form a wall, as in the opening called the “Stonewall”: the e5 knight is firmly supported (only …f6 can still chase it), and if Black trades it off, you take back with the f-pawn, which opens the f-file for your rook."
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5",
       "Bb7",
       "f4",
       "Rc8"
      ],
      "fleches": [
       [
        "g3h4",
        "v"
       ],
       [
        "d1h5",
        "v"
       ]
      ],
      "legende": "The d4-e3-f4 wall supports the e5 knight. Next: Bh4, which brings the bishop out from behind the f4 pawn and pins the f6 knight (it can no longer move without letting the queen on d8 be taken), then Bxf6 to eliminate the defender of h7, and the queen to h5. Model game 1 shows this plan all the way to mate.",
      "marques": [
       "d4",
       "e3",
       "f4",
       "e5"
      ]
     },
     {
      "t": "h",
      "html": "Plan 2: the Greek gift, Bxh7+"
     },
     {
      "t": "p",
      "html": "The “Greek gift” is the most famous of all sacrifices: your bishop gives itself up on h7 with check, your knight jumps to g5 with check, and your queen arrives on h5. The black king is left alone against three pieces."
     },
     {
      "t": "p",
      "html": "It only works if everything is in place. Check these four conditions before playing Bxh7+ followed by Ng5+:"
     },
     {
      "t": "liste",
      "items": [
       "Your bishop aims at h7 (from d3, c2 or e4) and the f6 knight is no longer there to defend h7 (chased by a pawn on e5, or traded off).",
       "Your knight can go to g5 without being taken for free: no black bishop on e7, and if the black queen guards g5, your knight must be protected there (bishop on f4, pawn on h4).",
       "Your queen can reach h5 in one move.",
       "Black has no quick defence: no knight coming back to f6, no bishop coming to f5."
      ],
      "num": true
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "Qc7",
       "O-O",
       "Bxg3",
       "hxg3"
      ],
      "coups": [
       "c4",
       "Bc2",
       "b5",
       "e4",
       "b4",
       "e5",
       "Nd7",
       "Bxh7+",
       "Kxh7",
       "Ng5+",
       "Kg8",
       "Qh5"
      ],
      "legendes": [
       "…c4 chases your d3 bishop.",
       "The bishop retreats to c2: it keeps the h7 diagonal.",
       "Black advances on the queenside.",
       "<span class=\"mv\">12.e4</span>: the central break. If the pawn reaches e5, it will chase the f6 knight, the only defender of h7.",
       "Black carries on on the queenside…",
       "<span class=\"mv good\">13.e5</span>! The f6 knight has to leave.",
       "It retreats to d7. h7 has only the king left to defend it: the conditions are met (your queen will go via h5 as soon as the knight has jumped to g5).",
       "<span class=\"mv good\">14.Bxh7+</span>! The Greek gift.",
       "The king takes.",
       "<span class=\"mv good\">15.Ng5+</span>: check. The knight is safe on g5: the black queen is on c7 and no black bishop guards g5.",
       "The king goes back to g8, the most natural move.",
       "<span class=\"mv good\">16.Qh5</span>: the threat is Qh7 mate, and the e5 pawn rules out …Nf6."
      ],
      "fin": "There is no defence left: after …Rd8, Qxf7+ and the queen chases the king until mate (Stockfish announces a forced mate). The best defence was 15…Kg6, but there too the attack goes on (Stockfish: +2.0).",
      "titre": "The Greek gift",
      "quiz": [
       "q28e19ed56"
      ],
      "marques": [
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "b5"
       ],
       [
        "e4",
        "e5",
        "f6!",
        "h7"
       ],
       [
        "b4"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "h7!",
        "f3",
        "d1"
       ],
       [
        "h7!",
        "g8!"
       ],
       [
        "h7!"
       ],
       [
        "g5",
        "h7!",
        "c7"
       ],
       [
        "g8"
       ],
       [
        "h5",
        "h7!",
        "e5",
        "g5"
       ],
       [
        "h5",
        "g5",
        "f7!",
        "g8"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 3: the h-file after …Bxg3 hxg3"
     },
     {
      "t": "p",
      "html": "When Black trades off your bishop with …Bxg3, the h-file is yours. The defender of h7 is the f6 knight: if you eliminate it, your h1 rook takes on h7."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3",
       "b6"
      ],
      "coups": [
       "Ne5",
       "Qc7",
       "Ng4",
       "Re8",
       "Nxf6+",
       "gxf6",
       "Rxh7"
      ],
      "legendes": [
       "<span class=\"mv good\">10.Ne5</span>! The knight attacks c6, which nothing has defended since …b6.",
       "The queen defends c6.",
       "<span class=\"mv good\">11.Ng4</span>! The knight is going to trade off the defender of h7.",
       "Black frees f8 for the king.",
       "Nxf6+: the defender disappears.",
       "Black takes back with the g-pawn: their king is exposed.",
       "<span class=\"mv good\">13.Rxh7</span>: the rook comes into play without having needed to move before."
      ],
      "fin": "Stockfish: +5.9. Your queen is going to arrive on h5 and the black king has no pawns left to shelter it. If Black castles while your bishop is already on d3, Bxh7+ can even work at once: that is exercise 6.",
      "titre": "The h-file",
      "quiz": [
       "q15bbe301b"
      ],
      "marques": [
       [
        "e5",
        "c6!",
        "b6"
       ],
       [
        "c7",
        "c6!",
        "e5"
       ],
       [
        "g4",
        "f6!",
        "h7"
       ],
       [
        "e8",
        "f8",
        "g8"
       ],
       [
        "f6!",
        "h7"
       ],
       [
        "f6!",
        "g8!"
       ],
       [
        "h1",
        "h7!"
       ],
       [
        "d1",
        "h5",
        "h7",
        "g8!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Plan 4: the e4 break"
     },
     {
      "t": "p",
      "html": "e4 is the London's central push. It opens the game for your pieces and, if the pawn then reaches e5, it chases the f6 knight. Often it even attacks two pieces at once. When to play it?"
     },
     {
      "t": "liste",
      "items": [
       "Your pieces are developed: Nbd2, Bd3 (or Bc2), O-O. A queen on e2 or c2, or a rook on e1, helps even more.",
       "e4 is defended at least as many times as it is attacked (count Black's d5 pawn and f6 knight).",
       "The best moment: when Black has closed the queenside with …c4. They no longer have a c-pawn to hit your centre."
      ],
      "num": true
     },
     {
      "t": "pos",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "c4",
       "Bc2",
       "b5",
       "e4"
      ],
      "fleches": [
       [
        "e4e5",
        "v"
       ],
       [
        "e5d6",
        "r"
       ],
       [
        "e5f6",
        "r"
       ]
      ],
      "legende": "After e4, the threat is e5: the pawn would attack both the d6 bishop and the f6 knight. Black must react at once, with …dxe4 or …Nxe4. If they forget, that is exercise 5.",
      "marques": [
       "e4",
       "e5!",
       "d6!",
       "f6!"
      ]
     },
     {
      "t": "h",
      "html": "Plan 5: the queenside, against …c4 and …b5"
     },
     {
      "t": "p",
      "html": "When Black pushes …c4, your bishop can no longer go to d3 and Black gains space. Two answers: the e4 break in the centre, or hitting their pawn chain from below: b3 attacks c4, a4 attacks b5."
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2"
      ],
      "coups": [
       "c4",
       "Be2",
       "b5",
       "O-O",
       "a5",
       "b3",
       "a4",
       "Ne5"
      ],
      "legendes": [
       "…c4: Black closes the queenside and gains space. Your f1 bishop will not be able to go to d3.",
       "The bishop develops to e2.",
       "…b5 supports the c4 pawn.",
       "Castling.",
       "…a5 prepares …b4 against your c3 pawn.",
       "<span class=\"mv good\">9.b3</span>! You hit the pawn chain from below: b3 attacks c4. If …cxb3, axb3 and your a1 rook wins the a-file.",
       "Black pushes on.",
       "<span class=\"mv good\">10.Ne5</span>: while Black advances their pawns, you place your pieces. Next: e4 in the centre."
      ],
      "fin": "Stockfish: +0.6. Black's pawns are advanced, but almost nothing supports them, and your structure stays solid. Against …b5 without …c4, the lever is a4: it attacks b5 before the pawn reaches b4.",
      "titre": "Against …c4: b3",
      "quiz": [
       "q2059e461c"
      ],
      "marques": [
       [
        "c4",
        "f1",
        "d3"
       ],
       [
        "e2"
       ],
       [
        "b5",
        "c4"
       ],
       [
        "g1"
       ],
       [
        "a5",
        "b5",
        "c3!"
       ],
       [
        "b3",
        "c4!",
        "a1"
       ],
       [
        "a4"
       ],
       [
        "e5",
        "e3"
       ],
       [
        "a4",
        "b5",
        "c4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Pawn breaks"
     },
     {
      "t": "table",
      "entetes": [
       "Break",
       "When to play it",
       "What it gives"
      ],
      "lignes": [
       [
        "e3-e4",
        "Pieces developed, e4 defended enough; ideal after …c4",
        "Opens the centre; e4-e5 chases the Nf6 and can fork Bd6 and Nf6"
       ],
       [
        "f2-f4",
        "After Ne5, when Black has castled",
        "Supports the e5 knight; the f-file opens if Black trades it off"
       ],
       [
        "h2-h4-h5",
        "When you attack Black's castled king and your own king is not castled on that side",
        "The h-pawn attacks the castled position; your h1 rook follows behind"
       ],
       [
        "g3-g4-g5",
        "After …Bxg3 hxg3",
        "Chases the f6 knight, the defender of h7"
       ],
       [
        "b2-b3",
        "Against …c4",
        "Attacks the c4 spearhead and opens lines on the queenside"
       ],
       [
        "a2-a4",
        "Against …b5",
        "Attacks b5 before it advances to b4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>The plan in one sentence:</strong> Nbd2, Bd3, O-O, Ne5; then f4 and the attack on the castled king, or e4 if Black closes the queenside. Before the Greek gift (Bxh7+ then Ng5+), check the four conditions."
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "The traps",
    "blocs": [
     {
      "t": "p",
      "html": "Two kinds of traps: the ones you set, where Black loses material by playing the natural move, and the ones set for you, which you need to know so as not to fall into them. All have been checked with Stockfish. Each trap's quiz asks you for the right move: the punishment when your opponent goes wrong, the defence when you are the target."
     },
     {
      "t": "h",
      "html": "The ones you set"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "c5",
       "e3"
      ],
      "coups": [
       "Qb6",
       "Nc3",
       "Qxb2",
       "Nxd5",
       "Qa3",
       "Nc7+",
       "Kd8",
       "Nxa8"
      ],
      "legendes": [
       "The queen attacks b2.",
       "<span class=\"mv good\">4.Nc3</span>! You leave b2. The knight eyes d5.",
       "<span class=\"mv bad\">4…Qxb2</span>?? The pawn is poisoned.",
       "<span class=\"mv good\">5.Nxd5</span>! The knight takes a pawn and threatens Nc7+, check to the king and an attack on the a8 rook.",
       "The queen falls back to a3, but she does not defend c7.",
       "Check: the king has to move.",
       "The king steps aside.",
       "You take the rook."
      ],
      "fin": "You have won a rook (Stockfish: +4.4). This trap only works if the black pawn is on d5: against 1…Nf6, …Qxb2 can be played safely.",
      "titre": "2…c5 3.e3 Qb6 4.Nc3: b2 is poisoned",
      "couleurs": [
       "g",
       "v",
       "r",
       "v",
       "g",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q6f1b22494"
      ],
      "marques": [
       [
        "b6",
        "b2!"
       ],
       [
        "c3",
        "b2!",
        "d5!"
       ],
       [
        "b2!"
       ],
       [
        "d5",
        "c7!",
        "e8",
        "a8!"
       ],
       [
        "a3",
        "c7!",
        "d5"
       ],
       [
        "c7",
        "e8!"
       ],
       [
        "d8"
       ],
       [
        "a8!"
       ],
       [
        "a8",
        "d5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3",
       "Nf6",
       "Nf3",
       "Bf5",
       "Bb5"
      ],
      "coups": [
       "e6",
       "Ne5",
       "Bd6",
       "Nxc6",
       "bxc6",
       "Bxc6+"
      ],
      "legendes": [
       "Black opens the f8 bishop.",
       "<span class=\"mv good\">6.Ne5</span>: the pinned c6 knight is attacked twice and defended once.",
       "<span class=\"mv bad\">6…Bd6</span>? Black develops without taking care of c6.",
       "<span class=\"mv good\">7.Nxc6</span>: you take the knight, which could not move.",
       "<span class=\"mv bad\">7…bxc6</span>? Black takes back…",
       "<span class=\"mv good\">8.Bxc6+</span>: check, and the bishop attacks the a8 rook."
      ],
      "fin": "You win the exchange (Stockfish: +2.9). After 7.Nxc6, Black's best is 7…Qd7, and you have still won at least a pawn (+1.2).",
      "titre": "5.Bb5 e6 6.Ne5: the pinned knight",
      "couleurs": [
       "g",
       "v",
       "r",
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "q04273db10"
      ],
      "marques": [
       [
        "f8"
       ],
       [
        "e5",
        "b5",
        "c6!",
        "b7"
       ],
       [
        "d6",
        "c6!"
       ],
       [
        "c6!",
        "b5"
       ],
       [
        "c6!"
       ],
       [
        "c6",
        "e8!",
        "a8!"
       ],
       [
        "c6",
        "a8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "g6",
       "e3",
       "d6",
       "Nf3"
      ],
      "coups": [
       "Bg4",
       "h3",
       "Bh5",
       "g4"
      ],
      "legendes": [
       "The bishop pins your f3 knight.",
       "<span class=\"mv good\">5.h3</span> puts the question to the bishop.",
       "<span class=\"mv bad\">5…Bh5</span>?? The bishop keeps the pin…",
       "<span class=\"mv good\">6.g4</span>! The bishop is attacked, and its retreat square g6 is occupied by a black pawn."
      ],
      "fin": "Stockfish: +2.5. To save the bishop, Black has to play 6…g5 and give up a pawn, with a damaged castled position. Black's good replies to 5.h3: 5…Bxf3, or retreating the bishop to d7 or c8.",
      "titre": "4…Bg4 5.h3 Bh5 ?? 6.g4",
      "couleurs": [
       "g",
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "q0d3cc30b4"
      ],
      "marques": [
       [
        "g4",
        "f3!",
        "d1"
       ],
       [
        "h3",
        "g4!"
       ],
       [
        "h5",
        "f3!",
        "d1"
       ],
       [
        "g4",
        "h5!",
        "g6"
       ],
       [
        "h5!",
        "g4",
        "g6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The ones set for you"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nc6",
       "e3",
       "Bf5",
       "Nf3"
      ],
      "coups": [
       "Nb4",
       "c3",
       "Nc2+",
       "Kd2",
       "Nxa1"
      ],
      "legendes": [
       "The knight eyes c2, with the help of the f5 bishop.",
       "<span class=\"mv bad\">5.c3</span>?? attacks the knight, but too late.",
       "Check to the king, and the a1 rook is attacked.",
       "The king has to move: Qxc2 Bxc2 would lose the queen.",
       "Black wins the rook."
      ],
      "fin": "Stockfish: −3.1. The defence: <a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Bd3</a>, which cuts the f5 bishop's diagonal.",
      "titre": "4…Nb4: c2 attacked twice",
      "couleurs": [
       "g",
       "r",
       "g",
       "g",
       "g"
      ],
      "quiz": [
       "q740e545ff"
      ],
      "marques": [
       [
        "b4",
        "c2!",
        "f5"
       ],
       [
        "c3",
        "b4!"
       ],
       [
        "c2",
        "e1!",
        "a1!"
       ],
       [
        "e1!",
        "c2",
        "f5",
        "d1"
       ],
       [
        "a1!"
       ],
       [
        "f1",
        "d3",
        "f5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "coups": [
       "Qb6",
       "Nbd2",
       "Qxb2"
      ],
      "legendes": [
       "The queen attacks b2.",
       "<span class=\"mv bad\">6.Nbd2</span>?? The natural move, but b2 is left hanging.",
       "Black takes the pawn. Stockfish: −0.9."
      ],
      "fin": "The defence: <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a> at once. When your queen is on b3, b2 is defended.",
      "titre": "5…Qb6: b2 left hanging",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q8efee52ab"
      ],
      "marques": [
       [
        "b6",
        "b2!"
       ],
       [
        "d2",
        "b2!",
        "b6"
       ],
       [
        "b2!"
       ],
       [
        "d1",
        "b3",
        "b2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "e5",
       "dxe5",
       "Nc6",
       "Nf3",
       "Qe7",
       "Bf4"
      ],
      "coups": [
       "Qb4+",
       "Bd2",
       "Qxb2",
       "Nc3"
      ],
      "legendes": [
       "Check: the queen also attacks b2.",
       "The bishop steps in between.",
       "The queen takes on b2 and threatens the a1 rook.",
       "<span class=\"mv good\">6.Nc3</span>: the knight leaves b1, your queen on d1 defends the a1 rook."
      ],
      "fin": "Stockfish: +2.0. Black has made three queen moves and you are far ahead. Certainly not <a class=\"lien-var\" href=\"#\" data-var=\"qd9d8d2010\">6.Bc3??</a>.",
      "titre": "The Englund Gambit: 1…e5",
      "quiz": [
       "q1d83288e9"
      ],
      "marques": [
       [
        "b4",
        "e1!",
        "b2!"
       ],
       [
        "d2"
       ],
       [
        "b2!",
        "a1!"
       ],
       [
        "c3",
        "d1",
        "a1"
       ],
       [
        "b2",
        "c3",
        "f3",
        "d2"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "The exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "The London's rule: Bf4, e3, Nf3, c3. Here are the positions in your repertoire where Black forces you to do something else."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "The rule would say",
       "Play instead",
       "Why"
      ],
      "lignes": [
       [
        "…Bd6 against your bishop",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>",
        "Keep your bishop"
       ],
       [
        "…Bxg3",
        "fxg3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>",
        "Open h-file, e3 stays supported"
       ],
       [
        "…g6 and …Bg7",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>",
        "Retreat to h2 against …Nh5"
       ],
       [
        "…Nc6 and …Bf5",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Bb5</a>",
        "Pin, +0.7"
       ],
       [
        "…Nb4",
        "c3 ??",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Bd3</a>",
        "c3 loses the rook"
       ],
       [
        "…cxd4 before c3",
        "Nf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a>",
        "Otherwise …dxe3"
       ],
       [
        "…Bb4+",
        "Nbd2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3d1bcbb33\">c3</a>",
        "Gains time"
       ],
       [
        "…Nh5 (without h3)",
        "h3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5ccef8522\">Bg5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q6ae32d977\">Be5</a>",
        "The bishop has to move at once"
       ],
       [
        "…b6 then …c5",
        "c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q146a7ca31\">Nc3</a>",
        "Nb5 against c7"
       ],
       [
        "…Qb6 before c3",
        "Qb3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Qc1</a>",
        "Qb3 is not possible"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The most important one: …Qb6"
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3"
      ],
      "coups": [
       "Qb6",
       "Qb3",
       "c4",
       "Qc2"
      ],
      "legendes": [
       "The queen attacks b2, which your c1 bishop no longer defends.",
       "<span class=\"mv good\">6.Qb3</span>: you defend b2 and offer a trade. If …Qxb3, axb3 and your a1 rook wins the a-file.",
       "Black declines: the pawn chases your queen.",
       "<span class=\"mv good\">7.Qc2</span>: the queen retreats. From c2, she still defends b2 and eyes e4 and h7."
      ],
      "fin": "Stockfish: +0.5. You carry on with Nbd2, Be2 or e4. Before c3, Qb3 is impossible: <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Qc1</a>.",
      "titre": "5…Qb6 6.Qb3",
      "quiz": [
       "q88a9da934",
       "q9fa452574"
      ],
      "marques": [
       [
        "b6",
        "b2!",
        "f4"
       ],
       [
        "b3",
        "b2",
        "b6",
        "a1"
       ],
       [
        "c4",
        "b3!"
       ],
       [
        "c2",
        "b2",
        "e4",
        "h7!"
       ],
       [
        "b1",
        "f1",
        "e3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "d4",
       "Nf6",
       "Bf4",
       "e6",
       "e3",
       "b6",
       "Nf3"
      ],
      "coups": [
       "c5",
       "Nc3",
       "Bb7",
       "Nb5"
      ],
      "legendes": [
       "Black attacks d4.",
       "<span class=\"mv good\">5.Nc3</span> rather than c3: the knight wants to go to b5.",
       "The bishop comes out to b7.",
       "<span class=\"mv good\">6.Nb5</span>: together with your f4 bishop, the knight eyes c7 and d6."
      ],
      "fin": "Stockfish: +0.8. Black has to defend c7 (…Na6), and your pressure lasts.",
      "titre": "3…b6 4.Nf3 c5 5.Nc3",
      "quiz": [
       "q6dc2f04c8"
      ],
      "marques": [
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "b5"
       ],
       [
        "b7"
       ],
       [
        "b5",
        "f4",
        "c7!",
        "d6"
       ],
       [
        "b5",
        "f4",
        "c7!",
        "b8"
       ]
      ]
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Middlegame exercises",
    "blocs": [
     {
      "t": "p",
      "html": "Eight positions taken from the London's plans. It is always White to play: find the move, the Quiz button asks you for it. Each position comes from a plausible game in your repertoire, and each right answer is Stockfish's best move, clearly ahead of all the others."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nc7+",
       "Kf8"
      ],
      "legendes": [
       "Nc7+! With your f4 bishop behind it, the knight lands on c7: check to the king and an attack on the a8 rook. If …Qxc7, Bxc7 wins the queen.",
       "The king has to move: it also loses the right to castle."
      ],
      "fin": "Next move, Nxa8: you win the exchange (a rook for a knight). Stockfish: +2.5, against +1.1 for the best other move. Black's mistake was 6…Be7: they had to defend c7 with …Na6.",
      "titre": "Exercise 1: the knight on b5",
      "fen": "rn1qk2r/pb1pbppp/1p2pn2/1Np5/3P1B2/4PN2/PPP2PPP/R2QKB1R w KQkq - 4 7",
      "quiz": [
       "qe9130484e"
      ],
      "marques": [
       [
        "c7",
        "f4",
        "a8!",
        "e8!"
       ],
       [
        "e8!",
        "f8",
        "c7"
       ],
       [
        "c7",
        "a8!",
        "e7",
        "b8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxd6",
       "Nxd4"
      ],
      "legendes": [
       "Bxd6! The rule says “Bg3 against …Bd6”, but look at who defends d6: nobody. The queen on b6 cannot see it, her own c6 knight is in the way.",
       "Black saves what they can: the knight takes a pawn on d4."
      ],
      "fin": "Take back on d4 (exd4 or cxd4). The black queen will take back on d6, but you stay a piece up for a pawn (Stockfish: +4.6, against +1.9 for the best other move). A rule has its exceptions: before playing Bg3, check whether the d6 bishop is defended.",
      "titre": "Exercise 2: the d6 bishop",
      "fen": "r1b1k2r/pp3ppp/1qnbpn2/3p4/2pP1B2/2P1PN2/PPQN1PPP/R3KB1R w KQkq - 4 9",
      "quiz": [
       "q011a642bf"
      ],
      "marques": [
       [
        "d6!",
        "f4",
        "b6",
        "c6"
       ],
       [
        "d4!",
        "d6"
       ],
       [
        "d4!",
        "e3",
        "c3",
        "d6!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxb7",
       "Nxe5"
      ],
      "legendes": [
       "Qxb7! Black's c8 bishop has gone to f5: nobody defends b7 any more. Your queen takes the pawn and attacks the c6 knight.",
       "Black trades off your e5 bishop."
      ],
      "fin": "Take back with 11.dxe5: you are a pawn up (Stockfish: +1.1, against +0.2 for the best other move). Before taking on b7, always check the b-file (see “Taking on b7 too quickly”): here, the black rook is still on a8 and poses no threat.",
      "titre": "Exercise 3: the queen on b3",
      "fen": "r2q1rk1/ppp2p2/2nbpn1p/3pBbp1/3P4/1QP1PN2/PP1NBPPP/R3K2R w KQ - 4 10",
      "quiz": [
       "q22fbdb7e9"
      ],
      "marques": [
       [
        "b7!",
        "f5",
        "c6!"
       ],
       [
        "e5!",
        "c6"
       ],
       [
        "e5!",
        "d4",
        "b7",
        "a8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Ng6",
       "Qd8",
       "Nxf8",
       "Bxf8"
      ],
      "legendes": [
       "Ng6! The knight leaves e5: your f4 bishop now attacks the queen on c7 (a “discovered” attack). And the g6 knight attacks the f8 rook. If …hxg6, Bxc7 wins the queen.",
       "The queen escapes.",
       "Nxf8: you take the rook.",
       "The bishop takes back."
      ],
      "fin": "You have won the exchange, a rook for a knight (Stockfish: +3.0, against +1.1 for the best other move). A black queen on c7, facing your f4 bishop with only your e5 knight in between: always think of moving the knight with a threat.",
      "titre": "Exercise 4: the e5 knight and the f4 bishop",
      "fen": "rnb2rk1/p1q1bppp/1p2pn2/3pN3/3P1B2/2PB4/PP1N1PPP/R2QK2R w KQ - 1 10",
      "quiz": [
       "qf46328b3e"
      ],
      "marques": [
       [
        "g6",
        "f4",
        "c7!",
        "f8!"
       ],
       [
        "c7!",
        "d8"
       ],
       [
        "f8!"
       ],
       [
        "f8!"
       ],
       [
        "f4",
        "e5",
        "c7"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e5",
       "Bc7"
      ],
      "legendes": [
       "e5! The pawn attacks both the d6 bishop and the f6 knight: a pawn fork.",
       "The bishop escapes to c7."
      ],
      "fin": "The f6 knight is taken next move: 12.exf6 wins a piece (Stockfish: about +4, against +1.5 for the best other move). After 10.e4, Black had to take on e4 at once.",
      "titre": "Exercise 5: after the e4 break",
      "fen": "r1bqr1k1/p4ppp/2nbpn2/1p1p4/2pPP3/2P2NB1/PPBN1PPP/R2QK2R w KQ - 1 11",
      "quiz": [
       "q5d5ad9e2a"
      ],
      "marques": [
       [
        "e5",
        "d6!",
        "f6!"
       ],
       [
        "c7"
       ],
       [
        "f6!",
        "e5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Nxh7",
       "Qh5",
       "f6"
      ],
      "legendes": [
       "Bxh7+! The king cannot take: on h7, it would be in check from your h1 rook.",
       "The knight takes.",
       "Qh5! The queen attacks the h7 knight, with your h1 rook behind her: it is attacked twice and defended only once (by the king). Threat: Qxh7+.",
       "Black frees f7 for the king."
      ],
      "fin": "10.Qxh7+: you have won your piece back with an extra pawn, and the black king has no shelter left (Stockfish: +2.8, against +1.2 for the best other move at the start). Castling in front of an h1 rook and a d3 bishop is dangerous.",
      "titre": "Exercise 6: the h-file",
      "fen": "rnbq1rk1/pp3ppp/4pn2/2pp4/3P4/3BP1P1/PPPN1PP1/R2QK1NR w KQ - 0 8",
      "quiz": [
       "q06143bd3a"
      ],
      "marques": [
       [
        "h7!",
        "h1",
        "g8!"
       ],
       [
        "h7!"
       ],
       [
        "h5",
        "h7!",
        "h1",
        "g8"
       ],
       [
        "f6",
        "f7",
        "g8"
       ],
       [
        "h5",
        "h7!",
        "h1",
        "g8"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kxh7",
       "Qxh5+",
       "Kg8"
      ],
      "legendes": [
       "Bxh7+! Your bishop was attacked by the c4 pawn: instead of retreating, it sacrifices itself on h7 with check.",
       "The king takes.",
       "Qxh5+! The d1-h5 route has been open since your knight went to e5: your queen takes back the h5 knight with check.",
       "The king retreats."
      ],
      "fin": "You have got your piece back with an extra pawn, and your queen, your e5 knight and your g3 bishop are all turned towards the black king (Stockfish: +3.6; taking on h5 at once only gives +1.0).",
      "titre": "Exercise 7: the d3 bishop is attacked",
      "fen": "r1bq1rk1/pp3ppp/2nbp3/3pN2n/2pP4/2PBP1B1/PP1N1PPP/R2QK2R w KQ - 0 10",
      "quiz": [
       "q2cc8ebce8"
      ],
      "marques": [
       [
        "d3!",
        "c4",
        "h7!"
       ],
       [
        "h7!"
       ],
       [
        "d1",
        "h5!",
        "e5",
        "h7!"
       ],
       [
        "g8"
       ],
       [
        "h5",
        "e5",
        "g3",
        "g8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxh7+",
       "Kxh7",
       "Nxf7"
      ],
      "legendes": [
       "Bxh7+! The king is lured to h7: it no longer defends f7, which your e5 knight can take. The black rook, for its part, has left f8.",
       "The king takes.",
       "Nxf7! The knight takes a pawn and attacks the queen on d8 and the d6 bishop at the same time: a fork."
      ],
      "fin": "The black queen moves away, then Nxd6: you have won your piece back with two extra pawns, and the black king is bare (Stockfish: +3.0). The best defence was 11…Kf8, but you then keep an extra pawn (+1.5, against +0.1 for the best move other than Bxh7+).",
      "titre": "Exercise 8: queen on f3, knight on e5",
      "fen": "r2qr1k1/pb3ppp/1pnbpn2/2ppN3/3P4/2PBPQB1/PP1N1PPP/R3K2R w KQ - 4 11",
      "quiz": [
       "q993eb619a"
      ],
      "marques": [
       [
        "h7!",
        "e5",
        "f7!",
        "e8"
       ],
       [
        "h7!"
       ],
       [
        "f7!",
        "d8!",
        "d6!"
       ],
       [
        "f7",
        "d8!",
        "d6!",
        "h7"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Model games",
    "blocs": [
     {
      "t": "p",
      "html": "Two games built for the lesson: the opponent's moves are typical mistakes between 1000 and 1600, and each of your moves has been checked with Stockfish. They are not games actually played: they show, from the first move to the last, how your repertoire leads to the middlegame plans."
     },
     {
      "t": "h",
      "html": "Game 1: the wall and the attack on the castled king"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "Bf4",
       "Nf6",
       "e3",
       "e6",
       "Nf3",
       "c5",
       "c3",
       "Nc6",
       "Nbd2",
       "Bd6",
       "Bg3",
       "O-O",
       "Bd3",
       "b6",
       "Ne5",
       "Bb7",
       "f4",
       "Rc8",
       "Bh4",
       "c4",
       "Bc2",
       "Be7",
       "Bxf6",
       "Bxf6",
       "h4",
       "b5",
       "Qh5",
       "h6",
       "Ng4",
       "Be7",
       "Rh3",
       "f5",
       "Nxh6+",
       "gxh6",
       "Qg6+",
       "Kh8",
       "Qxh6+",
       "Kg8",
       "Rg3+",
       "Bg5",
       "Qg6+",
       "Kh8",
       "hxg5",
       "Rf7",
       "Rh3+",
       "Rh7",
       "Qxh7#"
      ],
      "legendes": [
       "1.d4: your first move.",
       "Black takes the centre.",
       "The bishop comes out before e3: this is the London.",
       "Black develops.",
       "e3 supports d4 and opens the diagonal of the f1 bishop.",
       "Black's c8 bishop stays shut in behind e6.",
       "The knight comes out and controls e5.",
       "Black attacks d4.",
       "The c3-d4-e3 pyramid.",
       "A second attack on d4.",
       "The knight goes to d2: the c3 square is occupied by your pawn.",
       "The bishop attacks your f4 bishop.",
       "As always: Bg3.",
       "Black castles.",
       "The bishop aims at h7.",
       "Black prepares …Bb7.",
       "The knight settles on its outpost.",
       "The bishop comes out to b7.",
       "<span class=\"mv good\">10.f4</span>: the d4-e3-f4 wall. Your e5 knight is firmly settled, and the attack on the castled king can begin.",
       "The rook comes to the c-file.",
       "The bishop comes out from behind the f4 pawn and pins the f6 knight to the queen on d8.",
       "<span class=\"mv bad\">11…c4</span>?! Black closes the queenside and is going to play there, far from their king (Stockfish: +1.1).",
       "The bishop retreats to c2: it still aims at h7.",
       "Black breaks the pin.",
       "<span class=\"mv good\">13.Bxf6</span>! You trade your bishop for the f6 knight, the best defender of Black's castled king.",
       "Black takes back.",
       "The h-pawn advances. Your king has stayed in the centre: this pawn does not protect it, so it can attack. And your h1 rook will be able to come out via h3.",
       "Black carries on with their plan on the queenside.",
       "The queen arrives on h5. Threat: Qxh7 mate, with the help of the c2 bishop.",
       "<span class=\"mv bad\">15…h6</span>? The pawn blocks the threat, but it becomes a target (Stockfish: +2.8). …g6 was needed.",
       "<span class=\"mv good\">16.Ng4</span>! The knight attacks the f6 bishop and the h6 square.",
       "<span class=\"mv bad\">16…Be7</span>?? The bishop escapes, but it abandons the defence of the king (Stockfish: +6.0).",
       "<span class=\"mv good\">17.Rh3</span>! The h4 pawn has cleared the way: the rook comes out via h3 and is going to join the attack.",
       "Black attacks your g4 knight.",
       "<span class=\"mv good\">18.Nxh6+</span>! The knight sacrifices itself to open up the king. Stockfish announces a forced mate.",
       "Black takes.",
       "Check: the queen comes in on g6.",
       "The king goes into the corner.",
       "The queen takes on h6 with check.",
       "Back to g8.",
       "The rook arrives on g3, with check.",
       "The bishop steps in between.",
       "Check again.",
       "The only square.",
       "The h-pawn takes the bishop: the h-file opens for your rook.",
       "The black rook comes to defend the seventh rank.",
       "The rook comes back to the h-file: check.",
       "The rook steps in between.",
       "Checkmate: the queen takes the rook, protected by your h3 rook."
      ],
      "fin": "Mate on move 25. Remember the route: Ne5 and f4 (the wall), Bh4 then Bxf6 to eliminate the defender, the h4 pawn opening the way for the rook, the queen on h5 and the sacrifice on h6. Meanwhile, Black was playing on the queenside.",
      "titre": "Model game 1: the wall and the attack",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "f4",
        "e2"
       ],
       [],
       [
        "e3",
        "d4",
        "f1"
       ],
       [
        "e6",
        "c8"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "d2",
        "c3"
       ],
       [
        "d6",
        "f4!"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "c8",
        "b7"
       ],
       [
        "e5",
        "d4"
       ],
       [
        "b7"
       ],
       [
        "d4",
        "e3",
        "f4",
        "e5"
       ],
       [
        "c8"
       ],
       [
        "h4",
        "f6!",
        "d8",
        "f4"
       ],
       [
        "c4",
        "d3!"
       ],
       [
        "c2",
        "h7!"
       ],
       [
        "e7",
        "f6",
        "h4"
       ],
       [
        "f6!",
        "h4"
       ],
       [
        "f6!"
       ],
       [
        "h4",
        "e1",
        "h1",
        "h3"
       ],
       [
        "b5"
       ],
       [
        "h5",
        "h7!",
        "c2"
       ],
       [
        "h6!",
        "h5",
        "g7"
       ],
       [
        "g4",
        "f6!",
        "h6!"
       ],
       [
        "e7",
        "g8!"
       ],
       [
        "h3",
        "h4"
       ],
       [
        "f5",
        "g4!"
       ],
       [
        "h6!",
        "g8!"
       ],
       [
        "h6!"
       ],
       [
        "g6",
        "g8!"
       ],
       [
        "h8"
       ],
       [
        "h6!",
        "h8!"
       ],
       [
        "g8"
       ],
       [
        "g3",
        "g8!"
       ],
       [
        "g5",
        "g3"
       ],
       [
        "g6",
        "g8!"
       ],
       [
        "h8"
       ],
       [
        "g5!",
        "g3"
       ],
       [
        "f7"
       ],
       [
        "h3",
        "h8!"
       ],
       [
        "h7"
       ],
       [
        "h7!",
        "h3",
        "h8!"
       ],
       [
        "h7",
        "h3",
        "h8!",
        "f4"
       ]
      ]
     },
     {
      "t": "h",
      "html": "Game 2: the h-file after …Bxg3"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "d4",
       "d5",
       "Bf4",
       "e6",
       "e3",
       "Bd6",
       "Bg3",
       "Bxg3",
       "hxg3",
       "Nf6",
       "Nd2",
       "c5",
       "c3",
       "Nc6",
       "Ngf3",
       "O-O",
       "Bd3",
       "h6",
       "Ne5",
       "Nd7",
       "Qh5",
       "f5",
       "Ndf3",
       "Ndxe5",
       "dxe5",
       "Qe7",
       "Qg6",
       "Re8",
       "Rxh6",
       "Rf8",
       "O-O-O",
       "Qe8",
       "Qh7+",
       "Kf7",
       "Bxf5",
       "Ke7",
       "Bg6",
       "Kd8",
       "Bxe8",
       "gxh6",
       "Bh5",
       "Bd7",
       "e4",
       "Kc8",
       "exd5",
       "exd5",
       "Rxd5",
       "Rd8",
       "Qxh6",
       "a6",
       "e6",
       "Bxe6",
       "Qxe6+"
      ],
      "legendes": [
       "1.d4: your first move.",
       "Black takes the centre.",
       "The bishop comes out before e3.",
       "Black opens the f8 bishop.",
       "e3 supports d4.",
       "The bishop attacks your f4 bishop.",
       "Bg3: you keep your bishop.",
       "Black trades it anyway.",
       "<span class=\"mv good\">5.hxg3</span>: take back with the h-pawn. The h-file opens for your h1 rook.",
       "Black develops.",
       "The knight comes out to d2; the other will go to f3.",
       "Black attacks d4.",
       "The pyramid.",
       "The knight joins the pressure on d4.",
       "The second knight comes out.",
       "Black castles… facing your h1 rook.",
       "The bishop aims at h7: with the h1 rook, h7 is already attacked twice.",
       "Black sees the danger and pushes the h-pawn. But the h6 pawn will be the new target of your rook.",
       "The knight settles on its outpost.",
       "Black wants to trade off this knight.",
       "The queen arrives on h5: with the h1 rook, she attacks h6; with the e5 knight, she aims at f7.",
       "…f5 cuts your d3 bishop's diagonal towards h7. But the e6 and g6 squares become weak.",
       "The other knight comes to support e5.",
       "Black trades.",
       "Take back with the pawn: it denies the f6 square to Black's pieces.",
       "<span class=\"mv bad\">13…Qe7</span>? The queen does not watch the g6 square. …Qc7 or …Qe8 was better (Stockfish: +1.7 after …Qe7, against +0.2 to +0.6).",
       "<span class=\"mv good\">14.Qg6</span>! The queen settles on g6: she pins the g7 pawn to the king (it can no longer move) and eyes h6 and e6.",
       "<span class=\"mv bad\">14…Re8</span>?? The rook frees f8 for the king… and forgets h6 (Stockfish: +7.0).",
       "<span class=\"mv good\">15.Rxh6</span>! The rook takes on h6, and it cannot be taken: the g7 pawn is pinned by your queen.",
       "The rook goes back to f8 to defend the king.",
       "Castling queenside: your king gets to safety and your second rook arrives on the d-file.",
       "Black offers a queen trade.",
       "No trade: check.",
       "The only square.",
       "The bishop takes the f5 pawn.",
       "The king flees towards the centre.",
       "The bishop attacks the queen on e8.",
       "The king steps aside again.",
       "You win the queen.",
       "Black finally takes the rook: the g7 pawn is no longer pinned.",
       "The bishop retreats. You have a queen against a rook: the game is won.",
       "Black finally develops the bishop.",
       "The e4 break opens the centre for your rook.",
       "The king looks for shelter.",
       "You take.",
       "Black takes back.",
       "The rook takes the d5 pawn.",
       "The rook comes to the d-file.",
       "The queen takes the h6 pawn.",
       "Black has no good move left.",
       "The pawn advances and attacks the d7 bishop.",
       "The bishop takes the pawn.",
       "The queen takes back with check."
      ],
      "fin": "Black resigns: you have a queen and an extra piece against a rook (Stockfish: +9). It all started with 5.hxg3: the open h-file, the queen on g6 pinning the g7 pawn, and the rook taking on h6.",
      "titre": "Model game 2: the h-file",
      "quiz": [],
      "marques": [
       [
        "d4"
       ],
       [
        "d5"
       ],
       [
        "f4",
        "e2"
       ],
       [
        "f8"
       ],
       [
        "e3",
        "d4"
       ],
       [
        "d6",
        "f4!"
       ],
       [
        "g3"
       ],
       [
        "g3!"
       ],
       [
        "g3!",
        "h2",
        "h1"
       ],
       [
        "f6"
       ],
       [
        "d2",
        "g1"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4",
        "e3"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3"
       ],
       [
        "g8",
        "h1"
       ],
       [
        "d3",
        "h1",
        "h7!"
       ],
       [
        "h6!",
        "h1"
       ],
       [
        "e5",
        "d4"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "h5",
        "h1",
        "h6!",
        "f7!"
       ],
       [
        "f5",
        "d3",
        "e6",
        "g6"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "e5!",
        "d7"
       ],
       [
        "e5",
        "f6"
       ],
       [
        "e7",
        "g6!",
        "h5"
       ],
       [
        "g6",
        "g7!",
        "h6!",
        "e6!"
       ],
       [
        "e8",
        "f8",
        "h6!"
       ],
       [
        "h6!",
        "g7!",
        "g6"
       ],
       [
        "f8",
        "g8"
       ],
       [
        "c1",
        "d1"
       ],
       [
        "e8",
        "g6!"
       ],
       [
        "h7",
        "g8!"
       ],
       [
        "f7"
       ],
       [
        "f5!"
       ],
       [
        "e7"
       ],
       [
        "g6",
        "e8!"
       ],
       [
        "d8"
       ],
       [
        "e8!"
       ],
       [
        "h6!",
        "g7"
       ],
       [
        "h5",
        "h7"
       ],
       [
        "d7"
       ],
       [
        "e4",
        "d5!",
        "d1"
       ],
       [
        "c8"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d5!"
       ],
       [
        "d8"
       ],
       [
        "h6!"
       ],
       [
        "a6"
       ],
       [
        "e6",
        "d7!"
       ],
       [
        "e6!"
       ],
       [
        "e6!",
        "c8!"
       ],
       [
        "e6",
        "c8!",
        "g3"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "When they play anything",
    "blocs": [
     {
      "t": "p",
      "html": "Between 1000 and 1600, many opponents leave theory very early. Your repertoire covers the three most played replies at every move; for the rest, the London has a huge advantage: your set-up almost always works. Click a plan to see it on the board."
     },
     {
      "t": "h",
      "html": "Four principles"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Bf4, e3, Nf3, c3 works against almost everything.</strong> The only real exceptions: 1…c5 (advance d5), 1…e5 (take the pawn) and 1…d6 (2.Nf3 first).",
       "<strong>Look at b2 and c2 before every move.</strong> Once your bishop has gone, b2 has no defender left. A black knight on b4 eyes c2.",
       "<strong>Keep your f4 bishop.</strong> Bg3 against …Bd6, h3 against the fianchetto.",
       "<strong>Develop before attacking.</strong> Nbd2, Bd3, O-O, then Ne5."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "The other first moves"
     },
     {
      "t": "table",
      "entetes": [
       "1.d4 …",
       "Your plan",
       "Stockfish at the end of the line"
      ],
      "lignes": [
       [
        "1…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfb2f9d58b\">2.d5</a>",
        "+1.3"
       ],
       [
        "1…e5 (Englund Gambit)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q950711fb1\">2.dxe5</a>",
        "+1.4"
       ],
       [
        "1…f5 (Dutch)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5954cf962\">2.Bf4</a>",
        "+0.5"
       ],
       [
        "1…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf940f8435\">2.Nf3</a>",
        "+0.3"
       ],
       [
        "1…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qed17f690b\">2.Bf4</a> (2.e4 is stronger: +0.7)",
        "+0.1"
       ],
       [
        "1…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q87abc3fb7\">2.Bf4</a>",
        "+0.5"
       ],
       [
        "1…Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q125d77b1f\">2.Bf4</a>",
        "+0.4"
       ],
       [
        "1…b6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q680fd6f28\">2.Bf4</a> (2.e4 is stronger: +0.9)",
        "+0.2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The other second moves"
     },
     {
      "t": "table",
      "entetes": [
       "After",
       "Black plays",
       "Your plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "1.d4 d5 2.Bf4",
        "2…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q672730985\">3.e3</a>",
        "0.0"
       ],
       [
        "",
        "2…Bf5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q20e455291\">3.e3</a>",
        "+0.1"
       ],
       [
        "",
        "2…c6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q15e091780\">3.e3</a>",
        "+0.3"
       ],
       [
        "",
        "2…g6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa745f549f\">3.e3</a>",
        "+0.3"
       ],
       [
        "",
        "2…e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q6a66a1d17\">3.Bxe5</a>",
        "+1.0"
       ],
       [
        "1.d4 Nf6 2.Bf4",
        "2…c5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q12bcb6075\">3.e3</a>",
        "+0.1"
       ],
       [
        "",
        "2…d6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qfd8b7fc98\">3.e3</a>",
        "+0.1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "After the repertoire"
     },
     {
      "t": "p",
      "html": "Your repertoire stops at your 5th move. After that, finish your set-up: Nbd2, Bd3 (or Be2), O-O. Then look for Ne5 and, depending on the position, Qf3 and f4 to attack the king, or e4 to open the centre. If you do not know what to play, ask yourself: which is my least active piece? Improve it."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "To remember",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1.d4 and 2.Bf4 against <a class=\"lien-var\" href=\"#\" data-var=\"q2606a729d\">1…d5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6c4c6653d\">1…Nf6</a> and <a class=\"lien-var\" href=\"#\" data-var=\"q65502247c\">1…e6</a>. Exceptions: <a class=\"lien-var\" href=\"#\" data-var=\"qfb2f9d58b\">1…c5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q950711fb1\">1…e5</a>, and against <a class=\"lien-var\" href=\"#\" data-var=\"qf940f8435\">1…d6</a> 2.Nf3 first.",
       "Then e3, Nf3, c3: the pyramid (<a class=\"lien-var\" href=\"#\" data-var=\"q11a0c31eb\">5.c3</a>).",
       "Against …Bd6: <a class=\"lien-var\" href=\"#\" data-var=\"qceec2bda3\">Bg3</a>. If …Bxg3: <a class=\"lien-var\" href=\"#\" data-var=\"q963e69235\">hxg3</a>.",
       "Against the fianchetto: <a class=\"lien-var\" href=\"#\" data-var=\"q8729a82ac\">h3</a>.",
       "Against …Nc6 and …Bf5: <a class=\"lien-var\" href=\"#\" data-var=\"q2c6b4f0a5\">Bb5</a>, then Ne5.",
       "Against …Nb4: <a class=\"lien-var\" href=\"#\" data-var=\"q740e545ff\">Bd3</a>, never c3 or Nbd2.",
       "Against …Qb6: <a class=\"lien-var\" href=\"#\" data-var=\"q8efee52ab\">6.Qb3</a> (or <a class=\"lien-var\" href=\"#\" data-var=\"q9fa452574\">4.Qc1</a> before c3).",
       "Against …cxd4: <a class=\"lien-var\" href=\"#\" data-var=\"qd882e8cb0\">exd4</a> at once.",
       "The plan after move 5: Nbd2, Bd3, O-O, Ne5."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "q2606a729d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "Bf4"
    ],
    "legendes": [
     "Black takes the centre.",
     "The bishop comes out at once, before e3: this is the London."
    ],
    "fin": "",
    "titre": "1…d5 2.Bf4",
    "marques": [
     [
      "d5"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "q6c4c6653d": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Same move: the bishop comes out before e3."
    ],
    "fin": "",
    "titre": "1…Nf6 2.Bf4",
    "marques": [
     [
      "f6"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "q65502247c": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "Bf4"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "2.Bf4 again. After …d5 or …Nf6, you are back in the other lines."
    ],
    "fin": "",
    "titre": "1…e6 2.Bf4",
    "marques": [
     [
      "f8"
     ],
     [
      "f4"
     ],
     []
    ]
   },
   "qde268baff": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nf6",
     "e3"
    ],
    "legendes": [
     "Black develops.",
     "e3 supports d4 and opens the diagonal of your f1 bishop. Your f4 bishop is already out."
    ],
    "fin": "",
    "titre": "2…Nf6 3.e3",
    "marques": [
     [],
     [
      "e3",
      "d4",
      "f1",
      "f4"
     ],
     []
    ]
   },
   "qbbf48a2e9": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "The knight comes out and controls e5."
    ],
    "fin": "",
    "titre": "3…e6 4.Nf3",
    "marques": [
     [
      "f8"
     ],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q11a0c31eb": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "c3"
    ],
    "legendes": [
     "Black attacks d4.",
     "c3: the c3-d4-e3 pyramid. If Black takes on d4, you take back with a pawn."
    ],
    "fin": "",
    "titre": "4…c5 5.c3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qceec2bda3": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "The d6 bishop attacks your f4 bishop.",
     "Bg3: you keep your bishop. If it gets taken, you will take back with the h-pawn."
    ],
    "fin": "",
    "titre": "4…Bd6 5.Bg3",
    "marques": [
     [
      "d6",
      "f4!"
     ],
     [
      "g3",
      "h2"
     ],
     []
    ]
   },
   "q963e69235": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Black trades bishops.",
     "Take back with the h-pawn: the h-file opens for your h1 rook."
    ],
    "fin": "",
    "titre": "4…Bxg3 5.hxg3",
    "marques": [
     [
      "g3!"
     ],
     [
      "g3",
      "h1"
     ],
     []
    ]
   },
   "q8729a82ac": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "coups": [
     "O-O",
     "h3"
    ],
    "legendes": [
     "Black castles behind the g7 bishop.",
     "h3: if the knight comes to h5 to chase your bishop, it will have a retreat on h2."
    ],
    "fin": "",
    "titre": "4…O-O 5.h3",
    "marques": [
     [
      "g7",
      "g8"
     ],
     [
      "f6",
      "h5",
      "f4",
      "h2"
     ],
     []
    ]
   },
   "q2c6b4f0a5": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "The c8 bishop comes out in turn.",
     "Bb5 pins the c6 knight to the king: it can no longer move."
    ],
    "fin": "",
    "titre": "4…Bf5 5.Bb5",
    "marques": [
     [
      "f5"
     ],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q740e545ff": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "The knight threatens …Nxc2+, check to the king and an attack on the a1 rook.",
     "Bd3 cuts the f5 bishop's diagonal: c2 is now attacked only once, and your queen defends it."
    ],
    "fin": "",
    "titre": "4…Nb4 5.Bd3",
    "marques": [
     [
      "b4",
      "c2!",
      "e1!",
      "a1!"
     ],
     [
      "d3",
      "f5",
      "c2!",
      "d1"
     ],
     []
    ]
   },
   "qd882e8cb0": {
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Black takes on d4.",
     "Take back at once with the e-pawn: your pawn stays in the centre."
    ],
    "fin": "",
    "titre": "3…cxd4 4.exd4",
    "marques": [
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q3d1bcbb33": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "Check.",
     "c3 parries the check and attacks the bishop: it has to retreat."
    ],
    "fin": "",
    "titre": "4…Bb4+ 5.c3",
    "marques": [
     [
      "b4",
      "e1!"
     ],
     [
      "c3",
      "b4!"
     ],
     []
    ]
   },
   "q5ccef8522": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "Without h3, your bishop has no square on h2: it gets to safety on g5."
    ],
    "fin": "",
    "titre": "4…Nh5 5.Bg5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "g5",
      "h2"
     ],
     []
    ]
   },
   "q6ae32d977": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "Be5! The bishop gets to safety and attacks the h8 rook: the black bishop is not on g7 yet."
    ],
    "fin": "",
    "titre": "4…Nh5 5.Be5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "e5",
      "h8!",
      "g7",
      "f8"
     ],
     []
    ]
   },
   "q146a7ca31": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3"
    ],
    "legendes": [
     "Black attacks d4.",
     "Nc3, then Nb5: together with your f4 bishop, the knight will eye c7."
    ],
    "fin": "",
    "titre": "4…c5 5.Nc3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "b5",
      "f4",
      "c7!"
     ],
     []
    ]
   },
   "q0c016b191": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3"
    ],
    "legendes": [
     "The bishop pins your f3 knight to your queen.",
     "h3 puts the question to the bishop. If it retreats to h5, g4 puts it in great danger: its g6 retreat is blocked by a black pawn."
    ],
    "fin": "",
    "titre": "4…Bg4 5.h3",
    "marques": [
     [
      "g4",
      "f3!",
      "d1"
     ],
     [
      "h3",
      "g4!",
      "h5",
      "g6"
     ],
     []
    ]
   },
   "q1e3436fde": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "c3"
    ],
    "legendes": [
     "The bishop pins your f3 knight.",
     "No panic: c3, the pyramid. The pin does not bother you."
    ],
    "fin": "",
    "titre": "4…Bg4 5.c3",
    "marques": [
     [
      "g4",
      "f3!",
      "d1"
     ],
     [
      "c3",
      "d4",
      "e3",
      "f3"
     ],
     []
    ]
   },
   "q8efee52ab": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "Qxb3",
     "axb3"
    ],
    "legendes": [
     "The queen attacks b2: your c1 bishop has gone to f4, and nothing defends this pawn any more.",
     "Qb3 defends b2 and offers a queen trade.",
     "Black trades.",
     "Take back with the a-pawn: your a1 rook wins the a-file."
    ],
    "fin": "",
    "titre": "5…Qb6 6.Qb3",
    "marques": [
     [
      "b6",
      "b2!",
      "f4"
     ],
     [
      "b3",
      "b2",
      "b6"
     ],
     [
      "b3!"
     ],
     [
      "b3",
      "a1"
     ],
     []
    ]
   },
   "q63e06c8f1": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Qb6",
     "Qb3"
    ],
    "coups": [
     "c4",
     "Qc2"
    ],
    "legendes": [
     "The pawn chases your queen.",
     "The queen retreats to c2: from there, she still defends b2 and eyes e4 and h7."
    ],
    "fin": "",
    "titre": "6…c4 7.Qc2",
    "marques": [
     [
      "c4",
      "b3!"
     ],
     [
      "c2",
      "b2",
      "e4",
      "h7!"
     ],
     []
    ]
   },
   "q4132ba7b4": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Nbd2",
     "Qxb2"
    ],
    "legendes": [
     "The queen attacks b2.",
     "The natural move… but b2 is left hanging.",
     "Black takes the pawn: the queen on b2 attacks your a1 rook and your c3 pawn."
    ],
    "fin": "",
    "titre": "5…Qb6 6.Nbd2 ?? Qxb2",
    "couleurs": [
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "b6",
      "b2!"
     ],
     [
      "d2",
      "b2!",
      "b6"
     ],
     [
      "b2",
      "a1!",
      "c3!"
     ],
     []
    ]
   },
   "q9fa452574": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c6",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Qc1"
    ],
    "legendes": [
     "The queen attacks b2 before you have played c3: Qb3 is not possible yet.",
     "Qc1 defends b2. Your queen will come back later."
    ],
    "fin": "",
    "titre": "3…Qb6 4.Qc1",
    "marques": [
     [
      "b6",
      "b2!",
      "d1",
      "c2"
     ],
     [
      "c1",
      "b2"
     ],
     []
    ]
   },
   "qc7a55708c": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "Ne5: the pinned c6 knight is attacked twice (b5 bishop, e5 knight) and defended once (b7 pawn)."
    ],
    "fin": "",
    "titre": "5…e6 6.Ne5",
    "marques": [
     [
      "f8"
     ],
     [
      "e5",
      "b5",
      "c6!",
      "b7"
     ],
     []
    ]
   },
   "q4d75699fc": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "c3",
     "Nc2+",
     "Kd2",
     "Nxa1"
    ],
    "legendes": [
     "The knight eyes c2.",
     "c3 attacks the knight… too late.",
     "Check to the king, and the a1 rook is attacked.",
     "The king has to move: Qxc2 Bxc2 would lose the queen.",
     "Black wins the rook."
    ],
    "fin": "",
    "titre": "4…Nb4 5.c3 ?? Nc2+",
    "couleurs": [
     "g",
     "r",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "b4",
      "c2!"
     ],
     [
      "c3",
      "b4!"
     ],
     [
      "c2",
      "e1!",
      "a1!"
     ],
     [
      "e1!",
      "c2",
      "f5",
      "d1"
     ],
     [
      "a1!"
     ],
     []
    ]
   },
   "qf810435f2": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "coups": [
     "Nh5",
     "Bh2"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "The bishop retreats to h2: it stays on the h2-b8 diagonal, and the h5 knight has gained nothing."
    ],
    "fin": "",
    "titre": "5…Nh5 6.Bh2",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "h2",
      "h5"
     ],
     []
    ]
   },
   "q2c341557e": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "c3"
    ],
    "coups": [
     "Nh5",
     "Bg5",
     "h6",
     "Bh4",
     "g5",
     "Bg3",
     "Nxg3",
     "hxg3"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "No square on h2: the bishop goes to g5.",
     "The pawn chases it.",
     "The bishop retreats.",
     "And again.",
     "The bishop retreats to g3…",
     "…and the knight trades it off.",
     "Nothing serious (Stockfish: +0.2), but your London bishop has gone."
    ],
    "fin": "",
    "titre": "Without h3: 5.c3 Nh5",
    "marques": [
     [
      "h5",
      "f4!"
     ],
     [
      "g5",
      "h2"
     ],
     [
      "h6",
      "g5!"
     ],
     [
      "h4"
     ],
     [
      "g5",
      "h4!"
     ],
     [
      "g3!",
      "h5"
     ],
     [
      "g3!"
     ],
     [
      "g3"
     ],
     []
    ]
   },
   "qe581c51d5": {
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "Nf3",
     "dxe3",
     "Bxe3"
    ],
    "legendes": [
     "Black takes on d4.",
     "You develop instead of taking back…",
     "…and the d4 pawn takes on e3.",
     "You take back, but you are a pawn down (Stockfish: −1.1)."
    ],
    "fin": "",
    "titre": "3…cxd4 4.Nf3 ?",
    "couleurs": [
     "g",
     "r",
     "g",
     "g"
    ],
    "marques": [
     [
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     [
      "e3!"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "qd2a5dbaee": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "fxg3"
    ],
    "legendes": [
     "Black trades bishops.",
     "With the f-pawn, your e3 pawn loses its support and your king is less sheltered (Stockfish: −0.5)."
    ],
    "fin": "",
    "titre": "4…Bxg3 5.fxg3 ?",
    "couleurs": [
     "g",
     "r"
    ],
    "marques": [
     [
      "g3!"
     ],
     [
      "g3",
      "e3!",
      "e1"
     ],
     []
    ]
   },
   "q918670779": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3"
    ],
    "coups": [
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Black attacks d4.",
     "Develop: the knight defends d4 once more.",
     "Black trades.",
     "Take back with the e-pawn: your pawn stays in the centre."
    ],
    "fin": "",
    "titre": "2…e6 3.e3 c5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "f3",
      "d4!"
     ],
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q2768c1506": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "coups": [
     "Bh5",
     "g4"
    ],
    "legendes": [
     "The bishop retreats to h5.",
     "g4 attacks the bishop, and its g6 retreat is blocked by a black pawn: to save it, Black has to give up a pawn (…g5)."
    ],
    "fin": "",
    "titre": "5…Bh5 ?? 6.g4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "h5"
     ],
     [
      "g4",
      "h5!",
      "g6"
     ],
     []
    ]
   },
   "q0c120564b": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5",
     "e6",
     "Ne5",
     "Bd6",
     "Nxc6"
    ],
    "coups": [
     "bxc6",
     "Bxc6+"
    ],
    "legendes": [
     "Black takes back the knight.",
     "Check, and the bishop also attacks the a8 rook."
    ],
    "fin": "",
    "titre": "7…bxc6 ? 8.Bxc6+",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "c6!"
     ],
     [
      "c6",
      "e8!",
      "a8!"
     ],
     []
    ]
   },
   "qd2a8176b6": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "coups": [
     "Bb7",
     "Nb5"
    ],
    "legendes": [
     "The bishop comes out to b7.",
     "The knight arrives on b5: together with your f4 bishop, it eyes c7 and d6."
    ],
    "fin": "",
    "titre": "5…Bb7 6.Nb5",
    "marques": [
     [
      "b7"
     ],
     [
      "b5",
      "f4",
      "c7!",
      "d6"
     ],
     []
    ]
   },
   "q280c70623": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Nc3"
    ],
    "legendes": [
     "The knight leaves b1: your queen on d1 now defends the a1 rook, and you are ahead in development."
    ],
    "fin": "",
    "titre": "Englund: 6.Nc3",
    "marques": [
     [
      "c3",
      "d1",
      "a1"
     ],
     []
    ]
   },
   "qd9d8d2010": {
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4",
     "Qb4+",
     "Bd2",
     "Qxb2"
    ],
    "coups": [
     "Bc3",
     "Bb4"
    ],
    "legendes": [
     "The bishop chases the queen and defends the a1 rook… or so it seems.",
     "The black bishop pins your c3 bishop to your king: the a1 rook falls (Stockfish: −3.7)."
    ],
    "fin": "",
    "titre": "Englund: 6.Bc3?? Bb4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "c3",
      "b2!",
      "a1"
     ],
     [
      "b4",
      "c3!",
      "e1",
      "a1!"
     ],
     []
    ]
   },
   "qfb2f9d58b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5",
     "e5",
     "e4"
    ],
    "legendes": [
     "Black attacks d4 with the c-pawn.",
     "Advance: your pawn cuts Black's camp in two.",
     "Black blocks the centre.",
     "Take space: e4. Stockfish: +1.3."
    ],
    "fin": "",
    "titre": "1…c5 2.d5",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "e4",
      "d5"
     ],
     []
    ]
   },
   "q950711fb1": {
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "legendes": [
     "The Englund Gambit: a pawn offered.",
     "Take it.",
     "The knight attacks e5.",
     "Defend e5 while developing.",
     "The queen attacks e5 a second time.",
     "Your London bishop defends e5. Stockfish: +1.4."
    ],
    "fin": "",
    "titre": "1…e5 2.dxe5",
    "marques": [
     [
      "e5!"
     ],
     [
      "e5!"
     ],
     [
      "c6",
      "e5!"
     ],
     [
      "f3",
      "e5!"
     ],
     [
      "e7",
      "e5!",
      "c6"
     ],
     [
      "f4",
      "e5!"
     ],
     []
    ]
   },
   "q5954cf962": {
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "The Dutch: the f-pawn controls e4.",
     "Your system does not change: 2.Bf4.",
     "Black develops.",
     "e3.",
     "Black opens the f8 bishop.",
     "Nf3. Stockfish: +0.5."
    ],
    "fin": "",
    "titre": "1…f5 2.Bf4",
    "marques": [
     [
      "f5",
      "e4"
     ],
     [
      "f4"
     ],
     [],
     [],
     [
      "f8"
     ],
     [],
     []
    ]
   },
   "qf940f8435": {
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "Nf3",
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Black prepares …e5.",
     "Nf3 discourages …e5: the knight controls the square.",
     "Black develops.",
     "And now the bishop comes out. Stockfish: +0.3."
    ],
    "fin": "",
    "titre": "1…d6 2.Nf3",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "f4"
     ],
     []
    ]
   },
   "qed17f690b": {
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "Bf4",
     "Bg7",
     "e3",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "The fianchetto right away.",
     "2.Bf4: your system. Stockfish prefers 2.e4 (+0.7), which takes the whole centre, but 2.Bf4 is still sound.",
     "The g7 bishop aims down the long diagonal.",
     "e3.",
     "Black plays …d6.",
     "Nf3. Then h3, as against 1…Nf6 2.Bf4 g6. Stockfish: +0.1."
    ],
    "fin": "",
    "titre": "1…g6 2.Bf4",
    "marques": [
     [
      "g6",
      "f8"
     ],
     [
      "f4"
     ],
     [
      "g7",
      "d4!"
     ],
     [
      "e3"
     ],
     [
      "d6"
     ],
     [
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q87abc3fb7": {
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Black prepares …d5.",
     "2.Bf4.",
     "We are back in 1…d5 2.Bf4 c6.",
     "e3. Stockfish: +0.5."
    ],
    "fin": "",
    "titre": "1…c6 2.Bf4",
    "marques": [
     [
      "d7",
      "d5"
     ],
     [
      "f4"
     ],
     [
      "d5",
      "f4",
      "c6"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q125d77b1f": {
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "The knight comes out at once.",
     "2.Bf4.",
     "We are back in 1…d5 2.Bf4 Nc6.",
     "e3. Stockfish: +0.4."
    ],
    "fin": "",
    "titre": "1…Nc6 2.Bf4",
    "marques": [
     [
      "c6"
     ],
     [
      "f4"
     ],
     [
      "d5",
      "f4",
      "c6"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q680fd6f28": {
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "Bf4",
     "Bb7",
     "e3"
    ],
    "legendes": [
     "Black prepares …Bb7.",
     "2.Bf4: your system. Stockfish prefers 2.e4 (+0.9), which takes the whole centre, but 2.Bf4 is still sound.",
     "The b7 bishop aims at e4.",
     "e3. Stockfish: +0.2."
    ],
    "fin": "",
    "titre": "1…b6 2.Bf4",
    "marques": [
     [
      "c8",
      "b7"
     ],
     [
      "f4"
     ],
     [
      "b7",
      "e4"
     ],
     [
      "e3"
     ],
     []
    ]
   },
   "q672730985": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "Black attacks d4 right away.",
     "e3 supports d4.",
     "A second attacker on d4.",
     "c3: the pyramid. Equal (Stockfish: 0.0)."
    ],
    "fin": "",
    "titre": "2…c5 3.e3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "e3",
      "d4!"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q20e455291": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Bf5",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black copies your idea: their bishop comes out before …e6.",
     "e3.",
     "Black opens the f8 bishop.",
     "Nf3. Stockfish: +0.1."
    ],
    "fin": "",
    "titre": "2…Bf5 3.e3",
    "marques": [
     [
      "f5",
      "f4",
      "e6"
     ],
     [
      "e3"
     ],
     [
      "e6",
      "f8"
     ],
     [
      "f3"
     ],
     []
    ]
   },
   "q15e091780": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "legendes": [
     "Black supports d5 with the c-pawn.",
     "e3.",
     "The bishop comes out.",
     "Nf3. Stockfish: +0.3."
    ],
    "fin": "",
    "titre": "2…c6 3.e3",
    "marques": [
     [
      "c6",
      "d5"
     ],
     [
      "e3"
     ],
     [
      "f5"
     ],
     [
      "f3"
     ],
     []
    ]
   },
   "qa745f549f": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "legendes": [
     "The fianchetto.",
     "e3.",
     "The g7 bishop aims at d4.",
     "Nf3, then h3. Stockfish: +0.3."
    ],
    "fin": "",
    "titre": "2…g6 3.e3",
    "marques": [
     [
      "g6",
      "f8"
     ],
     [
      "e3"
     ],
     [
      "g7",
      "d4!"
     ],
     [
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q6a66a1d17": {
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e5",
     "Bxe5"
    ],
    "legendes": [
     "A pawn offered.",
     "Your bishop takes it. Stockfish: +1.0."
    ],
    "fin": "",
    "titre": "2…e5 3.Bxe5",
    "marques": [
     [
      "e5!",
      "d4",
      "f4"
     ],
     [
      "e5!"
     ],
     []
    ]
   },
   "q12bcb6075": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3"
    ],
    "legendes": [
     "Black attacks d4.",
     "e3 supports d4. Stockfish: +0.1."
    ],
    "fin": "",
    "titre": "1…Nf6 2.Bf4 c5 3.e3",
    "marques": [
     [
      "c5",
      "d4!"
     ],
     [
      "e3",
      "d4!"
     ],
     []
    ]
   },
   "qfd8b7fc98": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "d6",
     "e3"
    ],
    "legendes": [
     "Black prepares …e5.",
     "e3, then Nf3 and h3. Stockfish: +0.1."
    ],
    "fin": "",
    "titre": "1…Nf6 2.Bf4 d6 3.e3",
    "marques": [
     [
      "e7",
      "e5"
     ],
     [
      "e3",
      "f3",
      "h3"
     ],
     []
    ]
   },
   "q02936d27c": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the pyramid. The pin by the g4 bishop does not bother you."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 Bg4 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3",
      "g4"
     ],
     []
    ]
   },
   "q631a84079": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q784cc7745": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 Bf5 5.Bb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "qffadd6d88": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qfe8ec8644": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nf6",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 Nf6 5.Bb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q8696a14d7": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3 cuts the f5-c2 diagonal: c2 is now attacked only once."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 Nb4 5.Bd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "c2!",
      "b4",
      "f5"
     ],
     []
    ]
   },
   "q353844a3f": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Nf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q5192318b4": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg3: you keep your bishop against …Bd6."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Bd6 5.Bg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     []
    ]
   },
   "qd2fb6049d": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3 parries the check and attacks the bishop: it has to retreat."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Bb4+ 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "b4!"
     ],
     []
    ]
   },
   "q45b3957fe": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg3: you keep your bishop against …Bd6."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Bd6 5.Bg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     []
    ]
   },
   "q5ad15f606": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q56e7a248e": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Be7 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q89b060082": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Nc6 4.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q4cf5b36cb": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 e6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qd32058728": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "Nc6",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 Nc6 5.Bb5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "b5",
      "c6!",
      "e8"
     ],
     []
    ]
   },
   "q3560444e9": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "h6",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3 offers a bishop trade and brings out your f1 bishop."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 h6 5.Bd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "f5!"
     ],
     []
    ]
   },
   "q02799299e": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "hxg3: take back with the h-pawn, the h-file opens for your rook."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Bxg3 5.hxg3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "g3!",
      "h1"
     ],
     []
    ]
   },
   "q64f71fa89": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Nf6 5.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q4014ef669": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Nc6 5.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "g3",
      "d6"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qab11a053b": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Nf6 4.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qa246f56c7": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 Nc6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qa628b50c8": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qb8c1d925d": {
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 Nf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q69efb6e43": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 O-O 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "qc87f7ad17": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d6",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 d6 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q63fd62a1d": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d5",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 d5 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q6371c765c": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Bg7 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "qf9bad8772": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3 puts the question to the g4 bishop (if it retreats to h5, g4 puts it in danger)."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Bg4 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "g4!",
      "h5"
     ],
     []
    ]
   },
   "q02bb48fec": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg5: without h3, the bishop escapes the h5 knight via g5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Nh5 5.Bg5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "g5",
      "h5"
     ],
     []
    ]
   },
   "qbb679dbc1": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Bg7 5.h3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "h3",
      "h2",
      "f4",
      "f6"
     ],
     []
    ]
   },
   "q5b0ecc810": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Be5: the bishop escapes the h5 knight and attacks the h8 rook."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Nh5 5.Be5",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "e5",
      "h8!",
      "h5"
     ],
     []
    ]
   },
   "q2582d3a7e": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the pyramid. The pin by the g4 bishop does not bother you."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Bg4 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3",
      "g4"
     ],
     []
    ]
   },
   "qd53a2b9f6": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 d5 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "qc6ef374eb": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 d5 4.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "qde9a63467": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qee46ee0ed": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 Nc6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "qafa5f8847": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 d5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q108d61713": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Bb7",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 Bb7 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q8a7b338ca": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Nc3, then Nb5: together with your f4 bishop, the knight will eye c7."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 c5 5.Nc3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "b5",
      "f4",
      "c7!"
     ],
     []
    ]
   },
   "q78806fc72": {
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Be7",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3: develops, the bishop aims at h7."
    ],
    "fin": "",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 Be7 5.Bd3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d3",
      "h7!"
     ],
     []
    ]
   },
   "q87498de50": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 d5 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "qa49a94c48": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 Nc6 5.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4!"
     ],
     []
    ]
   },
   "q896810dc2": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 d5 5.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4"
     ],
     []
    ]
   },
   "q1096dc836": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 Nf6 5.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "d4!"
     ],
     [],
     [
      "f3",
      "d4"
     ],
     []
    ]
   },
   "qbf591f758": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 Nf6 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q47914a892": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 cxd4 5.exd4",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "d4!"
     ],
     []
    ]
   },
   "qd7baed792": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 d5 5.c3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     [],
     [
      "c3",
      "d4",
      "e3"
     ],
     []
    ]
   },
   "q8cfc19009": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 d5 4.Nf3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4!",
      "f1"
     ],
     [],
     [
      "f3",
      "e5"
     ],
     []
    ]
   },
   "q97061c4d7": {
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ],
    "fin": "",
    "titre": "Line 1.d4 e6 2.Bf4 Nf6 3.e3",
    "marques": [
     [
      "d4"
     ],
     [],
     [
      "f4",
      "e3"
     ],
     [],
     [
      "e3",
      "d4",
      "f1"
     ],
     []
    ]
   },
   "q2d16a28fb": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Qxb7",
     "Rb8",
     "Qxa7",
     "Bxf4",
     "exf4",
     "Rxb2"
    ],
    "legendes": [
     "Your queen takes on b7… and moves away from your king.",
     "The black rook chases your queen and eyes b2.",
     "Your queen takes another pawn, but she is out of play.",
     "Black trades off your f4 bishop…",
     "…you take back with a pawn, which becomes doubled.",
     "The rook takes on b2 and settles on your second rank."
    ],
    "fin": "You are a pawn up, but your queen is far away, your f-pawns are doubled, your b1 knight and f1 bishop have not moved, and the b2 rook is very active: Stockfish gives Black the advantage (−0.9).",
    "titre": "7.Qxb7 ? Rb8",
    "couleurs": [
     "r",
     "g",
     "g",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "b7!",
      "e1"
     ],
     [
      "b8",
      "b7!",
      "b2!"
     ],
     [
      "a7!"
     ],
     [
      "f4!",
      "d6"
     ],
     [
      "f4!",
      "f2"
     ],
     [
      "b2!"
     ],
     [
      "a7",
      "b1",
      "f1",
      "b2"
     ]
    ]
   },
   "q5a8da8e87": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Bxd6",
     "cxd6"
    ],
    "legendes": [
     "First trade the d6 bishop, which attacks your f4 bishop: you choose the moment of the trade yourself.",
     "Black takes back with the c-pawn. Their b7 pawn stays weak, and your position is healthy (Stockfish: +0.2)."
    ],
    "fin": "",
    "titre": "7.Bxd6: no greed",
    "marques": [
     [
      "d6!",
      "f4"
     ],
     [
      "d6!",
      "b7!",
      "b3"
     ],
     []
    ]
   },
   "qeeb4cb40b": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "e4",
     "dxe4"
    ],
    "legendes": [
     "The e4 break… but e4 is attacked twice (d5 pawn, f6 knight) and defended only once (d2 knight).",
     "Black takes: the e4 pawn now attacks your f3 knight."
    ],
    "fin": "Your knight has to flee and Black keeps the pawn: Stockfish: −2.2.",
    "titre": "8.e4 ? dxe4",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "e4!",
      "d5",
      "f6",
      "d2"
     ],
     [
      "e4",
      "f3!"
     ],
     [
      "f3!",
      "e4"
     ]
    ]
   },
   "qd1765d946": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "Bd3"
    ],
    "legendes": [
     "Bd3 first: the bishop defends e4 in advance and aims at h7 (Stockfish: +0.3). Then O-O, and e4 will come when it is defended enough times."
    ],
    "fin": "",
    "titre": "8.Bd3: prepare e4",
    "marques": [
     [
      "d3",
      "e4",
      "h7!"
     ],
     []
    ]
   },
   "qd1ecc41f4": {
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3",
     "O-O",
     "Bd3",
     "c5",
     "Nbd2",
     "Nc6",
     "O-O",
     "Nh5"
    ],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Ng5+",
     "Bxg5",
     "Qxh5+",
     "Bh6"
    ],
    "legendes": [
     "The f6 knight has gone to h5: h7 has only the king left to defend it. Tempting…",
     "The king takes.",
     "Knight check…",
     "…but the e7 bishop was watching g5: it takes the knight.",
     "Your queen takes back the h5 knight with check.",
     "The bishop retreats to h6 and protects its king."
    ],
    "fin": "You have given a bishop and a knight for a pawn and a knight: a piece down (Stockfish: −2.6). The sacrifice does not work when a black bishop guards g5.",
    "titre": "9.Bxh7+ ? Kxh7 10.Ng5+ Bxg5",
    "couleurs": [
     "r",
     "g",
     "g",
     "g",
     "g",
     "g"
    ],
    "marques": [
     [
      "h5",
      "h7!",
      "d3"
     ],
     [
      "h7!"
     ],
     [
      "g5",
      "h7!"
     ],
     [
      "e7",
      "g5!"
     ],
     [
      "h5!",
      "h7!"
     ],
     [
      "h6",
      "h7"
     ],
     [
      "h6",
      "g5"
     ]
    ]
   },
   "q57a65a47e": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Bd3",
     "Nbd7",
     "O-O",
     "e5",
     "Bh2",
     "e4"
    ],
    "legendes": [
     "The bishop goes to d3, on the same rank as the f3 knight.",
     "Black prepares …e5.",
     "You castle.",
     "…e5 attacks your f4 bishop.",
     "The bishop retreats to h2… and you forget the next push.",
     "…e4: the pawn attacks both the d3 bishop and the f3 knight."
    ],
    "fin": "One of the two pieces falls (Stockfish: −3.1). On move 8, you had to take: 8.dxe5 dxe5 9.Nxe5, and the position stays balanced (+0.1).",
    "titre": "6.Bd3, 8.Bh2?? e4",
    "couleurs": [
     "g",
     "g",
     "g",
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "d3",
      "f3"
     ],
     [
      "d7",
      "e7"
     ],
     [
      "g1"
     ],
     [
      "e5",
      "f4!"
     ],
     [
      "h2",
      "e5"
     ],
     [
      "e4",
      "d3!",
      "f3!"
     ],
     [
      "e4",
      "d3!",
      "f3!"
     ]
    ]
   },
   "qab6365049": {
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Be2"
    ],
    "legendes": [
     "Against …g6 and …d6, the bishop goes to e2 (Stockfish: +0.2, the best move): if Black pushes …e5 then …e4, there is nothing to fork on d3."
    ],
    "fin": "",
    "titre": "6.Be2 against the fianchetto",
    "marques": [
     [
      "e2",
      "d3",
      "g6",
      "d6"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "qfb0db9eb6",
    "titre": "The c3-d4-e3 pyramid",
    "debut": [
     "d4",
     "d5"
    ],
    "coups": [
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "<span class=\"mv good\">2.Bf4</span>: your signature move. The bishop comes out at once, onto a fine diagonal.",
     "Black develops.",
     "<span class=\"mv\">3.e3</span> supports d4 and opens the diagonal of your f1 bishop. Your f4 bishop is already out: that is the whole point of the move order.",
     "Black opens the f8 bishop. Their c8 bishop, on the other hand, stays shut in behind e6.",
     "<span class=\"mv\">4.Nf3</span>: the knight comes out and controls e5.",
     "Black attacks your base, the d4 pawn.",
     "<span class=\"mv good\">5.c3</span>: the c3-d4-e3 pyramid. If Black takes on d4, you take back with a pawn and your centre stays standing."
    ]
   },
   {
    "id": "q8efee52ab",
    "titre": "5…Qb6 6.Qb3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "Qxb3",
     "axb3"
    ],
    "legendes": [
     "The queen attacks b2: your c1 bishop has gone to f4, and nothing defends this pawn any more.",
     "Qb3 defends b2 and offers a queen trade.",
     "Black trades.",
     "Take back with the a-pawn: your a1 rook wins the a-file."
    ]
   },
   {
    "id": "qceec2bda3",
    "titre": "4…Bd6 5.Bg3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "The d6 bishop attacks your f4 bishop.",
     "Bg3: you keep your bishop. If it gets taken, you will take back with the h-pawn."
    ]
   },
   {
    "id": "q2c87396fd",
    "titre": "3…Nf6 4.Nf3 Bf5 5.Bb5",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "The most played reply between 1000 and 1600 Elo. The knight eyes b4, then c2.",
     "Always e3.",
     "Black develops.",
     "Nf3.",
     "The c8 bishop comes out in turn.",
     "<span class=\"mv good\">5.Bb5</span>! The bishop pins the c6 knight to the king: it can no longer move. Ne5 will come to attack it a second time."
    ]
   },
   {
    "id": "qc7a55708c",
    "titre": "5…e6 6.Ne5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "Ne5: the pinned c6 knight is attacked twice (b5 bishop, e5 knight) and defended once (b7 pawn)."
    ]
   },
   {
    "id": "q1e3436fde",
    "titre": "4…Bg4 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "c3"
    ],
    "legendes": [
     "The bishop pins your f3 knight.",
     "No panic: c3, the pyramid. The pin does not bother you."
    ]
   },
   {
    "id": "q8e0bfffdf",
    "titre": "3…Bf5 4.Nf3 Nb4: the trap on c2",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3"
    ],
    "coups": [
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "The bishop comes out at once and aims at c2.",
     "Develop.",
     "The threat: …Nxc2+, check to the king and an attack on the a1 rook. The c2 pawn is attacked twice (b4 knight, f5 bishop), defended once (your queen).",
     "<span class=\"mv good\">5.Bd3</span> cuts the f5 bishop's diagonal: c2 is now attacked only once. If the knight takes on d3, take back with cxd3."
    ]
   },
   {
    "id": "qd993f6a92",
    "titre": "3…Bd6 4.Bg3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "e3.",
     "The d6 bishop attacks your f4 bishop: Black wants to trade it off.",
     "<span class=\"mv good\">4.Bg3</span>: you keep your bishop. If it gets taken, it will be by a pawn.",
     "Black trades anyway.",
     "<span class=\"mv good\">5.hxg3</span>: take back with the h-pawn. The h-file opens for your h1 rook, facing the h7 pawn."
    ]
   },
   {
    "id": "q918670779",
    "titre": "2…e6 3.e3 c5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3"
    ],
    "coups": [
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Black attacks d4.",
     "Develop: the knight defends d4 once more.",
     "Black trades.",
     "Take back with the e-pawn: your pawn stays in the centre."
    ]
   },
   {
    "id": "qcc586f7ec",
    "titre": "5.h3: a retreat square for the bishop",
    "debut": [
     "d4",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "Against 1…Nf6 too: 2.Bf4.",
     "Black prepares …Bg7: the fianchetto.",
     "e3.",
     "The g7 bishop aims down the long diagonal.",
     "Develop.",
     "Black castles.",
     "<span class=\"mv good\">5.h3</span>! The f6 knight would like to come to h5 to chase your bishop. With h3, your bishop will have a retreat on h2."
    ]
   },
   {
    "id": "qf810435f2",
    "titre": "5…Nh5 6.Bh2",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "coups": [
     "Nh5",
     "Bh2"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "The bishop retreats to h2: it stays on the h2-b8 diagonal, and the h5 knight has gained nothing."
    ]
   },
   {
    "id": "qadae236b8",
    "titre": "2…c5 3.e3 cxd4 4.exd4",
    "debut": [
     "d4",
     "e6"
    ],
    "coups": [
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "Against 1…e6 too, 2.Bf4. After …d5 or …Nf6, you are back in the previous lines.",
     "Black attacks d4 right away.",
     "e3 supports d4.",
     "Black trades.",
     "<span class=\"mv good\">4.exd4</span>: take back at once with the e-pawn. Your pawn stays in the centre.",
     "The knight attacks d4.",
     "Nf3 defends d4."
    ]
   },
   {
    "id": "q2606a729d",
    "titre": "1…d5 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "d5",
     "Bf4"
    ],
    "legendes": [
     "Black takes the centre.",
     "The bishop comes out at once, before e3: this is the London."
    ]
   },
   {
    "id": "q6c4c6653d",
    "titre": "1…Nf6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Black brings out the knight.",
     "Same move: the bishop comes out before e3."
    ]
   },
   {
    "id": "q65502247c",
    "titre": "1…e6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "e6",
     "Bf4"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "2.Bf4 again. After …d5 or …Nf6, you are back in the other lines."
    ]
   },
   {
    "id": "qde268baff",
    "titre": "2…Nf6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Nf6",
     "e3"
    ],
    "legendes": [
     "Black develops.",
     "e3 supports d4 and opens the diagonal of your f1 bishop. Your f4 bishop is already out."
    ]
   },
   {
    "id": "qbbf48a2e9",
    "titre": "3…e6 4.Nf3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "coups": [
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "The knight comes out and controls e5."
    ]
   },
   {
    "id": "q11a0c31eb",
    "titre": "4…c5 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "c3"
    ],
    "legendes": [
     "Black attacks d4.",
     "c3: the c3-d4-e3 pyramid. If Black takes on d4, you take back with a pawn."
    ]
   },
   {
    "id": "q963e69235",
    "titre": "4…Bxg3 5.hxg3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3"
    ],
    "coups": [
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "Black trades bishops.",
     "Take back with the h-pawn: the h-file opens for your h1 rook."
    ]
   },
   {
    "id": "q8729a82ac",
    "titre": "4…O-O 5.h3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "coups": [
     "O-O",
     "h3"
    ],
    "legendes": [
     "Black castles behind the g7 bishop.",
     "h3: if the knight comes to h5 to chase your bishop, it will have a retreat on h2."
    ]
   },
   {
    "id": "q2c6b4f0a5",
    "titre": "4…Bf5 5.Bb5",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "coups": [
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "The c8 bishop comes out in turn.",
     "Bb5 pins the c6 knight to the king: it can no longer move."
    ]
   },
   {
    "id": "q740e545ff",
    "titre": "4…Nb4 5.Bd3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "coups": [
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "The knight threatens …Nxc2+, check to the king and an attack on the a1 rook.",
     "Bd3 cuts the f5 bishop's diagonal: c2 is now attacked only once, and your queen defends it."
    ]
   },
   {
    "id": "qd882e8cb0",
    "titre": "3…cxd4 4.exd4",
    "debut": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "Black takes on d4.",
     "Take back at once with the e-pawn: your pawn stays in the centre."
    ]
   },
   {
    "id": "q3d1bcbb33",
    "titre": "4…Bb4+ 5.c3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3"
    ],
    "coups": [
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "Check.",
     "c3 parries the check and attacks the bishop: it has to retreat."
    ]
   },
   {
    "id": "q5ccef8522",
    "titre": "4…Nh5 5.Bg5",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "Without h3, your bishop has no square on h2: it gets to safety on g5."
    ]
   },
   {
    "id": "q6ae32d977",
    "titre": "4…Nh5 5.Be5",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3"
    ],
    "coups": [
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "The knight attacks your bishop.",
     "Be5! The bishop gets to safety and attacks the h8 rook: the black bishop is not on g7 yet."
    ]
   },
   {
    "id": "q0c016b191",
    "titre": "4…Bg4 5.h3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3"
    ],
    "legendes": [
     "The bishop pins your f3 knight to your queen.",
     "h3 puts the question to the bishop. If it retreats to h5, g4 puts it in great danger: its g6 retreat is blocked by a black pawn."
    ]
   },
   {
    "id": "q146a7ca31",
    "titre": "4…c5 5.Nc3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3"
    ],
    "legendes": [
     "Black attacks d4.",
     "Nc3, then Nb5: together with your f4 bishop, the knight will eye c7."
    ]
   },
   {
    "id": "q02936d27c",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 Bg4 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the pyramid. The pin by the g4 bishop does not bother you."
    ]
   },
   {
    "id": "q631a84079",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q784cc7745",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Nf6 4.Nf3 Bf5 5.Bb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ]
   },
   {
    "id": "qffadd6d88",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "qfe8ec8644",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 Nf6 5.Bb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nf6",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ]
   },
   {
    "id": "q8696a14d7",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 Bf5 4.Nf3 Nb4 5.Bd3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Bf5",
     "Nf3",
     "Nb4",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3 cuts the f5-c2 diagonal: c2 is now attacked only once."
    ]
   },
   {
    "id": "q353844a3f",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Nf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q5192318b4",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Bd6 5.Bg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg3: you keep your bishop against …Bd6."
    ]
   },
   {
    "id": "qd2fb6049d",
    "titre": "Line 1.d4 d5 2.Bf4 Nc6 3.e3 e6 4.Nf3 Bb4+ 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "e6",
     "Nf3",
     "Bb4+",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3 parries the check and attacks the bishop: it has to retreat."
    ]
   },
   {
    "id": "q45b3957fe",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Bd6 5.Bg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Bd6",
     "Bg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg3: you keep your bishop against …Bd6."
    ]
   },
   {
    "id": "q5ad15f606",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 c5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q56e7a248e",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Be7 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "Be7",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q89b060082",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Nc6 4.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "q4cf5b36cb",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 e6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "qd32058728",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 Nc6 5.Bb5",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "Nc6",
     "Bb5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bb5 pins the c6 knight to the king."
    ]
   },
   {
    "id": "q3560444e9",
    "titre": "Line 1.d4 d5 2.Bf4 Nf6 3.e3 Bf5 4.Nf3 h6 5.Bd3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "h6",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3 offers a bishop trade and brings out your f1 bishop."
    ]
   },
   {
    "id": "q02799299e",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Bxg3 5.hxg3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "hxg3: take back with the h-pawn, the h-file opens for your rook."
    ]
   },
   {
    "id": "q64f71fa89",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Nf6 5.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "q4014ef669",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Bd6 4.Bg3 Nc6 5.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Bg3: you keep your bishop against …Bd6.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "qab11a053b",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 Nf6 4.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "qa246f56c7",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 Nc6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "qa628b50c8",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ]
   },
   {
    "id": "qb8c1d925d",
    "titre": "Line 1.d4 d5 2.Bf4 e6 3.e3 c5 4.Nf3 Nf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q69efb6e43",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 O-O 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ]
   },
   {
    "id": "qc87f7ad17",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 d6 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d6",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ]
   },
   {
    "id": "q63fd62a1d",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7 4.Nf3 d5 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "d5",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ]
   },
   {
    "id": "q6371c765c",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Bg7 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ]
   },
   {
    "id": "qf9bad8772",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Bg4 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Bg4",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3 puts the question to the g4 bishop (if it retreats to h5, g4 puts it in danger)."
    ]
   },
   {
    "id": "q02bb48fec",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d6 4.Nf3 Nh5 5.Bg5",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3",
     "Nh5",
     "Bg5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bg5: without h3, the bishop escapes the h5 knight via g5."
    ]
   },
   {
    "id": "qbb679dbc1",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Bg7 5.h3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg7",
     "h3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "h3: a retreat on h2 for your bishop, against …Nh5."
    ]
   },
   {
    "id": "q5b0ecc810",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Nh5 5.Be5",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Nh5",
     "Be5"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Be5: the bishop escapes the h5 knight and attacks the h8 rook."
    ]
   },
   {
    "id": "q2582d3a7e",
    "titre": "Line 1.d4 Nf6 2.Bf4 g6 3.e3 d5 4.Nf3 Bg4 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d5",
     "Nf3",
     "Bg4",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the pyramid. The pin by the g4 bishop does not bother you."
    ]
   },
   {
    "id": "qd53a2b9f6",
    "titre": "Line 1.d4 Nf6 2.Bf4 d5 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ]
   },
   {
    "id": "qc6ef374eb",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 d5 4.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "qde9a63467",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ]
   },
   {
    "id": "qee46ee0ed",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 Nc6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "qafa5f8847",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 c5 4.Nf3 d5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "c5",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q108d61713",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 Bb7 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Bb7",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q8a7b338ca",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 c5 5.Nc3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "c5",
     "Nc3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Nc3, then Nb5: together with your f4 bishop, the knight will eye c7."
    ]
   },
   {
    "id": "q78806fc72",
    "titre": "Line 1.d4 Nf6 2.Bf4 e6 3.e3 b6 4.Nf3 Be7 5.Bd3",
    "debut": [],
    "coups": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3",
     "Be7",
     "Bd3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "Bd3: develops, the bishop aims at h7."
    ]
   },
   {
    "id": "q87498de50",
    "titre": "Line 1.d4 e6 2.Bf4 d5 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ]
   },
   {
    "id": "qa49a94c48",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 Nc6 5.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nc6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ]
   },
   {
    "id": "q896810dc2",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 d5 5.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ]
   },
   {
    "id": "q1096dc836",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 cxd4 4.exd4 Nf6 5.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "cxd4",
     "exd4",
     "Nf6",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "exd4: take back at once with the e-pawn.",
     "",
     "Nf3: develops and defends d4."
    ]
   },
   {
    "id": "qbf591f758",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 Nf6 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "Nf6",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q47914a892",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 cxd4 5.exd4",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "cxd4",
     "exd4"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "exd4: take back at once with the e-pawn."
    ]
   },
   {
    "id": "qd7baed792",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 Nc6 4.Nf3 d5 5.c3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "Nc6",
     "Nf3",
     "d5",
     "c3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5.",
     "",
     "c3: the c3-d4-e3 pyramid."
    ]
   },
   {
    "id": "q8cfc19009",
    "titre": "Line 1.d4 e6 2.Bf4 c5 3.e3 d5 4.Nf3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "c5",
     "e3",
     "d5",
     "Nf3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop.",
     "",
     "Nf3: develops and controls e5."
    ]
   },
   {
    "id": "q97061c4d7",
    "titre": "Line 1.d4 e6 2.Bf4 Nf6 3.e3",
    "debut": [],
    "coups": [
     "d4",
     "e6",
     "Bf4",
     "Nf6",
     "e3"
    ],
    "legendes": [
     "1.d4: your first move, always.",
     "",
     "Bf4: the bishop comes out before e3, otherwise it would be shut in.",
     "",
     "e3: supports d4 and opens the diagonal of your f1 bishop."
    ]
   },
   {
    "id": "qc3707f8b1",
    "titre": "The plan after the repertoire",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3",
     "b6",
     "Ne5"
    ],
    "legendes": [
     "The knight goes to d2, not c3: the c3 square is taken by your pawn.",
     "Black offers a bishop trade.",
     "As always: Bg3.",
     "Black castles.",
     "The d3 bishop aims at h7, the weak square of Black's castled position.",
     "Black prepares …Bb7.",
     "Ne5: the knight settles in the centre. Only …f6 could chase it, weakening Black's castled position; Black can also trade it off."
    ]
   },
   {
    "id": "q63e06c8f1",
    "titre": "6…c4 7.Qc2",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Qb6",
     "Qb3"
    ],
    "coups": [
     "c4",
     "Qc2"
    ],
    "legendes": [
     "The pawn chases your queen.",
     "The queen retreats to c2: from there, she still defends b2 and eyes e4 and h7."
    ]
   },
   {
    "id": "q9fa452574",
    "titre": "3…Qb6 4.Qc1",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c6",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Qc1"
    ],
    "legendes": [
     "The queen attacks b2 before you have played c3: Qb3 is not possible yet.",
     "Qc1 defends b2. Your queen will come back later."
    ]
   },
   {
    "id": "q3dde29aa4",
    "titre": "Black on the queenside, you in the centre",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3"
    ],
    "coups": [
     "c4",
     "Bc2",
     "b5",
     "O-O",
     "a5",
     "e4",
     "dxe4",
     "Nxe4",
     "Nxe4",
     "Bxe4"
    ],
    "legendes": [
     "…c4: Black gains space on the queenside and chases your d3 bishop.",
     "The bishop retreats to c2. It stays on the diagonal leading to h7.",
     "…b5 supports the c4 pawn. Black's plan: …a5 then …b4, to open lines against c3.",
     "Castling: your king gets to safety before the centre opens.",
     "…a5: Black carries on on the queenside.",
     "<span class=\"mv good\">11.e4</span>! Do not follow Black to the queenside: strike in the centre, where your pieces are ready. It is the best move according to Stockfish (+0.6).",
     "Black takes.",
     "Your knight takes back.",
     "Knights are traded.",
     "Your bishop takes back and settles on e4: it attacks the c6 knight (no longer defended since …b5) and aims at h7."
    ]
   },
   {
    "id": "q5a8da8e87",
    "titre": "7.Bxd6: no greed",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "Bf5",
     "Nf3",
     "e6",
     "c3",
     "Nbd7",
     "Qb3",
     "Bd6"
    ],
    "coups": [
     "Bxd6",
     "cxd6"
    ],
    "legendes": [
     "First trade the d6 bishop, which attacks your f4 bishop: you choose the moment of the trade yourself.",
     "Black takes back with the c-pawn. Their b7 pawn stays weak, and your position is healthy (Stockfish: +0.2)."
    ]
   },
   {
    "id": "qd1765d946",
    "titre": "8.Bd3: prepare e4",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O"
    ],
    "coups": [
     "Bd3"
    ],
    "legendes": [
     "Bd3 first: the bishop defends e4 in advance and aims at h7 (Stockfish: +0.3). Then O-O, and e4 will come when it is defended enough times."
    ]
   },
   {
    "id": "qab6365049",
    "titre": "6.Be2 against the fianchetto",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "Bg7",
     "Nf3",
     "O-O",
     "h3",
     "d6"
    ],
    "coups": [
     "Be2"
    ],
    "legendes": [
     "Against …g6 and …d6, the bishop goes to e2 (Stockfish: +0.2, the best move): if Black pushes …e5 then …e4, there is nothing to fork on d3."
    ]
   },
   {
    "id": "q28e19ed56",
    "titre": "The Greek gift",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2",
     "Bd6",
     "Bg3",
     "O-O",
     "Bd3",
     "Qc7",
     "O-O",
     "Bxg3",
     "hxg3"
    ],
    "coups": [
     "c4",
     "Bc2",
     "b5",
     "e4",
     "b4",
     "e5",
     "Nd7",
     "Bxh7+",
     "Kxh7",
     "Ng5+",
     "Kg8",
     "Qh5"
    ],
    "legendes": [
     "…c4 chases your d3 bishop.",
     "The bishop retreats to c2: it keeps the h7 diagonal.",
     "Black advances on the queenside.",
     "<span class=\"mv\">12.e4</span>: the central break. If the pawn reaches e5, it will chase the f6 knight, the only defender of h7.",
     "Black carries on on the queenside…",
     "<span class=\"mv good\">13.e5</span>! The f6 knight has to leave.",
     "It retreats to d7. h7 has only the king left to defend it: the conditions are met (your queen will go via h5 as soon as the knight has jumped to g5).",
     "<span class=\"mv good\">14.Bxh7+</span>! The Greek gift.",
     "The king takes.",
     "<span class=\"mv good\">15.Ng5+</span>: check. The knight is safe on g5: the black queen is on c7 and no black bishop guards g5.",
     "The king goes back to g8, the most natural move.",
     "<span class=\"mv good\">16.Qh5</span>: the threat is Qh7 mate, and the e5 pawn rules out …Nf6."
    ]
   },
   {
    "id": "q15bbe301b",
    "titre": "The h-file",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "e6",
     "e3",
     "Bd6",
     "Bg3",
     "Bxg3",
     "hxg3",
     "Nf6",
     "Nd2",
     "c5",
     "c3",
     "Nc6",
     "Ngf3",
     "O-O",
     "Bd3",
     "b6"
    ],
    "coups": [
     "Ne5",
     "Qc7",
     "Ng4",
     "Re8",
     "Nxf6+",
     "gxf6",
     "Rxh7"
    ],
    "legendes": [
     "<span class=\"mv good\">10.Ne5</span>! The knight attacks c6, which nothing has defended since …b6.",
     "The queen defends c6.",
     "<span class=\"mv good\">11.Ng4</span>! The knight is going to trade off the defender of h7.",
     "Black frees f8 for the king.",
     "Nxf6+: the defender disappears.",
     "Black takes back with the g-pawn: their king is exposed.",
     "<span class=\"mv good\">13.Rxh7</span>: the rook comes into play without having needed to move before."
    ]
   },
   {
    "id": "q2059e461c",
    "titre": "Against …c4: b3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3",
     "Nc6",
     "Nbd2"
    ],
    "coups": [
     "c4",
     "Be2",
     "b5",
     "O-O",
     "a5",
     "b3",
     "a4",
     "Ne5"
    ],
    "legendes": [
     "…c4: Black closes the queenside and gains space. Your f1 bishop will not be able to go to d3.",
     "The bishop develops to e2.",
     "…b5 supports the c4 pawn.",
     "Castling.",
     "…a5 prepares …b4 against your c3 pawn.",
     "<span class=\"mv good\">9.b3</span>! You hit the pawn chain from below: b3 attacks c4. If …cxb3, axb3 and your a1 rook wins the a-file.",
     "Black pushes on.",
     "<span class=\"mv good\">10.Ne5</span>: while Black advances their pawns, you place your pieces. Next: e4 in the centre."
    ]
   },
   {
    "id": "q6f1b22494",
    "titre": "2…c5 3.e3 Qb6 4.Nc3: b2 is poisoned",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "c5",
     "e3"
    ],
    "coups": [
     "Qb6",
     "Nc3",
     "Qxb2",
     "Nxd5",
     "Qa3",
     "Nc7+",
     "Kd8",
     "Nxa8"
    ],
    "legendes": [
     "The queen attacks b2.",
     "<span class=\"mv good\">4.Nc3</span>! You leave b2. The knight eyes d5.",
     "<span class=\"mv bad\">4…Qxb2</span>?? The pawn is poisoned.",
     "<span class=\"mv good\">5.Nxd5</span>! The knight takes a pawn and threatens Nc7+, check to the king and an attack on the a8 rook.",
     "The queen falls back to a3, but she does not defend c7.",
     "Check: the king has to move.",
     "The king steps aside.",
     "You take the rook."
    ]
   },
   {
    "id": "q04273db10",
    "titre": "5.Bb5 e6 6.Ne5: the pinned knight",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nc6",
     "e3",
     "Nf6",
     "Nf3",
     "Bf5",
     "Bb5"
    ],
    "coups": [
     "e6",
     "Ne5",
     "Bd6",
     "Nxc6",
     "bxc6",
     "Bxc6+"
    ],
    "legendes": [
     "Black opens the f8 bishop.",
     "<span class=\"mv good\">6.Ne5</span>: the pinned c6 knight is attacked twice and defended once.",
     "<span class=\"mv bad\">6…Bd6</span>? Black develops without taking care of c6.",
     "<span class=\"mv good\">7.Nxc6</span>: you take the knight, which could not move.",
     "<span class=\"mv bad\">7…bxc6</span>? Black takes back…",
     "<span class=\"mv good\">8.Bxc6+</span>: check, and the bishop attacks the a8 rook."
    ]
   },
   {
    "id": "q0d3cc30b4",
    "titre": "4…Bg4 5.h3 Bh5 ?? 6.g4",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "g6",
     "e3",
     "d6",
     "Nf3"
    ],
    "coups": [
     "Bg4",
     "h3",
     "Bh5",
     "g4"
    ],
    "legendes": [
     "The bishop pins your f3 knight.",
     "<span class=\"mv good\">5.h3</span> puts the question to the bishop.",
     "<span class=\"mv bad\">5…Bh5</span>?? The bishop keeps the pin…",
     "<span class=\"mv good\">6.g4</span>! The bishop is attacked, and its retreat square g6 is occupied by a black pawn."
    ]
   },
   {
    "id": "q1d83288e9",
    "titre": "The Englund Gambit: 1…e5",
    "debut": [
     "d4",
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "coups": [
     "Qb4+",
     "Bd2",
     "Qxb2",
     "Nc3"
    ],
    "legendes": [
     "Check: the queen also attacks b2.",
     "The bishop steps in between.",
     "The queen takes on b2 and threatens the a1 rook.",
     "<span class=\"mv good\">6.Nc3</span>: the knight leaves b1, your queen on d1 defends the a1 rook."
    ]
   },
   {
    "id": "q88a9da934",
    "titre": "5…Qb6 6.Qb3",
    "debut": [
     "d4",
     "d5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3",
     "c5",
     "c3"
    ],
    "coups": [
     "Qb6",
     "Qb3",
     "c4",
     "Qc2"
    ],
    "legendes": [
     "The queen attacks b2, which your c1 bishop no longer defends.",
     "<span class=\"mv good\">6.Qb3</span>: you defend b2 and offer a trade. If …Qxb3, axb3 and your a1 rook wins the a-file.",
     "Black declines: the pawn chases your queen.",
     "<span class=\"mv good\">7.Qc2</span>: the queen retreats. From c2, she still defends b2 and eyes e4 and h7."
    ]
   },
   {
    "id": "q6dc2f04c8",
    "titre": "3…b6 4.Nf3 c5 5.Nc3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4",
     "e6",
     "e3",
     "b6",
     "Nf3"
    ],
    "coups": [
     "c5",
     "Nc3",
     "Bb7",
     "Nb5"
    ],
    "legendes": [
     "Black attacks d4.",
     "<span class=\"mv good\">5.Nc3</span> rather than c3: the knight wants to go to b5.",
     "The bishop comes out to b7.",
     "<span class=\"mv good\">6.Nb5</span>: together with your f4 bishop, the knight eyes c7 and d6."
    ]
   },
   {
    "id": "qe9130484e",
    "titre": "Exercise 1: the knight on b5",
    "debut": [],
    "coups": [
     "Nc7+",
     "Kf8"
    ],
    "legendes": [
     "Nc7+! With your f4 bishop behind it, the knight lands on c7: check to the king and an attack on the a8 rook. If …Qxc7, Bxc7 wins the queen.",
     "The king has to move: it also loses the right to castle."
    ],
    "fen": "rn1qk2r/pb1pbppp/1p2pn2/1Np5/3P1B2/4PN2/PPP2PPP/R2QKB1R w KQkq - 4 7"
   },
   {
    "id": "q011a642bf",
    "titre": "Exercise 2: the d6 bishop",
    "debut": [],
    "coups": [
     "Bxd6",
     "Nxd4"
    ],
    "legendes": [
     "Bxd6! The rule says “Bg3 against …Bd6”, but look at who defends d6: nobody. The queen on b6 cannot see it, her own c6 knight is in the way.",
     "Black saves what they can: the knight takes a pawn on d4."
    ],
    "fen": "r1b1k2r/pp3ppp/1qnbpn2/3p4/2pP1B2/2P1PN2/PPQN1PPP/R3KB1R w KQkq - 4 9"
   },
   {
    "id": "q22fbdb7e9",
    "titre": "Exercise 3: the queen on b3",
    "debut": [],
    "coups": [
     "Qxb7",
     "Nxe5"
    ],
    "legendes": [
     "Qxb7! Black's c8 bishop has gone to f5: nobody defends b7 any more. Your queen takes the pawn and attacks the c6 knight.",
     "Black trades off your e5 bishop."
    ],
    "fen": "r2q1rk1/ppp2p2/2nbpn1p/3pBbp1/3P4/1QP1PN2/PP1NBPPP/R3K2R w KQ - 4 10"
   },
   {
    "id": "qf46328b3e",
    "titre": "Exercise 4: the e5 knight and the f4 bishop",
    "debut": [],
    "coups": [
     "Ng6",
     "Qd8",
     "Nxf8",
     "Bxf8"
    ],
    "legendes": [
     "Ng6! The knight leaves e5: your f4 bishop now attacks the queen on c7 (a “discovered” attack). And the g6 knight attacks the f8 rook. If …hxg6, Bxc7 wins the queen.",
     "The queen escapes.",
     "Nxf8: you take the rook.",
     "The bishop takes back."
    ],
    "fen": "rnb2rk1/p1q1bppp/1p2pn2/3pN3/3P1B2/2PB4/PP1N1PPP/R2QK2R w KQ - 1 10"
   },
   {
    "id": "q5d5ad9e2a",
    "titre": "Exercise 5: after the e4 break",
    "debut": [],
    "coups": [
     "e5",
     "Bc7"
    ],
    "legendes": [
     "e5! The pawn attacks both the d6 bishop and the f6 knight: a pawn fork.",
     "The bishop escapes to c7."
    ],
    "fen": "r1bqr1k1/p4ppp/2nbpn2/1p1p4/2pPP3/2P2NB1/PPBN1PPP/R2QK2R w KQ - 1 11"
   },
   {
    "id": "q06143bd3a",
    "titre": "Exercise 6: the h-file",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Nxh7",
     "Qh5",
     "f6"
    ],
    "legendes": [
     "Bxh7+! The king cannot take: on h7, it would be in check from your h1 rook.",
     "The knight takes.",
     "Qh5! The queen attacks the h7 knight, with your h1 rook behind her: it is attacked twice and defended only once (by the king). Threat: Qxh7+.",
     "Black frees f7 for the king."
    ],
    "fen": "rnbq1rk1/pp3ppp/4pn2/2pp4/3P4/3BP1P1/PPPN1PP1/R2QK1NR w KQ - 0 8"
   },
   {
    "id": "q2cc8ebce8",
    "titre": "Exercise 7: the d3 bishop is attacked",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Qxh5+",
     "Kg8"
    ],
    "legendes": [
     "Bxh7+! Your bishop was attacked by the c4 pawn: instead of retreating, it sacrifices itself on h7 with check.",
     "The king takes.",
     "Qxh5+! The d1-h5 route has been open since your knight went to e5: your queen takes back the h5 knight with check.",
     "The king retreats."
    ],
    "fen": "r1bq1rk1/pp3ppp/2nbp3/3pN2n/2pP4/2PBP1B1/PP1N1PPP/R2QK2R w KQ - 0 10"
   },
   {
    "id": "q993eb619a",
    "titre": "Exercise 8: queen on f3, knight on e5",
    "debut": [],
    "coups": [
     "Bxh7+",
     "Kxh7",
     "Nxf7"
    ],
    "legendes": [
     "Bxh7+! The king is lured to h7: it no longer defends f7, which your e5 knight can take. The black rook, for its part, has left f8.",
     "The king takes.",
     "Nxf7! The knight takes a pawn and attacks the queen on d8 and the d6 bishop at the same time: a fork."
    ],
    "fen": "r2qr1k1/pb3ppp/1pnbpn2/2ppN3/3P4/2PBPQB1/PP1N1PPP/R3K2R w KQ - 4 11"
   },
   {
    "id": "qfb2f9d58b",
    "titre": "1…c5 2.d5",
    "debut": [
     "d4"
    ],
    "coups": [
     "c5",
     "d5",
     "e5",
     "e4"
    ],
    "legendes": [
     "Black attacks d4 with the c-pawn.",
     "Advance: your pawn cuts Black's camp in two.",
     "Black blocks the centre.",
     "Take space: e4. Stockfish: +1.3."
    ]
   },
   {
    "id": "q950711fb1",
    "titre": "1…e5 2.dxe5",
    "debut": [
     "d4"
    ],
    "coups": [
     "e5",
     "dxe5",
     "Nc6",
     "Nf3",
     "Qe7",
     "Bf4"
    ],
    "legendes": [
     "The Englund Gambit: a pawn offered.",
     "Take it.",
     "The knight attacks e5.",
     "Defend e5 while developing.",
     "The queen attacks e5 a second time.",
     "Your London bishop defends e5. Stockfish: +1.4."
    ]
   },
   {
    "id": "q5954cf962",
    "titre": "1…f5 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "f5",
     "Bf4",
     "Nf6",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "The Dutch: the f-pawn controls e4.",
     "Your system does not change: 2.Bf4.",
     "Black develops.",
     "e3.",
     "Black opens the f8 bishop.",
     "Nf3. Stockfish: +0.5."
    ]
   },
   {
    "id": "qf940f8435",
    "titre": "1…d6 2.Nf3",
    "debut": [
     "d4"
    ],
    "coups": [
     "d6",
     "Nf3",
     "Nf6",
     "Bf4"
    ],
    "legendes": [
     "Black prepares …e5.",
     "Nf3 discourages …e5: the knight controls the square.",
     "Black develops.",
     "And now the bishop comes out. Stockfish: +0.3."
    ]
   },
   {
    "id": "qed17f690b",
    "titre": "1…g6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "g6",
     "Bf4",
     "Bg7",
     "e3",
     "d6",
     "Nf3"
    ],
    "legendes": [
     "The fianchetto right away.",
     "2.Bf4: your system. Stockfish prefers 2.e4 (+0.7), which takes the whole centre, but 2.Bf4 is still sound.",
     "The g7 bishop aims down the long diagonal.",
     "e3.",
     "Black plays …d6.",
     "Nf3. Then h3, as against 1…Nf6 2.Bf4 g6. Stockfish: +0.1."
    ]
   },
   {
    "id": "q87abc3fb7",
    "titre": "1…c6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "c6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "Black prepares …d5.",
     "2.Bf4.",
     "We are back in 1…d5 2.Bf4 c6.",
     "e3. Stockfish: +0.5."
    ]
   },
   {
    "id": "q125d77b1f",
    "titre": "1…Nc6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "Nc6",
     "Bf4",
     "d5",
     "e3"
    ],
    "legendes": [
     "The knight comes out at once.",
     "2.Bf4.",
     "We are back in 1…d5 2.Bf4 Nc6.",
     "e3. Stockfish: +0.4."
    ]
   },
   {
    "id": "q680fd6f28",
    "titre": "1…b6 2.Bf4",
    "debut": [
     "d4"
    ],
    "coups": [
     "b6",
     "Bf4",
     "Bb7",
     "e3"
    ],
    "legendes": [
     "Black prepares …Bb7.",
     "2.Bf4: your system. Stockfish prefers 2.e4 (+0.9), which takes the whole centre, but 2.Bf4 is still sound.",
     "The b7 bishop aims at e4.",
     "e3. Stockfish: +0.2."
    ]
   },
   {
    "id": "q672730985",
    "titre": "2…c5 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3",
     "Nc6",
     "c3"
    ],
    "legendes": [
     "Black attacks d4 right away.",
     "e3 supports d4.",
     "A second attacker on d4.",
     "c3: the pyramid. Equal (Stockfish: 0.0)."
    ]
   },
   {
    "id": "q20e455291",
    "titre": "2…Bf5 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "Bf5",
     "e3",
     "e6",
     "Nf3"
    ],
    "legendes": [
     "Black copies your idea: their bishop comes out before …e6.",
     "e3.",
     "Black opens the f8 bishop.",
     "Nf3. Stockfish: +0.1."
    ]
   },
   {
    "id": "q15e091780",
    "titre": "2…c6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "c6",
     "e3",
     "Bf5",
     "Nf3"
    ],
    "legendes": [
     "Black supports d5 with the c-pawn.",
     "e3.",
     "The bishop comes out.",
     "Nf3. Stockfish: +0.3."
    ]
   },
   {
    "id": "qa745f549f",
    "titre": "2…g6 3.e3",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "g6",
     "e3",
     "Bg7",
     "Nf3"
    ],
    "legendes": [
     "The fianchetto.",
     "e3.",
     "The g7 bishop aims at d4.",
     "Nf3, then h3. Stockfish: +0.3."
    ]
   },
   {
    "id": "q6a66a1d17",
    "titre": "2…e5 3.Bxe5",
    "debut": [
     "d4",
     "d5",
     "Bf4"
    ],
    "coups": [
     "e5",
     "Bxe5"
    ],
    "legendes": [
     "A pawn offered.",
     "Your bishop takes it. Stockfish: +1.0."
    ]
   },
   {
    "id": "q12bcb6075",
    "titre": "1…Nf6 2.Bf4 c5 3.e3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "c5",
     "e3"
    ],
    "legendes": [
     "Black attacks d4.",
     "e3 supports d4. Stockfish: +0.1."
    ]
   },
   {
    "id": "qfd8b7fc98",
    "titre": "1…Nf6 2.Bf4 d6 3.e3",
    "debut": [
     "d4",
     "Nf6",
     "Bf4"
    ],
    "coups": [
     "d6",
     "e3"
    ],
    "legendes": [
     "Black prepares …e5.",
     "e3, then Nf3 and h3. Stockfish: +0.1."
    ]
   }
  ]
 },
 {
  "id": "francaise",
  "titre": "The French Defence",
  "camp": "b",
  "rep": "rep-francaise",
  "sous": "Your Black repertoire against 1.e4: 1…e6, 2…d5, then …c5. {{positions}} to know, {{lignes}}.",
  "chapeau": "<p>The French is a patient defence. You let White gain space in the centre, then you attack the base of their pawns with …c5. Your e6 and d5 pawns form a solid wall; your only real worry is the c8 bishop, shut in behind e6.</p><p>The lesson follows the tree of your repertoire, family by family, then explains the ideas, the traps and the exceptions. Each animated sequence has its Quiz button; all the quizzes are also in Training, under “Opening quizzes”. The links underlined with dots show the position being discussed.</p>",
  "sections": [
   {
    "id": "explication",
    "titre": "The repertoire explained",
    "blocs": [
     {
      "t": "p",
      "html": "Your Black repertoire against 1.e4 comes down to three moves: <span class=\"mv\">1…e6</span>, <span class=\"mv\">2…d5</span>, then <span class=\"mv\">…c5</span> as soon as White closes the centre. You let White gain space, then you attack the base of their pawns."
     },
     {
      "t": "cle",
      "html": "<strong>How to read the numbers.</strong> The evaluations are Stockfish's, from White's point of view, as everywhere in the app: +0.4 means White is a little better, −0.4 that you are. Between −0.5 and +0.5, the game is balanced."
     },
     {
      "t": "p",
      "html": "What White plays between 1000 and 1600 on Lichess (blitz and rapid games) decides the family. The boards are seen from your side. Green arrow: your move; grey arrow: your opponent's."
     },
     {
      "t": "table",
      "entetes": [
       "After",
       "White plays",
       "Frequency",
       "What it is"
      ],
      "lignes": [
       [
        "1.e4 e6",
        "2.d4",
        "36%",
        "The classical French"
       ],
       [
        "1.e4 e6",
        "2.Nf3",
        "35%",
        "Often a transposition"
       ],
       [
        "1.e4 e6",
        "2.Bc4",
        "7%",
        "The bishop gets chased by …d5"
       ],
       [
        "2.d4 d5",
        "3.e5",
        "52%",
        "The Advance Variation"
       ],
       [
        "2.d4 d5",
        "3.exd5",
        "26%",
        "The Exchange Variation"
       ],
       [
        "2.d4 d5",
        "3.Nc3",
        "15%",
        "The Classical Variation"
       ]
      ]
     },
     {
      "t": "h",
      "html": "1. The Advance: 3.e5"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "legendes": [
       "White advances and closes the centre. Their d4-e5 pawn chain gains space… but every chain has a base. Here, it is d4.",
       "You attack the base right away: <span class=\"mv good\">3…c5</span>. It is THE move of the French. Without it, you suffocate.",
       "White supports d4 with the c-pawn (50%). After <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Nf3</a>, same reply.",
       "A second attacker on d4. No …Nf6 in this variation: the e5 pawn would take your knight (see the exceptions).",
       "White defends d4 a third time. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Bb5</a> and <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Be3</a>.",
       "<span class=\"mv good\">5…Qb6</span>: your queen gets ready to hit d4 and already eyes the b2 pawn."
      ],
      "fin": "Count on d4: the c5 pawn and the c6 knight attack it; the queen on b6 will come into play after …cxd4. White defends it with c3, the f3 knight and the queen.",
      "titre": "Advance: the main line",
      "quiz": [
       "q76e351bbd",
       "qcf913e84e",
       "qc30bc31e9",
       "q718425163"
      ],
      "marques": [
       [
        "e5",
        "d4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3",
        "c3",
        "d1",
        "d4!"
       ],
       [
        "b6",
        "d4!",
        "b2!"
       ],
       [
        "d4!",
        "c5",
        "c6",
        "b6"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Your plan next: …Bd7, …cxd4, then a knight to f5 (via e7 or h6) to attack d4 once more. Against <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Bb5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Be3</a>, also play 5…Qb6 (against 5.Bb5, 5…Qa5 is also played). If White plays <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Nf3</a> instead of 4.c3: 4…Nc6, then 5…Qb6 against <a class=\"lien-var\" href=\"#\" data-var=\"q0eca7d64b\">5.Bb5</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q7a0026f6b\">5.c3</a>, and 5…cxd4 against <a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5.Be3</a>."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5"
      ],
      "coups": [
       "dxc5",
       "Bxc5",
       "Nf3",
       "Nc6"
      ],
      "legendes": [
       "White takes on c5 (5% of games): they give up the base of their chain.",
       "Take back at once with the bishop: it develops onto a fine diagonal, aiming at f2.",
       "White defends e5. Against <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Nc3</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Bb5+</a>, same reply.",
       "You attack e5 in turn. Then …f6 or …Qc7."
      ],
      "fin": "Stockfish already leans slightly your way (−0.2). Without the d4 pawn, the e5 pawn is no longer supported by a pawn: it is a target. Against <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Nc3</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Bb5+</a>, also play 5…Nc6.",
      "titre": "4.dxc5: the bishop takes back",
      "quiz": [
       "q643c602b3",
       "q6f71ee263",
       "q5c03a7d7d"
      ],
      "marques": [
       [
        "c5!"
       ],
       [
        "c5",
        "f2!"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c6",
        "e5!"
       ],
       [
        "e5!",
        "c6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. The Exchange: 3.exd5 exd5"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "exd5",
       "exd5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6"
      ],
      "legendes": [
       "White trades. The position becomes symmetrical and calm.",
       "Take back with the pawn. Good news: the c8-h3 diagonal opens, your c8 bishop is no longer shut in.",
       "Development.",
       "The same for you.",
       "The white bishop aims at h7. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Nc3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Bg5</a>.",
       "You do the same: <span class=\"mv\">5…Bd6</span> aims at h2. Then <span class=\"mv\">…O-O</span>, <span class=\"mv\">…Re8</span> on the open file, <span class=\"mv\">…Bg4</span>."
      ],
      "fin": "A balanced position (+0.2) and easy to play: you develop in mirror image. Against <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Nc3</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q1deb7307e\">5.Bf4</a>, also play 5…Bd6. Against <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Bg5</a>, your repertoire plays 5…Be7. Here, …Bd6 would also work, but with a white knight on c3 it would lose a pawn (next sequence): keep a single reflex, Be7 against Bg5.",
      "titre": "Exchange: the main line",
      "quiz": [
       "qb2ed36575",
       "qc8d612ba1",
       "q3656d1200",
       "q1deb7307e"
      ],
      "marques": [
       [],
       [
        "c8",
        "h3"
       ],
       [],
       [],
       [
        "d3",
        "h7!"
       ],
       [
        "d6",
        "h2!"
       ],
       [
        "d6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nc3",
       "Nf6"
      ],
      "coups": [
       "Bg5",
       "Be7"
      ],
      "legendes": [
       "The bishop pins your f6 knight to your queen. The d5 pawn is attacked by the c3 knight, and defended by your knight and your queen.",
       "<span class=\"mv good\">5…Be7</span> unpins the knight, and your queen keeps the d-file towards d5. After <a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Bd6?</a>, the bishop cuts your queen off from d5: only the pinned knight is left, and 6.Nxd5! wins a pawn (+1.7). If 6…Nxd5, 7.Bxd8."
      ],
      "fin": "The Exchange rule: you play Bd6, except against Bg5, where you play Be7. Against <a class=\"lien-var\" href=\"#\" data-var=\"q1deb7307e\">5.Bf4</a>, it is …Bd6 indeed.",
      "titre": "5.Bg5: why Be7",
      "quiz": [
       "q2ae34efee",
       "q1deb7307e"
      ],
      "marques": [
       [
        "f6!",
        "d8",
        "d5!",
        "c3"
       ],
       [
        "e7",
        "f6",
        "d8",
        "d5!"
       ],
       [
        "e7",
        "g5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Qe2+",
       "Be7",
       "Nf3",
       "Nf6"
      ],
      "legendes": [
       "Queen check (10%).",
       "Block with the bishop while developing. Stockfish already finds this position better for you (−0.4): the white queen blocks the way out for its own f1 bishop.",
       "White develops. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Nc3</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Bg5</a>.",
       "Develop your knight."
      ],
      "fin": "Against <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Nc3</a>, same reply: 5…Nf6. Against <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Bg5</a>, bring out the other knight: 5…Nc6 (see the exceptions).",
      "titre": "4.Qe2+: block with the bishop",
      "quiz": [
       "q98712d8c3",
       "qda61c904f",
       "qa8ce55619"
      ],
      "marques": [
       [
        "e2",
        "e8!"
       ],
       [
        "e7",
        "e2",
        "f1"
       ],
       [],
       [],
       [
        "f6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. The Classical: 3.Nc3 Nf6"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5"
      ],
      "legendes": [
       "White defends e4 with the knight.",
       "You attack e4 a second time.",
       "White pushes and chases your knight (58%). Your knight has to go back.",
       "It goes back to d7, and that is the right square: Stockfish clearly prefers it to …Ne4 or …Ng8 (+0.4 against +0.9 and +1.0). From d7, it supports …c5 and will be able to attack e5.",
       "White supports e5 and d4.",
       "And here is the French move: <span class=\"mv good\">5…c5</span>, you hit d4. Same reply against <a class=\"lien-var\" href=\"#\" data-var=\"q722e2d9e8\">5.f4</a> and against <a class=\"lien-var\" href=\"#\" data-var=\"qcdc3eef57\">5.Bb5</a>."
      ],
      "fin": "Then …Nc6 and …Qb6: the same pressure on d4 as in the Advance. The d7 knight can also take back on e5 if the pawn loses its defenders, or support …f6. Against <a class=\"lien-var\" href=\"#\" data-var=\"q22d07b5f2\">4.exd5</a>, take back with the pawn: it is the Exchange Variation.",
      "titre": "4.e5: the knight goes back to d7",
      "quiz": [
       "q3cb05ee94",
       "q722e2d9e8",
       "qcdc3eef57",
       "q22d07b5f2"
      ],
      "marques": [
       [
        "c3",
        "e4!"
       ],
       [
        "f6",
        "d5",
        "e4!"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "f3",
        "e5",
        "d4"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c5",
        "d4!",
        "d7",
        "e5!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6"
      ],
      "coups": [
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7"
      ],
      "legendes": [
       "White pins your f6 knight.",
       "<span class=\"mv good\">4…dxe4</span>: you trade your d5 pawn for e4. The f6 knight no longer has a d5 pawn to defend.",
       "White takes back (65%).",
       "You unpin. Careful: your f6 knight now attacks the e4 knight, which nothing defends."
      ],
      "fin": "If White plays any old move, such as <a class=\"lien-var\" href=\"#\" data-var=\"q0b8f474f7\">6.Nf3??</a>, 6…Nxe4! wins a piece (−4.1). The right continuation for them: <a class=\"lien-var\" href=\"#\" data-var=\"q7cbbdd8af\">6.Bxf6 Bxf6 7.Nf3</a>, a balanced position (+0.5).",
      "titre": "4.Bg5: the Burn Variation",
      "quiz": [
       "q5dd86a571",
       "q0b8f474f7",
       "q7cbbdd8af"
      ],
      "marques": [
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "e4!",
        "f6"
       ],
       [
        "e4!"
       ],
       [
        "e7",
        "f6",
        "e4!"
       ],
       [
        "f6",
        "e4!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4"
      ],
      "coups": [
       "Bxf6",
       "gxf6",
       "Nxe4",
       "f5"
      ],
      "legendes": [
       "White takes your knight at once (23%).",
       "<span class=\"mv good\">5…gxf6</span>! Take back with the g-pawn, not with the queen. The doubled pawns do not bother you: you gain the g-file for your rook, and the bishop pair.",
       "White takes their pawn back.",
       "The f-pawn chases the knight: you gain a tempo."
      ],
      "fin": "Stockfish: −0.6, you are the one who is better. After <a class=\"lien-var\" href=\"#\" data-var=\"q5474b2037\">5…Qxf6</a> 6.Nxe4, it is your queen that gets attacked: +0.2 for White. Against <a class=\"lien-var\" href=\"#\" data-var=\"q7a0932fc1\">5.f3</a>, play 5…c5.",
      "titre": "5.Bxf6: take back with the pawn",
      "quiz": [
       "q1030cfc72",
       "q7a0932fc1"
      ],
      "marques": [
       [
        "f6!"
       ],
       [
        "f6!",
        "h8",
        "c8",
        "f8"
       ],
       [
        "e4!"
       ],
       [
        "f5",
        "e4!"
       ],
       [
        "f5",
        "e4!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "4. Against 2.Nf3"
     },
     {
      "t": "p",
      "html": "2.Nf3 is played almost as often as 2.d4 between 1000 and 1600 Elo (35%). Your reply does not change: 2…d5. White often plays d4 a little later, and we are back in the lines above."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Nf3"
      ],
      "coups": [
       "d5",
       "e5",
       "c5",
       "Bb5+",
       "Bd7",
       "Bxd7+",
       "Nxd7"
      ],
      "legendes": [
       "Always the same move.",
       "The Advance, but without a pawn on d4. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Nc3 Nf6 4.e5 Nfd7</a>.",
       "You gain space on the queenside, as usual.",
       "Check.",
       "<span class=\"mv good\">4…Bd7</span>: you offer to trade your c8 bishop, the one shut in by e6. Much better than 4…Nc6 (−0.4 against +0.4).",
       "White trades (65%).",
       "Take back with the knight: Stockfish prefers it to the queen."
      ],
      "fin": "Your problem bishop has gone, and you are already a little better (−0.4).",
      "titre": "3.e5 c5 4.Bb5+",
      "quiz": [
       "q24100b877",
       "q0186a3787",
       "q6e0727167"
      ],
      "marques": [
       [],
       [
        "e5",
        "d4"
       ],
       [],
       [
        "b5",
        "e8!"
       ],
       [
        "d7",
        "b5",
        "e6"
       ],
       [],
       [],
       []
      ]
     },
     {
      "t": "p",
      "html": "The other continuations. Against <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a>: play as in the Exchange (…Nf6, …Bd6). Against <a class=\"lien-var\" href=\"#\" data-var=\"q60db66247\">4.Qe2+</a>, block with 4…Be7; if the queen carries on with 5.Qb5+, 5…c6 attacks her and she has to move again (−0.7). Against <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Nc3 Nf6 4.e5 Nfd7</a>: 5…c5, as in the Classical. Against <a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">4.d3</a>: 4…c5, and after 5.Bg5, 5…d4! chases the c3 knight (−0.7)."
     },
     {
      "t": "h",
      "html": "5. Against 2.Bc4"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Bc4"
      ],
      "coups": [
       "d5",
       "exd5",
       "exd5",
       "Bb3",
       "Nf6",
       "Nf3",
       "Bd6"
      ],
      "legendes": [
       "<span class=\"mv good\">2…d5</span>! The pawn attacks the c4 bishop and the e4 pawn at the same time.",
       "White trades (93%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Bb3</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Bb5+</a>.",
       "Take back with the pawn: the c4 bishop is attacked again.",
       "It retreats. The others: <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Bb5+</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.Qe2+</a>.",
       "Normal development.",
       "White too.",
       "Then …O-O and …Re8. The white bishop has already moved twice for nothing."
      ],
      "fin": "Stockfish: −0.2. After 2.Bc4, you are the one with the easier position. Against <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Bb5+</a>, play 4…c6 to chase the bishop again; against <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.Qe2+</a>, play 4…Be7. If White retreats at once (<a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Bb3</a>), take the pawn: 3…dxe4, it is free (−0.8). Against <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Bb5+</a>, play 3…c6.",
      "titre": "2.Bc4 d5: the bishop gets chased",
      "quiz": [
       "q221770c6e",
       "qff3738e44",
       "qdeba3c71f",
       "q480cdffa7",
       "q6fcf7f369"
      ],
      "marques": [
       [
        "d5",
        "c4!",
        "e4!"
       ],
       [],
       [
        "d5",
        "c4!"
       ],
       [],
       [],
       [],
       [
        "b3"
       ],
       []
      ]
     },
     {
      "t": "cle",
      "html": "<strong>Transpositions.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"q126ae3a42\">2.Nf3 d5 3.exd5 exd5 4.d4</a> is the Exchange; <a class=\"lien-var\" href=\"#\" data-var=\"q5e67e8b12\">2.Nf3 d5 3.e5 c5 4.d4 Nc6</a> is the Advance. The app knows it: a position already seen elsewhere is asked only once in training."
     }
    ]
   },
   {
    "id": "par-coeur",
    "titre": "What to know by heart",
    "blocs": [
     {
      "t": "p",
      "html": "The whole repertoire, read from your data: if you change it in the editor, the tree follows. There are {{positions}} where it is up to you to find the move. They look very much alike: a handful of ideas is enough to find them. In the table, click a move to see it on the board; each move is also a quiz."
     },
     {
      "t": "h",
      "html": "The decisions to know"
     },
     {
      "t": "table",
      "entetes": [
       "Position",
       "White plays",
       "You play",
       "Why"
      ],
      "lignes": [
       [
        "1.e4",
        "—",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qf2e5104df\">1…e6</a>",
        "Prepares …d5"
       ],
       [
        "1.e4 e6",
        "2.d4, 2.Nf3, 2.Bc4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qeb95eb4e9\">2…d5</a>",
        "Always"
       ],
       [
        "Advance",
        "3.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q905fad9b4\">3…c5</a>",
        "Attacks the base d4"
       ],
       [
        "",
        "4.c3 or 4.Nf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qadd44dab6\">4…Nc6</a>",
        "Second attacker of d4"
       ],
       [
        "",
        "4.dxc5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1b98798b2\">4…Bxc5</a>",
        "Take back while developing"
       ],
       [
        "",
        "5.Nf3, 5.Bb5, 5.Be3 (after 4.c3)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9b99194ae\">5…Qb6</a>",
        "d4 and b2"
       ],
       [
        "4.Nf3 Nc6",
        "5.Be3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5…cxd4</a>",
        "If 6.Nxd4?, …Nxe5"
       ],
       [
        "Exchange",
        "3.exd5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q25043273e\">3…exd5</a>",
        "Frees the c8 bishop"
       ],
       [
        "",
        "4.Nf3 or 4.Nc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q07b1c55f5\">4…Nf6</a>",
        "Development"
       ],
       [
        "",
        "4.Qe2+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qd2213b49e\">4…Be7</a>",
        "Block while developing"
       ],
       [
        "Exchange, move 5",
        "Nc3, Bd3, Nf3, Bf4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qe69740756\">5…Bd6</a>",
        "In mirror image"
       ],
       [
        "",
        "5.Bg5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5…Be7</a>",
        "Unpins, d5 stays defended"
       ],
       [
        "Classical",
        "3.Nc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q22d1b3b29\">3…Nf6</a>",
        "Attacks e4"
       ],
       [
        "",
        "4.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qdac19d728\">4…Nfd7 then 5…c5</a>",
        "The knight goes back, c5 strikes"
       ],
       [
        "",
        "4.Bg5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9d338c178\">4…dxe4</a>",
        "Burn Variation"
       ],
       [
        "Burn",
        "5.Nxe4 / 5.Bxf6 / 5.f3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q9ccab60f9\">5…Be7</a> / <a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a> / <a class=\"lien-var\" href=\"#\" data-var=\"q7a0932fc1\">5…c5</a>",
        "See the explanation"
       ],
       [
        "2.Nf3 d5 3.e5 c5",
        "4.Bb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Bd7</a>",
        "Trade off your bad bishop"
       ],
       [
        "2.Nf3 d5 3.Nc3 Nf6",
        "4.d3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">4…c5</a>",
        "Space, then …d4 against Bg5"
       ],
       [
        "2.Bc4 d5",
        "3.exd5 / 3.Bb3 / 3.Bb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4c0712b27\">3…exd5</a> / <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3…dxe4</a> / <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3…c6</a>",
        "The bishop gets chased"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The full tree"
     },
     {
      "t": "lignes",
      "debut": []
     },
     {
      "t": "cle",
      "html": "<strong>Three reflexes cover almost everything.</strong> …d5 on the second move, always. Against e5: …c5, then …Nc6 and …Qb6. Against the Exchange: develop in mirror image (…Nf6, …Bd6, …O-O), but …Be7 against Bg5 and against Qe2+."
     }
    ]
   },
   {
    "id": "philosophie",
    "titre": "The ideas",
    "blocs": [
     {
      "t": "h",
      "html": "Attacking the base of the chain"
     },
     {
      "t": "p",
      "html": "After 3.e5, White's d4 and e5 pawns form a chain pointing at your king. A pawn chain is defended from behind: the e5 pawn is protected by d4. If d4 falls or gets traded, e5 becomes fragile. That is why you attack the base, d4, and not the head."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5"
      ],
      "fleches": [
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "White's d4-e5 chain. Its base, d4, is the target: …c5 right away. Later, …f6 will also be able to attack the head, e5.",
      "marques": [
       "d4!",
       "e5",
       "c7",
       "f7"
      ]
     },
     {
      "t": "h",
      "html": "Counting the attackers"
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "fleches": [
       [
        "c5d4",
        "v"
       ],
       [
        "c6d4",
        "v"
       ],
       [
        "b6b2",
        "v"
       ]
      ],
      "legende": "The c5 pawn and the c6 knight attack d4. The queen on b6 eyes b2; as soon as the c5 pawn has taken on d4, she will also hit d4 along the b6-d4 diagonal.",
      "marques": [
       "c5",
       "c6",
       "d4!",
       "b6"
      ]
     },
     {
      "t": "p",
      "html": "In the Advance, the whole game revolves around d4. Before every move, count: how many of my pieces attack d4, how many white pieces defend it? If you have one attacker more, it falls. Beware of one exception, the most famous in the French: the Bb5+ trap (see The traps) and its antidote, <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Bd7!</a>"
     },
     {
      "t": "h",
      "html": "Your problem: the c8 bishop"
     },
     {
      "t": "p",
      "html": "The e6 pawn shuts in your light-squared bishop. It is the price of the French's solidity. Three ways to deal with the problem from the opening (the middlegame adds others):"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Trade it off.</strong> Against Bb5+, block with …Bd7 (<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Bd7</a>): if White takes, your bad bishop disappears.",
       "<strong>Bring it out via d7.</strong> In the Advance, …Bd7 clears the c8 square for your rook (…Rc8) and sometimes prepares …Bb5 to trade it off.",
       "<strong>Make the most of the Exchange.</strong> After 3.exd5 exd5, the c8-h3 diagonal opens: your bishop becomes a good bishop (…Bg4, …Bf5)."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "The knight that goes back to d7"
     },
     {
      "t": "p",
      "html": "In the Classical, 4.e5 chases your f6 knight. Going back to d7 looks like a retreat, but it is an active square: from there, the knight supports …c5, can go to b6, or come back to e5 when the white pawn falls. What matters is the next move: …c5, which attacks the base of the chain. The d7 knight and the c5 pawn work together."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3"
      ],
      "fleches": [
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "After 4…Nfd7, the plan: …c5 (green arrow) against d4. Your d7 knight is already watching e5: if d4 disappears, e5 falls.",
      "marques": [
       "d4!",
       "d7",
       "e5!"
      ]
     },
     {
      "t": "h",
      "html": "The Exchange: playing in mirror image"
     },
     {
      "t": "p",
      "html": "After 3.exd5 exd5, the pawns are symmetrical and nobody has an advantage. Develop exactly like White: knights, bishop on d6, castling, a rook on e8 on the open file. Your c8 bishop is free: …Bg4 often pins the f3 knight. The only trap to know: when a white bishop arrives on g5, your bishop goes to e7, not d6 (<a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Bd6?</a>)."
     },
     {
      "t": "h",
      "html": "Castling"
     },
     {
      "t": "p",
      "html": "In most lines, you castle kingside after …Be7 or …Bd6. In the Advance, do not hurry: your play is on the queenside, and your king can wait a little in the centre as long as the centre stays closed."
     }
    ]
   },
   {
    "id": "forces",
    "titre": "Strengths and weaknesses",
    "blocs": [
     {
      "t": "p",
      "html": "Before the middlegame, take stock: what the French gives you, what it costs you, and what White will try against you."
     },
     {
      "t": "h",
      "html": "What the French gives you"
     },
     {
      "t": "liste",
      "items": [
       "<strong>A solid position.</strong> Your e6 and d5 pawns form a wall. The f7 point, beginners' favourite target, is safe: your e6 pawn blocks the c4-f7 diagonal, the one of Scholar's Mate.",
       "<strong>A clear plan.</strong> When White pushes e5, their d4 and e5 pawns form a <em>chain</em>: pawns on a diagonal protecting each other. You attack its base, d4, with …c5, …Nc6 and …Qb6. The same plan works in the Advance and in the Classical with 4.e5.",
       "<strong>Play on the queenside.</strong> After …cxd4, the c-file opens for your rook, and your queen on b6 eyes b2 and d4.",
       "<strong>Opponents who overdo it.</strong> Among club players, White pushes e5, then attacks your king without finishing their development. The d4 pawn often falls, and their attacks do not always work.",
       "<strong>Little theory.</strong> Three reflexes (…d5, …c5, developing in mirror image in the Exchange) cover almost everything."
      ]
     },
     {
      "t": "h",
      "html": "Its weak points"
     },
     {
      "t": "liste",
      "items": [
       "<strong>The bad c8 bishop.</strong> A bishop is “bad” when your own pawns block its diagonals. Your c8 bishop travels on the light squares, and your e6 and d5 pawns are on light squares: it is shut in.",
       "<strong>Less space.</strong> With a pawn on e5, White controls f6 and d6. Your g8 knight cannot go to f6, and your king has one defender fewer.",
       "<strong>Attacks on your castled king.</strong> The e5 pawn chases the knight that would defend your king from f6. White's pieces then aim at h7 and g7.",
       "<strong>You have to act.</strong> If you forget …c5, you have no plan left, and White smothers you."
      ]
     },
     {
      "t": "h",
      "html": "What White is after"
     },
     {
      "t": "p",
      "html": "Two ideas, often at the same time: keeping the e5 pawn, which gives them space, and attacking your king."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Space with e5.</strong> They support e5 with Nf3, f4 or Be3, and d4 with c3.",
       "<strong>The d3 bishop towards h7.</strong> On d3, the bishop aims at your h7 pawn. If there is no knight on f6 any more, only your king defends h7.",
       "<strong>The queen on g4 or h5.</strong> Qg4 attacks g7, Qh5 aims at h7.",
       "<strong>The h4-h5 push</strong> and a knight on g5 to strengthen the attack.",
       "<strong>The Bxh7+ sacrifice</strong>, the “Greek gift”: the bishop sacrifices itself on h7, the knight jumps to g5 with check, the queen arrives on h5. It works when your king has castled, nothing but the king defends h7, and none of your bishops or knights guards g5."
      ]
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3"
      ],
      "fleches": [
       [
        "d3h7",
        "g"
       ],
       [
        "f3g5",
        "g"
       ],
       [
        "d1h5",
        "g"
       ],
       [
        "e5f6",
        "r"
       ]
      ],
      "legende": "Classical after 4.e5 Nfd7 5.Nf3 c5 6.dxc5 Nc6 7.Bf4 Bxc5 8.Bd3. Everything is ready for an attack: the d3 bishop aims at h7, the f3 knight can jump to g5, the queen can come to h5 as soon as the f3 knight has moved, and the e5 pawn denies f6 to your knights. Your bishop is on c5: only your queen guards g5, and the f4 bishop protects the square.",
      "marques": [
       "d3",
       "f3",
       "h7!",
       "c5"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3"
      ],
      "coups": [
       "O-O",
       "Bxh7+",
       "Kxh7",
       "Ng5+",
       "Kg8",
       "Qh5"
      ],
      "legendes": [
       "<span class=\"mv bad\">8…O-O</span>? You put your king to safety… exactly where White is attacking. Before this move, the position was equal.",
       "The Greek gift: the bishop sacrifices itself on h7.",
       "You take. Declining with 9…Kh8 limits the damage, but White keeps an extra pawn and the attack (+1.9).",
       "The knight jumps to g5 with check: only your queen guards g5, and the f4 bishop protects the knight.",
       "The king retreats. 10…Kg6 holds out a little better (+2.1 instead of +3.1), but your king stays out in the open.",
       "The queen arrives on h5 and threatens Qh7 mate."
      ],
      "fin": "To avoid mate, you have to give up your queen: 11…Qxg5 12.Qxg5, and Stockfish gives +3.2. If 11…Re8, it is mate in five (12.Qxf7+ Kh8 13.Qh5+ Kg8 14.Qh7+ Kf8 15.Qh8+ Ke7 16.Qxg7#).",
      "titre": "What White is after: the Greek gift",
      "couleurs": [
       "r",
       "g",
       "g",
       "g",
       "g",
       "g"
      ],
      "quiz": [],
      "marques": [
       [
        "g8",
        "d3",
        "h7!"
       ],
       [
        "h7!",
        "g8"
       ],
       [
        "h7!"
       ],
       [
        "g5",
        "d8",
        "f4",
        "h7!"
       ],
       [
        "g8!"
       ],
       [
        "h5",
        "g5",
        "h7!"
       ],
       [
        "d8!",
        "g5",
        "h5",
        "f7!"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Before castling, look at the d3 bishop, the g5 square and the queen. Here, you first had to play …h6, …a6 or …Be7 (the bishop then guards g5): the position stayed equal."
     },
     {
      "t": "h",
      "html": "Typical mistakes among club players"
     },
     {
      "t": "p",
      "html": "They come up in many games between 1000 and 1600. Click a move to see the position; the right move is also a quiz."
     },
     {
      "t": "liste",
      "items": [
       "<strong>Bringing the knight out to f6 against the Advance.</strong> After 3.e5, <a class=\"lien-var\" href=\"#\" data-var=\"q3b8890834\">3…Nf6??</a> loses a piece: the e5 pawn controls f6. The reflex is <a class=\"lien-var\" href=\"#\" data-var=\"q905fad9b4\">3…c5</a>, then …Nc6; your g8 knight will come out via e7 or h6.",
       "<strong>Taking on d4 too early with the knight.</strong> In the Advance with Bd3, <a class=\"lien-var\" href=\"#\" data-var=\"q05ab1a36a\">7…Nxd4??</a> falls into the Bb5+ trap. Play …Bd7 first: <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Bd7!</a>.",
       "<strong>Forgetting g7 against Qg4.</strong> After 4.dxc5 Bxc5 5.Qg4, <a class=\"lien-var\" href=\"#\" data-var=\"qf6a0cad58\">5…Nc6??</a> loses the g7 pawn and at least a piece. The right move: <a class=\"lien-var\" href=\"#\" data-var=\"q0644bbae2\">5…Ne7</a>, which lets your rook defend the g-file.",
       "<strong>Castling without a defender.</strong> When the e5 pawn has chased your knight from f6, <a class=\"lien-var\" href=\"#\" data-var=\"qfbac92fb5\">8…O-O?</a> invites the Greek gift (board above). Before castling, make sure a bishop or a knight guards g5 (your bishop on e7, for example).",
       "<strong>Taking back with the queen in the Burn.</strong> After 4.Bg5 dxe4 5.Bxf6, <a class=\"lien-var\" href=\"#\" data-var=\"q5474b2037\">5…Qxf6</a> makes your queen lose time. Take back with the pawn: <a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a>.",
       "<strong>Leaving the c8 bishop shut in.</strong> Against Bb5+, <a class=\"lien-var\" href=\"#\" data-var=\"qb0a601108\">4…Nc6?!</a> keeps your bad bishop. Block with the bishop instead: <a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Bd7</a>, to trade it off."
      ]
     }
    ]
   },
   {
    "id": "milieu",
    "titre": "The middlegame",
    "blocs": [
     {
      "t": "p",
      "html": "Your repertoire leads to three families of positions. For each one, what matters is the <em>pawn structure</em>: the shape the pawns make, which hardly moves and decides the plans. A <em>pawn break</em> is a pawn move that attacks the enemy pawns to open the game where you are strong."
     },
     {
      "t": "h",
      "html": "1. The Advance: everything happens on d4"
     },
     {
      "t": "p",
      "html": "White's d4-e5 pawns take space from you. Their base, d4, is the target. After …cxd4 cxd4, no pawn protects d4 any more: only pieces defend it. Your job: bring more attackers than White has defenders."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Be2",
       "cxd4",
       "cxd4",
       "Nge7"
      ],
      "fleches": [
       [
        "e7f5",
        "v"
       ],
       [
        "c6d4",
        "v"
       ],
       [
        "b6d4",
        "v"
       ]
      ],
      "legende": "After 6.Be2 cxd4 7.cxd4 Nge7. The e7 knight will go to f5: three attackers on d4 (the c6 and f5 knights, the queen on b6) against two defenders, the f3 knight and the queen on d1.",
      "marques": [
       "d4!",
       "e7",
       "c6",
       "b6"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Be2"
      ],
      "coups": [
       "cxd4",
       "cxd4",
       "Nge7",
       "O-O",
       "Nf5",
       "Nc3",
       "Nfxd4",
       "Nxd4",
       "Qxd4"
      ],
      "legendes": [
       "You take on d4. Once the c3 pawn has taken back, no pawn will support d4 any more.",
       "White takes back.",
       "The g8 knight sets off for f5 (…Nh6 then …Nf5 is also played).",
       "<span class=\"mv bad\">8.O-O</span>? White castles, but d4 has only two defenders.",
       "A third attacker on d4: there are now three. Stockfish goes from +0.4 to −0.9.",
       "White develops… and forgets to count.",
       "<span class=\"mv good\">9…Nfxd4</span>! Take with the f5 knight. The c6 knight stays put: it blocks the diagonal to your king (no Bb5+) and eyes e5. After 9…Ncxd4?!, 10.Bd3 would attack the f5 knight, and White would have enough play for their pawn (−0.1).",
       "White takes back.",
       "Your queen takes back: a pawn up, and she attacks e5 and the queen on d1."
      ],
      "fin": "Stockfish: −0.8. The d4 pawn had three attackers against two defenders: it fell. If White had defended d4 with 9.Be3, your queen would have taken on b2: the c1 bishop no longer protected it (−1.2).",
      "titre": "Advance: three attackers against two",
      "quiz": [
       "q1e1753281"
      ],
      "marques": [
       [
        "d4!",
        "c3"
       ],
       [
        "d4"
       ],
       [
        "e7",
        "f5"
       ],
       [
        "d4!",
        "f3",
        "d1"
       ],
       [
        "d4!",
        "f5",
        "c6",
        "b6"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "d4!",
        "c6",
        "e5!"
       ],
       [
        "d4"
       ],
       [
        "d4",
        "e5!",
        "d1!"
       ],
       [
        "d4",
        "b2!",
        "c1"
       ]
      ]
     },
     {
      "t": "p",
      "html": "When d4 is well defended, or when it has disappeared (after 4.dxc5), change targets: …f6 attacks the head, e5. After exf6, the f-file opens for your rook, and your e6 and d5 pawns can breathe again. Careful: the e6 pawn becomes weaker, keep it defended."
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5"
      ],
      "coups": [
       "dxc5",
       "Bxc5",
       "Nf3",
       "Nc6",
       "Bd3",
       "f6",
       "Qe2",
       "fxe5",
       "Nxe5",
       "Nxe5",
       "Qxe5",
       "Nf6"
      ],
      "legendes": [
       "White takes on c5: the chain no longer has a base.",
       "The bishop takes back while developing.",
       "The knight defends e5.",
       "You attack e5.",
       "The bishop aims at h7.",
       "<span class=\"mv good\">6…f6</span>! Without a pawn on d4, e5 has only the f3 knight to defend it. You attack it a second time.",
       "The queen supports e5.",
       "You take.",
       "The knight takes back.",
       "You trade.",
       "The queen takes back: the e5 pawn has gone.",
       "You develop. Your d5-e6 centre is free, and your rook will go to the f-file after castling."
      ],
      "fin": "Stockfish: −0.3. The e5 pawn was cramping all your pieces; now you are the one with the centre.",
      "titre": "Advance 4.dxc5: the …f6 break",
      "quiz": [
       "q3bfed4174"
      ],
      "marques": [
       [
        "c5",
        "e5!"
       ],
       [
        "c5!"
       ],
       [
        "f3",
        "e5"
       ],
       [
        "c6",
        "e5!"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "f6",
        "e5!",
        "f3",
        "c6"
       ],
       [
        "e2",
        "e5"
       ],
       [
        "e5!"
       ],
       [
        "e5"
       ],
       [
        "e5"
       ],
       [
        "e5"
       ],
       [
        "f6",
        "d5",
        "e6",
        "h8"
       ],
       [
        "d5",
        "e6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "2. The Exchange: the pieces decide"
     },
     {
      "t": "p",
      "html": "After 3.exd5 exd5, the pawns are symmetrical and the e-file is open. Nobody has a weakness: the more active side wins. Good news: your c8 bishop is free, the c8-h3 diagonal is open."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6",
       "O-O",
       "O-O",
       "Bg5"
      ],
      "fleches": [
       [
        "f8e8",
        "v"
       ],
       [
        "c8g4",
        "v"
       ]
      ],
      "legende": "Your rook goes to the open file (…Re8), your c8 bishop comes out to g4: it pins the f3 knight to the queen on d1 (the knight cannot move without letting the queen be taken).",
      "marques": [
       "c8",
       "f3!",
       "d1",
       "f8"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Nf3",
       "Nf6",
       "Bd3",
       "Bd6",
       "O-O",
       "O-O",
       "Bg5",
       "Bg4",
       "Nbd2",
       "Re8"
      ],
      "legendes": [
       "Development.",
       "You too.",
       "The bishop aims at h7.",
       "In mirror image: your bishop aims at h2.",
       "White castles.",
       "You too.",
       "The bishop pins your f6 knight.",
       "You do the same: your bishop pins the f3 knight.",
       "The knight comes out.",
       "<span class=\"mv good\">8…Re8</span>: the rook takes the open file."
      ],
      "fin": "Stockfish: +0.3, the position is balanced, but all your pieces are in play. Next: …Nbd7 (or …Nc6), …c6 to shore up d5, …Qc7. If the white rook comes to e1, trade rooks on the e-file.",
      "titre": "Exchange: pieces first",
      "quiz": [
       "qe1ac3c984"
      ],
      "marques": [
       [],
       [
        "f6"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "d6",
        "h2!"
       ],
       [
        "g1"
       ],
       [
        "g8"
       ],
       [
        "g5",
        "f6!",
        "d8"
       ],
       [
        "g4",
        "f3!",
        "d1"
       ],
       [
        "d2"
       ],
       [
        "e8"
       ],
       [
        "b8",
        "d5",
        "e8",
        "f1"
       ]
      ]
     },
     {
      "t": "h",
      "html": "3. After …dxe4: the Classical and the Burn"
     },
     {
      "t": "p",
      "html": "With 4…dxe4, you trade your d5 pawn for the e4 pawn. White keeps d4, you keep e6: the centre opens. In return, your pieces can breathe. After Bxf6, you have the <em>bishop pair</em> (your two bishops against a bishop and a knight), and your f6 bishop aims at d4 and b2. Your break: …c5, which attacks d4."
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O",
       "Bc4",
       "c5"
      ],
      "fleches": [
       [
        "c5d4",
        "v"
       ],
       [
        "f6d4",
        "v"
       ],
       [
        "d8d4",
        "v"
       ]
      ],
      "legende": "Burn, after 8.Bc4 c5. Count on d4: your c5 pawn, your f6 bishop and your queen on d8 attack it; the f3 knight and the queen on d1 defend it.",
      "marques": [
       "d4!",
       "c5",
       "f6",
       "d8"
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O"
      ],
      "coups": [
       "Bc4",
       "c5",
       "c3",
       "cxd4",
       "cxd4",
       "Nc6"
      ],
      "legendes": [
       "The bishop aims at e6.",
       "<span class=\"mv good\">8…c5</span>! The break: you attack d4.",
       "White supports d4.",
       "You trade.",
       "White takes back with the pawn: d4 is now <em>isolated</em>, no neighbouring pawn (c or e) can defend it.",
       "The knight attacks d4 in turn: three attackers (f6 bishop, c6 knight, queen on d8)."
      ],
      "fin": "Stockfish: −0.6. An isolated pawn is a target: you blockade it, you attack it, and it ends up falling. Exercise 8 shows what happens if White defends it badly.",
      "titre": "Burn: …c5 and the isolated pawn",
      "quiz": [
       "q4d544098b"
      ],
      "marques": [
       [
        "c4",
        "e6!"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4"
       ],
       [
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "c6",
        "d4!",
        "f6",
        "d8"
       ],
       [
        "d4!"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The c8 bishop: four ways to wake it up"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…b6 then …Bb7 or …Ba6.</strong> Especially after …dxe4: on b7, the bishop aims down the long diagonal towards g2 and h1, as soon as the central pieces move away; on a6, it offers a trade of White's f1 or d3 bishop.",
       "<strong>…Bd7 then …Bb5.</strong> In the Advance: on b5, your bishop offers a trade of White's good bishop (the one on d3 or e2). Your problem disappears, and so does the bishop that was aiming at h7.",
       "<strong>…f6 then …e5.</strong> After the …f6 break and the trade on f6, the e6 pawn can advance: the c8-h3 diagonal opens.",
       "<strong>The trade against Bb5+.</strong> <a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Bd7</a>: if White takes, your bad bishop has gone."
      ],
      "num": true
     },
     {
      "t": "pos",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7",
       "Bxf6",
       "Bxf6",
       "Nf3",
       "O-O",
       "Qd2",
       "b6",
       "O-O-O",
       "Bb7"
      ],
      "fleches": [
       [
        "b7e4",
        "v"
       ],
       [
        "c7c5",
        "v"
       ]
      ],
      "legende": "Burn: 8.Qd2 b6 9.O-O-O Bb7. The c8 bishop has become an active piece: it attacks the e4 knight. And after …c5, your f6 bishop will hit d4: if that pawn disappears, its diagonal will open towards b2, next to the white king.",
      "marques": [
       "b7",
       "e4!",
       "f6",
       "d4"
      ]
     },
     {
      "t": "h",
      "html": "Defending your king"
     },
     {
      "t": "p",
      "html": "White is going to attack your castled king. No panic: an attack needs squares and pieces. A few rules:"
     },
     {
      "t": "liste",
      "items": [
       "<strong>Keep g5 guarded.</strong> With a bishop on e7 or your queen on f6, the Greek gift Bxh7+ no longer works (exercise 6).",
       "<strong>A knight on f5 is worth its weight in gold.</strong> It attacks d4, and it blocks the d3 bishop's diagonal towards h7.",
       "<strong>Do not castle too quickly in the Advance.</strong> As long as the centre is closed, your king is fine on e8. Castle when your pieces are ready to defend it.",
       "<strong>Against Qg4: g7 first.</strong> …Ne7 then …Rg8, or …Kf8. If the queen takes g7 and h7, she wanders away: your queen and your bishop attack f2 (exercise 4).",
       "<strong>Counter-attack in the centre.</strong> An attack on the wing is often punished in the centre: …c5, …cxd4, …f6 open the game where your pieces are strong."
      ]
     },
     {
      "t": "h",
      "html": "Where to put your pieces"
     },
     {
      "t": "table",
      "entetes": [
       "Piece",
       "Square",
       "Why"
      ],
      "lignes": [
       [
        "c-pawn",
        "c5, then …cxd4",
        "Attacks the base d4 and opens the c-file"
       ],
       [
        "b8 knight",
        "c6",
        "Attacks d4; and e5 as soon as d4 has gone"
       ],
       [
        "g8 knight",
        "e7 then f5 (Advance); f6 then d7 (Classical)",
        "On f5: attacks d4 and protects your castled king. Never on f6 against a pawn on e5"
       ],
       [
        "Queen",
        "b6 (Advance), c7",
        "b6 eyes d4 and b2. In the Burn, it is your bishop that settles on f6 (after Bxf6 Bxf6), not your queen: it eyes d4 and guards g5"
       ],
       [
        "f8 bishop",
        "e7; d6 in the Exchange; c5 after dxc5",
        "On e7, it guards g5 against Bxh7+"
       ],
       [
        "c8 bishop",
        "d7 then b5; b7 after …b6; g4 in the Exchange",
        "Trade off or activate your bad bishop"
       ],
       [
        "Rooks",
        "c8 (Advance), e8 (Exchange), d8 (Burn)",
        "On the open file, or facing the d4 pawn"
       ],
       [
        "King",
        "O-O when g5 and h7 are guarded",
        "In the Advance, it can wait on e8"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The pawn breaks, and when to play them"
     },
     {
      "t": "table",
      "entetes": [
       "Break",
       "In",
       "When",
       "What it gives"
      ],
      "lignes": [
       [
        "…c5",
        "Advance, Classical 4.e5, Burn",
        "Right away (on move 3 or 5), or after …O-O in the Burn",
        "Attacks the base d4"
       ],
       [
        "…cxd4",
        "Advance",
        "When your pieces are ready to hit d4 (Nc6, Qb6, Nf5)",
        "Opens the c-file, deprives d4 of a defending pawn"
       ],
       [
        "…f6",
        "Advance (especially after dxc5), Classical 4.e5",
        "When d4 is too well defended or has gone",
        "Attacks the head e5, opens the f-file"
       ],
       [
        "…e5",
        "Burn, Classical after …dxe4",
        "When your pieces control e5",
        "Frees the c8 bishop, hits d4"
       ]
      ]
     },
     {
      "t": "cle",
      "html": "<strong>In one sentence.</strong> Count the attackers and defenders of d4 before every move; if d4 holds, hit e5 with …f6; and before castling, check that g5 and h7 are guarded."
     }
    ]
   },
   {
    "id": "pieges",
    "titre": "The traps",
    "blocs": [
     {
      "t": "p",
      "html": "Two kinds of traps: the ones you set, where White loses material by playing the natural move, and the ones set for you, which you need to know so as not to fall into them. All have been checked with Stockfish. Each trap's quiz asks you for the right move: the punishment when your opponent goes wrong, the defence when you are the target."
     },
     {
      "t": "h",
      "html": "The ones you set"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "Bg5",
       "dxe4",
       "Nxe4",
       "Be7"
      ],
      "coups": [
       "Nf3",
       "Nxe4",
       "Bxe7",
       "Qxe7"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Nf3</span>?? White develops… and forgets that their e4 knight is not defended.",
       "<span class=\"mv good\">6…Nxe4</span>! Your knight is no longer pinned (the e7 bishop protects the queen): it takes.",
       "White trades bishops…",
       "…and you are a piece up."
      ],
      "fin": "Stockfish: −4.1. After 5…Be7, always check whether the e4 knight is defended.",
      "titre": "Burn: 6.Nf3?? Nxe4",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q417c44d8e"
      ],
      "marques": [
       [
        "e4!",
        "f6"
       ],
       [
        "f6",
        "e7",
        "d8",
        "e4!"
       ],
       [],
       [
        "e4"
       ],
       [
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6"
      ],
      "coups": [
       "Be3",
       "Qxb2"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Be3</span>? The bishop defends d4… but it no longer defends b2.",
       "<span class=\"mv good\">6…Qxb2</span>! A free pawn, and your queen threatens the a1 rook."
      ],
      "fin": "Stockfish: −1.2. Before taking on b2, always check that your queen will be able to get out again.",
      "titre": "Advance: 6.Be3? Qxb2",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q40330eae4"
      ],
      "marques": [
       [
        "e3",
        "d4",
        "b2!",
        "b6"
       ],
       [
        "b2!",
        "a1!"
       ],
       [
        "b2",
        "a1!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "Nf3",
       "Nc6",
       "Be3"
      ],
      "coups": [
       "cxd4",
       "Nxd4",
       "Nxe5"
      ],
      "legendes": [
       "You take on d4.",
       "<span class=\"mv bad\">6.Nxd4</span>? The knight takes back, but it no longer defends e5.",
       "<span class=\"mv good\">6…Nxe5</span>: a free central pawn."
      ],
      "fin": "Stockfish: −1.4. White's right recapture was <a class=\"lien-var\" href=\"#\" data-var=\"q255883eed\">6.Bxd4</a> (−0.6).",
      "titre": "Advance: 5.Be3 cxd4 6.Nxd4?",
      "couleurs": [
       "v",
       "r",
       "v"
      ],
      "quiz": [
       "qd7776a221"
      ],
      "marques": [
       [
        "d4!"
       ],
       [
        "d4",
        "e5!",
        "c6"
       ],
       [
        "e5!"
       ],
       [
        "e3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5"
      ],
      "coups": [
       "Bd3",
       "cxd4",
       "Nxd4",
       "Nxe5"
      ],
      "legendes": [
       "<span class=\"mv bad\">6.Bd3</span>? Natural development, but d4 is going to fall.",
       "You take on d4, and your pawn attacks the c3 knight.",
       "White takes back with the f3 knight… which was defending e5.",
       "<span class=\"mv good\">7…Nxe5</span>: your d7 knight takes e5 and attacks the d3 bishop."
      ],
      "fin": "A pawn up (−1.1). Remember the link: when the f3 knight leaves its square, the e5 pawn loses its defender, and your d7 knight is there to take it.",
      "titre": "Classical: 6.Bd3? cxd4",
      "couleurs": [
       "r",
       "v",
       "g",
       "v"
      ],
      "quiz": [
       "q23cf26d7c"
      ],
      "marques": [
       [
        "d3",
        "d4!"
       ],
       [
        "d4",
        "c3!"
       ],
       [
        "f3",
        "e5!",
        "d7"
       ],
       [
        "e5!",
        "d3!"
       ],
       [
        "e5",
        "f3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "Bc4",
       "d5",
       "exd5",
       "exd5"
      ],
      "coups": [
       "Bxd5",
       "Qxd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">4.Bxd5</span>?? The d5 pawn seems to be hanging…",
       "…but your queen was defending it. A piece up."
      ],
      "fin": "Stockfish: −4.9. It happens more often than you would think between 1000 and 1600.",
      "titre": "2.Bc4: 4.Bxd5??",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q6631cd413"
      ],
      "marques": [
       [
        "d5!"
       ],
       [
        "d8",
        "d5!"
       ],
       []
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Bg5",
       "Qxg5"
      ],
      "legendes": [
       "<span class=\"mv bad\">3.Bg5</span>?? The bishop comes to attack your queen… on a square your queen controls.",
       "Take it. A piece up (−4.6)."
      ],
      "fin": "It looks too good to be true, but it is plain to see: always check whether the piece attacking you is defended.",
      "titre": "3.Bg5 ??",
      "couleurs": [
       "r",
       "v"
      ],
      "quiz": [
       "q837fb5f81"
      ],
      "marques": [
       [
        "g5!",
        "d8"
       ],
       [
        "g5!"
       ],
       [
        "g5"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The ones set for you"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Bd3",
       "cxd4",
       "cxd4"
      ],
      "coups": [
       "Nxd4",
       "Nxd4",
       "Qxd4",
       "Bb5+"
      ],
      "legendes": [
       "<span class=\"mv bad\">7…Nxd4</span>?? Everything seems counted: d4 looks like it is falling.",
       "White takes back.",
       "<span class=\"mv bad\">8…Qxd4</span>? You take back, and your queen ends up on the d-file, facing the white queen…",
       "…hidden behind the d3 bishop. The bishop moves away with check and uncovers the queen on d1, which attacks yours. You have to deal with the check, and your queen falls."
      ],
      "fin": "Stockfish: +6.8 for White. It is the most famous trap in the Advance. Against 6.Bd3, play <a class=\"lien-var\" href=\"#\" data-var=\"q621dcb38f\">6…cxd4 7.cxd4 Bd7!</a> (0.0): your bishop covers b5. After 8.O-O, 8…Nxd4 then wins the pawn for good (−0.3).",
      "titre": "Advance: the Bb5+ trap",
      "couleurs": [
       "r",
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q621dcb38f"
      ],
      "marques": [
       [
        "d4!",
        "c6",
        "b6"
       ],
       [],
       [
        "d4!",
        "d1"
       ],
       [
        "d3",
        "d1",
        "d4!",
        "e8!"
       ],
       [
        "d4!",
        "d1",
        "b5"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Bb5",
       "Qb6"
      ],
      "coups": [
       "Bxc6+",
       "Bd7",
       "Bxd7+",
       "Kxd7"
      ],
      "legendes": [
       "The bishop takes your knight, with check.",
       "<span class=\"mv bad\">6…Bd7</span>?? You block the check… but the c6 bishop is still alive.",
       "It takes your bishop too, with check.",
       "You take back, but you have lost a piece."
      ],
      "fin": "+5.4 for White. After Bxc6+, take back at once: <a class=\"lien-var\" href=\"#\" data-var=\"q85034861e\">6…bxc6</a> (−0.7). <a class=\"lien-var\" href=\"#\" data-var=\"qd5032a2ba\">6…Qxc6</a> is also played, but it is less good (0.0).",
      "titre": "Advance: after Bxc6+, take back",
      "couleurs": [
       "g",
       "r",
       "g",
       "g"
      ],
      "quiz": [
       "q85034861e"
      ],
      "marques": [
       [
        "c6!",
        "e8!"
       ],
       [
        "d7!",
        "c6"
       ],
       [
        "d7!",
        "e8!"
       ],
       [],
       [
        "b7"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "dxc5",
       "Bxc5"
      ],
      "coups": [
       "Qg4",
       "Nc6",
       "Qxg7"
      ],
      "legendes": [
       "The queen attacks your g7 pawn.",
       "<span class=\"mv bad\">5…Nc6</span>?? You develop without seeing the threat.",
       "The queen takes g7 and attacks your h8 rook."
      ],
      "fin": "+3.9 for White. Against 5.Qg4, play <a class=\"lien-var\" href=\"#\" data-var=\"q0644bbae2\">5…Ne7</a> (−0.3). If White takes anyway, <a class=\"lien-var\" href=\"#\" data-var=\"q85dc2f165\">6.Qxg7 Rg8 7.Qxh7 Qb6</a>: your queen and your bishop aim at f2, and Stockfish gives you the advantage (−0.5).",
      "titre": "4.dxc5 Bxc5 5.Qg4",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "q0644bbae2",
       "q85dc2f165"
      ],
      "marques": [
       [
        "g4",
        "g7!"
       ],
       [
        "g4",
        "g7!"
       ],
       [
        "g7!",
        "h8!"
       ],
       [
        "g7",
        "h8!"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5",
       "exd5",
       "exd5",
       "Nc3",
       "Nf6",
       "Bg5"
      ],
      "coups": [
       "Bd6",
       "Nxd5"
      ],
      "legendes": [
       "<span class=\"mv bad\">5…Bd6</span>? The move from your usual plan… but here the f6 knight is pinned.",
       "The white knight takes d5: if 6…Nxd5, 7.Bxd8 takes your queen."
      ],
      "fin": "A pawn down (+1.7). Against Bg5 in the Exchange, always play <a class=\"lien-var\" href=\"#\" data-var=\"q646d2d492\">5…Be7</a>.",
      "titre": "Exchange: 5…Bd6? against Bg5",
      "couleurs": [
       "r",
       "g"
      ],
      "quiz": [
       "q646d2d492"
      ],
      "marques": [
       [
        "f6!",
        "g5",
        "d8"
       ],
       [
        "d5!",
        "f6",
        "g5",
        "d8!"
       ],
       [
        "d5"
       ]
      ]
     }
    ]
   },
   {
    "id": "exceptions",
    "titre": "The exceptions",
    "blocs": [
     {
      "t": "p",
      "html": "The rules of your repertoire: …d5 on the second move, …c5 against the chain, developing in mirror image in the Exchange. Here are the places where the rule does not apply, and why. Click the move to play to see it on the board."
     },
     {
      "t": "table",
      "entetes": [
       "Situation",
       "The rule would say",
       "Play instead",
       "Why"
      ],
      "lignes": [
       [
        "Advance 3.e5",
        "Develop with …Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q315c6f16d\">…c5 and …Nc6</a>",
        "After 3…Nf6??, 4.exf6 takes the knight (+3.7)"
       ],
       [
        "Advance 4.dxc5",
        "Develop first",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1b98798b2\">4…Bxc5</a>",
        "Take the pawn back while developing"
       ],
       [
        "2.Nf3 d5 3.e5 c5 4.Bb5+",
        "Develop with …Nc6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4f50b8890\">4…Bd7</a>",
        "Trade off your shut-in bishop (−0.4 against +0.4)"
       ],
       [
        "Exchange + Bg5",
        "…Bd6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q646d2d492\">…Be7</a>",
        "Otherwise Nxd5 wins a pawn"
       ],
       [
        "Exchange 4.Qe2+ Be7 5.Bg5",
        "…Nf6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5…Nc6</a>",
        "Your e7 bishop is pinned to your king by the queen: after 5…Nf6, 6.Bxf6 and you cannot take back with the bishop"
       ],
       [
        "Burn 5.Bxf6",
        "Take back with the queen",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q1030cfc72\">5…gxf6</a>",
        "g-file, bishop pair, …f5 with a gain of time (−0.6 against +0.2)"
       ],
       [
        "2.Nf3 d5 3.Nc3 Nf6 4.d3 c5 5.Bg5",
        "Unpin with …Be7",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q4b8196402\">5…d4</a>",
        "Chases the c3 knight (−0.7 against −0.1)"
       ],
       [
        "2.Bc4 d5 3.Bb3",
        "Keep the tension",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3…dxe4</a>",
        "The pawn is free (−0.8)"
       ],
       [
        "Advance 4.Nf3 Nc6 5.Be3",
        "5…Qb6",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qa2013ae9d\">5…cxd4</a>",
        "If 6.Nxd4?, 6…Nxe5 wins a pawn"
       ],
       [
        "2.Qe2 (rare)",
        "2…d5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a>",
        "After 2…d5 3.exd5, you cannot take back with the pawn: the e6 pawn is pinned, and the recapture would open the e-file between the queen on e2 and your king"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The 2.Qe2 case"
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6"
      ],
      "coups": [
       "Qe2",
       "d5",
       "exd5"
      ],
      "legendes": [
       "A rare but tricky early queen move.",
       "<span class=\"mv bad\">2…d5</span>?! The usual move…",
       "…and now 3…exd5 is impossible: that move would open the e-file between the queen on e2 and your king. White is better (+0.3 to +0.5)."
      ],
      "fin": "Against 2.Qe2, play <a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a> instead (0.0), then …Nc6 and …d6 or …d5 later. Your king must not stay on the same file as the white queen when that file can open.",
      "titre": "2.Qe2: no …d5 right away",
      "couleurs": [
       "g",
       "r",
       "g"
      ],
      "quiz": [
       "qba48194ee"
      ],
      "marques": [
       [
        "e2"
       ],
       [],
       [
        "e2",
        "e6!",
        "e8"
       ],
       [
        "e2",
        "e8!"
       ]
      ]
     }
    ]
   },
   {
    "id": "exercices",
    "titre": "Middlegame exercises",
    "blocs": [
     {
      "t": "p",
      "html": "Eight positions taken from your repertoire, with Black to move. Each time, there is one move clearly better than the others: Stockfish (depth 20) ranks it at least 0.8 ahead of the second-best move. First look for the theme (d4, b2, f2, e5, g5…), then the move. The Quiz button resets the position."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nxd4",
       "Nxd4",
       "Qxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Nxd4</span>! Count: d4 is attacked by your c6 knight and your queen on b6. It has only one defender, the f3 knight: the queen on d1 is blocked by the d3 bishop. And the Bb5+ trap no longer works, your d7 bishop covers b5.",
       "White takes back.",
       "Your queen takes back: a pawn up, in the centre."
      ],
      "fin": "Stockfish: −0.8. The position came from 6.Bd3 cxd4 7.cxd4 Bd7 8.Nc3?: two attackers against one defender, the pawn falls. The other moves (…Rc8, …Nge7) leave White better (+0.8).",
      "titre": "Exercise 1: count the defenders of d4",
      "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 2 8",
      "quiz": [
       "q2817eb383"
      ],
      "marques": [
       [
        "d4!",
        "c6",
        "b6",
        "f3"
       ],
       [
        "d4"
       ],
       [
        "d4"
       ],
       [
        "d4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Nf5"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Nf5</span>! The e7 knight comes to attack d4 in turn. Count: three attackers (the c6 and f5 knights, the queen on b6) against two defenders (the f3 knight, the queen on d1)."
      ],
      "fin": "Stockfish: −1.3, d4 is going to fall. White lost a tempo with 8.a3 instead of defending d4 (after 6.Be2 cxd4 7.cxd4 Nge7). The other moves, such as …Bd7 or …a6, give them time to breathe (about +0.5).",
      "titre": "Exercise 2: reinforcements for the attack",
      "fen": "r1b1kb1r/pp2nppp/1qn1p3/3pP3/3P4/P4N2/1P2BPPP/RNBQK2R b KQkq - 0 8",
      "quiz": [
       "qf1aa155cc"
      ],
      "marques": [
       [
        "f5",
        "d4!",
        "c6",
        "b6"
       ],
       [
        "d4!",
        "a3"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxb2"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Qxb2</span>! The e3 bishop defends d4… but it has left c1, from where it defended b2. Your queen takes a pawn and threatens the a1 rook."
      ],
      "fin": "Stockfish: −2.3. The queen is in no danger: after 9.Nbd2, 9…Nb4 attacks the d3 bishop. Before taking on b2, always check that your queen will be able to get out again. The position came from 6.Bd3 cxd4 7.cxd4 Bd7 8.Be3?",
      "titre": "Exercise 3: the c1 bishop has moved",
      "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3BBN2/PP3PPP/RN1QK2R b KQkq - 2 8",
      "quiz": [
       "qb0af03074"
      ],
      "marques": [
       [
        "b2!",
        "e3",
        "a1!"
       ],
       [
        "b2",
        "d3!",
        "c6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxf2+",
       "Kd1",
       "Bxg1"
      ],
      "legendes": [
       "<span class=\"mv good\">8…Bxf2+</span>! Your queen on b6 and your c5 bishop were aiming at f2, which only the king defended. The bishop takes with check.",
       "The king has to move.",
       "<span class=\"mv good\">9…Bxg1</span>! The bishop also takes the g1 knight. If 10.Rxg1, your queen takes back on g1."
      ],
      "fin": "Stockfish: −4.4. The white queen took g7 and h7 (5.Qg4 Ne7 6.Qxg7 Rg8 7.Qxh7 Qb6), then came back too late: 8.Qd3? does not defend f2. While she was eating pawns, she was no longer protecting anything.",
      "titre": "Exercise 4: the white queen went on a long trip",
      "fen": "rnb1k1r1/pp2np2/1q2p3/2bpP3/8/3Q4/PPP2PPP/RNB1KBNR b KQq - 2 8",
      "quiz": [
       "qf0d0c9eca"
      ],
      "marques": [
       [
        "f2!",
        "c5",
        "b6",
        "e1"
       ],
       [
        "d1"
       ],
       [
        "g1!",
        "b6",
        "h1"
       ],
       [
        "d3",
        "g1"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "f6",
       "exf6",
       "Qxf6"
      ],
      "legendes": [
       "<span class=\"mv good\">11…f6</span>! There is no d4 pawn any more: the chain has no base left. So you attack the head, e5, already targeted by your c6 knight.",
       "White takes.",
       "<span class=\"mv good\">12…Qxf6</span>! The queen takes back and the f-file opens: your queen and your f8 rook bear down on the f3 knight and on f2, which your b6 bishop is already aiming at."
      ],
      "fin": "Stockfish: −1.9. Your king has castled, White's has not: the open f-file is yours. The position came from 4.dxc5 Bxc5 5.Nd2 Nc6 6.Nb3 Bb6 7.Bb5 Ne7 8.Nf3 O-O 9.a4 a6 10.Bxc6 Nxc6 11.Qe2.",
      "titre": "Exercise 5: the head of the chain",
      "fen": "r1bq1rk1/1p3ppp/pbn1p3/3pP3/P7/1N3N2/1PP1QPPP/R1B1K2R b KQ - 1 11",
      "quiz": [
       "q4084c4eed"
      ],
      "marques": [
       [
        "f6",
        "e5!",
        "c6"
       ],
       [
        "f6"
       ],
       [
        "f6",
        "f8",
        "f3!",
        "f2!"
       ],
       [
        "g8",
        "e1",
        "f8",
        "f6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Kxh7",
       "Ng5+",
       "Bxg5"
      ],
      "legendes": [
       "<span class=\"mv good\">10…Kxh7</span>! Accept the sacrifice. Declining with 10…Kh8 leaves White a pawn up and your king exposed (+1.3). To know whether the sacrifice works, look at what follows.",
       "The knight jumps to g5 with check: that is White's plan.",
       "<span class=\"mv good\">11…Bxg5</span>! Your e7 bishop guards g5: it takes the knight. If 12.Bxg5, 12…Qxg5."
      ],
      "fin": "You are two pieces up for a pawn: Stockfish −5.1. The Greek gift does not work when one of your bishops or knights guards g5. The position came from 4.e5 Nfd7 5.Nf3 c5 6.dxc5 Nc6 7.Bf4 Nxc5 8.Bd3 Be7 9.O-O O-O 10.Bxh7+?",
      "titre": "Exercise 6: the Greek gift",
      "fen": "r1bq1rk1/pp2bppB/2n1p3/2npP3/5B2/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 10",
      "quiz": [
       "q9cbd2c570"
      ],
      "marques": [
       [
        "h7!"
       ],
       [
        "g5",
        "h7!"
       ],
       [
        "g5!",
        "e7",
        "f4",
        "d8"
       ],
       [
        "g5",
        "h7"
       ]
      ]
     },
     {
      "t": "p",
      "html": "Compare with the Greek gift in “Strengths and weaknesses”: there, your bishop was on c5 and only your queen guarded g5, but the f4 bishop protected the knight."
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Qxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">7…Qxd4</span>! By retreating to d2, the knight cut the queen on d1 off from its d4 pawn. Nothing defends d4 any more: your queen takes it."
      ],
      "fin": "A pawn up, Stockfish: −1.6. After …dxe4, the d4 pawn is White's weak point: every time a piece moves, ask yourself whether it is still defended. The position came from 4.Bg5 dxe4 5.Bxf6 gxf6 6.Nxe4 f5 7.Nd2?",
      "titre": "Exercise 7: the knight retreats",
      "fen": "rnbqkb1r/ppp2p1p/4p3/5p2/3P4/8/PPPN1PPP/R2QKBNR b KQkq - 1 7",
      "quiz": [
       "q257a444ac"
      ],
      "marques": [
       [
        "d4!",
        "d2",
        "d1"
       ],
       [
        "d4",
        "d2"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "Bxd4"
      ],
      "legendes": [
       "<span class=\"mv good\">11…Bxd4</span>! Count: d4 is attacked three times (f6 bishop, c6 knight, queen on d8) and defended twice (f3 knight, queen on d2). The bishop takes, and your queen on d8 backs it up."
      ],
      "fin": "A pawn up, Stockfish: −1.3. If 12.Nxd4 Nxd4, the queen on d2 cannot take back: your queen on d8 guards d4. The position came from the Burn (the “…c5 and the isolated pawn” board): 8.Bc4 c5 9.c3 cxd4 10.cxd4 Nc6 11.Qd2?",
      "titre": "Exercise 8: the isolated pawn",
      "fen": "r1bq1rk1/pp3ppp/2n1pb2/8/2BPN3/5N2/PP1Q1PPP/R3K2R b KQ - 2 11",
      "quiz": [
       "q6fe165385"
      ],
      "marques": [
       [
        "d4!",
        "f6",
        "c6",
        "d8"
       ],
       [
        "d4",
        "d8",
        "d2",
        "f3"
       ]
      ]
     }
    ]
   },
   {
    "id": "modeles",
    "titre": "Model games",
    "blocs": [
     {
      "t": "p",
      "html": "Two games built for the lesson: the opponent's moves are typical mistakes between 1000 and 1600, and each of your moves has been checked with Stockfish. They are not real games. They show how your repertoire leads to the middlegame plans. Step through move by move and read the explanations."
     },
     {
      "t": "h",
      "html": "Game 1: the Advance, d4 and then everything else"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "e6",
       "d4",
       "d5",
       "e5",
       "c5",
       "c3",
       "Nc6",
       "Nf3",
       "Qb6",
       "Bd3",
       "cxd4",
       "cxd4",
       "Bd7",
       "O-O",
       "Nxd4",
       "Nxd4",
       "Qxd4",
       "Nc3",
       "a6",
       "Qe2",
       "Ne7",
       "Be3",
       "Qxe5",
       "Rae1",
       "d4",
       "Ne4",
       "dxe3",
       "Qxe3",
       "Nd5",
       "Qf3",
       "Bc6",
       "Bc4",
       "Nf6",
       "Nxf6+",
       "Qxf6",
       "Qh3",
       "Bb4",
       "Rd1",
       "O-O",
       "a3",
       "Ba5",
       "Bd3",
       "g6",
       "Rc1",
       "Rfd8",
       "Qe3",
       "Qxb2",
       "Be4",
       "Bd2",
       "Bxc6",
       "Bxe3",
       "fxe3",
       "bxc6"
      ],
      "legendes": [
       "1.e4.",
       "The French.",
       "White takes the centre.",
       "You attack e4.",
       "The Advance: White closes the centre.",
       "You attack the base of the chain, d4.",
       "White supports d4.",
       "A second attacker on d4.",
       "A third defender.",
       "Your queen eyes d4 and b2.",
       "The bishop develops… and prepares the Bb5+ trap.",
       "You take on d4.",
       "White takes back.",
       "<span class=\"mv good\">7…Bd7</span>! The antidote: not …Nxd4 yet, because of Bb5+. Your bishop covers b5 first.",
       "White castles and gives up d4: they are counting on their lead in development.",
       "Now you take: the d7 bishop prevents Bb5+.",
       "White trades.",
       "Your queen takes back: a pawn up (−0.4).",
       "White develops and eyes the b5 square.",
       "The a6 pawn takes b5 away from the knight and the bishop. Stockfish: −0.8.",
       "The queen frees d1 for a rook.",
       "Your last knight comes out; it will go to c6, d5 or f5.",
       "The bishop chases your queen. But she has a good square, with a free pawn: e5.",
       "Your queen takes e5: two pawns up (−1.2).",
       "<span class=\"mv bad\">13.Rae1</span>? The rook comes to the e-file, behind the queen and the bishop. But look at the e3 bishop and the c3 knight: your d5 pawn can advance to d4 and attack both of them.",
       "<span class=\"mv good\">13…d4</span>! A <em>fork</em>: a move that attacks two pieces at once. The pawn attacks the e3 bishop and the c3 knight; one of the two is going to fall (−2.4).",
       "The knight escapes to the centre.",
       "You take the bishop.",
       "The queen takes back. You are a piece and a pawn up (−5.5).",
       "The knight attacks the queen and settles in the centre.",
       "The queen falls back and aims at f7.",
       "The c6 bishop protects the d5 knight. Your “bad bishop” has become a useful piece.",
       "The bishop attacks the d5 knight.",
       "The knight retreats to f6: it protects your castled king and attacks the e4 knight.",
       "White trades.",
       "Your queen takes back. With an extra piece, every trade brings you closer to victory.",
       "The queen eyes e6 and h7.",
       "The bishop comes out attacking the e1 rook.",
       "The rook moves away.",
       "You castle: your king is safe and your rooks are connected.",
       "The pawn attacks your bishop.",
       "The bishop retreats, keeping the a5-e1 diagonal.",
       "The bishop aims at h7.",
       "You close the d3 bishop's diagonal. The h7 pawn stays defended by your king.",
       "The rook eyes your c6 bishop.",
       "Your rook takes the open d-file.",
       "The queen comes back to the centre.",
       "Your queen takes the b2 pawn and attacks the c1 rook.",
       "The bishop attacks your c6 bishop.",
       "<span class=\"mv good\">25…Bd2</span>! The bishop attacks both the queen on e3 and the c1 rook. It is protected by your d8 rook and by your queen.",
       "White takes your c6 bishop… and leaves their queen.",
       "Your bishop takes the queen.",
       "White takes back.",
       "You take back the bishop. Your queen and your two rooks against two rooks."
      ],
      "fin": "White resigns: Stockfish −8.4. The three steps to remember: …Bd7 before …Nxd4 (the antidote to Bb5+), the d4 and then e5 pawns won by counting the defenders, and the …d4 fork when two white pieces stand side by side in front of your pawn.",
      "titre": "Game 1: the Advance",
      "quiz": [],
      "marques": [
       [
        "e4"
       ],
       [
        "e6"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "d5",
        "e4!"
       ],
       [
        "e5",
        "d4",
        "d5",
        "e6"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c3",
        "d4!"
       ],
       [
        "c6",
        "c5",
        "d4!"
       ],
       [
        "f3",
        "d4"
       ],
       [
        "b6",
        "d4!",
        "b2!"
       ],
       [
        "d3",
        "b5"
       ],
       [
        "d4!"
       ],
       [
        "d4!"
       ],
       [
        "d7",
        "b5",
        "d4"
       ],
       [
        "g1",
        "d4!"
       ],
       [
        "d4!",
        "d7"
       ],
       [
        "d4!"
       ],
       [
        "d4"
       ],
       [
        "c3",
        "d3",
        "b5"
       ],
       [
        "a6",
        "b5",
        "c3",
        "d3"
       ],
       [
        "e2",
        "d1",
        "f1"
       ],
       [
        "e7",
        "c6",
        "d5",
        "f5"
       ],
       [
        "e3",
        "d4!",
        "e5!"
       ],
       [
        "e5"
       ],
       [
        "e1",
        "e3!",
        "c3!",
        "d5"
       ],
       [
        "d4",
        "e3!",
        "c3!"
       ],
       [
        "e4",
        "e3!"
       ],
       [
        "e3!"
       ],
       [
        "e3"
       ],
       [
        "d5",
        "e3!"
       ],
       [
        "f3",
        "f7!"
       ],
       [
        "c6",
        "d5"
       ],
       [
        "c4",
        "d5!"
       ],
       [
        "f6",
        "e4!"
       ],
       [
        "f6"
       ],
       [
        "f6"
       ],
       [
        "h3",
        "e6!",
        "h7!"
       ],
       [
        "b4",
        "e1!"
       ],
       [
        "d1"
       ],
       [
        "g8",
        "f8",
        "a8"
       ],
       [
        "a3",
        "b4!"
       ],
       [
        "a5"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "g6",
        "d3",
        "h7",
        "g8"
       ],
       [
        "c1",
        "c6!"
       ],
       [
        "d8"
       ],
       [
        "e3"
       ],
       [
        "b2!",
        "c1!"
       ],
       [
        "e4",
        "c6!"
       ],
       [
        "d2",
        "e3!",
        "c1!",
        "d8"
       ],
       [
        "c6!",
        "e3!",
        "d2"
       ],
       [
        "e3!"
       ],
       [
        "e3"
       ],
       [
        "c6!",
        "b2",
        "a8",
        "d8"
       ],
       []
      ]
     },
     {
      "t": "h",
      "html": "Game 2: the Classical, from …c5 to mate"
     },
     {
      "t": "seq",
      "debut": [],
      "coups": [
       "e4",
       "e6",
       "d4",
       "d5",
       "Nc3",
       "Nf6",
       "e5",
       "Nfd7",
       "Nf3",
       "c5",
       "dxc5",
       "Nc6",
       "Bf4",
       "Bxc5",
       "Bd3",
       "h6",
       "h3",
       "a6",
       "Bg3",
       "O-O",
       "Qd2",
       "Qc7",
       "Qe2",
       "Nd4",
       "Qd1",
       "Nxf3+",
       "Qxf3",
       "Nxe5",
       "O-O-O",
       "Bd7",
       "Rhe1",
       "Nxf3",
       "Bxc7",
       "Nxe1",
       "Rxe1",
       "Bxf2",
       "Rf1",
       "Bc5",
       "Ne2",
       "Bb5",
       "b4",
       "Bxd3",
       "cxd3",
       "Bxb4",
       "Kb1",
       "Rae8",
       "Rf4",
       "Rc8",
       "Ng3",
       "Ba3",
       "Ra4",
       "Rxc7",
       "Ne2",
       "Bd6",
       "Rd4",
       "Rfc8",
       "g3",
       "Rc2",
       "Rf4",
       "Rxe2",
       "Re4",
       "dxe4",
       "g4",
       "Ba3",
       "g5",
       "Re1#"
      ],
      "legendes": [
       "1.e4.",
       "The French.",
       "The centre.",
       "You attack e4.",
       "The Classical: the knight defends e4.",
       "You attack e4 a second time.",
       "The pawn chases your knight.",
       "It goes back to d7, from where it will support …c5.",
       "The knight supports d4 and e5.",
       "The break: you hit the base, d4.",
       "White takes: the chain has no base left, and e5 no longer has a pawn to support it.",
       "You attack e5; you will take back the c5 pawn next move.",
       "The bishop defends e5.",
       "You take back your pawn while developing the bishop.",
       "The bishop aims at h7. This is the Greek gift position from “Strengths and weaknesses”: 8…O-O? would be a mistake.",
       "A little pawn move: with the pawn on h6, the Bxh7+ sacrifice no longer exists. Your king will be able to castle in peace.",
       "White also plays a little pawn move.",
       "Another useful move: the b5 square is off limits to White's pieces.",
       "The bishop gets to safety.",
       "Now you castle: nothing threatens your king.",
       "<span class=\"mv bad\">11.Qd2</span>? The queen prepares to castle queenside, but she is not watching e5: on e2, she would have defended it.",
       "Your queen attacks e5. The head of the chain is attacked three times (the c6 and d7 knights, the queen) and defended twice (the f3 knight, the g3 bishop).",
       "The queen comes to defend e5.",
       "<span class=\"mv good\">12…Nd4</span>! The knight attacks the queen on e2 and the f3 knight, a defender of e5.",
       "The queen retreats.",
       "You trade off a defender of e5, with check.",
       "The queen takes back.",
       "The e5 pawn falls, and your knight attacks the queen on f3 (−2.3).",
       "White castles, leaving their queen attacked: if your knight takes her, the g3 bishop will take your queen on c7.",
       "No queen trade for now: you develop your last bishop.",
       "<span class=\"mv bad\">16.Rhe1</span>?? The rook comes to the e-file… onto the square where your knight is about to land.",
       "You take the queen.",
       "The bishop takes yours…",
       "…and your knight also takes the e1 rook. Result, after the recapture: a rook for a knight, plus the e5 pawn (−5.2).",
       "The rook takes back.",
       "Your bishop takes a pawn and attacks the e1 rook.",
       "The rook attacks your bishop.",
       "The bishop goes back to c5.",
       "The knight falls back.",
       "<span class=\"mv good\">20…Bb5</span>! The bad bishop's plan: it offers a trade of the d3 bishop, White's best piece.",
       "The pawn attacks your c5 bishop.",
       "You trade bishops first.",
       "White takes back.",
       "Your bishop takes a pawn.",
       "The king steps aside.",
       "Your rook goes to the e-file.",
       "The rook attacks your b4 bishop.",
       "Your rook switches files and attacks the c7 bishop.",
       "The knight comes out.",
       "The bishop steps away from the rook.",
       "The rook attacks your a3 bishop.",
       "You take the c7 bishop. Your a3 bishop is attacked, but with so much extra material, trades suit you.",
       "The knight comes back… and White forgets to take your bishop.",
       "Your bishop gets to safety in the centre.",
       "The rook attacks your d5 pawn.",
       "Both your rooks on the open c-file.",
       "White has no plan left.",
       "Your rook reaches the second rank: it attacks the e2 knight and the a2 pawn.",
       "The rook moves away.",
       "Your rook takes the knight.",
       "The rook steps in front of your d5 pawn…",
       "…which takes it.",
       "White has only pawns left.",
       "The bishop guards b2 and c1: the white king has almost no squares left.",
       "Last pawn move.",
       "Mate. The e1 rook gives check; the a3 bishop and the c8 rook guard b2 and c2, the e1 rook covers a1."
      ],
      "fin": "Mate on move 33 (0-1). The steps to remember: …c5 against the chain, …h6 before castling to rule out the Greek gift, pressure on the head e5 once d4 has gone (…Qc7, then …Nd4, which eliminates its defender), and …Bb5 to trade off your bad bishop.",
      "titre": "Game 2: the Classical",
      "quiz": [],
      "marques": [
       [
        "e4"
       ],
       [
        "e6"
       ],
       [
        "d4",
        "e4"
       ],
       [
        "d5",
        "e4!"
       ],
       [
        "c3",
        "e4"
       ],
       [
        "f6",
        "d5",
        "e4!"
       ],
       [
        "e5",
        "f6!"
       ],
       [
        "d7",
        "c5"
       ],
       [
        "f3",
        "d4",
        "e5"
       ],
       [
        "c5",
        "d4!"
       ],
       [
        "c5",
        "e5!"
       ],
       [
        "c6",
        "e5!",
        "c5!"
       ],
       [
        "f4",
        "e5"
       ],
       [
        "c5!"
       ],
       [
        "d3",
        "h7!"
       ],
       [
        "h6",
        "d3",
        "e8"
       ],
       [
        "h3"
       ],
       [
        "a6",
        "b5"
       ],
       [
        "g3"
       ],
       [
        "g8",
        "h6"
       ],
       [
        "d2",
        "e5!",
        "e2"
       ],
       [
        "e5!",
        "c7",
        "c6",
        "d7"
       ],
       [
        "e2",
        "e5"
       ],
       [
        "d4",
        "e2!",
        "f3!",
        "e5"
       ],
       [
        "d1"
       ],
       [
        "f3!",
        "e5!"
       ],
       [
        "f3"
       ],
       [
        "e5",
        "f3!"
       ],
       [
        "f3!",
        "e5",
        "g3",
        "c7!"
       ],
       [
        "d7"
       ],
       [
        "e1!",
        "e5",
        "f3!"
       ],
       [
        "f3!"
       ],
       [
        "c7!"
       ],
       [
        "e1!",
        "d1"
       ],
       [
        "e1"
       ],
       [
        "f2",
        "e1!"
       ],
       [
        "f1",
        "f2!"
       ],
       [
        "c5"
       ],
       [
        "e2"
       ],
       [
        "b5",
        "d3"
       ],
       [
        "b4",
        "c5!"
       ],
       [
        "d3!",
        "c5!"
       ],
       [
        "d3"
       ],
       [
        "b4!"
       ],
       [
        "b1"
       ],
       [
        "e8"
       ],
       [
        "f4",
        "b4!"
       ],
       [
        "c8",
        "c7!"
       ],
       [
        "g3"
       ],
       [
        "a3",
        "f4"
       ],
       [
        "a4",
        "a3!"
       ],
       [
        "c7!",
        "a3!",
        "a4"
       ],
       [
        "e2",
        "a3!"
       ],
       [
        "d6"
       ],
       [
        "d4",
        "d5!"
       ],
       [
        "c8",
        "c7"
       ],
       [],
       [
        "c2",
        "e2!",
        "a2!"
       ],
       [
        "f4",
        "e2!"
       ],
       [
        "e2!"
       ],
       [
        "e4!",
        "d5"
       ],
       [
        "e4!"
       ],
       [],
       [
        "a3",
        "b2",
        "c1",
        "b1!"
       ],
       [
        "g5"
       ],
       [
        "e1",
        "b1!",
        "a3",
        "c8"
       ],
       [
        "b1!",
        "e1"
       ]
      ]
     }
    ]
   },
   {
    "id": "n-importe-quoi",
    "titre": "When they play anything",
    "blocs": [
     {
      "t": "p",
      "html": "Between 1000 and 1600, many opponents leave theory as early as the second or third move. Your repertoire covers the three most played moves at each step; for the rest, four principles and two tables."
     },
     {
      "t": "h",
      "html": "Four principles"
     },
     {
      "t": "liste",
      "items": [
       "<strong>…d5 on the second move, almost always.</strong> The only common exception: 2.Qe2.",
       "<strong>If e4 is not defended, take it.</strong> After 2.d4 d5, any move that does not protect e4 (neither Nc3, nor Nd2, nor Bd3, nor e5, nor exd5) gives you a pawn: 3…dxe4.",
       "<strong>If White closes the centre with e5, strike with …c5.</strong> Then …Nc6, …Qb6: the base of the chain, always.",
       "<strong>If the white queen comes out early, develop while attacking her.</strong> Against Qh5 or Qg4, …Nf6 attacks the queen and gains you a tempo. There is no mate on f7: your king defends it."
      ],
      "num": true
     },
     {
      "t": "h",
      "html": "The other second moves"
     },
     {
      "t": "table",
      "entetes": [
       "1.e4 e6 …",
       "Your plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "2.d3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qc4dd92c1b\">2…d5, then …c5 or …Nf6</a>",
        "0.0"
       ],
       [
        "2.Nc3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5f3591c2b\">2…d5; after 3.d4, 3…Nf6</a> (the Classical); after 3.exd5, 3…exd5",
        "+0.4"
       ],
       [
        "2.Qe2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qba48194ee\">2…c5</a> (not 2…d5, see the exceptions)",
        "0.0"
       ],
       [
        "2.f4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qb273202ec\">2…d5; after 3.e5, 3…c5</a>",
        "−0.1 to −0.2"
       ],
       [
        "2.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qafa5924cc\">2…d5</a>",
        "0.0"
       ],
       [
        "2.b3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q25e9551db\">2…d5</a>",
        "−0.3"
       ],
       [
        "2.Qh5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q97a7ae10a\">2…Nf6</a> or 2…d5",
        "−0.3 to −0.5"
       ],
       [
        "2.Qg4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q7aa507992\">2…d5</a>",
        "−0.5"
       ],
       [
        "2.Qf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qff02778e8\">2…c5</a> or 2…d5",
        "−0.2 to −0.4"
       ],
       [
        "2.e5",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q220ded635\">2…c5</a> and …d6",
        "−0.2"
       ],
       [
        "2.g3, 2.a3, 2.h3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0bf9f0df2\">2…d5</a>",
        "0.0 to +0.2"
       ]
      ]
     },
     {
      "t": "h",
      "html": "The other third moves after 2.d4 d5"
     },
     {
      "t": "table",
      "entetes": [
       "2.d4 d5 …",
       "Your plan",
       "Stockfish"
      ],
      "lignes": [
       [
        "3.Nd2 (Tarrasch)",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q5fed1032e\">3…c5</a> or 3…Nf6",
        "+0.4"
       ],
       [
        "3.Bd3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q101cdac30\">3…dxe4 4.Bxe4 Nf6</a>, then …c5",
        "0.0"
       ],
       [
        "3.Bb5+",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q071a1772e\">3…c6</a>: the bishop has to retreat",
        "−0.2"
       ],
       [
        "3.Nf3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q462b27776\">3…dxe4</a>: e4 is no longer defended",
        "−0.8"
       ],
       [
        "3.c4",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q0f441dccc\">3…dxe4</a>",
        "−0.7"
       ],
       [
        "3.f3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q930d31ca2\">3…c5</a> or 3…dxe4",
        "−0.4 to −0.7"
       ],
       [
        "3.Be3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q11c4afcf8\">3…dxe4</a>",
        "−0.4"
       ],
       [
        "3.c3",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q2bcbe9bec\">3…dxe4</a>",
        "−0.4"
       ],
       [
        "3.Qe2",
        "<a class=\"lien-var\" href=\"#\" data-var=\"qde110d333\">3…dxe4 4.Qxe4 Nf6</a>: gaining time on the queen",
        "−0.2"
       ],
       [
        "3.Bg5 ??",
        "<a class=\"lien-var\" href=\"#\" data-var=\"q837fb5f81\">3…Qxg5</a>: a free piece",
        "−4.6"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6",
       "d4",
       "d5"
      ],
      "coups": [
       "Nf3",
       "dxe4",
       "Ne5",
       "Nd7"
      ],
      "legendes": [
       "The knight comes out… but it does not defend e4.",
       "So you take.",
       "The knight jumps to e5 so as not to be attacked.",
       "And you chase it in turn."
      ],
      "fin": "A pawn up (−0.9). That is principle number 2: after 2.d4 d5, ask yourself every time whether e4 is still defended.",
      "titre": "3.Nf3? dxe4: the principle in action",
      "quiz": [
       "q7b175c345"
      ],
      "marques": [
       [
        "e4!",
        "d5"
       ],
       [
        "e4!"
       ],
       [
        "e5",
        "e4"
       ],
       [
        "d7",
        "e5!"
       ],
       [
        "e4"
       ]
      ]
     },
     {
      "t": "seq",
      "debut": [
       "e4",
       "e6"
      ],
      "coups": [
       "Qh5",
       "Nf6",
       "Qe2",
       "d5"
      ],
      "legendes": [
       "The queen comes out early and aims at f7.",
       "You develop while attacking the queen.",
       "She has to retreat.",
       "And you take the centre. Stockfish: −0.3."
      ],
      "fin": "No panic when a queen comes out early: for every move she makes, you gain one by developing a piece.",
      "titre": "2.Qh5: gaining time on the queen",
      "quiz": [
       "q33095372c"
      ],
      "marques": [
       [
        "h5",
        "f7!"
       ],
       [
        "f6",
        "h5!"
       ],
       [
        "h5!",
        "f6"
       ],
       [],
       [
        "e2",
        "f6"
       ]
      ]
     },
     {
      "t": "h",
      "html": "After the repertoire"
     },
     {
      "t": "p",
      "html": "Your repertoire stops at your 5th move. After that: finish your development (both knights, the f8 bishop, castling), keep the pressure on d4 in the Advance, put a rook on the c- or e-file when it opens. If you do not know what to play, look for your least active piece and improve it — often, it is the c8 bishop."
     }
    ]
   },
   {
    "id": "a-retenir",
    "titre": "To remember",
    "blocs": [
     {
      "t": "liste",
      "items": [
       "1…e6 then 2…d5 against everything, except 2.Qe2 (2…c5).",
       "Against 3.e5: …c5, …Nc6, …Qb6. Attack the base, d4. Never …Nf6: the e5 pawn would take the knight.",
       "Against 4.dxc5: …Bxc5 at once.",
       "In the Advance, never take on d4 with the knight when Bb5+ is possible: play …Bd7 first.",
       "After Bxc6+, take back at once.",
       "Against the Exchange: …Nf6, …Bd6, …O-O, …Re8; but …Be7 against Bg5 and against Qe2+.",
       "Against 4.e5 in the Classical: …Nfd7 then …c5.",
       "Against 4.Bg5: …dxe4; after 5.Nxe4 Be7, check whether the e4 knight is defended; after 5.Bxf6, …gxf6.",
       "Against Bb5+: …Bd7, to trade off your shut-in bishop.",
       "After 2.d4 d5, if e4 is not defended: …dxe4."
      ],
      "num": true
     }
    ]
   }
  ],
  "variantes": {
   "qc30bc31e9": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "The bishop pins your c6 knight.",
     "The queen attacks the b5 bishop. Once the bishop has gone, she will eye b2 and d4."
    ],
    "fin": "",
    "titre": "Advance: 5.Bb5 Qb6",
    "marques": [
     [
      "b5",
      "c6!",
      "e8"
     ],
     [
      "b6",
      "b5!",
      "d4!"
     ],
     []
    ]
   },
   "q718425163": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "Qb6"
    ],
    "legendes": [
     "The bishop defends d4.",
     "Same plan: the queen eyes b2, which the e3 bishop no longer defends, and d4."
    ],
    "fin": "",
    "titre": "Advance: 5.Be3 Qb6",
    "marques": [
     [
      "e3",
      "d4!"
     ],
     [
      "b6",
      "b2!",
      "e3",
      "d4!"
     ],
     []
    ]
   },
   "q0eca7d64b": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "The bishop pins your knight.",
     "The queen attacks the b5 bishop."
    ],
    "fin": "",
    "titre": "Advance, 4.Nf3 Nc6 5.Bb5 Qb6",
    "marques": [
     [
      "b5",
      "c6!",
      "e8"
     ],
     [
      "b6",
      "b5!",
      "d4!"
     ],
     []
    ]
   },
   "q7a0026f6b": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "c3",
     "Qb6"
    ],
    "legendes": [
     "White supports d4: we are back in the main line.",
     "Your queen eyes b2, and d4 behind your c5 pawn, as usual."
    ],
    "fin": "",
    "titre": "Advance, 4.Nf3 Nc6 5.c3 Qb6",
    "marques": [
     [
      "c3",
      "d4!"
     ],
     [
      "b6",
      "d4!",
      "b2!"
     ],
     []
    ]
   },
   "qa2013ae9d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "cxd4"
    ],
    "legendes": [
     "The bishop defends d4.",
     "You take on d4 at once: if the f3 knight takes back, the e5 pawn will have no defender left."
    ],
    "fin": "",
    "titre": "Advance, 4.Nf3 Nc6 5.Be3 cxd4",
    "marques": [
     [
      "e3",
      "d4!"
     ],
     [
      "d4!",
      "f3",
      "e5!"
     ],
     []
    ]
   },
   "qcf913e84e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "White develops instead of supporting d4 with c3.",
     "Same reply: the knight attacks d4."
    ],
    "fin": "",
    "titre": "Advance: 4.Nf3 Nc6",
    "marques": [
     [
      "f3",
      "d4!"
     ],
     [
      "c6",
      "d4!"
     ],
     []
    ]
   },
   "q6f71ee263": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Nc3",
     "Nc6"
    ],
    "legendes": [
     "White develops.",
     "You attack e5, which no longer has a d4 pawn to support it."
    ],
    "fin": "",
    "titre": "Advance, 4.dxc5 Bxc5 5.Nc3 Nc6",
    "marques": [
     [],
     [
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "q5c03a7d7d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Check.",
     "Block with the knight: it develops and attacks e5."
    ],
    "fin": "",
    "titre": "Advance, 4.dxc5 Bxc5 5.Bb5+ Nc6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "qc8d612ba1": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Nc3",
     "Bd6"
    ],
    "legendes": [
     "White develops.",
     "In mirror image: your bishop aims at h2."
    ],
    "fin": "",
    "titre": "Exchange: 5.Nc3 Bd6",
    "marques": [
     [],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q1deb7307e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "Bd6"
    ],
    "legendes": [
     "The white bishop comes out to f4.",
     "You offer a bishop trade: your d6 bishop neutralises theirs."
    ],
    "fin": "",
    "titre": "Exchange: 5.Bf4 Bd6",
    "marques": [
     [
      "f4"
     ],
     [
      "d6",
      "f4"
     ],
     []
    ]
   },
   "q3656d1200": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "The bishop pins your f6 knight.",
     "Unpin: against Bg5, your bishop always goes to e7."
    ],
    "fin": "",
    "titre": "Exchange: 5.Bg5 Be7",
    "marques": [
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "e7",
      "f6",
      "g5"
     ],
     []
    ]
   },
   "qa5aaf376f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Bd6",
     "Nxd5"
    ],
    "legendes": [
     "The move from the usual plan… but it cuts your queen off from d5.",
     "The knight takes d5: your f6 knight is pinned: if it takes back, Bxd8 takes your queen."
    ],
    "fin": "",
    "titre": "Exchange: 5…Bd6? 6.Nxd5",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "d6",
      "d8",
      "d5!"
     ],
     [
      "d5!",
      "f6!",
      "g5",
      "d8"
     ],
     [
      "d5"
     ]
    ]
   },
   "qda61c904f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "White develops.",
     "Develop your knight."
    ],
    "fin": "",
    "titre": "Exchange, 4.Qe2+ Be7 5.Nc3 Nf6",
    "marques": [
     [],
     [],
     []
    ]
   },
   "qa8ce55619": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Bg5",
     "Nc6"
    ],
    "legendes": [
     "The bishop attacks your e7 bishop, pinned to your king by the queen on e2.",
     "The knight comes out via c6: after …Nf6, Bxf6 would force you to take back with the g-pawn, since your e7 bishop cannot move."
    ],
    "fin": "",
    "titre": "Exchange, 4.Qe2+ Be7 5.Bg5 Nc6",
    "marques": [
     [
      "g5",
      "e7!",
      "e2",
      "e8"
     ],
     [
      "c6",
      "e7!",
      "e2",
      "g5"
     ],
     []
    ]
   },
   "q722e2d9e8": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "f4",
     "c5"
    ],
    "legendes": [
     "White reinforces e5.",
     "Same reply: …c5 hits d4."
    ],
    "fin": "",
    "titre": "Classical: 5.f4 c5",
    "marques": [
     [
      "f4",
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "qcdc3eef57": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "Bb5",
     "c5"
    ],
    "legendes": [
     "The bishop pins your d7 knight.",
     "Same reply: …c5 hits d4."
    ],
    "fin": "",
    "titre": "Classical: 5.Bb5 c5",
    "marques": [
     [
      "b5",
      "d7!",
      "e8"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q22d07b5f2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn: it is the Exchange Variation."
    ],
    "fin": "",
    "titre": "Classical: 4.exd5 exd5",
    "marques": [
     [],
     [],
     []
    ]
   },
   "q0b8f474f7": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4"
    ],
    "legendes": [
     "White develops, but their e4 knight is not defended.",
     "Take it: your knight is no longer pinned, the e7 bishop protects the queen."
    ],
    "fin": "",
    "titre": "Burn: 6.Nf3?? Nxe4",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "e4!",
      "f6"
     ],
     [
      "f6",
      "e7",
      "d8",
      "e4!"
     ],
     [
      "e4"
     ]
    ]
   },
   "q7cbbdd8af": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nf3"
    ],
    "legendes": [
     "White trades on f6: the right continuation for them.",
     "Take back with the bishop: it becomes a good bishop on the long diagonal.",
     "White develops."
    ],
    "fin": "",
    "titre": "Burn: 6.Bxf6 Bxf6",
    "marques": [
     [
      "f6!"
     ],
     [
      "f6"
     ],
     [],
     []
    ]
   },
   "q7a0932fc1": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "White offers a pawn to open the f-file.",
     "You hit d4 instead of defending e4."
    ],
    "fin": "",
    "titre": "Burn: 5.f3 c5",
    "marques": [
     [
      "f3!",
      "e4"
     ],
     [
      "c5",
      "d4!",
      "e4!"
     ],
     []
    ]
   },
   "q5474b2037": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "Qxf6",
     "Nxe4"
    ],
    "legendes": [
     "White takes your knight.",
     "Taking back with the queen…",
     "…and it is your queen that gets attacked."
    ],
    "fin": "",
    "titre": "Burn: 5…Qxf6?!",
    "couleurs": [
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "f6!"
     ],
     [
      "f6!"
     ],
     [
      "e4",
      "f6!"
     ],
     [
      "f6!"
     ]
    ]
   },
   "q0186a3787": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "d4",
     "Bd6"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn.",
     "White develops.",
     "You too.",
     "White plays d4: it is the Exchange Variation.",
     "In mirror image: your bishop aims at h2."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.exd5 exd5",
    "marques": [
     [],
     [],
     [],
     [],
     [
      "d4"
     ],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q60db66247": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Qb5+",
     "c6"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing.",
     "The queen keeps going.",
     "The c6 pawn blocks the check and attacks the queen, which has to move again."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.exd5 exd5 4.Qe2+ Be7 5.Qb5+ c6",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q6e0727167": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "d4",
     "c5"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4.",
     "The pawn chases your knight.",
     "It goes back to d7.",
     "White completes the chain.",
     "As in the Classical: …c5 hits d4."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.Nc3 Nf6 4.e5",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     [
      "e5",
      "f6!"
     ],
     [
      "d7"
     ],
     [
      "d4",
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q4b8196402": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "d3",
     "c5",
     "Bg5",
     "d4"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4.",
     "White supports e4 with a pawn.",
     "You gain space.",
     "The bishop pins your knight.",
     "The pawn advances and chases the c3 knight."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.Nc3 Nf6 4.d3 c5 5.Bg5 d4",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     [
      "d3",
      "e4!"
     ],
     [
      "c5"
     ],
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "d4",
      "c3!"
     ],
     []
    ]
   },
   "q480cdffa7": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Bishop check.",
     "The c6 pawn blocks the check and attacks the bishop, which has to move again."
    ],
    "fin": "",
    "titre": "2.Bc4 d5 3.exd5 exd5 4.Bb5+ c6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q6fcf7f369": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing."
    ],
    "fin": "",
    "titre": "2.Bc4 d5 3.exd5 exd5 4.Qe2+ Be7",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     []
    ]
   },
   "qff3738e44": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb3",
     "dxe4"
    ],
    "legendes": [
     "The bishop retreats without trading.",
     "Take the e4 pawn: it is not defended."
    ],
    "fin": "",
    "titre": "2.Bc4 d5 3.Bb3 dxe4",
    "marques": [
     [
      "b3"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "qdeba3c71f": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Check.",
     "The pawn blocks the check and chases the bishop."
    ],
    "fin": "",
    "titre": "2.Bc4 d5 3.Bb5+ c6",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q126ae3a42": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "exd5",
     "exd5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "Trade.",
     "Take back with the pawn.",
     "White plays d4: it is the Exchange.",
     "Develop."
    ],
    "fin": "",
    "titre": "Transposition to the Exchange",
    "marques": [
     [
      "f3"
     ],
     [
      "d5"
     ],
     [
      "d5!"
     ],
     [],
     [
      "d4"
     ],
     [
      "f6"
     ],
     []
    ]
   },
   "q5e67e8b12": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "e5",
     "c5",
     "d4",
     "Nc6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "White advances.",
     "You gain space and control d4.",
     "White plays d4: it is the Advance.",
     "A second attacker on d4."
    ],
    "fin": "",
    "titre": "Transposition to the Advance",
    "marques": [
     [
      "f3"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "c5"
     ],
     [
      "d4",
      "e5"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q621dcb38f": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Bd7",
     "O-O",
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "You take on d4.",
     "White takes back.",
     "The bishop will cover b5 as soon as your c6 knight moves: no more Bb5+. Do not take on d4 yet.",
     "White castles.",
     "Now you can take on d4: the d7 bishop prevents Bb5+.",
     "White trades.",
     "Your queen takes back, safely: you have won a pawn."
    ],
    "fin": "",
    "titre": "Advance: 6.Bd3 cxd4 7.cxd4 Bd7!",
    "marques": [
     [
      "d4!"
     ],
     [
      "d4!"
     ],
     [
      "d7",
      "b5",
      "d4"
     ],
     [
      "g1",
      "f1"
     ],
     [
      "d4!",
      "d7",
      "b5"
     ],
     [
      "d4!"
     ],
     [
      "d4"
     ],
     []
    ]
   },
   "q85034861e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "bxc6"
    ],
    "legendes": [
     "Take back at once with the b-pawn: it supports d5, and the b-file opens for your queen towards b2."
    ],
    "fin": "",
    "titre": "Advance: after Bxc6+, 6…bxc6",
    "marques": [
     [
      "c6!",
      "c8",
      "f8"
     ],
     []
    ]
   },
   "q0644bbae2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7"
    ],
    "legendes": [
     "The knight comes out to e7 without blocking your play. The g7 pawn is not defended, but if the queen takes it, your rook comes to g8 and chases her."
    ],
    "fin": "",
    "titre": "Advance, 4.dxc5 Bxc5 5.Qg4 Ne7",
    "marques": [
     [
      "e7",
      "g7!",
      "g4",
      "h8"
     ],
     []
    ]
   },
   "q85dc2f165": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7",
     "Qxg7",
     "Rg8",
     "Qxh7",
     "Qb6"
    ],
    "legendes": [
     "The knight comes out to e7.",
     "The queen takes g7…",
     "The rook attacks the queen.",
     "The queen takes h7…",
     "…and your queen aims at f2 together with your c5 bishop: you are the one attacking."
    ],
    "fin": "",
    "titre": "5.Qg4 Ne7 6.Qxg7 Rg8 7.Qxh7 Qb6",
    "marques": [
     [
      "e7"
     ],
     [
      "g7!"
     ],
     [
      "g8",
      "g7!"
     ],
     [
      "h7!"
     ],
     [
      "b6",
      "c5",
      "f2!"
     ],
     []
    ]
   },
   "q646d2d492": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7"
    ],
    "legendes": [
     "Unpin: your queen keeps defending d5."
    ],
    "fin": "",
    "titre": "Exchange: 5.Bg5 Be7",
    "marques": [
     [
      "e7",
      "f6",
      "d8",
      "d5!"
     ],
     []
    ]
   },
   "qba48194ee": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qe2",
     "c5"
    ],
    "legendes": [
     "The queen comes out to e2.",
     "Play …c5: you gain space without opening the e-file in front of your king."
    ],
    "fin": "",
    "titre": "2.Qe2 c5",
    "marques": [
     [
      "e2"
     ],
     [
      "c5",
      "e2",
      "e8"
     ],
     []
    ]
   },
   "q255883eed": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6",
     "Be3",
     "cxd4"
    ],
    "coups": [
     "Bxd4"
    ],
    "legendes": [
     "White's right recapture: the bishop takes back and the f3 knight keeps defending e5."
    ],
    "fin": "",
    "titre": "Advance: 6.Bxd4",
    "marques": [
     [
      "d4!",
      "f3",
      "e5!"
     ],
     []
    ]
   },
   "qd5032a2ba": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "Qxc6"
    ],
    "legendes": [
     "Taking back with the queen is also played, but it is less good: the queen is exposed on the c-file."
    ],
    "fin": "",
    "titre": "Advance: 6…Qxc6",
    "marques": [
     [
      "c6!"
     ],
     []
    ]
   },
   "qc4dd92c1b": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d3",
     "d5",
     "Nd2",
     "c5"
    ],
    "legendes": [
     "White prepares a closed set-up.",
     "Your usual move.",
     "White supports e4.",
     "You gain space."
    ],
    "fin": "",
    "titre": "2.d3",
    "marques": [
     [
      "d3"
     ],
     [
      "d5"
     ],
     [
      "d2",
      "e4!"
     ],
     [
      "c5"
     ],
     []
    ]
   },
   "q5f3591c2b": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nc3",
     "d5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "We are back in 2.d4 d5 3.Nc3.",
     "The Classical: you attack e4."
    ],
    "fin": "",
    "titre": "2.Nc3",
    "marques": [
     [
      "c3"
     ],
     [
      "d5"
     ],
     [
      "d4",
      "d5",
      "c3"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "qb273202ec": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "f4",
     "d5",
     "e5",
     "c5"
    ],
    "legendes": [
     "The f-pawn advances.",
     "Your usual move.",
     "White closes the centre.",
     "You gain space and control d4."
    ],
    "fin": "",
    "titre": "2.f4",
    "marques": [
     [
      "f4"
     ],
     [
      "d5"
     ],
     [
      "e5"
     ],
     [
      "c5"
     ],
     []
    ]
   },
   "qafa5924cc": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "c4",
     "d5"
    ],
    "legendes": [
     "The c-pawn advances.",
     "Your usual move: you attack e4 and c4."
    ],
    "fin": "",
    "titre": "2.c4",
    "marques": [
     [
      "c4"
     ],
     [
      "d5",
      "e4!",
      "c4!"
     ],
     []
    ]
   },
   "q25e9551db": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "b3",
     "d5"
    ],
    "legendes": [
     "White prepares Bb2.",
     "Your usual move."
    ],
    "fin": "",
    "titre": "2.b3",
    "marques": [
     [
      "c1",
      "b2"
     ],
     [
      "d5"
     ],
     []
    ]
   },
   "q97a7ae10a": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6"
    ],
    "legendes": [
     "The queen comes out early.",
     "You develop while attacking the queen."
    ],
    "fin": "",
    "titre": "2.Qh5",
    "marques": [
     [
      "h5"
     ],
     [
      "f6",
      "h5!"
     ],
     []
    ]
   },
   "q7aa507992": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qg4",
     "d5"
    ],
    "legendes": [
     "The queen comes out early.",
     "Your usual move: the queen on g4 does not hinder …d5."
    ],
    "fin": "",
    "titre": "2.Qg4",
    "marques": [
     [
      "g4"
     ],
     [
      "d5",
      "g4"
     ],
     []
    ]
   },
   "qff02778e8": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qf3",
     "c5"
    ],
    "legendes": [
     "The queen comes out to f3.",
     "You gain space; …Nc6 and …d5 will follow."
    ],
    "fin": "",
    "titre": "2.Qf3",
    "marques": [
     [
      "f3"
     ],
     [
      "c5",
      "c6",
      "d5"
     ],
     []
    ]
   },
   "q220ded635": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "The pawn advances on its own.",
     "You gain space; …Nc6 will attack e5."
    ],
    "fin": "",
    "titre": "2.e5",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "c6",
      "e5!"
     ],
     []
    ]
   },
   "q0bf9f0df2": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "g3",
     "d5"
    ],
    "legendes": [
     "White prepares Bg2.",
     "Your usual move."
    ],
    "fin": "",
    "titre": "2.g3",
    "marques": [
     [
      "f1",
      "g2"
     ],
     [
      "d5"
     ],
     []
    ]
   },
   "q5fed1032e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nd2",
     "c5"
    ],
    "legendes": [
     "The Tarrasch: the knight defends e4 from d2.",
     "You hit d4 right away."
    ],
    "fin": "",
    "titre": "3.Nd2 (Tarrasch)",
    "marques": [
     [
      "d2",
      "e4!"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q101cdac30": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bd3",
     "dxe4",
     "Bxe4",
     "Nf6"
    ],
    "legendes": [
     "The bishop defends e4.",
     "You trade.",
     "The bishop takes back.",
     "You develop while attacking the bishop."
    ],
    "fin": "",
    "titre": "3.Bd3",
    "marques": [
     [
      "d3",
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q071a1772e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Check.",
     "The pawn blocks the check and chases the bishop."
    ],
    "fin": "",
    "titre": "3.Bb5+",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5!"
     ],
     []
    ]
   },
   "q462b27776": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4"
    ],
    "legendes": [
     "The knight comes out, but e4 is still not defended.",
     "Take it."
    ],
    "fin": "",
    "titre": "3.Nf3 ?",
    "marques": [
     [
      "f3",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q0f441dccc": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c4",
     "dxe4"
    ],
    "legendes": [
     "The c-pawn advances, e4 is still not defended.",
     "Take it."
    ],
    "fin": "",
    "titre": "3.c4",
    "marques": [
     [
      "c4",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q930d31ca2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "White defends e4 with a pawn.",
     "You hit d4."
    ],
    "fin": "",
    "titre": "3.f3",
    "marques": [
     [
      "f3",
      "e4!"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q11c4afcf8": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Be3",
     "dxe4"
    ],
    "legendes": [
     "The bishop comes out, e4 is still not defended.",
     "Take it."
    ],
    "fin": "",
    "titre": "3.Be3",
    "marques": [
     [
      "e3",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "q2bcbe9bec": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c3",
     "dxe4"
    ],
    "legendes": [
     "White supports d4, not e4.",
     "Take the e4 pawn."
    ],
    "fin": "",
    "titre": "3.c3",
    "marques": [
     [
      "c3",
      "d4",
      "e4!"
     ],
     [
      "e4!"
     ],
     []
    ]
   },
   "qde110d333": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Qe2",
     "dxe4",
     "Qxe4",
     "Nf6"
    ],
    "legendes": [
     "The queen defends e4.",
     "You trade.",
     "The queen takes back.",
     "You develop while attacking the queen."
    ],
    "fin": "",
    "titre": "3.Qe2",
    "marques": [
     [
      "e2",
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "e4!"
     ],
     [
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q837fb5f81": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bg5",
     "Qxg5"
    ],
    "legendes": [
     "The bishop attacks your queen… on a square your queen controls.",
     "Take it: a free piece."
    ],
    "fin": "",
    "titre": "3.Bg5 ??",
    "couleurs": [
     "r",
     "v"
    ],
    "marques": [
     [
      "g5!",
      "d8"
     ],
     [
      "g5!"
     ],
     []
    ]
   },
   "q1030cfc72": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "gxf6",
     "Nxe4",
     "f5"
    ],
    "legendes": [
     "White takes your knight.",
     "Take back with the g-pawn: the g-file and the bishop pair.",
     "White takes their pawn back.",
     "The pawn chases the knight."
    ],
    "fin": "",
    "titre": "Burn: 5.Bxf6 gxf6!",
    "marques": [
     [
      "f6!"
     ],
     [
      "f6!",
      "c8",
      "f8"
     ],
     [
      "e4!"
     ],
     [
      "f5",
      "e4!"
     ],
     []
    ]
   },
   "qf2e5104df": {
    "debut": [],
    "coups": [
     "e4",
     "e6"
    ],
    "legendes": [
     "White plays 1.e4.",
     "The French: you prepare …d5."
    ],
    "fin": "",
    "titre": "1.e4 e6",
    "marques": [
     [
      "e4"
     ],
     [
      "e6",
      "d5"
     ],
     []
    ]
   },
   "qeb95eb4e9": {
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d4",
     "d5"
    ],
    "legendes": [
     "White takes the centre.",
     "You attack e4."
    ],
    "fin": "",
    "titre": "2.d4 d5",
    "marques": [
     [
      "d4",
      "e4"
     ],
     [
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "q905fad9b4": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "The Advance.",
     "You attack the base, d4."
    ],
    "fin": "",
    "titre": "Advance: 3…c5",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "qadd44dab6": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "c3",
     "Nc6"
    ],
    "legendes": [
     "White supports d4.",
     "A second attacker on d4."
    ],
    "fin": "",
    "titre": "Advance: 4.c3 Nc6",
    "marques": [
     [
      "c3",
      "d4!"
     ],
     [
      "c6",
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q1b98798b2": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5"
    ],
    "legendes": [
     "White takes on c5.",
     "The bishop takes back while developing."
    ],
    "fin": "",
    "titre": "Advance: 4.dxc5 Bxc5",
    "marques": [
     [
      "c5!"
     ],
     [
      "c5!"
     ],
     []
    ]
   },
   "q9b99194ae": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "White defends d4.",
     "The queen eyes b2, and d4 behind your c5 pawn."
    ],
    "fin": "",
    "titre": "Advance: 5.Nf3 Qb6",
    "marques": [
     [
      "f3",
      "d4!"
     ],
     [
      "b6",
      "d4!",
      "b2!"
     ],
     []
    ]
   },
   "q25043273e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "The Exchange.",
     "Take back with the pawn: your c8 bishop is freed."
    ],
    "fin": "",
    "titre": "Exchange: 3…exd5",
    "marques": [
     [
      "d5!"
     ],
     [
      "d5!",
      "c8"
     ],
     []
    ]
   },
   "q07b1c55f5": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "White develops.",
     "You too."
    ],
    "fin": "",
    "titre": "Exchange: 4.Nf3 Nf6",
    "marques": [
     [
      "f3"
     ],
     [
      "f6"
     ],
     []
    ]
   },
   "qd2213b49e": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing."
    ],
    "fin": "",
    "titre": "Exchange: 4.Qe2+ Be7",
    "marques": [
     [
      "e2",
      "e8!"
     ],
     [
      "e7",
      "e2",
      "e8!"
     ],
     []
    ]
   },
   "qe69740756": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "The bishop aims at h7.",
     "In mirror image: your bishop aims at h2."
    ],
    "fin": "",
    "titre": "Exchange: 5.Bd3 Bd6",
    "marques": [
     [
      "d3",
      "h7!"
     ],
     [
      "d6",
      "h2!"
     ],
     []
    ]
   },
   "q22d1b3b29": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4 a second time."
    ],
    "fin": "",
    "titre": "Classical: 3…Nf6",
    "marques": [
     [
      "c3",
      "e4!"
     ],
     [
      "f6",
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "qdac19d728": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "The pawn chases your knight.",
     "It goes back to d7.",
     "White supports d4.",
     "You hit d4."
    ],
    "fin": "",
    "titre": "Classical: 4.e5 Nfd7 5.Nf3 c5",
    "marques": [
     [
      "e5",
      "f6!"
     ],
     [
      "d7"
     ],
     [
      "f3",
      "d4"
     ],
     [
      "c5",
      "d4!"
     ],
     []
    ]
   },
   "q9d338c178": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4"
    ],
    "legendes": [
     "The pin.",
     "You trade d5 for e4."
    ],
    "fin": "",
    "titre": "Classical: 4.Bg5 dxe4",
    "marques": [
     [
      "g5",
      "f6!",
      "d8"
     ],
     [
      "d5",
      "e4!"
     ],
     []
    ]
   },
   "q9ccab60f9": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "White takes back.",
     "You unpin; your knight attacks e4."
    ],
    "fin": "",
    "titre": "Burn: 5.Nxe4 Be7",
    "marques": [
     [
      "e4!"
     ],
     [
      "e7",
      "f6",
      "e4!"
     ],
     []
    ]
   },
   "q4f50b8890": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Bd7"
    ],
    "legendes": [
     "Check.",
     "Block with the bishop: you offer a trade of your bad bishop."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.e5 c5 4.Bb5+ Bd7",
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "d7",
      "b5",
      "e8!"
     ],
     []
    ]
   },
   "q4c0712b27": {
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn: the c4 bishop is attacked again."
    ],
    "fin": "",
    "titre": "2.Bc4 d5 3.exd5 exd5",
    "marques": [
     [
      "d5!"
     ],
     [
      "d5",
      "c4!"
     ],
     []
    ]
   },
   "q315c6f16d": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "legendes": [
     "White advances.",
     "You hit the base.",
     "White supports d4.",
     "A second attacker; your g8 knight will come out via e7 or h6, not via f6."
    ],
    "fin": "",
    "titre": "Advance: …c5 and …Nc6, not …Nf6",
    "marques": [
     [
      "e5"
     ],
     [
      "c5",
      "d4!"
     ],
     [
      "c3",
      "d4!"
     ],
     [
      "c6",
      "d4!",
      "g8",
      "f6!"
     ],
     []
    ]
   },
   "q3b8890834": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5"
    ],
    "coups": [
     "Nf6",
     "exf6"
    ],
    "legendes": [
     "The knight comes out… onto a square controlled by the e5 pawn.",
     "The pawn takes it: a piece down (+3.7)."
    ],
    "fin": "",
    "titre": "Advance: 3…Nf6??",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "f6!",
      "e5"
     ],
     [
      "f6!"
     ],
     []
    ]
   },
   "q05ab1a36a": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3",
     "cxd4",
     "cxd4"
    ],
    "coups": [
     "Nxd4",
     "Nxd4",
     "Qxd4",
     "Bb5+"
    ],
    "legendes": [
     "You take on d4 at once…",
     "White takes back.",
     "Your queen takes back, facing the queen on d1, hidden behind the d3 bishop…",
     "…and the bishop moves away with check: the queen on d1 attacks yours. You lose your queen (+6.8)."
    ],
    "fin": "",
    "titre": "Advance: 7…Nxd4?? and Bb5+",
    "couleurs": [
     "r",
     "g",
     "r",
     "g"
    ],
    "marques": [
     [
      "d4!"
     ],
     [],
     [
      "d4!",
      "d1",
      "d3"
     ],
     [
      "b5",
      "e8!",
      "d1",
      "d4!"
     ],
     []
    ]
   },
   "qf6a0cad58": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Nc6",
     "Qxg7"
    ],
    "legendes": [
     "You develop without looking at the queen on g4.",
     "She takes g7 and attacks your h8 rook (+3.9)."
    ],
    "fin": "",
    "titre": "4.dxc5 Bxc5 5.Qg4 Nc6 ??",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "c6",
      "g4",
      "g7!"
     ],
     [
      "g7",
      "h8!"
     ],
     []
    ]
   },
   "qfbac92fb5": {
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5",
     "dxc5",
     "Nc6",
     "Bf4",
     "Bxc5",
     "Bd3"
    ],
    "coups": [
     "O-O",
     "Bxh7+"
    ],
    "legendes": [
     "You castle… with no bishop or knight to defend h7 and g5.",
     "The bishop sacrifices itself on h7: White is clearly better (+1.8)."
    ],
    "fin": "",
    "titre": "Classical: 8…O-O? Bxh7+",
    "couleurs": [
     "r",
     "g"
    ],
    "marques": [
     [
      "g8",
      "h7!",
      "g5"
     ],
     [
      "h7!",
      "g8"
     ],
     []
    ]
   },
   "qb0a601108": {
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Check.",
     "The knight blocks the check, and your c8 bishop stays shut in behind e6 (+0.4)."
    ],
    "fin": "",
    "titre": "2.Nf3 d5 3.e5 c5 4.Bb5+ Nc6 ?!",
    "couleurs": [
     "g",
     "r"
    ],
    "marques": [
     [
      "b5",
      "e8!"
     ],
     [
      "c6",
      "b5",
      "c8",
      "e6"
     ],
     []
    ]
   }
  },
  "quiz": [
   {
    "id": "q76e351bbd",
    "titre": "Advance: the main line",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "White advances and closes the centre. Their d4-e5 pawn chain gains space… but every chain has a base. Here, it is d4.",
     "You attack the base right away: <span class=\"mv good\">3…c5</span>. It is THE move of the French. Without it, you suffocate.",
     "White supports d4 with the c-pawn (50%). After <a class=\"lien-var\" href=\"#\" data-var=\"qcf913e84e\">4.Nf3</a>, same reply.",
     "A second attacker on d4. No …Nf6 in this variation: the e5 pawn would take your knight (see the exceptions).",
     "White defends d4 a third time. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qc30bc31e9\">5.Bb5</a> and <a class=\"lien-var\" href=\"#\" data-var=\"q718425163\">5.Be3</a>.",
     "<span class=\"mv good\">5…Qb6</span>: your queen gets ready to hit d4 and already eyes the b2 pawn."
    ]
   },
   {
    "id": "qcf913e84e",
    "titre": "Advance: 4.Nf3 Nc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "White develops instead of supporting d4 with c3.",
     "Same reply: the knight attacks d4."
    ]
   },
   {
    "id": "qc30bc31e9",
    "titre": "Advance: 5.Bb5 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "The bishop pins your c6 knight.",
     "The queen attacks the b5 bishop. Once the bishop has gone, she will eye b2 and d4."
    ]
   },
   {
    "id": "q718425163",
    "titre": "Advance: 5.Be3 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "Qb6"
    ],
    "legendes": [
     "The bishop defends d4.",
     "Same plan: the queen eyes b2, which the e3 bishop no longer defends, and d4."
    ]
   },
   {
    "id": "q0eca7d64b",
    "titre": "Advance, 4.Nf3 Nc6 5.Bb5 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Bb5",
     "Qb6"
    ],
    "legendes": [
     "The bishop pins your knight.",
     "The queen attacks the b5 bishop."
    ]
   },
   {
    "id": "q7a0026f6b",
    "titre": "Advance, 4.Nf3 Nc6 5.c3 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "c3",
     "Qb6"
    ],
    "legendes": [
     "White supports d4: we are back in the main line.",
     "Your queen eyes b2, and d4 behind your c5 pawn, as usual."
    ]
   },
   {
    "id": "qa2013ae9d",
    "titre": "Advance, 4.Nf3 Nc6 5.Be3 cxd4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6"
    ],
    "coups": [
     "Be3",
     "cxd4"
    ],
    "legendes": [
     "The bishop defends d4.",
     "You take on d4 at once: if the f3 knight takes back, the e5 pawn will have no defender left."
    ]
   },
   {
    "id": "q643c602b3",
    "titre": "4.dxc5: the bishop takes back",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5",
     "Nf3",
     "Nc6"
    ],
    "legendes": [
     "White takes on c5 (5% of games): they give up the base of their chain.",
     "Take back at once with the bishop: it develops onto a fine diagonal, aiming at f2.",
     "White defends e5. Against <a class=\"lien-var\" href=\"#\" data-var=\"q6f71ee263\">5.Nc3</a> or <a class=\"lien-var\" href=\"#\" data-var=\"q5c03a7d7d\">5.Bb5+</a>, same reply.",
     "You attack e5 in turn. Then …f6 or …Qc7."
    ]
   },
   {
    "id": "q6f71ee263",
    "titre": "Advance, 4.dxc5 Bxc5 5.Nc3 Nc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Nc3",
     "Nc6"
    ],
    "legendes": [
     "White develops.",
     "You attack e5, which no longer has a d4 pawn to support it."
    ]
   },
   {
    "id": "q5c03a7d7d",
    "titre": "Advance, 4.dxc5 Bxc5 5.Bb5+ Nc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5"
    ],
    "coups": [
     "Bb5+",
     "Nc6"
    ],
    "legendes": [
     "Check.",
     "Block with the knight: it develops and attacks e5."
    ]
   },
   {
    "id": "qb2ed36575",
    "titre": "Exchange: the main line",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nf3",
     "Nf6",
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "White trades. The position becomes symmetrical and calm.",
     "Take back with the pawn. Good news: the c8-h3 diagonal opens, your c8 bishop is no longer shut in.",
     "Development.",
     "The same for you.",
     "The white bishop aims at h7. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qc8d612ba1\">5.Nc3</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q3656d1200\">5.Bg5</a>.",
     "You do the same: <span class=\"mv\">5…Bd6</span> aims at h2. Then <span class=\"mv\">…O-O</span>, <span class=\"mv\">…Re8</span> on the open file, <span class=\"mv\">…Bg4</span>."
    ]
   },
   {
    "id": "qc8d612ba1",
    "titre": "Exchange: 5.Nc3 Bd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Nc3",
     "Bd6"
    ],
    "legendes": [
     "White develops.",
     "In mirror image: your bishop aims at h2."
    ]
   },
   {
    "id": "q3656d1200",
    "titre": "Exchange: 5.Bg5 Be7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "The bishop pins your f6 knight.",
     "Unpin: against Bg5, your bishop always goes to e7."
    ]
   },
   {
    "id": "q1deb7307e",
    "titre": "Exchange: 5.Bf4 Bd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bf4",
     "Bd6"
    ],
    "legendes": [
     "The white bishop comes out to f4.",
     "You offer a bishop trade: your d6 bishop neutralises theirs."
    ]
   },
   {
    "id": "q2ae34efee",
    "titre": "5.Bg5: why Be7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "Be7"
    ],
    "legendes": [
     "The bishop pins your f6 knight to your queen. The d5 pawn is attacked by the c3 knight, and defended by your knight and your queen.",
     "<span class=\"mv good\">5…Be7</span> unpins the knight, and your queen keeps the d-file towards d5. After <a class=\"lien-var\" href=\"#\" data-var=\"qa5aaf376f\">5…Bd6?</a>, the bishop cuts your queen off from d5: only the pinned knight is left, and 6.Nxd5! wins a pawn (+1.7). If 6…Nxd5, 7.Bxd8."
    ]
   },
   {
    "id": "q98712d8c3",
    "titre": "4.Qe2+: block with the bishop",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "Queen check (10%).",
     "Block with the bishop while developing. Stockfish already finds this position better for you (−0.4): the white queen blocks the way out for its own f1 bishop.",
     "White develops. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"qda61c904f\">5.Nc3</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qa8ce55619\">5.Bg5</a>.",
     "Develop your knight."
    ]
   },
   {
    "id": "qda61c904f",
    "titre": "Exchange, 4.Qe2+ Be7 5.Nc3 Nf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "White develops.",
     "Develop your knight."
    ]
   },
   {
    "id": "qa8ce55619",
    "titre": "Exchange, 4.Qe2+ Be7 5.Bg5 Nc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Qe2+",
     "Be7"
    ],
    "coups": [
     "Bg5",
     "Nc6"
    ],
    "legendes": [
     "The bishop attacks your e7 bishop, pinned to your king by the queen on e2.",
     "The knight comes out via c6: after …Nf6, Bxf6 would force you to take back with the g-pawn, since your e7 bishop cannot move."
    ]
   },
   {
    "id": "q3cb05ee94",
    "titre": "4.e5: the knight goes back to d7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "White defends e4 with the knight.",
     "You attack e4 a second time.",
     "White pushes and chases your knight (58%). Your knight has to go back.",
     "It goes back to d7, and that is the right square: Stockfish clearly prefers it to …Ne4 or …Ng8 (+0.4 against +0.9 and +1.0). From d7, it supports …c5 and will be able to attack e5.",
     "White supports e5 and d4.",
     "And here is the French move: <span class=\"mv good\">5…c5</span>, you hit d4. Same reply against <a class=\"lien-var\" href=\"#\" data-var=\"q722e2d9e8\">5.f4</a> and against <a class=\"lien-var\" href=\"#\" data-var=\"qcdc3eef57\">5.Bb5</a>."
    ]
   },
   {
    "id": "q722e2d9e8",
    "titre": "Classical: 5.f4 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "f4",
     "c5"
    ],
    "legendes": [
     "White reinforces e5.",
     "Same reply: …c5 hits d4."
    ]
   },
   {
    "id": "qcdc3eef57",
    "titre": "Classical: 5.Bb5 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7"
    ],
    "coups": [
     "Bb5",
     "c5"
    ],
    "legendes": [
     "The bishop pins your d7 knight.",
     "Same reply: …c5 hits d4."
    ]
   },
   {
    "id": "q22d07b5f2",
    "titre": "Classical: 4.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn: it is the Exchange Variation."
    ]
   },
   {
    "id": "q5dd86a571",
    "titre": "4.Bg5: the Burn Variation",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "White pins your f6 knight.",
     "<span class=\"mv good\">4…dxe4</span>: you trade your d5 pawn for e4. The f6 knight no longer has a d5 pawn to defend.",
     "White takes back (65%).",
     "You unpin. Careful: your f6 knight now attacks the e4 knight, which nothing defends."
    ]
   },
   {
    "id": "q0b8f474f7",
    "titre": "Burn: 6.Nf3?? Nxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4"
    ],
    "legendes": [
     "White develops, but their e4 knight is not defended.",
     "Take it: your knight is no longer pinned, the e7 bishop protects the queen."
    ]
   },
   {
    "id": "q7cbbdd8af",
    "titre": "Burn: 6.Bxf6 Bxf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Bxf6",
     "Bxf6",
     "Nf3"
    ],
    "legendes": [
     "White trades on f6: the right continuation for them.",
     "Take back with the bishop: it becomes a good bishop on the long diagonal.",
     "White develops."
    ]
   },
   {
    "id": "q1030cfc72",
    "titre": "5.Bxf6: take back with the pawn",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Bxf6",
     "gxf6",
     "Nxe4",
     "f5"
    ],
    "legendes": [
     "White takes your knight at once (23%).",
     "<span class=\"mv good\">5…gxf6</span>! Take back with the g-pawn, not with the queen. The doubled pawns do not bother you: you gain the g-file for your rook, and the bishop pair.",
     "White takes their pawn back.",
     "The f-pawn chases the knight: you gain a tempo."
    ]
   },
   {
    "id": "q7a0932fc1",
    "titre": "Burn: 5.f3 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "White offers a pawn to open the f-file.",
     "You hit d4 instead of defending e4."
    ]
   },
   {
    "id": "q24100b877",
    "titre": "3.e5 c5 4.Bb5+",
    "debut": [
     "e4",
     "e6",
     "Nf3"
    ],
    "coups": [
     "d5",
     "e5",
     "c5",
     "Bb5+",
     "Bd7",
     "Bxd7+",
     "Nxd7"
    ],
    "legendes": [
     "Always the same move.",
     "The Advance, but without a pawn on d4. The other moves: <a class=\"lien-var\" href=\"#\" data-var=\"q0186a3787\">3.exd5 exd5</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6e0727167\">3.Nc3 Nf6 4.e5 Nfd7</a>.",
     "You gain space on the queenside, as usual.",
     "Check.",
     "<span class=\"mv good\">4…Bd7</span>: you offer to trade your c8 bishop, the one shut in by e6. Much better than 4…Nc6 (−0.4 against +0.4).",
     "White trades (65%).",
     "Take back with the knight: Stockfish prefers it to the queen."
    ]
   },
   {
    "id": "q0186a3787",
    "titre": "2.Nf3 d5 3.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "d4",
     "Bd6"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn.",
     "White develops.",
     "You too.",
     "White plays d4: it is the Exchange Variation.",
     "In mirror image: your bishop aims at h2."
    ]
   },
   {
    "id": "q6e0727167",
    "titre": "2.Nf3 d5 3.Nc3 Nf6 4.e5",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "d4",
     "c5"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4.",
     "The pawn chases your knight.",
     "It goes back to d7.",
     "White completes the chain.",
     "As in the Classical: …c5 hits d4."
    ]
   },
   {
    "id": "q60db66247",
    "titre": "2.Nf3 d5 3.exd5 exd5 4.Qe2+ Be7 5.Qb5+ c6",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7",
     "Qb5+",
     "c6"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing.",
     "The queen keeps going.",
     "The c6 pawn blocks the check and attacks the queen, which has to move again."
    ]
   },
   {
    "id": "q4b8196402",
    "titre": "2.Nf3 d5 3.Nc3 Nf6 4.d3 c5 5.Bg5 d4",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6",
     "d3",
     "c5",
     "Bg5",
     "d4"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4.",
     "White supports e4 with a pawn.",
     "You gain space.",
     "The bishop pins your knight.",
     "The pawn advances and chases the c3 knight."
    ]
   },
   {
    "id": "q221770c6e",
    "titre": "2.Bc4 d5: the bishop gets chased",
    "debut": [
     "e4",
     "e6",
     "Bc4"
    ],
    "coups": [
     "d5",
     "exd5",
     "exd5",
     "Bb3",
     "Nf6",
     "Nf3",
     "Bd6"
    ],
    "legendes": [
     "<span class=\"mv good\">2…d5</span>! The pawn attacks the c4 bishop and the e4 pawn at the same time.",
     "White trades (93%). The others: <a class=\"lien-var\" href=\"#\" data-var=\"qff3738e44\">3.Bb3</a> and <a class=\"lien-var\" href=\"#\" data-var=\"qdeba3c71f\">3.Bb5+</a>.",
     "Take back with the pawn: the c4 bishop is attacked again.",
     "It retreats. The others: <a class=\"lien-var\" href=\"#\" data-var=\"q480cdffa7\">4.Bb5+</a>, <a class=\"lien-var\" href=\"#\" data-var=\"q6fcf7f369\">4.Qe2+</a>.",
     "Normal development.",
     "White too.",
     "Then …O-O and …Re8. The white bishop has already moved twice for nothing."
    ]
   },
   {
    "id": "qff3738e44",
    "titre": "2.Bc4 d5 3.Bb3 dxe4",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb3",
     "dxe4"
    ],
    "legendes": [
     "The bishop retreats without trading.",
     "Take the e4 pawn: it is not defended."
    ]
   },
   {
    "id": "qdeba3c71f",
    "titre": "2.Bc4 d5 3.Bb5+ c6",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Check.",
     "The pawn blocks the check and chases the bishop."
    ]
   },
   {
    "id": "q480cdffa7",
    "titre": "2.Bc4 d5 3.exd5 exd5 4.Bb5+ c6",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Bishop check.",
     "The c6 pawn blocks the check and attacks the bishop, which has to move again."
    ]
   },
   {
    "id": "q6fcf7f369",
    "titre": "2.Bc4 d5 3.exd5 exd5 4.Qe2+ Be7",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing."
    ]
   },
   {
    "id": "q126ae3a42",
    "titre": "Transposition to the Exchange",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "exd5",
     "exd5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "Trade.",
     "Take back with the pawn.",
     "White plays d4: it is the Exchange.",
     "Develop."
    ]
   },
   {
    "id": "q5e67e8b12",
    "titre": "Transposition to the Advance",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nf3",
     "d5",
     "e5",
     "c5",
     "d4",
     "Nc6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "White advances.",
     "You gain space and control d4.",
     "White plays d4: it is the Advance.",
     "A second attacker on d4."
    ]
   },
   {
    "id": "qf2e5104df",
    "titre": "1.e4 e6",
    "debut": [],
    "coups": [
     "e4",
     "e6"
    ],
    "legendes": [
     "White plays 1.e4.",
     "The French: you prepare …d5."
    ]
   },
   {
    "id": "qeb95eb4e9",
    "titre": "2.d4 d5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d4",
     "d5"
    ],
    "legendes": [
     "White takes the centre.",
     "You attack e4."
    ]
   },
   {
    "id": "q905fad9b4",
    "titre": "Advance: 3…c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "The Advance.",
     "You attack the base, d4."
    ]
   },
   {
    "id": "qadd44dab6",
    "titre": "Advance: 4.c3 Nc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "c3",
     "Nc6"
    ],
    "legendes": [
     "White supports d4.",
     "A second attacker on d4."
    ]
   },
   {
    "id": "q1b98798b2",
    "titre": "Advance: 4.dxc5 Bxc5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5"
    ],
    "legendes": [
     "White takes on c5.",
     "The bishop takes back while developing."
    ]
   },
   {
    "id": "q9b99194ae",
    "titre": "Advance: 5.Nf3 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "coups": [
     "Nf3",
     "Qb6"
    ],
    "legendes": [
     "White defends d4.",
     "The queen eyes b2, and d4 behind your c5 pawn."
    ]
   },
   {
    "id": "q25043273e",
    "titre": "Exchange: 3…exd5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "The Exchange.",
     "Take back with the pawn: your c8 bishop is freed."
    ]
   },
   {
    "id": "q07b1c55f5",
    "titre": "Exchange: 4.Nf3 Nf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6"
    ],
    "legendes": [
     "White develops.",
     "You too."
    ]
   },
   {
    "id": "qd2213b49e",
    "titre": "Exchange: 4.Qe2+ Be7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Qe2+",
     "Be7"
    ],
    "legendes": [
     "Queen check.",
     "Block with the bishop while developing."
    ]
   },
   {
    "id": "qe69740756",
    "titre": "Exchange: 5.Bd3 Bd6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nf3",
     "Nf6"
    ],
    "coups": [
     "Bd3",
     "Bd6"
    ],
    "legendes": [
     "The bishop aims at h7.",
     "In mirror image: your bishop aims at h2."
    ]
   },
   {
    "id": "q22d1b3b29",
    "titre": "Classical: 3…Nf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nc3",
     "Nf6"
    ],
    "legendes": [
     "White defends e4.",
     "You attack e4 a second time."
    ]
   },
   {
    "id": "qdac19d728",
    "titre": "Classical: 4.e5 Nfd7 5.Nf3 c5",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "legendes": [
     "The pawn chases your knight.",
     "It goes back to d7.",
     "White supports d4.",
     "You hit d4."
    ]
   },
   {
    "id": "q9d338c178",
    "titre": "Classical: 4.Bg5 dxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6"
    ],
    "coups": [
     "Bg5",
     "dxe4"
    ],
    "legendes": [
     "The pin.",
     "You trade d5 for e4."
    ]
   },
   {
    "id": "q9ccab60f9",
    "titre": "Burn: 5.Nxe4 Be7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4"
    ],
    "coups": [
     "Nxe4",
     "Be7"
    ],
    "legendes": [
     "White takes back.",
     "You unpin; your knight attacks e4."
    ]
   },
   {
    "id": "q4f50b8890",
    "titre": "2.Nf3 d5 3.e5 c5 4.Bb5+ Bd7",
    "debut": [
     "e4",
     "e6",
     "Nf3",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "Bb5+",
     "Bd7"
    ],
    "legendes": [
     "Check.",
     "Block with the bishop: you offer a trade of your bad bishop."
    ]
   },
   {
    "id": "q4c0712b27",
    "titre": "2.Bc4 d5 3.exd5 exd5",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5"
    ],
    "coups": [
     "exd5",
     "exd5"
    ],
    "legendes": [
     "White trades.",
     "Take back with the pawn: the c4 bishop is attacked again."
    ]
   },
   {
    "id": "q621dcb38f",
    "titre": "Advance: 6.Bd3 cxd4 7.cxd4 Bd7!",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Bd3"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Bd7",
     "O-O",
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "You take on d4.",
     "White takes back.",
     "The bishop will cover b5 as soon as your c6 knight moves: no more Bb5+. Do not take on d4 yet.",
     "White castles.",
     "Now you can take on d4: the d7 bishop prevents Bb5+.",
     "White trades.",
     "Your queen takes back, safely: you have won a pawn."
    ]
   },
   {
    "id": "q0644bbae2",
    "titre": "Advance, 4.dxc5 Bxc5 5.Qg4 Ne7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7"
    ],
    "legendes": [
     "The knight comes out to e7 without blocking your play. The g7 pawn is not defended, but if the queen takes it, your rook comes to g8 and chases her."
    ]
   },
   {
    "id": "q1e1753281",
    "titre": "Advance: three attackers against two",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6",
     "Be2"
    ],
    "coups": [
     "cxd4",
     "cxd4",
     "Nge7",
     "O-O",
     "Nf5",
     "Nc3",
     "Nfxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "You take on d4. Once the c3 pawn has taken back, no pawn will support d4 any more.",
     "White takes back.",
     "The g8 knight sets off for f5 (…Nh6 then …Nf5 is also played).",
     "<span class=\"mv bad\">8.O-O</span>? White castles, but d4 has only two defenders.",
     "A third attacker on d4: there are now three. Stockfish goes from +0.4 to −0.9.",
     "White develops… and forgets to count.",
     "<span class=\"mv good\">9…Nfxd4</span>! Take with the f5 knight. The c6 knight stays put: it blocks the diagonal to your king (no Bb5+) and eyes e5. After 9…Ncxd4?!, 10.Bd3 would attack the f5 knight, and White would have enough play for their pawn (−0.1).",
     "White takes back.",
     "Your queen takes back: a pawn up, and she attacks e5 and the queen on d1."
    ]
   },
   {
    "id": "q3bfed4174",
    "titre": "Advance 4.dxc5: the …f6 break",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5"
    ],
    "coups": [
     "dxc5",
     "Bxc5",
     "Nf3",
     "Nc6",
     "Bd3",
     "f6",
     "Qe2",
     "fxe5",
     "Nxe5",
     "Nxe5",
     "Qxe5",
     "Nf6"
    ],
    "legendes": [
     "White takes on c5: the chain no longer has a base.",
     "The bishop takes back while developing.",
     "The knight defends e5.",
     "You attack e5.",
     "The bishop aims at h7.",
     "<span class=\"mv good\">6…f6</span>! Without a pawn on d4, e5 has only the f3 knight to defend it. You attack it a second time.",
     "The queen supports e5.",
     "You take.",
     "The knight takes back.",
     "You trade.",
     "The queen takes back: the e5 pawn has gone.",
     "You develop. Your d5-e6 centre is free, and your rook will go to the f-file after castling."
    ]
   },
   {
    "id": "qe1ac3c984",
    "titre": "Exchange: pieces first",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Nf3",
     "Nf6",
     "Bd3",
     "Bd6",
     "O-O",
     "O-O",
     "Bg5",
     "Bg4",
     "Nbd2",
     "Re8"
    ],
    "legendes": [
     "Development.",
     "You too.",
     "The bishop aims at h7.",
     "In mirror image: your bishop aims at h2.",
     "White castles.",
     "You too.",
     "The bishop pins your f6 knight.",
     "You do the same: your bishop pins the f3 knight.",
     "The knight comes out.",
     "<span class=\"mv good\">8…Re8</span>: the rook takes the open file."
    ]
   },
   {
    "id": "q4d544098b",
    "titre": "Burn: …c5 and the isolated pawn",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7",
     "Bxf6",
     "Bxf6",
     "Nf3",
     "O-O"
    ],
    "coups": [
     "Bc4",
     "c5",
     "c3",
     "cxd4",
     "cxd4",
     "Nc6"
    ],
    "legendes": [
     "The bishop aims at e6.",
     "<span class=\"mv good\">8…c5</span>! The break: you attack d4.",
     "White supports d4.",
     "You trade.",
     "White takes back with the pawn: d4 is now <em>isolated</em>, no neighbouring pawn (c or e) can defend it.",
     "The knight attacks d4 in turn: three attackers (f6 bishop, c6 knight, queen on d8)."
    ]
   },
   {
    "id": "q417c44d8e",
    "titre": "Burn: 6.Nf3?? Nxe4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "Bg5",
     "dxe4",
     "Nxe4",
     "Be7"
    ],
    "coups": [
     "Nf3",
     "Nxe4",
     "Bxe7",
     "Qxe7"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Nf3</span>?? White develops… and forgets that their e4 knight is not defended.",
     "<span class=\"mv good\">6…Nxe4</span>! Your knight is no longer pinned (the e7 bishop protects the queen): it takes.",
     "White trades bishops…",
     "…and you are a piece up."
    ]
   },
   {
    "id": "q40330eae4",
    "titre": "Advance: 6.Be3? Qxb2",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Nf3",
     "Qb6"
    ],
    "coups": [
     "Be3",
     "Qxb2"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Be3</span>? The bishop defends d4… but it no longer defends b2.",
     "<span class=\"mv good\">6…Qxb2</span>! A free pawn, and your queen threatens the a1 rook."
    ]
   },
   {
    "id": "qd7776a221",
    "titre": "Advance: 5.Be3 cxd4 6.Nxd4?",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "Nf3",
     "Nc6",
     "Be3"
    ],
    "coups": [
     "cxd4",
     "Nxd4",
     "Nxe5"
    ],
    "legendes": [
     "You take on d4.",
     "<span class=\"mv bad\">6.Nxd4</span>? The knight takes back, but it no longer defends e5.",
     "<span class=\"mv good\">6…Nxe5</span>: a free central pawn."
    ]
   },
   {
    "id": "q23cf26d7c",
    "titre": "Classical: 6.Bd3? cxd4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "Nc3",
     "Nf6",
     "e5",
     "Nfd7",
     "Nf3",
     "c5"
    ],
    "coups": [
     "Bd3",
     "cxd4",
     "Nxd4",
     "Nxe5"
    ],
    "legendes": [
     "<span class=\"mv bad\">6.Bd3</span>? Natural development, but d4 is going to fall.",
     "You take on d4, and your pawn attacks the c3 knight.",
     "White takes back with the f3 knight… which was defending e5.",
     "<span class=\"mv good\">7…Nxe5</span>: your d7 knight takes e5 and attacks the d3 bishop."
    ]
   },
   {
    "id": "q6631cd413",
    "titre": "2.Bc4: 4.Bxd5??",
    "debut": [
     "e4",
     "e6",
     "Bc4",
     "d5",
     "exd5",
     "exd5"
    ],
    "coups": [
     "Bxd5",
     "Qxd5"
    ],
    "legendes": [
     "<span class=\"mv bad\">4.Bxd5</span>?? The d5 pawn seems to be hanging…",
     "…but your queen was defending it. A piece up."
    ]
   },
   {
    "id": "q837fb5f81",
    "titre": "3.Bg5 ??",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bg5",
     "Qxg5"
    ],
    "legendes": [
     "<span class=\"mv bad\">3.Bg5</span>?? The bishop comes to attack your queen… on a square your queen controls.",
     "Take it. A piece up (−4.6)."
    ]
   },
   {
    "id": "q85034861e",
    "titre": "Advance: after Bxc6+, 6…bxc6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "c3",
     "Nc6",
     "Bb5",
     "Qb6",
     "Bxc6+"
    ],
    "coups": [
     "bxc6"
    ],
    "legendes": [
     "Take back at once with the b-pawn: it supports d5, and the b-file opens for your queen towards b2."
    ]
   },
   {
    "id": "q85dc2f165",
    "titre": "5.Qg4 Ne7 6.Qxg7 Rg8 7.Qxh7 Qb6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "e5",
     "c5",
     "dxc5",
     "Bxc5",
     "Qg4"
    ],
    "coups": [
     "Ne7",
     "Qxg7",
     "Rg8",
     "Qxh7",
     "Qb6"
    ],
    "legendes": [
     "The knight comes out to e7.",
     "The queen takes g7…",
     "The rook attacks the queen.",
     "The queen takes h7…",
     "…and your queen aims at f2 together with your c5 bishop: you are the one attacking."
    ]
   },
   {
    "id": "q646d2d492",
    "titre": "Exchange: 5.Bg5 Be7",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5",
     "exd5",
     "exd5",
     "Nc3",
     "Nf6",
     "Bg5"
    ],
    "coups": [
     "Be7"
    ],
    "legendes": [
     "Unpin: your queen keeps defending d5."
    ]
   },
   {
    "id": "q315c6f16d",
    "titre": "Advance: …c5 and …Nc6, not …Nf6",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "e5",
     "c5",
     "c3",
     "Nc6"
    ],
    "legendes": [
     "White advances.",
     "You hit the base.",
     "White supports d4.",
     "A second attacker; your g8 knight will come out via e7 or h6, not via f6."
    ]
   },
   {
    "id": "qba48194ee",
    "titre": "2.Qe2 c5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qe2",
     "c5"
    ],
    "legendes": [
     "The queen comes out to e2.",
     "Play …c5: you gain space without opening the e-file in front of your king."
    ]
   },
   {
    "id": "q2817eb383",
    "titre": "Exercise 1: count the defenders of d4",
    "debut": [],
    "coups": [
     "Nxd4",
     "Nxd4",
     "Qxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Nxd4</span>! Count: d4 is attacked by your c6 knight and your queen on b6. It has only one defender, the f3 knight: the queen on d1 is blocked by the d3 bishop. And the Bb5+ trap no longer works, your d7 bishop covers b5.",
     "White takes back.",
     "Your queen takes back: a pawn up, in the centre."
    ],
    "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 2 8"
   },
   {
    "id": "qf1aa155cc",
    "titre": "Exercise 2: reinforcements for the attack",
    "debut": [],
    "coups": [
     "Nf5"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Nf5</span>! The e7 knight comes to attack d4 in turn. Count: three attackers (the c6 and f5 knights, the queen on b6) against two defenders (the f3 knight, the queen on d1)."
    ],
    "fen": "r1b1kb1r/pp2nppp/1qn1p3/3pP3/3P4/P4N2/1P2BPPP/RNBQK2R b KQkq - 0 8"
   },
   {
    "id": "qb0af03074",
    "titre": "Exercise 3: the c1 bishop has moved",
    "debut": [],
    "coups": [
     "Qxb2"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Qxb2</span>! The e3 bishop defends d4… but it has left c1, from where it defended b2. Your queen takes a pawn and threatens the a1 rook."
    ],
    "fen": "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3BBN2/PP3PPP/RN1QK2R b KQkq - 2 8"
   },
   {
    "id": "qf0d0c9eca",
    "titre": "Exercise 4: the white queen went on a long trip",
    "debut": [],
    "coups": [
     "Bxf2+",
     "Kd1",
     "Bxg1"
    ],
    "legendes": [
     "<span class=\"mv good\">8…Bxf2+</span>! Your queen on b6 and your c5 bishop were aiming at f2, which only the king defended. The bishop takes with check.",
     "The king has to move.",
     "<span class=\"mv good\">9…Bxg1</span>! The bishop also takes the g1 knight. If 10.Rxg1, your queen takes back on g1."
    ],
    "fen": "rnb1k1r1/pp2np2/1q2p3/2bpP3/8/3Q4/PPP2PPP/RNB1KBNR b KQq - 2 8"
   },
   {
    "id": "q4084c4eed",
    "titre": "Exercise 5: the head of the chain",
    "debut": [],
    "coups": [
     "f6",
     "exf6",
     "Qxf6"
    ],
    "legendes": [
     "<span class=\"mv good\">11…f6</span>! There is no d4 pawn any more: the chain has no base left. So you attack the head, e5, already targeted by your c6 knight.",
     "White takes.",
     "<span class=\"mv good\">12…Qxf6</span>! The queen takes back and the f-file opens: your queen and your f8 rook bear down on the f3 knight and on f2, which your b6 bishop is already aiming at."
    ],
    "fen": "r1bq1rk1/1p3ppp/pbn1p3/3pP3/P7/1N3N2/1PP1QPPP/R1B1K2R b KQ - 1 11"
   },
   {
    "id": "q9cbd2c570",
    "titre": "Exercise 6: the Greek gift",
    "debut": [],
    "coups": [
     "Kxh7",
     "Ng5+",
     "Bxg5"
    ],
    "legendes": [
     "<span class=\"mv good\">10…Kxh7</span>! Accept the sacrifice. Declining with 10…Kh8 leaves White a pawn up and your king exposed (+1.3). To know whether the sacrifice works, look at what follows.",
     "The knight jumps to g5 with check: that is White's plan.",
     "<span class=\"mv good\">11…Bxg5</span>! Your e7 bishop guards g5: it takes the knight. If 12.Bxg5, 12…Qxg5."
    ],
    "fen": "r1bq1rk1/pp2bppB/2n1p3/2npP3/5B2/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 10"
   },
   {
    "id": "q257a444ac",
    "titre": "Exercise 7: the knight retreats",
    "debut": [],
    "coups": [
     "Qxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">7…Qxd4</span>! By retreating to d2, the knight cut the queen on d1 off from its d4 pawn. Nothing defends d4 any more: your queen takes it."
    ],
    "fen": "rnbqkb1r/ppp2p1p/4p3/5p2/3P4/8/PPPN1PPP/R2QKBNR b KQkq - 1 7"
   },
   {
    "id": "q6fe165385",
    "titre": "Exercise 8: the isolated pawn",
    "debut": [],
    "coups": [
     "Bxd4"
    ],
    "legendes": [
     "<span class=\"mv good\">11…Bxd4</span>! Count: d4 is attacked three times (f6 bishop, c6 knight, queen on d8) and defended twice (f3 knight, queen on d2). The bishop takes, and your queen on d8 backs it up."
    ],
    "fen": "r1bq1rk1/pp3ppp/2n1pb2/8/2BPN3/5N2/PP1Q1PPP/R3K2R b KQ - 2 11"
   },
   {
    "id": "qc4dd92c1b",
    "titre": "2.d3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "d3",
     "d5",
     "Nd2",
     "c5"
    ],
    "legendes": [
     "White prepares a closed set-up.",
     "Your usual move.",
     "White supports e4.",
     "You gain space."
    ]
   },
   {
    "id": "q5f3591c2b",
    "titre": "2.Nc3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Nc3",
     "d5",
     "d4",
     "Nf6"
    ],
    "legendes": [
     "The knight comes out.",
     "Your usual move.",
     "We are back in 2.d4 d5 3.Nc3.",
     "The Classical: you attack e4."
    ]
   },
   {
    "id": "qb273202ec",
    "titre": "2.f4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "f4",
     "d5",
     "e5",
     "c5"
    ],
    "legendes": [
     "The f-pawn advances.",
     "Your usual move.",
     "White closes the centre.",
     "You gain space and control d4."
    ]
   },
   {
    "id": "qafa5924cc",
    "titre": "2.c4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "c4",
     "d5"
    ],
    "legendes": [
     "The c-pawn advances.",
     "Your usual move: you attack e4 and c4."
    ]
   },
   {
    "id": "q25e9551db",
    "titre": "2.b3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "b3",
     "d5"
    ],
    "legendes": [
     "White prepares Bb2.",
     "Your usual move."
    ]
   },
   {
    "id": "q97a7ae10a",
    "titre": "2.Qh5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6"
    ],
    "legendes": [
     "The queen comes out early.",
     "You develop while attacking the queen."
    ]
   },
   {
    "id": "q7aa507992",
    "titre": "2.Qg4",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qg4",
     "d5"
    ],
    "legendes": [
     "The queen comes out early.",
     "Your usual move: the queen on g4 does not hinder …d5."
    ]
   },
   {
    "id": "qff02778e8",
    "titre": "2.Qf3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qf3",
     "c5"
    ],
    "legendes": [
     "The queen comes out to f3.",
     "You gain space; …Nc6 and …d5 will follow."
    ]
   },
   {
    "id": "q220ded635",
    "titre": "2.e5",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "e5",
     "c5"
    ],
    "legendes": [
     "The pawn advances on its own.",
     "You gain space; …Nc6 will attack e5."
    ]
   },
   {
    "id": "q0bf9f0df2",
    "titre": "2.g3",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "g3",
     "d5"
    ],
    "legendes": [
     "White prepares Bg2.",
     "Your usual move."
    ]
   },
   {
    "id": "q5fed1032e",
    "titre": "3.Nd2 (Tarrasch)",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nd2",
     "c5"
    ],
    "legendes": [
     "The Tarrasch: the knight defends e4 from d2.",
     "You hit d4 right away."
    ]
   },
   {
    "id": "q101cdac30",
    "titre": "3.Bd3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bd3",
     "dxe4",
     "Bxe4",
     "Nf6"
    ],
    "legendes": [
     "The bishop defends e4.",
     "You trade.",
     "The bishop takes back.",
     "You develop while attacking the bishop."
    ]
   },
   {
    "id": "q071a1772e",
    "titre": "3.Bb5+",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Bb5+",
     "c6"
    ],
    "legendes": [
     "Check.",
     "The pawn blocks the check and chases the bishop."
    ]
   },
   {
    "id": "q462b27776",
    "titre": "3.Nf3 ?",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4"
    ],
    "legendes": [
     "The knight comes out, but e4 is still not defended.",
     "Take it."
    ]
   },
   {
    "id": "q0f441dccc",
    "titre": "3.c4",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c4",
     "dxe4"
    ],
    "legendes": [
     "The c-pawn advances, e4 is still not defended.",
     "Take it."
    ]
   },
   {
    "id": "q930d31ca2",
    "titre": "3.f3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "f3",
     "c5"
    ],
    "legendes": [
     "White defends e4 with a pawn.",
     "You hit d4."
    ]
   },
   {
    "id": "q11c4afcf8",
    "titre": "3.Be3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Be3",
     "dxe4"
    ],
    "legendes": [
     "The bishop comes out, e4 is still not defended.",
     "Take it."
    ]
   },
   {
    "id": "q2bcbe9bec",
    "titre": "3.c3",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "c3",
     "dxe4"
    ],
    "legendes": [
     "White supports d4, not e4.",
     "Take the e4 pawn."
    ]
   },
   {
    "id": "qde110d333",
    "titre": "3.Qe2",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Qe2",
     "dxe4",
     "Qxe4",
     "Nf6"
    ],
    "legendes": [
     "The queen defends e4.",
     "You trade.",
     "The queen takes back.",
     "You develop while attacking the queen."
    ]
   },
   {
    "id": "q7b175c345",
    "titre": "3.Nf3? dxe4: the principle in action",
    "debut": [
     "e4",
     "e6",
     "d4",
     "d5"
    ],
    "coups": [
     "Nf3",
     "dxe4",
     "Ne5",
     "Nd7"
    ],
    "legendes": [
     "The knight comes out… but it does not defend e4.",
     "So you take.",
     "The knight jumps to e5 so as not to be attacked.",
     "And you chase it in turn."
    ]
   },
   {
    "id": "q33095372c",
    "titre": "2.Qh5: gaining time on the queen",
    "debut": [
     "e4",
     "e6"
    ],
    "coups": [
     "Qh5",
     "Nf6",
     "Qe2",
     "d5"
    ],
    "legendes": [
     "The queen comes out early and aims at f7.",
     "You develop while attacking the queen.",
     "She has to retreat.",
     "And you take the centre. Stockfish: −0.3."
    ]
   }
  ]
 }
];
