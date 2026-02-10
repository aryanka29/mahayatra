"use client";

import {
  BadgePercent,
  Bus,
  Train,
  Car,
  Hotel,
  ArrowRight,
} from "lucide-react";

import offers from "@/data/offers";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] px-4 sm:px-6 py-14">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4A3A34] flex justify-center items-center gap-2">
          <BadgePercent /> Travel Offers & Deals
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Save more on buses, trains, cabs and hotels with verified MahaYatra offers.
        </p>

        <div className="mt-6 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
        </div>
      </div>

      <OfferSection
        icon={<Bus size={22} />}
        title="Bus Ticket Offers"
        subtitle="Best savings on intercity & overnight journeys"
        offers={offers.buses}
      />

      <OfferSection
        icon={<Train size={22} />}
        title="Train Ticket Offers"
        subtitle="Special discounts on confirmed & waitlist tickets"
        offers={offers.trains}
      />

      <OfferSection
        icon={<Car size={22} />}
        title="Cab Booking Offers"
        subtitle="Airport transfers, city rides & outstation deals"
        offers={offers.cabs}
      />

      <OfferSection
        icon={<Hotel size={22} />}
        title="Hotel Stay Offers"
        subtitle="Luxury & budget hotel discounts across India"
        offers={offers.hotels}
      />
    </div>
  );
}

/* ================= OFFER SECTION ================= */

function OfferSection({
  icon,
  title,
  subtitle,
  offers,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  offers: any[];
}) {
  return (
    <section className="max-w-7xl mx-auto mb-20">

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#4A3A34] flex items-center gap-2">
          {icon} {title}
        </h2>
        <p className="text-gray-600 mt-1 text-sm">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}

/* ================= OFFER CARD ================= */

function OfferCard({ offer }: { offer: any }) {
  return (
    <a
      href={offer.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all border border-[#E5D6D0] overflow-hidden"
    >
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-3 left-3 bg-[#8D5B4C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Limited Offer
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-gray-800 leading-snug line-clamp-2">
          {offer.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {offer.description}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-xs bg-[#F3E6E1] text-[#8D5B4C] font-bold px-3 py-1 rounded-full">
            Code: {offer.code}
          </span>

          <span className="text-sm font-semibold text-[#8D5B4C] flex items-center gap-1">
            View Deal <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
