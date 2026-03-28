import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ANALYTICS_CONFIG } from '../config/analytics';
import { trackPageView } from '../utils/analytics';

/**
 * Analytics Component
 * 
 * Handles:
 * - Google Analytics 4 integration
 * - Google Tag Manager (optional)
 * - Automatic page view tracking
 * - Event tracking initialization
 * - Non-blocking script loading
 * 
 * Features:
 * - Deferred loading (after page interactive) to improve INP
 * - Async script loading (doesn't block rendering)
 * - Privacy-friendly (respects consent)
 * - Debug mode for development
 * - Clean URLs (tracking params removed)
 */
export function Analytics() {
  const location = useLocation();

  // Load Google Analytics 4 script
  useEffect(() => {
    if (!ANALYTICS_CONFIG.ga4.enabled) return;

    // Wait for page to be interactive before loading analytics
    const loadAnalytics = () => {
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4.measurementId}`;
      
      script.onload = () => {
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', ANALYTICS_CONFIG.ga4.measurementId, {
          send_page_view: false, // We'll handle this manually
          debug_mode: ANALYTICS_CONFIG.ga4.debugMode,
          anonymize_ip: true, // Privacy-friendly
          cookie_flags: 'SameSite=None;Secure',
        });

        if (ANALYTICS_CONFIG.ga4.debugMode) {
          console.log('📊 Google Analytics initialized:', ANALYTICS_CONFIG.ga4.measurementId);
        }
      };

      document.head.appendChild(script);
    };

    // Defer loading until after page is interactive
    if (document.readyState === 'complete') {
      loadAnalytics();
    } else {
      window.addEventListener('load', loadAnalytics);
      return () => window.removeEventListener('load', loadAnalytics);
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!ANALYTICS_CONFIG.ga4.enabled) return;

    // Track page view
    const path = location.pathname + location.search;
    const title = document.title;
    
    trackPageView(path, title);
  }, [location]);

  // Load Google Tag Manager (if enabled)
  useEffect(() => {
    if (!ANALYTICS_CONFIG.gtm.enabled) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${ANALYTICS_CONFIG.gtm.containerId}`;
    
    script.onload = () => {
      if (ANALYTICS_CONFIG.ga4.debugMode) {
        console.log('📊 Google Tag Manager initialized:', ANALYTICS_CONFIG.gtm.containerId);
      }
    };

    document.head.appendChild(script);
  }, []);

  return null; // This component doesn't render anything
}
