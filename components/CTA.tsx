export default function CTA() {
  return (
    <section className="animate-section-enter py-28 px-6 text-center bg-[var(--wsv-cream)] w-full">
      {/* Decorative leaf accent */}
      <div className="flex justify-center gap-3 mb-6">
        {["🌿", "🍃", "🌿"].map((leaf, i) => (
          <span
            key={i}
            className="text-2xl animate-leaf-sway opacity-60"
            style={{ animationDelay: `${i * 1.2}s` }}
            aria-hidden="true"
          >
            {leaf}
          </span>
        ))}
      </div>

      <p className="animate-fade-up fade-up-delay-1 text-xs tracking-[0.3em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-4">
        Start Your Journey
      </p>
      <h2 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--wsv-forest)] mb-5">
        Plan Your Safari Journey
      </h2>
      <p className="animate-fade-up fade-up-delay-3 font-[family-name:var(--font-lato)] text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
        Choose your destination and let us handle the rest — from arrival to your last sunrise in the wild.
      </p>

      <div className="animate-fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/resorts"
          className="rounded-full bg-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-cream)] font-semibold font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-earth)] transition-colors duration-300"
        >
          View All Resorts
        </a>
        <a
          href="/contact"
          className="rounded-full border border-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-forest)]/10 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
