export async function GET() {
    const posts = [
        {
            title: "🐍 My First Steps in Python: Up to if/else/elif",
            slug: "learning-python-basics",
            date: "2025-05-01",
            excerpt: "What I learned in my first weeks of Python — from variables to if/elif/else logic.",
          },
      
        {
        title: "Why I Used Backend",
        slug: "why-i-used-backend",
        date: "2025-05-01",
        excerpt: "A breakdown of why I structured my blog using both frontend and backend — and how it helps with scalability."
      },
      {
        title: "How I Built This Blog",
        slug: "how-i-built-this-blog",
        date: "2025-04-30",
        excerpt: "Step-by-step guide of how I created and deployed my personal dev blog."
      }
    ];
  
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  