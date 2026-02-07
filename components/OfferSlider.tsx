"use client";

import { useEffect, useRef } from "react";

export default function OfferSlider({
  title,
  folder,
}: {
  title: string;
  folder: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      // Reset scroll for infinite loop
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
    }, 20); // speed (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 pt-8">
      <h2 className="text-lg font-semibold text-[#4A4A4A] mb-4">
        {title}
      </h2>

      {/* AUTO MOVING IMAGE STRIP */}
      <div
        ref={containerRef}
        className="flex gap-8 overflow-hidden whitespace-nowrap"
      >
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((img, index) => (
          <img
            key={index}
            src={`/${folder}/${img}.jpg`}
            alt={title}
            className="h-[180px] md:h-[240px] object-contain flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}

