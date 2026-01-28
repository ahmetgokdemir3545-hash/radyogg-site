export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ backgroundColor: '#f0f0f0', fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <header style={{ padding: '20px', backgroundColor: '#1a73e8', color: '#fff', textAlign: 'center' }}>
          <h2>Radyogg Canlı Yayın</h2>
        </header>

        <main>{children}</main>

        <footer style={{ padding: '15px', textAlign: 'center', backgroundColor: '#ddd', marginTop: '30px' }}>
          © 2026 Radyogg
        </footer>
      </body>
    </html>
  )
}
