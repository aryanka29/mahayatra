"use client";
import { useState } from "react";

const DESTINATIONS = [
  "Mumbai","Pune","Nagpur","Nashik","Aurangabad",
  "Kolhapur","Solapur","Satara","Ahmednagar",
  "Latur","Nanded","Raigad","Ratnagiri",
  "Lonavala","Mahabaleshwar","Pandharpur",
  "Akola","Amravati","Beed","Jalgaon"
];

const ROOM_TYPES = [
  "Single Room",
  "Double Room",
  "Family Room",
  "Luxury Room",
  "Pool View Room",
  "Suite",
];

export default function HotelSearchBar({ onSearch }: any) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = () => {
    onSearch({
      destination,
      checkIn,
      checkOut,
      roomType,
    });
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Destination */}
      <select
        className="border p-2 rounded"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select destination</option>
        {DESTINATIONS.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Check-in */}
      <input
        type="date"
        className="border p-2 rounded"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />

      {/* Check-out */}
      <input
        type="date"
        className="border p-2 rounded"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />

      {/* Room type */}
      <select
        className="border p-2 rounded"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      >
        <option value="">Room type</option>
        {ROOM_TYPES.map((room) => (
          <option key={room} value={room}>
            {room}
          </option>
        ))}
      </select>

      {/* Search */}
      <button
        onClick={handleSubmit}
        className="bg-[#6B2F2F] text-white rounded font-semibold"
      >
        Search Hotels
      </button>
    </div>
  );
}
