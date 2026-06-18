"use client"
import CTASection from "@/components/CTASection";
import DepartmentStructure from "@/components/Department";
import NoticeBar from "@/components/StatsSection";
import { Calendar, Check, Clock, Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaGallery from "@/components/Media";



import Image from "next/image";

const circulars = [
  {
    id: 1,
    letterNo: "15017",
    description: "Fitness Protocols for Age 05-18 Years v1 (English)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
  {
    id: 2,
    letterNo: "15017",
    description: "Fitness Protocols for Age 05-18 Years v1 (Hindi)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
  {
    id: 3,
    letterNo: "15017",
    description: "Fitness Protocols for Age 18-65 v1 (English)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
  {
    id: 4,
    letterNo: "15017",
    description: "Fitness Protocols for Age 18-65 v1 (Hindi)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
  {
    id: 5,
    letterNo: "15017",
    description: "Fitness Protocols for Age 65 v1 (English)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
  {
    id: 6,
    letterNo: "15017",
    description: "Fitness Protocols for Age 65 v1 (Hindi)",
    date: "11/06/2020",
    file: "/pdf.png",
  },
];



const news = [
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
];

const categories = [
  "All News",
  "Admission",
  "Technology",
  "Training",
  "Expansion",
  "Events",
  "Partnership",
];

export default function AboutPage() {
  return (
    <main className="bg-[#E8DFC7]">
      <NoticeBar />

      <Image src={"/Circular.svg"}
        width={100}
        height={100}
        alt="image"
        className="w-full p-2"
      />


<section className="bg-[#f5edd0] py-10">
      <div className="max-w-[1600px] mx-auto px-4">

        <div className="bg-white rounded-[26px] p-4 shadow-sm">

          {/* Title */}
                    <h2 className="text-3xl font-semibold mb-4">

            Circulars
          </h2>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-400">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[#f7f7f7]">
                  <th className="border border-gray-300 px-3 py-3 text-left text-sm font-semibold">
                    Sl. No
                  </th>

                  <th className="border border-gray-300 px-3 py-3 text-left text-sm font-semibold">
                    Letter No.
                  </th>

                  <th className="border border-gray-300 px-3 py-3 text-left text-sm font-semibold">
                    Description
                  </th>

                  <th className="border border-gray-300 px-3 py-3 text-left text-sm font-semibold">
                    Date (MM/DD/YY)
                  </th>

                  <th className="border border-gray-300 px-3 py-3 text-center text-sm font-semibold">
                    Documents
                  </th>
                </tr>
              </thead>

              <tbody>
                {circulars.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="border border-gray-300 px-3 py-4 text-sm">
                      {item.id}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-sm">
                      {item.letterNo}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-sm">
                      {item.description}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-sm">
                      {item.date}
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      <div className="flex justify-center">
                        <button className="hover:scale-110 transition">
                          <Image
                            src={"/pdf.svg"}
                            alt="PDF"
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>









      <section className="bg-[#f6eed1] pb-5">
        <div className="px-10">

          {/* Heading */}
          <h2 className="text-3xl font-semibold mb-10">
            Upcoming <span className="text-green-700">Events</span>
          </h2>

          <div className="grid lg:grid-cols-[1.45fr_1fr] gap-10 items-start">

            {/* Left Event Slider */}
            <div>

              <div
                className="
                bg-[#d9d9d9]
                rounded-[36px]
                h-[420px]
                w-full
              "
              />

              {/* Pagination */}
              <div className="flex items-center justify-center gap-6 mt-8">

                <button className="text-black hover:text-green-700 transition">
                  <ChevronLeft size={24} />
                </button>

                <span className="text-lg text-slate-700">
                  1 of 1
                </span>

                <button className="text-black hover:text-green-700 transition">
                  <ChevronRight size={24} />
                </button>

              </div>

            </div>

            {/* Calendar Card */}
            <div
              className="
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              min-h-[420px]
            "
            >

              <div className="grid grid-cols-[130px_1fr] h-full">

                {/* Left Filters */}
                <div className="border-r border-slate-200 p-4">

                  <div className="space-y-3 text-[14px]">

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      Today
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      Yesterday
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      This week
                    </div>

                    <div className="px-3 py-2 rounded-lg bg-[#dff0dc] text-slate-800">
                      Last week
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      This month
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      Last month
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      This year
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      Last year
                    </div>

                    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100">
                      All time
                    </div>

                  </div>
                </div>

                {/* Calendar */}
                <div className="p-4">

                  {/* Header */}
                  <div className="bg-[#eef7eb] rounded-lg h-11 flex items-center justify-between px-4 mb-6">

                    <button>
                      <ChevronLeft
                        size={18}
                        className="text-slate-600"
                      />
                    </button>

                    <h3 className="font-semibold text-slate-700">
                      January 2024
                    </h3>

                    <button>
                      <ChevronRight
                        size={18}
                        className="text-slate-600"
                      />
                    </button>

                  </div>

                  {/* Week Days */}
                  <div className="grid grid-cols-7 text-center text-sm text-slate-600 font-medium mb-4">
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                    <span>Su</span>
                  </div>

                  {/* Calendar Dates */}
                  <div className="grid grid-cols-7 gap-y-4 text-center text-sm">

                    {[
                      "", "1", "2", "3", "4", "5", "6",
                      "8", "9", "10", "11", "12", "13", "14",
                      "15", "16", "17", "18", "19", "20", "21",
                      "22", "23", "24", "25", "26", "27", "28",
                      "29", "30", "31", "", "", "", "",
                      "5", "6", "7", "8", "9", "10", "11",
                    ].map((day, index) => {
                      const active =
                        day === "12" ||
                        day === "18";

                      const smallDot =
                        day === "1" ||
                        day === "30";

                      return (
                        <div
                          key={index}
                          className="h-8 flex items-center justify-center relative"
                        >
                          {active ? (
                            <div className="w-9 h-9 rounded-full bg-[#7e57c2] text-white flex items-center justify-center">
                              {day}
                            </div>
                          ) : (
                            <>
                              <span className="text-slate-600">
                                {day}
                              </span>

                              {smallDot && (
                                <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#7e57c2]" />
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      <MediaGallery />

      <CTASection />

    </main>
  );
}