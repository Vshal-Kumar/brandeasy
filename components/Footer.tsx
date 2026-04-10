import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "LED Sign Boards", "Neon Signs", "Acrylic Letters",
  "Flex Printing", "Digital Boards", "Installation & AMC",
];

export default function Footer() {
  return (
    <footer className="bg-[#2D1A0A]">
      <div className="h-0.5 bg-[#C8A855]/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <div className="text-[#C8A855] font-serif text-2xl font-bold leading-none">
              Brand<span className="text-white">Easy</span>
            </div>
            <div className="text-white/30 text-[9px] tracking-[0.3em] uppercase mt-0.5">Signage Solutions</div>
          </Link>
          <p className="text-white/50 text-xs leading-relaxed">
            India&apos;s trusted LED sign board manufacturer since 2009. 300+ happy clients, pan-India delivery and installation.
          </p>
          <div className="flex gap-3 mt-5">
            {["fb", "in", "yt"].map((s) => (
              <a key={s} href="#" className="w-8 h-8 border border-white/10 hover:border-[#C8A855] text-white/40 hover:text-[#C8A855] flex items-center justify-center text-xs font-bold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#C8A855] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/50 text-xs hover:text-[#C8A855] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[#C8A855] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">Our Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-white/50 text-xs hover:text-[#C8A855] transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#C8A855] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-xs text-white/50">
              <MapPin size={13} className="text-[#C8A855] shrink-0 mt-0.5" />
              <span>12, Industrial Estate, Phase 2,<br />Kalaburagi, Karnataka 585102</span>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-xs text-white/50 hover:text-[#C8A855] transition-colors">
                <Phone size={13} className="text-[#C8A855] shrink-0" />
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:hello@brandeasy.in" className="flex items-center gap-3 text-xs text-white/50 hover:text-[#C8A855] transition-colors">
                <Mail size={13} className="text-[#C8A855] shrink-0" />
                hello@brandeasy.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white/30 text-[10px] tracking-widest uppercase">
          © 2025 Brand Easy Signage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
