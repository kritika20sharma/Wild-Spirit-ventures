'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  // Skip first 5 seconds so branded/text frames are never shown
  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime < 5) {
      video.currentTime = 5;
    }
    video.play().catch(() => {});
  };

  // Parallax: video drifts up at 40% of scroll speed
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrolled <= heroHeight) {
        setParallaxY(scrolled * 0.4);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#1a2e12]">

      {/* ── Full-bleed video — zoomed in + parallax ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-10%',
          zIndex: 0,
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={handleCanPlay}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        >
          <source src="/video-reel.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/55"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white"
        style={{
          transform: `translateY(${parallaxY * 0.15}px)`,
          willChange: 'transform',
        }}
      >

        <p className="animate-fade-up fade-up-delay-1 mb-3 text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)]">
          Wild Spirit Ventures
        </p>

        <h1 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Into the Wild,<br />
          <span className="italic text-[var(--wsv-gold)]">On Your Terms</span>
        </h1>

        <p className="animate-fade-up fade-up-delay-3 font-[family-name:var(--font-lato)] text-sm sm:text-lg text-gray-200 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
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
        <div className="animate-fade-up fade-up-delay-4 mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 pt-6 sm:pt-8 max-w-xs sm:max-w-md mx-auto">
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

      {/* Floating leaf accents */}
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
