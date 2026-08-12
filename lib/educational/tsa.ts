import type { EducationalArticle } from "./types";

export const tsaArticle: EducationalArticle = {
  slug: "tsa",
  title: "Trouble du spectre de l’autisme (TSA)",
  eyebrow: "Repères pédagogiques",
  description:
    "Comprendre le trouble du spectre de l’autisme : domaines cliniques, sensorialité, parcours selon les âges, évaluation, outils et orientations — sans se substituer à une démarche diagnostique.",
  metaTitle:
    "Trouble du spectre de l’autisme (TSA) : comprendre, repérer, évaluer | Claire Jalabert",
  metaDescription:
    "Dossier pédagogique sur le TSA : domaines, sensorialité, enfant, adolescence, adulte, femmes et camouflage, causes, diagnostic, ADI-R, RAADS-R. Contenu informatif, non diagnostique.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-1",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "domaines", label: "Les domaines cliniques" },
    { id: "sensorialite", label: "Sensorialité" },
    { id: "enfant", label: "Chez l’enfant" },
    { id: "adolescence", label: "À l’adolescence" },
    { id: "adulte", label: "Chez l’adulte" },
    { id: "femmes-camouflage", label: "Femmes et camouflage" },
    { id: "causes", label: "Ce que l’on sait des causes" },
    { id: "diagnostic", label: "Diagnostic et évaluation" },
    { id: "adi-r", label: "L’ADI-R" },
    { id: "raads-r", label: "Le RAADS-R" },
    { id: "associations", label: "TSA et autres profils" },
    { id: "quand-consulter", label: "Quand consulter ?" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Le trouble du spectre de l’autisme (TSA) désigne un ensemble de particularités du développement et du fonctionnement qui touchent, de manière durable, la communication sociale et la présence de comportements, d’intérêts ou d’activités restreints et répétitifs. On parle de « spectre » parce que l’intensité, la forme et le retentissement de ces particularités varient beaucoup d’une personne à l’autre.",
        },
        {
          type: "p",
          text: "Une personne autiste — ou une personne avec un TSA — peut présenter un profil très différent d’une autre : certaines ont besoin d’un accompagnement quotidien important ; d’autres construisent une vie professionnelle, familiale et sociale riche, tout en rencontrant des difficultés spécifiques dans certains contextes. Le langage clinique actuel insiste sur cette diversité, plutôt que sur une image unique et figée.",
        },
        {
          type: "p",
          text: "Cette page vise à offrir des repères pédagogiques clairs et nuancés. Elle ne permet pas de se diagnostiquer soi-même, ni de diagnostiquer un proche. Un diagnostic de TSA est posé par un médecin, dans le cadre d’une évaluation pluriprofessionnelle. La psychologue clinicienne peut y contribuer par l’écoute clinique, l’anamnèse et certains outils structurés, sans se substituer à l’acte médical.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenu informatif, non diagnostique",
          body: "Les informations présentées ici ont une vocation pédagogique. Elles ne remplacent pas un entretien clinique, ni une évaluation médicale. En cas de questionnement durable, l’orientation vers un professionnel formé reste la démarche appropriée.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "À retenir",
          body: "Le TSA est un spectre : les profils sont hétérogènes. Comprendre les domaines concernés aide à mieux orienter une demande, sans conclure seul à un diagnostic.",
        },
      ],
    },
    {
      id: "domaines",
      title: "Les domaines cliniques",
      blocks: [
        {
          type: "p",
          text: "Dans les classifications actuelles (notamment le DSM-5), le trouble du spectre de l’autisme s’organise autour de deux grands domaines. Le premier concerne les particularités de la communication sociale et des interactions. Le second concerne les comportements, intérêts ou activités restreints et répétitifs. Ces domaines se combinent de façons très diverses selon les personnes et les âges de la vie.",
        },
        {
          type: "h3",
          text: "Communication sociale et interactions",
        },
        {
          type: "p",
          text: "Il peut s’agir, par exemple, de difficultés à initier ou à maintenir des échanges réciproques, à saisir certaines conventions implicites, à ajuster le regard, le geste ou le ton selon le contexte, ou encore à partager spontanément des intérêts et des émotions. Ces particularités ne signifient pas une absence d’intérêt pour les autres : beaucoup de personnes avec un TSA souhaitent des relations, mais peinent parfois à en comprendre les codes non écrits.",
        },
        {
          type: "p",
          text: "Le langage oral peut être fluide, voire très développé, ou au contraire limité. Ce n’est pas le volume de parole qui définit le TSA, mais la manière dont la communication sociale s’organise dans la réciprocité, le contexte et le partage d’attention.",
        },
        {
          type: "h3",
          text: "Comportements, intérêts et activités restreints et répétitifs",
        },
        {
          type: "p",
          text: "Ce domaine regroupe des mouvements répétitifs, des rituels, un besoin marqué de prévisibilité, des intérêts très focalisés, ou encore une sensibilité sensorielle particulière. Ces éléments peuvent être sources de plaisir, de compétence et de stabilité — et, dans certains contextes, sources de fatigue ou de conflit avec l’environnement.",
        },
        {
          type: "ul",
          items: [
            "Particularités de la communication sociale et de la réciprocité",
            "Intérêts focalisés, routines ou rituels",
            "Mouvements ou verbalisations répétitives",
            "Sensibilités sensorielles (hyper- ou hyposensibilités)",
            "Besoin de prévisibilité face aux changements",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Deux domaines, une grande diversité",
          body: "Ce n’est pas la présence d’un seul signe qui compte, mais un ensemble durable de particularités dans ces domaines, avec un retentissement dans la vie quotidienne, scolaire, professionnelle ou relationnelle.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialité",
      blocks: [
        {
          type: "p",
          text: "La sensorialité occupe une place importante dans le vécu de nombreuses personnes autistes. Sons, lumières, textures, odeurs, contacts physiques, température ou sensations corporelles internes peuvent être perçus de façon plus intense, plus diffuse, ou au contraire plus atténuée que pour d’autres. Ces particularités ne sont pas « dans la tête » au sens d’une invention : elles relèvent de traitements sensoriels différents.",
        },
        {
          type: "p",
          text: "Une hypersensibilité au bruit dans un open space, une aversion pour certaines textures alimentaires, un besoin de mouvement pour se réguler, ou une recherche de pression profonde peuvent tous faire partie d’un même tableau sensoriel. La personne avec un TSA apprend souvent, seule ou avec de l’aide, des stratégies pour s’adapter — parfois au prix d’une fatigue importante.",
        },
        {
          type: "p",
          text: "Reconnaître la dimension sensorielle permet d’éviter des interprétations uniquement comportementales (« il fait exprès », « elle exagère »). Aménager l’environnement, prévoir des pauses, identifier les seuils de saturation sont souvent des leviers concrets, bien avant toute discussion de label.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialité et quotidien",
          body: "Les particularités sensorielles font partie intégrante du spectre pour de nombreuses personnes. Les nommer aide à ajuster le cadre, plutôt qu’à forcer l’adaptation unilatérale.",
        },
      ],
    },
    {
      id: "enfant",
      title: "Chez l’enfant",
      blocks: [
        {
          type: "p",
          text: "Chez l’enfant, les questionnements peuvent émerger tôt — parfois dès les premières années — ou plus tard, lorsque les exigences sociales et scolaires se complexifient. Les parents, l’école ou un professionnel de santé peuvent remarquer un développement atypique du langage, du jeu symbolique, du partage d’attention, ou une réaction inhabituelle aux changements et aux stimulations sensorielles.",
        },
        {
          type: "p",
          text: "Tous les enfants qui présentent des difficultés relationnelles, un intérêt focalisé ou une sensibilité sensorielle n’ont pas un TSA. D’autres explications existent : retard de langage, trouble anxieux, TDAH, difficultés d’apprentissage, contexte familial stressant, etc. C’est précisément pourquoi une évaluation prudente, pluriprofessionnelle et contextualisée est nécessaire.",
        },
        {
          type: "p",
          text: "Un accompagnement précoce, lorsqu’il est indiqué, ne vise pas à « normaliser » l’enfant, mais à soutenir son développement, sa communication, son bien-être et l’ajustement de son environnement (famille, école, loisirs). Les recommandations françaises insistent sur le repérage, l’orientation et des interventions adaptées aux besoins individuels.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Questionnement chez l’enfant",
          body: "Si des particularités durables inquiètent durablement, un échange avec le médecin traitant ou un pédiatre, puis une orientation vers un dispositif spécialisé ou un professionnel formé, est la démarche recommandée. La psychologue peut contribuer à l’évaluation et à l’accompagnement.",
        },
      ],
    },
    {
      id: "adolescence",
      title: "À l’adolescence",
      blocks: [
        {
          type: "p",
          text: "L’adolescence intensifie souvent les enjeux sociaux, scolaires et identitaires. Pour une personne autiste, cette période peut révéler des difficultés jusqu’alors compensées : fatigue liée au camouflage, isolement, anxiété, harcèlement, décrochage, ou au contraire une affirmation plus claire de ses besoins et de ses intérêts.",
        },
        {
          type: "p",
          text: "Certains adolescents avec un TSA découvrent alors des communautés, des passions ou des modalités d’apprentissage qui leur conviennent mieux. D’autres traversent une période de mal-être important. L’entourage peut être déconcerté par un écart entre des compétences intellectuelles solides et une souffrance relationnelle ou sensorielle peu visible.",
        },
        {
          type: "p",
          text: "L’accompagnement à cet âge articule souvent écoute clinique, aménagements scolaires éventuels, travail sur l’estime de soi, et respect du rythme de la personne. Le diagnostic, lorsqu’il est pertinent, peut offrir un cadre de compréhension — sans devenir une identité imposée.",
        },
      ],
    },
    {
      id: "adulte",
      title: "Chez l’adulte",
      blocks: [
        {
          type: "p",
          text: "De nombreux adultes découvrent tardivement la possibilité d’un TSA, parfois après des années de questionnements, de burn-out, de difficultés relationnelles répétées ou d’un diagnostic chez un enfant. Le vécu d’une personne avec un TSA à l’âge adulte est très variable : emploi stable ou discontinu, vie de couple, parentalité, isolement, réussite professionnelle dans un domaine spécialisé, épuisement chronique.",
        },
        {
          type: "p",
          text: "Les recommandations françaises concernant l’adulte soulignent l’importance d’une évaluation clinique attentive, d’une anamnèse développementale et d’une prise en compte du retentissement fonctionnel. L’objectif n’est pas de coller une étiquette, mais de mieux comprendre un fonctionnement et d’ouvrir des pistes d’aménagement et de soin.",
        },
        {
          type: "p",
          text: "Un diagnostic tardif peut être vécu comme un soulagement, une remise en question, ou un mélange des deux. Il mérite d’être accueilli avec prudence, sans idéalisation ni dramatisation. L’accompagnement psychologique peut aider à intégrer cette information dans une histoire personnelle déjà riche.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Adulte et spectre",
          body: "Un questionnement à l’âge adulte est fréquent. Il appelle une évaluation soigneuse, pas une conclusion rapide à partir d’un questionnaire en ligne.",
        },
      ],
    },
    {
      id: "femmes-camouflage",
      title: "Femmes et camouflage",
      blocks: [
        {
          type: "p",
          text: "Historiquement, les descriptions cliniques de l’autisme se sont surtout appuyées sur des observations d’enfants et d’adolescents masculins. Or de nombreuses femmes — et plus largement de nombreuses personnes socialisées à masquer leurs difficultés — présentent des profils moins immédiatement repérables. On parle souvent de camouflage ou de masking : efforts conscients ou automatiques pour imiter les codes sociaux, préparer les conversations, freiner des mouvements régulateurs, ou dissimuler la fatigue sensorielle.",
        },
        {
          type: "p",
          text: "Ce camouflage peut permettre une insertion apparente, au prix d’une charge mentale et émotionnelle élevée. Il contribue parfois à des diagnostics tardifs, à des confusions avec l’anxiété, la dépression, les troubles alimentaires ou la personnalité, et à une invalidation du vécu (« vous n’avez pas l’air autiste »).",
        },
        {
          type: "p",
          text: "Reconnaître ces mécanismes n’équivaut pas à diagnostiquer. Cela invite simplement les cliniciens et l’entourage à ne pas se fier uniquement à une apparence sociale fluide, et à explorer l’histoire développementale, la sensorialité, les intérêts et le coût d’adaptation.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idée reçue",
          body: "« Si quelqu’un a des amis, un emploi et sourit en société, ce n’est pas de l’autisme. » Faux : le camouflage et la diversité des profils rendent certains TSA peu visibles, surtout chez les femmes et les personnes très adaptées en surface.",
        },
      ],
    },
    {
      id: "causes",
      title: "Ce que l’on sait des causes",
      blocks: [
        {
          type: "p",
          text: "Les recherches actuelles convergent vers une origine multifactorielle, largement neurodéveloppementale, avec une contribution génétique importante et des interactions complexes au cours du développement. Il n’existe pas une cause unique, ni un facteur environnemental simple qui « produirait » l’autisme à lui seul.",
        },
        {
          type: "p",
          text: "Il est essentiel de rappeler ce que la science n’étaye pas. Les vaccins ne causent pas l’autisme : cette affirmation a été largement invalidée. De même, les écrans ou un style parental ne « provoquent » pas un TSA. Des contenus sensationnalistes circulent encore ; s’appuyer sur des sources institutionnelles (OMS, Inserm, HAS) permet d’éviter des culpabilisations injustifiées.",
        },
        {
          type: "p",
          text: "Comprendre les causes, dans l’état actuel des connaissances, aide surtout à déplacer le regard : du blâme vers le soutien, de la recherche d’un coupable vers l’ajustement des besoins et des environnements.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Mythes à écarter",
          body: "Ni les vaccins, ni les écrans, ni « la façon d’élever un enfant » ne causent l’autisme. Ces idées sont contredites par les données scientifiques et peuvent blesser inutilement les familles.",
        },
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnostic et évaluation",
      blocks: [
        {
          type: "p",
          text: "En France, le diagnostic de TSA est un acte médical. Il s’appuie sur une évaluation clinique approfondie, une anamnèse du développement, et souvent sur des outils standardisés et l’avis de plusieurs professionnels (médecin, psychologue, orthophoniste, etc.). La Haute Autorité de Santé (HAS) a publié des recommandations pour le repérage, le diagnostic et l’accompagnement, y compris chez l’adulte.",
        },
        {
          type: "p",
          text: "La psychologue clinicienne contribue à cette démarche : elle écoute, explore l’histoire, peut administrer certains outils, et participe à la compréhension du fonctionnement. Elle ne pose pas seule le diagnostic médical de TSA. Cette distinction protège la personne d’une conclusion trop rapide et clarifie les rôles.",
        },
        {
          type: "p",
          text: "Avant toute conclusion, il convient d’envisager les diagnostics différentiels et les éventuelles comorbidités (anxiété, dépression, TDAH, troubles des apprentissages, etc.). Un questionnaire isolé, rempli en ligne, ne suffit jamais.",
        },
        {
          type: "ol",
          items: [
            "Écoute de la demande et du retentissement dans la vie quotidienne",
            "Anamnèse développementale et recueil d’informations contextuelles",
            "Évaluation clinique pluriprofessionnelle lorsque cela est indiqué",
            "Synthèse médicale et orientation vers un accompagnement adapté",
          ],
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Rôles complémentaires",
          body: "Le diagnostic médical de TSA est posé par un médecin. La psychologue clinicienne peut contribuer à l’évaluation et à l’accompagnement, sans se substituer à cet acte.",
        },
      ],
    },
    {
      id: "adi-r",
      title: "L’ADI-R",
      blocks: [
        {
          type: "p",
          text: "L’ADI-R (Autism Diagnostic Interview – Revised) est un entretien clinique structuré, mené le plus souvent avec un parent ou un proche ayant connu la personne dans l’enfance. Il explore l’histoire développementale, les interactions sociales, la communication et certains comportements.",
        },
        {
          type: "p",
          text: "Dans une démarche diagnostique TSA, l’ADI-R peut contribuer à éclairer le parcours et le fonctionnement. Il ne « diagnostique » pas à lui seul. Son intérêt réside dans la richesse de l’anamnèse et dans la structuration du recueil d’informations, au sein d’une évaluation plus large.",
        },
        {
          type: "p",
          text: "Au cabinet, lorsqu’une démarche diagnostique TSA est envisagée, cet outil peut s’inscrire dans un travail clinique soigneux, en lien avec les autres éléments du dossier et, le cas échéant, avec le médecin en charge du diagnostic.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "ADI-R : contribution, pas verdict",
          body: "L’ADI-R peut contribuer à une démarche diagnostique TSA. Il ne pose pas le diagnostic à lui seul et s’interprète dans un ensemble clinique et médical.",
        },
      ],
    },
    {
      id: "raads-r",
      title: "Le RAADS-R",
      blocks: [
        {
          type: "p",
          text: "Le RAADS-R (Ritvo Autism Asperger Diagnostic Scale – Revised) est un questionnaire d’autoévaluation destiné principalement aux adultes. Il a fait l’objet de travaux de validation (notamment Ritvo et al., 2011) et peut servir d’outil de dépistage ou d’aide au questionnement clinique.",
        },
        {
          type: "p",
          text: "Il ne constitue pas un diagnostic. Un score élevé n’affirme pas un TSA ; un score bas ne l’exclut pas. Des études en consultation externe (notamment des travaux néerlandais) ont souligné des limitations : sensibilité et spécificité variables selon les populations, risque de faux positifs ou de faux négatifs, nécessité d’une interprétation clinique.",
        },
        {
          type: "p",
          text: "Utilisé avec prudence, le RAADS-R peut ouvrir une conversation. Utilisé comme verdict, il induit en erreur. Toute conclusion durable relève d’une évaluation professionnelle complète.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "RAADS-R : dépistage, pas diagnostic",
          body: "Le RAADS-R n’établit pas un diagnostic de TSA. Il peut éclairer un questionnement, sous réserve de ses limites de validation et d’une lecture clinique.",
        },
      ],
    },
    {
      id: "associations",
      title: "TSA et autres profils",
      blocks: [
        {
          type: "p",
          text: "Une même personne peut présenter un TSA et d’autres particularités ou troubles associés. Cela n’implique pas une causalité automatique : les profils se combinent de manières très diverses, et chaque combinaison appelle une lecture clinique attentive.",
        },
        {
          type: "p",
          text: "Parmi les associations fréquemment discutées dans la littérature et la pratique clinique, on retrouve notamment le TDAH, certains troubles anxieux, des troubles des apprentissages, des troubles du sommeil, ainsi que des particularités sensorielles marquées. Ces dimensions peuvent amplifier la fatigue, compliquer la scolarité ou le travail, ou masquer temporairement d’autres aspects du fonctionnement.",
        },
        {
          type: "ul",
          items: [
            "TDAH — attention, impulsivité, organisation selon les profils",
            "Troubles anxieux — anxiété sociale, anticipation, épuisement",
            "Troubles des apprentissages — lecture, écriture, calcul, langage",
            "Troubles du sommeil — endormissement, réveils, rythme",
            "Particularités sensorielles — hypersensibilité, hyposensibilité, surcharge",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "À retenir",
          body: "Repérer plusieurs dimensions chez une même personne n’autorise pas à tout ramener à une seule étiquette. L’évaluation vise à comprendre le fonctionnement global et les besoins, sans forcer des liens de cause à effet.",
        },
        {
          type: "cta",
          href: "/comprendre/autres-reperes",
          label: "Autres repères & accompagnements",
          description:
            "TDAH, sensorialité, stress, scolarité et autres thématiques abordées au cabinet.",
        },
      ],
    },
    {
      id: "quand-consulter",
      title: "Quand consulter ?",
      blocks: [
        {
          type: "p",
          text: "Consulter peut être pertinent lorsque des particularités durables de la communication sociale, des intérêts, des routines ou de la sensorialité entraînent une souffrance, un épuisement, des difficultés scolaires ou professionnelles, ou des tensions familiales. Le doute lui-même, lorsqu’il occupe durablement l’esprit, mérite parfois d’être déposé dans un cadre clinique.",
        },
        {
          type: "p",
          text: "On ne consulte pas pour « obtenir un label à tout prix », mais pour mieux comprendre un fonctionnement et identifier ce qui pourrait aider. Parfois, l’évaluation oriente vers un TSA ; parfois vers autre chose ; parfois vers un accompagnement sans diagnostic formel immédiat. Chaque trajectoire reste singulière.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Envisager un entretien",
          body: "Si vous vous reconnaissez — ou reconnaissez un proche — dans plusieurs de ces repères, avec un retentissement réel, un premier entretien clinique peut clarifier la suite : écoute, éventuels bilans, orientation médicale si besoin.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Voir les bilans et évaluations",
          description:
            "Présentation des bilans proposés au cabinet, dont la démarche ADI-R dans un cadre clinique.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contacter le secrétariat",
          description:
            "Pour une question sur les modalités ou pour prendre rendez-vous.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — Trouble du spectre de l’autisme : signes d’alerte, repérage, diagnostic et évaluation chez l’enfant et l’adolescent",
      detail: "Recommandation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Trouble du spectre de l’autisme : diagnostic et évaluation chez l’adulte",
      detail: "Recommandation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Interventions et parcours de vie dans le trouble du spectre de l’autisme",
      detail: "Actualisation des recommandations, 2026",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l’autisme",
      detail: "Information et orientation",
      href: "https://maisondelautisme.gouv.fr",
    },
    {
      label: "Inserm — Canal Detox : les écrans ne provoquent pas l’autisme",
      detail: "Décryptage scientifique",
      href: "https://www.inserm.fr",
    },
    {
      label: "OMS — Vaccins et autisme",
      detail: "Position scientifique : absence de lien causal",
      href: "https://www.who.int",
    },
    {
      label: "Ritvo et al. — The Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R)",
      detail: "Journal of Autism and Developmental Disorders, 2011 (PubMed)",
      href: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      label: "Études néerlandaises en consultation externe — limites du RAADS-R",
      detail: "Sensibilité/spécificité variables selon les populations ; interprétation clinique nécessaire",
    },
    {
      label: "APA — DSM-5 : Trouble du spectre de l’autisme",
      detail: "Critères diagnostiques de référence internationale",
    },
  ],
  related: [
    {
      href: "/comprendre/asperger",
      title: "Syndrome d’Asperger",
      description:
        "Ce que désigne encore ce terme et comment il s’inscrit dans le spectre de l’autisme.",
    },
    {
      href: "/comprendre/hpi",
      title: "Haut Potentiel Intellectuel",
      description:
        "Repères sur le HPI, les tests et les liens éventuels avec d’autres fonctionnements.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Autres repères & accompagnements",
      description:
        "TDAH, sensorialité, stress, scolarité, famille et bilans.",
    },
  ],
};
