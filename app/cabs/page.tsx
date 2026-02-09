"use client";

import { useState } from "react";
import OfferSlider from "@/components/OfferSlider";
import SearchBar from "@/components/SearchBar";
import ResultsList from "@/components/ResultsList";
import WhyChooseUs from "@/components/WhyChooseUs";
import CabFilters from "@/components/CabFilters";
import VerticalOfferSlider from "@/components/VerticalOfferSlider";

import cities from "@/data/cities";
import cabs from "@/data/cabs";

export default function CabsPage() {
  const [results, setResults] = useState(cabs.slice(0, 8));

  const handleSearch = ({ from, to }: any) => {
    const filtered = cabs.filter(
      (c) => c.from_city === from && c.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const CAB_FEATURES = [
    {
      title: "Wide Range of Cab Options 🚗",
      description:
        "Choose from hatchbacks, sedans, SUVs, luxury & outstation cabs.",
    },
    {
      title: "Transparent Pricing 💰",
      description:
        "No hidden charges. Pay exactly what you see at booking time.",
    },
    {
      title: "Verified Professional Drivers 🧑‍✈️",
      description:
        "Experienced & background-verified drivers for a safe journey.",
    },
    {
      title: "On-Time Pickup Guarantee ⏱️",
      description:
        "Reliable pickups with real-time driver tracking.",
    },
    {
      title: "Easy Cancellation & Refunds 🔁",
      description:
        "Cancel easily with instant refunds on eligible rides.",
    },
    {
      title: "24×7 Ride Support ☎️",
      description:
        "Customer support available anytime during your trip.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F4ECE9] via-[#EEDFD9] to-[#EADBD6] min-h-screen pb-28">

      {/* ================= TOP OFFERS ================= */}
      <div className="shadow-sm">
        <OfferSlider title="Cab Offers" folder="cabs" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1480px] mx-auto px-6 mt-12 space-y-12">

        {/* ================= SEARCH SECTION ================= */}
        <div className="bg-white rounded-[28px] shadow-xl border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🚕 Search Cabs
          </h2>

          <SearchBar
            cities={cities}
            placeholders={{
              from: "Pickup Location",
              to: "Drop Location",
            }}
            buttonText="Search Cabs"
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
                🎛 Filter Your Ride
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Choose cab type, price range & preferences
              </p>
              <CabFilters />
            </div>

            {/* OFFERS CARD */}
            <div className="bg-white rounded-[26px] shadow-lg border p-5 h-[830px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🎁 Exclusive Cab Deals
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Save more on city & outstation rides
              </p>
              <VerticalOfferSlider type="cabs" />
            </div>
          </div>

          {/* -------- RESULTS SECTION -------- */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-[28px] shadow-xl border overflow-hidden">
              <ResultsList data={results} type="Cabs" />
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="bg-white rounded-[32px] shadow-xl border p-12">
          <WhyChooseUs
            heading="Why Book Cabs on MahaYatra?"
            features={CAB_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
