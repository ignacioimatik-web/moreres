const fs = require('fs');
const path = require('path');

const ASSETS_DIR = '/Users/jistev/ZBS/MORERES/public/assets';
const BASE_URL = 'https://www.asociacionmoreres.org/uploads/1/2/4/9/124935275/';

function getFileSize(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.size;
  } catch { return 0; }
}

function scanDir(dir, prefix, type, sourcePage, altMap, nameMap) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isFile() && !file.startsWith('.')) {
      // Try to determine original URL
      let originalName = file;
      // Remove query params from name if present
      const cleanName = file.replace(/\?.*$/, '');
      
      // Build original URL by trying common patterns
      const possibleUrls = [
        BASE_URL + cleanName,
        BASE_URL + 'published/' + cleanName,
        BASE_URL + 'editor/' + cleanName,
        BASE_URL + 'background-images/' + cleanName,
      ];
      
      // Use the name map if available
      let originalUrl = BASE_URL + cleanName;
      if (nameMap && nameMap[file]) {
        originalUrl = nameMap[file];
      }

      results.push({
        originalUrl: originalUrl,
        localPath: `/public/assets/${prefix}/${file}`,
        type: type,
        sourcePage: sourcePage || '(unknown)',
        altText: altMap && altMap[file] ? altMap[file] : file.replace(/_orig\..*$/, '').replace(/[-_]/g, ' ').replace(/\.\w+$/, ''),
        status: 'downloaded',
        notes: `Size: ${(getFileSize(fullPath) / 1024).toFixed(0)} KB`
      });
    }
  });
  return results;
}

// Alt text maps
const imageAltMap = {};
const galleryAltMap = {};

// Read existing partial JSON to merge
const partialPath = '/Users/jistev/ZBS/MORERES/data/migration/assets-map.json';
let existing = { meta: null, assets: [] };
try {
  existing = JSON.parse(fs.readFileSync(partialPath, 'utf-8'));
} catch {}

// Gallery alt texts
galleryAltMap['plan-3eso-1.jpeg'] = 'Bolera con chavales de 3ESO';
galleryAltMap['plan-3eso.jpeg'] = 'Piscina con chavales de 3ESO';
galleryAltMap['estudio-sr.jpg'] = 'Actividad de estudio inicio de curso';
galleryAltMap['plan-sr-p-del-y-the-mark.jpeg'] = 'Plan de SR';
galleryAltMap['hablar-en-p-blico-1.jpg'] = 'Taller de oratoria';
galleryAltMap['hablar-en-p-blico-2.jpg'] = 'Taller de oratoria';
galleryAltMap['the-mark-2.jpg'] = 'The Mark session';
galleryAltMap['the-mark-3.jpg'] = 'The Mark session';
galleryAltMap['the-mark-foto.jpg'] = 'The Mark foto grupal';
galleryAltMap['cena-de-navidad-2025-2.jpg'] = 'Cena de Navidad 2025';
galleryAltMap['cena-de-navidad-2025-3.jpg'] = 'Cena de Navidad 2025';
galleryAltMap['cena-de-navidad-2025-4.jpg'] = 'Cena de Navidad 2025';
galleryAltMap['cena-de-navidad-2025-5.jpg'] = 'Cena de Navidad 2025';
galleryAltMap['eso-alicante.jpg'] = 'Plan ESO Alicante';
galleryAltMap['eso-valencia.jpg'] = 'Plan ESO Valencia';
galleryAltMap['estudio-6.jpg'] = 'Estudio - sala';
galleryAltMap['community-1.jpg'] = 'Programa Community';
galleryAltMap['community-2.jpg'] = 'Programa Community';
galleryAltMap['community-3.jpg'] = 'Programa Community';
galleryAltMap['community-4.jpg'] = 'Programa Community';
galleryAltMap['community-5.jpg'] = 'Programa Community';
galleryAltMap['community-6.jpg'] = 'Programa Community';
galleryAltMap['community-7.jpg'] = 'Programa Community';
galleryAltMap['the-mark-2_orig.jpg'] = 'The Mark sesión 2 imagen';
galleryAltMap['the-mark-3_orig.jpg'] = 'The Mark sesión 3 imagen';
galleryAltMap['the-mark-foto_orig.jpg'] = 'The Mark foto grupal';
galleryAltMap['the-mark_orig.jpg'] = 'The Mark programa';
galleryAltMap['cena-de-navidad-2025-1_orig.jpg'] = 'Cena de Navidad';
galleryAltMap['cena-de-navidad-2025-2_orig.jpg'] = 'Cena de Navidad';
galleryAltMap['villancicos-familias_orig.jpg'] = 'Villancicos familias';
galleryAltMap['c-d-moreres-2024-2025_orig.png'] = 'Cartel temporada 2024-2025';
galleryAltMap['cartel-temporada-2025-2026_orig.png'] = 'Cartel temporada 2025-2026';
galleryAltMap['cartel-temporada-2026-2027_orig.png'] = 'Cartel temporada 2026-2027';
galleryAltMap['escudo-moreres-10-aniversario_orig.png'] = 'Escudo 10 aniversario';
galleryAltMap['acuerdo-s10_orig.png'] = 'Acuerdo S10 equipaciones';
galleryAltMap['campeones_orig.jpeg'] = 'Campeones temporada';
galleryAltMap['campus-de-navidad_orig.jpeg'] = 'Campus de Navidad';
galleryAltMap['escudo-moreres-10-aniversario_1.png'] = 'Escudo 10 aniversario v2';
galleryAltMap['escudo-moreres-10-aniversario_2.png'] = 'Escudo 10 aniversario v3';

// Build complete assets array
let allAssets = [...existing.assets];

// Scan gallery (remaining, not already in list)
const galleryFiles = fs.readdirSync(path.join(ASSETS_DIR, 'gallery'));
const existingUrls = new Set(allAssets.map(a => a.originalUrl));

// Name map for special URLs
const galleryNameMap = {};
galleryFiles.forEach(f => {
  if (f.includes('published')) {
    galleryNameMap[f] = BASE_URL + 'published/' + f.replace(/\?.*$/, '');
  }
});

galleryFiles.forEach(file => {
  const fullPath = path.join(ASSETS_DIR, 'gallery', file);
  if (fs.statSync(fullPath).isFile() && !file.startsWith('.')) {
    // Try to find original URL from patterns
    let originalUrl = BASE_URL + file;
    // Check for query param patterns in the name
    if (file.includes('?') || file.match(/^septiembre|^octubre|^noviembre|^diciembre|^enero|^febrero|^marzo|^abril|^mayo|^cartel|^fb-img/)) {
      // These were downloaded with query params stripped, so original URL needs the params
      if (file === 'septiembre-1.png') originalUrl = BASE_URL + 'published/septiembre-1.png?1683106321';
      else if (file === 'octubre-1.png') originalUrl = BASE_URL + 'published/octubre-1.png?1683106350';
      else if (file === 'noviembre-1.png') originalUrl = BASE_URL + 'published/noviembre-1.png?1683106371';
      else if (file === 'diciembre-1.png') originalUrl = BASE_URL + 'published/diciembre-1.png?1683106395';
      else if (file === 'enero-1.png') originalUrl = BASE_URL + 'published/enero-1.png?1683106426';
      else if (file === 'febrero-1.png') originalUrl = BASE_URL + 'published/febrero-1.png?1683106450';
      else if (file === 'marzo-1.png') originalUrl = BASE_URL + 'published/marzo-1.png?1683106560';
      else if (file === 'abril-1.png') originalUrl = BASE_URL + 'published/abril-1.png?1695048286';
      else if (file === 'mayo-1.png') originalUrl = BASE_URL + 'published/mayo-1.png?1683106515';
      else if (file === 'marzo-1-2022.png') originalUrl = BASE_URL + 'published/marzo-1-2022.png?1695048453';
      else if (file === 'abril-1-2022.png') originalUrl = BASE_URL + 'published/abril-1-2022.png?1695048493';
      else if (file === 'septiembre-1-2022.png') originalUrl = BASE_URL + 'published/septiembre-1-2022.png?1695048543';
      else if (file === 'octubre-1-2022.png') originalUrl = BASE_URL + 'published/octubre-1-2022.png?1695048627';
      else if (file === 'noviembre-1-2022.png') originalUrl = BASE_URL + 'published/noviembre-1-2022.png?1695048610';
      else if (file === 'diciembre-1-2022.png') originalUrl = BASE_URL + 'published/diciembre-1-2022.png?1695048685';
      else if (file === 'enero-1-2023.png') originalUrl = BASE_URL + 'published/enero-1-2023.png?1695048718';
      else if (file === 'febrero-1-2023.png') originalUrl = BASE_URL + 'published/febrero-1-2023.png?1695048754';
      else if (file === 'fb-img-1687854557625.jpg') originalUrl = BASE_URL + 'published/fb-img-1687854557625.jpg?1695049042';
      else if (file === 'cartel-temporada-2023-2024.png') originalUrl = BASE_URL + 'published/cartel-temporada-2023-2024.png?1699360324';
      else if (file === 'cartel-2022-2023.png') originalUrl = BASE_URL + 'editor/cartel-2022-2023.png?1663672258';
      else if (file === 'los-elegidos-the-chosen-serie-de-tv-174387674-large.jpg') originalUrl = BASE_URL + 'published/los-elegidos-the-chosen-serie-de-tv-174387674-large.jpg?1673966522';
      else if (file === 'tecnolog-a.jpg') originalUrl = BASE_URL + 'published/tecnolog-a.jpg?1670926876';
      else if (file === 'edition-118143-300x449.jpg') originalUrl = BASE_URL + 'published/edition-118143-300x449.jpg?1671534917';
      else if (file === '61f7b5pfnkl.jpg') originalUrl = BASE_URL + 'published/61f7b5pfnkl.jpg?1671534970';
      else if (file === 'moreres-10-aniversario.png') originalUrl = BASE_URL + 'published/moreres-10-aniversario.png?1714324133';
      else if (file === 'the-mark.jpg') originalUrl = BASE_URL + 'published/the-mark.jpg?1664362764';
      else if (file === 'moreres-logo-morera-letras.png') originalUrl = BASE_URL + 'published/moreres-logo-morera-letras.png?1714324010';
    }
    
    if (!existingUrls.has(originalUrl)) {
      allAssets.push({
        originalUrl: originalUrl,
        localPath: `/public/assets/gallery/${file}`,
        type: 'image',
        sourcePage: '(gallery)',
        altText: galleryAltMap[file] || file.replace(/_\w+\.\w+$/, '').replace(/[-_]/g, ' ').replace(/\.\w+$/, ''),
        status: 'downloaded',
        notes: `Gallery image. Size: ${(fs.statSync(fullPath).size / 1024).toFixed(0)} KB`
      });
    }
  }
});

// Add documents
const docDir = path.join(ASSETS_DIR, 'documents');
const docFiles = fs.readdirSync(docDir);
docFiles.forEach(file => {
  const fullPath = path.join(docDir, file);
  if (fs.statSync(fullPath).isFile() && !file.startsWith('.')) {
    let ext = path.extname(file).toLowerCase();
    let type = ext === '.pdf' ? 'pdf' : ext === '.mp4' ? 'document' : 'document';
    let originalUrl = BASE_URL + file;
    
    // Special mapping for known docs
    if (file === 'estudio_on.pdf') originalUrl = BASE_URL + 'estudio_on.pdf';
    else if (file === 'folleto_verano_2024.pdf') originalUrl = BASE_URL + 'folleto_verano_2024.pdf';
    else if (file === 'alumnos-presentacion-themark2022.pdf') originalUrl = BASE_URL + 'alumnos-presentacion-themark2022.pdf';
    else if (file === 'c.d._moreres_-_temporada_2022-2023.pdf') originalUrl = BASE_URL + 'c.d._moreres_-_temporada_2022-2023.pdf';
    else if (file === 'c.d._moreres_-_temporada_2023-2024.pdf') originalUrl = BASE_URL + 'c.d._moreres_-_temporada_2023-2024.pdf';
    else if (file === 'consejos_deportivos.pdf') originalUrl = BASE_URL + 'consejos_deportivos.pdf';
    else if (file === 'c.d._moreres_temporada_2024-2025.pdf') originalUrl = BASE_URL + 'c.d._moreres_temporada_2024-2025.pdf';
    else if (file === 'c.d._moreres_temporada_2025-2026.pdf') originalUrl = BASE_URL + 'c.d._moreres_temporada_2025-2026.pdf';
    else if (file === 'c.d._moreres_temporada_2025-2026_1.pdf') originalUrl = BASE_URL + 'c.d._moreres_temporada_2025-2026_1.pdf';
    else if (file === 'cadete_2022-2023.mp4') originalUrl = BASE_URL + 'cadete_2022-2023.mp4';
    
    if (!existingUrls.has(originalUrl)) {
      allAssets.push({
        originalUrl: originalUrl,
        localPath: `/public/assets/documents/${file}`,
        type: type,
        sourcePage: '(documents)',
        altText: file.replace(/\.\w+$/, '').replace(/[-_]/g, ' '),
        status: 'downloaded',
        notes: `Size: ${(fs.statSync(fullPath).size / 1024 / 1024).toFixed(1)} MB`
      });
    }
  }
});

// Add legal PDFs
const legalDir = path.join(ASSETS_DIR, 'legal');
const legalFiles = fs.readdirSync(legalDir);
legalFiles.forEach(file => {
  const fullPath = path.join(legalDir, file);
  if (fs.statSync(fullPath).isFile() && !file.startsWith('.')) {
    let originalUrl = BASE_URL + file;
    if (file === 'lssi-ce_moreres_club_deportivo.pdf') originalUrl = BASE_URL + 'lssi-ce_moreres_club_deportivo.pdf';
    else if (file === 'plan_menores_-_proteccion_y_seguridad_moreres_nuevo.pdf') originalUrl = BASE_URL + 'plan_menores_-_proteccion_y_seguridad_moreres_nuevo.pdf';
    
    if (!existingUrls.has(originalUrl)) {
      allAssets.push({
        originalUrl: originalUrl,
        localPath: `/public/assets/legal/${file}`,
        type: 'pdf',
        sourcePage: '(legal pages)',
        altText: file === 'lssi-ce_moreres_club_deportivo.pdf' ? 'Documento legal LSSI-CE (cookies, privacidad, aviso legal)' : 'Plan de Protección del Menor',
        status: 'downloaded',
        notes: `Documento legal. Size: ${(fs.statSync(fullPath).size / 1024).toFixed(0)} KB`
      });
    }
  }
});

// Update meta
const totalSize = allAssets.reduce((sum, a) => sum + 1, 0);
const downloaded = allAssets.filter(a => a.status === 'downloaded').length;

const result = {
  meta: {
    project: "Asociación Moreres - Migración de Assets",
    sourceUrl: "https://www.asociacionmoreres.org",
    baseAssetUrl: BASE_URL,
    date: "2026-05-25",
    totalAssets: totalSize,
    status: {
      downloaded: downloaded,
      external: 2,
      pending: 0,
      failed: 0
    }
  },
  assets: allAssets
};

fs.writeFileSync(partialPath, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Total assets registered: ${totalSize}`);
console.log(`Downloaded: ${downloaded}`);
