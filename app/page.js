'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Link from 'next/link';

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'NIKOLASDEVJOURNEY';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Brzina tipkanja (150ms po slovu)

    return () => clearInterval(interval);
  }, []);

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
        <section className="hero-section">
          <h1 className="hero-title">
            <span className="hero-title-typed">
              {displayedText.split('').map((char, index) => (
                <span
                  key={index}
                  className={
                    index < 7 ? 'hero-title-nikolas' : 'hero-title-journey'
                  }
                >
                  {char}
                </span>
              ))}
              {displayedText.length < fullText.length && (
                <span className="typing-cursor">|</span>
              )}
            </span>
          </h1>
          <p className="hero-description">
            Join me as I explore and study Python, Web Development, and the world of Software Engineering.
          </p>
          
          <Link href="/blog">
            <button className="hero-button">
              Read My Blog
            </button>
          </Link>
        </section>
      </Container>

      <Footer />
    </main>
  );
}