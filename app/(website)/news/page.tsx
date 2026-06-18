import CTASection from "@/components/CTASection";
import DepartmentStructure from "@/components/Department";
import NoticeBar from "@/components/StatsSection";
import { Calendar, Check, Clock, Star } from "lucide-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaGallery from "@/components/Media";

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

      <Image src={"/News.svg"}
        width={100}
        height={100}
        alt="image"
        className="w-full p-2"
      />

      <section className=" px-4 py-8">
        <div className=" mx-auto ">

          <div className="grid lg:grid-cols-[1fr_330px] gap-4">

            {/* Left Side */}
            <div className="space-y-4">

              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-5">

                    <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-md font-medium">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-4 text-slate-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.time}
                      </div>
                    </div>

                  </div>

                  <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-slate-500 leading-8 mb-6 text-sm">
                    {item.description}
                  </p>

                  <button className="px-5 py-2 border rounded-md bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium">
                    Read More
                  </button>
                </div>
              ))}

            </div>

            {/* Right Sidebar */}
            <div className="space-y-4">

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">

                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Categories
                </h3>

                <div className="space-y-2">

                  {categories.map((item, index) => (
                    <button
                      key={index}
                      className={`w-full text-sm text-left px-4 py-3 rounded-lg font-medium transition ${index === 0
                          ? "bg-sky-500 text-white"
                          : "hover:bg-slate-50 text-slate-700"
                        }`}
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              {/* Subscribe */}
              <div className="bg-[#eef7fb] rounded-2xl p-6 shadow-sm border border-slate-200">

                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Subscribe to Updates
                </h3>

                <p className="text-slate-500 mb-5 leading-7">
                  Get the latest news and updates delivered to your inbox
                </p>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <button className="w-full h-12 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold transition">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#f6eed1] py-10">
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