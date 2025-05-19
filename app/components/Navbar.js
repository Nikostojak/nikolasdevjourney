'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedSymbols, setDisplayedSymbols] = useState([]);
  const fullSymbols = ['{', '}', '</>', '=>', '&&', '>', '!=', '||', '#', ';'];
  const router = useRouter();
  const pathname = usePathname();

  const typeSymbols = () => {
    setDisplayedSymbols([]); // Resetiraj simbole
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullSymbols.length) {
        setDisplayedSymbols((prev) => [...prev, fullSymbols[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Brzina tipkanja (150ms po simbolu)
    return () => clearInterval(interval); // Vraća funkciju za čišćenje
  };

  useEffect(() => {
    console.log('Navbar loaded | Nikolas Dev Journey v1.0');
    // Pokreni animaciju samo ako je tab vidljiv
    if (document.visibilityState === 'visible') {
      typeSymbols();
    }

    // Postavi interval za ponavljanje animacije
    const repeatInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        typeSymbols();
      }
    }, 10000); // Ponovi svakih 10 sekundi

    // Slušač za promjenu vidljivosti taba
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        typeSymbols();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Čišćenje intervala i slušatelja pri unmountu
    return () => {
      clearInterval(repeatInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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
    e.preventDefault(); // Sprječava trenutnu navigaciju
    const href = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
    
    // Ako je trenutna ruta ista kao ciljna, ne radi ništa
    if (pathname === href) {
      setIsOpen(false); // Zatvori meni ako je otvoren
      return;
    }

    console.log(`Navigating to: ${href}`);
    // Pokreni fade-out animaciju
    document.querySelector('main').classList.add('page-transition-exit');
    
    // Pričekaj kraj animacije (300ms) prije navigacije
    setTimeout(() => {
      router.push(href);
      setIsOpen(false); // Zatvori meni nakon klika
    }, 300);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'Home')} aria-label="Go to Home page">
          NS
        </Link>
        <span className="navbar-symbols" aria-hidden="true">
          {displayedSymbols.map((symbol, index) => (
            <span key={index} className={`symbol symbol-${Math.min(index + 1, 10)}`}>
              {symbol}
            </span>
          ))}
        </span>
      </div>
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