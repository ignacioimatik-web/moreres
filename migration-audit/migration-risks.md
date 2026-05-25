# MIGRATION RISKS - ASOCIACIÓN MORERES

> Análisis de riesgos para la migración de Weebly a web moderna.
> Fecha: 25 de mayo de 2026

---

## RIESGO 1: PLATAFORMA WEEBLY (PROPIETARIA)

**Nivel:** 🔴 Alto
**Descripción:** El sitio está construido sobre Weebly, un constructor de sitios propietario. Todo el contenido está almacenado en su infraestructura (editmysite.com, cdn11.editmysite.com, etc.).
**Impacto:**
- No hay acceso directo a la base de datos ni a los archivos del servidor
- Las galerías de imágenes están en formato Weebly (no se pueden exportar fácilmente)
- Los formularios son nativos de Weebly y no se pueden exportar
- Las URLs tienen formato Weebly con extensiones `.html` y caracteres URL-encoded
**Mitigación:** Extracción manual de contenido (ya realizada). Descarga de assets uno a uno o mediante scraping.

---

## RIESGO 2: VOLUMEN DE PÁGINAS (73 PÁGINAS)

**Nivel:** 🟡 Medio
**Descripción:** Hay 73 páginas en el sitemap. Muchas son galerías de imágenes con contenido mínimo, pero cada una requiere una URL de destino y posible redirección.
**Impacto:**
- Trabajo significativo de mapeo URL a URL
- Riesgo de perder páginas en la migración
- Algunas páginas están desactualizadas y podrían eliminarse
**Mitigación:** Agrupar galerías por curso y año. Las galerías históricas (2020-2021, 2021-2022) podrían consolidarse.

---

## RIESGO 3: CONTENIDO LEGAL EN PDF (NO HTML)

**Nivel:** 🔴 Alto
**Descripción:** Todo el contenido legal (aviso legal, privacidad, cookies, etc.) existe únicamente como PDF. Las páginas HTML solo muestran un título y un enlace de descarga.
**Impacto:**
- Mala experiencia de usuario (obliga a descargar PDF para leer)
- Malo para SEO (los motores de búsqueda no indexan bien el contenido en PDFs)
- Inaccesible para usuarios que no pueden abrir PDFs
- Difícil de migrar (hay que extraer texto del PDF o reescribir)
**Mitigación:** Extraer el texto del PDF y crear páginas HTML con el contenido legal visible. Mantener PDF descargable como complemento.

---

## RIESGO 4: URLS NO ESTÁNDAR PARA PÁGINAS LEGALES

**Nivel:** 🔴 Alto
**Descripción:** Las URLs legales son generadas por Weebly con sufijos numéricos largos:
- `/plandeprotecciondelmenor-578735-499072-454032-407009.html` (Aviso Legal)
- `/plandeprotecciondelmenor-578735-499072-454032.html` (Política de Privacidad)
- etc.

Además, las URLs estándar (`/aviso-legal`, `/politica-de-privacidad`) **devuelven 404**.
**Impacto:**
- Muy malo para SEO
- Usuarios y robots no encuentran las páginas legales
- Posible incumplimiento normativo (la ley exige fácil acceso al aviso legal)
**Mitigación:** Crear URLs semánticas y redirigir las antiguas.

---

## RIESGO 5: DATOS SENSIBLES EN FORMULARIOS

**Nivel:** 🔴 Alto
**Descripción:** Los formularios recogen datos muy sensibles:
- Números de cuenta bancaria (3 formularios)
- DNI
- Direcciones completas
- Datos de menores
- Justificantes de pago (upload)
**Impacto:**
- Responsabilidad GDPR/LOPDGDD
- Los formularios Weebly pueden no tener cifrado adecuado
- Migración requiere mantener seguridad y cumplimiento
**Mitigación:** Implementar formularios seguros (HTTPS + cifrado). Revisar política de retención de datos. Considerar solución profesional de formularios.

---

## RIESGO 6: SIN BANNER DE COOKIES

**Nivel:** 🟡 Medio
**Descripción:** No se detectó ningún banner de consentimiento de cookies. El sitio carga Google Analytics y scripts de Elfsight que probablemente instalan cookies.
**Impacto:**
- Posible incumplimiento del RGPD y LSSI-CE
- Riesgo de sanción
**Mitigación:** Implementar banner de cookies con consentimiento en la migración.

---

## RIESGO 7: FOOTER VACÍO

**Nivel:** 🟡 Medio
**Descripción:** El footer de todas las páginas está completamente vacío. No hay enlaces a aviso legal, política de privacidad, redes sociales ni ningún otro contenido.
**Impacto:**
- Mala experiencia de usuario
- Pérdida de oportunidad SEO
- Falta de enlaces legales (requisito normativo)
**Mitigación:** Diseñar footer completo con enlaces legales, redes sociales, contacto.

---

## RIESGO 8: IMÁGENES Y ASSETS NO OPTIMIZADOS

**Nivel:** 🟡 Medio
**Descripción:** Las imágenes se sirven sin optimización desde el CDN de Weebly. Los PDFs tienen tamaños grandes (10MB+ algunos). No se usa lazy loading ni formatos modernos (WebP).
**Impacto:**
- Rendimiento lento (especialmente galerías con decenas de imágenes)
- Mala experiencia en móvil
- Pérdida de oportunidades de mejora SEO (Core Web Vitals)
**Mitigación:** Optimizar todas las imágenes (WebP, lazy loading, compresión). Migrar PDFs a CDN moderno.

---

## RIESGO 9: CONTENIDO DESACTUALIZADO

**Nivel:** 🟡 Medio
**Descripción:** Múltiples páginas contienen información de cursos pasados:
- Calendario 2024-2025 (no actualizado a 2025-2026)
- The Mark con fechas 2023-2024
- Convivencias referencian UNIV 2023, MIF FATIMA 2023
- Temporada 2026-2027 usa PDF de 2025-2026 (duplicado)
- Curso 2020-2021 (5 años de antigüedad)
**Impacto:**
- Los usuarios pueden ver información incorrecta
- Se necesita decidir qué mantener, qué archivar y qué actualizar
**Mitigación:** Archivar páginas históricas en una sección "Archivo" o eliminarlas con redirecciones. Actualizar contenido recurrente.

---

## RIESGO 10: PÁGINA 404 (CURSOS DE AFECTIVIDAD)

**Nivel:** 🟢 Bajo
**Descripción:** La página `/cursoss-de-afectividad.html` aparece en el sitemap pero devuelve 404. Posiblemente eliminada por error o mal escrita en el sitemap.
**Impacto:**
- Mala experiencia de usuario si alguien llega desde el sitemap o un enlace externo
**Mitigación:** Eliminar del sitemap o crear la página si el contenido existe.

---

## RIESGO 11: ESTRUCTURA DE GALERÍAS DUPLICADA

**Nivel:** 🟢 Bajo
**Descripción:** Existen múltiples páginas de galería muy similares:
- `planes-juveniles.html`, `planes-juveniles1.html`, `planes-juveniles2.html`, `planes-juveniles3.html`
- `planes-familiares.html`, `planes-familiares1.html` a `planes-familiares4.html`
- `planes-club.html`, `planes-club1.html` a `planes-club4.html`

Algunas tienen contenidos solapados o referencias a "este curso" sin especificar cuál.
**Impacto:**
- Confusión en la navegación para el usuario
- Contenido duplicado para SEO
- Dificultad para mantener actualizado
**Mitigación:** Unificar en una estructura tipo `/galeria/planes-familiares/2023-2024` con filtros por año.

---

## RIESGO 12: SIN BLOG / SECCIÓN DE NOTICIAS

**Nivel:** 🟢 Bajo
**Descripción:** El sitio no tiene blog ni sección de noticias. Las actualizaciones solo se comunican por WhatsApp y redes sociales.
**Impacto:**
- Pérdida de tráfico SEO orgánico
- Dependencia de redes sociales para comunicación
- No hay contenido indexable actualizable
**Mitigación:** Considerar añadir un blog o sección de noticias en el rediseño.

---

## RIESGO 13: SIN VERSIÓN EN INGLÉS

**Nivel:** 🟢 Bajo
**Descripción:** El sitio está completamente en español, con lang="es_ES". No hay soporte multilingüe.
**Impacto:**
- Los usuarios internacionales no pueden acceder al contenido
**Mitigación:** Evaluar si es necesario. No parece prioritario para una asociación local.

---

## MATRIZ DE RIESGOS

| # | Riesgo | Nivel | Prioridad | Acción |
|---|--------|-------|-----------|--------|
| 1 | Plataforma Weebly propietaria | 🔴 Alto | Crítica | Migrar todo a stack moderno |
| 2 | Volumen de páginas (73) | 🟡 Medio | Alta | Mapear y consolidar |
| 3 | Contenido legal solo en PDF | 🔴 Alto | Crítica | Extraer y crear HTML |
| 4 | URLs legales no estándar | 🔴 Alto | Crítica | Crear redirecciones 301 |
| 5 | Datos sensibles en formularios | 🔴 Alto | Crítica | Formularios seguros |
| 6 | Sin banner de cookies | 🟡 Medio | Alta | Implementar |
| 7 | Footer vacío | 🟡 Medio | Alta | Diseñar footer completo |
| 8 | Assets no optimizados | 🟡 Medio | Media | Optimizar imágenes/PDFs |
| 9 | Contenido desactualizado | 🟡 Medio | Media | Archivar/actualizar |
| 10 | Página 404 en sitemap | 🟢 Bajo | Baja | Eliminar o crear |
| 11 | Galerías duplicadas | 🟢 Bajo | Baja | Unificar estructura |
| 12 | Sin blog/noticias | 🟢 Bajo | Baja | Considerar añadir |
| 13 | Sin multilingüe | 🟢 Bajo | Baja | Evaluar necesidad |

---

## RESUMEN DE PRIORIDADES

### Crítico (resolver antes/durante migración):
1. Migrar contenido legal a HTML con URLs semánticas
2. Redirigir URLs antiguas legales a nuevas
3. Implementar formularios seguros para datos sensibles
4. Crear banner de cookies

### Alta (resolver durante migración):
5. Mapear las 73 URLs antiguas a nueva estructura
6. Diseñar footer completo
7. Optimizar assets (imágenes WebP, PDFs comprimidos)

### Media (después del lanzamiento):
8. Archivar/actualizar contenido desactualizado
9. Consolidar galerías duplicadas

### Baja (futuro):
10. Evaluar creación de blog
11. Evaluar soporte multilingüe
12. Eliminar página 404 del sitemap
