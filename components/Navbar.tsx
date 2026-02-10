"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Bus,
  Train,
  Car,
  Hotel,
  Gift,
  MessageSquare,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react";
import { logout } from "@/src/utils/auth";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================= GET USER ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ================= NAV LINK STYLE ================= */
  const navLinkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
     ${
       pathname === path
         ? "bg-[#8D5B4C] text-white shadow"
         : "text-[#4A3A34] hover:bg-[#E5D6D0]"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-gradient-to-b from-[#F4ECE9]/95 to-[#EADBD6]/95 border-b border-[#E5D6D0]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MahaYatra Logo"
            width={48}
            height={48}
            priority
            className="rounded-md sm:w-[90px] sm:h-[56px]"
          />
          <span className="text-lg sm:text-2xl font-bold tracking-wide text-[#4A3A34]">
            MahaYatra
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/buses" className={navLinkClass("/buses")}>
            <Bus size={16} /> Buses
          </Link>
          <Link href="/trains" className={navLinkClass("/trains")}>
            <Train size={16} /> Trains
          </Link>
          <Link href="/cabs" className={navLinkClass("/cabs")}>
            <Car size={16} /> Cabs
          </Link>
          <Link href="/hotels" className={navLinkClass("/hotels")}>
            <Hotel size={16} /> Hotels
          </Link>
          <Link href="/offers" className={navLinkClass("/offers")}>
            <Gift size={16} /> Offers
          </Link>
          <Link href="/track-ticket" className={navLinkClass("/track-ticket")}>
            <MessageSquare size={16} /> Feedback
          </Link>
          <Link href="/help" className={navLinkClass("/help")}>
            <HelpCircle size={16} /> Help
          </Link>
        </nav>

        {/* ================= DESKTOP AUTH ================= */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#4A3A34]">
                <User size={16} />
                {user.name}
              </span>
              <button
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
                className="flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="bg-[#8D5B4C] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#73473A] transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden text-[#4A3A34]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 space-y-2">
          <Link href="/buses" className={navLinkClass("/buses")} onClick={() => setMenuOpen(false)}>
            <Bus size={16} /> Buses
          </Link>
          <Link href="/trains" className={navLinkClass("/trains")} onClick={() => setMenuOpen(false)}>
            <Train size={16} /> Trains
          </Link>
          <Link href="/cabs" className={navLinkClass("/cabs")} onClick={() => setMenuOpen(false)}>
            <Car size={16} /> Cabs
          </Link>
          <Link href="/hotels" className={navLinkClass("/hotels")} onClick={() => setMenuOpen(false)}>
            <Hotel size={16} /> Hotels
          </Link>
          <Link href="/offers" className={navLinkClass("/offers")} onClick={() => setMenuOpen(false)}>
            <Gift size={16} /> Offers
          </Link>
          <Link href="/track-ticket" className={navLinkClass("/track-ticket")} onClick={() => setMenuOpen(false)}>
            <MessageSquare size={16} /> Feedback
          </Link>
          <Link href="/help" className={navLinkClass("/help")} onClick={() => setMenuOpen(false)}>
            <HelpCircle size={16} /> Help
          </Link>

          {/* AUTH */}
          <div className="pt-3 border-t">
            {user ? (
              <button
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
                className="flex items-center gap-2 text-sm font-semibold text-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="block text-center bg-[#8D5B4C] text-white py-2 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
