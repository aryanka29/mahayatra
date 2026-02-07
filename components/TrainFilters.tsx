"use client";

export default function TrainFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 h-fit">
      <h3 className="font-semibold text-lg">Filter Trains</h3>

      {/* Class */}
      <div>
        <p className="font-medium mb-2">Class</p>
        <div className="space-y-1 text-sm">
          <label className="flex gap-3"><input type="checkbox" /> Sleeper</label>
          <label className="flex gap-3"><input type="checkbox" /> 3A</label>
          <label className="flex gap-3"><input type="checkbox" /> 2A</label>
          <label className="flex gap-3"><input type="checkbox" /> CC</label>
        </div>
      </div>
      {/* Price */}
      <div>
        <p className="font-medium mb-2">Price Range</p>
        <input type="range" min={200} max={3000} className="w-full" />
      </div>

      {/* Quota */}
      <div>
        <p className="font-medium mb-2">Quota</p>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" /> General
        </label>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" /> Tatkal
        </label>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" /> Ladies
        </label>
        <label className="flex gap-3 text-sm">
          <input type="checkbox" /> Local
        </label>
      </div>
    </div>
  );
}
