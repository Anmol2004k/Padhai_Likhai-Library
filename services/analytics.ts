
/**
 * Simple analytics tracking utility.
 * Wraps window.gtag (GA4) and provides a clean interface.
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  console.log(`[Tracking Event]: ${eventName}`, params);
  
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }

  // Clarity custom events if needed
  if (typeof (window as any).clarity === 'function') {
    (window as any).clarity("set", eventName, JSON.stringify(params));
  }
};
