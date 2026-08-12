import type { EducationalArticle } from "./types";

export const hpiArticle: EducationalArticle = {
  slug: "hpi",
  title: "Haut Potentiel Intellectuel (HPI)",
  eyebrow: "Fonctionnement cognitif",
  description:
    "Repères sur le haut potentiel intellectuel : définition, tests, scolarité, diversité des parcours, enfant et adulte, formulation HPIC, liens avec TSA et TDAH, et place du bilan.",
  metaTitle:
    "Haut Potentiel Intellectuel (HPI) : comprendre et évaluer | Claire Jalabert",
  metaDescription:
    "Page pédagogique sur le HPI et la formulation HPIC : tests, réussite scolaire, diversité, créativité, liens éventuels avec TSA et TDAH. Contenu informatif, non diagnostique.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-3",
  toc: [
    { id: "definition", label: "Définition et repères" },
    { id: "tests", label: "Tests et évaluation" },
    { id: "reussite-scolaire", label: "Réussite scolaire" },
    { id: "diversite", label: "Diversité des profils" },
    { id: "enfant", label: "Chez l’enfant" },
    { id: "adulte", label: "Chez l’adulte" },
    { id: "creativite-hpic", label: "Créativité et HPIC" },
    { id: "hpi-tsa", label: "HPI et TSA" },
    { id: "hpi-tdah", label: "HPI et TDAH" },
    { id: "bilan", label: "Le bilan" },
  ],
  sections: [
    {
      id: "definition",
      title: "Définition et repères",
      blocks: [
        {
          type: "p",
          text: "Le haut potentiel intellectuel (HPI) désigne un fonctionnement cognitif situé dans la zone supérieure de la distribution des aptitudes mesurées par les tests d’intelligence, associé souvent — mais pas toujours — à des particularités de raisonnement, d’apprentissage ou de sensibilité. Ce n’est pas une maladie, ni une personnalité type, ni une garantie de réussite.",
        },
        {
          type: "p",
          text: "Dans de nombreux contextes français, un QI total autour de 130 (environ deux écarts-types au-dessus de la moyenne sur les échelles de Wechsler) est une référence fréquente pour parler de haut potentiel. Ce seuil est un repère statistique utile ; ce n’est pas une règle simpliste universelle. L’interprétation clinique regarde aussi le profil des indices, l’histoire de la personne, le retentissement et le contexte.",
        },
        {
          type: "p",
          text: "À l’école, les textes officiels évoquent les élèves à haut potentiel intellectuel et la nécessité de prendre en compte leurs besoins éducatifs particuliers. Le code de l’éducation (article L321-4) et les ressources Eduscol (vademecum Éléves à haut potentiel) rappellent l’importance d’un accompagnement pédagogique adapté, sans folklore ni mythologie.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Un repère, pas une essence",
          body: "Le QI ~130 est une référence fréquente, pas une frontière magique. Le HPI se comprend dans une évaluation globale, pas par un chiffre isolé lu hors contexte.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenu pédagogique",
          body: "Cette page n’établit pas un diagnostic et ne permet pas de conclure seul à un haut potentiel. Seule une évaluation professionnelle peut éclairer une situation individuelle.",
        },
      ],
    },
    {
      id: "tests",
      title: "Tests et évaluation",
      blocks: [
        {
          type: "p",
          text: "L’évaluation du fonctionnement intellectuel repose typiquement sur une échelle de Wechsler adaptée à l’âge (WISC pour les enfants et adolescents, WAIS pour les adultes), administrée par un psychologue formé. Le QI total n’est qu’une synthèse : les indices (compréhension verbale, visuospatial, fluence, mémoire de travail, vitesse de traitement, etc. selon la version) renseignent sur un profil plus fin.",
        },
        {
          type: "p",
          text: "Un écart important entre indices, une anxiété de performance, une fatigue, un trouble associé ou des conditions de passation défavorables peuvent influencer les résultats. C’est pourquoi le bilan ne se résume pas à « passer un QI » : l’entretien clinique, l’anamnèse et, si besoin, d’autres outils (attention, affectif, projectif) complètent la lecture.",
        },
        {
          type: "p",
          text: "Les tests en ligne ou les questionnaires viraux ne remplacent pas une évaluation standardisée. Ils peuvent nourrir un questionnement ; ils ne valident pas un haut potentiel.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idée reçue",
          body: "« Un test gratuit sur Internet suffit pour savoir si l’on est HPI. » Faux : seuls des outils standardisés, administrés et interprétés par un professionnel, permettent une estimation fiable dans un cadre clinique.",
        },
      ],
    },
    {
      id: "reussite-scolaire",
      title: "Réussite scolaire",
      blocks: [
        {
          type: "p",
          text: "Contrairement à une image répandue, le haut potentiel ne rime pas automatiquement avec excellence scolaire. Certains enfants et adolescents HPI réussissent brillamment ; d’autres s’ennuient, décrochent, évitent l’effort perçu comme inutile, ou se heurtent à des méthodes pédagogiques peu adaptées à leur rythme d’apprentissage.",
        },
        {
          type: "p",
          text: "Le vademecum Eduscol sur les élèves à haut potentiel souligne la diversité des parcours et la nécessité d’aménagements pédagogiques possibles (approfondissement, compaction, tutorat, projets, etc.), décidés au cas par cas. L’article L321-4 du code de l’éducation inscrit la prise en compte des élèves intellectuellement précoces dans les missions de l’école.",
        },
        {
          type: "p",
          text: "Un accompagnement psychologique peut aider lorsque la scolarité devient source d’anxiété, de conflit familial ou de perte d’estime de soi — y compris lorsque les notes restent bonnes en apparence.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "HPI ≠ bulletin parfait",
          body: "La réussite scolaire n’est ni une condition ni une preuve automatique de haut potentiel. L’ennui, le décrochage ou l’anxiété peuvent coexister avec un fonctionnement intellectuel élevé.",
        },
      ],
    },
    {
      id: "diversite",
      title: "Diversité des profils",
      blocks: [
        {
          type: "p",
          text: "Il n’existe pas un « portrait-robot » du HPI. On rencontre des profils très verbaux, d’autres plus visuospatiaux ; des personnes à l’aise socialement et d’autres réservées ; des parcours linéaires et des trajectoires chaotiques. La sensibilité émotionnelle, souvent évoquée, n’est ni universelle ni exclusive au haut potentiel.",
        },
        {
          type: "p",
          text: "Il convient de se méfier des listes de traits qui promettent de « reconnaître un HPI en cinq signes ». Elles confondent souvent personnalité, culture, anxiété et aptitudes cognitives. Une lecture clinique humble reste préférable aux check-lists virales.",
        },
        {
          type: "ul",
          items: [
            "Hétérogénéité des indices cognitifs",
            "Variabilité de l’adaptation scolaire et professionnelle",
            "Présence ou absence de souffrance associée",
            "Possible coexistence avec d’autres fonctionnements (TDAH, TSA, troubles des apprentissages, etc.)",
          ],
        },
      ],
    },
    {
      id: "enfant",
      title: "Chez l’enfant",
      blocks: [
        {
          type: "p",
          text: "Chez l’enfant, le questionnement autour du haut potentiel émerge souvent face à un décalage : langage précoce, curiosité intense, questions existentielles précoces, ennui en classe, perfectionnisme, ou au contraire difficultés inattendues malgré des capacités visibles. Les parents cherchent parfois une explication à un comportement que l’école peinent à situer.",
        },
        {
          type: "p",
          text: "Un bilan peut éclairer le fonctionnement et ouvrir des pistes pédagogiques. Il peut aussi conclure à autre chose, ou à un tableau mixte. L’enfant n’a pas besoin d’être « labellisé » pour être entendu : le bilan est un outil au service du mieux-être et de l’ajustement, pas une fin en soi.",
        },
        {
          type: "p",
          text: "L’accompagnement peut articuler écoute de l’enfant, guidance parentale, lien éventuel avec l’école, et travail sur l’anxiété, l’estime de soi ou les relations aux pairs lorsque cela est nécessaire.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Quand envisager un bilan ?",
          body: "Lorsque le décalage scolaire, relationnel ou émotionnel dure et fait souffrir l’enfant ou la famille, un entretien puis, si indiqué, un bilan cognitif peuvent clarifier la situation.",
        },
      ],
    },
    {
      id: "adulte",
      title: "Chez l’adulte",
      blocks: [
        {
          type: "p",
          text: "À l’âge adulte, la demande autour du HPI survient parfois après des années de sentiment de décalage, un burn-out, une réorientation, ou la découverte d’un haut potentiel chez un enfant. Certaines personnes cherchent un nom pour un fonctionnement longtemps vécu comme « trop » : trop intense, trop rapide, trop exigeant, trop sensible.",
        },
        {
          type: "p",
          text: "Un bilan adulte peut apporter des clés de compréhension. Il ne résout pas à lui seul les difficultés professionnelles ou relationnelles, mais il peut réorienter le récit de soi et guider un accompagnement. D’autres dimensions (anxiété, TDAH, TSA, épuisement) doivent rester dans le champ de vision.",
        },
        {
          type: "p",
          text: "Le haut potentiel n’est ni un statut social ni une excuse universelle. C’est une information parmi d’autres sur un fonctionnement, à articuler avec les valeurs, l’histoire et les besoins actuels de la personne.",
        },
      ],
    },
    {
      id: "creativite-hpic",
      title: "Créativité et HPIC",
      blocks: [
        {
          type: "p",
          text: "Au cabinet, Claire Jalabert utilise la formulation Haut Potentiel Intellectuel et Créatif (HPIC). Il s’agit de sa formulation clinique de travail, destinée à souligner que le fonctionnement concerné ne se réduit pas à un score intellectuel : la créativité, la pensée divergente, l’intensité imaginative ou la singularité des associations d’idées peuvent faire partie du tableau.",
        },
        {
          type: "p",
          text: "HPIC n’est pas une catégorie diagnostique officielle. Ce n’est ni un code CIM ou DSM, ni un label reconnu comme tel par l’Éducation nationale. C’est une manière de nommer, dans la pratique, une articulation entre potentiel intellectuel et dimension créative, utile pour l’accompagnement.",
        },
        {
          type: "p",
          text: "Cette précision évite deux écueils : réduire la personne à un QI, et présenter HPIC comme un diagnostic standardisé. La formulation reste au service de la clinique, non l’inverse.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "HPIC : formulation de cabinet",
          body: "HPIC désigne la formulation utilisée par Claire Jalabert dans sa pratique. Ce n’est pas une catégorie diagnostique officielle.",
        },
      ],
    },
    {
      id: "hpi-tsa",
      title: "HPI et TSA",
      blocks: [
        {
          type: "p",
          text: "Haut potentiel et trouble du spectre de l’autisme peuvent coexister. Ils peuvent aussi être confondus lorsque l’on s’appuie sur des listes de traits trop générales (intérêts intenses, sensibilité, sentiment de décalage). Un raisonnement sophistiqué n’exclut pas un TSA ; un TSA n’implique pas un HPI.",
        },
        {
          type: "p",
          text: "La distinction clinique s’appuie sur l’histoire développementale, la communication sociale, la sensorialité, le profil cognitif et le retentissement. Parfois les deux dimensions sont présentes ; parfois une seule ; parfois aucune des deux, malgré un questionnement initial. Voir aussi les pages TSA (/comprendre/tsa) et Asperger (/comprendre/asperger).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Éviter l’amalgame",
          body: "HPI et TSA sont des dimensions distinctes. Leur éventuel croisement se détermine par une évaluation soigneuse, pas par ressemblance superficielle.",
        },
      ],
    },
    {
      id: "hpi-tdah",
      title: "HPI et TDAH",
      blocks: [
        {
          type: "p",
          text: "Le TDAH (trouble du déficit de l’attention avec ou sans hyperactivité) peut également coexister avec un haut potentiel, ou être évoqué à tort face à un ennui scolaire, une pensée rapide ou une agitation liée à la sous-stimulation. Inversement, un TDAH peut masquer ou freiner l’expression de compétences cognitives élevées.",
        },
        {
          type: "p",
          text: "Attention, impulsivité, organisation, mémoire de travail et régulation émotionnelle font partie des zones de chevauchement possibles. L’évaluation différentielle — et parfois complémentaire — demande du temps et des outils adaptés. Pour d’autres repères, voir la section TDAH (/comprendre/autres-reperes#tdah).",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idée reçue",
          body: "« S’il est HPI, ce n’est pas un TDAH — il s’ennuie juste. » Pas nécessairement : les deux peuvent coexister, et l’ennui seul n’explique pas tous les tableaux attentionnels.",
        },
      ],
    },
    {
      id: "bilan",
      title: "Le bilan",
      blocks: [
        {
          type: "p",
          text: "Un bilan psychométrique et clinique vise à comprendre un fonctionnement, pas à délivrer un titre. Il s’inscrit dans une demande : souffrance, questionnement scolaire, orientation, meilleure connaissance de soi. Les résultats se restituent dans un langage accessible, avec leurs limites et leurs implications concrètes.",
        },
        {
          type: "p",
          text: "Selon les situations, le bilan cognitif peut être complété par d’autres évaluations (attentionnelle, affective, projective, ou contribution à une démarche TSA). La suite peut être un accompagnement thérapeutique, un lien avec l’école, une orientation médicale, ou simplement un éclairage utile pour la personne et ses proches.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "En parler au cabinet",
          body: "Le secrétariat et un premier entretien permettent de clarifier si un bilan est pertinent, lequel, et dans quel délai — sans précipitation.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Bilans et évaluations",
          description:
            "Présentation des bilans proposés au cabinet.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contacter le secrétariat",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Eduscol — Vademecum « Scolariser les élèves à haut potentiel »",
      detail: "Ressource pédagogique nationale (EHP)",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — article L321-4",
      detail: "Prise en compte des élèves intellectuellement précoces",
      href: "https://www.legifrance.gouv.fr",
    },
    {
      label: "Échelles de Wechsler (WISC, WAIS)",
      detail: "Outils standardisés d’évaluation du fonctionnement intellectuel",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trouble du spectre de l’autisme",
      description:
        "Pour distinguer et croiser éventuels fonctionnements du spectre.",
    },
    {
      href: "/comprendre/asperger",
      title: "Syndrome d’Asperger",
      description:
        "Histoire du terme et liens fréquents avec les questionnements HPI.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Autres repères & accompagnements",
      description:
        "TDAH, scolarité, famille, groupes et bilans.",
    },
  ],
};
