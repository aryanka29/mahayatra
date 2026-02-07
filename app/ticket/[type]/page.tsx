"use client";

import { useParams, useRouter } from "next/navigation";

/* ---------------- REUSABLE UI ---------------- */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}

function Price({ value }: { value: string }) {
  return (
    <div className="flex justify-between text-lg font-bold text-green-600 pt-4">
      <span>Total Amount</span>
      <span>{value}</span>
    </div>
  );
}

/* ---------------- TICKET TYPES ---------------- */

function BusTicket() {
  return (
    <div className="space-y-4">
      <Field label="From" value="Pune" />
      <Field label="To" value="Mumbai" />
      <Field label="Departure" value="07:30 AM" />
      <Field label="Bus Type" value="AC Sleeper" />
      <Field label="Seat" value="A1, A2" />
      <Price value="₹899" />
    </div>
  );
}

function TrainTicket() {
  return (
    <div className="space-y-4">
      <Field label="Train Name" value="Vande Bharat Express" />
      <Field label="From" value="Mumbai" />
      <Field label="To" value="Pune" />
      <Field label="Class" value="Chair Car" />
      <Field label="Passengers" value="2 Adults" />
      <Price value="₹1,250" />
    </div>
  );
}

function CabTicket() {
  return (
    <div className="space-y-4">
      <Field label="Pickup" value="Pune Airport" />
      <Field label="Drop" value="Mumbai" />
      <Field label="Cab Type" value="SUV" />
      <Field label="Distance" value="150 km" />
      <Price value="₹3,499" />
    </div>
  );
}

function HotelTicket() {
  return (
    <div className="space-y-4">
      <Field label="Hotel Name" value="MahaYatra Resort" />
      <Field label="City" value="Lonavala" />
      <Field label="Room Type" value="Luxury Room" />
      <Field label="Guests" value="2 Adults" />
      <Field label="Nights" value="2" />
      <Price value="₹12,000" />
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function TicketPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();

  const TITLES: Record<string, string> = {
    bus: "Bus Ticket",
    train: "Train Ticket",
    cab: "Cab Booking",
    hotel: "Hotel Booking",
  };

  return (
    <div className="bg-[#EADBD6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">

        {/* HEADER */}
        <div className="border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {TITLES[type] ?? "Ticket"} Details
          </h1>
          <p className="text-sm text-gray-500">
            Review your booking before payment
          </p>
        </div>

        {/* DYNAMIC CONTENT */}
        {type === "bus" && <BusTicket />}
        {type === "train" && <TrainTicket />}
        {type === "cab" && <CabTicket />}
        {type === "hotel" && <HotelTicket />}

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-4 pt-6 border-t">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Back
          </button>

          <button
            className="px-6 py-2 bg-[#8D5B4C] hover:bg-[#73473A] text-white rounded-lg font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
