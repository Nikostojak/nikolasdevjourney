'use client';

export default function Container({ children }) {
  return (
    <div className="container" role="main">
      {children}
    </div>
  );
}