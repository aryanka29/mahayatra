export default function HotelSortBar({ sortBy, setSortBy }: any) {
  return (
    <div className="mt-6 bg-white rounded-xl shadow px-5 py-4 flex justify-between items-center">
      <span className="text-sm">
        Sort by <strong>Recommended</strong>
      </span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="recommended">Recommended</option>
        <option value="pricePerNight_low">pricePerNight (Low → High)</option>
        <option value="pricePerNight_high">pricePerNight (High → Low)</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
