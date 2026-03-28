import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getRedirect } from '../cms/redirects';

/**
 * Redirect Handler Component
 * 
 * Automatically handles 301/302 redirects based on configuration
 * 
 * Features:
 * - Automatic redirect detection
 * - 301 and 302 support
 * - Clean URL handling
 * - SEO-friendly
 */
export function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if current path has a redirect
    const redirect = getRedirect(location.pathname);
    
    if (redirect) {
      // Perform redirect
      if (redirect.to.startsWith('http')) {
        // External redirect
        window.location.href = redirect.to;
      } else {
        // Internal redirect
        navigate(redirect.to, { replace: redirect.type === 301 });
      }
    }
  }, [location.pathname, navigate]);

  return null; // This component doesn't render anything
}

/**
 * Example Usage:
 * 
 * import { RedirectHandler } from './components/RedirectHandler';
 * 
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <RedirectHandler />
 *       <Routes>
 *         ...
 *       </Routes>
 *     </BrowserRouter>
 *   );
 * }
 */
