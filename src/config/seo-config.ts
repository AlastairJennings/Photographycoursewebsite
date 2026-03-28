/**
 * SEO Configuration for The Photo Course
 * 
 * This file contains all page-level SEO metadata.
 * Update this file to change titles, descriptions, and social sharing content.
 * 
 * IMPORTANT: 
 * - Meta titles: 50-60 characters recommended
 * - Meta descriptions: 120-160 characters recommended
 * - All pages must have unique titles and descriptions
 */

export interface PageSEOConfig {
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
}

export interface SiteConfig {
  // Site-wide defaults
  siteName: string;
  siteUrl: string;
  defaultImage: string;
  defaultOgType: 'website' | 'article' | 'profile';
  defaultTwitterCard: 'summary' | 'summary_large_image';
  
  // Social Media Handles (optional)
  twitterHandle?: string;
  facebookAppId?: string;
}

/**
 * Site-wide Configuration
 * Update these values for your production environment
 */
export const siteConfig: SiteConfig = {
  siteName: 'The Photo Course',
  siteUrl: 'https://thephotocourse.com', // UPDATE THIS to your production domain
  defaultImage: 'https://thephotocourse.com/images/social-share-default.jpg', // UPDATE THIS to your default social image
  defaultOgType: 'website',
  defaultTwitterCard: 'summary_large_image',
  
  // Optional: Add your social media handles
  twitterHandle: '@thephotocourse', // UPDATE THIS to your Twitter handle
  // facebookAppId: 'YOUR_FACEBOOK_APP_ID',
};

/**
 * Page-specific SEO configurations
 * Each page has unique metadata to avoid duplicate content issues
 */
export const pageSEOConfigs: Record<string, PageSEOConfig> = {
  // HOME PAGE
  home: {
    title: 'The Photo Course - Master the Art of Photography Online',
    description: 'Learn photography with expert-led online courses. Master camera fundamentals, film development, and darkroom techniques through video lessons.',
    canonical: `${siteConfig.siteUrl}`,
    noindex: false,
    nofollow: false,
    
    // Open Graph
    ogTitle: 'Master the Art of Photography Online',
    ogDescription: 'Comprehensive photography courses with video tutorials, resources, and expert instruction. Start your photography journey today.',
    ogImage: `${siteConfig.siteUrl}/images/og-home.jpg`, // UPDATE THIS to your home page social image
    ogUrl: `${siteConfig.siteUrl}`,
    ogType: 'website',
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: 'Master the Art of Photography Online',
    twitterDescription: 'Learn photography through comprehensive online courses. Video lessons, fact sheets, and expert guidance.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-home.jpg`, // UPDATE THIS to your home Twitter image
  },

  // COURSES LISTING PAGE
  courses: {
    title: 'Online Photography Courses - The Photo Course',
    description: 'Expert-led photography courses covering digital fundamentals, film photography, and darkroom techniques. Video lessons and practical assignments.',
    canonical: `${siteConfig.siteUrl}/courses`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Photography Courses - Learn from Experts',
    ogDescription: 'Explore photography courses covering digital fundamentals, film photography, and darkroom techniques.',
    ogImage: `${siteConfig.siteUrl}/images/og-courses.jpg`,
    ogUrl: `${siteConfig.siteUrl}/courses`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Photography Courses - The Photo Course',
    twitterDescription: 'Expert-led courses covering digital and film photography. Start learning today.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-courses.jpg`,
  },

  // INTRODUCTION TO PHOTOGRAPHY COURSE
  'course-intro-photography': {
    title: 'Introduction to Photography Course - The Photo Course',
    description: 'Complete 10-week photography course covering camera basics, exposure, composition, lighting, and editing. Perfect for beginners.',
    canonical: `${siteConfig.siteUrl}/courses/introduction-to-photography`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Introduction to Photography - 10-Week Beginner Course',
    ogDescription: 'Master camera fundamentals, exposure, composition, and lighting in this comprehensive beginner photography course.',
    ogImage: `${siteConfig.siteUrl}/images/og-intro-course.jpg`,
    ogUrl: `${siteConfig.siteUrl}/courses/introduction-to-photography`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Introduction to Photography - Beginner Course',
    twitterDescription: '10-week course covering camera basics, exposure, composition, lighting, and post-processing.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-intro-course.jpg`,
  },

  // FILM & DARKROOM COURSE
  'course-film-darkroom': {
    title: 'Film & Darkroom Photography Course - The Photo Course',
    description: 'Master traditional film photography and darkroom techniques. Learn development, contact sheets, and analog printing processes.',
    canonical: `${siteConfig.siteUrl}/courses/film-darkroom`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Film & Darkroom Photography Course',
    ogDescription: 'Learn traditional film photography, darkroom techniques, and analog printing processes from experienced instructors.',
    ogImage: `${siteConfig.siteUrl}/images/og-film-course.jpg`,
    ogUrl: `${siteConfig.siteUrl}/courses/film-darkroom`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Film & Darkroom Photography Course',
    twitterDescription: 'Master traditional film development, contact sheets, and darkroom printing techniques.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-film-course.jpg`,
  },

  // RESOURCES / FACT SHEETS PAGE
  resources: {
    title: 'Photography Resources & Fact Sheets - The Photo Course',
    description: 'Free photography resources including camera guides, exposure charts, composition guides, and technical references for all skill levels.',
    canonical: `${siteConfig.siteUrl}/resources`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Free Photography Resources & Fact Sheets',
    ogDescription: 'Download camera guides, exposure charts, composition guides, and technical references. Free resources for photographers.',
    ogImage: `${siteConfig.siteUrl}/images/og-resources.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Photography Resources & Fact Sheets',
    twitterDescription: 'Free downloadable guides, charts, and technical references for photographers.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-resources.jpg`,
  },

  // GLOSSARY PAGE
  glossary: {
    title: 'Photography Glossary & Definitions - The Photo Course',
    description: 'Complete glossary of photography terms, camera settings, technical concepts, and industry jargon. Essential reference for photographers.',
    canonical: `${siteConfig.siteUrl}/glossary`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Photography Glossary - Terms & Definitions',
    ogDescription: 'Complete glossary of photography terminology. Learn camera settings, technical concepts, and industry terms.',
    ogImage: `${siteConfig.siteUrl}/images/og-glossary.jpg`,
    ogUrl: `${siteConfig.siteUrl}/glossary`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Photography Glossary',
    twitterDescription: 'Comprehensive glossary of photography terms, camera settings, and technical concepts.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-glossary.jpg`,
  },

  // ABOUT PAGE
  about: {
    title: 'About The Photo Course - Expert Photography Education',
    description: 'Meet Alastair Jennings, lead instructor with 32+ years experience. Learn about our mission to provide high-quality photography education.',
    canonical: `${siteConfig.siteUrl}/about`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'About The Photo Course - Expert-Led Photography Education',
    ogDescription: 'Meet our experienced photography instructors and learn about our mission to provide accessible, professional photography education.',
    ogImage: `${siteConfig.siteUrl}/images/og-about.jpg`,
    ogUrl: `${siteConfig.siteUrl}/about`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'About The Photo Course',
    twitterDescription: 'Meet our experienced photography instructors and learn about our mission.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-about.jpg`,
  },

  // CONTACT PAGE
  contact: {
    title: 'Contact Us - The Photo Course',
    description: 'Get in touch with The Photo Course. Whether you have questions about our courses, need technical support, or want to provide feedback, we\'re here to help.',
    canonical: `${siteConfig.siteUrl}/contact`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Contact The Photo Course - Get in Touch',
    ogDescription: 'Have questions about our photography courses? Need support? Contact our team and we\'ll get back to you within 24-48 hours.',
    ogImage: `${siteConfig.siteUrl}/images/og-contact.jpg`,
    ogUrl: `${siteConfig.siteUrl}/contact`,
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact The Photo Course',
    twitterDescription: 'Get in touch with our team. We\'re here to answer your photography course questions.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-contact.jpg`,
  },

  // PRIVACY POLICY PAGE
  'privacy-policy': {
    title: 'Privacy Policy - The Photo Course',
    description: 'Privacy Policy for The Photo Course. Learn how Curvemedia Studios Ltd collects, uses, and protects your personal data in compliance with UK GDPR.',
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Privacy Policy - The Photo Course',
    ogDescription: 'Privacy Policy for The Photo Course. Learn how we collect, use, and protect your personal data.',
    ogImage: `${siteConfig.siteUrl}/images/og-default.jpg`,
    ogUrl: `${siteConfig.siteUrl}/privacy-policy`,
    ogType: 'website',
    
    twitterCard: 'summary',
    twitterTitle: 'Privacy Policy - The Photo Course',
    twitterDescription: 'Learn how The Photo Course protects your privacy and personal data.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-default.jpg`,
  },

  // TERMS AND CONDITIONS PAGE
  'terms': {
    title: 'Terms and Conditions - The Photo Course',
    description: 'Terms and Conditions for The Photo Course. Read our terms of use, course enrollment policies, refund policy, and user responsibilities.',
    canonical: `${siteConfig.siteUrl}/terms`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Terms and Conditions - The Photo Course',
    ogDescription: 'Terms and Conditions for The Photo Course. Learn about our terms of use and policies.',
    ogImage: `${siteConfig.siteUrl}/images/og-default.jpg`,
    ogUrl: `${siteConfig.siteUrl}/terms`,
    ogType: 'website',
    
    twitterCard: 'summary',
    twitterTitle: 'Terms and Conditions - The Photo Course',
    twitterDescription: 'Read the Terms and Conditions for The Photo Course.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-default.jpg`,
  },

  // COOKIE SETTINGS PAGE
  'cookie-settings': {
    title: 'Cookie Settings - The Photo Course',
    description: 'Manage your cookie preferences for The Photo Course. Control which cookies we use and learn about how we protect your privacy.',
    canonical: `${siteConfig.siteUrl}/cookie-settings`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Cookie Settings - The Photo Course',
    ogDescription: 'Manage your cookie preferences and control which cookies we use on The Photo Course.',
    ogImage: `${siteConfig.siteUrl}/images/og-default.jpg`,
    ogUrl: `${siteConfig.siteUrl}/cookie-settings`,
    ogType: 'website',
    
    twitterCard: 'summary',
    twitterTitle: 'Cookie Settings - The Photo Course',
    twitterDescription: 'Control your cookie preferences and privacy settings.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-default.jpg`,
  },

  // RAW VS JPEG RESOURCE
  'raw-vs-jpeg': {
    title: 'RAW vs JPEG: File Format Guide for Photographers - The Photo Course',
    description: 'Comprehensive guide to RAW and JPEG file formats. Learn the technical differences, when to use each format, and how file choice affects image quality and editing flexibility.',
    canonical: `${siteConfig.siteUrl}/resources/raw-vs-jpeg`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'RAW vs JPEG: Complete File Format Guide',
    ogDescription: 'Understand the differences between RAW and JPEG formats, including bit depth, file size, editing flexibility, and when to use each format.',
    ogImage: `${siteConfig.siteUrl}/images/og-raw-vs-jpeg.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/raw-vs-jpeg`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'RAW vs JPEG: File Format Guide',
    twitterDescription: 'Master the differences between RAW and JPEG file formats and learn when to use each for optimal results.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-raw-vs-jpeg.jpg`,
  },

  // LENS SELECTION GUIDE RESOURCE
  'lens-guide': {
    title: 'Camera Lens Selection Guide: Choose the Perfect Camera Lens - The Photo Course',
    description: 'Complete guide to choosing camera lenses. Learn about focal lengths, prime vs zoom, aperture, and building your lens kit for every photography genre.',
    canonical: `${siteConfig.siteUrl}/resources/lens-guide`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Camera Lens Selection Guide for Photographers',
    ogDescription: 'Master lens selection with our comprehensive guide covering focal lengths, prime vs zoom, aperture, and specialty lenses for every photography style.',
    ogImage: `${siteConfig.siteUrl}/images/og-lens-guide.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/lens-guide`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Camera Lens Selection Guide',
    twitterDescription: 'Learn to choose the perfect lens for your photography style. Complete guide to focal lengths, aperture, and building your lens kit.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-lens-guide.jpg`,
  },

  // FOCUS TECHNIQUES RESOURCE
  'focus-techniques': {
    title: 'Focus Techniques: Master Focus Stacking & Hyperfocal Distance - The Photo Course',
    description: 'Complete guide to focus techniques including autofocus modes, manual focus, focus stacking for extreme depth of field, and hyperfocal distance for landscapes.',
    canonical: `${siteConfig.siteUrl}/resources/focus-techniques`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Master Focus Techniques: Focus Stacking & Hyperfocal Distance',
    ogDescription: 'Learn advanced focus techniques including focus stacking for macro photography and hyperfocal distance calculations for landscape photography.',
    ogImage: `${siteConfig.siteUrl}/images/og-focus-techniques.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/focus-techniques`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Focus Techniques Guide',
    twitterDescription: 'Master autofocus modes, focus stacking, hyperfocal distance, and achieve tack-sharp images every time.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-focus-techniques.jpg`,
  },

  // COLOUR THEORY RESOURCE
  'colour-theory': {
    title: 'Colour Theory for Photographers: Kandinsky & Emotional Photography - The Photo Course',
    description: 'Master colour theory with Kandinsky\'s emotional colour associations. Learn to use red, yellow, and blue to evoke powerful emotions in your photography.',
    canonical: `${siteConfig.siteUrl}/resources/colour-theory`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Colour Theory for Photographers: Kandinsky\'s Emotional Palette',
    ogDescription: 'Explore Kandinsky\'s colour theory and learn to create emotionally powerful photographs using red, yellow, and blue intentionally.',
    ogImage: `${siteConfig.siteUrl}/images/og-colour-theory.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/colour-theory`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Colour Theory Guide',
    twitterDescription: 'Harness the emotional power of colour with Kandinsky\'s theory. Create photographs that resonate with viewers on a deeper level.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-colour-theory.jpg`,
  },

  // BLACK & WHITE CONVERSION RESOURCE
  'black-white-conversion': {
    title: 'Black & White Conversion: Master the Zone System - The Photo Course',
    description: 'Complete guide to black and white photography featuring Ansel Adams\' Zone System. Learn conversion techniques, tonal control, and create powerful monochrome images.',
    canonical: `${siteConfig.siteUrl}/resources/black-white-conversion`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Black & White Photography: Master the Zone System',
    ogDescription: 'Learn Ansel Adams\' Zone System and advanced black and white conversion techniques for creating powerful monochrome photographs.',
    ogImage: `${siteConfig.siteUrl}/images/og-black-white-conversion.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/black-white-conversion`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Black & White Conversion Guide',
    twitterDescription: 'Master the Zone System and create compelling black and white images with expert conversion techniques.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-black-white-conversion.jpg`,
  },

  // LONG EXPOSURE TECHNIQUES RESOURCE
  'long-exposure': {
    title: 'Long Exposure Techniques: ND & Graduated ND Filters Guide - The Photo Course',
    description: 'Master long exposure photography with ND and graduated ND filters. Create silky waterfalls, dreamy seascapes, star trails, and light trails.',
    canonical: `${siteConfig.siteUrl}/resources/long-exposure`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Long Exposure Photography: ND Filter Mastery',
    ogDescription: 'Complete guide to long exposure techniques, ND filters, and graduated ND filters for creating stunning ethereal photographs.',
    ogImage: `${siteConfig.siteUrl}/images/og-long-exposure.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/long-exposure`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Long Exposure Techniques',
    twitterDescription: 'Master ND filters and create silky water, star trails, and light trails with expert long exposure techniques.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-long-exposure.jpg`,
  },

  // FLASH PHOTOGRAPHY BASICS RESOURCE
  'flash-photography': {
    title: 'Flash Photography Basics: Manual Exposure, Off-Camera & Three-Light Setup - The Photo Course',
    description: 'Master flash photography techniques. Learn manual exposure for backgrounds, flash power control, off-camera flash, light modifiers, and professional three-point lighting setups.',
    canonical: `${siteConfig.siteUrl}/resources/flash-photography`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Flash Photography Basics: Professional Lighting Techniques',
    ogDescription: 'Complete guide to flash photography including manual exposure technique, off-camera flash, and three-point lighting for professional results.',
    ogImage: `${siteConfig.siteUrl}/images/og-flash-photography.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/flash-photography`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Flash Photography Basics',
    twitterDescription: 'Master flash photography with manual exposure techniques, off-camera flash, and three-point lighting setups.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-flash-photography.jpg`,
  },

  // POST-PROCESSING WORKFLOW RESOURCE
  'post-processing': {
    title: 'Post-Processing Workflow: Lightroom, Photoshop & Capture One Guide - The Photo Course',
    description: 'Master professional post-processing workflows in Adobe Lightroom, Photoshop, and Capture One. Learn non-destructive editing, organization, and discover free alternatives.',
    canonical: `${siteConfig.siteUrl}/resources/post-processing`,
    noindex: false,
    nofollow: false,
    
    ogTitle: 'Post-Processing Workflow: Complete Software Guide',
    ogDescription: 'Professional guide to post-processing workflows covering Lightroom, Photoshop, Capture One, and free alternatives with non-destructive editing techniques.',
    ogImage: `${siteConfig.siteUrl}/images/og-post-processing.jpg`,
    ogUrl: `${siteConfig.siteUrl}/resources/post-processing`,
    ogType: 'article',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Post-Processing Workflow Guide',
    twitterDescription: 'Master Lightroom, Photoshop, Capture One and free alternatives with professional non-destructive workflows.',
    twitterImage: `${siteConfig.siteUrl}/images/twitter-post-processing.jpg`,
  },
};

/**
 * Get SEO configuration for a specific page
 * Includes fallback logic if custom social metadata is not provided
 */
export function getSEOConfig(pageKey: string): PageSEOConfig {
  const config = pageSEOConfigs[pageKey];
  
  if (!config) {
    // Return default config if page not found
    return {
      title: siteConfig.siteName,
      description: 'Master the art of photography with our comprehensive online courses.',
      canonical: siteConfig.siteUrl,
      noindex: true, // Don't index unknown pages
      nofollow: false,
    };
  }

  // Apply fallback logic for social metadata
  return {
    ...config,
    
    // Open Graph fallbacks
    ogTitle: config.ogTitle || config.title,
    ogDescription: config.ogDescription || config.description,
    ogImage: config.ogImage || siteConfig.defaultImage,
    ogUrl: config.ogUrl || config.canonical,
    ogType: config.ogType || siteConfig.defaultOgType,
    
    // Twitter Card fallbacks
    twitterCard: config.twitterCard || siteConfig.defaultTwitterCard,
    twitterTitle: config.twitterTitle || config.ogTitle || config.title,
    twitterDescription: config.twitterDescription || config.ogDescription || config.description,
    twitterImage: config.twitterImage || config.ogImage || siteConfig.defaultImage,
  };
}

/**
 * Validation helper to check if all pages have unique titles and descriptions
 * Run this in development to ensure no duplicate metadata
 */
export function validateSEOConfigs(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const canonicals = new Set<string>();

  Object.entries(pageSEOConfigs).forEach(([key, config]) => {
    // Check title length
    if (config.title.length < 30 || config.title.length > 60) {
      errors.push(`${key}: Title length (${config.title.length}) should be 50-60 characters`);
    }

    // Check description length
    if (config.description.length < 120 || config.description.length > 160) {
      errors.push(`${key}: Description length (${config.description.length}) should be 120-160 characters`);
    }

    // Check for duplicate titles
    if (titles.has(config.title)) {
      errors.push(`${key}: Duplicate title "${config.title}"`);
    }
    titles.add(config.title);

    // Check for duplicate descriptions
    if (descriptions.has(config.description)) {
      errors.push(`${key}: Duplicate description`);
    }
    descriptions.add(config.description);

    // Check for duplicate canonicals
    if (canonicals.has(config.canonical)) {
      errors.push(`${key}: Duplicate canonical URL "${config.canonical}"`);
    }
    canonicals.add(config.canonical);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}