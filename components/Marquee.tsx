import { marqueeItems } from "@/lib/config";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-3.5">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-sm tracking-widest text-paper sm:text-base"
          >
            <span className="px-5">{item}</span>
            <span className="text-stamp" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
