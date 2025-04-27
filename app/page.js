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
        fontFamily: "'Poppins', Arial, sans-serif",
      }}
    >
      {/* Navigacija */}
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

      {/* Sadržaj stranice */}
      <section
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#ffffff', // OVDJE SADA BIJELO
            marginBottom: '1rem',
          }}
        >
          Nikolas Developer Journey
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#ffffff',
            maxWidth: '700px',
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
            color: 'white',
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
      </section>

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

  {/* Društvene mreže */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        transition: 'transform 0.3s ease, filter 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
        e.currentTarget.style.filter = 'brightness(1.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        transition: 'transform 0.3s ease, filter 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
        e.currentTarget.style.filter = 'brightness(1.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      <img src="/github.svg" alt="GitHub" style={{ width: '32px', height: '32px' }} />
    </a>
  </div>
</footer>
