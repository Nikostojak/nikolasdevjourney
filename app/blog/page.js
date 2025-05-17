'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('Fetching posts from /api/blog');
        const res = await fetch('/api/blog', {
          cache: 'no-store',
        });
        console.log('Fetch response status:', res.status, res.statusText);
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Fetched posts:', data);
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Jedinstvene kategorije i "All" opcija
  const categories = ['All', ...new Set(posts.map(post => post.category || 'Uncategorized'))];

  // Filtrirani postovi prema aktivnom tabu
  const filteredPosts = activeTab === 'All'
    ? posts
    : posts.filter(post => post.category === activeTab);

  // Ikone za kategorije
  const categoryIcons = {
    'Blog Development': '🛠️',
    'Python': '🐍',
    'Uncategorized': '📝',
    'All': '🌐'
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Navbar />

      <Container>
        <section className="blog-section" role="region" aria-labelledby="blog-title">
          <h1 className="blog-list-title" id="blog-title">
            📝 Developer Blog
          </h1>

          {error ? (
            <p className="blog-list-error">Error: {error}</p>
          ) : loading ? (
            <p className="blog-list-error loading">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="blog-list-error">No blog posts found.</p>
          ) : (
            <>
              <div className="blog-tabs" role="tablist">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`blog-tab ${activeTab === category ? 'blog-tab-active' : ''}`}
                    onClick={() => setActiveTab(category)}
                    role="tab"
                    aria-selected={activeTab === category}
                    aria-controls={`tabpanel-${index}`}
                    id={`tab-${index}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {categoryIcons[category] || '📝'} {category}
                  </button>
                ))}
              </div>
              <div
                className="blog-tab-content"
                id="blog-tab-content"
                role="tabpanel"
                aria-labelledby={`tab-${categories.indexOf(activeTab)}`}
              >
                <div className="blog-category-grid">
                  {filteredPosts.length === 0 ? (
                    <p className="blog-list-error">No posts in this category.</p>
                  ) : (
                    filteredPosts.map((post, index) => (
                      <article
                        key={post.slug}
                        className="blog-list-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="blog-post-badge">
                          {categoryIcons[post.category] || '📝'} {post.category}
                        </div>
                        <h3 className="blog-post-title">
                          <Link
                            href={`/blog/posts/${post.slug}`}
                            className="blog-post-link"
                            aria-label={`Read blog post: ${post.title}`}
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <p className="blog-post-date">{post.date}</p>
                        <p className="blog-post-excerpt">{post.excerpt}</p>
                        <Link
                          href={`/blog/posts/${post.slug}`}
                          className="blog-list-read-more"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read more
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </article>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </section>
      </Container>

      <Footer />
    </main>
  );
}