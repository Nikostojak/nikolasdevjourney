export const metadata = {
  title: 'Nikolas Dev Journey | My First Steps in Python',
  description: 'Learn about my first weeks with Python, from variables to conditional logic with if/elif/else.',
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
            My First Steps in Python: From Hello World to if/else/elif
          </h1>

          <div className="blog-post-content">
            <p>
              When I first began learning programming, I chose Python because of its simple syntax and readability. It felt welcoming, especially for someone coming from a non-technical background. My goal was to understand the core logic behind programming and be able to communicate with a machine through code.
            </p>

            <h2 className="blog-post-subtitle">Starting with the Basics</h2>
            <p>
              I began by learning how to output text to the screen using <code>print()</code>. This simple command taught me how programs provide feedback.
              Then I explored variables — how to store and reuse data — and understood how types like strings, integers, and booleans work.
            </p>

            <h2 className="blog-post-subtitle">My First Python Commands</h2>
            <p>
              Here are the fundamental Python concepts I learned first:
            </p>

            <CodeBlock 
              language="python" 
              filename="basics.py"
              title="Python Basics - Variables and Types"
            >
{`# My first Python commands
print("Hello, world!")

# Variables and data types
x = 10                    # Integer
name = "Nikolas"         # String
is_learning = True       # Boolean
temperature = 23.5       # Float

# Basic operators
result = x + 5           # Addition: 15
greeting = "Hello, " + name    # String concatenation
is_adult = x >= 18       # Comparison: False

# User input
user_name = input("What's your name? ")
print(f"Nice to meet you, {user_name}!")`}
            </CodeBlock>

            <ul>
              <li><strong>Printing:</strong> <code>print(&quot;Hello, world!&quot;)</code> - my very first command!</li>
              <li><strong>Variables:</strong> <code>x = 10</code>, <code>name = &quot;Nikolas&quot;</code> - storing data</li>
              <li><strong>Types:</strong> Strings, integers, booleans, floats - Python figures them out automatically</li>
              <li><strong>Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>==</code>, <code>!=</code> - doing math and comparisons</li>
              <li><strong>User input:</strong> <code>input()</code> - making programs interactive</li>
            </ul>

            <h2 className="blog-post-subtitle">Controlling Logic with Conditions</h2>
            <p>
              One of the biggest breakthroughs for me was learning how to make the computer &quot;decide&quot; something based on conditions. This is where <code>if</code>, <code>elif</code>, and <code>else</code> come into play.
            </p>

            <CodeBlock 
              language="python" 
              filename="conditions.py"
              title="Conditional Logic Example"
            >
{`# Simple age checker program
age = 18

if age >= 18:
    print("You are an adult.")
    print("You can vote!")
elif age >= 13:
    print("You are a teenager.")
    print("Almost there!")
else:
    print("You are a child.")
    print("Enjoy being young!")

# More complex example
user_age = int(input("How old are you? "))
has_license = input("Do you have a license? (yes/no): ").lower()

if user_age >= 18 and has_license == "yes":
    print("You can drive legally!")
elif user_age >= 18 and has_license == "no":
    print("You're old enough, but you need a license.")
elif user_age >= 16:
    print("You can get a learner's permit!")
else:
    print("You're too young to drive.")`}
            </CodeBlock>

            <p>
              This structure gave me control over how a program should respond. It felt like having a conversation with the computer — giving it choices and instructing it on what to do next.
            </p>

            <h2 className="blog-post-subtitle">Practice Makes Perfect</h2>
            <p>
              To really understand conditionals, I wrote several small programs:
            </p>

            <CodeBlock 
              language="python" 
              filename="practice_programs.py"
              title="My Practice Programs"
            >
{`# Program 1: Grade calculator
score = float(input("Enter your test score: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")

# Program 2: Weather advice
weather = input("How's the weather? (sunny/rainy/cold): ").lower()

if weather == "sunny":
    print("Wear sunglasses and light clothes!")
elif weather == "rainy":
    print("Don't forget your umbrella!")
elif weather == "cold":
    print("Bundle up with a warm jacket!")
else:
    print("I'm not sure about that weather...")

# Program 3: Simple password checker
correct_password = "python123"
user_password = input("Enter password: ")

if user_password == correct_password:
    print("Access granted! Welcome!")
else:
    print("Access denied. Wrong password.")`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Key Insights and Realizations</h2>
            <ul>
              <li><strong>Conditional logic</strong> is the foundation of programming logic - it&apos;s everywhere!</li>
              <li>Even simple programs can become powerful when you add choices and decision-making.</li>
              <li>Learning the difference between <code>=</code> (assignment) and <code>==</code> (comparison) was crucial!</li>
              <li><strong>Indentation matters</strong> in Python - it&apos;s not just for looks, it&apos;s part of the syntax.</li>
              <li>The <code>elif</code> statement is a game-changer for handling multiple conditions elegantly.</li>
              <li>Combining conditions with <code>and</code>, <code>or</code>, and <code>not</code> opens up endless possibilities.</li>
            </ul>

            <h2 className="blog-post-subtitle">What I&apos;m Looking Forward To</h2>
            <p>
              With conditions mastered, I&apos;m excited to dive into loops (<code>for</code>, <code>while</code>), which will allow me to automate tasks and repeat actions efficiently. I&apos;ll also start exploring data structures like lists and dictionaries to manage collections of data.
            </p>

            <CodeBlock 
              language="python" 
              filename="whats_next.py"
              title="What I'm Learning Next"
            >
{`# Coming up in my Python journey:

# Loops - for repetitive tasks
for i in range(5):
    print(f"This is iteration {i}")

# Lists - storing multiple items
my_favorite_languages = ["Python", "JavaScript", "CSS"]

# Functions - organizing code into reusable blocks
def greet_user(name):
    return f"Hello, {name}! Welcome to Python!"

# I can't wait to learn these concepts!`}
            </CodeBlock>

            <p>
              Every small script I write builds my confidence. Python has made the entry into programming incredibly smooth, and I can now begin thinking about real-world applications — from automation to building tools and websites.
            </p>

            <blockquote className="blog-post-quote">
              &quot;Programming in Python is like learning a new language — the more I practice, the more fluent I become.&quot;
            </blockquote>
          </div>
        </article>

        <BlogComments />
        
      </Container>

      <Footer />
    </main>
  );
}