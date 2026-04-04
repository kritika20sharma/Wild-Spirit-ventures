import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
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
  accommodation?: { title: string; desc: string }[];
  expeditions?: { title: string; desc: string }[];
  metaTitle: string;
  metaDesc: string;
  externalLink?: string;
};

const ventures: Record<string, VentureData> = {
  'footprint-jungle-resort': {
    name: 'Footprint Jungle Resort',
    location: 'Tadoba Andhari Tiger Reserve · Maharashtra',
    tagline: 'Where tigers roam at dawn.',
    badge: 'Tiger Country',
    heroColor: 'from-[#1C3510] via-[#2C4A1E] to-[#3A6B24]',
    metaTitle: 'Footprint Jungle Resort | Tadoba Tiger Reserve Stay | Wild Spirit Ventures',
    metaDesc:
      'Intimate jungle lodge at Tadoba Andhari Tiger Reserve. Expert-guided safaris, forest walks, and stays that bring you closer to India\'s wild heart.',
    externalLink: 'https://www.footprintjungleresort.com',
    intro: [
      'Tadoba Andhari Tiger Reserve is Maharashtra\'s largest and oldest national park — a forest where the ground trembles with the weight of wild things. Footprint Jungle Resort was built to honour that wildness, not compete with it.',
      'Our lodge sits at the buffer zone — close enough to feel the pulse of the forest, far enough to let it breathe. Every detail, from the cottages to the dining, is designed to disappear into the landscape.',
    ],
    experiences: [
      {
        title: 'Tiger Safari (Jeep Drive)',
        desc: 'Dawn and dusk safari drives into the core and buffer zones with a certified naturalist. Tigers, leopards, gaur, sloth bear, and over 195 bird species call this forest home.',
      },
      {
        title: 'Naturalist Walk',
        desc: 'Step out of the jeep and into the forest on foot. These guided buffer zone walks reveal the microscopic world the vehicles always miss — tracks, pellets, fungi, and spoor.',
      },
      {
        title: 'Night Sky Sessions',
        desc: 'The buffer zone is dark enough to see the Milky Way. Our evening astronomy sessions, paired with a campfire, are a ritual for guests who stay more than two nights.',
      },
      {
        title: 'Photography Safari',
        desc: 'Extended slots for photographers — positioned for light, not speed. Beanbags, extended stays at sighting points, and naturalists who understand what a great frame needs.',
      },
    ],
    accommodation: [
      {
        title: 'Forest Cottages',
        desc: 'Spacious cottages with private sit-outs facing the tree line. Earthy interiors, natural materials, and all the comfort you need after a day in the wild.',
      },
      {
        title: 'Jungle Suite',
        desc: 'Our larger suite for couples or families who want a little more space. A bathtub with a forest view and a private deck that belongs to the birds at dawn.',
      },
      {
        title: 'Camping Under Canvas',
        desc: 'Seasonal tented accommodation at the edge of the buffer zone — the closest you can legally sleep to the forest. Extraordinary.',
      },
    ],
  },

  'jonaki-pench': {
    name: 'Jonaki Pench',
    location: 'Pench National Park · Madhya Pradesh',
    tagline: 'The Jungle Book comes alive.',
    badge: 'Boutique Eco',
    heroColor: 'from-[#1E3A10] via-[#2C5020] to-[#3A7030]',
    metaTitle: 'Jonaki Pench | Pench National Park Stay | Wild Spirit Ventures',
    metaDesc:
      'Boutique eco-stays in the teak forests of Pench National Park. Where Kipling\'s Jungle Book was born — wildlife safaris, nature walks, and unhurried wildness.',
    intro: [
      'Pench is the forest that Rudyard Kipling immortalised in The Jungle Book. It\'s a quieter place than Tadoba — less visited, more contemplative, and home to one of India\'s most diverse ecosystems.',
      'Jonaki Pench is our boutique response to this forest\'s character. Small, intentional stays that ask you to slow down and pay attention.',
    ],
    experiences: [
      {
        title: 'Safari Drives',
        desc: 'Morning and afternoon jeep safaris into Pench\'s core zones. Tigers, wild dogs (dholes), leopards, and extraordinary birding — all in an unhurried, less crowded setting.',
      },
      {
        title: 'Bird Walk at Dawn',
        desc: 'Pench is one of Central India\'s premier birding destinations. Our guided dawn walks target the resident and migratory species that make this forest exceptional for birders.',
      },
      {
        title: 'Village Immersion',
        desc: 'A day spent with the communities at the forest\'s edge — understanding the intricate relationship between people and the wild spaces they live alongside.',
      },
      {
        title: 'Forest Sit',
        desc: 'Sometimes the most powerful wildlife experience is simply sitting still. Our naturalists choose the right spot, and the forest reveals itself on its own terms.',
      },
    ],
    accommodation: [
      {
        title: 'Eco Rooms',
        desc: 'Rooms built with locally-sourced materials — teak, stone, and mud plaster. Naturally cool, beautifully quiet, and completely at home in the landscape.',
      },
      {
        title: 'Forest-Edge Bungalow',
        desc: 'A standalone bungalow for those who want complete privacy. Waking up to the sounds of the forest without another soul in sight.',
      },
    ],
  },

  'fly-unfettered': {
    name: 'Fly Unfettered Expeditions',
    location: 'Pan-India Treks & Wilderness Expeditions',
    tagline: 'Beyond the boundary — into the unknown.',
    badge: 'Expeditions',
    heroColor: 'from-[#2A1E0C] via-[#4A3C1E] to-[#6B5520]',
    metaTitle: 'Fly Unfettered Expeditions | Wilderness Treks India | Wild Spirit Ventures',
    metaDesc:
      'Expert-led wilderness treks and multi-day expeditions across India. Satpura, Sahyadri, and beyond — for those who want real adventure with genuine expertise.',
    intro: [
      'Fly Unfettered exists for the people for whom a resort isn\'t enough. The ones who want to walk further, sleep under actual stars, and find their edges in terrain that demands respect.',
      'Every expedition we run is led by certified wilderness professionals with deep regional knowledge. Safety and authenticity are non-negotiable. Everything else is flexible.',
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
        desc: 'Name your terrain, your duration, your group — we\'ll design an expedition around it. From school groups to corporate teams to solo adventurers.',
      },
      {
        title: 'Conservation Treks',
        desc: 'Expeditions that partner with conservation organisations on the ground. You trek, you contribute to meaningful field work, and you leave the landscape better than you found it.',
      },
    ],
    expeditions: [
      {
        title: 'What to Expect',
        desc: 'All Fly Unfettered treks are led by certified wilderness first responders. Gear, logistics, and route planning are handled in full — you bring your curiosity and your stamina.',
      },
      {
        title: 'Group Sizes',
        desc: 'We cap standard treks at 10 participants to protect both the experience and the terrain. Private expeditions are available for any group size.',
      },
      {
        title: 'Fitness & Difficulty',
        desc: 'We offer routes from moderate (4–6 hrs daily walking) to demanding (8+ hrs, technical terrain). We\'ll match you to the right expedition during planning.',
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
      <section className={`relative pt-32 pb-24 px-6 bg-gradient-to-br ${v.heroColor} text-white overflow-hidden`}>
        <svg viewBox="0 0 80 120" fill="none" className="absolute right-10 top-10 w-32 h-32 opacity-8">
          <path d="M40 116 C40 116 4 80 4 44 C4 20 20 4 40 4 C60 4 76 20 76 44 C76 80 40 116 40 116Z" fill="white"/>
        </svg>
        <div className="max-w-3xl mx-auto relative">
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
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-8 py-3 text-white font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
            {v.externalLink && (
              <a
                href={v.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-8 py-3 text-white/80 font-[family-name:var(--font-lato)] hover:bg-white/10 transition-colors"
              >
                Visit Website ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
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
                    <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[var(--wsv-gold)] mb-2">
                      {item.title}
                    </h3>
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

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--wsv-forest)] mb-4">
            Ready to Experience {v.name}?
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 mb-8 max-w-sm mx-auto text-sm leading-6">
            Reach out to us to check availability, ask questions, or start planning your stay.
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
