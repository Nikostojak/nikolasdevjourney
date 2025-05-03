import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, {
    cache: 'no-store'
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e0e0e0',
      fontFamily: "'Poppins', Arial, sans-serif"
    }}>
      <Navbar />

      <Container>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>📝 Blog</h1>

        {posts.length === 0 ? (
          <p>No blog posts found.</p>
        ) : (
          posts.map(post => (
            <div key={post.slug} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem' }}>
                <Link href={`/blog/posts/${post.slug}`} style={{ textDecoration: 'none', color: '#0070f3' }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#666' }}>{post.date}</p>
              <p style={{ marginTop: '0.5rem' }}>{post.excerpt}</p>
              <Link href={`/blog/posts/${post.slug}`} style={{ color: '#0070f3' }}>
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

