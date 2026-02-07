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
  const [results, setResults] = useState(trains.slice(0, 10));

  const handleSearch = ({ from, to }: any) => {
    const filtered = trains.filter(
      (t) => t.from_city === from && t.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const TRAIN_FEATURES = [
    {
      title: "Confirmed Ticket Chances",
      description:
        "Increase confirmation probability with alternate train suggestions.",
    },
    {
      title: "Secure Payments",
      description:
        "UPI, cards and net banking with fully encrypted transactions.",
    },
    {
      title: "Free Cancellation",
      description:
        "Get full refunds with free cancellation on selected tickets.",
    },
    {
      title: "Live Train Status",
      description:
        "Track your train location and running status in real time.",
    },
    {
      title: "Instant Refunds",
      description:
        "Fast and hassle-free refunds directly to your payment method.",
    },
    {
      title: "24×7 Support",
      description:
        "Round-the-clock customer support for booking and enquiries.",
    },
  ];

  return (
    <div className="bg-[#EADBD6] min-h-screen flex flex-col">
      {/* TOP OFFERS */}
      <OfferSlider title="Train Offers" folder="trains" />

      {/* SEARCH BAR */}
      <div className="px-6 mt-6">
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
      <div className="px-6 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          <TrainFilters />
          <div className="h-[360px]">
            <VerticalOfferSlider type="trains" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3">
          <ResultsList data={results} type="Trains" />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full mt-16 px-6">
        <WhyChooseUs
          heading="Why Book Train Tickets on MahaYatra"
          features={TRAIN_FEATURES}
        />
      </div>
    </div>
  );
}
