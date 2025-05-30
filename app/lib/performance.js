// app/lib/performance.js
// Funkcija za mjerenje Web Vitals (Google ranking faktori)

export function measureWebVitals(metric) {
    const { name, value, id } = metric;
    
    // Pošaljite metrics u Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Web Vitals',
        // Google expects specific value formats
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: id,
        non_interaction: true
      });
    }
    
    // Log u konzolu za development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', { name, value, id });
    }
  }