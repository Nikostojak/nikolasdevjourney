export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4ff', // svijetloplava pozadina
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '4rem',
        color: '#0070f3', // plava boja naslova
        marginBottom: '1rem',
        animation: 'fadeIn 2s'
      }}>
        Nikolas Developer Journey
      </h1>

      <p style={{
        fontSize: '1.5rem',
        color: '#333',
        maxWidth: '600px',
        marginBottom: '2rem',
        animation: 'fadeIn 2s',
        animationDelay: '1s',
        animationFillMode: 'forwards'
      }}>
        Join me as I explore and study Python, Web Development, and the world of Software Engineering.
      </p>

      <button style={{
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        animation: 'fadeIn 2s',
        animationDelay: '2s',
        animationFillMode: 'forwards'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
      >
        Read My Blog
      </button>

      {/* Animacija */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
