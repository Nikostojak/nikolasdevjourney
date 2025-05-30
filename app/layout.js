// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { createMetadata } from './lib/metadata';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Koristim svoju metadata funkciju
export const metadata = createMetadata('home');

export default function RootLayout({ children }) {
  console.log('RootLayout rendering | Built with Next.js v15.3.1');
  
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CMEMLMEFFR" />
        
        {/* Dodatni SEO meta tagovi */}
        <meta name="theme-color" content="#1a202c" />
        <meta name="msapplication-TileColor" content="#1a202c" />
        
        {/* Favicons - trebate dodati ove u public folder */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preload key resources za performance */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* JSON-LD Schema markup za Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nikolas Stojak",
              "jobTitle": "Self-taught Software Developer",
              "description": "Self-taught developer transitioning from philosophy to software development, specializing in Python, JavaScript, and web development.",
              "url": "https://nikolasdevjourney.com",
              "image": "https://nikolasdevjourney.com/profile.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/nikolas-stojak-335177285/",
                "https://github.com/Nikostojak"
              ],
              "knowsAbout": [
                "Python Programming",
                "JavaScript",
                "React",
                "Next.js",
                "Web Development",
                "Software Engineering"
              ],
              "alumniOf": "Priestly Fraternity of St. Peter Seminary",
              "nationality": "Croatian"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable}`}
        style={{
          backgroundColor: '#1a202c',
          color: '#e2e8f0',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </body>
    </html>
  );
}