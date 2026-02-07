export default function BusResults({ buses }: any) {
  if (!buses.length) {
    return (
      <p className="mt-6 text-center text-gray-600">
        No buses found for this route
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {buses.map((bus: any) => (
        <div
          key={bus.id}
          className="bg-white rounded-xl shadow p-5 flex justify-between"
        >
          <div>
            <h3 className="font-semibold text-lg">{bus.operator}</h3>
            <p className="text-sm text-gray-600">{bus.bus_type}</p>
            <p className="text-sm">
              {bus.departure} → {bus.arrival} ({bus.duration})
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold">₹{bus.pricePerNight}</p>
            <p className="text-xs">{bus.seats} seats left</p>
            <button className="mt-2 bg-[#C9ADA7] text-white px-4 py-2 rounded">
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

