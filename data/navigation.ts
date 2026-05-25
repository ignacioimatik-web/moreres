export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: string
  children?: NavItem[]
  isHighlighted?: boolean
  oldUrls?: string[]
}

export const navigation: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
    description: "Página principal de la Asociación Moreres",
    oldUrls: ["/", "/index.html"]
  },
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
    description: "Conoce nuestra asociación, historia y proyecto educativo",
    oldUrls: ["/iquestqueacute-es-moreres.html"],
    children: [
      {
        label: "Qué es Moreres",
        href: "/quienes-somos/que-es-moreres",
        description: "Nuestra identidad y propósito",
        oldUrls: ["/iquestqueacute-es-moreres.html"]
      },
      {
        label: "Historia",
        href: "/quienes-somos/historia",
        description: "Nuestra trayectoria desde 1971",
        oldUrls: ["/iquestqueacute-es-moreres.html#historia"]
      },
      {
        label: "Proyecto educativo",
        href: "/quienes-somos/proyecto-educativo",
        description: "Nuestra propuesta formativa integral",
        oldUrls: ["/formacioacuten.html"]
      },
      {
        label: "Formación cristiana",
        href: "/quienes-somos/formacion-cristiana",
        description: "Formación espiritual y acompañamiento personal",
        oldUrls: ["/formacioacuten.html#espiritual"]
      }
    ]
  },
  {
    label: "Actividades",
    href: "/actividades",
    description: "Todas nuestras actividades formativas, familiares y solidarias",
    oldUrls: ["/actividades.html"],
    children: [
      {
        label: "Estudio",
        href: "/actividades/estudio",
        description: "Sala de estudio y acompañamiento académico",
        oldUrls: ["/estudio.html"]
      },
      {
        label: "Actividades formativas",
        href: "/actividades/formativas",
        description: "Formación humana, académica y espiritual",
        oldUrls: ["/actividades.html", "/the-mark.html", "/webs-de-intereacutes.html"]
      },
      {
        label: "The Mark",
        href: "/actividades/the-mark",
        description: "Programa de desarrollo personal para jóvenes",
        oldUrls: ["/the-mark.html", "/the-mark1.html"]
      },
      {
        label: "Familias",
        href: "/actividades/familias",
        description: "Actividades y formación para familias",
        oldUrls: ["/familias.html", "/formacioacuten-padres.html"]
      },
      {
        label: "Solidaridad",
        href: "/actividades/solidaridad",
        description: "Actividades solidarias y servicio a los demás",
        oldUrls: ["/solidaridad.html"]
      },
      {
        label: "Convivencias",
        href: "/actividades/convivencias",
        description: "Convivencias de Semana Santa, verano y más",
        oldUrls: ["/convivencias.html", "/convivencias-de-semana-santa-y-pascua.html", "/convivencias-de-verano.html"]
      },
      {
        label: "Campamentos",
        href: "/actividades/campamentos",
        description: "Campamentos de Pascua, verano y Navidad",
        oldUrls: ["/campamento-de-pascua.html", "/campamento-de-verano.html", "/campus-de-navidad.html"]
      },
      {
        label: "Calendario",
        href: "/actividades/calendario",
        description: "Calendario de actividades del curso",
        oldUrls: ["/calendario.html"]
      }
    ]
  },
  {
    label: "Escuela Deportiva",
    href: "/escuela-deportiva",
    description: "Escuela de fútbol del C.D. Moreres",
    oldUrls: ["/escuela-deportiva.html"],
    children: [
      {
        label: "Presentación",
        href: "/escuela-deportiva/presentacion",
        description: "Conoce nuestra escuela deportiva",
        oldUrls: ["/escuela-deportiva.html"]
      },
      {
        label: "Plan de formación",
        href: "/escuela-deportiva/plan-de-formacion",
        description: "Plan de formación anual en virtudes",
        oldUrls: ["/plan-de-formacioacuten.html"]
      },
      {
        label: "Temporadas",
        href: "/escuela-deportiva/temporadas",
        description: "Histórico de temporadas y revistas mensuales",
        oldUrls: ["/temporadas.html"]
      },
      {
        label: "Inscripción",
        href: "/escuela-deportiva/inscripcion",
        description: "Preinscripción y matriculación",
        oldUrls: ["/preinscripcioacuten-2026-2027.html", "/inscripcioacuten-2025-2026.html", "/jugadores-nuevos.html", "/jugadores-que-siguen-de-la-temporada-pasada.html"]
      },
      {
        label: "Pádel",
        href: "/escuela-deportiva/padel",
        description: "Actividad de pádel",
        oldUrls: ["/paacutedel.html"]
      }
    ]
  },
  {
    label: "Galería",
    href: "/galeria",
    description: "Imágenes de nuestras actividades y eventos",
    oldUrls: ["/galeriacutea-de-imaacutegenes.html"],
    children: [
      {
        label: "Curso 2025-2026",
        href: "/galeria/curso-2025-2026",
        description: "Fotos del curso actual",
        oldUrls: ["/curso-2025-2026.html", "/planes-juveniles.html", "/planes-familiares2.html", "/planes-club3.html"]
      },
      {
        label: "Curso 2024-2025",
        href: "/galeria/curso-2024-2025",
        description: "Fotos del curso 2024-2025",
        oldUrls: ["/curso-2024-2025.html", "/planes-juveniles3.html", "/planes-familiares3.html", "/planes-club1.html"]
      },
      {
        label: "Curso 2023-2024",
        href: "/galeria/curso-2023-2024",
        description: "Fotos del curso 2023-2024",
        oldUrls: ["/curso-2023-2024.html", "/planes-juveniles1.html", "/planes-familiares.html", "/planes-club4.html"]
      },
      {
        label: "Curso 2022-2023",
        href: "/galeria/curso-2022-2023",
        description: "Fotos del curso 2022-2023",
        oldUrls: ["/curso-2022-2023.html", "/planes-juveniles2.html", "/planes-familiares1.html", "/planes-club.html"]
      },
      {
        label: "Curso 2021-2022",
        href: "/galeria/curso-2021-2022",
        description: "Fotos del curso 2021-2022",
        oldUrls: ["/curso-2021-2022.html", "/planes-familiares4.html", "/planes-club2.html", "/planes-eso-y-bach.html"]
      },
      {
        label: "Curso 2020-2021",
        href: "/galeria/curso-2020-2021",
        description: "Fotos del curso 2020-2021",
        oldUrls: ["/curso-2020-2021.html"]
      },
      {
        label: "Planes por equipo",
        href: "/galeria/planes-por-equipo",
        description: "Fotos de planes por equipos",
        oldUrls: ["/planes-por-equipo.html"]
      },
      {
        label: "Eventos especiales",
        href: "/galeria/eventos",
        description: "Eventos: Star Wars, World Cup, Fátima, Jornada de la Familia",
        oldUrls: ["/episodio-i-star-wars.html", "/i-world-cup-moreres.html", "/viaje-familiar-faacutetima.html", "/30ordf-jornada-de-la-familia.html", "/romeriacutea-1-de-mayo.html", "/presentacioacuten-del-club.html", "/navidad-con-los-ancianitos.html"]
      }
    ]
  },
  {
    label: "Hazte socio",
    href: "/hazte-socio",
    description: "Asóciate a Moreres y disfruta de todas las actividades",
    isHighlighted: true,
    oldUrls: ["/quiero-ser-socio.html"]
  },
  {
    label: "Contacto",
    href: "/contacto",
    description: "Ponte en contacto con nosotros",
    oldUrls: ["/contacto.html"]
  },
  {
    label: "Legal",
    href: "/legal",
    description: "Información legal y protección de datos",
    oldUrls: ["/plandeprotecciondelmenor.html"],
    children: [
      {
        label: "Aviso legal",
        href: "/legal/aviso-legal",
        oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009.html"]
      },
      {
        label: "Política de privacidad",
        href: "/legal/politica-de-privacidad",
        oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032.html"]
      },
      {
        label: "Política de cookies",
        href: "/legal/politica-de-cookies",
        oldUrls: ["/plandeprotecciondelmenor-578735.html"]
      },
      {
        label: "Protección de datos",
        href: "/legal/proteccion-de-datos",
        oldUrls: ["/plandeprotecciondelmenor-578735-499072.html"]
      },
      {
        label: "Privacidad redes sociales",
        href: "/legal/privacidad-redes-sociales",
        oldUrls: ["/plandeprotecciondelmenor-578735-499072-454032-407009-827998.html"]
      },
      {
        label: "Plan de protección del menor",
        href: "/legal/proteccion-del-menor",
        oldUrls: ["/plandeprotecciondelmenor.html"]
      }
    ]
  }
]

export const footerLinks = {
  association: {
    label: "Asociación Moreres",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Quiénes somos", href: "/quienes-somos" },
      { label: "Hazte socio", href: "/hazte-socio" },
      { label: "Contacto", href: "/contacto" }
    ]
  },
  activities: {
    label: "Actividades",
    items: [
      { label: "Estudio", href: "/actividades/estudio" },
      { label: "Escuela Deportiva", href: "/escuela-deportiva" },
      { label: "Convivencias", href: "/actividades/convivencias" },
      { label: "Campamentos", href: "/actividades/campamentos" },
      { label: "Calendario", href: "/actividades/calendario" }
    ]
  },
  resources: {
    label: "Recursos",
    items: [
      { label: "Webs de interés", href: "/recursos/webs-de-interes" },
      { label: "Galería", href: "/galeria" },
      { label: "The Mark", href: "/actividades/the-mark" },
      { label: "Formación padres", href: "/actividades/formacion-padres" }
    ]
  },
  legal: {
    label: "Legal",
    items: [
      { label: "Aviso legal", href: "/legal/aviso-legal" },
      { label: "Política de privacidad", href: "/legal/politica-de-privacidad" },
      { label: "Política de cookies", href: "/legal/politica-de-cookies" },
      { label: "Protección de datos", href: "/legal/proteccion-de-datos" }
    ]
  }
}

export function findNavItemByOldUrl(oldUrl: string): NavItem | null {
  for (const item of navigation) {
    if (item.oldUrls?.includes(oldUrl)) return item
    if (item.children) {
      for (const child of item.children) {
        if (child.oldUrls?.includes(oldUrl)) return child
      }
    }
  }
  return null
}

export function getBreadcrumbs(path: string): { label: string; href: string }[] {
  const crumbs: { label: string; href: string }[] = [{ label: "Inicio", href: "/" }]

  const find = (items: NavItem[], target: string): boolean => {
    for (const item of items) {
      if (item.href === target) {
        crumbs.push({ label: item.label, href: item.href })
        return true
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.href === target) {
            crumbs.push({ label: item.label, href: item.href })
            crumbs.push({ label: child.label, href: child.href })
            return true
          }
          if (child.children) {
            for (const sub of child.children) {
              if (sub.href === target) {
                crumbs.push({ label: item.label, href: item.href })
                crumbs.push({ label: child.label, href: child.href })
                crumbs.push({ label: sub.label, href: sub.href })
                return true
              }
            }
          }
        }
      }
    }
    return false
  }

  if (path !== "/") {
    find(navigation, path)
  }
  return crumbs
}
