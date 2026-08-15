import type { EducationalArticle } from "../types";

export const hpiArticle: EducationalArticle = {
  slug: "hpi",
  title: "High Intellectual Potential (HPI)",
  eyebrow: "Cognitive functioning",
  description:
    "Guidance on high intellectual potential: definition, tests, schooling, diversity of pathways, children and adults, HPIC formulation, links with ASD and ADHD, and the role of assessment.",
  metaTitle:
    "Understanding intellectual giftedness (HPI) | Claire Jalabert",
  metaDescription:
    "Educational page on HPI and the HPIC formulation: tests, school success, diversity, creativity, possible links with ASD and ADHD. Informational content, not diagnostic.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-3",
  toc: [
    { id: "definition", label: "Definition and key points" },
    { id: "tests", label: "Tests and assessment" },
    { id: "reussite-scolaire", label: "School success" },
    { id: "diversite", label: "Diversity of profiles" },
    { id: "enfant", label: "In children" },
    { id: "adulte", label: "In adults" },
    { id: "creativite-hpic", label: "Creativity and HPIC" },
    { id: "hpi-tsa", label: "HPI and ASD" },
    { id: "hpi-tdah", label: "HPI and ADHD" },
    { id: "bilan", label: "Assessment" },
  ],
  sections: [
    {
      id: "definition",
      title: "Definition and key points",
      blocks: [
        {
          type: "p",
          text: "High intellectual potential (HPI) refers to a cognitive profile in the upper range of abilities measured by intelligence tests, often — but not always — accompanied by particularities in reasoning, learning, or sensitivity. It is not an illness, a personality type, or a guarantee of success.",
        },
        {
          type: "p",
          text: "In many French contexts, a total IQ around 130 (approximately two standard deviations above the mean on Wechsler scales) is a frequent reference point for high potential. This threshold is a useful statistical marker; it is not a simplistic universal rule. Clinical interpretation also considers the profile of index scores, the person's history, functional impact, and context.",
        },
        {
          type: "p",
          text: "In school settings, official texts refer to pupils with high intellectual potential and the need to address their specific educational needs. The French Education Code (article L321-4) and Eduscol resources (vademecum on pupils with high potential) emphasize the importance of appropriate pedagogical support, without folklore or mythology.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "A reference point, not an essence",
          body: "An IQ of ~130 is a frequent reference, not a magical boundary. HPI is understood within a comprehensive assessment, not through an isolated number read out of context.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Educational content",
          body: "This page does not establish a diagnosis and cannot alone confirm high intellectual potential. Only a professional assessment can clarify an individual situation.",
        },
      ],
    },
    {
      id: "tests",
      title: "Tests and assessment",
      blocks: [
        {
          type: "p",
          text: "Assessment of intellectual functioning typically relies on a Wechsler scale adapted to age (WISC for children and adolescents, WAIS for adults), administered by a trained psychologist. Total IQ is only a summary: the indices (verbal comprehension, visuospatial, fluid reasoning, working memory, processing speed, etc., depending on the version) provide a finer profile.",
        },
        {
          type: "p",
          text: "A large gap between indices, performance anxiety, fatigue, an associated condition, or unfavorable testing conditions can influence results. That is why assessment is not simply « taking an IQ test »: the clinical interview, history-taking, and, when needed, other tools (attention, emotional, projective) complete the reading.",
        },
        {
          type: "p",
          text: "Online tests or viral questionnaires do not replace standardized assessment. They may inform a question; they do not validate high intellectual potential.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Common misconception",
          body: "« A free online test is enough to know if you are HPI. » False: only standardized tools, administered and interpreted by a professional, allow a reliable estimate in a clinical setting.",
        },
      ],
    },
    {
      id: "reussite-scolaire",
      title: "School success",
      blocks: [
        {
          type: "p",
          text: "Contrary to a widespread image, high intellectual potential does not automatically mean academic excellence. Some HPI children and adolescents succeed brilliantly; others become bored, disengage, avoid effort perceived as pointless, or struggle with teaching methods poorly suited to their learning pace.",
        },
        {
          type: "p",
          text: "The Eduscol vademecum on pupils with high potential emphasizes the diversity of pathways and the need for possible pedagogical adjustments (enrichment, compaction, tutoring, projects, etc.), decided on a case-by-case basis. Article L321-4 of the French Education Code includes support for intellectually precocious pupils among the school's missions.",
        },
        {
          type: "p",
          text: "Psychological support can help when school becomes a source of anxiety, family conflict, or loss of self-esteem — including when grades still appear good on the surface.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "HPI ≠ perfect report card",
          body: "School success is neither a condition nor automatic proof of high intellectual potential. Boredom, disengagement, or anxiety can coexist with elevated intellectual functioning.",
        },
      ],
    },
    {
      id: "diversite",
      title: "Diversity of profiles",
      blocks: [
        {
          type: "p",
          text: "There is no single « stereotype » of HPI. Some profiles are highly verbal, others more visuospatial; some people are socially at ease, others reserved; some follow linear paths, others chaotic trajectories. Emotional sensitivity, often mentioned, is neither universal nor exclusive to high potential.",
        },
        {
          type: "p",
          text: "Lists of traits promising to « recognize HPI in five signs » should be treated with caution. They often conflate personality, culture, anxiety, and cognitive abilities. A humble clinical reading is preferable to viral checklists.",
        },
        {
          type: "ul",
          items: [
            "Heterogeneity of cognitive indices",
            "Variability in school and professional adaptation",
            "Presence or absence of associated distress",
            "Possible coexistence with other profiles (ADHD, ASD, learning disorders, etc.)",
          ],
        },
      ],
    },
    {
      id: "enfant",
      title: "In children",
      blocks: [
        {
          type: "p",
          text: "In children, questions about high intellectual potential often arise in the face of a mismatch: early language, intense curiosity, precocious existential questions, boredom in class, perfectionism, or conversely unexpected difficulties despite visible abilities. Parents sometimes seek an explanation for behavior the school struggles to place.",
        },
        {
          type: "p",
          text: "An assessment can clarify functioning and open pedagogical avenues. It may also point to something else, or a mixed picture. A child does not need to be « labeled » to be heard: assessment is a tool in service of well-being and adjustment, not an end in itself.",
        },
        {
          type: "p",
          text: "Support may combine listening to the child, parental guidance, possible liaison with the school, and work on anxiety, self-esteem, or peer relationships when needed.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "When to consider an assessment?",
          body: "When a school, relational, or emotional mismatch persists and causes distress for the child or family, an initial interview and, if indicated, a cognitive assessment can clarify the situation.",
        },
      ],
    },
    {
      id: "adulte",
      title: "In adults",
      blocks: [
        {
          type: "p",
          text: "In adulthood, questions about HPI sometimes arise after years of feeling out of step, a burnout, a career change, or the discovery of high potential in a child. Some people seek a name for a way of functioning long experienced as « too much »: too intense, too fast, too demanding, too sensitive.",
        },
        {
          type: "p",
          text: "An adult assessment can provide keys to understanding. It does not alone resolve professional or relational difficulties, but it can reorient one's self-narrative and guide support. Other dimensions (anxiety, ADHD, ASD, exhaustion) should remain in view.",
        },
        {
          type: "p",
          text: "High intellectual potential is neither a social status nor a universal excuse. It is one piece of information about a way of functioning, to be articulated with the person's values, history, and current needs.",
        },
      ],
    },
    {
      id: "creativite-hpic",
      title: "Creativity and HPIC",
      blocks: [
        {
          type: "p",
          text: "In her practice, Claire Jalabert uses the formulation High Intellectual and Creative Potential (HPIC). This is her working clinical formulation, intended to emphasize that the profile in question is not reducible to an intellectual score: creativity, divergent thinking, imaginative intensity, or the singularity of idea associations may be part of the picture.",
        },
        {
          type: "p",
          text: "HPIC is not an official diagnostic category. It is neither an ICD or DSM code, nor a label recognized as such by the French Ministry of Education. It is a way of naming, in practice, an articulation between intellectual potential and a creative dimension, useful for support.",
        },
        {
          type: "p",
          text: "This clarification avoids two pitfalls: reducing the person to an IQ, and presenting HPIC as a standardized diagnosis. The formulation serves clinical work, not the other way around.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "HPIC: practice formulation",
          body: "HPIC refers to the formulation used by Claire Jalabert in her practice. It is not an official diagnostic category.",
        },
      ],
    },
    {
      id: "hpi-tsa",
      title: "HPI and ASD",
      blocks: [
        {
          type: "p",
          text: "High intellectual potential and autism spectrum disorder can coexist. They can also be confused when relying on overly general trait lists (intense interests, sensitivity, feeling of being different). Sophisticated reasoning does not rule out ASD; ASD does not imply HPI.",
        },
        {
          type: "p",
          text: "Clinical distinction relies on developmental history, social communication, sensory processing, cognitive profile, and functional impact. Sometimes both dimensions are present; sometimes only one; sometimes neither, despite an initial question. See also the ASD (/comprendre/tsa) and Asperger (/comprendre/asperger) pages.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Avoid conflating",
          body: "HPI and ASD are distinct dimensions. Their possible overlap is determined through careful assessment, not superficial resemblance.",
        },
      ],
    },
    {
      id: "hpi-tdah",
      title: "HPI and ADHD",
      blocks: [
        {
          type: "p",
          text: "ADHD (attention-deficit/hyperactivity disorder) can also coexist with high intellectual potential, or be mistakenly raised in the face of school boredom, rapid thinking, or agitation linked to understimulation. Conversely, ADHD can mask or hinder the expression of elevated cognitive abilities.",
        },
        {
          type: "p",
          text: "Attention, impulsivity, organization, working memory, and emotional regulation are among the possible areas of overlap. Differential — and sometimes complementary — assessment requires time and appropriate tools. For further guidance, see the ADHD section (/comprendre/autres-reperes#tdah).",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Common misconception",
          body: "« If they are HPI, it's not ADHD — they're just bored. » Not necessarily: both can coexist, and boredom alone does not explain all attention profiles.",
        },
      ],
    },
    {
      id: "bilan",
      title: "Assessment",
      blocks: [
        {
          type: "p",
          text: "A psychometric and clinical assessment aims to understand a way of functioning, not to deliver a title. It fits within a request: distress, school questions, orientation, better self-knowledge. Results are shared in accessible language, with their limits and practical implications.",
        },
        {
          type: "p",
          text: "Depending on the situation, cognitive assessment may be supplemented by other evaluations (attentional, emotional, projective, or contribution to an ASD process). What follows may be therapeutic support, liaison with the school, medical referral, or simply useful insight for the person and those close to them.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Discussing it at the practice",
          body: "The office and an initial interview help clarify whether an assessment is relevant, which one, and on what timeline — without rushing.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Assessments and evaluations",
          description:
            "Overview of assessments offered at the practice.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contact the office",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Eduscol — Vademecum « Scolariser les élèves à haut potentiel »",
      detail: "National pedagogical resource on pupils with high potential (EHP)",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — article L321-4",
      detail: "Provision for intellectually precocious pupils (French Education Code)",
      href: "https://www.legifrance.gouv.fr",
    },
    {
      label: "Wechsler scales (WISC, WAIS)",
      detail: "Standardized tools for assessing intellectual functioning",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Autism spectrum disorder",
      description:
        "To distinguish and explore possible overlapping profiles.",
    },
    {
      href: "/comprendre/asperger",
      title: "Asperger's syndrome",
      description:
        "History of the term and frequent links with HPI questions.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Other guidance & support",
      description:
        "ADHD, schooling, family, groups, and assessments.",
    },
  ],
};
