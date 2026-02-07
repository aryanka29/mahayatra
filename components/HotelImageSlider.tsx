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
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[260px] bg-[#EADBD6] rounded-xl flex items-center justify-center text-gray-500">
        No Images Available
      </div>
    );
  }

  return (
    <div className="w-full h-[320px] rounded-xl overflow-hidden bg-white shadow">
      <img
        src={images[index]}
        alt="Hotel"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
