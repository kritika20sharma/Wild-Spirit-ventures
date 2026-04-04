import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Resorts",      href: "/resorts"      },
  { label: "Services",     href: "/services"     },
  { label: "About",        href: "/about"        },
  { label: "Contact",      href: "/contact"      },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[var(--wsv-cream)]/90 backdrop-blur-md border-b border-[var(--wsv-forest)]/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 animate-fade-up">
        <div className="relative w-12 h-12 animate-leaf-sway">
          <Image
            src="/wildspirit-logo.jpg"
            alt="Wild Spirit Ventures"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--wsv-forest)] leading-tight hidden sm:block">
          Wild Spirit<br />
          <span className="text-sm font-normal tracking-widest uppercase text-[var(--wsv-earth)]">Ventures</span>
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`animate-fade-up fade-up-delay-${i + 1} text-sm tracking-wide font-[family-name:var(--font-lato)] text-[var(--wsv-dark)] hover:text-[var(--wsv-forest)] transition-colors duration-300`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/resorts"
          className="animate-fade-up fade-up-delay-4 ml-2 rounded-full border border-[var(--wsv-forest)] px-5 py-2 text-sm font-semibold text-[var(--wsv-forest)] hover:bg-[var(--wsv-forest)] hover:text-[var(--wsv-cream)] transition-all duration-300"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}
