"use client";

import offers from "@/data/offers";
import OfferCategory from "./OfferCategory";

export default function OffersSection() {
  return (
    <section className="bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#4A3A34]">
          🎁 Exclusive Travel Deals
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Handpicked offers to make your journeys more affordable and memorable.
        </p>

        <div className="mt-6 flex justify-center">
          <span className="h-1 w-20 rounded-full bg-[#8D5B4C]" />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="space-y-16 max-w-6xl mx-auto">
        <OfferCategory title="🚌 Bus Offers" offers={offers.buses} />
        <OfferCategory title="🚆 Train Offers" offers={offers.trains} />
        <OfferCategory title="🚕 Cab Offers" offers={offers.cabs} />
        <OfferCategory title="🏨 Hotel Offers" offers={offers.hotels} />
      </div>
    </section>
  );
}
