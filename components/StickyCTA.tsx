'use client';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919682716827?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20safari%20with%20Wild%20Spirit%20Ventures."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-500 animate-wa-pulse ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* WhatsApp icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.513 5.83L.057 23.854a.5.5 0 0 0 .61.61l6.102-1.437A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.523-5.168-1.432l-.371-.22-3.822.9.924-3.741-.243-.386A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        <span className="text-sm font-semibold font-[family-name:var(--font-lato)] hidden sm:inline">
          Plan Your Stay
        </span>
      </a>

      {/* Sticky top bar CTA — shows after hero */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* intentionally empty — Navbar handles the sticky header */}
      </div>
    </>
  );
}
