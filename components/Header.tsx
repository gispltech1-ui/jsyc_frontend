"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Clock3,
  Phone,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      // submenu: [
      //   { label: "Introduction", href: "/about" },
      //   { label: "Mission & Vision", href: "/about" },
      //   { label: "Department Structure", href: "/about" },
      //   { label: "Administrative Desk", href: "/about" },
      // ],
      submenu: [
  { label: "Introduction", href: "/about#introduction" },
  { label: "Mission & Vision", href: "/about#mission-vision" },
  { label: "Department Structure", href: "/about#department-structure" },
  { label: "Administrative Desk", href: "/about#administrative-desk" },
],
    },
    { label: "Centres", href: "/centers" },
    { label: "Notice", href: "/notice" },
    {
      label: "News & Events",
      href: "/news",
      submenu: [
        { label: "News", href: "/news" },
        { label: "Image Gallery", href: "/gallery" },
        // { label: "Circular", href: "/circular" },
        { label: "Events", href: "/news" },
      ],
    },
    { label: "Tender", href: "/tender" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#efe6cf]">

      {/* ================= TOP BAR ================= */}

      <div className="px-2 md:px-4 pt-2">
        <div className=" bg-[#f4d76a] rounded-xl px-3 md:px-5 py-2">

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[#0c6b37] text-[12px] md:text-[13px]">

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5">

              <div className="flex items-center gap-1">
                <Clock3 size={14} />
                <span>Mon - Fri.</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock3 size={14} />
                <span>10:00 AM - 06:00</span>
              </div>

              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+91 79892******</span>
              </div>

            </div>

            <div className="flex items-center flex-wrap justify-center gap-2">

              <HelpCircle size={14} />

              <span>Help</span>

              <span>|</span>

              <span>English</span>

              <span>|</span>

              <span>हिंदी</span>

            </div>

          </div>

        </div>
      </div>

      {/* ================= LOGO ================= */}

      <div className="py-4">

        <div className=" px-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">

          <Image
            src="/govjhar 3.svg"
            width={60}
            height={60}
            alt="Government Logo"
            className="w-[10%] h-[10%] hidden md:block"
          />

   <div className="text-center">
  {/* Mobile */}
  <div className="mobile-title">
    <h1 className="font-serif font-bold text-xl leading-[1.05]">
      <span className="text-[#145b2d]">
        झारखण्ड
      </span>{" "}
      <span className="text-[#2b2217]">
        राज्य युवा आयोग
      </span>
    </h1>
  </div>

  {/* Desktop */}
  <div className="desktop-title">
    <h1 className="font-serif font-bold text-5xl leading-[1.05]">
      <span className="text-[#145b2d]">
        झारखण्ड
      </span>{" "}
      <span className="text-[#2b2217]">
        राज्य युवा आयोग
      </span>
    </h1>
  </div>
</div>

        <Image
  src="/govjhar 4.svg"
  width={60}
            height={60}
            alt="Government Logo"
            className="w-[10%] h-[10%] hidden md:block"
/>

        </div>

      </div>

      {/* ================= NAVIGATION STARTS BELOW ================= */}
      {/* ================= NAVIGATION ================= */}

      <div className="px-3 md:px-4 pb-3">
        <div className="relative  mx-auto bg-[#0b7b33] rounded-xl shadow">

          <div className="flex items-center h-12 md:h-14">

            {/* Desktop Menu */}

            <div className="hidden lg:flex flex-1 justify-center">

              <nav className="flex items-center gap-10 text-white text-[15px] h-full">

                {navItems.map((item) => (

                  <div
                    key={item.label}
                    className="relative group h-full flex items-center"
                  >

                    <Link
                      href={item.href}
                      className="flex items-center gap-1 h-full hover:text-[#f4d76a] transition"
                    >
                      {item.label}

                      {item.submenu && (
                        <ChevronDown size={16} />
                      )}

                    </Link>

                    {item.submenu && (

                      <div className="absolute left-0 top-full mt-1 min-w-[220px] bg-[#007a2f] rounded-xl shadow-xl border border-[#f4d76a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                        {item.submenu.map((sub) => (

                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-5 py-3 text-sm text-white hover:bg-[#f4d76a] hover:text-black transition"
                          >
                            {sub.label}
                          </Link>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

              </nav>

            </div>

            {/* Desktop Buttons */}

            <div className="hidden lg:flex items-center gap-4 absolute right-5">

              <Link
                href="/login"
                className="text-white hover:text-[#f4d76a]"
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="bg-[#f4d76a] text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Register
              </Link>

            </div>

            {/* ================= MOBILE ================= */}

            <div className="flex lg:hidden w-full items-center justify-between px-4">

              <span className="text-white font-semibold tracking-wide">
                <div className="flex">
                  <Image
                    src="/govjhar 3.svg"
                    width={45}
                    height={45}
                    alt="Government Logo"
                    className="w-[36px] h-[36px] md:w-[45px] md:h-[45px]"
                  />

                  <Image
                    src="/govjhar 4.svg"
                    width={45}
                    height={45}
                    alt="Government Logo"
                    className="w-[36px] h-[36px] md:w-[45px] md:h-[45px]"
                  />
                </div>


              </span>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-white"
              >
                {mobileMenu ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>

            </div>

          </div>

          {/* ================= MOBILE MENU ================= */}

          {mobileMenu && (

            <div className="lg:hidden border-t border-white/20 bg-[#0b7b33] rounded-b-xl">

              <div className="flex flex-col py-2">

                {navItems.map((item) => (

                  <div key={item.label}>

                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="block px-5 py-3 text-white hover:bg-white/10"
                    >
                      {item.label}
                    </Link>

                    {item.submenu && (

                      <div className="ml-5 border-l border-white/20">

                        {item.submenu.map((sub) => (

                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenu(false)}
                            className="block px-5 py-2 text-sm text-gray-200 hover:text-yellow-300"
                          >
                            {sub.label}
                          </Link>

                        ))}

                      </div>

                    )}

                  </div>

                ))}

                <div className="px-5 pt-4 flex flex-col gap-3">

                  <Link
                    href="/login"
                    onClick={() => setMobileMenu(false)}
                    className="border border-white text-center rounded-lg py-2 text-white"
                  >
                    Log In
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setMobileMenu(false)}
                    className="bg-[#f4d76a] text-center rounded-lg py-2 font-semibold text-black"
                  >
                    Register
                  </Link>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>


    </header>
  );
}