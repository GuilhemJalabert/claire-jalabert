/**
 * Domaine canonique public (WWW).
 * Source de vérité unique pour robots, sitemap, canonical, Open Graph et JSON-LD.
 */
export const SITE_URL = "https://www.psychologueclairejalabert.com";

export const siteConfig = {
  name: "Claire Jalabert",
  title: "Psychologue clinicienne",
  description:
    "Psychologue clinicienne à Gan. Consultations en présentiel (99 rue d’Ossau) ou par visioconférence. Accompagnement des enfants, adolescents, adultes, couples et familles. HPI, HPC, TSA, TDAH et troubles des apprentissages.",
  url: SITE_URL,
  locale: "fr_FR",
  language: "fr",
} as const;
