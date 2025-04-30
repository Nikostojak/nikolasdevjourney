// app/blog/page.js

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Nikolas Dev Journey | Blog',
  description: 'My latest posts on programming, projects, and learning web development',
};

const posts = [
  {
    title: 'How I Built This Blog',
    date: 'April 30, 2025',
    description: 'This post explains how I created my personal blog using Next.js, Vercel, and GitHub.',
    slug: 'how-i-built-this-blog',
  },
];

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', backgroundColor: '#f2f2f2' }}>
      <Navbar />

      <section style={{ flex: 1, maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem', color: '#333' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📝 Blog</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Welcome to my developer blog! Here I share tutorials, lessons, and thoughts from my coding journey.
        </p>

        {posts.map((post) => (
          <div key={post.slug} style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid #ccc' }}>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{post.date}</p>
            <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{post.title}</h2>
            <p style={{ fontSize: '1rem', color: '#444' }}>{post.description}</p>
            <Link href={`/blog/posts/${post.slug}`} style={{ color: '#0070f3', fontWeight: 'bold', marginTop: '0.5rem', display: 'inline-block' }}>
              Read more →
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
