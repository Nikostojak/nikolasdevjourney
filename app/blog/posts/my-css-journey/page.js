export const metadata = {
    title: 'Nikolas Dev Journey | My CSS Journey',
    description: 'How I learned CSS from basics to advanced techniques while building my blog.',
  };
  
  import Navbar from '../../../components/Navbar';
  import Footer from '../../../components/Footer';
  import Container from '../../../components/Container';

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
              <ul>
                <li><strong>Selectors:</strong> Targeting elements with classes, IDs, and tags.</li>
                <li><strong>Properties:</strong> Using <code>color</code>, <code>background-color</code>, <code>margin</code>, <code>padding</code>.</li>
                <li><strong>First win:</strong> Styling the navbar with <code>#2d3748</code> and <code>#63b3ed</code>.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Intermediate Steps: Layout and Positioning</h2>
              <p>
                Next, I explored layouts with Flexbox and positioning. Flexbox helped me align buttons and blog cards, while positioning enabled a sticky navbar that stays at the top. I also used pseudo-classes like <code>:hover</code> to add interactivity, such as hover effects on links and buttons.
              </p>
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
                To elevate my blog&apos;s look, I dove into animations, CSS Grid, and responsive design. I created <code>fadeInUp</code> animations for blog cards and smooth transitions for buttons. Grid helped structure complex layouts, and media queries ensured my blog looked great on mobiles. I also focused on accessibility, adding focus styles and ARIA attributes.
              </p>
              <p>
                Here&apos;s an example of CSS I wrote for my blog&apos;s buttons, showing transitions and accessibility:
              </p>
              <div className="blog-post-code">
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
  }
  
  .hero-button:hover {
    background-color: #90cdf4;
    transform: scale(1.05);
  }
  
  .hero-button:focus {
    outline: 2px solid #63b3ed;
    outline-offset: 2px;
  }`}
              </div>
              <p>
                This code reflects my ability to create interactive, accessible UI elements.
              </p>
  
              <h2 className="blog-post-subtitle">Practical Applications on My Blog</h2>
              <p>
                My blog became a canvas for CSS experimentation. Key features I styled include:
              </p>
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
                “From basic colors to responsive layouts, CSS has taught me how to turn code into art, one style at a time.”
              </blockquote>
            </div>
          </article>
        </Container>
  
        <Footer />
      </main>
    );
  }