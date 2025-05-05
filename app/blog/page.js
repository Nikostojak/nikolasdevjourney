export const metadata = {
  title: 'Nikolas Dev Journey | Blog',
  description: 'Explore my blog posts on Python, web development, and my journey as a self-taught developer.',
};


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Link from 'next/link';

async function getPosts() {
  try {
    const res = await fetch(`/api/blog`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  console.log('Rendering BlogPage');
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
        <h1 className="blog-list-title">
          📝 Developer Blog
        </h1>

        {posts.length === 0 ? (
          <p className="blog-list-error">
            No blog posts found. There may be an issue with fetching posts.
          </p>
        ) : (
          <div className="blog-list-grid">
            {posts.map((post, index) => (
              <div 
                key={post.slug} 
                className="blog-list-item"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  className="blog-list-read-more"
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
    </main>
  );
}