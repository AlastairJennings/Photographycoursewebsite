/**
 * Accessibility Utilities
 * 
 * Helpers for ensuring WCAG 2.1 AA compliance
 */

/**
 * Check color contrast ratio for accessibility
 * WCAG 2.1 requires:
 * - AA: 4.5:1 for normal text, 3:1 for large text
 * - AAA: 7:1 for normal text, 4.5:1 for large text
 */
export function getContrastRatio(color1: string, color2: string): number {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(color: string): number {
  const rgb = hexToRgb(color);
  if (!rgb) return 0;
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    const normalized = val / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Validate if contrast meets WCAG standards
 */
export function meetsContrastRequirement(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  
  if (level === 'AA') {
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
  } else {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
}

/**
 * Validate alt text quality
 * Returns array of warnings/issues
 */
export function validateAltText(alt: string | undefined, context?: string): string[] {
  const issues: string[] = [];
  
  // Missing alt text
  if (alt === undefined || alt === null) {
    issues.push('Alt text is required for accessibility and SEO');
    return issues;
  }
  
  // Empty alt text (acceptable for decorative images)
  if (alt === '') {
    if (context !== 'decorative') {
      issues.push('Empty alt text should only be used for decorative images');
    }
    return issues;
  }
  
  // Too short (likely not descriptive enough)
  if (alt.length < 5) {
    issues.push('Alt text is too short - be more descriptive');
  }
  
  // Too long (over 125 characters)
  if (alt.length > 125) {
    issues.push('Alt text is too long - aim for under 125 characters. Consider using a caption instead.');
  }
  
  // Starts with "image of", "picture of", etc.
  const redundantPhrases = ['image of', 'picture of', 'photo of', 'graphic of', 'screenshot of'];
  if (redundantPhrases.some(phrase => alt.toLowerCase().startsWith(phrase))) {
    issues.push('Avoid starting alt text with "image of" or similar phrases');
  }
  
  // Keyword stuffing (repeated words)
  const words = alt.toLowerCase().split(/\s+/);
  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const repeatedWords = Object.entries(wordCounts)
    .filter(([word, count]) => count > 2 && word.length > 3)
    .map(([word]) => word);
  
  if (repeatedWords.length > 0) {
    issues.push(`Possible keyword stuffing detected: "${repeatedWords.join('", "')}" appears multiple times`);
  }
  
  return issues;
}

/**
 * Generate accessible button/link props
 */
export function getAccessibleProps(
  label: string,
  options?: {
    disabled?: boolean;
    pressed?: boolean;
    expanded?: boolean;
    controls?: string;
    describedBy?: string;
  }
) {
  return {
    'aria-label': label,
    'aria-disabled': options?.disabled,
    'aria-pressed': options?.pressed,
    'aria-expanded': options?.expanded,
    'aria-controls': options?.controls,
    'aria-describedby': options?.describedBy,
    role: 'button',
    tabIndex: options?.disabled ? -1 : 0,
  };
}

/**
 * Keyboard navigation helper
 * Handles Enter and Space key for custom interactive elements
 */
export function handleKeyboardActivation(
  event: React.KeyboardEvent,
  callback: () => void
) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
}

/**
 * Focus trap for modals/dialogs
 */
export function setupFocusTrap(container: HTMLElement) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  container.addEventListener('keydown', handleTabKey);
  
  // Focus first element
  firstElement?.focus();
  
  // Cleanup
  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
}

/**
 * Skip to content link (for keyboard navigation)
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-violet-600 focus:text-white focus:rounded"
    >
      Skip to main content
    </a>
  );
}

/**
 * Screen reader only class
 * Add to tailwind.config.js or globals.css:
 * 
 * .sr-only {
 *   position: absolute;
 *   width: 1px;
 *   height: 1px;
 *   padding: 0;
 *   margin: -1px;
 *   overflow: hidden;
 *   clip: rect(0, 0, 0, 0);
 *   white-space: nowrap;
 *   border-width: 0;
 * }
 * 
 * .focus:not-sr-only:focus {
 *   position: static;
 *   width: auto;
 *   height: auto;
 *   padding: inherit;
 *   margin: inherit;
 *   overflow: visible;
 *   clip: auto;
 *   white-space: normal;
 * }
 */

/**
 * Validate form field accessibility
 */
export function validateFormField(field: {
  id?: string;
  label?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  required?: boolean;
}): string[] {
  const issues: string[] = [];
  
  // Must have either label or aria-label
  if (!field.label && !field.ariaLabel) {
    issues.push('Form field must have a label or aria-label');
  }
  
  // If label is present, field should have ID for proper association
  if (field.label && !field.id) {
    issues.push('Form field with label should have an ID for proper association');
  }
  
  // Required fields should be marked
  if (field.required && !field.ariaDescribedBy) {
    issues.push('Consider using aria-describedby to indicate required fields');
  }
  
  return issues;
}

/**
 * Common ARIA patterns
 */
export const ARIA_PATTERNS = {
  // Modal/Dialog
  modal: {
    role: 'dialog',
    'aria-modal': true,
    'aria-labelledby': 'dialog-title',
    'aria-describedby': 'dialog-description',
  },
  
  // Navigation
  navigation: {
    role: 'navigation',
    'aria-label': 'Main navigation',
  },
  
  // Search
  search: {
    role: 'search',
    'aria-label': 'Search',
  },
  
  // Tabs
  tabList: {
    role: 'tablist',
  },
  tab: (selected: boolean, controls: string) => ({
    role: 'tab',
    'aria-selected': selected,
    'aria-controls': controls,
    tabIndex: selected ? 0 : -1,
  }),
  tabPanel: (labelledBy: string) => ({
    role: 'tabpanel',
    'aria-labelledby': labelledBy,
    tabIndex: 0,
  }),
  
  // Accordion
  accordionButton: (expanded: boolean, controls: string) => ({
    'aria-expanded': expanded,
    'aria-controls': controls,
  }),
  
  // Live regions
  liveRegion: (politeness: 'polite' | 'assertive' = 'polite') => ({
    'aria-live': politeness,
    'aria-atomic': true,
  }),
};

/**
 * Image accessibility checklist
 */
export const IMAGE_A11Y_CHECKLIST = {
  required: [
    'Alt text provided',
    'Alt text is descriptive',
    'Alt text is concise (<125 chars)',
  ],
  recommended: [
    'Caption provided where context is needed',
    'Title attribute for additional context',
    'Decorative images have alt=""',
    'No text embedded in images (or provided in alt/caption)',
  ],
  seo: [
    'Keywords included naturally in alt text',
    'File name is descriptive',
    'Image is properly sized (not oversized)',
    'Responsive images with srcset',
    'Lazy loading for below-fold images',
  ],
};

/**
 * Color contrast checker for common site colors
 */
export const SITE_COLORS = {
  violet600: '#7c3aed',
  fuchsia600: '#c026d3',
  orange500: '#f97316',
  gray900: '#111827',
  gray600: '#4b5563',
  white: '#ffffff',
  black: '#000000',
};

/**
 * Test site color combinations
 */
export function testSiteContrast() {
  const results = [
    {
      name: 'Primary button (violet on white)',
      ratio: getContrastRatio(SITE_COLORS.white, SITE_COLORS.violet600),
      passes: meetsContrastRequirement(SITE_COLORS.white, SITE_COLORS.violet600),
    },
    {
      name: 'Body text (gray-900 on white)',
      ratio: getContrastRatio(SITE_COLORS.gray900, SITE_COLORS.white),
      passes: meetsContrastRequirement(SITE_COLORS.gray900, SITE_COLORS.white),
    },
    {
      name: 'Secondary text (gray-600 on white)',
      ratio: getContrastRatio(SITE_COLORS.gray600, SITE_COLORS.white),
      passes: meetsContrastRequirement(SITE_COLORS.gray600, SITE_COLORS.white),
    },
  ];
  
  return results;
}
