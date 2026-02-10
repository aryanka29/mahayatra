"use client";

import offers from "@/data/offers";
import OfferCategory from "./OfferCategory";
import { Gift, Bus, Train, Car, Hotel } from "lucide-react";

export default function OffersSection() {
  return (
    <section className="bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] px-4 sm:px-6 py-16 sm:py-20">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-14 sm:mb-16">
        <div className="flex justify-center mb-4">
          <span className="p-4 rounded-full bg-[#8D5B4C]/10">
            <Gift className="text-[#8D5B4C]" size={34} />
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3A34]">
          Exclusive Travel Deals
        </h2>

        <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Handpicked offers to make your journeys more affordable and memorable.
        </p>

        <div className="mt-6 flex justify-center">
          <span className="h-1 w-20 rounded-full bg-[#8D5B4C]" />
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="space-y-14 sm:space-y-16 max-w-6xl mx-auto">

        <OfferCategory
          title={
            <span className="flex items-center gap-2">
              <Bus size={20} className="text-[#8D5B4C]" />
              Bus Offers
            </span>
          }
          offers={offers.buses}
        />

        <OfferCategory
          title={
            <span className="flex items-center gap-2">
              <Train size={20} className="text-[#8D5B4C]" />
              Train Offers
            </span>
          }
          offers={offers.trains}
        />

        <OfferCategory
          title={
            <span className="flex items-center gap-2">
              <Car size={20} className="text-[#8D5B4C]" />
              Cab Offers
            </span>
          }
          offers={offers.cabs}
        />

        <OfferCategory
          title={
            <span className="flex items-center gap-2">
              <Hotel size={20} className="text-[#8D5B4C]" />
              Hotel Offers
            </span>
          }
          offers={offers.hotels}
        />

      </div>
    </section>
  );
}
