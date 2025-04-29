'use client';

export default function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(0, 112, 243, 0.8)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: '12px',
      }}
    >
      <div style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>
        Nikolas Stojak
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '0.5rem',
        }}
      >
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Blog</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>Contact</a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            align-items: center;
          }

          nav div:first-child {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
}
