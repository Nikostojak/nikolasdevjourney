// app/blog/posts/how-i-built-this-blog/page.js

import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

export const metadata = {
  title: 'How I Built This Blog | Nikolas Dev Journey',
  description: 'A detailed breakdown of how I created my blog with Next.js, GitHub, and Vercel.',
};

export default function BlogPost() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', backgroundColor: '#fff' }}>
      <Navbar />

      <article style={{ flex: 1, maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem', color: '#333' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How I Built This Blog</h1>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>📅 April 30, 2025</p>

        <p>
          In this post, I want to share how I built my developer blog from scratch using <strong>Next.js</strong>, <strong>GitHub</strong>, and <strong>Vercel</strong>.
          I didn’t just want a working site — I wanted to learn how all the pieces fit together.
        </p>

        <h2 style={{ marginTop: '2rem' }}>1. Project Setup</h2>
        <p>
          I used <code>create-next-app</code> to bootstrap the project, chose the App Router, and avoided TypeScript and Tailwind for simplicity.
          I structured my folders to separate pages and components, and used the public folder for images.
        </p>

        <h2 style={{ marginTop: '2rem' }}>2. Components</h2>
        <p>
          I created reusable <code>Navbar</code> and <code>Footer</code> components to keep everything clean and consistent across pages.
        </p>

        <h2 style={{ marginTop: '2rem' }}>3. Deployment</h2>
        <p>
          After pushing my code to GitHub, I connected the repo to Vercel and deployed it with a custom domain: <strong>nikolasdevjourney.com</strong>.
        </p>

        <h2 style={{ marginTop: '2rem' }}>4. What I Learned</h2>
        <p>
          This project taught me the foundations of React with Next.js, how routing works with the App Router, and how to manage real-world deployments.
          I also learned how to write reusable code and build responsive, clean layouts.
        </p>
      </article>

      <Footer />
    </main>
  );
}
