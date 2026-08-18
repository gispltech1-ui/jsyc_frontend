"use client";

import CTASection from "@/components/CTASection";
import DepartmentStructure from "@/components/Department";
import NoticeBar from "@/components/StatsSection";
import MediaGallery from "@/components/Media";

import {
  Calendar,
  Check,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ===============================
  // GET NOTIFICATIONS
  // ===============================

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/notification`
        );

        const result = await res.json();

        if (result.success) {
          setNotifications(result.data);
        }
      } catch (error) {
        console.error(
          "Failed to fetch notifications:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getNotifications();
  }, []);

  return (
    <main className="bg-[#E8DFC7]">

      {/* ===============================
          NOTICE BAR
      =============================== */}

      <NoticeBar />


      {/* ===============================
          NOTICE IMAGE
      =============================== */}

      <Image
        src="/Notice.svg"
        width={100}
        height={100}
        alt="Notice"
        className="w-full p-2"
      />


      {/* ===============================
          NOTIFICATIONS
      =============================== */}

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

                {/* ===============================
                    TABLE HEADER
                =============================== */}

                <thead>

                  <tr className="bg-[#005f2f] text-white">

                    <th className="w-[6%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                      Sl. No
                    </th>

                    <th className="w-[15%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                      Notification No.
                    </th>

                    <th className="w-[15%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                      Date
                    </th>

                    <th className="w-[54%] border border-[#0b4d28] px-3 py-3 text-left text-sm font-semibold">
                      Description
                    </th>

                    <th className="w-[10%] border border-[#0b4d28] px-3 py-3 text-center text-sm font-semibold">
                      Documents
                    </th>

                  </tr>

                </thead>


                {/* ===============================
                    TABLE BODY
                =============================== */}

                <tbody>

                  {/* LOADING */}

                  {loading && (

                    <tr>

                      <td
                        colSpan={5}
                        className="text-center py-10 text-slate-500"
                      >
                        Loading notifications...
                      </td>

                    </tr>

                  )}


                  {/* EMPTY */}

                  {!loading &&
                    notifications.length === 0 && (

                      <tr>

                        <td
                          colSpan={5}
                          className="text-center py-10 text-slate-500"
                        >
                          No notifications available.
                        </td>

                      </tr>

                    )}


                  {/* DATA */}

                  {!loading &&
                    notifications.length > 0 &&
                    notifications.map(
                      (item, index) => (

                        <tr
                          key={item.id}
                          className="hover:bg-gray-50 transition"
                        >

                          {/* SL NO */}

                          <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">

                            {index + 1}

                          </td>


                          {/* NOTIFICATION NUMBER */}

                          <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">

                            {item.id}

                          </td>


                          {/* DATE */}

                          <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">

                            {item.createdAt
                              ? new Date(
                                  item.createdAt
                                ).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  }
                                )
                              : "-"}

                          </td>


                          {/* DESCRIPTION */}

                          <td className="border border-gray-300 px-3 py-4 text-[14px] text-gray-700">

                            <p className="font-semibold text-slate-800">

                              {item.title}

                            </p>

                            {item.message && (

                              <p className="text-slate-500 mt-1">

                                {item.message}

                              </p>

                            )}

                          </td>


                          {/* PDF */}

                          <td className="border border-gray-300 py-2">

                            <div className="flex justify-center">

                              {item.pdfUrl ? (

                                <a
                                  href={`${process.env.NEXT_PUBLIC_API_URL}/${item.pdfUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:scale-110 transition duration-200"
                                >

                                  <Image
                                    src="/pdf.svg"
                                    alt="PDF"
                                    width={28}
                                    height={34}
                                    className="object-contain"
                                  />

                                </a>

                              ) : (

                                <span className="text-xs text-slate-400">
                                  No PDF
                                </span>

                              )}

                            </div>

                          </td>

                        </tr>

                      )
                    )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>


      {/* ===============================
          UPCOMING EVENTS
      =============================== */}

    


      {/* ===============================
          MEDIA
      =============================== */}

      <MediaGallery />


      {/* ===============================
          CTA
      =============================== */}

      <CTASection />

    </main>
  );
}