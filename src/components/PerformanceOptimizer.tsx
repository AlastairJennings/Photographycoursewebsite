import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PRELOAD_RESOURCES, RESOURCE_HINTS } from '../config/performance';
import React from 'react';

/**
 * Performance Optimizer Component
 * 
 * Handles:
 * - Resource preloading (fonts, critical images)
 * - DNS prefetch for third-party domains
 * - Preconnect for critical origins
 * - Font optimization
 * 
 * This component should be included once at the app level
 * 
 * TEMPORARILY SIMPLIFIED for INP optimization
 */
export function PerformanceOptimizer() {
  return (
    <Helmet>
      {/* TEMPORARILY DISABLED DNS Prefetch and Preconnect to reduce initial overhead */}
      {/* DNS Prefetch - Resolve DNS early for third-party domains */}
      {/* {RESOURCE_HINTS.dnsPrefetch.map((domain) => (
        <link key={domain} rel="dns-prefetch" href={domain} />
      ))} */}

      {/* Preconnect - Establish early connections to critical origins */}
      {/* {RESOURCE_HINTS.preconnect.map((origin) => (
        <link key={origin} rel="preconnect" href={origin} crossOrigin="anonymous" />
      ))} */}

      {/* TEMPORARILY DISABLED Font Preloading to reduce initial requests */}
      {/* Preload Critical Fonts */}
      {/* {PRELOAD_RESOURCES.fonts.map((font) => (
        <link
          key={font.href}
          rel="preload"
          href={font.href}
          as={font.as}
          type={font.type}
          crossOrigin={font.crossOrigin}
        />
      ))} */}

      {/* Font optimization - use font-display: optional to reduce CLS */}
      <style>
        {`
          /* Critical CSS for reducing CLS and INP */
          
          /* Ensure body doesn't shift when font loads */
          body {
            font-family: 'Roslindale', Georgia, serif;
          }
          
          /* Prevent layout shifts from images */
          img {
            content-visibility: auto;
            display: block;
          }
          
          /* Additional performance optimizations */
          * {
            /* Reduce layout thrashing */
            will-change: auto;
          }
        `}
      </style>
    </Helmet>
  );
}