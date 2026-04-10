"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Left: nav links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#2D1A0A]"
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
                    ? "text-[#7B1818]"
                    : "text-[#2D1A0A]/80 hover:text-[#7B1818]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          
          {/* Logo Image */}
          <Image
            src="/logo.png"
            alt="BrandEasy logo"
            width={45}
            height={45}
            className="object-contain"
          />

          {/* Brand Text */}
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-bold text-[#2D1A0A]">
              Brand<span className="text-[#7B1818]">Easy</span>
            </span>
            <span className="text-[#7B1818]/70 text-[10px] tracking-[0.25em] uppercase">
              Signage Solutions
            </span>
          </div>
        </Link>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          <Search
            size={18}
            className="text-[#2D1A0A]/70 hover:text-[#7B1818] cursor-pointer transition-colors hidden md:block"
          />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 bg-[#7B1818] text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-[#5A0F0F] transition-colors"
          >
            <Phone size={12} />
            Call Us
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#EDE5D0]">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 text-sm tracking-wide uppercase rounded transition-colors ${
                  pathname === link.href
                    ? "text-[#7B1818] bg-[#7B1818]/10"
                    : "text-[#2D1A0A]/80 hover:text-[#7B1818] hover:bg-[#7B1818]/10"
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