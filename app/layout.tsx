import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wild Spirit Ventures — Best Jungle Resort & Safari Stays in India',
  description:
    'Experience India\'s finest wildlife at Footprint Jungle Resort, Tadoba. Expert tiger safaris, jungle view rooms, swimming pool & organic dining. Best rated wildlife resort Maharashtra. Book your jungle stay today.',
  keywords: [
    'Tadoba jungle resort',
    'resort near Tadoba tiger reserve',
    'jungle stay Tadoba',
    'wildlife resort Maharashtra',
    'Tadoba safari package with stay',
    'best resort near Tadoba',
    'tiger safari Tadoba',
    'eco resort Central India',
    'jungle resort with swimming pool',
    'resort inside Tadoba buffer zone',
    'family jungle resort Chandrapur',
    'Tadoba resort with pool and safaris',
    'weekend jungle getaway Maharashtra',
    'Footprint Jungle Resort',
    'Wild Spirit Ventures',
    'luxury jungle lodge Tadoba',
    'wildlife immersion experience India',
  ],
  openGraph: {
    title: 'Wild Spirit Ventures — Best Jungle Resort & Tiger Safaris at Tadoba',
    description: 'Stay at the edge of Tadoba Tiger Reserve. Expert safaris, jungle view rooms, pool & forest dining. Book Footprint Jungle Resort today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
