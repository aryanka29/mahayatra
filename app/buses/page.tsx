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
  const [results, setResults] = useState(buses.slice(0, 10));

  const handleSearch = ({ from, to }: any) => {
    const filtered = buses.filter(
      (b) => b.from_city === from && b.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const BUS_FEATURES = [
    {
      title: "Wide Bus Network",
      description:
        "Choose from thousands of buses across Maharashtra with multiple operators and timings.",
    },
    {
      title: "Secure Payments",
      description:
        "UPI, cards and net banking with highly secure and encrypted transactions.",
    },
    {
      title: "Instant Ticket Confirmation",
      description:
        "Get confirmed bus tickets instantly with real-time seat availability.",
    },
    {
      title: "Easy Cancellation",
      description:
        "Hassle-free ticket cancellation with quick refunds to your original payment method.",
    },
    {
      title: "24×7 Support",
      description:
        "Get round-the-clock assistance for booking, cancellation and travel queries.",
    },
    {
      title: "Live Bus Tracking",
      description:
        "Track your bus location in real-time and stay updated on arrival timings.",
    },
  ];

  return (
    <div className="bg-[#EADBD6] min-h-screen flex flex-col">
      {/* TOP OFFERS */}
      <OfferSlider title="Bus Offers" folder="buses" />

      {/* SEARCH BAR */}
      <div className="px-6 mt-6">
        <SearchBar
          cities={cities}
          placeholders={{
            from: "Where are you at?",
            to: "Where to go?",
          }}
          buttonText="Search Buses"
          onSearch={handleSearch}
        />
      </div>

      {/* FILTER + RESULTS */}
      <div className="px-6 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <BusFilters />

          <div className="h-[360px]">
            <VerticalOfferSlider type="buses" />
          </div>
        </div>

        {/* RIGHT RESULTS */}
        <div className="md:col-span-3">
          <ResultsList data={results} type="Buses" />
        </div>
      </div>

      {/* WHY CHOOSE US — FULL WIDTH */}
      <div className="w-full bg-[#EADBD6] mt-16 px-6">
        <WhyChooseUs
          heading="Why Book Bus Tickets on MahaYatra"
          features={BUS_FEATURES}
        />
      </div>

      {/* FOOTER WILL COME AFTER THIS */}
    </div>
  );
}
