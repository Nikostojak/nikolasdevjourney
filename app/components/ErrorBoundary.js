'use client';
import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Ova metoda se poziva kad se dogodi greška
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Ova metoda se poziva kad se greška uhvati
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Šalje greške u Google Analytics za praćenje
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
    
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="error-content">
            <h2>🚨 Oops! Something went wrong</h2>
            <p>
              We're sorry for the inconvenience. The page encountered an error, 
              but don't worry - this has been logged and I'll fix it soon!
            </p>
            
            <div className="error-actions">
              <button 
                onClick={() => window.location.reload()}
                className="hero-button"
                style={{ marginRight: '1rem' }}
              >
                🔄 Refresh Page
              </button>
              
              <button 
                onClick={() => window.history.back()}
                className="hero-button"
                style={{ backgroundColor: '#4a5568' }}
              >
                ← Go Back
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
                <summary>Error Details (Development Only)</summary>
                <pre style={{ 
                  background: '#2d3748', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  marginTop: '1rem',
                  overflow: 'auto'
                }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}