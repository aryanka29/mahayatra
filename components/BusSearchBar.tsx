"use client";

import { useState } from "react";

export default function BusSearchBar({ cities, onSearch }: any) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl shadow flex gap-4 items-end">
      <select
        className="border px-4 py-2 rounded w-full"
        onChange={(e) => setFrom(e.target.value)}
      >
        <option value="">Where are you at?</option>
        {cities.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        className="border px-4 py-2 rounded w-full"
        onChange={(e) => setTo(e.target.value)}
      >
        <option value="">Where to go?</option>
        {cities.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <button
        onClick={() => onSearch({ from, to })}
        className="bg-[#9A8C98] text-white px-6 py-2 rounded-lg"
      >
        Search Buses
      </button>
    </div>
  );
}
