'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9',
      fontFamily: "'Poppins', Arial, sans-serif"
    }}>
      <Navbar />

      <section style={{
        flex: 1,
        padding: '3rem 1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#333'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>📝 Blog Posts</h1>

        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{ marginBottom: '2rem' }}>
              <h2>{post.title}</h2>
              <p><strong>{post.date}</strong></p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/posts/${post.slug}`} style={{ color: '#0070f3' }}>
                Read more →
              </Link>
            </div>
          ))
        )}
      </section>

      <Footer />
    </main>
  );
}
