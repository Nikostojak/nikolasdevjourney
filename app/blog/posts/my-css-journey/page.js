export const metadata = {
  title: 'Nikolas Dev Journey | My CSS Journey',
  description: 'How I learned CSS from basics to advanced techniques while building my blog.',
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
            My CSS Journey: From Basics to Advanced Styling
          </h1>

          <div className="blog-post-content">
            <p>
              When I started building <strong>Nikolas Dev Journey</strong>, my CSS knowledge was minimal—basic colors and margins were all I knew. With guidance from Grok, I began styling my blog, learning CSS hands-on. From those first steps, I&apos;ve grown into an advanced CSS developer, creating a responsive, polished portfolio. This post shares my journey, highlighting skills that make me a strong candidate for web development roles.
            </p>

            <h2 className="blog-post-subtitle">The Beginning: CSS Basics</h2>
            <p>
              I kicked off with the essentials: selectors, properties, and values. I learned to style my blog&apos;s elements using colors, fonts, margins, and padding. My first task was styling the navigation bar, applying a dark background and blue accents to match the blog&apos;s aesthetic.
            </p>

            <CodeBlock 
              language="css" 
              filename="basic-styles.css"
              title="My First CSS Code"
            >
{`/* My very first CSS styles */
.navbar {
  background-color: #2d3748;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-link {
  color: #e2e8f0;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 600;
}

.navbar-link:hover {
  color: #63b3ed;
}

/* Basic button styling */
.hero-button {
  background-color: #63b3ed;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`}
            </CodeBlock>

            <ul>
              <li><strong>Selectors:</strong> Targeting elements with classes, IDs, and tags.</li>
              <li><strong>Properties:</strong> Using <code>color</code>, <code>background-color</code>, <code>margin</code>, <code>padding</code>.</li>
              <li><strong>First win:</strong> Styling the navbar with <code>#2d3748</code> and <code>#63b3ed</code>.</li>
            </ul>

            <h2 className="blog-post-subtitle">Intermediate Steps: Layout and Positioning</h2>
            <p>
              Next, I explored layouts with Flexbox and positioning. Flexbox helped me align buttons and blog cards, while positioning enabled a sticky navbar that stays at the top. I also used pseudo-classes like <code>:hover</code> to add interactivity, such as hover effects on links and buttons.
            </p>

            <CodeBlock 
              language="css" 
              filename="layout-styles.css"
              title="Flexbox and Positioning"
            >
{`/* Flexbox for hero section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 90vh;
  padding: 2rem 0;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

/* Sticky navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #2d3748;
  backdrop-filter: blur(10px);
}

/* Blog cards grid */
.blog-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Hover effects */
.blog-list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}`}
            </CodeBlock>

            <ul>
              <li><strong>Flexbox:</strong> Aligning elements with <code>display: flex</code> and <code>justify-content</code>.</li>
              <li><strong>Positioning:</strong> Applying <code>position: sticky</code> for the navbar.</li>
              <li><strong>Pseudo-classes:</strong> Creating <code>:hover</code> effects for interactivity.</li>
            </ul>

            <p>
              Styling the blog&apos;s card grid was a milestone, using Flexbox to ensure even spacing and adaptability across screen sizes.
            </p>

            <h2 className="blog-post-subtitle">Advanced CSS: Animations and Responsiveness</h2>
            <p>
              To elevate my blog&apos;s look, I dove into animations, CSS Grid, and responsive design. I created <code>fadeInUp</code> animations for blog cards and smooth transitions for buttons. Grid helped structure complex layouts, and media queries ensured my blog looked great on mobiles.
            </p>

            <CodeBlock 
              language="css" 
              filename="advanced-styles.css"
              title="Animations and Responsive Design"
            >
{`/* Keyframe animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll reveal animation */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive typography */
.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  animation: fadeInUp 1s ease-in-out;
  line-height: 1.2;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .blog-category-grid {
    grid-template-columns: 1fr;
  }
  
  .navbar {
    padding: 1rem;
  }
}`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Professional Button Component</h2>
            <p>
              Here&apos;s an example of CSS I wrote for my blog&apos;s buttons, showing transitions and accessibility:
            </p>

            <CodeBlock 
              language="css" 
              filename="button-component.css"
              title="Professional Button Styling"
            >
{`.hero-button {
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  background-color: #63b3ed;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  min-width: 180px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Hover effect with shine */
.hero-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s;
}

.hero-button:hover::before {
  left: 100%;
}

.hero-button:hover {
  background-color: #90cdf4;
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(99, 179, 237, 0.3);
}

/* Accessibility focus styles */
.hero-button:focus {
  outline: 2px solid #63b3ed;
  outline-offset: 2px;
}

/* Active state */
.hero-button:active {
  transform: scale(0.98);
}`}
            </CodeBlock>

            <p>
              This code reflects my ability to create interactive, accessible UI elements with smooth animations and professional polish.
            </p>

            <h2 className="blog-post-subtitle">Practical Applications on My Blog</h2>
            <p>
              My blog became a canvas for CSS experimentation. Key features I styled include:
            </p>

            <CodeBlock 
              language="css" 
              filename="blog-features.css"
              title="Blog Feature Styling"
            >
{`/* Blog post cards */
.blog-list-item {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 80%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 179, 237, 0.1);
}

.blog-list-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  border-color: rgba(99, 179, 237, 0.3);
}

/* Search input styling */
.blog-search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #e2e8f0;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 6px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.blog-search-input:focus {
  border-color: #63b3ed;
  box-shadow: 0 0 8px rgba(99, 179, 237, 0.3);
  outline: none;
}

/* Category tabs */
.blog-tab {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
  background-color: #1a202c;
  border: 1px solid #4a5568;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.blog-tab:hover {
  background-color: #4a5568;
  color: #90cdf4;
  transform: translateY(-2px);
}

.blog-tab-active {
  background-color: #63b3ed;
  color: #ffffff;
  border-color: #63b3ed;
}`}
            </CodeBlock>

            <ul>
              <li><strong>Responsive cards:</strong> Built a blog post grid with Flexbox and media queries for all devices.</li>
              <li><strong>Sticky navbar:</strong> Used <code>position: sticky</code> for seamless navigation.</li>
              <li><strong>Animations:</strong> Added <code>fadeInUp</code> effects to cards and buttons.</li>
              <li><strong>Accessibility:</strong> Implemented focus styles and ARIA for inclusivity.</li>
            </ul>

            <p>
              These elements demonstrate my skills in creating user-friendly, visually appealing interfaces, essential for front-end development.
            </p>

            <h2 className="blog-post-subtitle">Skills That Attract Employers</h2>
            <p>
              My CSS skills are now a strong asset:
            </p>
            <ul>
              <li><strong>Responsive design:</strong> Using <code>clamp</code> and media queries for cross-device support.</li>
              <li><strong>Animations:</strong> Crafting transitions and keyframes for dynamic UIs.</li>
              <li><strong>Accessibility:</strong> Ensuring focus styles and ARIA compliance.</li>
              <li><strong>Clean code:</strong> Writing maintainable CSS with clear naming.</li>
              <li><strong>Problem-solving:</strong> Debugging layouts and ensuring cross-browser compatibility.</li>
            </ul>

            <p>
              These skills, honed through building my blog, prepare me to contribute to professional web development teams.
            </p>

            <h2 className="blog-post-subtitle">Lessons Learned and Future Plans</h2>
            <p>
              CSS presented challenges, like debugging Flexbox layouts and ensuring consistency across browsers. Each hurdle taught me the value of planning layouts and prioritizing user experience. Writing clean, accessible code became my focus.
            </p>

            <ul>
              <li><strong>Lesson 1:</strong> Plan layouts to simplify styling.</li>
              <li><strong>Lesson 2:</strong> Accessibility enhances user experience.</li>
              <li><strong>Lesson 3:</strong> Practice leads to confident styling.</li>
            </ul>

            <p>
              Moving forward, I&apos;m excited to explore Tailwind CSS for rapid styling and CSS-in-JS for React projects. My goal is to keep building intuitive, beautiful interfaces that engage users.
            </p>

            <blockquote className="blog-post-quote">
              &quot;From basic colors to responsive layouts, CSS has taught me how to turn code into art, one style at a time.&quot;
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}