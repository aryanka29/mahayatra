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
  const [results, setResults] = useState(cabs.slice(0, 10));

  const handleSearch = ({ from, to }: any) => {
    const filtered = cabs.filter(
      (c) => c.from_city === from && c.to_city === to
    );
    setResults(filtered.length ? filtered : []);
  };

  const CAB_FEATURES = [
    {
      title: "Multiple Cab Options",
      description:
        "Choose from hatchback, sedan, SUV, luxury and outstation cabs.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges. Pay exactly what you see at booking time.",
    },
    {
      title: "Professional Drivers",
      description:
        "Experienced, verified drivers for a safe journey.",
    },
    {
      title: "On-Time Pickup",
      description:
        "Guaranteed timely pickup and smooth travel experience.",
    },
    {
      title: "Easy Cancellation",
      description:
        "Cancel easily with instant refunds on eligible bookings.",
    },
    {
      title: "24×7 Support",
      description:
        "Customer support available anytime during your journey.",
    },
  ];

  return (
    <div className="bg-[#EADBD6] min-h-screen flex flex-col">
      {/* TOP OFFERS */}
      <OfferSlider title="Cab Offers" folder="cabs" />

      {/* SEARCH BAR */}
      <div className="px-6 mt-6">
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

      {/* FILTER + RESULTS */}
      <div className="px-6 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          <CabFilters />
          <div className="h-[360px]">
            <VerticalOfferSlider type="cabs" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3">
          <ResultsList data={results} type="Cabs" />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full mt-16 px-6">
        <WhyChooseUs
          heading="Why Book Cabs on MahaYatra"
          features={CAB_FEATURES}
        />
      </div>
    </div>
  );
}
