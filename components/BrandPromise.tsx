import ScrollReveal from './ScrollReveal';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Expert Naturalists',
    desc: 'Every safari is led by trained guides who know the land, the animals, and the stories the forest holds.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Curated Stays',
    desc: 'Lodges and camps built to complement nature — not compete with it. Comfort without compromise.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Ethical Wildlife',
    desc: 'Strict no-disturbance protocols across all ventures. We protect what we love.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Local Roots',
    desc: 'On-ground teams from the communities surrounding each reserve — knowledge you cannot buy.',
  },
];

export default function BrandPromise() {
  return (
    <section className="py-24 bg-[var(--wsv-forest)] text-white px-6 w-full">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-5">
            The Wild Spirit Promise
          </h2>
          <p className="font-[family-name:var(--font-lato)] max-w-xl mx-auto text-gray-300 leading-7 text-sm">
            Across every destination — resort, camp, or trail — we deliver the same standard:
            guided immersion, ethical practices, and hospitality rooted in the land.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 110} className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-[var(--wsv-gold)] mb-5 animate-leaf-sway"
                style={{ animationDelay: `${i * 0.9}s` }}
              >
                {p.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold mb-2 text-[var(--wsv-gold)]">
                {p.title}
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-sm text-gray-300 leading-6">
                {p.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
