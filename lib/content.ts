/**
 * Contenu site — source : https://www.clairejalabertpsychologue.com
 * Ne pas inventer d’informations absentes de cette source.
 */

export const contactInfo = {
  phoneDisplay: "06 41 12 30 95",
  phoneTel: "+33641123095",
  phoneNote: "Merci de laisser un SMS",
  email: "clairejalabert9@orange.fr",
  address: {
    street: "99 rue d'Ossau",
    postalCode: "64290",
    city: "Gan",
    full: "99 rue d'Ossau, 64290 Gan",
  },
  /** Mention du site : activité à Pau et Gan ; consultations au cabinet de Gan. */
  locationsLabel: "Pau et Gan",
} as const;

export const quotes = {
  saintAugustin: {
    text: "Le Bonheur, c’est de désirer ce que l’on a déjà",
    attribution: "— Saint-Augustin",
  },
  confucius: {
    text: "On a deux vies. La deuxième commence quand on réalise que l’on en a qu’une",
    attribution: "— Confucius",
  },
} as const;

export const presentation = {
  name: "Claire Jalabert",
  title: "Psychologue clinicienne",
  locations: "à Pau et Gan",
  /** Points issus de la page d’accueil du site actuel. */
  highlights: [
    "Spécialisée dans le Haut Potentiel Intellectuel et Créatif (HPIC)",
    "Spécialisée dans le Syndrome d’Asperger",
    "Praticienne et chercheuse associée sur ces thématiques au CRFDP (Université de Rouen EA7475)",
    "Accompagnement des enfants, adolescents et adultes",
    "Relations familiales (famille et couple)",
    "Approche transgénérationnelle",
    "Gestion du stress",
    "Problématiques scolaires",
  ],
} as const;

export const audiences = [
  {
    title: "Enfants",
    description:
      "Accompagnement adapté, notamment via des médiations (jeux, dessins, constructions…).",
  },
  {
    title: "Adolescents",
    description:
      "Entretiens thérapeutiques pour mieux se comprendre à l’adolescence.",
  },
  {
    title: "Adultes",
    description:
      "Entretiens thérapeutiques centrés sur le vécu, les émotions et les besoins spécifiques.",
  },
  {
    title: "Couples",
    description:
      "Thérapie de couple pour travailler la relation, ses fragilités et son équilibre.",
  },
  {
    title: "Familles",
    description:
      "Accompagnement des relations familiales, y compris médiation familiale.",
  },
] as const;

export const accompaniments = {
  featured: {
    title: "Bilan psychologique",
    description:
      "Bilans intellectuels et neuro-psychologiques, bilans projectifs, exploration sensorielle et outils pour le diagnostic de l’autisme — selon les besoins identifiés.",
    href: "/accompagnements",
  },
  items: [
    {
      title: "Entretien clinique",
      description:
        "Écoute et échange dans un cadre contenant. Durée : 30 à 45 minutes.",
    },
    {
      title: "Entretien thérapeutique enfant",
      description:
        "Expression du vécu et des émotions via des médiations adaptées (jeux, dessin, constructions…).",
    },
    {
      title: "Entretien thérapeutique adolescent",
      description:
        "Accompagnement pour mieux se comprendre et traverser le vécu adolescent.",
    },
    {
      title: "Entretien thérapeutique adulte",
      description:
        "Écoute active et bienveillante du vécu, des émotions, des besoins et des modalités relationnelles.",
    },
    {
      title: "Thérapie de couple",
      description:
        "Travail sur la relation, ses conflits, son histoire et les liens affectifs — y compris approche transgénérationnelle.",
    },
    {
      title: "Médiation familiale",
      description: "Accompagnement des enjeux relationnels au sein de la famille.",
    },
    {
      title: "Médiation scolaire",
      description: "Soutien autour des problématiques scolaires.",
    },
    {
      title: "Thérapie de groupe",
      description:
        "Espace collectif d’expression et d’échange (notamment groupes de parole).",
    },
  ],
} as const;

export const expertises = [
  "Haut Potentiel Intellectuel / Créatif (HPIC)",
  "Syndrome d’Asperger",
  "Relations familiales",
  "Thérapie de couple",
  "Approche transgénérationnelle",
  "Gestion du stress",
  "Problématiques scolaires",
  "Médiation scolaire",
  "Bilans psychologiques",
  "Groupes de parole",
] as const;

/**
 * Approche — éléments mentionnés sur le site (entretien adulte / clinique).
 * Présentés de façon nuancée : techniques possibles selon les situations.
 */
export const approach = {
  intro:
    "Les entretiens cliniques reposent sur l’écoute et l’échange, dans un cadre établi par la praticienne. L’objectif est d’aider la personne à retrouver du bien-être, de la confiance et un équilibre dans le quotidien.",
  pillars: [
    {
      title: "Écoute bienveillante",
      body: "Un espace pour parler de ce qui est vécu — émotions, ressentis, difficultés et besoins.",
    },
    {
      title: "Comprendre le fonctionnement",
      body: "Exploration des sensibilités, des relations interpersonnelles et de la place dans un groupe.",
    },
    {
      title: "Soutiens possibles",
      body: "Selon les situations, d’autres techniques peuvent être mobilisées : gestion mentale, gestion du stress ou techniques psychocorporelles.",
    },
  ],
} as const;

export const groupsOfSpeech = {
  title: "Groupes de parole",
  objectives: [
    "S’exprimer sur un vécu parfois complexe",
    "Échanger sur des thématiques communes",
    "Favoriser la parole entre participants",
    "Dépasser un sentiment d’isolement, de jugement ou de différence",
  ],
} as const;

export const tariffs = [
  {
    label: "Entretien clinique (30 à 45 minutes)",
    value: "55 €",
  },
  {
    label: "Entretien couple",
    value: "100 €",
  },
  {
    label: "Bilan psychologique et intellectuel enfants et adolescents",
    value: "Nous consulter",
  },
  {
    label: "Bilan psychologique complet adulte",
    value: "Nous consulter",
  },
  {
    label: "Restitution de bilan",
    value: "Nous consulter",
  },
  {
    label:
      "Autres prestations (bilan sensoriel, diagnostic de l’autisme ADI-R, etc.)",
    value: "Nous consulter",
  },
] as const;
