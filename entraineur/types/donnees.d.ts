/* La forme de donnees/donnees.json (S.d dans app.js), pour la lecture et pour
   la vérification des types (npm run types). Rien ici n'est chargé par la
   page. Les champs facultatifs (?) manquent sur les données d'anciennes
   versions : le code doit s'en passer. */

/** Une gaffe repérée par Stockfish à l'import (perte d'au moins 300 cp). */
export interface Gaffe {
  numero: number; san: string; fen: string; perte: number;
  evalAvant: number; evalApres: number;
  meilleurUci: string | null; punitionUci: string | null;
  url: string; couleur: 'w' | 'b'; date: string;
  /** relue en profondeur (affinage, 800 000 nœuds) */
  affine?: boolean;
  /** type de gaffe en cache, et la version de la taxinomie qui l'a calculé */
  _cls?: string; _clsV?: number;
}

/** Ce que Stockfish a dit d'une partie. */
export interface AnalyseMoteur {
  cpl: number; nbCoups: number; gaffes: Gaffe[];
  evals?: number[]; bests?: (string | null)[];
}

/** Une partie telle qu'elle est enregistrée (compacter() dans app.js). */
export interface PartieRangee {
  url: string;
  /** AAAA-MM-JJ, jour de fin de la partie */
  date: string;
  /** fin de la partie, en secondes depuis 1970 */
  fin: number;
  couleur: 'w' | 'b';
  score: 0 | 0.5 | 1;
  resultat: string; adversaire: string;
  /** classements après la partie */
  elo: number; eloAdv: number;
  termination: string;
  /** cadence de départ, en secondes */
  base: number;
  /** les coups en SAN, séparés par des espaces */
  sans: string;
  /** pendule après chaque demi-coup, en secondes (null : inconnue) */
  clks: (number | null)[];
  stat: {
    roque: number | null; menaces: number; menacesOk: number;
    gratuites: number; gratuitesPrises: number;
    tempsUtilise: number; nbCoups?: number;
  };
  /** absent tant que Stockfish n'a pas analysé la partie */
  moteur?: AnalyseMoteur;
  site?: 'lichess';
}

/** Les chiffres d'un jour (majJour() dans app.js). */
export interface Jour {
  parties: number; coups: number; score: number;
  temps: number; tempsCoup: number | null;
  menaces: number; menacesOk: number; gratuites: number; gratuitesPrises: number;
  roques: number;
  /** sur les seules parties analysées du jour */
  cpl: number | null; gaffes: number | null;
  /** sur quoi portent cpl et gaffes (depuis la version 4 des jours) */
  coupsMoteur?: number; partiesMoteur?: number;
}

export interface Donnees {
  reglages: {
    pseudo: string; pseudoLichess: string;
    /** synchronisation GitHub : propre à l'appareil, jamais synchronisé */
    github?: { jeton?: string; depot?: string; base?: string };
    lichessJeton?: string; lichessPseudo?: string;
    [cle: string]: unknown;
  };
  parties: Record<string, PartieRangee>;
  jours: Record<string, Jour>;
  /** version du calcul des jours (VERSION_JOURS) : en dessous, on recalcule */
  versionJours?: number;
  exos?: Record<string, unknown>;
  reps?: Record<string, unknown>;
  [cle: string]: unknown;
}
