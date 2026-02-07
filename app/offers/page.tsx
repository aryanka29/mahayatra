"use client";

import offers from "@/data/offers";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-[#EADBD6] px-6 py-8">
      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Exclusive Travel Offers
        </h1>
        <p className="text-gray-600 mt-2">
          Save more on buses, trains, cabs & hotels with MahaYatra
        </p>
      </div>

      {/* BUS OFFERS */}
      <OfferSection
        title="Bus Ticket Offers"
        subtitle="Best deals on bus bookings"
        offers={offers.buses}
      />

      {/* TRAIN OFFERS */}
      <OfferSection
        title="Train Ticket Offers"
        subtitle="Special discounts on train journeys"
        offers={offers.trains}
      />

      {/* CAB OFFERS */}
      <OfferSection
        title="Cab Booking Offers"
        subtitle="Airport & outstation cab savings"
        offers={offers.cabs}
      />

      {/* HOTEL OFFERS */}
      <OfferSection
        title="Hotel Stay Offers"
        subtitle="Luxury & budget hotel discounts"
        offers={offers.hotels}
      />
    </div>
  );
}

/* ===================== SECTION COMPONENT ===================== */

function OfferSection({
  title,
  subtitle,
  offers,
}: {
  title: string;
  subtitle: string;
  offers: any[];
}) {
  return (
    <section className="max-w-7xl mx-auto mb-14">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}

/* ===================== OFFER CARD ===================== */

function OfferCard({ offer }: { offer: any }) {
  return (
    <a
      href={offer.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      {/* Image */}
      <div className="h-36 w-full overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-full w-full object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {offer.title}
        </h3>

        <p className="text-sm text-gray-600">
          {offer.description}
        </p>

        {/* Coupon */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
            Code: {offer.code}
          </span>

          <span className="text-sm text-[#8B3A2E] font-semibold">
            View →
          </span>
        </div>
      </div>
    </a>
  );
}
