const stats = [
  { value: "300+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Cities Covered" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#2D1A0A] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}>
              <div className="text-[#C8A855] font-serif font-black leading-none mb-1 text-5xl sm:text-6xl">
                {s.value}
              </div>
              <div className="text-white/60 text-xs tracking-[0.2em] uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
