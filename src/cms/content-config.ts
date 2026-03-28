/**
 * Content Management System (CMS) Configuration
 * 
 * This file contains all editable content and SEO settings.
 * Editors can modify this file directly without touching code.
 * 
 * Benefits:
 * - No developer dependency for content updates
 * - Centralized content management
 * - SEO control per page
 * - Easy bulk updates
 * - Version control friendly
 */

/**
 * Page Content Interface
 */
export interface PageContent {
  // Page identification
  id: string;
  slug: string;
  
  // SEO settings
  seo: {
    title: string;
    description: string;
    canonicalUrl?: string;
    noindex?: boolean;
    nofollow?: boolean;
    
    // Open Graph
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    
    // Twitter
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
  
  // Page content
  content: {
    // Hero section
    hero?: {
      h1: string;
      subheading?: string;
      ctaText?: string;
      ctaLink?: string;
    };
    
    // Main content sections
    sections?: Array<{
      id: string;
      type: 'text' | 'image' | 'video' | 'list' | 'cta';
      headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      heading?: string;
      text?: string;
      html?: string;
      image?: ImageContent;
      link?: LinkContent;
      items?: string[];
    }>;
  };
  
  // Publication dates
  publishedDate?: string;
  modifiedDate?: string;
  
  // Author
  author?: string;
}

/**
 * Image Content Interface
 */
export interface ImageContent {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  lazyLoading?: boolean;
  width?: number;
  height?: number;
}

/**
 * Link Content Interface
 */
export interface LinkContent {
  url: string;
  text: string;
  title?: string;
  openInNewTab?: boolean;
  nofollow?: boolean;
}

/**
 * Course Content Interface
 */
export interface CourseContent extends PageContent {
  courseDetails: {
    courseCode: string;
    educationalLevel: string;
    duration: string;
    numberOfLessons: number;
    teaches: string[];
    prerequisites?: string[];
  };
  
  modules: Array<{
    id: string;
    weekNumber: number;
    title: string;
    description: string;
    lessons: Array<{
      id: string;
      title: string;
      description?: string;
      videoUrl?: string;
      duration?: string;
    }>;
    resources?: Array<{
      title: string;
      type: 'pdf' | 'video' | 'link' | 'download';
      url: string;
      description?: string;
    }>;
  }>;
}

/**
 * Homepage Content
 */
export const homepageContent: PageContent = {
  id: 'home',
  slug: '/',
  
  seo: {
    title: 'The Photo Course | Learn Photography Online',
    description: 'Master photography with comprehensive online courses, video lessons, fact sheets, and glossary. Learn camera techniques, composition, lighting, and more.',
    canonicalUrl: 'https://thephotocourse.com/',
    noindex: false,
    nofollow: false,
    ogTitle: 'The Photo Course | Master the Art of Photography',
    ogDescription: 'Learn photography with expert-led online courses. From camera basics to advanced techniques.',
    ogImage: 'https://thephotocourse.com/og-image-home.jpg',
    ogType: 'website',
  },
  
  content: {
    hero: {
      h1: 'Master the Art of Photography',
      subheading: 'An online training program featuring video tutorials, comprehensive resources, and expert guidance.',
      ctaText: 'Explore Courses',
      ctaLink: '/courses',
    },
  },
  
  publishedDate: '2026-01-01',
  modifiedDate: '2026-01-21',
};

/**
 * Courses Page Content
 */
export const coursesPageContent: PageContent = {
  id: 'courses',
  slug: '/courses',
  
  seo: {
    title: 'Photography Courses | The Photo Course',
    description: 'Explore our comprehensive photography courses: Introduction to Photography and Film & Darkroom. Learn at your own pace with video lessons and expert instruction.',
    canonicalUrl: 'https://thephotocourse.com/courses',
    noindex: false,
    nofollow: false,
    ogTitle: 'Photography Courses | Online Learning',
    ogDescription: 'Choose from digital photography or traditional film courses.',
    ogImage: 'https://thephotocourse.com/og-image-courses.jpg',
  },
  
  content: {
    hero: {
      h1: 'Photography Courses',
      subheading: 'Master photography through comprehensive online courses designed for all skill levels.',
    },
    
    sections: [
      {
        id: 'intro-section',
        type: 'text',
        headingLevel: 'h2',
        heading: 'Choose Your Learning Path',
        text: 'Whether you\'re interested in digital photography or traditional film, we have courses designed to help you master the craft.',
      },
    ],
  },
  
  publishedDate: '2026-01-01',
  modifiedDate: '2026-01-21',
};

/**
 * About Page Content
 */
export const aboutPageContent: PageContent = {
  id: 'about',
  slug: '/about',
  
  seo: {
    title: 'About The Photo Course | Our Photography Education Mission',
    description: 'Learn about The Photo Course, our mission to provide accessible, high-quality photography education, and our commitment to helping photographers at all levels.',
    canonicalUrl: 'https://thephotocourse.com/about',
    noindex: false,
    nofollow: false,
  },
  
  content: {
    hero: {
      h1: 'About The Photo Course',
      subheading: 'Empowering photographers worldwide with accessible, expert-led education.',
    },
    
    sections: [
      {
        id: 'mission',
        type: 'text',
        headingLevel: 'h2',
        heading: 'Our Mission',
        text: 'We believe everyone should have access to high-quality photography education. Our courses are designed to be comprehensive, accessible, and practical.',
      },
      {
        id: 'approach',
        type: 'text',
        headingLevel: 'h2',
        heading: 'Our Approach',
        text: 'We combine video lessons, hands-on exercises, and comprehensive resources to create an engaging learning experience that works for photographers at all levels.',
      },
    ],
  },
  
  publishedDate: '2026-01-01',
  modifiedDate: '2026-01-21',
};

/**
 * Resources Page Content
 */
export const resourcesPageContent: PageContent = {
  id: 'resources',
  slug: '/resources',
  
  seo: {
    title: 'Photography Resources & Fact Sheets | The Photo Course',
    description: 'Free photography resources, fact sheets, and guides covering camera settings, composition, lighting, and more. Essential knowledge for photographers.',
    canonicalUrl: 'https://thephotocourse.com/resources',
    noindex: false,
    nofollow: false,
  },
  
  content: {
    hero: {
      h1: 'Photography Resources',
      subheading: 'Comprehensive fact sheets and guides to enhance your photography knowledge.',
    },
  },
  
  publishedDate: '2026-01-01',
  modifiedDate: '2026-01-21',
};

/**
 * Glossary Page Content
 */
export const glossaryPageContent: PageContent = {
  id: 'glossary',
  slug: '/glossary',
  
  seo: {
    title: 'Photography Glossary | Terms & Definitions',
    description: 'Complete photography glossary covering essential terms, techniques, and concepts. From aperture to zoom, understand the language of photography.',
    canonicalUrl: 'https://thephotocourse.com/glossary',
    noindex: false,
    nofollow: false,
  },
  
  content: {
    hero: {
      h1: 'Photography Glossary',
      subheading: 'Essential photography terms and definitions.',
    },
  },
  
  publishedDate: '2026-01-01',
  modifiedDate: '2026-01-21',
};

/**
 * Get content by slug
 */
export function getContentBySlug(slug: string): PageContent | null {
  const contentMap: Record<string, PageContent> = {
    '/': homepageContent,
    '/courses': coursesPageContent,
    '/about': aboutPageContent,
    '/resources': resourcesPageContent,
    '/glossary': glossaryPageContent,
  };
  
  return contentMap[slug] || null;
}

/**
 * Get all pages
 */
export function getAllPages(): PageContent[] {
  return [
    homepageContent,
    coursesPageContent,
    aboutPageContent,
    resourcesPageContent,
    glossaryPageContent,
  ];
}

/**
 * Update page content
 * (In a real CMS, this would save to database)
 */
export function updatePageContent(slug: string, updates: Partial<PageContent>): PageContent | null {
  const content = getContentBySlug(slug);
  if (!content) return null;
  
  // Merge updates
  return {
    ...content,
    ...updates,
    seo: {
      ...content.seo,
      ...(updates.seo || {}),
    },
    content: {
      ...content.content,
      ...(updates.content || {}),
    },
  };
}
