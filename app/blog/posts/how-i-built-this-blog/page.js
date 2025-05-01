// app/blog/posts/how-i-built-this-blog/page.j

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
        backgroundColor: '#f9f9f9',
        color: '#333',
      }}
    >
      <Navbar />

      <article
        style={{
          flex: 1,
          padding: '3rem 1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8',
          fontSize: '1.1rem',
        }}
      >
        <h1 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>
          🛠️ Building Nikolas Dev Journey: How I Created My Developer Blog
        </h1>

        <p>
          Creating this blog wasn&rsquo;t just a coding project — it was a meaningful step in documenting
          my transition from philosophical studies to the world of software development. I built <strong>Nikolas Dev Journey</strong> to
          serve as both a personal journal and a professional platform, showcasing what I learn as I grow as a self-taught developer.
          In this first post, I&rsquo;ll walk you through how I structured, styled, and deployed this blog using modern technologies.
        </p>

        <h2>⚙️ Technologies I Used</h2>
        <ul>
          <li><strong>Next.js</strong> — React-based framework with powerful routing and SSR.</li>
          <li><strong>React</strong> — Component-based JS library for building UIs.</li>
          <li><strong>Node.js</strong> — Backend JS runtime used via Next.js.</li>
          <li><strong>Vercel</strong> — CI/CD and deployment.</li>
          <li><strong>Git & GitHub</strong> — Version control & collaboration.</li>
        </ul>

        <h2>🗂️ Folder Structure</h2>
        <pre style={{ background: '#eee', padding: '1rem', borderRadius: '8px' }}>
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
        </pre>

        <h2>🎨 Styling & Design</h2>
        <p>
          I kept the design clean, minimal, and readable — optimized for both desktop and mobile:
        </p>
        <ul>
          <li>A <strong>hero section</strong> on the homepage introduces the blog and links to the latest post.</li>
          <li>Each page follows a similar layout with <code>Navbar</code>, content, and <code>Footer</code>.</li>
          <li>Fonts are loaded via <a href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts" target="_blank" rel="noopener noreferrer">next/font</a>, using <strong>Poppins</strong>.</li>
          <li>Backgrounds, spacing, and alignment are all responsive and visually balanced.</li>
        </ul>

        <h2>🚀 Deployment to Vercel</h2>
        <p>
          Deploying with <strong>Vercel</strong> took just a few minutes:
        </p>
        <ol>
          <li>Connected my GitHub repo to Vercel.</li>
          <li>Each commit triggers a build & deployment.</li>
          <li>Custom domain set up: <a href="https://nikolasdevjourney.com" target="_blank" rel="noopener noreferrer">nikolasdevjourney.com</a></li>
        </ol>
        <h2>🔗 Connecting Frontend and Backend</h2>
<p>
  After successfully deploying the blog to Vercel, I integrated a simple backend using Next.js API routes.
  Instead of hardcoding posts directly into the frontend, I created a <code>/app/api/blog/route.js</code> file
  that returns blog post data in JSON format.
</p>
<p>
  On the frontend, the blog list page fetches this data dynamically using <code>fetch('/api/blog')</code> and renders it.
  This approach keeps the code organized, flexible, and easy to scale when I start adding more posts in the future.
</p>
<p>
  Since everything is still within the same Next.js app, deployment to Vercel remains seamless. API routes are treated as serverless functions and work automatically.
</p>


        <h2>📌 Lessons Learned</h2>
        <ul>
          <li>Be careful with <strong>case sensitivity</strong> in file names (Vercel is Linux-based).</li>
          <li>Reusable components like Navbar/Footer save a lot of time and keep code consistent.</li>
          <li>Planning routes and layout early made the site easier to scale.</li>
          <li>Starting simple and iterating is more productive than chasing perfection.</li>
        </ul>

        <h2>✅ What&rsquo;s Next?</h2>
        <p>
          This is just the beginning of the journey. I&rsquo;ll be writing about:
        </p>
        <ul>
          <li>What I&rsquo;m learning in Python & JavaScript</li>
          <li>Web development tips and tutorials</li>
          <li>Project breakdowns and reflections</li>
        </ul>

        <blockquote style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          “From metaphysics to machine code — it&rsquo;s been a surprising journey, but I&rsquo;m just getting started.”
        </blockquote>
      </article>

      <Footer />
    </main>
  );
}
