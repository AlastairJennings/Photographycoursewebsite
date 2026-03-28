import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { ANALYTICS_CONFIG, setConsentStatus, getConsentStatus } from '../config/analytics';
import { Link } from 'react-router';

/**
 * GDPR-Compliant Cookie Consent Banner
 * 
 * Features:
 * - Full GDPR compliance with granular cookie controls
 * - Separate categories: Essential, Analytics, Marketing
 * - Clear explanations of each cookie type
 * - Accept All, Reject All, and Custom Settings
 * - Persistent storage of user preferences
 * - Privacy-first approach
 * - Non-intrusive positioning
 * - Accessibility compliant
 */

type ConsentPreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_STORAGE_KEY = 'photo-course-cookie-consent';
const PREFERENCES_STORAGE_KEY = 'photo-course-cookie-preferences';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem(CONSENT_STORAGE_KEY);
    
    if (!hasConsented) {
      // Delay showing banner slightly to avoid blocking initial render
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);
      if (savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences);
          setPreferences(parsed);
          // Apply saved analytics consent
          setConsentStatus(parsed.analytics);
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, []);

  const savePreferences = (prefs: ConsentPreferences) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'true');
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(prefs));
    setConsentStatus(prefs.analytics);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential: ConsentPreferences = {
      essential: true,
      analytics: false,
      marketing: false
    };
    savePreferences(onlyEssential);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
        onClick={() => !showSettings && setIsVisible(false)}
      />
      
      {/* Banner */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-200 pointer-events-auto overflow-hidden">
        {!showSettings ? (
          // Main Banner
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-violet-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 
                  id="cookie-consent-title"
                  className="text-xl sm:text-2xl tracking-tight text-gray-900 mb-2" 
                  style={{ fontFamily: 'Roslindale, Georgia, serif' }}
                >
                  Cookie Settings
                </h2>
                <p id="cookie-consent-description" className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We use cookies to enhance your experience on our site. Essential cookies are required for the site to function, while analytics cookies help us understand how you use our site so we can improve it.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg p-4 mb-6 border border-violet-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="font-semibold">Your Privacy Matters:</strong> We are committed to protecting your privacy and being transparent about our data practices. You have full control over your cookie preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 border-2 border-violet-600 text-violet-600 px-6 py-3 rounded-lg font-medium hover:bg-violet-50 transition-all inline-flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Customize
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By clicking "Accept All", you agree to the storing of cookies on your device.{' '}
              <Link to="/privacy-policy" className="text-violet-600 hover:text-violet-700 underline">
                Learn more in our Privacy Policy
              </Link>
            </p>
          </div>
        ) : (
          // Settings Panel
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-xl sm:text-2xl tracking-tight text-gray-900" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close settings"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Essential Cookies</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      These cookies are necessary for the website to function and cannot be disabled. They include cookies for security, site functionality, and accessibility features.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="px-3 py-1 bg-gray-300 text-gray-600 rounded-full text-xs font-medium">
                      Always Active
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-violet-200 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our content and user experience.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        preferences.analytics ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.analytics}
                      aria-label="Toggle analytics cookies"
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-violet-200 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      These cookies are used to track visitors across websites to display relevant advertisements. We currently do not use marketing cookies on this site.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        preferences.marketing ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                      role="switch"
                      aria-checked={preferences.marketing}
                      aria-label="Toggle marketing cookies"
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              You can change your cookie preferences at any time by accessing the cookie settings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}