import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Ventures | Wild Spirit Ventures',
  description:
    'Three distinct wildlife experiences under one trusted brand — Footprint Jungle Resort, Jonaki Pench, and Fly Unfettered Expeditions.',
};

const ventures = [
  {
    slug: 'footprint-jungle-resort',
    name: 'Footprint Jungle Resort',
    location: 'Tadoba Andhari Tiger Reserve · Maharashtra',
    badge: 'Tiger Country',
    tagline: 'Where tigers roam at dawn.',
    desc: 'Our flagship property sits at the buffer zone of India\'s oldest tiger reserve. Intimate lodge stays, expert-guided safari drives, and immersive forest walks — all designed to bring you face-to-face with Tadoba\'s extraordinary wildlife without disturbing it.',
    highlights: [
      'Located at Tadoba buffer zone',
      'Tiger, leopard, sloth bear sightings',
      'Morning & evening jeep safaris',
      'Naturalist-led forest walks',
      'Cottages with jungle views',
    ],
    cta: 'Visit Footprint Jungle Resort',
    accent: 'from-[#2C4A1E] to-[#3A6B24]',
    externalLink: 'https://www.footprintjungleresort.com',
  },
  {
    slug: 'jonaki-pench',
    name: 'Jonaki Pench',
    location: 'Pench National Park · Madhya Pradesh',
    badge: 'Boutique Eco',
    tagline: 'The Jungle Book comes alive.',
    desc: 'Boutique eco-stays nestled in the teak forests of Pench — the forest that inspired Kipling\'s Jungle Book. A quieter, more contemplative wildlife experience. Wild dogs, leopards, tigers, and a stunning diversity of birds, all in an unhurried setting.',
    highlights: [
      'Pench National Park gateway',
      'Dholes, leopard, tiger corridor',
      'Boutique rooms, earthy aesthetic',
      'Guided walks and safaris',
      'Community village visits',
    ],
    cta: 'Discover Jonaki Pench',
    accent: 'from-[#3A5C28] to-[#4A7A30]',
    comingSoon: true,
  },
  {
    slug: 'fly-unfettered',
    name: 'Fly Unfettered Expeditions',
    location: 'Pan-India · Treks & Wilderness Expeditions',
    badge: 'Expeditions',
    tagline: 'Beyond the boundary — into the unknown.',
    desc: 'For those who want more than a resort. Fly Unfettered designs and operates multi-day wilderness expeditions, challenging treks, and off-trail adventures across India\'s most remote landscapes. Expert guides, zero compromise on safety, absolute authenticity.',
    highlights: [
      'Multi-day treks (Satpura, Sahyadri & more)',
      'Certified wilderness guides',
      'Camping in genuine wild terrain',
      'Small groups, custom routes',
      'Corporate & school expeditions',
    ],
    cta: 'Plan an Expedition',
    accent: 'from-[#4A3C1E] to-[#6B5520]',
    comingSoon: true,
  },
];

export default function VenturesPage() {
  return (
    <div className="min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            Under One Roof
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--wsv-forest)] mb-5">
            Three Ventures.<br />
            <span className="italic text-[var(--wsv-earth)]">One Wild Spirit.</span>
          </h1>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 max-w-xl mx-auto leading-7 text-sm">
            Each venture is distinct — a different landscape, a different pace, a different kind of
            wildness. All share the same commitment to authenticity, ethics, and exceptional experiences.
          </p>
        </ScrollReveal>
      </section>

      {/* Ventures */}
      <section className="pb-24 px-6 max-w-5xl mx-auto space-y-10">
        {ventures.map((v, i) => (
          <ScrollReveal key={v.slug} delay={i * 100}>
            <div className="bg-white rounded-3xl overflow-hidden border border-[var(--wsv-forest)]/8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className={`h-56 bg-gradient-to-br ${v.accent} relative flex items-end p-8`}>
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full border border-white/30">
                    {v.badge}
                  </span>
                  {v.comingSoon && (
                    <span className="bg-[var(--wsv-gold)] text-[var(--wsv-dark)] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                {/* Decorative leaf */}
                <svg viewBox="0 0 80 120" fill="none" className="absolute right-8 top-8 w-16 h-16 opacity-10">
                  <path d="M40 116 C40 116 4 80 4 44 C4 20 20 4 40 4 C60 4 76 20 76 44 C76 80 40 116 40 116Z" fill="white"/>
                </svg>
                <div>
                  <p className="text-xs text-white/70 font-[family-name:var(--font-lato)] tracking-wide mb-1">{v.location}</p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{v.name}</h2>
                  <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm mt-0.5">{v.tagline}</p>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-7">
                    {v.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {v.comingSoon ? (
                      <span className="rounded-full bg-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-400 font-[family-name:var(--font-lato)] cursor-not-allowed">
                        Coming Soon
                      </span>
                    ) : (
                    <Link
                      href={`/ventures/${v.slug}`}
                      className="rounded-full bg-[var(--wsv-forest)] px-6 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors font-[family-name:var(--font-lato)]"
                    >
                      {v.cta}
                    </Link>
                    )}
                    {v.externalLink && (
                      <a
                        href={v.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[var(--wsv-forest)]/40 px-6 py-2.5 text-sm text-[var(--wsv-forest)] hover:bg-[var(--wsv-forest)]/5 transition-colors font-[family-name:var(--font-lato)]"
                      >
                        Visit Website ↗
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-widest text-[var(--wsv-sage)] uppercase font-[family-name:var(--font-lato)] mb-3">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {v.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-500 font-[family-name:var(--font-lato)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--wsv-gold)] shrink-0"/>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* CTA strip */}
      <section className="py-16 px-6 text-center bg-[var(--wsv-forest)] text-white">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Not Sure Which to Choose?
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-300 mb-8 text-sm leading-6 max-w-sm mx-auto">
            Tell us what matters to you — the terrain, the wildlife, the pace — and we&apos;ll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--wsv-gold)] px-10 py-3.5 text-[var(--wsv-dark)] font-semibold font-[family-name:var(--font-lato)] hover:bg-white transition-colors"
          >
            Help Me Choose
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
