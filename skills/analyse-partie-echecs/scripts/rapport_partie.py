#!/usr/bin/env python3
"""Rapport HTML d'une partie analysée, avec échiquiers.

Usage :
    python3 rapport_partie.py <analyse.json> <commentaires.json> <sortie.html>

`analyse.json`   : la sortie d'analyser.py (liste de parties ; la première est utilisée).
`commentaires.json` : le texte du rapport, écrit à la main :
    {
      "titre": "...", "sous_titre": "...", "chapeau": "<p>…</p>",
      "moments": [
        {"coup": 7, "genre": "rate|reussi|neutre", "titre": "...",
         "etiquettes": ["..."], "texte": "<p>…</p>",
         "ligne_bonne": "7…Da5+ 8.Cd2 Dxb5", "ligne_jouee": "7…Fe7 8.a4 O-O",
         "note": "…", "montrer": "meilleur|joue|les_deux"}
      ],
      "sections": [{"titre": "...", "html": "…"}],
      "conclusion": "<p>…</p>"
    }
"""
import json, re, sys, os
import chess, chess.svg

COULEURS = {
    "square light": "#e8e6db", "square dark": "#7f8f6b",
    "margin": "#00000000", "coord": "#8b9184",
}
VERT, ROUGE = "#2f7d4f", "#b5382c"
LETTRE_FR = {"N": "C", "B": "F", "R": "T", "Q": "D", "K": "R"}


def fr(san):
    if not san:
        return san
    s = str(san)
    if s.startswith("O-O"):
        return s.replace("O", "0")          # le roque s'écrit 0-0 en français
    if s[0] in LETTRE_FR:
        s = LETTRE_FR[s[0]] + s[1:]
    return re.sub(r"=([NBRQ])", lambda m: "=" + LETTRE_FR[m.group(1)], s)


def fr_ligne(txt):
    """Traduit les coups d'une ligne écrite en notation anglaise."""
    return re.sub(r"\b([NBRQK])([a-h1-8]?x?[a-h][1-8])", lambda m: LETTRE_FR[m.group(1)] + m.group(2), txt or "")


def echiquier(fen, fleches, defs_faits, orientation=None, cases=None):
    b = chess.Board(fen)
    arr = []
    for uci, couleur in fleches:
        if not uci:
            continue
        arr.append(chess.svg.Arrow(chess.parse_square(uci[:2]), chess.parse_square(uci[2:4]), color=couleur))
    ori = b.turn if orientation is None else orientation
    svg = chess.svg.board(b, orientation=ori, arrows=arr, colors=COULEURS, coordinates=True, size=360,
                          fill=cases or {})
    svg = re.sub(r"<desc>.*?</desc>", "", svg, flags=re.S)
    svg = svg.replace('width="360" height="360"', 'class="board" role="img"')
    m = re.search(r"<defs>.*?</defs>", svg, flags=re.S)
    defs = m.group(0).replace("<defs>", "").replace("</defs>", "")
    svg = svg.replace(m.group(0), "")
    if defs_faits[0] is None:
        defs_faits[0] = defs
    return svg


NEUTRE = "#5a6152"
NOMS_FLECHE = {"vert": VERT, "rouge": ROUGE, "neutre": NEUTRE}


def sequence_html(seq, par_coup, defs_faits, camp, idx):
    """Un échiquier qui avance coup par coup, avec boutons.

    `seq` : {"depart": <n° de coup> | "fen": "...", "coups": ["Nexd5", "Bxd5", …],
             "legendes": ["…", …], "couleurs": ["neutre","vert",…],
             "legende_fin": "…", "orientation": "blanc"|"noir"}
    Chaque étape montre la position AVANT le coup, flèche sur le coup à venir ;
    la dernière montre la position finale. Le coup de l'adversaire est gris,
    le sien vert, sauf couleur explicite.
    """
    if seq.get("fen"):
        b = chess.Board(seq["fen"])
    elif seq.get("depart_apres"):
        b = chess.Board(par_coup[seq["depart_apres"]]["fen_after"])
    else:
        b = chess.Board(par_coup[seq["depart"]]["fen_before"])
    ori = chess.WHITE if seq.get("orientation", "blanc") == "blanc" else chess.BLACK
    if "orientation" not in seq:
        ori = camp
    legendes = seq.get("legendes", [])
    couleurs = seq.get("couleurs", [])
    etapes = []
    for i, san in enumerate(seq["coups"]):
        mv = b.parse_san(san)
        coul = NOMS_FLECHE.get(couleurs[i] if i < len(couleurs) else None,
                               VERT if b.turn == camp else NEUTRE)
        num = b.fullmove_number
        titre = (f"{num}." if b.turn == chess.WHITE else f"{num}\u2026") + fr(b.san(mv))
        svg = echiquier(b.fen(), [(mv.uci(), coul)], defs_faits, ori)
        leg = legendes[i] if i < len(legendes) else ""
        etapes.append((svg, titre, leg))
        b.push(mv)
    etapes.append((echiquier(b.fen(), [], defs_faits, ori), "position finale",
                   seq.get("legende_fin", "")))

    n = len(etapes)
    boards = "".join(
        f'<div class="seq-etape{" on" if i == 0 else ""}" data-i="{i}">{svg}</div>'
        for i, (svg, _, _) in enumerate(etapes))
    legs = "".join(
        f'<div class="seq-leg{" on" if i == 0 else ""}" data-i="{i}">'
        f'<strong>{titre}</strong>{(" — " + leg) if leg else ""}</div>'
        for i, (_, titre, leg) in enumerate(etapes))
    return f'''<div class="seq" id="seq{idx}" data-n="{n}">
  <div class="seq-boards">{boards}</div>
  <div class="seq-ctrl">
    <button type="button" class="seq-b" data-d="-1" aria-label="Coup précédent" disabled>\u2190</button>
    <span class="seq-cnt"><b>1</b> / {n}</span>
    <button type="button" class="seq-b" data-d="1" aria-label="Coup suivant">\u2192</button>
    <button type="button" class="seq-b seq-reset">Rejouer</button>
  </div>
  <div class="seq-legs">{legs}</div>
</div>'''


SCRIPT_SEQ = """<script>
/* Chaque .seq est un petit lecteur : une étape visible à la fois. */
document.querySelectorAll('.seq').forEach(function (s) {
  var n = +s.dataset.n, i = 0;
  var etapes = s.querySelectorAll('.seq-etape'), legs = s.querySelectorAll('.seq-leg');
  var prec = s.querySelector('[data-d="-1"]'), suiv = s.querySelector('[data-d="1"]');
  var cnt = s.querySelector('.seq-cnt b');
  function montrer(k) {
    i = Math.max(0, Math.min(n - 1, k));
    etapes.forEach(function (e, j) { e.classList.toggle('on', j === i); });
    legs.forEach(function (e, j) { e.classList.toggle('on', j === i); });
    cnt.textContent = i + 1;
    prec.disabled = i === 0; suiv.disabled = i === n - 1;
  }
  s.querySelectorAll('[data-d]').forEach(function (b) {
    b.addEventListener('click', function () { montrer(i + (+b.dataset.d)); });
  });
  s.querySelector('.seq-reset').addEventListener('click', function () { montrer(0); });
  s.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { montrer(i + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { montrer(i - 1); e.preventDefault(); }
  });
  s.tabIndex = 0;
});
</script>"""


def courbe(moves, camp_blanc):
    """Courbe d'évaluation, un point par demi-coup, du point de vue du joueur."""
    pts = []
    for m in moves:
        pts.append(max(-800, min(800, m["eval_before"])))
        pts.append(max(-800, min(800, m["eval_after"])))
    if not pts:
        return ""
    W, H, L, R, T, B = 900, 200, 44, 16, 14, 26
    iw, ih = W - L - R, H - T - B
    X = lambda i: L + (i / max(1, len(pts) - 1)) * iw
    Y = lambda v: T + ih / 2 - (v / 800) * (ih / 2)
    out = [f'<svg class="chart" viewBox="0 0 {W} {H}" role="img" aria-label="Évaluation coup par coup">']
    out.append(f'<rect x="{L}" y="{T}" width="{iw}" height="{ih/2}" fill="var(--accent)" opacity="0.07"/>')
    out.append(f'<rect x="{L}" y="{T+ih/2}" width="{iw}" height="{ih/2}" fill="var(--danger)" opacity="0.07"/>')
    for v, lab in ((800, "+8"), (400, "+4"), (0, "0"), (-400, "−4"), (-800, "−8")):
        out.append(f'<line x1="{L}" y1="{Y(v):.1f}" x2="{W-R}" y2="{Y(v):.1f}" class="grid"/>')
        out.append(f'<text x="{L-8}" y="{Y(v)+3.5:.1f}" text-anchor="end">{lab}</text>')
    d = "".join(("M" if i == 0 else "L") + f"{X(i):.1f},{Y(v):.1f}" for i, v in enumerate(pts))
    out.append(f'<path d="{d}" fill="none" stroke="var(--accent-2)" stroke-width="2" stroke-linejoin="round"/>')
    for i, m in enumerate(moves):
        if m["loss"] >= 300:
            out.append(f'<circle cx="{X(2*i+1):.1f}" cy="{Y(max(-800,min(800,m["eval_after"]))):.1f}" '
                       f'r="4.5" fill="var(--danger)" stroke="var(--surface)" stroke-width="2"/>')
            out.append(f'<text x="{X(2*i+1):.1f}" y="{Y(max(-800,min(800,m["eval_after"])))+18:.1f}" '
                       f'text-anchor="middle" class="val">{m["movenr"]}</text>')
    for n in range(0, len(moves) + 1, 5):
        if n == 0:
            continue
        out.append(f'<text x="{X(2*n-1):.1f}" y="{H-6}" text-anchor="middle">{n}</text>')
    out.append("</svg>")
    return "".join(out)


def tuile(k, v, n, cls=""):
    return (f'<div class="stat"><div class="k">{k}</div>'
            f'<div class="v {cls}">{v}</div><div class="n">{n}</div></div>')


def mmss(s):
    return f"{int(s // 60)} min {int(round(s % 60)):02d}"


def construire(analyse, com, sortie):
    g = analyse[0] if isinstance(analyse, list) else analyse
    moves = g["moves"]
    par_coup = {m["movenr"]: m for m in moves}
    defs_faits = [None]
    REF = dict(temps=176, cpl=94, gaffes=2.29, gratuites=.74, menaces=.68)

    n = len(moves)
    cpl = round(sum(m["loss"] for m in moves) / n)
    gaffes = [m for m in moves if m["loss"] >= 300]
    erreurs = [m for m in moves if 100 <= m["loss"] < 300]
    thr = [m for m in moves if [h for h in m["hang_before"] if h[2] >= 250]]
    thr_ok = [m for m in thr if m["loss"] < 150]
    fr_ = [m for m in moves if [h for h in m["opp_hang_before"] if h[2] >= 250]]
    # Mater répond à « il y avait du matériel gratuit » aussi bien que le prendre :
    # sans ça, le coup de mat comptait comme une pièce gratuite laissée sur place.
    fr_ok = [m for m in fr_
             if m["san"].endswith("#")
             or ("x" in m["san"]
                 and m["uci"][2:4] in {h[0] for h in m["opp_hang_before"] if h[2] >= 250})]
    clk_fin = next((m["clk"] for m in reversed(moves) if m["clk"] is not None), None)
    temps = round(600 - clk_fin) if clk_fin is not None else None
    roque = next((m["movenr"] for m in moves if m["san"].startswith("O-O")), None)
    sp = sorted(m["spent"] for m in moves if m["spent"] is not None)
    mediane = sp[len(sp) // 2] if sp else 0

    camp = chess.WHITE if g["color"] == "white" else chess.BLACK
    cartes = []
    for i_mo, mo in enumerate(com["moments"]):
        m = par_coup.get(mo["coup"])
        if not m:
            continue
        if mo.get("sequence"):
            svg = sequence_html(mo["sequence"], par_coup, defs_faits, camp, i_mo)
            # Sous le coup joué, le coup qu'il fallait jouer : même lecteur,
            # même mécanique, mais la bonne suite : voir la
            # colonne de gauche se terminer sur « ce qu'il fallait faire »
            # plutôt que sur du vide.
            if mo.get("sequence_bonne"):
                # `.pos` est une grille à deux colonnes : les trois blocs
                # doivent tenir dans UNE cellule, sinon le titre part à droite.
                svg = ('<div class="pos-gauche">' + svg
                       + '<div class="seq-titre">Ce qu’il fallait jouer</div>'
                       + sequence_html(mo["sequence_bonne"], par_coup, defs_faits,
                                       camp, f"{i_mo}b") + '</div>')
        else:
            montrer = mo.get("montrer", "les_deux")
            fleches = []
            if montrer in ("les_deux", "meilleur") and mo.get("uci_bon", m.get("best_uci")):
                fleches.append((mo.get("uci_bon", m.get("best_uci")), VERT))
            if montrer in ("les_deux", "joue"):
                couleur = ROUGE if mo.get("couleur_joue", "rouge" if mo.get("genre") == "rate" else "vert") == "rouge" else VERT
                fleches.append((m["uci"], couleur))
            svg = echiquier(m["fen_before"], fleches, defs_faits, camp)
        etiq = "".join(f'<span class="tag">{e}</span>' for e in mo.get("etiquettes", []))
        genre = mo.get("genre", "neutre")
        pastille = mo.get("pastille") or {"rate": '<span class="tag red">à corriger</span>',
                    "reussi": '<span class="tag grn">bien joué</span>',
                    "neutre": ""}.get(genre, "")
        swing = ""
        if genre != "reussi" and not mo.get("sans_swing"):
            ev = lambda v: "mat" if v >= 9000 else ("−mat" if v <= -9000 else f"{v/100:+.1f}")
            mut = ("le mat était là" if m["eval_before"] >= 9000 > m["eval_after"]
                   else f'soit {m["loss"]/100:.1f} point(s) laissés')
            swing = (f'<div class="swing"><span class="from">{ev(m["eval_before"])}</span>'
                     f'<span class="arrow-i">→</span><span class="to">{ev(m["eval_after"])}</span>'
                     f'<span class="mut">{mut}</span></div>')
        lignes = ""
        if mo.get("ligne_bonne"):
            lignes += f'<div class="line good">{fr_ligne(mo["ligne_bonne"])}</div>'
        if mo.get("ligne_jouee"):
            lignes += f'<div class="line bad">{fr_ligne(mo["ligne_jouee"])}</div>'
        note = f'<p class="note">{mo["note"]}</p>' if mo.get("note") else ""
        cartes.append(f'''<div class="pos{" pos-seq" if mo.get("sequence") else ""}">{svg}
  <div class="pos-body">
    <div class="pos-h">{pastille}{etiq}<span class="tag">coup {m["movenr"]}</span>
      <span class="tag">{m["spent"]} s de réflexion</span></div>
    <h3>{mo["titre"]}</h3>
    {mo["texte"]}
    {swing}
    <div class="answer">{lignes}{note}</div>
  </div></div>''')

    cmp_ = lambda val, ref, inv=False: ("up" if (val < ref if inv else val > ref) else "down")
    stats = "".join([
        tuile("Résultat", com["resultat_court"], com["resultat_note"], "up" if g["score"] == 1 else "down"),
        tuile("Perte moyenne", f"{cpl} cp", f"référence : {REF['cpl']} cp", cmp_(cpl, REF["cpl"], True)),
        tuile("Temps utilisé", mmss(temps or 0), f"médiane {mediane} s/coup", cmp_(temps or 0, REF["temps"])),
        tuile("Gaffes", str(len(gaffes)), f"{len(erreurs)} erreur(s) en plus", "down" if gaffes else "up"),
        tuile("Menaces gérées", f"{len(thr_ok)}/{len(thr)}" if thr else "—",
              f"référence : {round(REF['menaces']*100)} %",
              cmp_(len(thr_ok) / len(thr), REF["menaces"]) if thr else ""),
        tuile("Pièces gratuites", f"{len(fr_ok)}/{len(fr_)}" if fr_ else "—",
              f"référence : {round(REF['gratuites']*100)} %",
              cmp_(len(fr_ok) / len(fr_), REF["gratuites"]) if fr_ else ""),
        tuile("Roque", f"coup {roque}" if roque else "aucun", "objectif : avant le coup 10",
              "up" if roque and roque <= 10 else "down"),
    ])
    sections = "".join(
        f'<section><div class="shead"><span class="eyebrow">{s.get("eyebrow","")}</span>'
        f'<span class="rule"></span></div><h2>{s["titre"]}</h2><div class="col">{s["html"]}</div></section>'
        for s in com.get("sections", []))

    gabarit = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "gabarit.html")).read()
    html = (gabarit
            .replace("__DEFS__", defs_faits[0] or "")
            .replace("__TITRE__", com["titre"])
            .replace("__EYEBROW__", com["eyebrow"])
            .replace("__SOUS__", com["sous_titre"])
            .replace("__CHAPEAU__", com["chapeau"])
            .replace("__STATS__", stats)
            .replace("__COURBE__", courbe(moves, g["color"] == "white"))
            .replace("__LEGENDE_COURBE__", com.get("legende_courbe", ""))
            .replace("__CARTES__", "".join(cartes))
            .replace("__SECTIONS__", sections)
            .replace("__CONCLUSION__", com["conclusion"])
            .replace("__LIEN__", g["link"])
            .replace("__METHODE__", com.get("methode", "")))
    if "</body>" in html:
        html = html.replace("</body>", SCRIPT_SEQ + "\n</body>")
    open(sortie, "w").write(html)
    print(f"écrit : {sortie} ({len(html)} octets, {len(cartes)} échiquier(s))")


if __name__ == "__main__":
    a, c, s = sys.argv[1], sys.argv[2], sys.argv[3]
    construire(json.load(open(a)), json.load(open(c)), s)
