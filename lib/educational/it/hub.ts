import type { EducationalHubCard } from "../hub";

export const educationalHubIt = {
  slug: "comprendre",
  title: "Comprendere",
  eyebrow: "Riferimenti pedagogici",
  description:
    "Pagine di riferimento per cogliere meglio il disturbo dello spettro autistico, la sindrome di Asperger, l’alto potenziale intellettivo e altri riferimenti utili all’accompagnamento — senza sostituirsi a una valutazione clinica.",
  metaTitle: "Comprendere le neuroatipie | Claire Jalabert",
  metaDescription:
    "Riferimenti pedagogici sul TEA, la sindrome di Asperger, l’alto potenziale intellettivo e altre tematiche. Contenuto informativo, non diagnostico.",
  lead: "Questi testi vogliono chiarire, sfumare e orientare. Non sostituiscono un colloquio clinico né un percorso diagnostico medico.",
  cards: [
    {
      slug: "tsa",
      href: "/comprendre/tsa",
      eyebrow: "Spettro autistico",
      title: "Disturbo dello spettro autistico (TEA)",
      description:
        "Definizione, ambiti, sensorialità, età della vita, valutazione e strumenti — per comprendere meglio senza autodiagnosticarsi.",
    },
    {
      slug: "asperger",
      href: "/comprendre/asperger",
      eyebrow: "Storia e continuum",
      title: "Sindrome di Asperger",
      description:
        "Che cosa designa ancora questo termine, perché il linguaggio è evoluto, e come si iscrive oggi nello spettro autistico.",
    },
    {
      slug: "hpi",
      href: "/comprendre/hpi",
      eyebrow: "Funzionamento cognitivo",
      title: "Alto potenziale intellettivo (HPI)",
      description:
        "Riferimenti sull’HPI, i test, la diversità dei percorsi e la formulazione HPIC usata nello studio.",
    },
    {
      slug: "autres-reperes",
      href: "/comprendre/autres-reperes",
      eyebrow: "Oltre le etichette",
      title: "Altri riferimenti e accompagnamenti",
      description:
        "ADHD, sensorialità, stress, scuola, famiglia, gruppi e valutazioni — piste per situare una domanda.",
    },
  ] satisfies EducationalHubCard[],
} as const;
