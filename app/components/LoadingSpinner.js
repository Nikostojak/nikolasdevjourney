export function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    const sizeClasses = {
      small: 'w-4 h-4 border-2',
      medium: 'w-8 h-8 border-2',
      large: 'w-12 h-12 border-4'
    };
  
    const spinnerClass = sizeClasses[size] || sizeClasses.medium;
  
    return (
      <div className="loading-container">
        <div className={`loading-spinner ${spinnerClass}`}>
          <span className="sr-only">{text}</span>
        </div>
        {text && <p className="loading-text">{text}</p>}
      </div>
    );
  }