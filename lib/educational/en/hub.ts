import type { EducationalHubCard } from "../hub";

export const educationalHubEn = {
  slug: "comprendre",
  title: "Understand",
  eyebrow: "Educational markers",
  description:
    "Reference pages to better grasp autism spectrum disorder, Asperger syndrome, intellectual giftedness, and other markers useful for support — without replacing a clinical assessment.",
  metaTitle: "Understand neurodivergence | Claire Jalabert",
  metaDescription:
    "Educational markers on ASD, Asperger syndrome, intellectual giftedness and other themes. Informative content, not diagnostic.",
  lead: "These texts aim to clarify, nuance and orient. They do not replace a clinical interview or a medical diagnostic process.",
  cards: [
    {
      slug: "tsa",
      href: "/comprendre/tsa",
      eyebrow: "Autism spectrum",
      title: "Autism spectrum disorder (ASD)",
      description:
        "Definition, domains, sensory processing, ages of life, assessment and tools — to understand better without self-diagnosing.",
    },
    {
      slug: "asperger",
      href: "/comprendre/asperger",
      eyebrow: "History & continuum",
      title: "Asperger syndrome",
      description:
        "What this term still refers to, why the language has evolved, and how it sits today within the autism spectrum.",
    },
    {
      slug: "hpi",
      href: "/comprendre/hpi",
      eyebrow: "Cognitive functioning",
      title: "Intellectual giftedness (HPI)",
      description:
        "Markers on HPI, testing, the diversity of paths, and the HPIC wording used at the practice.",
    },
    {
      slug: "autres-reperes",
      href: "/comprendre/autres-reperes",
      eyebrow: "Beyond labels",
      title: "Other markers & support",
      description:
        "ADHD, sensory processing, stress, schooling, family, groups and assessments — pathways to situate a request.",
    },
  ] satisfies EducationalHubCard[],
} as const;
