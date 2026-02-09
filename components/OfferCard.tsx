"use client";

export default function OfferCard({ offer }: any) {
  return (
    <a
      href={offer.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-lg
        transition-all
        duration-300
        p-4
        flex
        gap-4
        border
        border-[#E5D6D0]
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <img
        src={offer.image}
        alt={offer.title}
        className="w-24 h-24 object-contain rounded-xl bg-[#FAF7F5]"
      />

      {/* CONTENT */}
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-gray-800">
            {offer.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            {offer.description}
          </p>
        </div>

        <div className="mt-2 inline-block bg-[#F3E6E1] px-3 py-1 rounded-full text-xs font-bold text-[#8D5B4C] w-fit">
          Code: {offer.code}
        </div>
      </div>
    </a>
  );
}
