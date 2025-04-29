'use client';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '4rem',
        padding: '1rem',
        width: '100%',
        textAlign: 'center',
        color: '#aaa',
        fontSize: '0.9rem',
      }}
    >
      <div style={{ marginBottom: '0.5rem' }}>
        © 2025 Nikolas Developer Journey. All rights reserved.
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop: '1rem',
      }}>
        <a
          href="https://www.linkedin.com"
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
          <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
        </a>

        <a
          href="https://github.com"
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
          <img src="/github.svg" alt="GitHub" style={{ width: '32px', height: '32px' }} />
        </a>
      </div>
    </footer>
  );
}
