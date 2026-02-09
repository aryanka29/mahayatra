"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    if (!hotels.length) return;

    setVisibleHotels(shuffle([...hotels]).slice(0, 6));

    const interval = setInterval(() => {
      setVisibleHotels(shuffle([...hotels]).slice(0, 6));
    }, 3500);

    return () => clearInterval(interval);
  }, [hotels]);

  return (
    <div
      className="
        bg-white
        rounded-xl
        border
        border-gray-200
        shadow-md
        h-[680px]
        overflow-hidden
        flex
        flex-col
      "
    >
      {/* HEADER */}
      <div className="px-5 py-4 border-b bg-[#FAF7F5]">
        <h3 className="text-lg font-semibold text-gray-800">
          Popular Hotels
        </h3>
        <p className="text-sm text-gray-500">
          Trending stays for you
        </p>
      </div>

      {/* SLIDER */}
      <div className="flex-1 overflow-hidden px-5 py-4 space-y-4">
        {visibleHotels.map((hotel, index) => (
          <div
            key={`${hotel.id}-${index}`}
            className="
              border
              rounded-lg
              p-4
              flex
              gap-4
              items-center
              bg-white
              hover:shadow-lg
              transition
            "
          >
            {/* IMAGE */}
            <img
              src={hotel.images?.[0] || "/hotel-placeholder.jpg"}
              alt={hotel.name}
              className="w-24 h-20 object-cover rounded-lg"
            />

            {/* DETAILS */}
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">
                {hotel.name}
              </h4>
              <p className="text-sm text-gray-500">{hotel.city}</p>
              <p className="text-sm">⭐ {hotel.rating}</p>
              <p className="font-semibold text-green-600">
                ₹{hotel.pricePerNight}/night
              </p>
            </div>

            {/* BOOK BUTTON */}
            <button
              onClick={() => router.push("/ticket/hotel")}
              className="
                px-3
                py-2
                bg-[#8D5B4C]
                hover:bg-[#73473A]
                text-white
                text-sm
                font-semibold
                rounded-lg
                transition
              "
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* UTILITY */
function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5);
}
