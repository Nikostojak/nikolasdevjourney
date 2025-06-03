export const metadata = {
  title: 'Nikolas Dev Journey | From Zero to Functional: My First Month with JavaScript',
  description: 'A realistic look at my first month learning JavaScript by building my blog - from Python background to creating functional web features.',
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
            From Zero to Functional: My First Month with JavaScript
          </h1>

          <div className="blog-post-content">
            <p>
              When I launched <strong>Nikolas Dev Journey</strong> in April 2025, I had zero JavaScript knowledge. Coming from a Python background, I was comfortable with backend logic but completely lost when it came to making websites interactive. Instead of spending weeks watching tutorials, I decided to learn JavaScript by actually building my blog. This meant figuring out features as I needed them—mobile navigation, dynamic post loading, category filtering, and animated effects. Over the past month, I&apos;ve gone from staring at JavaScript syntax in confusion to having a fully functional blog with features I coded myself. In this post, I&apos;ll share how learning-by-building became my most effective approach to mastering JavaScript fundamentals.
            </p>

            <h2 className="blog-post-subtitle">Learning JavaScript Through Building: Why I Skipped Tutorials</h2>
            <p>
              A month ago, JavaScript looked like gibberish to me. Coming from Python&apos;s clean, predictable syntax, JavaScript seemed chaotic with its curly braces, semicolons, and weird behaviors. I initially planned to spend weeks watching tutorials and reading documentation, but I quickly realized this wasn&apos;t working. So I made a decision: I would learn JavaScript by building my blog, figuring out features as I needed them. This turned out to be the best learning strategy I could have chosen.
            </p>
            <ul>
              <li><strong>Problem-driven learning:</strong> Each blog feature forced me to learn specific JavaScript concepts.</li>
              <li><strong>Immediate application:</strong> I used every new concept right away in my actual project.</li>
              <li><strong>Real constraints:</strong> Working with real requirements taught me practical solutions, not just theory.</li>
              <li><strong>Motivation boost:</strong> Seeing my blog come to life kept me excited about learning more.</li>
            </ul>
            <p>
              My very first JavaScript need came when I wanted to create an animated typing effect for my homepage title. I couldn&apos;t just have static text—I wanted &quot;NIKOLASDEVJOURNEY&quot; to appear letter by letter. This practical need forced me to learn about JavaScript timing, string manipulation, and React state management.
            </p>

            <h2 className="blog-post-subtitle">First Challenge: Understanding Variables and State</h2>
            <p>
              Coming from Python, JavaScript variables felt familiar at first, but React&apos;s concept of &quot;state&quot; was completely new. In Python, I could just change a variable&apos;s value, but in React, I had to learn about <code>useState</code> and why I couldn&apos;t just modify variables directly. My typing animation taught me this lesson quickly.
            </p>
            <p>
              For the typing effect, I needed to track what letters had been displayed so far and whether to show the subtitle. This introduced me to multiple state variables working together—something I&apos;d never encountered in Python&apos;s straightforward variable assignment.
            </p>

            <CodeBlock 
              language="javascript" 
              filename="components/TypingAnimation.js"
              title="My First React State Management"
            >
{`// My first React state management for typing animation
const [displayedTitle, setDisplayedTitle] = useState('');
const [showSubtitle, setShowSubtitle] = useState(false);
const fullTitle = 'NIKOLASDEVJOURNEY';

// Using setInterval to add letters over time
useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < fullTitle.length) {
      setDisplayedTitle(fullTitle.slice(0, index + 1));
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => setShowSubtitle(true), 500);
    }
  }, 200);
  return () => clearInterval(interval);
}, []);`}
            </CodeBlock>

            <p>
              This single feature taught me about React hooks, string methods, timing functions, and the importance of cleanup to prevent memory leaks. I learned that JavaScript isn&apos;t just about variables—it&apos;s about managing changing data over time.
            </p>

            <h2 className="blog-post-subtitle">Building Interactive Features: My First DOM Manipulation</h2>
            <p>
              My blog looked good on desktop, but the navigation was completely broken on mobile. I needed a hamburger menu that could toggle the mobile navigation. This wasn&apos;t just a tutorial exercise—it was a real problem that my blog visitors would encounter. This practical need pushed me to learn about event handling and conditional rendering in React.
            </p>
            <p>
              The mobile menu taught me about click events, conditional CSS classes, and managing component state. I learned how to detect clicks outside the menu to close it automatically, and how to handle keyboard events like the Escape key. This was my first taste of creating user-friendly interfaces with JavaScript.
            </p>
            <ul>
              <li><strong>Event handling:</strong> Responding to clicks, keyboard presses, and other user actions.</li>
              <li><strong>Conditional rendering:</strong> Showing different content based on state.</li>
              <li><strong>CSS class manipulation:</strong> Changing styles dynamically with JavaScript.</li>
              <li><strong>User experience:</strong> Making interfaces that feel natural and responsive.</li>
            </ul>
            <p>
              Building this menu was my &quot;aha&quot; moment with JavaScript. I realized it&apos;s not just about calculations and logic like Python—it&apos;s about creating dynamic, interactive experiences that respond to users in real-time.
            </p>

            <h2 className="blog-post-subtitle">Working with Data: Arrays and Objects in Action</h2>
            <p>
              As my blog grew, I needed to manage blog post data. This introduced me to JavaScript arrays and objects, which felt similar to Python lists and dictionaries but behaved differently in important ways. I learned to work with arrays of blog post objects, each containing properties like title, date, category, and excerpt.
            </p>
            <p>
              The real learning came when I needed to filter and sort these posts. I discovered JavaScript&apos;s powerful array methods like <code>filter()</code>, <code>map()</code>, and <code>sort()</code>. Unlike Python&apos;s more explicit approach, JavaScript array methods felt like magic—I could chain them together to transform data in just a few lines.
            </p>

            <CodeBlock 
              language="javascript" 
              filename="app/blog/page.js"
              title="Working with Blog Post Data"
            >
{`// Working with blog post data
const posts = [
  { title: "My First Post", category: "Blog Development", date: "2025-04-15" },
  { title: "Learning JavaScript", category: "JavaScript", date: "2025-05-23" },
  // ... more posts
];

// Finding featured posts and recent posts
const featuredPost = posts.find(post => post.isFeatured);
const recentPosts = posts
  .filter(post => !post.isFeatured)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

// Category filtering for the blog page
const filteredPosts = posts.filter(post => 
  activeTab === 'All' || post.category === activeTab
);`}
            </CodeBlock>

            <p>
              These array methods became my favorite JavaScript feature. They let me manipulate data elegantly and expressively, turning complex filtering and sorting operations into readable, functional code. This was where JavaScript started to feel powerful and enjoyable to write.
            </p>

            <h2 className="blog-post-subtitle">Asynchronous Programming: My Introduction to APIs</h2>
            <p>
              The biggest challenge was learning to fetch data from my blog&apos;s API. This introduced me to asynchronous programming, which was completely new coming from Python&apos;s synchronous world. I had to understand that some operations take time, and my code needed to wait for them to complete without blocking everything else.
            </p>
            <p>
              My first API call was intimidating. I had to learn about <code>fetch()</code>, promises, <code>async/await</code>, and error handling all at once. The concept that code doesn&apos;t always run in the order you write it was mind-bending at first.
            </p>
            <ul>
              <li><strong>Fetch API:</strong> Making HTTP requests to get data from my server.</li>
              <li><strong>Async/await:</strong> Writing asynchronous code that reads like synchronous code.</li>
              <li><strong>Error handling:</strong> Dealing gracefully with network failures and server errors.</li>
              <li><strong>Loading states:</strong> Showing users when data is being fetched.</li>
            </ul>
            <p>
              Loading blog posts dynamically was a breakthrough moment. When I finally saw my posts appear on the page after being fetched from the API, it clicked—this is how modern web applications work. Data flows from servers to browsers, and JavaScript orchestrates it all.
            </p>

            <h2 className="blog-post-subtitle">Advanced Features: Search and Category Filtering</h2>
            <p>
              Once I had basic post loading working, I wanted to add category filtering and search to my blog page. Users should be able to click &quot;JavaScript&quot; or &quot;Python&quot; and see only relevant posts, or search for specific topics. This feature taught me about managing multiple pieces of state that work together.
            </p>
            <p>
              The blog page now has tabs for different categories, a search input, and even pagination when there are too many posts to show at once. Each of these features required coordinating different state variables—the current category, search query, and current page all affect what posts are displayed.
            </p>
            <ul>
              <li><strong>State coordination:</strong> Multiple pieces of state working together to control the UI.</li>
              <li><strong>Event handling:</strong> Responding to form inputs, button clicks, and tab selections.</li>
              <li><strong>Dynamic filtering:</strong> Showing different content based on user choices.</li>
              <li><strong>Pagination logic:</strong> Breaking large datasets into manageable chunks.</li>
            </ul>
            <p>
              This system taught me that JavaScript applications are really about managing complexity—coordinating multiple moving parts to create a smooth user experience.
            </p>

            <h2 className="blog-post-subtitle">Adding Polish: Animations and Scroll Effects</h2>
            <p>
              To make my blog more engaging, I added scroll-reveal animations that trigger when sections come into view. This feature taught me about the browser&apos;s Intersection Observer API and how to coordinate animations with user scrolling.
            </p>
            <p>
              These animations make the homepage feel more dynamic—as you scroll down, featured posts and recent posts fade in with a subtle upward motion. It&apos;s not flashy, but it adds a professional polish that makes the site feel more engaging.
            </p>
            <ul>
              <li><strong>Intersection Observer:</strong> Detecting when elements become visible on screen.</li>
              <li><strong>CSS animations:</strong> Creating smooth transitions triggered by JavaScript.</li>
              <li><strong>Performance considerations:</strong> Using efficient APIs that don&apos;t slow down scrolling.</li>
              <li><strong>Progressive enhancement:</strong> Adding effects that enhance but don&apos;t break the basic experience.</li>
            </ul>
            <p>
              These finishing touches taught me that JavaScript isn&apos;t just about functionality—it&apos;s also about creating delightful user experiences that feel smooth and polished.
            </p>

            <h2 className="blog-post-subtitle">What I&apos;m Planning: Chess Openings Web App</h2>
            <p>
              Now that I have a solid foundation from building my blog, I&apos;m excited to tackle my next project: a Chess Openings Web App. This project will push my JavaScript skills further and introduce new challenges that my blog didn&apos;t require.
            </p>
            <p>
              The chess app will need interactive chessboard components, move validation logic, opening databases, and user progress tracking. These features will require more complex state management, game logic implementation, and possibly even real-time features.
            </p>
            <ul>
              <li><strong>Interactive chessboard:</strong> Click-and-drag piece movement with visual feedback.</li>
              <li><strong>Game logic:</strong> Validating chess moves and tracking game state.</li>
              <li><strong>Data visualization:</strong> Charts and statistics for opening analysis.</li>
              <li><strong>User authentication:</strong> Saving user progress and preferences.</li>
              <li><strong>Educational features:</strong> Guided tutorials and opening explanations.</li>
            </ul>
            <p>
              This project will challenge me with concepts my blog never touched—complex game state, real-time interactions, and educational interfaces. I&apos;m excited to apply everything I&apos;ve learned while pushing into new territory.
            </p>

            <h2 className="blog-post-subtitle">Why Building Beats Tutorials: Lessons Learned</h2>
            <p>
              After one month of learning JavaScript through building my blog, I&apos;m convinced this approach works better than traditional tutorials. Here&apos;s why building real projects accelerated my learning:
            </p>
            <ul>
              <li><strong>Context matters:</strong> Learning JavaScript to solve real problems made concepts stick better.</li>
              <li><strong>Immediate feedback:</strong> I could see instantly whether my code worked or broke my blog.</li>
              <li><strong>Natural progression:</strong> Each feature built on previous ones, creating a logical learning path.</li>
              <li><strong>Debugging skills:</strong> Real bugs taught me troubleshooting skills that tutorials can&apos;t provide.</li>
              <li><strong>Motivation to persist:</strong> Having a working blog as the end goal kept me pushing through frustrating moments.</li>
              <li><strong>Portfolio building:</strong> Every feature I learned became part of a real project I could show others.</li>
            </ul>
            <p>
              The most important insight is that I learned JavaScript concepts when I actually needed them, not when some curriculum told me to. This made everything more relevant and memorable. When I needed state management, I learned <code>useState</code>. When I needed to fetch data, I learned <code>async/await</code>. Each concept had an immediate purpose.
            </p>

            <h2 className="blog-post-subtitle">What I Actually Know After One Month</h2>
            <p>
              Looking honestly at my progress, here&apos;s what I can confidently build with JavaScript:
            </p>
            <ul>
              <li><strong>React components:</strong> Functional components with hooks for state management and side effects.</li>
              <li><strong>Event handling:</strong> Responding to user interactions like clicks, form inputs, and keyboard events.</li>
              <li><strong>API integration:</strong> Fetching data from servers with proper error handling and loading states.</li>
              <li><strong>State management:</strong> Coordinating multiple pieces of application state to control the UI.</li>
              <li><strong>Data manipulation:</strong> Using array methods to filter, sort, and transform data.</li>
              <li><strong>Dynamic interfaces:</strong> Creating UIs that change based on user input and application state.</li>
              <li><strong>Performance optimizations:</strong> Using efficient APIs and cleanup patterns to keep applications responsive.</li>
            </ul>
            <p>
              These aren&apos;t the most advanced features, but they&apos;re solid, functional capabilities that work in a real production website. More importantly, I understand the concepts well enough to build on them for more complex projects like my upcoming chess app.
            </p>

            <h2 className="blog-post-subtitle">The Road Ahead</h2>
            <p>
              This month taught me that JavaScript is vast, but approachable when you learn it piece by piece through real projects. I&apos;m not trying to become an expert overnight—I&apos;m building a foundation that I can expand as I tackle new challenges.
            </p>
            <p>
              My chess app will introduce new concepts like complex game logic, data visualization, and possibly real-time features. But I&apos;m confident that the problem-solving approach that worked for my blog will work for any project I tackle next.
            </p>

            <blockquote className="blog-post-quote">
              &quot;Learning JavaScript by building my blog taught me that the best way to master a programming language isn&apos;t through tutorials—it&apos;s by solving real problems for real projects. One month in, I have both a functional blog and practical JavaScript skills that I can actually use.&apos;
            </blockquote>
          </div>
        </article>

        <BlogComments />
        
      </Container>

      <Footer />
    </main>
  );
}