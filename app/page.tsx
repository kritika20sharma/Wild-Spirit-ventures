import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import BrandPromise from '@/components/BrandPromise';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Destinations />
        <BrandPromise />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
