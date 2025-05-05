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
            padding: '3rem 0',
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            overflowWrap: 'break-word',
            boxSizing: 'border-box',
          }}
        >
          <h1 className="blog-post-title">
            🛠️ Building Nikolas Dev Journey: How I Created My Developer Blog
          </h1>

          <div className="blog-post-content">
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Creating this blog wasn&ldquo;t just a coding project — it was a meaningful step in documenting
              my transition from philosophical studies to the world of software development. I built <strong>Nikolas Dev Journey</strong> to
              serve as both a personal journal and a professional platform, showcasing what I learn as I grow as a self-taught developer.
              In this first post, I&ldquo;ll walk you through how I structured, styled, and deployed this blog using modern technologies.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>⚙️ Technologies I Used</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li><strong>Next.js</strong> — React-based framework with powerful routing and SSR.</li>
              <li><strong>React</strong> — Component-based JS library for building UIs.</li>
              <li><strong>Node.js</strong> — Backend JS runtime used via Next.js.</li>
              <li><strong>Vercel</strong> — CI/CD and deployment.</li>
              <li><strong>Git & GitHub</strong> — Version control & collaboration.</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🗂️ Folder Structure</h2>
            <div
              style={{
                background: '#1a202c',
                padding: '1.5rem',
                borderRadius: '8px',
                overflowX: 'auto',
                whiteSpace: 'pre',
                fontFamily: "'Fira Code', monospace",
                color: '#e2e8f0',
                marginBottom: '1.5rem',
                boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              {`/app
  /about
    page.js
  /blog
    page.js
    /posts
      /how-i-built-this-blog
        page.js
  /contact
    page.js
  /components
    Navbar.js
    Footer.js
globals.css
layout.js
page.js`}
            </div>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🎨 Styling & Design</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              I kept the design clean, minimal, and readable — optimized for both desktop and mobile:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li>A <strong>hero section</strong> on the homepage introduces the blog and links to the latest post.</li>
              <li>Each page follows a similar layout with <code>Navbar</code>, content, and <code>Footer</code>.</li>
              <li>Fonts are loaded via <a href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts" target="_blank" rel="noopener noreferrer" style={{ color: '#63b3ed', textDecoration: 'none' }}>next/font</a>, using <strong>Inter</strong>.</li>
              <li>Backgrounds, spacing, and alignment are all responsive and visually balanced.</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🚀 Deployment to Vercel</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              Deploying with <strong>Vercel</strong> took just a few minutes:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li>Connected my GitHub repo to Vercel.</li>
              <li>Each commit triggers a build & deployment.</li>
              <li>Custom domain set up: <a href="https://nikolasdevjourney.com" target="_blank" rel="noopener noreferrer" style={{ color: '#63b3ed', textDecoration: 'none' }}>nikolasdevjourney.com</a></li>
            </ol>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🔗 Connecting Frontend and Backend</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              After successfully deploying the blog to Vercel, I integrated a simple backend using Next.js API routes.
              Instead of hardcoding posts directly into the frontend, I created a <code>/app/api/blog/route.js</code> file
              that returns blog post data in JSON format.
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              On the frontend, the blog list page fetches this data dynamically using <code>fetch(&ldquo;/api/blog&ldquo;)</code> and renders it.
              This approach keeps the code organized, flexible, and easy to scale when I start adding more posts in the future.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Since everything is still within the same Next.js app, deployment to Vercel remains seamless. API routes are treated as serverless functions and work automatically.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>📌 Lessons Learned</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li>Be careful with <strong>case sensitivity</strong> in file names (Vercel is Linux-based).</li>
              <li>Reusable components like Navbar/Footer save a lot of time and keep code consistent.</li>
              <li>Planning routes and layout early made the site easier to scale.</li>
              <li>Starting simple and iterating is more productive than chasing perfection.</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>✅ What&ldquo;s Next?</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              This is just the beginning of the journey. I&ldquo;ll be writing about:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li>What I&ldquo;m learning in Python & JavaScript</li>
              <li>Web development tips and tutorials</li>
              <li>Project breakdowns and reflections</li>
            </ul>

            <blockquote style={{ 
              fontStyle: 'italic', 
              marginTop: '2.5rem', 
              color: '#a0aec0', 
              borderLeft: '4px solid #63b3ed', 
              paddingLeft: '1.5rem',
              fontSize: '1.1rem'
            }}>
              &ldquo;From metaphysics to machine code — it&ldquo;s been a surprising journey, but I&ldquo;m just getting started.&ldquo;
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}