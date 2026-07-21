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
    notificationNo: "59 Dt. 09.05.2017",
    date: "",
    description: "District Level Sports Operational Committee",
  },
  {
    id: 2,
    notificationNo: "553 Dt.-17.05.2002",
    date: "",
    description: "Sportsperson Welfare Fund",
  },
  {
    id: 3,
    notificationNo: "56",
    date: "07/11/2014",
    description: "Direct Recruitment Related Notification",
  },
  {
    id: 4,
    notificationNo: "178",
    date: "06/18/2015",
    description: "Direct Recruitment Related Notification",
  },
  {
    id: 5,
    notificationNo: "479",
    date: "03/31/2002",
    description:
      "Notification Regarding Grant to State Sports Association",
  },
  {
    id: 6,
    notificationNo: "622",
    date: "03/07/2002",
    description:
      "Notification Regarding Grant to State Sports Association",
  },
  {
    id: 7,
    notificationNo: "",
    date: "06/10/2021",
    description: "Important Notice Regarding Scholarship",
  },
  {
    id: 8,
    notificationNo: "02",
    date: "01/21/2022",
    description:
      "Notification Regarding Committee for Sanctioning Grant to Sports Associations",
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

      <Image src={"/Notice.svg"}
        width={100}
        height={100}
        alt="image"
        className="w-full p-2"
      />



      <section className="bg-[#f6eed1] py-12">
      <div className="max-w-[1650px] mx-auto px-4">

        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-200">

          {/* Heading */}
          <div className="px-6 pt-5 pb-3">
            <h2 className="text-3xl font-bold text-[#0a5c2f]">
              Notifications
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[#005f2f] text-white">

                  <th className="w-[6%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                    Sl. No
                  </th>

                  <th className="w-[15%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                    Notification No.
                  </th>

                  <th className="w-[15%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                    Date (MM/DD/YY)
                  </th>

                  <th className="w-[54%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                    Description
                  </th>

                  <th className="w-[10%] border border-[#0b4d28] px-3 py-3 text-center text-sm font-semibold">
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
                    <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">
                      {item.id}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">
                      {item.notificationNo}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">
                      {item.date}
                    </td>

                    <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">
                      {item.description}
                    </td>

                    <td className="border border-gray-300 py-2">
                      <div className="flex justify-center">
                        <button className="hover:scale-110 transition duration-200">
                          <Image
                            src="/pdf.svg"
                            alt="PDF"
                            width={28}
                            height={34}
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
                            <div className="w-9 h-9 rounded-full bg-green-700 text-white flex items-center justify-center">
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