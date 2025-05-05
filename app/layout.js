import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nikolas Dev Journey",
  description: "Documenting my journey from philosophy to software development, sharing insights on Python, JavaScript, and web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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