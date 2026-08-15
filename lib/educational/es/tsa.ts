import type { EducationalArticle } from "../types";

export const tsaArticle: EducationalArticle = {
  slug: "tsa",
  title: "Trastorno del espectro autista (TEA)",
  eyebrow: "Referentes pedagógicos",
  description:
    "Comprender el trastorno del espectro autista: ámbitos clínicos, sensorialidad, recorridos según las edades, evaluación, herramientas y orientaciones — sin sustituir un proceso diagnóstico.",
  metaTitle:
    "Comprender el trastorno del espectro autista | Claire Jalabert",
  metaDescription:
    "Dossier pedagógico sobre el TEA: ámbitos, sensorialidad, infancia, adolescencia, adulto, mujeres y camuflaje, causas, diagnóstico, ADI-R, RAADS-R. Contenido informativo, no diagnóstico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-1",
  toc: [
    { id: "introduction", label: "Introducción" },
    { id: "domaines", label: "Los ámbitos clínicos" },
    { id: "sensorialite", label: "Sensorialidad" },
    { id: "enfant", label: "En la infancia" },
    { id: "adolescence", label: "En la adolescencia" },
    { id: "adulte", label: "En la edad adulta" },
    { id: "femmes-camouflage", label: "Mujeres y camuflaje" },
    { id: "causes", label: "Lo que se sabe sobre las causas" },
    { id: "diagnostic", label: "Diagnóstico y evaluación" },
    { id: "adi-r", label: "El ADI-R" },
    { id: "raads-r", label: "El RAADS-R" },
    { id: "associations", label: "TEA y otros perfiles" },
    { id: "quand-consulter", label: "¿Cuándo consultar?" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introducción",
      blocks: [
        {
          type: "p",
          text: "El trastorno del espectro autista (TEA) designa un conjunto de particularidades del desarrollo y del funcionamiento que afectan, de manera duradera, la comunicación social y la presencia de conductas, intereses o actividades restringidos y repetitivos. Se habla de «espectro» porque la intensidad, la forma y el impacto de estas particularidades varían mucho de una persona a otra.",
        },
        {
          type: "p",
          text: "Una persona autista — o una persona con TEA — puede presentar un perfil muy diferente al de otra: algunas necesitan un acompañamiento diario importante; otras construyen una vida profesional, familiar y social rica, a la vez que encuentran dificultades específicas en ciertos contextos. El lenguaje clínico actual insiste en esta diversidad, más que en una imagen única y fija.",
        },
        {
          type: "p",
          text: "Esta página pretende ofrecer referentes pedagógicos claros y matizados. No permite autodiagnosticarse ni diagnosticar a un familiar. Un diagnóstico de TEA lo formula un médico, en el marco de una evaluación multiprofesional. La psicóloga clínica puede contribuir mediante la escucha clínica, la anamnesis y ciertas herramientas estructuradas, sin sustituir el acto médico.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Contenido informativo, no diagnóstico",
          body: "La información presentada aquí tiene una finalidad pedagógica. No sustituye una entrevista clínica ni una evaluación médica. En caso de cuestionamiento persistente, la orientación hacia un profesional formado sigue siendo el procedimiento adecuado.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "A recordar",
          body: "El TEA es un espectro: los perfiles son heterogéneos. Comprender los ámbitos implicados ayuda a orientar mejor una demanda, sin concluir por uno mismo un diagnóstico.",
        },
      ],
    },
    {
      id: "domaines",
      title: "Los ámbitos clínicos",
      blocks: [
        {
          type: "p",
          text: "En las clasificaciones actuales (notablemente el DSM-5), el trastorno del espectro autista se organiza en torno a dos grandes ámbitos. El primero concierne las particularidades de la comunicación social y de las interacciones. El segundo concierne las conductas, intereses o actividades restringidos y repetitivos. Estos ámbitos se combinan de formas muy diversas según las personas y las edades de la vida.",
        },
        {
          type: "h3",
          text: "Comunicación social e interacciones",
        },
        {
          type: "p",
          text: "Puede tratarse, por ejemplo, de dificultades para iniciar o mantener intercambios recíprocos, para captar ciertas convenciones implícitas, para ajustar la mirada, el gesto o el tono según el contexto, o para compartir espontáneamente intereses y emociones. Estas particularidades no significan una ausencia de interés por los demás: muchas personas con TEA desean relaciones, pero a veces les cuesta comprender los códigos no escritos.",
        },
        {
          type: "p",
          text: "El lenguaje oral puede ser fluido, incluso muy desarrollado, o, por el contrario, limitado. No es el volumen del habla lo que define el TEA, sino la manera en que la comunicación social se organiza en la reciprocidad, el contexto y el compartir la atención.",
        },
        {
          type: "h3",
          text: "Conductas, intereses y actividades restringidos y repetitivos",
        },
        {
          type: "p",
          text: "Este ámbito agrupa movimientos repetitivos, rituales, una necesidad marcada de previsibilidad, intereses muy focalizados o una sensibilidad sensorial particular. Estos elementos pueden ser fuente de placer, de competencia y de estabilidad — y, en ciertos contextos, fuente de fatiga o de conflicto con el entorno.",
        },
        {
          type: "ul",
          items: [
            "Particularidades de la comunicación social y de la reciprocidad",
            "Intereses focalizados, rutinas o rituales",
            "Movimientos o verbalizaciones repetitivas",
            "Sensibilidades sensoriales (hipersensibilidad o hiposensibilidad)",
            "Necesidad de previsibilidad ante los cambios",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Dos ámbitos, una gran diversidad",
          body: "No es la presencia de un solo signo lo que cuenta, sino un conjunto duradero de particularidades en estos ámbitos, con un impacto en la vida cotidiana, escolar, profesional o relacional.",
        },
      ],
    },
    {
      id: "sensorialite",
      title: "Sensorialidad",
      blocks: [
        {
          type: "p",
          text: "La sensorialidad ocupa un lugar importante en la experiencia de numerosas personas autistas. Sonidos, luces, texturas, olores, contactos físicos, temperatura o sensaciones corporales internas pueden percibirse de forma más intensa, más difusa o, por el contrario, más atenuada que en otras personas. Estas particularidades no están «en la cabeza» en el sentido de una invención: responden a procesamientos sensoriales diferentes.",
        },
        {
          type: "p",
          text: "Una hipersensibilidad al ruido en un espacio abierto de oficina, una aversión a ciertas texturas alimentarias, una necesidad de movimiento para autorregularse o una búsqueda de presión profunda pueden formar parte de un mismo cuadro sensorial. La persona con TEA aprende a menudo, sola o con ayuda, estrategias para adaptarse — a veces a costa de una fatiga importante.",
        },
        {
          type: "p",
          text: "Reconocer la dimensión sensorial permite evitar interpretaciones exclusivamente conductuales («lo hace a propósito», «exagera»). Adaptar el entorno, prever pausas e identificar los umbrales de saturación suelen ser palancas concretas, mucho antes de cualquier discusión sobre una etiqueta.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Sensorialidad y vida cotidiana",
          body: "Las particularidades sensoriales forman parte integrante del espectro para numerosas personas. Nombrarlas ayuda a ajustar el marco, más que a forzar una adaptación unilateral.",
        },
      ],
    },
    {
      id: "enfant",
      title: "En la infancia",
      blocks: [
        {
          type: "p",
          text: "En la infancia, los cuestionamientos pueden surgir pronto — a veces desde los primeros años — o más tarde, cuando las exigencias sociales y escolares se complejizan. Los padres, la escuela o un profesional de la salud pueden observar un desarrollo atípico del lenguaje, del juego simbólico, del compartir la atención, o una reacción inusual ante los cambios y las estimulaciones sensoriales.",
        },
        {
          type: "p",
          text: "No todos los niños que presentan dificultades relacionales, un interés focalizado o una sensibilidad sensorial tienen TEA. Existen otras explicaciones: retraso del lenguaje, trastorno de ansiedad, TDAH, dificultades de aprendizaje, contexto familiar estresante, etc. Precisamente por ello es necesaria una evaluación prudente, multiprofesional y contextualizada.",
        },
        {
          type: "p",
          text: "Un acompañamiento precoz, cuando está indicado, no pretende «normalizar» al niño, sino apoyar su desarrollo, su comunicación, su bienestar y el ajuste de su entorno (familia, escuela, ocio). Las recomendaciones francesas insisten en la detección, la orientación y las intervenciones adaptadas a las necesidades individuales.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Cuestionamiento en la infancia",
          body: "Si unas particularidades duraderas generan preocupación de forma persistente, el intercambio con el médico de cabecera o un pediatra, seguido de una orientación hacia un dispositivo especializado o un profesional formado, es el procedimiento recomendado. La psicóloga puede contribuir a la evaluación y al acompañamiento.",
        },
      ],
    },
    {
      id: "adolescence",
      title: "En la adolescencia",
      blocks: [
        {
          type: "p",
          text: "La adolescencia intensifica a menudo los retos sociales, escolares e identitarios. Para una persona autista, este periodo puede revelar dificultades hasta entonces compensadas: fatiga ligada al camuflaje, aislamiento, ansiedad, acoso escolar, abandono escolar o, por el contrario, una afirmación más clara de sus necesidades e intereses.",
        },
        {
          type: "p",
          text: "Algunos adolescentes con TEA descubren entonces comunidades, pasiones o modalidades de aprendizaje que les convienen mejor. Otros atraviesan un periodo de malestar importante. El entorno puede sentirse desconcertado ante una discrepancia entre unas competencias intelectuales sólidas y un sufrimiento relacional o sensorial poco visible.",
        },
        {
          type: "p",
          text: "El acompañamiento a esta edad articula a menudo escucha clínica, adaptaciones escolares eventuales, trabajo sobre la autoestima y respeto del ritmo de la persona. El diagnóstico, cuando es pertinente, puede ofrecer un marco de comprensión — sin convertirse en una identidad impuesta.",
        },
      ],
    },
    {
      id: "adulte",
      title: "En la edad adulta",
      blocks: [
        {
          type: "p",
          text: "Numerosos adultos descubren tardíamente la posibilidad de un TEA, a veces tras años de cuestionamientos, de burnout, de dificultades relacionales repetidas o de un diagnóstico en un hijo. La experiencia de una persona con TEA en la edad adulta es muy variable: empleo estable o discontinuo, vida en pareja, parentalidad, aislamiento, éxito profesional en un ámbito especializado, agotamiento crónico.",
        },
        {
          type: "p",
          text: "Las recomendaciones francesas relativas al adulto subrayan la importancia de una evaluación clínica atenta, de una anamnesis del desarrollo y de la consideración del impacto funcional. El objetivo no es colocar una etiqueta, sino comprender mejor un funcionamiento y abrir vías de adaptación y de cuidado.",
        },
        {
          type: "p",
          text: "Un diagnóstico tardío puede vivirse como un alivio, una reevaluación o una mezcla de ambos. Merece ser acogido con prudencia, sin idealización ni dramatización. El acompañamiento psicológico puede ayudar a integrar esta información en una historia personal ya rica.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Adulto y espectro",
          body: "Un cuestionamiento en la edad adulta es frecuente. Requiere una evaluación cuidadosa, no una conclusión rápida a partir de un cuestionario en línea.",
        },
      ],
    },
    {
      id: "femmes-camouflage",
      title: "Mujeres y camuflaje",
      blocks: [
        {
          type: "p",
          text: "Históricamente, las descripciones clínicas del autismo se basaron sobre todo en observaciones de niños y adolescentes varones. Sin embargo, numerosas mujeres — y, más ampliamente, numerosas personas socializadas para ocultar sus dificultades — presentan perfiles menos inmediatamente identificables. A menudo se habla de camuflaje o de masking: esfuerzos conscientes o automáticos para imitar los códigos sociales, preparar las conversaciones, frenar movimientos autorreguladores o disimular la fatiga sensorial.",
        },
        {
          type: "p",
          text: "Este camuflaje puede permitir una integración aparente, a costa de una carga mental y emocional elevada. Contribuye a veces a diagnósticos tardíos, a confusiones con la ansiedad, la depresión, los trastornos alimentarios o la personalidad, y a una invalidación de la experiencia («no parece autista»).",
        },
        {
          type: "p",
          text: "Reconocer estos mecanismos no equivale a diagnosticar. Simplemente invita a los clínicos y al entorno a no fiarse únicamente de una apariencia social fluida, y a explorar la historia del desarrollo, la sensorialidad, los intereses y el coste de la adaptación.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Idea recibida",
          body: "«Si alguien tiene amigos, un empleo y sonríe en sociedad, no es autismo.» Falso: el camuflaje y la diversidad de los perfiles hacen que ciertos TEA sean poco visibles, especialmente en mujeres y en personas muy adaptadas en apariencia.",
        },
      ],
    },
    {
      id: "causes",
      title: "Lo que se sabe sobre las causas",
      blocks: [
        {
          type: "p",
          text: "Las investigaciones actuales convergen hacia un origen multifactorial, en gran medida del neurodesarrollo, con una contribución genética importante e interacciones complejas a lo largo del desarrollo. No existe una causa única ni un factor ambiental simple que «produzca» el autismo por sí solo.",
        },
        {
          type: "p",
          text: "Es esencial recordar lo que la ciencia no avala. Las vacunas no causan autismo: esta afirmación ha sido ampliamente invalidada. Del mismo modo, las pantallas o un estilo parental no «provocan» un TEA. Aún circulan contenidos sensacionalistas; apoyarse en fuentes institucionales (OMS, Inserm, HAS) permite evitar culpabilizaciones injustificadas.",
        },
        {
          type: "p",
          text: "Comprender las causas, en el estado actual de los conocimientos, ayuda sobre todo a desplazar la mirada: del reproche al apoyo, de la búsqueda de un culpable al ajuste de las necesidades y de los entornos.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Mitos a descartar",
          body: "Ni las vacunas, ni las pantallas, ni «la forma de criar a un niño» causan el autismo. Estas ideas están contradichas por los datos científicos y pueden herir innecesariamente a las familias.",
        },
      ],
    },
    {
      id: "diagnostic",
      title: "Diagnóstico y evaluación",
      blocks: [
        {
          type: "p",
          text: "En Francia, el diagnóstico de TEA es un acto médico. Se apoya en una evaluación clínica profunda, una anamnesis del desarrollo y, a menudo, en herramientas estandarizadas y en la opinión de varios profesionales (médico, psicólogo, logopeda, etc.). La Haute Autorité de Santé (HAS) ha publicado recomendaciones para la detección, el diagnóstico y el acompañamiento, también en la edad adulta.",
        },
        {
          type: "p",
          text: "La psicóloga clínica contribuye a este proceso: escucha, explora la historia, puede administrar ciertas herramientas y participa en la comprensión del funcionamiento. No formula por sí sola el diagnóstico médico de TEA. Esta distinción protege a la persona de una conclusión demasiado rápida y clarifica los roles.",
        },
        {
          type: "p",
          text: "Antes de cualquier conclusión, conviene considerar los diagnósticos diferenciales y las posibles comorbilidades (ansiedad, depresión, TDAH, trastornos del aprendizaje, etc.). Un cuestionario aislado, cumplimentado en línea, nunca es suficiente.",
        },
        {
          type: "ol",
          items: [
            "Escucha de la demanda y del impacto en la vida cotidiana",
            "Anamnesis del desarrollo y recogida de información contextual",
            "Evaluación clínica multiprofesional cuando esté indicada",
            "Síntesis médica y orientación hacia un acompañamiento adaptado",
          ],
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Roles complementarios",
          body: "El diagnóstico médico de TEA lo formula un médico. La psicóloga clínica puede contribuir a la evaluación y al acompañamiento, sin sustituir este acto.",
        },
      ],
    },
    {
      id: "adi-r",
      title: "El ADI-R",
      blocks: [
        {
          type: "p",
          text: "El ADI-R (Autism Diagnostic Interview – Revised) es una entrevista clínica estructurada, realizada con mayor frecuencia con un progenitor o un familiar que haya conocido a la persona en la infancia. Explora la historia del desarrollo, las interacciones sociales, la comunicación y ciertas conductas.",
        },
        {
          type: "p",
          text: "En un proceso diagnóstico de TEA, el ADI-R puede contribuir a esclarecer el recorrido y el funcionamiento. No «diagnostica» por sí solo. Su interés reside en la riqueza de la anamnesis y en la estructuración de la recogida de información, dentro de una evaluación más amplia.",
        },
        {
          type: "p",
          text: "En la consulta, cuando se contempla un proceso diagnóstico de TEA, esta herramienta puede inscribirse en un trabajo clínico cuidadoso, en relación con los demás elementos del expediente y, en su caso, con el médico responsable del diagnóstico.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "ADI-R: contribución, no veredicto",
          body: "El ADI-R puede contribuir a un proceso diagnóstico de TEA. No establece el diagnóstico por sí solo y se interpreta dentro de un conjunto clínico y médico.",
        },
      ],
    },
    {
      id: "raads-r",
      title: "El RAADS-R",
      blocks: [
        {
          type: "p",
          text: "El RAADS-R (Ritvo Autism Asperger Diagnostic Scale – Revised) es un cuestionario de autovaloración destinado principalmente a adultos. Ha sido objeto de trabajos de validación (notablemente Ritvo et al., 2011) y puede servir como herramienta de cribado o de apoyo al cuestionamiento clínico.",
        },
        {
          type: "p",
          text: "No constituye un diagnóstico. Una puntuación elevada no confirma un TEA; una puntuación baja no lo excluye. Estudios en consulta externa (notablemente trabajos neerlandeses) han señalado limitaciones: sensibilidad y especificidad variables según las poblaciones, riesgo de falsos positivos o falsos negativos, necesidad de una interpretación clínica.",
        },
        {
          type: "p",
          text: "Utilizado con prudencia, el RAADS-R puede abrir una conversación. Utilizado como veredicto, induce a error. Toda conclusión duradera corresponde a una evaluación profesional completa.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "RAADS-R: cribado, no diagnóstico",
          body: "El RAADS-R no establece un diagnóstico de TEA. Puede esclarecer un cuestionamiento, con reserva de sus limitaciones de validación y de una lectura clínica.",
        },
      ],
    },
    {
      id: "associations",
      title: "TEA y otros perfiles",
      blocks: [
        {
          type: "p",
          text: "Una misma persona puede presentar un TEA y otras particularidades o trastornos asociados. Esto no implica una causalidad automática: los perfiles se combinan de formas muy diversas, y cada combinación requiere una lectura clínica atenta.",
        },
        {
          type: "p",
          text: "Entre las asociaciones frecuentemente discutidas en la literatura y la práctica clínica, se encuentran notablemente el TDAH, ciertos trastornos de ansiedad, trastornos del aprendizaje, trastornos del sueño, así como particularidades sensoriales marcadas. Estas dimensiones pueden amplificar la fatiga, complicar la escolaridad o el trabajo, o enmascarar temporalmente otros aspectos del funcionamiento.",
        },
        {
          type: "ul",
          items: [
            "TDAH — atención, impulsividad, organización según los perfiles",
            "Trastornos de ansiedad — ansiedad social, anticipación, agotamiento",
            "Trastornos del aprendizaje — lectura, escritura, cálculo, lenguaje",
            "Trastornos del sueño — conciliación, despertares, ritmo",
            "Particularidades sensoriales — hipersensibilidad, hiposensibilidad, sobrecarga",
          ],
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "A recordar",
          body: "Identificar varias dimensiones en una misma persona no autoriza a reducirlo todo a una sola etiqueta. La evaluación pretende comprender el funcionamiento global y las necesidades, sin forzar vínculos de causa a efecto.",
        },
        {
          type: "cta",
          href: "/comprendre/autres-reperes",
          label: "Otros referentes y acompañamientos",
          description:
            "TDAH, sensorialidad, estrés, escolaridad y otras temáticas abordadas en la consulta.",
        },
      ],
    },
    {
      id: "quand-consulter",
      title: "¿Cuándo consultar?",
      blocks: [
        {
          type: "p",
          text: "Consultar puede ser pertinente cuando unas particularidades duraderas de la comunicación social, de los intereses, de las rutinas o de la sensorialidad generan sufrimiento, agotamiento, dificultades escolares o profesionales, o tensiones familiares. La duda en sí, cuando ocupa la mente de forma persistente, a veces merece ser depositada en un marco clínico.",
        },
        {
          type: "p",
          text: "No se consulta para «obtener una etiqueta a toda costa», sino para comprender mejor un funcionamiento e identificar lo que podría ayudar. A veces, la evaluación orienta hacia un TEA; a veces hacia otra cosa; a veces hacia un acompañamiento sin diagnóstico formal inmediato. Cada trayectoria sigue siendo singular.",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Valorar una entrevista",
          body: "Si se reconoce — o se reconoce a un familiar — en varios de estos referentes, con un impacto real, una primera entrevista clínica puede clarificar los pasos siguientes: escucha, posibles evaluaciones, orientación médica si es necesario.",
        },
        {
          type: "cta",
          href: "/accompagnements#bilans",
          label: "Ver las evaluaciones y valoraciones",
          description:
            "Presentación de las evaluaciones propuestas en la consulta, incluido el proceso ADI-R en un marco clínico.",
        },
        {
          type: "cta",
          href: "/contact",
          label: "Contactar con la secretaría",
          description:
            "Para una pregunta sobre las modalidades o para solicitar cita.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "HAS — Trastorno del espectro autista: signos de alerta, detección, diagnóstico y evaluación en la infancia y la adolescencia",
      detail: "Recomendación, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Trastorno del espectro autista: diagnóstico y evaluación en la edad adulta",
      detail: "Recomendación, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Intervenciones y recorridos de vida en el trastorno del espectro autista",
      detail: "Actualización de las recomendaciones, 2026",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l'autisme",
      detail: "Información y orientación",
      href: "https://maisondelautisme.gouv.fr",
    },
    {
      label: "Inserm — Canal Detox: las pantallas no provocan el autismo",
      detail: "Análisis científico",
      href: "https://www.inserm.fr",
    },
    {
      label: "OMS — Vacunas y autismo",
      detail: "Posición científica: ausencia de vínculo causal",
      href: "https://www.who.int",
    },
    {
      label: "Ritvo et al. — The Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R)",
      detail: "Journal of Autism and Developmental Disorders, 2011 (PubMed)",
      href: "https://pubmed.ncbi.nlm.nih.gov",
    },
    {
      label: "Estudios neerlandeses en consulta externa — limitaciones del RAADS-R",
      detail: "Sensibilidad/especificidad variables según las poblaciones; interpretación clínica necesaria",
    },
    {
      label: "APA — DSM-5: Trastorno del espectro autista",
      detail: "Criterios diagnósticos de referencia internacional",
    },
  ],
  related: [
    {
      href: "/comprendre/asperger",
      title: "Síndrome de Asperger",
      description:
        "Qué designa aún este término y cómo se inscribe en el espectro autista.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potencial intelectual",
      description:
        "Referentes sobre el HPI, las pruebas y los posibles vínculos con otros funcionamientos.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Otros referentes y acompañamientos",
      description:
        "TDAH, sensorialidad, estrés, escolaridad, familia y evaluaciones.",
    },
  ],
};
