export interface SEOMetadata {
  title: string
  titleTemplate?: string
  description: string
  ogImage?: string
  ogType?: string
  robots?: string
  breadcrumbs?: { label: string; href: string }[]
}

export const defaultSEO: SEOMetadata = {
  title: "Asociación Moreres | Castellón",
  titleTemplate: "%s | Asociación Moreres",
  description:
    "Asociación Juvenil Moreres, Castellón (1971). Actividades familiares, formativas y deportivas. Escuela de fútbol C.D. Moreres desde 2015.",
  ogImage: "/assets/images/og-default.jpg",
  ogType: "website",
  robots: "index, follow",
}

export const organization = {
  "@type": "Organization",
  name: "MORERES CLUB DEPORTIVO",
  alternateName: "Asociación Juvenil Moreres",
  identifier: "G12685137",
  url: "https://asociacionmoreres.org",
  logo: "https://asociacionmoreres.org/assets/logos/moreres-logo-morera-letras.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Pare Ricardo, 1",
    addressLocality: "Castellón de la Plana",
    postalCode: "12003",
    addressCountry: "ES",
  },
  email: "asociacionmoreres@gmail.com",
  foundingDate: "1971",
  legalName: "MORERES CLUB DEPORTIVO",
} as const

export const localBusiness = {
  "@type": "LocalBusiness",
  "@id": "https://asociacionmoreres.org/#club",
  name: "Asociación Juvenil Moreres",
  description:
    "Asociación juvenil y club deportivo en Castellón. Actividades familiares, formativas, sala de estudio y Escuela Deportiva de fútbol.",
  url: "https://asociacionmoreres.org",
  telephone: "+34605162562",
  email: "asociacionmoreres@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Pare Ricardo, 1",
    addressLocality: "Castellón de la Plana",
    postalCode: "12003",
    addressCountry: "ES",
  },
  foundingDate: "1971",
  areaServed: "Castellón de la Plana",
  sport: "Soccer",
} as const

export const pages: Record<string, SEOMetadata> = {
  "/": {
    title: "Asociación Moreres | Castellón",
    description:
      "Asociación Juvenil Moreres, Castellón (1971). Actividades familiares, formativas y deportivas. Escuela de fútbol C.D. Moreres desde 2015. Un proyecto educativo para ayudar a los padres en la formación de sus hijos.",
    ogImage: "/assets/images/og-default.jpg",
    robots: "index, follow",
  },

  "/quienes-somos": {
    title: "Quiénes somos",
    description:
      "Conoce la Asociación Juvenil Moreres de Castellón: identidad, historia, proyecto educativo y formación cristiana. Desde 1971.",
  },
  "/quienes-somos/que-es-moreres": {
    title: "Qué es Moreres",
    description:
      "Moreres es una asociación juvenil en Castellón que ofrece actividades familiares, formativas y deportivas. Un proyecto educativo al servicio de las familias desde 1971.",
  },
  "/quienes-somos/historia": {
    title: "Historia",
    description:
      "La Asociación Moreres fue fundada en Castellón en 1971. Desde entonces, un proyecto educativo para jóvenes y familias con más de 50 años de historia.",
  },
  "/quienes-somos/proyecto-educativo": {
    title: "Proyecto educativo",
    description:
      "Formación humana, académica y coaching personal en la Asociación Moreres de Castellón. Charlas, sesiones de coaching y programa de virtudes.",
  },
  "/quienes-somos/formacion-cristiana": {
    title: "Formación cristiana",
    description:
      "Formación espiritual en la Asociación Moreres: dirección espiritual, meditaciones semanales, cursos de retiro y acompañamiento personal.",
  },

  "/actividades": {
    title: "Actividades",
    description:
      "Actividades de la Asociación Moreres en Castellón: sala de estudio, formación humana, The Mark, familias, solidaridad, convivencias y campamentos.",
  },
  "/actividades/estudio": {
    title: "Sala de estudio",
    description:
      "Sala de estudio en Castellón con profesor cualificado. De lunes a jueves, para alumnos de 5º Primaria a 2º Bachillerato.",
  },
  "/actividades/formativas": {
    title: "Actividades formativas",
    description:
      "Charlas sobre virtudes humanas, sesiones de coaching y actividades de formación en la Asociación Moreres de Castellón.",
  },
  "/actividades/the-mark": {
    title: "The Mark",
    description:
      "Programa de desarrollo personal para jóvenes en la Asociación Moreres de Castellón. Educación del carácter y liderazgo.",
  },
  "/actividades/familias": {
    title: "Familias",
    description:
      "Actividades familiares en la Asociación Moreres de Castellón: planes familiares, formación padres y programa de virtudes familias.",
  },
  "/actividades/solidaridad": {
    title: "Solidaridad",
    description:
      "Actividades solidarias en la Asociación Moreres de Castellón: visitas a residencias, donación de alimentos y acompañamiento.",
  },
  "/actividades/convivencias": {
    title: "Convivencias",
    description:
      "Convivencias juveniles de la Asociación Moreres: UNIV, MIF Fátima, Supercopa, Camino de Santiago, Manager e Interclubes.",
  },
  "/actividades/campamentos": {
    title: "Campamentos",
    description:
      "Campamentos de la Asociación Moreres: campamento de Pascua, campamento de verano y campus de Navidad en Castellón.",
  },
  "/actividades/calendario": {
    title: "Calendario",
    description:
      "Calendario de actividades de la Asociación Moreres para el curso actual: fechas y horarios de todas las actividades.",
  },
  "/actividades/formacion-padres": {
    title: "Formación de padres",
    description:
      "Formación para padres en la Asociación Moreres de Castellón. Charlas y recursos educativos para la familia.",
  },

  "/escuela-deportiva": {
    title: "Escuela Deportiva | C.D. Moreres",
    description:
      "Escuela Deportiva de fútbol del C.D. Moreres en Castellón. Once equipos federados. Formando personas a través del deporte desde 1996.",
    ogImage: "/assets/gallery/campeones_orig.jpeg",
  },
  "/escuela-deportiva/presentacion": {
    title: "Presentación · Escuela Deportiva",
    description:
      "Conoce la Escuela Deportiva del C.D. Moreres: historia, valores, equipos federados y plan de formación anual de virtudes.",
  },
  "/escuela-deportiva/plan-de-formacion": {
    title: "Plan de formación",
    description:
      "Plan de formación anual de la Escuela Deportiva del C.D. Moreres. Fichas mensuales de virtudes: orden, esfuerzo, compañerismo y respeto.",
  },
  "/escuela-deportiva/temporadas": {
    title: "Temporadas",
    description:
      "Histórico de temporadas de la Escuela Deportiva del C.D. Moreres con revistas mensuales descargables y logros deportivos.",
  },
  "/escuela-deportiva/inscripcion": {
    title: "Inscripción | Escuela Deportiva",
    description:
      "Inscripción en la Escuela Deportiva del C.D. Moreres. Periodo de preinscripción del 10 al 20 de julio. Nuevos jugadores y renovaciones.",
  },
  "/escuela-deportiva/padel": {
    title: "Pádel",
    description:
      "Actividad de pádel de la Asociación Moreres en Castellón. Pistas y entrenamientos para todas las edades.",
  },
  "/escuela-deportiva/encuesta": {
    title: "Encuesta | Escuela Deportiva",
    description:
      "Encuesta anónima de la Escuela Deportiva del C.D. Moreres para mejorar la experiencia de los jugadores y las familias.",
    robots: "noindex, nofollow",
  },

  "/galeria": {
    title: "Galería",
    description:
      "Galería de imágenes de la Asociación Moreres: actividades, eventos deportivos, planes familiares y momentos del Club.",
    ogImage: "/assets/gallery/escudo-moreres-10-aniversario_orig.png",
  },
  "/galeria/curso-2025-2026": {
    title: "Curso 2025-2026",
    description: "Galería de fotos del curso 2025-2026 de la Asociación Moreres en Castellón.",
  },
  "/galeria/curso-2024-2025": {
    title: "Curso 2024-2025",
    description: "Galería de fotos del curso 2024-2025 de la Asociación Moreres en Castellón.",
  },
  "/galeria/curso-2023-2024": {
    title: "Curso 2023-2024",
    description: "Galería de fotos del curso 2023-2024 de la Asociación Moreres en Castellón.",
  },
  "/galeria/curso-2022-2023": {
    title: "Curso 2022-2023",
    description: "Galería de fotos del curso 2022-2023 de la Asociación Moreres en Castellón.",
  },
  "/galeria/curso-2021-2022": {
    title: "Curso 2021-2022",
    description: "Galería de fotos del curso 2021-2022 de la Asociación Moreres en Castellón.",
  },
  "/galeria/curso-2020-2021": {
    title: "Curso 2020-2021",
    description: "Galería de fotos del curso 2020-2021 de la Asociación Moreres en Castellón.",
  },
  "/galeria/planes-por-equipo": {
    title: "Planes por equipo",
    description: "Galería de fotos de planes por equipo de la Asociación Moreres en Castellón.",
  },
  "/galeria/eventos": {
    title: "Eventos especiales",
    description:
      "Galería de eventos especiales de la Asociación Moreres: Star Wars, World Cup, Fátima, Jornada de la Familia y más.",
  },

  "/hazte-socio": {
    title: "Hazte socio",
    description:
      "Haciéndote socio de Moreres participas en todas las actividades del Club con precios especiales. 35€/mes, descuento por hermanos.",
  },
  "/contacto": {
    title: "Contacto",
    description:
      "Ponte en contacto con la Asociación Moreres en Castellón. Calle Pare Ricardo, 1. Escríbenos a asociacionmoreres@gmail.com.",
  },

  "/legal": {
    title: "Información legal",
    description: "Documentos legales y políticas de privacidad de MORERES CLUB DEPORTIVO.",
    robots: "index, follow",
  },
  "/legal/aviso-legal": {
    title: "Aviso legal",
    description: "Aviso legal de MORERES CLUB DEPORTIVO, con CIF G12685137. Condiciones de uso del sitio web.",
    robots: "index, follow",
  },
  "/legal/politica-de-privacidad": {
    title: "Política de privacidad",
    description:
      "Política de privacidad de MORERES CLUB DEPORTIVO. Información sobre el tratamiento de datos personales y derechos del usuario.",
    robots: "index, follow",
  },
  "/legal/politica-de-cookies": {
    title: "Política de cookies",
    description:
      "Política de cookies de MORERES CLUB DEPORTIVO. Información sobre el uso de cookies en el sitio web.",
    robots: "index, follow",
  },
  "/legal/proteccion-de-datos": {
    title: "Protección de datos",
    description:
      "Información básica sobre protección de datos personales en MORERES CLUB DEPORTIVO.",
    robots: "index, follow",
  },
  "/legal/privacidad-redes-sociales": {
    title: "Privacidad redes sociales",
    description:
      "Política de privacidad para redes sociales de MORERES CLUB DEPORTIVO: Facebook, Twitter, Instagram y YouTube.",
    robots: "index, follow",
  },
  "/legal/proteccion-del-menor": {
    title: "Plan de protección del menor",
    description:
      "Plan de protección y seguridad para menores de MORERES CLUB DEPORTIVO. Protocolos para garantizar un entorno seguro.",
    robots: "index, follow",
  },

  "/recursos/webs-de-interes": {
    title: "Webs de interés",
    description:
      "Enlaces de interés para familias y jóvenes de la Asociación Moreres en Castellón.",
  },
}
