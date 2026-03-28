/**
 * Analytics Utilities
 * 
 * Functions for tracking events and user behavior
 */

import { ANALYTICS_CONFIG, EVENT_TYPES, isAnalyticsEnabled, isDebugMode, getConsentStatus } from '../config/analytics';

/**
 * Track page view
 */
export function trackPageView(path: string, title: string): void {
  if (!isAnalyticsEnabled() || !getConsentStatus()) return;
  
  try {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title,
      });
    }
    
    if (isDebugMode()) {
      console.log('📊 Page View:', { path, title });
    }
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

/**
 * Track custom event
 */
export interface TrackEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export function trackEvent(params: TrackEventParams): void {
  if (!isAnalyticsEnabled() || !getConsentStatus()) return;
  
  try {
    const { action, category, label, value, ...rest } = params;
    
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest,
      });
    }
    
    if (isDebugMode()) {
      console.log('📊 Event:', params);
    }
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

/**
 * Track course view
 */
export function trackCourseView(courseName: string, courseId: string): void {
  trackEvent({
    action: EVENT_TYPES.COURSE_VIEW,
    category: 'course',
    label: courseName,
    course_id: courseId,
    course_name: courseName,
  });
}

/**
 * Track course enrollment
 */
export function trackCourseEnroll(courseName: string, courseId: string): void {
  trackEvent({
    action: EVENT_TYPES.COURSE_ENROLL,
    category: 'conversion',
    label: courseName,
    course_id: courseId,
    course_name: courseName,
  });
}

/**
 * Track lesson start
 */
export function trackLessonStart(
  lessonName: string,
  lessonId: string,
  courseName: string
): void {
  trackEvent({
    action: EVENT_TYPES.LESSON_START,
    category: 'course',
    label: lessonName,
    lesson_id: lessonId,
    lesson_name: lessonName,
    course_name: courseName,
  });
}

/**
 * Track lesson completion
 */
export function trackLessonComplete(
  lessonName: string,
  lessonId: string,
  courseName: string
): void {
  trackEvent({
    action: EVENT_TYPES.LESSON_COMPLETE,
    category: 'course',
    label: lessonName,
    lesson_id: lessonId,
    lesson_name: lessonName,
    course_name: courseName,
  });
}

/**
 * Track video play
 */
export function trackVideoPlay(videoTitle: string, videoId: string): void {
  trackEvent({
    action: EVENT_TYPES.VIDEO_PLAY,
    category: 'video',
    label: videoTitle,
    video_id: videoId,
    video_title: videoTitle,
  });
}

/**
 * Track video progress
 */
export function trackVideoProgress(
  videoTitle: string,
  videoId: string,
  percentComplete: number
): void {
  trackEvent({
    action: EVENT_TYPES.VIDEO_PROGRESS,
    category: 'video',
    label: videoTitle,
    video_id: videoId,
    video_title: videoTitle,
    percent_complete: percentComplete,
  });
}

/**
 * Track video completion
 */
export function trackVideoComplete(videoTitle: string, videoId: string): void {
  trackEvent({
    action: EVENT_TYPES.VIDEO_COMPLETE,
    category: 'video',
    label: videoTitle,
    video_id: videoId,
    video_title: videoTitle,
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(source?: string): void {
  trackEvent({
    action: EVENT_TYPES.NEWSLETTER_SIGNUP,
    category: 'conversion',
    label: source || 'newsletter_form',
    signup_source: source,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaText: string, ctaLocation: string): void {
  trackEvent({
    action: EVENT_TYPES.CTA_CLICK,
    category: 'engagement',
    label: ctaText,
    cta_text: ctaText,
    cta_location: ctaLocation,
  });
}

/**
 * Track file download
 */
export function trackDownload(fileName: string, fileType: string): void {
  trackEvent({
    action: EVENT_TYPES.DOWNLOAD,
    category: 'engagement',
    label: fileName,
    file_name: fileName,
    file_type: fileType,
  });
}

/**
 * Track search
 */
export function trackSearch(searchTerm: string, resultCount: number): void {
  trackEvent({
    action: EVENT_TYPES.SEARCH,
    category: 'engagement',
    label: searchTerm,
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string, linkText: string): void {
  trackEvent({
    action: EVENT_TYPES.OUTBOUND_LINK,
    category: 'navigation',
    label: url,
    outbound_url: url,
    link_text: linkText,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  if (!ANALYTICS_CONFIG.features.scrollDepth) return;
  
  trackEvent({
    action: EVENT_TYPES.SCROLL_DEPTH,
    category: 'engagement',
    label: `${depth}%`,
    scroll_depth: depth,
  });
}

/**
 * Track error
 */
export function trackError(errorMessage: string, errorType: string): void {
  trackEvent({
    action: EVENT_TYPES.ERROR,
    category: 'error',
    label: errorMessage,
    error_message: errorMessage,
    error_type: errorType,
  });
}

/**
 * Track social share
 */
export function trackShare(platform: string, contentTitle: string): void {
  trackEvent({
    action: EVENT_TYPES.SHARE,
    category: 'engagement',
    label: platform,
    share_platform: platform,
    content_title: contentTitle,
  });
}

/**
 * Initialize scroll depth tracking
 */
export function initScrollDepthTracking(): () => void {
  if (!ANALYTICS_CONFIG.features.scrollDepth) return () => {};
  
  const depths = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();
  
  function handleScroll() {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    depths.forEach(depth => {
      if (scrollPercentage >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackScrollDepth(depth);
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Initialize outbound link tracking
 */
export function initOutboundLinkTracking(): () => void {
  if (!ANALYTICS_CONFIG.features.outboundLinks) return () => {};
  
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) return;
    
    const href = link.href;
    const isOutbound = href && 
      !href.startsWith(window.location.origin) &&
      (href.startsWith('http://') || href.startsWith('https://'));
    
    if (isOutbound) {
      trackOutboundLink(href, link.textContent || '');
    }
  }
  
  document.addEventListener('click', handleClick);
  
  // Cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
}

/**
 * Initialize file download tracking
 */
export function initDownloadTracking(): () => void {
  if (!ANALYTICS_CONFIG.features.fileDownloads) return () => {};
  
  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (!link) return;
    
    const href = link.href;
    const downloadExtensions = ['.pdf', '.zip', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'];
    const isDownload = downloadExtensions.some(ext => href.toLowerCase().endsWith(ext));
    
    if (isDownload) {
      const fileName = href.split('/').pop() || '';
      const fileType = fileName.split('.').pop() || '';
      trackDownload(fileName, fileType);
    }
  }
  
  document.addEventListener('click', handleClick);
  
  // Cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
}

/**
 * Get user properties
 */
export function getUserProperties() {
  return {
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language,
    platform: navigator.platform,
  };
}

/**
 * Set user property
 */
export function setUserProperty(name: string, value: string): void {
  if (!isAnalyticsEnabled() || !getConsentStatus()) return;
  
  try {
    if (window.gtag) {
      window.gtag('set', 'user_properties', {
        [name]: value,
      });
    }
    
    if (isDebugMode()) {
      console.log('📊 User Property:', { [name]: value });
    }
  } catch (error) {
    console.error('Failed to set user property:', error);
  }
}
