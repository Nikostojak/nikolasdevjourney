'use client';

import { useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Kad klikneš link, zatvara meni
  };

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
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {/* Navigacija */}
      <nav
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: 'rgba(0, 112, 243, 0.8)',
          borderRadius: '12px',
          marginBottom: '2rem',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>Nikolas</div>

        {/* Hamburger ikona */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            cursor: 'pointer',
          }}
          className="hamburger"
        >
          <span style={{ height: '3px', width: '25px', background: 'white', marginBottom: '5px' }}></span>
          <span style={{ height: '3px', width: '25px', background: 'white', marginBottom: '5px' }}></span>
          <span style={{ height: '3px', width: '25px', background: 'white' }}></span>
        </div>

        {/* Linkovi za desktop */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            fontSize: '1rem',
          }}
          className="nav-links"
        >
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>

        {/* Mobile meni */}
        {menuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '70px',
              right: '20px',
              backgroundColor: 'rgba(0, 112, 243, 0.95)',
              borderRadius: '12px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 100,
            }}
          >
            <a href="#" onClick={handleLinkClick} style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="#" onClick={handleLinkClick} style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
            <a href="#" onClick={handleLinkClick} style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#" onClick={handleLinkClick} style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        )}
      </nav>

      {/* Naslov i opis */}
      <div style={{ marginTop: '2rem', padding: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0070f3', marginBottom: '1rem' }}>
          Nikolas Developer Journey
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#fff',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            textShadow: '0 0 5px rgba(0,0,0,0.7)',
          }}
        >
          Join me as I explore and study Python, Web Development, and the world of Software Engineering.
        </p>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '1rem',
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
          fontSize: '0.8rem',
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>
          © 2025 Nikolas Developer Journey. All rights reserved.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" style={{ width: '28px', height: '28px' }} />
          </a>
        </div>
      </footer>

      {/* CSS za mobilni prikaz */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </main>
  );
}
