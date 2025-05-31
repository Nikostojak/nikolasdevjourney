export const metadata = {
  title: 'Nikolas Dev Journey | Contact',
  description: 'Get in touch with me about web development, Python projects, or collaboration opportunities.',
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main
      className="page-transition"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Navbar />

      <Container>
        <div className="contact-section">
          <div className="contact-header">
            <h1 className="page-title">
              Contact
            </h1>
            <p className="contact-description">
              I&apos;d love to hear from you! Whether you want to discuss web development, 
              Python projects, potential collaborations, or just say hello, feel free to reach out.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}