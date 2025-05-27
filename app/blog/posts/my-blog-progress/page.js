export const metadata = {
  title: 'Nikolas Dev Journey | My Blog Progress',
  description: 'Reflecting on the journey from a simple blog to an advanced developer portfolio with modern features.',
};

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Container from '../../../components/Container';
import CodeBlock from '../../../components/CodeBlock';

export default function BlogPost() {
  return (
    <main
      className="page-transition"
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
            My Blog Progress: From Simple Beginnings to an Advanced Portfolio
          </h1>

          <div className="blog-post-content">
            <p>
              When I started <strong>Nikolas Dev Journey</strong>, it was a basic Next.js project with a few static pages. My goal was to document my learning as a self-taught developer transitioning from philosophy to programming. Over time, through trial, error, and a lot of learning, this blog has evolved into a sophisticated portfolio showcasing my skills.
            </p>

            <h2 className="blog-post-subtitle">The Beginning: A Simple Blog</h2>
            <p>
              My first version was minimal: a homepage, an about page, and a blog with static content. I used Next.js for its simplicity and focused on getting the basics right.
            </p>

            <CodeBlock 
              language="javascript" 
              filename="app/page.js"
              title="My First Homepage Component"
            >
{`// Very basic first version
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Nikolas Dev Journey</h1>
      <p>Follow my programming journey!</p>
      <nav>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}`}
            </CodeBlock>

            <ul>
              <li><strong>Core pages:</strong> Homepage, About, Contact, and Blog.</li>
              <li><strong>Tech stack:</strong> Next.js, React, and basic CSS.</li>
              <li><strong>Goal:</strong> Create a space to share my learning journey.</li>
            </ul>

            <h2 className="blog-post-subtitle">First Steps in Design</h2>
            <p>
              Early on, I adopted a dark theme to give the blog a modern, developer-friendly look. I chose the <code>Inter</code> font for readability and introduced <code>Fira Code</code> for headings to add a technical vibe.
            </p>

            <CodeBlock 
              language="css" 
              filename="app/globals.css"
              title="Initial Design System"
            >
{`:root {
  --background: #1a202c;
  --foreground: #e2e8f0;
  --accent: #63b3ed;
  --font-mono: 'Fira Code', monospace;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  line-height: 1.6;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  color: var(--foreground);
  text-align: center;
}

.hero-button {
  background-color: var(--accent);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-button:hover {
  background-color: #90cdf4;
  transform: scale(1.05);
}`}
            </CodeBlock>

            <ul>
              <li><strong>Dark theme:</strong> Background color <code>#1a202c</code> with high-contrast text.</li>
              <li><strong>Fonts:</strong> <code>Inter</code> for body, <code>Fira Code</code> for headings.</li>
              <li><strong>Responsive design:</strong> Ensured the blog looked good on mobile and desktop.</li>
            </ul>

            <h2 className="blog-post-subtitle">Project Structure Evolution</h2>
            <p>
              As the blog grew, I organized the codebase to support new features. The current structure reflects the addition of dynamic blog posts, API routes, and reusable components.
            </p>

            <CodeBlock 
              language="bash" 
              filename="project-structure.txt"
              title="Current Project Structure"
            >
{`/app
  /api
    /blog
      route.js
  /blog
    page.js
    /posts
      /how-i-built-this-blog
        page.js
      /my-blog-progress
        page.js
  /about
    page.js
  /contact
    page.js
  /projects
    page.js
  /components
    Navbar.js
    Footer.js
    Container.js
    CodeBlock.js
    /animations
      FloatingCode.js
  globals.css
  layout.js
  page.js`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Adding Interactive Features</h2>
            <p>
              To make the blog more engaging, I introduced interactive features. The biggest upgrades were category tabs, a search bar, and a featured post section.
            </p>

            <CodeBlock 
              language="javascript" 
              filename="app/blog/page.js"
              title="Interactive Blog Features"
            >
{`'use client';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts
    .filter(post => activeTab === 'All' || post.category === activeTab)
    .filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <main>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="blog-tabs">
        {['All', 'Python', 'JavaScript'].map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </main>
  );
}`}
            </CodeBlock>

            <ul>
              <li><strong>Tabs:</strong> Filter posts by categories like "Blog Development" and "Python".</li>
              <li><strong>Search:</strong> A search bar to quickly find posts by title or excerpt.</li>
              <li><strong>Featured post:</strong> Highlights my best work at the top of the blog page.</li>
            </ul>

            <h2 className="blog-post-subtitle">Improving User Experience</h2>
            <p>
              User experience became a priority as the blog grew. I added animations to make transitions smoother, improved accessibility with ARIA attributes, and ensured the site was fully responsive.
            </p>

            <ul>
              <li><strong>Animations:</strong> Subtle fadeInUp effects for posts and tabs.</li>
              <li><strong>Accessibility:</strong> ARIA roles for screen readers.</li>
              <li><strong>Responsiveness:</strong> Grid layouts adapt to mobile screens seamlessly.</li>
            </ul>

            <h2 className="blog-post-subtitle">Lessons Learned and Future Plans</h2>
            <p>
              This journey taught me more than just coding. I learned to tackle errors, organize complex codebases, and prioritize user needs. Each challenge was a chance to grow as a developer.
            </p>

            <ul>
              <li><strong>Error handling:</strong> Debugging hydration errors showed me the importance of server-client consistency.</li>
              <li><strong>Code organization:</strong> Reusable components and API routes made scaling easier.</li>
              <li><strong>User focus:</strong> Accessibility and responsiveness are key to a great portfolio.</li>
              <li><strong>Performance optimization:</strong> Every feature should enhance user experience.</li>
              <li><strong>Continuous iteration:</strong> The best blogs evolve constantly.</li>
            </ul>

            <p>
              Looking ahead, I plan to add more interactive features, a comment system for reader engagement, and possibly a light theme toggle. My goal is to keep pushing the boundaries of what this blog can do while sharing my progress.
            </p>

            <blockquote className="blog-post-quote">
              "From a single page to a dynamic portfolio, every line of code tells the story of my growth as a developer."
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}