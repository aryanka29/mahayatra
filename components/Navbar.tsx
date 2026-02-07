"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition
     ${
       pathname === path
         ? "bg-[#C9ADA7] text-white"
         : "text-[#4A4A4A] hover:bg-[#D8C5C0]"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#EADBD6] border-b border-[#D6C4BF]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#9A8C98] tracking-wide"
        >
          MahaYatra
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/buses" className={navLinkClass("/buses")}>
            Buses
          </Link>
          <Link href="/trains" className={navLinkClass("/trains")}>
            Trains
          </Link>
          <Link href="/cabs" className={navLinkClass("/cabs")}>
            Cabs
          </Link>
          <Link href="/hotels" className={navLinkClass("/hotels")}>
            Hotels
          </Link>
          <Link href="/offers" className={navLinkClass("/offers")}>
            Offers
          </Link>
          <Link href="/track-ticket" className={navLinkClass("/track-ticket")}>
            Track Ticket
          </Link>
          <Link href="/help" className={navLinkClass("/help")}>
            Need Help
          </Link>
        </nav>

        {/* AUTH */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-semibold text-[#4A4A4A] hover:text-[#9A8C98]"
          >
            Login
          </Link>

          <Link
            href="/auth/signup"
            className="text-sm font-semibold bg-[#9A8C98] text-white px-4 py-2 rounded-lg hover:bg-[#8A7C88] transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
