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
          fontSize: '2.5rem', 
          marginBottom: '2.5rem',
          fontWeight: 700,
          color: '#edf2f7'
        }}>
          📝 Developer Blog
        </h1>

        {error ? (
          <p style={{ color: '#a0aec0' }}>Error: {error}</p>
        ) : posts.length === 0 ? (
          <p style={{ color: '#a0aec0' }}>Loading posts...</p>
        ) : (
          posts.map(post => (
            <div 
              key={post.slug} 
              style={{ 
                marginBottom: '2.5rem',
                backgroundColor: '#2d3748',
                padding: '1.5rem',
                borderRadius: '8px',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                <Link 
                  href={`/blog/posts/${post.slug}`} 
                  style={{ 
                    textDecoration: 'none', 
                    color: '#63b3ed',
                    ':hover': {
                      color: '#90cdf4'
                    }
                  }}
                >
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {post.date}
              </p>
              <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>{post.excerpt}</p>
              <Link 
                href={`/blog/posts/${post.slug}`} 
                style={{ 
                  color: '#63b3ed',
                  textDecoration: 'none',
                  fontWeight: 500,
                  display: 'inline-block',
                  marginTop: '1rem',
                  ':hover': {
                    color: '#90cdf4'
                  }
                }}
              >
                Read more →
              </Link>
            </div>
          ))
        )}
      </Container>

      <Footer />
    </main>
  );
}