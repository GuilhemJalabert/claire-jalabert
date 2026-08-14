import type { EducationalArticle } from "../types";

export const aspergerArticle: EducationalArticle = {
  slug: "asperger",
  title: "Sindrome di Asperger",
  eyebrow: "Storia e continuum",
  description:
    "Comprendere la sindrome di Asperger: storia del termine, caratteristiche, comunicazione, interessi, sensorialità, donne, età della vita, legami con l’HPI e collocazione attuale nello spettro autistico.",
  metaTitle:
    "Sindrome di Asperger: comprendere il termine e i profili interessati | Claire Jalabert",
  metaDescription:
    "Riferimenti pedagogici sulla sindrome di Asperger: perché il linguaggio è evoluto, caratteristiche, camouflage e collocazione nel TEA. Contenuto informativo, non diagnostico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-2",
  toc: [
    { id: "introduction", label: "Introduzione" },
    { id: "pourquoi", label: "Perché il linguaggio è evoluto" },
    { id: "caracteristiques", label: "Caratteristiche spesso descritte" },
    { id: "communication", label: "Comunicazione e relazioni" },
    { id: "interets", label: "Interessi focalizzati" },
    { id: "sensorialite-routines", label: "Sensorialità e routine" },
    { id: "femmes", label: "Nelle donne" },
    { id: "ages", label: "Secondo le età" },
    { id: "asperger-hpi", label: "Asperger e HPI" },
    { id: "diagnostic-aujourdhui", label: "Diagnosi oggi" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduzione",
      blocks: [
        {
          type: "p",
          text: "Il termine « sindrome di Asperger » resta molto presente nel linguaggio comune, in alcune richieste di consulto e nella storia personale di numerose persone. Spesso designa un profilo di persona autistica — o di persona con un TEA — senza ritardo linguistico maggiore nell’infanzia e senza deficit intellettivo associato, con particolarità marcate della comunicazione sociale e interessi focalizzati.",
        },
        {
          type: "p",
          text: "Nelle classificazioni attuali (DSM-5, CIM-11), questa sindrome non è più una categoria diagnostica separata: è integrata nel disturbo dello spettro autistico. Ciò non significa che il vissuto delle persone interessate sia scomparso, né che la parola « Asperger » sia vietata. Significa che il quadro medico è evoluto per rendere meglio conto di un continuum.",
        },
        {
          type: "p",
          text: "Questa pagina propone riferimenti pedagogici. Non consente di autodiagnosticarsi. Per una visione d’insieme dello spettro, vedere anche la pagina « Disturbo dello spettro autistico » (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Informazione, non diagnosi",
          body: "Gli elementi qui sotto descrivono tendenze frequentemente riportate. Non sono sufficienti per concludere a una sindrome di Asperger né a un TEA. Solo una valutazione professionale può chiarire una situazione individuale.",
        },
      ],
    },
    {
      id: "pourquoi",
      title: "Perché il linguaggio è evoluto",
      blocks: [
        {
          type: "p",
          text: "Storicamente, la sindrome di Asperger è stata distinta dall’« autismo infantile » per descrivere persone senza ritardo linguistico apparente e con un funzionamento intellettuale nella media o al di sopra. Questa distinzione ha contribuito a rendere visibili profili a lungo poco riconosciuti. Ha anche creato malintesi duraturi.",
        },
        {
          type: "p",
          text: "Uno dei più tenaci consiste nel presentare Asperger come « una forma lieve di autismo ». Questa formulazione è fuorviante. Minimizza la sofferenza possibile, la fatica del camouflage, le difficoltà sensoriali e il retaggio sociale. Una persona può parlare fluentemente, conseguire un diploma e vivere comunque un esaurimento importante legato al proprio funzionamento.",
        },
        {
          type: "p",
          text: "Il passaggio allo spettro mira a riconoscere una diversità di bisogni e profili, piuttosto che una gerarchia « lieve / grave » fondata unicamente sul linguaggio o sul QI. Il sostegno necessario non si deduce da un antico sottotipo: si valuta caso per caso.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Formulazione da evitare",
          body: "« Asperger = forma lieve di autismo » è una semplificazione inesatta e potenzialmente invalidante. Il retaggio non si misura alla sola fluidità del linguaggio.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Continuità piuttosto che gerarchia",
          body: "Il quadro attuale colloca questi profili nel TEA. La parola Asperger può restare utile per descrivere una storia personale o una richiesta, senza cristallizzare una « leggerezza » fuorviante.",
        },
      ],
    },
    {
      id: "caracteristiques",
      title: "Caratteristiche spesso descritte",
      blocks: [
        {
          type: "p",
          text: "Le descrizioni classiche insistono su un’intelligenza verbale spesso preservata, persino sviluppata, associata a difficoltà nella reciprocità sociale, a una lettura talvolta letterale degli scambi e a centri d’interesse molto investiti. Questi tratti non formano una lista di controllo: si combinano in modi diversi.",
        },
        {
          type: "p",
          text: "Si ritrovano frequentemente una sensibilità all’ingiustizia, un bisogno di coerenza, una fatica sociale dopo le interazioni e una preferenza per contesti prevedibili. Alcune persone eccellono in ambiti specializzati; altre faticano a trasformare le proprie competenze in percorsi stabili, per mancanza di accomodamenti o di comprensione dell’ambiente.",
        },
        {
          type: "ul",
          items: [
            "Particolarità della comunicazione sociale, nonostante un linguaggio spesso fluente",
            "Interessi intensi e durabilmente investiti",
            "Bisogno di prevedibilità e sensibilità agli imprevisti",
            "Particolarità sensoriali frequenti",
            "Possibile divario tra competenze cognitive e agio relazionale percepito",
          ],
        },
        {
          type: "p",
          text: "Nessuno di questi elementi, isolato, definisce un profilo Asperger. È la loro combinazione, la loro antichità e il loro retaggio che possono motivare una valutazione — orientata oggi verso lo spettro autistico.",
        },
      ],
    },
    {
      id: "communication",
      title: "Comunicazione e relazioni",
      blocks: [
        {
          type: "p",
          text: "La comunicazione di una persona interessata può essere precisa, ricca, talvolta molto tecnica, pur lasciando poco spazio agli impliciti. Le conversazioni « a casaccio », i sottintesi, l’umorismo basato sull’ambiguità o le regole non scritte del gruppo possono essere fonte di malintesi.",
        },
        {
          type: "p",
          text: "Ciò non significa assenza di empatia. Molte persone con un TEA — incluse quelle che si riconoscono nel vecchio termine Asperger — provano intensamente le emozioni altrui, ma faticano a decodificarle rapidamente o a rispondervi secondo i codici attesi. Il divario tra vissuto ed espressione è spesso al centro del malinteso.",
        },
        {
          type: "p",
          text: "Nelle relazioni amicali, affettive o professionali, chiarezza, prevedibilità e rispetto dei bisogni di recupero sono spesso fattori protettivi. L’apprendimento esplicito di certi codici può aiutare, senza puntare a una conformità esaustiva che esaurirebbe la persona.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Comunicazione ≠ assenza di legame",
          body: "Particolarità comunicative non impediscono legami autentici. Invitano a modalità di scambio più esplicite e rispettose dei ritmi di ciascuno.",
        },
      ],
    },
    {
      id: "interets",
      title: "Interessi focalizzati",
      blocks: [
        {
          type: "p",
          text: "Gli interessi focalizzati — talvolta chiamati interessi specifici — occupano un posto centrale per numerose persone. Possono riguardare ambiti accademici, tecnici, artistici, collezionistici o molto di nicchia. Lontano dall’essere semplici « manie », offrono spesso senso, competenza, regolazione emotiva e uno spazio di piacere.",
        },
        {
          type: "p",
          text: "Il confine tra passione ricca e rigidità invalidante dipende dal contesto: l’interesse diventa problematico quando impedisce altri bisogni vitali, isola durabilmente o entra in conflitto permanente con l’ambiente. Anche allora, l’approccio clinico privilegia spesso l’integrazione e l’accomodamento, piuttosto che l’eradicazione dell’interesse.",
        },
        {
          type: "p",
          text: "In un accompagnamento, questi centri d’interesse possono diventare alleati: mediazione, motivazione scolastica o professionale, filo conduttore narrativo. Riconoscerli con rispetto cambia spesso la qualità della relazione terapeutica.",
        },
      ],
    },
    {
      id: "sensorialite-routines",
      title: "Sensorialità e routine",
      blocks: [
        {
          type: "p",
          text: "Come per altri profili dello spettro, sensorialità e bisogno di routine sono frequenti. Rumori, luci, texture, contatti o ambienti imprevedibili possono saturare rapidamente. Le routine, invece, offrono un quadro rassicurante: riducono l’incertezza e liberano energia cognitiva.",
        },
        {
          type: "p",
          text: "Un cambiamento di programma, un open space rumoroso, un pasto imposto in un luogo caotico possono sembrare anodini all’entourage e costare invece molto alla persona. Nominare queste soglie permette di evitare giudizi moralizzanti (« troppo sensibile », « troppo rigido ») e di aprire accomodamenti realistici.",
        },
        {
          type: "p",
          text: "I movimenti ripetitivi o i rituali di regolazione (talvolta chiamati stimming) possono contribuire all’apaisamento. Frenarli sistematicamente senza alternativa aumenta spesso lo stress. La posta in gioco è la sicurezza e il rispetto, anche in società.",
        },
      ],
    },
    {
      id: "femmes",
      title: "Nelle donne",
      blocks: [
        {
          type: "p",
          text: "Numerose donne interessate sono a lungo sfuggite al riconoscimento, per mancanza di modelli clinici adatti. Il camouflage sociale, l’imitazione dei pari, l’interiorizzazione del disagio e interessi meno « stereotipati » nelle descrizioni antiche hanno contribuito a diagnosi tardive — o a errate diagnosi.",
        },
        {
          type: "p",
          text: "Ansia, esaurimento, disturbi dell’umore, questionamenti identitari o difficoltà alimentari possono coesistere e mascherare il funzionamento sottostante. Un’apparenza sociale adeguata non dice nulla del costo interno. Per maggiori dettagli sul camouflage nello spettro, vedere la sezione « Donne e camouflage » della pagina TEA (/comprendre/tsa#femmes-camouflage).",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Un questionamento tardivo è frequente",
          body: "Nelle donne e nelle persone molto adattate in superficie, un questionamento in adolescenza o in età adulta merita un’ascolto clinico attento, senza conclusioni affrettate.",
        },
      ],
    },
    {
      id: "ages",
      title: "Secondo le età",
      blocks: [
        {
          type: "p",
          text: "Nel bambino, i segni possono essere discreti se il linguaggio è precoce e i risultati scolastici soddisfacenti. Le difficoltà compaiono talvolta nel cortile, nei giochi di gruppo, nella gestione degli imprevisti o nella sensibilità sensoriale. Il divario tra « bravo alunno » e « goffo socialmente » intriga spesso l’entourage.",
        },
        {
          type: "p",
          text: "In adolescenza, la complessificazione delle relazioni, lo sguardo dei pari e le esigenze di autonomia possono far vacillare un equilibrio fragile. In età adulta, sono spesso il lavoro, la coppia, la genitorialità o un burn-out a ravvivare il questionamento.",
        },
        {
          type: "p",
          text: "A ogni età, l’accompagnamento mira alla comprensione, alla riduzione della sofferenza e all’adattamento dell’ambiente — più che alla conformità a un’unica norma sociale.",
        },
      ],
    },
    {
      id: "asperger-hpi",
      title: "Asperger e HPI",
      blocks: [
        {
          type: "p",
          text: "Alto potenziale intellettivo e profili un tempo definiti Asperger possono coesistere, assomigliarsi in superficie o essere confusi. Un QI elevato non esclude un TEA; un TEA non implica un alto potenziale intellettivo. Alcune persone cumulano entrambi; altre ne hanno solo uno; altre ancora presentano un quadro misto che richiede una lettura clinica fine.",
        },
        {
          type: "p",
          text: "Interessi intensi, sensibilità, pensiero atipico o difficoltà relazionale possono spiegarsi in diversi modi. Ecco perché i bilanci e il colloquio clinico cercano di districare i fili, piuttosto che scegliere troppo in fretta un’unica etichetta. Per i riferimenti sull’HPI, vedere la pagina HPI (/comprendre/hpi).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Due dimensioni possibili",
          body: "Asperger/TEA e HPI non sono equivalenti. Possono incrociarsi. Solo una valutazione contestualizzata permette di evitare amalgami.",
        },
      ],
    },
    {
      id: "diagnostic-aujourdhui",
      title: "Diagnosi oggi",
      blocks: [
        {
          type: "p",
          text: "Oggi, quando una valutazione conclude positivamente, la diagnosi medica ricade in genere nel disturbo dello spettro autistico, con una descrizione del livello di sostegno necessario e delle particolarità individuali. Il termine Asperger può restare presente nel racconto della persona, in documenti antichi o come punto di ingresso della richiesta.",
        },
        {
          type: "p",
          text: "La diagnosi resta un atto medico. La psicologa clinica contribuisce alla valutazione (colloquio, anamnesi, strumenti) e all’accompagnamento. Strumenti come l’ADI-R possono contribuire al percorso; un questionario come il RAADS-R non stabilisce una diagnosi. Questi punti sono dettagliati nella pagina TEA (/comprendre/tsa).",
        },
        {
          type: "p",
          text: "La posta in gioco non è la parola esatta su un referto, ma la qualità della comprensione e dei sostegni che ne derivano: accomodamenti, terapia, gruppi, bilanci complementari, orientamento medico.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Quadro attuale",
          body: "La sindrome di Asperger non è più una categoria separata nel DSM-5. I profili interessati rientrano nel TEA. La diagnosi medica è posta da un medico; la psicologa vi contribuisce.",
        },
        {
          type: "cta",
          href: "/comprendre/tsa",
          label: "Leggere la pagina TEA",
          description:
            "Ambiti clinici, diagnosi, ADI-R, RAADS-R e orientamenti.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Vedere gli accompagnamenti",
          description:
            "Colloqui, bilanci e modalità di follow-up proposti in studio.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "APA — DSM-5: Disturbo dello spettro autistico",
      detail:
        "Integrazione degli antichi sottotipi, inclusa la sindrome di Asperger, nello spettro",
    },
    {
      label: "HAS — Diagnosi e valutazione del TEA nell’adulto",
      detail: "Raccomandazione, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Riconoscimento e diagnosi del TEA nel bambino e nell’adolescente",
      detail: "Raccomandazione, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l’autisme",
      detail: "Informazione istituzionale e orientamento",
      href: "https://maison.autisme.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Disturbo dello spettro autistico",
      description:
        "Visione d’insieme dello spettro, della valutazione e degli strumenti.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potenziale intellettivo",
      description:
        "Riferimenti sull’HPI e distinzioni utili rispetto ad altri profili.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Altri riferimenti e accompagnamenti",
      description:
        "Stress, scuola, famiglia, gruppi e bilanci.",
    },
  ],
};
