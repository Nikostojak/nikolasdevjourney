'use client';
import { useState, useEffect, useRef } from 'react';
import Footer from './components/Footer';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch('/api/blog', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Expected an array of posts');
        }
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.journey-section, .posts-section, .projects-section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isLoading, posts]);

  const featuredPost = posts.find(post => post?.isFeatured);
  const recentPosts = posts
    .filter(post => !post?.isFeatured)
    .sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0))
    .slice(0, 5); // Show 5 recent posts

  return (
    <main className="homepage-layout">
      <Navbar />
      
      <Container>
        {/* Hero Section */}
        <section className="hero-section" role="region" aria-labelledby="hero-title">
          <h1 className="hero-title" id="hero-title">
            Nikolas Dev Journey
          </h1>
          <p className="hero-description">
            Self-taught developer passionate about Python, JavaScript, and creating digital solutions that matter.
          </p>
          <div className="hero-buttons">
            <Link href="/blog" className="hero-button hero-button-primary">
              Read My Blog
            </Link>
            <Link href="/projects" className="hero-button hero-button-secondary">
              View Projects
            </Link>
          </div>
        </section>
      </Container>

      {/* Learning Journey Scroll - RIGHT AFTER HERO */}
      <section className="learning-scroll-section">
        <div className="container">
          <h2 className="learning-scroll-title">My Learning Journey So Far</h2>
          <div className="tech-words-container">
            <div className="tech-words-track">
              <span className="tech-word">Python</span>
              <span className="tech-word">React</span>
              <span className="tech-word">JavaScript</span>
              <span className="tech-word">CSS3</span>
              <span className="tech-word">Next.js</span>
              <span className="tech-word">Node.js</span>
              <span className="tech-word">Git</span>
              <span className="tech-word">Vercel</span>
              <span className="tech-word">FastAPI</span>
              <span className="tech-word">TypeScript</span>
              {/* Duplicate for seamless loop */}
              <span className="tech-word">Python</span>
              <span className="tech-word">React</span>
              <span className="tech-word">JavaScript</span>
              <span className="tech-word">CSS3</span>
              <span className="tech-word">Next.js</span>
              <span className="tech-word">Node.js</span>
              <span className="tech-word">Git</span>
              <span className="tech-word">Vercel</span>
              <span className="tech-word">FastAPI</span>
              <span className="tech-word">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      <Container>
        {/* Latest Blog Posts */}
        <section className="posts-section" role="region" aria-labelledby="blog-posts-title">
          <h2 className="section-title" id="blog-posts-title">Latest Insights</h2>
          
          {isLoading ? (
            <div className="loading-message">Loading posts...</div>
          ) : error ? (
            <div className="error-message">Error: {error}</div>
          ) : (
            <>
              <div className="posts-grid">
                {/* Featured Post */}
                {featuredPost && (
                  <Link href={`/blog/posts/${featuredPost.slug}`} className="post-card">
                    <div className="post-category">{featuredPost.category}</div>
                    <h3 className="post-title">{featuredPost.title}</h3>
                    <p className="post-excerpt">{featuredPost.excerpt}</p>
                    <span className="post-link">Read More →</span>
                  </Link>
                )}

                {/* Recent Posts */}
                {recentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/posts/${post.slug}`} className="post-card">
                    <div className="post-category">{post.category}</div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <span className="post-link">Read More →</span>
                  </Link>
                ))}
              </div>
              
              <div className="view-all-posts">
                <Link href="/blog" className="view-all-btn">
                  View All Posts →
                </Link>
              </div>
            </>
          )}
        </section>

        {/* Projects Section */}
        <section className="projects-section" role="region" aria-labelledby="projects-title">
          <h2 className="section-title" id="projects-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Chess Openings Web App</h3>
              <p className="project-desc">
                A comprehensive web application for tracking chess openings, featuring game logging, 
                analysis, and interactive chessboard visualization.
              </p>
              <p className="project-tech">JavaScript • React • Next.js • Python • FastAPI</p>
              <Link href="/blog/posts/my-first-project" className="post-link">
                Learn More →
              </Link>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">Developer Portfolio Blog</h3>
              <p className="project-desc">
                This very blog you're reading! A modern, responsive developer portfolio built 
                from scratch with custom animations and clean design.
              </p>
              <p className="project-tech">Next.js • React • CSS • JavaScript</p>
              <Link href="/blog/posts/how-i-built-this-blog" className="post-link">
                View Code →
              </Link>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">Python Automation Scripts</h3>
              <p className="project-desc">
                Collection of Python scripts for data analysis, web scraping, and automation tasks
                that demonstrate practical programming skills.
              </p>
              <p className="project-tech">Python • Pandas • BeautifulSoup • Requests</p>
              <Link href="/blog/posts/my-python-journey" className="post-link">
                Explore →
              </Link>
            </div>
          </div>
          
          <div className="view-all-posts">
            <Link href="/projects" className="view-all-btn">
              View All Projects →
            </Link>
          </div>
        </section>
      </Container>
      
      <Footer />
    </main>
  );
}