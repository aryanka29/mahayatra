"use client";

export default function OfferCard({ offer }: any) {
  return (
    <a
      href={offer.link}
      target="_blank"
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex gap-4"
    >
      <img
        src={offer.image}
        alt={offer.title}
        className="w-24 h-24 object-contain rounded"
      />

      <div>
        <h4 className="font-semibold text-lg">{offer.title}</h4>
        <p className="text-sm text-gray-600">{offer.description}</p>

        <div className="mt-2 inline-block bg-[#EADBD6] px-3 py-1 rounded text-sm font-bold">
          Code: {offer.code}
        </div>
      </div>
    </a>
  );
}

