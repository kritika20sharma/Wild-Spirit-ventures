'use client';
// Metadata handled in layout for client pages
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';

const ventures = [
  'Footprint Jungle Resort (Tadoba)',
  'Not sure yet — help me choose',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waUrl, setWaUrl] = useState('https://wa.me/919682716827');
  const [form, setForm] = useState({
    name: '', phone: '', email: '', venture: '', message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Submit to Formspree → emails jaideep@wildspiritstays.com
    await fetch('https://formspree.io/f/xpqkjgpr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        venture: form.venture,
        message: form.message,
      }),
    });

    // Build pre-filled WhatsApp message with all form data
    const waMessage = [
      `Hi Wild Spirit Ventures! 🌿`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.venture ? `*Interested in:* ${form.venture}` : null,
      `*Message:* ${form.message}`,
    ].filter(Boolean).join('\n');

    setWaUrl(`https://wa.me/919682716827?text=${encodeURIComponent(waMessage)}`);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--wsv-cream)]">
      <Navbar />

      {/* Header */}
      <section className="pt-20 md:pt-36 pb-16 px-6 text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.35em] uppercase text-[var(--wsv-sage)] font-[family-name:var(--font-lato)] mb-3">
            Reach Out
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--wsv-forest)] mb-4">
            Plan Your<br />
            <span className="italic text-[var(--wsv-earth)]">Wild Escape</span>
          </h1>
          <p className="font-[family-name:var(--font-lato)] text-gray-500 max-w-md mx-auto leading-7 text-sm">
            Tell us where you want to go — or let us help you decide. Our team typically responds
            within a few hours.
          </p>
        </ScrollReveal>
      </section>

      <section className="pb-24 px-4 sm:px-6 max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">

        {/* Contact info sidebar */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <ScrollReveal direction="left">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919682716827?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20safari%20with%20Wild%20Spirit%20Ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.513 5.83L.057 23.854a.5.5 0 0 0 .61.61l6.102-1.437A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.523-5.168-1.432l-.371-.22-3.822.9.924-3.741-.243-.386A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--wsv-forest)] mb-1">
                  WhatsApp Us
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 leading-6">
                  Fastest way to reach us. We&apos;re usually in the field but always connected.
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm font-semibold text-[#25D366] mt-2">
                  +91 96827 16827 →
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120}>
            <div className="p-6 rounded-2xl bg-white border border-[var(--wsv-forest)]/10 shadow-sm space-y-5">
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--wsv-forest)] mb-1">Email</p>
                <a
                  href="mailto:jaideep@wildspiritstays.com"
                  className="font-[family-name:var(--font-lato)] text-sm text-[var(--wsv-sage)] hover:text-[var(--wsv-forest)] transition-colors"
                >
                  jaideep@wildspiritstays.com
                </a>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--wsv-forest)] mb-1">
                  Operating Areas
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 leading-6">
                  Central India Wildlife Corridor
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--wsv-forest)] mb-1">
                  Response Time
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-gray-500 leading-6">
                  We reply within 4–6 hours on most days.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <ScrollReveal direction="right">
            {submitted ? (
              <div className="rounded-2xl bg-[var(--wsv-forest)] text-white p-12 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[var(--wsv-gold)]">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">Message Sent!</h2>
                <p className="font-[family-name:var(--font-lato)] text-gray-300 text-sm leading-6 max-w-xs">
                  Thank you for reaching out. Our team will get back to you shortly. In the meantime,
                  feel free to WhatsApp us for a faster reply.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-full bg-[#25D366] px-8 py-3 text-white font-semibold font-[family-name:var(--font-lato)] text-sm hover:bg-[#20b956] transition-colors"
                >
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[var(--wsv-forest)]/8 space-y-5"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--wsv-forest)] mb-2">
                  Send an Enquiry
                </h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-wide text-gray-500 font-[family-name:var(--font-lato)] mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-lato)] focus:outline-none focus:border-[var(--wsv-forest)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wide text-gray-500 font-[family-name:var(--font-lato)] mb-1.5 uppercase">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-lato)] focus:outline-none focus:border-[var(--wsv-forest)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wide text-gray-500 font-[family-name:var(--font-lato)] mb-1.5 uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-lato)] focus:outline-none focus:border-[var(--wsv-forest)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wide text-gray-500 font-[family-name:var(--font-lato)] mb-1.5 uppercase">
                    Interested In
                  </label>
                  <select
                    name="venture"
                    value={form.venture}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-lato)] focus:outline-none focus:border-[var(--wsv-forest)] transition-colors bg-white"
                  >
                    <option value="">Select a venture...</option>
                    {ventures.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wide text-gray-500 font-[family-name:var(--font-lato)] mb-1.5 uppercase">
                    Your Message *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your travel dates, group size, or any questions..."
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-[family-name:var(--font-lato)] focus:outline-none focus:border-[var(--wsv-forest)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[var(--wsv-forest)] py-3.5 text-[var(--wsv-cream)] font-semibold font-[family-name:var(--font-lato)] hover:bg-[var(--wsv-earth)] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-center text-gray-400 font-[family-name:var(--font-lato)]">
                  Or reach us directly on{' '}
                  <a
                    href="https://wa.me/919682716827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
