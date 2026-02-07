"use client";

export default function BusFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 h-fit">
      <h3 className="font-semibold text-lg">Filter Buses</h3>

      {/* Bus Type */}
      <div className="space-y-1">
        <p className="font-medium mb-2">Bus Type</p>
        <div className="space-y-1 text-sm">
          <label className="flex gap-2">
            <input type="checkbox" /> AC
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Non-AC
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Sleeper
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Seater
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price Range</p>
        <input type="range" min={200} max={3000} className="w-full" />
      </div>

      {/* Departure */}
      <div>
        <p className="font-medium mb-2">Departure Time</p>
        <div className="space-y-1 text-sm">
          <label className="flex gap-2">
            <input type="checkbox" /> Morning
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Afternoon
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Night
          </label>
        </div>
      </div>
    </div>
  );
}
