'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9', fontFamily: "'Poppins', Arial, sans-serif" }}>
      <Navbar />

      <section style={{ flex: 1, padding: '3rem 1.5rem', maxWidth: '800px', margin: '0 auto', color: '#333' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📝 Blog</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Welcome to my blog! Here you'll find tutorials, reflections, and updates from my journey as a self-taught developer.
          I’ll be sharing what I learn as I go — from Python experiments to web development challenges.
        </p>
      </section>

      <Footer />
    </main>
  );
}