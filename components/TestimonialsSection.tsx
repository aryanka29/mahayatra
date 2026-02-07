import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Amol Bodhare",
    since: 2015,
    review: "Best on-time service with comfortable seats.",
    rating: 4.8,
  },
  {
    name: "Debaditya",
    since: 2018,
    review: "The driver was very good-natured.",
    rating: 4.6,
  },
  {
    name: "Sachin Bankar",
    since: 2016,
    review: "Bus was clean and the journey was smooth.",
    rating: 4.7,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">
        Testimonials
      </h2>

      <p className="text-gray-600 mb-8">
        Hear from our satisfied customers in their own words
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            name={t.name}
            since={t.since}
            review={t.review}
            rating={t.rating}
          />
        ))}
      </div>
    </section>
  );
}
