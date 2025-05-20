'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export default function ProjectsPage() {
  // Dijagnostika: Provjeri da li se komponenta renderira
  console.log('ProjectsPage rendered');

  return (
    <main className="page-transition" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1a202c', color: '#e2e8f0' }}>
      <Navbar />
      <Container>
        <section className="projects-section" role="region" aria-labelledby="projects-title">
          <h1 className="projects-title" id="projects-title">My Projects</h1>
          <div className="projects-content">
            <p className="projects-description">
              Here are some of the projects I've been working on, showcasing my skills in Python, JavaScript, and web development.
            </p>
            <article className="blog-list-item">
              <h2 className="blog-post-title">
                <Link href="/blog/posts/my-first-project" className="blog-post-link" aria-label="Read about my chess openings project">
                  Chess Openings Web App
                </Link>
              </h2>
              <p className="blog-post-excerpt">
                A web app for tracking chess openings, built with JavaScript (React, Next.js) and Python (FastAPI/Flask). Features include game logging, filtering, and interactive chessboard visualization.
              </p>
              <p className="blog-post-badge">JavaScript, Python, Next.js, FastAPI</p>
              <Link href="/blog/posts/my-first-project" className="blog-list-read-more" aria-label="Read more about the chess openings project">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
            <div className="view-all-posts">
              <Link href="/blog" className="hero-button" aria-label="View all blog posts">
                View All Blog Posts
              </Link>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}