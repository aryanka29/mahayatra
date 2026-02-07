import OfferCard from "./OfferCard";

export default function OfferCategory({ title, offers }: any) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offers.map((offer: any) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}
