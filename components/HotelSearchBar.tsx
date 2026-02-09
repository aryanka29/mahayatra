"use client";

import { useState } from "react";

export default function HotelSearchBar({ onSearch }: any) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4 border">

      <select className="rounded-xl border px-3 py-2" onChange={(e) => setDestination(e.target.value)}>
        <option>Destination</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Nagpur</option>
        <option>Nashik</option>
        <option>Aurangabad</option>
        <option>Solapur</option>
        <option>Kolhapur</option>
        <option>Satara</option>
        <option>Ahmednagar</option>
        <option>Akola</option>
        <option>Amravati</option>
        <option>Beed</option>
        <option>Buldhana</option>
        <option>Dhule</option>
        <option>Jalgaon</option>
        <option>Latur</option>
        <option>Nanded</option>
        <option>Raigad</option>
        <option>Ratnagiri</option>
        <option>Karad</option>
        <option>Lonavala</option>
        <option>Mahabaleshwar</option>
        <option>Pandharpur</option>
      </select>

      <input type="date" className="rounded-xl border px-3 py-2" onChange={(e) => setCheckIn(e.target.value)} />
      <input type="date" className="rounded-xl border px-3 py-2" onChange={(e) => setCheckOut(e.target.value)} />

      <select className="rounded-xl border px-3 py-2" onChange={(e) => setRoomType(e.target.value)}>
        <option>Room Type</option>
        <option>Single</option>
        <option>Double</option>
        <option>Suite</option>
      </select>

      <button
        onClick={() => onSearch({ destination, checkIn, checkOut, roomType })}
        className="bg-[#6B2F2F] hover:bg-[#552424] text-white rounded-xl font-semibold"
      >
        Search Hotels
      </button>
    </div>
  );
}
