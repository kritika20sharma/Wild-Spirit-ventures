import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type VentureData = {
  name: string;
  location: string;
  tagline: string;
  badge: string;
  heroColor: string;
  intro: string[];
  experiences: { title: string; desc: string }[];
  accommodation?: { title: string; price?: string; desc: string }[];
  expeditions?: { title: string; desc: string }[];
  contact?: { phone?: string; phone2?: string; email?: string; address?: string };
  metaTitle: string;
  metaDesc: string;
  externalLink?: string;
  heroImage?: string;
  galleryImages?: { src: string; alt: string }[];
};

const ventures: Record<string, VentureData> = {
  'footprint-jungle-resort': {
    name: 'Footprint Jungle Resort',
    location: 'Tadoba Andhari Tiger Reserve · Chandrapur, Maharashtra 441222',
    tagline: 'Where tigers roam at dawn.',
    badge: 'Tiger Country',
    heroColor: 'from-[#1C3510] via-[#2C4A1E] to-[#3A6B24]',
    metaTitle: 'Footprint Jungle Resort | Tadoba Tiger Reserve Stay | Wild Spirit Ventures',
    metaDesc:
      'Premium jungle lodge at Tadoba Andhari Tiger Reserve. Expert-guided safaris, infinity pool, organic dining, and stays that put you face-to-face with India\'s tiger country.',
    externalLink: 'https://tadobafootprintresort.com',
    heroImage: '/images/footprint/cottage-exterior.jpg',
    galleryImages: [
      { src: '/images/footprint/cottage-exterior.jpg', alt: 'Footprint Jungle Resort cottage exterior' },
      { src: '/images/footprint/room-interior.jpg', alt: 'Comfortable jungle-themed room interior' },
    ],
    contact: {
      phone: '+91 93802 99571',
      phone2: '+91 96827 16827',
      email: 'tadobafootprintresort@gmail.com',
      address: 'Near Tadoba Andhari Tiger Reserve, Chandrapur District, Maharashtra 441222',
    },
    intro: [
      'Tadoba Andhari Tiger Reserve is Maharashtra\'s largest and oldest national park — a forest where the ground trembles with the weight of wild things. Footprint Jungle Resort was built to honour that wildness, not compete with it.',
      'An unparalleled blend of comfort and adventure, the resort sits at the edge of the reserve — close enough to feel the pulse of the forest, comfortable enough to make you never want to leave. Expert-guided safaris by day, farm-to-table dining and an infinity pool overlooking the treeline by evening.',
    ],
    experiences: [
      {
        title: 'Tiger Safari (Jeep Drive)',
        desc: 'Dawn and dusk jeep drives into Tadoba\'s core and buffer zones with a certified naturalist. Tigers, leopards, gaur, sloth bear, wild dog and over 195 bird species call this forest home.',
      },
      {
        title: 'Naturalist Walk',
        desc: 'Step out of the jeep and into the forest on foot. Buffer zone walks reveal tracks, spoor, fungi, and the thousand small things a vehicle will always miss.',
      },
      {
        title: 'Night Sky Sessions',
        desc: 'The reserve\'s dark skies reveal the Milky Way in full. Our evening astronomy sessions paired with a campfire are a ritual for guests who stay more than two nights.',
      },
      {
        title: 'Photography Safari',
        desc: 'Extended safari slots for photographers — positioned for light, not speed. Beanbags, longer waits at key sighting spots, and naturalists who understand what makes a great frame.',
      },
    ],
    accommodation: [
      {
        title: 'Deluxe Room',
        price: '₹8,500 / night',
        desc: 'Spacious rooms with modern amenities and a view of the surrounding jungle greenery. Rattan furniture, wildlife art, and everything you need after a day of adventure.',
      },
      {
        title: 'Luxury Suite',
        price: '₹8,500 / night',
        desc: 'Premium suites with a separate living area and swimming pool view overlooking the forest. The most immersive stay the resort offers.',
      },
    ],
  },

  'jonaki-pench': {
    name: 'Jonaki Pench',
    location: 'Pench National Park · Turiya Road, Kohka, Madhya Pradesh 480881',
    tagline: 'The Jungle Book comes alive.',
    badge: 'Boutique Eco',
    heroColor: 'from-[#1E3A10] via-[#2C5020] to-[#3A7030]',
    metaTitle: 'Jonaki Pench | Pench National Park Stay | Wild Spirit Ventures',
    metaDesc:
      'Boutique eco-stays in the teak forests of Pench National Park. Turiya Road, Kohka — where Kipling\'s Jungle Book was born. Safaris, nature walks, and unhurried wildness.',
    intro: [
      'Pench is the forest Rudyard Kipling immortalised in The Jungle Book. It\'s a quieter place — less visited, more contemplative, and home to one of India\'s most diverse ecosystems. Dholes, leopards, tigers, and extraordinary birds coexist in a teak canopy that rewards patience.',
      'Jonaki Pench is our boutique response to this forest\'s character — intentional stays designed for those who want to slow down, pay attention, and leave changed.',
    ],
    contact: {
      address: 'Turiya Road, Kohka, Pench National Park, Madhya Pradesh 480881',
    },
    experiences: [
      {
        title: 'Safari Drives',
        desc: 'Morning and afternoon jeep safaris into Pench\'s core zones. Tigers, dholes, leopards, and extraordinary birding in an unhurried, less-crowded setting.',
      },
      {
        title: 'Dawn Bird Walk',
        desc: 'Pench is one of Central India\'s premier birding destinations. Guided dawn walks target the resident and migratory species that make this forest exceptional.',
      },
      {
        title: 'Village Immersion',
        desc: 'A day spent with the communities at the forest\'s edge — understanding the intricate balance between people and the wild spaces they live alongside.',
      },
      {
        title: 'Forest Sit',
        desc: 'Sometimes the most powerful wildlife experience is simply sitting still in the right place. Our naturalists choose the spot — the forest does the rest.',
      },
    ],
    accommodation: [
      {
        title: 'Eco Rooms',
        desc: 'Rooms built with locally-sourced materials — teak, stone, and mud plaster. Naturally cool, beautifully quiet, completely at home in the landscape.',
      },
      {
        title: 'Forest-Edge Bungalow',
        desc: 'A standalone bungalow for those who want complete privacy. Waking up to the sounds of the forest without another soul in sight.',
      },
    ],
  },

  'fly-unfettered': {
    name: 'Fly Unfettered Treks',
    location: 'Pan-India · Treks & Wilderness Expeditions',
    tagline: 'Beyond the boundary — into the unknown.',
    badge: 'Expeditions',
    heroColor: 'from-[#2A1E0C] via-[#4A3C1E] to-[#6B5520]',
    metaTitle: 'Fly Unfettered Treks | Wilderness Expeditions India | Wild Spirit Ventures',
    metaDesc:
      'Expert-led wilderness treks and multi-day expeditions across India. Satpura, Sahyadri, and beyond — for those who want real adventure with genuine expertise.',
    intro: [
      'Fly Unfettered exists for the people for whom a resort isn\'t enough. The ones who want to walk further, sleep under actual stars, and find their edges in terrain that demands real respect.',
      'Every expedition is led by certified wilderness professionals with deep regional knowledge. Safety and authenticity are non-negotiable. Everything else is built around you.',
    ],
    experiences: [
      {
        title: 'Satpura Trek',
        desc: 'A multi-day traverse through the Satpura range — one of India\'s last true wilderness corridors. Dense deciduous forest, sandstone gorges, and wildlife encounters on foot.',
      },
      {
        title: 'Sahyadri Ridge Walk',
        desc: 'The Western Ghats at their most dramatic — waterfalls, mist, ancient forts, and a biodiversity that earned UNESCO World Heritage status.',
      },
      {
        title: 'Custom Wilderness Expeditions',
        desc: 'Name your terrain, your duration, your group size — we\'ll design an expedition around it. School groups, corporate teams, or solo adventurers welcome.',
      },
      {
        title: 'Conservation Treks',
        desc: 'Expeditions that partner with conservation organisations on the ground. Trek, contribute to meaningful field work, and leave the landscape better than you found it.',
      },
    ],
    expeditions: [
      {
        title: 'Safety First',
        desc: 'All Fly Unfettered treks are led by certified wilderness first responders. Gear, logistics, and route planning handled in full — you bring your curiosity and your stamina.',
      },
      {
        title: 'Group Sizes',
        desc: 'Standard treks capped at 10 participants to protect both the experience and the terrain. Private expeditions available for any group size.',
      },
      {
        title: 'Fitness Levels',
        desc: 'Routes from moderate (4–6 hrs daily) to demanding (8+ hrs, technical terrain). We\'ll match you to the right expedition during planning.',
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const v = ventures[params.slug];
  if (!v) return { title: 'Not Found' };
  return {
    title: v.metaTitle,
    description: v.metaDesc,
    openGraph: { title: v.metaTitle, description: v.metaDesc, type: 'website' },
  };
}

export function generateStaticParams() {
  return Object.keys(ventures).map((slug) => ({ slug }));
}

export default function VentureDetailPage({ params }: { params: { slug: string } }) {
  const v = ventures[params.slug];
  if (!v) notFound();

  const isExpedition = params.slug === 'fly-unfettered';

  return (
    <div className="min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-32 pb-24 px-6 bg-gradient-to-br ${v.heroColor} text-white overflow-hidden min-h-[60vh] flex items-end`}>
        {/* Hero image overlay */}
        {v.heroImage && (
          <>
            <Image
              src={v.heroImage}
              alt={v.name}
              fill
              className="object-cover mix-blend-overlay opacity-30"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </>
        )}

        {/* Leaf watermark */}
        <svg viewBox="0 0 80 120" fill="none" className="absolute right-10 top-10 w-32 h-32 opacity-[0.07]">
          <path d="M40 116 C40 116 4 80 4 44 C4 20 20 4 40 4 C60 4 76 20 76 44 C76 80 40 116 40 116Z" fill="white"/>
        </svg>

        <div className="max-w-3xl mx-auto relative w-full">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs tracking-widest uppercase font-[family-name:var(--font-lato)] px-3 py-1 rounded-full border border-white/25 mb-5">
            {v.badge}
          </span>
          <p className="text-xs tracking-widest text-white/60 font-[family-name:var(--font-lato)] mb-2 uppercase">
            {v.location}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-3">
            {v.name}
          </h1>
          <p className="font-[family-name:var(--font-playfair)] italic text-[var(--wsv-gold)] text-xl mb-8">
            {v.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--wsv-gold)] px-8 py-3 text-[var(--wsv-dark)] font-semibold font-[family-name:var(--font-lato)] hover:bg-white transition-colors"
            >
              {isExpedition ? 'Plan an Expedition' : 'Enquire & Book'}
            </Link>
            {v.contact?.phone && (
              <a
                href={`tel:${v.contact.phone.replace(/\s/g, '')}`}
                className="rounded-full border border-white/50 px-8 py-3 text-white font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors"
              >
                {v.contact.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Gallery (if photos available) */}
      {v.galleryImages && v.galleryImages.length > 0 && (
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {v.galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 100} className={i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}>
                <div className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'h-64 md:h-full' : 'h-48'}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Introduction */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <ScrollReveal>
          {v.intro.map((para, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-lato)] text-gray-600 leading-8 text-base mb-5"
            >
              {para}
            </p>
          ))}
        </ScrollReveal>
      </section>

      {/* Experiences */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <ScrollReveal className="mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-2">
            {isExpedition ? 'Our Expeditions' : 'Experiences'}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--wsv-forest)]">
            {isExpedition ? 'Where We Go' : 'What Awaits You'}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {v.experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 80}>
              <div className="p-6 rounded-2xl bg-white border border-[var(--wsv-forest)]/8 shadow-sm h-full">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--wsv-forest)] mb-2">
                  {exp.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-gray-500 text-sm leading-6">
                  {exp.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Accommodation or Expedition Info */}
      {(v.accommodation || v.expeditions) && (
        <section className="py-16 px-6 bg-[var(--wsv-forest)] text-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)] mb-2">
                {v.accommodation ? 'Where You Stay' : 'Good to Know'}
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold">
                {v.accommodation ? 'Your Home in the Wild' : 'Expedition Essentials'}
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {(v.accommodation || v.expeditions)!.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 90}>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[var(--wsv-gold)] mb-1">
                      {item.title}
                    </h3>
                    {'price' in item && (item as { price?: string }).price && (
                      <p className="font-[family-name:var(--font-lato)] text-xs text-white/50 mb-2">{(item as { price?: string }).price}</p>
                    )}
                    <p className="font-[family-name:var(--font-lato)] text-gray-300 text-sm leading-6">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact info (if available) */}
      {v.contact && (
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 border border-[var(--wsv-forest)]/8 shadow-sm flex flex-wrap gap-8 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">Get In Touch</p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--wsv-forest)] mb-4">
                  {v.name}
                </h3>
                <div className="space-y-2 font-[family-name:var(--font-lato)] text-sm text-gray-500">
                  {v.contact.phone && (
                    <p>
                      <a href={`tel:${v.contact.phone.replace(/\s/g,'')}`} className="hover:text-[var(--wsv-forest)] transition-colors">
                        📞 {v.contact.phone}
                      </a>
                      {v.contact.phone2 && (
                        <> &nbsp;/&nbsp; <a href={`tel:${v.contact.phone2.replace(/\s/g,'')}`} className="hover:text-[var(--wsv-forest)] transition-colors">{v.contact.phone2}</a></>
                      )}
                    </p>
                  )}
                  {v.contact.email && (
                    <p>
                      <a href={`mailto:${v.contact.email}`} className="hover:text-[var(--wsv-forest)] transition-colors">
                        ✉️ {v.contact.email}
                      </a>
                    </p>
                  )}
                  {v.contact.address && (
                    <p>📍 {v.contact.address}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 ml-auto items-center">
                <a
                  href="https://wa.me/919380299571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-6 py-2.5 text-white font-semibold text-sm font-[family-name:var(--font-lato)] hover:bg-[#20b956] transition-colors"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--wsv-forest)] mb-4">
            Ready to Experience {v.name}?
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 mb-8 max-w-sm mx-auto text-sm leading-6">
            Reach out to check availability, ask questions, or start building your itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-cream)] font-semibold font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-earth)] transition-colors"
            >
              Send an Enquiry
            </Link>
            <Link
              href="/ventures"
              className="rounded-full border border-[var(--wsv-forest)]/40 px-10 py-3.5 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-forest)]/8 transition-colors"
            >
              All Ventures
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
