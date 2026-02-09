"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type Passenger = {
  name: string;
  age: string;
  seat: string;
};

/* ---------------- PAGE ---------------- */

export default function TicketPage() {
  const { type } = useParams();
  const router = useRouter();

  const [passengers, setPassengers] = useState<Passenger[]>([
    { name: "", age: "", seat: "" },
  ]);

  const TITLES: Record<string, string> = {
    bus: "Bus Ticket",
    train: "Train Ticket",
    cab: "Cab Booking",
    hotel: "Hotel Booking",
  };

  /* ---------------- HANDLERS ---------------- */

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string
  ) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: "", age: "", seat: "" }]);
  };

  /* ---------------- SEAT OPTIONS ---------------- */

  const seatOptions =
    type === "bus"
      ? ["A1", "A2", "B1", "B2", "C1"]
      : type === "train"
      ? ["S1-21", "S1-22", "S1-23", "S2-10"]
      : type === "cab"
      ? ["Front Seat", "Rear Left", "Rear Right"]
      : ["Room 101", "Room 102", "Room 201"];

  /* ---------------- RENDER ---------------- */

  return (
    <div className="bg-[#EADBD6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">

        {/* HEADER */}
        <div className="border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {TITLES[type as string]} Details
          </h1>
          <p className="text-sm text-gray-500">
            Enter passenger details and seat selection
          </p>
        </div>

        {/* PASSENGER FORM */}
        <div className="space-y-6">
          {passengers.map((p, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 space-y-4 bg-[#FAF7F5]"
            >
              <h3 className="font-semibold text-gray-700">
                {type === "hotel" ? "Guest" : `Passenger ${index + 1}`}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* NAME */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={p.name}
                  onChange={(e) =>
                    updatePassenger(index, "name", e.target.value)
                  }
                  className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D5B4C]"
                />

                {/* AGE */}
                <input
                  type="number"
                  placeholder="Age"
                  value={p.age}
                  onChange={(e) =>
                    updatePassenger(index, "age", e.target.value)
                  }
                  className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8D5B4C]"
                />

                {/* SEAT / ROOM */}
                <select
                  value={p.seat}
                  onChange={(e) =>
                    updatePassenger(index, "seat", e.target.value)
                  }
                  className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#8D5B4C]"
                >
                  <option value="">Select {type === "hotel" ? "Room" : "Seat"}</option>
                  {seatOptions.map((seat) => (
                    <option key={seat} value={seat}>
                      {seat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* ADD PASSENGER */}
        {type !== "cab" && (
          <button
            onClick={addPassenger}
            className="text-sm font-medium text-[#8D5B4C] hover:underline"
          >
            + Add {type === "hotel" ? "Guest" : "Passenger"}
          </button>
        )}

        {/* TOTAL */}
        <div className="flex justify-between text-lg font-bold text-green-600 border-t pt-4">
          <span>Total Amount</span>
          <span>
            ₹
            {type === "hotel"
              ? "12,000"
              : type === "cab"
              ? "3,499"
              : type === "train"
              ? "1,250"
              : "899"}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-6 border-t">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Back
          </button>

          <button
            onClick={() => router.push("/payment")}
            className="px-6 py-2 bg-[#8D5B4C] hover:bg-[#73473A] text-white rounded-lg font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
