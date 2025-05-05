import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
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

        {posts.length === 0 ? (
          <p style={{ color: '#a0aec0' }}>No blog posts found.</p>
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
