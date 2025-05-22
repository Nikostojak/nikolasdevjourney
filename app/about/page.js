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
      className="page-transition"
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
        <section className="about-section" role="region" aria-labelledby="about-title">
          <div className="about-header">
            <img
              src="/profile.jpg"
              alt="Nikolas Stojak, self-taught developer"
              className="profile-img"
            />
            <h1 className="about-title" id="about-title">
              My Journey
            </h1>
          </div>
          <div className="about-content">
            <p>
              Before I ever wrote a single line of code, I was on a very different path — the priesthood.
              I entered the seminary of the <strong>Priestly Fraternity of St. Peter</strong>, where I began
              studying classical <strong>Thomistic philosophy</strong>. It was a time of deep intellectual and spiritual formation,
              shaped by the teachings of St. Thomas Aquinas and a desire to dedicate my life to a greater calling.
            </p>
            <p>
              After three years of formation, however, I came to realize that I was not called to this vocation. I returned
              to my homeland, <strong>Croatia</strong>, unsure of what the next chapter would look like. In the midst of this
              transition, a friend of mine suggested I try learning to program — he saw something in me I hadn&apos;t yet seen
              in myself. That was in <strong>late August 2024</strong>.
            </p>
            <p>
              It took some time to truly find motivation, but once I began, I discovered something incredible. Programming
              opened a whole new world — a place where logic, creativity, and problem-solving come together. What fascinates
              me the most is how a simple idea can be turned into something real, functional, and even beautiful — all through code.
            </p>
            <p>
              Now, in <strong>April 2025</strong>, I&apos;ve launched this blog to document my developer journey. I&apos;m preparing
              to build my first real project soon and look forward to everything I&apos;ll learn along the way.
            </p>
            <h2 className="about-subtitle">Final Thought</h2>
            <p className="final-thought">
              From metaphysics to machine code — it&apos;s been a surprising journey, but I&apos;m just getting started.
              </p>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}