'use client';

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ fontSize: '1.8rem', color: '#0070f3', fontWeight: 'bold' }}>
          Nikolas
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem' }}>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#about" style={navLinkStyle}>About</a>
          <a href="#skills" style={navLinkStyle}>Skills</a>
          <a href="#blog" style={navLinkStyle}>Blog</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main id="home" style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', color: '#0070f3', marginBottom: '1rem' }}>
          Nikolas Developer Journey
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#333', maxWidth: '700px', marginBottom: '2rem', lineHeight: '1.6' }}>
          Follow my adventure through learning <strong>Python</strong>, <strong>Web Development</strong>, and <strong>Software Engineering</strong>.
        </p>
        <button style={buttonStyle}>
          Read My Blog
        </button>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>About Me</h2>
        <p style={sectionTextStyle}>
          Hi, I'm Nikolas! I'm passionate about technology, always eager to learn new things and build awesome projects. 
          Currently diving deep into Python, frontend development with React/Next.js, and backend skills. 🚀
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Skills</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <span style={skillStyle}>Python</span>
          <span style={skillStyle}>JavaScript</span>
          <span style={skillStyle}>Next.js</span>
          <span style={skillStyle}>React</span>
          <span style={skillStyle}>HTML</span>
          <span style={skillStyle}>CSS</span>
          <span style={skillStyle}>Git & GitHub</span>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>My Blog</h2>
        <p style={sectionTextStyle}>
          Soon I will be sharing my first posts about learning programming, project building and developer life!
        </p>
      </section>

      {/* Stilovi */}
      <style jsx>{`
        a:hover {
          color: #0051a8;
        }

        @media (max-width: 768px) {
          nav div:nth-child(2) {
            gap: 1rem;
            font-size: 0.9rem;
          }
          h1 { font-size: 2.5rem; }
          h2 { font-size: 2rem; }
          p { font-size: 1rem; }
        }
      `}</style>

    </div>
  );
}

/* Stilovi za ponavljanje */
const navLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontWeight: '500',
};

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  boxShadow: '0px 4px 14px rgba(0, 118, 255, 0.39)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const sectionStyle = {
  padding: '4rem 2rem',
  backgroundColor: '#ffffff',
  marginTop: '4rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0px 2px 12px rgba(0,0,0,0.1)',
};

const sectionTitleStyle = {
  fontSize: '2.5rem',
  color: '#0070f3',
  marginBottom: '1rem',
};

const sectionTextStyle = {
  fontSize: '1.2rem',
  color: '#555',
  maxWidth: '800px',
  margin: '0 auto',
  lineHeight: '1.6'
};

const skillStyle = {
  backgroundColor: '#0070f3',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold'
};

