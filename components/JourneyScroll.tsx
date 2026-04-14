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
    externalLink: 'https://tadobafootprintresort.com',
    terrain: 'Tiger Reserve',
    trailColor: '#2C4A1E',
  },
  {
    slug: 'jonaki-pench',
    name: 'Jonaki Pench',
    subtitle: 'Pench National Park',
    state: 'Turiya Road, Kohka, Madhya Pradesh 480881',
    badge: 'Boutique Eco',
    badgeColor: 'bg-[var(--wsv-sage)]',
    comingSoon: true,
    tagline: 'The Jungle Book comes alive.',
    desc: 'Boutique eco-stays woven into the teak forests of Pench — the forest that inspired Rudyard Kipling\'s Jungle Book. Dholes, leopards, tigers and extraordinary birding, all in an unhurried, intimate setting that rewards those who slow down.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    highlights: ['Safari Drives', 'Bird Walks', 'Village Visits', 'Forest Sits'],
    rooms: [
      { name: 'Eco Rooms', price: 'On enquiry' },
      { name: 'Forest Bungalow', price: 'On enquiry' },
    ],
    phone: null,
    email: null,
    externalLink: null,
    terrain: 'Teak Forest',
    trailColor: '#3A5C28',
  },
  {
    slug: 'fly-unfettered',
    name: 'Fly Unfettered Treks',
    subtitle: 'Pan-India Expeditions',
    state: 'Satpura · Sahyadri · And Beyond',
    badge: 'Expeditions',
    badgeColor: 'bg-[var(--wsv-earth)]',
    comingSoon: true,
    tagline: 'Beyond the boundary — into the unknown.',
    desc: 'For those for whom a resort isn\'t enough. Expert-led multi-day treks, off-trail wilderness expeditions and adventure journeys across India\'s most remote landscapes. Certified guides, small groups, zero compromise on safety — and pure, unfiltered wildness.',
    image: null,
    imageAlt: '',
    secondImage: null,
    secondImageAlt: '',
    highlights: ['Multi-day Treks', 'Certified Guides', 'Small Groups', 'Custom Routes'],
    rooms: [
      { name: 'Day Treks', price: 'On enquiry' },
      { name: 'Expeditions', price: 'On enquiry' },
    ],
    phone: null,
    email: null,
    externalLink: null,
    terrain: 'Wilderness',
    trailColor: '#6B4226',
  },
];

// ── Main component ──────────────────────────────────────────────
export default function JourneyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [jeepProgress, setJeepProgress] = useState(0);
  const [activeStop, setActiveStop] = useState(-1);
  const stopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastProgress = useRef(0);

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollable));
    setJeepProgress(rawProgress);

    lastProgress.current = rawProgress;

    // Which stop is closest to viewport center
    const viewMid = window.innerHeight / 2;
    let closest = -1;
    let closestDist = Infinity;
    stopRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.top + r.height / 2 - viewMid);
      if (dist < closestDist && r.top < viewMid + 100) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveStop(closest);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Clamp jeep Y between 5% and 90% of trail height
  const jeepTop = `${5 + jeepProgress * 85}%`;

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="relative"
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
            style={{ height: `${5 + jeepProgress * 90}%` }}
          />

          {/* Stop markers */}
          {stops.map((_, i) => {
            const stopY = `${10 + i * 38}%`;
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

        {/* ── RIGHT: Venture cards ── */}
        <div className="flex-1 overflow-y-auto hide-scrollbar relative">
          <div className="flex flex-col justify-around min-h-full py-8 gap-0">
            {stops.map((stop, i) => {
              const isActive = activeStop === i;
              return (
                <div
                  key={stop.slug}
                  ref={(el) => { stopRefs.current[i] = el; }}
                  className={`px-4 md:px-8 lg:px-12 py-8 transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'
                  }`}
                  style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
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
                      {stop.comingSoon && (
                        <span className="text-xs px-3 py-1 rounded-full bg-[var(--wsv-gold)] text-[var(--wsv-dark)] font-bold font-[family-name:var(--font-lato)] tracking-widest uppercase">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Name + tagline */}
                    <p className="text-xs tracking-widest text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] uppercase mb-1.5">
                      {stop.subtitle} &nbsp;·&nbsp; {stop.state}
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--wsv-forest)] mb-1">
                      {stop.name}
                    </h3>
                    <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-lg mb-5">
                      {stop.tagline}
                    </p>

                    {/* Images — real photos or earthy gradient placeholder */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div
                        className={`relative h-40 md:h-52 rounded-2xl overflow-hidden col-span-2 md:col-span-1 ${
                          isActive ? 'scale-100' : 'scale-[0.97]'
                        } transition-transform duration-700`}
                      >
                        {stop.image ? (
                          <Image
                            src={stop.image}
                            alt={stop.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${stop.trailColor} 0%, ${stop.trailColor}88 100%)`,
                            }}
                          >
                            <svg viewBox="0 0 80 120" fill="none" className="w-14 h-14 opacity-15">
                              <path d="M40 116C40 116 4 80 4 44 4 20 20 4 40 4s36 16 36 40c0 36-36 72-36 72Z" fill="white"/>
                            </svg>
                          </div>
                        )}
                        {/* Slide-in overlay that wipes away */}
                        <div
                          className="absolute inset-0 bg-[var(--wsv-cream)] transition-transform duration-700 origin-right"
                          style={{ transform: isActive ? 'scaleX(0)' : 'scaleX(1)' }}
                        />
                      </div>

                      {stop.secondImage ? (
                        <div
                          className={`relative h-40 md:h-52 rounded-2xl overflow-hidden hidden md:block ${
                            isActive ? 'scale-100' : 'scale-[0.97]'
                          } transition-transform duration-700 delay-100`}
                        >
                          <Image
                            src={stop.secondImage}
                            alt={stop.secondImageAlt}
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                          <div
                            className="absolute inset-0 bg-[var(--wsv-cream)] transition-transform duration-700 delay-100 origin-right"
                            style={{ transform: isActive ? 'scaleX(0)' : 'scaleX(1)' }}
                          />
                        </div>
                      ) : (
                        <div className="hidden md:block h-40 md:h-52 rounded-2xl overflow-hidden">
                          <div
                            className="w-full h-full flex items-end p-4"
                            style={{
                              background: `linear-gradient(to top, ${stop.trailColor}cc, ${stop.trailColor}33)`,
                            }}
                          >
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

                    {/* Description */}
                    <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-7 mb-5">
                      {stop.desc}
                    </p>

                    {/* Highlights pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {stop.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-3 py-1.5 rounded-full bg-[var(--wsv-forest)]/6 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] border border-[var(--wsv-forest)]/12"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4">
                      {stop.comingSoon ? (
                        <span className="rounded-full bg-gray-200 px-7 py-2.5 text-sm font-semibold text-gray-400 font-[family-name:var(--font-lato)] cursor-not-allowed">
                          Coming Soon
                        </span>
                      ) : (
                      <Link
                        href={`/ventures/${stop.slug}`}
                        className="rounded-full bg-[var(--wsv-forest)] px-7 py-2.5 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors font-[family-name:var(--font-lato)]"
                      >
                        Discover More →
                      </Link>
                      )}
                      {stop.externalLink && (
                        <a
                          href={stop.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] hover:text-[var(--wsv-forest)] underline underline-offset-4"
                        >
                          Visit Website ↗
                        </a>
                      )}
                      {stop.phone && (
                        <a
                          href={`tel:${stop.phone.replace(/\s/g, '')}`}
                          className="text-sm text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] hover:text-[var(--wsv-forest)] transition-colors"
                        >
                          {stop.phone}
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: non-sticky stacked cards (shown only on small screens) */}
      <div className="md:hidden px-4 pb-16 space-y-8">
        {stops.map((stop) => (
          <div key={stop.slug} className="rounded-2xl overflow-hidden bg-white border border-[var(--wsv-forest)]/10 shadow-sm">
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
        ))}
      </div>
    </section>
  );
}
