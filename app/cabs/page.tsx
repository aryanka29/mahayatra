"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Tag,
  Car,
  Wallet,
  ShieldCheck,
  Clock,
  RefreshCcw,
  Headphones,
} from "lucide-react";

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
      title: "Wide Range of Cab Options",
      description:
        "Choose from hatchbacks, sedans, SUVs, luxury and outstation cabs.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges. Pay exactly what you see at booking time.",
    },
    {
      title: "Verified Professional Drivers",
      description:
        "Experienced and background-verified drivers for safe journeys.",
    },
    {
      title: "On-Time Pickup Guarantee",
      description:
        "Reliable pickups with real-time driver tracking.",
    },
    {
      title: "Easy Cancellation & Refunds",
      description:
        "Cancel easily with instant refunds on eligible rides.",
    },
    {
      title: "24×7 Ride Support",
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
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 mt-12 space-y-14">

        {/* ================= SEARCH SECTION ================= */}
        <div className="bg-white rounded-3xl shadow-xl border p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Search size={20} /> Search Cabs
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* -------- LEFT SIDEBAR -------- */}
          <div className="space-y-10">

            {/* FILTER CARD */}
            <div className="bg-white rounded-2xl shadow-md border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                <Filter size={18} /> Filter Your Ride
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Choose cab type, pricing and preferences
              </p>
              <CabFilters />
            </div>

            {/* OFFERS CARD */}
            <div className="bg-white rounded-2xl shadow-md border p-6 h-[360px] lg:h-[830px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                <Tag size={18} /> Exclusive Cab Deals
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Save more on city and outstation rides
              </p>
              <VerticalOfferSlider type="cabs" />
            </div>
          </div>

          {/* -------- RESULTS SECTION -------- */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
              <ResultsList data={results} type="Cabs" />
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 sm:p-12">
          <WhyChooseUs
            heading="Why Book Cabs on MahaYatra?"
            features={[
              {
                title: "Multiple Cab Categories",
                description:
                  "From budget rides to luxury cars for every travel need.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "Clear fare breakup with no last-minute surprises.",
              },
              {
                title: "Safe & Verified Drivers",
                description:
                  "Professionally trained and verified drivers.",
              },
              {
                title: "On-Time Pickup",
                description:
                  "Accurate pickup times with live tracking.",
              },
              {
                title: "Easy Refunds",
                description:
                  "Quick refunds on eligible cancellations.",
              },
              {
                title: "24×7 Support",
                description:
                  "Assistance available anytime during your ride.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
