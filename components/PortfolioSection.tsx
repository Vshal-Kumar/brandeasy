import Link from "next/link";

const projects = [
  { name: "Restaurant Facade Sign", type: "LED Channel Letters", location: "Mumbai", bg: "#8B2020", text: "#FFD700" },
  { name: "Mall Directory Board", type: "Digital Signage", location: "Bangalore", bg: "#1A3A5C", text: "#C8E6FF" },
  { name: "Salon Neon Sign", type: "Flex Neon", location: "Delhi", bg: "#2D0A3A", text: "#FF6EC7" },
  { name: "Auto Showroom Branding", type: "Acrylic 3D Letters", location: "Chennai", bg: "#0A2D1A", text: "#6BFFAA" },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#EDE5D0] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#7B1818] text-xs tracking-[0.3em] uppercase font-medium mb-2">Our Work</p>
            <h2 className="text-[#2D1A0A] font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Featured <span className="text-[#7B1818] italic">Projects</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start md:self-auto border border-[#7B1818] text-[#7B1818] px-6 py-2 text-xs tracking-widest uppercase font-bold hover:bg-[#7B1818] hover:text-white transition-all"
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
