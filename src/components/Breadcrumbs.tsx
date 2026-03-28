import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { getBreadcrumbs } from '../config/routes';

interface BreadcrumbsProps {
  pathname: string;
}

/**
 * Breadcrumbs Component
 * 
 * Provides hierarchical navigation and helps both:
 * - Users understand their location in the site
 * - Search engines understand site structure
 * 
 * Features:
 * - Automatic breadcrumb generation from URL
 * - Proper HTML links (crawlable)
 * - Schema.org markup ready
 * - Responsive design
 */
export function Breadcrumbs({ pathname }: BreadcrumbsProps) {
  const breadcrumbs = getBreadcrumbs(pathname);
  
  // Don't show breadcrumbs on home page or if only one item
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 border-b border-gray-200"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
                
                {isLast ? (
                  <span 
                    className="text-gray-900 font-medium"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/**
 * Breadcrumbs with Schema.org structured data
 * For enhanced search engine understanding
 */
export function BreadcrumbsWithSchema({ pathname }: BreadcrumbsProps) {
  const breadcrumbs = getBreadcrumbs(pathname);
  
  if (breadcrumbs.length <= 1) {
    return null;
  }
  
  // Generate JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.label,
      'item': `${window.location.origin}${crumb.path}`
    }))
  };
  
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs pathname={pathname} />
    </>
  );
}