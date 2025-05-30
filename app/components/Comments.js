'use client';
import { useEffect, useRef } from 'react';

export function Comments({ 
  repo = "Nikostojak/nikolasdevjourney", 
  repoId = "R_kgDOOghI-g", 
  category = "General", 
  categoryId = "DIC_kwDOOghI-s4Cqzbt", 
  mapping = "pathname",
  strict = "0",
  reactionsEnabled = "1",
  emitMetadata = "1",
  inputPosition = "top",
  theme = "dark",
  lang = "en",
  loading = "lazy"
}) {
  const commentsRef = useRef(null);

  useEffect(() => {
    // Provjeri da li je Giscus već učitan
    if (commentsRef.current && commentsRef.current.children.length === 0) {
      // Stvori script element
      const script = document.createElement('script');
      
      // Postavke za Giscus
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', repo);
      script.setAttribute('data-repo-id', repoId);
      script.setAttribute('data-category', category);
      script.setAttribute('data-category-id', categoryId);
      script.setAttribute('data-mapping', mapping);
      script.setAttribute('data-strict', strict);
      script.setAttribute('data-reactions-enabled', reactionsEnabled);
      script.setAttribute('data-emit-metadata', emitMetadata);
      script.setAttribute('data-input-position', inputPosition);
      script.setAttribute('data-theme', theme);
      script.setAttribute('data-lang', lang);
      script.setAttribute('data-loading', loading);
      script.crossOrigin = 'anonymous';
      script.async = true;

      // Dodaj script u DOM
      commentsRef.current.appendChild(script);
    }
  }, [repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, theme, lang, loading]);

  return (
    <section className="comments-section">
      <div className="comments-header">
        <h3 className="comments-title">💬 Comments & Discussion</h3>
        <p className="comments-description">
          Share your thoughts, ask questions, or discuss this post. Comments are powered by GitHub Discussions.
        </p>
      </div>
      
      <div 
        ref={commentsRef}
        className="comments-container"
        id="comments"
      />
      
      <div className="comments-footer">
        <p className="comments-note">
          💡 <strong>Tip:</strong> You need a GitHub account to comment. 
          This helps reduce spam and keeps discussions high-quality.
        </p>
      </div>
    </section>
  );
}

// Verzija s mojim specifičnim postavkama
export function BlogComments() {
  return (
    <Comments
      repo="Nikostojak/nikolasdevjourney"
      repoId="R_kgDOOghI-g" 
      category="General"
      categoryId="DIC_kwDOOghI-s4Cqzbt" 
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="dark"
      lang="en"
    />
  );
}