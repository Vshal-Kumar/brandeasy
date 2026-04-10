export default function GoldChevronStrip() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "18px", background: "#C8A855" }}>
      <div className="flex items-center h-full select-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 18" height="18" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 14,9 0,18" fill="rgba(255,255,255,0.22)" />
            <polygon points="6,0 20,9 6,18" fill="rgba(255,255,255,0.15)" />
          </svg>
        ))}
      </div>
    </div>
  );
}
