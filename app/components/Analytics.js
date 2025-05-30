'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    
    // Google Analytics page view tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-CMEMLMEFFR', {
        page_path: url,
      });
    }
    
    // Custom tracking za blog performance
    trackPageView(url);
    
  }, [pathname, searchParams]);

  return null;
}

// Dodajem tracking kada se comments učitaju
const handleGiscusLoad = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'comments_loaded', {
      event_category: 'engagement',
      event_label: window.location.pathname
    });
  }
};

// Listen za Giscus events
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://giscus.app') return;
  
  const giscusData = event.data.giscus;
  if (giscusData) {
    // Track kada netko komentira
    if (giscusData.type === 'discussion') {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'comment_posted', {
          event_category: 'engagement',
          event_label: window.location.pathname
        });
      }
    }
  }
});

function trackPageView(url) {
  // Pratim koja stranica je najpopularnija
  try {
    const views = JSON.parse(localStorage.getItem('pageViews') || '{}');
    views[url] = (views[url] || 0) + 1;
    localStorage.setItem('pageViews', JSON.stringify(views));
    
    // Ako je blog post, posebno ga trackamo
    if (url.includes('/blog/posts/')) {
      const postSlug = url.split('/blog/posts/')[1];
      const blogViews = JSON.parse(localStorage.getItem('blogViews') || '{}');
      blogViews[postSlug] = (blogViews[postSlug] || 0) + 1;
      localStorage.setItem('blogViews', JSON.stringify(blogViews));
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}