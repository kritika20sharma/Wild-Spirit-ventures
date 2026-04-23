import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safari Experiences | Tiger Safaris, Jungle Walks & More — Wild Spirit Ventures',
  description:
    'Book expert-guided tiger safaris, jungle treks, nature walks and wildlife immersion experiences at Tadoba Tiger Reserve. Morning & evening jeep safaris with certified naturalists.',
  keywords: [
    'tiger safari Tadoba booking',
    'jeep safari Tadoba',
    'jungle trek Maharashtra',
    'guided nature walk Tadoba',
    'wildlife experience Central India',
    'morning evening safari Tadoba',
    'certified naturalist safari India',
  ],
};

const experiences = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8v3l2 2"/>
      </svg>
    ),
    title: 'Tiger & Wildlife Safaris',
    location: 'Tadoba · Pench',
    desc: 'Jeep safaris into the core and buffer zones of India\'s premier tiger reserves, led by certified naturalists who read the forest like a language.',
    detail: [
      'Morning and evening safari slots',
      'Open-top jeep with trained naturalist',
      'Big cats, sloth bear, wild dog, birds',
      'Post-safari briefings & naturalist notes',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M3 17l9-9 9 9M3 7l9-9 9 9"/>
      </svg>
    ),
    title: 'Multi-Day Wilderness Treks',
    location: 'Pan-India · Fly Unfettered',
    desc: 'Expert-led expeditions through remote terrain — Satpura, Sahyadri, and beyond. For those who want to leave the road behind entirely.',
    detail: [
      'Routes from moderate to expert-level',
      'Certified trek leads with first aid',
      'Camping in genuine wilderness',
      'Custom itinerary planning',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Guided Nature Walks',
    location: 'Tadoba · Pench · Buffer Zones',
    desc: 'Slow down. Walk the trails at eye-level with the forest. Discover tracks, owl pellets, fungi, and the thousand small things a jeep will always miss.',
    detail: [
      'Buffer zone walks with naturalist',
      'Focus on flora, birding, tracking',
      'Small groups (max 6)',
      'Dawn and dusk options',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Cultural Immersion',
    location: 'Village Communities · All Destinations',
    desc: 'Visit the communities that live alongside the reserve. Hear their stories, understand the delicate balance, and leave with a perspective money cannot buy.',
    detail: [
      'Village visits with local hosts',
      'Traditional craft and cooking sessions',
      'Conservation storytelling evenings',
      'Community-run experiences',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Photography Expeditions',
    location: 'Tadoba · Pench',
    desc: 'Dedicated safaris for photographers — optimised positioning, longer stays at key sighting spots, and guidance from naturalists who understand what a great shot requires.',
    detail: [
      'Extended 4-hour safari slots',
      'Beanbag & hide arrangements',
      'Best light (dawn / dusk) priority',
      'Post-processing feedback sessions',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Conservation Workshops',
    location: 'All Destinations',
    desc: 'For schools, corporates, or curious travellers — half-day and full-day workshops on wildlife conservation, ecology, and India\'s biodiversity.',
    detail: [
      'Hands-on field learning',
      'Expert conservation educators',
      'Suitable for all ages',
      'Corporate & school group packages',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />

      {/* Header */}
      <section className="pt-20 md:pt-36 pb-16 px-6 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            What We Offer
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-[var(--wsv-forest)] mb-5">
            Experiences That<br />
            <span className="italic text-[var(--wsv-earth)]">Stay With You</span>
          </h1>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 max-w-xl mx-auto leading-7 text-sm">
            Not packages. Experiences — carefully designed to move, to challenge, and to connect you
            with India&apos;s living wild spaces in ways that matter.
          </p>
        </ScrollReveal>
      </section>

      {/* Experience cards */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-8 border border-[var(--wsv-forest)]/8 shadow-sm hover:shadow-md transition-shadow duration-400 h-full">
                <div className="text-[var(--wsv-forest)] mb-4">{exp.icon}</div>
                <p className="text-xs tracking-widest text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] uppercase mb-1.5">
                  {exp.location}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--wsv-forest)] mb-3">
                  {exp.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-6 mb-5">
                  {exp.desc}
                </p>
                <ul className="space-y-1.5">
                  {exp.detail.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-400 font-[family-name:var(--font-lato)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--wsv-gold)] shrink-0"/>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--wsv-forest)] text-white px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Ready to Dive In?
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-300 mb-8 max-w-sm mx-auto leading-6 text-sm">
            Tell us what kind of experience you&apos;re after — we&apos;ll help you build the trip that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--wsv-gold)] px-10 py-3.5 text-[var(--wsv-dark)] font-semibold font-[family-name:var(--font-lato)] hover:bg-white transition-colors"
            >
              Plan Your Experience
            </Link>
            <Link
              href="/ventures"
              className="rounded-full border border-white/50 px-10 py-3.5 text-white font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors"
            >
              Browse Ventures
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
