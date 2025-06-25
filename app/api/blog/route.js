export async function GET() {
  try {
    const posts = [
      {
        title: "My Networking Journey: From Zero to VPN Understanding",
        slug: "my-networking-journey",
        date: "2025-06-29",
        excerpt: "How I went from knowing nothing about networks to understanding VPNs, WireGuard, and modern networking concepts in just two months.",
        category: "Networking",
        tags: ["Networking", "VPN", "WireGuard", "Learning Journey"],
        isFeatured: false
      },
      {
        title: "Learning Linux: Setting Up My First VPS",
        slug: "learning-linux-vps", 
        date: "2025-06-28",
        excerpt: "My journey from Windows user to Linux server administrator, learning SSH, security, and cloud infrastructure along the way.",
        category: "Linux",
        tags: ["Linux", "VPS", "Hetzner", "Server Administration"],
        isFeatured: false
      },
      {
        title: "Exploring Modern VPN Solutions: Tailscale vs Traditional Approaches",
        slug: "modern-vpn-solutions",
        date: "2025-06-27", 
        excerpt: "Comparing traditional VPN setups with modern mesh networking solutions like Tailscale, ZeroTier, and WireGuard.",
        category: "VPN",
        tags: ["VPN", "Tailscale", "WireGuard", "Networking"],
        isFeatured: true  
      },
      {
        title: "Docker and Self-Hosting: My First Steps",
        slug: "docker-selfhosting",
        date: "2025-06-26",
        excerpt: "Learning Docker fundamentals and discovering the world of self-hosting, from basic containers to complex multi-service deployments.",
        category: "Docker", 
        tags: ["Docker", "Self-hosting", "DevOps", "Containers"],
        isFeatured: false
      },
      {
        title: "Understanding Network Security: What I Learned Building Network Tools",
        slug: "network-security-journey",
        date: "2025-06-25",
        excerpt: "My journey into network security fundamentals, from firewall rules to encryption, Zero Trust architecture, and best practices.",
        category: "Security",
        tags: ["Security", "Networking", "Linux", "Best Practices"],
        isFeatured: false
      },
      {
        title: "Learning Next.js: Two Months of Building in Production",
        slug: "learning-nextjs-two-months",
        date: "2025-06-04",
        excerpt: "My practical journey learning Next.js by building a real developer blog - from App Router basics to deployment, featuring real code examples and lessons learned.",
        category: "Next.js",
        tags: ["Next.js", "React", "Web Development", "App Router", "Learning Journey"],
        isFeatured: true
      },
      {
        title: "From Zero to Functional: My First Month with JavaScript",
        slug: "my-javascript-journey",
        date: "2025-05-24",
        excerpt: "How I learned JavaScript fundamentals by building my blog instead of watching tutorials - and why this approach works better for real skill development.",
        category: "JavaScript",
        tags: ["JavaScript", "Learning Journey", "Blog Development", "React"],
        isFeatured: false
      },
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