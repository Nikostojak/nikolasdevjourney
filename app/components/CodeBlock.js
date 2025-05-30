'use client';
import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ 
  children, 
  language = 'javascript', 
  filename = null,
  showLineNumbers = true,
  title = null 
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setShowText(window.innerWidth > 480);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Custom style za dark theme
  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: '#1a202c',
      margin: 0,
      padding: '1rem',
      fontSize: '0.875rem',
      lineHeight: '1.5',
      borderRadius: 0
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: '#1a202c',
      color: '#e2e8f0'
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      marginBottom: '1.5rem',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #4a5568',
      backgroundColor: '#1a202c'
    }}>
      {/* Header s title/filename i copy button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        backgroundColor: '#2d3748',
        borderBottom: '1px solid #4a5568',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flex: 1,
          minWidth: 0
        }}>
          {/* Terminal dots */}
          <div style={{ 
            display: 'flex', 
            gap: '0.25rem',
            flexShrink: 0
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#f56565'
            }}></div>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#ed8936'
            }}></div>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#48bb78'
            }}></div>
          </div>
          
          {/* Title or filename */}
          {(title || filename) && (
            <span style={{
              fontSize: '0.8rem',
              color: '#a0aec0',
              fontFamily: 'Fira Code, monospace',
              fontWeight: '500',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1
            }}>
              {title || filename}
            </span>
          )}
          
          {/* Language badge */}
          <span style={{
            fontSize: '0.7rem',
            color: '#63b3ed',
            backgroundColor: '#1a202c',
            padding: '0.2rem 0.4rem',
            borderRadius: '3px',
            fontFamily: 'Fira Code, monospace',
            textTransform: 'uppercase',
            fontWeight: '600',
            flexShrink: 0
          }}>
            {language}
          </span>
        </div>
        
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          style={{
            background: copied ? '#48bb78' : 'transparent',
            border: `1px solid ${copied ? '#48bb78' : '#4a5568'}`,
            borderRadius: '4px',
            padding: '0.3rem 0.6rem',
            color: copied ? '#ffffff' : '#a0aec0',
            fontSize: '0.7rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'Fira Code, monospace',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            flexShrink: 0,
            minWidth: 'fit-content'
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.target.style.borderColor = '#63b3ed';
              e.target.style.color = '#63b3ed';
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.target.style.borderColor = '#4a5568';
              e.target.style.color = '#a0aec0';
            }
          }}
        >
          {copied ? (
            <>
              <span>✓</span>
            </>
          ) : (
            <>
              <span>📋</span>
            </>
          )}
          <span style={{ display: isClient && showText ? 'inline' : 'none' }}>
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>
      
      {/* Code content */}
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        customStyle={{
          margin: 0,
          padding: '1rem',
          backgroundColor: '#1a202c',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{
          minWidth: '2.5rem',
          paddingRight: '1rem',
          color: '#4a5568',
          borderRight: '1px solid #2d3748',
          marginRight: '1rem',
          userSelect: 'none'
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;