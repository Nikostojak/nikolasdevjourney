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
        backgroundColor: '#e0e0e0',
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
          🐍 My First Steps in Python: From Hello World to if/else/elif
        </h1>

        <p>
          When I first began learning programming, I chose Python because of its simple syntax and readability. It felt welcoming, especially for someone coming from a non-technical background. My goal was to understand the core logic behind programming and be able to communicate with a machine through code.
        </p>

        <h2>📘 Starting with the Basics</h2>
        <p>
          I began by learning how to output text to the screen using <code>print()</code>. This simple command taught me how programs provide feedback.
          Then I explored variables — how to store and reuse data — and understood how types like strings, integers, and booleans work.
        </p>

        <ul>
          <li><strong>Printing:</strong> <code>print(&quot;Hello, world!&quot;)</code></li>
          <li><strong>Variables:</strong> <code>x = 10</code>, <code>name = &quot;Nikolas&quot;</code></li>
          <li><strong>Types:</strong> Strings, integers, booleans</li>
          <li><strong>Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>==</code>, <code>!=</code></li>
          <li><strong>User input:</strong> <code>input()</code> for dynamic data</li>
        </ul>

        <h2>🔄 Controlling Logic with Conditions</h2>
        <p>
          One of the biggest breakthroughs for me was learning how to make the computer &quot;decide&quot; something based on conditions. This is where <code>if</code>, <code>elif</code>, and <code>else</code> come into play.
        </p>

        <div
  style={{
    background: '#eee',
    padding: '1rem',
    borderRadius: '8px',
    overflowX: 'auto',
    whiteSpace: 'pre',
    fontFamily: 'monospace',
    maxWidth: '100%',
    boxSizing: 'border-box',
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

        <p>
          This structure gave me control over how a program should respond. It felt like having a conversation with the computer — giving it choices and instructing it on what to do next.
        </p>

        <h2>💡 Insights and Realizations</h2>
        <ul>
          <li><strong>Conditional logic</strong> is the foundation of programming logic.</li>
          <li>Even simple programs can become powerful when you add choices.</li>
          <li>Learning the difference between <code>=</code> and <code>==</code> was crucial!</li>
        </ul>

        <h2>🔜 What I&lsquo;m Looking Forward To</h2>
        <p>
          With conditions mastered, I&lsquo;m excited to dive into loops (<code>for</code>, <code>while</code>), which will allow me to automate tasks and repeat actions efficiently. I&lsquo;ll also start exploring data structures like lists and dictionaries to manage collections of data.
        </p>

        <p>
          Every small script I write builds my confidence. Python has made the entry into programming incredibly smooth, and I can now begin thinking about real-world applications — from automation to building tools and websites.
        </p>

        <blockquote style={{ fontStyle: 'italic', marginTop: '2rem' }}>
        “Programming in Python is like learning a new language — the more I practice, the more fluent I become.”
        </blockquote>
      </article>

      <Footer />
    </main>
  );
}
