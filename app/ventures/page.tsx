import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
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
    video: '/resort-reel.mov',
    comingSoon: false,
    sealed: false,
  },
  {
    slug: 'venture-ii',
    name: 'Venture II',
    location: 'Deep Forest · Central India',
    badge: 'Restricted Preview',
    tagline: 'A sanctuary where silence is the only sound.',
    desc: 'Something rare is taking shape deep inside one of India\'s most storied forests. A boutique eco-retreat, designed for those who travel not for luxury — but for meaning. Details will be shared with registered guests first.',
    highlights: [
      'Intimate Forest Stays',
      'Wildlife Immersion',
      'Expert Naturalists',
      'By Invitation Only',
      'Location Undisclosed',
    ],
    cta: 'Register Your Interest',
    accent: 'from-[#2A3D1C] to-[#3A5C28]',
    bgImage: '/boutique-eco.png',
    comingSoon: true,
    sealed: true,
  },
  {
    slug: 'venture-iii',
    name: 'Venture III',
    location: 'Pan-India · Off the Map',
    badge: 'Classified',
    tagline: 'For those the trail has not yet found.',
    desc: 'An expedition venture unlike anything in India\'s wildlife travel landscape. Multi-day wilderness journeys into remote, rarely-visited terrain. Built for a different kind of traveller — one who doesn\'t need a brochure.',
    highlights: [
      'Remote Wilderness',
      'Expert-Led Expeditions',
      'Small Groups Only',
      'No Itinerary Revealed Yet',
      'Terrain Undisclosed',
    ],
    cta: 'Register Your Interest',
    accent: 'from-[#3D2A10] to-[#6B4226]',
    bgImage: '/expedition.png',
    comingSoon: true,
    sealed: true,
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
            {'sealed' in v && v.sealed ? (
              /* ── Sealed / mystery card ── */
              <div className="rounded-3xl overflow-hidden shadow-sm relative">
                {/* Blurred background */}
                {'bgImage' in v && v.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <Image src={v.bgImage as string} alt="" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} opacity-80`} />
                  </div>
                )}
                {/* Top bar */}
                <div className="relative z-10 px-8 pt-8 pb-0 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/15 backdrop-blur-sm text-white text-xs tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full border border-white/25">
                      {v.badge}
                    </span>
                    <span className="bg-[var(--wsv-gold)] text-[var(--wsv-dark)] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  {/* Venture number watermark */}
                  <span className="font-[family-name:var(--font-playfair)] text-8xl font-bold text-white/5 leading-none select-none -mt-2">
                    {i === 1 ? 'II' : 'III'}
                  </span>
                </div>

                {/* Center content */}
                <div className="relative z-10 px-8 pb-10 text-center">
                  {/* Lock */}
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-[var(--wsv-gold)]/40 flex items-center justify-center backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--wsv-gold)]" strokeWidth="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  <p className="text-xs text-white/40 font-[family-name:var(--font-lato)] tracking-[0.3em] uppercase mb-3">
                    {v.location}
                  </p>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-2">
                    {v.name}
                  </h2>
                  <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-base mb-6">
                    {v.tagline}
                  </p>

                  <p className="font-[family-name:var(--font-lato)] text-white/65 text-sm leading-7 max-w-lg mx-auto mb-7">
                    {v.desc}
                  </p>

                  {/* Hint pills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {v.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60 font-[family-name:var(--font-lato)] border border-white/15 tracking-wide">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Divider with location redaction */}
                  <div className="flex items-center justify-center gap-3 mb-7">
                    <div className="h-px w-12 bg-white/15" />
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[var(--wsv-gold)]/50" strokeWidth="1.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor"/>
                      </svg>
                      <span className="text-[10px] tracking-[0.35em] text-white/25 font-[family-name:var(--font-lato)] uppercase">
                        Location classified
                      </span>
                    </div>
                    <div className="h-px w-12 bg-white/15" />
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-[var(--wsv-gold)] px-8 py-3 text-sm font-semibold text-[var(--wsv-dark)] hover:bg-white transition-colors duration-300 font-[family-name:var(--font-lato)]"
                  >
                    Register Your Interest →
                  </Link>
                </div>
              </div>
            ) : (
              /* ── Revealed venture card ── */
              <div className="bg-white rounded-3xl overflow-hidden border border-[var(--wsv-forest)]/8 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className={`h-56 bg-gradient-to-br ${v.accent} relative flex items-end p-8`}>
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full border border-white/30">
                      {v.badge}
                    </span>
                  </div>
                  <svg viewBox="0 0 80 120" fill="none" className="absolute right-8 top-8 w-16 h-16 opacity-10">
                    <path d="M40 116 C40 116 4 80 4 44 C4 20 20 4 40 4 C60 4 76 20 76 44 C76 80 40 116 40 116Z" fill="white"/>
                  </svg>
                  <div>
                    <p className="text-xs text-white/70 font-[family-name:var(--font-lato)] tracking-wide mb-1">{v.location}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{v.name}</h2>
                    <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm mt-0.5">{v.tagline}</p>
                  </div>
                </div>

                {'video' in v && v.video && (
                  <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={v.video as string} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-7">{v.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/ventures/${v.slug}`}
                        className="rounded-full bg-[var(--wsv-forest)] px-6 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors font-[family-name:var(--font-lato)]"
                      >
                        {v.cta}
                      </Link>
                      {'externalLink' in v && v.externalLink && (
                        <a
                          href={v.externalLink as string}
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
                    <p className="text-xs tracking-widest text-[var(--wsv-sage)] uppercase font-[family-name:var(--font-lato)] mb-3">Highlights</p>
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
            )}
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
