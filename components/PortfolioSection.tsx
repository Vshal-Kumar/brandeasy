import Link from "next/link";

const projects = [
  { name: "Restaurant Facade Sign", type: "LED Channel Letters", location: "Mumbai", bg: "#005A80", text: "#2DB34A" },
  { name: "Mall Directory Board", type: "Digital Signage", location: "Bangalore", bg: "#0A2733", text: "#0099D4" },
  { name: "Salon Neon Sign", type: "Flex Neon", location: "Delhi", bg: "#0077A8", text: "#E0F4FB" },
  { name: "Auto Showroom Branding", type: "Acrylic 3D Letters", location: "Chennai", bg: "#155C25", text: "#2DB34A" },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#E0F4FB] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#0099D4] text-xs tracking-[0.3em] uppercase font-medium mb-2">Our Work</p>
            <h2 className="text-[#0A2733] font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Featured <span className="text-[#0077A8] italic">Projects</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start md:self-auto border border-[#0099D4] text-[#0099D4] px-6 py-2 text-xs tracking-widest uppercase font-bold hover:bg-[#0099D4] hover:text-white transition-all"
          >
            View All Work
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4", background: p.bg }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div
                  className="font-serif font-bold leading-tight mb-2 text-base sm:text-xl"
                  style={{ color: p.text, textShadow: `0 0 20px ${p.text}80` }}
                >
                  {p.name}
                </div>
                <div className="w-8 h-px mb-2" style={{ background: p.text, opacity: 0.5 }} />
                <div style={{ color: p.text, opacity: 0.7 }} className="text-[10px] tracking-wider uppercase">
                  {p.type}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <div className="text-white text-xs font-bold mb-0.5">{p.name}</div>
                  <div className="text-white/60 text-[10px]">{p.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}