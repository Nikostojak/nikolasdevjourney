import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Container from '../../../components/Container';

export default function BlogPost() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: '#1a202c',
        color: '#e2e8f0',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Navbar />

      <Container>
        <article
          style={{
            flex: 1,
            padding: '2rem 0',
            maxWidth: '800px',
            width: '100%',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            overflowWrap: 'break-word',
            boxSizing: 'border-box',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700, color: '#edf2f7' }}>
            🔌 Why I Added Backend to My Developer Blog
          </h1>

          <div style={{ backgroundColor: '#2d3748', padding: '1.5rem', borderRadius: '8px' }}>
            <p style={{ marginBottom: '1rem' }}>
              When I first started building <strong>Nikolas Dev Journey</strong>, I focused purely on the frontend. It was a
              great way to get started with React and design a clean interface. But as I planned to add more dynamic content
              like blog posts, comments, and future project updates, I realized I needed a backend to fetch and manage data properly.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '1.5rem 0 1rem', color: '#edf2f7' }}>🔁 Benefits of Adding a Backend</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li><strong>Dynamic Content:</strong> Blog posts are now fetched from an API, not hardcoded.</li>
              <li><strong>Scalability:</strong> Easier to connect to a real database later.</li>
              <li><strong>Cleaner Logic:</strong> Separation of content and layout makes maintenance simpler.</li>
              <li><strong>API Routes:</strong> I used <code>/app/api/blog/route.js</code> to return structured JSON data for my blog.</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '1.5rem 0 1rem', color: '#edf2f7' }}>🧱 Folder Structure Update</h2>
            <div
              style={{
                background: '#1a202c',
                padding: '1rem',
                borderRadius: '8px',
                overflowX: 'auto',
                FwhiteSpace: 'pre',
                fontFamily: "'Fira Code', monospace",
                color: '#e2e8f0',
                marginBottom: '1rem',
              }}
            >
{`/app
  /api
    /blog
      route.js       ← returns blog posts
  /blog
    page.js
    /posts
      /why-i-added-backend
        page.js`}
            </div>

            <h2 style={{ fontSize: '1.8rem', margin: '1.5rem 0 1rem', color: '#edf2f7' }}>🔌 Connecting API + Frontend</h2>
            <p style={{ marginBottom: '1rem' }}>
              On the <code>/blog</code> page, I fetch all blog posts using <code>fetch('/api/blog')</code>. This lets me render new posts automatically
              just by updating the backend response — no need to manually edit the page.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '1.5rem 0 1rem', color: '#edf2f7' }}>✅ What I Gained</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>More dynamic and scalable blog architecture</li>
              <li>Practice with API design and separation of concerns</li>
              <li>Easier to add real CMS or database in the future</li>
            </ul>

            <blockquote style={{ fontStyle: 'italic', marginTop: '2rem', color: '#a0aec0', borderLeft: '4px solid #63b3ed', paddingLeft: '1rem' }}>
              “This small shift toward backend logic opened a lot of new possibilities.”
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}