import type { EducationalArticle } from "../types";

export const autresReperesArticle: EducationalArticle = {
  slug: "autres-reperes",
  title: "Altri riferimenti e accompagnamenti",
  eyebrow: "Oltre le etichette",
  description:
    "Riferimenti pedagogici su ADHD, sensorialità, stress, problematiche scolastiche, famiglia, approccio transgenerazionale, gruppi di confronto e valutazioni — per situare una domanda di accompagnamento.",
  metaTitle:
    "Altri riferimenti e accompagnamenti | Claire Jalabert",
  metaDescription:
    "ADHD, sensorialità, stress, scuola, famiglia, transgenerazionale, gruppi e valutazioni: riferimenti per chiarire una domanda, senza sostituirsi a una valutazione clinica.",
  updatedAt: "2026-08-14",
  atmosphere: "phase-4",
  toc: [
    { id: "tdah", label: "ADHD" },
    { id: "sensorialite", label: "Sensorialità" },
    { id: "stress", label: "Stress ed esaurimento" },
    { id: "scolaires", label: "Problematiche scolastiche" },
    { id: "famille", label: "Famiglia e coppia" },
    { id: "transgenerationnel", label: "Transgenerazionale" },
    { id: "groupes", label: "Gruppi di confronto" },
    { id: "bilans", label: "Valutazioni" },
  ],
  sections: [
    {
      id: "tdah",
      title: "ADHD",
      blocks: [
        {
          type: "p",
          text: "Il disturbo da deficit di attenzione/iperattività (ADHD) è un disturbo del neurosviluppo che può manifestarsi con difficoltà attentive durature, impulsività, agitazione motoria o mentale, e un impatto in diversi contesti (scuola, lavoro, relazioni, organizzazione quotidiana).",
        },
        {
          type: "p",
          text: "Come per altri modi di funzionare, l’ADHD non si diagnostica a partire da un’impressione isolata o da un questionario online. La valutazione implica un’anamnesi, osservazioni incrociate e, a seconda dei casi, strumenti attentivi, in un quadro professionale. La diagnosi medica spetta al medico; la psicologa può contribuire alla valutazione e all’accompagnamento.",
        },
        {
          type: "p",
          text: "L’ADHD può coesistere con un alto potenziale, un TEA, un’ansia o disturbi dell’apprendimento. Queste associazioni rendono ancor più importante una lettura differenziale prudente. Vedi anche le pagine HPI (/comprendre/hpi#hpi-tdah) e TEA (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Niente autodiagnosi",
          body: "Le difficoltà di attenzione o di organizzazione hanno molte cause possibili. Solo una valutazione professionale permette di situarle correttamente.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Da ricordare",
          body: "L’ADHD è un possibile modo di funzionamento neuroevolutivo tra gli altri. Merita una valutazione accurata quando incide in modo duraturo sulla vita quotidiana.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialità",
      blocks: [
        {
          type: "p",
          text: "La sensorialità indica il modo in cui una persona riceve, filtra e reagisce alle stimolazioni sensoriali: udito, vista, tatto, olfatto, gusto, ma anche senso del movimento e sensazioni corporee interne. Iper- o iposensibilità possono esistere al di fuori di qualsiasi TEA, anche se sono frequenti nelle persone autistiche.",
        },
        {
          type: "p",
          text: "Nella vita quotidiana, una saturazione sensoriale può somigliare a irritabilità, evitamento, agitazione o un bisogno urgente di solitudine. Comprendere questa dimensione evita di moralizzare (« troppo sensibile ») e apre ad adattamenti: cuffie, pause, scelta delle texture, regolazione della luce, anticipazione dei luoghi rumorosi.",
        },
        {
          type: "p",
          text: "Quando un questionamento sensoriale si associa a particolarità di comunicazione sociale o di interessi, un’esplorazione più ampia dello spettro può essere pertinente — senza conclusioni automatiche. La sezione « Sensorialità » della pagina TEA (/comprendre/tsa#sensorialite) approfondisce questo punto nel quadro dell’autismo.",
        },
        {
          type: "p",
          text: "Nella vita quotidiana, gli sforzi necessari per adattarsi all’ambiente e ai codici attesi possono essere particolarmente costosi. In alcune persone, ciò si accompagna a una grande fatigabilità e a una « batteria sociale » che può ridursi rapidamente, aumentando la vulnerabilità quando le capacità di adattamento sono esaurite.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialità e comfort",
          body: "Dare un nome alle soglie sensoriali aiuta spesso più rapidamente che forzare l’adattamento. L’ambiente può essere una leva importante di sollievo.",
        },
      ],
    },
    {
      id: "stress",
      title: "Stress ed esaurimento",
      blocks: [
        {
          type: "p",
          text: "Stress prolungato, ansia ed esaurimento figurano tra i motivi frequenti di consultazione. Possono essere legati al lavoro, agli studi, alla famiglia, a un funzionamento neuroevolutivo poco riconosciuto, a un camuffamento sociale costoso, o a un’accumulazione di micro-vincoli.",
        },
        {
          type: "p",
          text: "L’accompagnamento non si limita a « gestire lo stress » come tecnica isolata. Spesso si tratta di comprendere ciò che sovraccarica il sistema: richieste eccessive, mancanza di recupero, conflitti di valori, iperadattamento, perfezionismo, ambiente sensoriale ostile.",
        },
        {
          type: "p",
          text: "In alcune persone con un TEA o un alto potenziale, l’esaurimento sopravviene dopo anni di adattamento invisibile. In altre, si inscrive in una crisi di coppia, una genitorialità intensa o un contesto professionale deteriorante. La clinica parte dal vissuto, non da un’etichetta preliminare.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Quando lo stress diventa invadente",
          body: "Disturbi del sonno duraturi, perdita di slancio, irritabilità crescente, isolamento o idee di svalutazione meritano uno spazio di ascolto professionale.",
        },
      ],
    },
    {
      id: "scolaires",
      title: "Problematiche scolastiche",
      blocks: [
        {
          type: "p",
          text: "Le difficoltà scolastiche coprono realtà molto diverse: apprendimenti, attenzione, ansia da prestazione, bullismo, fobia scolastica, noia, abbandono, conflitti con l’istituzione, o bisogni educativi particolari (inclusi quelli legati all’alto potenziale).",
        },
        {
          type: "p",
          text: "Lo studio può proporre un accompagnamento del bambino o dell’adolescente, un lavoro con i genitori e, quando pertinente, una mediazione scolastica. L’obiettivo non è « far entrare » l’alunno in uno stampo, ma comprendere il freno e aprire ad adattamenti realistici.",
        },
        {
          type: "p",
          text: "Una valutazione cognitiva o attentiva può chiarire certe situazioni; non è sistematica. A volte, la posta in gioco è relazionale o emotiva più che psicometrica. Le risorse Eduscol e il quadro del codice dell’istruzione forniscono punti di appoggio dal lato scuola; la clinica apporta l’ascolto del soggetto.",
        },
        {
          type: "p",
          text: "Il lavoro può essere innanzitutto metacognitivo: comprendere come la persona riflette, come apprende e quali strategie mobilizza. Si tratta di identificare le difficoltà o i bias incontrati, la loro manifestazione nella vita quotidiana e le soluzioni già messe in atto spontaneamente. Alcune strategie possono essere efficaci ma molto costose, provocando una fatica importante, risultati irregolari o l’evitamento di certe discipline. Questa comprensione permette poi di cercare metodi di rimedio più adattati, negli apprendimenti come nella vita quotidiana.",
        },
        {
          type: "p",
          text: "Lavoro intorno al ritorno della fiducia in sé e dell’autostima.",
        },
        {
          type: "ul",
          items: [
            "Ascolto dell’alunno e del suo eventuale disagio",
            "Lavoro con la famiglia sul clima intorno alla scuola",
            "Mediazione scolastica quando il legame istituto–famiglia è teso",
            "Valutazione se un questionamento cognitivo o attentivo si giustifica",
          ],
        },
      ],
    },
    {
      id: "famille",
      title: "Famiglia e coppia",
      blocks: [
        {
          type: "p",
          text: "Le relazioni familiari e di coppia sono al centro di molte domande. Conflitti educativi, malintesi ripetuti, esaurimento genitoriale, crisi di coppia, difficoltà intorno a un bambino atipico: tante situazioni in cui uno spazio terzo può aiutare a districare le posizioni e a ristabilire una comunicazione più vivibile.",
        },
        {
          type: "p",
          text: "La terapia di coppia e l’accompagnamento familiare non cercano un colpevole. Esplorano le interazioni, le aspettative implicite, le ferite e le risorse. Comprendere i meccanismi, i bisogni e le poste in gioco associate a un disturbo del neurosviluppo, così come le dinamiche relazionali che può innescare, senza però essentializzare tutto a questo funzionamento.",
        },
        {
          type: "p",
          text: "Ogni membro della famiglia ha bisogno di essere ascoltato. Il bambino non è « il problema »; il sintomo familiare è spesso condiviso, anche se il disagio si concentra su uno dei membri.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Uno spazio per il legame",
          body: "Coppia e famiglia beneficiano spesso di un contesto contenitivo dove si può parlare diversamente, senza giudizio precipitoso.",
        },
      ],
    },
    {
      id: "transgenerationnel",
      title: "Approccio transgenerazionale",
      blocks: [
        {
          type: "p",
          text: "L’approccio transgenerazionale si interessa a ciò che si trasmette — consapevolmente o no — di generazione in generazione: racconti, silenzi, lealtà, traumi, ruoli assegnati, segreti, modelli relazionali. Non « incolpa » gli antenati; cerca di comprendere come una storia familiare informa il presente.",
        },
        {
          type: "p",
          text: "In alcune consultazioni, degli schemi si ripetono: ansia scolastica di generazione in generazione, difficoltà a separarsi, ruolo di « bambino parentificato », o silenzio intorno a un vissuto doloroso. Mettere parole su questi fili può sciogliere nodi identitari.",
        },
        {
          type: "p",
          text: "Questo approccio si articola con l’ascolto individuale. Non è né una fatalità (« è genetico quindi inutile ») né una spiegazione totale. È un chiarimento tra gli altri, utile quando il presente sembra portare più della sola situazione attuale.",
        },
      ],
    },
    {
      id: "groupes",
      title: "Gruppi di confronto",
      blocks: [
        {
          type: "p",
          text: "I gruppi di confronto offrono uno spazio collettivo, inquadrato da un professionista, dove condividere un vissuto, ascoltare quello di altre persone e ridurre l’isolamento. Non sostituiscono un follow-up individuale, ma possono completarlo utilmente.",
        },
        {
          type: "p",
          text: "A seconda delle tematiche (genitorialità, alto potenziale, spettro autistico, stress, ecc.), il gruppo permette di scoprire che certe difficoltà non si vivono da soli.",
        },
        {
          type: "p",
          text: "Il gruppo può anche sostenere l’autostima, ridare legittimità a ciò che si vive e permettere a ciascuno di ritrovare maggiore sovranità nelle proprie scelte. Offre anche la possibilità di condividere le vittorie, le scoperte e i nuovi adattamenti che hanno permesso di far evolvere certe situazioni.",
        },
        {
          type: "p",
          text: "La riservatezza, il rispetto e la non imposizione di « raccontarsi » sono condizioni essenziali.",
        },
        {
          type: "p",
          text: "La partecipazione si decide dopo informazioni su quadro, obiettivi e modalità. Ogni persona resta libera del proprio ritmo di parola.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Informarsi sui gruppi",
          body: "La segreteria può indicare eventuali gruppi, i loro pubblici e le condizioni di iscrizione.",
        },
      ],
    },
    {
      id: "bilans",
      title: "Valutazioni",
      blocks: [
        {
          type: "p",
          text: "Le valutazioni proposte nello studio mirano a comprendere meglio il funzionamento cognitivo, emotivo, sensoriale o relazionale della persona. Illuminano l’accompagnamento; non si riducono a un’etichetta.",
        },
        {
          type: "p",
          text: "A seconda della domanda, può trattarsi di una valutazione psicometrica (funzionamento intellettuale), attentiva, proiettiva, o di un contributo a un percorso diagnostico TEA — in particolare tramite un colloquio strutturato di tipo ADI-R, che può contribuire alla valutazione senza porre da solo la diagnosi medica.",
        },
        {
          type: "p",
          text: "La scelta della valutazione si costruisce con la persona (e la sua famiglia se del caso), dopo un tempo di ascolto. Una valutazione non è sempre necessaria per iniziare un accompagnamento terapeutico.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Quadro delle valutazioni",
          body: "Le valutazioni informano e orientano. La diagnosi medica di TEA, quando è considerata, resta posta da un medico. La psicologa contribuisce alla valutazione e alla restituzione clinica.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Vedere le valutazioni nello studio",
          description:
            "Elenco delle valutazioni proposte, con i loro obiettivi.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Scoprire gli accompagnamenti",
          description:
            "Colloqui, terapie, mediazioni, coppia, famiglia e gruppi.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contattare la segreteria",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — raccomandazioni relative al TEA",
      detail: "Individuazione, diagnosi e interventi",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Eduscol — alunni ad alto potenziale",
      detail: "Vademecum e risorse pedagogiche",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — L321-4",
      detail: "Presa in considerazione degli alunni intellettualmente precoci",
      href: "https://www.legifrance.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Disturbo dello spettro autistico",
      description:
        "Spettro, ambiti, valutazione e strumenti.",
    },
    {
      href: "/comprendre/asperger",
      title: "Sindrome di Asperger",
      description:
        "Storia del termine e posto attuale nel TEA.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potenziale intellettivo",
      description:
        "HPI, test, HPIC e distinzioni utili.",
    },
  ],
};
