import type { EducationalArticle } from "../types";

export const autresReperesArticle: EducationalArticle = {
  slug: "autres-reperes",
  title: "Otros referentes y acompañamientos",
  eyebrow: "Más allá de las etiquetas",
  description:
    "Referentes pedagógicos sobre el TDAH, la sensorialidad, el estrés, las dificultades escolares, la familia, el enfoque transgeneracional, los grupos de apoyo y las evaluaciones — para situar una demanda de acompañamiento.",
  metaTitle:
    "Otros referentes y acompañamientos | Claire Jalabert",
  metaDescription:
    "TDAH, sensorialidad, estrés, escolaridad, familia, transgeneracional, grupos y evaluaciones: referentes para aclarar una demanda, sin sustituir una evaluación clínica.",
  updatedAt: "2026-08-14",
  atmosphere: "phase-4",
  toc: [
    { id: "tdah", label: "TDAH" },
    { id: "sensorialite", label: "Sensorialidad" },
    { id: "stress", label: "Estrés y agotamiento" },
    { id: "scolaires", label: "Dificultades escolares" },
    { id: "famille", label: "Familia y pareja" },
    { id: "transgenerationnel", label: "Transgeneracional" },
    { id: "groupes", label: "Grupos de apoyo" },
    { id: "bilans", label: "Evaluaciones" },
  ],
  sections: [
    {
      id: "tdah",
      title: "TDAH",
      blocks: [
        {
          type: "p",
          text: "El trastorno por déficit de atención con o sin hiperactividad (TDAH) es un trastorno del neurodesarrollo que puede manifestarse mediante dificultades atencionales persistentes, impulsividad, agitación motora o mental, y un impacto en varios contextos (escuela, trabajo, relaciones, organización del día a día).",
        },
        {
          type: "p",
          text: "Como en otros funcionamientos, el TDAH no se diagnostica a partir de una impresión aislada ni de un cuestionario en línea. La evaluación implica una anamnesis, observaciones cruzadas y, según los casos, herramientas atencionales, en un marco profesional. El diagnóstico médico corresponde al médico; la psicóloga puede contribuir a la evaluación y al acompañamiento.",
        },
        {
          type: "p",
          text: "El TDAH puede coexistir con un alto potencial intelectual (HPI), un TEA, una ansiedad o trastornos del aprendizaje. Estas asociaciones hacen aún más importante una lectura diferencial prudente. Véase también las páginas HPI (/comprendre/hpi#hpi-tdah) y TEA (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Sin autodiagnóstico",
          body: "Las dificultades de atención u organización tienen numerosas causas posibles. Solo una evaluación profesional permite situarlas correctamente.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "A recordar",
          body: "El TDAH es un posible funcionamiento del neurodesarrollo entre otros. Merece una evaluación cuidadosa cuando repercute de forma duradera en la vida cotidiana.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialidad",
      blocks: [
        {
          type: "p",
          text: "La sensorialidad designa la manera en que una persona recibe, filtra y reacciona a las estimulaciones sensoriales: oído, vista, tacto, olfato, gusto, pero también el sentido del movimiento y las sensaciones corporales internas. Pueden existir hiper- o hiposensibilidades fuera de cualquier TEA, aunque sean frecuentes en personas autistas.",
        },
        {
          type: "p",
          text: "En el día a día, una saturación sensorial puede parecerse a irritabilidad, evitación, agitación o una necesidad urgente de soledad. Comprender esta dimensión evita moralizar (« demasiado sensible ») y abre posibilidades de adaptación: auriculares, pausas, elección de texturas, regulación de la luz, anticipación de lugares ruidosos.",
        },
        {
          type: "p",
          text: "Cuando un cuestionamiento sensorial se asocia a particularidades en la comunicación social o en los intereses, puede ser pertinente una exploración más amplia del espectro — sin conclusiones automáticas. La sección « Sensorialidad » de la página TEA (/comprendre/tsa#sensorialite) desarrolla este punto en el marco del autismo.",
        },
        {
          type: "p",
          text: "En el día a día, los esfuerzos necesarios para adaptarse al entorno y a las normas esperadas pueden ser especialmente costosos. En algunas personas, esto va acompañado de una gran fatigabilidad y de una « batería social » que puede agotarse rápidamente, aumentando la vulnerabilidad cuando las capacidades de adaptación están agotadas.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialidad y confort",
          body: "Nombrar los umbrales sensoriales suele ayudar más rápido que forzar la adaptación. El entorno puede ser una palanca importante de alivio.",
        },
      ],
    },
    {
      id: "stress",
      title: "Estrés y agotamiento",
      blocks: [
        {
          type: "p",
          text: "El estrés prolongado, la ansiedad y el agotamiento figuran entre los motivos frecuentes de consulta. Pueden estar vinculados al trabajo, a los estudios, a la familia, a un funcionamiento del neurodesarrollo poco reconocido, a un camuflaje social costoso o a una acumulación de microexigencias.",
        },
        {
          type: "p",
          text: "El acompañamiento no se limita a « gestionar el estrés » como una técnica aislada. A menudo consiste en comprender qué sobrecarga el sistema: exigencias excesivas, falta de recuperación, conflictos de valores, hiperadaptación, perfeccionismo, entorno sensorial hostil.",
        },
        {
          type: "p",
          text: "En algunas personas con TEA o alto potencial intelectual (HPI), el agotamiento aparece tras años de adaptación invisible. En otras, se inscribe en una crisis de pareja, una parentalidad intensa o un contexto profesional perjudicial. La clínica parte del vivir, no de una etiqueta previa.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Cuando el estrés se vuelve invasivo",
          body: "Trastornos del sueño persistentes, pérdida de impulso, irritabilidad creciente, aislamiento o ideas de desvalorización merecen un espacio de escucha profesional.",
        },
      ],
    },
    {
      id: "scolaires",
      title: "Dificultades escolares",
      blocks: [
        {
          type: "p",
          text: "Las dificultades escolares abarcan realidades muy diversas: aprendizajes, atención, ansiedad de rendimiento, acoso escolar, fobia escolar, aburrimiento, abandono escolar, conflictos con la institución o necesidades educativas especiales (incluidas las vinculadas al alto potencial intelectual).",
        },
        {
          type: "p",
          text: "La consulta puede ofrecer acompañamiento al niño o adolescente, trabajo con los padres y, cuando sea pertinente, mediación escolar. El objetivo no es « encajar » al alumno en un molde, sino comprender el freno y abrir adaptaciones realistas.",
        },
        {
          type: "p",
          text: "Una evaluación cognitiva o atencional puede aclarar ciertas situaciones; no es sistemática. A veces, lo esencial es relacional o emocional más que psicométrico. Los recursos Eduscol y el marco del código de la educación aportan puntos de apoyo en el ámbito escolar; la clínica aporta la escucha del sujeto.",
        },
        {
          type: "p",
          text: "El trabajo puede ser primero metacognitivo: comprender cómo la persona reflexiona, cómo aprende y qué estrategias moviliza. Se trata de identificar las dificultades o sesgos encontrados, su manifestación en el día a día y las soluciones ya puestas en marcha espontáneamente. Algunas estrategias pueden ser eficaces pero muy costosas, provocando una fatiga importante, resultados irregulares o evitación de ciertas materias. Esta comprensión permite después buscar métodos de remediación más adaptados, en los aprendizajes como en el día a día.",
        },
        {
          type: "p",
          text: "Trabajo en torno a la recuperación de la confianza en uno mismo y la autoestima.",
        },
        {
          type: "ul",
          items: [
            "Escucha del alumno y de su posible sufrimiento",
            "Trabajo con la familia sobre el clima en torno a la escuela",
            "Mediación escolar cuando la relación centro–familia está tensa",
            "Evaluación si se justifica un cuestionamiento cognitivo o atencional",
          ],
        },
      ],
    },
    {
      id: "famille",
      title: "Familia y pareja",
      blocks: [
        {
          type: "p",
          text: "Las relaciones familiares y de pareja están en el centro de numerosas demandas. Conflictos educativos, malentendidos repetidos, agotamiento parental, crisis de pareja, dificultades en torno a un niño atípico: tantas situaciones en las que un espacio de terceros puede ayudar a desenredar posiciones y restablecer una comunicación más viable.",
        },
        {
          type: "p",
          text: "La terapia de pareja y el acompañamiento familiar no buscan un culpable. Exploran las interacciones, las expectativas implícitas, las heridas y los recursos. Comprender los mecanismos, las necesidades y los retos asociados a un trastorno del neurodesarrollo, así como las dinámicas relacionales que puede desencadenar, sin reducirlo todo a ese funcionamiento.",
        },
        {
          type: "p",
          text: "Cada miembro de la familia necesita ser escuchado. El niño no es « el problema »; el síntoma familiar suele ser compartido, aunque el sufrimiento se concentre en uno de los miembros.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Un espacio para el vínculo",
          body: "La pareja y la familia suelen beneficiarse de un marco contenido donde se puede hablar de otro modo, sin juicios precipitados.",
        },
      ],
    },
    {
      id: "transgenerationnel",
      title: "Enfoque transgeneracional",
      blocks: [
        {
          type: "p",
          text: "El enfoque transgeneracional se interesa por lo que se transmite — consciente o no — de una generación a otra: relatos, silencios, lealtades, traumas, roles asignados, secretos, modelos relacionales. No « culpa » a los antepasados; busca comprender cómo una historia familiar informa el presente.",
        },
        {
          type: "p",
          text: "En algunas consultas, se repiten patrones: ansiedad escolar de una generación a otra, dificultad para separarse, el papel del « niño parentificado », o silencio en torno a una experiencia dolorosa. Poner palabras a estos hilos puede aflojar nudos identitarios.",
        },
        {
          type: "p",
          text: "Este enfoque se articula con la escucha individual. No es ni una fatalidad (« es genético, así que no sirve de nada ») ni una explicación total. Es una perspectiva entre otras, útil cuando el presente parece cargar con más que la sola situación actual.",
        },
      ],
    },
    {
      id: "groupes",
      title: "Grupos de apoyo",
      blocks: [
        {
          type: "p",
          text: "Los grupos de apoyo ofrecen un espacio colectivo, enmarcado por un profesional, donde compartir una experiencia vivida, escuchar la de otras personas y reducir el aislamiento. No sustituyen un seguimiento individual, pero pueden complementarlo de forma útil.",
        },
        {
          type: "p",
          text: "Según las temáticas (parentalidad, alto potencial intelectual, espectro autista, estrés, etc.), el grupo permite descubrir que ciertas dificultades no se viven en soledad.",
        },
        {
          type: "p",
          text: "El grupo también puede sostener la autoestima, devolver legitimidad a lo vivido y permitir a cada persona recuperar mayor soberanía en sus elecciones. Ofrece asimismo la posibilidad de compartir victorias, descubrimientos y nuevas adaptaciones que han permitido hacer evolucionar ciertas situaciones.",
        },
        {
          type: "p",
          text: "La confidencialidad, el respeto y la no imposición de « contarse » son condiciones esenciales.",
        },
        {
          type: "p",
          text: "La participación se decide tras información sobre el marco, los objetivos y las modalidades. Cada persona sigue siendo libre de elegir su ritmo de palabra.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Informarse sobre los grupos",
          body: "La secretaría puede indicar los grupos disponibles, sus públicos y las condiciones de inscripción.",
        },
      ],
    },
    {
      id: "bilans",
      title: "Evaluaciones",
      blocks: [
        {
          type: "p",
          text: "Las evaluaciones propuestas en la consulta tienen como objetivo comprender mejor el funcionamiento cognitivo, emocional, sensorial o relacional de la persona. Aclaran el acompañamiento; no se reducen a una etiqueta.",
        },
        {
          type: "p",
          text: "Según la demanda, puede tratarse de una evaluación psicométrica (funcionamiento intelectual), atencional, proyectiva, o de una contribución a un proceso diagnóstico de TEA — en particular mediante una entrevista estructurada de tipo ADI-R, que puede contribuir a la evaluación sin constituir por sí sola el diagnóstico médico.",
        },
        {
          type: "p",
          text: "La elección de la evaluación se construye con la persona (y su familia, en su caso), tras un tiempo de escucha. Una evaluación no siempre es necesaria para iniciar un acompañamiento terapéutico.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Marco de las evaluaciones",
          body: "Las evaluaciones informan y orientan. El diagnóstico médico de TEA, cuando se contempla, sigue correspondiendo al médico. La psicóloga contribuye a la evaluación y a la devolución clínica.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Ver las evaluaciones en la consulta",
          description:
            "Lista de evaluaciones propuestas, con sus objetivos.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Descubrir los acompañamientos",
          description:
            "Entrevistas, terapias, mediaciones, pareja, familia y grupos.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contactar con la secretaría",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — recomendaciones relativas al TEA",
      detail: "Detección, diagnóstico e intervenciones",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Eduscol — alumnos con alto potencial",
      detail: "Vademécum y recursos pedagógicos",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l'éducation — L321-4",
      detail: "Toma en cuenta de los alumnos intelectualmente precoces",
      href: "https://www.legifrance.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trastorno del espectro autista",
      description:
        "Espectro, ámbitos, evaluación y herramientas.",
    },
    {
      href: "/comprendre/asperger",
      title: "Síndrome de Asperger",
      description:
        "Historia del término y su lugar actual en el TEA.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potencial intelectual",
      description:
        "HPI, pruebas, HPIC y distinciones útiles.",
    },
  ],
};
