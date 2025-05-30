export default function robots() {
    return {
      rules: [
        {
          userAgent: '*', // Svi web crawleri
          allow: '/', // Dozvoljavam pristup svemu
          disallow: [
            '/api/', // Ne indeksiraj API routes
            '/admin/', // Ne indeksiraj admin stranice ako ih imate
          ],
        },
        {
          userAgent: 'GPTBot', 
          disallow: '/', 
        }
      ],
      sitemap: 'https://nikolasdevjourney.com/sitemap.xml',
      host: 'https://nikolasdevjourney.com',
    };
  }