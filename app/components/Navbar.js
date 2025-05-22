'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const firstLink = menuRef.current?.querySelector('.navbar-link');
      firstLink?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const isNearTop = event.clientY < 50;
      setIsVisible(isNearTop);
    };

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    const href = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
    
    if (pathname === href) {
      setIsOpen(false);
      return;
    }

    document.querySelector('main').classList.add('page-transition-exit');
    
    setTimeout(() => {
      router.push(href);
      setIsOpen(false);
    }, 300);
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`} role="navigation" aria-label="Main navigation">
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
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
          {isOpen ? (
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

      <div className={`navbar-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
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