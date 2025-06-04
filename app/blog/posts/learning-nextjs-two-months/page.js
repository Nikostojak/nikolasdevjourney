export const metadata = {
    title: 'Nikolas Dev Journey | Learning Next.js: Two Months of Building in Production',
    description: 'My practical journey learning Next.js by building a real developer blog - from App Router basics to deployment, featuring real code examples and lessons learned.',
  };
  
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  import Container from '../../../components/Container';
  import CodeBlock from '../../../components/CodeBlock';
  import { BlogComments } from '../../../components/Comments';
  
  export default function BlogPost() {
    return (
      <main
        className="page-layout"
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
              Learning Next.js: Two Months of Building in Production
            </h1>
  
            <div className="blog-post-content">
              <p>
                Two months ago, I knew nothing about Next.js beyond the fact that it was &quot;React but better.&quot; Coming from a Python background with zero web development experience, I decided to learn Next.js by building something real: my developer blog. Instead of following tutorials, I jumped straight into building <strong>Nikolas Dev Journey</strong> using Next.js 15.3.1 with the new App Router. In this post, I&apos;ll share what I&apos;ve learned about Next.js through practical examples from my own blog, covering everything from the basics to deployment.
              </p>
  
              <h2 className="blog-post-subtitle">What is Next.js and Why I Chose It</h2>
              <p>
                Next.js is a React framework that adds powerful features like server-side rendering, automatic code splitting, and file-based routing. When I was deciding how to build my blog, I researched several options but Next.js stood out for its combination of simplicity and power. Here&apos;s why I chose it over other options:
              </p>
              <ul>
                <li><strong>React-based:</strong> Built on React, which is industry-standard and has huge community support</li>
                <li><strong>File-based routing:</strong> Creating new pages is as simple as adding files to folders</li>
                <li><strong>Full-stack capabilities:</strong> Can handle both frontend and backend in one framework</li>
                <li><strong>Excellent deployment:</strong> Works seamlessly with Vercel (made by the same team)</li>
                <li><strong>App Router:</strong> The new approach makes building complex applications more intuitive</li>
                <li><strong>Performance:</strong> Built-in optimizations for images, fonts, and code splitting</li>
              </ul>
              <p>
                For a beginner like me, Next.js offered the perfect balance—powerful enough to build a professional blog, but simple enough to learn by doing.
              </p>
  
              <h2 className="blog-post-subtitle">Understanding the App Router: My Project Structure</h2>
              <p>
                Next.js 13 introduced the App Router, which completely changed how you structure applications. Instead of a <code>pages</code> directory, everything lives in an <code>app</code> directory. Here&apos;s how I structured my blog:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="project-structure.txt"
                title="My Next.js App Router Structure"
              >
  {`nikolas-dev-journey/
  ├── app/
  │   ├── layout.js              # Root layout for entire app
  │   ├── page.js                # Homepage (/)
  │   ├── globals.css            # Global styles
  │   ├── about/
  │   │   └── page.js            # About page (/about)
  │   ├── blog/
  │   │   ├── layout.js          # Blog-specific layout
  │   │   ├── page.js            # Blog listing (/blog)
  │   │   └── posts/
  │   │       └── [slug]/
  │   │           └── page.js    # Individual blog posts
  │   ├── projects/
  │   │   └── page.js            # Projects page (/projects)
  │   ├── contact/
  │   │   └── page.js            # Contact page (/contact)
  │   ├── api/
  │   │   ├── blog/
  │   │   │   └── route.js       # Blog API endpoint
  │   │   └── contact/
  │   │       └── route.js       # Contact form API
  │   └── components/
  │       ├── Navbar.js
  │       ├── Footer.js
  │       ├── CodeBlock.js
  │       └── ContactForm.js
  ├── package.json
  └── next.config.mjs`}
              </CodeBlock>
  
              <p>
                The beauty of this structure is that every <code>page.js</code> file automatically becomes a route. Want a new page? Just create a folder with a <code>page.js</code> file inside. This file-based routing eliminated the complexity of manual route configuration.
              </p>
  
              <h2 className="blog-post-subtitle">Building Layouts: The Root Layout Pattern</h2>
              <p>
                One of Next.js&apos;s most powerful features is its layout system. The root layout wraps your entire application and is where you define global elements like fonts, metadata, and analytics. Heres my root layout:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/layout.js"
                title="Root Layout with Global Configuration"
              >
  {`import { Inter } from 'next/font/google';
  import './globals.css';
  import GoogleAnalytics from './components/GoogleAnalytics';
  import { createMetadata } from './lib/metadata';
  
  const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
  });
  
  // Global metadata for the entire site
  export const metadata = createMetadata('home');
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en" className={inter.variable}>
        <body
          style={{
            backgroundColor: '#0a0f1c',
            color: '#e1e5e9',
            margin: 0,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <GoogleAnalytics GA_MEASUREMENT_ID="G-CMEMLMEFFR" />
          {children}
          
          {/* Structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Nikolas Stojak",
                "jobTitle": "Self-taught Software Developer",
                "url": "https://nikolasdevjourney.com",
                "sameAs": [
                  "https://www.linkedin.com/in/nikolas-stojak-335177285/",
                  "https://github.com/Nikostojak"
                ]
              })
            }}
          />
        </body>
      </html>
    );
  }`}
              </CodeBlock>
  
              <p>
                This layout runs on every page and handles global concerns like font loading, analytics, and SEO structured data. Next.js automatically optimizes the Google Font loading, which significantly improves performance compared to manual font loading.
              </p>
  
              <h2 className="blog-post-subtitle">Client vs Server Components: When to Use Which</h2>
              <p>
                One of the biggest learning curves in Next.js is understanding when to use server components (default) versus client components (marked with <code>'use client'</code>). Here&apos;s what I learned through building my blog:
              </p>
  
              <h3 className="blog-post-subtitle">Server Components (Default)</h3>
              <p>
                Server components run on the server and are great for static content and SEO. Most of my blog post pages are server components:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/blog/posts/[slug]/page.js"
                title="Server Component Example - Blog Post"
              >
  {`// No 'use client' directive = Server Component
  export const metadata = {
    title: 'My Blog Post | Nikolas Dev Journey',
    description: 'Description of my blog post for SEO',
  };
  
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  import Container from '../../../components/Container';
  
  export default function BlogPost() {
    return (
      <main className="page-layout">
        <Navbar />
        <Container>
          <article className="blog-post-section">
            <h1 className="blog-post-title">
              My Blog Post Title
            </h1>
            <div className="blog-post-content">
              <p>Static content that gets rendered on the server...</p>
            </div>
          </article>
        </Container>
        <Footer />
      </main>
    );
  }`}
              </CodeBlock>
  
              <h3 className="blog-post-subtitle">Client Components for Interactivity</h3>
              <p>
                Client components are needed for interactivity, state management, and browser APIs. My navbar with mobile menu is a perfect example:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/components/Navbar.js"
                title="Client Component Example - Interactive Navbar"
              >
  {`'use client';
  import { useState, useEffect, useRef } from 'react';
  import Link from 'next/link';
  
  export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      if (isMenuOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.classList.remove('menu-open');
      };
    }, [isMenuOpen]);
  
    return (
      <nav className="homepage-nav">
        <div className="nav-content">
          <Link href="/" className="logo">
            Nikolas<span className="logo-highlight">.Dev</span>
          </Link>
  
          <button
            className={\`hamburger \${isMenuOpen ? 'open' : ''}\`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon */}
          </button>
  
          <div className={\`navbar-menu \${isMenuOpen ? 'open' : ''}\`} ref={menuRef}>
            {['Blog', 'Projects', 'About', 'Contact'].map((page) => (
              <Link key={page} href={\`/\${page.toLowerCase()}\`}>
                {page}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }`}
              </CodeBlock>
  
              <p>
                The rule I follow: if it needs state, event handlers, or browser APIs, use <code>'use client'</code>. If it&apos;s just rendering static content, keep it as a server component for better performance.
              </p>
  
              <h2 className="blog-post-subtitle">API Routes: Building a Backend in Next.js</h2>
              <p>
                Next.js isn&apos;t just a frontend framework—it can handle your backend too. I use API routes for my blog data and contact form. Here&apos;s how my blog API works:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/api/blog/route.js"
                title="API Route Example - Blog Posts Endpoint"
              >
  {`export async function GET() {
    try {
      const posts = [
        {
          title: "Learning Next.js: Two Months of Building in Production",
          slug: "learning-nextjs-two-months",
          date: "2025-06-04",
          excerpt: "My practical journey learning Next.js by building a real developer blog.",
          category: "Next.js",
          tags: ["Next.js", "React", "Web Development"],
          isFeatured: true
        },
        {
          title: "From Zero to Functional: My First Month with JavaScript",
          slug: "my-javascript-journey",
          date: "2025-05-24",
          excerpt: "How I learned JavaScript fundamentals by building my blog.",
          category: "JavaScript",
          tags: ["JavaScript", "Learning Journey"],
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
      console.error("Error in /api/blog:", error);
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }), 
        { status: 500 }
      );
    }
  }`}
              </CodeBlock>
  
              <p>
                This API endpoint can be called from anywhere in my app with <code>fetch('/api/blog')</code>. Next.js handles all the server setup—I just focus on writing the logic.
              </p>
  
              <h2 className="blog-post-subtitle">Data Fetching: From Static to Dynamic</h2>
              <p>
                Next.js offers multiple ways to fetch data. I started with static data in my components, then moved to API calls for dynamic content. Here&apos;s how I fetch blog posts on my homepage:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/page.js"
                title="Client-Side Data Fetching with Error Handling"
              >
  {`'use client';
  import { useState, useEffect } from 'react';
  
  export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          setIsLoading(true);
          setError(null);
          const res = await fetch('/api/blog', { cache: 'no-store' });
          
          if (!res.ok) {
            throw new Error(\`Failed to fetch posts: \${res.status}\`);
          }
          
          const data = await res.json();
          if (!Array.isArray(data)) {
            throw new Error('Expected an array of posts');
          }
          setPosts(data);
        } catch (err) {
          console.error('Error fetching posts:', err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      
      fetchPosts();
    }, []);
  
    // Find featured and recent posts
    const featuredPost = posts.find(post => post?.isFeatured);
    const recentPosts = posts
      .filter(post => !post?.isFeatured)
      .sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0))
      .slice(0, 5);
  
    if (isLoading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <main>
        {/* Render posts */}
      </main>
    );
  }`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Image and Font Optimization</h2>
              <p>
                Next.js automatically optimizes images and fonts, which significantly improves performance. Here&apos;s how I handle fonts in my project:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/layout.js"
                title="Font Optimization with next/font"
              >
  {`import { Inter } from 'next/font/google';
  
  const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap', // Improves loading performance
  });
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en" className={inter.variable}>
        <body>
          {children}
        </body>
      </html>
    );
  }`}
              </CodeBlock>
  
              <p>
                Next.js downloads the font files, self-hosts them, and eliminates external network requests. This removes layout shift and improves Core Web Vitals automatically.
              </p>
  
              <h2 className="blog-post-subtitle">Metadata and SEO</h2>
              <p>
                Next.js makes SEO straightforward with its metadata API. I created a reusable metadata system for my blog:
              </p>
  
              <CodeBlock 
                language="javascript" 
                filename="app/lib/metadata.js"
                title="Reusable Metadata System"
              >
  {`export const createMetadata = (page, customData = {}) => {
    const baseMetadata = {
      title: 'Nikolas Dev Journey',
      description: 'Follow my journey from philosophy to software development.',
      keywords: 'developer, python, javascript, web development',
      authors: [{ name: 'Nikolas Stojak' }],
      
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nikolasdevjourney.com',
        siteName: 'Nikolas Dev Journey',
        images: [{
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
        }]
      },
      
      twitter: {
        card: 'summary_large_image',
        creator: '@NikolasStojak'
      },
    };
  
    const pageSpecific = {
      home: {
        title: 'Nikolas Dev Journey | From Philosophy to Code',
      },
      blog: {
        title: 'Developer Blog | Nikolas Dev Journey',
      },
      // More page-specific metadata...
    };
  
    return {
      ...baseMetadata,
      ...pageSpecific[page],
      ...customData
    };
  };`}
              </CodeBlock>
  
              <h2 className="blog-post-subtitle">Deployment with Vercel</h2>
              <p>
                Deploying Next.js apps is incredibly smooth with Vercel. Here's my deployment setup:
              </p>
  
              <CodeBlock 
                language="bash" 
                filename="deployment-steps.txt"
                title="My Deployment Process"
              >
  {`# 1. Connect GitHub repository to Vercel
  # 2. Configure build settings (automatic for Next.js)
  # 3. Set environment variables in Vercel dashboard
  # 4. Every git push triggers automatic deployment
  
  # Build command (automatic):
  npm run build
  
  # Output directory (automatic):
  .next
  
  # Environment variables I set:
  RESEND_API_KEY=*******
  GA_MEASUREMENT_ID=G-CMEMLMEFFR
  
  # Custom domain setup:
  # 1. Add domain in Vercel dashboard
  # 2. Update DNS records at domain provider
  # 3. Automatic SSL certificate generation`}
              </CodeBlock>
  
              <p>
                Vercel handles everything automatically—builds, deployments, SSL certificates, and global CDN distribution. The integration is so seamless that I often forget I&apos;m running a production website.
              </p>
  
              <h2 className="blog-post-subtitle">Performance Insights: What I Learned</h2>
              <p>
                After two months of building with Next.js, here are the performance insights I&apos;ve gained:
              </p>
              <ul>
                <li><strong>Automatic code splitting:</strong> Next.js only loads the JavaScript needed for each page</li>
                <li><strong>Image optimization:</strong> Next/Image component automatically optimizes and lazy-loads images</li>
                <li><strong>Font optimization:</strong> Google Fonts are self-hosted and preloaded</li>
                <li><strong>Static generation:</strong> Pages are pre-generated at build time when possible</li>
                <li><strong>Bundle analysis:</strong> Built-in tools help identify large dependencies</li>
                <li><strong>Core Web Vitals:</strong> Next.js is optimized for Google&apos;s performance metrics</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Challenges I Faced and How I Solved Them</h2>
              <p>
                Learning Next.js wasn&apos;t without challenges. Here are the main ones I encountered:
              </p>
  
              <h3 className="blog-post-subtitle">1. Server vs Client Component Confusion</h3>
              <p>
                <strong>Problem:</strong> I initially marked everything as <code>'use client'</code> because I didn&apos;t understand the difference.
                <br />
                <strong>Solution:</strong> I learned to start with server components by default and only add <code>'use client'</code> when I need interactivity.
              </p>
  
              <h3 className="blog-post-subtitle">2. Hydration Errors</h3>
              <p>
                <strong>Problem:</strong> My components would render differently on server and client, causing hydration mismatches.
                <br />
                <strong>Solution:</strong> I ensured server and client rendered identical HTML, especially for dynamic content.
              </p>
  
              <h3 className="blog-post-subtitle">3. API Route Organization</h3>
              <p>
                <strong>Problem:</strong> I didn&apos;t know how to structure API routes properly.
                <br />
                <strong>Solution:</strong> I learned that each API route needs a <code>route.js</code> file with named exports like <code>GET</code>, <code>POST</code>.
              </p>
  
              <h2 className="blog-post-subtitle">What I&apos;d Do Differently</h2>
              <p>
                If I started over today, here&apos;s what I&apos;d change:
              </p>
              <ul>
                <li><strong>Start with TypeScript:</strong> The type safety would have prevented many bugs</li>
                <li><strong>Use a CSS framework:</strong> Tailwind CSS would have sped up styling significantly</li>
                <li><strong>Implement testing early:</strong> Jest and Testing Library integration would catch regressions</li>
                <li><strong>Set up error boundaries:</strong> Better error handling for production</li>
                <li><strong>Use a database:</strong> Move beyond static API data to a real database like PostgreSQL</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Next Steps in My Next.js Journey</h2>
              <p>
                After two months with Next.js, I&apos;m excited to explore more advanced features:
              </p>
              <ul>
                <li><strong>Server Actions:</strong> Handling form submissions without API routes</li>
                <li><strong>Streaming:</strong> Progressive page loading with Suspense</li>
                <li><strong>Middleware:</strong> Request-level logic for authentication and redirects</li>
                <li><strong>ISR (Incremental Static Regeneration):</strong> Updating static content without rebuilds</li>
                <li><strong>Advanced caching:</strong> Optimizing data fetching with Next.js cache strategies</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Why I Recommend Next.js for Beginners</h2>
              <p>
                After building a real production website with Next.js, I&apos;d recommend it to other beginners for these reasons:
              </p>
              <ul>
                <li><strong>Gentle learning curve:</strong> You can start simple and add complexity gradually</li>
                <li><strong>Excellent documentation:</strong> The Next.js docs are clear and comprehensive</li>
                <li><strong>Full-stack capabilities:</strong> Learn both frontend and backend in one framework</li>
                <li><strong>Industry standard:</strong> Used by companies like Netflix, TikTok, and Airbnb</li>
                <li><strong>Great ecosystem:</strong> Huge community and third-party library support</li>
                <li><strong>Deployment simplicity:</strong> Vercel makes going to production effortless</li>
              </ul>
  
              <blockquote className="blog-post-quote">
                &quot;Next.js taught me that you don&apos;t need to master every concept before building something real. Start with the basics, build your project, and learn advanced features as you need them. Two months later, I have both a production website and solid Next.js skills.&quot;
              </blockquote>
            </div>
          </article>
  
          <BlogComments />
          
        </Container>
  
        <Footer />
      </main>
    );
  }