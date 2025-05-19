import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Nikolas Dev Journey - Projects',
  description: 'Discover my first portfolio project: a web app for tracking chess openings, showcasing skills in JavaScript, Python, and web development.',
};

export default function ProjectsPage() {
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
        <section className="projects-section" role="region" aria-labelledby="projects-title">
          <h1 className="projects-title" id="projects-title">
            My Projects
          </h1>
          <div className="projects-content">
            <p className="projects-description">
              I&apos;m excited to announce my first project: a web application for tracking chess openings! This app will let me log past chess games, including opening moves like the Sicilian Defense or Queen&apos;s Gambit, using JavaScript for the front-end and Python for the back-end. It&apos;s designed to showcase my skills in building responsive, accessible web apps.{' '}
              <Link href="/blog/posts/my-first-project" aria-label="Read more about my chess openings project">
                Read the full plan in my blog post
              </Link> to learn about the features and development roadmap!
            </p>
            <p className="projects-description">
              Stay tuned for more projects as I continue to grow my blog in web development, AI, and beyond.
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}