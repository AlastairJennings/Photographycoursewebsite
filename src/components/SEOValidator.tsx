/**
 * SEO Validator Component
 * 
 * Development tool to validate SEO configurations
 * Only use in development - remove or disable in production
 */

import { useState, useEffect } from 'react';
import { validateSEOConfigs, pageSEOConfigs } from '../config/seo-config';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function SEOValidator() {
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Run validation on mount
    const result = validateSEOConfigs();
    setValidation(result);
  }, []);

  if (!validation || !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-violet-700 transition-colors text-sm z-50"
      >
        Validate SEO
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-200 rounded-lg shadow-2xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto z-50">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          {validation.valid ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-600" />
              SEO Validation Passed
            </>
          ) : (
            <>
              <AlertCircle className="w-6 h-6 text-orange-600" />
              SEO Validation Issues
            </>
          )}
        </h2>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-900"
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>

      {validation.valid ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium mb-2">✅ All SEO configurations are valid!</p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>✓ All titles are 30-60 characters</li>
            <li>✓ All descriptions are 120-160 characters</li>
            <li>✓ No duplicate titles found</li>
            <li>✓ No duplicate descriptions found</li>
            <li>✓ No duplicate canonical URLs found</li>
          </ul>
        </div>
      ) : (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-orange-800 font-medium mb-3">⚠️ Issues Found:</p>
          <ul className="space-y-2">
            {validation.errors.map((error, index) => (
              <li key={index} className="text-sm text-orange-700 flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">•</span>
                <span>{error}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Page Summary</h3>
        <div className="space-y-2">
          {Object.entries(pageSEOConfigs).map(([key, config]) => {
            const titleLength = config.title.length;
            const descLength = config.description.length;
            const titleValid = titleLength >= 30 && titleLength <= 60;
            const descValid = descLength >= 120 && descLength <= 160;

            return (
              <div key={key} className="bg-gray-50 rounded p-3 text-sm">
                <div className="font-medium text-gray-900 mb-1">{key}</div>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className={titleValid ? 'text-green-600' : 'text-orange-600'}>
                    Title: {titleLength} chars {titleValid ? '✓' : '⚠️'}
                  </span>
                  <span className={descValid ? 'text-green-600' : 'text-orange-600'}>
                    Desc: {descLength} chars {descValid ? '✓' : '⚠️'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Tip:</strong> Edit SEO configurations in{' '}
          <code className="bg-gray-100 px-2 py-1 rounded text-xs">/config/seo-config.ts</code>
        </p>
        <p className="text-xs text-gray-500">
          Remove this component before deploying to production.
        </p>
      </div>
    </div>
  );
}

/**
 * SEO Debug Panel
 * Shows current page's SEO metadata
 */
export function SEODebugPanel({ pageKey }: { pageKey: string }) {
  const [isVisible, setIsVisible] = useState(false);
  
  const config = pageSEOConfigs[pageKey];

  if (!config) return null;

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-sm z-50"
      >
        Show SEO Data
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 bg-white border-2 border-blue-200 rounded-lg shadow-2xl p-6 max-w-2xl max-h-[70vh] overflow-y-auto z-50">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Current Page SEO</h2>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-900"
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-gray-600 font-medium mb-1">Page Key</p>
          <p className="bg-gray-50 p-2 rounded font-mono">{pageKey}</p>
        </div>

        <div>
          <p className="text-gray-600 font-medium mb-1">Title ({config.title.length} chars)</p>
          <p className="bg-gray-50 p-2 rounded">{config.title}</p>
        </div>

        <div>
          <p className="text-gray-600 font-medium mb-1">Description ({config.description.length} chars)</p>
          <p className="bg-gray-50 p-2 rounded">{config.description}</p>
        </div>

        <div>
          <p className="text-gray-600 font-medium mb-1">Canonical URL</p>
          <p className="bg-gray-50 p-2 rounded font-mono text-xs break-all">{config.canonical}</p>
        </div>

        <div className="flex gap-4">
          <div>
            <p className="text-gray-600 font-medium mb-1">Index</p>
            <p className={`px-3 py-1 rounded inline-block ${config.noindex ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {config.noindex ? 'noindex' : 'index'}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium mb-1">Follow</p>
            <p className={`px-3 py-1 rounded inline-block ${config.nofollow ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {config.nofollow ? 'nofollow' : 'follow'}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-600 font-medium mb-2">Open Graph</p>
          <div className="space-y-2 bg-gray-50 p-3 rounded">
            <p><span className="text-gray-600">og:title:</span> {config.ogTitle || config.title}</p>
            <p><span className="text-gray-600">og:description:</span> {config.ogDescription || config.description}</p>
            <p className="text-xs break-all"><span className="text-gray-600">og:image:</span> {config.ogImage || 'Using default'}</p>
            <p className="text-xs"><span className="text-gray-600">og:type:</span> {config.ogType || 'website'}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-600 font-medium mb-2">Twitter Card</p>
          <div className="space-y-2 bg-gray-50 p-3 rounded">
            <p><span className="text-gray-600">twitter:card:</span> {config.twitterCard || 'summary_large_image'}</p>
            <p><span className="text-gray-600">twitter:title:</span> {config.twitterTitle || config.ogTitle || config.title}</p>
            <p><span className="text-gray-600">twitter:description:</span> {config.twitterDescription || config.ogDescription || config.description}</p>
            <p className="text-xs break-all"><span className="text-gray-600">twitter:image:</span> {config.twitterImage || config.ogImage || 'Using default'}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Remove this component before deploying to production.
        </p>
      </div>
    </div>
  );
}
