"use client";

import { useEffect, useState } from "react";
import offers from "@/data/offers";

type OfferType = "buses" | "trains" | "cabs" | "hotels";

interface Props {
  type: OfferType;
}

interface Offer {
  id: number;
  title: string;
  code: string;
  description: string;
  image: string;
  link?: string;
}

export default function VerticalOfferSlider({ type }: Props) {
  const allOffers: Offer[] = offers[type] || [];
  const [visible, setVisible] = useState<Offer[]>([]);

  useEffect(() => {
    if (!allOffers.length) return;

    setVisible(shuffle([...allOffers]).slice(0, 3));

    const interval = setInterval(() => {
      setVisible(shuffle([...allOffers]).slice(0, 3));
    }, 3500);

    return () => clearInterval(interval);
  }, [type]);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-fit">
      <h3 className="text-lg font-semibold mb-3">Best Offers</h3>

      <div className="space-y-4">
        {visible.map((offer) => (
          <div
            key={offer.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-28 object-cover"
            />
            <div className="p-3">
              <h4 className="font-semibold text-sm">{offer.title}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {offer.description}
              </p>
              <p className="mt-2 text-sm font-bold text-green-600">
                Code: {offer.code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}
