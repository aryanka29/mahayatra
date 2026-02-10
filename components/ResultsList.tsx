"use client";

import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/src/utils/auth";
import {
  MapPin,
  Clock,
  IndianRupee,
  Ticket,
} from "lucide-react";

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
        rounded-3xl
        border border-[#E6D5CE]
        shadow-xl
        flex flex-col
        max-h-[calc(500vh-30px)]
      "
    >
      {/* ================= HEADER ================= */}
      <div className="px-4 sm:px-6 py-4 sm:py-6 border-b bg-gradient-to-r from-[#FAF7F5] to-[#F3E6E1]">
        <h2 className="text-lg sm:text-xl font-bold text-[#4A3A34] flex items-center gap-2">
          <Ticket size={20} />
          {type} Results
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {data.length} options available
        </p>
      </div>

      {/* ================= SCROLLABLE LIST ================= */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-[#D7C1B8] scrollbar-track-transparent">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center py-16">
            <Ticket size={40} className="mb-3 opacity-50" />
            <p className="text-sm">
              No {type.toLowerCase()} found for selected route
            </p>
          </div>
        ) : (
          data.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                border border-[#E6D5CE]
                rounded-2xl
                p-4 sm:p-5
                bg-white
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
              "
            >
              {/* -------- LEFT INFO -------- */}
              <div className="space-y-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#4A3A34]">
                  {item.name}
                </h3>

                {item.from_city && item.to_city && (
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={14} />
                    {item.from_city} → {item.to_city}
                  </p>
                )}

                {item.departure && (
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Clock size={14} />
                    {item.departure} • {item.duration}
                  </p>
                )}
              </div>

              {/* -------- RIGHT ACTION -------- */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:gap-2">
                <div className="text-left sm:text-right">
                  <p className="text-lg sm:text-xl font-bold text-green-600 flex items-center gap-1">
                    <IndianRupee size={16} />
                    {item.price}
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
                    w-full sm:w-auto
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
                  Book Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
