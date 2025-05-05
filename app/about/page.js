export const metadata = {
  title: 'Nikolas Dev Journey | About',
  description: 'Learn about my background, from studying Thomistic philosophy in seminary to becoming a self-taught developer',
};

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Container from '../../../components/Container';

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
            padding: '2rem 0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700, color: '#edf2f7' }}>
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
              }}
            />
          </div>

          <div style={{ backgroundColor: '#2d3748', padding: '1.5rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '1rem' }}>
              Before I ever wrote a single line of code, I was on a very different path — the priesthood.
              I entered the seminary of the <strong>Priestly Fraternity of St. Peter</strong>, where I began
              studying classical <strong>Thomistic philosophy</strong>. It was a time of deep intellectual and spiritual formation,
              shaped by the teachings of St. Thomas Aquinas and a desire to dedicate my life to a greater calling.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              After three years of formation, however, I came to realize that I was not called to this vocation. I returned
              to my homeland, <strong>Croatia</strong>, unsure of what the next chapter would look like. In the midst of this
              transition, a friend of mine suggested I try learning to program — he saw something in me I hadn’t yet seen
              in myself. That was in <strong>late August 2024</strong>.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              It took some time to truly find motivation, but once I began, I discovered something incredible. Programming
              opened a whole new world — a place where logic, creativity, and problem-solving come together. What fascinates
              me the most is how a simple idea can be turned into something real, functional, and even beautiful — all through code.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Now, in <strong>April 2025</strong>, I’ve launched this blog to document my developer journey. I’m preparing
              to build my first real project soon and look forward to everything I’ll learn along the way.
            </p>

            <h2 style={{ marginTop: '2rem', fontSize: '1.8rem', color: '#edf2f7' }}>💬 Final Thought</h2>
            <p>
              From metaphysics to machine code — it’s been a surprising journey, but I’m just getting started.
            </p>
          </div>
        </section>
      </Container>

      <Footer />
    </main>
  );
}