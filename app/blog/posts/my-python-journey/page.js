export const metadata = {
    title: 'Nikolas Dev Journey | My Python Journey: From Beginner to Advanced',
    description: 'From beginner to advanced Python developer, mastering data processing, automation, and more.',
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
            My Python Journey: From Beginner to Advanced
            </h1>
  
            <div className="blog-post-content">
              <p>
                My Python adventure began with simple scripts, as I shared in <a href="/blog/posts/learning-python-basics">my beginner post</a>, where I explored variables, conditionals, and basic logic. Since then, I&apos;ve grown into an advanced Python developer, tackling data processing, automation, and more. This post dives into my progress, showcasing skills that make me a strong candidate for tech roles while highlighting my eagerness to keep learning.
              </p>
  
              <h2 className="blog-post-subtitle">The Beginning: Python Basics</h2>
              <p>
                I started with the essentials: using <code>print()</code> to output text, defining variables, and writing <code>if/elif/else</code> statements. These early steps taught me how Python&apos;s clear syntax makes coding accessible. I built small scripts, like one to classify ages, which sparked my curiosity for more complex challenges.
              </p>
              <ul>
                <li><strong>Core skills:</strong> Variables, strings, numbers, booleans, conditionals.</li>
                <li><strong>First win:</strong> A script to handle user input with <code>input()</code>.</li>
                <li><strong>Takeaway:</strong> Python&apos;s simplicity is perfect for starting out.</li>
              </ul>
  
              <h2 className="blog-post-subtitle">Intermediate Steps: Loops, Data Structures, and Functions</h2>
              <p>
                Next, I explored loops and data structures to make my code more dynamic. <code>for</code> and <code>while</code> loops let me automate tasks, while lists, dictionaries, and sets helped me organize data. Writing functions was a game-changer, allowing me to create reusable, modular code.
              </p>
              <ul>
                <li><strong>Loops:</strong> Iterating over data with <code>for</code> and controlling flow with <code>while</code>.</li>
                <li><strong>Data structures:</strong> Lists for ordered data, dictionaries for key-value pairs, sets for unique items.</li>
                <li><strong>Functions:</strong> Defining reusable code blocks with parameters.</li>
              </ul>
              <p>
                A key project was a budget tracker that used lists and dictionaries to categorize expenses, teaching me how to structure data and write efficient loops.
              </p>
  
              <h2 className="blog-post-subtitle">Advanced Steps: Classes and Libraries</h2>
              <p>
                To reach an advanced level, I learned object-oriented programming (OOP) with classes, which helped me model real-world systems. I also started using powerful libraries like <code>pandas</code> for data analysis, <code>requests</code> for API calls, and <code>BeautifulSoup</code> for web scraping. These tools opened up new possibilities for practical applications.
              </p>
              <p>
                Here&apos;s an example of how I use <code>pandas</code> to analyze a dataset, showcasing my ability to handle data efficiently:
              </p>
              <div className="blog-post-code">
                {`import pandas as pd
  
  def analyze_sales(file_path):
      # Load CSV data
      df = pd.read_csv(file_path)
      
      # Clean data: remove missing values
      df = df.dropna()
      
      # Calculate total sales by category
      sales_by_category = df.groupby('category')['amount'].sum()
      
      # Find top-selling product
      top_product = df.loc[df['amount'].idxmax()]
      
      return {
          'sales_by_category': sales_by_category.to_dict(),
          'top_product': top_product['product']
      }
  
  # Example usage
  result = analyze_sales('sales_data.csv')
  print("Sales by Category:", result['sales_by_category'])
  print("Top Product:", result['top_product'])`}
              </div>
              <p>
                This script demonstrates my ability to process and analyze data, a skill highly valued in data-driven roles.
              </p>
  
              <h2 className="blog-post-subtitle">Projects That Impress Employers</h2>
              <p>
                To apply my skills, I built projects that showcase my versatility:
              </p>
              <ul>
                <li><strong>Data processing tool:</strong> Used <code>pandas</code> to clean and summarize CSV files, automating reports for small businesses.</li>
                <li><strong>Web scraper:</strong> Built a script with <code>BeautifulSoup</code> to collect price data from online stores.</li>
                <li><strong>Automation script:</strong> Created a tool with <code>requests</code> to fetch API data and generate daily summaries.</li>
              </ul>
              <p>
                These projects highlight my ability to solve real-world problems, from data analysis to automation, making me a strong fit for roles in data engineering or backend development.
              </p>
  
              <h2 className="blog-post-subtitle">Skills That Stand Out</h2>
              <p>
                As an advanced Python developer, I&apos;ve developed skills that employers value:
              </p>
              <ul>
                <li><strong>Data analysis:</strong> Proficient with <code>pandas</code> for cleaning and analyzing datasets.</li>
                <li><strong>Automation:</strong> Experienced in writing scripts to streamline repetitive tasks.</li>
                <li><strong>Testing basics:</strong> Familiar with <code>pytest</code> for writing simple unit tests.</li>
                <li><strong>Clean code:</strong> I follow PEP 8 guidelines for readable, maintainable code.</li>
                <li><strong>Version control:</strong> Comfortable using Git for project management.</li>
              </ul>
              <p>
                My enthusiasm for learning and problem-solving makes me a candidate who can grow with any team.
              </p>
  
              <h2 className="blog-post-subtitle">Lessons Learned and Next Steps</h2>
              <p>
                This journey taught me the importance of breaking down complex problems and experimenting with new tools. Debugging data processing scripts and learning library documentation were challenges that sharpened my skills. I&apos;m proud of my progress but know there&apos;s more to explore.
              </p>
              <ul>
                <li><strong>Lesson 1:</strong> Clear code structure prevents bugs and saves time.</li>
                <li><strong>Lesson 2:</strong> Libraries like <code>pandas</code> are powerful but require practice.</li>
                <li><strong>Lesson 3:</strong> Testing ensures code reliability, even for small projects.</li>
              </ul>
              <p>
                Moving forward, I plan to deepen my knowledge of testing with <code>pytest</code>, explore web development with <code>Django</code>, and dive into more advanced data analysis techniques. My goal is to keep building projects that solve real problems and contribute to innovative teams.
              </p>
  
              <blockquote className="blog-post-quote">
                “From simple scripts to advanced tools, Python has shown me how to turn ideas into reality—one line of code at a time.”
              </blockquote>
            </div>
          </article>
        </Container>
  
        <Footer />
      </main>
    );
  }