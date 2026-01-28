export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
        <h1>Radyogg</h1>
        <nav>
          <a href="#" style={{ marginRight: "15px" }}>Anasayfa</a>
          <a href="#" style={{ marginRight: "15px" }}>İletişim</a>
          <a href="#">Hakkımızda</a>
        </nav>
      </header>

      <main style={{ marginTop: "20px" }}>
        <p>Buraya ana içerik gelecek…</p>
      </main>

      <footer style={{ marginTop: "40px", borderTop: "1px solid #ccc", padding: "10px" }}>
        &copy; 2026 Radyogg
      </footer>
    </div>
  );
}

