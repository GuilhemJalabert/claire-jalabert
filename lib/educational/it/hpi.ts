import type { EducationalArticle } from "../types";

export const hpiArticle: EducationalArticle = {
  slug: "hpi",
  title: "Alto potenziale intellettivo (HPI)",
  eyebrow: "Funzionamento cognitivo",
  description:
    "Riferimenti sull’alto potenziale intellettivo: definizione, test, scolarità, diversità dei percorsi, bambino e adulto, formulazione HPIC, legami con TEA e ADHD, e ruolo della valutazione.",
  metaTitle:
    "Comprendere l’alto potenziale intellettivo | Claire Jalabert",
  metaDescription:
    "Pagina pedagogica sull’HPI e la formulazione HPIC: test, successo scolastico, diversità, creatività, possibili legami con TEA e ADHD. Contenuto informativo, non diagnostico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-3",
  toc: [
    { id: "definition", label: "Definizione e riferimenti" },
    { id: "tests", label: "Test e valutazione" },
    { id: "reussite-scolaire", label: "Successo scolastico" },
    { id: "diversite", label: "Diversità dei profili" },
    { id: "enfant", label: "Nel bambino" },
    { id: "adulte", label: "Nell’adulto" },
    { id: "creativite-hpic", label: "Creatività e HPIC" },
    { id: "hpi-tsa", label: "HPI e TEA" },
    { id: "hpi-tdah", label: "HPI e ADHD" },
    { id: "bilan", label: "La valutazione" },
  ],
  sections: [
    {
      id: "definition",
      title: "Definizione e riferimenti",
      blocks: [
        {
          type: "p",
          text: "L’alto potenziale intellettivo (HPI) designa un funzionamento cognitivo situato nella fascia superiore della distribuzione delle capacità misurate dai test d’intelligenza, spesso — ma non sempre — associato a particolarità di ragionamento, apprendimento o sensibilità. Non è una malattia, né un tipo di personalità, né una garanzia di successo.",
        },
        {
          type: "p",
          text: "In molti contesti francesi, un QI totale intorno a 130 (circa due deviazioni standard sopra la media sulle scale di Wechsler) è un riferimento frequente per parlare di alto potenziale. Questa soglia è un riferimento statistico utile; non è una regola universale semplificata. L’interpretazione clinica considera anche il profilo degli indici, la storia della persona, il retentimento e il contesto.",
        },
        {
          type: "p",
          text: "A scuola, i testi ufficiali evocano gli alunni ad alto potenziale intellettivo e la necessità di tenere conto dei loro bisogni educativi particolari. Il code de l’éducation (articolo L321-4) e le risorse Eduscol (vademecum Élèves à haut potentiel) ricordano l’importanza di un accompagnamento pedagogico adattato, senza folklore né mitologia.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Un riferimento, non un’essenza",
          body: "Il QI ~130 è un riferimento frequente, non una frontiera magica. L’HPI si comprende in una valutazione globale, non attraverso un numero isolato letto fuori contesto.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenuto pedagogico",
          body: "Questa pagina non stabilisce una diagnosi e non permette di concludere da sola a un alto potenziale. Solo una valutazione professionale può chiarire una situazione individuale.",
        },
      ],
    },
    {
      id: "tests",
      title: "Test e valutazione",
      blocks: [
        {
          type: "p",
          text: "La valutazione del funzionamento intellettuale si basa tipicamente su una scala di Wechsler adattata all’età (WISC per bambini e adolescenti, WAIS per gli adulti), somministrata da uno psicologo formato. Il QI totale non è che una sintesi: gli indici (comprensione verbale, visuospaziale, fluidità, memoria di lavoro, velocità di elaborazione, ecc. a seconda della versione) forniscono un profilo più fine.",
        },
        {
          type: "p",
          text: "Un divario importante tra gli indici, un’ansia da prestazione, la stanchezza, un disturbo associato o condizioni di somministrazione sfavorevoli possono influenzare i risultati. Ecco perché la valutazione non si riduce a « fare un QI »: il colloquio clinico, l’anamnesi e, se necessario, altri strumenti (attenzione, affettivo, proiettivo) completano la lettura.",
        },
        {
          type: "p",
          text: "I test online o i questionari virali non sostituiscono una valutazione standardizzata. Possono alimentare un interrogativo; non convalidano un alto potenziale.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Luogo comune",
          body: "« Un test gratuito su Internet basta per sapere se si è HPI. » Falso: solo strumenti standardizzati, somministrati e interpretati da un professionista, permettono una stima affidabile in un contesto clinico.",
        },
      ],
    },
    {
      id: "reussite-scolaire",
      title: "Successo scolastico",
      blocks: [
        {
          type: "p",
          text: "Contrariamente a un’immagine diffusa, l’alto potenziale non coincide automaticamente con l’eccellenza scolastica. Alcuni bambini e adolescenti HPI hanno successo brillante; altri si annoiano, abbandonano, evitano lo sforzo percepito come inutile, o si scontrano con metodi pedagogici poco adattati al loro ritmo di apprendimento.",
        },
        {
          type: "p",
          text: "Il vademecum Eduscol sugli alunni ad alto potenziale sottolinea la diversità dei percorsi e la necessità di possibili adattamenti pedagogici (approfondimento, compattazione, tutoraggio, progetti, ecc.), decisi caso per caso. L’articolo L321-4 del code de l’éducation inscrive la presa in carico degli alunni intellettualmente precoci tra le missioni della scuola.",
        },
        {
          type: "p",
          text: "Un accompagnamento psicologico può aiutare quando la scuola diventa fonte di ansia, conflitto familiare o perdita di autostima — anche quando i voti restano buoni in apparenza.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "HPI ≠ pagella perfetta",
          body: "Il successo scolastico non è né una condizione né una prova automatica di alto potenziale. Noia, abbandono o ansia possono coesistere con un funzionamento intellettivo elevato.",
        },
      ],
    },
    {
      id: "diversite",
      title: "Diversità dei profili",
      blocks: [
        {
          type: "p",
          text: "Non esiste un « ritratto-robot » dell’HPI. Si incontrano profili molto verbali, altri più visuospaziali; persone a proprio agio socialmente e altre riservate; percorsi lineari e traiettorie caotiche. La sensibilità emotiva, spesso evocata, non è né universale né esclusiva dell’alto potenziale.",
        },
        {
          type: "p",
          text: "Bisogna diffidare delle liste di tratti che promettono di « riconoscere un HPI in cinque segni ». Confondono spesso personalità, cultura, ansia e capacità cognitive. Una lettura clinica sobria resta preferibile alle check-list virali.",
        },
        {
          type: "ul",
          items: [
            "Eterogeneità degli indici cognitivi",
            "Variabilità dell’adattamento scolastico e professionale",
            "Presenza o assenza di sofferenza associata",
            "Possibile coesistenza con altri funzionamenti (ADHD, TEA, disturbi dell’apprendimento, ecc.)",
          ],
        },
      ],
    },
    {
      id: "enfant",
      title: "Nel bambino",
      blocks: [
        {
          type: "p",
          text: "Nel bambino, l’interrogativo sull’alto potenziale emerge spesso di fronte a uno scarto: linguaggio precoce, curiosità intensa, domande esistenziali premature, noia in classe, perfezionismo, o al contrario difficoltà inattese nonostante capacità visibili. I genitori cercano a volte una spiegazione a un comportamento che la scuola fatica a collocare.",
        },
        {
          type: "p",
          text: "Una valutazione può chiarire il funzionamento e aprire piste pedagogiche. Può anche concludere a qualcos’altro, o a un quadro misto. Il bambino non ha bisogno di essere « etichettato » per essere ascoltato: la valutazione è uno strumento al servizio del benessere e dell’adattamento, non un fine in sé.",
        },
        {
          type: "p",
          text: "L’accompagnamento può articolare l’ascolto del bambino, la guida parentale, un eventuale collegamento con la scuola, e un lavoro sull’ansia, l’autostima o le relazioni con i pari quando necessario.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Quando considerare una valutazione?",
          body: "Quando lo scarto scolastico, relazionale o emotivo persiste e fa soffrire il bambino o la famiglia, un colloquio e poi, se indicato, una valutazione cognitiva possono chiarire la situazione.",
        },
      ],
    },
    {
      id: "adulte",
      title: "Nell’adulto",
      blocks: [
        {
          type: "p",
          text: "In età adulta, la domanda sull’HPI sorge a volte dopo anni di sentimento di scarto, un burn-out, una riorientazione, o la scoperta di un alto potenziale in un figlio. Alcune persone cercano un nome per un funzionamento a lungo vissuto come « troppo »: troppo intenso, troppo rapido, troppo esigente, troppo sensibile.",
        },
        {
          type: "p",
          text: "Una valutazione in età adulta può apportare chiavi di comprensione. Non risolve da sola le difficoltà professionali o relazionali, ma può reorientare il racconto di sé e guidare un accompagnamento. Altre dimensioni (ansia, ADHD, TEA, esaurimento) devono restare nel campo visivo.",
        },
        {
          type: "p",
          text: "L’alto potenziale non è né uno status sociale né una scusa universale. È un’informazione tra le altre su un funzionamento, da articolare con i valori, la storia e i bisogni attuali della persona.",
        },
      ],
    },
    {
      id: "creativite-hpic",
      title: "Creatività e HPIC",
      blocks: [
        {
          type: "p",
          text: "Nello studio, Claire Jalabert utilizza la formulazione Haut Potentiel Intellectuel et Créatif (HPIC). Si tratta della sua formulazione clinica di lavoro, destinata a sottolineare che il funzionamento in questione non si riduce a un punteggio intellettuale: la creatività, il pensiero divergente, l’intensità immaginativa o la singolarità delle associazioni d’idee possono far parte del quadro.",
        },
        {
          type: "p",
          text: "HPIC non è una categoria diagnostica ufficiale. Non è né un codice CIM o DSM, né un’etichetta riconosciuta come tale dal Ministero dell’Istruzione francese. È un modo di nominare, nella pratica, un’articolazione tra potenziale intellettuale e dimensione creativa, utile per l’accompagnamento.",
        },
        {
          type: "p",
          text: "Questa precisazione evita due scogli: ridurre la persona a un QI, e presentare HPIC come una diagnosi standardizzata. La formulazione resta al servizio della clinica, non il contrario.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "HPIC: formulazione di studio",
          body: "HPIC designa la formulazione utilizzata da Claire Jalabert nella sua pratica. Non è una categoria diagnostica ufficiale.",
        },
      ],
    },
    {
      id: "hpi-tsa",
      title: "HPI e TEA",
      blocks: [
        {
          type: "p",
          text: "Alto potenziale e disturbo dello spettro autistico possono coesistere. Possono anche essere confusi quando ci si appoggia a liste di tratti troppo generali (interessi intensi, sensibilità, sentimento di scarto). Un ragionamento sofisticato non esclude un TEA; un TEA non implica un HPI.",
        },
        {
          type: "p",
          text: "La distinzione clinica si appoggia sulla storia evolutiva, la comunicazione sociale, la sensorialità, il profilo cognitivo e il retentimento. A volte entrambe le dimensioni sono presenti; a volte una sola; a volte nessuna delle due, nonostante un interrogativo iniziale. Vedi anche le pagine TEA (/comprendre/tsa) e Asperger (/comprendre/asperger).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Evitare l’amalgama",
          body: "HPI e TEA sono dimensioni distinte. Il loro eventuale incrocio si determina con una valutazione accurata, non per somiglianza superficiale.",
        },
      ],
    },
    {
      id: "hpi-tdah",
      title: "HPI e ADHD",
      blocks: [
        {
          type: "p",
          text: "L’ADHD (disturbo da deficit di attenzione con o senza iperattività) può anch’esso coesistere con un alto potenziale, o essere evocato a torto di fronte a noia scolastica, pensiero rapido o agitazione legata alla sottostimolazione. Al contrario, un ADHD può mascherare o frenare l’espressione di competenze cognitive elevate.",
        },
        {
          type: "p",
          text: "Attenzione, impulsività, organizzazione, memoria di lavoro e regolazione emotiva fanno parte delle zone di sovrapposizione possibili. La valutazione differenziale — e talvolta complementare — richiede tempo e strumenti adattati. Per altri riferimenti, vedi la sezione ADHD (/comprendre/autres-reperes#tdah).",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Luogo comune",
          body: "« Se è HPI, non è ADHD — si annoia soltanto. » Non necessariamente: i due possono coesistere, e la noia da sola non spiega tutti i quadri attentivi.",
        },
      ],
    },
    {
      id: "bilan",
      title: "La valutazione",
      blocks: [
        {
          type: "p",
          text: "Una valutazione psicometrica e clinica mira a comprendere un funzionamento, non a consegnare un titolo. Si inscrive in una domanda: sofferenza, interrogativo scolastico, orientamento, migliore conoscenza di sé. I risultati vengono restituiti in un linguaggio accessibile, con i loro limiti e le loro implicazioni concrete.",
        },
        {
          type: "p",
          text: "A seconda delle situazioni, la valutazione cognitiva può essere completata da altre valutazioni (attenzionale, affettiva, proiettiva, o contributo a un percorso TEA). Il seguito può essere un accompagnamento terapeutico, un collegamento con la scuola, un orientamento medico, o semplicemente un chiarimento utile per la persona e i suoi cari.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Parlarne allo studio",
          body: "La segreteria e un primo colloquio permettono di chiarire se una valutazione è pertinente, quale, e in quali tempi — senza precipitazione.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Valutazioni e bilanci",
          description:
            "Presentazione delle valutazioni proposte allo studio.",
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
      label: "Eduscol — Vademecum « Scolariser les élèves à haut potentiel »",
      detail: "Risorsa pedagogica nazionale (EHP)",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — article L321-4",
      detail: "Presa in carico degli alunni intellettualmente precoci",
      href: "https://www.legifrance.gouv.fr",
    },
    {
      label: "Scale di Wechsler (WISC, WAIS)",
      detail: "Strumenti standardizzati di valutazione del funzionamento intellettuale",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Disturbo dello spettro autistico",
      description:
        "Per distinguere e incrociare eventuali funzionamenti dello spettro.",
    },
    {
      href: "/comprendre/asperger",
      title: "Sindrome di Asperger",
      description:
        "Storia del termine e legami frequenti con gli interrogativi HPI.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Altri riferimenti e accompagnamenti",
      description:
        "ADHD, scolarità, famiglia, gruppi e valutazioni.",
    },
  ],
};
