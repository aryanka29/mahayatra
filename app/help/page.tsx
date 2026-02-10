"use client";

import {
  Phone,
  Mail,
  HelpCircle,
  Bus,
  RefreshCcw,
  CreditCard,
  MapPin,
  FileText,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4ECE9] to-[#EADBD6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4A3A34] flex justify-center gap-2">
            <Headphones /> MahaYatra Help & Support
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg">
            Booking help, cancellations, refunds and travel support — all in one place.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-[#8D5B4C]" />
          </div>
        </div>

        {/* QUICK HELP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <SupportCard
            icon={<Phone />}
            title="24×7 Customer Support"
            desc="Instant help for bookings, cancellations, refunds and technical issues."
            value="080-6824-3910"
          />

          <SupportCard
            icon={<Mail />}
            title="Email Support"
            desc="Detailed assistance for refunds, invoices and corporate travel."
            value="support@mahayatra.com"
          />

          <SupportCard
            icon={<HelpCircle />}
            title="FAQs & Refunds"
            desc="Quick answers for buses, trains, cabs, hotels & payments."
            value="Explore FAQs"
            isLink
          />
        </div>

        {/* SUPPORT DETAILS */}
        <div className="bg-white rounded-3xl shadow-2xl border p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            How MahaYatra Supports You
          </h2>

          <p className="text-gray-600 mb-10 max-w-4xl">
            End-to-end travel assistance — from planning to post-booking support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SupportItem icon={<Bus />} title="All Travel Bookings" />
            <SupportItem icon={<RefreshCcw />} title="Cancellations & Refunds" />
            <SupportItem icon={<CreditCard />} title="Payments & Billing" />
            <SupportItem icon={<MapPin />} title="Live Tracking & Status" />
            <SupportItem icon={<FileText />} title="Booking Modifications" />
            <SupportItem icon={<ShieldCheck />} title="Account & Security" />
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          MahaYatra is committed to making travel simple, secure and stress-free.
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SupportCard({
  icon,
  title,
  desc,
  value,
  isLink = false,
}: any) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border p-8 hover:shadow-2xl transition">
      <div className="mb-4 text-[#8D5B4C]">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <p className="font-bold text-[#8D5B4C]">
        {value}
      </p>
    </div>
  );
}

function SupportItem({ icon, title }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-[#8D5B4C]">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">
          Professional assistance provided by our support team.
        </p>
      </div>
    </div>
  );
}
