import type { EducationalArticle } from "./types";

export const autresReperesArticle: EducationalArticle = {
  slug: "autres-reperes",
  title: "Autres repères & accompagnements",
  eyebrow: "Au-delà des labels",
  description:
    "Repères pédagogiques sur le TDAH, la sensorialité, le stress, les problématiques scolaires, la famille, l’approche transgénérationnelle, les groupes de parole et les bilans — pour situer une demande d’accompagnement.",
  metaTitle:
    "Autres repères et accompagnements | Claire Jalabert",
  metaDescription:
    "TDAH, sensorialité, stress, scolarité, famille, transgénérationnel, groupes et bilans : repères pour éclairer une demande, sans se substituer à une évaluation clinique.",
  updatedAt: "2026-08-14",
  atmosphere: "phase-4",
  toc: [
    { id: "tdah", label: "TDAH" },
    { id: "sensorialite", label: "Sensorialité" },
    { id: "stress", label: "Stress et épuisement" },
    { id: "scolaires", label: "Problématiques scolaires" },
    { id: "famille", label: "Famille et couple" },
    { id: "transgenerationnel", label: "Transgénérationnel" },
    { id: "groupes", label: "Groupes de parole" },
    { id: "bilans", label: "Bilans" },
  ],
  sections: [
    {
      id: "tdah",
      title: "TDAH",
      blocks: [
        {
          type: "p",
          text: "Le trouble du déficit de l’attention avec ou sans hyperactivité (TDAH) est un trouble neurodéveloppemental qui peut se manifester par des difficultés attentionnelles durables, une impulsivité, une agitation motrice ou mentale, et un retentissement dans plusieurs contextes (école, travail, relations, organisation du quotidien).",
        },
        {
          type: "p",
          text: "Comme pour d’autres fonctionnements, le TDAH ne se diagnostique pas à partir d’une impression isolée ou d’un questionnaire en ligne. L’évaluation implique une anamnèse, des observations croisées et, selon les cas, des outils attentionnels, dans un cadre professionnel. Le diagnostic médical relève du médecin ; la psychologue peut contribuer à l’évaluation et à l’accompagnement.",
        },
        {
          type: "p",
          text: "Le TDAH peut coexister avec un haut potentiel, un TSA, une anxiété ou des troubles des apprentissages. Ces associations rendent d’autant plus importante une lecture différentielle prudente. Voir aussi les pages HPI (/comprendre/hpi#hpi-tdah) et TSA (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Pas d’auto-diagnostic",
          body: "Des difficultés d’attention ou d’organisation ont de nombreuses causes possibles. Seule une évaluation professionnelle permet de les situer correctement.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "À retenir",
          body: "Le TDAH est un fonctionnement neurodéveloppemental possible parmi d’autres. Il mérite une évaluation soigneuse lorsqu’il retentit durablement sur la vie quotidienne.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialité",
      blocks: [
        {
          type: "p",
          text: "La sensorialité désigne la manière dont une personne reçoit, filtre et réagit aux stimulations des sens : ouïe, vue, toucher, odorat, goût, mais aussi sens du mouvement et sensations corporelles internes. Des hyper- ou hyposensibilités peuvent exister en dehors de tout TSA, même si elles sont fréquentes chez les personnes autistes.",
        },
        {
          type: "p",
          text: "Dans le quotidien, une saturation sensorielle peut ressembler à de l’irritabilité, de l’évitement, de l’agitation ou un besoin urgent de solitude. Comprendre cette dimension évite de moraliser (« trop susceptible ») et ouvre des aménagements : casque, pauses, choix des textures, régulation de la lumière, anticipation des lieux bruyants.",
        },
        {
          type: "p",
          text: "Lorsqu’un questionnement sensoriel s’associe à des particularités de communication sociale ou d’intérêts, une exploration plus large du spectre peut être pertinente — sans conclusion automatique. La section « Sensorialité » de la page TSA (/comprendre/tsa#sensorialite) développe ce point dans le cadre de l’autisme.",
        },
        {
          type: "p",
          text: "Dans le quotidien, les efforts nécessaires pour s’adapter à l’environnement et aux codes attendus peuvent être particulièrement coûteux. Chez certaines personnes, cela s’accompagne d’une grande fatigabilité et d’une « batterie sociale » qui peut se réduire rapidement, augmentant la vulnérabilité lorsque les capacités d’adaptation sont épuisées.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialité et confort",
          body: "Nommer les seuils sensoriels aide souvent plus vite que de forcer l’adaptation. L’environnement peut être un levier majeur de soulagement.",
        },
      ],
    },
    {
      id: "stress",
      title: "Stress et épuisement",
      blocks: [
        {
          type: "p",
          text: "Le stress prolongé, l’anxiété et l’épuisement figurent parmi les motifs fréquents de consultation. Ils peuvent être liés au travail, aux études, à la famille, à un fonctionnement neurodéveloppemental peu reconnu, à un camouflage social coûteux, ou à une accumulation de micro-contraintes.",
        },
        {
          type: "p",
          text: "L’accompagnement ne se limite pas à « gérer le stress » comme une technique isolée. Il s’agit souvent de comprendre ce qui surcharge le système : exigences excessives, manque de récupération, conflits de valeurs, hyperadaptation, perfectionnisme, environnement sensoriel hostile.",
        },
        {
          type: "p",
          text: "Chez certaines personnes avec un TSA ou un haut potentiel, l’épuisement survient après des années d’adaptation invisible. Chez d’autres, il s’inscrit dans une crise de couple, une parentalité intense ou un contexte professionnel délétère. La clinique part du vécu, non d’une étiquette préalable.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Quand le stress devient envahissant",
          body: "Troubles du sommeil durables, perte d’élan, irritabilité croissante, isolement ou idées de dévalorisation méritent un espace d’écoute professionnelle.",
        },
      ],
    },
    {
      id: "scolaires",
      title: "Problématiques scolaires",
      blocks: [
        {
          type: "p",
          text: "Les difficultés scolaires recouvrent des réalités très diverses : apprentissages, attention, anxiété de performance, harcèlement, phobie scolaire, ennui, décrochage, conflits avec l’institution, ou besoins éducatifs particuliers (dont ceux liés au haut potentiel).",
        },
        {
          type: "p",
          text: "Le cabinet peut proposer un accompagnement de l’enfant ou de l’adolescent, un travail avec les parents, et, lorsque cela est pertinent, une médiation scolaire. L’objectif n’est pas de « faire rentrer » l’élève dans un moule, mais de comprendre le frein et d’ouvrir des aménagements réalistes.",
        },
        {
          type: "p",
          text: "Un bilan cognitif ou attentionnel peut éclairer certaines situations ; il n’est pas systématique. Parfois, l’enjeu est relationnel ou émotionnel davantage que psychométrique. Les ressources Eduscol et le cadre du code de l’éducation fournissent des points d’appui côté école ; la clinique apporte l’écoute du sujet.",
        },
        {
          type: "p",
          text: "Le travail peut d’abord être métacognitif : comprendre comment la personne réfléchit, comment elle apprend et quelles stratégies elle mobilise. Il s’agit d’identifier les difficultés ou biais rencontrés, leur manifestation dans le quotidien et les solutions déjà mises en place spontanément. Certaines stratégies peuvent être efficaces mais très coûteuses, entraînant une fatigue importante, des résultats irréguliers ou un évitement de certaines disciplines. Cette compréhension permet ensuite de rechercher des méthodes de remédiation plus adaptées, dans les apprentissages comme dans le quotidien.",
        },
        {
          type: "p",
          text: "Travail autour de la reprise de confiance en soi et de l’estime de soi.",
        },
        {
          type: "ul",
          items: [
            "Écoute de l’élève et de sa souffrance éventuelle",
            "Travail avec la famille sur le climat autour de l’école",
            "Médiation scolaire lorsque le lien établissement–famille est tendu",
            "Bilan si un questionnement cognitif ou attentionnel se justifie",
          ],
        },
      ],
    },
    {
      id: "famille",
      title: "Famille et couple",
      blocks: [
        {
          type: "p",
          text: "Les relations familiales et conjugales sont au cœur de nombreuses demandes. Conflits éducatifs, malentendus répétés, épuisement parental, crises de couple, difficultés autour d’un enfant atypique : autant de situations où un espace tiers peut aider à démêler les positions et à rétablir une communication plus vivable.",
        },
        {
          type: "p",
          text: "La thérapie de couple et l’accompagnement familial ne cherchent pas un coupable. Ils explorent les interactions, les attentes implicites, les blessures et les ressources. Comprendre les mécanismes, les besoins et les enjeux associés à un trouble neurodéveloppemental, ainsi que les dynamiques relationnelles qu’il peut entraîner, sans pour autant tout essentialiser à ce fonctionnement.",
        },
        {
          type: "p",
          text: "Chaque membre de la famille a besoin d’être entendu. L’enfant n’est pas « le problème » ; le symptôme familial est souvent partagé, même si la souffrance se concentre sur l’un des membres.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Un espace pour le lien",
          body: "Couple et famille bénéficient souvent d’un cadre contenant où l’on peut parler autrement, sans jugement précipité.",
        },
      ],
    },
    {
      id: "transgenerationnel",
      title: "Approche transgénérationnelle",
      blocks: [
        {
          type: "p",
          text: "L’approche transgénérationnelle s’intéresse à ce qui se transmet — consciemment ou non — d’une génération à l’autre : récits, silences, loyautés, traumatismes, places assignées, secrets, modèles relationnels. Elle ne « blâme » pas les aïeux ; elle cherche à comprendre comment une histoire familiale informe le présent.",
        },
        {
          type: "p",
          text: "Dans certaines consultations, des schémas se répètent : anxiété scolaire d’une génération à l’autre, difficulté à se séparer, place de « l’enfant parentifié », ou silence autour d’un vécu douloureux. Mettre des mots sur ces fils peut desserrer des nœuds identitaires.",
        },
        {
          type: "p",
          text: "Cette approche s’articule avec l’écoute individuelle. Elle n’est ni une fatalité (« c’est génétique donc inutile ») ni une explication totale. C’est un éclairage parmi d’autres, utile lorsque le présent semble porter plus que la seule situation actuelle.",
        },
      ],
    },
    {
      id: "groupes",
      title: "Groupes de parole",
      blocks: [
        {
          type: "p",
          text: "Les groupes de parole offrent un espace collectif, cadré par un professionnel, où partager un vécu, entendre celui d’autres personnes et réduire l’isolement. Ils ne remplacent pas un suivi individuel, mais peuvent le compléter utilement.",
        },
        {
          type: "p",
          text: "Selon les thématiques (parentalité, haut potentiel, spectre de l’autisme, stress, etc.), le groupe permet de découvrir que certaines difficultés ne sont pas vécues seul·e.",
        },
        {
          type: "p",
          text: "Le groupe peut également soutenir l’estime de soi, redonner une légitimité à ce qui est vécu et permettre à chacun de retrouver davantage de souveraineté dans ses choix. Il offre aussi la possibilité de partager les victoires, les trouvailles et les adaptations nouvelles qui ont permis de faire évoluer certaines situations.",
        },
        {
          type: "p",
          text: "La confidentialité, le respect et la non-injonction à se « raconter » sont des conditions essentielles.",
        },
        {
          type: "p",
          text: "La participation se décide après information sur le cadre, les objectifs et les modalités. Toute personne reste libre de son rythme de parole.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "S’informer sur les groupes",
          body: "Le secrétariat peut indiquer les groupes éventuels, leurs publics et les conditions d’inscription.",
        },
      ],
    },
    {
      id: "bilans",
      title: "Bilans",
      blocks: [
        {
          type: "p",
          text: "Les bilans et évaluations proposés au cabinet visent à mieux comprendre le fonctionnement cognitif, émotionnel, sensoriel ou relationnel de la personne. Ils éclairent l’accompagnement ; ils ne se réduisent pas à une étiquette.",
        },
        {
          type: "p",
          text: "Selon la demande, il peut s’agir d’un bilan psychométrique (fonctionnement intellectuel), attentionnel, projectif, ou d’une contribution à une démarche diagnostique TSA — notamment via un entretien structuré de type ADI-R, qui peut contribuer à l’évaluation sans poser à lui seul le diagnostic médical.",
        },
        {
          type: "p",
          text: "Le choix du bilan se construit avec la personne (et sa famille le cas échéant), après un temps d’écoute. Un bilan n’est pas toujours nécessaire pour commencer un accompagnement thérapeutique.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Cadre des bilans",
          body: "Les bilans informent et orientent. Le diagnostic médical de TSA, lorsqu’il est envisagé, reste posé par un médecin. La psychologue contribue à l’évaluation et à la restitution clinique.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Voir les bilans au cabinet",
          description:
            "Liste des bilans et évaluations proposés, avec leurs objectifs.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Découvrir les accompagnements",
          description:
            "Entretiens, thérapies, médiations, couple, famille et groupes.",
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
      label: "HAS — recommandations relatives au TSA",
      detail: "Repérage, diagnostic et interventions",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Eduscol — élèves à haut potentiel",
      detail: "Vademecum et ressources pédagogiques",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — L321-4",
      detail: "Prise en compte des élèves intellectuellement précoces",
      href: "https://www.legifrance.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trouble du spectre de l’autisme",
      description:
        "Spectre, domaines, évaluation et outils.",
    },
    {
      href: "/comprendre/asperger",
      title: "Syndrome d’Asperger",
      description:
        "Histoire du terme et place actuelle dans le TSA.",
    },
    {
      href: "/comprendre/hpi",
      title: "Haut Potentiel Intellectuel",
      description:
        "HPI, tests, HPIC et distinctions utiles.",
    },
  ],
};
