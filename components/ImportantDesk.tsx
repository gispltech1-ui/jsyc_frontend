"use client";

import { Bell, Newspaper, Link2 } from "lucide-react";

const notices = [
  "Admission Open for Session 2026",
  "Scholarship Applications Available",
  "Student Verification Notice",
  "Training Registration Started",
  "Exam Schedule Published",
];

const news = [
  "JSYC launches new skill development initiative",
  "New Learning Centres inaugurated",
  "Teacher Training Program announced",
  "Digital Education Mission started",
  "Career Guidance Workshop next month",
];

const links = [
  "Student Registration Portal",
  "Teacher Registration Portal",
  "Download Prospectus",
  "Online Verification",
  "Help & Support Centre",
];

export default function ImportantDesk() {
  return (
    <>
      <section className="bg-[#e8e0c9] py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-center text-4xl font-semibold text-black mb-7">
            Important Desk
          </h2>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Divider */}
            <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-px bg-white/60" />
            <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-px bg-white/60" />

            <DeskCard
              title="Important Notices"
              icon={<Bell size={18} />}
              items={notices}
            />

            <DeskCard
              title="News & Events"
              icon={<Newspaper size={18} />}
              items={news}
            />

            <DeskCard
              title="Quick Links"
              icon={<Link2 size={18} />}
              items={links}
            />

          </div>

        </div>

      </section>

      <style jsx global>{`
        .vertical-marquee {
          display: flex;
          flex-direction: column;
          animation: scrollUp 5s linear infinite;
        }

        .vertical-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </>
  );
}

function DeskCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div>

      {/* Header */}
      <div className="bg-[#007a2f] h-14 rounded-tr-[24px] ml-3 flex items-center justify-center gap-2 text-white font-medium text-lg">
        {icon}
        {title}
      </div>

      {/* Body */}
      <div className="bg-[#ecd98f] h-[280px] overflow-hidden rounded-b-md">

        <div className="vertical-marquee">

          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="
                min-h-[35px]
                flex
                items-center
                justify-center
                px-0
                text-center
                text-[14px]
                text-red-600
                border-b
                border-yellow-300
              "
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}