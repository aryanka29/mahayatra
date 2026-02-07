import feedbacks from "@/data/feedbacks";
import FeedbackCard from "@/components/FeedbackCard";

export default function FeedbackSection() {
  return (
    <section className="bg-[#EADBD6] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-[#4A4A4A] mb-2">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Trusted by thousands of travelers across India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((item) => (
            <FeedbackCard
              key={item.id}
              name={item.name}
              city={item.city}
              rating={item.rating}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
