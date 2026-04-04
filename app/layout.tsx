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
  title: 'Wild Spirit Ventures — Curated Safari Stays Across India',
  description:
    'One trusted brand. Multiple wildlife destinations. Ethical safaris at Tadoba, Pench, and beyond — Footprint Jungle Resort, Jonaki Pench, Fly Unfettered Expeditions.',
  openGraph: {
    title: 'Wild Spirit Ventures',
    description: 'Curated safari stays across India\'s finest wildlife corridors.',
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
