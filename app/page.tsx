export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#1a73e8' }}>Merhaba, Radyogg!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Canlı yayına hoş geldiniz. Kodları düzenleyip güncel içerik ekleyebilirsiniz.
      </p>
      <img src="/window.svg" alt="Window" width={150} height={150} style={{ marginTop: '20px' }} />
      <img src="/globe.svg" alt="Globe" width={100} height={100} style={{ marginTop: '20px' }} />
      <img src="/file.svg" alt="File" width={100} height={100} style={{ marginTop: '20px' }} />
    </div>
  )
}
