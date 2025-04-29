'use client';

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
        backgroundColor: '#f9f9f9',
      }}
    >
      <Navbar />

      <section
        style={{
          flex: 1,
          padding: '3rem 1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8',
          fontSize: '1.1rem',
          color: '#333',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🛤️ My Journey</h1>
        <p>
          Before I ever wrote a single line of code, I was on a very different path — the priesthood.
          I entered the seminary of the <strong>Priestly Fraternity of St. Peter</strong>, where I began
          studying classical <strong>Thomistic philosophy</strong>. It was a time of deep intellectual and spiritual formation,
          shaped by the teachings of St. Thomas Aquinas and a desire to dedicate my life to a greater calling.
        </p>
        <p>
          After three years of formation, however, I came to realize that I was not called to this vocation. I returned
          to my homeland, <strong>Croatia</strong>, unsure of what the next chapter would look like. In the midst of this
          transition, a friend of mine suggested I try learning to program — he saw something in me I hadn't yet seen
          in myself. That was in <strong>late August 2024</strong>.
        </p>
        <p>
          It took some time to truly find motivation, but once I began, I discovered something incredible. Programming
          opened a whole new world — a place where logic, creativity, and problem-solving come together. What fascinates
          me the most is how a simple idea can be turned into something real, functional, and even beautiful — all through code.
        </p>
        <p>
          Now, in <strong>April 2025</strong>, I’ve launched this blog to document my developer journey. I’m preparing
          to build my first real project soon and look forward to everything I’ll learn along the way.
        </p>

        <h2 style={{ marginTop: '2rem' }}>💬 Final Thought</h2>
        <p>
          From metaphysics to machine code — it’s been a surprising journey, but I’m just getting started.
        </p>
      </section>

      <Footer />
    </main>
  );
}
