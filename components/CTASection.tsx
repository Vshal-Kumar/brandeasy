import Link from "next/link";

export default function CTASection() {
  return (
    <section className="maroon-floral-bg py-14 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#2DB34A]/50" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DB34A]/50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-[#2DB34A]/60" />
          <span className="text-[#2DB34A] text-lg">✦</span>
          <div className="h-px w-12 bg-[#2DB34A]/60" />
        </div>
        <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Ready to <span className="text-[#2DB34A]">Light Up</span> Your Brand?
        </h2>
        <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
          Get a free design consultation and quote within 24 hours. Our experts are ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#2DB34A] text-white px-10 py-3 text-xs tracking-widest uppercase font-bold hover:bg-[#1F8A37] transition-colors"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-block border border-white/40 text-white px-10 py-3 text-xs tracking-widest uppercase font-bold hover:border-[#2DB34A] hover:text-[#2DB34A] transition-colors"
          >
            Call +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}