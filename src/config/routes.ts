/**
 * Route Configuration
 * 
 * Defines all routes with clean, SEO-friendly URLs
 * 
 * URL Structure Rules:
 * - Clean, human-readable URLs
 * - Lowercase only
 * - Hyphen-separated words
 * - No query strings or hash routing
 * - Descriptive and logical hierarchy
 */

export interface Route {
  path: string;
  title: string;
  seoKey?: string;
  breadcrumb?: string;
}

/**
 * Main Site Routes
 * All URLs follow clean, descriptive patterns
 */
export const routes = {
  // Top-level pages
  home: {
    path: '/',
    title: 'Home',
    seoKey: 'home',
    breadcrumb: 'Home',
  },
  
  courses: {
    path: '/courses',
    title: 'Courses',
    seoKey: 'courses',
    breadcrumb: 'Courses',
  },
  
  resources: {
    path: '/resources',
    title: 'Resources',
    seoKey: 'resources',
    breadcrumb: 'Resources',
  },
  
  glossary: {
    path: '/glossary',
    title: 'Glossary',
    seoKey: 'glossary',
    breadcrumb: 'Glossary',
  },
  
  about: {
    path: '/about',
    title: 'About',
    seoKey: 'about',
    breadcrumb: 'About',
  },
  
  contact: {
    path: '/contact',
    title: 'Contact',
    seoKey: 'contact',
    breadcrumb: 'Contact',
  },
  
  privacyPolicy: {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    seoKey: 'privacy-policy',
    breadcrumb: 'Privacy Policy',
  },
  
  terms: {
    path: '/terms',
    title: 'Terms and Conditions',
    seoKey: 'terms',
    breadcrumb: 'Terms and Conditions',
  },
  
  cookieSettings: {
    path: '/cookie-settings',
    title: 'Cookie Settings',
    seoKey: 'cookie-settings',
    breadcrumb: 'Cookie Settings',
  },
  
  // Individual Courses
  introPhotography: {
    path: '/courses/introduction-to-photography',
    title: 'Introduction to Photography',
    seoKey: 'course-intro-photography',
    breadcrumb: 'Introduction to Photography',
  },
  
  filmDarkroom: {
    path: '/courses/film-darkroom',
    title: 'Film & Darkroom Course',
    seoKey: 'course-film-darkroom',
    breadcrumb: 'Film & Darkroom',
  },
} as const;

/**
 * Generate week URL for a course
 */
export function getCourseWeekUrl(courseSlug: string, weekNumber: number): string {
  return `/courses/${courseSlug}/week-${weekNumber}`;
}

/**
 * Generate module URL for a course
 */
export function getCourseModuleUrl(courseSlug: string, weekNumber: number, moduleNumber: number): string {
  return `/courses/${courseSlug}/week-${weekNumber}/module-${moduleNumber}`;
}

/**
 * Get route by path
 */
export function getRouteByPath(path: string): Route | undefined {
  return Object.values(routes).find(route => route.path === path);
}

/**
 * Get SEO key from path
 */
export function getSEOKeyFromPath(path: string): string {
  // Exact route match
  const route = getRouteByPath(path);
  if (route?.seoKey) return route.seoKey;
  
  // Course-specific patterns
  if (path === '/courses') return 'courses';
  if (path.startsWith('/courses/introduction-to-photography')) return 'course-intro-photography';
  if (path.startsWith('/courses/film-darkroom')) return 'course-film-darkroom';
  if (path === '/resources') return 'resources';
  
  // Resource-specific patterns
  if (path === '/resources/raw-vs-jpeg') return 'raw-vs-jpeg';
  if (path === '/resources/lens-guide') return 'lens-guide';
  if (path === '/resources/focus-techniques') return 'focus-techniques';
  if (path === '/resources/colour-theory') return 'colour-theory';
  if (path === '/resources/black-white-conversion') return 'black-white-conversion';
  if (path === '/resources/long-exposure') return 'long-exposure';
  if (path === '/resources/flash-photography') return 'flash-photography';
  if (path === '/resources/post-processing') return 'post-processing';
  
  if (path === '/glossary') return 'glossary';
  if (path === '/about') return 'about';
  if (path === '/contact') return 'contact';
  if (path === '/privacy-policy') return 'privacy-policy';
  if (path === '/terms') return 'terms';
  
  // Default to home
  return 'home';
}

/**
 * Build breadcrumb trail from current path
 */
export interface Breadcrumb {
  label: string;
  path: string;
}

export function getBreadcrumbs(pathname: string): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', path: '/' }
  ];
  
  // Home page doesn't need breadcrumbs
  if (pathname === '/') {
    return [];
  }
  
  const segments = pathname.split('/').filter(Boolean);
  
  // Build breadcrumbs based on path
  if (segments[0] === 'courses') {
    breadcrumbs.push({ label: 'Courses', path: '/courses' });
    
    if (segments[1] === 'introduction-to-photography') {
      breadcrumbs.push({ 
        label: 'Introduction to Photography', 
        path: '/courses/introduction-to-photography' 
      });
      
      if (segments[2]?.startsWith('week-')) {
        const weekNum = segments[2].replace('week-', '');
        breadcrumbs.push({ 
          label: `Week ${weekNum}`, 
          path: `/courses/introduction-to-photography/${segments[2]}` 
        });
        
        if (segments[3]?.startsWith('module-')) {
          const moduleNum = segments[3].replace('module-', '');
          breadcrumbs.push({ 
            label: `Module ${moduleNum}`, 
            path: pathname 
          });
        }
      }
    } else if (segments[1] === 'film-darkroom') {
      breadcrumbs.push({ 
        label: 'Film & Darkroom', 
        path: '/courses/film-darkroom' 
      });
      
      if (segments[2]?.startsWith('week-')) {
        const weekNum = segments[2].replace('week-', '');
        breadcrumbs.push({ 
          label: `Week ${weekNum}`, 
          path: `/courses/film-darkroom/${segments[2]}` 
        });
        
        if (segments[3]?.startsWith('module-')) {
          const moduleNum = segments[3].replace('module-', '');
          breadcrumbs.push({ 
            label: `Module ${moduleNum}`, 
            path: pathname 
          });
        }
      }
    }
  } else if (segments[0] === 'resources') {
    breadcrumbs.push({ label: 'Resources', path: '/resources' });
  } else if (segments[0] === 'glossary') {
    breadcrumbs.push({ label: 'Glossary', path: '/glossary' });
  } else if (segments[0] === 'about') {
    breadcrumbs.push({ label: 'About', path: '/about' });
  } else if (segments[0] === 'contact') {
    breadcrumbs.push({ label: 'Contact', path: '/contact' });
  } else if (segments[0] === 'privacy-policy') {
    breadcrumbs.push({ label: 'Privacy Policy', path: '/privacy-policy' });
  } else if (segments[0] === 'terms') {
    breadcrumbs.push({ label: 'Terms and Conditions', path: '/terms' });
  } else if (segments[0] === 'cookie-settings') {
    breadcrumbs.push({ label: 'Cookie Settings', path: '/cookie-settings' });
  }
  
  return breadcrumbs;
}

/**
 * Navigation items for header
 */
export const navigationItems = [
  { label: 'Home', path: routes.home.path },
  { label: 'Courses', path: routes.courses.path },
  { label: 'Resources', path: routes.resources.path },
  { label: 'Glossary', path: routes.glossary.path },
  { label: 'About', path: routes.about.path },
  { label: 'Contact', path: routes.contact.path },
] as const;

/**
 * Footer navigation sections
 */
export const footerNavigation = {
  courses: {
    title: 'Courses',
    links: [
      { label: 'All Courses', path: routes.courses.path },
      { label: 'Introduction to Photography', path: routes.introPhotography.path },
      { label: 'Film & Darkroom', path: routes.filmDarkroom.path },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Fact Sheets', path: routes.resources.path },
      { label: 'Glossary', path: routes.glossary.path },
    ],
  },
  about: {
    title: 'About',
    links: [
      { label: 'About Us', path: routes.about.path },
      { label: 'Contact', path: routes.contact.path },
      { label: 'Privacy Policy', path: routes.privacyPolicy.path },
      { label: 'Terms and Conditions', path: routes.terms.path },
    ],
  },
} as const;