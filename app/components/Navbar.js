'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      const firstLink = document.querySelector('.navbar-menu.open .navbar-link');
      firstLink?.focus();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled, isOpen:', !isOpen);
  };

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    const href = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
    
    if (pathname === href) {
      setIsOpen(false);
      return;
    }

    console.log(`Navigating to: ${href}`);
    document.querySelector('main').classList.add('page-transition-exit');
    
    setTimeout(() => {
      router.push(href);
      setIsOpen(false);
    }, 300);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link href="/" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'Home')} aria-label="Go to Home page">
        NS
      </Link>
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {['Home', 'Blog', 'Projects', 'About', 'Contact'].map((page) => (
          <Link
            key={page}
            href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
            className="navbar-link"
            onClick={(e) => handleLinkClick(e, page)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLinkClick(e, page);
              }
            }}
            aria-label={`Go to ${page} page`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}