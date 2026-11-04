#!/usr/bin/env python3
"""Briefing de début de session : une page dense à garder ouverte pendant qu'on joue.

Usage :
    python3 briefing.py <contenu.json> <sortie.html>
"""
import json, re, sys, os
import chess, chess.svg

COULEURS = {"square light": "#e8e6db", "square dark": "#7f8f6b",
            "margin": "#00000000", "coord": "#8b9184"}
TEINTE = {"vert": "#2f7d4f", "rouge": "#b5382c", "ambre": "#a3731a"}


def echiquier(fen, fleches, orientation, taille, defs_faits):
    b = chess.Board(fen)
    arr = [chess.svg.Arrow(chess.parse_square(u[:2]), chess.parse_square(u[2:4]),
                           color=TEINTE.get(c, c)) for u, c in fleches]
    ori = chess.BLACK if orientation == "noirs" else (chess.WHITE if orientation == "blancs" else b.turn)
    svg = chess.svg.board(b, orientation=ori, arrows=arr, colors=COULEURS,
                          coordinates=False, size=taille)
    svg = re.sub(r"<desc>.*?</desc>", "", svg, flags=re.S)
    svg = svg.replace(f'width="{taille}" height="{taille}"', 'class="mini" role="img"')
    m = re.search(r"<defs>.*?</defs>", svg, flags=re.S)
    if defs_faits[0] is None:
        defs_faits[0] = m.group(0).replace("<defs>", "").replace("</defs>", "")
    return svg.replace(m.group(0), "")


def construire(com, sortie):
    defs = [None]
    tuiles = "".join(f'<div class="stat"><div class="k">{t["k"]}</div>'
                     f'<div class="v {t.get("cls","")}">{t["v"]}</div>'
                     f'<div class="n">{t["n"]}</div></div>' for t in com.get("tuiles", []))

    checks = "".join(f'''<div class="chk">
  <div class="chknum">{i+1}</div>
  <div class="chkbody">
    <h3>{c["quand"]}</h3>
    <p class="chkq">{c["question"]}</p>
    <p class="chkwhy">{c["preuve"]}</p>
  </div></div>''' for i, c in enumerate(com["checks"]))

    ouv = "".join(f'''<div class="ocard">
  {echiquier(o["fen"], [tuple(f) for f in o.get("fleches", [])], o.get("orientation"), 300, defs)}
  <div class="ohead"><span class="tag {o.get("camp_cls","")}">{o["camp"]}</span><span class="oquand">{o["quand"]}</span></div>
  <div class="ocoup">{o["coup"]}</div>
  <p class="onote">{o["note"]}</p>
</div>''' for o in com["ouvertures"])

    objectifs = "".join(f'<tr><td>{o["quoi"]}</td><td class="n">{o["hier"]}</td>'
                        f'<td class="n obj">{o["cible"]}</td></tr>' for o in com["objectifs"])

    attente = "".join(f'<li><strong>{a["quoi"]}</strong> — {a["detail"]}</li>'
                      for a in com.get("attente", []))

    ici = os.path.dirname(os.path.abspath(__file__))
    html = open(os.path.join(ici, "gabarit_briefing.html")).read()
    for k, v in (("__DEFS__", defs[0] or ""), ("__TITRE__", com["titre"]),
                 ("__EYEBROW__", com["eyebrow"]), ("__CHAPEAU__", com["chapeau"]),
                 ("__SOUS__", com["sous_titre"]), ("__STATS__", tuiles),
                 ("__CHECKS__", checks), ("__OUVERTURES__", ouv),
                 ("__OBJECTIFS__", objectifs), ("__ATTENTE__", attente),
                 ("__REGLAGES__", com.get("reglages", "")),
                 ("__FIN__", com.get("fin", "")), ("__METHODE__", com.get("methode", ""))):
        html = html.replace(k, v)
    open(sortie, "w").write(html)
    print(f"écrit : {sortie} ({len(html)} octets, {len(com['ouvertures'])} mini-échiquier(s))")


if __name__ == "__main__":
    construire(json.load(open(sys.argv[1])), sys.argv[2])
