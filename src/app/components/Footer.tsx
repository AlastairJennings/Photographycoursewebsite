import { Link } from 'react-router';
import { Logo } from './Logo';
import { footerNavigation, routes } from '../config/routes';

/**
 * Footer Component
 * 
 * Features:
 * - Crawlable HTML navigation links
 * - Internal linking to key pages
 * - Organized sections for better UX and SEO
 * - Social media links
 * - No orphaned pages (all pages linked)
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 sm:mt-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6 group">
              <Logo className="w-8 h-8 brightness-200 group-hover:brightness-150 transition-all" />
              <span className="text-white tracking-tight group-hover:text-gray-300 transition-colors">The Photo Course</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Learn professional photography from industry experts. Master your craft with comprehensive courses and resources.
            </p>
          </div>

          {/* Courses Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
              {footerNavigation.courses.title}
            </h3>
            <nav aria-label="Footer courses navigation">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {footerNavigation.courses.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
              {footerNavigation.resources.title}
            </h3>
            <nav aria-label="Footer resources navigation">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {footerNavigation.resources.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
              {footerNavigation.about.title}
            </h3>
            <nav aria-label="Footer about navigation">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                {footerNavigation.about.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">Follow</h3>
            <nav aria-label="Footer social media links">
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm">&copy; 2026 The Photo Course. All rights reserved.</p>
          <nav aria-label="Footer legal navigation">
            <ul className="flex gap-6 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/cookie-settings" className="hover:text-white transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}