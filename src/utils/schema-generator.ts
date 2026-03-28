/**
 * Schema.org JSON-LD Generator
 * 
 * Generates structured data for search engines
 * 
 * Features:
 * - JSON-LD format (Google recommended)
 * - Multiple schema types (Course, Breadcrumb, Article, FAQ, Video, etc.)
 * - Dynamic field population
 * - Server-side safe
 * - Google Rich Results Test validated
 * - No spam markup
 */

/**
 * Base Schema Configuration
 */
export const SCHEMA_CONFIG = {
  baseUrl: 'https://thephotocourse.com',
  organizationName: 'The Photo Course',
  organizationLogo: 'https://thephotocourse.com/logo.png',
  socialProfiles: [
    'https://instagram.com/thephotocourse',
    'https://twitter.com/thephotocourse',
    'https://youtube.com/thephotocourse',
    'https://facebook.com/thephotocourse',
  ],
  author: {
    type: 'Organization' as const,
    name: 'The Photo Course',
  },
} as const;

/**
 * Organization Schema
 * For homepage and footer
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SCHEMA_CONFIG.organizationName,
    'url': SCHEMA_CONFIG.baseUrl,
    'logo': SCHEMA_CONFIG.organizationLogo,
    'sameAs': SCHEMA_CONFIG.socialProfiles,
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'email': 'support@thephotocourse.com',
    },
  };
}

/**
 * WebSite Schema
 * For homepage
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SCHEMA_CONFIG.organizationName,
    'url': SCHEMA_CONFIG.baseUrl,
    'description': 'Learn photography with comprehensive online courses, video lessons, fact sheets, and glossary. Master camera techniques, composition, lighting, and more.',
    'publisher': {
      '@type': 'Organization',
      'name': SCHEMA_CONFIG.organizationName,
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${SCHEMA_CONFIG.baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Breadcrumb Schema
 * For all pages with breadcrumbs
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${SCHEMA_CONFIG.baseUrl}${item.url}`,
    })),
  };
}

/**
 * Course Schema
 * For individual course pages
 */
export interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  courseCode?: string;
  hasCourseInstance?: {
    courseMode: string;
    courseWorkload?: string;
  };
  teaches?: string[];
  educationalLevel?: string;
  timeRequired?: string;
  numberOfLessons?: number;
  inLanguage?: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateCourseSchema(props: CourseSchemaProps) {
  const {
    name,
    description,
    url,
    image,
    provider = SCHEMA_CONFIG.organizationName,
    courseCode,
    hasCourseInstance,
    teaches = [],
    educationalLevel = 'Beginner',
    timeRequired,
    numberOfLessons,
    inLanguage = 'en',
    datePublished,
    dateModified,
  } = props;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': name,
    'description': description,
    'url': `${SCHEMA_CONFIG.baseUrl}${url}`,
    'provider': {
      '@type': 'Organization',
      'name': provider,
      'url': SCHEMA_CONFIG.baseUrl,
    },
    'inLanguage': inLanguage,
  };

  if (image) {
    schema.image = image;
  }

  if (courseCode) {
    schema.courseCode = courseCode;
  }

  if (hasCourseInstance) {
    schema.hasCourseInstance = {
      '@type': 'CourseInstance',
      'courseMode': hasCourseInstance.courseMode,
      'courseWorkload': hasCourseInstance.courseWorkload,
    };
  }

  if (teaches.length > 0) {
    schema.teaches = teaches;
  }

  if (educationalLevel) {
    schema.educationalLevel = educationalLevel;
  }

  if (timeRequired) {
    schema.timeRequired = timeRequired;
  }

  if (numberOfLessons) {
    schema.numberOfLessons = numberOfLessons;
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return schema;
}

/**
 * Article Schema
 * For blog posts and editorial content
 */
export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author = SCHEMA_CONFIG.author,
    publisher = {
      name: SCHEMA_CONFIG.organizationName,
      logo: SCHEMA_CONFIG.organizationLogo,
    },
  } = props;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': headline,
    'description': description,
    'url': `${SCHEMA_CONFIG.baseUrl}${url}`,
    'datePublished': datePublished,
    'author': {
      '@type': author.type || 'Organization',
      'name': author.name,
    },
    'publisher': {
      '@type': 'Organization',
      'name': publisher.name,
      'logo': {
        '@type': 'ImageObject',
        'url': publisher.logo,
      },
    },
  };

  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      'url': image,
    };
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  if (author.url) {
    schema.author.url = author.url;
  }

  return schema;
}

/**
 * FAQ Schema
 * For FAQ pages or sections
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };
}

/**
 * Video Schema
 * For video lessons
 */
export interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT1H30M")
  contentUrl?: string;
  embedUrl?: string;
  interactionStatistic?: {
    interactionType: string;
    userInteractionCount: number;
  };
}

export function generateVideoSchema(props: VideoSchemaProps) {
  const {
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
    interactionStatistic,
  } = props;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': name,
    'description': description,
    'thumbnailUrl': thumbnailUrl,
    'uploadDate': uploadDate,
  };

  if (duration) {
    schema.duration = duration;
  }

  if (contentUrl) {
    schema.contentUrl = contentUrl;
  }

  if (embedUrl) {
    schema.embedUrl = embedUrl;
  }

  if (interactionStatistic) {
    schema.interactionStatistic = {
      '@type': 'InteractionCounter',
      'interactionType': interactionStatistic.interactionType,
      'userInteractionCount': interactionStatistic.userInteractionCount,
    };
  }

  return schema;
}

/**
 * ItemList Schema
 * For course listings, resource listings, etc.
 */
export interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export function generateItemListSchema(items: ItemListItem[], listName?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': listName,
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Thing',
        'name': item.name,
        'url': `${SCHEMA_CONFIG.baseUrl}${item.url}`,
        'description': item.description,
        'image': item.image,
      },
    })),
  };
}

/**
 * Educational Organization Schema
 * For about page
 */
export function generateEducationalOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': SCHEMA_CONFIG.organizationName,
    'url': SCHEMA_CONFIG.baseUrl,
    'logo': SCHEMA_CONFIG.organizationLogo,
    'description': 'Online photography education platform offering comprehensive courses in digital and film photography.',
    'sameAs': SCHEMA_CONFIG.socialProfiles,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'US',
    },
  };
}

/**
 * Learning Resource Schema
 * For fact sheets and resources
 */
export interface LearningResourceSchemaProps {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  learningResourceType?: string;
  inLanguage?: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateLearningResourceSchema(props: LearningResourceSchemaProps) {
  const {
    name,
    description,
    url,
    educationalLevel = 'Beginner to Advanced',
    learningResourceType = 'Fact Sheet',
    inLanguage = 'en',
    datePublished,
    dateModified,
  } = props;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    'name': name,
    'description': description,
    'url': `${SCHEMA_CONFIG.baseUrl}${url}`,
    'educationalLevel': educationalLevel,
    'learningResourceType': learningResourceType,
    'inLanguage': inLanguage,
    'publisher': {
      '@type': 'Organization',
      'name': SCHEMA_CONFIG.organizationName,
    },
  };

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  return schema;
}

/**
 * Combine multiple schemas
 * Use @graph to combine multiple schemas on one page
 */
export function combineSchemas(schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

/**
 * Validate schema (basic client-side validation)
 */
export function validateSchema(schema: any): boolean {
  try {
    // Check if it's valid JSON
    JSON.stringify(schema);
    
    // Check for required fields
    if (!schema['@context']) return false;
    if (!schema['@type'] && !schema['@graph']) return false;
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Escape HTML in schema text fields
 * Prevents XSS and ensures valid JSON
 */
export function escapeSchemaText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, ' ') // Remove line breaks
    .trim();
}

/**
 * Convert duration to ISO 8601 format
 * Example: 90 minutes -> "PT1H30M"
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  let duration = 'PT';
  if (hours > 0) duration += `${hours}H`;
  if (mins > 0) duration += `${mins}M`;
  
  return duration;
}

/**
 * Format date to ISO 8601
 * Example: new Date() -> "2026-01-21T00:00:00Z"
 */
export function formatSchemaDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString();
}

/**
 * Common schema anti-patterns to AVOID
 */
export const SCHEMA_ANTI_PATTERNS = {
  avoid: [
    'Marking up content that is not visible on the page',
    'Using misleading schema types',
    'Fake reviews or ratings',
    'Schema for content that does not exist',
    'Hiding text in schema that is not on page',
    'Using incorrect schema types',
    'Duplicate schema on same page',
    'Schema with missing required properties',
  ],
  
  bestPractices: [
    'Only mark up visible content',
    'Use appropriate schema types',
    'Keep schema synchronized with page content',
    'Validate with Google Rich Results Test',
    'Include all required properties',
    'Use specific types (Course) over generic (Thing)',
    'Keep schema data truthful and accurate',
  ],
} as const;

/**
 * Get schema for page type
 * Helper to get appropriate schema for different pages
 */
export function getSchemaForPageType(pageType: 'home' | 'course' | 'article' | 'faq' | 'about' | 'resources'): string[] {
  const schemaMap = {
    home: ['WebSite', 'Organization'],
    course: ['Course', 'Breadcrumb'],
    article: ['Article', 'Breadcrumb'],
    faq: ['FAQPage', 'Breadcrumb'],
    about: ['EducationalOrganization', 'Breadcrumb'],
    resources: ['ItemList', 'Breadcrumb'],
  };
  
  return schemaMap[pageType] || ['Breadcrumb'];
}
