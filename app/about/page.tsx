import type { Metadata } from "next";
import Link from "next/link";
import GoldChevronStrip from "@/components/GoldChevronStrip";

export const metadata: Metadata = {
  title: "About Us – Brand Easy Signage",
  description: "India's trusted LED sign board manufacturer since 2009. 300+ projects, pan-India presence.",
};

const timeline = [
  { year: "2009", event: "Founded in Kalaburagi, Karnataka with a small LED workshop." },
  { year: "2012", event: "Expanded to Bangalore. First large commercial project: Garuda Mall signage." },
  { year: "2016", event: "Pan-India installation network established. 100+ clients milestone." },
  { year: "2020", event: "Launched Digital Signage division with remote-control LED walls." },
  { year: "2024", event: "300+ projects delivered. Expanding to UAE & Singapore markets." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK" },
  { name: "Priya Sharma", role: "Head of Design", initials: "PS" },
  { name: "Mohan Rao", role: "Technical Director", initials: "MR" },
  { name: "Sneha Patel", role: "Client Relations", initials: "SP" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <GoldChevronStrip />
      <div className="maroon-floral-bg py-14 md:py-20 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A855]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A855]/40" />
        <p className="text-[#C8A855] text-xs tracking-[0.3em] uppercase font-medium mb-2">Our Story</p>
        <h1 className="text-white font-serif text-4xl sm:text-5xl font-bold">
          About <span className="text-[#C8A855] italic">Brand Easy</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#C8A855]/60" />
          <span className="text-[#C8A855]">✦</span>
          <div className="h-px w-12 bg-[#C8A855]/60" />
        </div>
      </div>
      <GoldChevronStrip />

      {/* Mission */}
      <section className="floral-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[#2D1A0A] font-serif text-3xl sm:text-4xl font-bold mb-4">
            India&apos;s Trusted <span className="text-[#7B1818] italic">Signage Partner</span>
          </h2>
          <p className="text-[#5A3A2A] text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            Brand Easy is India&apos;s leading LED sign board manufacturer, specialising in premium signage that brings brands to life. With 300+ successful projects and a pan-India service network, we combine cutting-edge technology with artistic craftsmanship.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { v: "300+", l: "Projects" },
              { v: "15+", l: "Years" },
              { v: "50+", l: "Cities" },
              { v: "99%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-[#C8A855]/30 p-5 text-center">
                <div className="text-[#7B1818] font-serif font-bold mb-1 text-4xl">{s.v}</div>
                <div className="text-[#5A3A2A] text-xs tracking-widest uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#2D1A0A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-[#C8A855] font-serif text-2xl sm:text-3xl font-bold mb-10">Our Journey</h2>
          <div className="relative pl-6 border-l border-[#C8A855]/30 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-[#7B1818] border-2 border-[#C8A855] rounded-full" />
                <div className="text-[#C8A855] text-xs font-bold tracking-widest mb-1">{t.year}</div>
                <p className="text-white/70 text-sm">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="floral-bg py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-[#2D1A0A] font-serif text-2xl sm:text-3xl font-bold mb-10">
            Meet the <span className="text-[#7B1818] italic">Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="text-center bg-white border border-[#C8A855]/30 p-6">
                <div className="w-16 h-16 bg-[#7B1818] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-serif font-bold text-xl">
                  {m.initials}
                </div>
                <div className="text-[#2D1A0A] font-semibold text-sm mb-0.5">{m.name}</div>
                <div className="text-[#7B1818] text-xs">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="maroon-floral-bg py-12 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A855]/40" />
        <p className="text-white/80 text-sm mb-4">Ready to work with us?</p>
        <Link href="/contact" className="inline-block bg-[#C8A855] text-[#2D1A0A] px-10 py-3 text-xs tracking-widest uppercase font-bold hover:bg-[#A8882F] transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
