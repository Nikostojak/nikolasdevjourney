export default function Container({ children }) {
    return (
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '2rem 1rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    );
  }
  