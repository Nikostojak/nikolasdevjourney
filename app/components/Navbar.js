'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href) => {
    // Pokreni fade-out animaciju
    document.querySelector('main').classList.add('page-transition-exit');
    
    // Pričekaj kraj animacije (300ms) prije navigacije
    setTimeout(() => {
      router.push(href);
      setIsOpen(false); // Zatvori meni nakon klika
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo" onClick={() => handleLinkClick('/')}>
          Nikolas Dev
        </a>
      </div>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="/" className="navbar-link" onClick={() => handleLinkClick('/')} aria-label="Go to Home page">Home</a>
        <a href="/blog" className="navbar-link" onClick={() => handleLinkClick('/blog')} aria-label="Go to Blog page">Blog</a>
        <a href="/about" className="navbar-link" onClick={() => handleLinkClick('/about')} aria-label="Go to About page">About</a>
        <a href="/contact" className="navbar-link" onClick={() => handleLinkClick('/contact')} aria-label="Go to Contact page">Contact</a>
        <a href="/projects" className="navbar-link" onClick={() => handleLinkClick('/projects')} aria-label="Go to Projects page">Projects</a>
      </div>
    </nav>
  );
}