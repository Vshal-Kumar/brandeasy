function SignDecor() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="30" stroke="#C8A855" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <circle cx="40" cy="40" r="20" stroke="#C8A855" strokeWidth="1" opacity="0.4" />
      <path d="M20 40 Q30 25 40 40 Q50 55 60 40" stroke="#C8A855" strokeWidth="2" fill="none" />
      <circle cx="40" cy="40" r="5" fill="#C8A855" />
      <path d="M40 10 L40 20 M40 60 L40 70 M10 40 L20 40 M60 40 L70 40" stroke="#C8A855" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 19 L26 26 M54 54 L61 61 M61 19 L54 26 M26 54 L19 61" stroke="#C8A855" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function BrandStatement() {
  return (
    <section className="maroon-floral-bg py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A855]/50" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A855]/50" />
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-6 md:gap-12 text-center">
        <div className="hidden md:block shrink-0 opacity-80">
          <SignDecor />
        </div>
        <p
          className="text-white/90 leading-relaxed text-xl sm:text-2xl md:text-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          <span className="text-[#C8A855] font-semibold not-italic">Brand Easy</span> brings{" "}
          <span className="font-semibold">World-Class Signage</span> into your city&apos;s streets —<br />
          through thoughtfully{" "}
          <span className="font-bold not-italic">crafted sign solutions</span>.
        </p>
        <div className="hidden md:block shrink-0 opacity-80 scale-x-[-1]">
          <SignDecor />
        </div>
      </div>
    </section>
  );
}
