import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Cookie, Shield, Settings as SettingsIcon, RefreshCcw, Check } from 'lucide-react';
import { setConsentStatus } from '../config/analytics';

type ConsentPreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_STORAGE_KEY = 'photo-course-cookie-consent';
const PREFERENCES_STORAGE_KEY = 'photo-course-cookie-preferences';

export function CookieSettings() {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);
    const consentGiven = localStorage.getItem(CONSENT_STORAGE_KEY);
    
    setHasConsent(!!consentGiven);
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'true');
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
    setConsentStatus(preferences.analytics);
    setHasConsent(true);
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetAndShowBanner = () => {
    // Clear cookie consent to show banner again
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    localStorage.removeItem(PREFERENCES_STORAGE_KEY);
    window.location.reload();
  };

  return (
    <section className="bg-white">
      <Helmet>
        <title>Cookie Settings - The Photo Course</title>
        <meta name="description" content="Manage your cookie preferences for The Photo Course. Control which cookies we use and learn about how we protect your privacy." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50" style={{ minHeight: '300px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                <SettingsIcon className="w-6 h-6 text-violet-600" />
              </div>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                Cookie Settings
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Control your cookie preferences and manage how we use cookies on The Photo Course.
            </p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="border-t border-gray-200 bg-green-50 border-b border-green-200">
          <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-16 py-4">
            <div className="flex items-center gap-3 text-green-800">
              <Check className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">Your cookie preferences have been saved successfully!</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg p-6 border border-violet-200 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Privacy Matters</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We respect your privacy and give you full control over your cookie preferences. You can customize which cookies we use and change your settings at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                What are Cookies?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and provide a better user experience.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We use different types of cookies on The Photo Course, and you have control over which ones we can use. Learn more about each category below and adjust your preferences.
              </p>
            </div>
          </div>

          {/* Current Status */}
          {hasConsent && (
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Current Status:</strong> Your cookie preferences have been set. Last updated: {new Date(localStorage.getItem(CONSENT_STORAGE_KEY) || '').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) || 'Not set'}
              </p>
            </div>
          )}

          {/* Cookie Preferences Panel */}
          <div className="mb-12">
            <h2 
              className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Manage Your Preferences
            </h2>

            <div className="space-y-4 mb-8">
              {/* Essential Cookies */}
              <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Cookie className="w-5 h-5 text-gray-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="px-3 py-1 bg-gray-300 text-gray-600 rounded-full text-xs font-medium">
                      Always Active
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  These cookies are necessary for the website to function and cannot be disabled. They include cookies for security, site functionality, and accessibility features.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Examples:</strong> Session cookies, security tokens, accessibility settings
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className={`border-2 rounded-lg p-6 transition-all ${
                preferences.analytics 
                  ? 'border-violet-300 bg-violet-50' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Cookie className={`w-5 h-5 ${preferences.analytics ? 'text-violet-600' : 'text-gray-600'}`} />
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-14 h-7 rounded-full transition-colors relative ${
                        preferences.analytics ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.analytics}
                      aria-label="Toggle analytics cookies"
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform shadow-sm ${
                          preferences.analytics ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our content and user experience.
                </p>
                <div className="text-xs text-gray-600">
                  <strong>Examples:</strong> Google Analytics, page views, time on site, user journey tracking
                </div>
                {preferences.analytics && (
                  <div className="mt-3 pt-3 border-t border-violet-200">
                    <p className="text-xs text-violet-700 font-medium">
                      ✓ Analytics cookies are enabled
                    </p>
                  </div>
                )}
              </div>

              {/* Marketing Cookies */}
              <div className={`border-2 rounded-lg p-6 transition-all ${
                preferences.marketing 
                  ? 'border-violet-300 bg-violet-50' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Cookie className={`w-5 h-5 ${preferences.marketing ? 'text-violet-600' : 'text-gray-600'}`} />
                      <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-14 h-7 rounded-full transition-colors relative ${
                        preferences.marketing ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.marketing}
                      aria-label="Toggle marketing cookies"
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform shadow-sm ${
                          preferences.marketing ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  These cookies are used to track visitors across websites to display relevant advertisements. We currently do not use marketing cookies on this site.
                </p>
                <div className="text-xs text-gray-600">
                  <strong>Examples:</strong> Retargeting cookies, social media pixels, advertising tracking
                </div>
                {preferences.marketing && (
                  <div className="mt-3 pt-3 border-t border-violet-200">
                    <p className="text-xs text-violet-700 font-medium">
                      ✓ Marketing cookies are enabled
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={savePreferences}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-xl"
              >
                Save Preferences
              </button>
              <button
                onClick={resetAndShowBanner}
                className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-5 h-5" />
                Reset & Review Settings
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Clicking "Reset & Review Settings" will clear your current preferences and show the cookie consent banner again.
            </p>
          </div>

          {/* Additional Information */}
          <div className="mb-12">
            <h2 
              className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-6" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Additional Information
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How Long Do Cookies Last?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cookies can be either "session" cookies or "persistent" cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some cookies are set by third-party services that appear on our pages. We do not control these cookies, and you should check the third-party websites for more information about these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies in Your Browser</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You can also control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>See what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Please note that if you block all cookies, some features of our website may not work properly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to Cookie Settings</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can change your cookie preferences at any time by revisiting this page. Your choices will be saved and applied immediately across the site.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg p-6 border border-violet-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Information</h3>
            <div className="space-y-3">
              <div>
                <Link 
                  to="/privacy-policy" 
                  className="text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4" />
                  <span className="underline">Privacy Policy</span>
                </Link>
                <p className="text-sm text-gray-600 mt-1 ml-6">
                  Learn how we collect, use, and protect your personal data
                </p>
              </div>
              <div>
                <Link 
                  to="/terms" 
                  className="text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-2 group"
                >
                  <Cookie className="w-4 h-4" />
                  <span className="underline">Terms and Conditions</span>
                </Link>
                <p className="text-sm text-gray-600 mt-1 ml-6">
                  Read our terms of use and policies
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
