export const metadata = {
  title: 'Nikolas Dev Journey | Why I Added Backend',
  description: 'A breakdown of why I structured my blog using both frontend and backend for better scalability.',
};

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
        <article className="blog-post-section" role="article" aria-labelledby="blog-post-title">
          <h1 className="blog-post-title" id="blog-post-title">
            🔌 Why I Added Backend to My Developer Blog
          </h1>

          <div className="blog-post-content">
            <p>
              When I first started building <strong>Nikolas Dev Journey</strong>, I focused purely on the frontend. It was a
              great way to get started with React and design a clean interface. But as I planned to add more dynamic content
              like blog posts, comments, and future project updates, I realized I needed a backend to fetch and manage data properly.
            </p>

            <h2 className="blog-post-subtitle">🔁 Benefits of Adding a Backend</h2>
            <ul>
              <li><strong>Dynamic Content:</strong> Blog posts are now fetched from an API, not hardcoded.</li>
              <li><strong>Scalability:</strong> Easier to connect to a real database later.</li>
              <li><strong>Cleaner Logic:</strong> Separation of content and layout makes maintenance simpler.</li>
              <li><strong>API Routes:</strong> I used <code>/app/api/blog/route.js</code> to return structured JSON data for my blog.</li>
            </ul>

            <h2 className="blog-post-subtitle">🧱 Folder Structure Update</h2>
            <div className="blog-post-code">
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

            <h2 className="blog-post-subtitle">🔌 Connecting API + Frontend</h2>
            <p>
              On the <code>/blog</code> page, I fetch all blog posts using <code>fetch(&apos;/api/blog&apos;)</code>. This lets me render new posts automatically
              just by updating the backend response — no need to manually edit the page.
            </p>

            <h2 className="blog-post-subtitle">✅ What I Gained</h2>
            <ul>
              <li>More dynamic and scalable blog architecture</li>
              <li>Practice with API design and separation of concerns</li>
              <li>Easier to add real CMS or database in the future</li>
            </ul>

            <blockquote className="blog-post-quote">
              “This small shift toward backend logic opened a lot of new possibilities.”
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}