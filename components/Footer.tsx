"use client";

import {
  Bus,
  Train,
  Car,
  Hotel,
  MapPin,
  Info,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Users,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-[#2F2420] to-[#3A2B26] text-[#F5F1EF]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              MahaYatra
            </h3>

            <p className="text-sm leading-relaxed text-[#EADBD6]">
              MahaYatra is your trusted travel companion for booking buses,
              trains, cabs and hotels across India with ease and confidence.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10">
                <Star size={14} /> 4.1 Rating
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10">
                <Users size={14} /> 10M+ Users
              </span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <Bus size={18} /> Services
            </h4>

            <ul className="space-y-2 text-sm text-[#EADBD6]">
              <li className="flex items-center gap-2 hover:text-white transition">
                <Bus size={14} /> Bus Booking
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <Train size={14} /> Train Tickets
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <Car size={14} /> Cab Rentals
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <Hotel size={14} /> Hotel Booking
              </li>
            </ul>
          </div>

          {/* POPULAR CITIES */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <MapPin size={18} /> Popular Cities
            </h4>

            <ul className="space-y-2 text-sm text-[#EADBD6]">
              {["Mumbai", "Pune", "Nashik", "Nagpur", "Latur", "Kolhapur"].map(
                (city) => (
                  <li key={city} className="hover:text-white transition">
                    {city}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUPPORT / ABOUT */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <Info size={18} /> Support
            </h4>

            <ul className="space-y-2 text-sm text-[#EADBD6]">
              <li className="flex items-center gap-2 hover:text-white transition">
                <Phone size={14} /> 24×7 Customer Care
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <Mail size={14} /> support@mahayatra.com
              </li>
              <li className="hover:text-white transition">
                Privacy Policy
              </li>
              <li className="hover:text-white transition">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 border-t border-white/15" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#EADBD6]">

          <p className="text-center md:text-left">
            © 2026{" "}
            <span className="font-semibold text-white">MahaYatra</span>.  
            All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <a className="hover:text-white transition" href="#">
              <Globe size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Facebook size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Twitter size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Instagram size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
