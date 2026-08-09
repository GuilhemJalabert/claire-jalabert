/**
 * Source unique des honoraires et modalités — page /tarifs.
 * Ne pas dupliquer ces montants ailleurs dans le projet.
 */

export const pricing = {
  consultations: [
    {
      id: "anamnese",
      title: "Premier rendez-vous d’anamnèse",
      price: 80,
      priceLabel: "80 €",
      description:
        "Premier rendez-vous pour recueillir la demande.",
    },
    {
      id: "individuel",
      title: "Entretien individuel",
      price: 70,
      priceLabel: "70 €",
      description: "Consultation individuelle.",
    },
    {
      id: "couple",
      title: "Entretien de couple",
      price: 100,
      priceLabel: "100 €",
      description: "Consultation de couple.",
    },
  ],
  assessments: {
    title: "Bilans",
    body: "Les demandes de bilan nécessitent un échange préalable afin d’identifier la nature de la demande et les modalités adaptées. Pour toute demande de bilan ou d’évaluation, merci de contacter directement le secrétariat.",
    ctaLabel: "Contacter le secrétariat",
    /** Pas de contact secrétariat dédié : redirection vers /contact. */
    ctaHref: "/contact",
  },
  cancellation: {
    title: "Annulation",
    highlight: "48 h",
    body: "En cas d’empêchement, merci de prévenir le cabinet au moins 48 heures avant le rendez-vous. Toute séance annulée moins de 48 heures à l’avance est due, sauf situation exceptionnelle.",
  },
  payment: {
    title: "Règlement",
    highlight: "Le jour du rendez-vous",
    body: "Les séances sont à régler le jour même du rendez-vous. En cas de règlement en attente, le secrétariat ne pourra pas fixer de nouveau rendez-vous tant que les séances dues n’auront pas été régularisées, afin d’assurer une gestion comptable claire.",
  },
} as const;

export type ConsultationTariff = (typeof pricing.consultations)[number];
