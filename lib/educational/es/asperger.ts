import type { EducationalArticle } from "../types";

export const aspergerArticle: EducationalArticle = {
  slug: "asperger",
  title: "Síndrome de Asperger",
  eyebrow: "Historia y continuum",
  description:
    "Comprender el síndrome de Asperger: historia del término, características, comunicación, intereses, sensorialidad, mujeres, edades de la vida, vínculos con el HPI y lugar actual en el espectro autista.",
  metaTitle:
    "Síndrome de Asperger: comprender el término y los perfiles concernidos | Claire Jalabert",
  metaDescription:
    "Referentes pedagógicos sobre el síndrome de Asperger: por qué ha evolucionado el lenguaje, características, camuflaje e inscripción en el TEA. Contenido informativo, no diagnóstico.",
  updatedAt: "2026-08-12",
  atmosphere: "phase-2",
  toc: [
    { id: "introduction", label: "Introducción" },
    { id: "pourquoi", label: "Por qué ha evolucionado el lenguaje" },
    { id: "caracteristiques", label: "Características a menudo descritas" },
    { id: "communication", label: "Comunicación y relaciones" },
    { id: "interets", label: "Intereses focalizados" },
    { id: "sensorialite-routines", label: "Sensorialidad y rutinas" },
    { id: "femmes", label: "En las mujeres" },
    { id: "ages", label: "Según las edades" },
    { id: "asperger-hpi", label: "Asperger y HPI" },
    { id: "diagnostic-aujourdhui", label: "Diagnóstico hoy" },
  ],
  sections: [
    {
      id: "introduction",
      title: "Introducción",
      blocks: [
        {
          type: "p",
          text: "El término «síndrome de Asperger» sigue muy presente en el lenguaje cotidiano, en algunas demandas de consulta y en la historia personal de numerosas personas. A menudo remite a un perfil de persona autista — o de persona con TEA — sin retraso significativo del lenguaje en la infancia y sin discapacidad intelectual asociada, con particularidades marcadas de la comunicación social e intereses focalizados.",
        },
        {
          type: "p",
          text: "En las clasificaciones actuales (DSM-5, CIE-11), este síndrome ya no es una categoría diagnóstica separada: está integrado en el trastorno del espectro autista. Esto no significa que la experiencia vivida de las personas concernidas haya desaparecido, ni que la palabra «Asperger» esté prohibida. Significa que el marco médico ha evolucionado para reflejar mejor un continuum.",
        },
        {
          type: "p",
          text: "Esta página ofrece referentes pedagógicos. No permite autodiagnosticarse. Para una visión de conjunto del espectro, véase también la página «Trastorno del espectro autista» (/comprendre/tsa).",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Información, no diagnóstico",
          body: "Los elementos que siguen describen tendencias frecuentemente reportadas. No bastan para concluir un síndrome de Asperger ni un TEA. Solo una evaluación profesional puede aclarar una situación individual.",
        },
      ],
    },
    {
      id: "pourquoi",
      title: "Por qué ha evolucionado el lenguaje",
      blocks: [
        {
          type: "p",
          text: "Históricamente, el síndrome de Asperger se distinguió del «autismo infantil» para describir a personas sin retraso aparente del lenguaje y con un funcionamiento intelectual en la media o por encima. Esta distinción ayudó a visibilizar perfiles largamente desconocidos. También creó malentendidos duraderos.",
        },
        {
          type: "p",
          text: "Uno de los más persistentes consiste en presentar Asperger como «una forma leve de autismo». Esta formulación es engañosa. Minimiza el sufrimiento posible, el cansancio del camuflaje, las dificultades sensoriales y el impacto social. Una persona puede hablar con fluidez, obtener un título y, no obstante, vivir un agotamiento importante ligado a su funcionamiento.",
        },
        {
          type: "p",
          text: "El paso al espectro busca reconocer una diversidad de necesidades y perfiles, más que una jerarquía «leve / grave» basada únicamente en el lenguaje o el CI. El apoyo necesario no se deduce de un antiguo subtipo: se evalúa caso por caso.",
        },
        {
          type: "callout",
          kind: "myth",
          title: "Formulación a evitar",
          body: "«Asperger = forma leve de autismo» es una simplificación inexacta y potencialmente invalidante. El impacto no se mide solo por la fluidez del lenguaje.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Continuidad más que jerarquía",
          body: "El marco actual sitúa estos perfiles en el TEA. La palabra Asperger puede seguir siendo útil para describir una historia personal o una demanda, sin cristalizar una «levedad» engañosa.",
        },
      ],
    },
    {
      id: "caracteristiques",
      title: "Características a menudo descritas",
      blocks: [
        {
          type: "p",
          text: "Las descripciones clásicas insisten en una inteligencia verbal a menudo preservada, incluso desarrollada, asociada a dificultades en la reciprocidad social, una lectura a veces literal de los intercambios e intereses muy intensamente cultivados. Estos rasgos no forman una lista de verificación: se combinan de formas distintas.",
        },
        {
          type: "p",
          text: "Con frecuencia se observan sensibilidad a la injusticia, necesidad de coherencia, fatiga social tras las interacciones y preferencia por marcos previsibles. Algunas personas destacan en ámbitos especializados; otras tienen dificultades para transformar sus competencias en trayectorias estables, por falta de adaptaciones o de comprensión del entorno.",
        },
        {
          type: "ul",
          items: [
            "Particularidades de la comunicación social, a pesar de un lenguaje a menudo fluido",
            "Intereses intensos e invertidos de forma duradera",
            "Necesidad de previsibilidad y sensibilidad a los imprevistos",
            "Particularidades sensoriales frecuentes",
            "Posible desfase entre competencias cognitivas y soltura relacional percibida",
          ],
        },
        {
          type: "p",
          text: "Ninguno de estos elementos, por sí solo, define un perfil Asperger. Es su combinación, su antigüedad y su impacto los que pueden motivar una evaluación — orientada hoy hacia el espectro autista.",
        },
      ],
    },
    {
      id: "communication",
      title: "Comunicación y relaciones",
      blocks: [
        {
          type: "p",
          text: "La comunicación de una persona concernida puede ser precisa, rica, a veces muy técnica, dejando poco espacio a lo implícito. Las conversaciones «sin rumbo», las insinuaciones, el humor basado en la ambigüedad o las reglas no escritas del grupo pueden ser fuente de malentendidos.",
        },
        {
          type: "p",
          text: "Esto no significa ausencia de empatía. Muchas personas con TEA — incluidas quienes se reconocen en el antiguo término Asperger — sienten intensamente las emociones de los demás, pero tienen dificultades para descifrarlas con rapidez o para responder según los códigos esperados. La brecha entre lo sentido y lo expresado suele estar en el centro del malentendido.",
        },
        {
          type: "p",
          text: "En las relaciones de amistad, de pareja o profesionales, la claridad, la previsibilidad y el respeto de las necesidades de recuperación suelen ser factores protectores. El aprendizaje explícito de ciertos códigos puede ayudar, sin aspirar a una conformidad exhaustiva que agotaría a la persona.",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Comunicación ≠ ausencia de vínculo",
          body: "Las particularidades comunicativas no impiden vínculos auténticos. Invitan a modalidades de intercambio más explícitas y respetuosas con los ritmos de cada uno.",
        },
      ],
    },
    {
      id: "interets",
      title: "Intereses focalizados",
      blocks: [
        {
          type: "p",
          text: "Los intereses focalizados — a veces llamados intereses específicos — ocupan un lugar central para numerosas personas. Pueden abarcar ámbitos académicos, técnicos, artísticos, de coleccionismo o muy especializados. Lejos de ser simples «manías», suelen ofrecer sentido, competencia, regulación emocional y un espacio de placer.",
        },
        {
          type: "p",
          text: "La frontera entre pasión enriquecedora y rigidez invalidante depende del contexto: el interés se vuelve problemático cuando impide otras necesidades vitales, aísla de forma duradera o entra en conflicto permanente con el entorno. Incluso entonces, el enfoque clínico suele privilegiar la integración y la adaptación, más que la erradicación del interés.",
        },
        {
          type: "p",
          text: "En un acompañamiento, estos centros de interés pueden convertirse en aliados: mediación, motivación escolar o profesional, hilo conductor narrativo. Reconocerlos con respeto cambia a menudo la calidad de la relación terapéutica.",
        },
      ],
    },
    {
      id: "sensorialite-routines",
      title: "Sensorialidad y rutinas",
      blocks: [
        {
          type: "p",
          text: "Como en otros perfiles del espectro, la sensorialidad y la necesidad de rutinas son frecuentes. Ruidos, luces, texturas, contactos o entornos imprevisibles pueden saturar con rapidez. Las rutinas, en cambio, ofrecen un marco tranquilizador: reducen la incertidumbre y liberan energía cognitiva.",
        },
        {
          type: "p",
          text: "Un cambio de horario, un open space ruidoso, una comida impuesta en un lugar caótico pueden parecer anodinos para el entorno y, sin embargo, costar muy caro a la persona. Nombrar estos umbrales permite evitar juicios moralizadores («demasiado sensible», «demasiado rígido») y abrir adaptaciones realistas.",
        },
        {
          type: "p",
          text: "Los movimientos repetitivos o los rituales de regulación (a veces llamados stimming) pueden contribuir al apaciguamiento. Frenarlos sistemáticamente sin alternativa suele aumentar el estrés. Lo que está en juego es la seguridad y el respeto, también en sociedad.",
        },
      ],
    },
    {
      id: "femmes",
      title: "En las mujeres",
      blocks: [
        {
          type: "p",
          text: "Numerosas mujeres concernidas han escapado durante mucho tiempo al reconocimiento, por falta de modelos clínicos adaptados. El camuflaje social, la imitación de las compañeras, la interiorización del malestar e intereses menos «estereotipados» en las descripciones antiguas han contribuido a diagnósticos tardíos — o a diagnósticos erróneos.",
        },
        {
          type: "p",
          text: "Ansiedad, agotamiento, trastornos del estado de ánimo, cuestionamientos identitarios o dificultades alimentarias pueden coexistir y enmascarar el funcionamiento subyacente. Una apariencia social adaptada no dice nada del coste interno. Para más detalles sobre el camuflaje en el espectro, véase la sección «Mujeres y camuflaje» de la página TEA (/comprendre/tsa#femmes-camouflage).",
        },
        {
          type: "callout",
          kind: "consult",
          title: "Un cuestionamiento tardío es frecuente",
          body: "En las mujeres y en las personas muy adaptadas en apariencia, un cuestionamiento en la adolescencia o en la edad adulta merece una escucha clínica atenta, sin conclusiones apresuradas.",
        },
      ],
    },
    {
      id: "ages",
      title: "Según las edades",
      blocks: [
        {
          type: "p",
          text: "En la infancia, los signos pueden ser discretos si el lenguaje es precoz y los resultados escolares satisfactorios. Las dificultades aparecen a veces en el patio de recreo, en los juegos colectivos, en la gestión de los imprevistos o en la sensibilidad sensorial. El desfase entre «buen alumno» y «torpe socialmente» suele intrigar al entorno.",
        },
        {
          type: "p",
          text: "En la adolescencia, la complejización de las relaciones, la mirada de las compañeras y las exigencias de autonomía pueden hacer tambalear un equilibrio frágil. En la edad adulta, suelen ser el trabajo, la pareja, la parentalidad o un burnout los que reavivan el cuestionamiento.",
        },
        {
          type: "p",
          text: "A cada edad, el acompañamiento busca la comprensión, la reducción del sufrimiento y el ajuste del entorno — más que la conformidad con una única norma social.",
        },
      ],
    },
    {
      id: "asperger-hpi",
      title: "Asperger y HPI",
      blocks: [
        {
          type: "p",
          text: "El alto potencial intelectual (HPI) y los perfiles antiguamente calificados de Asperger pueden coexistir, parecerse en la superficie o confundirse. Un CI elevado no excluye un TEA; un TEA no implica un alto potencial intelectual. Algunas personas acumulan ambos; otras solo tienen uno u otro; otras presentan un cuadro mixto que requiere una lectura clínica fina.",
        },
        {
          type: "p",
          text: "Intereses intensos, sensibilidad, pensamiento atípico o dificultad relacional pueden explicarse de varias maneras. Por eso las evaluaciones y la entrevista clínica buscan desenredar los hilos, más que elegir demasiado pronto una sola etiqueta. Para referentes sobre el HPI, véase la página HPI (/comprendre/hpi).",
        },
        {
          type: "callout",
          kind: "takeaway",
          title: "Dos dimensiones posibles",
          body: "Asperger/TEA y HPI no son equivalentes. Pueden cruzarse. Solo una evaluación contextualizada permite evitar las confusiones.",
        },
      ],
    },
    {
      id: "diagnostic-aujourdhui",
      title: "Diagnóstico hoy",
      blocks: [
        {
          type: "p",
          text: "Hoy, cuando una evaluación concluye positivamente, el diagnóstico médico recae en general en el trastorno del espectro autista, con una descripción del nivel de apoyo necesario y de las particularidades individuales. El término Asperger puede seguir presente en el relato de la persona, en documentos antiguos o como punto de entrada de la demanda.",
        },
        {
          type: "p",
          text: "El diagnóstico sigue siendo un acto médico. La psicóloga clínica contribuye a la evaluación (entrevista, anamnesis, instrumentos) y al acompañamiento. Instrumentos como el ADI-R pueden contribuir al proceso; un cuestionario como el RAADS-R no establece un diagnóstico. Estos puntos se detallan en la página TEA (/comprendre/tsa).",
        },
        {
          type: "p",
          text: "Lo que está en juego no es la palabra exacta en un informe, sino la calidad de la comprensión y de los apoyos que de ella se derivan: adaptaciones, terapia, grupos, evaluaciones complementarias, orientación médica.",
        },
        {
          type: "callout",
          kind: "disclaimer",
          title: "Marco actual",
          body: "El síndrome de Asperger ya no es una categoría separada en el DSM-5. Los perfiles concernidos pertenecen al TEA. El diagnóstico médico lo establece un médico; la psicóloga contribuye a ello.",
        },
        {
          type: "cta",
          href: "/comprendre/tsa",
          label: "Leer la página TEA",
          description:
            "Ámbitos clínicos, diagnóstico, ADI-R, RAADS-R y orientaciones.",
        },
        {
          type: "cta",
          href: "/accompagnements",
          label: "Ver los acompañamientos",
          description:
            "Entrevistas, evaluaciones y modalidades de seguimiento propuestas en la consulta.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "APA — DSM-5: Trastorno del espectro autista",
      detail:
        "Integración de los antiguos subtipos, incluido el síndrome de Asperger, en el espectro",
    },
    {
      label: "HAS — Diagnóstico y evaluación del TEA en el adulto",
      detail: "Recomendación, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "HAS — Detección y diagnóstico del TEA en la infancia y la adolescencia",
      detail: "Recomendación, 2018",
      href: "https://www.has-sante.fr",
    },
    {
      label: "Maison de l'autisme",
      detail: "Información institucional y orientación",
      href: "https://maison.autisme.gouv.fr",
    },
  ],
  related: [
    {
      href: "/comprendre/tsa",
      title: "Trastorno del espectro autista",
      description:
        "Visión de conjunto del espectro, de la evaluación y de las herramientas.",
    },
    {
      href: "/comprendre/hpi",
      title: "Alto potencial intelectual",
      description:
        "Referentes sobre el HPI y distinciones útiles respecto a otros perfiles.",
    },
    {
      href: "/comprendre/autres-reperes",
      title: "Otros referentes y acompañamientos",
      description:
        "Estrés, escolaridad, familia, grupos y evaluaciones.",
    },
  ],
};
