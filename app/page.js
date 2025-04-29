'use client';

import Navbar from '../components/navbar'
import Footer from '../components/footer'



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
      <Navbar />

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
            color: '#ffffff',
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

      <Footer />
    </main>
  );
}
