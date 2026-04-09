import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const ventures = [
  {
    slug: 'footprint-jungle-resort',
    name: 'Footprint Jungle Resort',
    location: 'Tadoba Andhari Tiger Reserve · Maharashtra',
    tagline: 'Where tigers roam at dawn.',
    desc: 'Intimate jungle lodge at the edge of Tadoba — India\'s oldest tiger reserve. Guided safaris, naturalist walks, and stays that feel like the forest invited you in.',
    badge: 'Tiger Country',
    color: 'from-[#2C4A1E]/80',
    image: '/resort-exterior.jpg',
  },
  {
    slug: 'jonaki-pench',
    name: 'Jonaki Pench',
    location: 'Pench National Park · Madhya Pradesh',
    tagline: 'The Jungle Book comes alive.',
    desc: 'Boutique eco-stays woven into the teak forests of Pench. Leopards, wild dogs, and a chorus of birds — unhurried, authentic, extraordinary.',
    badge: 'Boutique Eco',
    color: 'from-[#3A5C28]/80',
    image: null,
  },
  {
    slug: 'fly-unfettered',
    name: 'Fly Unfettered Expeditions',
    location: 'Pan-India Treks & Expeditions',
    tagline: 'Beyond the boundary — into the unknown.',
    desc: 'Expert-led treks, multi-day wilderness expeditions, and off-trail adventures for those who want more than a resort. Safety, skill, and pure wild freedom.',
    badge: 'Expeditions',
    color: 'from-[#4A3C1E]/80',
    image: null,
  },
];

export default function Destinations() {
  return (
    <section id="ventures" className="py-24 px-6 max-w-6xl mx-auto w-full">

      <ScrollReveal className="text-center mb-14">
        <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
          Our Brands
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--wsv-forest)]">
          Three Ventures. One Spirit.
        </h2>
        <p className="mt-4 font-[family-name:var(--font-lato)] text-gray-500 max-w-xl mx-auto leading-7">
          Each venture is distinct — a different terrain, a different pace — yet all share
          the same commitment to authentic, responsible wildlife experiences.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {ventures.map((v, i) => (
          <ScrollReveal key={v.slug} delay={i * 120} className="h-full">
            <div className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-[var(--wsv-forest)]/10 shadow-sm hover:shadow-xl transition-shadow duration-500">

              {/* Card image */}
              <div className={`relative h-52 overflow-hidden ${!v.image ? `bg-gradient-to-br ${v.color} to-[var(--wsv-cream)]` : ''}`}>
                {v.image ? (
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover animate-breathe"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <svg viewBox="0 0 80 120" fill="none" className="absolute right-4 top-4 w-20 h-20 opacity-10">
                    <path d="M40 116 C40 116 4 80 4 44 C4 20 20 4 40 4 C60 4 76 20 76 44 C76 80 40 116 40 116Z" fill="white"/>
                  </svg>
                )}
                <span className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full border border-white/30">
                  {v.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs tracking-wider text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] uppercase mb-1.5">
                  {v.location}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--wsv-forest)] mb-1">
                  {v.name}
                </h3>
                <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm mb-3">
                  {v.tagline}
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 leading-6 flex-1">
                  {v.desc}
                </p>
                <Link
                  href={`/ventures/${v.slug}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--wsv-forest)] px-6 py-2.5 text-sm font-semibold text-[var(--wsv-forest)] hover:bg-[var(--wsv-forest)] hover:text-[var(--wsv-cream)] transition-all duration-300 font-[family-name:var(--font-lato)] group-hover:border-[var(--wsv-forest)]"
                >
                  Discover More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400} className="text-center mt-12">
        <Link
          href="/ventures"
          className="inline-block rounded-full border border-[var(--wsv-forest)]/40 px-8 py-3 text-sm font-[family-name:var(--font-lato)] text-[var(--wsv-forest)] hover:bg-[var(--wsv-forest)]/5 transition-colors"
        >
          View All Ventures &rarr;
        </Link>
      </ScrollReveal>
    </section>
  );
}
