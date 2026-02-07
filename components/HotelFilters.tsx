"use client";

export default function HotelFilters() {
  return (<div className="h-full bg-white rounded-xl shadow p-4">

    <aside className="bg-white rounded-2xl shadow-lg p-5 space-y-6">

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-[#4A4A4A]">
        Filter by
      </h3>

      {/* pricePerNight RANGE */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          pricePerNight per night
        </h4>
        <input
          type="range"
          min="1000"
          max="30000"
          className="w-full accent-[#9A8C98]"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₹1,000</span>
          <span>₹30,000+</span>
        </div>
      </div>

      {/* STAR RATING */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          Guest rating
        </h4>
        <div className="space-y-2">
          {[9, 8, 7, 6].map((rate) => (
            <label key={rate} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-[#9A8C98]" />
              {rate}+ Excellent
            </label>
          ))}
        </div>
      </div>

      {/* AMENITIES */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          Amenities
        </h4>
        <div className="space-y-2">
          {[
            "Breakfast included",
            "Pool",
            "Free WiFi",
            "AC",
            "Parking",
            "Spa",
          ].map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-[#9A8C98]" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* ROOM TYPE */}
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-2">
          Room type
        </h4>
        <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9A8C98]">
          <option>Any</option>
          <option>Single Room</option>
          <option>Double Room</option>
          <option>Family Room</option>
          <option>Suite</option>
          <option>Luxury Room</option>
          <option>Pool View Room</option>
        </select>
      </div>

      {/* REFUNDABLE */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <input type="checkbox" className="accent-[#9A8C98]" />
          Fully refundable
        </label>
      </div>

      {/* APPLY BUTTON */}
      <button className="w-full rounded-lg bg-[#9A8C98] text-white py-2 font-semibold hover:bg-[#8a7c88] transition">
        Apply Filters
      </button>
    </aside>
    </div>
  );
}

