import type { EducationalArticle } from "../types";

export const hpiArticle: EducationalArticle = {
  slug: "hpi",
  title: "Alto potencial intelectual (HPI)",
  eyebrow: "Funcionamiento cognitivo",
  description:
    "Referentes sobre el alto potencial intelectual: definición, pruebas, escolaridad, diversidad de trayectorias, infancia y edad adulta, formulación HPIC, vínculos con TEA y TDAH, y papel de la evaluación.",
  metaTitle:
    "Alto potencial intelectual (HPI): comprender y evaluar | Claire Jalabert",
  metaDescription:
    "Página pedagógica sobre el HPI y la formulación HPIC: pruebas, éxito escolar, diversidad, creatividad, posibles vínculos con TEA y TDAH. Contenido informativo, no diagnóstico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-3",
  toc: [
    { id: "definition", label: "Definición y referentes" },
    { id: "tests", label: "Pruebas y evaluación" },
    { id: "reussite-scolaire", label: "Éxito escolar" },
    { id: "diversite", label: "Diversidad de perfiles" },
    { id: "enfant", label: "En la infancia" },
    { id: "adulte", label: "En la edad adulta" },
    { id: "creativite-hpic", label: "Creatividad y HPIC" },
    { id: "hpi-tsa", label: "HPI y TEA" },
    { id: "hpi-tdah", label: "HPI y TDAH" },
    { id: "bilan", label: "La evaluación" },
  ],
  sections: [
    {
      id: "definition",
      title: "Definición y referentes",
      blocks: [
        {
          type: "p",
          text: "El alto potencial intelectual (HPI) designa un funcionamiento cognitivo situado en la franja superior de la distribución de las aptitudes medidas por las pruebas de inteligencia, a menudo — pero no siempre — asociado a particularidades de razonamiento, aprendizaje o sensibilidad. No es una enfermedad, ni un tipo de personalidad, ni una garantía de éxito.",
        },
        {
          type: "p",
          text: "En numerosos contextos franceses, un CI total en torno a 130 (aproximadamente dos desviaciones estándar por encima de la media en las escalas de Wechsler) es una referencia frecuente para hablar de alto potencial. Este umbral es un referente estadístico útil; no es una regla simplista universal. La interpretación clínica también considera el perfil de los índices, la historia de la persona, el impacto funcional y el contexto.",
        },
        {
          type: "p",
          text: "En el ámbito escolar, los textos oficiales evocan a los alumnos con alto potencial intelectual y la necesidad de tener en cuenta sus necesidades educativas particulares. El code de l’éducation (artículo L321-4) y los recursos Eduscol (vademecum Élèves à haut potentiel) recuerdan la importancia de un acompañamiento pedagógico adaptado, sin folclore ni mitología.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Un referente, no una esencia",
          body: "Un CI ~130 es una referencia frecuente, no una frontera mágica. El HPI se comprende en una evaluación global, no a través de una cifra aislada leída fuera de contexto.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenido pedagógico",
          body: "Esta página no establece un diagnóstico y no permite concluir por sí sola un alto potencial. Solo una evaluación profesional puede esclarecer una situación individual.",
        },
      ],
    },
    {
      id: "tests",
      title: "Pruebas y evaluación",
      blocks: [
        {
          type: "p",
          text: "La evaluación del funcionamiento intelectual se basa típicamente en una escala de Wechsler adaptada a la edad (WISC para niños y adolescentes, WAIS para adultos), administrada por un psicólogo formado. El CI total es solo una síntesis: los índices (comprensión verbal, visuoespacial, razonamiento fluido, memoria de trabajo, velocidad de procesamiento, etc., según la versión) aportan un perfil más fino.",
        },
        {
          type: "p",
          text: "Una diferencia importante entre índices, una ansiedad de rendimiento, la fatiga, un trastorno asociado o condiciones de administración desfavorables pueden influir en los resultados. Por eso la evaluación no se reduce a «hacerse un CI»: la entrevista clínica, la anamnesis y, si es necesario, otras herramientas (atención, afectivo, proyectivo) completan la lectura.",
        },
        {
          type: "p",
          text: "Las pruebas en línea o los cuestionarios virales no sustituyen a una evaluación estandarizada. Pueden alimentar un cuestionamiento; no validan un alto potencial.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idea recibida",
          body: "«Un test gratuito en Internet basta para saber si uno es HPI.» Falso: solo herramientas estandarizadas, administradas e interpretadas por un profesional, permiten una estimación fiable en un marco clínico.",
        },
      ],
    },
    {
      id: "reussite-scolaire",
      title: "Éxito escolar",
      blocks: [
        {
          type: "p",
          text: "Contrariamente a una imagen extendida, el alto potencial no implica automáticamente excelencia escolar. Algunos niños y adolescentes HPI tienen un rendimiento brillante; otros se aburren, se desconectan, evitan el esfuerzo percibido como inútil, o chocan con métodos pedagógicos poco adaptados a su ritmo de aprendizaje.",
        },
        {
          type: "p",
          text: "El vademecum Eduscol sobre los alumnos con alto potencial subraya la diversidad de trayectorias y la necesidad de posibles adaptaciones pedagógicas (profundización, compactación, tutoría, proyectos, etc.), decididas caso por caso. El artículo L321-4 del code de l’éducation inscribe la atención a los alumnos intelectualmente precoces entre las misiones de la escuela.",
        },
        {
          type: "p",
          text: "Un acompañamiento psicológico puede ayudar cuando la escolaridad se convierte en fuente de ansiedad, conflicto familiar o pérdida de autoestima — incluso cuando las notas siguen siendo buenas en apariencia.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "HPI ≠ boletín perfecto",
          body: "El éxito escolar no es ni una condición ni una prueba automática de alto potencial. El aburrimiento, el desenganche o la ansiedad pueden coexistir con un funcionamiento intelectual elevado.",
        },
      ],
    },
    {
      id: "diversite",
      title: "Diversidad de perfiles",
      blocks: [
        {
          type: "p",
          text: "No existe un «retrato robot» del HPI. Se encuentran perfiles muy verbales, otros más visuoespaciales; personas cómodas socialmente y otras reservadas; trayectorias lineales y recorridos caóticos. La sensibilidad emocional, a menudo evocada, no es ni universal ni exclusiva del alto potencial.",
        },
        {
          type: "p",
          text: "Conviene desconfiar de las listas de rasgos que prometen «reconocer un HPI en cinco signos». A menudo confunden personalidad, cultura, ansiedad y aptitudes cognitivas. Una lectura clínica prudente es preferible a las listas virales.",
        },
        {
          type: "ul",
          items: [
            "Heterogeneidad de los índices cognitivos",
            "Variabilidad de la adaptación escolar y profesional",
            "Presencia o ausencia de sufrimiento asociado",
            "Posible coexistencia con otros funcionamientos (TDAH, TEA, trastornos del aprendizaje, etc.)",
          ],
        },
      ],
    },
    {
      id: "enfant",
      title: "En la infancia",
      blocks: [
        {
          type: "p",
          text: "En la infancia, el cuestionamiento en torno al alto potencial surge a menudo ante un desajuste: lenguaje precoz, curiosidad intensa, preguntas existenciales tempranas, aburrimiento en clase, perfeccionismo, o, por el contrario, dificultades inesperadas a pesar de capacidades visibles. Los padres buscan a veces una explicación a un comportamiento que la escuela tiene dificultades para situar.",
        },
        {
          type: "p",
          text: "Una evaluación puede esclarecer el funcionamiento y abrir vías pedagógicas. También puede concluir otra cosa, o un cuadro mixto. El niño no necesita ser «etiquetado» para ser escuchado: la evaluación es una herramienta al servicio del bienestar y del ajuste, no un fin en sí mismo.",
        },
        {
          type: "p",
          text: "El acompañamiento puede articular la escucha del niño, la orientación parental, el vínculo eventual con la escuela, y el trabajo sobre la ansiedad, la autoestima o las relaciones con los pares cuando sea necesario.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "¿Cuándo plantear una evaluación?",
          body: "Cuando el desajuste escolar, relacional o emocional persiste y hace sufrir al niño o a la familia, una entrevista y, si está indicado, una evaluación cognitiva pueden esclarecer la situación.",
        },
      ],
    },
    {
      id: "adulte",
      title: "En la edad adulta",
      blocks: [
        {
          type: "p",
          text: "En la edad adulta, la demanda en torno al HPI aparece a veces tras años de sensación de desajuste, un burnout, una reorientación, o el descubrimiento de un alto potencial en un hijo. Algunas personas buscan un nombre para un funcionamiento vivido durante mucho tiempo como «demasiado»: demasiado intenso, demasiado rápido, demasiado exigente, demasiado sensible.",
        },
        {
          type: "p",
          text: "Una evaluación en la edad adulta puede aportar claves de comprensión. No resuelve por sí sola las dificultades profesionales o relacionales, pero puede reorientar el relato personal y guiar un acompañamiento. Otras dimensiones (ansiedad, TDAH, TEA, agotamiento) deben permanecer en el campo de visión.",
        },
        {
          type: "p",
          text: "El alto potencial no es ni un estatus social ni una excusa universal. Es una información entre otras sobre un funcionamiento, a articular con los valores, la historia y las necesidades actuales de la persona.",
        },
      ],
    },
    {
      id: "creativite-hpic",
      title: "Creatividad y HPIC",
      blocks: [
        {
          type: "p",
          text: "En la consulta, Claire Jalabert utiliza la formulación Haut Potentiel Intellectuel et Créatif (HPIC). Se trata de su formulación clínica de trabajo, destinada a subrayar que el funcionamiento concernido no se reduce a una puntuación intelectual: la creatividad, el pensamiento divergente, la intensidad imaginativa o la singularidad de las asociaciones de ideas pueden formar parte del cuadro.",
        },
        {
          type: "p",
          text: "HPIC no es una categoría diagnóstica oficial. No es ni un código CIE o DSM, ni una etiqueta reconocida como tal por el Ministerio de Educación francés. Es una manera de nombrar, en la práctica, una articulación entre potencial intelectual y dimensión creativa, útil para el acompañamiento.",
        },
        {
          type: "p",
          text: "Esta precisión evita dos escollos: reducir a la persona a un CI, y presentar HPIC como un diagnóstico estandarizado. La formulación queda al servicio de la clínica, no al revés.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "HPIC: formulación de consulta",
          body: "HPIC designa la formulación utilizada por Claire Jalabert en su práctica. No es una categoría diagnóstica oficial.",
        },
      ],
    },
    {
      id: "hpi-tsa",
      title: "HPI y TEA",
      blocks: [
        {
          type: "p",
          text: "El alto potencial y el trastorno del espectro autista pueden coexistir. También pueden confundirse cuando se apoya en listas de rasgos demasiado generales (intereses intensos, sensibilidad, sensación de desajuste). Un razonamiento sofisticado no excluye un TEA; un TEA no implica un HPI.",
        },
        {
          type: "p",
          text: "La distinción clínica se apoya en la historia evolutiva, la comunicación social, la sensorialidad, el perfil cognitivo y el impacto funcional. A veces las dos dimensiones están presentes; a veces solo una; a veces ninguna, a pesar de un cuestionamiento inicial. Ver también las páginas TEA (/comprendre/tsa) y Asperger (/comprendre/asperger).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Evitar la amalgama",
          body: "HPI y TEA son dimensiones distintas. Su posible cruce se determina mediante una evaluación cuidadosa, no por semejanza superficial.",
        },
      ],
    },
    {
      id: "hpi-tdah",
      title: "HPI y TDAH",
      blocks: [
        {
          type: "p",
          text: "El TDAH (trastorno por déficit de atención con o sin hiperactividad) puede también coexistir con un alto potencial, o ser evocado erróneamente ante un aburrimiento escolar, un pensamiento rápido o una agitación ligada a la subestimulación. A la inversa, un TDAH puede enmascarar o frenar la expresión de competencias cognitivas elevadas.",
        },
        {
          type: "p",
          text: "Atención, impulsividad, organización, memoria de trabajo y regulación emocional forman parte de las zonas de solapamiento posibles. La evaluación diferencial — y a veces complementaria — requiere tiempo y herramientas adaptadas. Para otros referentes, ver la sección TDAH (/comprendre/autres-reperes#tdah).",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idea recibida",
          body: "«Si es HPI, no es TDAH — simplemente se aburre.» No necesariamente: ambos pueden coexistir, y el aburrimiento por sí solo no explica todos los cuadros atencionales.",
        },
      ],
    },
    {
      id: "bilan",
      title: "La evaluación",
      blocks: [
        {
          type: "p",
          text: "Una evaluación psicométrica y clínica tiene por objetivo comprender un funcionamiento, no otorgar un título. Se inscribe en una demanda: sufrimiento, cuestionamiento escolar, orientación, mejor conocimiento de uno mismo. Los resultados se restituyen en un lenguaje accesible, con sus límites e implicaciones concretas.",
        },
        {
          type: "p",
          text: "Según las situaciones, la evaluación cognitiva puede completarse con otras evaluaciones (atencional, afectiva, proyectiva, o contribución a un proceso TEA). La continuación puede ser un acompañamiento terapéutico, un vínculo con la escuela, una orientación médica, o simplemente una clarificación útil para la persona y sus allegados.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Hablar de ello en la consulta",
          body: "La secretaría y una primera entrevista permiten esclarecer si una evaluación es pertinente, cuál, y en qué plazo — sin precipitación.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Evaluaciones e informes",
          description:
            "Presentación de las evaluaciones propuestas en la consulta.",
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
      label: "Eduscol — Vademecum « Scolariser les élèves à haut potentiel »",
      detail: "Recurso pedagógico nacional sobre alumnos con alto potencial (EHP)",
      href: "https://eduscol.education.fr",
    },
    {
      label: "Code de l’éducation — article L321-4",
      detail: "Atención a los alumnos intelectualmente precoces (Código de la educación francés)",
      href: "https://www.legifrance.gouv.fr",
    },
    {
      label: "Escalas de Wechsler (WISC, WAIS)",
      detail: "Herramientas estandarizadas de evaluación del funcionamiento intelectual",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trastorno del espectro autista",
      description:
        "Para distinguir y explorar posibles funcionamientos del espectro.",
    },
    {
      href: "/comprendre/asperger",
      title: "Síndrome de Asperger",
      description:
        "Historia del término y vínculos frecuentes con los cuestionamientos HPI.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Otros referentes y acompañamientos",
      description:
        "TDAH, escolaridad, familia, grupos y evaluaciones.",
    },
  ],
};
