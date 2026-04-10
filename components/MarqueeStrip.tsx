const items = [
  "Made in India",
  "Premium Sign Materials",
  "Custom LED & Neon",
  "Handcrafted to Perfection",
  "Pan-India Installation",
  "5-Year Warranty",
  "300+ Happy Clients",
  "24hr Fast Delivery",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#5A0F0F] py-2.5 overflow-hidden border-y border-[#C8A855]/20">
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-white/90 text-xs tracking-widest uppercase font-medium px-2">
            <svg viewBox="0 0 14 10" width="14" height="10" fill="none">
              <polygon points="0,0 9,5 0,10" fill="#C8A855" />
              <polygon points="5,0 14,5 5,10" fill="#C8A855" opacity="0.5" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
