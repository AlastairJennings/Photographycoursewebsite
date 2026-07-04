/**
 * Performance Helper Utilities
 * 
 * Utilities to improve INP (Interaction to Next Paint) and overall performance
 */

/**
 * Debounce function to reduce expensive operations
 * Helps reduce INP by batching rapid interactions
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit execution rate
 * Helps reduce INP by limiting how often expensive operations run
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Request Idle Callback wrapper with fallback
 * Schedules non-critical work during idle time
 */
export function scheduleIdleTask(callback: () => void, options?: { timeout?: number }) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    return setTimeout(callback, 1) as any;
  }
}

/**
 * Cancel Idle Callback wrapper with fallback
 */
export function cancelIdleTask(id: number) {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Long Task Detection
 * Detects and logs long tasks that block the main thread
 */
export function detectLongTasks(threshold = 50) {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > threshold) {
          console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`, entry);
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
    
    return () => observer.disconnect();
  } catch (e) {
    // PerformanceObserver not supported
    console.warn('Long task detection not supported');
  }
}

/**
 * Defer heavy computations until after paint
 */
export function deferUntilPaint(callback: () => void) {
  if ('requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(callback);
    });
  } else {
    setTimeout(callback, 16);
  }
}

/**
 * Batch DOM reads to prevent layout thrashing
 */
export class DOMBatcher {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled = false;

  read(callback: () => void) {
    this.readQueue.push(callback);
    this.scheduleFlush();
  }

  write(callback: () => void) {
    this.writeQueue.push(callback);
    this.scheduleFlush();
  }

  private scheduleFlush() {
    if (this.scheduled) return;
    this.scheduled = true;
    
    requestAnimationFrame(() => {
      this.flush();
    });
  }

  private flush() {
    // Execute all reads first
    while (this.readQueue.length > 0) {
      const read = this.readQueue.shift();
      read?.();
    }
    
    // Then execute all writes
    while (this.writeQueue.length > 0) {
      const write = this.writeQueue.shift();
      write?.();
    }
    
    this.scheduled = false;
  }
}

/**
 * Optimize event listeners to reduce INP
 */
export function optimizeEventListener(
  element: HTMLElement | Window | Document,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions & { debounce?: number; throttle?: number }
) {
  const { debounce: debounceTime, throttle: throttleTime, ...listenerOptions } = options || {};
  
  let optimizedHandler = handler;
  
  if (debounceTime) {
    optimizedHandler = debounce(handler as any, debounceTime) as EventListener;
  } else if (throttleTime) {
    optimizedHandler = throttle(handler as any, throttleTime) as EventListener;
  }
  
  element.addEventListener(event, optimizedHandler, listenerOptions);
  
  return () => element.removeEventListener(event, optimizedHandler, listenerOptions);
}

/**
 * Measure and log INP for specific interactions
 */
export function measureINP(interactionName: string) {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    
    if (duration > 200) {
      console.warn(`⚠️ Slow interaction "${interactionName}": ${duration.toFixed(2)}ms (target: <200ms)`);
    } else if (duration > 100) {
      console.log(`⚡ "${interactionName}": ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  };
}

/**
 * Type declarations for requestIdleCallback
 */
declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: IdleDeadline) => void,
      options?: { timeout?: number }
    ) => number;
    cancelIdleCallback: (id: number) => void;
  }

  interface IdleDeadline {
    didTimeout: boolean;
    timeRemaining: () => number;
  }
}

/**
 * Prevent layout shifts by reserving space
 */
export function calculateAspectRatio(width: number, height: number): string {
  return `${(height / width) * 100}%`;
}

/**
 * Precompute expensive calculations
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    
    return result;
  }) as T;
}
