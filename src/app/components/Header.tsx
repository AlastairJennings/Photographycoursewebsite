import { Instagram, Twitter, Youtube, Facebook, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { navigationItems } from '../config/routes';

/**
 * Header Component
 * 
 * Features:
 * - Mobile-first design
 * - Crawlable HTML navigation links (not JS-only)
 * - Active state based on current URL
 * - Responsive mobile menu
 * - Social media links
 * - Touch-friendly buttons (min 44px)
 * - No sticky elements blocking content (optional sticky)
 * - All links in DOM (SEO-friendly)
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine if a nav item is active based on current path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="border-b border-gray-200 bg-white" style={{ contain: 'layout' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top bar with logo and mobile menu */}
        <div className="flex justify-between items-center" style={{ height: '80px' }}>
          <Link 
            to="/"
            className="group"
            aria-label="The Photo Course - Home"
          >
            <span className="text-xl sm:text-2xl lg:text-4xl tracking-tight bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Roslindale, serif', fontWeight: 600, display: 'block', minHeight: '40px' }}>
              ThePhotoCourse
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Social Media Icons - Desktop only */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-2" 
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-2" 
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-2" 
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-2" 
                aria-label="Like us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Desktop CTA and Search */}
            <Link
              to="/courses"
              className="hidden sm:inline-flex bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 sm:px-6 py-3 min-h-[44px] hover:from-violet-700 hover:to-fuchsia-700 focus:from-violet-700 focus:to-fuchsia-700 active:from-violet-800 active:to-fuchsia-800 transition-all text-sm items-center justify-center"
            >
              Enroll
            </Link>

            <button 
              className="hidden sm:block text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu button - Touch-friendly 44x44px minimum */}
            <button 
              className="lg:hidden text-gray-900 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation - Crawlable HTML Links */}
        <nav className="hidden lg:flex justify-end gap-8 py-1.5 border-t border-gray-100" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wide transition-colors py-2 px-3 min-h-[44px] flex items-center ${
                isActive(item.path)
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900 focus:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation - Crawlable HTML Links (Always in DOM) */}
      <nav 
        id="mobile-navigation"
        className={`lg:hidden border-t border-gray-100 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        aria-label="Mobile navigation"
      >
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          {/* Navigation Links - Touch-friendly spacing */}
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 text-base min-h-[44px] transition-colors active:bg-gray-100 ${
                isActive(item.path)
                  ? 'text-gray-900 bg-gray-50 font-medium'
                  : 'text-gray-600 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-50 focus:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile CTA and Search */}
          <div className="border-t border-gray-100 mt-4 pt-4 space-y-3">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 min-h-[44px] hover:from-violet-700 hover:to-fuchsia-700 focus:from-violet-700 focus:to-fuchsia-700 active:from-violet-800 active:to-fuchsia-800 transition-all text-sm flex items-center justify-center"
            >
              Enroll
            </Link>
            <button className="w-full border border-gray-300 text-gray-700 py-3 min-h-[44px] hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-100 transition-colors text-sm flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
          
          {/* Social Media Links on Mobile */}
          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 transition-colors p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              aria-label="Like us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}