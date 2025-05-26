'use client';
import React, { useState, useEffect, useRef } from 'react';

const FloatingCode = () => {
  const [codeSnippets] = useState([
    { code: 'const developer = "Nikolas";', type: 'variable', color: '#90cdf4', layer: 'front' },
    { code: 'if (learning) { grow(); }', type: 'conditional', color: '#f093fb', layer: 'middle' },
    { code: 'function buildFuture() {}', type: 'function', color: '#a8edea', layer: 'back' },
    { code: '// Dreams become reality', type: 'comment', color: '#68d391', layer: 'front' },
    { code: 'const passion = "coding";', type: 'variable', color: '#90cdf4', layer: 'middle' },
    { code: 'console.log("Hello World!");', type: 'method', color: '#ffd89b', layer: 'back' },
    { code: 'return <Innovation />;', type: 'jsx', color: '#a8edea', layer: 'front' },
    { code: 'git commit -m "Progress"', type: 'command', color: '#f093fb', layer: 'middle' },
    { code: 'npm run build-dreams', type: 'command', color: '#ffd89b', layer: 'back' },
    { code: 'python automation.py', type: 'command', color: '#68d391', layer: 'front' },
    { code: 'async function learn() {}', type: 'function', color: '#a8edea', layer: 'middle' },
    { code: '// Code, Coffee, Repeat', type: 'comment', color: '#68d391', layer: 'back' },
    { code: 'export default Success;', type: 'export', color: '#90cdf4', layer: 'front' },
    { code: 'import { Skills } from "practice";', type: 'import', color: '#f093fb', layer: 'middle' },
    { code: 'const progress = ++experience;', type: 'variable', color: '#ffd89b', layer: 'back' }
  ]);

  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Track mouse za interaktivnost
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Definiraj svojstva slojeva
    const layerProperties = {
      front: { 
        speedMultiplier: 1.4, 
        scale: 1.1, 
        opacity: 0.35, 
        zIndex: 3,
        parallaxStrength: 1.2
      },
      middle: { 
        speedMultiplier: 1.0, 
        scale: 1.0, 
        opacity: 0.25, 
        zIndex: 2,
        parallaxStrength: 1.0
      },
      back: { 
        speedMultiplier: 0.6, 
        scale: 0.85, 
        opacity: 0.15, 
        zIndex: 1,
        parallaxStrength: 0.8
      }
    };

    // Stvori elemente s layer properties
    const elements = codeSnippets.map((snippet, index) => {
      const layerProps = layerProperties[snippet.layer];
      
      return {
        id: index,
        ...snippet,
        x: Math.random() * (window.innerWidth - 300),
        y: Math.random() * (window.innerHeight - 100),
        speed: (0.4 + Math.random() * 0.6) * layerProps.speedMultiplier,
        direction: Math.random() * Math.PI * 2,
        baseOpacity: layerProps.opacity + Math.random() * 0.1,
        opacity: layerProps.opacity + Math.random() * 0.1,
        scale: layerProps.scale * (0.9 + Math.random() * 0.2),
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        currentRotation: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        zIndex: layerProps.zIndex,
        parallaxStrength: layerProps.parallaxStrength,
        panicLevel: 0
      };
    });
    
    setFloatingElements(elements);
  }, [codeSnippets]);

  useEffect(() => {
    if (floatingElements.length === 0) return;

    const animateElements = () => {
      setFloatingElements(prev => 
        prev.map(element => {
          // Osnovni pokret
          let newX = element.x + Math.cos(element.direction) * element.speed;
          let newY = element.y + Math.sin(element.direction) * element.speed;
          
          // Bounce off edges
          const padding = 50;
          if (newX < padding || newX > window.innerWidth - 300) {
            element.direction = Math.PI - element.direction;
            newX = Math.max(padding, Math.min(window.innerWidth - 300, newX));
          }
          if (newY < padding || newY > window.innerHeight - 100) {
            element.direction = -element.direction;
            newY = Math.max(padding, Math.min(window.innerHeight - 100, newY));
          }

          // MINIMAL mouse effect - samo parallax
          let finalX = newX;
          let finalY = newY;

          // Subtle parallax effect - VRLO minimalan
          const parallaxStrength = element.parallaxStrength;
          const parallaxOffsetX = (mousePosition.x - window.innerWidth / 2) * 0.005 * parallaxStrength; // Smanjen s 0.02 na 0.005
          const parallaxOffsetY = (mousePosition.y - window.innerHeight / 2) * 0.005 * parallaxStrength;
          
          // Finalna pozicija s minimal parallax effectom
          const displayX = finalX + parallaxOffsetX;
          const displayY = finalY + parallaxOffsetY;

          // Simple pulse effect - bez mouse utjecaja
          const pulseOffset = Math.sin(element.pulsePhase + Date.now() * 0.002) * 0.04;
          const newOpacity = Math.max(0.05, element.baseOpacity + pulseOffset);

          // Konstantna rotacija
          const newRotation = element.currentRotation + element.rotationSpeed;

          return {
            ...element,
            x: finalX,
            y: finalY,
            displayX: displayX,
            displayY: displayY,
            opacity: newOpacity,
            currentRotation: newRotation
          };
        })
      );
    };

    const interval = setInterval(animateElements, 32); // 30fps za bolju performance
    return () => clearInterval(interval);
  }, [floatingElements, mousePosition]);

  return (
    <div 
      ref={containerRef}
      className="floating-code-container"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
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
            fontFamily: 'Fira Code, monospace',
            fontSize: `${12 * element.scale}px`,
            fontWeight: element.type === 'comment' ? '400' : '500',
            whiteSpace: 'nowrap',
            transform: `rotate(${element.currentRotation}rad) scale(${element.scale})`,
            transition: 'opacity 0.2s ease', // Samo opacity transition
            textShadow: `0 0 ${6 + element.zIndex * 2}px ${element.color}${Math.floor(30 + element.zIndex * 10)}, 0 0 ${10 + element.zIndex * 3}px ${element.color}${Math.floor(15 + element.zIndex * 5)}`, // Konstantan glow
            filter: `brightness(${0.8 + element.zIndex * 0.15}) blur(${(4 - element.zIndex) * 0.3}px)`, // Konstantan brightness
            zIndex: element.zIndex,
            userSelect: 'none'
          }}
        >
          {/* Dodaj prefix ikone ovisno o tipu */}
          <span style={{ 
            marginRight: '4px', 
            opacity: 0.7,
            fontSize: '10px'
          }}>
            {element.type === 'function' && '⚡'}
            {element.type === 'variable' && '📦'}
            {element.type === 'comment' && '💭'}
            {element.type === 'command' && '⚙️'}
            {element.type === 'method' && '🔧'}
            {element.type === 'jsx' && '⚛️'}
            {element.type === 'import' && '📥'}
            {element.type === 'export' && '📤'}
            {element.type === 'conditional' && '🤔'}
          </span>
          {element.code}
          
          {/* Uklonjen magnetic indicator - nema sadržaja */}
        </div>
      ))}

      {/* Minimal visual indicator (optional) */}
      <div
        style={{
          position: 'absolute',
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'rgba(99, 179, 237, 0.3)',
          pointerEvents: 'none',
          transition: 'all 0.1s ease'
        }}
      />
      
      {/* Clean indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          color: 'rgba(99, 179, 237, 0.2)',
          fontSize: '10px',
          fontFamily: 'Fira Code, monospace',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        // Floating Code Active
      </div>
    </div>
  );
};

export default FloatingCode;