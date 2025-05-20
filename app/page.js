'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Link from 'next/link';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullTitle = 'NIKOLASDEVJOURNEY';

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

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    }
    fetchPosts();
  }, []);

  const featuredPost = posts.find(post => post.isFeatured);
  const recentPosts = posts
    .filter(post => !post.isFeatured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
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

        {featuredPost && (
          <section className="featured-post-section" role="region" aria-labelledby="featured-post-title">
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
        )}

        {recentPosts.length > 0 && (
          <section className="recent-posts-section" role="region" aria-labelledby="recent-posts-title">
            <h2 className="section-title" id="recent-posts-title">Recent Posts</h2>
            <div className="blog-category-grid">
              {recentPosts.map((post, index) => (
                <article key={post.slug} className="blog-list-item" style={{ animationDelay: `${index * 0.1}s` }}>
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
        )}

        <section className="projects-section" role="region" aria-labelledby="projects-title">
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