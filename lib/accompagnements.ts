/**
 * Source de vérité détaillée — page /accompagnements.
 * Les autres pages n’affichent que des résumés + redirection.
 */

export const accompanimentsPage = {
  hero: {
    title: "Accompagnements",
    description:
      "Entretiens, thérapies, médiations et bilans proposés au cabinet — pour les enfants, adolescents, adultes, couples et familles.",
  },
  domains: {
    id: "domaines",
    eyebrow: "Expertises",
    title: "Domaines d’accompagnement",
    lead: "Thématiques mises en avant au cabinet — sans préjuger de la demande.",
    items: [
      "Haut Potentiel Intellectuel / Créatif (HPIC)",
      "Syndrome d’Asperger",
      "Relations familiales",
      "Thérapie de couple",
      "Approche transgénérationnelle",
      "Gestion du stress",
      "Problématiques scolaires",
      "Médiation scolaire",
      "Médiation animale",
      "Médiation par la nature",
      "Bilans et évaluations",
      "Groupes de parole",
    ],
  },
  services: {
    eyebrow: "Suivis",
    title: "Les accompagnements proposés",
    lead: "Chaque demande est singulière. Ces accompagnements indiquent les formes de suivi possibles au cabinet.",
  },
  assessments: {
    id: "bilans",
    eyebrow: "Évaluations",
    title: "Bilans & évaluations",
    intro:
      "Différents bilans et outils d’évaluation peuvent être proposés afin de mieux comprendre le fonctionnement cognitif, émotionnel, sensoriel ou relationnel de la personne et d’éclairer l’accompagnement.",
    ctaTitle: "Une question concernant un bilan ?",
    ctaBody:
      "Le secrétariat peut vous renseigner sur les modalités et vous orienter selon votre demande.",
    ctaLabel: "Contacter le secrétariat",
    ctaHref: "/contact",
  },
} as const;

/** Dix accompagnements détaillés. */
export const accompanimentServices = [
  {
    id: "entretien-clinique",
    title: "Entretien clinique",
    description:
      "Écoute et échange dans un cadre contenant, pour accueillir la demande et commencer à mettre des mots sur ce qui est vécu.",
  },
  {
    id: "therapeutique-enfant",
    title: "Entretien thérapeutique enfant",
    description:
      "Expression du vécu et des émotions via des médiations adaptées (jeux, dessin, constructions…).",
  },
  {
    id: "therapeutique-adolescent",
    title: "Entretien thérapeutique adolescent",
    description:
      "Accompagnement pour mieux se comprendre et traverser le vécu adolescent.",
  },
  {
    id: "therapeutique-adulte",
    title: "Entretien thérapeutique adulte",
    description:
      "Écoute active et bienveillante du vécu, des émotions, des besoins et des modalités relationnelles.",
  },
  {
    id: "therapie-couple",
    title: "Thérapie de couple",
    description:
      "Travail sur la relation, ses conflits, son histoire et les liens affectifs — y compris approche transgénérationnelle.",
  },
  {
    id: "mediation-familiale",
    title: "Médiation familiale",
    description:
      "Accompagnement des enjeux relationnels au sein de la famille.",
  },
  {
    id: "mediation-scolaire",
    title: "Médiation scolaire",
    description: "Soutien autour des problématiques scolaires.",
  },
  {
    id: "therapie-groupe",
    title: "Thérapie de groupe",
    description:
      "Espace collectif d’expression et d’échange (notamment groupes de parole).",
  },
  {
    id: "mediation-animale",
    title: "Médiation animale",
    description:
      "Suivi thérapeutique s’appuyant sur la présence de l’animal pour faciliter l’expression, le lien et l’apaisement.",
  },
  {
    id: "mediation-nature",
    title: "Médiation par la nature",
    description:
      "Suivi thérapeutique accompagné par le contact avec la nature, pour soutenir le cheminement et le ressenti.",
  },
] as const;

/** Visuels associés aux médiations animale et nature. */
export const accompanimentMediationVisuals = [
  {
    id: "visual-mediation-animale",
    src: "/images/mediation-animale.jpg",
    alt: "Chien au nœud papillon, présence calme dans un intérieur",
    objectPosition: "object-[42%_58%]",
    credit: null,
  },
  {
    id: "visual-mediation-nature",
    src: "/images/mediation-nature.jpg",
    alt: "Paonne au plumage irisé, posée sur un rebord face à un mur rose",
    objectPosition: "object-[38%_48%]",
    credit: "@vongvision par Nicolas Vongsuravatana",
  },
] as const;

/** Sept bilans — détail uniquement sur /accompagnements. */
export const assessmentServices = [
  {
    id: "neuropsychologique",
    title: "Bilan neuropsychologique complet",
    note: "Enfant & adulte",
    description:
      "Une évaluation approfondie du fonctionnement cognitif permettant d’explorer notamment l’attention, la mémoire, le raisonnement et les fonctions exécutives.",
    learnMore: null,
  },
  {
    id: "tdah",
    title: "Bilan TDAH",
    note: null,
    description:
      "Une évaluation destinée à explorer le fonctionnement attentionnel, l’impulsivité et les fonctions exécutives dans le cadre d’une démarche clinique autour du TDAH.",
    learnMore: {
      href: "/comprendre/autres-reperes#tdah",
      label: "Lire les repères sur le TDAH",
    },
  },
  {
    id: "sensoriel",
    title: "Bilan sensoriel",
    note: null,
    description:
      "Une exploration des particularités sensorielles afin de mieux comprendre la manière dont les stimulations de l’environnement sont perçues et vécues.",
    learnMore: {
      href: "/comprendre/autres-reperes#sensorialite",
      label: "Comprendre la sensorialité",
    },
  },
  {
    id: "schemas",
    title: "Test des schémas",
    note: null,
    description:
      "Une exploration des schémas de pensée et de fonctionnement construits au fil des expériences, afin de mieux comprendre certains modes émotionnels et relationnels récurrents.",
    learnMore: null,
  },
  {
    id: "instrumental",
    title: "Bilan instrumental",
    note: null,
    description:
      "Une évaluation de différentes fonctions impliquées dans les apprentissages et l’adaptation, afin de mieux repérer les ressources et les éventuelles difficultés.",
    learnMore: null,
  },
  {
    id: "projectif",
    title: "Bilan projectif",
    note: null,
    description:
      "Une exploration clinique du fonctionnement psychique et affectif à partir d’outils projectifs, venant compléter la compréhension globale de la personne.",
    learnMore: null,
  },
  {
    id: "tsa-adir",
    title: "Démarche diagnostique TSA — ADI-R",
    note: null,
    description:
      "Un entretien clinique structuré permettant d’explorer l’histoire développementale, les interactions sociales, la communication et certains comportements dans le cadre d’une démarche diagnostique TSA.",
    learnMore: {
      href: "/comprendre/tsa",
      label: "En savoir plus sur le TSA",
    },
  },
] as const;

/**
 * Résumés pour l’accueil — une phrase max, sans détails des bilans.
 */
export const accompanimentsHomeSummary = {
  title: "Les suivis proposés",
  lead: "Un aperçu des accompagnements possibles au cabinet.",
  items: [
    {
      title: "Enfants",
      description:
        "Accompagnement adapté, notamment via des médiations (jeux, dessins, constructions…).",
    },
    {
      title: "Adolescents",
      description:
        "Entretiens pour mieux se comprendre à l’adolescence.",
    },
    {
      title: "Adultes",
      description:
        "Entretiens centrés sur le vécu, les émotions et les besoins.",
    },
    {
      title: "Couples",
      description:
        "Travail sur la relation, ses fragilités et son équilibre.",
    },
    {
      title: "Familles",
      description:
        "Accompagnement des relations familiales et médiation.",
    },
    {
      title: "Bilans & évaluations",
      description:
        "Des bilans peuvent être proposés afin de mieux comprendre certains aspects du fonctionnement cognitif, émotionnel ou sensoriel.",
      href: "/accompagnements#bilans",
    },
  ],
  ctaLabel: "Découvrir tous les accompagnements",
  ctaHref: "/accompagnements",
  assessmentsLinkLabel: "En savoir plus",
  assessmentsHref: "/accompagnements#bilans",
} as const;

/** Mention courte — /a-propos */
export const accompanimentsAboutMention = {
  body: "Claire propose également différents accompagnements et bilans adaptés aux besoins des enfants, adolescents et adultes.",
  ctaLabel: "Découvrir les accompagnements",
  ctaHref: "/accompagnements",
} as const;

/** Mention courte — /contact */
export const accompanimentsContactMention = {
  body: "Pour toute question sur un accompagnement ou un bilan, consultez la page dédiée.",
  ctaLabel: "Accompagnements & bilans",
  ctaHref: "/accompagnements",
} as const;

/** Lien secondaire — section Bilans de /tarifs */
export const accompanimentsTariffsLink = {
  label: "Découvrir les bilans proposés",
  href: "/accompagnements#bilans",
} as const;
