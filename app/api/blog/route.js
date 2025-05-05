export async function GET() {
  try {
    const posts = [
      {
        title: "🐍 My First Steps in Python: Up to if/else/elif",
        slug: "learning-python-basics",
        date: "2025-05-01",
        excerpt: "What I learned in my first weeks of Python — from variables to if/elif/else logic."
      },
      {
        title: "Why I Added Backend",
        slug: "why-i-added-backend",
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
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    console.error("Error in /api/blog:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}