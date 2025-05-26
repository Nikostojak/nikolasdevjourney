import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Nikolas Dev Journey - Home',
  description: 'Follow my journey from philosophy to software development, learning Python, JavaScript, and web development.',
  openGraph: {
    title: 'Nikolas Dev Journey',
    description: 'Follow my journey in software development.',
    url: 'https://nikolasdevjourney.com', 
    images: ['/og-image.jpg'], // sliku ako imam
  },
};

export default function RootLayout({ children }) {
  console.log('RootLayout rendering | Built with Next.js v14.2.3');
  return (
    <html lang="hr">
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CMEMLMEFFR" />
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