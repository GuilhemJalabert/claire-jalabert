import type { AppLocale } from "@/i18n/routing";

type PricingBundle = {
  consultations: readonly {
    id: string;
    title: string;
    price: number;
    priceLabel: string;
    description: string;
  }[];
  assessments: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  cancellation: {
    title: string;
    highlight: string;
    body: string;
  };
  payment: {
    title: string;
    highlight: string;
    body: string;
  };
  page: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    consultationsEyebrow: string;
    consultationsTitle: string;
    consultationsLead: string;
    assessmentsEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
};

const fr: PricingBundle = {
  consultations: [
    {
      id: "anamnese",
      title: "Premier rendez-vous d’anamnèse",
      price: 80,
      priceLabel: "80 €",
      description: "Premier rendez-vous pour recueillir la demande.",
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
  page: {
    metaTitle: "Tarifs et modalités",
    metaDescription:
      "Tarifs des consultations et modalités de rendez-vous — Claire Jalabert, psychologue clinicienne à Gan.",
    heroTitle: "Tarifs & modalités",
    heroDescription:
      "Une présentation claire des tarifs des consultations et des modalités de rendez-vous.",
    consultationsEyebrow: "Consultations",
    consultationsTitle: "Honoraires",
    consultationsLead: "Trois tarifs pour les rendez-vous au cabinet.",
    assessmentsEyebrow: "Bilans & évaluations",
    ctaTitle: "Une question sur les tarifs ou les modalités ?",
    ctaBody:
      "Le secrétariat peut vous renseigner et vous accompagner dans la prise de rendez-vous. Consultations à {city}, {modalities}.",
  },
};

const en: PricingBundle = {
  consultations: [
    {
      id: "anamnese",
      title: "First anamnesis appointment",
      price: 80,
      priceLabel: "€80",
      description: "First appointment to gather the request.",
    },
    {
      id: "individuel",
      title: "Individual session",
      price: 70,
      priceLabel: "€70",
      description: "Individual consultation.",
    },
    {
      id: "couple",
      title: "Couple session",
      price: 100,
      priceLabel: "€100",
      description: "Couple consultation.",
    },
  ],
  assessments: {
    title: "Assessments",
    body: "Assessment requests require a prior exchange to identify the nature of the request and the appropriate arrangements. For any assessment or evaluation request, please contact the practice directly.",
    ctaLabel: "Contact the practice",
    ctaHref: "/contact",
  },
  cancellation: {
    title: "Cancellation",
    highlight: "48 h",
    body: "If you are unable to attend, please notify the practice at least 48 hours before the appointment. Any session cancelled less than 48 hours in advance is due, except in exceptional circumstances.",
  },
  payment: {
    title: "Payment",
    highlight: "On the day of the appointment",
    body: "Sessions are to be paid on the day of the appointment. If payment is outstanding, the practice will not be able to schedule a new appointment until outstanding sessions have been settled, to ensure clear accounting.",
  },
  page: {
    metaTitle: "Fees and practical details",
    metaDescription:
      "Consultation fees and appointment arrangements — Claire Jalabert, clinical psychologist in Gan.",
    heroTitle: "Fees & practical details",
    heroDescription:
      "A clear overview of consultation fees and appointment arrangements.",
    consultationsEyebrow: "Consultations",
    consultationsTitle: "Fees",
    consultationsLead: "Three fees for appointments at the practice.",
    assessmentsEyebrow: "Assessments & evaluations",
    ctaTitle: "A question about fees or arrangements?",
    ctaBody:
      "The practice can answer your questions and help you book an appointment. Consultations in {city}, {modalities}.",
  },
};

const it: PricingBundle = {
  consultations: [
    {
      id: "anamnese",
      title: "Primo appuntamento di anamnesi",
      price: 80,
      priceLabel: "80 €",
      description: "Primo appuntamento per raccogliere la domanda.",
    },
    {
      id: "individuel",
      title: "Sessione individuale",
      price: 70,
      priceLabel: "70 €",
      description: "Consultazione individuale.",
    },
    {
      id: "couple",
      title: "Sessione di coppia",
      price: 100,
      priceLabel: "100 €",
      description: "Consultazione di coppia.",
    },
  ],
  assessments: {
    title: "Valutazioni",
    body: "Le richieste di valutazione richiedono un scambio preliminare per identificare la natura della domanda e le modalità adeguate. Per qualsiasi richiesta di bilancio o di valutazione, si prega di contattare direttamente lo studio.",
    ctaLabel: "Contattare lo studio",
    ctaHref: "/contact",
  },
  cancellation: {
    title: "Cancellazione",
    highlight: "48 h",
    body: "In caso di impedimento, si prega di avvisare lo studio almeno 48 ore prima dell’appuntamento. Ogni sessione annullata con meno di 48 ore di anticipo è dovuta, salvo circostanze eccezionali.",
  },
  payment: {
    title: "Pagamento",
    highlight: "Il giorno dell’appuntamento",
    body: "Le sessioni vanno pagate il giorno stesso dell’appuntamento. In caso di pagamento in sospeso, lo studio non potrà fissare un nuovo appuntamento finché le sessioni dovute non saranno state saldate, per garantire una contabilità chiara.",
  },
  page: {
    metaTitle: "Tariffe e informazioni pratiche",
    metaDescription:
      "Tariffe delle consultazioni e modalità degli appuntamenti — Claire Jalabert, psicologa clinica a Gan.",
    heroTitle: "Tariffe e informazioni pratiche",
    heroDescription:
      "Una panoramica chiara delle tariffe delle consultazioni e delle modalità degli appuntamenti.",
    consultationsEyebrow: "Consultazioni",
    consultationsTitle: "Tariffe",
    consultationsLead: "Tre tariffe per gli appuntamenti nello studio.",
    assessmentsEyebrow: "Valutazioni e bilanci",
    ctaTitle: "Una domanda su tariffe o modalità?",
    ctaBody:
      "Lo studio può rispondere alle sue domande e aiutarla a prenotare un appuntamento. Consultazioni a {city}, {modalities}.",
  },
};

const es: PricingBundle = {
  consultations: [
    {
      id: "anamnese",
      title: "Primera cita de anamnesis",
      price: 80,
      priceLabel: "80 €",
      description: "Primera cita para recoger la demanda.",
    },
    {
      id: "individuel",
      title: "Sesión individual",
      price: 70,
      priceLabel: "70 €",
      description: "Consulta individual.",
    },
    {
      id: "couple",
      title: "Sesión de pareja",
      price: 100,
      priceLabel: "100 €",
      description: "Consulta de pareja.",
    },
  ],
  assessments: {
    title: "Evaluaciones",
    body: "Las solicitudes de evaluación requieren un intercambio previo para identificar la naturaleza de la demanda y las modalidades adecuadas. Para cualquier solicitud de balance o de evaluación, contacte directamente la consulta.",
    ctaLabel: "Contactar la consulta",
    ctaHref: "/contact",
  },
  cancellation: {
    title: "Cancelación",
    highlight: "48 h",
    body: "En caso de impedimento, avise a la consulta al menos 48 horas antes de la cita. Toda sesión anulada con menos de 48 horas de antelación es debida, salvo circunstancias excepcionales.",
  },
  payment: {
    title: "Pago",
    highlight: "El día de la cita",
    body: "Las sesiones se pagan el mismo día de la cita. Si hay un pago pendiente, la consulta no podrá fijar una nueva cita hasta que las sesiones debidas hayan sido regularizadas, para garantizar una contabilidad clara.",
  },
  page: {
    metaTitle: "Tarifas e información práctica",
    metaDescription:
      "Tarifas de las consultas y modalidades de cita — Claire Jalabert, psicóloga clínica en Gan.",
    heroTitle: "Tarifas e información práctica",
    heroDescription:
      "Una panorámica clara de las tarifas de las consultas y de las modalidades de cita.",
    consultationsEyebrow: "Consultas",
    consultationsTitle: "Honorarios",
    consultationsLead: "Tres tarifas para las citas en la consulta.",
    assessmentsEyebrow: "Evaluaciones y balances",
    ctaTitle: "¿Una pregunta sobre tarifas o modalidades?",
    ctaBody:
      "La consulta puede responder a sus preguntas y ayudarle a pedir cita. Consultas en {city}, {modalities}.",
  },
};

const bundles: Record<AppLocale, PricingBundle> = { fr, en, it, es };

export function getPricing(locale: string): PricingBundle {
  return bundles[(locale as AppLocale) in bundles ? (locale as AppLocale) : "fr"];
}

/** @deprecated Prefer getPricing(locale) */
export const pricing = fr;

export type ConsultationTariff = (typeof fr.consultations)[number];
