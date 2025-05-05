'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        © 2025 Nikolas Developer Journey. All rights reserved.
      </div>

      <div className="footer-links">
        {[
          { href: 'https://www.linkedin.com/in/nikolas-stojak-335177285/', src: '/linkedin.svg', alt: 'LinkedIn' },
          { href: 'https://github.com/Nikostojak', src: '/github.svg', alt: 'GitHub' }
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img src={src} alt={alt} style={{ width: '28px', height: '28px' }} />
          </a>
        ))}
      </div>
    </footer>
  );
}