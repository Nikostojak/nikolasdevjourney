import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function BlogPost() {
  return (
    <main
    style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins', Arial, sans-serif",
        backgroundColor: '#e0e0e0',
        color: '#333',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Navbar />

      <article
        style={{
            flex: 1,
            padding: '3rem 1.5rem',
            maxWidth: '800px',
            width: '100%',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            overflowWrap: 'break-word',
            boxSizing: 'border-box',
          }}
        >
        <h1 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>
        🔌 Why I Combined Backend and Frontend for My Developer Blog
        </h1>

        <p>
          When I first started building <strong>Nikolas Dev Journey</strong>, I focused purely on the frontend. It was a
          great way to get started with React and design a clean interface. But as I planned to add more dynamic content
          like blog posts, comments, and future project updates, I realized I needed to fetch and manage data properly.
        </p>

        <h2>🔁 The Benefits of Adding a Backend (via API Routes)</h2>
        <ul>
          <li> <strong>Dynamic Content:</strong> Blog posts are now fetched from an API, not hardcoded.</li>
          <li> <strong>Scalability:</strong> Easier to connect to a real database later.</li>
          <li> <strong>Cleaner Logic:</strong> Separation of content and layout makes maintenance simpler.</li>
          <li> <strong>API Routes:</strong> I used <code>/app/api/blog/route.js</code> to return structured JSON data for my blog.</li>
        </ul>

        <h2>🧱 Folder Structure Update</h2>
        <pre style={{ background: '#eee', padding: '1rem', borderRadius: '8px' }}>
{`/app
  /api
    /blog
      route.js       ← returns blog posts
  /blog
    page.js
    /posts
      /why-i-used-backend
        page.js`}
        </pre>

        <h2>🔌 Connecting API + Frontend</h2>
        <p>
          On the <code>/blog</code> page, I fetch all blog posts using <code>fetch(&apos;/api/blog&apos;)</code>. This lets me render new posts automatically
          just by updating the backend response — no need to manually edit the page.
        </p>

        <h2>✅ What I Gained</h2>
        <ul>
          <li> More dynamic and scalable blog architecture</li>
          <li> Practice with API design and separation of concerns</li>
          <li> Easier to add real CMS or database in the future</li>
        </ul>

        <blockquote style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          “This small shift toward backend logic opened a lot of new possibilities.”
        </blockquote>
      </article>

      <Footer />
    </main>
  );
}
