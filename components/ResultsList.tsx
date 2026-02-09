"use client";

import { isLoggedIn } from "@/src/utils/auth";
import { useRouter } from "next/navigation";

interface Props {
  data: any[];
  type: "Buses" | "Trains" | "Cabs";
}

export default function ResultsList({ data, type }: Props) {
  const router = useRouter();

  const ticketTypeMap: Record<string, string> = {
    Buses: "bus",
    Trains: "train",
    Cabs: "cab",
  };

  return (
    <div
      className="
        bg-white
        rounded-[28px]
        border
        border-gray-200
        shadow-xl
        h-[1360px]           /* FIXED HEIGHT */
        overflow-hidden
        flex
        flex-col
      "
    >
      {/* ================= HEADER ================= */}
      <div className="px-6 py-6 border-b bg-gradient-to-r from-[#FAF7F5] to-[#F3E6E1]">
        <h2 className="text-xl font-bold text-[#4A3A34] flex items-center gap-2">
          📋 {type} Results
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {data.length} options available
        </p>
      </div>

      {/* ================= SCROLLABLE LIST ================= */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 scrollbar-thin scrollbar-thumb-[#D7C1B8] scrollbar-track-transparent">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <span className="text-4xl mb-3">😕</span>
            <p className="text-sm">
              No {type.toLowerCase()} found for selected route
            </p>
          </div>
        ) : (
          data.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                border
                border-[#E6D5CE]
                rounded-2xl
                p-5
                flex
                justify-between
                items-center
                bg-white
                transition-all
                duration-300
                hover:shadow-2xl
                hover:-translate-y-1
              "
            >
              {/* -------- LEFT INFO -------- */}
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-[#4A3A34]">
                  {item.name}
                </h3>

                {item.from_city && item.to_city && (
                  <p className="text-sm text-gray-500">
                    📍 {item.from_city} → {item.to_city}
                  </p>
                )}

                {item.type && (
                  <p className="text-xs text-gray-400">
                    {item.type}
                  </p>
                )}

                {item.departure && (
                  <p className="text-sm text-gray-600">
                    🕒 {item.departure} • {item.duration}
                  </p>
                )}
              </div>

              {/* -------- RIGHT ACTION -------- */}
              <div className="text-right space-y-3">
                <div>
                  <p className="text-xl font-bold text-green-600">
                    ₹{item.price}
                  </p>
                  <p className="text-xs text-gray-500">
                    per seat
                  </p>
                </div>

                <button
            
  onClick={() => {
    if (!isLoggedIn()) {
      router.push("/auth/login");
      return;
    }
    router.push(`/ticket/${ticketTypeMap[type]}`);
  }}
 

                  className="
                    w-full
                    px-5
                    py-2.5
                    bg-gradient-to-r
                    from-[#8D5B4C]
                    to-[#73473A]
                    text-white
                    text-sm
                    font-semibold
                    rounded-xl
                    shadow-md
                    hover:shadow-xl
                    hover:scale-[1.03]
                    transition-all
                  "
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
