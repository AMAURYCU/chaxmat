#!/usr/bin/env python3
"""Analyse Stockfish d'un PGN, au format attendu par rapport_partie.py et
rapport_session.py.

    python3 analyser.py <parties.pgn> <pseudo> <sortie.json> [profondeur]

Toutes les parties du fichier où <pseudo> joue sont analysées (une seule pour
un rapport de partie, plusieurs pour un rapport de séance). Pour chaque coup du
joueur : évaluation avant/après (de son point de vue), perte, meilleur coup, et
le matériel en l'air des deux côtés avant le coup.

Le moteur est cherché dans la variable STOCKFISH, puis dans le PATH.
"""
import json, os, shutil, sys, io
import chess, chess.pgn, chess.engine

MOTEUR = os.environ.get("STOCKFISH") or shutil.which("stockfish") or "/usr/games/stockfish"
VAL = {chess.PAWN: 100, chess.KNIGHT: 320, chess.BISHOP: 330,
       chess.ROOK: 500, chess.QUEEN: 900, chess.KING: 20000}


def see_gain(board, case, cote):
    """Gain net pour `cote` en prenant sur `case`, en enchaînant les reprises.
    S'arrête à zéro : on a toujours le droit de ne pas prendre."""
    cible = board.piece_at(case)
    if cible is None:
        return 0
    b = board.copy(stack=False)
    b.turn = cote
    gains, val = [], VAL[cible.piece_type]
    for _ in range(14):
        prises = [m for m in b.legal_moves if m.to_square == case and b.is_capture(m)]
        if not prises:
            break
        m = min(prises, key=lambda x: VAL[b.piece_at(x.from_square).piece_type])
        gains.append(val)
        val = VAL[b.piece_at(m.from_square).piece_type]
        b.push(m)
    net = 0
    for g in reversed(gains):
        net = max(0, g - net)
    return net


def en_prise(board, couleur):
    """[[case, type, gain]] : le matériel de `couleur` que l'adversaire peut prendre."""
    adv = not couleur
    out = []
    for case, p in board.piece_map().items():
        if p.color != couleur or p.piece_type == chess.KING:
            continue
        if not board.attackers(adv, case):
            continue
        g = see_gain(board, case, adv)
        if g > 0:
            out.append([chess.square_name(case), chess.piece_symbol(p.piece_type), g])
    return out


def cp(score, pov):
    """Score en centipions du point de vue `pov`, mat encodé 10000 − n."""
    s = score.pov(pov)
    if s.is_mate():
        n = s.mate()
        return 10000 - n if n > 0 else -10000 - n
    return s.score()


def main(chemin, pseudo, sortie, prof=22):
    E = chess.engine.SimpleEngine.popen_uci(MOTEUR)
    E.configure({"Threads": 2, "Hash": 256})
    out = []
    with open(chemin, encoding="utf-8") as f:
        while True:
            jeu = chess.pgn.read_game(f)
            if jeu is None:
                break
            ent = jeu.headers
            if pseudo.lower() not in (ent.get("White", "").lower(), ent.get("Black", "").lower()):
                continue
            out.append(analyser_partie(jeu, pseudo, E, prof))
    E.quit()
    if not out:
        sys.exit(f"Aucune partie de {pseudo} dans {chemin}.")
    json.dump(out, open(sortie, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    for p in out:
        mv = p["moves"]
        perte = round(sum(m["loss"] for m in mv) / len(mv)) if mv else 0
        print(f"{p['white']} – {p['black']} : {len(mv)} coups analysés, perte moyenne {perte} cp")
    print(f"-> {sortie}")


def analyser_partie(jeu, pseudo, E, prof):
    ent = jeu.headers
    blanc = ent["White"].lower() == pseudo.lower()
    moi = chess.WHITE if blanc else chess.BLACK
    lim = chess.engine.Limit(depth=prof)

    b = jeu.board()
    coups = list(jeu.mainline())
    moves = []
    clk_prec = None
    for i, nd in enumerate(coups):
        mv = nd.move
        san = b.san(mv)
        est_moi = b.turn == moi
        numero = b.fullmove_number
        if est_moi:
            fen_before = b.fen()
            hb = en_prise(b, moi)
            ohb = en_prise(b, not moi)
            inf = E.analyse(b, lim)
            ev_before = cp(inf["score"], moi)
            best = inf["pv"][0].uci() if inf.get("pv") else None
            best_san = b.san(inf["pv"][0]) if inf.get("pv") else None
            ligne_best = b.variation_san(inf["pv"][:6]) if inf.get("pv") else ""
        b.push(mv)
        if est_moi:
            if b.is_checkmate():
                # mater ne fait rien perdre : la position d'après n'a pas de score
                ev_after, punition, ligne_pun = ev_before, None, ""
            else:
                inf2 = E.analyse(b, lim)
                ev_after = cp(inf2["score"], moi)
                punition = inf2["pv"][0].uci() if inf2.get("pv") else None
                ligne_pun = b.variation_san(inf2["pv"][:6]) if inf2.get("pv") else ""
            clampe = lambda x: max(-1200, min(1200, x))
            perte = max(0, clampe(ev_before) - clampe(ev_after))
            clk = nd.clock()
            base = 600.0 if clk_prec is None else clk_prec
            passe = round(base - clk, 1) if clk is not None else None
            clk_prec = clk if clk is not None else clk_prec
            moves.append({
                "movenr": numero, "san": san, "uci": mv.uci(),
                "fen_before": fen_before, "fen_after": b.fen(),
                "eval_before": ev_before, "eval_after": ev_after, "loss": perte,
                "best_uci": best, "best_san": best_san, "best_line": ligne_best,
                "punish_uci": punition, "punish_line": ligne_pun,
                "hang_before": hb, "opp_hang_before": ohb,
                "clk": clk, "spent": passe,
            })

    res = ent["Result"]
    score = 1 if (res == "1-0") == blanc and res != "1/2-1/2" else (0.5 if res == "1/2-1/2" else 0)
    return {
        "link": ent.get("Link", ""), "date": ent.get("Date", ""),
        "white": ent["White"], "black": ent["Black"],
        "color": "white" if blanc else "black",
        "opponent": ent["Black"] if blanc else ent["White"],
        "elo": int(ent.get("WhiteElo" if blanc else "BlackElo", 0)),
        "elo_opp": int(ent.get("BlackElo" if blanc else "WhiteElo", 0)),
        "result": res, "score": score, "eco": ent.get("ECO", ""),
        "termination": ent.get("Termination", ""), "moves": moves,
    }


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], sys.argv[3],
         int(sys.argv[4]) if len(sys.argv) > 4 else 22)
