type TestimonialProps = {
  name: string;
  since: number;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  since,
  review,
  rating,
}: TestimonialProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-gray-700 mb-4">“{review}”</p>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-dark">{name}</h4>
          <p className="text-sm text-gray-500">
            MahaYatra customer since {since}
          </p>
        </div>

        <div className="text-primary font-semibold">
          ⭐ {rating}
        </div>
      </div>
    </div>
  );
}
