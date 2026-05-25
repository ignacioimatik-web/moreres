export interface RouteConfig {
  path: string
  title: string
  description: string
  section: string
  layout: "default" | "landing" | "gallery" | "legal" | "form"
  breadcrumb: string
  ogImage?: string
  oldUrls: string[]
  isIndex?: boolean
  children?: RouteConfig[]
}

export const routes: Record<string, RouteConfig> = {

  // ==================== INICIO ====================
  "/": {
    path: "/",
    title: "Asociación Moreres | Castellón",
    description: "Asociación Juvenil, Castellón (1971). Actividades familiares, formativas y deportivas. Escuela de fútbol desde 2015.",
    section: "inicio",
    layout: "landing",
    breadcrumb: "Inicio",
    oldUrls: ["/", "/index.html"]
  },

  // ==================== QUIÉNES SOMOS ====================
  "/quienes-somos": {
    path: "/quienes-somos",
    title: "Quiénes somos | Asociación Moreres",
    description: "Conoce la Asociación Moreres: un proyecto educativo que ayuda a los padres en la formación de sus hijos.",
    section: "quienes-somos",
    layout: "default",
    breadcrumb: "Quiénes somos",
    isIndex: true,
    oldUrls: ["/iquestqueacute-es-moreres.html"],
    children: [
      { path: "/quienes-somos/que-es-moreres", title: "Qué es Moreres", description: "", section: "quienes-somos", layout: "default", breadcrumb: "Qué es Moreres", oldUrls: ["/iquestqueacute-es-moreres.html"] },
      { path: "/quienes-somos/historia", title: "Historia", description: "", section: "quienes-somos", layout: "default", breadcrumb: "Historia", oldUrls: [] },
      { path: "/quienes-somos/proyecto-educativo", title: "Proyecto educativo", description: "", section: "quienes-somos", layout: "default", breadcrumb: "Proyecto educativo", oldUrls: ["/formacioacuten.html"] },
      { path: "/quienes-somos/formacion-cristiana", title: "Formación cristiana", description: "", section: "quienes-somos", layout: "default", breadcrumb: "Formación cristiana", oldUrls: ["/formacioacuten.html#espiritual"] }
    ]
  },
  "/quienes-somos/que-es-moreres": {
    path: "/quienes-somos/que-es-moreres",
    title: "Qué es Moreres | Asociación Moreres",
    description: "Somos Moreres: un proyecto educativo que quiere ayudar a los padres en la formación de sus hijos.",
    section: "quienes-somos",
    layout: "default",
    breadcrumb: "Qué es Moreres",
    oldUrls: ["/iquestqueacute-es-moreres.html"]
  },
  "/quienes-somos/historia": {
    path: "/quienes-somos/historia",
    title: "Historia | Asociación Moreres",
    description: "Conoce nuestra historia desde 1971 en Castellón.",
    section: "quienes-somos",
    layout: "default",
    breadcrumb: "Historia",
    oldUrls: []
  },
  "/quienes-somos/proyecto-educativo": {
    path: "/quienes-somos/proyecto-educativo",
    title: "Proyecto educativo | Asociación Moreres",
    description: "Nuestra propuesta formativa: formación humana, académica, espiritual y coaching personal.",
    section: "quienes-somos",
    layout: "default",
    breadcrumb: "Proyecto educativo",
    oldUrls: ["/formacioacuten.html"]
  },
  "/quienes-somos/formacion-cristiana": {
    path: "/quienes-somos/formacion-cristiana",
    title: "Formación cristiana | Asociación Moreres",
    description: "Formación espiritual, charlas, meditaciones y cursos de retiro.",
    section: "quienes-somos",
    layout: "default",
    breadcrumb: "Formación cristiana",
    oldUrls: ["/formacioacuten.html#espiritual"]
  },

  // ==================== ACTIVIDADES ====================
  "/actividades": {
    path: "/actividades",
    title: "Actividades | Asociación Moreres",
    description: "Actividades ordinarias, planes familiares, campamentos y convivencias para todas las edades.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Actividades",
    isIndex: true,
    oldUrls: ["/actividades.html"],
    children: [
      { path: "/actividades/estudio", title: "Estudio", description: "", section: "actividades", layout: "default", breadcrumb: "Estudio", oldUrls: ["/estudio.html"] },
      { path: "/actividades/formativas", title: "Actividades formativas", description: "", section: "actividades", layout: "default", breadcrumb: "Actividades formativas", oldUrls: ["/actividades.html"] },
      { path: "/actividades/the-mark", title: "The Mark", description: "", section: "actividades", layout: "default", breadcrumb: "The Mark", oldUrls: ["/the-mark.html", "/the-mark1.html"] },
      { path: "/actividades/familias", title: "Familias", description: "", section: "actividades", layout: "default", breadcrumb: "Familias", oldUrls: ["/familias.html"] },
      { path: "/actividades/formacion-padres", title: "Formación padres", description: "", section: "actividades", layout: "default", breadcrumb: "Formación padres", oldUrls: ["/formacioacuten-padres.html"] },
      { path: "/actividades/solidaridad", title: "Solidaridad", description: "", section: "actividades", layout: "default", breadcrumb: "Solidaridad", oldUrls: ["/solidaridad.html"] },
      { path: "/actividades/convivencias", title: "Convivencias", description: "", section: "actividades", layout: "default", breadcrumb: "Convivencias", oldUrls: ["/convivencias.html", "/convivencias-de-semana-santa-y-pascua.html", "/convivencias-de-verano.html"] },
      { path: "/actividades/campamentos", title: "Campamentos", description: "", section: "actividades", layout: "default", breadcrumb: "Campamentos", oldUrls: ["/campamento-de-pascua.html", "/campamento-de-verano.html", "/campus-de-navidad.html"] },
      { path: "/actividades/calendario", title: "Calendario", description: "", section: "actividades", layout: "default", breadcrumb: "Calendario", oldUrls: ["/calendario.html"] }
    ]
  },
  "/actividades/estudio": {
    path: "/actividades/estudio",
    title: "Estudio | Asociación Moreres",
    description: "Salas de estudio de lunes a jueves para socios de 5º Primaria a 2º Bachillerato.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Estudio",
    oldUrls: ["/estudio.html"]
  },
  "/actividades/formativas": {
    path: "/actividades/formativas",
    title: "Actividades formativas | Asociación Moreres",
    description: "Formación humana, académica y espiritual. Programas The Link y The Mark.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Actividades formativas",
    oldUrls: ["/actividades.html"]
  },
  "/actividades/the-mark": {
    path: "/actividades/the-mark",
    title: "The Mark | Asociación Moreres",
    description: "Programa de desarrollo personal para jóvenes a través de mentorías.",
    section: "actividades",
    layout: "default",
    breadcrumb: "The Mark",
    oldUrls: ["/the-mark.html", "/the-mark1.html"]
  },
  "/actividades/familias": {
    path: "/actividades/familias",
    title: "Familias | Asociación Moreres",
    description: "Actividades familiares, formación para padres y programa de formación en virtudes.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Familias",
    oldUrls: ["/familias.html"]
  },
  "/actividades/formacion-padres": {
    path: "/actividades/formacion-padres",
    title: "Formación padres | Asociación Moreres",
    description: "Charlas de formación humana y cristiana para padres.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Formación padres",
    oldUrls: ["/formacioacuten-padres.html"]
  },
  "/actividades/solidaridad": {
    path: "/actividades/solidaridad",
    title: "Solidaridad | Asociación Moreres",
    description: "Actividades solidarias: visitas a residencias, donación de alimentos, acompañamiento.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Solidaridad",
    oldUrls: ["/solidaridad.html"]
  },
  "/actividades/convivencias": {
    path: "/actividades/convivencias",
    title: "Convivencias | Asociación Moreres",
    description: "Convivencias de Semana Santa, Pascua y verano: UNIV Roma, MIF Fátima, Manager, Interclubes.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Convivencias",
    oldUrls: ["/convivencias.html", "/convivencias-de-semana-santa-y-pascua.html", "/convivencias-de-verano.html"]
  },
  "/actividades/campamentos": {
    path: "/actividades/campamentos",
    title: "Campamentos | Asociación Moreres",
    description: "Campamentos de Pascua, verano y Campus de Navidad.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Campamentos",
    oldUrls: ["/campamento-de-pascua.html", "/campamento-de-verano.html", "/campus-de-navidad.html"]
  },
  "/actividades/calendario": {
    path: "/actividades/calendario",
    title: "Calendario | Asociación Moreres",
    description: "Calendario de actividades familiares, formativas, deportivas y solidarias.",
    section: "actividades",
    layout: "default",
    breadcrumb: "Calendario",
    oldUrls: ["/calendario.html"]
  },

  // ==================== ESCUELA DEPORTIVA ====================
  "/escuela-deportiva": {
    path: "/escuela-deportiva",
    title: "Escuela Deportiva | C.D. Moreres",
    description: "Escuela Deportiva de fútbol del C.D. Moreres. Formando personas a través del deporte desde 1996.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Escuela Deportiva",
    isIndex: true,
    oldUrls: ["/escuela-deportiva.html"],
    children: [
      { path: "/escuela-deportiva/presentacion", title: "Presentación", description: "", section: "escuela-deportiva", layout: "default", breadcrumb: "Presentación", oldUrls: ["/escuela-deportiva.html"] },
      { path: "/escuela-deportiva/plan-de-formacion", title: "Plan de formación", description: "", section: "escuela-deportiva", layout: "default", breadcrumb: "Plan de formación", oldUrls: ["/plan-de-formacioacuten.html"] },
      { path: "/escuela-deportiva/temporadas", title: "Temporadas", description: "", section: "escuela-deportiva", layout: "default", breadcrumb: "Temporadas", oldUrls: ["/temporadas.html"] },
      { path: "/escuela-deportiva/inscripcion", title: "Inscripción", description: "", section: "escuela-deportiva", layout: "form", breadcrumb: "Inscripción", oldUrls: ["/preinscripcioacuten-2026-2027.html", "/inscripcioacuten-2025-2026.html", "/jugadores-nuevos.html", "/jugadores-que-siguen-de-la-temporada-pasada.html"] },
      { path: "/escuela-deportiva/padel", title: "Pádel", description: "", section: "escuela-deportiva", layout: "default", breadcrumb: "Pádel", oldUrls: ["/paacutedel.html"] }
    ]
  },
  "/escuela-deportiva/presentacion": {
    path: "/escuela-deportiva/presentacion",
    title: "Presentación | Escuela Deportiva Moreres",
    description: "La Escuela Deportiva del C.D. Moreres, fundada en 1996 y relanzada en 2015.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Presentación",
    oldUrls: ["/escuela-deportiva.html"]
  },
  "/escuela-deportiva/plan-de-formacion": {
    path: "/escuela-deportiva/plan-de-formacion",
    title: "Plan de formación | Escuela Deportiva Moreres",
    description: "Plan de formación anual con virtudes mensuales para jugadores.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Plan de formación",
    oldUrls: ["/plan-de-formacioacuten.html"]
  },
  "/escuela-deportiva/temporadas": {
    path: "/escuela-deportiva/temporadas",
    title: "Temporadas | Escuela Deportiva Moreres",
    description: "Histórico de temporadas y revistas mensuales del C.D. Moreres.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporadas",
    oldUrls: ["/temporadas.html"]
  },
  "/escuela-deportiva/temporadas/2021-2022": {
    path: "/escuela-deportiva/temporadas/2021-2022",
    title: "Temporada 2021-2022 | Escuela Deportiva Moreres",
    description: "Revistas mensuales de la temporada 2021-2022.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2021-2022",
    oldUrls: ["/temporada-2021-2022.html"]
  },
  "/escuela-deportiva/temporadas/2022-2023": {
    path: "/escuela-deportiva/temporadas/2022-2023",
    title: "Temporada 2022-2023 | Escuela Deportiva Moreres",
    description: "Revistas mensuales de la temporada 2022-2023.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2022-2023",
    oldUrls: ["/temporada-2022-2023.html"]
  },
  "/escuela-deportiva/temporadas/2023-2024": {
    path: "/escuela-deportiva/temporadas/2023-2024",
    title: "Temporada 2023-2024 | Escuela Deportiva Moreres",
    description: "Información y recursos de la temporada 2023-2024.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2023-2024",
    oldUrls: ["/temporada-2023-2024.html"]
  },
  "/escuela-deportiva/temporadas/2024-2025": {
    path: "/escuela-deportiva/temporadas/2024-2025",
    title: "Temporada 2024-2025 | Escuela Deportiva Moreres",
    description: "10º aniversario del relanzamiento de la Escuela Deportiva.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2024-2025",
    oldUrls: ["/temporada-2024-2025.html"]
  },
  "/escuela-deportiva/temporadas/2025-2026": {
    path: "/escuela-deportiva/temporadas/2025-2026",
    title: "Temporada 2025-2026 | Escuela Deportiva Moreres",
    description: "Información de la temporada 2025-2026: 11 equipos y 185+ jugadores.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2025-2026",
    oldUrls: ["/temporada-2025-2026.html"]
  },
  "/escuela-deportiva/temporadas/2026-2027": {
    path: "/escuela-deportiva/temporadas/2026-2027",
    title: "Temporada 2026-2027 | Escuela Deportiva Moreres",
    description: "Información de la temporada 2026-2027.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Temporada 2026-2027",
    oldUrls: ["/temporada-2026-2027.html"]
  },
  "/escuela-deportiva/inscripcion": {
    path: "/escuela-deportiva/inscripcion",
    title: "Inscripción | Escuela Deportiva Moreres",
    description: "Preinscripción y matriculación en la Escuela Deportiva del C.D. Moreres.",
    section: "escuela-deportiva",
    layout: "form",
    breadcrumb: "Inscripción",
    oldUrls: ["/preinscripcioacuten-2026-2027.html", "/inscripcioacuten-2025-2026.html", "/jugadores-nuevos.html", "/jugadores-que-siguen-de-la-temporada-pasada.html"]
  },
  "/escuela-deportiva/padel": {
    path: "/escuela-deportiva/padel",
    title: "Pádel | Escuela Deportiva Moreres",
    description: "Actividad de pádel los viernes en Castellón.",
    section: "escuela-deportiva",
    layout: "default",
    breadcrumb: "Pádel",
    oldUrls: ["/paacutedel.html"]
  },

  // ==================== GALERÍA ====================
  "/galeria": {
    path: "/galeria",
    title: "Galería | Asociación Moreres",
    description: "Galería de imágenes de todas las actividades y eventos de Moreres.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Galería",
    isIndex: true,
    oldUrls: ["/galeriacutea-de-imaacutegenes.html", "/actividades-y-planes.html"],
    children: [
      { path: "/galeria/curso-2025-2026", title: "Curso 2025-2026", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2025-2026", oldUrls: ["/curso-2025-2026.html", "/planes-juveniles.html", "/planes-familiares2.html", "/planes-club3.html"] },
      { path: "/galeria/curso-2024-2025", title: "Curso 2024-2025", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2024-2025", oldUrls: ["/curso-2024-2025.html", "/planes-juveniles3.html", "/planes-familiares3.html", "/planes-club1.html"] },
      { path: "/galeria/curso-2023-2024", title: "Curso 2023-2024", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2023-2024", oldUrls: ["/curso-2023-2024.html", "/planes-juveniles1.html", "/planes-familiares.html", "/planes-club4.html"] },
      { path: "/galeria/curso-2022-2023", title: "Curso 2022-2023", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2022-2023", oldUrls: ["/curso-2022-2023.html", "/planes-juveniles2.html", "/planes-familiares1.html", "/planes-club.html"] },
      { path: "/galeria/curso-2021-2022", title: "Curso 2021-2022", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2021-2022", oldUrls: ["/curso-2021-2022.html", "/planes-familiares4.html", "/planes-club2.html", "/planes-eso-y-bach.html"] },
      { path: "/galeria/curso-2020-2021", title: "Curso 2020-2021", description: "", section: "galeria", layout: "gallery", breadcrumb: "Curso 2020-2021", oldUrls: ["/curso-2020-2021.html"] },
      { path: "/galeria/planes-por-equipo", title: "Planes por equipo", description: "", section: "galeria", layout: "gallery", breadcrumb: "Planes por equipo", oldUrls: ["/planes-por-equipo.html"] },
      { path: "/galeria/eventos", title: "Eventos especiales", description: "", section: "galeria", layout: "gallery", breadcrumb: "Eventos especiales", oldUrls: ["/episodio-i-star-wars.html", "/i-world-cup-moreres.html", "/viaje-familiar-faacutetima.html", "/30ordf-jornada-de-la-familia.html", "/romeriacutea-1-de-mayo.html", "/presentacioacuten-del-club.html", "/navidad-con-los-ancianitos.html"] }
    ]
  },
  "/galeria/curso-2025-2026": {
    path: "/galeria/curso-2025-2026",
    title: "Curso 2025-2026 | Galería Moreres",
    description: "Imágenes de actividades del curso 2025-2026.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2025-2026",
    oldUrls: ["/curso-2025-2026.html", "/planes-juveniles.html", "/planes-familiares2.html", "/planes-club3.html"]
  },
  "/galeria/curso-2024-2025": {
    path: "/galeria/curso-2024-2025",
    title: "Curso 2024-2025 | Galería Moreres",
    description: "Imágenes de actividades del curso 2024-2025.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2024-2025",
    oldUrls: ["/curso-2024-2025.html", "/planes-juveniles3.html", "/planes-familiares3.html", "/planes-club1.html"]
  },
  "/galeria/curso-2023-2024": {
    path: "/galeria/curso-2023-2024",
    title: "Curso 2023-2024 | Galería Moreres",
    description: "Imágenes de actividades del curso 2023-2024.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2023-2024",
    oldUrls: ["/curso-2023-2024.html", "/planes-juveniles1.html", "/planes-familiares.html", "/planes-club4.html"]
  },
  "/galeria/curso-2022-2023": {
    path: "/galeria/curso-2022-2023",
    title: "Curso 2022-2023 | Galería Moreres",
    description: "Imágenes de actividades del curso 2022-2023.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2022-2023",
    oldUrls: ["/curso-2022-2023.html", "/planes-juveniles2.html", "/planes-familiares1.html", "/planes-club.html"]
  },
  "/galeria/curso-2021-2022": {
    path: "/galeria/curso-2021-2022",
    title: "Curso 2021-2022 | Galería Moreres",
    description: "Imágenes de actividades del curso 2021-2022.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2021-2022",
    oldUrls: ["/curso-2021-2022.html", "/planes-familiares4.html", "/planes-club2.html", "/planes-eso-y-bach.html"]
  },
  "/galeria/curso-2020-2021": {
    path: "/galeria/curso-2020-2021",
    title: "Curso 2020-2021 | Galería Moreres",
    description: "Imágenes de actividades del curso 2020-2021.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Curso 2020-2021",
    oldUrls: ["/curso-2020-2021.html"]
  },
  "/galeria/planes-por-equipo": {
    path: "/galeria/planes-por-equipo",
    title: "Planes por equipo | Galería Moreres",
    description: "Imágenes de planes realizados por equipos.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Planes por equipo",
    oldUrls: ["/planes-por-equipo.html"]
  },
  "/galeria/eventos": {
    path: "/galeria/eventos",
    title: "Eventos especiales | Galería Moreres",
    description: "Imágenes de eventos especiales: Star Wars, World Cup, Fátima, Jornada de la Familia y más.",
    section: "galeria",
    layout: "gallery",
    breadcrumb: "Eventos especiales",
    oldUrls: ["/episodio-i-star-wars.html", "/i-world-cup-moreres.html", "/viaje-familiar-faacutetima.html", "/30ordf-jornada-de-la-familia.html", "/romeriacutea-1-de-mayo.html", "/presentacioacuten-del-club.html", "/navidad-con-los-ancianitos.html"]
  },

  // ==================== RECURSOS ====================
  "/recursos/webs-de-interes": {
    path: "/recursos/webs-de-interes",
    title: "Webs de interés | Asociación Moreres",
    description: "Recursos recomendados: libros, películas, afectividad, tecnología y más.",
    section: "recursos",
    layout: "default",
    breadcrumb: "Webs de interés",
    oldUrls: ["/webs-de-intereacutes.html"]
  },

  // ==================== HAZTE SOCIO ====================
  "/hazte-socio": {
    path: "/hazte-socio",
    title: "Hazte socio | Asociación Moreres",
    description: "Haciéndote socio de Moreres participas en todas las actividades del Club con precios especiales.",
    section: "hazte-socio",
    layout: "form",
    breadcrumb: "Hazte socio",
    oldUrls: ["/quiero-ser-socio.html"]
  },

  // ==================== CONTACTO ====================
  "/contacto": {
    path: "/contacto",
    title: "Contacto | Asociación Moreres",
    description: "Ponte en contacto con la Asociación Moreres en Castellón.",
    section: "contacto",
    layout: "default",
    breadcrumb: "Contacto",
    oldUrls: ["/contacto.html"]
  },

  // ==================== ENCUESTA ====================
  "/escuela-deportiva/encuesta": {
    path: "/escuela-deportiva/encuesta",
    title: "Encuesta Escuela Deportiva | C.D. Moreres",
    description: "Encuesta anónima para mejorar la Escuela Deportiva.",
    section: "escuela-deportiva",
    layout: "form",
    breadcrumb: "Encuesta",
    oldUrls: ["/encuesta-escuela-deportiva.html"]
  },

  // ==================== LEGAL ====================
  "/legal": {
    path: "/legal",
    title: "Información legal | Asociación Moreres",
    description: "Aviso legal, política de privacidad y protección de datos de Moreres Club Deportivo.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Legal",
    isIndex: true,
    oldUrls: ["/plandeprotecciondelmenor.html"],
    children: [
      { path: "/legal/aviso-legal", title: "Aviso legal", description: "", section: "legal", layout: "legal", breadcrumb: "Aviso legal", oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009.html"] },
      { path: "/legal/politica-de-privacidad", title: "Política de privacidad", description: "", section: "legal", layout: "legal", breadcrumb: "Política de privacidad", oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032.html"] },
      { path: "/legal/politica-de-cookies", title: "Política de cookies", description: "", section: "legal", layout: "legal", breadcrumb: "Política de cookies", oldUrls: ["/plandeprotecciondelmenor-578735.html"] },
      { path: "/legal/proteccion-de-datos", title: "Protección de datos", description: "", section: "legal", layout: "legal", breadcrumb: "Protección de datos", oldUrls: ["/plandeprotecciondelmenor-578735-499072.html"] },
      { path: "/legal/privacidad-redes-sociales", title: "Privacidad redes sociales", description: "", section: "legal", layout: "legal", breadcrumb: "Privacidad redes sociales", oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009-827998.html"] },
      { path: "/legal/proteccion-del-menor", title: "Plan de protección del menor", description: "", section: "legal", layout: "legal", breadcrumb: "Plan de protección del menor", oldUrls: ["/plandeprotecciondelmenor.html"] }
    ]
  },
  "/legal/aviso-legal": {
    path: "/legal/aviso-legal",
    title: "Aviso legal | Asociación Moreres",
    description: "Aviso legal de Moreres Club Deportivo.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Aviso legal",
    oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009.html"]
  },
  "/legal/politica-de-privacidad": {
    path: "/legal/politica-de-privacidad",
    title: "Política de privacidad | Asociación Moreres",
    description: "Política de privacidad y tratamiento de datos personales.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Política de privacidad",
    oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032.html"]
  },
  "/legal/politica-de-cookies": {
    path: "/legal/politica-de-cookies",
    title: "Política de cookies | Asociación Moreres",
    description: "Uso de cookies en el sitio web de Moreres.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Política de cookies",
    oldUrls: ["/plandeprotecciondelmenor-578735.html"]
  },
  "/legal/proteccion-de-datos": {
    path: "/legal/proteccion-de-datos",
    title: "Protección de datos | Asociación Moreres",
    description: "Información básica sobre protección de datos personales.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Protección de datos",
    oldUrls: ["/plandeprotecciondelmenor-578735-499072.html"]
  },
  "/legal/privacidad-redes-sociales": {
    path: "/legal/privacidad-redes-sociales",
    title: "Privacidad redes sociales | Asociación Moreres",
    description: "Política de privacidad para redes sociales.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Privacidad redes sociales",
    oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009-827998.html"]
  },
  "/legal/proteccion-del-menor": {
    path: "/legal/proteccion-del-menor",
    title: "Plan de protección del menor | Asociación Moreres",
    description: "Plan de protección y seguridad para menores.",
    section: "legal",
    layout: "legal",
    breadcrumb: "Plan de protección del menor",
    oldUrls: ["/plandeprotecciondelmenor.html"]
  }
}

export function getRouteByPath(path: string): RouteConfig | undefined {
  return routes[path]
}

export function getOldUrlRedirect(oldUrl: string): string | undefined {
  for (const [, route] of Object.entries(routes)) {
    if (route.oldUrls.includes(oldUrl)) {
      return route.path
    }
  }
  return undefined
}

export function getAllOldUrls(): Map<string, string> {
  const map = new Map<string, string>()
  for (const [, route] of Object.entries(routes)) {
    for (const oldUrl of route.oldUrls) {
      if (oldUrl) map.set(oldUrl, route.path)
    }
  }
  return map
}

export function getSectionRoutes(section: string): RouteConfig[] {
  return Object.values(routes).filter(r => r.section === section && !r.path.endsWith("/"))
}

export function getMainRoutes(): RouteConfig[] {
  return [
    getRouteByPath("/")!,
    getRouteByPath("/quienes-somos")!,
    getRouteByPath("/actividades")!,
    getRouteByPath("/escuela-deportiva")!,
    getRouteByPath("/galeria")!,
    getRouteByPath("/hazte-socio")!,
    getRouteByPath("/contacto")!,
    getRouteByPath("/legal")!
  ]
}
