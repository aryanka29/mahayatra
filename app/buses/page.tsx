"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Tag,
  ShieldCheck,
  Zap,
  Wallet,
  MapPin,
  Headphones,
  Bus,
} from "lucide-react";

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
      title: "India’s Trusted Bus Booking",
      description:
        "Book verified government and private buses with accurate schedules and transparent pricing.",
    },
    {
      title: "Secure & Flexible Payments",
      description:
        "Pay safely using UPI, cards and net banking with bank-grade encryption.",
    },
    {
      title: "Instant Ticket Confirmation",
      description:
        "Real-time seat availability with immediate booking confirmation.",
    },
    {
      title: "Easy Cancellation & Refunds",
      description:
        "Cancel eligible tickets effortlessly with fast refunds.",
    },
    {
      title: "Live Bus Tracking",
      description:
        "Track your bus in real-time and stay updated on arrival status.",
    },
    {
      title: "24×7 Customer Support",
      description:
        "Dedicated support team available anytime during your journey.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F6EEEB] via-[#EEDFD9] to-[#EADBD6] min-h-screen pb-32">

      {/* ================= TOP OFFERS ================= */}
      <div className="shadow-sm">
        <OfferSlider title="Trending Bus Offers" folder="buses" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 mt-12 space-y-14">

        {/* ================= SEARCH CARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl border p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Search size={20} /> Search Bus Tickets
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

        {/* ================= FILTER + RESULTS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* -------- LEFT PANEL -------- */}
          <div className="space-y-10">

            {/* FILTERS */}
            <div className="bg-white rounded-2xl shadow-md border p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                <Filter size={18} /> Filters & Preferences
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Refine buses by price, type and timings
              </p>
              <BusFilters />
            </div>

            {/* VERTICAL OFFERS */}
            <div className="bg-white rounded-2xl shadow-md border p-6 h-[360px] lg:h-[840px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                <Tag size={18} /> Exclusive Deals
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Handpicked savings for your journey
              </p>
              <VerticalOfferSlider type="buses" />
            </div>
          </div>

          {/* -------- RESULTS -------- */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
              <ResultsList data={results} type="Buses" />
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 sm:p-12">
          <WhyChooseUs
            heading="Why Book Bus Tickets on MahaYatra?"
            features={[
              {
                title: "Wide Bus Network",
                description:
                  "Access thousands of routes across India with trusted operators.",
              },
              {
                title: "Secure Payments",
                description:
                  "Encrypted and safe payments via UPI, cards and net banking.",
              },
              {
                title: "Instant Confirmation",
                description:
                  "Book seats instantly with real-time availability.",
              },
              {
                title: "Hassle-Free Refunds",
                description:
                  "Easy cancellation with quick refunds on eligible bookings.",
              },
              {
                title: "Live Tracking",
                description:
                  "Track buses and stay informed throughout your journey.",
              },
              {
                title: "24×7 Support",
                description:
                  "Dedicated travel support whenever you need help.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
