export const metadata = {
  title: 'Nikolas Dev Journey | How I Built This Blog',
  description: 'Step-by-step guide on how I created and deployed my personal developer blog using Next.js, React, and Vercel.',
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
            Building Nikolas Dev Journey: How I Created My Developer Blog
          </h1>

          <div className="blog-post-content">
            <p>
              Creating this blog wasn&apos;t just a coding project — it was a meaningful step in documenting
              my transition from philosophical studies to the world of software development. I built <strong>Nikolas Dev Journey</strong> to
              serve as both a personal journal and a professional platform, showcasing what I learn as I grow as a self-taught developer.
              In this first post, I&apos;ll walk you through how I structured, styled, and deployed this blog using modern technologies.
            </p>

            <h2 className="blog-post-subtitle">Technologies I Used</h2>
            <ul>
              <li><strong>Next.js</strong> — React-based framework with powerful routing and SSR.</li>
              <li><strong>React</strong> — Component-based JS library for building UIs.</li>
              <li><strong>Node.js</strong> — Backend JS runtime used via Next.js.</li>
              <li><strong>Vercel</strong> — CI/CD and deployment.</li>
              <li><strong>Git & GitHub</strong> — Version control & collaboration.</li>
            </ul>

            <h2 className="blog-post-subtitle">Folder Structure</h2>
            
            <CodeBlock 
              language="bash" 
              filename="project-structure.txt"
              title="Blog Project Structure"
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
    CodeBlock.js
globals.css
layout.js
page.js`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Styling & Design</h2>
            <p>
              I kept the design clean, minimal, and readable — optimized for both desktop and mobile:
            </p>
            <ul>
              <li>A <strong>hero section</strong> on the homepage introduces the blog and links to the latest post.</li>
              <li>Each page follows a similar layout with <code>Navbar</code>, content, and <code>Footer</code>.</li>
              <li>Fonts are loaded via <a href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts" target="_blank" rel="noopener noreferrer" aria-label="Next.js font optimization documentation">next/font</a>, using <strong>Inter</strong>.</li>
              <li>Backgrounds, spacing, and alignment are all responsive and visually balanced.</li>
            </ul>

            <h2 className="blog-post-subtitle">CSS Styling Example</h2>
            <p>
              Here&apos;s some of the key CSS that makes the blog look great:
            </p>

            <CodeBlock 
              language="css" 
              filename="app/globals.css"
              title="Blog Styling"
            >
{`:root {
  --background: #1a202c;
  --foreground: #e2e8f0;
  --accent: #63b3ed;
  --font-mono: 'Fira Code', monospace;
}

.hero-section {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 90vh;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2.5rem;
  font-weight: 900;
  animation: fadeIn 1s ease-in-out;
  line-height: 1.2;
}

.hero-button {
  padding: 0.8rem 1.5rem;
  background-color: var(--accent);
  color: #ffffff;
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

            <h2 className="blog-post-subtitle">Deployment to Vercel</h2>
            <p>
              Deploying with <strong>Vercel</strong> took just a few minutes:
            </p>
            <ol>
              <li>Connected my GitHub repo to Vercel.</li>
              <li>Each commit triggers a build & deployment.</li>
              <li>Custom domain set up: <a href="https://nikolasdevjourney.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Nikolas Dev Journey website">nikolasdevjourney.com</a></li>
            </ol>

            <h2 className="blog-post-subtitle">Connecting Frontend and Backend</h2>
            <p>
              After successfully deploying the blog to Vercel, I integrated a simple backend using Next.js API routes.
              Instead of hardcoding posts directly into the frontend, I created a <code>/app/api/blog/route.js</code> file
              that returns blog post data in JSON format.
            </p>

            <h2 className="blog-post-subtitle">API Route Example</h2>
            <p>
              Here&apos;s how I structured my blog API route:
            </p>

            <CodeBlock 
              language="javascript" 
              filename="app/api/blog/route.js"
              title="Blog API Route"
            >
{`export async function GET() {
  try {
    const posts = [
      {
        title: "How I Built This Blog",
        slug: "how-i-built-this-blog",
        date: "2025-04-30",
        excerpt: "Step-by-step guide of how I created my blog.",
        category: "Blog Development",
        tags: ["Next.js", "React", "Vercel"],
        isFeatured: false
      },
      // More posts...
    ];

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }), 
      { status: 500 }
    );
  }
}`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Frontend Data Fetching</h2>
            <p>
              And here&apos;s how I fetch the data on the frontend:
            </p>

            <CodeBlock 
              language="javascript" 
              filename="app/blog/page.js"
              title="Blog List Component"
            >
{`'use client';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog', {
          cache: 'no-store',
        });
        
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map(post => (
          <div key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))
      )}
    </div>
  );
}`}
            </CodeBlock>

            <p>
              This approach keeps the code organized, flexible, and easy to scale when I start adding more posts in the future.
              Since everything is still within the same Next.js app, deployment to Vercel remains seamless.
            </p>

            <h2 className="blog-post-subtitle">Lessons Learned</h2>
            <ul>
              <li>Be careful with <strong>case sensitivity</strong> in file names (Vercel is Linux-based).</li>
              <li>Reusable components like Navbar/Footer save a lot of time and keep code consistent.</li>
              <li>Planning routes and layout early made the site easier to scale.</li>
              <li>Starting simple and iterating is more productive than chasing perfection.</li>
            </ul>

            <h2 className="blog-post-subtitle">What&apos;s Next?</h2>
            <p>
              This is just the beginning of the journey. I&apos;ll be writing about:
            </p>
            <ul>
              <li>What I&apos;m learning in Python & JavaScript</li>
              <li>Web development tips and tutorials</li>
              <li>Project breakdowns and reflections</li>
            </ul>

            <blockquote className="blog-post-quote">
              &quot;From metaphysics to machine code — it&apos;s been a surprising journey, but I&apos;m just getting started.&quot;
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}