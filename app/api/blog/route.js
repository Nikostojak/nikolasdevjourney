export async function GET() {
  try {
    const posts = [
      {
        title: "My First Project: A Chess Openings Web App",
        slug: "my-first-project",
        date: "2025-05-19",
        excerpt: "Announcing my first project: a web app for tracking chess openings, with a detailed development plan.",
        category: "Projects",
        tags: ["Chess", "Web Development", "Projects"],
        isFeatured: false
      },
      {
        title: "My CSS Journey: From Basics to Advanced Styling",
        slug: "my-css-journey",
        date: "2025-05-19",
        excerpt: "How I learned CSS from basics to advanced techniques while building my blog.",
        category: "CSS",
        tags: ["CSS", "Web Development", "Design"],
        isFeatured: false
      },
      {
        title: "My Python Journey: From Beginner to Advanced",
        slug: "my-python-journey",
        date: "2025-05-18",
        excerpt: "From beginner to advanced Python developer, mastering data processing, automation, and more.",
        category: "Python",
        tags: ["Python", "Data Analysis", "Web Development"],
        isFeatured: false
      },
      {
        title: "My Blog Progress: From Simple Beginnings to an Advanced Portfolio",
        slug: "my-blog-progress",
        date: "2025-05-18",
        excerpt: "Reflecting on the journey from a simple blog to an advanced developer portfolio with modern features.",
        category: "Blog Development",
        tags: ["Next.js", "React", "Web Development"],
        isFeatured: false
      },
      {
        title: "My First Steps in Python: Up to if/else/elif",
        slug: "learning-python-basics",
        date: "2025-05-01",
        excerpt: "What I learned in my first weeks of Python — from variables to if/elif/else logic.",
        category: "Python",
        tags: ["Python", "Beginner"],
        isFeatured: false
      },
      {
        title: "Why I Added Backend",
        slug: "why-i-added-backend",
        date: "2025-05-01",
        excerpt: "A breakdown of why I structured my blog using both frontend and backend — and how it helps with scalability.",
        category: "Blog Development",
        tags: ["Next.js", "Backend", "API"],
        isFeatured: false
      },
      {
        title: "How I Built This Blog",
        slug: "how-i-built-this-blog",
        date: "2025-04-30",
        excerpt: "Step-by-step guide of how I created and deployed my personal dev blog.",
        category: "Blog Development",
        tags: ["Next.js", "React", "Vercel"],
        isFeatured: false
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