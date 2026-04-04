const pillars = [
  { icon: "🌿", title: "Guided Safaris",        desc: "Expert naturalists at every destination." },
  { icon: "🏕️", title: "Comfortable Stays",     desc: "Lodges built to complement, not compete with, nature." },
  { icon: "🐾", title: "Ethical Wildlife",       desc: "We follow strict no-disturbance protocols." },
  { icon: "🗺️", title: "Local Expertise",        desc: "On-ground teams who know the jungle intimately." },
];

export default function BrandPromise() {
  return (
    <section className="animate-section-enter py-24 bg-[var(--wsv-forest)] text-white px-6 w-full">
      <div className="max-w-5xl mx-auto">
        <p className="animate-fade-up fade-up-delay-1 text-center text-xs tracking-[0.3em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)] mb-3">
          Why Choose Us
        </p>
        <h2 className="animate-fade-up fade-up-delay-2 font-[family-name:var(--font-playfair)] text-4xl font-bold text-center mb-6">
          The Brand Promise
        </h2>
        <p className="animate-fade-up fade-up-delay-3 font-[family-name:var(--font-lato)] max-w-2xl mx-auto text-center text-gray-300 leading-8 mb-16">
          Across every destination, we deliver guided safaris, comfortable
          stays, ethical wildlife practices, and local expertise you can trust.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`animate-fade-up fade-up-delay-${i + 1} text-center`}
            >
              <div className="text-4xl mb-4 animate-leaf-sway inline-block" style={{ animationDelay: `${i * 0.8}s` }}>
                {p.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold mb-2 text-[var(--wsv-gold)]">
                {p.title}
              </h3>
              <p className="font-[family-name:var(--font-lato)] text-sm text-gray-300 leading-6">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
