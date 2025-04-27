'use client';

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f0f4ff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      
      {/* NAVIGACIJA */}
      <nav style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '8px'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Nikolas
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.2rem' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{ marginTop: '4rem' }}>
        <h1 style={{
          fontSize: '4rem',
          color: '#0070f3',
          marginBottom: '1rem'
        }}>
          Nikolas Developer Journey
        </h1>

        <p style={{
          fontSize: '1.5rem',
          color: '#333',
          maxWidth: '600px',
          marginBottom: '2rem'
        }}>
          Join me as I explore and study Python, Web Development, and the world of Software Engineering.
        </p>

        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}>
          Read My Blog
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{
        marginTop: '4rem',
        fontSize: '1rem',
        color: '#666'
      }}>
        © 2025 Nikolas Developer Journey. All rights reserved.
      </footer>
    </main>
  );
}
