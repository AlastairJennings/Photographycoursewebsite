/**
 * Sitemap Route Component
 * 
 * Serves XML sitemaps for search engines
 * Can be used to dynamically generate or serve pre-built sitemaps
 */

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getSitemapContent } from '../utils/sitemap-generator';

export function SitemapRoute() {
  const { type } = useParams<{ type?: string }>();
  
  useEffect(() => {
    const baseUrl = 'https://thephotocourse.com';
    
    // Determine which sitemap to serve
    let sitemapType: 'main' | 'courses' | 'resources' | 'reviews' | 'index' = 'index';
    
    if (type === 'pages') {
      sitemapType = 'main';
    } else if (type === 'courses') {
      sitemapType = 'courses';
    } else if (type === 'resources') {
      sitemapType = 'resources';
    } else if (type === 'reviews') {
      sitemapType = 'reviews';
    }
    
    try {
      const content = getSitemapContent(sitemapType, baseUrl);
      
      // Set proper XML content type
      const blob = new Blob([content], { type: 'application/xml; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      // Replace current page with XML content
      window.location.href = url;
    } catch (error) {
      console.error('Error generating sitemap:', error);
    }
  }, [type]);
  
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>Generating Sitemap...</h1>
      <p>Your sitemap is being generated. If the download doesn't start automatically, please refresh the page.</p>
    </div>
  );
}
