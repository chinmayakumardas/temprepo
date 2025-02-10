// app/home/layout.js
export default function HomeLayout({ children }) {
    return (
      <div>
        <header style={{ backgroundColor: '#0070f3', color: 'white', padding: '20px', textAlign: 'center' }}>
     
          <nav>
            <a href="/">Home</a>
            <a href="/contact">contact</a>
            <a href="/about">about</a>
            <a href="/admin">Admin</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0070f3', color: 'white' }}>
          © 2025 Home Footer
        </footer>
      </div>
    );
  }
  