export const createMetadata = (page, customData = {}) => {
  // Osnovni metadata koji se koristi na svim stranicama
  const baseMetadata = {
    title: 'Nikolas Dev Journey',
    description: 'Follow my journey from philosophy to software development, learning Python, JavaScript, and web development.',
    keywords: 'developer, python, javascript, web development, programming blog, croatia, self-taught developer, nikolas stojak',
    authors: [{ name: 'Nikolas Stojak' }],
    creator: 'Nikolas Stojak',
    publisher: 'Nikolas Stojak',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Viewport and other meta tags
    viewport: {
      width: 'device-width',
      initialScale: 1,
      viewportFit: 'cover',
    },
    
    // Theme colors
    themeColor: '#0a0f1c',
    colorScheme: 'dark',
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    
    // Open Graph - za društvene mreže (Facebook, LinkedIn)
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://nikolasdevjourney.com',
      siteName: 'Nikolas Dev Journey',
      title: 'Nikolas Dev Journey - From Philosophy to Code',
      description: 'Follow my journey from philosophy to software development, learning Python, JavaScript, and web development.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Nikolas Dev Journey - Developer Blog'
        }
      ]
    },
    
    // Twitter Card - za Twitter
    twitter: {
      card: 'summary_large_image',
      title: 'Nikolas Dev Journey',
      description: 'Follow my journey from philosophy to software development',
      images: ['/og-image.jpg'],
      creator: '@NikolasStojak' 
    },
    
    // Other meta tags
    other: {
      'msapplication-TileColor': '#0a0f1c',
    },
  };

  // Specifični metadata za različite stranice
  const pageSpecific = {
    home: {
      title: 'Nikolas Dev Journey | From Philosophy to Code',
      description: 'Self-taught developer documenting the journey from seminary to software development. Python, JavaScript, and web development tutorials.',
    },
    blog: {
      title: 'Developer Blog | Nikolas Dev Journey',
      description: 'Python, JavaScript, and web development tutorials and insights from a self-taught developer transitioning from philosophy to code.',
      openGraph: {
        type: 'website'
      }
    },
    about: {
      title: 'About Nikolas | From Seminary to Software Development',
      description: 'Learn about my unique journey from studying Thomistic philosophy in seminary to becoming a self-taught software developer.',
    },
    projects: {
      title: 'Projects | Nikolas Dev Journey',
      description: 'Explore my programming projects including chess openings web app, Python automation scripts, and JavaScript applications.',
    },
    contact: {
      title: 'Contact Nikolas Stojak | Developer',
      description: 'Get in touch with Nikolas Stojak - connect on LinkedIn or GitHub to discuss development opportunities.',
    }
  };

  // Kombiniramo osnovni metadata s page-specific podacima
  const pageData = pageSpecific[page] || {};
  
  return {
    ...baseMetadata,
    ...pageData,
    ...customData, // Omogućuje custom override za specific stranice
    
    // Kombiniram OpenGraph podatke
    openGraph: {
      ...baseMetadata.openGraph,
      ...pageData.openGraph,
      ...customData.openGraph
    }
  };
};

// Helper funkcija za blog postove
export const createBlogPostMetadata = (post) => {
  return createMetadata('blog', {
    title: `${post.title} | Nikolas Dev Journey`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: post.date,
        author: 'Nikolas Stojak',
        tags: post.tags || []
      }
    }
  });
};