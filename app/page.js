'use client';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Poppins', Arial, sans-serif",
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {/* Navigacija */}
      <nav
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: 'rgba(0, 112, 243, 0.8)',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      >
        <div style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>Nikolas</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Naslov */}
      <div style={{ marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#0070f3', marginBottom: '1rem' }}>
          Nikolas Developer Journey
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            maxWidth: '600px',
            marginBottom: '2rem',
            textShadow: '0 0 5px rgba(0,0,0,0.7)',
          }}
        >
          Join me as I explore and study Python, Web Development, and the world of Software Engineering.
        </p>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0070f3')}
        >
          Read My Blog
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '4rem',
          padding: '1rem',
          width: '100%',
          textAlign: 'center',
          color: '#aaa',
          fontSize: '0.9rem',
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>
          © 2025 Nikolas Developer Journey. All rights reserved.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" style={{ width: '24px', height: '24px' }} />
          </a>
        </div>
      </footer>
    </main>
  );
}
