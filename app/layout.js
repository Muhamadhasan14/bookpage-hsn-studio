import './globals.css';

export const metadata = {
  title: 'hsn.studio — Feel the Frame',
  description: 'One-Stop Creative & Event Ecosystem · Tasikmalaya, Indonesia',
  openGraph: {
    title: 'hsn.studio — Feel the Frame',
    description: 'Kreatif itu bukan kemewahan — itu kebutuhan. Dan kami di sini untuk memenuhinya.',
    url: 'https://hsn.studio',
    siteName: 'hsn.studio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
