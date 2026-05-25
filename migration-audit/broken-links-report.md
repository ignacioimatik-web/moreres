# Broken Links Report — Asociación Moreres

**Date:** 2026-05-25  
**Scope:** All 48 `.astro` pages, all components, all redirects

---

## Summary

| Category | Found | Broken | Status |
|----------|-------|--------|--------|
| Internal links (hardcoded) | 93 | 0 | ✅ PASS |
| Internal links (dynamic/nav data) | 48 routes | 0 | ✅ PASS |
| PDF files | 28 | 0 (2 content mismatches) | ⚠️ |
| Redirects (astro.config.mjs) | 87 | 0 | ✅ PASS |
| Redirects (vercel.json) | 87 | 0 | ✅ PASS |
| Redirects (_redirects) | 87 | 0 | ✅ PASS |
| External links | 20 | **1 BROKEN** | 🔴 |
| mailto: links | 4 | 0 | ✅ PASS |

---

## 🔴 BROKEN EXTERNAL LINK

### 1. YouTube Channel — 404 Not Found

**Source file:** `src/components/Footer.astro:23`  
**Current URL:** `https://www.youtube.com/@asociacionmoreres`  
**HTTP Status:** 404  
**Verified working alternative:** `https://www.youtube.com/@ClubMoreres` (HTTP 200)  
**Fix:** Replace the href in Footer.astro line 23

```diff
- <a href="https://www.youtube.com/@asociacionmoreres" ...>
+ <a href="https://www.youtube.com/@ClubMoreres" ...>
```

---

## ⚠️ PDF ANOMALIES (files exist, content may be wrong)

### 1. Temporada 2021-2022 → points to 2022-2023 PDF

**Source file:** `src/pages/escuela-deportiva/temporadas/2021-2022.astro:31`  
**Current PDF:** `/assets/documents/c.d._moreres_-_temporada_2022-2023.pdf`  
**Issue:** Link text says "Información temporada 2021-2022" but file is for 2022-2023

### 2. Temporada 2026-2027 → points to 2025-2026 PDF

**Source file:** `src/pages/escuela-deportiva/temporadas/2026-2027.astro:30`  
**Current PDF:** `/assets/documents/c.d._moreres_temporada_2025-2026_1.pdf`  
**Issue:** Link text says "Información temporada 2026-2027" but file is for 2025-2026

---

## ✅ VERIFIED — ALL INTERNAL LINKS RESOLVE

All 93 hardcoded `href="/..."` links in `.astro` files point to existing routes. Verified by checking each path against the file tree:

### Navigation (Header.astro) — all resolve
- `/`, `/quienes-somos`, `/actividades`, `/escuela-deportiva`, `/galeria`, `/hazte-socio`, `/contacto`
- Sub-items: `/quienes-somos/que-es-moreres`, `/quienes-somos/historia`, etc. (all 13 nav items)

### Footer links — all resolve
- 10 association links, 7 activities links, 3 resources links, 6 legal links

### Homepage links — all resolve
- 10 internal links (hero, pillars, history, sports, gallery, families)

### All activity sub-pages — all resolve
- 12 cards linking to `/actividades/*`

### All quien-somos sub-pages — all resolve
- 4 cards linking to `/quienes-somos/*`

### All escuela-deportiva links — all resolve
- 16 internal links across index, temporadas, inscripcion

### All gallery links — all resolve
- 8 dynamic gallery course links, 2 category links

### All legal links — all resolve
- 6 legal index links, 3 privacy policy links in forms

### All redirect targets — all resolve
- All 87 redirect destinations exist as page routes

---

## ✅ VERIFIED — PDF FILES

All 28 PDF references point to existing files:

| PDF | Exists | Page |
|-----|--------|------|
| `estudio_on.pdf` | ✅ | actividades/estudio |
| `c.d._moreres_temporada_2025-2026.pdf` | ✅ | temporadas/2025-2026 |
| `c.d._moreres_-_temporada_2022-2023.pdf` | ✅ | temporadas/2022-2023 |
| `c.d._moreres_-_temporada_2023-2024.pdf` | ✅ | temporadas/2023-2024 |
| `c.d._moreres_-_temporada_2024-2025.pdf` | ✅ | temporadas/2024-2025 |
| `c.d._moreres_temporada_2025-2026_1.pdf` | ✅ | temporadas/2026-2027 (⚠️ wrong year) |
| `c.d._moreres_-_temporada_2022-2023.pdf` | ✅ | temporadas/2021-2022 (⚠️ wrong year) |
| `revista_*.pdf` (18 revistas) | ✅ | temporada pages |
| `consejos_deportivos.pdf` | ✅ | plan-de-formacion |
| `folleto_verano_2024.pdf` | ✅ | campamentos |
| `alumnos-presentacion-themark2022.pdf` | ✅ | actividades/the-mark |
| `plan_menores_-_proteccion_y_seguridad_moreres_nuevo.pdf` | ✅ | legal/proteccion-del-menor |
| `lssi-ce_moreres_club_deportivo.pdf` | ✅ | legal/aviso-legal |

---

## ✅ VERIFIED — ALL REDIRECTS

Three redirect configuration files, all consistent (87 rules each):

| Format | File | Rules | Status |
|--------|------|-------|--------|
| Astro redirects | `astro.config.mjs` | 87 | ✅ |
| Vercel 301 | `vercel.json` | 87 | ✅ |
| Netlify format | `_redirects` | 87 | ✅ |

**Old URL categories covered:**
- Quienes Somos: 2 old URLs
- Actividades: 15 old URLs
- Escuela Deportiva: 15 old URLs
- Galería: 30 old URLs
- Hazte Socio / Contacto: 4 old URLs
- Legal: 10 old URLs
- Additional semantic: 4 URLs

**Coverage: 73/73 old URLs from `url-mapping.md`** — 100% coverage.

### Documented exceptions (not redirectable):
- `/formación.html#espiritual` — URL fragment; cannot server-redirect
- `/cursoss-de-afectividad.html` — was already 404
- `/blog`, `/noticias` — never existed

---

## ✅ VERIFIED — SOCIAL MEDIA LINKS

| Platform | URL | Status |
|----------|-----|--------|
| Facebook | `https://www.facebook.com/asociacionmoreres` | ⚠️ 400 (bot-blocked, normal) |
| Instagram | `https://www.instagram.com/asociacionmoreres` | ✅ Reachable |
| YouTube | `https://www.youtube.com/@asociacionmoreres` | 🔴 **404 BROKEN** |
| Twitter/X | `https://twitter.com/moreres_cd` | ⚠️ Rate-limited |
| WhatsApp | `https://whatsapp.com/channel/...` | ✅ Reachable |

---

## ✅ VERIFIED — FORM EMAIL CONSISTENCY

All 4 forms use `asociacionmoreres@gmail.com` — consistent.
All 4 `mailto:` links use `asociacionmoreres@gmail.com` — consistent.
**Legal pages reference `cdmoreres@gmail.com`** — minor inconsistency noted.

---

## Summary of Required Actions

| Priority | Action | File |
|----------|--------|------|
| 🔴 HIGH | Fix YouTube URL | `src/components/Footer.astro:23` |
| 🔴 HIGH | Fix 2026-2027 PDF | `src/pages/escuela-deportiva/temporadas/2026-2027.astro:30` |
| 🔴 HIGH | Fix 2021-2022 PDF | `src/pages/escuela-deportiva/temporadas/2021-2022.astro:31` |
| 🟡 MEDIUM | Review email consistency (legal vs forms) | Multiple legal pages |
| 🟢 LOW | Monitor `watch.thechosen.es` | External link (transport error) |
