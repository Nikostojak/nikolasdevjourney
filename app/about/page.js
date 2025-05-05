export const metadata = {
  title: 'Nikolas Dev Journey | About',
  description: 'Learn about my background, from studying Thomistic philosophy in seminary to becoming a self-taught developer',
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
      }}
    >
      <Navbar />

      <Container>
        <section
          style={{
            flex: 1,
            padding: '3rem 0',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem',
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '2.5rem',
            animation: 'fadeIn 1s ease-in-out'
          }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
              margin: 0, 
              fontWeight: 800, 
              color: '#edf2f7',
              letterSpacing: '-0.025em'
            }}>
              🛤️ My Journey
            </h1>
            <img
              src="/profile.jpg"
              alt="Nikolas"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                marginLeft: '1rem',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </div>

          <div style={{ 
            backgroundColor: '#2d3748', 
            padding: '2rem', 
            borderRadius: '12px', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            animation: 'fadeInUp 0.8s ease-in-out'
          }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Before I ever wrote a single line of code, I was on a very different path — the priesthood.
              I entered the seminary of the <strong>Priestly Fraternity of St. Peter</strong>, where I began
              studying classical <strong>Thomistic philosophy</strong>. It was a time of deep intellectual and spiritual formation,
              shaped by the teachings of St. Thomas Aquinas and a desire to dedicate my life to a greater calling.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              After three years of formation, however, I came to realize that I was not called to this vocation. I returned
              to my homeland, <strong>Croatia</strong>, unsure of what the next chapter would look like. In the midst of this
              transition, a friend of mine suggested I try learning to program — he saw something in me I hadn&ldquo;t yet seen
              in myself. That was in <strong>late August 2024</strong>.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              It took some time to truly find motivation, but once I began, I discovered something incredible. Programming
              opened a whole new world — a place where logic, creativity, and problem-solving come together. What fascinates
              me the most is how a simple idea can be turned into something real, functional, and even beautiful — all through code.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Now, in <strong>April 2025</strong>, I&ldquo;ve launched this blog to document my developer journey. I&ldquo;m preparing
              to build my first real project soon and look forward to everything I&ldquo;ll learn along the way.
            </p>

            <h2 style={{ 
              marginTop: '2.5rem', 
              fontSize: '1.8rem', 
              color: '#edf2f7',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              💬 Final Thought
            </h2>
            <p style={{ fontStyle: 'italic', color: '#a0aec0' }}>
              From metaphysics to machine code — it&ldquo;s been a surprising journey, but I&ldquo;m just getting started.
            </p>
          </div>
        </section>
      </Container>

      <Footer />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}