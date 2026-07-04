import { useEffect } from 'react';
import { siteConfig } from '../config/seo-config';

interface SEOProps {
  // Basic Meta Tags
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  nofollow?: boolean;
  
  // Open Graph Tags
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  
  // Twitter Card Tags
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  
  // Additional Meta Tags
  keywords?: string;
  author?: string;
}

/**
 * SEO Component
 * Manages all meta tags, Open Graph, and Twitter Card metadata
 * 
 * Features:
 * - Dynamic title and meta tags
 * - Open Graph for social sharing
 * - Twitter Cards
 * - Robots meta (index/noindex, follow/nofollow)
 * - Canonical URLs
 * - Automatic fallback to defaults
 */
export function SEO({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterSite,
  twitterCreator,
  keywords,
  author,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    /**
     * Helper function to create or update meta tags
     */
    const updateMetaTag = (
      selector: string,
      content: string,
      attributeName: 'name' | 'property' = 'name'
    ) => {
      if (!content) return;

      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        const selectorParts = selector.match(/\[(.+?)="(.+?)"\]/);
        if (selectorParts) {
          meta.setAttribute(selectorParts[1], selectorParts[2]);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    /**
     * Helper function to create or update link tags
     */
    const updateLinkTag = (rel: string, href: string) => {
      if (!href) return;

      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // ===================
    // BASIC META TAGS
    // ===================
    
    updateMetaTag('meta[name="description"]', description);
    
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }
    
    if (author) {
      updateMetaTag('meta[name="author"]', author);
    }

    // Robots meta tag
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    
    if (nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    
    updateMetaTag('meta[name="robots"]', robotsContent.join(', '));

    // ===================
    // CANONICAL URL
    // ===================
    
    updateLinkTag('canonical', canonical);

    // ===================
    // OPEN GRAPH TAGS
    // ===================
    
    // Use provided values or fallback to basic meta
    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;
    const finalOgImage = ogImage || siteConfig.defaultImage;
    const finalOgUrl = ogUrl || canonical;

    updateMetaTag('meta[property="og:site_name"]', siteConfig.siteName, 'property');
    updateMetaTag('meta[property="og:title"]', finalOgTitle, 'property');
    updateMetaTag('meta[property="og:description"]', finalOgDescription, 'property');
    updateMetaTag('meta[property="og:type"]', ogType, 'property');
    updateMetaTag('meta[property="og:url"]', finalOgUrl, 'property');
    updateMetaTag('meta[property="og:image"]', finalOgImage, 'property');
    
    // Additional OG image tags
    updateMetaTag('meta[property="og:image:width"]', '1200', 'property');
    updateMetaTag('meta[property="og:image:height"]', '630', 'property');
    updateMetaTag('meta[property="og:image:alt"]', finalOgTitle, 'property');

    // Facebook App ID (if configured)
    if (siteConfig.facebookAppId) {
      updateMetaTag('meta[property="fb:app_id"]', siteConfig.facebookAppId, 'property');
    }

    // ===================
    // TWITTER CARD TAGS
    // ===================
    
    // Use provided values or fallback to OG values or basic meta
    const finalTwitterTitle = twitterTitle || finalOgTitle;
    const finalTwitterDescription = twitterDescription || finalOgDescription;
    const finalTwitterImage = twitterImage || finalOgImage;
    const finalTwitterSite = twitterSite || siteConfig.twitterHandle;
    const finalTwitterCreator = twitterCreator || siteConfig.twitterHandle;

    updateMetaTag('meta[name="twitter:card"]', twitterCard);
    updateMetaTag('meta[name="twitter:title"]', finalTwitterTitle);
    updateMetaTag('meta[name="twitter:description"]', finalTwitterDescription);
    updateMetaTag('meta[name="twitter:image"]', finalTwitterImage);
    updateMetaTag('meta[name="twitter:image:alt"]', finalTwitterTitle);
    
    if (finalTwitterSite) {
      updateMetaTag('meta[name="twitter:site"]', finalTwitterSite);
    }
    
    if (finalTwitterCreator) {
      updateMetaTag('meta[name="twitter:creator"]', finalTwitterCreator);
    }

    // ===================
    // ADDITIONAL SEO TAGS
    // ===================
    
    // Viewport (should be set in HTML, but ensuring it's there)
    updateMetaTag('meta[name="viewport"]', 'width=device-width, initial-scale=1.0');
    
    // Theme color for mobile browsers
    updateMetaTag('meta[name="theme-color"]', '#7c3aed'); // violet-600
    
    // Format detection (prevent auto-linking of phone numbers, etc.)
    updateMetaTag('meta[name="format-detection"]', 'telephone=no');

  }, [
    title,
    description,
    canonical,
    noindex,
    nofollow,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterSite,
    twitterCreator,
    keywords,
    author,
  ]);

  // This component doesn't render anything
  return null;
}

/**
 * Helper function to generate preview text for social sharing
 * Useful for debugging and previewing how pages will appear when shared
 */
export function generateSocialPreview(config: SEOProps) {
  return {
    facebook: {
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      image: config.ogImage || siteConfig.defaultImage,
      url: config.ogUrl || config.canonical,
    },
    twitter: {
      title: config.twitterTitle || config.ogTitle || config.title,
      description: config.twitterDescription || config.ogDescription || config.description,
      image: config.twitterImage || config.ogImage || siteConfig.defaultImage,
      card: config.twitterCard || 'summary_large_image',
    },
    google: {
      title: config.title,
      description: config.description,
      url: config.canonical,
    },
  };
}
