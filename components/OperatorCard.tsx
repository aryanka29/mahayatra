export default function OperatorCard({ name, rating }: any) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold">{name}</h3>
      <p>⭐ {rating}</p>
      <p className="text-sm text-gray-600">
        Official booking partner
      </p>
    </div>
  );
}
