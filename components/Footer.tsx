export default function Footer() {
  return (
    <footer className="bg-[#EADBD6] border-t border-[#D6C4BF] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* APP SECTION */}
          <div>
            <h3 className="text-lg font-semibold text-[#9A8C98] mb-4">
              MahaYatra App
            </h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Your journey, just a tap away.  
              Book buses, trains, hotels and travel packages
              with ease and confidence.
            </p>

            <div className="mt-4 text-sm text-[#4A4A4A]">
              ⭐ 4.1 App Rating
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-[#9A8C98] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li className="hover:text-[#9A8C98] cursor-pointer">Bus Booking</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Train Tickets</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Cabs</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Hotels</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Tour Packages</li>
            </ul>
          </div>

          {/* POPULAR CITIES */}
          <div>
            <h3 className="text-lg font-semibold text-[#9A8C98] mb-4">
              Popular Cities
            </h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li>New Delhi</li>
              <li>Mumbai</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
              <li>Kolkata</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold text-[#9A8C98] mb-4">
              About MahaYatra
            </h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li className="hover:text-[#9A8C98] cursor-pointer">About Us</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">FAQ</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#9A8C98] cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#D6C4BF] my-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#4A4A4A]">
          <p>
            © 2026 MahaYatra. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-[#9A8C98] cursor-pointer">Facebook</span>
            <span className="hover:text-[#9A8C98] cursor-pointer">Twitter</span>
            <span className="hover:text-[#9A8C98] cursor-pointer">Instagram</span>
            <span className="hover:text-[#9A8C98] cursor-pointer">LinkedIn</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
