"use client";

import { useEffect, useState } from "react";

interface HotelImageSliderProps {
  images: string[];
}

export default function HotelImageSlider({ images }: HotelImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[260px] bg-gradient-to-br from-[#EADBD6] to-[#D8C5C0] rounded-2xl flex items-center justify-center text-gray-600 text-sm shadow">
        No Images Available
      </div>
    );
  }

  return (
    <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg group">

      {/* IMAGE */}
      <img
        src={images[index]}
        alt="Hotel"
        className="
          w-full h-full object-cover
          transition-all duration-700 ease-in-out
          scale-105 group-hover:scale-110
          opacity-100
        "
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

      {/* IMAGE INDICATORS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "bg-white w-4"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* SLIDE COUNT */}
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
        {index + 1}/{images.length}
      </div>
    </div>
  );
}
