import HotelImageSlider from "./HotelImageSlider";

export default function HotelCard({ hotel }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-5 flex gap-5 border border-[#EFE4E0]">

      {/* IMAGE SLIDER */}
      <div className="w-[260px]">
        <HotelImageSlider images={hotel.images} />
      </div>

      {/* DETAILS */}
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-[#4A3A34]">
          {hotel.name}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          📍 {hotel.city}
        </p>

        <p className="text-sm">
          ⭐ <span className="font-semibold">{hotel.rating}</span>{" "}
          <span className="text-gray-500">
            ({hotel.reviews} reviews)
          </span>
        </p>

        {/* AMENITIES */}
        <div className="flex flex-wrap gap-2 pt-2">
          {hotel.amenities.map((a: string) => (
            <span
              key={a}
              className="text-xs bg-[#F3E6E1] text-[#6B2F2F] px-3 py-1 rounded-full"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="text-right min-w-[150px] flex flex-col justify-between">
        <div>
          <p className="text-2xl font-bold text-green-600">
            ₹{hotel.pricePerNight}
          </p>
          <p className="text-xs text-gray-500">
            ₹{hotel.total} total
          </p>
        </div>

        <button className="mt-4 bg-[#6B2F2F] hover:bg-[#552424] text-white px-5 py-2 rounded-xl font-semibold transition">
          View Deal →
        </button>
      </div>
    </div>
  );
}
