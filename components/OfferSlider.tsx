"use client";

import { useEffect, useRef, useState } from "react";

export default function OfferSlider({
  title,
  folder,
}: {
  title: string;
  folder: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 0.7; // smooth but noticeable

    const animate = () => {
      if (!container || isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative bg-white rounded-[26px] shadow-xl border border-gray-500 px-5 py-6 overflow-hidden mx-2">

      {/* SOFT LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#F7EFEA_0%,#ffffff_60%)] pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 mb-6 flex items-center justify-between px-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3A2E2A]">
            {title}
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[#8D5B4C] to-[#C0856E] rounded-full" />
        </div>

        <span className="hidden sm:inline-block text-xs font-semibold tracking-wider text-[#8D5B4C] bg-[#F4E8E3] px-4 py-1 rounded-full">
          LIMITED DEALS
        </span>
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="relative z-10 flex gap-6 overflow-hidden whitespace-nowrap py-4 px-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((img, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-[#EADBD6]/60 blur-2xl rounded-full scale-75 group-hover:scale-90 transition-all duration-700" />

            {/* IMAGE CARD */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-white p-1 shadow-lg border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
              <img
                src={`/${folder}/${img}.jpg`}
                alt={title}
                className="
                  h-[200px] md:h-[260px]
                  w-auto
                  object-cover
                  rounded-xl
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* SHINE */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* BASE SHADOW */}
            <div className="mt-3 mx-auto w-1/2 h-1 bg-black/10 blur-md rounded-full group-hover:w-3/4 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* EDGE FADES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20" />
    </section>
  );
}
