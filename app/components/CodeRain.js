'use client';
import { useEffect, useRef } from 'react';
import './CodeRain.css';

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Primjeri Python i JavaScript koda
    const codeSnippets = [
      'def hello():',
      'print("Hello, World!")',
      'for i in range(10):',
      'if x > 0:',
      'const app = () => {',
      'let x = 10;',
      'function fetchData() {',
      'return x * 2;',
      'import pandas as pd',
      'class App {',
    ];

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    const speeds = drops.map(() => Math.random() * 5 + 2); // Različite brzine

    function draw() {
      ctx.fillStyle = 'rgba(26, 32, 44, 0.1)'; // Prozirna pozadina za fade efekt
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px Fira Code, monospace`;
      ctx.fillStyle = '#63b3ed'; // Akcentna boja

      for (let i = 0; i < drops.length; i++) {
        const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0; // Resetiraj na vrh
        }
        drops[i] += speeds[i] / 10; // Prilagođena brzina
      }
    }

    const interval = setInterval(draw, 50); // Brzina animacije

    // Prilagodi veličinu canvasa na resize
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.5, // Prozirnost za suptilnost
      }}
      aria-hidden="true"
    />
  );
}