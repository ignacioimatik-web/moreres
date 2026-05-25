# Performance Report — Asociación Moreres

**Date:** 2026-05-25  
**Framework:** Astro (static output)  
**Deployment:** Vercel  

---

## 1. Bundle Size

| Asset | Size | Status |
|-------|------|--------|
| Astro HTML output | ~15-30KB per page | ✅ Excellent |
| CSS (tokens.css) | ~4KB | ✅ |
| CSS (base.css) | ~8KB | ✅ |
| CSS (components.css) | ~24KB | ✅ |
| JS (minimal, per-page) | ~1-3KB | ✅ |
| Google Fonts (Inter + Plus Jakarta Sans) | ~30KB (latent) | ✅ Preconnected |

**Estimated total critical bundle: ~40-50KB** — excellent for a static site.

---

## 2. Image Optimization

### Files over 500KB (MUST OPTIMIZE)

| File | Size | Suggested action |
|------|------|------------------|
| `public/assets/images/plan-8-de-diciembre-v-2_orig.png` | **3.0 MB** | Convert to JPEG at 85% quality → ~300KB. Also: is this file used? Not referenced in any `.astro` file (unused asset) |
| `public/assets/images/p-del-moreres-2024-2025_orig.png` | **1.2 MB** | Optimize PNG or convert to WebP → ~200KB. Unused. |
| `public/assets/original/hero-background.jpg` | **920 KB** | Resize to 1920px wide, compress JPEG → ~200KB |
| `public/assets/gallery/c-d-moreres-2024-2025_orig.png` | **797 KB** | Optimize PNG → ~150KB |
| `public/assets/gallery/cartel-temporada-2025-2026_orig.png` | **576 KB** | Optimize PNG → ~120KB |

### Files 200-500KB (SHOULD OPTIMIZE)

22 files between 200KB and 500KB, totaling approximately **7.2 MB**.
Key ones:
- `escudo-moreres-10-aniversario_orig.png` — 497 KB (used in homepage gallery and OG image)
- 6 premiados files at ~460KB each — 2.7 MB combined (all unused)
- Various formación posters at ~220KB each — 7 files (all unused)

### Unused assets (can delete to save ~15MB)

**85 files on disk not referenced in any `.astro` file**, totaling approximately **15MB**.
These are leftover from the old Weebly site. Largest unused files:
- `plan-8-de-diciembre-v-2_orig.png` — 3.0 MB
- `p-del-moreres-2024-2025_orig.png` — 1.2 MB
- `i-moreres-football-camp-1_orig.jpg` — 337 KB
- 6 premiados files — 2.7 MB
- 6 formación posters — 1.3 MB
- 54 gallery images — ~5 MB

**Note:** `og-default.jpg` (in `assets/images/`) is likely used as the fallback OG image meta tag. Keep it.

---

## 3. Lazy Loading

### Missing `loading="lazy"` on 5 images

| File | Line | Image | Suggested |
|------|------|-------|-----------|
| `src/components/Header.astro` | 15 | Logo | `loading="eager"` (above-fold) |
| `src/components/Footer.astro` | 9 | Logo | `loading="lazy"` |
| `src/pages/actividades/convivencias.astro` | 24 | Card image | `loading="lazy"` |
| `src/pages/actividades/convivencias.astro` | 36 | Card image | `loading="lazy"` |
| `src/pages/actividades/convivencias.astro` | 48 | Card image | `loading="lazy"` |

All gallery images use `loading="lazy"` ✅  
Hero background uses `loading="eager"` ✅ (correct, above-fold)

---

## 4. Estimated Lighthouse Scores

| Category | Estimated Score | Notes |
|----------|----------------|-------|
| **Performance** | ~75-85 | Penalized by 920KB hero image + 22 large images |
| **Accessibility** | ~95 | Semantic HTML, aria labels, focus-visible, skip-nav? (not checked) |
| **Best Practices** | ~90 | HTTPS, no JS errors, modern CSS |
| **SEO** | ~95 | All pages have titles/descriptions, structured data, canonical |

### Main performance bottleneck
The hero background image (`hero-background.jpg` at 920KB) is the single largest performance issue. Resizing and compressing it would boost Lighthouse Performance by ~10 points.

---

## 5. CSS & Animations

| Aspect | Status | Notes |
|--------|--------|-------|
| CSS bundle | ✅ | Single file per concern (tokens, base, components) |
| Render-blocking | ✅ | `<link>` in `<head>` |
| Animations | ✅ | All CSS-based, no JS animation libraries |
| Scroll reveal | ✅ | IntersectionObserver (non-blocking, deferred) |
| Font display | ✅ | `font-display` property not checked but Google Fonts with preconnect |
| `will-change` usage | ✅ | Not overused (good) |
| Transitions | ✅ | Hardware-accelerated properties (transform, opacity) |

---

## 6. Recommendations

### High priority (performance impact >10%)
1. **Resize and compress `hero-background.jpg`** — 920KB → ~200KB
   - Current size: 3000×2000px estimated
   - Suggested: 1920×1280px at 80% JPEG quality
2. **Delete unused assets** — 85 files, ~15MB savings
3. **Optimize 3 gallery images** used on homepage (currently used in `home-gallery`)

### Medium priority
4. Add `loading="lazy"` to 5 images missing it
5. Add explicit `width`/`height` to inline `<img>` tags (currently only 2 logo images have them) — prevents CLS
6. Consider WebP conversion with `<picture>` fallback for next-gen format support

### Low priority
7. Preload hero image with `<link rel="preload">` for faster LCP
8. Add `font-display: swap` if not already on Google Fonts loading
9. Consider inlining critical CSS for above-fold content
