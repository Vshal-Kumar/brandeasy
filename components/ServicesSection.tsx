import Link from "next/link";

const services = [
  {
    title: "LED Sign Boards",
    desc: "High-brightness indoor & outdoor LED boards. Weather-resistant, energy-efficient.",
    icon: "💡",
    tag: "Most Popular",
  },
  {
    title: "Neon Signs",
    desc: "Custom neon & flex-neon signs that glow with stunning brilliance — perfect for shops.",
    icon: "✨",
    tag: null,
  },
  {
    title: "Acrylic Letters",
    desc: "Premium 3D acrylic channel letters for a bold brand presence day and night.",
    icon: "🔤",
    tag: null,
  },
  {
    title: "Digital Signage",
    desc: "Dynamic LED video walls & digital displays updated in real-time remotely.",
    icon: "📺",
    tag: "New",
  },
  {
    title: "Flex Printing",
    desc: "Large-format banner & flex printing with vibrant weather-proof inks.",
    icon: "🖨️",
    tag: null,
  },
  {
    title: "Installation & AMC",
    desc: "Expert installation + annual maintenance contracts. Pan-India service network.",
    icon: "🔧",
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="floral-bg py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#7B1818] text-xs tracking-[0.3em] uppercase font-medium mb-2">What We Offer</p>
          <h2 className="text-[#2D1A0A] font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our Signage{" "}
            <span className="text-[#7B1818] italic">Services</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#C8A855]" />
            <span className="text-[#C8A855] text-lg">✦</span>
            <div className="h-px w-16 bg-[#C8A855]" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s) => (
            <Link key={s.title} href="/services">
              <div className="group bg-white border border-[#C8A855]/30 hover:border-[#7B1818]/40 rounded-sm p-5 md:p-6 cursor-pointer hover:shadow-lg transition-all relative">
                {s.tag && (
                  <span className="absolute top-3 right-3 text-[10px] bg-[#7B1818] text-white px-2 py-0.5 tracking-wide uppercase">
                    {s.tag}
                  </span>
                )}
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-[#2D1A0A] font-serif font-semibold mb-1.5 text-base">{s.title}</h3>
                <p className="text-[#5A3A2A] text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-3 text-[#7B1818] text-xs font-bold tracking-wider uppercase group-hover:underline">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block border border-[#7B1818] text-[#7B1818] px-8 py-2.5 text-xs tracking-widest uppercase font-bold hover:bg-[#7B1818] hover:text-white transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
