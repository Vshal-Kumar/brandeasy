const points = [
  { title: "End-to-End Solutions", desc: "From concept to installation — we handle design, fabrication, permits, and maintenance." },
  { title: "Premium Quality", desc: "Weather-resistant, energy-efficient LED technology built to last 5+ years outdoors." },
  { title: "24/7 Support", desc: "Dedicated AMC teams across India. Always reachable when you need us." },
  { title: "Fast Turnaround", desc: "Most projects delivered within 7-15 working days with zero compromise on quality." },
];

export default function WhyUsSection() {
  return (
    <section className="floral-bg py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Visual */}
        <div className="relative">
          <div className="maroon-floral-bg rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-3 left-3 opacity-40">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 4 Q30 14 24 24 Q18 14 24 4Z" fill="#C8A855" />
                <path d="M24 44 Q30 34 24 24 Q18 34 24 44Z" fill="#C8A855" />
                <path d="M4 24 Q14 30 24 24 Q14 18 4 24Z" fill="#C8A855" />
                <path d="M44 24 Q34 30 24 24 Q34 18 44 24Z" fill="#C8A855" />
                <circle cx="24" cy="24" r="4" fill="#C8A855" />
              </svg>
            </div>
            <p className="text-[#C8A855] font-serif italic font-black leading-tight text-5xl sm:text-6xl">BRAND</p>
            <p className="text-white font-serif italic font-black leading-tight text-5xl sm:text-6xl">EASY</p>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4">India&apos;s Trusted Signage Partner</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-[#C8A855] text-[#2D1A0A] text-xs font-bold px-4 py-2 shadow-lg">
            Since 2009
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-[#7B1818] text-xs tracking-[0.3em] uppercase font-medium mb-2">Why Choose Us</p>
          <h2 className="text-[#2D1A0A] font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
            India&apos;s Trusted LED Manufacturer{" "}
            <span className="text-[#7B1818] italic">Since 2009</span>
          </h2>
          <p className="text-[#5A3A2A] text-sm leading-relaxed mb-8">
            Brand Easy is India&apos;s leading LED sign board manufacturer and installer. With 300+ successful projects and a pan-India service network, we combine cutting-edge technology with artistic craftsmanship.
          </p>
          <div className="space-y-5">
            {points.map((p, i) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="shrink-0 w-7 h-7 bg-[#7B1818] text-white flex items-center justify-center text-xs font-bold rounded-full mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-[#2D1A0A] font-semibold text-sm mb-0.5">{p.title}</h4>
                  <p className="text-[#5A3A2A] text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
