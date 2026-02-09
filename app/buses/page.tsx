"use client";

import { useState } from "react";
import OfferSlider from "@/components/OfferSlider";
import SearchBar from "@/components/SearchBar";
import ResultsList from "@/components/ResultsList";
import WhyChooseUs from "@/components/WhyChooseUs";
import BusFilters from "@/components/BusFilters";
import VerticalOfferSlider from "@/components/VerticalOfferSlider";

import cities from "@/data/cities";
import buses from "@/data/buses";

export default function BusesPage() {
  const [results, setResults] = useState(buses.slice(0, 8));

  const handleSearch = ({ from, to }: any) => {
    const filtered = buses.filter(
      (b) => b.from_city === from && b.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const BUS_FEATURES = [
    {
      title: "🚌 India’s Trusted Bus Booking",
      description:
        "Book verified government & private buses with accurate schedules and transparent pricing.",
    },
    {
      title: "🔐 Secure & Flexible Payments",
      description:
        "UPI, cards & net banking with bank-grade security and encryption.",
    },
    {
      title: "⚡ Instant Confirmation",
      description:
        "Real-time seat availability with immediate ticket confirmation.",
    },
    {
      title: "💸 Easy Cancellation & Refunds",
      description:
        "Cancel eligible tickets easily with fast refunds.",
    },
    {
      title: "📍 Live Bus Tracking",
      description:
        "Track your bus in real-time and stay updated on arrival status.",
    },
    {
      title: "📞 24×7 Customer Support",
      description:
        "Dedicated support available anytime for your journey.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F6EEEB] via-[#EEDFD9] to-[#EADBD6] min-h-screen pb-32">

      {/* ===== TOP OFFERS ===== */}
      <div className="shadow-sm">
        <OfferSlider title="🔥 Trending Bus Offers" folder="buses" />
      </div>

      {/* ===== MAIN CONTAINER ===== */}
      <div className="max-w-[1480px] mx-auto px-6 mt-14 space-y-14">

        {/* SEARCH CARD */}
        <div className="bg-white rounded-[30px] shadow-2xl border p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🔍 Search Bus Tickets
          </h2>

          <SearchBar
            cities={cities}
            placeholders={{
              from: "From City",
              to: "To City",
            }}
            buttonText="Search Buses"
            onSearch={handleSearch}
          />
        </div>

        {/* FILTER + RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LEFT PANEL */}
          <div className="space-y-10">
            {/* FILTERS */}
            <div className="bg-white rounded-[26px] shadow-lg border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                🎯 Filters & Preferences
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Narrow results by price, bus type & timings
              </p>
              <BusFilters />
            </div>

            {/* OFFERS */}
            <div className="bg-white rounded-[26px] shadow-lg border p-6 h-[840px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                🎁 Exclusive Deals
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Handpicked savings just for you
              </p>
              <VerticalOfferSlider type="buses" />
            </div>
          </div>

          {/* RESULTS */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-[30px] shadow-2xl border overflow-hidden">
              <ResultsList data={results} type="Buses" />
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white rounded-[32px] shadow-xl border p-12">
          <WhyChooseUs
            heading="Why Book Bus Tickets on MahaYatra?"
            features={BUS_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
