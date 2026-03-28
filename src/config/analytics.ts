/**
 * Analytics Configuration
 * 
 * Centralized analytics configuration for:
 * - Google Analytics 4 (GA4)
 * - Google Tag Manager (GTM)
 * - Google Search Console
 * - Event tracking
 * 
 * Features:
 * - Non-blocking script loading
 * - Event tracking
 * - Debug mode
 * - Privacy-friendly
 */

/**
 * Analytics Configuration
 */
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  ga4: {
    measurementId: 'G-RGCSMZ900T', // Your GA4 measurement ID
    enabled: true,
    debugMode: false, // Set to true for debugging
  },
  
  // Google Tag Manager (optional)
  gtm: {
    containerId: 'GTM-XXXXXXX', // Your GTM container ID
    enabled: false, // Enable if using GTM
  },
  
  // Google Search Console
  searchConsole: {
    verificationCode: 'your-verification-code-here',
    enabled: true,
  },
  
  // Feature flags
  features: {
    pageViews: true,
    events: true,
    scrollDepth: true,
    outboundLinks: true,
    fileDownloads: true,
  },
  
  // Cookie consent
  cookieConsent: {
    enabled: false, // Enable if EU/GDPR compliance needed
    defaultConsent: false, // Default consent state
  },
  
  // Debug settings
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    logEvents: true,
    showInConsole: true,
  },
} as const;

/**
 * Event Types
 */
export const EVENT_TYPES = {
  // Course events
  COURSE_VIEW: 'course_view',
  COURSE_ENROLL: 'course_enroll',
  LESSON_START: 'lesson_start',
  LESSON_COMPLETE: 'lesson_complete',
  MODULE_COMPLETE: 'module_complete',
  
  // Video events
  VIDEO_PLAY: 'video_play',
  VIDEO_PAUSE: 'video_pause',
  VIDEO_COMPLETE: 'video_complete',
  VIDEO_PROGRESS: 'video_progress',
  
  // User engagement
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  CTA_CLICK: 'cta_click',
  DOWNLOAD: 'file_download',
  SEARCH: 'search',
  SHARE: 'share',
  
  // Navigation
  OUTBOUND_LINK: 'outbound_link',
  SCROLL_DEPTH: 'scroll_depth',
  
  // Errors
  ERROR: 'error',
} as const;

/**
 * Event Categories
 */
export const EVENT_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  COURSE: 'course',
  VIDEO: 'video',
  CONVERSION: 'conversion',
  NAVIGATION: 'navigation',
  ERROR: 'error',
} as const;

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return ANALYTICS_CONFIG.ga4.enabled || ANALYTICS_CONFIG.gtm.enabled;
}

/**
 * Check if debug mode is enabled
 */
export function isDebugMode(): boolean {
  return ANALYTICS_CONFIG.debug.enabled || ANALYTICS_CONFIG.ga4.debugMode;
}

/**
 * Check if cookies are needed
 */
export function requiresCookieConsent(): boolean {
  return ANALYTICS_CONFIG.cookieConsent.enabled;
}

/**
 * Get consent status
 */
export function getConsentStatus(): boolean {
  if (!requiresCookieConsent()) return true;
  
  // Check localStorage for consent
  try {
    const consent = localStorage.getItem('analytics_consent');
    return consent === 'granted';
  } catch {
    return ANALYTICS_CONFIG.cookieConsent.defaultConsent;
  }
}

/**
 * Set consent status
 */
export function setConsentStatus(granted: boolean): void {
  try {
    localStorage.setItem('analytics_consent', granted ? 'granted' : 'denied');
    
    // Update GA4 consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied',
      });
    }
  } catch (error) {
    console.error('Failed to set consent:', error);
  }
}

/**
 * Clean tracking parameters from URL
 */
export function cleanTrackingParams(url: string): string {
  const trackingParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'fbclid',
    'gclid',
    'msclkid',
    'mc_cid',
    'mc_eid',
    '_ga',
    'ref',
  ];
  
  try {
    const parsed = new URL(url);
    const params = new URLSearchParams(parsed.search);
    
    trackingParams.forEach(param => params.delete(param));
    
    parsed.search = params.toString();
    return parsed.toString();
  } catch {
    return url;
  }
}

/**
 * Type definitions for gtag
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}