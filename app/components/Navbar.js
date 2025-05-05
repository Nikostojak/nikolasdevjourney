'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span role="img" aria-label="rocket">🚀</span> DevJourney
      </div>
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {['Home', 'Blog', 'About', 'Contact'].map(page => (
          <Link 
            key={page}
            href={page === 'Home' ? '/' : `/${page.toLowerCase()}`} 
            className="navbar-link"
            onClick={toggleMenu}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}