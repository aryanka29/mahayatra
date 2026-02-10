"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  BadgePercent,
  ShieldCheck,
  MapPin,
  Zap,
  Headphones,
  Train,
} from "lucide-react";

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
      title: "Higher Confirmation Chances",
      description:
        "Smart alternate train suggestions improve confirmation probability.",
    },
    {
      title: "Secure Payments",
      description:
        "Encrypted UPI, cards & net banking transactions.",
    },
    {
      title: "Free Cancellation",
      description:
        "Cancel eligible tickets with quick refunds.",
    },
    {
      title: "Live Train Status",
      description:
        "Real-time running status with delay & platform alerts.",
    },
    {
      title: "Instant Refunds",
      description:
        "Fast refunds to original payment method.",
    },
    {
      title: "24×7 Rail Support",
      description:
        "Round-the-clock assistance for bookings & enquiries.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] min-h-screen pb-28">

      {/* OFFERS */}
      <OfferSlider title="Train Offers" folder="trains" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 mt-12 space-y-14">

        {/* SEARCH */}
        <div className="bg-white rounded-3xl shadow-xl border p-6">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 mb-4">
            <Train /> Search Train Tickets
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

        {/* FILTER + RESULTS */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}
          <div className="space-y-10">

            <div className="bg-white rounded-2xl shadow-md border p-5">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Filter size={18} /> Filters
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Class, timing & availability
              </p>
              <TrainFilters />
            </div>

            <div className="bg-white rounded-2xl shadow-md border p-5 h-[360px] lg:h-[850px]">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <BadgePercent size={18} /> Exclusive Deals
              </h3>
              <VerticalOfferSlider type="trains" />
            </div>
          </div>

          {/* RESULTS */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
              <ResultsList data={results} type="Trains" />
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 sm:p-12">
          <WhyChooseUs
            heading="Why Book Train Tickets on MahaYatra?"
            features={TRAIN_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
