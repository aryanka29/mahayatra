"use client";

interface Props {
  data: any[];
  type: "Buses" | "Trains" | "Cabs";
}

export default function ResultsList({ data, type }: Props) {
  return (
    <div
      className="
        bg-white 
        rounded-xl 
        border 
        border-gray-200 
        shadow-md
        h-[1122px]        /* ✅ FIXED HEIGHT */
        overflow-hidden
        flex
        flex-col
      "
    >
      {/* HEADER */}
      <div className="px-5 py-4 border-b bg-[#FAF7F5]">
        <h2 className="text-lg font-semibold text-gray-800">
          {type} Results
        </h2>
        <p className="text-sm text-gray-500">
          {data.length} options available
        </p>
      </div>

      {/* SCROLLABLE RESULTS */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {data.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            No {type.toLowerCase()} found for selected route
          </div>
        ) : (
          data.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                border 
                rounded-lg 
                p-4 
                flex 
                justify-between 
                items-center
                hover:shadow-lg
                transition
                bg-white
              "
            >
              {/* LEFT INFO */}
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.from_city} → {item.to_city}
                </p>

                {item.type && (
                  <p className="text-xs text-gray-400">
                    {item.type}
                  </p>
                )}

                {item.departure && (
                  <p className="text-sm">
                    🕒 {item.departure} • {item.duration}
                  </p>
                )}
              </div>

              {/* RIGHT PRICE */}
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">
                  ₹{item.price}
                </p>
                <p className="text-xs text-gray-500">per seat</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
