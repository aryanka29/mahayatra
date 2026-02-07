"use client";

import { useState } from "react";

type Props = {
  cities: string[];
  placeholders: {
    from: string;
    to: string;
  };
  buttonText: string;
  onSearch: (data: { from: string; to: string; date: string }) => void;
};

export default function SearchBar({
  cities,
  placeholders,
  buttonText,
  onSearch,
}: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

      {/* FROM */}
      <div>
        <label className="text-sm text-gray-600">{placeholders.from}</label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#9A8C98]"
        >
          <option value="">Select city</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* TO */}
      <div>
        <label className="text-sm text-gray-600">{placeholders.to}</label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#9A8C98]"
        >
          <option value="">Select city</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* DATE */}
      <div>
        <label className="text-sm text-gray-600">Journey Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#9A8C98]"
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={() => onSearch({ from, to, date })}
        className="bg-[#9A8C98] text-white py-3 rounded-lg font-semibold"
      >
        {buttonText}
      </button>
    </div>
  );
}
