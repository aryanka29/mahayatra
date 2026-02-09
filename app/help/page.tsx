"use client";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4A3A34]">
            🤝 Need Help with MahaYatra?
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            From booking your tickets to managing refunds and travel support,
            MahaYatra is here to assist you every step of the journey.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
          </div>
        </div>

        {/* ================= QUICK HELP CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* SUPPORT */}
          <div className="bg-white rounded-[28px] shadow-xl border border-[#E5D6D0] p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              24×7 Customer Support
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Get instant help for bookings, cancellations, refunds, or
              technical issues anytime, anywhere.
            </p>
            <p className="font-bold text-[#8D5B4C]">
              Call: 080-6824-3910
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-[28px] shadow-xl border border-[#E5D6D0] p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Email Support
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Need detailed assistance? Write to us for refunds, invoices,
              or corporate travel queries.
            </p>
            <p className="font-bold text-[#8D5B4C]">
              support@mahayatra.com
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-[28px] shadow-xl border border-[#E5D6D0] p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              FAQs & Refunds
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Find quick answers about buses, trains, cabs, hotels,
              payments, and cancellation policies.
            </p>
            <span className="inline-block text-[#8D5B4C] font-semibold">
              Explore FAQs →
            </span>
          </div>
        </div>

        {/* ================= SUPPORT DETAILS ================= */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-[#E5D6D0] p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How MahaYatra Supports You
          </h2>

          <p className="text-gray-600 mb-10 max-w-4xl">
            MahaYatra offers complete end-to-end travel assistance.
            Whether you are planning, booking, tracking, or modifying
            your journey, our systems and support team ensure a smooth experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <SupportItem
              icon="🚌"
              title="All Travel Bookings"
              desc="Support for bus, train, cab, and hotel bookings with real-time availability and instant confirmations."
            />

            <SupportItem
              icon="🔄"
              title="Cancellations & Refunds"
              desc="Fast and transparent cancellation handling with instant or scheduled refunds."
            />

            <SupportItem
              icon="💳"
              title="Payments & Transactions"
              desc="Help with failed payments, double charges, UPI issues, invoices, and billing queries."
            />

            <SupportItem
              icon="📍"
              title="Live Tracking & Status"
              desc="Track buses and cabs live, check train running status, and booking progress."
            />

            <SupportItem
              icon="🧾"
              title="Booking Modifications"
              desc="Assistance with rescheduling, passenger updates, seat changes, and room upgrades."
            />

            <SupportItem
              icon="🔐"
              title="Account & Security"
              desc="Support for account access, profile issues, and keeping your bookings secure."
            />
          </div>
        </div>

        {/* ================= FOOT NOTE ================= */}
        <div className="text-center text-gray-500 text-sm">
          ✨ MahaYatra is committed to making your travel smooth, affordable,
          and completely stress-free.
        </div>

      </div>
    </div>
  );
}

/* ================= SUPPORT ITEM COMPONENT ================= */

function SupportItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
