// app/contact/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact Nikolas Stojak | Developer',
  description: 'Get in touch with Nikolas Stojak - connect on LinkedIn or GitHub to discuss development opportunities.',
};

export default function ContactPage() {
  return (
    <main className="page-layout">
      <Navbar />
      <Container>
        <div className="contact-section">
          <div className="contact-header">
            <h1 className="contact-title">
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