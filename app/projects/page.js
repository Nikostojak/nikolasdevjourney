// app/projects/page.js
'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="page-layout">
      <Navbar />
      <Container>
        <section className="projects-section" role="region" aria-labelledby="projects-title">
          <h1 className="projects-title" id="projects-title">Projects</h1>
          <div className="projects-content">
            <p className="projects-description">
              I&apos;m excited to showcase my growing collection of projects that demonstrate my skills in Python, JavaScript, and web development.
            </p>
            
            <div className="projects-grid">
              <article className="project-card">
                <h2 className="project-title">
                  Chess Openings Web App
                </h2>
                <p className="project-desc">
                  A comprehensive web application for tracking chess openings, built with JavaScript (React, Next.js) and Python (FastAPI/Flask). 
                  Features include game logging, filtering, and interactive chessboard visualization.
                </p>
                <p className="project-tech">JavaScript, Python, Next.js, FastAPI</p>
                <Link href="/blog/posts/my-first-project" className="post-link" aria-label="Read about the chess openings project">
                  Read More →
                </Link>
              </article>

              <article className="project-card">
                <h2 className="project-title">
                  Developer Portfolio Blog
                </h2>
                <p className="project-desc">
                  This very blog you're reading! A modern, responsive developer portfolio built from scratch 
                  with custom animations, dark theme, and clean design principles.
                </p>
                <p className="project-tech">Next.js, React, CSS, JavaScript</p>
                <Link href="/blog/posts/how-i-built-this-blog" className="post-link" aria-label="Read about how I built this blog">
                  View Code →
                </Link>
              </article>

              <article className="project-card">
                <h2 className="project-title">
                  Python Automation Scripts
                </h2>
                <p className="project-desc">
                  Collection of Python scripts for data analysis, web scraping, and automation tasks 
                  that demonstrate practical programming skills and real-world problem solving.
                </p>
                <p className="project-tech">Python, Pandas, BeautifulSoup, Requests</p>
                <Link href="/blog/posts/my-python-journey" className="post-link" aria-label="Read about my Python projects">
                  Explore →
                </Link>
              </article>
            </div>
            
            <div className="view-all-posts">
              <Link href="/blog" className="view-all-btn" aria-label="View all blog posts">
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