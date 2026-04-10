import Link from "next/link";

function GoldFlower({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <g fill="#C8A855">
        <ellipse cx="24" cy="13" rx="4" ry="11" />
        <ellipse cx="24" cy="35" rx="4" ry="11" />
        <ellipse cx="13" cy="24" rx="11" ry="4" />
        <ellipse cx="35" cy="24" rx="11" ry="4" />
        <ellipse cx="16" cy="16" rx="4" ry="10" transform="rotate(-45 16 16)" />
        <ellipse cx="32" cy="32" rx="4" ry="10" transform="rotate(-45 32 32)" />
        <ellipse cx="32" cy="16" rx="4" ry="10" transform="rotate(45 32 16)" />
        <ellipse cx="16" cy="32" rx="4" ry="10" transform="rotate(45 16 32)" />
        <circle cx="24" cy="24" r="5" />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full min-h-[520px] flex flex-col md:flex-row">
      {/* Left: Cream with text */}
      <div className="floral-bg flex-1 flex flex-col items-center justify-center px-8 py-16 text-center relative min-h-[320px]">
        <div className="absolute top-4 left-4 opacity-40">
          <GoldFlower size={48} />
        </div>
        <div className="absolute bottom-4 right-4 opacity-40">
          <GoldFlower size={40} />
        </div>
        <p className="text-[#7B1818] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
          Premium Signage for Your Brand
        </p>
        <h1 className="text-[#2D1A0A] font-serif leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          Light Up Your <br />
          <span className="text-[#7B1818]">Business Identity</span>
        </h1>
        <p className="text-[#5A3A2A] text-sm max-w-xs leading-relaxed mb-6">
          Custom LED sign boards, neon lights & digital signage crafted to make your brand impossible to ignore.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#7B1818] text-white px-8 py-2.5 text-xs tracking-widest uppercase font-bold hover:bg-[#5A0F0F] transition-colors"
        >
          Get Free Quote
        </Link>
      </div>

      {/* Right: Dark maroon with sale banner */}
      <div className="maroon-floral-bg flex-1 flex flex-col items-center justify-center px-8 py-16 text-center relative min-h-[320px]">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A855]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A855]/40" />
        <p className="text-[#C8A855] text-xs tracking-[0.35em] uppercase mb-2 font-medium">
          Limited Time Offer
        </p>
        <h2 className="text-white font-serif leading-none mb-1 text-5xl sm:text-6xl md:text-7xl font-black">
          GRAND
        </h2>
        <h2 className="text-[#C8A855] font-serif leading-none mb-2 text-4xl sm:text-5xl md:text-6xl font-black">
          LAUNCH SALE
        </h2>
        <p className="text-white/80 text-sm mb-3 tracking-wide">Sign Board Special</p>
        <div className="flex items-end justify-center gap-2 mb-5">
          <span className="text-white text-base font-medium">UP TO</span>
          <span className="text-[#C8A855] font-serif font-black leading-none text-6xl sm:text-7xl md:text-8xl">30%</span>
          <span className="text-white text-base font-medium">OFF</span>
        </div>
        <Link
          href="/contact"
          className="inline-block border border-[#C8A855] text-[#C8A855] px-8 py-2.5 text-xs tracking-widest uppercase font-bold hover:bg-[#C8A855] hover:text-[#2D1A0A] transition-all"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
