"use client";

import { useEffect, useState } from "react";

import HotelSearchBar from "@/components/HotelSearchBar";
import HotelSortBar from "@/components/HotelSortBar";
import HotelFilters from "@/components/HotelFilters";
import HotelResults from "@/components/HotelResults";
import VerticalHotelSlider from "@/components/VerticalHotelSlider";
import HotelImageSlider from "@/components/HotelImageSlider";
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
    title: "Best Price Guarantee",
    description:
      "Get hotels at the best available prices with exclusive MahaYatra deals.",
  },
  {
    title: "Multiple Room Types",
    description:
      "Choose from single, double, family, luxury and premium room categories.",
  },
  {
    title: "Free Cancellation Options",
    description:
      "Flexible cancellation on select hotels with instant refunds.",
  },
  {
    title: "Verified Guest Reviews",
    description:
      "Make informed choices with genuine guest ratings and reviews.",
  },
  {
    title: "Secure Payments",
    description:
      "Safe and secure hotel bookings with UPI and multiple payment options.",
  },
  {
    title: "24×7 Customer Support",
    description:
      "Support team available anytime for hotel booking assistance.",
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
    <div className="bg-[#EADBD6] min-h-screen pb-16 centered">
      <div className="max-w-[1400px] mx-auto px-6 pt-6 space-y-6">

        {/* SEARCH */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <HotelSearchBar onSearch={handleSearch} />
        </div>

        {/* SORT */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <HotelSortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* FILTERS */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 h-fit">
            <HotelFilters />
          </div>

          {/* RESULTS – SAME STRUCTURE AS RESULTSLIST */}
          <div className="md:col-span-3">
            <div
              className="
                bg-white 
                rounded-xl 
                border 
                border-gray-200 
                shadow-md
                h-[980px]
                overflow-hidden
                flex
                flex-col
                centered
              "
            >
              {/* HEADER */}
              <div className="px-5 py-4 border-b bg-[#FAF7F5]">
                <h2 className="text-lg font-semibold text-gray-800">
                  Hotel Results
                </h2>
                <p className="text-sm text-gray-500">
                  {hotels.length} options available
                </p>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="flex-1 overflow-y-auto px-5 py-4">
                {!isSearched ? (
                  <VerticalHotelSlider hotels={hotelsData} />
                ) : (
                  <div className="space-y-6">
                    <HotelResults hotels={hotels} sortBy={sortBy} />
                    <HotelImageSlider images={hotels[0]?.images ?? []} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US – FULL WIDTH */}
        <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <WhyChooseUs
            heading="Why Book Hotels on MahaYatra"
            features={HOTEL_FEATURES}
          />
          <button
                className="
                  mt-4
                  bg-[#8D5B4C]
                  hover:bg-[#73473A]
                  text-white
                  text-sm
                  font-semibold
                  px-5
                  py-2
                  rounded-lg
                  transition
                "
              >
                Book Now
              </button>
        </div>
      </div>
    </div>
  );
}
