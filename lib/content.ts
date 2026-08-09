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
  /** Lieu d’exercice unique. */
  locationsLabel: "Gan",
  modalities: "en présentiel ou par visioconférence",
  modalitiesLabel: "En présentiel ou par visioconférence",
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
  locations: "à Gan",
  locationsShort: "Gan",
  /**
   * Résumé accueil — miroir court de /a-propos.
   * Sans formations complémentaires détaillées.
   */
  homeSummary: [
    "Claire Jalabert est psychologue clinicienne à Gan. Elle accompagne les enfants, les adolescents et les adultes, avec une spécialisation dans le Haut Potentiel Intellectuel et Créatif (HPIC) et le Syndrome d’Asperger. Les consultations se déroulent au cabinet (99 rue d’Ossau) en présentiel, ou par visioconférence.",
    "Son parcours universitaire en psychologie clinique s’enrichit d’une activité de recherche autour du Haut Potentiel, menée en lien avec le CRFDP de l’Université de Rouen.",
    "Avant la psychologie, elle a exercé comme professeure certifiée d’histoire-géographie.",
  ],
} as const;

/**
 * Contenu éditorial de /a-propos — source fournie pour cette page.
 * EA 7675 uniquement pour l’intitulé du doctorat ; autres mentions CRFDP sans numéro EA.
 */
export const about = {
  heroIntro: [
    "Claire Jalabert est psychologue clinicienne à Gan. Elle accompagne les enfants, les adolescents et les adultes, notamment autour du Haut Potentiel Intellectuel et Créatif (HPIC) et du Syndrome d’Asperger. Les consultations ont lieu au cabinet, 99 rue d’Ossau, en présentiel ou par visioconférence.",
    "Son parcours associe la pratique clinique, la recherche universitaire et une expérience antérieure dans l’enseignement.",
  ],
  journey: {
    eyebrow: "Parcours",
    title: "Entre enseignement, psychologie et recherche",
    lead: "Claire Jalabert a d’abord enseigné l’histoire-géographie. Son chemin s’est ensuite déployé dans la psychologie clinique, jusqu’à un travail de doctorat consacré à l’enfant à Haut Potentiel intellectuel et à la dynamique familiale.",
    teaching: {
      title: "Professeure certifiée d’histoire-géographie",
      body: "Un parcours antérieur dans l’enseignement, avant de s’orienter vers la psychologie clinique.",
    },
    studiesIntro:
      "En psychologie, son parcours universitaire s’est construit étape après étape :",
    studies: [
      {
        degree: "Licence de Psychologie",
        place: "Université d’Angers",
      },
      {
        degree: "Master de psychologie clinique",
        place: "Université de Nantes",
      },
      {
        degree: "Doctorante en Psychologie",
        place: "Université de Rouen",
        lab: "EA 7675 CRFDP",
        thesis:
          "« Dynamique familiale et fonctionnement intrasubjectif de l'enfant à Haut Potentiel intellectuel »",
        direction: "Sous la direction de Mme Catherine Weissman-Arcache.",
      },
    ],
  },
  specializations: {
    eyebrow: "Spécialisations",
    title: "Domaines d’accompagnement",
    lead: "Deux spécialités structurent particulièrement son travail clinique. D’autres domaines viennent les prolonger au quotidien.",
    featured: [
      {
        title: "Haut Potentiel Intellectuel et Créatif",
        short: "HPIC",
        body: "Spécialisation dans le Haut Potentiel Intellectuel et Créatif (HPIC).",
      },
      {
        title: "Syndrome d’Asperger",
        short: "Asperger",
        body: "Spécialisation dans le Syndrome d’Asperger, en lien avec la pratique clinique et la recherche au CRFDP.",
      },
    ],
    others: [
      "Enfants",
      "Adolescents",
      "Adultes",
      "Relations familiales",
      "Famille et couple",
      "Approche transgénérationnelle",
      "Gestion du stress",
      "Problématiques scolaires",
    ],
  },
  complementary: {
    eyebrow: "Formations complémentaires",
    title: "Autour du corps, du stress et de l’expression",
    lead: "À côté du parcours universitaire, Claire Jalabert a suivi des formations qui enrichissent sa pratique clinique.",
    items: [
      {
        axis: "Thérapie psychocorporelle",
        title: "Touch for Health",
        detail: "Formation de John Thie D.C.",
        place: "Nantes et Tours",
      },
      {
        axis: "Gestion du stress et mémorisation mentale",
        title: "Méthode de E. et R. Kammerer et Gordon Stokes",
        detail: null,
        place: "Nantes",
      },
      {
        axis: "Art thérapie",
        title: "Formation avec Marie Desaulles",
        detail: "Artiste et art thérapeute",
        place: null,
      },
    ],
  },
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
