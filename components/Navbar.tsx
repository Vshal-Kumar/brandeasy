"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Phone } from "lucide-react";
import Image from "next/image";

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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Left: nav links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-blue-600"
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
                    ? "text-green-500"
                    : "text-blue-600 hover:text-green-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo image + Brand name text */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 group">
          <Image
            src="/nav_logo.png"
            alt="Brand Easy Logo"
            width={44}
            height={44}
            className="object-contain h-11 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none tracking-wide">
              <span className="text-[#2DB34A]">Brand</span>
              <span className="text-blue-700">Easy</span>
            </span>
            <span className="text-[#2DB34A]/70 text-[9px] tracking-[0.25em] uppercase">
              Signage Solutions
            </span>
          </div>
        </Link>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <Search
            size={18}
            className="text-blue-600 hover:text-[#2DB34A] cursor-pointer transition-colors hidden md:block"
          />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 bg-[#2DB34A] text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-[#1F8A37] transition-colors"
          >
            <Phone size={12} />
            Call Us
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#005A80] border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 text-sm tracking-wide uppercase rounded transition-colors ${
                  pathname === link.href
                    ? "text-[#2DB34A] bg-white/5"
                    : "text-white/80 hover:text-[#2DB34A] hover:bg-white/5"
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