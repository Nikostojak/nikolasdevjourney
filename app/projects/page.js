import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export const metadata = {
  title: 'Nikolas Dev Journey - Projects',
  description: 'Explore my software development projects, showcasing skills in Python, JavaScript, and web development.',
};

export default function ProjectsPage() {
  return (
    <main
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
              Coming soon... Stay tuned for a showcase of my projects in Python, JavaScript, and web development!
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}