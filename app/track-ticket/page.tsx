export default function TrackTicketPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-4">Track Your Ticket</h1>

      <input
        type="text"
        placeholder="Enter Ticket Number"
        className="border p-3 w-full rounded mb-4"
      />

      <button className="bg-primary text-white w-full py-2 rounded">
        Track Ticket
      </button>
    </div>
  );
}
