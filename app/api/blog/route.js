export async function GET() {
    const posts = [
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
  