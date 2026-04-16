'use client';
import Image from 'next/image';
import Link from 'next/link';

// ── Venture stop data ───────────────────────────────────────────
const stops = [
  {
    slug: 'footprint-jungle-resort',
    name: 'Footprint Jungle Resort',
    subtitle: 'Tadoba Andhari Tiger Reserve',
    state: 'Chandrapur, Maharashtra 441222',
    badge: 'Tiger Country',
    badgeColor: 'bg-[var(--wsv-forest)]',
    tagline: 'Where tigers roam at dawn.',
    desc: 'An unparalleled blend of comfort and adventure in the heart of Tadoba. Expert-guided safaris into India\'s oldest tiger reserve, infinity pool overlooking the forest, and farm-to-table dining that makes every meal feel like a celebration of the wild.',
    image: '/resort-exterior.jpg',
    imageAlt: 'Footprint Jungle Resort cottage nestled in forest',
    secondImage: '/resort-room.jpg',
    secondImageAlt: 'Comfortable room with jungle art at Footprint Resort',
    highlights: ['Tiger Safaris', 'Infinity Pool', 'Organic Dining', 'Guided Walks'],
    rooms: [
      { name: 'Deluxe Room', price: '₹8,500/night' },
      { name: 'Luxury Suite', price: '₹8,500/night' },
    ],
    phone: '+91 93802 99571',
    email: 'tadobafootprintresort@gmail.com',
    externalLink: 'https://tadobafootprintresort.com/',
    trailColor: '#2C4A1E',
    comingSoon: false,
    bgImage: null,
  },
  {
    slug: 'venture-ii',
    name: 'Venture II',
    subtitle: 'Deep Forest · Central India',
    state: 'Location disclosed to registered guests only',
    badge: 'Restricted Preview',
    badgeColor: 'bg-[var(--wsv-sage)]/80',
    tagline: 'A sanctuary where silence is the only sound.',
    desc: 'Something rare is taking shape deep inside one of India\'s most storied forests. A boutique eco-retreat, designed for those who travel not for luxury — but for meaning. Details will be shared with registered guests first.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    highlights: ['Intimate Forest Stays', 'Wildlife Immersion', 'Expert Naturalists', 'By Invitation'],
    rooms: [],
    phone: null,
    email: null,
    externalLink: null,
    trailColor: '#3A5C28',
    comingSoon: true,
    bgImage: '/boutique-eco.png',
  },
  {
    slug: 'venture-iii',
    name: 'Venture III',
    subtitle: 'Pan-India · Off the Map',
    state: 'Terrain revealed only upon registration',
    badge: 'Classified',
    badgeColor: 'bg-[var(--wsv-earth)]/80',
    tagline: 'For those the trail has not yet found.',
    desc: 'An expedition venture unlike anything in India\'s wildlife travel landscape. Multi-day wilderness journeys into remote, rarely-visited terrain. Built for a different kind of traveller — one who doesn\'t need a brochure.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    highlights: ['Remote Wilderness', 'Expert-Led', 'Small Groups', 'No Itinerary Revealed Yet'],
    rooms: [],
    phone: null,
    email: null,
    externalLink: null,
    trailColor: '#6B4226',
    comingSoon: true,
    bgImage: '/expedition.png',
  },
];

// ── Main component ──────────────────────────────────────────────
export default function JourneyScroll() {
  return (
    <section id="ventures" className="relative bg-[var(--wsv-cream)]">

      {/* Section heading */}
      <div className="py-20 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
          Our Ventures
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--wsv-forest)] mb-4">
          Three Destinations.<br />
          <span className="italic text-[var(--wsv-earth)]">One Wild Spirit.</span>
        </h2>
        <p className="font-[family-name:var(--font-lato)] text-gray-500 leading-7 text-sm max-w-xl mx-auto">
          Each venture is a different terrain, a different pace — united by the same commitment to authentic, ethical wildlife experiences.
        </p>
      </div>

      {/* Venture cards */}
      <div className="pb-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        {stops.map((stop, i) => (
          <div key={stop.slug} className="rounded-3xl overflow-hidden shadow-sm">

            {stop.comingSoon ? (
              /* ── Sealed / mystery card ── */
              <div className="relative">
                {stop.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <Image src={stop.bgImage} alt="" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(145deg, ${stop.trailColor}cc 0%, ${stop.trailColor}99 100%)` }} />
                  </div>
                )}
                <div className="absolute top-0 right-0 pointer-events-none select-none">
                  <span className="font-[family-name:var(--font-playfair)] text-[7rem] font-bold text-white/5 leading-none">
                    {i === 1 ? 'II' : 'III'}
                  </span>
                </div>
                <div className="relative z-10 px-6 sm:px-10 py-10 text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full text-white font-[family-name:var(--font-lato)] tracking-widest uppercase ${stop.badgeColor}`}>
                      {stop.badge}
                    </span>
                    <span className="bg-[var(--wsv-gold)] text-[var(--wsv-dark)] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 border border-[var(--wsv-gold)]/40 flex items-center justify-center backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[var(--wsv-gold)]" strokeWidth="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs tracking-widest text-white/40 font-[family-name:var(--font-lato)] uppercase mb-2">{stop.subtitle}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-1">{stop.name}</h3>
                  <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-base mb-5">{stop.tagline}</p>
                  <p className="text-sm text-white/65 font-[family-name:var(--font-lato)] leading-7 max-w-md mx-auto mb-6">{stop.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {stop.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60 font-[family-name:var(--font-lato)] border border-white/15 tracking-wide">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-7">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[var(--wsv-gold)]/60" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor"/>
                    </svg>
                    <span className="text-[10px] tracking-[0.3em] text-white/30 font-[family-name:var(--font-lato)] uppercase">Location classified</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-[var(--wsv-gold)] px-8 py-2.5 text-sm font-semibold text-[var(--wsv-dark)] hover:bg-white transition-colors duration-300 font-[family-name:var(--font-lato)]"
                  >
                    Register Your Interest →
                  </Link>
                </div>
              </div>

            ) : (
              /* ── Revealed venture card ── */
              <div className="bg-white border border-[var(--wsv-forest)]/8">
                {/* Image banner */}
                <div className="relative h-52 sm:h-64">
                  {stop.image ? (
                    <Image src={stop.image} alt={stop.imageAlt} fill className="object-cover" sizes="100vw" />
                  ) : (
                    <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${stop.trailColor} 0%, ${stop.trailColor}88 100%)` }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs px-3 py-1 rounded-full text-white font-[family-name:var(--font-lato)] tracking-widest uppercase ${stop.badgeColor}`}>
                      {stop.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">{stop.name}</h3>
                    <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm">{stop.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-xs text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] uppercase tracking-wide mb-3">{stop.subtitle} · {stop.state}</p>
                    <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-7 mb-5">{stop.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {stop.highlights.map((h) => (
                        <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-[var(--wsv-forest)]/6 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] border border-[var(--wsv-forest)]/12">{h}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link href="/contact" className="rounded-full bg-[var(--wsv-forest)] px-6 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors font-[family-name:var(--font-lato)]">
                        Visit Footprint Jungle Resort →
                      </Link>
                      {stop.externalLink && (
                        <a href={stop.externalLink} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] hover:text-[var(--wsv-forest)] underline underline-offset-4">
                          Visit Website ↗
                        </a>
                      )}
                      {stop.phone && (
                        <a href={`tel:${stop.phone.replace(/\s/g, '')}`} className="text-sm text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] hover:text-[var(--wsv-forest)] transition-colors">
                          {stop.phone}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Rooms / second image */}
                  <div className="hidden md:block">
                    {stop.secondImage ? (
                      <div className="relative h-full min-h-[160px] rounded-xl overflow-hidden">
                        <Image src={stop.secondImage} alt={stop.secondImageAlt} fill className="object-cover" sizes="25vw" />
                      </div>
                    ) : stop.rooms.length > 0 ? (
                      <div className="rounded-xl overflow-hidden h-full min-h-[120px] flex items-end p-4" style={{ background: `linear-gradient(to top, ${stop.trailColor}cc, ${stop.trailColor}33)` }}>
                        <div className="w-full">
                          {stop.rooms.map((r) => (
                            <div key={r.name} className="flex justify-between gap-4 text-xs text-white/80 font-[family-name:var(--font-lato)] mb-1">
                              <span>{r.name}</span>
                              <span className="text-[var(--wsv-gold)]">{r.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}
