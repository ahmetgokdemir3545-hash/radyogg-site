// app/layout.tsx
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <Head>
        <title>Radyogg</title>  {/* Buraya istediğin sayfa adı */}
        <meta name="description" content="Radyogg resmi sitesi" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

}
