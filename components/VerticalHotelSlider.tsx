"use client";

import { useEffect, useState } from "react";

interface Hotel {
  id: number;
  name: string;
  city: string;
  rating: number;
  pricePerNight: number;
  images: string[];
}

interface Props {
  hotels: Hotel[];
}

export default function VerticalHotelSlider({ hotels }: Props) {
  const [visibleHotels, setVisibleHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    if (!hotels.length) return;

    const shuffle = (arr: Hotel[]) =>
      [...arr].sort(() => Math.random() - 0.5);

    setVisibleHotels(shuffle(hotels).slice(0, 6));

    const interval = setInterval(() => {
      setVisibleHotels(shuffle(hotels).slice(0, 6));
    }, 3500);

    return () => clearInterval(interval);
  }, [hotels]);

  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <h3 className="text-xl font-semibold mb-4">Popular Hotels</h3>

      <div className="space-y-5">
        {visibleHotels.map((hotel, index) => (
          <div key={`${hotel.id}-${index}`} className="flex gap-4">
            <img
              src={hotel.images?.[0] || "/hotel-placeholder.jpg"}
              className="w-28 h-24 object-cover rounded-lg"
              alt={hotel.name}
            />
            <div>
              <h4 className="font-semibold text-lg">{hotel.name}</h4>
              <p className="text-gray-500">{hotel.city}</p>
              <p>⭐ {hotel.rating}</p>
              <p className="font-bold text-green-600">
                ₹{hotel.pricePerNight}/night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

