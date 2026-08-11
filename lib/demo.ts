export const demoTopics = [
  { name: "Costo de vida", slug: "economia", score: 31, delta: -4.8 },
  { name: "Seguridad", slug: "seguridad", score: 48, delta: 7.2 },
  { name: "Empleo", slug: "economia", score: 56, delta: 2.1 },
  { name: "Educación", slug: "educacion", score: 61, delta: 3.4 },
  { name: "Salud", slug: "economia", score: 52, delta: 0.4 },
  { name: "Infraestructura", slug: "economia", score: 68, delta: 5.7 },
];

export const demoTemaPages = {
  economia: {
    title: "Economía",
    summary: "Costo de vida, empleo e infraestructura como prioridades económicas.",
    score: 54,
    delta: 1.2,
    highlights: [
      "El costo de vida lidera la preocupación ciudadana en datos demo.",
      "Empleo e infraestructura muestran mayorías relativas más estables.",
      "Los resultados DR y diáspora se reportan por separado.",
    ],
  },
  seguridad: {
    title: "Seguridad",
    summary: "Percepción de seguridad ciudadana y tendencias agregadas.",
    score: 48,
    delta: 7.2,
    highlights: [
      "Seguridad es uno de los temas con mayor movimiento en el tracker demo.",
      "Se publican solo agregados con tamaño de muestra suficiente.",
      "No interpretamos estos datos como intención electoral.",
    ],
  },
  educacion: {
    title: "Educación",
    summary: "Prioridad educativa y calidad percibida del sistema.",
    score: 61,
    delta: 3.4,
    highlights: [
      "Educación aparece entre las prioridades con mejor score demo.",
      "El detalle por región y diáspora se ampliará con más campo.",
      "Toda cifra debe ir acompañada de método y limitaciones.",
    ],
  },
} as const;

export type TemaSlug = keyof typeof demoTemaPages;

export const demoRegions = [
  { name: "Distrito Nacional", slug: "distrito-nacional", score: 67 },
  { name: "Santo Domingo", slug: "santo-domingo", score: 59 },
  { name: "Santiago", slug: "santiago", score: 68.4 },
  { name: "La Vega", slug: "la-vega", score: 57 },
  { name: "Puerto Plata", slug: "puerto-plata", score: 62 },
  { name: "San Cristóbal", slug: "san-cristobal", score: 54 },
];

export const demoRegionInsights = {
  santiago: {
    country: "DOMINICAN REPUBLIC",
    name: "Santiago",
    pulsoScore: 68.4,
    responses: 8491,
    topIssue: "Cost of Living",
    sentiment: 12.4,
    change7d: 4.3,
    confidence: "High" as const,
  },
} as const;

export type RegionInsightSlug = keyof typeof demoRegionInsights;

export const demoDiaspora = [
  { name: "New York", slug: "new-york", score: 72 },
  { name: "New Jersey", slug: "new-jersey", score: 68 },
  { name: "Florida", slug: "florida", score: 61 },
  { name: "Massachusetts", slug: "massachusetts", score: 66 },
  { name: "Pennsylvania", slug: "pennsylvania", score: 58 },
];

export const demoDiasporaPages = {
  "new-york": {
    title: "New York",
    summary: "La comunidad dominicana más grande en EE.UU. en esta demo.",
    score: 72,
    priorities: ["Costo de vida", "Empleo", "Educación"],
  },
  "new-jersey": {
    title: "New Jersey",
    summary: "Concentración diáspora con fuerte vínculo familiar con RD.",
    score: 68,
    priorities: ["Seguridad", "Costo de vida", "Salud"],
  },
  florida: {
    title: "Florida",
    summary: "Hub creciente de diáspora con prioridades económicas mixtas.",
    score: 61,
    priorities: ["Empleo", "Infraestructura", "Educación"],
  },
} as const;

export type DiasporaSlug = keyof typeof demoDiasporaPages;
