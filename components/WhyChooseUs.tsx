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
    <section className="relative bg-gradient-to-b from-[#F8F2EF] to-[#EFE0DA] py-18 overflow-hidden">
      {/* Soft decorative blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#EADBD6] rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-[#F1D7CF] rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A3A34] tracking-tight">
            {heading}
          </h2>

          <div className="mt-4 flex justify-center items-center gap-2">
            <span className="w-2 h-2 bg-[#8D5B4C] rounded-full" />
            <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
            <span className="w-2 h-2 bg-[#8D5B4C] rounded-full" />
          </div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            🌍 Travel smarter with MahaYatra — trusted bookings, transparent
            pricing, and a seamless experience across buses, trains, cabs & hotels.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-3xl 
                p-8 
                border border-[#E5D6D0]
                shadow-md
                transition-all 
                duration-300
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F3E6E1] to-[#EADBD6] text-2xl shadow-inner mb-6">
                ✨
              </div>

              <h3 className="font-semibold text-xl text-[#4A3A34] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
