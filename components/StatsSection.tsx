"use client";

import { Megaphone } from "lucide-react";

export default function NoticeBar() {
  return (
    <div className="w-full px-2 py-2 bg-[#e8dfc7]">
      <div className="flex items-center overflow-hidden rounded-xl shadow-sm">

        {/* Left Label */}
        <div className="flex items-center gap-3 bg-[#e9cf67] px-8 h-12 shrink-0">
          <span className="font-medium text-black text-sm">
            What's New
          </span>

          <Megaphone size={16} className="text-black" />
        </div>

        {/* Right Marquee */}
        <div className="relative flex-1 h-12 bg-[#007a2f] overflow-hidden">
          <div className="absolute whitespace-nowrap marquee text-white text-sm font-medium leading-[48px]">
            📢 Admissions Open for 2026 • New Training Centers Added •
            Scholarship Applications Available • Important Notice for Students •
            Upcoming Events & Workshops • Admissions Open for 2026 • New Training Centers Added •
            Scholarship Applications Available • Important Notice for Students •
            Upcoming Events & Workshops •
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}