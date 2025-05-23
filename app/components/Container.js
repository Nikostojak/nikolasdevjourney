'use client';

export default function container({ children }) {
  return (
    <div className="container" role="main">
      {children}
    </div>
  );
}