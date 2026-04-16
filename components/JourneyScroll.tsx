'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
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
    terrain: 'Tiger Reserve',
    trailColor: '#2C4A1E',
  },
  {
    slug: 'venture-ii',
    name: 'Venture II',
    subtitle: 'Deep Forest · Central India',
    state: 'Location disclosed to registered guests only',
    badge: 'Restricted Preview',
    badgeColor: 'bg-[var(--wsv-sage)]/80',
    comingSoon: true,
    tagline: 'A sanctuary where silence is the only sound.',
    desc: 'Something rare is taking shape deep inside one of India\'s most storied forests. A boutique eco-retreat, designed for those who travel not for luxury — but for meaning. Details will be shared with registered guests first.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    bgImage: '/boutique-eco.png',
    highlights: ['Intimate Forest Stays', 'Wildlife Immersion', 'Expert Naturalists', 'By Invitation'],
    rooms: [],
    phone: null,
    email: null,
    externalLink: null,
    terrain: 'Deep Forest',
    trailColor: '#3A5C28',
  },
  {
    slug: 'venture-iii',
    name: 'Venture III',
    subtitle: 'Pan-India · Off the Map',
    state: 'Terrain revealed only upon registration',
    badge: 'Classified',
    badgeColor: 'bg-[var(--wsv-earth)]/80',
    comingSoon: true,
    tagline: 'For those the trail has not yet found.',
    desc: 'An expedition venture unlike anything in India\'s wildlife travel landscape. Multi-day wilderness journeys into remote, rarely-visited terrain. Built for a different kind of traveller — one who doesn\'t need a brochure.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    bgImage: '/expedition.png',
    highlights: ['Remote Wilderness', 'Expert-Led', 'Small Groups', 'No Itinerary Revealed Yet'],
    rooms: [],
    phone: null,
    email: null,
    externalLink: null,
    terrain: 'Uncharted',
    trailColor: '#6B4226',
  },
];

// ── Main component ──────────────────────────────────────────────
export default function JourneyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const p = Math.max(0, Math.min(1, -rect.top / scrollable));
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Active stop derived directly from scroll progress
  const activeStop = Math.min(stops.length - 1, Math.floor(progress * stops.length));

  // Tiger position: travels 5%→90% of trail
  const jeepTop = `${5 + progress * 85}%`;

  // Stop markers evenly spaced so tiger aligns with each on arrival
  const stopMarkerY = (i: number) => `${5 + ((i + 0.5) / stops.length) * 85}%`;

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="relative bg-[var(--wsv-cream)]"
      style={{ minHeight: `${stops.length * 110}vh` }}
    >
      {/* ── Section heading (above the sticky area) ── */}
      <div className="py-20 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
          Begin Your Journey
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--wsv-forest)] mb-4">
          Three Stops.<br />
          <span className="italic text-[var(--wsv-earth)]">One Safari Trail.</span>
        </h2>
        <p className="font-[family-name:var(--font-lato)] text-gray-500 leading-7 text-sm max-w-xl mx-auto">
          Scroll to journey through our three ventures — each a different terrain, a different
          pace, the same Wild Spirit soul.
        </p>
      </div>

      {/* ── Sticky layout: Trail + Cards ── */}
      <div className="sticky top-0 h-screen overflow-hidden flex">

        {/* ── LEFT: Safari trail ── */}
        <div
          ref={trailRef}
          className="hidden md:flex flex-col items-center relative w-20 lg:w-28 shrink-0 pt-8 pb-8"
        >
          {/* Dashed trail line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[var(--wsv-forest)]/25" />

          {/* Trail fill — solid line that grows with progress */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-[var(--wsv-gold)] transition-none"
            style={{ height: `${5 + progress * 90}%` }}
          />

          {/* Stop markers */}
          {stops.map((_, i) => {
            const stopY = stopMarkerY(i);
            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 transition-all duration-300"
                style={{ top: stopY }}
              >
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeStop >= i
                      ? 'bg-[var(--wsv-gold)] border-[var(--wsv-gold)] scale-125'
                      : 'bg-white border-[var(--wsv-forest)]/30'
                  }`}
                />
                {/* Stop number */}
                <span className="absolute -right-5 top-1/2 -translate-y-1/2 text-[9px] font-[family-name:var(--font-lato)] text-[var(--wsv-forest)]/40 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}

          {/* Tiger scroller */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-none z-10"
            style={{ top: jeepTop, transform: 'translate(-50%, -50%)' }}
          >
            <Image src="/tiger-transparent.png" alt="Tiger" width={72} height={72} className="object-contain" />
          </div>
        </div>

        {/* ── RIGHT: Venture cards — absolute stacked, one visible at a time ── */}
        <div className="flex-1 relative overflow-hidden">
            {stops.map((stop, i) => {
              const isActive = activeStop === i;
              const isPast = activeStop > i;
              return (
                <div
                  key={stop.slug}
                  className={`absolute inset-0 px-4 md:px-8 lg:px-12 py-8 flex items-center overflow-y-auto hide-scrollbar transition-all duration-500 ${
                    isActive
                      ? 'opacity-100 translate-x-0 pointer-events-auto'
                      : isPast
                      ? 'opacity-0 -translate-x-10 pointer-events-none'
                      : 'opacity-0 translate-x-10 pointer-events-none'
                  }`}
                >
                  <div className="w-full max-w-3xl">

                    {/* Stop label */}
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      <div className="w-6 h-6 rounded-full bg-[var(--wsv-gold)]/15 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-[var(--wsv-gold)] font-[family-name:var(--font-lato)]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full text-white font-[family-name:var(--font-lato)] tracking-widest uppercase ${stop.badgeColor}`}>
                        {stop.badge}
                      </span>
                    </div>

                    {stop.comingSoon ? (
                      /* ── Mystery / sealed card for unrevealed ventures ── */
                      <div className="w-full">
                        <p className="text-xs tracking-widest text-[var(--wsv-sage)]/60 font-[family-name:var(--font-lato)] uppercase mb-2">
                          {stop.subtitle}
                        </p>
                        <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--wsv-forest)] mb-1">
                          {stop.name}
                        </h3>
                        <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-lg mb-6">
                          {stop.tagline}
                        </p>

                        {/* Sealed panel */}
                        <div className="relative rounded-2xl overflow-hidden">
                          {/* Blurred background */}
                          {stop.bgImage && (
                            <div className="absolute inset-0 z-0">
                              <Image src={stop.bgImage} alt="" fill className="object-cover" sizes="50vw" />
                              <div className="absolute inset-0 backdrop-blur-sm" />
                              <div className="absolute inset-0" style={{ background: `linear-gradient(145deg, ${stop.trailColor}cc 0%, ${stop.trailColor}99 100%)` }} />
                            </div>
                          )}
                          {/* Large numeral watermark */}
                          <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none">
                            <span className="font-[family-name:var(--font-playfair)] text-[9rem] font-bold text-white/5 leading-none">
                              {i === 1 ? 'II' : 'III'}
                            </span>
                          </div>

                          <div className="relative z-10 px-8 py-10">
                            {/* Coming Soon tag */}
                            <div className="flex justify-center mb-5">
                              <span className="bg-[var(--wsv-gold)] text-[var(--wsv-dark)] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-lato)] px-4 py-1.5 rounded-full">
                                Coming Soon
                              </span>
                            </div>
                            {/* Lock icon */}
                            <div className="flex justify-center mb-5">
                              <div className="w-11 h-11 rounded-full bg-white/10 border border-[var(--wsv-gold)]/40 flex items-center justify-center backdrop-blur-sm">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[var(--wsv-gold)]" strokeWidth="1.5">
                                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor"/>
                                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeLinecap="round"/>
                                </svg>
                              </div>
                            </div>

                            <p className="text-center text-white/70 font-[family-name:var(--font-lato)] text-sm leading-7 max-w-sm mx-auto mb-7">
                              {stop.desc}
                            </p>

                            {/* Hint pills */}
                            <div className="flex flex-wrap justify-center gap-2 mb-7">
                              {stop.highlights.map((h) => (
                                <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/60 font-[family-name:var(--font-lato)] border border-white/15 tracking-wide">
                                  {h}
                                </span>
                              ))}
                            </div>

                            {/* Redacted location bar */}
                            <div className="flex items-center justify-center gap-2 mb-8">
                              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[var(--wsv-gold)]/60" strokeWidth="1.5">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor"/>
                              </svg>
                              <span className="text-[10px] tracking-[0.3em] text-white/30 font-[family-name:var(--font-lato)] uppercase select-none">
                                Location classified
                              </span>
                            </div>

                            <div className="flex justify-center">
                              <Link
                                href="/contact"
                                className="rounded-full bg-[var(--wsv-gold)] px-8 py-2.5 text-sm font-semibold text-[var(--wsv-dark)] hover:bg-white transition-colors duration-300 font-[family-name:var(--font-lato)]"
                              >
                                Register Your Interest →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ── Regular revealed venture ── */
                      <div className="w-full">
                        <p className="text-xs tracking-widest text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] uppercase mb-1.5">
                          {stop.subtitle} &nbsp;·&nbsp; {stop.state}
                        </p>
                        <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--wsv-forest)] mb-1">
                          {stop.name}
                        </h3>
                        <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-lg mb-5">
                          {stop.tagline}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className={`relative h-40 md:h-52 rounded-2xl overflow-hidden col-span-2 md:col-span-1 ${isActive ? 'scale-100' : 'scale-[0.97]'} transition-transform duration-700`}>
                            {stop.image ? (
                              <Image src={stop.image} alt={stop.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${stop.trailColor} 0%, ${stop.trailColor}88 100%)` }}>
                                <svg viewBox="0 0 80 120" fill="none" className="w-14 h-14 opacity-15">
                                  <path d="M40 116C40 116 4 80 4 44 4 20 20 4 40 4s36 16 36 40c0 36-36 72-36 72Z" fill="white"/>
                                </svg>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-[var(--wsv-cream)] transition-transform duration-700 origin-right" style={{ transform: isActive ? 'scaleX(0)' : 'scaleX(1)' }} />
                          </div>

                          {stop.secondImage ? (
                            <div className={`relative h-40 md:h-52 rounded-2xl overflow-hidden hidden md:block ${isActive ? 'scale-100' : 'scale-[0.97]'} transition-transform duration-700 delay-100`}>
                              <Image src={stop.secondImage} alt={stop.secondImageAlt} fill className="object-cover" sizes="50vw" />
                              <div className="absolute inset-0 bg-[var(--wsv-cream)] transition-transform duration-700 delay-100 origin-right" style={{ transform: isActive ? 'scaleX(0)' : 'scaleX(1)' }} />
                            </div>
                          ) : (
                            <div className="hidden md:block h-40 md:h-52 rounded-2xl overflow-hidden">
                              <div className="w-full h-full flex items-end p-4" style={{ background: `linear-gradient(to top, ${stop.trailColor}cc, ${stop.trailColor}33)` }}>
                                <div>
                                  {stop.rooms.map((r) => (
                                    <div key={r.name} className="flex justify-between gap-8 text-xs text-white/80 font-[family-name:var(--font-lato)] mb-1">
                                      <span>{r.name}</span>
                                      <span className="text-[var(--wsv-gold)]">{r.price}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-7 mb-5">{stop.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {stop.highlights.map((h) => (
                            <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-[var(--wsv-forest)]/6 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] border border-[var(--wsv-forest)]/12">{h}</span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                          <Link href="/contact" className="rounded-full bg-[var(--wsv-forest)] px-7 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors font-[family-name:var(--font-lato)]">
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
                    )}

                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Mobile: non-sticky stacked cards (shown only on small screens) */}
      <div className="md:hidden px-4 pb-16 space-y-8">
        {stops.map((stop) => (
          <div key={stop.slug} className="rounded-2xl overflow-hidden shadow-sm">
            {stop.comingSoon ? (
              /* Mobile mystery card */
              <div className="relative overflow-hidden rounded-2xl">
                {stop.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <Image src={stop.bgImage} alt="" fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(145deg, ${stop.trailColor}cc 0%, ${stop.trailColor}99 100%)` }} />
                  </div>
                )}
                <div className="absolute top-0 right-0 pointer-events-none select-none">
                  <span className="font-[family-name:var(--font-playfair)] text-[7rem] font-bold text-white/5 leading-none">
                    {stop.slug === 'venture-ii' ? 'II' : 'III'}
                  </span>
                </div>
                <div className="relative z-10 p-7 text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full text-white font-[family-name:var(--font-lato)] tracking-widest uppercase ${stop.badgeColor}`}>
                      {stop.badge}
                    </span>
                    <span className="bg-[var(--wsv-gold)] text-[var(--wsv-dark)] text-xs font-bold tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-[var(--wsv-gold)]/40 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[var(--wsv-gold)]" strokeWidth="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-1">{stop.name}</h3>
                  <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm mb-4">{stop.tagline}</p>
                  <p className="text-sm text-white/65 font-[family-name:var(--font-lato)] leading-6 mb-5">{stop.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {stop.highlights.map((h) => (
                      <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 font-[family-name:var(--font-lato)] border border-white/15">{h}</span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-[var(--wsv-gold)] px-7 py-2.5 text-sm font-semibold text-[var(--wsv-dark)] font-[family-name:var(--font-lato)]"
                  >
                    Register Your Interest →
                  </Link>
                </div>
              </div>
            ) : (
              /* Mobile regular card */
              <div className="bg-white border border-[var(--wsv-forest)]/10">
                <div
                  className="h-48 relative flex items-end p-5"
                  style={{ background: `linear-gradient(135deg, ${stop.trailColor} 0%, ${stop.trailColor}99 100%)` }}
                >
                  {stop.image && (
                    <Image src={stop.image} alt={stop.imageAlt} fill className="object-cover" sizes="100vw" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative">
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white font-[family-name:var(--font-lato)] tracking-widest uppercase ${stop.badgeColor} mb-2 inline-block`}>
                      {stop.badge}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">{stop.name}</h3>
                    <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-sm">{stop.tagline}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3 uppercase tracking-wide">{stop.state}</p>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-lato)] leading-6 mb-4">{stop.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stop.highlights.map((h) => (
                      <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-[var(--wsv-forest)]/6 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)]">{h}</span>
                    ))}
                  </div>
                  <Link
                    href={`/ventures/${stop.slug}`}
                    className="inline-block rounded-full bg-[var(--wsv-forest)] px-6 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] font-[family-name:var(--font-lato)]"
                  >
                    Discover More →
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
