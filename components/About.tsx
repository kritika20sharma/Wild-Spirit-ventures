import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section className="py-24 px-6 w-full bg-[var(--wsv-cream)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <ScrollReveal direction="left">
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/staff.jpg"
              alt="Wild Spirit Ventures team in the jungle"
              fill
              className="object-cover animate-breathe"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--wsv-forest)]/40 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Our Team in the Wild
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal direction="right">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            Who We Are
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--wsv-forest)] mb-5 leading-snug">
            Born from the Forest,<br />
            <span className="italic text-[var(--wsv-earth)]">Guided by the Wild</span>
          </h2>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 leading-7 text-sm mb-4">
            Wild Spirit Ventures is a collective of naturalists, guides, and hospitality professionals
            who have spent their lives in India&apos;s most extraordinary wildlife corridors. We don&apos;t
            just offer safaris — we offer immersion.
          </p>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 leading-7 text-sm">
            Across Tadoba, Pench, and the broader Central India Wildlife Corridor, our team brings
            on-ground expertise, ethical practices, and a genuine love for the wild to every experience
            we craft.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
