export const metadata = {
  title: 'Nikolas Dev Journey | About',
  description: 'Learn about my background, from studying Thomistic philosophy in seminary to becoming a self-taught developer',
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins', Arial, sans-serif",
        backgroundColor: '#e0e0e0',
        color: '#000',
      }}
    >
      <Navbar />

      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '3rem 2rem',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Tekst */}
        <div style={{ flex: 2, textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>⛰️ My Journey</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Before I ever wrote a single line of code, I was on a very different path — the priesthood.
            I entered the seminary of the <strong>Priestly Fraternity of St. Peter</strong>, where I began studying classical <strong>Thomistic philosophy</strong>.
            It was a time of deep intellectual and spiritual formation, shaped by the teachings of St. Thomas Aquinas and a desire to dedicate my life to a greater calling.
            <br /><br />
            After three years of formation, however, I came to realize that I was not called to this vocation.
            I returned to my homeland, <strong>Croatia</strong>, unsure of what the next chapter would look like.
            In the midst of this transition, a friend of mine suggested I try learning to program — he saw something in me I hadn&rsquo;t yet seen in myself.
            That was in <strong>late August 2024</strong>.
            <br /><br />
            It took some time to truly find motivation, but once I began, I discovered something incredible.
            Programming opened a whole new world — a place where logic, creativity, and problem-solving come together.
            What fascinates me the most is how a simple idea can be turned into something real, functional, and even beautiful — all through code.
            <br /><br />
            Now, in <strong>April 2025</strong>, I&rsquo;ve launched this blog to document my developer journey.
            I&rsquo;m preparing to build my first real project soon and look forward to everything I&rsquo;ll learn along the way.
            <br /><br />
            <em>From metaphysics to machine code — it&rsquo;s been a surprising journey, but I&rsquo;m just getting started.</em>
          </p>

          {/* Ikonice / društvene mreže */}
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontWeight: 'bold' }}>🔗 Final Thought</p>
            <p>
              <a href="https://www.linkedin.com/in/nikolas-stojak" target="_blank" rel="noopener noreferrer">LinkedIn</a>{' | '}
              <a href="https://github.com/nikolasstojak" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </div>

        {/* Slika */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/me.jpg"
            alt="Nikolas"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

