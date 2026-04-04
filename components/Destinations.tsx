const resorts = [
  { name: "Tadoba",  desc: "Tiger reserve in Maharashtra",    emoji: "🐅" },
  { name: "Pench",   desc: "Teak forests & leopards",          emoji: "🐆" },
  { name: "Kanha",   desc: "Upcoming destination",             emoji: "🦌" },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="animate-section-enter py-24 px-6 max-w-6xl mx-auto w-full"
    >
      <p className="animate-fade-up fade-up-delay-1 text-center text-xs tracking-[0.3em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
        Where We Operate
      </p>
      <h2 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-4xl font-bold text-center text-[var(--wsv-forest)] mb-14">
        Our Safari Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {resorts.map((resort, i) => (
          <div
            key={resort.name}
            className={`animate-fade-up fade-up-delay-${i + 2} group rounded-2xl overflow-hidden bg-white border border-[var(--wsv-forest)]/10 shadow-sm hover:shadow-lg transition-shadow duration-500`}
          >
            {/* Image placeholder — swap with real image later */}
            <div className="relative h-48 bg-[var(--wsv-forest)]/10 overflow-hidden">
              <div className="absolute inset-0 bg-[var(--wsv-forest)]/20 animate-breathe flex items-center justify-center text-5xl">
                {resort.emoji}
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--wsv-forest)] mb-2">
                {resort.name}
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 mb-5">
                {resort.desc}
              </p>
              <a
                href={`/resorts/${resort.name.toLowerCase()}`}
                className="inline-block rounded-full border border-[var(--wsv-forest)] px-6 py-2 text-sm font-semibold text-[var(--wsv-forest)] hover:bg-[var(--wsv-forest)] hover:text-[var(--wsv-cream)] transition-all duration-300"
              >
                View Resort →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
