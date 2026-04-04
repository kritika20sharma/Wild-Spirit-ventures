'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax — background scrolls at 40% of page scroll speed
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* ── Parallax background ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-16 -bottom-16 bg-[url('/brand-hero.jpg')] bg-cover bg-center will-change-transform"
        aria-hidden="true"
      />

      {/* Gradient overlay — darker at top for nav legibility, lighter at bottom */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/60"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white pt-20">

        {/* Eye-of-a-tree logo mark (SVG from brand) */}
        <div className="flex justify-center mb-5">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            className="w-14 h-14 animate-leaf-sway opacity-80"
            aria-hidden="true"
          >
            <circle cx="40" cy="40" r="38" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5"/>
            {/* Simplified tree silhouette */}
            <path
              d="M40 70 L40 42 M40 42 C40 42 28 35 25 25 C22 15 30 8 40 10 C50 8 58 15 55 25 C52 35 40 42 40 42Z"
              stroke="rgba(201,168,76,0.7)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <p className="animate-fade-up fade-up-delay-1 mb-3 text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)]">
          Wild Spirit Ventures
        </p>

        <h1 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-6">
          Into the Wild,<br />
          <span className="italic text-[var(--wsv-gold)]">On Your Terms</span>
        </h1>

        <p className="animate-fade-up fade-up-delay-3 font-[family-name:var(--font-lato)] text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Curated safari stays across India&apos;s finest wildlife corridors.
          One brand you trust — multiple worlds to explore.
        </p>

        <div className="animate-fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ventures"
            className="rounded-full bg-[var(--wsv-gold)] px-10 py-3.5 text-[var(--wsv-dark)] font-semibold font-[family-name:var(--font-lato)] hover:bg-white transition-colors duration-300"
          >
            Explore Our Ventures
          </a>
          <Link
            href="/about"
            className="rounded-full border border-white/60 px-10 py-3.5 text-white font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors duration-300"
          >
            Our Story
          </Link>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up fade-up-delay-4 mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8 max-w-md mx-auto">
          {[
            { val: '3',    label: 'Destinations' },
            { val: '10+',  label: 'Years in Wild' },
            { val: '100%', label: 'Ethical Safaris' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--wsv-gold)]">
                {val}
              </div>
              <div className="text-xs tracking-wide text-gray-300 font-[family-name:var(--font-lato)] mt-0.5 uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating leaf accents ── */}
      <div className="absolute bottom-12 left-8 w-10 h-10 opacity-25 animate-leaf-sway" aria-hidden="true">
        <svg viewBox="0 0 40 60" fill="none">
          <path d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z" fill="white"/>
          <line x1="20" y1="58" x2="20" y2="20" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-7 h-7 opacity-20 animate-leaf-sway" style={{ animationDelay: '2s' }} aria-hidden="true">
        <svg viewBox="0 0 40 60" fill="none">
          <path d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z" fill="white"/>
        </svg>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
