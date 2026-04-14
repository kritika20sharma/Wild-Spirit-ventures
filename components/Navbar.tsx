'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Our Ventures', href: '/ventures' },
  { label: 'Experiences',  href: '/services'  },
  { label: 'About',        href: '/about'     },
  { label: 'Contact',      href: '/contact'   },
];

const galleryLink = { label: 'Gallery', href: '/gallery' };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= window.innerHeight - 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Transparent only on homepage before hero is scrolled past
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--wsv-cream)] border-b border-[var(--wsv-forest)]/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ height: '9rem' }}
    >
      <div className="flex items-center justify-between px-10 md:px-20 h-full">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <div className="relative" style={{ height: '9rem', width: '36rem' }}>
            <Image
              src="/wsv-logo-new.png"
              alt="Wild Spirit Ventures"
              fill
              className="object-contain object-left transition-all duration-500"
              priority
              style={
                transparent
                  ? { filter: 'brightness(0) invert(1)' }
                  : { mixBlendMode: 'multiply' }
              }
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base tracking-wide font-[family-name:var(--font-lato)] transition-colors duration-300"
              style={{ color: transparent ? 'rgba(255,255,255,0.9)' : '#000000' }}
            >
              {link.label}
            </Link>
          ))}
          {/* Gallery — highlighted */}
          <Link
            href={galleryLink.href}
            className="text-base tracking-wide font-semibold font-[family-name:var(--font-lato)] border-b-2 border-[var(--wsv-gold)] pb-0.5 transition-colors duration-300"
            style={{ color: transparent ? 'var(--wsv-gold)' : '#000000' }}
          >
            {galleryLink.label}
          </Link>
          <Link
            href="/contact"
            className={`ml-2 rounded-full px-6 py-2.5 text-base font-semibold transition-colors duration-300 font-[family-name:var(--font-lato)] ${
              transparent
                ? 'bg-white/15 text-white border border-white/40 hover:bg-white/25 backdrop-blur-sm'
                : 'bg-[var(--wsv-forest)] text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)]'
            }`}
          >
            Plan Your Stay
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[var(--wsv-forest)]'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[var(--wsv-forest)]'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-[var(--wsv-forest)]'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer — always solid so it's readable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-[var(--wsv-cream)] ${
          open ? 'max-h-96 border-t border-[var(--wsv-forest)]/10' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-[family-name:var(--font-lato)] text-[var(--wsv-dark)] hover:text-[var(--wsv-forest)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={galleryLink.href}
            onClick={() => setOpen(false)}
            className="text-base font-semibold font-[family-name:var(--font-lato)] text-[var(--wsv-forest)] border-b border-[var(--wsv-gold)] pb-0.5 self-start"
          >
            {galleryLink.label}
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[var(--wsv-forest)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--wsv-cream)] font-[family-name:var(--font-lato)]"
          >
            Plan Your Stay
          </Link>
        </nav>
      </div>
    </header>
  );
}
