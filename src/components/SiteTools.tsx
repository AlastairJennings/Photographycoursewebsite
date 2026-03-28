/**
 * Site Tools & Utilities
 * Admin page for accessing sitemaps and other site utilities
 */

import { Link } from 'react-router';
import { AlertCircle, Download } from 'lucide-react';
import { getSitemapContent } from '../utils/sitemap-generator';

export function SiteTools() {
  const baseUrl = 'https://thephotocourse.com';

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllSitemaps = () => {
    const sitemaps = [
      { name: 'sitemap.xml', type: 'index' as const },
      { name: 'sitemap-pages.xml', type: 'main' as const },
      { name: 'sitemap-courses.xml', type: 'courses' as const },
      { name: 'sitemap-resources.xml', type: 'resources' as const },
      { name: 'sitemap-reviews.xml', type: 'reviews' as const },
    ];

    sitemaps.forEach((sitemap, index) => {
      setTimeout(() => {
        const content = getSitemapContent(sitemap.type, baseUrl);
        downloadFile(sitemap.name, content);
      }, index * 200); // Stagger downloads
    });
  };

  const downloadRobotsTxt = () => {
    const robotsContent = `# robots.txt for The Photo Course
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay (optional, for slower bots)
Crawl-delay: 1`;
    
    downloadFile('robots.txt', robotsContent);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-8">
        <h1 className="mb-4">SEO Tools & Sitemap Management</h1>
        <p className="text-lg text-gray-600 mb-6">
          Download XML sitemaps and robots.txt for your hosting platform.
        </p>
        
        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Important: Figma Make Limitation</h3>
              <p className="text-amber-800 mb-3">
                Figma Make cannot serve XML sitemap files directly. To make your sitemaps work with search engines:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-amber-800 ml-4">
                <li>Download the XML files using the buttons below</li>
                <li>Upload them to your actual web hosting (Vercel, Netlify, cPanel, etc.)</li>
                <li>Verify they're accessible at thephotocourse.com/sitemap.xml</li>
                <li>Submit the sitemap URL to Google Search Console</li>
              </ol>
              <p className="text-amber-800 mt-3">
                <strong>Alternative:</strong> Use Google Search Console to submit individual URLs instead of a sitemap.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Download All Sitemaps</h3>
          <p className="text-gray-600 mb-4">
            Download all 5 XML sitemap files at once (sitemap.xml + 4 sub-sitemaps)
          </p>
          <button
            onClick={downloadAllSitemaps}
            className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download All Sitemaps
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Download robots.txt</h3>
          <p className="text-gray-600 mb-4">
            Download the robots.txt file to control search engine crawling
          </p>
          <button
            onClick={downloadRobotsTxt}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download robots.txt
          </button>
        </div>
      </div>

      {/* Individual Downloads */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Download Individual Sitemaps</h3>
        <div className="space-y-3">
          <button
            onClick={() => downloadFile('sitemap.xml', getSitemapContent('index', baseUrl))}
            className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded hover:bg-gray-200 transition text-left flex items-center justify-between"
          >
            <span><strong>sitemap.xml</strong> - Main sitemap index</span>
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => downloadFile('sitemap-pages.xml', getSitemapContent('main', baseUrl))}
            className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded hover:bg-gray-200 transition text-left flex items-center justify-between"
          >
            <span><strong>sitemap-pages.xml</strong> - Main navigation pages (8 URLs)</span>
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => downloadFile('sitemap-courses.xml', getSitemapContent('courses', baseUrl))}
            className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded hover:bg-gray-200 transition text-left flex items-center justify-between"
          >
            <span><strong>sitemap-courses.xml</strong> - Course pages (2 URLs)</span>
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => downloadFile('sitemap-resources.xml', getSitemapContent('resources', baseUrl))}
            className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded hover:bg-gray-200 transition text-left flex items-center justify-between"
          >
            <span><strong>sitemap-resources.xml</strong> - Resource pages (4 URLs)</span>
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => downloadFile('sitemap-reviews.xml', getSitemapContent('reviews', baseUrl))}
            className="w-full bg-gray-100 text-gray-900 px-4 py-3 rounded hover:bg-gray-200 transition text-left flex items-center justify-between"
          >
            <span><strong>sitemap-reviews.xml</strong> - Review guide pages (1 URL)</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Next Steps for SEO</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Option 1: Upload to Real Hosting</h4>
            <p>Upload the downloaded XML files to a proper web host (Vercel, Netlify, etc.) where they can be served with correct headers.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Option 2: Google Search Console Direct Submission</h4>
            <p>Skip sitemaps entirely and submit your important URLs directly in Google Search Console using the URL Inspection tool.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Option 3: Use Figma Make for Development Only</h4>
            <p>Use Figma Make for building and testing, then export and deploy to a production hosting platform for SEO.</p>
          </div>
        </div>
      </div>
    </div>
  );
}