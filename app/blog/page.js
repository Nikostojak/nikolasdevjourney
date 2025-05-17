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

  // Grupiranje postova po kategorijama
  const categories = {};
  posts.forEach(post => {
    const category = post.category || 'Uncategorized';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(post);
  });

  // Ikone za kategorije
  const categoryIcons = {
    'Blog Development': '🛠️',
    'Python': '🐍',
    'Uncategorized': '📝'
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
            <div className="blog-categories">
              {Object.entries(categories).map(([category, categoryPosts], index) => (
                <div
                  key={category}
                  className="blog-category-section"
                  role="region"
                  aria-labelledby={`category-title-${index}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h2 className="blog-category-title" id={`category-title-${index}`}>
                    {categoryIcons[category] || '📝'} {category}
                  </h2>
                  <div className="blog-category-grid">
                    {categoryPosts.map((post, postIndex) => (
                      <article
                        key={post.slug}
                        className="blog-list-item"
                        style={{ animationDelay: `${postIndex * 0.1}s` }}
                      >
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </Container>

      <Footer />
    </main>
  );
}