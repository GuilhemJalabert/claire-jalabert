import type { EducationalArticle } from "./types";

export const aspergerArticle: EducationalArticle = {
  slug: "asperger",
  title: "Syndrome d’Asperger",
  eyebrow: "Histoire & continuum",
  description:
    "Comprendre le syndrome d’Asperger : histoire du terme, caractéristiques, communication, intérêts, sensorialité, femmes, âges de la vie, liens avec le HPI, et place actuelle dans le spectre de l’autisme.",
  metaTitle:
    "Syndrome d’Asperger : comprendre le terme et les profils concernés | Claire Jalabert",
  metaDescription:
    "Repères pédagogiques sur le syndrome d’Asperger : pourquoi le langage a évolué, caractéristiques, camouflage, et inscription dans le TSA. Contenu informatif, non diagnostique.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-2",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "pourquoi", label: "Pourquoi le langage a évolué" },
    { id: "caracteristiques", label: "Caractéristiques souvent décrites" },
    { id: "communication", label: "Communication et relations" },
    { id: "interets", label: "Intérêts focalisés" },
    { id: "sensorialite-routines", label: "Sensorialité et routines" },
    { id: "femmes", label: "Chez les femmes" },
    { id: "ages", label: "Selon les âges" },
    { id: "asperger-hpi", label: "Asperger et HPI" },
    { id: "diagnostic-aujourdhui", label: "Diagnostic aujourd’hui" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Le terme « syndrome d’Asperger » reste très présent dans le langage courant, dans certaines demandes de consultation et dans l’histoire personnelle de nombreuses personnes. Il renvoie souvent à un profil de personne autiste — ou de personne avec un TSA — sans retard de langage majeur dans l’enfance et sans déficience intellectuelle associée, avec des particularités marquées de la communication sociale et des intérêts focalisés.",
        },
        {
          type: "p",
          text: "Dans les classifications actuelles (DSM-5, CIM-11), ce syndrome n’est plus une catégorie diagnostique séparée : il est intégré au trouble du spectre de l’autisme. Cela ne signifie pas que le vécu des personnes concernées a disparu, ni que le mot « Asperger » serait interdit. Cela signifie que le cadre médical a évolué pour mieux rendre compte d’un continuum.",
        },
        {
          type: "p",
          text: "Cette page propose des repères pédagogiques. Elle ne permet pas de s’auto-diagnostiquer. Pour une vue d’ensemble du spectre, voir également la page « Trouble du spectre de l’autisme » (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Information, pas diagnostic",
          body: "Les éléments ci-dessous décrivent des tendances fréquemment rapportées. Ils ne suffisent pas à conclure à un syndrome d’Asperger ni à un TSA. Seule une évaluation professionnelle peut éclairer une situation individuelle.",
        },
      ],
    },
    {
      id: "pourquoi",
      title: "Pourquoi le langage a évolué",
      blocks: [
        {
          type: "p",
          text: "Historiquement, le syndrome d’Asperger a été distingué de l’« autisme infantile » pour décrire des personnes sans retard de langage apparent et avec un fonctionnement intellectuel dans la moyenne ou au-dessus. Cette distinction a aidé à rendre visibles des profils longtemps méconnus. Elle a aussi créé des malentendus durables.",
        },
        {
          type: "p",
          text: "L’un des plus tenaces consiste à présenter Asperger comme « une forme légère d’autisme ». Cette formulation est trompeuse. Elle minimise la souffrance possible, la fatigue du camouflage, les difficultés sensorielles et le retentissement social. Une personne peut parler couramment, obtenir un diplôme, et vivre néanmoins un épuisement important lié à son fonctionnement.",
        },
        {
          type: "p",
          text: "Le passage au spectre vise à reconnaître une diversité de besoins et de profils, plutôt qu’une hiérarchie « léger / sévère » fondée uniquement sur le langage ou le QI. Le soutien nécessaire ne se déduit pas d’un ancien sous-type : il s’évalue au cas par cas.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Formulation à éviter",
          body: "« Asperger = forme légère d’autisme » est une simplification inexacte et potentiellement invalidante. Le retentissement ne se mesure pas à la seule fluidité du langage.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Continuité plutôt que hiérarchie",
          body: "Le cadre actuel situe ces profils dans le TSA. Le mot Asperger peut rester utile pour décrire une histoire personnelle ou une demande, sans figer une « légèreté » trompeuse.",
        },
      ],
    },
    {
      id: "caracteristiques",
      title: "Caractéristiques souvent décrites",
      blocks: [
        {
          type: "p",
          text: "Les descriptions classiques insistent sur une intelligence verbale souvent préservée, voire développée, associée à des difficultés dans la réciprocité sociale, une lecture parfois littérale des échanges, et des centres d’intérêt très investis. Ces traits ne forment pas une liste de contrôle : ils se combinent de façons différentes.",
        },
        {
          type: "p",
          text: "On retrouve fréquemment une sensibilité à l’injustice, un besoin de cohérence, une fatigue sociale après les interactions, et une préférence pour des cadres prévisibles. Certaines personnes excellent dans des domaines spécialisés ; d’autres peinent à transformer leurs compétences en parcours stables, faute d’aménagements ou de compréhension de l’environnement.",
        },
        {
          type: "ul",
          items: [
            "Particularités de la communication sociale, malgré un langage souvent fluide",
            "Intérêts intenses et durablement investis",
            "Besoin de prévisibilité et sensibilité aux imprévus",
            "Particularités sensorielles fréquentes",
            "Écart possible entre compétences cognitives et aisance relationnelle perçue",
          ],
        },
        {
          type: "p",
          text: "Aucun de ces éléments, isolément, ne définit un profil Asperger. C’est leur combinaison, leur ancienneté et leur retentissement qui peuvent motiver une évaluation — orientée aujourd’hui vers le spectre de l’autisme.",
        },
      ],
    },
    {
      id: "communication",
      title: "Communication et relations",
      blocks: [
        {
          type: "p",
          text: "La communication d’une personne concernée peut être précise, riche, parfois très technique, tout en laissant peu de place aux implicites. Les conversations « à bâtons rompus », les sous-entendus, l’humour fondé sur l’ambiguïté ou les règles non écrites du groupe peuvent être source de malentendus.",
        },
        {
          type: "p",
          text: "Cela ne signifie pas une absence d’empathie. Beaucoup de personnes avec un TSA — y compris celles qui se reconnaissent dans l’ancien terme Asperger — ressentent intensément les émotions des autres, mais peinent à les décoder rapidement ou à y répondre selon les codes attendus. L’écart entre ressenti et expression est souvent au cœur du malentendu.",
        },
        {
          type: "p",
          text: "Dans les relations amicales, amoureuses ou professionnelles, la clarté, la prévisibilité et le respect des besoins de récupération sont souvent des facteurs protecteurs. L’apprentissage explicite de certains codes peut aider, sans viser une conformité exhaustive qui épuiserait la personne.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Communication ≠ absence de lien",
          body: "Des particularités communicationnelles n’empêchent pas des liens authentiques. Elles invitent à des modalités d’échange plus explicites et respectueuses des rythmes de chacun.",
        },
      ],
    },
    {
      id: "interets",
      title: "Intérêts focalisés",
      blocks: [
        {
          type: "p",
          text: "Les intérêts focalisés — parfois appelés intérêts spécifiques — occupent une place centrale pour de nombreuses personnes. Ils peuvent porter sur des domaines savants, techniques, artistiques, collectifs ou très pointus. Loin d’être de simples « manies », ils offrent souvent du sens, de la compétence, de la régulation émotionnelle et un espace de plaisir.",
        },
        {
          type: "p",
          text: "La frontière entre passion riche et rigidité invalidante dépend du contexte : l’intérêt devient problématique lorsqu’il empêche d’autres besoins vitaux, isole durablement, ou entre en conflit permanent avec l’environnement. Même alors, l’approche clinique privilégie souvent l’intégration et l’aménagement, plutôt que l’éradication de l’intérêt.",
        },
        {
          type: "p",
          text: "Dans un accompagnement, ces centres d’intérêt peuvent devenir des alliés : médiation, motivation scolaire ou professionnelle, fil conducteur narratif. Les reconnaître avec respect change souvent la qualité de la relation thérapeutique.",
        },
      ],
    },
    {
      id: "sensorialite-routines",
      title: "Sensorialité et routines",
      blocks: [
        {
          type: "p",
          text: "Comme pour d’autres profils du spectre, la sensorialité et le besoin de routines sont fréquents. Bruits, lumières, textures, contacts ou environnements imprévisibles peuvent saturer rapidement. Les routines, elles, offrent un cadre apaisant : elles réduisent l’incertitude et libèrent de l’énergie cognitive.",
        },
        {
          type: "p",
          text: "Un changement de planning, un open space bruyant, un repas imposé dans un lieu chaotique peuvent sembler anodins à l’entourage et pourtant coûter très cher à la personne. Nommer ces seuils permet d’éviter des jugements moralisateurs (« trop sensible », « trop rigide ») et d’ouvrir des aménagements réalistes.",
        },
        {
          type: "p",
          text: "Les mouvements répétitifs ou les rituels de régulation (parfois appelés stimming) peuvent contribuer à l’apaisement. Les freiner systématiquement sans alternative augmente souvent le stress. L’enjeu est la sécurité et le respect, y compris en société.",
        },
      ],
    },
    {
      id: "femmes",
      title: "Chez les femmes",
      blocks: [
        {
          type: "p",
          text: "De nombreuses femmes concernées ont longtemps échappé au repérage, faute de modèles cliniques adaptés. Le camouflage social, l’imitation des pairs, l’intériorisation de la détresse et des intérêts moins « stéréotypés » dans les descriptions anciennes ont contribué à des diagnostics tardifs — ou à des errances diagnostiques.",
        },
        {
          type: "p",
          text: "Anxiété, épuisement, troubles de l’humeur, questionnements identitaires ou difficultés alimentaires peuvent coexister et masquer le fonctionnement sous-jacent. Une apparence sociale adaptée ne dit rien du coût interne. Pour davantage de détails sur le camouflage dans le spectre, voir la section « Femmes et camouflage » de la page TSA (/comprendre/tsa#femmes-camouflage).",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Un questionnement tardif est fréquent",
          body: "Chez les femmes et les personnes très adaptées en surface, un questionnement à l’adolescence ou à l’âge adulte mérite une écoute clinique attentive, sans conclusion hâtive.",
        },
      ],
    },
    {
      id: "ages",
      title: "Selon les âges",
      blocks: [
        {
          type: "p",
          text: "Chez l’enfant, les signes peuvent être discrets si le langage est précoce et les résultats scolaires satisfaisants. Les difficultés apparaissent parfois dans la cour de récréation, les jeux collectifs, la gestion des imprévus ou la sensibilité sensorielle. L’écart entre « bon élève » et « maladroit socialement » intrigue souvent l’entourage.",
        },
        {
          type: "p",
          text: "À l’adolescence, la complexification des relations, le regard des pairs et les exigences d’autonomie peuvent faire basculer un équilibre fragile. À l’âge adulte, ce sont souvent le travail, le couple, la parentalité ou un burn-out qui ravivent le questionnement.",
        },
        {
          type: "p",
          text: "À chaque âge, l’accompagnement vise la compréhension, la réduction de la souffrance et l’ajustement de l’environnement — plus que la conformité à une norme sociale unique.",
        },
      ],
    },
    {
      id: "asperger-hpi",
      title: "Asperger et HPI",
      blocks: [
        {
          type: "p",
          text: "Haut potentiel intellectuel et profils autrefois qualifiés d’Asperger peuvent coexister, se ressembler en surface, ou être confondus. Un QI élevé n’exclut pas un TSA ; un TSA n’implique pas un haut potentiel. Certaines personnes cumulent les deux ; d’autres n’ont que l’un ou l’autre ; d’autres encore présentent un tableau mixte qui demande une lecture clinique fine.",
        },
        {
          type: "p",
          text: "Des intérêts intenses, une sensibilité, une pensée atypique ou une difficulté relationnelle peuvent s’expliquer de plusieurs façons. C’est pourquoi les bilans et l’entretien clinique cherchent à démêler les fils, plutôt qu’à choisir trop vite une seule étiquette. Pour les repères sur le haut potentiel, voir la page HPI (/comprendre/hpi).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Deux dimensions possibles",
          body: "Asperger/TSA et HPI ne s’équivalent pas. Ils peuvent se croiser. Seule une évaluation contextualisée permet d’éviter les amalgames.",
        },
      ],
    },
    {
      id: "diagnostic-aujourdhui",
      title: "Diagnostic aujourd’hui",
      blocks: [
        {
          type: "p",
          text: "Aujourd’hui, lorsqu’une évaluation aboutit, le diagnostic médical retenu s’inscrit en règle générale dans le trouble du spectre de l’autisme, avec une description du niveau de soutien nécessaire et des particularités individuelles. Le terme Asperger peut rester présent dans le récit de la personne, dans d’anciens documents, ou comme point d’entrée de la demande.",
        },
        {
          type: "p",
          text: "Le diagnostic reste un acte médical. La psychologue clinicienne contribue à l’évaluation (entretien, anamnèse, outils) et à l’accompagnement. Des instruments comme l’ADI-R peuvent contribuer à la démarche ; un questionnaire comme le RAADS-R n’établit pas un diagnostic. Ces points sont détaillés dans la page TSA (/comprendre/tsa).",
        },
        {
          type: "p",
          text: "L’enjeu n’est pas le mot exact sur un compte rendu, mais la qualité de la compréhension et des soutiens qui en découlent : aménagements, thérapie, groupes, bilans complémentaires, orientation médicale.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Cadre actuel",
          body: "Le syndrome d’Asperger n’est plus une catégorie séparée dans le DSM-5. Les profils concernés relèvent du TSA. Le diagnostic médical est posé par un médecin ; la psychologue y contribue.",
        },
        {
          type: "cta",
          href: "/comprendre/tsa",
          label: "Lire la page TSA",
          description:
            "Domaines cliniques, diagnostic, ADI-R, RAADS-R et orientations.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Voir les accompagnements",
          description:
            "Entretiens, bilans et modalités de suivi proposés au cabinet.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "APA — DSM-5 : Trouble du spectre de l’autisme",
      detail: "Intégration des anciens sous-types, dont le syndrome d’Asperger, dans le spectre",
    },
    {
      label: "HAS — Diagnostic et évaluation du TSA chez l’adulte",
      detail: "Recommandation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Repérage et diagnostic du TSA chez l’enfant et l’adolescent",
      detail: "Recommandation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l’autisme",
      detail: "Information institutionnelle et orientation",
      href: "https://maison.autisme.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trouble du spectre de l’autisme",
      description:
        "Vue d’ensemble du spectre, de l’évaluation et des outils.",
    },
    {
      href: "/comprendre/hpi",
      title: "Haut Potentiel Intellectuel",
      description:
        "Repères sur le HPI et les distinctions utiles avec d’autres profils.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Autres repères & accompagnements",
      description:
        "Stress, scolarité, famille, groupes et bilans.",
    },
  ],
};
