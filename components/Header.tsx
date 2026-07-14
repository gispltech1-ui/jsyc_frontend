// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   Clock3,
//   Phone,
//   HelpCircle,
//   ChevronDown,
// } from "lucide-react";

// export default function Header() {
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const navItems = [
//     { label: "Home", href: "/" },
//     {
//       label: "About Us",
//       href: "/about",
//       submenu: [
//         { label: "Introduction", href: "/about" },
//         { label: "Mission & Vision", href: "/about" },
//         { label: "Department Structure", href: "/about" },
//         { label: "Administrative Desk", href: "/about" },
//       ],
//     },
//     { label: "Centres", href: "/centers" },
//     { label: "Notice", href: "/notice" },
//     {
//       label: "News & Events",
//       href: "/news",
//       submenu: [
//         { label: "News", href: "/news" },
//         { label: "Image Gallery", href: "/gallery" },
//         { label: "Circular", href: "/circular" },
//         { label: "Events", href: "/news" },
//       ],
//     },
//     { label: "Tender", href: "/tender" },
//     { label: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header className="w-full bg-[#efe6cf]">
//   {/* ================= Top Bar ================= */}
//   <div className="px-4 pt-1">
//     <div className=" mx-auto bg-[#f4d76a] rounded-xl h-10 px-5 flex items-center justify-between text-[13px] text-[#0c6b37]">

//       <div className="flex items-center gap-5">
//         <div className="flex items-center gap-1">
//           <Clock3 size={14}/>
//           Mon-Fri.
//         </div>

//         <div className="flex items-center gap-1">
//           <Clock3 size={14}/>
//           10:00 AM - 06:00
//         </div>

//         <div className="flex items-center gap-1">
//           <Phone size={14}/>
//           +91 79892*****
//         </div>
//       </div>

//       <div className="flex items-center gap-3">
//         <HelpCircle size={14}/>
//         Help
//         <span>|</span>
//         English
//         <span>|</span>
//         हिंदी
//       </div>

//     </div>
//   </div>



//   {/* ================= Logo ================= */}

//   <div className="py-4">

//     <div className="max-w-[1550px] mx-auto flex justify-center items-center gap-5">

//       <Image
      
//         src="/govjhar 3.svg"
//         width={45}
//         height={45}
//         alt=""
//       />

//       <div className="text-center">

//       <h1 className="text-[40px] font-bold leading-none font-serif whitespace-nowrap">
//   <span className="text-[#145b2d]">झारखण्ड </span>{" "}
//   <span className="text-[#2b2217]">राज्य युवा आयोग</span>
// </h1>

//       </div>

//       <Image
//         src="/govjhar 4.svg"
//         width={45}
//         height={45}
//         alt=""
//       />

//     </div>

//   </div>



//   {/* ================= Navigation ================= */}

// <div className="px-4 pb-2">
//   <div className="relative max-w-[1550px] mx-auto bg-[#0b7b33] rounded-xl h-14 shadow flex items-center">

//     {/* Center Menu */}
//     <div className="flex-1 flex justify-center">
//       <nav className="hidden lg:flex items-center gap-10 text-white text-[15px] h-full">
//         {navItems.map((item) => (
//           <div key={item.label} className="relative group h-full flex items-center">
//             <Link
//               href={item.href}
//               className="flex items-center gap-1 hover:text-yellow-300 h-full"
//             >
//               {item.label}
//               {item.submenu && <ChevronDown size={16} />}
//             </Link>

//              {item.submenu && (
//                   <div className="absolute left-0 top-full mt-1 min-w-[220px] bg-[#007a2f] rounded-xl shadow-2xl border-2 border-[#ecf1aa] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                     {item.submenu.map((sub) => (
//                       <Link
//                         key={sub.href}
//                         href={sub.href}
//                         className="block px-5 py-3 text-sm text-white hover:bg-[#dfc354] hover:rounded-xl hover:text-black border-b border-white/10 last:border-none"
//                       >
//                         {sub.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//             {/* {item.submenu && (
//               <div className="absolute left-0 top-full mt-1 min-w-[220px] bg-[#0B7B33] rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
//                 {item.submenu.map((sub) => (
//                   <Link
//                     key={sub.href}
//                     href={sub.href}
//                     className="block px-5 py-3 text-gray-700 hover:bg-[#0b7b33] hover:text-white"
//                   >
//                     {sub.label}
//                   </Link>
//                 ))}
//               </div>
//             )} */}
//           </div>
//         ))}
//       </nav>
//     </div>

//     {/* Right Buttons */}
//     <div className="hidden lg:flex items-center gap-5 pr-5 absolute right-0">
//       <Link
//         href="/login"
//         className="text-white hover:text-yellow-300"
//       >
//         Log In
//       </Link>

//       <Link
//         href="/register"
//         className="bg-[#f3d769] px-6 py-2 rounded-lg font-semibold text-black"
//       >
//         Register
//       </Link>
//     </div>

//   </div>
// </div>

// </header>
//   );
// }























// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import Image from "next/image";
// // import {
// //   Menu,
// //   X,
// //   Clock3,
// //   Phone,
// //   HelpCircle,
// //   ChevronDown,
// // } from "lucide-react";

// // export default function Header() {
// //   const [mobileMenu, setMobileMenu] = useState(false);

// //   const navItems = [
// //     { label: "Home", href: "/" },
// //     {
// //       label: "About Us",
// //       href: "/about",
// //       submenu: [
// //         { label: "Introduction", href: "/about" },
// //         { label: "Mission & Vision", href: "/about" },
// //         { label: "Department Structure", href: "/about" },
// //         { label: "Administrative Desk", href: "/about" },
// //       ],
// //     },
// //     { label: "Centres", href: "/centers" },
// //     { label: "Notice", href: "/notice" },
// //     {
// //       label: "News & Events",
// //       href: "/news",
// //       submenu: [
// //         { label: "News", href: "/news" },
// //         { label: "Image Gallery", href: "/gallery" },
// //         { label: "Circular", href: "/circular" },
// //         { label: "Events", href: "/news" },
// //       ],
// //     },
// //     { label: "Tender", href: "/tender" },
// //     { label: "Contact Us", href: "/contact" },
// //   ];

// //   return (
// //     <header className="w-full bg-[#e8dfc7] p-2">
// //       {/* Top Bar */}
// //       <div className="bg-[#e8dfc7] border-b border-[#d9ceb3] hidden md:block">
// //         <div className="max-w-[1600px] mx-auto px-6">
// //           <div className="h-10 flex items-center justify-between text-[13px] text-[#205b36]">
// //             <div className="flex items-center gap-5">
// //               <div className="flex items-center gap-1">
// //                 <Clock3 size={14} />
// //                 <span>Mon - Sat</span>
// //               </div>
// //               <div className="flex items-center gap-1">
// //                 <Clock3 size={14} />
// //                 <span>10:00 AM - 05:00 PM</span>
// //               </div>
// //               <div className="flex items-center gap-1">
// //                 <Phone size={14} />
// //                 <span>+91 79892******</span>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-2">
// //               <HelpCircle size={14} />
// //               <span>Help</span>
// //               {/* <span>|</span>
// //               <span>English</span>
// //               <span>|</span>
// //               <span>हिंदी</span> */}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navbar */}
// //       <div className="relative h-[78px] bg-[#007a2f] rounded-[18px] mt-2 flex items-center   shadow-md">
// //         <div className="flex h-full w-full items-center">

// //           {/* Logo Section */}
// //           <div className="bg-[#dfc354] h-full min-w-[250px] rounded-l-[18px] flex items-center pl-5 pr-8 gap-3 relative z-10">
// //             <Link href={"/"} className="flex items-center gap-2.5 ml-10">
// //               <Image
// //                 src="/govjhar 3.svg"
// //                 width={55}
// //                 height={55}
// //                 alt="logo"
// //                 className="object-contain"
// //               />
// //               <Image
// //                 src="/govjhar 4.svg"
// //                 width={55}
// //                 height={55}
// //                 alt="logo"
// //                 className="object-contain"
// //               />
// //             </Link>

// //             <Link href={"/"} className="text-black font-black text-[31px] tracking-wider font-serif">
// //               JSYC
// //             </Link>
// //           </div>

// //           {/* Yellow Triangle */}
// //           <div
// //             className="bg-[#dfc354] h-full w-20 shrink-0"
// //             style={{
// //               clipPath: "polygon(0 0, 65% 0, 100% 100%, 0 100%)",
// //             }}
// //           />

// //           {/* Desktop Navigation */}
// //           <nav className="hidden lg:flex flex-1 justify-center items-center gap-7 text-white">
// //             {navItems.map((item) => (
// //               <div key={item.label} className="relative group">
// //                 <Link
// //                   href={item.href}
// //                   className="text-[15px] font-medium hover:text-[#f3d86b] transition flex items-center gap-1 py-6"
// //                 >
// //                   {item.label}
// //                   {item.submenu && <ChevronDown size={16} />}
// //                 </Link>

// //                 {/* Dropdown */}
// //                 {item.submenu && (
// //                   <div className="absolute left-0 top-full mt-1 min-w-[220px] bg-[#007a2f] rounded-xl shadow-2xl border-2 border-[#ecf1aa] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
// //                     {item.submenu.map((sub) => (
// //                       <Link
// //                         key={sub.href}
// //                         href={sub.href}
// //                         className="block px-5 py-3 text-sm text-white hover:bg-[#dfc354] hover:text-black border-b border-white/10 last:border-none"
// //                       >
// //                         {sub.label}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </nav>

// //           {/* Right Side Buttons */}
// //           <div className="hidden lg:flex items-center gap-4 pr-6">
// //             <Link
// //               href="/login"
// //               className="text-white text-[15px] font-medium px-6 py-2.5 hover:text-[#f3d86b] transition"
// //             >
// //               Log In
// //             </Link>
// //             <Link
// //               href="/register"
// //               className="bg-[#e9ca54] hover:bg-[#f3d86b] text-black px-7 py-2.5 rounded-xl text-[15px] font-semibold transition"
// //             >
// //               Register
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() => setMobileMenu(!mobileMenu)}
// //             className="lg:hidden ml-auto mr-6 text-white"
// //           >
// //             {mobileMenu ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {mobileMenu && (
// //           <div className="lg:hidden absolute top-full left-4 right-4 bg-[#007a2f] rounded-b-2xl shadow-xl p-5 border-t border-[#dfc354]/30 z-50">
// //             <div className="flex flex-col gap-1">
// //               {navItems.map((item) => (
// //                 <div key={item.label} className="py-1">
// //                   <Link
// //                     href={item.href}
// //                     className="text-white py-3 block font-medium"
// //                     onClick={() => setMobileMenu(false)}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                   {item.submenu && (
// //                     <div className="ml-4 border-l border-white/30 pl-4">
// //                       {item.submenu.map((sub) => (
// //                         <Link
// //                           key={sub.href}
// //                           href={sub.href}
// //                           className="block py-2 text-white/80 text-sm"
// //                           onClick={() => setMobileMenu(false)}
// //                         >
// //                           {sub.label}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}

// //               <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
// //                 <Link
// //                   href="/login"
// //                   className="bg-white text-[#007a2f] text-center py-3 rounded-xl font-medium"
// //                   onClick={() => setMobileMenu(false)}
// //                 >
// //                   Log In
// //                 </Link>
// //                 <Link
// //                   href="/register"
// //                   className="bg-[#e9ca54] text-center py-3 rounded-xl font-semibold"
// //                   onClick={() => setMobileMenu(false)}
// //                 >
// //                   Register
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }



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
      submenu: [
        { label: "Introduction", href: "/about" },
        { label: "Mission & Vision", href: "/about" },
        { label: "Department Structure", href: "/about" },
        { label: "Administrative Desk", href: "/about" },
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
        { label: "Circular", href: "/circular" },
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
        <div className="max-w-[1550px] mx-auto bg-[#f4d76a] rounded-xl px-3 md:px-5 py-2">

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

        <div className="max-w-[1550px] mx-auto px-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">

          <Image
            src="/govjhar 3.svg"
            width={45}
            height={45}
            alt="Government Logo"
            className="w-[36px] h-[36px] md:w-[45px] md:h-[45px] hidden md:block"
          />

          <div className="text-center">

            <h1 className="font-serif font-bold leading-tight text-[24px] sm:text-[30px] md:text-[40px]">

              <span className="text-[#145b2d]">
                झारखण्ड
              </span>{" "}

              <span className="text-[#2b2217]">
                राज्य युवा आयोग
              </span>

            </h1>

          </div>

          <Image
            src="/govjhar 4.svg"
            width={45}
            height={45}
            alt="Government Logo"
            className="w-[36px] h-[36px] md:w-[45px] md:h-[45px] hidden md:block
             "
          />

        </div>

      </div>

      {/* ================= NAVIGATION STARTS BELOW ================= */}
            {/* ================= NAVIGATION ================= */}

      <div className="px-3 md:px-4 pb-3">
        <div className="relative max-w-[1550px] mx-auto bg-[#0b7b33] rounded-xl shadow">

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