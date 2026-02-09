"use client";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-[#2F2420] via-[#3F2F2A] to-[#5A3E35] text-[#F5F1EF]">
      
      {/* SOFT TOP GLOW */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* BRAND / APP */}
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-white mb-4">
              MahaYatra
            </h3>
            <p className="text-sm leading-relaxed text-[#EADBD6]">
              Your trusted travel partner for buses, trains, cabs, hotels
              and unforgettable journeys across India.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full">
                ⭐ 4.1 App Rating
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full">
                🚀 10M+ Users
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              🚍 Services
            </h4>
            <ul className="space-y-2 text-sm text-[#EADBD6]">
              {[
                "Bus Booking",
                "Train Tickets",
                "Cab Rentals",
                "Hotel Booking",
                "Tour Packages",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR CITIES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              📍 Popular Cities
            </h4>
            <ul className="space-y-2 text-sm text-[#EADBD6]">
              {[
                "Pune",
                "Mumbai",
                "AhilyaNagar",
                "Dhule",
                "Nashik",
                "Latur",
              ].map((city) => (
                <li key={city} className="hover:text-white transition">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              ℹ️ About
            </h4>
            <ul className="space-y-2 text-sm text-[#EADBD6]">
              {[
                "About Us",
                "FAQs",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Support",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-white/15" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#EADBD6]">

          <p>
            © 2026 <span className="text-white font-semibold">MahaYatra</span>. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-5 text-lg">
            <span className="hover:text-white transition cursor-pointer">🌐</span>
            <span className="hover:text-white transition cursor-pointer">📘</span>
            <span className="hover:text-white transition cursor-pointer">🐦</span>
            <span className="hover:text-white transition cursor-pointer">📸</span>
            <span className="hover:text-white transition cursor-pointer">💼</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
