/**
 * Static Sitemap Generator Script
 * 
 * Run this script to generate static XML sitemap files
 * Usage: node scripts/generate-sitemaps.js
 * 
 * This creates sitemap files in the /public directory
 * that can be served as static files by your web server
 */

const fs = require('fs');
const path = require('path');

// Import the sitemap generator (requires transpiling TypeScript first)
// For now, we'll inline the sitemap generation logic

const baseUrl = 'https://thephotocourse.com';

// Navigation pages
const navigationPages = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/courses', priority: 0.8, changefreq: 'weekly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/glossary', priority: 0.7, changefreq: 'weekly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookie-settings', priority: 0.3, changefreq: 'yearly' },
];

// Course pages
const coursePages = [
  { path: '/courses/introduction-to-photography', priority: 0.9, changefreq: 'weekly' },
  { path: '/courses/introduction-to-photography/week-1', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/introduction-to-photography/week-2', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/introduction-to-photography/week-3', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/introduction-to-photography/week-4', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/film-darkroom', priority: 0.9, changefreq: 'weekly' },
  { path: '/courses/film-darkroom/week-1', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/film-darkroom/week-2', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/film-darkroom/week-3', priority: 0.8, changefreq: 'monthly' },
  { path: '/courses/film-darkroom/week-4', priority: 0.8, changefreq: 'monthly' },
];

// Resource pages
const resourcePages = [
  { path: '/resources/zone-system', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/exposure-triangle', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/composition-guide', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/lighting-techniques', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/histogram-guide', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/white-balance', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/raw-vs-jpeg', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/lens-guide', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/focus-techniques', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/colour-theory', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/black-white-conversion', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/long-exposure', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/flash-photography', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/post-processing', priority: 0.7, changefreq: 'monthly' },
];

// Review/guide pages
const reviewPages = [
  { path: '/reviews/cameras', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/lenses', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/tripods', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/filters', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/flash', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/constant-light', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/bags', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/accessories', priority: 0.7, changefreq: 'monthly' },
  { path: '/reviews/guides/top-mirrorless-cameras', priority: 0.8, changefreq: 'monthly' },
];

function generateUrlXml(url, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

function generateSitemap(pages) {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = pages.map(page => 
    generateUrlXml(page.path, lastmod, page.changefreq, page.priority)
  ).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateSitemapIndex() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-courses.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-resources.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-reviews.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate all sitemaps
console.log('Generating sitemaps...');

const sitemaps = {
  'sitemap.xml': generateSitemapIndex(),
  'sitemap-pages.xml': generateSitemap(navigationPages),
  'sitemap-courses.xml': generateSitemap(coursePages),
  'sitemap-resources.xml': generateSitemap(resourcePages),
  'sitemap-reviews.xml': generateSitemap(reviewPages),
};

// Write sitemap files
Object.entries(sitemaps).forEach(([filename, content]) => {
  const filepath = path.join(publicDir, filename);
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`✅ Generated: ${filename}`);
});

console.log('\n🎉 All sitemaps generated successfully!');
console.log(`📁 Location: ${publicDir}`);
console.log('\nGenerated files:');
console.log('  - sitemap.xml (index)');
console.log('  - sitemap-pages.xml');
console.log('  - sitemap-courses.xml');
console.log('  - sitemap-resources.xml');
console.log('  - sitemap-reviews.xml');
console.log('\n📝 Next steps:');
console.log('  1. Copy these files to your web server\'s public directory');
console.log('  2. Ensure they\'re accessible at https://thephotocourse.com/sitemap.xml');
console.log('  3. Submit sitemap.xml to Google Search Console');
console.log('  4. Submit to Bing Webmaster Tools');