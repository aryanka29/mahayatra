"use client";

import offers from "@/data/offers";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] px-6 py-14">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h1 className="text-4xl font-bold text-[#4A3A34]">
          🎉 Exclusive Travel Offers
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Unlock special discounts on buses, trains, cabs & hotels.
          Travel smarter and save more with MahaYatra.
        </p>

        <div className="mt-6 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
        </div>
      </div>

      {/* OFFER SECTIONS */}
      <OfferSection
        title="🚌 Bus Ticket Offers"
        subtitle="Best savings on intercity & overnight bus journeys"
        offers={offers.buses}
      />

      <OfferSection
        title="🚆 Train Ticket Offers"
        subtitle="Special discounts on confirmed & waitlist tickets"
        offers={offers.trains}
      />

      <OfferSection
        title="🚕 Cab Booking Offers"
        subtitle="Airport transfers, city rides & outstation deals"
        offers={offers.cabs}
      />

      <OfferSection
        title="🏨 Hotel Stay Offers"
        subtitle="Luxury & budget hotel discounts across Maharashtra"
        offers={offers.hotels}
      />
    </div>
  );
}

/* ===================== OFFER SECTION ===================== */

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
    <section className="max-w-7xl mx-auto mb-20">

      {/* SECTION HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#4A3A34]">
          {title}
        </h2>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      className="
        group
        bg-white
        rounded-3xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
        border
        border-[#E5D6D0]
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden relative">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* DISCOUNT BADGE */}
        <span className="absolute top-3 left-3 bg-[#8D5B4C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Limited Deal
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-gray-800 leading-snug line-clamp-2">
          {offer.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {offer.description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs bg-[#F3E6E1] text-[#8D5B4C] font-bold px-3 py-1 rounded-full">
            Code: {offer.code}
          </span>

          <span className="text-sm font-semibold text-[#8D5B4C]">
            View Deal →
          </span>
        </div>
      </div>
    </a>
  );
}
