export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* ── Breathing background image ── */}
      <div
        className="absolute inset-0 bg-[url('/brand-hero.jpg')] bg-cover bg-center animate-breathe"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="animate-fade-up fade-up-delay-1 mb-3 text-sm tracking-[0.3em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)]">
          Wild Spirit Ventures
        </p>

        <h1 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-6">
          Curated Safari Stays<br />
          <span className="italic text-[var(--wsv-gold)]">Across India</span>
        </h1>

        <p className="animate-fade-up fade-up-delay-3 font-[family-name:var(--font-lato)] text-lg text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
          One trusted brand &nbsp;·&nbsp; Multiple wildlife destinations &nbsp;·&nbsp; Ethical safaris
        </p>

        <div className="animate-fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="rounded-full bg-[var(--wsv-gold)] px-10 py-3.5 text-[var(--wsv-dark)] font-semibold font-[family-name:var(--font-lato)] hover:bg-white transition-colors duration-300"
          >
            Explore Our Resorts
          </a>
          <a
            href="/about"
            className="rounded-full border border-white/60 px-10 py-3.5 text-white font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* ── Floating leaf accent (micro-animation) ── */}
      <div
        className="absolute bottom-10 left-8 w-12 h-12 opacity-30 animate-leaf-sway"
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z"
            fill="white"
          />
          <line x1="20" y1="58" x2="20" y2="20" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
          <line x1="20" y1="35" x2="10" y2="25" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
          <line x1="20" y1="28" x2="30" y2="20" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
        </svg>
      </div>

      <div
        className="absolute bottom-16 right-10 w-8 h-8 opacity-20 animate-leaf-sway"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 58 C20 58 2 40 2 22 C2 10 10 2 20 2 C30 2 38 10 38 22 C38 40 20 58 20 58Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
