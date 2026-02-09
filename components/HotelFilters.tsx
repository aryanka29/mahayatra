"use client";

export default function HotelFilters() {
  return (
    <aside className="bg-white rounded-2xl shadow-xl p-6 space-y-7 border border-[#EFE4E0]">

      <h3 className="text-xl font-semibold text-[#4A3A34]">
        🔍 Filters
      </h3>

      {/* PRICE */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          💰 Price per night
        </h4>
        <input type="range" min="1000" max="30000" className="w-full accent-[#6B2F2F]" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹1,000</span>
          <span>₹30,000+</span>
        </div>
      </div>

      {/* RATING */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          ⭐ Guest Rating
        </h4>
        {[9, 8, 7, 6].map((rate) => (
          <label key={rate} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-[#6B2F2F]" />
            {rate}+ Excellent
          </label>
        ))}
      </div>

      {/* AMENITIES */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          🛎 Amenities
        </h4>
        {["Breakfast", "Pool", "Free WiFi", "AC", "Parking", "Spa"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-[#6B2F2F]" />
            {item}
          </label>
        ))}
      </div>

      {/* ROOM TYPE */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          🛏 Room Type
        </h4>
        <select className="w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-[#6B2F2F]">
          <option>Any</option>
          <option>Single</option>
          <option>Double</option>
          <option>Family</option>
          <option>Luxury</option>
          <option>Suite</option>
        </select>
      </div>

      {/* REFUND */}
      <label className="flex items-center gap-2 text-sm font-medium">
        <input type="checkbox" className="accent-[#6B2F2F]" />
        Fully Refundable
      </label>

      <button className="w-full bg-[#6B2F2F] hover:bg-[#552424] text-white py-2 rounded-xl font-semibold transition">
        Apply Filters
      </button>
    </aside>
  );
}
