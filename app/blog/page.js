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
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

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

  // Jedinstvene kategorije
  const categories = ['All', ...new Set(posts.map(post => post.category || 'Uncategorized'))];

  // Filtrirani postovi prema tabu i pretraživanju
  const filteredPosts = posts
    .filter(post => activeTab === 'All' || post.category === activeTab)
    .filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Paginacija
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Ikone za kategorije
  const categoryIcons = {
    'Blog Development': '🛠️',
    'Python': '🐍',
    'Javascript': '🌐',
    'Uncategorized': '📝',
    'All': '🌐'
  };

  // Navigacija paginacije
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <main
      className="page-transition"
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
            Developer Blog
          </h1>

          {error ? (
            <p className="blog-list-error">Error: {error}</p>
          ) : loading ? (
            <p className="blog-list-error loading">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="blog-list-error">No blog posts found.</p>
          ) : (
            <>
              {posts.find(post => post.isFeatured) && (
                <div className="blog-featured-post">
                  <article className="blog-featured-item">
                    <div className="blog-post-badge">
                      {categoryIcons[posts.find(post => post.isFeatured).category] || '📝'} {posts.find(post => post.isFeatured).category}
                    </div>
                    <h2 className="blog-featured-title">
                      <Link
                        href={`/blog/posts/${posts.find(post => post.isFeatured).slug}`}
                        className="blog-post-link"
                        aria-label={`Read featured blog post: ${posts.find(post => post.isFeatured).title}`}
                      >
                        {posts.find(post => post.isFeatured).title}
                      </Link>
                    </h2>
                    <p className="blog-post-date">{posts.find(post => post.isFeatured).date}</p>
                    <p className="blog-post-excerpt">{posts.find(post => post.isFeatured).excerpt}</p>
                    <Link
                      href={`/blog/posts/${posts.find(post => post.isFeatured).slug}`}
                      className="blog-list-read-more"
                      aria-label={`Read more about ${posts.find(post => post.isFeatured).title}`}
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
                </div>
              )}

              <input
                type="text"
                className="blog-search-input"
                placeholder="Search posts... (e.g., Python, Progress)"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                aria-label="Search blog posts"
              />

              <div className="blog-tabs" role="tablist">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`blog-tab ${activeTab === category ? 'blog-tab-active' : ''}`}
                    onClick={() => { setActiveTab(category); setCurrentPage(1); }}
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
                  {paginatedPosts.length === 0 ? (
                    <p className="blog-list-error">No posts match your search or category.</p>
                  ) : (
                    paginatedPosts.map((post, index) => (
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

                {totalPages > 1 && (
                  <div className="blog-pagination">
                    <button
                      className={`blog-pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                      aria-label="Go to previous page"
                    >
                      Previous
                    </button>
                    <span className="blog-pagination-info">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      className={`blog-pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      aria-label="Go to next page"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </section>
      </Container>
      <Footer />
    </main>
  );
}