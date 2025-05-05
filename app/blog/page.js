'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog', {
          cache: 'no-store'
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      }
    }
    fetchPosts();
  }, []);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1a202c',
      color: '#e2e8f0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <Navbar />

      <Container>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          marginBottom: '3rem',
          fontWeight: 800,
          color: '#edf2f7',
          textAlign: 'center',
          letterSpacing: '-0.025em',
          animation: 'fadeIn 1s ease-in-out'
        }}>
          📝 Developer Blog
        </h1>

        {error ? (
          <p style={{ 
            color: '#f87171',
            textAlign: 'center',
            fontSize: '1.1rem',
            margin: '2rem 0'
          }}>
            Error: {error}
          </p>
        ) : posts.length === 0 ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #63b3ed',
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            padding: '0 1rem'
          }}>
            {posts.map((post, index) => (
              <div 
                key={post.slug} 
                style={{ 
                  backgroundColor: '#2d3748',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  animation: `fadeInUp 0.5s ease-in-out ${index * 0.1}s both`,
                  ':hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                  }
                }}
              >
                <h2 style={{ 
                  fontSize: '1.6rem',
                  marginBottom: '0.75rem',
                  fontWeight: 700,
                  lineHeight: '1.3'
                }}>
                  <Link 
                    href={`/blog/posts/${post.slug}`} 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#63b3ed',
                      transition: 'color 0.2s ease',
                      ':hover': {
                        color: '#90cdf4'
                      }
                    }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <p style={{ 
                  color: '#a0aec0',
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                  fontStyle: 'italic'
                }}>
                  {post.date}
                </p>
                <p style={{ 
                  color: '#e2e8f0',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  marginBottom: '1rem'
                }}>
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/posts/${post.slug}`} 
                  style={{ 
                    color: '#63b3ed',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.2s ease',
                    ':hover': {
                      color: '#90cdf4'
                    }
                  }}
                >
                  Read more 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}
      </Container>

      <Footer />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}