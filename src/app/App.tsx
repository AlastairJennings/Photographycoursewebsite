import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { initWebVitalsMonitoring } from './utils/web-vitals';
import { CookieConsent } from './components/CookieConsent';
import { RedirectHandler } from './components/RedirectHandler';
import { CMSToggleButton } from './components/CMSEditor';
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { SEO } from './components/SEO';
import { Breadcrumbs } from './components/Breadcrumbs';
import { getSEOKeyFromPath } from './config/routes';
import { getSEOConfig } from './config/seo-config';

// Lazy load heavy components to reduce initial bundle size and improve INP
const CourseModules = lazy(() => import('./components/CourseModules').then(m => ({ default: m.CourseModules })));
const FactSheets = lazy(() => import('./components/FactSheets').then(m => ({ default: m.FactSheets })));
const Glossary = lazy(() => import('./components/Glossary').then(m => ({ default: m.Glossary })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import('./components/Terms').then(m => ({ default: m.Terms })));
const CookieSettings = lazy(() => import('./components/CookieSettings').then(m => ({ default: m.CookieSettings })));
const IntroPhotographyCourse = lazy(() => import('./components/IntroPhotographyCourse').then(m => ({ default: m.IntroPhotographyCourse })));
const IntroPhotographyCourseOverview = lazy(() => import('./components/IntroPhotographyCourseOverview').then(m => ({ default: m.IntroPhotographyCourseOverview })));
const IntroPhotoWeek01 = lazy(() => import('./components/IntroPhotoWeek01').then(m => ({ default: m.IntroPhotoWeek01 })));
const IntroPhotoWeek02 = lazy(() => import('./components/IntroPhotoWeek02').then(m => ({ default: m.IntroPhotoWeek02 })));
const IntroPhotoWeek03 = lazy(() => import('./components/IntroPhotoWeek03').then(m => ({ default: m.IntroPhotoWeek03 })));
const IntroPhotoWeek04 = lazy(() => import('./components/IntroPhotoWeek04').then(m => ({ default: m.IntroPhotoWeek04 })));
const IntroPhotoWeek05 = lazy(() => import('./components/IntroPhotoWeek05').then(m => ({ default: m.IntroPhotoWeek05 })));
const IntroPhotoWeek06 = lazy(() => import('./components/IntroPhotoWeek06').then(m => ({ default: m.IntroPhotoWeek06 })));
const IntroPhotoWeek07 = lazy(() => import('./components/IntroPhotoWeek07').then(module => ({ default: module.IntroPhotoWeek07 })));
const IntroPhotoWeek08 = lazy(() => import('./components/IntroPhotoWeek08').then(m => ({ default: m.IntroPhotoWeek08 })));
const FilmDarkroomCourse = lazy(() => import('./components/FilmDarkroomCourseOverview').then(m => ({ default: m.FilmDarkroomCourseOverview })));
const FilmDarkroomWeek01 = lazy(() => import('./components/FilmDarkroomWeek01').then(m => ({ default: m.FilmDarkroomWeek01 })));
const FilmDarkroomWeek02 = lazy(() => import('./components/FilmDarkroomWeek02').then(m => ({ default: m.FilmDarkroomWeek02 })));
const FilmDarkroomWeek03 = lazy(() => import('./components/FilmDarkroomWeek03').then(m => ({ default: m.FilmDarkroomWeek03 })));
const FilmDarkroomWeek04 = lazy(() => import('./components/FilmDarkroomWeek04').then(m => ({ default: m.FilmDarkroomWeek04 })));
const FilmDarkroomWeek05 = lazy(() => import('./components/FilmDarkroomWeek05').then(m => ({ default: m.FilmDarkroomWeek05 })));
const FilmDarkroomWeek06 = lazy(() => import('./components/FilmDarkroomWeek06').then(m => ({ default: m.FilmDarkroomWeek06 })));
const ZoneSystem = lazy(() => import('./components/ZoneSystem').then(m => ({ default: m.ZoneSystem })));
const ExposureTriangle = lazy(() => import('./components/ExposureTriangle').then(m => ({ default: m.ExposureTriangle })));
const CompositionGuide = lazy(() => import('./components/CompositionGuide').then(m => ({ default: m.CompositionGuide })));
const LightingTechniques = lazy(() => import('./components/LightingTechniques').then(m => ({ default: m.LightingTechniques })));
const WhiteBalance = lazy(() => import('./components/WhiteBalance').then(m => ({ default: m.WhiteBalance })));
const HistogramGuide = lazy(() => import('./components/HistogramGuide').then(m => ({ default: m.HistogramGuide })));
const RawVsJpeg = lazy(() => import('./components/RawVsJpeg').then(m => ({ default: m.RawVsJpeg })));
const LensGuide = lazy(() => import('./components/LensGuide').then(m => ({ default: m.LensGuide })));
const FocusTechniques = lazy(() => import('./components/FocusTechniques').then(m => ({ default: m.FocusTechniques })));
const ColourTheory = lazy(() => import('./components/ColourTheory').then(m => ({ default: m.ColourTheory })));
const BlackWhiteConversion = lazy(() => import('./components/BlackWhiteConversion').then(m => ({ default: m.BlackWhiteConversion })));
const LongExposure = lazy(() => import('./components/LongExposure').then(m => ({ default: m.LongExposure })));
const FlashPhotography = lazy(() => import('./components/FlashPhotography').then(m => ({ default: m.FlashPhotography })));
const PostProcessing = lazy(() => import('./components/PostProcessing').then(m => ({ default: m.PostProcessing })));
const NotFound = lazy(() => import('./components/NotFound').then(m => ({ default: m.NotFound })));

// Review pages
const CameraReviews = lazy(() => import('./components/reviews/CameraReviews').then(m => ({ default: m.CameraReviews })));
const LensReviews = lazy(() => import('./components/reviews/LensReviews').then(m => ({ default: m.LensReviews })));
const TripodReviews = lazy(() => import('./components/reviews/TripodReviews').then(m => ({ default: m.TripodReviews })));
const FilterReviews = lazy(() => import('./components/reviews/FilterReviews').then(m => ({ default: m.FilterReviews })));
const FlashReviews = lazy(() => import('./components/reviews/FlashReviews').then(m => ({ default: m.FlashReviews })));
const ConstantLightReviews = lazy(() => import('./components/reviews/ConstantLightReviews').then(m => ({ default: m.ConstantLightReviews })));
const BagReviews = lazy(() => import('./components/reviews/BagReviews').then(m => ({ default: m.BagReviews })));
const AccessoryReviews = lazy(() => import('./components/reviews/AccessoryReviews').then(m => ({ default: m.AccessoryReviews })));

// Review guides
const TopMirrorlessCameras = lazy(() => import('./components/reviews/guides/TopMirrorlessCameras').then(m => ({ default: m.TopMirrorlessCameras })));

// Sitemap components
const SitemapXML = lazy(() => import('./components/SitemapXML').then(m => ({ default: m.SitemapXML })));
const SitemapDownloader = lazy(() => import('./components/SitemapXML').then(m => ({ default: m.SitemapDownloader })));
const SiteTools = lazy(() => import('./components/SiteTools').then(m => ({ default: m.SiteTools })));
const SitemapXMLResponse = lazy(() => import('./components/SitemapXMLResponse').then(m => ({ default: m.SitemapXMLResponse })));

// Loading fallback component with skeleton
const LoadingFallback = () => (
  <div 
    className="flex items-center justify-center min-h-[400px]" 
    style={{ 
      contain: 'layout style',
      minHeight: '400px' // Reserve space to prevent CLS
    }}
  >
    <div className="text-center">
      <div 
        className="inline-block w-8 h-8 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"
        style={{ 
          transform: 'translateZ(0)', // Hardware acceleration
          willChange: 'transform'
        }}
      />
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

/**
 * App Layout Component
 * Wraps all pages with common elements (Header, Footer, SEO, Breadcrumbs, Analytics)
 */
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Scroll to top on route change - deferred to avoid blocking INP
  useEffect(() => {
    // Defer scroll to next animation frame to avoid blocking interactions
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [location.pathname]);
  
  // Get SEO configuration based on current path
  const seoKey = getSEOKeyFromPath(location.pathname);
  const seoConfig = getSEOConfig(seoKey);

  return (
    <>
      {/* Performance Optimizations */}
      <PerformanceOptimizer />
      
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        canonical={seoConfig.canonical}
        noindex={seoConfig.noindex}
        nofollow={seoConfig.nofollow}
        ogTitle={seoConfig.ogTitle}
        ogDescription={seoConfig.ogDescription}
        ogImage={seoConfig.ogImage}
        ogUrl={seoConfig.ogUrl}
        ogType={seoConfig.ogType}
        twitterCard={seoConfig.twitterCard}
        twitterTitle={seoConfig.twitterTitle}
        twitterDescription={seoConfig.twitterDescription}
        twitterImage={seoConfig.twitterImage}
      />
      
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Breadcrumbs pathname={location.pathname} />
        
        <main 
          id="main-content" 
          className="flex-1" 
          style={{ 
            contain: 'layout',
            minHeight: '60vh' // Reserve space to prevent CLS
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </main>
        
        <Footer />
        
        {/* Cookie Consent Banner (if enabled) */}
        <CookieConsent />
      </div>
    </>
  );
};

AppLayout.displayName = 'AppLayout';

/**
 * Main App Component with Routing
 * 
 * URL Structure:
 * - / (home)
 * - /courses (course listing)
 * - /courses/introduction-to-photography (specific course)
 * - /courses/film-darkroom (specific course)
 * - /resources (fact sheets)
 * - /glossary (glossary)
 * - /about (about page)
 * 
 * All URLs are:
 * - Clean and human-readable
 * - Lowercase with hyphens
 * - Descriptive
 * - No query strings or hash routing
 */
function AppRoutes() {
  return (
    <Routes>
      {/* Home Page */}
      <Route 
        path="/" 
        element={
          <AppLayout>
            <Hero />
          </AppLayout>
        } 
      />
      
      {/* Courses Listing */}
      <Route 
        path="/courses" 
        element={
          <AppLayout>
            <CourseModules />
          </AppLayout>
        } 
      />
      
      {/* Individual Courses */}
      <Route 
        path="/courses/introduction-to-photography" 
        element={
          <AppLayout>
            <IntroPhotographyCourseOverview />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/full-content" 
        element={
          <AppLayout>
            <IntroPhotographyCourse />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-01" 
        element={
          <AppLayout>
            <IntroPhotoWeek01 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-02" 
        element={
          <AppLayout>
            <IntroPhotoWeek02 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-03" 
        element={
          <AppLayout>
            <IntroPhotoWeek03 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-04" 
        element={
          <AppLayout>
            <IntroPhotoWeek04 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-05" 
        element={
          <AppLayout>
            <IntroPhotoWeek05 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-06" 
        element={
          <AppLayout>
            <IntroPhotoWeek06 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-07" 
        element={
          <AppLayout>
            <IntroPhotoWeek07 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/introduction-to-photography/week-08" 
        element={
          <AppLayout>
            <IntroPhotoWeek08 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom" 
        element={
          <AppLayout>
            <FilmDarkroomCourse />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-01" 
        element={
          <AppLayout>
            <FilmDarkroomWeek01 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-02" 
        element={
          <AppLayout>
            <FilmDarkroomWeek02 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-03" 
        element={
          <AppLayout>
            <FilmDarkroomWeek03 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-04" 
        element={
          <AppLayout>
            <FilmDarkroomWeek04 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-05" 
        element={
          <AppLayout>
            <FilmDarkroomWeek05 />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/courses/film-darkroom/week-06" 
        element={
          <AppLayout>
            <FilmDarkroomWeek06 />
          </AppLayout>
        } 
      />
      
      {/* Resources */}
      <Route 
        path="/resources" 
        element={
          <AppLayout>
            <FactSheets />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/zone-system" 
        element={
          <AppLayout>
            <ZoneSystem />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/exposure-triangle" 
        element={
          <AppLayout>
            <ExposureTriangle />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/composition-guide" 
        element={
          <AppLayout>
            <CompositionGuide />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/lighting-techniques" 
        element={
          <AppLayout>
            <LightingTechniques />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/white-balance" 
        element={
          <AppLayout>
            <WhiteBalance />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/histogram-guide" 
        element={
          <AppLayout>
            <HistogramGuide />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/raw-vs-jpeg" 
        element={
          <AppLayout>
            <RawVsJpeg />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/lens-guide" 
        element={
          <AppLayout>
            <LensGuide />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/focus-techniques" 
        element={
          <AppLayout>
            <FocusTechniques />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/colour-theory" 
        element={
          <AppLayout>
            <ColourTheory />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/black-white-conversion" 
        element={
          <AppLayout>
            <BlackWhiteConversion />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/long-exposure" 
        element={
          <AppLayout>
            <LongExposure />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/flash-photography" 
        element={
          <AppLayout>
            <FlashPhotography />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/resources/post-processing" 
        element={
          <AppLayout>
            <PostProcessing />
          </AppLayout>
        } 
      />
      
      {/* Glossary */}
      <Route 
        path="/glossary" 
        element={
          <AppLayout>
            <Glossary />
          </AppLayout>
        } 
      />
      
      {/* About */}
      <Route 
        path="/about" 
        element={
          <AppLayout>
            <About />
          </AppLayout>
        } 
      />
      
      {/* Contact */}
      <Route 
        path="/contact" 
        element={
          <AppLayout>
            <Contact />
          </AppLayout>
        } 
      />
      
      {/* Privacy Policy */}
      <Route 
        path="/privacy-policy" 
        element={
          <AppLayout>
            <PrivacyPolicy />
          </AppLayout>
        } 
      />
      
      {/* Terms */}
      <Route 
        path="/terms" 
        element={
          <AppLayout>
            <Terms />
          </AppLayout>
        } 
      />
      
      {/* Cookie Settings */}
      <Route 
        path="/cookie-settings" 
        element={
          <AppLayout>
            <CookieSettings />
          </AppLayout>
        } 
      />
      
      {/* Review Pages */}
      <Route 
        path="/reviews/cameras" 
        element={
          <AppLayout>
            <CameraReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/lenses" 
        element={
          <AppLayout>
            <LensReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/tripods" 
        element={
          <AppLayout>
            <TripodReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/filters" 
        element={
          <AppLayout>
            <FilterReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/flash" 
        element={
          <AppLayout>
            <FlashReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/constant-light" 
        element={
          <AppLayout>
            <ConstantLightReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/bags" 
        element={
          <AppLayout>
            <BagReviews />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/reviews/accessories" 
        element={
          <AppLayout>
            <AccessoryReviews />
          </AppLayout>
        } 
      />
      
      {/* Review Guides */}
      <Route 
        path="/reviews/guides/top-mirrorless-cameras" 
        element={
          <AppLayout>
            <TopMirrorlessCameras />
          </AppLayout>
        } 
      />
      
      {/* Sitemap Admin Tools - only the downloader and tools pages, NOT the XML files */}
      <Route 
        path="/sitemap-downloader" 
        element={
          <AppLayout>
            <SitemapDownloader />
          </AppLayout>
        } 
      />
      
      <Route 
        path="/site-tools" 
        element={
          <AppLayout>
            <SiteTools />
          </AppLayout>
        } 
      />
      
      {/* XML Sitemap Routes - serve actual XML content */}
      <Route 
        path="/sitemap.xml" 
        element={<SitemapXMLResponse type="index" />} 
      />
      
      <Route 
        path="/sitemap-pages.xml" 
        element={<SitemapXMLResponse type="main" />} 
      />
      
      <Route 
        path="/sitemap-courses.xml" 
        element={<SitemapXMLResponse type="courses" />} 
      />
      
      <Route 
        path="/sitemap-resources.xml" 
        element={<SitemapXMLResponse type="resources" />} 
      />
      
      <Route 
        path="/sitemap-reviews.xml" 
        element={<SitemapXMLResponse type="reviews" />} 
      />
      
      {/* 404 - Could add a NotFound page */}
      <Route 
        path="*" 
        element={
          <AppLayout>
            <NotFound />
          </AppLayout>
        } 
      />
    </Routes>
  );
}

/**
 * Root App Component
 * Wraps everything in BrowserRouter and HelmetProvider
 */
export default function App() {
  // Initialize Web Vitals monitoring
  // TEMPORARILY DISABLED - the monitoring itself was contributing to INP issues
  // useEffect(() => {
  //   initWebVitalsMonitoring();
  // }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Handle redirects */}
        <RedirectHandler />
        
        {/* Main routes */}
        <AppRoutes />
        
        {/* CMS Editor toggle (development only) */}
        <CMSToggleButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}