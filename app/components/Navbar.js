'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
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
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}