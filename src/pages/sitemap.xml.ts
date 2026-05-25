import { pages } from "@data/seo"

const siteUrl = "https://asociacionmoreres.org"

function getPriority(path: string): string {
  if (path === "/") return "1.0"
  if (path.startsWith("/legal")) return "0.3"
  if (path.startsWith("/galeria/curso-2020") || path.startsWith("/galeria/curso-2021") || path.startsWith("/galeria/curso-2022") || path.startsWith("/galeria/curso-2023")) return "0.4"
  if (path.startsWith("/galeria")) return "0.5"
  if (path === "/escuela-deportiva/encuesta") return "0.2"
  return "0.7"
}

function getChangefreq(path: string): string {
  if (path === "/" || path === "/escuela-deportiva/inscripcion") return "weekly"
  if (path.startsWith("/galeria/curso-2025-2026")) return "weekly"
  return "monthly"
}

export async function GET() {
  const pagesToIndex = Object.entries(pages)
    .filter(([, meta]) => !meta.robots?.includes("noindex"))
    .map(([path]) => path)

  const urls = pagesToIndex.map(
    (path) => `
  <url>
    <loc>${siteUrl}${path}</loc>
    <priority>${getPriority(path)}</priority>
    <changefreq>${getChangefreq(path)}</changefreq>
  </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}
</urlset>`

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  })
}
