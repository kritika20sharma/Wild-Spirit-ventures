import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const rooms = [
  {
    name: 'Luxury Cottage',
    desc: 'Spacious jungle-facing cottage with a private sit-out — wake up to birdsong and dappled light.',
    image: '/resort-exterior.jpg',
  },
  {
    name: 'Deluxe Room',
    desc: 'Thoughtfully designed interiors with earthy tones, comfortable beds, and garden views.',
    image: '/resort-room.jpg',
  },
  {
    name: 'Family Suite',
    desc: 'Two connected rooms with ample space for families, plus a shared outdoor seating area.',
    image: '/resort-exterior.jpg',
  },
];

export default function Rooms() {
  return (
    <section className="py-24 bg-[var(--wsv-cream)] w-full">
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            Where You Stay
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--wsv-forest)]">
            Our Cottages &amp; Rooms
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 120}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-[var(--wsv-forest)]/10 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover animate-breathe"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[var(--wsv-forest)] mb-2">
                    {room.name}
                  </h3>
                  <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 leading-6">
                    {room.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
