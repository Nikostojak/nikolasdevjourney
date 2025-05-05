export const metadata = {
  title: 'Nikolas Dev Journey | Contact',
  description: 'Get in touch with me directly via LinkedIn or GitHub.',
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function ContactPage() {
  return (
    <main
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
        <section
          style={{
            flex: 1,
            padding: '2rem 0',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700, color: '#edf2f7' }}>
            📬 Contact
          </h1>
          <div style={{ backgroundColor: '#2d3748', padding: '1.5rem', borderRadius: '8px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              I’d love to hear from you! You can connect with me directly via:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: '2', paddingLeft: '1.2rem' }}>
              {[
                { platform: 'LinkedIn', href: 'https://www.linkedin.com/in/nikolas-stojak-335177285/', icon: '💼' },
                { platform: 'GitHub', href: 'https://github.com/Nikostojak', icon: '💻' },
              ].map(({ platform, href, icon }) => (
                <li key={platform}>
                  {icon}{' '}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#63b3ed',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      ':hover': {
                        color: '#90cdf4',
                      },
                    }}
                  >
                    {platform}
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