export const metadata = {
  title: 'Nikolas Dev Journey | Blog',
  description: 'Explore my blog posts on Python, web development, and my journey as a self-taught developer.',
};


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
        <section className="hero-section">
          <h1 className="hero-title">
            Nikolas Developer Journey
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