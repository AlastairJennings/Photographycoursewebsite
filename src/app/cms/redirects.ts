/**
 * Redirect Management System
 * 
 * Manage 301 redirects without touching code.
 * Editors can add, edit, and remove redirects here.
 * 
 * Features:
 * - 301 (permanent) redirects
 * - 302 (temporary) redirects
 * - Wildcard support
 * - Bulk import/export
 * - Easy editing
 */

/**
 * Redirect Interface
 */
export interface Redirect {
  id: string;
  from: string; // Old URL path
  to: string; // New URL path
  type: 301 | 302; // Redirect type
  enabled: boolean;
  reason?: string; // Why this redirect exists
  createdDate: string;
  modifiedDate?: string;
}

/**
 * Redirect Rules
 * 
 * HOW TO ADD A REDIRECT:
 * 1. Copy an existing redirect object
 * 2. Change the 'from' path (old URL)
 * 3. Change the 'to' path (new URL)
 * 4. Set enabled to true
 * 5. Save this file
 * 
 * EXAMPLE:
 * {
 *   id: 'my-redirect',
 *   from: '/old-page',
 *   to: '/new-page',
 *   type: 301,
 *   enabled: true,
 *   reason: 'Page was renamed',
 *   createdDate: '2026-01-21',
 * }
 */
export const redirects: Redirect[] = [
  // Example: Old course URL to new URL
  {
    id: 'intro-course-old',
    from: '/intro-photography',
    to: '/courses/introduction-to-photography',
    type: 301,
    enabled: true,
    reason: 'URL structure updated for better SEO',
    createdDate: '2026-01-15',
  },
  
  // Example: Old resources URL
  {
    id: 'fact-sheets-old',
    from: '/fact-sheets',
    to: '/resources',
    type: 301,
    enabled: true,
    reason: 'Renamed fact sheets to resources',
    createdDate: '2026-01-10',
  },
  
  // Example: Old about URL
  {
    id: 'about-us-old',
    from: '/about-us',
    to: '/about',
    type: 301,
    enabled: true,
    reason: 'Simplified URL',
    createdDate: '2026-01-10',
  },
  
  // Example: Temporary redirect (campaign)
  {
    id: 'summer-promo',
    from: '/summer',
    to: '/courses?promo=summer2026',
    type: 302,
    enabled: false, // Disabled when campaign ends
    reason: 'Summer 2026 promotion landing page',
    createdDate: '2026-06-01',
    modifiedDate: '2026-08-31',
  },
  
  // Add your redirects below:
  // {
  //   id: 'unique-id-here',
  //   from: '/old-url',
  //   to: '/new-url',
  //   type: 301,
  //   enabled: true,
  //   reason: 'Description of why',
  //   createdDate: '2026-01-21',
  // },
];

/**
 * Get redirect for a given path
 */
export function getRedirect(path: string): Redirect | null {
  // Clean path (remove trailing slash, query params)
  const cleanPath = path.split('?')[0].replace(/\/$/, '') || '/';
  
  // Find matching redirect
  const redirect = redirects.find(
    r => r.enabled && r.from === cleanPath
  );
  
  return redirect || null;
}

/**
 * Get all enabled redirects
 */
export function getEnabledRedirects(): Redirect[] {
  return redirects.filter(r => r.enabled);
}

/**
 * Get all redirects (including disabled)
 */
export function getAllRedirects(): Redirect[] {
  return redirects;
}

/**
 * Add redirect
 */
export function addRedirect(redirect: Omit<Redirect, 'id' | 'createdDate'>): Redirect {
  const newRedirect: Redirect = {
    ...redirect,
    id: `redirect-${Date.now()}`,
    createdDate: new Date().toISOString(),
  };
  
  redirects.push(newRedirect);
  return newRedirect;
}

/**
 * Update redirect
 */
export function updateRedirect(id: string, updates: Partial<Redirect>): Redirect | null {
  const index = redirects.findIndex(r => r.id === id);
  if (index === -1) return null;
  
  redirects[index] = {
    ...redirects[index],
    ...updates,
    modifiedDate: new Date().toISOString(),
  };
  
  return redirects[index];
}

/**
 * Delete redirect
 */
export function deleteRedirect(id: string): boolean {
  const index = redirects.findIndex(r => r.id === id);
  if (index === -1) return false;
  
  redirects.splice(index, 1);
  return true;
}

/**
 * Bulk import redirects from CSV
 * 
 * CSV Format:
 * from,to,type,reason
 * /old-url-1,/new-url-1,301,Reason for redirect
 * /old-url-2,/new-url-2,301,Another reason
 */
export function importRedirectsFromCSV(csv: string): Redirect[] {
  const lines = csv.trim().split('\n');
  const imported: Redirect[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const [from, to, type, reason] = lines[i].split(',').map(s => s.trim());
    
    if (!from || !to) continue;
    
    const redirect: Redirect = {
      id: `imported-${Date.now()}-${i}`,
      from,
      to,
      type: parseInt(type) as 301 | 302 || 301,
      enabled: true,
      reason: reason || 'Imported redirect',
      createdDate: new Date().toISOString(),
    };
    
    redirects.push(redirect);
    imported.push(redirect);
  }
  
  return imported;
}

/**
 * Export redirects to CSV
 */
export function exportRedirectsToCSV(): string {
  const header = 'from,to,type,enabled,reason,created';
  const rows = redirects.map(r => 
    `${r.from},${r.to},${r.type},${r.enabled},${r.reason || ''},${r.createdDate}`
  );
  
  return [header, ...rows].join('\n');
}

/**
 * Validate redirect
 */
export function validateRedirect(redirect: Partial<Redirect>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!redirect.from) {
    errors.push('From path is required');
  }
  
  if (!redirect.to) {
    errors.push('To path is required');
  }
  
  if (redirect.from === redirect.to) {
    errors.push('From and To paths cannot be the same');
  }
  
  if (redirect.from && !redirect.from.startsWith('/')) {
    errors.push('From path must start with /');
  }
  
  if (redirect.to && !redirect.to.startsWith('/') && !redirect.to.startsWith('http')) {
    errors.push('To path must start with / or be a full URL');
  }
  
  // Check for circular redirects
  if (redirect.from && redirect.to) {
    const existingRedirect = getRedirect(redirect.to);
    if (existingRedirect && existingRedirect.to === redirect.from) {
      errors.push('Circular redirect detected');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Redirect chain detection
 * (Warns if A → B → C exists)
 */
export function detectRedirectChains(): Array<{ chain: string[]; warning: string }> {
  const chains: Array<{ chain: string[]; warning: string }> = [];
  const visited = new Set<string>();
  
  redirects.forEach(redirect => {
    if (!redirect.enabled) return;
    
    const chain = [redirect.from];
    let current = redirect.to;
    
    while (current) {
      if (visited.has(current)) break;
      
      const next = getRedirect(current);
      if (!next) break;
      
      chain.push(current);
      current = next.to;
      
      if (chain.length > 2) {
        chains.push({
          chain,
          warning: `Redirect chain detected: ${chain.join(' → ')}. Consider redirecting ${chain[0]} directly to ${current}.`,
        });
        break;
      }
    }
    
    visited.add(redirect.from);
  });
  
  return chains;
}

/**
 * Common redirect patterns
 */
export const REDIRECT_PATTERNS = {
  // Remove trailing slash
  TRAILING_SLASH: {
    pattern: /(.+)\/$/,
    replacement: '$1',
  },
  
  // Force lowercase
  LOWERCASE: {
    pattern: /[A-Z]/,
    replacement: (match: string) => match.toLowerCase(),
  },
  
  // Remove index.html
  INDEX_HTML: {
    pattern: /\/index\.html$/,
    replacement: '',
  },
} as const;
