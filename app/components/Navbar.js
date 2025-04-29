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
      <div style={{ fontSize: '1.8rem', color: 'white', fontWeight: 'bold' }}>
        Nikolas Stojak
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}
