"use client";

interface Feature {
  title: string;
  description: string;
}

export default function WhyChooseUs({
  heading,
  features,
}: {
  heading: string;
  features: Feature[];
}) {
  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition mb-6"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
