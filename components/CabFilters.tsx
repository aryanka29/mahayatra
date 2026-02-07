"use client";

export default function CabFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 h-fit">
      <h3 className="font-semibold text-lg">Filter Cabs</h3>

      {/* Car Type */}
      <div>
        <p className="font-medium mb-2">Car Type</p>
        <div className="space-y-1 text-sm">
          <label className="flex gap-2"><input type="checkbox" /> Hatchback</label>
          <label className="flex gap-2"><input type="checkbox" /> Sedan</label>
          <label className="flex gap-2"><input type="checkbox" /> SUV</label>
          <label className="flex gap-2"><input type="checkbox" /> Luxury</label>
        </div>
      </div>
      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price Range</p>
        <input type="range" min={200} max={3000} className="w-full" />
      </div>

      {/* Trip Type */}
      <div>
        <p className="font-medium mb-2">Trip Type</p>
        <label className="flex gap-2 text-sm">
          <input type="checkbox" /> One Way
        </label>
        <label className="flex gap-2 text-sm">
          <input type="checkbox" /> Round Trip
        </label>
      </div>
    </div>
  );
}
