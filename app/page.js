'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Link from 'next/link';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    featured: false,
    recent: false,
    projects: false,
  });
  const fullTitle = 'NIKOLASDEVJOURNEY';

  const featuredRef = useRef(null);
  const recentRef = useRef(null);
  const projectsRef = useRef(null);

  // Skrolaj na vrh stranice prilikom učitavanja
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tipkajući efekt za naslov
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowSubtitle(true), 500);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Dohvat blog postova
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

  // Intersection Observer za otkrivanje sekcija
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.dataset.section;
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      { ref: featuredRef, name: 'featured' },
      { ref: recentRef, name: 'recent' },
      { ref: projectsRef, name: 'projects' },
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        observer.observe(ref.current);
      } else {
        console.warn(`Reference for section ${name} is null`);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isLoading, posts]);

  const featuredPost = posts.find(post => post?.isFeatured);
  const recentPosts = posts
    .filter(post => !post?.isFeatured)
    .sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0))
    .slice(0, 3);

  return (
    <main className="page-transition" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1a202c', color: '#e2e8f0' }}>
      <Navbar />
      <Container>
        <section className="hero-section" role="region" aria-labelledby="hero-title">
          <h1 className="hero-title" id="hero-title" aria-live="polite">
            <span className="hero-title-typed">
              {displayedTitle.split('').map((char, index) => (
                <span key={index} className={index < 7 ? 'hero-title-nikolas' : 'hero-title-journey'}>
                  {char}
                </span>
              ))}
              {displayedTitle.length < fullTitle.length && <span className="typing-cursor" aria-hidden="true">|</span>}
            </span>
          </h1>
          <p className={`hero-description ${showSubtitle ? 'visible' : ''}`}>
            Exploring Python, Web Development, and Software Engineering with passion.
          </p>
          <div className="hero-buttons">
            <Link href="/blog">
              <button className="hero-button" role="button" aria-label="Go to blog page">Read My Blog</button>
            </Link>
            <Link href="/projects">
              <button className="hero-button" role="button" aria-label="View my projects">View My Projects</button>
            </Link>
          </div>
        </section>

        {isLoading ? (
          <div className="loading-message">Loading posts...</div>
        ) : error ? (
          <div className="error-message">Error: {error}</div>
        ) : (
          <>
            {featuredPost ? (
              <section
                ref={featuredRef}
                className={`featured-post-section ${visibleSections.featured ? 'visible' : ''}`}
                role="region"
                aria-labelledby="featured-post-title"
                data-section="featured"
              >
                <h2 className="section-title" id="featured-post-title">Featured Post</h2>
                <article className="blog-featured-item">
                  <div className="blog-post-badge">{featuredPost.category}</div>
                  <h3 className="blog-featured-title">
                    <Link href={`/blog/posts/${featuredPost.slug}`} className="blog-post-link" aria-label={`Read featured blog post: ${featuredPost.title}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="blog-post-date">{featuredPost.date}</p>
                  <p className="blog-post-excerpt">{featuredPost.excerpt}</p>
                  <Link href={`/blog/posts/${featuredPost.slug}`} className="blog-list-read-more" aria-label={`Read more about ${featuredPost.title}`}>
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              </section>
            ) : (
              <div className="no-posts-message">No featured post available.</div>
            )}

            {recentPosts.length > 0 ? (
              <section
                ref={recentRef}
                className={`recent-posts-section ${visibleSections.recent ? 'visible' : ''}`}
                role="region"
                aria-labelledby="recent-posts-title"
                data-section="recent"
              >
                <h2 className="section-title" id="recent-posts-title">Recent Posts</h2>
                <div className="blog-category-grid">
                  {recentPosts.map((post, index) => (
                    <article key={post.slug} className="blog-list-item">
                      <div className="blog-post-badge">{post.category}</div>
                      <h3 className="blog-post-title">
                        <Link href={`/blog/posts/${post.slug}`} className="blog-post-link" aria-label={`Read blog post: ${post.title}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="blog-post-date">{post.date}</p>
                      <p className="blog-post-excerpt">{post.excerpt}</p>
                      <Link href={`/blog/posts/${post.slug}`} className="blog-list-read-more" aria-label={`Read more about ${post.title}`}>
                        Read more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </article>
                  ))}
                </div>
                <div className="view-all-posts">
                  <Link href="/blog" className="hero-button" aria-label="View all blog posts">
                    View All Posts
                  </Link>
                </div>
              </section>
            ) : (
              !featuredPost && <div className="no-posts-message">No recent posts available.</div>
            )}
          </>
        )}

        <section
          ref={projectsRef}
          className={`projects-section ${visibleSections.projects ? 'visible' : ''}`}
          role="region"
          aria-labelledby="projects-title"
          data-section="projects"
        >
          <h2 className="section-title" id="projects-title">My Projects</h2>
          <div className="projects-content">
            <article className="blog-list-item">
              <h3 className="blog-post-title">
                <Link href="/blog/posts/my-first-project" className="blog-post-link" aria-label="Read about my chess openings project">
                  Chess Openings Web App
                </Link>
              </h3>
              <p className="blog-post-excerpt">
                A web app for tracking chess openings, built with JavaScript (React, Next.js) and Python (FastAPI/Flask).
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
              <Link href="/projects" className="hero-button" aria-label="View all projects">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </main>
  );
}