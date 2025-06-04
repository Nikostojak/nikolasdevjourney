export default function sitemap() {
    const baseUrl = 'https://nikolasdevjourney.com';
    const currentDate = new Date();
    
    // Osnovne stranice
    const routes = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url:`${baseUrl}/blog`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8, // 
      },
      {
        url: `${baseUrl}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: currentDate,
        changeFrequency: 'yearly',
        priority: 0.5,
      }
    ];
  
    // Blog postovi - svi moji postojeći postovi
    const blogPosts = [
      'learning-nextjs-two-months',
      'my-javascript-journey',
      'my-first-project',
      'my-css-journey',
      'my-python-journey',
      'my-blog-progress',
      'learning-python-basics',
      'why-i-added-backend',
      'how-i-built-this-blog'
    ];
  
    const blogRoutes = blogPosts.map(slug => ({
      url: `${baseUrl}/blog/posts/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  
    return [...routes, ...blogRoutes];
  }