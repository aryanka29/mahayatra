"use client";

import { useState } from "react";
import OfferSlider from "@/components/OfferSlider";
import SearchBar from "@/components/SearchBar";
import ResultsList from "@/components/ResultsList";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrainFilters from "@/components/TrainFilters";
import VerticalOfferSlider from "@/components/VerticalOfferSlider";

import cities from "@/data/cities";
import trains from "@/data/trains";

export default function TrainsPage() {
  const [results, setResults] = useState(trains.slice(0, 8));

  const handleSearch = ({ from, to }: any) => {
    const filtered = trains.filter(
      (t) => t.from_city === from && t.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const TRAIN_FEATURES = [
    {
      title: "Higher Confirmation Chances 🚆",
      description:
        "Improve your ticket confirmation probability with alternate train suggestions.",
    },
    {
      title: "100% Secure Payments 🔒",
      description:
        "Pay safely using UPI, cards or net banking with encrypted transactions.",
    },
    {
      title: "Free Cancellation 💸",
      description:
        "Enjoy free cancellation and full refunds on eligible train tickets.",
    },
    {
      title: "Live Train Status 📍",
      description:
        "Track real-time running status and get platform & delay alerts.",
    },
    {
      title: "Instant Refunds ⚡",
      description:
        "Get refunds quickly and hassle-free to your original payment method.",
    },
    {
      title: "24×7 Rail Support ☎️",
      description:
        "Round-the-clock assistance for bookings, cancellations & enquiries.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F4ECE9] via-[#EEDFD9] to-[#EADBD6] min-h-screen pb-28">

      {/* ================= TOP OFFERS ================= */}
      <div className="shadow-sm">
        <OfferSlider title="Train Offers" folder="trains" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1480px] mx-auto px-6 mt-12 space-y-12">

        {/* ================= SEARCH SECTION ================= */}
        <div className="bg-white rounded-[28px] shadow-xl border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🚆 Search Train Tickets
          </h2>

          <SearchBar
            cities={cities}
            placeholders={{
              from: "From Station",
              to: "To Station",
            }}
            buttonText="Search Trains"
            onSearch={handleSearch}
          />
        </div>

        {/* ================= FILTER + RESULTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* -------- LEFT SIDEBAR -------- */}
          <div className="space-y-10">

            {/* FILTER CARD */}
            <div className="bg-white rounded-[26px] shadow-lg border p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🎛 Filter & Preferences
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Filter trains by class, timing & availability
              </p>
              <TrainFilters />
            </div>

            {/* OFFERS CARD */}
            <div className="bg-white rounded-[26px] shadow-lg border p-5 h-[850px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🎁 Exclusive Train Deals
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Special discounts on IRCTC bookings
              </p>
              <VerticalOfferSlider type="trains" />
            </div>
          </div>

          {/* -------- RESULTS SECTION -------- */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-[28px] shadow-xl border overflow-hidden">
              <ResultsList data={results} type="Trains" />
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="bg-white rounded-[32px] shadow-xl border p-12">
          <WhyChooseUs
            heading="Why Book Train Tickets on MahaYatra?"
            features={TRAIN_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
