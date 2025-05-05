export default function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
}