export async function GET() {
    const posts = [
      {
        title: "Why I Used Backend",
        slug: "why-i-built-this-blog",
        date: "2025-05-01",
        expcerpt: "A breakdown of why I structured my blog using both frontend and backend — and how it helps with scalability."
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
  