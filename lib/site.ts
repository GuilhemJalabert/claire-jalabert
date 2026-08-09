export const siteConfig = {
  name: "Claire Jalabert",
  title: "Psychologue clinicienne",
  description:
    "Psychologue clinicienne à Gan. Consultations en présentiel (99 rue d’Ossau) ou par visioconférence. Accompagnement des enfants, adolescents, adultes, couples et familles. Haut Potentiel Intellectuel et Créatif, Syndrome d’Asperger.",
  /** Remplacer par le domaine de production lorsque disponible. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
  language: "fr",
} as const;
