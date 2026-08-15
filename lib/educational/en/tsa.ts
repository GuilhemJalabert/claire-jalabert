import type { EducationalArticle } from "../types";

export const tsaArticle: EducationalArticle = {
  slug: "tsa",
  title: "Autism spectrum disorder (ASD)",
  eyebrow: "Educational overview",
  description:
    "Understanding autism spectrum disorder: clinical domains, sensory processing, pathways across the lifespan, assessment, tools and signposting — without substituting for a diagnostic process.",
  metaTitle:
    "Understanding autism spectrum disorder | Claire Jalabert",
  metaDescription:
    "Educational overview of ASD: domains, sensory processing, childhood, adolescence, adulthood, women and camouflage, causes, diagnosis, ADI-R, RAADS-R. Informative, non-diagnostic content.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-1",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "domaines", label: "Clinical domains" },
    { id: "sensorialite", label: "Sensory processing" },
    { id: "enfant", label: "In childhood" },
    { id: "adolescence", label: "In adolescence" },
    { id: "adulte", label: "In adulthood" },
    { id: "femmes-camouflage", label: "Women and camouflage" },
    { id: "causes", label: "What we know about causes" },
    { id: "diagnostic", label: "Diagnosis and assessment" },
    { id: "adi-r", label: "The ADI-R" },
    { id: "raads-r", label: "The RAADS-R" },
    { id: "associations", label: "ASD and other profiles" },
    { id: "quand-consulter", label: "When to seek help?" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Autism spectrum disorder (ASD) refers to a set of developmental and functional characteristics that persistently affect social communication and the presence of restricted, repetitive patterns of behaviour, interests or activities. We speak of a “spectrum” because the intensity, form and impact of these characteristics vary considerably from one person to another.",
        },
        {
          type: "p",
          text: "An autistic person — or a person with ASD — may present a very different profile from another: some need substantial daily support; others build a rich professional, family and social life, while encountering specific difficulties in certain contexts. Current clinical language emphasises this diversity, rather than a single fixed image.",
        },
        {
          type: "p",
          text: "This page aims to offer clear, nuanced educational reference points. It does not allow you to diagnose yourself, nor to diagnose someone close to you. A diagnosis of ASD is made by a doctor, within a multidisciplinary assessment. The clinical psychologist can contribute through clinical listening, developmental history-taking and certain structured tools, without substituting for the medical act.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Informative, non-diagnostic content",
          body: "The information presented here is intended for educational purposes. It does not replace a clinical interview or a medical assessment. If you have persistent questions, referral to a trained professional remains the appropriate course of action.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Key points",
          body: "ASD is a spectrum: profiles are heterogeneous. Understanding the domains involved helps to guide a request for assessment, without reaching a diagnosis on your own.",
        },
      ],
    },
    {
      id: "domaines",
      title: "Clinical domains",
      blocks: [
        {
          type: "p",
          text: "In current classifications (notably the DSM-5), autism spectrum disorder is organised around two broad domains. The first concerns characteristics of social communication and interaction. The second concerns restricted, repetitive patterns of behaviour, interests or activities. These domains combine in very diverse ways depending on the person and their stage of life.",
        },
        {
          type: "h3",
          text: "Social communication and interaction",
        },
        {
          type: "p",
          text: "This may include, for example, difficulties initiating or maintaining reciprocal exchanges, grasping certain implicit conventions, adjusting gaze, gesture or tone to context, or spontaneously sharing interests and emotions. These characteristics do not mean an absence of interest in others: many people with ASD want relationships, but sometimes struggle to understand the unwritten rules.",
        },
        {
          type: "p",
          text: "Spoken language may be fluent, even highly developed, or conversely limited. It is not the volume of speech that defines ASD, but the way social communication is organised in terms of reciprocity, context and shared attention.",
        },
        {
          type: "h3",
          text: "Restricted, repetitive patterns of behaviour, interests and activities",
        },
        {
          type: "p",
          text: "This domain encompasses repetitive movements, rituals, a marked need for predictability, highly focused interests, or particular sensory sensitivities. These elements can be sources of pleasure, competence and stability — and, in certain contexts, sources of fatigue or conflict with the environment.",
        },
        {
          type: "ul",
          items: [
            "Characteristics of social communication and reciprocity",
            "Focused interests, routines or rituals",
            "Repetitive movements or vocalisations",
            "Sensory sensitivities (hyper- or hyposensitivity)",
            "Need for predictability in the face of change",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Two domains, great diversity",
          body: "It is not the presence of a single sign that matters, but a persistent set of characteristics in these domains, with an impact on daily, school, work or relational life.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensory processing",
      blocks: [
        {
          type: "p",
          text: "Sensory processing occupies an important place in the experience of many autistic people. Sounds, lights, textures, smells, physical contact, temperature or internal bodily sensations may be perceived more intensely, more diffusely, or conversely more attenuated than for others. These characteristics are not “in the head” in the sense of being imagined: they reflect different sensory processing.",
        },
        {
          type: "p",
          text: "Hypersensitivity to noise in an open-plan office, an aversion to certain food textures, a need for movement to self-regulate, or a search for deep pressure may all be part of the same sensory picture. A person with ASD often learns, alone or with support, strategies to adapt — sometimes at the cost of considerable fatigue.",
        },
        {
          type: "p",
          text: "Recognising the sensory dimension helps to avoid purely behavioural interpretations (“he’s doing it on purpose”, “she’s exaggerating”). Adapting the environment, planning breaks and identifying saturation thresholds are often concrete levers, well before any discussion of a label.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensory processing and daily life",
          body: "Sensory characteristics are an integral part of the spectrum for many people. Naming them helps to adjust the framework, rather than forcing one-sided adaptation.",
        },
      ],
    },
    {
      id: "enfant",
      title: "In childhood",
      blocks: [
        {
          type: "p",
          text: "In childhood, questions may emerge early — sometimes from the first years — or later, when social and school demands become more complex. Parents, school or a healthcare professional may notice atypical development of language, symbolic play, shared attention, or an unusual reaction to changes and sensory stimulation.",
        },
        {
          type: "p",
          text: "Not every child who presents relational difficulties, a focused interest or sensory sensitivity has ASD. Other explanations exist: language delay, anxiety disorder, ADHD, learning difficulties, a stressful family context, and so on. This is precisely why a careful, multidisciplinary and contextualised assessment is necessary.",
        },
        {
          type: "p",
          text: "Early support, when indicated, does not aim to “normalise” the child, but to support their development, communication, wellbeing and the adjustment of their environment (family, school, leisure). French recommendations emphasise identification, referral and interventions adapted to individual needs.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Questions in childhood",
          body: "If persistent characteristics cause lasting concern, speaking with the GP or a paediatrician, then referral to a specialist service or a trained professional, is the recommended course of action. The psychologist can contribute to assessment and support.",
        },
      ],
    },
    {
      id: "adolescence",
      title: "In adolescence",
      blocks: [
        {
          type: "p",
          text: "Adolescence often intensifies social, school and identity-related challenges. For an autistic person, this period may reveal difficulties that had until then been compensated: fatigue linked to camouflage, isolation, anxiety, bullying, disengagement, or conversely a clearer assertion of their needs and interests.",
        },
        {
          type: "p",
          text: "Some adolescents with ASD then discover communities, passions or ways of learning that suit them better. Others go through a period of significant distress. Those around them may be puzzled by a gap between strong intellectual abilities and relational or sensory suffering that is not readily visible.",
        },
        {
          type: "p",
          text: "Support at this age often combines clinical listening, possible school adjustments, work on self-esteem, and respect for the person’s pace. Diagnosis, when relevant, can offer a framework for understanding — without becoming an imposed identity.",
        },
      ],
    },
    {
      id: "adulte",
      title: "In adulthood",
      blocks: [
        {
          type: "p",
          text: "Many adults discover the possibility of ASD late in life, sometimes after years of questioning, burnout, repeated relational difficulties or a diagnosis in a child. The experience of a person with ASD in adulthood is highly variable: stable or intermittent employment, couple life, parenting, isolation, professional success in a specialised field, chronic exhaustion.",
        },
        {
          type: "p",
          text: "French recommendations concerning adults emphasise the importance of careful clinical assessment, developmental history-taking and consideration of functional impact. The aim is not to apply a label, but to better understand a way of functioning and to open pathways for adjustment and care.",
        },
        {
          type: "p",
          text: "A late diagnosis may be experienced as a relief, a reassessment, or a mixture of both. It deserves to be received with caution, without idealisation or dramatisation. Psychological support can help to integrate this information into an already rich personal history.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Adults and the spectrum",
          body: "Questioning in adulthood is common. It calls for careful assessment, not a quick conclusion based on an online questionnaire.",
        },
      ],
    },
    {
      id: "femmes-camouflage",
      title: "Women and camouflage",
      blocks: [
        {
          type: "p",
          text: "Historically, clinical descriptions of autism have relied mainly on observations of boys and male adolescents. Yet many women — and more broadly many people socialised to hide their difficulties — present profiles that are less immediately recognisable. We often speak of camouflage or masking: conscious or automatic efforts to imitate social codes, prepare conversations, inhibit self-regulatory movements, or conceal sensory fatigue.",
        },
        {
          type: "p",
          text: "This camouflage may allow apparent integration, at the cost of a high mental and emotional load. It sometimes contributes to late diagnoses, confusion with anxiety, depression, eating disorders or personality difficulties, and invalidation of lived experience (“you don’t look autistic”).",
        },
        {
          type: "p",
          text: "Recognising these mechanisms does not amount to diagnosing. It simply invites clinicians and those around the person not to rely solely on a fluent social appearance, and to explore developmental history, sensory processing, interests and the cost of adaptation.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Common misconception",
          body: "“If someone has friends, a job and smiles in company, it isn’t autism.” False: camouflage and the diversity of profiles make some cases of ASD less visible, especially among women and people who appear highly adapted on the surface.",
        },
      ],
    },
    {
      id: "causes",
      title: "What we know about causes",
      blocks: [
        {
          type: "p",
          text: "Current research converges towards a multifactorial origin, largely neurodevelopmental, with a significant genetic contribution and complex interactions across development. There is no single cause, nor any simple environmental factor that “produces” autism on its own.",
        },
        {
          type: "p",
          text: "It is essential to recall what science does not support. Vaccines do not cause autism: this claim has been widely refuted. Similarly, screens or a parenting style do not “cause” ASD. Sensationalist content still circulates; relying on institutional sources (WHO, Inserm, HAS) helps to avoid unjustified blame.",
        },
        {
          type: "p",
          text: "Understanding causes, in the current state of knowledge, mainly helps to shift the perspective: from blame towards support, from searching for a culprit towards adjusting needs and environments.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Myths to set aside",
          body: "Neither vaccines, nor screens, nor “the way a child is raised” cause autism. These ideas are contradicted by scientific data and can needlessly hurt families.",
        },
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnosis and assessment",
      blocks: [
        {
          type: "p",
          text: "In France, a diagnosis of ASD is a medical act. It relies on in-depth clinical assessment, developmental history-taking, and often standardised tools and the opinion of several professionals (doctor, psychologist, speech and language therapist, etc.). The Haute Autorité de Santé (HAS) has published recommendations for identification, diagnosis and support, including in adulthood.",
        },
        {
          type: "p",
          text: "The clinical psychologist contributes to this process: they listen, explore the history, may administer certain tools, and participate in understanding the person’s functioning. They do not make the medical diagnosis of ASD alone. This distinction protects the person from a conclusion reached too quickly and clarifies roles.",
        },
        {
          type: "p",
          text: "Before any conclusion, differential diagnoses and possible comorbidities (anxiety, depression, ADHD, learning disorders, etc.) must be considered. An isolated questionnaire completed online is never sufficient.",
        },
        {
          type: "ol",
          items: [
            "Listening to the request and its impact on daily life",
            "Developmental history and gathering of contextual information",
            "Multidisciplinary clinical assessment when indicated",
            "Medical synthesis and referral towards appropriate support",
          ],
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Complementary roles",
          body: "The medical diagnosis of ASD is made by a doctor. The clinical psychologist can contribute to assessment and support, without substituting for this act.",
        },
      ],
    },
    {
      id: "adi-r",
      title: "The ADI-R",
      blocks: [
        {
          type: "p",
          text: "The ADI-R (Autism Diagnostic Interview – Revised) is a structured clinical interview, most often conducted with a parent or someone close who knew the person in childhood. It explores developmental history, social interactions, communication and certain behaviours.",
        },
        {
          type: "p",
          text: "Within an ASD diagnostic process, the ADI-R can help to clarify the pathway and functioning. It does not “diagnose” on its own. Its value lies in the richness of the developmental history and in structuring information gathering, as part of a broader assessment.",
        },
        {
          type: "p",
          text: "In the practice, when an ASD diagnostic process is being considered, this tool may form part of careful clinical work, in connection with other elements of the file and, where applicable, with the doctor responsible for the diagnosis.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "ADI-R: contribution, not verdict",
          body: "The ADI-R can contribute to an ASD diagnostic process. It does not make the diagnosis on its own and is interpreted within a broader clinical and medical picture.",
        },
      ],
    },
    {
      id: "raads-r",
      title: "The RAADS-R",
      blocks: [
        {
          type: "p",
          text: "The RAADS-R (Ritvo Autism Asperger Diagnostic Scale – Revised) is a self-report questionnaire intended mainly for adults. It has been the subject of validation work (notably Ritvo et al., 2011) and may serve as a screening tool or aid to clinical questioning.",
        },
        {
          type: "p",
          text: "It does not constitute a diagnosis. A high score does not confirm ASD; a low score does not rule it out. Studies in outpatient settings (notably Dutch research) have highlighted limitations: sensitivity and specificity vary according to population, risk of false positives or false negatives, and the need for clinical interpretation.",
        },
        {
          type: "p",
          text: "Used with caution, the RAADS-R can open a conversation. Used as a verdict, it misleads. Any lasting conclusion requires a complete professional assessment.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "RAADS-R: screening, not diagnosis",
          body: "The RAADS-R does not establish a diagnosis of ASD. It may clarify questioning, subject to its validation limits and clinical interpretation.",
        },
      ],
    },
    {
      id: "associations",
      title: "ASD and other profiles",
      blocks: [
        {
          type: "p",
          text: "The same person may present ASD alongside other associated characteristics or conditions. This does not imply automatic causality: profiles combine in very diverse ways, and each combination calls for careful clinical reading.",
        },
        {
          type: "p",
          text: "Among associations frequently discussed in the literature and clinical practice, we find notably ADHD, certain anxiety disorders, learning disorders, sleep disorders, as well as marked sensory characteristics. These dimensions can amplify fatigue, complicate schooling or work, or temporarily mask other aspects of functioning.",
        },
        {
          type: "ul",
          items: [
            "ADHD — attention, impulsivity, organisation depending on profile",
            "Anxiety disorders — social anxiety, anticipation, exhaustion",
            "Learning disorders — reading, writing, maths, language",
            "Sleep disorders — falling asleep, waking, rhythm",
            "Sensory characteristics — hypersensitivity, hyposensitivity, overload",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Key points",
          body: "Identifying several dimensions in the same person does not authorise reducing everything to a single label. Assessment aims to understand overall functioning and needs, without forcing cause-and-effect links.",
        },
        {
          type: "cta",
          href: "/comprendre/autres-reperes",
          label: "Other topics & support",
          description:
            "ADHD, sensory processing, stress, schooling and other themes addressed in the practice.",
        },
      ],
    },
    {
      id: "quand-consulter",
      title: "When to seek help?",
      blocks: [
        {
          type: "p",
          text: "Seeking help may be relevant when persistent characteristics of social communication, interests, routines or sensory processing cause distress, exhaustion, school or work difficulties, or family tension. Doubt itself, when it occupies the mind persistently, sometimes deserves to be placed within a clinical framework.",
        },
        {
          type: "p",
          text: "You do not consult to “obtain a label at all costs”, but to better understand a way of functioning and identify what might help. Sometimes assessment points towards ASD; sometimes towards something else; sometimes towards support without an immediate formal diagnosis. Each pathway remains individual.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Considering an appointment",
          body: "If you recognise yourself — or someone close to you — in several of these reference points, with real impact, an initial clinical interview can clarify next steps: listening, possible assessments, medical referral if needed.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "View assessments and evaluations",
          description:
            "Overview of assessments offered in the practice, including the ADI-R process within a clinical framework.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contact the practice",
          description:
            "For a question about arrangements or to book an appointment.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — Autism spectrum disorder: warning signs, identification, diagnosis and assessment in children and adolescents",
      detail: "Recommendation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Autism spectrum disorder: diagnosis and assessment in adults",
      detail: "Recommendation, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Interventions and life pathways in autism spectrum disorder",
      detail: "Updated recommendations, 2026",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l'autisme",
      detail: "Information and signposting",
      href: "https://maisondelautisme.gouv.fr",
    },
    {
      label: "Inserm — Canal Detox: screens do not cause autism",
      detail: "Scientific analysis",
      href: "https://www.inserm.fr",
    },
    {
      label: "WHO — Vaccines and autism",
      detail: "Scientific position: no causal link",
      href: "https://www.who.int",
    },
    {
      label: "Ritvo et al. — The Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R)",
      detail: "Journal of Autism and Developmental Disorders, 2011 (PubMed)",
      href: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      label: "Dutch outpatient studies — limitations of the RAADS-R",
      detail: "Variable sensitivity/specificity across populations; clinical interpretation required",
    },
    {
      label: "APA — DSM-5: Autism spectrum disorder",
      detail: "International reference diagnostic criteria",
    },
  ],
  related: [
    {
      href: "/comprendre/asperger",
      title: "Asperger's syndrome",
      description:
        "What this term still refers to and how it fits within the autism spectrum.",
    },
    {
      href: "/comprendre/hpi",
      title: "High intellectual potential",
      description:
        "Reference points on high intellectual potential, testing and possible links with other ways of functioning.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Other topics & support",
      description:
        "ADHD, sensory processing, stress, schooling, family and assessments.",
    },
  ],
};
