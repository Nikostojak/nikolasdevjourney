'use client';
import React, { useState, useEffect, useRef } from 'react';

const FloatingCode = () => {
  const [codeSnippets] = useState([
    { code: 'const developer = "Nikolas";', type: 'variable', color: '#4ade80', position: { top: '20%', left: '8%' } },
    { code: '// From philosophy to code', type: 'comment', color: '#64748b', position: { top: '60%', right: '10%' } },
    { code: 'git commit -m "Progress"', type: 'command', color: '#22c55e', position: { bottom: '30%', left: '12%' } },
    { code: 'export default Success;', type: 'export', color: '#10b981', position: { top: '40%', right: '8%' } },
  ]);

  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Only track mouse on desktop
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth <= 768;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Show fewer elements on mobile
    const elementsToShow = isMobile ? [] : codeSnippets; // Hide all on mobile

    const elements = elementsToShow.map((snippet, index) => {
      return {
        id: index,
        ...snippet,
        x: snippet.position.left ? 
          (parseFloat(snippet.position.left) / 100) * screenWidth : 
          screenWidth - (parseFloat(snippet.position.right) / 100) * screenWidth - 250,
        y: snippet.position.top ? 
          (parseFloat(snippet.position.top) / 100) * screenHeight : 
          screenHeight - (parseFloat(snippet.position.bottom) / 100) * screenHeight - 50,
        speed: 0,
        direction: 0,
        baseOpacity: 0.4,
        opacity: 0.4,
        scale: 1,
        rotationSpeed: 0,
        currentRotation: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        isMobile: isMobile,
        isStatic: true
      };
    });
    
    setFloatingElements(elements);
  }, [codeSnippets]);

  useEffect(() => {
    if (floatingElements.length === 0) return;

    const animateElements = () => {
      setFloatingElements(prev => 
        prev.map(element => {
          if (element.isStatic) {
            // Static positioning with only subtle pulse
            const pulseOffset = Math.sin(element.pulsePhase + Date.now() * 0.0008) * 0.15;
            const newOpacity = Math.max(0.2, element.baseOpacity + pulseOffset);

            return {
              ...element,
              opacity: newOpacity,
            };
          }
          
          // Original moving logic for other elements (if any)
          let newX = element.x + Math.cos(element.direction) * element.speed;
          let newY = element.y + Math.sin(element.direction) * element.speed;
          
          const padding = element.isMobile ? 20 : 50;
          const maxX = element.isMobile ? window.innerWidth - 150 : window.innerWidth - 300;
          const maxY = element.isMobile ? window.innerHeight - 50 : window.innerHeight - 100;
          
          if (newX < padding || newX > maxX) {
            element.direction = Math.PI - element.direction;
            newX = Math.max(padding, Math.min(maxX, newX));
          }
          if (newY < padding || newY > maxY) {
            element.direction = -element.direction;
            newY = Math.max(padding, Math.min(maxY, newY));
          }

          let finalX = newX;
          let finalY = newY;

          if (!element.isMobile) {
            const parallaxMultiplier = 0.003;
            const parallaxOffsetX = (mousePosition.x - window.innerWidth / 2) * parallaxMultiplier;
            const parallaxOffsetY = (mousePosition.y - window.innerHeight / 2) * parallaxMultiplier;
            
            finalX += parallaxOffsetX;
            finalY += parallaxOffsetY;
          }

          const pulseOffset = Math.sin(element.pulsePhase + Date.now() * 0.001) * 0.2;
          const newOpacity = Math.max(0.1, element.baseOpacity + pulseOffset);
          const newRotation = element.currentRotation + element.rotationSpeed;

          return {
            ...element,
            x: newX,
            y: newY,
            displayX: finalX,
            displayY: finalY,
            opacity: newOpacity,
            currentRotation: newRotation
          };
        })
      );
    };

    const interval = setInterval(animateElements, 32);
    return () => clearInterval(interval);
  }, [floatingElements, mousePosition]);

  return (
    <div 
      ref={containerRef}
      className="floating-code-container"
      style={{ 
        position: 'absolute', // Changed from fixed to absolute
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', // Only covers hero section
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {floatingElements.map(element => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: element.displayX || element.x,
            top: element.displayY || element.y,
            opacity: element.opacity,
            color: element.color,
            fontFamily: 'Fira Code, SF Mono, Monaco, monospace',
            fontSize: `${(element.isMobile ? 10 : 12) * element.scale}px`,
            fontWeight: '500',
            whiteSpace: 'nowrap',
            transform: `rotate(${element.currentRotation}rad) scale(${element.scale})`,
            transition: 'opacity 0.2s ease',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            padding: '0.8rem 1rem',
            backdropFilter: 'blur(10px)',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          {element.code}
        </div>
      ))}
    </div>
  );
};

export default FloatingCode;