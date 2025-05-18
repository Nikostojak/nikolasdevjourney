export const metadata = {
    title: 'Nikolas Dev Journey | My First Project Plan',
    description: 'Announcing my first portfolio project: a web app for tracking chess openings, with a detailed development plan.',
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
              ♟️ My First Project: A Chess Openings Web App
            </h1>
  
            <div className="blog-post-content">
              <p>
                I&apos;m thrilled to announce my first major project: a web application for tracking chess openings! As a chess enthusiast and self-taught developer, I&apos;m combining my passion for the game with my growing skills in web development. This project will allow me to store and analyze past chess games, focusing on their opening moves, and showcase my abilities to potential employers. In this post, I&apos;ll share the vision, planned features, and a clear development plan for this exciting journey.
              </p>
  
              <h2 className="blog-post-subtitle">♛ Why a Chess App?</h2>
              <p>
                Chess has always fascinated me with its depth and strategy. As I&apos;ve been building my <strong>Nikolas Dev Journey</strong> blog, I realized that a chess-related project could merge my interests and demonstrate my technical skills. Tracking openings—a critical part of any chess game—offers a practical way to organize past games and learn from them. This project is my chance to create something meaningful while proving I can build a full-fledged web app from scratch.
              </p>
              <ul>
                <li><strong>Personal passion:</strong> Chess is a game I love, making this project engaging and authentic.</li>
                <li><strong>Portfolio value:</strong> A web app shows front-end, back-end, and UX skills.</li>
                <li><strong>Community benefit:</strong> Chess players can use it to analyze their games.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">🏗️ Core Idea and Features</h2>
              <p>
                The core idea is simple: a web app where I can log every chess game I&apos;ve played, along with the opening used (e.g., Sicilian Defense, Queen&apos;s Gambit). The app will store game details like date, opponent, result, and opening name, and display them in an organized, user-friendly way. Beyond this foundation, I plan to add features that make the app versatile and impressive.
              </p>
  
              <h2 className="blog-post-subtitle">🚀 Planned Features</h2>
              <p>
                To make the app truly stand out, I&apos;ve brainstormed a range of features that showcase both technical depth and user-focused design:
              </p>
              <ul>
                <li><strong>Game logging:</strong> A form to input game details (date, opponent, result, opening).</li>
                <li><strong>Filtering and search:</strong> Filter games by opening, result, or date, with a search bar for quick access.</li>
                <li><strong>Statistics:</strong> Display win rates per opening or most-used openings, possibly with charts.</li>
                <li><strong>Chess board display:</strong> Show opening moves on an interactive board using a library like chessboard.js.</li>
                <li><strong>User accounts:</strong> Allow users to register and save their games securely.</li>
                <li><strong>Responsive design:</strong> Ensure the app looks great on desktops and mobiles, matching my blog&apos;s style.</li>
                <li><strong>Accessibility:</strong> Add ARIA attributes and focus styles for inclusive use.</li>
                <li><strong>Export/import:</strong> Support PGN imports from Chess.com and exports to CSV or PDF.</li>
                <li><strong>Notes:</strong> Let users add comments or strategy notes to each game.</li>
                <li><strong>Chess API integration:</strong> Connect to Chess.com or Lichess APIs to auto-import games.</li>
              </ul>
              <p>
                These features will make the app functional, engaging, and a strong portfolio piece.
              </p>
  
              <h2 className="blog-post-subtitle">📅 Development Plan</h2>
              <p>
                To bring this app to life, I&apos;ve outlined a clear plan using technologies I&apos;ve honed and new ones I&apos;m excited to explore. For the front-end, I&apos;ll use <strong>JavaScript</strong> to build interactive UI components with React and Next.js, ensuring a responsive and dynamic experience. For the back-end, I&apos;ll leverage <strong>Python</strong> (using FastAPI or Flask) to create APIs and handle data processing. Additional tools include CSS for styling, JSON or SQLite for data storage, chessboard.js for board visualization, Chart.js for statistics, and NextAuth.js for authentication.
              </p>
              <div className="blog-post-code">
                {`// Pseudo-code for Chess Openings App Plan
  1. Setup
     - Initialize Next.js project
     - Use JavaScript (React/Next.js) for front-end components
     - Set up Python (FastAPI/Flask) for back-end APIs
     - Copy blog styles (Fira Code, #2d3748, #63b3ed)
     - Create components: Navbar, Footer, GameForm, GameList
  
  2. Core Functionality
     - Build GameForm with JavaScript for input (date, opponent, result, opening)
     - Create /api/games endpoint with Python (GET/POST for games)
     - Store games in JSON or SQLite
     - Display games in GameList with JavaScript (table or cards)
  
  3. Extended Features
     - Add filtering (by opening, result) and search with JavaScript
     - Implement statistics (win rates, charts with Chart.js)
     - Integrate chessboard.js for opening visualization
     - Add user authentication with NextAuth.js
     - Support PGN import/export with Python
     - Enable game notes
     - Connect to Chess.com/Lichess API with Python/JavaScript
  
  4. Polish
     - Style with CSS (Flexbox, Grid, media queries)
     - Ensure a11y (ARIA, focus styles)
     - Test cross-browser compatibility
     - Deploy to Vercel
  
  Timeline: 2-3 months, starting with core in 2 weeks`}
              </div>
              <p>
                This plan balances ambition with feasibility, starting with a minimum viable product (MVP) and adding features iteratively.
              </p>
  
              <h2 className="blog-post-subtitle">💼 Skills for Employers</h2>
              <p>
                This project will showcase a wide range of skills that employers value:
              </p>
              <ul>
                <li><strong>Front-end:</strong> Building responsive, accessible UI with JavaScript, React, and Next.js.</li>
                <li><strong>Back-end:</strong> Managing data with Python APIs and databases (JSON, SQLite).</li>
                <li><strong>UX design:</strong> Creating intuitive forms, filters, and visualizations.</li>
                <li><strong>Integration:</strong> Working with external APIs and libraries (Chess.com, chessboard.js).</li>
                <li><strong>Problem-solving:</strong> Debugging layouts, ensuring compatibility, and optimizing performance.</li>
              </ul>
              <p>
                By documenting my progress, I aim to demonstrate not just technical ability but also my approach to planning and learning.
              </p>
  
              <h2 className="blog-post-subtitle">🔮 What&apos;s Next?</h2>
              <p>
                This chess app marks the start of my journey to build impactful projects. I&apos;m excited to dive into coding, tackle challenges, and share updates on my blog. After completing this app, I plan to explore AI-driven projects, such as building machine learning models with Python or creating web apps with AI-powered features using libraries like TensorFlow. My goal is to create innovative tools that solve real problems and showcase my growing expertise.
              </p>
              <ul>
                <li><strong>Short-term:</strong> Build the MVP in 2-3 weeks.</li>
                <li><strong>Mid-term:</strong> Add advanced features over 2 months.</li>
                <li><strong>Long-term:</strong> Deploy and explore AI projects.</li>
              </ul>
  
              <blockquote className="blog-post-quote">
                “Every great project starts with a single move. This chess app is my opening gambit in the game of web development.”
              </blockquote>
            </div>
          </article>
        </Container>
  
        <Footer />
      </main>
    );
  }