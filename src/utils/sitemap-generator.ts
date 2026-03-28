/**
 * XML Sitemap Generator
 * 
 * Generates valid XML sitemaps for search engines
 * 
 * Features:
 * - Automatic sitemap generation
 * - Multiple sitemaps (pages, courses, resources)
 * - Auto-excludes noindex pages
 * - Last modified dates
 * - Change frequency
 * - Priority scores
 */

import { routes, navigationItems } from '../config/routes';
import { getSEOConfig } from '../config/seo-config';

interface SitemapUrl {
  loc: string; // URL of the page
  lastmod?: string; // Last modification date (ISO 8601)
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number; // 0.0 to 1.0
}

interface SitemapOptions {
  baseUrl: string;
  excludeNoindex?: boolean;
  prettyPrint?: boolean;
}

/**
 * Course data for sitemap
 */
const coursePages = [
  {
    path: '/courses/introduction-to-photography',
    lastmod: '2026-01-21',
    changefreq: 'weekly' as const,
    priority: 0.9,
  },
  {
    path: '/courses/film-darkroom',
    lastmod: '2026-01-21',
    changefreq: 'weekly' as const,
    priority: 0.9,
  },
];

/**
 * Resource/fact sheet pages for sitemap
 */
const resourcePages = [
  {
    path: '/resources',
    lastmod: '2026-01-30',
    changefreq: 'weekly' as const,
    priority: 0.8,
  },
  {
    path: '/glossary',
    lastmod: '2026-01-21',
    changefreq: 'weekly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/zone-system',
    lastmod: '2026-01-30',
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/exposure-triangle',
    lastmod: '2026-01-30',
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/composition-guide',
    lastmod: '2026-01-30',
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/lighting-techniques',
    lastmod: '2026-01-30',
    changefreq: 'monthly' as const,
    priority: 0.7,
  },
];

/**
 * Reviews and buying guides for sitemap
 */
const reviewPages = [
  {
    path: '/reviews/guides/top-mirrorless-cameras',
    lastmod: '2026-02-02',
    changefreq: 'monthly' as const,
    priority: 0.8,
  },
];

/**
 * Get all URLs for the main sitemap
 */
export function getAllUrls(baseUrl: string): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  
  // Add navigation pages
  navigationItems.forEach((item) => {
    const seoConfig = getSEOConfig(item.path);
    
    // Skip noindex pages
    if (seoConfig.noindex) return;
    
    urls.push({
      loc: `${baseUrl}${item.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: item.path === '/' ? 'daily' : 'weekly',
      priority: item.path === '/' ? 1.0 : 0.8,
    });
  });
  
  return urls;
}

/**
 * Get course URLs for course sitemap
 */
export function getCourseUrls(baseUrl: string): SitemapUrl[] {
  return coursePages.map(page => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}

/**
 * Get resource URLs for resource sitemap
 */
export function getResourceUrls(baseUrl: string): SitemapUrl[] {
  return resourcePages.map(page => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}

/**
 * Get review URLs for review sitemap
 */
export function getReviewUrls(baseUrl: string): SitemapUrl[] {
  return reviewPages.map(page => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}

/**
 * Generate XML sitemap
 */
export function generateSitemap(urls: SitemapUrl[], options: SitemapOptions): string {
  const { prettyPrint = true } = options;
  const indent = prettyPrint ? '  ' : '';
  const newline = prettyPrint ? '\n' : '';
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>' + newline;
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + newline;
  
  urls.forEach(url => {
    xml += `${indent}<url>${newline}`;
    xml += `${indent}${indent}<loc>${escapeXml(url.loc)}</loc>${newline}`;
    
    if (url.lastmod) {
      xml += `${indent}${indent}<lastmod>${url.lastmod}</lastmod>${newline}`;
    }
    
    if (url.changefreq) {
      xml += `${indent}${indent}<changefreq>${url.changefreq}</changefreq>${newline}`;
    }
    
    if (url.priority !== undefined) {
      xml += `${indent}${indent}<priority>${url.priority.toFixed(1)}</priority>${newline}`;
    }
    
    xml += `${indent}</url>${newline}`;
  });
  
  xml += '</urlset>';
  
  return xml;
}

/**
 * Generate sitemap index (links to multiple sitemaps)
 */
export function generateSitemapIndex(baseUrl: string, sitemaps: string[]): string {
  const newline = '\n';
  const indent = '  ';
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>' + newline;
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + newline;
  
  sitemaps.forEach(sitemap => {
    xml += `${indent}<sitemap>${newline}`;
    xml += `${indent}${indent}<loc>${escapeXml(`${baseUrl}${sitemap}`)}</loc>${newline}`;
    xml += `${indent}${indent}<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>${newline}`;
    xml += `${indent}</sitemap>${newline}`;
  });
  
  xml += '</sitemapindex>';
  
  return xml;
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Validate sitemap URL
 */
export function isValidSitemapUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Get sitemap file content for download/generation
 */
export function getSitemapContent(type: 'main' | 'courses' | 'resources' | 'reviews' | 'index', baseUrl: string): string {
  const options: SitemapOptions = {
    baseUrl,
    excludeNoindex: true,
    prettyPrint: true,
  };
  
  switch (type) {
    case 'main':
      const mainUrls = getAllUrls(baseUrl);
      return generateSitemap(mainUrls, options);
    
    case 'courses':
      const courseUrls = getCourseUrls(baseUrl);
      return generateSitemap(courseUrls, options);
    
    case 'resources':
      const resourceUrls = getResourceUrls(baseUrl);
      return generateSitemap(resourceUrls, options);
    
    case 'reviews':
      const reviewUrls = getReviewUrls(baseUrl);
      return generateSitemap(reviewUrls, options);
    
    case 'index':
      return generateSitemapIndex(baseUrl, [
        '/sitemap-pages.xml',
        '/sitemap-courses.xml',
        '/sitemap-resources.xml',
        '/sitemap-reviews.xml',
      ]);
    
    default:
      throw new Error(`Unknown sitemap type: ${type}`);
  }
}

/**
 * Generate all sitemaps
 * This would typically be run at build time
 */
export function generateAllSitemaps(baseUrl: string): Record<string, string> {
  return {
    'sitemap.xml': getSitemapContent('index', baseUrl),
    'sitemap-pages.xml': getSitemapContent('main', baseUrl),
    'sitemap-courses.xml': getSitemapContent('courses', baseUrl),
    'sitemap-resources.xml': getSitemapContent('resources', baseUrl),
    'sitemap-reviews.xml': getSitemapContent('reviews', baseUrl),
  };
}

/**
 * Example usage:
 * 
 * // At build time, generate sitemaps
 * const baseUrl = 'https://thephotocourse.com';
 * const sitemaps = generateAllSitemaps(baseUrl);
 * 
 * // Write to public directory
 * fs.writeFileSync('public/sitemap.xml', sitemaps['sitemap.xml']);
 * fs.writeFileSync('public/sitemap-pages.xml', sitemaps['sitemap-pages.xml']);
 * fs.writeFileSync('public/sitemap-courses.xml', sitemaps['sitemap-courses.xml']);
 * fs.writeFileSync('public/sitemap-resources.xml', sitemaps['sitemap-resources.xml']);
 * fs.writeFileSync('public/sitemap-reviews.xml', sitemaps['sitemap-reviews.xml']);
 */

/**
 * Download sitemap (for development/testing)
 */
export function downloadSitemap(type: 'main' | 'courses' | 'resources' | 'reviews' | 'index', baseUrl: string) {
  const content = getSitemapContent(type, baseUrl);
  const filename = type === 'index' ? 'sitemap.xml' : `sitemap-${type}.xml`;
  
  const blob = new Blob([content], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}