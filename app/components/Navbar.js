'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="homepage-nav" role="navigation" aria-label="Main navigation">
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <svg
          className="hamburger-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="navbar-desktop">
        {['Home', 'Blog', 'Projects', 'About', 'Contact'].map((page) => (
          <Link
            key={page}
            href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
            className="navbar-link"
            aria-label={`Go to ${page} page`}
          >
            {page}
          </Link>
        ))}
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        {['Home', 'Blog', 'Projects', 'About', 'Contact'].map((page) => (
          <Link
            key={page}
            href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
            className="navbar-link"
            onClick={() => handleLinkClick(page)}
            aria-label={`Go to ${page} page`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}