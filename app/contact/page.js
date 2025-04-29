'use client';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9', fontFamily: "'Poppins', Arial, sans-serif" }}>
      <Navbar />

      <section style={{ flex: 1, padding: '3rem 1.5rem', maxWidth: '800px', margin: '0 auto', color: '#333' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📬 Contact</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          I'd love to hear from you! You can connect with me directly via:
        </p>
        <ul style={{ fontSize: '1.1rem', lineHeight: '2', paddingLeft: '1.2rem' }}>
          <li>💼 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>💻 <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}