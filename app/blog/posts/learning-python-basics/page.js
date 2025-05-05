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
            🐍 My First Steps in Python: From Hello World to if/else/elif
          </h1>

          <div className="blog-post-content">
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              When I first began learning programming, I chose Python because of its simple syntax and readability. It felt welcoming, especially for someone coming from a non-technical background. My goal was to understand the core logic behind programming and be able to communicate with a machine through code.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>📘 Starting with the Basics</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              I began by learning how to output text to the screen using <code>print()</code>. This simple command taught me how programs provide feedback.
              Then I explored variables — how to store and reuse data — and understood how types like strings, integers, and booleans work.
            </p>

            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li><strong>Printing:</strong> <code>print(&ldquo;Hello, world!&ldquo;)</code></li>
              <li><strong>Variables:</strong> <code>x = 10</code>, <code>name = &ldquo;Nikolas&ldquo;</code></li>
              <li><strong>Types:</strong> Strings, integers, booleans</li>
              <li><strong>Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>==</code>, <code>!=</code></li>
              <li><strong>User input:</strong> <code>input()</code> for dynamic data</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🔄 Controlling Logic with Conditions</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              One of the biggest breakthroughs for me was learning how to make the computer &ldquo;decide&ldquo; something based on conditions. This is where <code>if</code>, <code>elif</code>, and <code>else</code> come into play.
            </p>

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
              {`age = 18
if age >= 18:
    print("You are an adult.")
elif age >= 13:
    print("You are a teenager.")
else:
    print("You are a child")`}
            </div>

            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              This structure gave me control over how a program should respond. It felt like having a conversation with the computer — giving it choices and instructing it on what to do next.
            </p>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>💡 Insights and Realizations</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li><strong>Conditional logic</strong> is the foundation of programming logic.</li>
              <li>Even simple programs can become powerful when you add choices.</li>
              <li>Learning the difference between <code>=</code> and <code>==</code> was crucial!</li>
            </ul>

            <h2 style={{ fontSize: '1.8rem', margin: '2rem 0 1rem', color: '#edf2f7', fontWeight: 700 }}>🔜 What I&ldquo;m Looking Forward To</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
              With conditions mastered, I&ldquo;m excited to dive into loops (<code>for</code>, <code>while</code>), which will allow me to automate tasks and repeat actions efficiently. I&ldquo;ll also start exploring data structures like lists and dictionaries to manage collections of data.
            </p>

            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Every small script I write builds my confidence. Python has made the entry into programming incredibly smooth, and I can now begin thinking about real-world applications — from automation to building tools and websites.
            </p>

            <blockquote style={{ 
              fontStyle: 'italic', 
              marginTop: '2.5rem', 
              color: '#a0aec0', 
              borderLeft: '4px solid #63b3ed', 
              paddingLeft: '1.5rem',
              fontSize: '1.1rem'
            }}>
              &ldquo;Programming in Python is like learning a new language — the more I practice, the more fluent I become.&ldquo;
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}