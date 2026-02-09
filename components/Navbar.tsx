"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { logout } from "@/src/utils/auth";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  /* ================= GET USER ================= */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ================= NAV LINK STYLE ================= */
  const navLinkClass = (path: string) =>
    `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition
     ${
       pathname === path
         ? "bg-[#8D5B4C] text-white shadow"
         : "text-[#4A3A34] hover:bg-[#E5D6D0]"
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-gradient-to-b from-[#F4ECE9]/90 to-[#EADBD6]/90 border-b border-[#E5D6D0]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="MahaYatra Logo"
            width={120}
            height={120}
            priority
            className="rounded-md"
          />
          <span className="text-2xl font-bold tracking-wide text-[#4A3A34]">
            MahaYatra
          </span>
        </Link>

        {/* ================= NAV LINKS ================= */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/buses" className={navLinkClass("/buses")}>
            🚌 Buses
          </Link>
          <Link href="/trains" className={navLinkClass("/trains")}>
            🚆 Trains
          </Link>
          <Link href="/cabs" className={navLinkClass("/cabs")}>
            🚕 Cabs
          </Link>
          <Link href="/hotels" className={navLinkClass("/hotels")}>
            🏨 Hotels
          </Link>
          <Link href="/offers" className={navLinkClass("/offers")}>
            🎁 Offers
          </Link>
          <Link href="/track-ticket" className={navLinkClass("/track-ticket")}>
            ✍️ Feedback
          </Link>
          <Link href="/help" className={navLinkClass("/help")}>
            🤝 Help
          </Link>
        </nav>

        {/* ================= AUTH SECTION ================= */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm font-semibold text-[#4A3A34]">
                Hi, <span className="font-bold">{user.name}</span>
              </span>

              <button
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
                className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="
                text-sm font-semibold
                bg-[#8D5B4C]
                text-white
                px-5 py-2
                rounded-xl
                shadow-md
                hover:bg-[#73473A]
                hover:shadow-lg
                transition
              "
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
