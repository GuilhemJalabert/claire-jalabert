import type { EducationalRelated } from "./types";

export type EducationalHubCard = EducationalRelated & {
  slug: "tsa" | "asperger" | "hpi" | "autres-reperes";
  eyebrow: string;
};

export const educationalHub = {
  slug: "comprendre",
  title: "Comprendre",
  eyebrow: "Repères pédagogiques",
  description:
    "Des pages de référence pour mieux saisir le trouble du spectre de l’autisme, le syndrome d’Asperger, le haut potentiel intellectuel, et d’autres repères utiles à l’accompagnement — sans se substituer à une évaluation clinique.",
  metaTitle: "Comprendre — TSA, Asperger, HPI | Claire Jalabert",
  metaDescription:
    "Repères pédagogiques sur le TSA, le syndrome d’Asperger, le haut potentiel intellectuel et d’autres thématiques. Contenu informatif, non diagnostique.",
  lead: "Ces textes visent à éclairer, à nuancer et à orienter. Ils ne remplacent pas un entretien clinique ni une démarche diagnostique médicale.",
  cards: [
    {
      slug: "tsa",
      href: "/comprendre/tsa",
      eyebrow: "Spectre de l’autisme",
      title: "Trouble du spectre de l’autisme (TSA)",
      description:
        "Définition, domaines, sensorialité, âges de la vie, évaluation et outils — pour mieux comprendre sans se diagnostiquer.",
    },
    {
      slug: "asperger",
      href: "/comprendre/asperger",
      eyebrow: "Histoire & continuum",
      title: "Syndrome d’Asperger",
      description:
        "Ce que désigne encore ce terme, pourquoi le langage a évolué, et comment il s’inscrit aujourd’hui dans le spectre de l’autisme.",
    },
    {
      slug: "hpi",
      href: "/comprendre/hpi",
      eyebrow: "Fonctionnement cognitif",
      title: "Haut Potentiel Intellectuel (HPI)",
      description:
        "Repères sur le HPI, les tests, la diversité des parcours, et la formulation HPIC utilisée au cabinet.",
    },
    {
      slug: "autres-reperes",
      href: "/comprendre/autres-reperes",
      eyebrow: "Au-delà des labels",
      title: "Autres repères & accompagnements",
      description:
        "TDAH, sensorialité, stress, scolarité, famille, groupes et bilans — des pistes pour situer une demande.",
    },
  ] satisfies EducationalHubCard[],
} as const;
