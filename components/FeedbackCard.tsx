type Props = {
  name: string;
  city: string;
  rating: number;
  message: string;
};

export default function FeedbackCard({
  name,
  city,
  rating,
  message,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-[#4A4A4A]">{name}</h3>
        <span className="text-sm text-gray-500">{city}</span>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">★</span>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">★</span>
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        “{message}”
      </p>
    </div>
  );
}
