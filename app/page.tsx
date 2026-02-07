export default function BusesPage() {
  return (
    <div className="bg-[#EADBD6] min-h-screen">

      {/* BUS OFFERS SLIDER */}
      <section className="px-6 pt-8">
        <h2 className="text-lg font-semibold text-[#4A4A4A] mb-4">
          Bus Offers
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="min-w-[260px] h-[140px] bg-white rounded-xl shadow-md flex items-center justify-center text-[#9A8C98] font-semibold"
            >
              Bus Offer
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="px-6 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Where are you at?"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9A8C98]"
          />

          <input
            type="text"
            placeholder="Where to go?"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9A8C98]"
          />

          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9A8C98]"
          />

          <button className="bg-[#9A8C98] text-white rounded-lg font-semibold hover:bg-[#8A7C88] transition">
            Search Buses
          </button>

        </div>
      </section>

      {/* EMPTY STATE / INFO */}
      <section className="px-6 py-12 text-center text-[#4A4A4A]">
        <p className="text-sm">
          Search for buses to see available routes and pricePerNights
        </p>
      </section>

    </div>
  );
}
