'use client';

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Poppins, Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem',
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/background-code.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#ffffff', // bijeli tekst za bolji kontrast
    }}>
      <h1 style={{
        fontSize: '4rem',
        color: '#00bfff',
        marginBottom: '1rem',
      }}>
        Nikolas Developer Journey
      </h1>

      <p style={{
        fontSize: '1.5rem',
        color: '#ddd',
        maxWidth: '600px',
        marginBottom: '2rem',
    }}>
    
      
      {/* Blur sloj preko pozadine */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Lagano izbjeljivanje
        backdropFilter: 'blur(5px)',
        zIndex: 1
      }} />

      {/* Navigacija */}
      <nav style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '8px',
        zIndex: 2
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

      {/* Sadržaj */}
      <div style={{ marginTop: '6rem', zIndex: 2 }}>
        <h1 style={{
          fontSize: '4rem',
          color: '#0070f3',
          marginBottom: '1rem'
        }}>
          Nikolas Developer Journey
        </h1>

        <p style={{
          fontSize: '1.8rem',
          color: '#333',
          maxWidth: '700px',
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

      {/* Footer */}
      <footer style={{
        marginTop: '4rem',
        fontSize: '1rem',
        color: '#666',
        zIndex: 2
      }}>
        © 2025 Nikolas Developer Journey. All rights reserved.
      </footer>
    </main>
  );
}
