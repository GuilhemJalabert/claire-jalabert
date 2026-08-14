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
      "Psychologue clinicienne à Gan. Consultations en présentiel (99 rue d’Ossau) ou par visioconférence. Accompagnement des enfants, adolescents, adultes, couples et familles. HPI, HPC, TSA, TDAH et troubles des apprentissages.",
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
      "Claire Jalabert est psychologue clinicienne à Gan. Elle est spécialisée dans l’accompagnement, le repérage et la passation de bilans adaptés autour des profils HPI, HPC, TSA, Asperger, TDAH et des troubles des apprentissages. Les consultations se déroulent au cabinet (99 rue d’Ossau) en présentiel, ou par visioconférence.",
      "Son parcours universitaire en psychologie clinique s’enrichit d’une activité de recherche autour du Haut Potentiel, menée en lien avec le CRFDP — Université de Rouen.",
      "Elle propose également un accompagnement et une supervision des professionnels travaillant auprès de profils neuroatypiques et des enseignants du primaire et du secondaire, un accompagnement à la parentalité, des groupes de parole, ainsi qu’une formation des parents autour du HPI et des neuroatypies.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert est psychologue clinicienne à Gan. Elle est spécialisée en recherche, en clinique et en formation autour des profils neuroatypiques : HPI, HPC, TSA, profils Asperger, TDAH et troubles des apprentissages. Les consultations ont lieu au cabinet, 99 rue d’Ossau, en présentiel ou par visioconférence.",
      "Elle est psychologue clinicienne, professeure certifiée d’histoire-géographie et étudiante en théologie.",
    ],
    journey: {
      eyebrow: "Parcours",
      title: "Entre enseignement, psychologie et recherche",
      lead: "Claire Jalabert est psychologue clinicienne, professeure certifiée d’histoire-géographie et étudiante en théologie. Son chemin s’est déployé dans la psychologie clinique, jusqu’à un travail de doctorat consacré à l’enfant à Haut Potentiel intellectuel et à la dynamique familiale.",
      teachingLabel: "Enseignement",
      teaching: {
        title: "Professeure certifiée d’histoire-géographie",
        body: "Professeure certifiée d’histoire-géographie et étudiante en théologie.",
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
          thesis:
            "« Dynamique familiale et fonctionnement intrasubjectif de l'enfant à Haut Potentiel intellectuel »",
          direction: "Sous la direction de Mme Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Spécialisations",
      title: "Domaines d’accompagnement",
      lead: "Spécialisation en recherche, en clinique et en formation autour des profils neuroatypiques : HPI, HPC, TSA, profils Asperger, TDAH et troubles des apprentissages.",
      featured: [
        {
          title: "Haut Potentiel Intellectuel et Créatif",
          short: "HPIC",
          body: "Spécialisation en recherche, en clinique et en formation autour du Haut Potentiel Intellectuel (HPI) et du Haut Potentiel Créatif (HPC).",
        },
        {
          title: "Syndrome d’Asperger",
          short: "Asperger",
          body: "Spécialisation en recherche, en clinique et en formation autour du TSA et des profils Asperger, en lien avec le CRFDP — Université de Rouen.",
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
          title: "Formation avec spécialiste",
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
        "Accompagnement adapté, notamment via des médiations (jeux, dessins, constructions, médiation avec la nature, médiation animale).",
    },
    {
      title: "Adolescents",
      description:
        "Entretiens thérapeutiques pour mieux se comprendre à l’adolescence.",
    },
    {
      title: "Adultes",
      description:
        "Entretiens thérapeutiques centrés sur le vécu, les émotions et les besoins, avec un travail autour de l’estime de soi, de la confiance en soi et de l’autonomie psychique.",
    },
    {
      title: "Couples",
      description:
        "Thérapie de couple pour travailler la relation, les besoins de chacun, les hypersensibilités éventuelles et la recherche d’un équilibre commun.",
    },
    {
      title: "Familles",
      description:
        "Accompagnement des relations familiales et de la parentalité avec des enfants neuroatypiques.",
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
      "Clinical psychologist in Gan. Consultations in person (99 rue d’Ossau) or by video. Support for children, adolescents, adults, couples and families. HPI, HPC, ASD, ADHD and learning difficulties.",
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
      "Claire Jalabert is a clinical psychologist in Gan. She specialises in support, identification and adapted assessments around HPI, HPC, ASD, Asperger, ADHD profiles and learning difficulties. Consultations take place at the practice (99 rue d’Ossau) in person, or by video.",
      "Her academic background in clinical psychology is complemented by research on giftedness, in connection with CRFDP — University of Rouen.",
      "She also offers support and supervision for professionals working with neurodivergent profiles and for primary and secondary teachers, parenting support, support groups, and parent training around HPI and neurodivergence.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert is a clinical psychologist in Gan. She specialises in research, clinical practice and training around neurodivergent profiles: HPI, HPC, ASD, Asperger profiles, ADHD and learning difficulties. Consultations take place at the practice, 99 rue d’Ossau, in person or by video.",
      "She is a clinical psychologist, a certified history–geography teacher and a theology student.",
    ],
    journey: {
      eyebrow: "Background",
      title: "Between teaching, psychology and research",
      lead: "Claire Jalabert is a clinical psychologist, a certified history–geography teacher and a theology student. Her path has unfolded in clinical psychology, through to doctoral work devoted to intellectually gifted children and family dynamics.",
      teachingLabel: "Teaching",
      teaching: {
        title: "Certified history–geography teacher",
        body: "Certified history–geography teacher and theology student.",
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
          thesis:
            "“Family dynamics and the intrasubjective functioning of the intellectually gifted child”",
          direction: "Supervised by Mrs Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Specialisations",
      title: "Areas of support",
      lead: "Specialisation in research, clinical practice and training around neurodivergent profiles: HPI, HPC, ASD, Asperger profiles, ADHD and learning difficulties.",
      featured: [
        {
          title: "Intellectual and creative giftedness",
          short: "HPIC",
          body: "Specialisation in research, clinical practice and training around intellectual giftedness (HPI) and creative giftedness (HPC).",
        },
        {
          title: "Asperger syndrome",
          short: "Asperger",
          body: "Specialisation in research, clinical practice and training around ASD and Asperger profiles, in connection with CRFDP — University of Rouen.",
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
          title: "Training with a specialist",
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
        "Adapted support, including through mediations (play, drawing, construction, nature-based mediation, animal-assisted mediation).",
    },
    {
      title: "Adolescents",
      description:
        "Therapeutic sessions to better understand oneself during adolescence.",
    },
    {
      title: "Adults",
      description:
        "Therapeutic sessions centred on lived experience, emotions and needs, with work on self-esteem, self-confidence and psychic autonomy.",
    },
    {
      title: "Couples",
      description:
        "Couple therapy to work on the relationship, each partner’s needs, possible sensory hypersensitivities and the search for a shared balance.",
    },
    {
      title: "Families",
      description:
        "Support for family relationships and for parenting with neurodivergent children.",
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
      "Psicologa clinica a Gan. Consultazioni in presenza (99 rue d’Ossau) o in videoconsulto. Sostegno a bambini, adolescenti, adulti, coppie e famiglie. HPI, HPC, TEA, ADHD e disturbi degli apprendimenti.",
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
      "Claire Jalabert è psicologa clinica a Gan. È specializzata nell’accompagnamento, nell’individuazione e nella somministrazione di valutazioni adattate intorno ai profili HPI, HPC, TEA, Asperger, ADHD e ai disturbi degli apprendimenti. Le consultazioni si svolgono nello studio (99 rue d’Ossau) in presenza, o in videoconsulto.",
      "Il suo percorso universitario in psicologia clinica si arricchisce di un’attività di ricerca sull’alto potenziale, in collegamento con il CRFDP — Université de Rouen.",
      "Propone inoltre un accompagnamento e una supervisione dei professionisti che lavorano con profili neuroatipici e degli insegnanti della scuola primaria e secondaria, un accompagnamento alla genitorialità, gruppi di parola, nonché una formazione dei genitori intorno all’HPI e alle neuroatipie.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert è psicologa clinica a Gan. È specializzata in ricerca, in clinica e in formazione intorno ai profili neuroatipici: HPI, HPC, TEA, profili Asperger, ADHD e disturbi degli apprendimenti. Le consultazioni hanno luogo nello studio, 99 rue d’Ossau, in presenza o in videoconsulto.",
      "È psicologa clinica, professoressa abilitata di storia e geografia e studentessa di teologia.",
    ],
    journey: {
      eyebrow: "Percorso",
      title: "Tra insegnamento, psicologia e ricerca",
      lead: "Claire Jalabert è psicologa clinica, professoressa abilitata di storia e geografia e studentessa di teologia. Il suo cammino si è sviluppato nella psicologia clinica, fino a un lavoro di dottorato dedicato al bambino ad alto potenziale intellettivo e alla dinamica familiare.",
      teachingLabel: "Insegnamento",
      teaching: {
        title: "Professoressa abilitata di storia e geografia",
        body: "Professoressa abilitata di storia e geografia e studentessa di teologia.",
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
          thesis:
            "« Dinamiche familiari e funzionamento intrasoggettivo del bambino ad alto potenziale intellettivo »",
          direction: "Sotto la direzione della Sig.ra Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Specializzazioni",
      title: "Ambiti di accompagnamento",
      lead: "Specializzazione in ricerca, in clinica e in formazione intorno ai profili neuroatipici: HPI, HPC, TEA, profili Asperger, ADHD e disturbi degli apprendimenti.",
      featured: [
        {
          title: "Alto potenziale intellettivo e creativo",
          short: "HPIC",
          body: "Specializzazione in ricerca, in clinica e in formazione intorno all’alto potenziale intellettivo (HPI) e all’alto potenziale creativo (HPC).",
        },
        {
          title: "Sindrome di Asperger",
          short: "Asperger",
          body: "Specializzazione in ricerca, in clinica e in formazione intorno al TEA e ai profili Asperger, in collegamento con il CRFDP — Université de Rouen.",
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
          title: "Formazione con una specialista",
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
        "Accompagnamento adattato, anche attraverso mediazioni (gioco, disegno, costruzioni, mediazione con la natura, mediazione animale).",
    },
    {
      title: "Adolescenti",
      description:
        "Colloqui terapeutici per comprendersi meglio durante l’adolescenza.",
    },
    {
      title: "Adulti",
      description:
        "Colloqui terapeutici centrati sul vissuto, sulle emozioni e sui bisogni, con un lavoro intorno all’autostima, alla fiducia in sé e all’autonomia psichica.",
    },
    {
      title: "Coppie",
      description:
        "Terapia di coppia per lavorare sulla relazione, sui bisogni di ciascuno, sulle ipersensibilità eventuali e sulla ricerca di un equilibrio comune.",
    },
    {
      title: "Famiglie",
      description:
        "Accompagnamento delle relazioni familiari e della genitorialità con bambini neuroatipici.",
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
      "Psicóloga clínica en Gan. Consultas presenciales (99 rue d’Ossau) o por videoconsulta. Acompañamiento de niños, adolescentes, adultos, parejas y familias. HPI, HPC, TEA, TDAH y trastornos de los aprendizajes.",
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
      "Claire Jalabert es psicóloga clínica en Gan. Está especializada en el acompañamiento, la identificación y la administración de evaluaciones adaptadas en torno a los perfiles HPI, HPC, TEA, Asperger, TDAH y los trastornos de los aprendizajes. Las consultas se realizan en el gabinete (99 rue d’Ossau) de forma presencial, o por videoconsulta.",
      "Su recorrido universitario en psicología clínica se enriquece con una actividad de investigación sobre el alto potencial, en vínculo con el CRFDP — Université de Rouen.",
      "Propone también un acompañamiento y una supervisión de los profesionales que trabajan con perfiles neuroatípicos y de los docentes de primaria y secundaria, un acompañamiento a la parentalidad, grupos de palabra, así como una formación de los padres en torno al HPI y a las neuroatipias.",
    ],
  },
  about: {
    heroIntro: [
      "Claire Jalabert es psicóloga clínica en Gan. Está especializada en investigación, en clínica y en formación en torno a los perfiles neuroatípicos: HPI, HPC, TEA, perfiles Asperger, TDAH y trastornos de los aprendizajes. Las consultas tienen lugar en el gabinete, 99 rue d’Ossau, presencialmente o por videoconsulta.",
      "Es psicóloga clínica, profesora certificada de historia y geografía y estudiante de teología.",
    ],
    journey: {
      eyebrow: "Recorrido",
      title: "Entre enseñanza, psicología e investigación",
      lead: "Claire Jalabert es psicóloga clínica, profesora certificada de historia y geografía y estudiante de teología. Su camino se ha desplegado en la psicología clínica, hasta un trabajo de doctorado dedicado al niño de alto potencial intelectual y a la dinámica familiar.",
      teachingLabel: "Enseñanza",
      teaching: {
        title: "Profesora certificada de historia y geografía",
        body: "Profesora certificada de historia y geografía y estudiante de teología.",
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
          thesis:
            "« Dinámica familiar y funcionamiento intrasubjetivo del niño de alto potencial intelectual »",
          direction: "Bajo la dirección de la Sra. Catherine Weissman-Arcache.",
        },
      ],
    },
    specializations: {
      eyebrow: "Especializaciones",
      title: "Ámbitos de acompañamiento",
      lead: "Especialización en investigación, en clínica y en formación en torno a los perfiles neuroatípicos: HPI, HPC, TEA, perfiles Asperger, TDAH y trastornos de los aprendizajes.",
      featured: [
        {
          title: "Alto potencial intelectual y creativo",
          short: "HPIC",
          body: "Especialización en investigación, en clínica y en formación en torno al alto potencial intelectual (HPI) y al alto potencial creativo (HPC).",
        },
        {
          title: "Síndrome de Asperger",
          short: "Asperger",
          body: "Especialización en investigación, en clínica y en formación en torno al TEA y a los perfiles Asperger, en vínculo con el CRFDP — Université de Rouen.",
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
          title: "Formación con especialista",
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
        "Acompañamiento adaptado, también a través de mediaciones (juego, dibujo, construcciones, mediación con la naturaleza, mediación animal).",
    },
    {
      title: "Adolescentes",
      description:
        "Entrevistas terapéuticas para comprenderse mejor durante la adolescencia.",
    },
    {
      title: "Adultos",
      description:
        "Entrevistas terapéuticas centradas en lo vivido, las emociones y las necesidades, con un trabajo en torno a la autoestima, la confianza en uno mismo y la autonomía psíquica.",
    },
    {
      title: "Parejas",
      description:
        "Terapia de pareja para trabajar la relación, las necesidades de cada uno, las hipersensibilidades eventuales y la búsqueda de un equilibrio común.",
    },
    {
      title: "Familias",
      description:
        "Acompañamiento de las relaciones familiares y de la parentalidad con niños neuroatípicos.",
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
