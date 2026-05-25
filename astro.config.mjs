import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const redirects = {
  // ============================================================
  // HOME
  // /index.html handled natively — no redirect needed
  // ============================================================

  // ============================================================
  // QUIÉNES SOMOS
  // ============================================================
  '/iquestqueacute-es-moreres.html': '/quienes-somos',
  '/formacioacuten.html': '/quienes-somos/proyecto-educativo',

  // ============================================================
  // ACTIVIDADES
  // ============================================================
  '/actividades.html': '/actividades',
  '/estudio.html': '/actividades/estudio',
  '/familias.html': '/actividades/familias',
  '/solidaridad.html': '/actividades/solidaridad',
  '/the-mark.html': '/actividades/the-mark',
  '/the-mark1.html': '/actividades/the-mark',
  '/formacioacuten-padres.html': '/actividades/formacion-padres',
  '/calendario.html': '/actividades/calendario',
  '/webs-de-intereacutes.html': '/recursos/webs-de-interes',
  '/convivencias.html': '/actividades/convivencias',
  '/convivencias-de-semana-santa-y-pascua.html': '/actividades/convivencias',
  '/convivencias-de-verano.html': '/actividades/convivencias',
  '/campamento-de-pascua.html': '/actividades/campamentos',
  '/campamento-de-verano.html': '/actividades/campamentos',
  '/campus-de-navidad.html': '/actividades/campamentos',

  // ============================================================
  // ESCUELA DEPORTIVA
  // ============================================================
  '/escuela-deportiva.html': '/escuela-deportiva',
  '/plan-de-formacioacuten.html': '/escuela-deportiva/plan-de-formacion',
  '/temporadas.html': '/escuela-deportiva/temporadas',
  '/paacutedel.html': '/escuela-deportiva/padel',
  '/temporada-2021-2022.html': '/escuela-deportiva/temporadas/2021-2022',
  '/temporada-2022-2023.html': '/escuela-deportiva/temporadas/2022-2023',
  '/temporada-2023-2024.html': '/escuela-deportiva/temporadas/2023-2024',
  '/temporada-2024-2025.html': '/escuela-deportiva/temporadas/2024-2025',
  '/temporada-2025-2026.html': '/escuela-deportiva/temporadas/2025-2026',
  '/temporada-2026-2027.html': '/escuela-deportiva/temporadas/2026-2027',
  '/preinscripcioacuten-2026-2027.html': '/escuela-deportiva/inscripcion',
  '/inscripcioacuten-2025-2026.html': '/escuela-deportiva/inscripcion',
  '/jugadores-nuevos.html': '/escuela-deportiva/inscripcion',
  '/jugadores-que-siguen-de-la-temporada-pasada.html': '/escuela-deportiva/inscripcion',
  '/encuesta-escuela-deportiva.html': '/escuela-deportiva/encuesta',

  // ============================================================
  // GALERÍA
  // ============================================================
  '/galeriacutea-de-imaacutegenes.html': '/galeria',
  '/actividades-y-planes.html': '/galeria',
  '/curso-2020-2021.html': '/galeria/curso-2020-2021',
  '/curso-2021-2022.html': '/galeria/curso-2021-2022',
  '/curso-2022-2023.html': '/galeria/curso-2022-2023',
  '/curso-2023-2024.html': '/galeria/curso-2023-2024',
  '/curso-2024-2025.html': '/galeria/curso-2024-2025',
  '/curso-2025-2026.html': '/galeria/curso-2025-2026',
  '/planes-juveniles.html': '/galeria/curso-2025-2026',
  '/planes-juveniles1.html': '/galeria/curso-2023-2024',
  '/planes-juveniles2.html': '/galeria/curso-2022-2023',
  '/planes-juveniles3.html': '/galeria/curso-2024-2025',
  '/planes-familiares.html': '/galeria/curso-2023-2024',
  '/planes-familiares1.html': '/galeria/curso-2022-2023',
  '/planes-familiares2.html': '/galeria/curso-2025-2026',
  '/planes-familiares3.html': '/galeria/curso-2024-2025',
  '/planes-familiares4.html': '/galeria/curso-2021-2022',
  '/planes-club.html': '/galeria/curso-2022-2023',
  '/planes-club1.html': '/galeria/curso-2024-2025',
  '/planes-club2.html': '/galeria/curso-2021-2022',
  '/planes-club3.html': '/galeria/curso-2025-2026',
  '/planes-club4.html': '/galeria/curso-2023-2024',
  '/planes-eso-y-bach.html': '/galeria/curso-2021-2022',
  '/planes-por-equipo.html': '/galeria/planes-por-equipo',
  '/episodio-i-star-wars.html': '/galeria/eventos',
  '/i-world-cup-moreres.html': '/galeria/eventos',
  '/viaje-familiar-faacutetima.html': '/galeria/eventos',
  '/30ordf-jornada-de-la-familia.html': '/galeria/eventos',
  '/romeriacutea-1-de-mayo.html': '/galeria/eventos',
  '/presentacioacuten-del-club.html': '/galeria/eventos',
  '/navidad-con-los-ancianitos.html': '/galeria/eventos',

  // ============================================================
  // HAZTE SOCIO / CONTACTO
  // ============================================================
  '/quiero-ser-socio.html': '/hazte-socio',
  '/contacto.html': '/contacto',
  '/contact': '/contacto',

  // ============================================================
  // LEGAL (Weebly autogenerated suffixes)
  // ============================================================
  '/plandeprotecciondelmenor.html': '/legal',
  '/plandeprotecciondelmenor-578735.html': '/legal/politica-de-cookies',
  '/plandeprotecciondelmenor-578735-499072.html': '/legal/proteccion-de-datos',
  '/plandeprotecciondelmenor-578735-499072-454032.html': '/legal/politica-de-privacidad',
  '/plandeprotecciondelmenor-578735-499072-454032-407009.html': '/legal/aviso-legal',
  '/plandeprotecciondelmenor-578735-499072-454032-407009-827998.html': '/legal/privacidad-redes-sociales',

  // ============================================================
  // ADDITIONAL (semantic URLs that previously returned 404)
  // ============================================================
  '/aviso-legal': '/legal/aviso-legal',
  '/politica-de-privacidad': '/legal/politica-de-privacidad',
  '/politica-de-cookies': '/legal/politica-de-cookies',
  '/proteccion-de-datos': '/legal/proteccion-de-datos',
};

export default defineConfig({
  integrations: [react()],
  site: 'https://asociacionmoreres.org',
  output: 'static',
  srcDir: './src',
  publicDir: './public',
  build: {
    assets: '_assets',
  },
  server: {
    port: 3000,
  },
  redirects,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@data': path.resolve(__dirname, './data'),
      },
    },
  },
});
