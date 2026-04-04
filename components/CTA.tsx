import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="py-28 px-6 text-center bg-[var(--wsv-cream)] w-full relative overflow-hidden">

      {/* Background tree watermark */}
      <svg
        viewBox="0 0 200 300"
        fill="none"
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M100 290 C100 290 10 200 10 110 C10 50 50 10 100 10 C150 10 190 50 190 110 C190 200 100 290 100 290Z" fill="currentColor" className="text-[var(--wsv-forest)]"/>
      </svg>

      <ScrollReveal>
        {/* Leaf motif */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1.5, 3].map((delay, i) => (
            <svg
              key={i}
              viewBox="0 0 24 36"
              fill="none"
              className="w-5 h-5 animate-leaf-sway opacity-30 text-[var(--wsv-forest)]"
              style={{ animationDelay: `${delay}s` }}
              aria-hidden="true"
            >
              <path
                d="M12 35 C12 35 1 24 1 13 C1 6 6 1 12 1 C18 1 23 6 23 13 C23 24 12 35 12 35Z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--wsv-forest)] mb-5">
          Your Safari Story<br />
          <span className="italic text-[var(--wsv-earth)]">Starts Here</span>
        </h2>
        <p className="font-[family-name:var(--font-lato)] text-gray-500 mb-10 max-w-md mx-auto leading-7 text-sm">
          Choose your destination and let us take care of the rest — from your first inquiry
          to your last sunrise in the wild.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ventures"
            className="rounded-full bg-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-cream)] font-semibold font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-earth)] transition-colors duration-300"
          >
            Explore Our Ventures
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-forest)]/8 transition-colors duration-300"
          >
            Plan Your Stay
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
