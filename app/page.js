export default function HomePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#333' }}>Nikolas Dev Journey</h1>
      <p style={{ fontSize: '1.5rem', color: '#666', marginTop: '1rem' }}>
        Welcome to my personal blog! 🚀
      </p>
      <p style={{ fontSize: '1rem', color: '#999', marginTop: '1rem' }}>
        Follow my journey through learning Python, Web Development, and Software Engineering.
      </p>
    </main>
  );
}
