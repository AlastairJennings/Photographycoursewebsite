/**
 * Responsive Design Configuration
 * 
 * Mobile-First Approach:
 * - Design for mobile first
 * - Progressive enhancement for larger screens
 * - Content parity across all devices
 * - No hidden content on mobile
 * - Crawlable navigation on all devices
 */

/**
 * Breakpoints (Mobile-First)
 * Based on Tailwind CSS v4 defaults
 */
export const BREAKPOINTS = {
  // Mobile-first: base styles apply to mobile (< 640px)
  sm: '640px',   // Large mobile / Small tablet
  md: '768px',   // Tablet
  lg: '1024px',  // Laptop
  xl: '1280px',  // Desktop
  '2xl': '1536px', // Large desktop
} as const;

/**
 * Viewport sizes for testing
 */
export const VIEWPORT_SIZES = {
  // Mobile
  mobileSmall: { width: 320, height: 568, name: 'iPhone SE' },
  mobileMedium: { width: 375, height: 667, name: 'iPhone 8' },
  mobileLarge: { width: 414, height: 896, name: 'iPhone 11 Pro Max' },
  
  // Tablet
  tabletPortrait: { width: 768, height: 1024, name: 'iPad Portrait' },
  tabletLandscape: { width: 1024, height: 768, name: 'iPad Landscape' },
  
  // Desktop
  laptop: { width: 1280, height: 800, name: 'Laptop' },
  desktop: { width: 1920, height: 1080, name: 'Desktop' },
  desktopLarge: { width: 2560, height: 1440, name: 'Large Desktop' },
} as const;

/**
 * Touch Target Sizes
 * WCAG 2.1 requires minimum 44x44px touch targets
 */
export const TOUCH_TARGETS = {
  minimum: 44, // px - WCAG 2.1 minimum
  recommended: 48, // px - Google Material Design
  comfortable: 56, // px - iOS Human Interface Guidelines
  
  // Spacing between touch targets
  minimumSpacing: 8, // px - minimum gap between buttons
  recommendedSpacing: 16, // px - comfortable spacing
} as const;

/**
 * Typography Scale (Responsive)
 * Different sizes for mobile vs desktop
 */
export const TYPOGRAPHY_SCALE = {
  // Mobile-first base sizes
  mobile: {
    h1: '2rem',     // 32px
    h2: '1.5rem',   // 24px
    h3: '1.25rem',  // 20px
    h4: '1.125rem', // 18px
    body: '1rem',   // 16px
    small: '0.875rem', // 14px
  },
  
  // Desktop enhanced sizes
  desktop: {
    h1: '3rem',     // 48px
    h2: '2.25rem',  // 36px
    h3: '1.875rem', // 30px
    h4: '1.5rem',   // 24px
    body: '1.125rem', // 18px
    small: '1rem',  // 16px
  },
} as const;

/**
 * Container Widths
 * Maximum content width at each breakpoint
 */
export const CONTAINER_WIDTHS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Spacing Scale (Mobile-First)
 */
export const SPACING_SCALE = {
  mobile: {
    section: '3rem',    // 48px - Vertical section spacing
    component: '2rem',  // 32px - Component spacing
    element: '1rem',    // 16px - Element spacing
    tight: '0.5rem',    // 8px - Tight spacing
  },
  desktop: {
    section: '6rem',    // 96px
    component: '4rem',  // 64px
    element: '2rem',    // 32px
    tight: '1rem',      // 16px
  },
} as const;

/**
 * Navigation Configuration
 */
export const NAVIGATION = {
  // Mobile navigation (hamburger menu)
  mobile: {
    breakpoint: 'lg', // Show mobile nav below lg (1024px)
    crawlable: true,  // Links must be in HTML, not JS-only
    closeOnNavigate: true,
  },
  
  // Desktop navigation (horizontal menu)
  desktop: {
    breakpoint: 'lg', // Show desktop nav at lg+ (1024px+)
    sticky: false,    // Not sticky by default
  },
  
  // Touch targets
  touchTarget: TOUCH_TARGETS.comfortable, // 56px
  
  // Z-index
  zIndex: 50,
} as const;

/**
 * Responsive Image Sizes
 * How images should scale at different breakpoints
 */
export const IMAGE_SIZES = {
  hero: {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '1920px',
  },
  card: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  },
  thumbnail: {
    mobile: '100px',
    tablet: '150px',
    desktop: '200px',
  },
} as const;

/**
 * Mobile-First Checklist
 */
export const MOBILE_FIRST_CHECKLIST = {
  contentParity: [
    'All content visible on mobile',
    'No "read more" hiding indexable text',
    'Same content across all devices',
    'No desktop-only features',
  ],
  
  responsiveness: [
    'Layout optimized for all breakpoints',
    'No horizontal overflow',
    'No layout breaking',
    'Touch-friendly buttons (44px minimum)',
  ],
  
  navigation: [
    'Mobile nav is crawlable (HTML links)',
    'No JS-only hidden links',
    'Hamburger menu renders links in DOM',
    'Clear navigation hierarchy',
  ],
  
  performance: [
    'Mobile-first image loading',
    'Appropriate image sizes per device',
    'No desktop-sized images on mobile',
    'Fast Time to Interactive on mobile',
  ],
  
  touchInteraction: [
    'Buttons min 44x44px',
    'Adequate spacing between elements',
    'No hover-only interactions',
    'Touch feedback on tap',
  ],
  
  avoidStickyElements: [
    'No sticky banners blocking content',
    'No cookie bars hiding headings',
    'No chat widgets interfering with UX',
    'Critical content always accessible',
  ],
} as const;

/**
 * Responsive Utility Classes
 * Common patterns for responsive design
 */
export const RESPONSIVE_PATTERNS = {
  // Hide/show at breakpoints
  hideOnMobile: 'hidden lg:block',
  showOnMobile: 'block lg:hidden',
  hideOnDesktop: 'block lg:hidden',
  showOnDesktop: 'hidden lg:block',
  
  // Flex direction
  stackOnMobile: 'flex flex-col lg:flex-row',
  stackOnDesktop: 'flex flex-row lg:flex-col',
  
  // Grid columns
  gridResponsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  
  // Text alignment
  centerOnMobile: 'text-center lg:text-left',
  
  // Spacing
  paddingResponsive: 'px-4 md:px-6 lg:px-8',
  marginResponsive: 'my-8 md:my-12 lg:my-16',
  
  // Container
  containerResponsive: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
} as const;

/**
 * Touch Interaction Guidelines
 */
export const TOUCH_GUIDELINES = {
  // Minimum touch target size
  minSize: '44px',
  
  // Recommended padding for touch targets
  touchPadding: 'px-4 py-3', // Minimum for 44px height
  
  // Spacing between touch targets
  spacing: 'gap-4', // 16px gap
  
  // Active states (important for touch feedback)
  activeState: 'active:scale-95 active:opacity-80',
  
  // No hover-only interactions
  hoverFallback: 'hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
} as const;

/**
 * Anti-Patterns to Avoid
 */
export const MOBILE_ANTI_PATTERNS = {
  avoid: [
    'Hidden content on mobile (SEO issue)',
    'Hover-only interactions (no touch equivalent)',
    'Small touch targets (< 44px)',
    'Horizontal overflow/scrolling',
    'Desktop-only features',
    'Sticky elements blocking content',
    'Hamburger menus with JS-only links',
    'Different content on mobile vs desktop',
    'Unresponsive images',
    'Fixed-width layouts',
  ],
  
  replace: {
    'Hover-only dropdown': 'Click/tap to open dropdown',
    'Desktop-only sidebar': 'Collapsible mobile sidebar',
    'Small buttons': 'Touch-friendly buttons (44px min)',
    'Sticky header': 'Auto-hiding header or normal header',
    'Read more button': 'Show full text, use CSS for truncation only',
    'JS-only nav': 'HTML links with JS enhancement',
  },
} as const;

/**
 * Get viewport size category
 */
export function getViewportCategory(width: number): 'mobile' | 'tablet' | 'desktop' {
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Check if touch device
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Get responsive image sizes string
 */
export function getResponsiveImageSizes(type: 'hero' | 'card' | 'thumbnail'): string {
  const sizes = IMAGE_SIZES[type];
  return `(max-width: 768px) ${sizes.mobile}, (max-width: 1024px) ${sizes.tablet}, ${sizes.desktop}`;
}

/**
 * Validate touch target size
 */
export function isTouchTargetValid(width: number, height: number): boolean {
  return width >= TOUCH_TARGETS.minimum && height >= TOUCH_TARGETS.minimum;
}

/**
 * Get recommended spacing for viewport
 */
export function getRecommendedSpacing(viewport: 'mobile' | 'desktop'): typeof SPACING_SCALE.mobile {
  return SPACING_SCALE[viewport];
}
