import type { EducationalHubCard } from "../hub";

export const educationalHubEs = {
  slug: "comprendre",
  title: "Comprender",
  eyebrow: "Referentes pedagógicos",
  description:
    "Páginas de referencia para comprender mejor el trastorno del espectro autista, el síndrome de Asperger, el alto potencial intelectual y otros referentes útiles para el acompañamiento — sin sustituir una evaluación clínica.",
  metaTitle: "Comprender — TEA, Asperger, HPI | Claire Jalabert",
  metaDescription:
    "Referentes pedagógicos sobre el TEA, el síndrome de Asperger, el alto potencial intelectual y otras temáticas. Contenido informativo, no diagnóstico.",
  lead: "Estos textos pretenden aclarar, matizar y orientar. No sustituyen una entrevista clínica ni un proceso diagnóstico médico.",
  cards: [
    {
      slug: "tsa",
      href: "/comprendre/tsa",
      eyebrow: "Espectro autista",
      title: "Trastorno del espectro autista (TEA)",
      description:
        "Definición, ámbitos, sensorialidad, edades de la vida, evaluación y herramientas — para comprender mejor sin autodiagnosticarse.",
    },
    {
      slug: "asperger",
      href: "/comprendre/asperger",
      eyebrow: "Historia y continuum",
      title: "Síndrome de Asperger",
      description:
        "Qué designa aún este término, por qué ha evolucionado el lenguaje, y cómo se inscribe hoy en el espectro autista.",
    },
    {
      slug: "hpi",
      href: "/comprendre/hpi",
      eyebrow: "Funcionamiento cognitivo",
      title: "Alto potencial intelectual (HPI)",
      description:
        "Referentes sobre el HPI, las pruebas, la diversidad de recorridos y la formulación HPIC usada en la consulta.",
    },
    {
      slug: "autres-reperes",
      href: "/comprendre/autres-reperes",
      eyebrow: "Más allá de las etiquetas",
      title: "Otros referentes y acompañamientos",
      description:
        "TDAH, sensorialidad, estrés, escolaridad, familia, grupos y evaluaciones — pistas para situar una demanda.",
    },
  ] satisfies EducationalHubCard[],
} as const;
