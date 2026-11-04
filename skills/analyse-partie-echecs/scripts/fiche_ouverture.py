#!/usr/bin/env python3
"""Fiche d'ouverture HTML, avec échiquiers construits directement depuis des FEN.

Usage :
    python3 fiche_ouverture.py <contenu.json> <sortie.html>

contenu.json :
    {
      "titre","eyebrow","sous_titre","chapeau","tuiles":[{"k","v","n","cls"}],
      "positions":[{"fen","orientation":"noirs|blancs","fleches":[["e7e5","vert"]],
                    "pastille","etiquettes":[],"titre","texte",
                    "ligne_bonne","ligne_jouee","note"}],
      "sections":[{"eyebrow","titre","html"}], "conclusion", "methode"
    }
"""
import json, re, sys, os
import chess, chess.svg

COULEURS = {"square light": "#e8e6db", "square dark": "#7f8f6b",
            "margin": "#00000000", "coord": "#8b9184"}
TEINTE = {"vert": "#2f7d4f", "rouge": "#b5382c", "ambre": "#a3731a"}
LETTRE_FR = {"N": "C", "B": "F", "R": "T", "Q": "D", "K": "R"}


def fr_ligne(txt):
    return re.sub(r"\b([NBRQK])([a-h1-8]?x?[a-h][1-8])",
                  lambda m: LETTRE_FR[m.group(1)] + m.group(2), txt or "")


def echiquier(fen, fleches, orientation, defs_faits):
    b = chess.Board(fen)
    arr = [chess.svg.Arrow(chess.parse_square(u[:2]), chess.parse_square(u[2:4]),
                           color=TEINTE.get(c, c)) for u, c in fleches]
    ori = chess.BLACK if orientation == "noirs" else (chess.WHITE if orientation == "blancs" else b.turn)
    svg = chess.svg.board(b, orientation=ori, arrows=arr, colors=COULEURS,
                          coordinates=True, size=360)
    svg = re.sub(r"<desc>.*?</desc>", "", svg, flags=re.S)
    svg = svg.replace('width="360" height="360"', 'class="board" role="img"')
    m = re.search(r"<defs>.*?</defs>", svg, flags=re.S)
    if defs_faits[0] is None:
        defs_faits[0] = m.group(0).replace("<defs>", "").replace("</defs>", "")
    return svg.replace(m.group(0), "")


def construire(com, sortie):
    defs_faits = [None]
    cartes = []
    for p in com["positions"]:
        svg = echiquier(p["fen"], [tuple(f) for f in p.get("fleches", [])],
                        p.get("orientation"), defs_faits)
        etiq = "".join(f'<span class="tag">{e}</span>' for e in p.get("etiquettes", []))
        lignes = ""
        if p.get("ligne_bonne"):
            lignes += f'<div class="line good">{fr_ligne(p["ligne_bonne"])}</div>'
        if p.get("ligne_jouee"):
            lignes += f'<div class="line bad">{fr_ligne(p["ligne_jouee"])}</div>'
        note = f'<p class="note">{p["note"]}</p>' if p.get("note") else ""
        cartes.append(f'''<div class="pos">{svg}
  <div class="pos-body">
    <div class="pos-h">{p.get("pastille","")}{etiq}</div>
    <h3>{p["titre"]}</h3>
    {p["texte"]}
    <div class="answer">{lignes}{note}</div>
  </div></div>''')

    stats = "".join(f'<div class="stat"><div class="k">{t["k"]}</div>'
                    f'<div class="v {t.get("cls","")}">{t["v"]}</div>'
                    f'<div class="n">{t["n"]}</div></div>' for t in com.get("tuiles", []))
    sections = "".join(
        f'<section><div class="shead"><span class="eyebrow">{s.get("eyebrow","")}</span>'
        f'<span class="rule"></span></div><h2>{s["titre"]}</h2><div class="col">{s["html"]}</div></section>'
        for s in com.get("sections", []))

    ici = os.path.dirname(os.path.abspath(__file__))
    html = open(os.path.join(ici, "gabarit_fiche.html")).read()
    for k, val in (("__DEFS__", defs_faits[0] or ""), ("__TITRE__", com["titre"]),
                   ("__EYEBROW__", com["eyebrow"]), ("__SOUS__", com["sous_titre"]),
                   ("__CHAPEAU__", com["chapeau"]), ("__STATS__", stats),
                   ("__CARTES__", "".join(cartes)), ("__SECTIONS__", sections),
                   ("__CONCLUSION__", com["conclusion"]), ("__METHODE__", com.get("methode", ""))):
        html = html.replace(k, val)
    open(sortie, "w").write(html)
    print(f"écrit : {sortie} ({len(html)} octets, {len(cartes)} échiquier(s))")


if __name__ == "__main__":
    construire(json.load(open(sys.argv[1])), sys.argv[2])
