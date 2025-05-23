'use client';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-text">
        © 2025 Nikolas Developer Journey. All rights reserved.
        <br />
        Built with Next.js v14.2.3 |{' '}
        <a
          href="https://github.com/Nikostojak/nikolasdevjourney"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>

      <div className="footer-links">
        {[
          {
            href: 'https://www.linkedin.com/in/nikolas-stojak-335177285/',
            src: '/linkedin.svg',
            alt: 'LinkedIn logo',
            label: 'Visit my LinkedIn profile',
          },
          {
            href: 'https://github.com/Nikostojak',
            src: '/github.svg',
            alt: 'GitHub logo',
            label: 'Visit my GitHub profile',
          },
        ].map(({ href, src, alt, label }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label={label}
          >
            <img src={src} alt={alt} style={{ width: '28px', height: '28px' }} />
          </a>
        ))}
      </div>
    </footer>
  );
}