import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneyScroll from '@/components/JourneyScroll';
import BrandPromise from '@/components/BrandPromise';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--wsv-cream)]">
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
