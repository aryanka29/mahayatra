"use client";

import offers from "@/data/offers";
import OfferCategory from "./OfferCategory";

export default function OffersSection() {
  return (
    <section className="bg-[#EADBD6] px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Exclusive Travel Offers
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">
        <OfferCategory title="🚌 Bus Offers" offers={offers.buses} />
        <OfferCategory title="🚆 Train Offers" offers={offers.trains} />
        <OfferCategory title="🚕 Cab Offers" offers={offers.cabs} />
        <OfferCategory title="🏨 Hotel Offers" offers={offers.hotels} />
      </div>
    </section>
  );
}
