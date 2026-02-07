import HotelImageSlider from "./HotelImageSlider";

export default function HotelCard({ hotel }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex gap-4">
      <HotelImageSlider images={hotel.images} />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#9A8C98]">
          {hotel.name}
        </h3>
        <p className="text-sm text-gray-600">{hotel.city}</p>
        <p className="text-sm mt-1">
          ⭐ {hotel.rating} ({hotel.reviews} reviews)
        </p>

        <div className="flex gap-2 mt-2 text-xs">
          {hotel.amenities.map((a: string) => (
            <span
              key={a}
              className="bg-[#EADBD6] px-2 py-1 rounded"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold">₹{hotel.pricePerNight}</p>
        <p className="text-xs text-gray-500">
          ₹{hotel.total} total
        </p>
        <button className="mt-3 bg-[#C9ADA7] text-white px-4 py-2 rounded-lg">
          View deal
        </button>
      </div>
    </div>
  );
}


