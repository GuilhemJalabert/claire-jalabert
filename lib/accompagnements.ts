import type { AppLocale } from "@/i18n/routing";

type AccompanimentsBundle = {
  page: {
    hero: { title: string; description: string };
    domains: {
      id: string;
      eyebrow: string;
      title: string;
      lead: string;
      items: readonly string[];
    };
    services: { eyebrow: string; title: string; lead: string };
    assessments: {
      id: string;
      eyebrow: string;
      title: string;
      intro: string;
      ctaTitle: string;
      ctaBody: string;
      ctaLabel: string;
      ctaHref: string;
    };
    understandLinks: {
      tsa: string;
      asperger: string;
      hpi: string;
    };
    cabinetCta: {
      eyebrow: string;
      body: string;
    };
  };
  services: readonly { id: string; title: string; description: string }[];
  mediationVisuals: readonly {
    id: string;
    src: string;
    alt: string;
    objectPosition: string;
    credit: string | null;
  }[];
  assessments: readonly {
    id: string;
    title: string;
    note: string | null;
    description: string;
    learnMore: { href: string; label: string } | null;
  }[];
  homeSummary: {
    title: string;
    lead: string;
    items: readonly {
      title: string;
      description: string;
      href?: string;
    }[];
    ctaLabel: string;
    ctaHref: string;
    assessmentsLinkLabel: string;
    assessmentsHref: string;
  };
  aboutMention: { body: string; ctaLabel: string; ctaHref: string };
  contactMention: { body: string; ctaLabel: string; ctaHref: string };
  tariffsLink: { label: string; href: string };
};

const fr: AccompanimentsBundle = {
  page: {
    hero: {
      title: "Accompagnements",
      description:
        "Entretiens, thérapies, médiations et bilans proposés au cabinet — pour les enfants, adolescents, adultes, couples et familles.",
    },
    domains: {
      id: "domaines",
      eyebrow: "Expertises",
      title: "Domaines d’accompagnement",
      lead: "Thématiques mises en avant au cabinet.",
      items: [
        "Haut Potentiel Intellectuel (HPI) et Haut Potentiel Créatif (HPC)",
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
        "Différents bilans et outils d’évaluation sont proposés et adaptés à chaque personne selon sa situation et sa demande.",
      ctaTitle: "Une question concernant un bilan ?",
      ctaBody:
        "Le secrétariat peut vous renseigner sur les modalités et vous orienter selon votre demande.",
      ctaLabel: "Contacter le secrétariat",
      ctaHref: "/contact",
    },
    understandLinks: {
      tsa: "Comprendre le TSA",
      asperger: "Comprendre le syndrome d’Asperger",
      hpi: "Comprendre le HPI",
    },
    cabinetCta: {
      eyebrow: "Cabinet",
      body: "Pour un rendez-vous ou une question pratique, contactez le cabinet.",
    },
  },
  services: [
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
        "Expression du vécu et des émotions via des médiations adaptées (jeux, dessins, constructions, médiation avec la nature, médiation animale).",
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
        "Entretien centré sur le vécu, les émotions et les besoins, avec un travail autour de l’estime de soi, de la confiance en soi et de l’autonomie psychique. L’accompagnement peut également soutenir l’élaboration d’une résilience face aux blessures rencontrées au cours du parcours de vie.",
    },
    {
      id: "therapie-couple",
      title: "Thérapie de couple",
      description:
        "Travail sur la relation, les besoins de chacun, les hypersensibilités sensorielles lorsqu’elles sont présentes, et la recherche d’un équilibre commun. L’accompagnement soutient le respect des différences, les nouvelles potentialités de chacun et l’évolution individuelle au sein du couple — y compris, lorsque c’est pertinent, une approche transgénérationnelle.",
    },
    {
      id: "mediation-familiale",
      title: "Médiation familiale",
      description:
        "Accompagnement des enjeux relationnels au sein de la famille. Accompagnement de la parentalité avec des enfants neuroatypiques.",
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
    {
      id: "parentalite",
      title: "Accompagnement à la parentalité",
      description:
        "Accompagnement à la parentalité en individuel ou en groupe, et formation des parents autour du HPI et des neuroatypies.",
    },
    {
      id: "professionnels",
      title: "Accompagnement des professionnels",
      description:
        "Accompagnement et supervision des professionnels travaillant auprès de profils neuroatypiques, ainsi que des enseignants du primaire et du secondaire.",
    },
  ],
  mediationVisuals: [
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
  ],
  assessments: [
    {
      id: "neuropsychologique",
      title: "Bilan neuropsychologique complet",
      note: "Enfant & adulte",
      description:
        "Une évaluation approfondie du fonctionnement cognitif permettant d’explorer notamment l’attention, la mémoire, le raisonnement, les fonctions exécutives et le rapport au langage.",
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
  ],
  homeSummary: {
    title: "Les suivis proposés",
    lead: "Un aperçu des accompagnements possibles au cabinet.",
    items: [
      {
        title: "Enfants",
        description:
          "Accompagnement adapté, notamment via des médiations (jeux, dessins, constructions, médiation avec la nature, médiation animale).",
      },
      {
        title: "Adolescents",
        description:
          "Entretiens pour mieux se comprendre à l’adolescence.",
      },
      {
        title: "Adultes",
        description:
          "Entretiens centrés sur le vécu, les émotions et les besoins, avec un travail autour de l’estime de soi, de la confiance en soi et de l’autonomie psychique.",
      },
      {
        title: "Couples",
        description:
          "Travail sur la relation, les besoins de chacun, les hypersensibilités éventuelles et la recherche d’un équilibre commun.",
      },
      {
        title: "Familles",
        description:
          "Accompagnement des relations familiales et de la parentalité avec des enfants neuroatypiques.",
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
  },
  aboutMention: {
    body: "Claire propose également différents accompagnements et bilans adaptés aux besoins des enfants, adolescents et adultes.",
    ctaLabel: "Découvrir les accompagnements",
    ctaHref: "/accompagnements",
  },
  contactMention: {
    body: "Pour toute question sur un accompagnement ou un bilan, consultez la page dédiée.",
    ctaLabel: "Accompagnements & bilans",
    ctaHref: "/accompagnements",
  },
  tariffsLink: {
    label: "Découvrir les bilans proposés",
    href: "/accompagnements#bilans",
  },
};

const en: AccompanimentsBundle = {
  page: {
    hero: {
      title: "Support",
      description:
        "Sessions, therapies, mediations and assessments offered at the practice — for children, adolescents, adults, couples and families.",
    },
    domains: {
      id: "domaines",
      eyebrow: "Expertise",
      title: "Areas of support",
      lead: "Themes highlighted at the practice.",
      items: [
        "Intellectual giftedness (HPI) and creative giftedness (HPC)",
        "Asperger syndrome",
        "Family relationships",
        "Couple therapy",
        "Transgenerational approach",
        "Stress management",
        "School-related difficulties",
        "School mediation",
        "Animal-assisted mediation",
        "Nature-based mediation",
        "Assessments and evaluations",
        "Support groups",
      ],
    },
    services: {
      eyebrow: "Follow-up",
      title: "Support offered",
      lead: "Every request is unique. These options outline the forms of follow-up available at the practice.",
    },
    assessments: {
      id: "bilans",
      eyebrow: "Evaluations",
      title: "Assessments & evaluations",
      intro:
        "Different assessments and evaluation tools are offered and adapted to each person according to their situation and request.",
      ctaTitle: "A question about an assessment?",
      ctaBody:
        "The practice can tell you more about the practical details and guide you according to your request.",
      ctaLabel: "Contact the practice",
      ctaHref: "/contact",
    },
    understandLinks: {
      tsa: "Understand ASD",
      asperger: "Understand Asperger syndrome",
      hpi: "Understand giftedness",
    },
    cabinetCta: {
      eyebrow: "Practice",
      body: "For an appointment or a practical question, contact the practice.",
    },
  },
  services: [
    {
      id: "entretien-clinique",
      title: "Clinical interview",
      description:
        "Listening and exchange within a containing framework, to welcome the request and begin putting words to what is being lived.",
    },
    {
      id: "therapeutique-enfant",
      title: "Therapeutic session for children",
      description:
        "Expressing experience and emotions through adapted mediations (play, drawing, construction, nature-based mediation, animal-assisted mediation).",
    },
    {
      id: "therapeutique-adolescent",
      title: "Therapeutic session for adolescents",
      description:
        "Support to better understand oneself and move through adolescent experience.",
    },
    {
      id: "therapeutique-adulte",
      title: "Therapeutic session for adults",
      description:
        "Sessions centred on lived experience, emotions and needs, with work on self-esteem, self-confidence and psychic autonomy. Support can also help elaborate resilience in the face of wounds encountered along a life path.",
    },
    {
      id: "therapie-couple",
      title: "Couple therapy",
      description:
        "Work on the relationship, each partner’s needs, sensory hypersensitivities when they are present, and the search for a shared balance. Support fosters respect for differences, each person’s new potential and individual development within the couple — including, when relevant, a transgenerational approach.",
    },
    {
      id: "mediation-familiale",
      title: "Family mediation",
      description:
        "Support around relational issues within the family. Parenting support with neurodivergent children.",
    },
    {
      id: "mediation-scolaire",
      title: "School mediation",
      description: "Support around school-related difficulties.",
    },
    {
      id: "therapie-groupe",
      title: "Group therapy",
      description:
        "A collective space for expression and exchange (including support groups).",
    },
    {
      id: "mediation-animale",
      title: "Animal-assisted mediation",
      description:
        "Therapeutic follow-up that draws on the animal’s presence to support expression, connection and calming.",
    },
    {
      id: "mediation-nature",
      title: "Nature-based mediation",
      description:
        "Therapeutic follow-up accompanied by contact with nature, to support the process and felt experience.",
    },
    {
      id: "parentalite",
      title: "Parenting support",
      description:
        "Parenting support individually or in a group, and parent training around HPI and neurodivergence.",
    },
    {
      id: "professionnels",
      title: "Support for professionals",
      description:
        "Support and supervision for professionals working with neurodivergent profiles, as well as for primary and secondary teachers.",
    },
  ],
  mediationVisuals: [
    {
      id: "visual-mediation-animale",
      src: "/images/mediation-animale.jpg",
      alt: "Dog with a bow tie, a calm presence indoors",
      objectPosition: "object-[42%_58%]",
      credit: null,
    },
    {
      id: "visual-mediation-nature",
      src: "/images/mediation-nature.jpg",
      alt: "Peahen with iridescent plumage, perched on a ledge against a pink wall",
      objectPosition: "object-[38%_48%]",
      credit: "@vongvision by Nicolas Vongsuravatana",
    },
  ],
  assessments: [
    {
      id: "neuropsychologique",
      title: "Full neuropsychological assessment",
      note: "Child & adult",
      description:
        "An in-depth evaluation of cognitive functioning, exploring attention, memory, reasoning, executive functions and the relationship to language in particular.",
      learnMore: null,
    },
    {
      id: "tdah",
      title: "ADHD assessment",
      note: null,
      description:
        "An evaluation designed to explore attentional functioning, impulsivity and executive functions within a clinical approach to ADHD.",
      learnMore: {
        href: "/comprendre/autres-reperes#tdah",
        label: "Read the markers on ADHD",
      },
    },
    {
      id: "sensoriel",
      title: "Sensory assessment",
      note: null,
      description:
        "An exploration of sensory particularities to better understand how environmental stimulation is perceived and experienced.",
      learnMore: {
        href: "/comprendre/autres-reperes#sensorialite",
        label: "Understand sensory processing",
      },
    },
    {
      id: "schemas",
      title: "Schema test",
      note: null,
      description:
        "An exploration of thought and functioning patterns built over time, to better understand certain recurring emotional and relational modes.",
      learnMore: null,
    },
    {
      id: "instrumental",
      title: "Instrumental assessment",
      note: null,
      description:
        "An evaluation of different functions involved in learning and adaptation, to better identify resources and possible difficulties.",
      learnMore: null,
    },
    {
      id: "projectif",
      title: "Projective assessment",
      note: null,
      description:
        "A clinical exploration of psychic and affective functioning using projective tools, completing the overall understanding of the person.",
      learnMore: null,
    },
    {
      id: "tsa-adir",
      title: "ASD diagnostic process — ADI-R",
      note: null,
      description:
        "A structured clinical interview exploring developmental history, social interactions, communication and certain behaviours within an ASD diagnostic process.",
      learnMore: {
        href: "/comprendre/tsa",
        label: "Learn more about ASD",
      },
    },
  ],
  homeSummary: {
    title: "Support offered",
    lead: "An overview of the forms of support available at the practice.",
    items: [
      {
        title: "Children",
        description:
          "Adapted support, including through mediations (play, drawing, construction, nature-based mediation, animal-assisted mediation).",
      },
      {
        title: "Adolescents",
        description:
          "Sessions to better understand oneself during adolescence.",
      },
      {
        title: "Adults",
        description:
          "Sessions centred on lived experience, emotions and needs, with work on self-esteem, self-confidence and psychic autonomy.",
      },
      {
        title: "Couples",
        description:
          "Work on the relationship, each partner’s needs, possible sensory hypersensitivities and the search for a shared balance.",
      },
      {
        title: "Families",
        description:
          "Support for family relationships and for parenting with neurodivergent children.",
      },
      {
        title: "Assessments & evaluations",
        description:
          "Assessments may be offered to better understand aspects of cognitive, emotional or sensory functioning.",
        href: "/accompagnements#bilans",
      },
    ],
    ctaLabel: "Explore all support options",
    ctaHref: "/accompagnements",
    assessmentsLinkLabel: "Learn more",
    assessmentsHref: "/accompagnements#bilans",
  },
  aboutMention: {
    body: "Claire also offers different forms of support and assessments adapted to the needs of children, adolescents and adults.",
    ctaLabel: "Explore support options",
    ctaHref: "/accompagnements",
  },
  contactMention: {
    body: "For any question about support or an assessment, see the dedicated page.",
    ctaLabel: "Support & assessments",
    ctaHref: "/accompagnements",
  },
  tariffsLink: {
    label: "Explore the assessments offered",
    href: "/accompagnements#bilans",
  },
};

const it: AccompanimentsBundle = {
  page: {
    hero: {
      title: "Accompagnamenti",
      description:
        "Colloqui, terapie, mediazioni e valutazioni proposte nello studio — per bambini, adolescenti, adulti, coppie e famiglie.",
    },
    domains: {
      id: "domaines",
      eyebrow: "Competenze",
      title: "Ambiti di accompagnamento",
      lead: "Tematiche valorizzate nello studio.",
      items: [
        "Alto potenziale intellettivo (HPI) e alto potenziale creativo (HPC)",
        "Sindrome di Asperger",
        "Relazioni familiari",
        "Terapia di coppia",
        "Approccio transgenerazionale",
        "Gestione dello stress",
        "Difficoltà scolastiche",
        "Mediazione scolastica",
        "Mediazione assistita con l’animale",
        "Mediazione in natura",
        "Valutazioni e bilanci",
        "Gruppi di sostegno",
      ],
    },
    services: {
      eyebrow: "Percorso",
      title: "Accompagnamenti proposti",
      lead: "Ogni domanda è unica. Queste opzioni delineano le forme di seguito disponibili nello studio.",
    },
    assessments: {
      id: "bilans",
      eyebrow: "Valutazioni",
      title: "Valutazioni e bilanci",
      intro:
        "Diversi bilanci e strumenti di valutazione sono proposti e adattati a ciascuna persona secondo la sua situazione e la sua domanda.",
      ctaTitle: "Una domanda su una valutazione?",
      ctaBody:
        "Lo studio può fornirle maggiori dettagli pratici e orientarla in base alla sua richiesta.",
      ctaLabel: "Contattare lo studio",
      ctaHref: "/contact",
    },
    understandLinks: {
      tsa: "Comprendere lo spettro autistico",
      asperger: "Comprendere la sindrome di Asperger",
      hpi: "Comprendere l’alto potenziale",
    },
    cabinetCta: {
      eyebrow: "Studio",
      body: "Per un appuntamento o una domanda pratica, contatti lo studio.",
    },
  },
  services: [
    {
      id: "entretien-clinique",
      title: "Colloquio clinico",
      description:
        "Ascolto e scambio in un quadro contenitivo, per accogliere la domanda e iniziare a mettere in parole ciò che si vive.",
    },
    {
      id: "therapeutique-enfant",
      title: "Sessione terapeutica per bambini",
      description:
        "Esprimere il vissuto e le emozioni attraverso mediazioni adattate (gioco, disegno, costruzioni, mediazione con la natura, mediazione animale).",
    },
    {
      id: "therapeutique-adolescent",
      title: "Sessione terapeutica per adolescenti",
      description:
        "Sostegno per comprendersi meglio e attraversare il vissuto adolescenziale.",
    },
    {
      id: "therapeutique-adulte",
      title: "Sessione terapeutica per adulti",
      description:
        "Colloquio centrato sul vissuto, sulle emozioni e sui bisogni, con un lavoro intorno all’autostima, alla fiducia in sé e all’autonomia psichica. L’accompagnamento può anche sostenere l’elaborazione di una resilienza di fronte alle ferite incontrate nel percorso di vita.",
    },
    {
      id: "therapie-couple",
      title: "Terapia di coppia",
      description:
        "Lavoro sulla relazione, sui bisogni di ciascuno, sulle ipersensibilità sensoriali quando sono presenti, e sulla ricerca di un equilibrio comune. L’accompagnamento sostiene il rispetto delle differenze, le nuove potenzialità di ciascuno e l’evoluzione individuale all’interno della coppia — incluso, quando è pertinente, un approccio transgenerazionale.",
    },
    {
      id: "mediation-familiale",
      title: "Mediazione familiare",
      description:
        "Sostegno intorno alle problematiche relazionali in famiglia. Accompagnamento della genitorialità con bambini neuroatipici.",
    },
    {
      id: "mediation-scolaire",
      title: "Mediazione scolastica",
      description: "Sostegno intorno alle difficoltà scolastiche.",
    },
    {
      id: "therapie-groupe",
      title: "Terapia di gruppo",
      description:
        "Uno spazio collettivo di espressione e di scambio (inclusi i gruppi di sostegno).",
    },
    {
      id: "mediation-animale",
      title: "Mediazione assistita con l’animale",
      description:
        "Seguito terapeutico che si avvale della presenza dell’animale per sostenere l’espressione, il legame e la quiete.",
    },
    {
      id: "mediation-nature",
      title: "Mediazione in natura",
      description:
        "Seguito terapeutico accompagnato dal contatto con la natura, per sostenere il processo e il vissuto corporeo.",
    },
    {
      id: "parentalite",
      title: "Accompagnamento alla genitorialità",
      description:
        "Accompagnamento alla genitorialità in individuale o in gruppo, e formazione dei genitori intorno all’HPI e alle neuroatipie.",
    },
    {
      id: "professionnels",
      title: "Accompagnamento dei professionisti",
      description:
        "Accompagnamento e supervisione dei professionisti che lavorano con profili neuroatipici, nonché degli insegnanti della scuola primaria e secondaria.",
    },
  ],
  mediationVisuals: [
    {
      id: "visual-mediation-animale",
      src: "/images/mediation-animale.jpg",
      alt: "Cane con papillon, presenza calma in interni",
      objectPosition: "object-[42%_58%]",
      credit: null,
    },
    {
      id: "visual-mediation-nature",
      src: "/images/mediation-nature.jpg",
      alt: "Femmina di pavone dal piumaggio iridescente, appollaiata su un cornicione contro un muro rosa",
      objectPosition: "object-[38%_48%]",
      credit: "@vongvision di Nicolas Vongsuravatana",
    },
  ],
  assessments: [
    {
      id: "neuropsychologique",
      title: "Valutazione neuropsicologica completa",
      note: "Bambino e adulto",
      description:
        "Una valutazione approfondita del funzionamento cognitivo, che esplora in particolare attenzione, memoria, ragionamento, funzioni esecutive e il rapporto con il linguaggio.",
      learnMore: null,
    },
    {
      id: "tdah",
      title: "Valutazione ADHD",
      note: null,
      description:
        "Una valutazione pensata per esplorare il funzionamento attentivo, l’impulsività e le funzioni esecutive in un approccio clinico all’ADHD.",
      learnMore: {
        href: "/comprendre/autres-reperes#tdah",
        label: "Leggere i riferimenti sull’ADHD",
      },
    },
    {
      id: "sensoriel",
      title: "Valutazione sensoriale",
      note: null,
      description:
        "Un’esplorazione delle peculiarità sensoriali per comprendere meglio come gli stimoli ambientali vengono percepiti e vissuti.",
      learnMore: {
        href: "/comprendre/autres-reperes#sensorialite",
        label: "Comprendere la sensorialità",
      },
    },
    {
      id: "schemas",
      title: "Test degli schemi",
      note: null,
      description:
        "Un’esplorazione degli schemi di pensiero e di funzionamento costruiti nel tempo, per comprendere meglio certi modi emotivi e relazionali ricorrenti.",
      learnMore: null,
    },
    {
      id: "instrumental",
      title: "Valutazione strumentale",
      note: null,
      description:
        "Una valutazione delle diverse funzioni coinvolte nell’apprendimento e nell’adattamento, per individuare meglio risorse e possibili difficoltà.",
      learnMore: null,
    },
    {
      id: "projectif",
      title: "Valutazione proiettiva",
      note: null,
      description:
        "Un’esplorazione clinica del funzionamento psichico e affettivo mediante strumenti proiettivi, a completamento della comprensione complessiva della persona.",
      learnMore: null,
    },
    {
      id: "tsa-adir",
      title: "Percorso diagnostico TEA — ADI-R",
      note: null,
      description:
        "Un colloquio clinico strutturato che esplora la storia dello sviluppo, le interazioni sociali, la comunicazione e alcuni comportamenti nell’ambito di un percorso diagnostico dello spettro autistico (TEA).",
      learnMore: {
        href: "/comprendre/tsa",
        label: "Saperne di più sullo spettro autistico",
      },
    },
  ],
  homeSummary: {
    title: "Accompagnamenti proposti",
    lead: "Una panoramica delle forme di sostegno disponibili nello studio.",
    items: [
      {
        title: "Bambini",
        description:
          "Accompagnamento adattato, anche attraverso mediazioni (gioco, disegno, costruzioni, mediazione con la natura, mediazione animale).",
      },
      {
        title: "Adolescenti",
        description:
          "Sessioni per comprendersi meglio durante l’adolescenza.",
      },
      {
        title: "Adulti",
        description:
          "Sessioni centrate sul vissuto, sulle emozioni e sui bisogni, con un lavoro intorno all’autostima, alla fiducia in sé e all’autonomia psichica.",
      },
      {
        title: "Coppie",
        description:
          "Lavoro sulla relazione, sui bisogni di ciascuno, sulle ipersensibilità eventuali e sulla ricerca di un equilibrio comune.",
      },
      {
        title: "Famiglie",
        description:
          "Sostegno alle relazioni familiari e alla genitorialità con bambini neuroatipici.",
      },
      {
        title: "Valutazioni e bilanci",
        description:
          "Possono essere proposte valutazioni per comprendere meglio aspetti del funzionamento cognitivo, emotivo o sensoriale.",
        href: "/accompagnements#bilans",
      },
    ],
    ctaLabel: "Esplorare tutti gli accompagnamenti",
    ctaHref: "/accompagnements",
    assessmentsLinkLabel: "Saperne di più",
    assessmentsHref: "/accompagnements#bilans",
  },
  aboutMention: {
    body: "Claire propone inoltre diverse forme di accompagnamento e valutazioni adattate ai bisogni di bambini, adolescenti e adulti.",
    ctaLabel: "Esplorare gli accompagnamenti",
    ctaHref: "/accompagnements",
  },
  contactMention: {
    body: "Per qualsiasi domanda su un accompagnamento o una valutazione, consulti la pagina dedicata.",
    ctaLabel: "Accompagnamenti e valutazioni",
    ctaHref: "/accompagnements",
  },
  tariffsLink: {
    label: "Esplorare le valutazioni proposte",
    href: "/accompagnements#bilans",
  },
};

const es: AccompanimentsBundle = {
  page: {
    hero: {
      title: "Acompañamientos",
      description:
        "Entrevistas, terapias, mediaciones y evaluaciones propuestas en la consulta — para niños, adolescentes, adultos, parejas y familias.",
    },
    domains: {
      id: "domaines",
      eyebrow: "Competencias",
      title: "Ámbitos de acompañamiento",
      lead: "Temáticas destacadas en la consulta.",
      items: [
        "Alto potencial intelectual (HPI) y alto potencial creativo (HPC)",
        "Síndrome de Asperger",
        "Relaciones familiares",
        "Terapia de pareja",
        "Enfoque transgeneracional",
        "Gestión del estrés",
        "Dificultades escolares",
        "Mediación escolar",
        "Mediación asistida con el animal",
        "Mediación en la naturaleza",
        "Evaluaciones y balances",
        "Grupos de apoyo",
      ],
    },
    services: {
      eyebrow: "Seguimiento",
      title: "Acompañamientos propuestos",
      lead: "Cada demanda es única. Estas opciones delinean las formas de seguimiento disponibles en la consulta.",
    },
    assessments: {
      id: "bilans",
      eyebrow: "Evaluaciones",
      title: "Evaluaciones y balances",
      intro:
        "Se proponen distintos balances y herramientas de evaluación, adaptados a cada persona según su situación y su demanda.",
      ctaTitle: "¿Una pregunta sobre una evaluación?",
      ctaBody:
        "La consulta puede aportarle más detalles prácticos y orientarla según su demanda.",
      ctaLabel: "Contactar la consulta",
      ctaHref: "/contact",
    },
    understandLinks: {
      tsa: "Comprender el espectro autista",
      asperger: "Comprender el síndrome de Asperger",
      hpi: "Comprender el alto potencial",
    },
    cabinetCta: {
      eyebrow: "Consulta",
      body: "Para una cita o una pregunta práctica, contacte la consulta.",
    },
  },
  services: [
    {
      id: "entretien-clinique",
      title: "Entrevista clínica",
      description:
        "Escucha e intercambio en un marco continente, para acoger la demanda y empezar a poner palabras a lo que se vive.",
    },
    {
      id: "therapeutique-enfant",
      title: "Sesión terapéutica para niños",
      description:
        "Expresar lo vivido y las emociones a través de mediaciones adaptadas (juego, dibujo, construcciones, mediación con la naturaleza, mediación animal).",
    },
    {
      id: "therapeutique-adolescent",
      title: "Sesión terapéutica para adolescentes",
      description:
        "Apoyo para comprenderse mejor y atravesar lo vivido en la adolescencia.",
    },
    {
      id: "therapeutique-adulte",
      title: "Sesión terapéutica para adultos",
      description:
        "Entrevista centrada en lo vivido, las emociones y las necesidades, con un trabajo en torno a la autoestima, la confianza en uno mismo y la autonomía psíquica. El acompañamiento puede también sostener la elaboración de una resiliencia frente a las heridas encontradas a lo largo del recorrido de vida.",
    },
    {
      id: "therapie-couple",
      title: "Terapia de pareja",
      description:
        "Trabajo sobre la relación, las necesidades de cada uno, las hipersensibilidades sensoriales cuando están presentes, y la búsqueda de un equilibrio común. El acompañamiento sostiene el respeto de las diferencias, las nuevas potencialidades de cada uno y la evolución individual dentro de la pareja — incluido, cuando es pertinente, un enfoque transgeneracional.",
    },
    {
      id: "mediation-familiale",
      title: "Mediación familiar",
      description:
        "Apoyo en torno a las problemáticas relacionales en la familia. Acompañamiento de la parentalidad con niños neuroatípicos.",
    },
    {
      id: "mediation-scolaire",
      title: "Mediación escolar",
      description: "Apoyo en torno a las dificultades escolares.",
    },
    {
      id: "therapie-groupe",
      title: "Terapia de grupo",
      description:
        "Un espacio colectivo de expresión e intercambio (incluidos los grupos de apoyo).",
    },
    {
      id: "mediation-animale",
      title: "Mediación asistida con el animal",
      description:
        "Seguimiento terapéutico que se apoya en la presencia del animal para sostener la expresión, el vínculo y la calma.",
    },
    {
      id: "mediation-nature",
      title: "Mediación en la naturaleza",
      description:
        "Seguimiento terapéutico acompañado del contacto con la naturaleza, para sostener el proceso y lo sentido.",
    },
    {
      id: "parentalite",
      title: "Acompañamiento a la parentalidad",
      description:
        "Acompañamiento a la parentalidad en individual o en grupo, y formación de los padres en torno al HPI y a las neuroatipias.",
    },
    {
      id: "professionnels",
      title: "Acompañamiento de los profesionales",
      description:
        "Acompañamiento y supervisión de los profesionales que trabajan con perfiles neuroatípicos, así como de los docentes de primaria y secundaria.",
    },
  ],
  mediationVisuals: [
    {
      id: "visual-mediation-animale",
      src: "/images/mediation-animale.jpg",
      alt: "Perro con pajarita, presencia serena en un interior",
      objectPosition: "object-[42%_58%]",
      credit: null,
    },
    {
      id: "visual-mediation-nature",
      src: "/images/mediation-nature.jpg",
      alt: "Pava real de plumaje iridiscente, posada en un alfeizar frente a un muro rosa",
      objectPosition: "object-[38%_48%]",
      credit: "@vongvision de Nicolas Vongsuravatana",
    },
  ],
  assessments: [
    {
      id: "neuropsychologique",
      title: "Evaluación neuropsicológica completa",
      note: "Niño y adulto",
      description:
        "Una evaluación profunda del funcionamiento cognitivo, que explora en particular la atención, la memoria, el razonamiento, las funciones ejecutivas y la relación con el lenguaje.",
      learnMore: null,
    },
    {
      id: "tdah",
      title: "Evaluación TDAH",
      note: null,
      description:
        "Una evaluación pensada para explorar el funcionamiento atencional, la impulsividad y las funciones ejecutivas en un enfoque clínico del TDAH.",
      learnMore: {
        href: "/comprendre/autres-reperes#tdah",
        label: "Leer los referentes sobre el TDAH",
      },
    },
    {
      id: "sensoriel",
      title: "Evaluación sensorial",
      note: null,
      description:
        "Una exploración de las particularidades sensoriales para comprender mejor cómo se perciben y se viven las estimulaciones del entorno.",
      learnMore: {
        href: "/comprendre/autres-reperes#sensorialite",
        label: "Comprender la sensorialidad",
      },
    },
    {
      id: "schemas",
      title: "Test de esquemas",
      note: null,
      description:
        "Una exploración de los esquemas de pensamiento y de funcionamiento construidos con el tiempo, para comprender mejor ciertos modos emocionales y relacionales recurrentes.",
      learnMore: null,
    },
    {
      id: "instrumental",
      title: "Evaluación instrumental",
      note: null,
      description:
        "Una evaluación de las distintas funciones implicadas en el aprendizaje y la adaptación, para identificar mejor los recursos y las posibles dificultades.",
      learnMore: null,
    },
    {
      id: "projectif",
      title: "Evaluación proyectiva",
      note: null,
      description:
        "Una exploración clínica del funcionamiento psíquico y afectivo mediante herramientas proyectivas, que completa la comprensión global de la persona.",
      learnMore: null,
    },
    {
      id: "tsa-adir",
      title: "Proceso diagnóstico TEA — ADI-R",
      note: null,
      description:
        "Una entrevista clínica estructurada que explora la historia del desarrollo, las interacciones sociales, la comunicación y ciertos comportamientos en el marco de un proceso diagnóstico del espectro autista (TEA).",
      learnMore: {
        href: "/comprendre/tsa",
        label: "Saber más sobre el espectro autista",
      },
    },
  ],
  homeSummary: {
    title: "Acompañamientos propuestos",
    lead: "Una panorámica de las formas de apoyo disponibles en la consulta.",
    items: [
      {
        title: "Niños",
        description:
          "Acompañamiento adaptado, también a través de mediaciones (juego, dibujo, construcciones, mediación con la naturaleza, mediación animal).",
      },
      {
        title: "Adolescentes",
        description:
          "Sesiones para comprenderse mejor durante la adolescencia.",
      },
      {
        title: "Adultos",
        description:
          "Sesiones centradas en lo vivido, las emociones y las necesidades, con un trabajo en torno a la autoestima, la confianza en uno mismo y la autonomía psíquica.",
      },
      {
        title: "Parejas",
        description:
          "Trabajo sobre la relación, las necesidades de cada uno, las hipersensibilidades eventuales y la búsqueda de un equilibrio común.",
      },
      {
        title: "Familias",
        description:
          "Apoyo a las relaciones familiares y a la parentalidad con niños neuroatípicos.",
      },
      {
        title: "Evaluaciones y balances",
        description:
          "Pueden proponerse evaluaciones para comprender mejor aspectos del funcionamiento cognitivo, emocional o sensorial.",
        href: "/accompagnements#bilans",
      },
    ],
    ctaLabel: "Explorar todos los acompañamientos",
    ctaHref: "/accompagnements",
    assessmentsLinkLabel: "Saber más",
    assessmentsHref: "/accompagnements#bilans",
  },
  aboutMention: {
    body: "Claire propone además distintas formas de acompañamiento y evaluaciones adaptadas a las necesidades de niños, adolescentes y adultos.",
    ctaLabel: "Explorar los acompañamientos",
    ctaHref: "/accompagnements",
  },
  contactMention: {
    body: "Para cualquier pregunta sobre un acompañamiento o una evaluación, consulte la página dedicada.",
    ctaLabel: "Acompañamientos y evaluaciones",
    ctaHref: "/accompagnements",
  },
  tariffsLink: {
    label: "Explorar las evaluaciones propuestas",
    href: "/accompagnements#bilans",
  },
};

const bundles: Record<AppLocale, AccompanimentsBundle> = { fr, en, it, es };

export function getAccompaniments(locale: string): AccompanimentsBundle {
  return bundles[(locale as AppLocale) in bundles ? (locale as AppLocale) : "fr"];
}

/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentsPage = fr.page;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentServices = fr.services;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentMediationVisuals = fr.mediationVisuals;
/** @deprecated Prefer getAccompaniments(locale) */
export const assessmentServices = fr.assessments;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentsHomeSummary = fr.homeSummary;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentsAboutMention = fr.aboutMention;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentsContactMention = fr.contactMention;
/** @deprecated Prefer getAccompaniments(locale) */
export const accompanimentsTariffsLink = fr.tariffsLink;
