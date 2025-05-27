export const metadata = {
  title: 'Nikolas Dev Journey | My Python Journey: From Beginner to Advanced',
  description: 'From beginner to advanced Python developer, mastering data processing, automation, and more.',
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

            <CodeBlock 
              language="python" 
              filename="first_script.py"
              title="My First Python Script"
            >
{`# My first meaningful Python script - Age classifier
def classify_age():
    name = input("What's your name? ")
    age = int(input("How old are you? "))
    
    if age < 13:
        category = "child"
    elif age < 20:
        category = "teenager"
    elif age < 60:
        category = "adult"
    else:
        category = "senior"
    
    print("Hello " + name + "! You are classified as a " + category + ".")
    
    # Simple validation
    if age < 0:
        print("Invalid age entered!")

classify_age()`}
            </CodeBlock>

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

            <CodeBlock 
              language="python" 
              filename="budget_tracker.py"
              title="Budget Tracker - Intermediate Python"
            >
{`# Budget tracking system using data structures
class BudgetTracker:
    def __init__(self):
        self.expenses = []
        self.categories = {}
    
    def add_expense(self, amount, category, description=""):
        expense = {
            'amount': amount,
            'category': category,
            'description': description
        }
        self.expenses.append(expense)
        
        # Update category totals
        if category in self.categories:
            self.categories[category] += amount
        else:
            self.categories[category] = amount
    
    def get_total_spending(self):
        return sum(expense['amount'] for expense in self.expenses)
    
    def get_category_breakdown(self):
        for category, total in self.categories.items():
            percentage = (total / self.get_total_spending()) * 100
            print(category + ": $" + str(round(total, 2)) + " (" + str(round(percentage, 1)) + "%)")

# Usage example
tracker = BudgetTracker()
tracker.add_expense(50, "Food", "Groceries")
tracker.add_expense(30, "Transport", "Bus tickets")
tracker.add_expense(100, "Food", "Restaurant")

print("Total spending: $" + str(tracker.get_total_spending()))
tracker.get_category_breakdown()`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Advanced Steps: Classes and Libraries</h2>
            <p>
              To reach an advanced level, I learned object-oriented programming (OOP) with classes, which helped me model real-world systems. I also started using powerful libraries like <code>pandas</code> for data analysis, <code>requests</code> for API calls, and <code>BeautifulSoup</code> for web scraping. These tools opened up new possibilities for practical applications.
            </p>
            <p>
              Here&apos;s an example of how I use <code>pandas</code> to analyze a dataset, showcasing my ability to handle data efficiently:
            </p>

            <CodeBlock 
              language="python" 
              filename="data_analysis.py"
              title="Advanced Data Analysis with Pandas"
            >
{`import pandas as pd
import matplotlib.pyplot as plt

def analyze_sales(file_path):
    # Load CSV data
    df = pd.read_csv(file_path)
    
    # Clean data: remove missing values
    df = df.dropna()
    
    # Calculate total sales by category
    sales_by_category = df.groupby('category')['amount'].sum()
    
    # Find top-selling product
    top_product = df.loc[df['amount'].idxmax()]
    
    # Calculate monthly trends
    df['date'] = pd.to_datetime(df['date'])
    monthly_sales = df.groupby(df['date'].dt.to_period('M'))['amount'].sum()
    
    # Generate insights
    insights = {
        'sales_by_category': sales_by_category.to_dict(),
        'top_product': top_product['product'],
        'total_revenue': df['amount'].sum(),
        'average_order': df['amount'].mean(),
        'monthly_growth': monthly_sales.pct_change().mean() * 100
    }
    
    # Create visualization
    plt.figure(figsize=(10, 6))
    sales_by_category.plot(kind='bar')
    plt.title('Sales by Category')
    plt.ylabel('Revenue ($)')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('sales_analysis.png')
    
    return insights

# Example usage
result = analyze_sales('sales_data.csv')
print("Sales by Category:", result['sales_by_category'])
print("Top Product:", result['top_product'])
print("Total Revenue: $" + str(round(result['total_revenue'], 2)))
print("Average Order: $" + str(round(result['average_order'], 2)))
print("Monthly Growth: " + str(round(result['monthly_growth'], 1)) + "%")`}
            </CodeBlock>

            <p>
              This script demonstrates my ability to process and analyze data, create visualizations, and extract meaningful business insights—skills highly valued in data-driven roles.
            </p>

            <h2 className="blog-post-subtitle">Real-World Automation: Web Scraping Project</h2>
            <p>
              One of my most impressive projects was building a web scraper to monitor product prices across multiple e-commerce sites. This project showcases my ability to work with APIs, handle web data, and create practical automation solutions.
            </p>

            <CodeBlock 
              language="python" 
              filename="price_monitor.py"
              title="E-commerce Price Monitoring System"
            >
{`import requests
from bs4 import BeautifulSoup
import smtplib
from email.mime.text import MIMEText
import json
import time
from datetime import datetime

class PriceMonitor:
    def __init__(self):
        self.products = []
        self.price_history = {}
    
    def add_product(self, name, url, target_price):
        product = {
            'name': name,
            'url': url,
            'target_price': target_price,
            'current_price': None
        }
        self.products.append(product)
    
    def scrape_price(self, url):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        try:
            response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Generic price selector (would need customization per site)
            price_element = soup.find('span', class_='price') or soup.find('div', class_='price-current')
            
            if price_element:
                price_text = price_element.get_text().strip()
                # Extract numeric price
                price = float(''.join(filter(str.isdigit, price_text.replace('.', '')))) / 100
                return price
                
        except Exception as e:
            print("Error scraping " + url + ": " + str(e))
            return None
    
    def check_prices(self):
        alerts = []
        
        for product in self.products:
            current_price = self.scrape_price(product['url'])
            
            if current_price:
                product['current_price'] = current_price
                
                # Store price history
                if product['name'] not in self.price_history:
                    self.price_history[product['name']] = []
                
                self.price_history[product['name']].append({
                    'price': current_price,
                    'timestamp': datetime.now().isoformat()
                })
                
                # Check if price dropped below target
                if current_price <= product['target_price']:
                    alerts.append(product)
                    
                print(product['name'] + ": $" + str(current_price) + " (Target: $" + str(product['target_price']) + ")")
        
        return alerts
    
    def send_alert(self, product):
        # Email notification system (simplified)
        message = """
        Price Alert! 
        
        """ + product['name'] + """ is now $""" + str(product['current_price']) + """
        (Target was $""" + str(product['target_price']) + """)
        
        Buy now: """ + product['url'] + """
        """
        print("ALERT: " + message)
    
    def run_monitoring(self, interval_hours=6):
        print("Starting price monitoring...")
        
        while True:
            alerts = self.check_prices()
            
            for product in alerts:
                self.send_alert(product)
            
            # Save price history
            with open('price_history.json', 'w') as f:
                json.dump(self.price_history, f, indent=2)
            
            print("Sleeping for " + str(interval_hours) + " hours...")
            time.sleep(interval_hours * 3600)

# Usage example
monitor = PriceMonitor()
monitor.add_product("Laptop XYZ", "https://example-store.com/laptop", 800)
monitor.add_product("Headphones ABC", "https://another-store.com/headphones", 150)

# Run once to test
monitor.check_prices()`}
            </CodeBlock>

            <h2 className="blog-post-subtitle">Projects That Impress Employers</h2>
            <p>
              To apply my skills, I built projects that showcase my versatility:
            </p>
            <ul>
              <li><strong>Data processing tool:</strong> Used <code>pandas</code> to clean and summarize CSV files, automating reports for small businesses.</li>
              <li><strong>Web scraper:</strong> Built a script with <code>BeautifulSoup</code> to collect price data from online stores.</li>
              <li><strong>Automation script:</strong> Created a tool with <code>requests</code> to fetch API data and generate daily summaries.</li>
              <li><strong>File organizer:</strong> Built a system that automatically sorts downloads into folders based on file types and dates.</li>
              <li><strong>Email automation:</strong> Created scripts that send personalized emails and reports using <code>smtplib</code>.</li>
            </ul>
            <p>
              These projects highlight my ability to solve real-world problems, from data analysis to automation, making me a strong fit for roles in data engineering, backend development, or DevOps.
            </p>

            <h2 className="blog-post-subtitle">Skills That Stand Out</h2>
            <p>
              As an advanced Python developer, I&apos;ve developed skills that employers value:
            </p>
            <ul>
              <li><strong>Data analysis:</strong> Proficient with <code>pandas</code>, <code>numpy</code>, and <code>matplotlib</code> for cleaning, analyzing, and visualizing datasets.</li>
              <li><strong>Web scraping:</strong> Experienced with <code>BeautifulSoup</code>, <code>requests</code>, and handling dynamic content.</li>
              <li><strong>Automation:</strong> Experienced in writing scripts to streamline repetitive tasks and business processes.</li>
              <li><strong>API integration:</strong> Comfortable working with REST APIs, JSON data, and third-party services.</li>
              <li><strong>Testing:</strong> Familiar with <code>pytest</code> and <code>unittest</code> for writing comprehensive test suites.</li>
              <li><strong>Clean code:</strong> I follow PEP 8 guidelines and write documentation for maintainable code.</li>
              <li><strong>Version control:</strong> Proficient with Git workflows, branching strategies, and collaborative development.</li>
              <li><strong>Error handling:</strong> Implement robust exception handling and logging for production-ready code.</li>
            </ul>
            <p>
              My enthusiasm for learning and problem-solving, combined with practical project experience, makes me a candidate who can contribute immediately while continuing to grow with any team.
            </p>

            <h2 className="blog-post-subtitle">Lessons Learned and Next Steps</h2>
            <p>
              This journey taught me the importance of breaking down complex problems and experimenting with new tools. Debugging data processing scripts and learning library documentation were challenges that sharpened my skills. I&apos;m proud of my progress but know there&apos;s more to explore.
            </p>
            <ul>
              <li><strong>Lesson 1:</strong> Clear code structure and proper error handling prevent bugs and save time.</li>
              <li><strong>Lesson 2:</strong> Libraries like <code>pandas</code> are powerful but require practice and understanding of edge cases.</li>
              <li><strong>Lesson 3:</strong> Testing ensures code reliability and makes refactoring safer, even for small projects.</li>
              <li><strong>Lesson 4:</strong> Documentation and clean code are investments in future productivity.</li>
              <li><strong>Lesson 5:</strong> Real-world projects teach skills you can&apos;t learn from tutorials alone.</li>
            </ul>
            <p>
              Moving forward, I plan to deepen my knowledge of testing with advanced <code>pytest</code> features, explore web development with <code>FastAPI</code> and <code>Django</code>, and dive into machine learning with <code>scikit-learn</code>. I&apos;m also interested in cloud deployment with AWS and Docker containerization. My goal is to keep building projects that solve real problems and contribute to innovative teams while expanding into full-stack development.
            </p>

            <blockquote className="blog-post-quote">
              &quot;From simple scripts to advanced automation systems, Python has shown me how to turn ideas into reality—one line of code at a time. The journey from beginner to advanced isn&apos;t just about learning syntax; it&apos;s about developing the problem-solving mindset that makes great developers.&quot;
            </blockquote>
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  );
}