/**
 * URL Normalization Utilities
 * 
 * Prevents duplicate content issues by:
 * - Normalizing URLs
 * - Handling trailing slashes
 * - Managing query parameters
 * - Case sensitivity
 * - Protocol consistency
 */

/**
 * URL Normalization Configuration
 */
export const URL_CONFIG = {
  // Force trailing slash consistency
  trailingSlash: false, // false = remove trailing slashes, true = add them
  
  // Force lowercase URLs
  lowercase: true,
  
  // Remove default parameters
  removeDefaultParams: true,
  
  // Force HTTPS
  forceHttps: true,
  
  // Base URL (production)
  baseUrl: 'https://thephotocourse.com',
} as const;

/**
 * Normalize URL to canonical form
 */
export function normalizeUrl(url: string): string {
  try {
    // Parse URL
    const parsed = new URL(url, URL_CONFIG.baseUrl);
    
    // Force HTTPS in production
    if (URL_CONFIG.forceHttps && parsed.protocol === 'http:') {
      parsed.protocol = 'https:';
    }
    
    // Normalize pathname
    let pathname = parsed.pathname;
    
    // Force lowercase
    if (URL_CONFIG.lowercase) {
      pathname = pathname.toLowerCase();
    }
    
    // Handle trailing slash
    if (URL_CONFIG.trailingSlash) {
      // Add trailing slash if missing (except for files with extensions)
      if (!pathname.endsWith('/') && !pathname.includes('.')) {
        pathname += '/';
      }
    } else {
      // Remove trailing slash (except for root)
      if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
      }
    }
    
    parsed.pathname = pathname;
    
    // Sort query parameters for consistency
    const params = new URLSearchParams(parsed.search);
    const sortedParams = new URLSearchParams(
      Array.from(params.entries()).sort(([a], [b]) => a.localeCompare(b))
    );
    
    // Remove default/empty parameters
    if (URL_CONFIG.removeDefaultParams) {
      for (const [key, value] of sortedParams.entries()) {
        if (value === '' || value === 'undefined' || value === 'null') {
          sortedParams.delete(key);
        }
      }
    }
    
    parsed.search = sortedParams.toString();
    
    // Remove fragment (hash) for canonical URLs
    parsed.hash = '';
    
    return parsed.toString();
  } catch (error) {
    console.error('URL normalization error:', error);
    return url;
  }
}

/**
 * Get canonical URL for current page
 */
export function getCanonicalUrl(pathname: string, baseUrl: string = URL_CONFIG.baseUrl): string {
  // Remove query parameters and hash for canonical
  const cleanPath = pathname.split('?')[0].split('#')[0];
  
  // Normalize the path
  const normalizedPath = normalizeUrl(`${baseUrl}${cleanPath}`);
  
  return normalizedPath;
}

/**
 * Check if two URLs are equivalent (same canonical form)
 */
export function areUrlsEquivalent(url1: string, url2: string): boolean {
  return normalizeUrl(url1) === normalizeUrl(url2);
}

/**
 * Check if URL needs redirect (not in canonical form)
 */
export function needsCanonicalRedirect(currentUrl: string): {
  needsRedirect: boolean;
  canonicalUrl: string;
} {
  const canonical = normalizeUrl(currentUrl);
  return {
    needsRedirect: currentUrl !== canonical,
    canonicalUrl: canonical,
  };
}

/**
 * Handle trailing slash redirect
 */
export function handleTrailingSlash(pathname: string): string | null {
  if (pathname === '/') return null; // Root is fine
  
  if (URL_CONFIG.trailingSlash) {
    // Should have trailing slash
    if (!pathname.endsWith('/') && !pathname.includes('.')) {
      return pathname + '/';
    }
  } else {
    // Should NOT have trailing slash
    if (pathname.endsWith('/')) {
      return pathname.slice(0, -1);
    }
  }
  
  return null; // No redirect needed
}

/**
 * Prevent duplicate content from query parameters
 */
export function stripTrackingParams(url: string): string {
  const parsed = new URL(url);
  const params = new URLSearchParams(parsed.search);
  
  // Common tracking parameters to remove
  const trackingParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'fbclid',
    'gclid',
    'msclkid',
    'ref',
    'source',
  ];
  
  trackingParams.forEach(param => params.delete(param));
  
  parsed.search = params.toString();
  return parsed.toString();
}

/**
 * Get all URL variations (for testing)
 */
export function getUrlVariations(basePath: string): string[] {
  const base = URL_CONFIG.baseUrl;
  
  return [
    // Protocol variations
    `http://${base.replace('https://', '')}${basePath}`,
    `https://${base.replace('https://', '')}${basePath}`,
    
    // Case variations
    basePath.toUpperCase(),
    basePath.toLowerCase(),
    
    // Trailing slash variations
    basePath.endsWith('/') ? basePath.slice(0, -1) : basePath + '/',
    
    // With tracking params
    `${basePath}?utm_source=test`,
    `${basePath}?utm_campaign=example`,
    
    // With hash
    `${basePath}#section`,
  ];
}

/**
 * Redirect component for client-side canonical enforcement
 */
export function enforceCanonicalUrl(currentPathname: string, navigate: (path: string) => void) {
  const redirect = handleTrailingSlash(currentPathname);
  
  if (redirect && redirect !== currentPathname) {
    // Perform 301 redirect (client-side)
    navigate(redirect);
    return true;
  }
  
  return false;
}

/**
 * Generate self-referencing canonical link
 */
export function generateCanonicalLink(pathname: string, baseUrl: string = URL_CONFIG.baseUrl): string {
  return getCanonicalUrl(pathname, baseUrl);
}

/**
 * Common duplicate content patterns to avoid
 */
export const DUPLICATE_CONTENT_PATTERNS = {
  avoid: [
    // Multiple URLs for same content
    { bad: '/courses', duplicate: '/courses/' },
    { bad: '/Courses', duplicate: '/courses' },
    { bad: '/COURSES', duplicate: '/courses' },
    
    // Parameter variations
    { bad: '/courses?sort=name', duplicate: '/courses' },
    { bad: '/courses?page=1', duplicate: '/courses' },
    
    // Tracking parameters
    { bad: '/courses?utm_source=fb', duplicate: '/courses' },
    
    // Protocol variations
    { bad: 'http://thephotocourse.com/courses', duplicate: 'https://thephotocourse.com/courses' },
  ],
  
  solutions: [
    'Use consistent URL structure (lowercase, no trailing slash)',
    'Implement 301 redirects for old URLs',
    'Use canonical tags on all pages',
    'Strip tracking parameters from canonical URLs',
    'Force HTTPS with 301 redirect',
    'Use rel="canonical" for paginated content',
  ],
} as const;

/**
 * HTTP Status Code Mapping
 */
export const HTTP_STATUS_CODES = {
  // Success
  OK: 200,
  
  // Redirection
  MOVED_PERMANENTLY: 301, // Use for permanent redirects
  FOUND: 302, // Use ONLY for temporary redirects
  
  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  GONE: 410, // Use when content is permanently removed
  
  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * Redirect rules (would be implemented server-side)
 */
export const REDIRECT_RULES = [
  // Old URL structure to new
  { from: '/course', to: '/courses', status: 301 },
  { from: '/about-us', to: '/about', status: 301 },
  
  // Force lowercase
  { from: '/Courses', to: '/courses', status: 301 },
  { from: '/ABOUT', to: '/about', status: 301 },
  
  // Remove trailing slashes
  { from: '/courses/', to: '/courses', status: 301 },
  { from: '/about/', to: '/about', status: 301 },
  
  // Force HTTPS (handled at server level)
  // http://thephotocourse.com/* -> https://thephotocourse.com/* (301)
] as const;

/**
 * Check if path should return 404
 */
export function shouldReturn404(pathname: string): boolean {
  // Check against known routes
  const validPaths = [
    '/',
    '/courses',
    '/courses/introduction-to-photography',
    '/courses/film-darkroom',
    '/resources',
    '/glossary',
    '/about',
  ];
  
  return !validPaths.includes(pathname.toLowerCase());
}

/**
 * Check if path should return 410 (Gone)
 */
export function shouldReturn410(pathname: string): boolean {
  // Paths that were permanently removed
  const gonePaths = [
    // Example: '/old-course-name',
  ];
  
  return gonePaths.includes(pathname.toLowerCase());
}

/**
 * Get appropriate status code for path
 */
export function getStatusCode(pathname: string): number {
  if (shouldReturn410(pathname)) return HTTP_STATUS_CODES.GONE;
  if (shouldReturn404(pathname)) return HTTP_STATUS_CODES.NOT_FOUND;
  return HTTP_STATUS_CODES.OK;
}
