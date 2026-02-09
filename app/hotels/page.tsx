"use client";

import { useEffect, useState } from "react";

import HotelSearchBar from "@/components/HotelSearchBar";
import HotelSortBar from "@/components/HotelSortBar";
import HotelFilters from "@/components/HotelFilters";
import HotelResults from "@/components/HotelResults";
import VerticalHotelSlider from "@/components/VerticalHotelSlider";
import WhyChooseUs from "@/components/WhyChooseUs";

import hotelsData from "@/data/hotels";

/* ---------------- TYPES ---------------- */

type Hotel = {
  id: number;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  amenities: string[];
  rooms?: { type: string; capacity: number }[];
  images: string[];
};

type HotelSearchData = {
  destination: string;
};

/* ---------------- FEATURES ---------------- */

const HOTEL_FEATURES = [
  {
    title: "🏷 Best Price Guarantee",
    description:
      "Book hotels at the lowest available prices with exclusive MahaYatra offers.",
  },
  {
    title: "🛏 Multiple Room Categories",
    description:
      "Choose from single, double, family, luxury and premium rooms.",
  },
  {
    title: "🔄 Free Cancellation",
    description:
      "Flexible cancellation with instant refunds on select hotels.",
  },
  {
    title: "⭐ Verified Guest Reviews",
    description:
      "Make informed choices using genuine guest ratings and reviews.",
  },
  {
    title: "🔐 Secure Payments",
    description:
      "UPI, cards & net banking with fully encrypted transactions.",
  },
  {
    title: "📞 24×7 Support",
    description:
      "Our hotel booking experts are available round-the-clock.",
  },
];

/* ---------------- PAGE ---------------- */

export default function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>(hotelsData);
  const [sortBy, setSortBy] = useState("recommended");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setHotels(hotelsData);
    setIsSearched(false);
  }, []);

  const handleSearch = (searchData: HotelSearchData) => {
    setIsSearched(true);

    const filtered = hotelsData.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchData.destination.toLowerCase())
    );

    setHotels(filtered);
  };

  return (
    <div className="bg-gradient-to-b from-[#EFE4E0] to-[#EADBD6] min-h-screen pb-20">

      {/* ================= HERO / SEARCH ================= */}
      <div className="max-w-[1400px] mx-auto px-6 pt-10 space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3A34]">
            🏨 Find the Perfect Stay
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hotels, resorts & luxury stays at the best prices across India
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 border">
          <HotelSearchBar onSearch={handleSearch} />
        </div>

        <div className="bg-white rounded-2xl shadow-md border px-4 py-3">
          <HotelSortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* FILTERS */}
          <div className="sticky top-28 h-fit">
            <HotelFilters />
          </div>

          {/* RESULTS */}
          <div className="md:col-span-3 space-y-6">

            {/* DISCOVERY SLIDER */}
            {!isSearched && (
              <div >
                <h2 className="text-xl font-semibold text-[#4A3A34] mb-4">
                  ✨ Popular Hotels & Trending Stays
                </h2>
                <VerticalHotelSlider hotels={hotelsData} />
              </div>
            )}

            {/* SEARCH RESULTS */}
            {isSearched && (
              <div className="bg-white rounded-3xl shadow-xl border">
                <HotelResults hotels={hotels} sortBy={sortBy} />
              </div>
            )}
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-12 border">
          <WhyChooseUs
            heading="Why Book Hotels on MahaYatra?"
            features={HOTEL_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
