import { useState, useEffect } from 'react';
import { Bug, X, Check, AlertCircle } from 'lucide-react';
import { ANALYTICS_CONFIG, isDebugMode } from '../config/analytics';
import {
  trackCourseView,
  trackCourseEnroll,
  trackLessonStart,
  trackVideoPlay,
  trackNewsletterSignup,
  trackCTAClick,
  trackDownload,
} from '../utils/analytics';

/**
 * Analytics Debugger Component
 * 
 * Features:
 * - Test analytics events without code changes
 * - View event firing in real-time
 * - Check GA4 configuration
 * - Preview mode for testing
 * - No redeployment needed
 * 
 * Usage:
 * - Only visible in debug mode
 * - Press Ctrl+Shift+D to toggle
 * - Click events to test firing
 * 
 * TEMPORARILY DISABLED for performance optimization to reduce main thread blocking
 */
export function AnalyticsDebugger() {
  // TEMPORARILY DISABLED - event listeners and setTimeout calls contributing to INP issues
  return null;
}