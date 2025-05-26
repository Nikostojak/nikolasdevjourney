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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Samo desktop ima mouse tracking
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

    // Mobile optimizacije
    const isMobile = window.innerWidth <= 768;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const layerProperties = {
      front: { 
        speedMultiplier: isMobile ? 0.8 : 1.4, 
        scale: isMobile ? 0.9 : 1.1, 
        opacity: isMobile ? 0.25 : 0.35, 
        zIndex: 3,
        parallaxStrength: isMobile ? 0.5 : 1.2
      },
      middle: { 
        speedMultiplier: isMobile ? 0.6 : 1.0, 
        scale: isMobile ? 0.8 : 1.0, 
        opacity: isMobile ? 0.18 : 0.25, 
        zIndex: 2,
        parallaxStrength: isMobile ? 0.3 : 1.0
      },
      back: { 
        speedMultiplier: isMobile ? 0.4 : 0.6, 
        scale: isMobile ? 0.7 : 0.85, 
        opacity: isMobile ? 0.12 : 0.15, 
        zIndex: 1,
        parallaxStrength: isMobile ? 0.2 : 0.8
      }
    };

    // Smanji broj elemenata na mobile
    const elementsToShow = isMobile ? codeSnippets.slice(0, 8) : codeSnippets;

    const elements = elementsToShow.map((snippet, index) => {
      const layerProps = layerProperties[snippet.layer];
      
      return {
        id: index,
        ...snippet,
        x: Math.random() * (screenWidth - (isMobile ? 150 : 300)),
        y: Math.random() * (screenHeight - (isMobile ? 50 : 100)),
        speed: (0.3 + Math.random() * 0.4) * layerProps.speedMultiplier,
        direction: Math.random() * Math.PI * 2,
        baseOpacity: layerProps.opacity + Math.random() * 0.05,
        opacity: layerProps.opacity + Math.random() * 0.05,
        scale: layerProps.scale * (0.9 + Math.random() * 0.2),
        rotationSpeed: (Math.random() - 0.5) * (isMobile ? 0.008 : 0.015),
        currentRotation: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        zIndex: layerProps.zIndex,
        parallaxStrength: layerProps.parallaxStrength,
        isMobile: isMobile
      };
    });
    
    setFloatingElements(elements);
  }, [codeSnippets]);

  useEffect(() => {
    if (floatingElements.length === 0) return;

    const animateElements = () => {
      setFloatingElements(prev => 
        prev.map(element => {
          let newX = element.x + Math.cos(element.direction) * element.speed;
          let newY = element.y + Math.sin(element.direction) * element.speed;
          
          // Mobile-aware boundaries
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

          // Smanjen parallax na mobile
          const parallaxMultiplier = element.isMobile ? 0.002 : 0.005;
          const parallaxStrength = element.parallaxStrength;
          const parallaxOffsetX = (mousePosition.x - window.innerWidth / 2) * parallaxMultiplier * parallaxStrength;
          const parallaxOffsetY = (mousePosition.y - window.innerHeight / 2) * parallaxMultiplier * parallaxStrength;
          
          const displayX = finalX + parallaxOffsetX;
          const displayY = finalY + parallaxOffsetY;

          const pulseOffset = Math.sin(element.pulsePhase + Date.now() * 0.002) * (element.isMobile ? 0.02 : 0.04);
          const newOpacity = Math.max(0.05, element.baseOpacity + pulseOffset);

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

    const interval = setInterval(animateElements, 32);
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
            fontSize: `${(element.isMobile ? 10 : 12) * element.scale}px`,
            fontWeight: element.type === 'comment' ? '400' : '500',
            whiteSpace: 'nowrap',
            transform: `rotate(${element.currentRotation}rad) scale(${element.scale})`,
            transition: 'opacity 0.2s ease',
            textShadow: element.isMobile ? 'none' : `0 0 ${6 + element.zIndex * 2}px ${element.color}${Math.floor(30 + element.zIndex * 10)}, 0 0 ${10 + element.zIndex * 3}px ${element.color}${Math.floor(15 + element.zIndex * 5)}`,
            filter: element.isMobile ? 'none' : `brightness(${0.8 + element.zIndex * 0.15}) blur(${(4 - element.zIndex) * 0.3}px)`,
            zIndex: element.zIndex,
            userSelect: 'none'
          }}
        >
          <span style={{ 
            marginRight: '2px', 
            opacity: 0.7,
            fontSize: element.isMobile ? '8px' : '10px'
          }}>
            {!element.isMobile && element.type === 'function' && '⚡'}
            {!element.isMobile && element.type === 'variable' && '📦'}
            {!element.isMobile && element.type === 'comment' && '💭'}
            {!element.isMobile && element.type === 'command' && '⚙️'}
            {!element.isMobile && element.type === 'method' && '🔧'}
            {!element.isMobile && element.type === 'jsx' && '⚛️'}
            {!element.isMobile && element.type === 'import' && '📥'}
            {!element.isMobile && element.type === 'export' && '📤'}
            {!element.isMobile && element.type === 'conditional' && '🤔'}
          </span>
          {element.code}
        </div>
      ))}

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
    
      </div>
    </div>
  );
};

export default FloatingCode;