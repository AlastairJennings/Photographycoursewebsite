/**
 * Performance Configuration
 * 
 * Targets:
 * - Lighthouse Performance: 90+
 * - Lighthouse Accessibility: 90+
 * - Lighthouse Best Practices: 90+
 * - Lighthouse SEO: 100
 * 
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): < 2.5s
 * - CLS (Cumulative Layout Shift): < 0.1
 * - INP (Interaction to Next Paint): < 200ms
 */

/**
 * Critical resources to preload
 * These will be preloaded in the document head
 */
export const PRELOAD_RESOURCES = {
  fonts: [
    {
      href: 'https://assets.codepen.io/2585/RoslindaleDisplayCondensed-Regular.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ],
  criticalImages: [
    // Hero images and above-the-fold content
    // These will be set dynamically based on the current page
  ],
} as const;

/**
 * Font loading strategy
 * Using font-display: swap for better performance
 */
export const FONT_LOADING_STRATEGY = {
  roslindale: {
    family: 'Roslindale',
    display: 'swap', // Show fallback font immediately, swap when loaded
    fallback: 'Georgia, serif', // System font fallback
  },
  inter: {
    family: 'Inter',
    display: 'swap',
    fallback: 'system-ui, -apple-system, sans-serif',
  },
} as const;

/**
 * Image loading thresholds
 * Determines when to lazy load vs eager load
 */
export const IMAGE_LOADING_THRESHOLDS = {
  // Images above this fold line should be eager loaded
  aboveTheFoldHeight: 800, // pixels from top
  
  // Intersection observer margin for lazy loading
  lazyLoadMargin: '200px', // Start loading 200px before entering viewport
  
  // Image quality settings
  quality: {
    thumbnail: 60,
    standard: 80,
    highQuality: 90,
  },
} as const;

/**
 * Asset optimization settings
 */
export const ASSET_OPTIMIZATION = {
  // Maximum file sizes (in KB)
  maxSizes: {
    image: 200, // 200KB max for images
    video: 5000, // 5MB max for videos
    font: 100, // 100KB max per font file
  },
  
  // Compression
  compression: {
    enabled: true,
    level: 9, // Gzip level (1-9)
  },
  
  // Code splitting
  codeSplitting: {
    enabled: true,
    chunkSize: 200, // KB
  },
} as const;

/**
 * Core Web Vitals thresholds
 */
export const CORE_WEB_VITALS = {
  LCP: {
    good: 2500, // < 2.5s
    needsImprovement: 4000, // 2.5s - 4.0s
    // > 4.0s is poor
  },
  CLS: {
    good: 0.1, // < 0.1
    needsImprovement: 0.25, // 0.1 - 0.25
    // > 0.25 is poor
  },
  INP: {
    good: 200, // < 200ms
    needsImprovement: 500, // 200ms - 500ms
    // > 500ms is poor
  },
  FID: {
    good: 100, // < 100ms
    needsImprovement: 300, // 100ms - 300ms
    // > 300ms is poor
  },
  TTFB: {
    good: 800, // < 800ms
    needsImprovement: 1800, // 800ms - 1.8s
    // > 1.8s is poor
  },
} as const;

/**
 * Caching strategy
 */
export const CACHING_STRATEGY = {
  // Browser caching headers (would be set on server)
  static: {
    maxAge: 31536000, // 1 year for static assets
    immutable: true,
  },
  dynamic: {
    maxAge: 3600, // 1 hour for dynamic content
    staleWhileRevalidate: 86400, // 1 day
  },
  images: {
    maxAge: 2592000, // 30 days
  },
  fonts: {
    maxAge: 31536000, // 1 year
    immutable: true,
  },
} as const;

/**
 * JavaScript loading strategy
 */
export const SCRIPT_LOADING = {
  // Scripts to defer (non-critical)
  defer: [
    'analytics',
    'social-widgets',
    'comments',
  ],
  
  // Scripts to load async (independent)
  async: [
    'third-party-ads',
  ],
  
  // Scripts to preconnect
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
  ],
  
  // Scripts to prefetch (likely needed soon)
  prefetch: [],
} as const;

/**
 * Resource hints for better performance
 */
export const RESOURCE_HINTS = {
  // DNS prefetch for third-party domains
  dnsPrefetch: [
    'https://images.unsplash.com',
    'https://www.google-analytics.com',
  ],
  
  // Preconnect for critical third-party origins
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  
  // Prefetch for likely next navigation
  prefetch: [],
} as const;

/**
 * Performance monitoring config
 */
export const PERFORMANCE_MONITORING = {
  // Enable web vitals reporting
  enabled: true,
  
  // Report to analytics
  reportToAnalytics: true,
  
  // Console warnings in development
  consoleWarnings: process.env.NODE_ENV === 'development',
  
  // Thresholds for warnings
  warningThresholds: {
    lcp: 3000, // Warn if LCP > 3s
    cls: 0.15, // Warn if CLS > 0.15
    inp: 300, // Warn if INP > 300ms
  },
} as const;

/**
 * Bundle size limits (for build-time checks)
 */
export const BUNDLE_SIZE_LIMITS = {
  // Maximum bundle sizes in KB
  main: 300, // Main bundle
  vendor: 200, // Third-party dependencies
  styles: 50, // CSS bundle
  total: 600, // Total initial load
} as const;

/**
 * Critical CSS strategy
 * These selectors should be inlined in the <head>
 */
export const CRITICAL_CSS_SELECTORS = [
  'header',
  'nav',
  '.hero',
  'h1',
  'h2',
  '.above-the-fold',
  // Add more critical selectors
] as const;

/**
 * Anti-patterns to avoid
 */
export const PERFORMANCE_ANTI_PATTERNS = {
  // Things to NEVER do:
  avoidPatterns: [
    'Blocking scripts in <head>',
    'Large unoptimized images',
    'Inline base64 images > 10KB',
    'Synchronous third-party scripts',
    'Heavy JavaScript before first paint',
    'Multiple font weights/styles',
    'Animations before page load',
    'Heavy polyfills for modern browsers',
  ],
} as const;

/**
 * Get performance budget status
 */
export function getPerformanceBudgetStatus(metrics: {
  lcp?: number;
  cls?: number;
  inp?: number;
  fid?: number;
  ttfb?: number;
}) {
  return {
    lcp: metrics.lcp 
      ? metrics.lcp <= CORE_WEB_VITALS.LCP.good 
        ? 'good' 
        : metrics.lcp <= CORE_WEB_VITALS.LCP.needsImprovement 
          ? 'needs-improvement' 
          : 'poor'
      : 'unknown',
    cls: metrics.cls 
      ? metrics.cls <= CORE_WEB_VITALS.CLS.good 
        ? 'good' 
        : metrics.cls <= CORE_WEB_VITALS.CLS.needsImprovement 
          ? 'needs-improvement' 
          : 'poor'
      : 'unknown',
    inp: metrics.inp 
      ? metrics.inp <= CORE_WEB_VITALS.INP.good 
        ? 'good' 
        : metrics.inp <= CORE_WEB_VITALS.INP.needsImprovement 
          ? 'needs-improvement' 
          : 'poor'
      : 'unknown',
  };
}
