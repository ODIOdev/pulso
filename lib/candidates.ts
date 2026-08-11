export type CandidateStatus =
  | "Explorando"
  | "Figura partidaria"
  | "Proyecto propio"
  | "En sondeos";

export type PresidentialCandidate = {
  slug: string;
  name: string;
  party: string;
  role: string;
  status: CandidateStatus;
  summary: string;
  featured?: boolean;
};

/**
 * Potential / widely discussed figures for RD 2028.
 * Not an official ballot. Not a voting module.
 */
export const election2028Candidates: PresidentialCandidate[] = [
  {
    slug: "santiago-matias",
    name: "Santiago Matías",
    party: "Proyecto de partido propio",
    role: "Empresario y comunicador (Alofoke)",
    status: "Proyecto propio",
    featured: true,
    summary:
      "6.3% en ACD Media (julio 2026). Anunció proyecto de partido propio y descartó candidatura por el PRSC u otras organizaciones existentes.",
  },
  {
    slug: "david-collado",
    name: "David Collado",
    party: "PRM",
    role: "Ministro de Turismo",
    status: "Figura partidaria",
    featured: true,
    summary:
      "Lidera la preferencia presidencial en ACD Media julio 2026 con 20.6%, principal figura proyectada del PRM.",
  },
  {
    slug: "leonel-fernandez",
    name: "Leonel Fernández",
    party: "Fuerza del Pueblo",
    role: "Expresidente / líder de FP",
    status: "Figura partidaria",
    featured: true,
    summary:
      "14.5% en ACD Media julio 2026; referente principal de Fuerza del Pueblo en el escenario 2028.",
  },
  {
    slug: "omar-fernandez",
    name: "Omar Fernández",
    party: "Fuerza del Pueblo",
    role: "Senador / dirigente FP",
    status: "En sondeos",
    featured: true,
    summary:
      "Tercero en la encuesta ACD Media de julio 2026 (12.1%) como aspirante dentro del espacio de Fuerza del Pueblo.",
  },
  {
    slug: "gonzalo-castillo",
    name: "Gonzalo Castillo",
    party: "PLD",
    role: "Exministro / dirigente PLD",
    status: "En sondeos",
    summary:
      "Aparece con 6.5% en ACD Media (julio 2026), prácticamente empatado con Santiago Matías.",
  },
  {
    slug: "carolina-mejia",
    name: "Carolina Mejía",
    party: "PRM",
    role: "Alcaldesa del Distrito Nacional",
    status: "En sondeos",
    summary:
      "3.5% en ACD Media julio 2026; también figura en mediciones internas del PRM.",
  },
  {
    slug: "guido-gomez-mazara",
    name: "Guido Gómez Mazara",
    party: "Independiente / oposición",
    role: "Abogado y dirigente político",
    status: "En sondeos",
    summary:
      "1.0% en ACD Media julio 2026; nombre recurrente fuera de las tres grandes maquinarias.",
  },
  {
    slug: "wellington-arnaud",
    name: "Wellington Arnaud",
    party: "PRM",
    role: "Dirigente / funcionario",
    status: "En sondeos",
    summary: "0.6% en la medición ACD Media de julio 2026.",
  },
  {
    slug: "ramfis-trujillo",
    name: "Ramfis Trujillo",
    party: "Independiente",
    role: "Figura política",
    status: "En sondeos",
    summary: "0.5% en la medición ACD Media de julio 2026.",
  },
  {
    slug: "abel-martinez",
    name: "Abel Martínez",
    party: "PLD",
    role: "Dirigente PLD",
    status: "Explorando",
    summary:
      "Ha sido señalado como aspirante presidencial por el PLD; no lideró la medición ACD Media de julio 2026.",
  },
  {
    slug: "francisco-javier-garcia",
    name: "Francisco Javier García",
    party: "PLD",
    role: "Dirigente PLD",
    status: "En sondeos",
    summary:
      "Figura peledeísta mencionada en coberturas y sondeos previos a las internas.",
  },
  {
    slug: "raquel-pena",
    name: "Raquel Peña",
    party: "PRM",
    role: "Vicepresidenta de la República",
    status: "En sondeos",
    summary:
      "Figura de gobierno citada en sondeos; en ACD Media julio 2026 aparece con respaldo residual (~0.5% en algunas lecturas).",
  },
  {
    slug: "eduardo-sanz-lovaton",
    name: "Eduardo Sanz Lovatón",
    party: "PRM",
    role: "Director de Aduanas",
    status: "En sondeos",
    summary:
      "Conocido como Yayo Sanz Lovatón; aparece en algunas mediciones de preferencia presidencial.",
  },
];

export function getCandidate(slug: string) {
  return election2028Candidates.find((c) => c.slug === slug) ?? null;
}
