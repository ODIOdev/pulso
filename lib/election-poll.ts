import type { PollResult } from "@/lib/types";

/**
 * Published national preference snapshot for RD presidential race toward 2028.
 * Source: ACD Media Encuesta Nacional de Opinión Pública (fieldwork 2–4 Jul 2026),
 * as reported by Dominican press (e.g. Diario Libre, 13 Jul 2026).
 * n ≈ 1,200. This is third-party survey data — not Pulso RD web participation.
 */
export const acdMediaJuly2026 = {
  firm: "ACD Media",
  title: "Encuesta Nacional de Opinión Pública",
  fieldwork: "2–4 julio 2026",
  published: "julio 2026",
  sampleSize: 1200,
  sourceUrl: "https://www.diariolibre.com/politica/partidos/2026/07/13/david-collado-lidera-encuesta-acd-media-para-elecciones-2028/3597849",
  question: "Si las elecciones presidenciales fueran hoy, ¿por quién votarías?",
  results: [
    { option: "No sabe / No responde", votes: 304, percentage: 25.3 },
    { option: "David Collado", votes: 247, percentage: 20.6 },
    { option: "Leonel Fernández", votes: 174, percentage: 14.5 },
    { option: "Omar Fernández", votes: 145, percentage: 12.1 },
    { option: "Gonzalo Castillo", votes: 78, percentage: 6.5 },
    { option: "Santiago Matías", votes: 76, percentage: 6.3 },
    { option: "Carolina Mejía", votes: 42, percentage: 3.5 },
    { option: "Guido Gómez Mazara", votes: 12, percentage: 1.0 },
    { option: "Wellington Arnaud", votes: 7, percentage: 0.6 },
    { option: "Ramfis Trujillo", votes: 6, percentage: 0.5 },
    { option: "Ninguno", votes: 70, percentage: 5.8 },
  ] satisfies PollResult[],
};

export const electionBallotOptions = acdMediaJuly2026.results
  .map((r) => r.option)
  .filter((name) => name !== "No sabe / No responde" && name !== "Ninguno")
  .concat(["Otro / Indeciso"]);
