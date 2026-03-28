import { getSitemapContent } from '../utils/sitemap-generator';

interface SitemapXMLResponseProps {
  type: 'index' | 'main' | 'courses' | 'resources' | 'reviews';
}

/**
 * Component that serves raw XML sitemap content
 * This returns ONLY the XML text, styled to look like XML in the browser
 */
export function SitemapXMLResponse({ type }: SitemapXMLResponseProps) {
  const baseUrl = 'https://thephotocourse.com';
  const xml = getSitemapContent(type, baseUrl);

  // Return just the XML text with proper styling
  return (
    <div 
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        whiteSpace: 'pre',
        padding: '0',
        margin: '0',
        backgroundColor: 'white',
        color: '#000'
      }}
      dangerouslySetInnerHTML={{ __html: xml.replace(/</g, '&lt;').replace(/>/g, '&gt;') }}
    />
  );
}
