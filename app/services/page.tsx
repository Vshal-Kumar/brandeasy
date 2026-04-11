import type { Metadata } from "next";
import Link from "next/link";
import GoldChevronStrip from "@/components/GoldChevronStrip";

export const metadata: Metadata = {
  title: "Services – Brand Easy Signage",
  description: "LED sign boards, neon signs, acrylic letters, digital signage, flex printing and installation services across India.",
};

const services = [
  {
    title: "LED Sign Boards",
    desc: "High-brightness indoor & outdoor LED sign boards built for every business type. Weather-resistant, energy-efficient, and crafted to grab attention 24/7.",
    features: ["Weather-resistant casing", "Energy-efficient LEDs", "Indoor & outdoor variants", "Custom shapes & sizes", "5-year warranty"],
    icon: "💡",
  },
  {
    title: "Neon & Flex Neon Signs",
    desc: "Classic glass neon and modern flex-neon signs — vibrant, eye-catching, and built to last. Perfect for cafes, salons, shops, and hospitality businesses.",
    features: ["Custom lettering & logos", "100+ color options", "Indoor & outdoor", "Low power consumption", "Easy installation"],
    icon: "✨",
  },
  {
    title: "Acrylic 3D Letters",
    desc: "Premium acrylic channel letters with backlit or front-lit options. Bold 3D presence by day, stunning glow by night.",
    features: ["3D raised letters", "Front-lit / back-lit", "Multi-color options", "Halo glow effect", "Stainless steel options"],
    icon: "🔤",
  },
  {
    title: "Digital Signage",
    desc: "Remote-controlled LED video walls and digital displays that update your content in real-time.",
    features: ["Remote content control", "HD / 4K resolution", "Live data feeds", "Video & animation support", "24/7 operation"],
    icon: "📺",
  },
  {
    title: "Flex & Banner Printing",
    desc: "Large-format flex printing with weather-proof, UV-resistant inks. Fast turnaround for banners, hoardings, and backdrops.",
    features: ["Vibrant UV inks", "Large-format prints", "Hoarding-grade material", "Fast 48hr turnaround", "Custom sizes"],
    icon: "🖨️",
  },
  {
    title: "Installation & AMC",
    desc: "End-to-end installation by expert technicians plus Annual Maintenance Contracts across India.",
    features: ["Pan-India installation", "Permit handling", "Safety compliance", "Preventive maintenance", "Emergency repairs"],
    icon: "🔧",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <GoldChevronStrip />
      <div className="maroon-floral-bg py-14 md:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2DB34A]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DB34A]/40" />
        <p className="text-[#2DB34A] text-xs tracking-[0.3em] uppercase font-medium mb-2">What We Offer</p>
        <h1 className="text-white font-serif text-4xl sm:text-5xl font-bold">
          Our <span className="text-[#2DB34A] italic">Services</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#2DB34A]/60" />
          <span className="text-[#2DB34A]">✦</span>
          <div className="h-px w-12 bg-[#2DB34A]/60" />
        </div>
      </div>
      <GoldChevronStrip />

      <div className="floral-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white border border-[#0099D4]/25 p-8 md:p-10 flex flex-col md:flex-row gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/3 flex flex-col items-center justify-center maroon-floral-bg rounded-sm p-8 text-center shrink-0">
                <div className="text-5xl mb-3">{s.icon}</div>
                <h2 className="text-white font-serif font-bold text-xl">{s.title}</h2>
              </div>
              <div className="flex-1">
                <h3 className="text-[#0A2733] font-serif font-bold mb-3 text-2xl">{s.title}</h3>
                <p className="text-[#2A5566] text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#0A2733]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DB34A] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block mt-6 bg-[#0099D4] text-white px-7 py-2.5 text-xs tracking-widest uppercase font-bold hover:bg-[#0077A8] transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}