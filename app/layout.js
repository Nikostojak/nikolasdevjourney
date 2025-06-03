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
  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          backgroundColor: '#0a0f1c',
          color: '#e1e5e9',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CMEMLMEFFR" />
        {children}
        
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
      </body>
    </html>
  );
}