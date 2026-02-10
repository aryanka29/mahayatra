"use client";

import { useEffect, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  BadgePercent,
  BedDouble,
  RefreshCcw,
  Star,
  ShieldCheck,
  Headphones,
  Building2,
} from "lucide-react";

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
  images: string[];
};

type HotelSearchData = {
  destination: string;
};

/* ---------------- FEATURES ---------------- */
const HOTEL_FEATURES = [
  {
    title: "Best Price Guarantee",
    description:
      "Get the lowest hotel prices with exclusive MahaYatra offers.",
  },
  {
    title: "Multiple Room Categories",
    description:
      "Single, double, family, luxury and premium stays available.",
  },
  {
    title: "Free Cancellation",
    description:
      "Flexible cancellation with instant refunds on select hotels.",
  },
  {
    title: "Verified Guest Reviews",
    description:
      "Book confidently using trusted guest ratings and reviews.",
  },
  {
    title: "Secure Payments",
    description:
      "Encrypted UPI, card and net banking transactions.",
  },
  {
    title: "24×7 Support",
    description:
      "Hotel booking assistance anytime, anywhere.",
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
    <div className="bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] min-h-screen pb-24">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 pt-10 space-y-10">

        {/* HERO */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#4A3A34] flex justify-center gap-2">
            <Building2 /> Find Your Perfect Stay
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover hotels, resorts & luxury stays across India
          </p>
        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-3xl shadow-xl border p-5 sm:p-6">
          <HotelSearchBar onSearch={handleSearch} />
        </div>

        {/* SORT */}
        <div className="bg-white rounded-2xl shadow border p-4">
          <HotelSortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* FILTERS */}
          <div className="lg:sticky lg:top-28 h-fit bg-white rounded-2xl shadow-md border p-4">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <SlidersHorizontal size={18} /> Filters
            </h3>
            <HotelFilters />
          </div>

          {/* RESULTS */}
          <div className="lg:col-span-3 space-y-8">

            {!isSearched && (
              <div>
                <h2 className="text-lg font-semibold text-[#4A3A34] mb-4 flex items-center gap-2">
                  <Star size={18} /> Popular & Trending Hotels
                </h2>
                <VerticalHotelSlider hotels={hotelsData} />
              </div>
            )}

            {isSearched && (
              <div className="bg-white rounded-3xl shadow-xl border">
                <HotelResults hotels={hotels} sortBy={sortBy} />
              </div>
            )}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white rounded-3xl shadow-xl border p-8 sm:p-12">
          <WhyChooseUs
            heading="Why Book Hotels on MahaYatra?"
            features={HOTEL_FEATURES}
          />
        </div>
      </div>
    </div>
  );
}
