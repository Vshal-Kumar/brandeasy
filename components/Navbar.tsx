"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#7B1818] shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Left: nav links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#C8A855]"
                    : "text-white/80 hover:text-[#C8A855]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl font-bold text-white leading-none tracking-wide">
            Brand<span className="text-[#C8A855]">Easy</span>
          </span>
          <span className="text-[#C8A855]/70 text-[9px] tracking-[0.25em] uppercase">
            Signage Solutions
          </span>
        </Link>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <Search size={18} className="text-white/70 hover:text-[#C8A855] cursor-pointer transition-colors hidden md:block" />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 bg-[#C8A855] text-[#2D1A0A] px-3 py-1.5 rounded text-xs font-bold hover:bg-[#A8882F] transition-colors"
          >
            <Phone size={12} />
            Call Us
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#5A0F0F] border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 text-sm tracking-wide uppercase rounded transition-colors ${
                  pathname === link.href
                    ? "text-[#C8A855] bg-white/5"
                    : "text-white/80 hover:text-[#C8A855] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
