'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Our Ventures', href: '/ventures' },
  { label: 'Experiences',  href: '/services'  },
  { label: 'About',        href: '/about'     },
  { label: 'Contact',      href: '/contact'   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--wsv-cream)]/95 backdrop-blur-md border-b border-[var(--wsv-forest)]/10">
      <div className="flex items-center justify-between px-6 md:px-10 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative w-11 h-11">
            <Image
              src="/wildspirit-logo.jpg"
              alt="Wild Spirit Ventures"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[var(--wsv-forest)] leading-tight hidden sm:block">
            Wild Spirit<br />
            <span className="text-xs font-normal tracking-[0.2em] uppercase text-[var(--wsv-earth)]">
              Ventures
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide font-[family-name:var(--font-lato)] text-[var(--wsv-dark)] hover:text-[var(--wsv-forest)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[var(--wsv-forest)] px-5 py-2 text-sm font-semibold text-[var(--wsv-cream)] hover:bg-[var(--wsv-earth)] transition-colors duration-300 font-[family-name:var(--font-lato)]"
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
          <span className={`block w-6 h-0.5 bg-[var(--wsv-forest)] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--wsv-forest)] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--wsv-forest)] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
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
