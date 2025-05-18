export const metadata = {
    title: 'Nikolas Dev Journey | My Blog Progress',
    description: 'Reflecting on the journey from a simple blog to an advanced developer portfolio with modern features.',
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
              📈 My Blog Progress: From Simple Beginnings to an Advanced Portfolio
            </h1>
  
            <div className="blog-post-content">
              <p>
                When I started <strong>Nikolas Dev Journey</strong>, it was a basic Next.js project with a few static pages. My goal was to document my learning as a self-taught developer transitioning from philosophy to programming. Over time, through trial, error, and a lot of learning, this blog has evolved into a sophisticated portfolio showcasing my skills. In this post, I&apos;ll reflect on the key milestones of this journey and share what I&apos;ve learned along the way.
              </p>
  
              <h2 className="blog-post-subtitle">🌱 The Beginning: A Simple Blog</h2>
              <p>
                My first version was minimal: a homepage, an about page, and a blog with static content. I used Next.js for its simplicity and focused on getting the basics right—routing, components, and a clean layout. There were no fancy features, just a foundation to build upon.
              </p>
              <ul>
                <li><strong>Core pages:</strong> Homepage, About, Contact, and Blog.</li>
                <li><strong>Tech stack:</strong> Next.js, React, and basic CSS.</li>
                <li><strong>Goal:</strong> Create a space to share my learning journey.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">🎨 First Steps in Design</h2>
              <p>
                Early on, I adopted a dark theme to give the blog a modern, developer-friendly look. I chose the <code>Inter</code> font for readability and introduced <code>Fira Code</code> for headings to add a technical vibe. The color palette—<code>#1a202c</code> for the background and <code>#e2e8f0</code> for text—set the tone for a sleek, professional aesthetic.
              </p>
              <ul>
                <li><strong>Dark theme:</strong> Background color <code>#1a202c</code> with high-contrast text.</li>
                <li><strong>Fonts:</strong> <code>Inter</code> for body, <code>Fira Code</code> for headings.</li>
                <li><strong>Responsive design:</strong> Ensured the blog looked good on mobile and desktop.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">🗂️ Project Structure</h2>
              <p>
                As the blog grew, I organized the codebase to support new features. The current structure reflects the addition of dynamic blog posts, API routes, and reusable components:
              </p>
              <div className="blog-post-code">
                {`/app
    /api
      /blog
        route.js
    /blog
      page.js
      /posts
        /how-i-built-this-blog
          page.js
        /why-i-added-backend
          page.js
        /learning-python-basics
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
  globals.css
  layout.js
  page.js`}
              </div>
  
              <h2 className="blog-post-subtitle">🚀 Adding Interactivity</h2>
              <p>
                To make the blog more engaging, I introduced interactive features. The biggest upgrades were category tabs, a search bar, and a featured post section. These additions made it easier for visitors—especially potential employers—to explore my work.
              </p>
              <ul>
                <li><strong>Tabs:</strong> Filter posts by categories like &quod;Blog Development&quod; and &quod;Python&quod;.</li>
                <li><strong>Search:</strong> A search bar to quickly find posts by title or excerpt.</li>
                <li><strong>Featured post:</strong> Highlights my best work at the top of the blog page.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">🌟 Improving User Experience</h2>
              <p>
                User experience became a priority as the blog grew. I added animations to make transitions smoother, improved accessibility with ARIA attributes, and ensured the site was fully responsive. These changes made the blog more polished and inclusive.
              </p>
              <ul>
                <li><strong>Animations:</strong> Subtle <code>fadeInUp</code> effects for posts and tabs.</li>
                <li><strong>Accessibility:</strong> ARIA roles like <code>role="tablist"</code> and <code>aria-selected</code> for screen readers.</li>
                <li><strong>Responsiveness:</strong> Grid layouts adapt to mobile screens seamlessly.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">📚 Lessons Learned and Future Plans</h2>
              <p>
                This journey taught me more than just coding. I learned to tackle errors (like hydration issues and module errors), organize complex codebases, and prioritize user needs. Each challenge was a chance to grow as a developer.
              </p>
              <ul>
                <li><strong>Error handling:</strong> Debugging hydration errors showed me the importance of server-client consistency.</li>
                <li><strong>Code organization:</strong> Reusable components and API routes made scaling easier.</li>
                <li><strong>User focus:</strong> Accessibility and responsiveness are key to a great portfolio.</li>
              </ul>
              <p>
                Looking ahead, I plan to add syntax highlighting for code blocks, a comment system for reader engagement, and possibly a light theme toggle. My goal is to keep pushing the boundaries of what this blog can do while sharing my progress.
              </p>
  
              <blockquote className="blog-post-quote">
                “From a single page to a dynamic portfolio, every line of code tells the story of my growth as a developer.”
              </blockquote>
            </div>
          </article>
        </Container>
  
        <Footer />
      </main>
    );
  }