import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Wild Spirit Ventures',
  description:
    'The story behind Wild Spirit Ventures — our passion for India\'s wildlife, our commitment to ethical safaris, and the people who make it all happen.',
};

const values = [
  {
    title: 'Nature First',
    desc: 'Every decision — from where we build to how we operate — puts the ecosystem and its inhabitants before profit.',
  },
  {
    title: 'Authentic Immersion',
    desc: 'We don\'t orchestrate wildlife. We create the conditions for genuine encounters, then step back and let the forest speak.',
  },
  {
    title: 'Community Partnership',
    desc: 'Our teams are rooted in the villages surrounding each reserve. We employ locally, source locally, and grow together.',
  },
  {
    title: 'Responsible Growth',
    desc: 'We expand only where we can uphold our standards. Three destinations done right beat thirty done poorly.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/brand-hero.jpg')] bg-cover bg-center opacity-10" aria-hidden="true"/>
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
              Who We Are
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--wsv-forest)] mb-6">
              Born From a Love<br />
              <span className="italic text-[var(--wsv-earth)]">of the Wild</span>
            </h1>
            <p className="font-[family-name:var(--font-lato)] text-gray-600 leading-8 text-lg max-w-2xl mx-auto">
              Wild Spirit Ventures began with a simple conviction: India&apos;s wildlife deserves to be
              experienced — not just seen. Not as a checkbox on a bucket list, but as a relationship
              with the land that leaves you changed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/staff.jpg"
                alt="Wild Spirit Ventures team in the jungle"
                fill
                className="object-cover animate-breathe"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--wsv-forest)]/30 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--wsv-forest)] mb-5">
              From One Forest Lodge to a Family of Ventures
            </h2>
            <div className="font-[family-name:var(--font-lato)] text-gray-600 leading-8 space-y-4 text-sm">
              <p>
                It started at Tadoba — sitting around a campfire after a tiger sighting that left
                everyone speechless. We realised that the magic wasn&apos;t just the tiger. It was the
                guide who read the tracks, the cook who understood why a quiet meal under stars
                matters, and the forest that held all of it together.
              </p>
              <p>
                Footprint Jungle Resort was our first home. Built with care at the buffer zone of the
                Tadoba Andhari Tiger Reserve, it set the template: small, thoughtful, immersive.
                No excess. No performance. Just honest wildness.
              </p>
              <p>
                Jonaki Pench followed — a boutique response to Pench&apos;s quieter, more contemplative
                character. Then Fly Unfettered Expeditions, for those who wanted to go further off
                the map entirely.
              </p>
              <p>
                Today, Wild Spirit Ventures is the parent that holds these distinct identities
                together — united by the same ethic, the same obsession with getting it right.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--wsv-forest)] text-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)] mb-3">
              Our Mission
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-5">
              To Make Wildlife Encounters Transformative
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-gray-300 leading-8 text-sm">
              We exist to create the conditions for real connection — between people and the
              wild spaces that sustain us all. Every safari, every trail, every quiet moment
              at the edge of the forest is an invitation to see the world differently.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-gold)] font-[family-name:var(--font-lato)] mb-3">
              Our Vision
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-5">
              India&apos;s Wildlife, Celebrated and Protected
            </h2>
            <p className="font-[family-name:var(--font-lato)] text-gray-300 leading-8 text-sm">
              A future where responsible tourism actively funds conservation, where local
              communities thrive from the value of intact ecosystems, and where India&apos;s
              extraordinary wildlife heritage is passed down to every generation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            What We Stand For
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--wsv-forest)]">
            Our Philosophy
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-white border border-[var(--wsv-forest)]/8 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--wsv-forest)] mb-3">
                  {v.title}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-gray-500 leading-7 text-sm">
                  {v.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[var(--wsv-cream)]">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--wsv-forest)] mb-5">
            Come Walk in the Wild With Us
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 mb-8 max-w-md mx-auto leading-7 text-sm">
            Whether you&apos;re planning your first safari or your tenth, we&apos;d love to help you find the experience that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ventures"
              className="rounded-full bg-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-cream)] font-semibold font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-earth)] transition-colors"
            >
              Explore Ventures
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--wsv-forest)] px-10 py-3.5 text-[var(--wsv-forest)] font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-forest)]/8 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
