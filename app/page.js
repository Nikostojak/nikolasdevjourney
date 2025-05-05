'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
      }}
    >
      <Navbar />

      <Container>
        <section
          style={{
            flex: 1,
            padding: '4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#edf2f7',
              marginBottom: '1.5rem',
              fontWeight: 700,
            }}
          >
            Nikolas Developer Journey
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#e2e8f0',
              maxWidth: '800px',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
            }}
          >
            Join me as I explore and study Python, Web Development, and the world of Software Engineering.
          </p>
          
          <Link href="/blog">
            <button
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: '#63b3ed',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                fontWeight: 500,
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#90cdf4';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#63b3ed';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Read My Blog
            </button>
          </Link>
        </section>
      </Container>

      <Footer />
    </main>
  );
}