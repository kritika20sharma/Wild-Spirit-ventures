import Image from 'next/image';
import Link from 'next/link';

const ventures = [
  { label: 'Footprint Jungle Resort', href: '/ventures/footprint-jungle-resort' },
  { label: 'Venture II · Coming Soon', href: '/contact'                         },
  { label: 'Venture III · Coming Soon', href: '/contact'                        },
];

const links = [
  { label: 'Our Ventures', href: '/ventures'  },
  { label: 'Experiences',  href: '/services'  },
  { label: 'About Us',     href: '/about'     },
  { label: 'Contact',      href: '/contact'   },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--wsv-forest)] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-16 shrink-0">
              <Image
                src="/tree-logo.png"
                alt="Wild Spirit Ventures"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-playfair)] text-[1.05rem] font-bold text-white tracking-tight">
                Wild Spirit
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-[0.6rem] font-normal tracking-[0.38em] uppercase text-[var(--wsv-gold)] mt-0.5">
                Ventures
              </span>
            </span>
          </div>
          <p className="text-sm text-gray-300 font-[family-name:var(--font-lato)] leading-6 max-w-xs">
            One trusted brand. Multiple wildlife destinations. Curated, ethical safaris across India&apos;s finest reserves.
          </p>
        </div>

        {/* Our Ventures */}
        <div>
          <h4 className="font-[family-name:var(--font-playfair)] text-[var(--wsv-gold)] text-sm tracking-widest uppercase mb-4">
            Our Ventures
          </h4>
          <ul className="flex flex-col gap-2.5">
            {ventures.map((v) => (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-lato)]"
                >
                  {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-[family-name:var(--font-playfair)] text-[var(--wsv-gold)] text-sm tracking-widest uppercase mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-lato)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[family-name:var(--font-playfair)] text-[var(--wsv-gold)] text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300 font-[family-name:var(--font-lato)]">
            <li>
              <a
                href="https://wa.me/919682716827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366] shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.513 5.83L.057 23.854a.5.5 0 0 0 .61.61l6.102-1.437A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.523-5.168-1.432l-.371-.22-3.822.9.924-3.741-.243-.386A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href="mailto:jaideep@wildspiritstays.com" className="hover:text-white transition-colors">
                jaideep@wildspiritstays.com
              </a>
            </li>
            <li className="leading-6">
              233 BL Saha Road, Merlin Verve<br />
              Kolkata 700053
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto w-full">
        <p className="text-xs text-gray-400 font-[family-name:var(--font-lato)]">
          &copy; {new Date().getFullYear()} Wild Spirit Ventures. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 font-[family-name:var(--font-lato)]">
          Ethical safaris &middot; Nature-first travel
        </p>
      </div>
    </footer>
  );
}
