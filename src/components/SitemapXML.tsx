/**
 * Sitemap XML Component
 * 
 * Serves XML sitemaps directly in the browser
 * This component renders XML content that search engines can read
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSitemapContent } from '../utils/sitemap-generator';

export function SitemapXML() {
  const { type } = useParams<{ type?: string }>();
  const [xmlContent, setXmlContent] = useState<string>('');
  
  useEffect(() => {
    const baseUrl = window.location.origin;
    
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
      setXmlContent(content);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      setXmlContent('<?xml version="1.0" encoding="UTF-8"?><error>Failed to generate sitemap</error>');
    }
  }, [type]);
  
  // Return pre-formatted XML in a clean display
  return (
    <div style={{ 
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      padding: '20px',
      backgroundColor: '#1e1e1e',
      color: '#d4d4d4',
      minHeight: '100vh',
      fontSize: '14px',
      lineHeight: '1.6'
    }}>
      {xmlContent}
    </div>
  );
}

/**
 * Sitemap Download Button Component
 * For manually downloading sitemaps
 */
export function SitemapDownloader() {
  const downloadSitemap = (type: 'index' | 'main' | 'courses' | 'resources' | 'reviews') => {
    const baseUrl = window.location.origin;
    const content = getSitemapContent(type, baseUrl);
    const filename = type === 'index' ? 'sitemap.xml' : `sitemap-${type}.xml`;
    
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Sitemap Generator</h1>
      
      <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
        Download XML sitemaps for The Photo Course. These files should be placed in your web server's 
        public directory and submitted to search engines.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button 
          onClick={() => downloadSitemap('index')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          <strong>sitemap.xml</strong> - Main sitemap index
        </button>
        
        <button 
          onClick={() => downloadSitemap('main')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          <strong>sitemap-pages.xml</strong> - Main pages (home, courses, about, etc.)
        </button>
        
        <button 
          onClick={() => downloadSitemap('courses')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          <strong>sitemap-courses.xml</strong> - Course pages
        </button>
        
        <button 
          onClick={() => downloadSitemap('resources')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          <strong>sitemap-resources.xml</strong> - Resource/fact sheet pages
        </button>
        
        <button 
          onClick={() => downloadSitemap('reviews')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#7c3aed',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'left',
            fontWeight: '500'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
        >
          <strong>sitemap-reviews.xml</strong> - Camera reviews & buying guides
        </button>
      </div>
      
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f3f4f6', 
        borderRadius: '8px',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>📋 Next Steps</h2>
        <ol style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Download all 5 sitemap files</li>
          <li>Upload them to your web server's public directory</li>
          <li>Verify they're accessible at: <code>https://thephotocourse.com/sitemap.xml</code></li>
          <li>Submit to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>Google Search Console</a></li>
          <li>Submit to <a href="https://www.bing.com/webmasters" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed' }}>Bing Webmaster Tools</a></li>
        </ol>
      </div>
    </div>
  );
}
