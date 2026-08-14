import type { EducationalArticle } from "../types";

export const tsaArticle: EducationalArticle = {
  slug: "tsa",
  title: "Disturbo dello spettro autistico (TEA)",
  eyebrow: "Riferimenti pedagogici",
  description:
    "Comprendere il disturbo dello spettro autistico: ambiti clinici, sensorialità, percorsi per età, valutazione, strumenti e orientamenti — senza sostituirsi a un percorso diagnostico.",
  metaTitle:
    "Disturbo dello spettro autistico (TEA): comprendere, individuare, valutare | Claire Jalabert",
  metaDescription:
    "Dossier pedagogico sul TEA: ambiti, sensorialità, infanzia, adolescenza, età adulta, donne e camouflage, cause, diagnosi, ADI-R, RAADS-R. Contenuto informativo, non diagnostico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-1",
  toc: [
    { id: "introduction", label: "Introduzione" },
    { id: "domaines", label: "Gli ambiti clinici" },
    { id: "sensorialite", label: "Sensorialità" },
    { id: "enfant", label: "Nell’infanzia" },
    { id: "adolescence", label: "Nell’adolescenza" },
    { id: "adulte", label: "Nell’età adulta" },
    { id: "femmes-camouflage", label: "Donne e camouflage" },
    { id: "causes", label: "Ciò che sappiamo sulle cause" },
    { id: "diagnostic", label: "Diagnosi e valutazione" },
    { id: "adi-r", label: "L’ADI-R" },
    { id: "raads-r", label: "Il RAADS-R" },
    { id: "associations", label: "TEA e altri profili" },
    { id: "quand-consulter", label: "Quando consultare?" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduzione",
      blocks: [
        {
          type: "p",
          text: "Il disturbo dello spettro autistico (TEA) designa un insieme di particolarità dello sviluppo e del funzionamento che interessano, in modo duraturo, la comunicazione sociale e la presenza di comportamenti, interessi o attività ristretti e ripetitivi. Si parla di «spettro» perché l’intensità, la forma e l’impatto di queste particolarità variano molto da una persona all’altra.",
        },
        {
          type: "p",
          text: "Una persona autistica — o una persona con un TEA — può presentare un profilo molto diverso da un’altra: alcune hanno bisogno di un accompagnamento quotidiano importante; altre costruiscono una vita professionale, familiare e sociale ricca, pur incontrando difficoltà specifiche in certi contesti. Il linguaggio clinico attuale insiste su questa diversità, piuttosto che su un’immagine unica e fissa.",
        },
        {
          type: "p",
          text: "Questa pagina mira a offrire riferimenti pedagogici chiari e sfumati. Non consente di autodiagnosticarsi, né di diagnosticare una persona cara. Una diagnosi di TEA è formulata da un medico, nell’ambito di una valutazione multiprofessionale. La psicologa clinica può contribuirvi attraverso l’ascolto clinico, l’anamnesi e alcuni strumenti strutturati, senza sostituirsi all’atto medico.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenuto informativo, non diagnostico",
          body: "Le informazioni presentate qui hanno una finalità pedagogica. Non sostituiscono un colloquio clinico, né una valutazione medica. In caso di interrogativo persistente, l’orientamento verso un professionista formato resta la scelta appropriata.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Da ricordare",
          body: "Il TEA è uno spettro: i profili sono eterogenei. Comprendere gli ambiti interessati aiuta a orientare meglio una richiesta, senza concludere da soli a una diagnosi.",
        },
      ],
    },
    {
      id: "domaines",
      title: "Gli ambiti clinici",
      blocks: [
        {
          type: "p",
          text: "Nelle classificazioni attuali (in particolare il DSM-5), il disturbo dello spettro autistico si organizza attorno a due grandi ambiti. Il primo riguarda le particolarità della comunicazione sociale e delle interazioni. Il secondo riguarda i comportamenti, gli interessi o le attività ristretti e ripetitivi. Questi ambiti si combinano in modi molto diversi a seconda delle persone e delle età della vita.",
        },
        {
          type: "h3",
          text: "Comunicazione sociale e interazioni",
        },
        {
          type: "p",
          text: "Può trattarsi, ad esempio, di difficoltà ad avviare o mantenere scambi reciproci, a cogliere certe convenzioni implicite, ad adattare lo sguardo, il gesto o il tono al contesto, o ancora a condividere spontaneamente interessi ed emozioni. Queste particolarità non significano assenza di interesse per gli altri: molte persone con un TEA desiderano relazioni, ma faticano talvolta a comprenderne le regole non scritte.",
        },
        {
          type: "p",
          text: "Il linguaggio orale può essere fluente, persino molto sviluppato, o al contrario limitato. Non è il volume del parlato a definire il TEA, ma il modo in cui la comunicazione sociale si organizza nella reciprocità, nel contesto e nella condivisione dell’attenzione.",
        },
        {
          type: "h3",
          text: "Comportamenti, interessi e attività ristretti e ripetitivi",
        },
        {
          type: "p",
          text: "Questo ambito comprende movimenti ripetitivi, rituali, un bisogno marcato di prevedibilità, interessi molto focalizzati, o ancora una sensibilità sensoriale particolare. Questi elementi possono essere fonte di piacere, competenza e stabilità — e, in certi contesti, fonte di fatica o conflitto con l’ambiente.",
        },
        {
          type: "ul",
          items: [
            "Particolarità della comunicazione sociale e della reciprocità",
            "Interessi focalizzati, routine o rituali",
            "Movimenti o verbalizzazioni ripetitive",
            "Sensibilità sensoriali (iper- o iposensibilità)",
            "Bisogno di prevedibilità di fronte ai cambiamenti",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Due ambiti, una grande diversità",
          body: "Non conta la presenza di un solo segno, ma un insieme duraturo di particolarità in questi ambiti, con un impatto nella vita quotidiana, scolastica, professionale o relazionale.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialità",
      blocks: [
        {
          type: "p",
          text: "La sensorialità occupa un posto importante nel vissuto di numerose persone autiste. Suoni, luci, texture, odori, contatti fisici, temperatura o sensazioni corporee interne possono essere percepiti in modo più intenso, più diffuso, o al contrario più attenuato che per altri. Queste particolarità non sono «nella testa» nel senso di un’invenzione: riguardano trattamenti sensoriali diversi.",
        },
        {
          type: "p",
          text: "Un’ipersensibilità al rumore in un open space, un’avversione per certe texture alimentari, un bisogno di movimento per autoregolarsi, o una ricerca di pressione profonda possono far parte dello stesso quadro sensoriale. La persona con un TEA impara spesso, da sola o con aiuto, strategie per adattarsi — talvolta a prezzo di una fatica importante.",
        },
        {
          type: "p",
          text: "Riconoscere la dimensione sensoriale permette di evitare interpretazioni unicamente comportamentali («lo fa apposta», «esagera»). Adattare l’ambiente, prevedere pause, identificare le soglie di saturazione sono spesso leve concrete, ben prima di qualsiasi discussione su un’etichetta.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialità e quotidiano",
          body: "Le particolarità sensoriali fanno parte integrante dello spettro per numerose persone. Nomarle aiuta ad adattare il contesto, piuttosto che forzare un adattamento unilaterale.",
        },
      ],
    },
    {
      id: "enfant",
      title: "Nell’infanzia",
      blocks: [
        {
          type: "p",
          text: "Nell’infanzia, gli interrogativi possono emergere presto — talvolta fin dalle prime anni — o più tardi, quando le esigenze sociali e scolastiche si complessificano. I genitori, la scuola o un professionista sanitario possono notare uno sviluppo atipico del linguaggio, del gioco simbolico, della condivisione dell’attenzione, o una reazione insolita ai cambiamenti e alle stimolazioni sensoriali.",
        },
        {
          type: "p",
          text: "Non tutti i bambini che presentano difficoltà relazionali, un interesse focalizzato o una sensibilità sensoriale hanno un TEA. Esistono altre spiegazioni: ritardo del linguaggio, disturbo ansioso, ADHD, difficoltà di apprendimento, contesto familiare stressante, ecc. È proprio per questo che serve una valutazione prudente, multiprofessionale e contestualizzata.",
        },
        {
          type: "p",
          text: "Un accompagnamento precoce, quando è indicato, non mira a «normalizzare» il bambino, ma a sostenere il suo sviluppo, la sua comunicazione, il suo benessere e l’adattamento del suo ambiente (famiglia, scuola, tempo libero). Le raccomandazioni francesi insistono sull’individuazione, sull’orientamento e su interventi adattati ai bisogni individuali.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Interrogativo nell’infanzia",
          body: "Se particolarità durature preoccupano in modo persistente, uno scambio con il medico di base o un pediatra, poi un orientamento verso una struttura specializzata o un professionista formato, è la scelta raccomandata. La psicologa può contribuire alla valutazione e all’accompagnamento.",
        },
      ],
    },
    {
      id: "adolescence",
      title: "Nell’adolescenza",
      blocks: [
        {
          type: "p",
          text: "L’adolescenza intensifica spesso le questioni sociali, scolastiche e identitarie. Per una persona autistica, questo periodo può rivelare difficoltà fino ad allora compensate: fatica legata al camouflage, isolamento, ansia, bullismo, abbandono scolastico, o al contrario un’affermazione più chiara dei propri bisogni e interessi.",
        },
        {
          type: "p",
          text: "Alcuni adolescenti con un TEA scoprono allora comunità, passioni o modalità di apprendimento che loro convengono meglio. Altri attraversano un periodo di malessere importante. L’entourage può essere disorientato da uno scarto tra competenze intellettuali solide e sofferenza relazionale o sensoriale poco visibile.",
        },
        {
          type: "p",
          text: "L’accompagnamento a quest’età articola spesso ascolto clinico, eventuali adattamenti scolastici, lavoro sull’autostima e rispetto del ritmo della persona. La diagnosi, quando è pertinente, può offrire un quadro di comprensione — senza diventare un’identità imposta.",
        },
      ],
    },
    {
      id: "adulte",
      title: "Nell’età adulta",
      blocks: [
        {
          type: "p",
          text: "Numerosi adulti scoprono tardivamente la possibilità di un TEA, talvolta dopo anni di interrogativi, burnout, difficoltà relazionali ripetute o una diagnosi in un figlio. Il vissuto di una persona con un TEA in età adulta è molto variabile: impiego stabile o discontinuo, vita di coppia, genitorialità, isolamento, successo professionale in un ambito specializzato, esaurimento cronico.",
        },
        {
          type: "p",
          text: "Le raccomandazioni francesi sull’età adulta sottolineano l’importanza di una valutazione clinica attenta, di un’anamnesi evolutiva e di una considerazione dell’impatto funzionale. L’obiettivo non è applicare un’etichetta, ma comprendere meglio un funzionamento e aprire piste di adattamento e di cura.",
        },
        {
          type: "p",
          text: "Una diagnosi tardiva può essere vissuta come un sollievo, una messa in discussione, o un misto dei due. Merita di essere accolta con prudenza, senza idealizzazione né drammatizzazione. L’accompagnamento psicologico può aiutare a integrare questa informazione in una storia personale già ricca.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Età adulta e spettro",
          body: "Un interrogativo in età adulta è frequente. Richiede una valutazione accurata, non una conclusione rapida basata su un questionario online.",
        },
      ],
    },
    {
      id: "femmes-camouflage",
      title: "Donne e camouflage",
      blocks: [
        {
          type: "p",
          text: "Storicamente, le descrizioni cliniche dell’autismo si sono basate soprattutto su osservazioni di bambini e adolescenti maschi. Orbene, numerose donne — e più in generale numerose persone socializzate a mascherare le proprie difficoltà — presentano profili meno immediatamente individuabili. Si parla spesso di camouflage o masking: sforzi consapevoli o automatici per imitare i codici sociali, preparare le conversazioni, frenare movimenti regolatori, o dissimulare la fatica sensoriale.",
        },
        {
          type: "p",
          text: "Questo camouflage può permettere un’integrazione apparente, a prezzo di un carico mentale ed emotivo elevato. Contribuisce talvolta a diagnosi tardive, a confusioni con ansia, depressione, disturbi alimentari o della personalità, e a un’invalidazione del vissuto («non sembri autistica»).",
        },
        {
          type: "p",
          text: "Riconoscere questi meccanismi non equivale a diagnosticare. Invita semplicemente i clinici e l’entourage a non basarsi unicamente su un’apparenza sociale fluida, e a esplorare la storia evolutiva, la sensorialità, gli interessi e il costo dell’adattamento.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idea preconcetta",
          body: "«Se qualcuno ha amici, un lavoro e sorride in società, non è autismo.» Falso: il camouflage e la diversità dei profili rendono certi TEA poco visibili, soprattutto nelle donne e nelle persone molto adattate in superficie.",
        },
      ],
    },
    {
      id: "causes",
      title: "Ciò che sappiamo sulle cause",
      blocks: [
        {
          type: "p",
          text: "Le ricerche attuali convergono verso un’origine multifattoriale, largamente neuroevolutiva, con un contributo genetico importante e interazioni complesse nel corso dello sviluppo. Non esiste una causa unica, né un fattore ambientale semplice che «produca» l’autismo da solo.",
        },
        {
          type: "p",
          text: "È essenziale ricordare ciò che la scienza non supporta. I vaccini non causano l’autismo: questa affermazione è stata ampiamente invalidata. Allo stesso modo, gli schermi o uno stile genitoriale non «provocano» un TEA. Contenuti sensazionalistici circolano ancora; basarsi su fonti istituzionali (OMS, Inserm, HAS) permette di evitare colpevolizzazioni ingiustificate.",
        },
        {
          type: "p",
          text: "Comprendere le cause, nello stato attuale delle conoscenze, aiuta soprattutto a spostare lo sguardo: dal biasimo al sostegno, dalla ricerca di un colpevole all’adattamento dei bisogni e degli ambienti.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Miti da scartare",
          body: "Né i vaccini, né gli schermi, né «il modo di educare un bambino» causano l’autismo. Queste idee sono contraddette dai dati scientifici e possono ferire inutilmente le famiglie.",
        },
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnosi e valutazione",
      blocks: [
        {
          type: "p",
          text: "In Francia, la diagnosi di TEA è un atto medico. Si basa su una valutazione clinica approfondita, un’anamnesi dello sviluppo, e spesso su strumenti standardizzati e il parere di più professionisti (medico, psicologo, logopedista, ecc.). La Haute Autorité de Santé (HAS) ha pubblicato raccomandazioni per l’individuazione, la diagnosi e l’accompagnamento, anche in età adulta.",
        },
        {
          type: "p",
          text: "La psicologa clinica contribuisce a questo percorso: ascolta, esplora la storia, può somministrare certi strumenti e partecipa alla comprensione del funzionamento. Non formula da sola la diagnosi medica di TEA. Questa distinzione protegge la persona da una conclusione troppo rapida e chiarisce i ruoli.",
        },
        {
          type: "p",
          text: "Prima di qualsiasi conclusione, conviene considerare le diagnosi differenziali e le eventuali comorbidità (ansia, depressione, ADHD, disturbi dell’apprendimento, ecc.). Un questionario isolato, compilato online, non basta mai.",
        },
        {
          type: "ol",
          items: [
            "Ascolto della richiesta e dell’impatto nella vita quotidiana",
            "Anamnesi evolutiva e raccolta di informazioni contestuali",
            "Valutazione clinica multiprofessionale quando è indicato",
            "Sintesi medica e orientamento verso un accompagnamento adatto",
          ],
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Ruoli complementari",
          body: "La diagnosi medica di TEA è formulata da un medico. La psicologa clinica può contribuire alla valutazione e all’accompagnamento, senza sostituirsi a questo atto.",
        },
      ],
    },
    {
      id: "adi-r",
      title: "L’ADI-R",
      blocks: [
        {
          type: "p",
          text: "L’ADI-R (Autism Diagnostic Interview – Revised) è un colloquio clinico strutturato, condotto più spesso con un genitore o una persona cara che ha conosciuto la persona nell’infanzia. Esplora la storia evolutiva, le interazioni sociali, la comunicazione e certi comportamenti.",
        },
        {
          type: "p",
          text: "In un percorso diagnostico TEA, l’ADI-R può contribuire a chiarire il percorso e il funzionamento. Non «diagnostica» da solo. Il suo interesse risiede nella ricchezza dell’anamnesi e nella strutturazione della raccolta di informazioni, nell’ambito di una valutazione più ampia.",
        },
        {
          type: "p",
          text: "In studio, quando si prevede un percorso diagnostico TEA, questo strumento può inserirsi in un lavoro clinico accurato, in collegamento con gli altri elementi del dossier e, se del caso, con il medico responsabile della diagnosi.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "ADI-R: contributo, non verdetto",
          body: "L’ADI-R può contribuire a un percorso diagnostico TEA. Non formula la diagnosi da solo e si interpreta nell’ambito di un insieme clinico e medico.",
        },
      ],
    },
    {
      id: "raads-r",
      title: "Il RAADS-R",
      blocks: [
        {
          type: "p",
          text: "Il RAADS-R (Ritvo Autism Asperger Diagnostic Scale – Revised) è un questionario di autovalutazione destinato principalmente agli adulti. Ha fatto oggetto di lavori di validazione (in particolare Ritvo et al., 2011) e può servire come strumento di screening o di supporto all’interrogativo clinico.",
        },
        {
          type: "p",
          text: "Non costituisce una diagnosi. Un punteggio elevato non afferma un TEA; un punteggio basso non lo esclude. Studi in consultazione esterna (in particolare lavori olandesi) hanno sottolineato limiti: sensibilità e specificità variabili a seconda delle popolazioni, rischio di falsi positivi o falsi negativi, necessità di un’interpretazione clinica.",
        },
        {
          type: "p",
          text: "Usato con prudenza, il RAADS-R può aprire una conversazione. Usato come verdetto, induce in errore. Ogni conclusione duratura spetta a una valutazione professionale completa.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "RAADS-R: screening, non diagnosi",
          body: "Il RAADS-R non stabilisce una diagnosi di TEA. Può chiarire un interrogativo, nel rispetto dei suoi limiti di validazione e di una lettura clinica.",
        },
      ],
    },
    {
      id: "associations",
      title: "TEA e altri profili",
      blocks: [
        {
          type: "p",
          text: "Una stessa persona può presentare un TEA e altre particolarità o disturbi associati. Ciò non implica una causalità automatica: i profili si combinano in modi molto diversi, e ogni combinazione richiede una lettura clinica attenta.",
        },
        {
          type: "p",
          text: "Tra le associazioni frequentemente discusse nella letteratura e nella pratica clinica, si ritrovano in particolare l’ADHD, certi disturbi ansiosi, disturbi dell’apprendimento, disturbi del sonno, nonché particolarità sensoriali marcate. Queste dimensioni possono amplificare la fatica, complicare la scolarità o il lavoro, o mascherare temporaneamente altri aspetti del funzionamento.",
        },
        {
          type: "ul",
          items: [
            "ADHD — attenzione, impulsività, organizzazione a seconda dei profili",
            "Disturbi ansiosi — ansia sociale, anticipazione, esaurimento",
            "Disturbi dell’apprendimento — lettura, scrittura, calcolo, linguaggio",
            "Disturbi del sonno — addormentamento, risvegli, ritmo",
            "Particolarità sensoriali — ipersensibilità, iposensibilità, sovraccarico",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Da ricordare",
          body: "Individuare più dimensioni in una stessa persona non autorizza a ricondurre tutto a un’unica etichetta. La valutazione mira a comprendere il funzionamento globale e i bisogni, senza forzare legami di causa ed effetto.",
        },
        {
          type: "cta",
          href: "/comprendre/autres-reperes",
          label: "Altri riferimenti e accompagnamenti",
          description:
            "ADHD, sensorialità, stress, scuola e altre tematiche affrontate in studio.",
        },
      ],
    },
    {
      id: "quand-consulter",
      title: "Quando consultare?",
      blocks: [
        {
          type: "p",
          text: "Consultare può essere pertinente quando particolarità durature della comunicazione sociale, degli interessi, delle routine o della sensorialità comportano sofferenza, esaurimento, difficoltà scolastiche o professionali, o tensioni familiari. Il dubbio stesso, quando occupa persistentemente la mente, merita talvolta di essere depositato in un contesto clinico.",
        },
        {
          type: "p",
          text: "Non si consulta per «ottenere un’etichetta a tutti i costi», ma per comprendere meglio un funzionamento e identificare ciò che potrebbe aiutare. Talvolta, la valutazione orienta verso un TEA; talvolta verso altro; talvolta verso un accompagnamento senza diagnosi formale immediata. Ogni percorso resta singolare.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Valutare un colloquio",
          body: "Se vi riconoscete — o riconoscete una persona cara — in diversi di questi riferimenti, con un impatto reale, un primo colloquio clinico può chiarire i passi successivi: ascolto, eventuali valutazioni, orientamento medico se necessario.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Vedere le valutazioni",
          description:
            "Presentazione delle valutazioni proposte in studio, incluso il percorso ADI-R in un contesto clinico.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contattare la segreteria",
          description:
            "Per una domanda sulle modalità o per prendere un appuntamento.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — Disturbo dello spettro autistico: segnali d’allarme, individuazione, diagnosi e valutazione nell’infanzia e nell’adolescenza",
      detail: "Raccomandazione, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Disturbo dello spettro autistico: diagnosi e valutazione in età adulta",
      detail: "Raccomandazione, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Interventi e percorsi di vita nel disturbo dello spettro autistico",
      detail: "Aggiornamento delle raccomandazioni, 2026",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l’autisme",
      detail: "Informazione e orientamento",
      href: "https://maisondelautisme.gouv.fr",
    },
    {
      label: "Inserm — Canal Detox: gli schermi non provocano l’autismo",
      detail: "Decifrazione scientifica",
      href: "https://www.inserm.fr",
    },
    {
      label: "OMS — Vaccini e autismo",
      detail: "Posizione scientifica: assenza di legame causale",
      href: "https://www.who.int",
    },
    {
      label: "Ritvo et al. — The Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R)",
      detail: "Journal of Autism and Developmental Disorders, 2011 (PubMed)",
      href: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      label: "Studi olandesi in consultazione esterna — limiti del RAADS-R",
      detail: "Sensibilità/specificità variabili a seconda delle popolazioni; interpretazione clinica necessaria",
    },
    {
      label: "APA — DSM-5: Disturbo dello spettro autistico",
      detail: "Criteri diagnostici di riferimento internazionale",
    },
  ],
  related: [
    {
      href: "/comprendre/asperger",
      title: "Sindrome di Asperger",
      description:
        "Che cosa designa ancora questo termine e come si inserisce nello spettro autistico.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potenziale intellettivo",
      description:
        "Riferimenti sull’HPI, i test e i legami eventuali con altri funzionamenti.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Altri riferimenti e accompagnamenti",
      description:
        "ADHD, sensorialità, stress, scuola, famiglia e valutazioni.",
    },
  ],
};
