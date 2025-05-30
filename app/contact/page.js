// app/contact/page.js
import { createMetadata } from '../lib/metadata';

export const metadata = createMetadata('contact');

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function ContactPage() {
  return (
    <main
      className="page-transition"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Navbar />
      <Container>
        <section className="contact-section" role="region" aria-labelledby="contact-title">
          <h1 className="contact-title" id="contact-title">
            Contact
          </h1>
          <div className="contact-content">
            <p>
              I&apos;d love to hear from you! You can connect with me directly via:
            </p>
            <ul className="contact-links">
              {[
                { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/nikolas-stojak-335177285/', icon: '💼' },
                { platform: 'GitHub', href: 'https://github.com/Nikostojak', icon: '💻' },
              ].map(({ platform, href, icon }) => (
                <li key={platform} className="contact-link-item">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label={`Visit my ${platform} profile`}
                  >
                    {icon} {platform}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}