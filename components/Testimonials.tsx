import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      'The safari at Tadoba was unlike anything we had experienced. Our naturalist knew every inch of the forest — we spotted a tigress and her cubs within the first hour.',
    author: 'Priya & Rahul S.',
    detail: 'Footprint Jungle Resort, Tadoba',
  },
  {
    quote:
      'Jonaki Pench felt like a private wilderness. The teak canopy, the sounds at night, the warmth of the team — we extended our stay by two days because we simply couldn\'t leave.',
    author: 'Arjun M.',
    detail: 'Jonaki Pench',
  },
  {
    quote:
      'The Fly Unfettered trek through the Satpura range was the adventure I had been searching for years. Expert guides, zero compromise on safety, and memories that will last a lifetime.',
    author: 'Sneha & Kartik V.',
    detail: 'Fly Unfettered Expeditions',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[var(--wsv-cream)] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            Voices From the Wild
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--wsv-forest)]">
            Stories Our Guests Tell
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 140}>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-[var(--wsv-forest)]/8 h-full flex flex-col">
                {/* Opening quote mark */}
                <svg
                  className="absolute top-5 right-6 w-10 h-10 text-[var(--wsv-forest)]/8"
                  viewBox="0 0 40 30"
                  fill="currentColor"
                >
                  <path d="M0 30 L8 0 L18 0 L10 30 Z M20 30 L28 0 L38 0 L30 30 Z"/>
                </svg>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[var(--wsv-gold)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className="font-[family-name:var(--font-lato)] text-gray-600 leading-7 text-sm italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-[var(--wsv-forest)]/8">
                  <p className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--wsv-forest)] text-sm">
                    {t.author}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-[var(--wsv-sage)] mt-0.5 tracking-wide">
                    {t.detail}
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
