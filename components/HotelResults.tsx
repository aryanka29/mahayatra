"use client";

interface Hotel {
  id: number;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  amenities: string[];
  images: string[];
}

interface Props {
  hotels: Hotel[];
  sortBy: string;
}

export default function HotelResults({ hotels }: Props) {
  if (!hotels.length) {
    return (
      <div className="md:col-span-3 flex items-center justify-center h-[300px] text-gray-600 text-lg">
        No hotels found for this search.
      </div>
    );
  }

  return (
    <div className="md:col-span-3 space-y-6">
      {hotels.map((hotel, index) => (
        <div
          key={`${hotel.id}-${index}`}
          className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex gap-6 border border-gray-100"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={hotel.images?.[0] || "/hotel-placeholder.jpg"}
              alt={hotel.name}
              className="w-48 h-36 object-cover rounded-xl"
            />

            {/* RATING BADGE */}
            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
              ⭐ {hotel.rating}
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {hotel.name}
              </h3>

              <p className="text-sm text-gray-500 mt-0.5">
                {hotel.city}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {hotel.reviews} verified reviews
              </p>

              {/* AMENITIES */}
              <div className="mt-3 flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 5).map((a, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#F2E9E4] text-[#22223B] px-3 py-1 rounded-full font-medium"
                  >
                    {a}
                  </span>
                ))}
                {hotel.amenities.length > 5 && (
                  <span className="text-xs text-gray-500">
                    +{hotel.amenities.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* PRICE + CTA */}
          <div className="flex flex-col justify-between items-end min-w-[140px]">
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                ₹{hotel.pricePerNight}
              </p>
              <p className="text-sm text-gray-500">per night</p>

              <p className="mt-1 text-xs text-green-700 font-medium">
                Free cancellation*
              </p>
            </div>

            <button
              className="mt-4 w-full bg-[#22223B] hover:bg-[#4A4E69] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
