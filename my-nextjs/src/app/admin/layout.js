// app/about/layout.js
export default function AdminLayout({ children }) {
  return (
    <div>
      <header style={{ backgroundColor: '#ff6347', color: 'white', padding: '20px', textAlign: 'center' }}>
        
        <nav>
          <a href="/">Home</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>
      {children}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ff6347', color: 'white' }}>
        © 2025 Admin Footer
      </footer>
    </div>
  );
}
