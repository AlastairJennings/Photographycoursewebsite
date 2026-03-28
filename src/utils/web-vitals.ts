import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';
import { PERFORMANCE_MONITORING } from '../config/performance';

/**
 * Web Vitals Monitoring Utility
 * 
 * Measures and reports Core Web Vitals metrics:
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - LCP (Largest Contentful Paint)
 * - TTFB (Time to First Byte)
 * - INP (Interaction to Next Paint) - replaces deprecated FID
 * 
 * TEMPORARILY SIMPLIFIED: Reduced monitoring overhead for performance optimization
 */

/**
 * Log metric to console (development only)
 */
function logMetricToConsole(metric: Metric) {
  const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);
  const rating = metric.rating || 'unknown';
  
  console.log(
    `%c${metric.name}%c ${value} %c(${rating})`,
    'font-weight: bold; color: #4f46e5;',
    'color: inherit;',
    rating === 'good' ? 'color: #10b981;' : rating === 'needs-improvement' ? 'color: #f59e0b;' : 'color: #ef4444;'
  );
}

/**
 * Report all web vitals
 */
function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
    onINP(onPerfEntry);
  }
}

/**
 * Initialize web vitals monitoring
 * 
 * TEMPORARILY SIMPLIFIED: Reduced monitoring overhead for performance
 */
export function initWebVitalsMonitoring() {
  if (typeof window === 'undefined') return;
  if (!PERFORMANCE_MONITORING.enabled) return;

  // Simplified - only report critical metrics without heavy tracking
  reportWebVitals((metric) => {
    // Only log in development - skip analytics to reduce overhead
    if (process.env.NODE_ENV === 'development') {
      logMetricToConsole(metric);
    }
    
    // Skip analytics reporting temporarily to improve INP
    // Analytics tracking was adding significant overhead
    // Re-enable after performance targets are met
  });
}