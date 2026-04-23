import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Footprint Jungle Resort Tadoba | Best Wildlife Resort Maharashtra — Wild Spirit Ventures',
  description:
    'Stay at Footprint Jungle Resort, located inside Tadoba Andhari Tiger Reserve buffer zone. Tiger safaris, leopard sightings, infinity pool, organic dining & expert naturalists. Best jungle resort near Chandrapur, Maharashtra. Book today.',
  keywords: [
    'Footprint Jungle Resort Tadoba',
    'best jungle resort Maharashtra',
    'Tadoba tiger reserve stay',
    'resort near Chandrapur',
    'tiger safari with accommodation',
    'jungle resort with infinity pool',
    'wildlife resort Maharashtra booking',
    'Tadoba buffer zone resort',
    'weekend getaway jungle Maharashtra',
    'best value jungle stay India',
  ],
};
import Hero from '@/components/Hero';
import JourneyScroll from '@/components/JourneyScroll';
import BrandPromise from '@/components/BrandPromise';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <JourneyScroll />
        <BrandPromise />
        <About />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
