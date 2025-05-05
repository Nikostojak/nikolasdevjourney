'use client';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '2rem 1rem',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#2d3748',
        color: '#a0aec0',
        fontSize: '0.9rem',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        © 2025 Nikolas Developer Journey. All rights reserved.
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
      }}>
        {[
          { href: 'https://www.linkedin.com/in/nikolas-stojak-335177285/', src: '/linkedin.svg', alt: 'LinkedIn' },
          { href: 'https://github.com/Nikostojak', src: '/github.svg', alt: 'GitHub' }
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease, filter 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'brightness(1.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            <img src={src} alt={alt} style={{ width: '28px', height: '28px' }} />
          </a>
        ))}
      </div>
    </footer>
  );
}