// Performance utilities for optimizing the website

/**
 * Debounce function to throttle event handlers
 */
export const debounce = <Args extends unknown[]>(
  func: (...args: Args) => void,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function to limit function calls
 */
export const throttle = <Args extends unknown[]>(
  func: (...args: Args) => void,
  delay: number
) => {
  let lastCall = 0;
  return (...args: Args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * Intersection Observer for lazy loading
 */
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

/**
 * Measure performance metrics
 */
export const measurePerformance = (name: string) => {
  const startTime = performance.now();
  return {
    end: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log(`${name}: ${duration.toFixed(2)}ms`);
      return duration;
    },
  };
};

/**
 * Preload images for better performance
 */
export const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Request idle callback with fallback
 */
export const scheduleCallback = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 0);
  }
};
