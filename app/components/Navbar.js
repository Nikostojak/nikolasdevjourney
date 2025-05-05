'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        padding: '1rem 2rem',
        backgroundColor: '#2d3748',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      <div style={{ 
        fontSize: '1.8rem', 
        color: '#edf2f7', 
        fontWeight: 700 
      }}>
        Nikolas Stojak
      </div>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        {['Home', 'Blog', 'About', 'Contact'].map(page => (
          <Link 
            key={page}
            href={page === 'Home' ? '/' : `/${page.toLowerCase()}`} 
            style={{ 
              color: '#e2e8f0', 
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              ':hover': {
                color: '#63b3ed'
              }
            }}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}