import type { AppLocale } from "@/i18n/routing";

/**
 * Coordonnées stables (inchangées selon la langue).
 */
export const contactFacts = {
  phoneDisplay: "06 41 12 30 95",
  phoneTel: "+33641123095",
  email: "clairejalabert9@orange.fr",
  address: {
    street: "99 rue d'Ossau",
    postalCode: "64290",
    city: "Gan",
    full: "99 rue d'Ossau, 64290 Gan",
  },
} as const;

type ContactCopy = {
  phoneNote: string;
  locationsLabel: string;
  modalities: string;
  modalitiesLabel: string;
};

type SiteCopy = {
  title: string;
  description: string;
};

type ContentBundle = {
  site: SiteCopy;
  contact: ContactCopy;
  quotes: {
    saintAugustin: { text: string; attribution: string };
    confucius: { text: string; attribution: string };
  };
  presentation: {
    name: string;
    title: string;
    locations: string;
    locationsShort: string;
    homeSummary: readonly string[];
  };
  about: {
    heroIntro: readonly string[];
    journey: {
      eyebrow: string;
      title: string;
      lead: string;
      teaching: { title: string; body: string };
      teachingLabel: string;
      studiesIntro: string;
      studies: readonly {
        degree: string;
        place: string;
        lab?: string;
        thesis?: string;
        direction?: string;
      }[];
    };
    specializations: {
      eyebrow: string;
      title: string;
      lead: string;
      featured: readonly { title: string; short: string; body: string }[];
      othersLabel: string;
      others: readonly string[];
    };
    complementary: {
      eyebrow: string;
      title: string;
      lead: string;
      items: readonly {
        axis: string;
        title: string;
        detail: string | null;
        place: string | null;
      }[];
    };
  };
  audiences: readonly { title: string; description: string }[];
  approach: {
    intro: string;
    pillars: readonly { title: string; body: string }[];
  };
};

const fr: ContentBundle = {
  site: {
    title: "Psychologue clinicienne",
    description:
      "Psychologue clinicienne à Gan. Consultations en présentiel (99 rue d’Ossau) ou par visioconférence. Accompagnement des enfants, adolescents, adultes, couples et familles. Haut Potentiel Intellectuel et Créatif, Syndrome d’Asperger.",
  },
  contact: {
    phoneNote: "Merci de laisser un SMS",
    locationsLabel: "Gan",
    modalities: "en présentiel ou par visioconférence",
    modalitiesLabel: "En présentiel ou par visioconférence",
  },
  quotes: {
    saintAugustin: {
      text: "Le Bonheur, c’est de désirer ce que l’on a déjà",
      attribution: "— Saint-Augustin",
    },
    confucius: {
      text: "On a deux vies. La deuxième commence quand on réalise que l’on en a qu’une",
      attribution: "— Confucius",
    },
  },
  presentation: {
    name: "Claire Jalabert",
    title: "Psychologue clinicienne",
    locations: "à Gan",
    locationsShort: "Gan",
    homeSummary: [
      "Claire Jalabert est psychologue clinicienne à Gan. Elle accompagne les enfants, les adolescents et les adultes, avec une spécialisation dans le Haut Potentiel Intellectuel et Créatif (HPIC) et le Syndrome d’Asperger. Les consultations se déroulent au cabinet (99 rue d’Ossau) en présentiel, ou par visioconférence.",
      "Son parcours universitaire en psychologie clinique s’enrichit d’une activité de recherche autour du Haut Potentiel, menée en lien avec le CRFDP de l’Université de Rouen.",
      "Avant la psychologie, elle a exercé comme professeure certifiée d’histoire-géographie.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert est psychologue clinicienne à Gan. Elle accompagne les enfants, les adolescents et les adultes, notamment autour du Haut Potentiel Intellectuel et Créatif (HPIC) et du Syndrome d’Asperger. Les consultations ont lieu au cabinet, 99 rue d’Ossau, en présentiel ou par visioconférence.",
      "Son parcours associe la pratique clinique, la recherche universitaire et une expérience antérieure dans l’enseignement.",
    ],
    journey: {
      eyebrow: "Parcours",
      title: "Entre enseignement, psychologie et recherche",
      lead: "Claire Jalabert a d’abord enseigné l’histoire-géographie. Son chemin s’est ensuite déployé dans la psychologie clinique, jusqu’à un travail de doctorat consacré à l’enfant à Haut Potentiel intellectuel et à la dynamique familiale.",
      teachingLabel: "Enseignement",
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
      othersLabel: "Autres domaines",
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
  },
  audiences: [
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
  ],
  approach: {
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
  },
};

const en: ContentBundle = {
  site: {
    title: "Clinical psychologist",
    description:
      "Clinical psychologist in Gan. Consultations in person (99 rue d’Ossau) or by video. Support for children, adolescents, adults, couples and families. Intellectual and creative giftedness, Asperger syndrome.",
  },
  contact: {
    phoneNote: "Please leave a text message",
    locationsLabel: "Gan",
    modalities: "in person or by video consultation",
    modalitiesLabel: "In person or by video consultation",
  },
  quotes: {
    saintAugustin: {
      text: "Happiness is wanting what you already have",
      attribution: "— Saint Augustine",
    },
    confucius: {
      text: "We have two lives. The second begins when we realise we only have one",
      attribution: "— Confucius",
    },
  },
  presentation: {
    name: "Claire Jalabert",
    title: "Clinical psychologist",
    locations: "in Gan",
    locationsShort: "Gan",
    homeSummary: [
      "Claire Jalabert is a clinical psychologist in Gan. She supports children, adolescents and adults, with a specialisation in intellectual and creative giftedness (HPIC) and Asperger syndrome. Consultations take place at the practice (99 rue d’Ossau) in person, or by video.",
      "Her academic background in clinical psychology is complemented by research on giftedness, in connection with the CRFDP at the University of Rouen.",
      "Before psychology, she worked as a qualified history–geography teacher.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert is a clinical psychologist in Gan. She supports children, adolescents and adults, particularly around intellectual and creative giftedness (HPIC) and Asperger syndrome. Consultations take place at the practice, 99 rue d’Ossau, in person or by video.",
      "Her path combines clinical practice, university research and earlier experience in teaching.",
    ],
    journey: {
      eyebrow: "Background",
      title: "Between teaching, psychology and research",
      lead: "Claire Jalabert first taught history and geography. Her path then unfolded in clinical psychology, through to doctoral work devoted to intellectually gifted children and family dynamics.",
      teachingLabel: "Teaching",
      teaching: {
        title: "Qualified history–geography teacher",
        body: "An earlier career in teaching, before moving into clinical psychology.",
      },
      studiesIntro:
        "In psychology, her university path was built step by step:",
      studies: [
        {
          degree: "Bachelor’s degree in Psychology",
          place: "University of Angers",
        },
        {
          degree: "Master’s degree in clinical psychology",
          place: "University of Nantes",
        },
        {
          degree: "Doctoral student in Psychology",
          place: "University of Rouen",
          lab: "EA 7675 CRFDP",
          thesis:
            "“Family dynamics and the intrasubjective functioning of the intellectually gifted child”",
          direction: "Supervised by Mrs Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Specialisations",
      title: "Areas of support",
      lead: "Two specialities particularly structure her clinical work. Other areas extend them in day-to-day practice.",
      featured: [
        {
          title: "Intellectual and creative giftedness",
          short: "HPIC",
          body: "Specialisation in intellectual and creative giftedness (HPIC).",
        },
        {
          title: "Asperger syndrome",
          short: "Asperger",
          body: "Specialisation in Asperger syndrome, linked to clinical practice and research at the CRFDP.",
        },
      ],
      othersLabel: "Other areas",
      others: [
        "Children",
        "Adolescents",
        "Adults",
        "Family relationships",
        "Family and couple",
        "Transgenerational approach",
        "Stress management",
        "School-related difficulties",
      ],
    },
    complementary: {
      eyebrow: "Further training",
      title: "Around the body, stress and expression",
      lead: "Alongside her university path, Claire Jalabert has completed training that enriches her clinical practice.",
      items: [
        {
          axis: "Body-oriented therapy",
          title: "Touch for Health",
          detail: "Training by John Thie D.C.",
          place: "Nantes and Tours",
        },
        {
          axis: "Stress management and mental memorisation",
          title: "Method of E. and R. Kammerer and Gordon Stokes",
          detail: null,
          place: "Nantes",
        },
        {
          axis: "Art therapy",
          title: "Training with Marie Desaulles",
          detail: "Artist and art therapist",
          place: null,
        },
      ],
    },
  },
  audiences: [
    {
      title: "Children",
      description:
        "Adapted support, including through mediations (play, drawing, construction…).",
    },
    {
      title: "Adolescents",
      description:
        "Therapeutic sessions to better understand oneself during adolescence.",
    },
    {
      title: "Adults",
      description:
        "Therapeutic sessions centred on lived experience, emotions and specific needs.",
    },
    {
      title: "Couples",
      description:
        "Couple therapy to work on the relationship, its vulnerabilities and its balance.",
    },
    {
      title: "Families",
      description:
        "Support for family relationships, including family mediation.",
    },
  ],
  approach: {
    intro:
      "Clinical sessions are based on listening and exchange, within a framework set by the practitioner. The aim is to help the person regain wellbeing, confidence and balance in everyday life.",
    pillars: [
      {
        title: "Attentive listening",
        body: "A space to talk about what is being lived — emotions, feelings, difficulties and needs.",
      },
      {
        title: "Understanding how one functions",
        body: "Exploring sensitivities, interpersonal relationships and one’s place in a group.",
      },
      {
        title: "Possible supports",
        body: "Depending on the situation, other approaches may be used: mental management, stress management or body-oriented techniques.",
      },
    ],
  },
};

const it: ContentBundle = {
  site: {
    title: "Psicologa clinica",
    description:
      "Psicologa clinica a Gan. Consultazioni in presenza (99 rue d’Ossau) o in videoconsulto. Sostegno a bambini, adolescenti, adulti, coppie e famiglie. Alto potenziale intellettivo e creativo, sindrome di Asperger.",
  },
  contact: {
    phoneNote: "Si prega di lasciare un SMS",
    locationsLabel: "Gan",
    modalities: "in presenza o in videoconsulto",
    modalitiesLabel: "In presenza o in videoconsulto",
  },
  quotes: {
    saintAugustin: {
      text: "La felicità è desiderare ciò che già si ha",
      attribution: "— Sant’Agostino",
    },
    confucius: {
      text: "Abbiamo due vite. La seconda comincia quando ci rendiamo conto di averne una sola",
      attribution: "— Confucio",
    },
  },
  presentation: {
    name: "Claire Jalabert",
    title: "Psicologa clinica",
    locations: "a Gan",
    locationsShort: "Gan",
    homeSummary: [
      "Claire Jalabert è psicologa clinica a Gan. Accompagna bambini, adolescenti e adulti, con una specializzazione nell’alto potenziale intellettivo e creativo (HPIC) e nella sindrome di Asperger. Le consultazioni si svolgono nello studio (99 rue d’Ossau) in presenza, o in videoconsulto.",
      "Il suo percorso universitario in psicologia clinica si arricchisce di un’attività di ricerca sull’alto potenziale, in collegamento con il CRFDP dell’Université de Rouen.",
      "Prima della psicologia, ha esercitato come insegnante abilitata di storia e geografia.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert è psicologa clinica a Gan. Accompagna bambini, adolescenti e adulti, in particolare intorno all’alto potenziale intellettivo e creativo (HPIC) e alla sindrome di Asperger. Le consultazioni hanno luogo nello studio, 99 rue d’Ossau, in presenza o in videoconsulto.",
      "Il suo percorso unisce pratica clinica, ricerca universitaria e una precedente esperienza nell’insegnamento.",
    ],
    journey: {
      eyebrow: "Percorso",
      title: "Tra insegnamento, psicologia e ricerca",
      lead: "Claire Jalabert ha dapprima insegnato storia e geografia. Il suo cammino si è poi sviluppato nella psicologia clinica, fino a un lavoro di dottorato dedicato al bambino ad alto potenziale intellettivo e alla dinamica familiare.",
      teachingLabel: "Insegnamento",
      teaching: {
        title: "Insegnante abilitata di storia e geografia",
        body: "Un percorso precedente nell’insegnamento, prima di orientarsi verso la psicologia clinica.",
      },
      studiesIntro:
        "In psicologia, il suo percorso universitario si è costruito passo dopo passo:",
      studies: [
        {
          degree: "Laurea triennale in Psicologia",
          place: "Université d’Angers",
        },
        {
          degree: "Laurea magistrale in psicologia clinica",
          place: "Université de Nantes",
        },
        {
          degree: "Dottoranda in Psicologia",
          place: "Université de Rouen",
          lab: "EA 7675 CRFDP",
          thesis:
            "« Dinamiche familiari e funzionamento intrasoggettivo del bambino ad alto potenziale intellettivo »",
          direction: "Sotto la direzione della Sig.ra Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Specializzazioni",
      title: "Ambiti di accompagnamento",
      lead: "Due specialità strutturano in particolare il suo lavoro clinico. Altri ambiti le prolungano nella pratica quotidiana.",
      featured: [
        {
          title: "Alto potenziale intellettivo e creativo",
          short: "HPIC",
          body: "Specializzazione nell’alto potenziale intellettivo e creativo (HPIC).",
        },
        {
          title: "Sindrome di Asperger",
          short: "Asperger",
          body: "Specializzazione nella sindrome di Asperger, in collegamento con la pratica clinica e la ricerca presso il CRFDP.",
        },
      ],
      othersLabel: "Altri ambiti",
      others: [
        "Bambini",
        "Adolescenti",
        "Adulti",
        "Relazioni familiari",
        "Famiglia e coppia",
        "Approccio transgenerazionale",
        "Gestione dello stress",
        "Difficoltà scolastiche",
      ],
    },
    complementary: {
      eyebrow: "Formazione complementare",
      title: "Intorno al corpo, allo stress e all’espressione",
      lead: "Accanto al percorso universitario, Claire Jalabert ha seguito formazioni che arricchiscono la sua pratica clinica.",
      items: [
        {
          axis: "Terapia psicocorporea",
          title: "Touch for Health",
          detail: "Formazione di John Thie D.C.",
          place: "Nantes e Tours",
        },
        {
          axis: "Gestione dello stress e memorizzazione mentale",
          title: "Metodo di E. e R. Kammerer e Gordon Stokes",
          detail: null,
          place: "Nantes",
        },
        {
          axis: "Arteterapia",
          title: "Formazione con Marie Desaulles",
          detail: "Artista e arteterapeuta",
          place: null,
        },
      ],
    },
  },
  audiences: [
    {
      title: "Bambini",
      description:
        "Accompagnamento adattato, anche attraverso mediazioni (gioco, disegno, costruzioni…).",
    },
    {
      title: "Adolescenti",
      description:
        "Colloqui terapeutici per comprendersi meglio durante l’adolescenza.",
    },
    {
      title: "Adulti",
      description:
        "Colloqui terapeutici centrati sul vissuto, sulle emozioni e sui bisogni specifici.",
    },
    {
      title: "Coppie",
      description:
        "Terapia di coppia per lavorare sulla relazione, sulle sue fragilità e sul suo equilibrio.",
    },
    {
      title: "Famiglie",
      description:
        "Accompagnamento delle relazioni familiari, inclusa la mediazione familiare.",
    },
  ],
  approach: {
    intro:
      "I colloqui clinici si fondano sull’ascolto e sullo scambio, in un quadro definito dalla professionista. L’obiettivo è aiutare la persona a ritrovare benessere, fiducia ed equilibrio nella vita quotidiana.",
    pillars: [
      {
        title: "Ascolto attento",
        body: "Uno spazio per parlare di ciò che si vive — emozioni, vissuti, difficoltà e bisogni.",
      },
      {
        title: "Comprendere il proprio funzionamento",
        body: "Esplorazione delle sensibilità, delle relazioni interpersonali e del proprio posto in un gruppo.",
      },
      {
        title: "Sostegni possibili",
        body: "A seconda delle situazioni, possono essere utilizzate altre tecniche: gestione mentale, gestione dello stress o tecniche psicocorporee.",
      },
    ],
  },
};

const es: ContentBundle = {
  site: {
    title: "Psicóloga clínica",
    description:
      "Psicóloga clínica en Gan. Consultas presenciales (99 rue d’Ossau) o por videoconsulta. Acompañamiento de niños, adolescentes, adultos, parejas y familias. Alto potencial intelectual y creativo, síndrome de Asperger.",
  },
  contact: {
    phoneNote: "Por favor, deje un SMS",
    locationsLabel: "Gan",
    modalities: "presencialmente o por videoconsulta",
    modalitiesLabel: "Presencialmente o por videoconsulta",
  },
  quotes: {
    saintAugustin: {
      text: "La felicidad es desear lo que ya se tiene",
      attribution: "— San Agustín",
    },
    confucius: {
      text: "Tenemos dos vidas. La segunda comienza cuando nos damos cuenta de que solo tenemos una",
      attribution: "— Confucio",
    },
  },
  presentation: {
    name: "Claire Jalabert",
    title: "Psicóloga clínica",
    locations: "en Gan",
    locationsShort: "Gan",
    homeSummary: [
      "Claire Jalabert es psicóloga clínica en Gan. Acompaña a niños, adolescentes y adultos, con una especialización en el alto potencial intelectual y creativo (HPIC) y el síndrome de Asperger. Las consultas se realizan en el gabinete (99 rue d’Ossau) de forma presencial, o por videoconsulta.",
      "Su recorrido universitario en psicología clínica se enriquece con una actividad de investigación sobre el alto potencial, en vínculo con el CRFDP de la Université de Rouen.",
      "Antes de la psicología, ejerció como profesora habilitada de historia y geografía.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert es psicóloga clínica en Gan. Acompaña a niños, adolescentes y adultos, en particular en torno al alto potencial intelectual y creativo (HPIC) y al síndrome de Asperger. Las consultas tienen lugar en el gabinete, 99 rue d’Ossau, presencialmente o por videoconsulta.",
      "Su recorrido une la práctica clínica, la investigación universitaria y una experiencia previa en la enseñanza.",
    ],
    journey: {
      eyebrow: "Recorrido",
      title: "Entre enseñanza, psicología e investigación",
      lead: "Claire Jalabert enseñó primero historia y geografía. Su camino se desplegó después en la psicología clínica, hasta un trabajo de doctorado dedicado al niño de alto potencial intelectual y a la dinámica familiar.",
      teachingLabel: "Enseñanza",
      teaching: {
        title: "Profesora habilitada de historia y geografía",
        body: "Un recorrido anterior en la enseñanza, antes de orientarse hacia la psicología clínica.",
      },
      studiesIntro:
        "En psicología, su recorrido universitario se construyó paso a paso:",
      studies: [
        {
          degree: "Grado en Psicología",
          place: "Université d’Angers",
        },
        {
          degree: "Máster en psicología clínica",
          place: "Université de Nantes",
        },
        {
          degree: "Doctoranda en Psicología",
          place: "Université de Rouen",
          lab: "EA 7675 CRFDP",
          thesis:
            "« Dinámica familiar y funcionamiento intrasubjetivo del niño de alto potencial intelectual »",
          direction: "Bajo la dirección de la Sra. Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Especializaciones",
      title: "Ámbitos de acompañamiento",
      lead: "Dos especialidades estructuran en particular su trabajo clínico. Otros ámbitos las prolongan en la práctica cotidiana.",
      featured: [
        {
          title: "Alto potencial intelectual y creativo",
          short: "HPIC",
          body: "Especialización en el alto potencial intelectual y creativo (HPIC).",
        },
        {
          title: "Síndrome de Asperger",
          short: "Asperger",
          body: "Especialización en el síndrome de Asperger, en vínculo con la práctica clínica y la investigación en el CRFDP.",
        },
      ],
      othersLabel: "Otros ámbitos",
      others: [
        "Niños",
        "Adolescentes",
        "Adultos",
        "Relaciones familiares",
        "Familia y pareja",
        "Enfoque transgeneracional",
        "Gestión del estrés",
        "Dificultades escolares",
      ],
    },
    complementary: {
      eyebrow: "Formación complementaria",
      title: "En torno al cuerpo, al estrés y a la expresión",
      lead: "Junto al recorrido universitario, Claire Jalabert ha seguido formaciones que enriquecen su práctica clínica.",
      items: [
        {
          axis: "Terapia psicocorporal",
          title: "Touch for Health",
          detail: "Formación de John Thie D.C.",
          place: "Nantes y Tours",
        },
        {
          axis: "Gestión del estrés y memorización mental",
          title: "Método de E. y R. Kammerer y Gordon Stokes",
          detail: null,
          place: "Nantes",
        },
        {
          axis: "Arteterapia",
          title: "Formación con Marie Desaulles",
          detail: "Artista y arteterapeuta",
          place: null,
        },
      ],
    },
  },
  audiences: [
    {
      title: "Niños",
      description:
        "Acompañamiento adaptado, también a través de mediaciones (juego, dibujo, construcciones…).",
    },
    {
      title: "Adolescentes",
      description:
        "Entrevistas terapéuticas para comprenderse mejor durante la adolescencia.",
    },
    {
      title: "Adultos",
      description:
        "Entrevistas terapéuticas centradas en lo vivido, las emociones y las necesidades específicas.",
    },
    {
      title: "Parejas",
      description:
        "Terapia de pareja para trabajar la relación, sus fragilidades y su equilibrio.",
    },
    {
      title: "Familias",
      description:
        "Acompañamiento de las relaciones familiares, incluida la mediación familiar.",
    },
  ],
  approach: {
    intro:
      "Las entrevistas clínicas se fundamentan en la escucha y el intercambio, en un marco definido por la profesional. El objetivo es ayudar a la persona a recobrar bienestar, confianza y equilibrio en la vida cotidiana.",
    pillars: [
      {
        title: "Escucha atenta",
        body: "Un espacio para hablar de lo que se vive — emociones, vivencias, dificultades y necesidades.",
      },
      {
        title: "Comprender el propio funcionamiento",
        body: "Exploración de las sensibilidades, de las relaciones interpersonales y del propio lugar en un grupo.",
      },
      {
        title: "Apoyos posibles",
        body: "Según las situaciones, pueden utilizarse otras técnicas: gestión mental, gestión del estrés o técnicas psicocorporales.",
      },
    ],
  },
};

const bundles: Record<AppLocale, ContentBundle> = { fr, en, it, es };

export function getContent(locale: string): ContentBundle {
  return bundles[(locale as AppLocale) in bundles ? (locale as AppLocale) : "fr"];
}

/** @deprecated Prefer getContent(locale).contact + contactFacts */
export const contactInfo = {
  ...contactFacts,
  ...fr.contact,
} as const;

/** @deprecated Prefer getContent(locale) */
export const quotes = fr.quotes;
/** @deprecated Prefer getContent(locale) */
export const presentation = fr.presentation;
/** @deprecated Prefer getContent(locale) */
export const about = fr.about;
/** @deprecated Prefer getContent(locale) */
export const audiences = fr.audiences;
/** @deprecated Prefer getContent(locale) */
export const approach = fr.approach;
