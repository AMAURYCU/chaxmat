#!/usr/bin/env python3
"""Rapport HTML d'une SESSION de plusieurs parties, avec échiquiers.

Usage :
    python3 rapport_session.py <all.json> <commentaires.json> <sortie.html>

`all.json` : liste de parties, sortie d'analyser.py sur un PGN qui en contient plusieurs.
`commentaires.json` :
    {
      "titre", "eyebrow", "sous_titre", "chapeau", "legende_parties",
      "misclics": [["adversaire", 22], ...],       # exclus des statistiques
      "tuiles": [{"k","v","n","cls"}],             # remplace les tuiles calculées
      "moments": [{"partie": "adversaire", "coup": 17, ...}],   # comme rapport_partie
      "sections": [...], "conclusion": "..."
    }
"""
import json, re, sys, os
import chess, chess.svg

COULEURS = {"square light": "#e8e6db", "square dark": "#7f8f6b",
            "margin": "#00000000", "coord": "#8b9184"}
VERT, ROUGE = "#2f7d4f", "#b5382c"
LETTRE_FR = {"N": "C", "B": "F", "R": "T", "Q": "D", "K": "R"}


def fr_ligne(txt):
    return re.sub(r"\b([NBRQK])([a-h1-8]?x?[a-h][1-8])",
                  lambda m: LETTRE_FR[m.group(1)] + m.group(2), txt or "")


def echiquier(fen, fleches, defs_faits):
    b = chess.Board(fen)
    arr = [chess.svg.Arrow(chess.parse_square(u[:2]), chess.parse_square(u[2:4]), color=c)
           for u, c in fleches if u]
    svg = chess.svg.board(b, orientation=b.turn, arrows=arr, colors=COULEURS,
                          coordinates=True, size=360)
    svg = re.sub(r"<desc>.*?</desc>", "", svg, flags=re.S)
    svg = svg.replace('width="360" height="360"', 'class="board" role="img"')
    m = re.search(r"<defs>.*?</defs>", svg, flags=re.S)
    defs = m.group(0).replace("<defs>", "").replace("</defs>", "")
    svg = svg.replace(m.group(0), "")
    if defs_faits[0] is None:
        defs_faits[0] = defs
    return svg


def sparkline(g, misclics):
    """Mini-courbe d'évaluation d'une partie, du point de vue du joueur."""
    pts = []
    for m in g["moves"]:
        pts.append(max(-800, min(800, m["eval_before"])))
        pts.append(max(-800, min(800, m["eval_after"])))
    W, H, P = 260, 74, 2
    X = lambda i: P + (i / max(1, len(pts) - 1)) * (W - 2 * P)
    Y = lambda v: P + (H - 2 * P) / 2 - (v / 800) * ((H - 2 * P) / 2)
    d = "".join(("M" if i == 0 else "L") + f"{X(i):.1f},{Y(v):.1f}" for i, v in enumerate(pts))
    aire = d + f"L{X(len(pts)-1):.1f},{Y(0):.1f}L{X(0):.1f},{Y(0):.1f}Z"
    out = [f'<svg class="spark" viewBox="0 0 {W} {H}" preserveAspectRatio="none" aria-hidden="true">',
           f'<clipPath id="hi{g["idx"]}"><rect x="0" y="0" width="{W}" height="{Y(0):.1f}"/></clipPath>',
           f'<clipPath id="lo{g["idx"]}"><rect x="0" y="{Y(0):.1f}" width="{W}" height="{H}"/></clipPath>',
           f'<path d="{aire}" fill="var(--accent)" opacity=".22" clip-path="url(#hi{g["idx"]})"/>',
           f'<path d="{aire}" fill="var(--danger)" opacity=".22" clip-path="url(#lo{g["idx"]})"/>',
           f'<line x1="0" y1="{Y(0):.1f}" x2="{W}" y2="{Y(0):.1f}" stroke="var(--line-2)" stroke-width="1"/>',
           f'<path d="{d}" fill="none" stroke="var(--ink-2)" stroke-width="1.6" stroke-linejoin="round"/>']
    for i, m in enumerate(g["moves"]):
        if m["loss"] < 300:
            continue
        mis = (g["opponent"], m["movenr"]) in misclics
        col = "var(--amber)" if mis else "var(--danger)"
        out.append(f'<circle cx="{X(2*i+1):.1f}" cy="{Y(max(-800,min(800,m["eval_after"]))):.1f}" '
                   f'r="3" fill="{col}" stroke="var(--surface)" stroke-width="1.4"/>')
    out.append("</svg>")
    return "".join(out)


def tuile(k, v, n, cls=""):
    return (f'<div class="stat"><div class="k">{k}</div>'
            f'<div class="v {cls}">{v}</div><div class="n">{n}</div></div>')


def mmss(s):
    return f"{int(s // 60)} min {int(round(s % 60)):02d}"


def construire(games, com, sortie):
    par_adv = {g["opponent"]: g for g in games}
    misclics = {tuple(x) for x in com.get("misclics", [])}
    defs_faits = [None]
    REF = dict(temps=176, cpl=94, menaces=.68, gratuites=.74)

    tous = [(g["opponent"], m) for g in games for m in g["moves"]]
    n = len(tous)
    cpl = round(sum(m["loss"] for _, m in tous) / n)
    propre = [m for o, m in tous if (o, m["movenr"]) not in misclics and m["eval_before"] < 9000]
    cpl_net = round(sum(m["loss"] for m in propre) / len(propre))
    gaffes = [(o, m) for o, m in tous if m["loss"] >= 300]
    thr = [m for _, m in tous if [h for h in m["hang_before"] if h[2] >= 250]]
    thr_ok = [m for m in thr if m["loss"] < 150]
    fr_ = [m for _, m in tous if [h for h in m["opp_hang_before"] if h[2] >= 250]]
    fr_ok = [m for m in fr_ if "x" in m["san"]
             and m["uci"][2:4] in {h[0] for h in m["opp_hang_before"] if h[2] >= 250}]
    tps = []
    for g in games:
        clk = [m["clk"] for m in g["moves"] if m["clk"] is not None]
        tps.append(600 - clk[-1] if clk else 0)
    v = sum(1 for g in games if g["score"] == 1)
    d = sum(1 for g in games if g["score"] == 0)

    cmp_ = lambda val, ref, inv=False: ("up" if (val < ref if inv else val > ref) else "down")
    stats = com.get("tuiles") and "".join(tuile(t["k"], t["v"], t["n"], t.get("cls", "")) for t in com["tuiles"]) or "".join([
        tuile("Bilan", f"{v}–{d}", f"{len(games)} parties", "up" if v > d else "down"),
        tuile("Perte moyenne", f"{cpl} cp", f"référence : {REF['cpl']} cp", cmp_(cpl, REF["cpl"], True)),
        tuile("Gaffes", str(len(gaffes)), f"soit une tous les {round(n/len(gaffes))} coups", "down"),
        tuile("Menaces gérées", f"{len(thr_ok)}/{len(thr)}", f"référence : {round(REF['menaces']*100)} %",
              cmp_(len(thr_ok)/len(thr), REF["menaces"])),
        tuile("Pièces gratuites", f"{len(fr_ok)}/{len(fr_)}", f"référence : {round(REF['gratuites']*100)} %",
              cmp_(len(fr_ok)/len(fr_), REF["gratuites"])),
        tuile("Temps moyen", mmss(sum(tps)/len(tps)), f"référence : {mmss(REF['temps'])}",
              cmp_(sum(tps)/len(tps), REF["temps"])),
    ])

    # --- grille des parties ---
    cartes_p = []
    for g in games:
        ms = g["moves"]
        c = round(sum(m["loss"] for m in ms) / len(ms))
        ng = sum(1 for m in ms if m["loss"] >= 300)
        clk = [m["clk"] for m in ms if m["clk"] is not None]
        gagne = g["score"] == 1
        badge = ('<span class="tag grn">gagnée</span>' if gagne else '<span class="tag red">perdue</span>')
        cartes_p.append(f'''<div class="pcard">
  <div class="pcard-h">{badge}<span class="pname">{g["opponent"]}</span>
    <span class="pelo">{g["opp_elo"]}</span></div>
  {sparkline(g, misclics)}
  <div class="pmeta"><span>{"blancs" if g["color"]=="white" else "noirs"}</span>
    <span>{len(ms)} coups</span><span>{c} cp</span>
    <span>{ng} gaffe{"s" if ng>1 else ""}</span>
    <span>{mmss(600-clk[-1]) if clk else "—"}</span></div>
</div>''')

    # --- cartes de position ---
    cartes = []
    for mo in com["moments"]:
        g = par_adv[mo["partie"]]
        m = next((x for x in g["moves"] if x["movenr"] == mo["coup"]), None)
        if not m:
            continue
        montrer = mo.get("montrer", "les_deux")
        fleches = []
        if montrer in ("les_deux", "meilleur") and mo.get("uci_bon", m.get("best_uci")):
            fleches.append((mo.get("uci_bon", m.get("best_uci")), VERT))
        if montrer in ("les_deux", "joue"):
            defaut = "rouge" if mo.get("genre") == "rate" else "vert"
            fleches.append((m["uci"], ROUGE if mo.get("couleur_joue", defaut) == "rouge" else VERT))
        svg = echiquier(m["fen_before"], fleches, defs_faits)
        etiq = "".join(f'<span class="tag">{e}</span>' for e in mo.get("etiquettes", []))
        genre = mo.get("genre", "neutre")
        pastille = mo.get("pastille") or {"rate": '<span class="tag red">à corriger</span>',
                                          "reussi": '<span class="tag grn">bien joué</span>',
                                          "misclic": '<span class="tag amb">misclic</span>',
                                          "neutre": ""}.get(genre, "")
        swing = ""
        if genre not in ("reussi",) and not mo.get("sans_swing"):
            ev = lambda x: "mat" if x >= 9000 else ("−mat" if x <= -9000 else f"{x/100:+.1f}")
            mut = ("le mat était là" if m["eval_before"] >= 9000 > m["eval_after"]
                   else ("mat contre toi" if m["eval_after"] <= -9000
                         else f'soit {m["loss"]/100:.1f} point(s) laissés'))
            swing = (f'<div class="swing"><span class="from">{ev(m["eval_before"])}</span>'
                     f'<span class="arrow-i">→</span><span class="to">{ev(m["eval_after"])}</span>'
                     f'<span class="mut">{mut}</span></div>')
        lignes = ""
        if mo.get("ligne_bonne"):
            lignes += f'<div class="line good">{fr_ligne(mo["ligne_bonne"])}</div>'
        if mo.get("ligne_jouee"):
            lignes += f'<div class="line bad">{fr_ligne(mo["ligne_jouee"])}</div>'
        note = f'<p class="note">{mo["note"]}</p>' if mo.get("note") else ""
        cartes.append(f'''<div class="pos">{svg}
  <div class="pos-body">
    <div class="pos-h">{pastille}{etiq}
      <span class="tag">vs {g["opponent"]}</span>
      <span class="tag">coup {m["movenr"]}</span>
      <span class="tag">{m["spent"]} s de réflexion</span></div>
    <h3>{mo["titre"]}</h3>
    {mo["texte"]}
    {swing}
    <div class="answer">{lignes}{note}</div>
  </div></div>''')

    sections = "".join(
        f'<section><div class="shead"><span class="eyebrow">{s.get("eyebrow","")}</span>'
        f'<span class="rule"></span></div><h2>{s["titre"]}</h2><div class="col">{s["html"]}</div></section>'
        for s in com.get("sections", []))

    ici = os.path.dirname(os.path.abspath(__file__))
    html = open(os.path.join(ici, "gabarit_session.html")).read()
    for k, val in (("__DEFS__", defs_faits[0] or ""), ("__TITRE__", com["titre"]),
                   ("__EYEBROW__", com["eyebrow"]), ("__SOUS__", com["sous_titre"]),
                   ("__CHAPEAU__", com["chapeau"]), ("__STATS__", stats),
                   ("__PARTIES__", "".join(cartes_p)),
                   ("__LEGENDE_PARTIES__", com.get("legende_parties", "")),
                   ("__CARTES__", "".join(cartes)), ("__SECTIONS__", sections),
                   ("__CONCLUSION__", com["conclusion"]), ("__METHODE__", com.get("methode", ""))):
        html = html.replace(k, val)
    open(sortie, "w").write(html)
    print(f"écrit : {sortie} ({len(html)} octets, {len(cartes)} échiquier(s), {len(games)} parties)")
    print(f"  CPL {cpl} (net {cpl_net}) | gaffes {len(gaffes)} | menaces {len(thr_ok)}/{len(thr)} "
          f"| gratuites {len(fr_ok)}/{len(fr_)} | temps moyen {round(sum(tps)/len(tps))}s")


if __name__ == "__main__":
    a, c, s = sys.argv[1], sys.argv[2], sys.argv[3]
    construire(json.load(open(a)), json.load(open(c)), s)
