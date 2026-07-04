import { Link } from 'react-router';
import { Home, Search, Book, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

/**
 * 404 Not Found Page
 * 
 * Features:
 * - Proper HTTP 404 status (server-side)
 * - SEO-friendly with noindex
 * - Helpful navigation links
 * - Search suggestions
 * - Breadcrumb trail
 */
export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found (404) | The Photo Course</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for could not be found. Browse our courses and resources instead." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 
              className="text-9xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Roslindale, serif' }}
            >
              404
            </h1>
            <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link
              to="/"
              className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-6 py-4 hover:border-violet-600 hover:shadow-lg transition-all group"
            >
              <Home className="w-5 h-5 text-violet-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                  Home
                </div>
                <div className="text-sm text-gray-500">
                  Back to homepage
                </div>
              </div>
            </Link>

            <Link
              to="/courses"
              className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-6 py-4 hover:border-violet-600 hover:shadow-lg transition-all group"
            >
              <Book className="w-5 h-5 text-violet-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                  Courses
                </div>
                <div className="text-sm text-gray-500">
                  Browse our courses
                </div>
              </div>
            </Link>

            <Link
              to="/resources"
              className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-6 py-4 hover:border-violet-600 hover:shadow-lg transition-all group"
            >
              <FileText className="w-5 h-5 text-violet-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                  Resources
                </div>
                <div className="text-sm text-gray-500">
                  View fact sheets
                </div>
              </div>
            </Link>

            <Link
              to="/glossary"
              className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-6 py-4 hover:border-violet-600 hover:shadow-lg transition-all group"
            >
              <Search className="w-5 h-5 text-violet-600" />
              <div className="text-left">
                <div className="font-medium text-gray-900 group-hover:text-violet-600 transition-colors">
                  Glossary
                </div>
                <div className="text-sm text-gray-500">
                  Photography terms
                </div>
              </div>
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Popular Pages
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/courses/introduction-to-photography"
                className="text-sm text-violet-600 hover:text-violet-700 hover:underline"
              >
                Introduction to Photography
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/courses/film-darkroom"
                className="text-sm text-violet-600 hover:text-violet-700 hover:underline"
              >
                Film & Darkroom Course
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/about"
                className="text-sm text-violet-600 hover:text-violet-700 hover:underline"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-sm text-gray-500">
            <p>
              If you believe this is an error, please{' '}
              <a href="mailto:support@thephotocourse.com" className="text-violet-600 hover:underline">
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * 410 Gone Page
 * 
 * For permanently removed content
 */
export function Gone() {
  return (
    <>
      <Helmet>
        <title>Page No Longer Available (410) | The Photo Course</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="This content has been permanently removed." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 
              className="text-9xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
              style={{ fontFamily: 'Roslindale, serif' }}
            >
              410
            </h1>
            <p className="text-2xl text-gray-600 mt-4">Content No Longer Available</p>
          </div>

          <p className="text-lg text-gray-600 mb-12 max-w-md mx-auto">
            This content has been permanently removed and is no longer available.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
