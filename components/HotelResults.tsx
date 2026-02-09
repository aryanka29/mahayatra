"use client";

import { useRouter } from "next/navigation";

export default function HotelResults({ hotels }: any) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-xl border h-[760px] flex flex-col">

      <div className="px-6 py-4 border-b bg-[#FAF7F5]">
        <h2 className="text-xl font-semibold text-[#4A3A34]">
          Hotel Results
        </h2>
        <p className="text-sm text-gray-500">
          {hotels.length} stays available
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
        {hotels.map((hotel: any) => (
          <div
            key={hotel.id}
            className="flex gap-5 p-4 border rounded-xl hover:shadow-lg transition"
          >
            <img
              src={hotel.images[0]}
              className="w-48 h-32 object-cover rounded-xl"
            />

            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p className="text-sm text-gray-500">📍 {hotel.city}</p>
              <p className="text-sm">⭐ {hotel.rating}</p>

              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((a: string) => (
                  <span key={a} className="text-xs bg-[#F3E6E1] px-2 py-1 rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-green-600">
                ₹{hotel.pricePerNight}
              </p>
              <button
                onClick={() => router.push("/ticket/hotel")}
                className="mt-3 bg-[#6B2F2F] text-white px-4 py-2 rounded-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
