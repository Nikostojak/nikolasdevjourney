'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedSymbols, setDisplayedSymbols] = useState([]);
  const fullSymbols = ['{', '}', '</>', '=>', '&&', '>', '!=', '||', '#', ';'];

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
  };

  useEffect(() => {
    // Prvo tipkanje pri učitavanju
    typeSymbols();

    // Ponavljanje tipkanja svakih 10 sekundi
    const repeatInterval = setInterval(() => {
      typeSymbols();
    }, 10000); // 10 sekundi

    return () => clearInterval(repeatInterval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled, isOpen:', !isOpen);
  };

  const handleLinkClick = (page) => {
    console.log(`Navigating to: ${page === 'Home' ? '/' : `/${page.toLowerCase()}`}`);
    toggleMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">NS</div>
        <span className="navbar-symbols">
          {displayedSymbols.map((symbol, index) => (
            <span key={index} className={`symbol symbol-${index + 1}`}>
              {symbol}
            </span>
          ))}
        </span>
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
            onClick={() => handleLinkClick(page)}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
}