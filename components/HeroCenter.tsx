"use client";

import {
  MapPin,
  ArrowRight,
  Building2,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

type Center = {
  id: string;
  name: string;
  district: string;
  studentCount: number;
  createdAt: string;
};

export default function HeroCentersSection() {
  const [centers, setCenters] = useState<Center[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCenters = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/center`
        );

        const result = await response.json();

        console.log("CENTERS API RESPONSE:", result);

        if (result.success) {
          setCenters(result.data || []);
        } else {
          setCenters([]);
        }
      } catch (error) {
        console.error("GET CENTERS ERROR:", error);
        setCenters([]);
      } finally {
        setLoading(false);
      }
    };

    getCenters();
  }, []);

  return (
    <section className="bg-[#FDF4D5] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            HEADING
        ========================= */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Our Centers
          </h2>

          <p className="text-slate-500 text-lg">
            Quality education centers across Jharkhand
          </p>
        </div>

        {/* =========================
            LOADING
        ========================= */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <p className="text-slate-500">
              Loading centers...
            </p>
          </div>
        )}

        {/* =========================
            EMPTY
        ========================= */}
        {!loading && centers.length === 0 && (
          <div className="flex justify-center items-center py-16">
            <p className="text-slate-500">
              No centers available.
            </p>
          </div>
        )}

        {/* =========================
            CENTER CARDS
        ========================= */}
        {!loading && centers.length > 0 && (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {centers.map((center) => (
              <div
                key={center.id}
                className="
                  group
                  relative
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-7
                  overflow-hidden
                  shadow-sm
                  hover:border-emerald-400
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]
                  transition-all
                  duration-300
                "
              >

                {/* =========================
                    TOP GREEN STRIP
                ========================= */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-gradient-to-r
                    from-emerald-500
                    to-green-600
                  "
                />

                {/* =========================
                    TOP SECTION
                ========================= */}
                <div className="flex justify-between items-start">

                  {/* Icon */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-r
                      from-emerald-500
                      to-green-600
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      shadow-emerald-100
                    "
                  >
                    <Building2 className="w-7 h-7 text-white" />
                  </div>

                  {/* Student Count */}
                  <span
                    className="
                      bg-emerald-50
                      text-emerald-700
                      text-xs
                      font-semibold
                      px-3
                      py-1.5
                      rounded-full
                    "
                  >
                    {center.studentCount} Students
                  </span>

                </div>

                {/* =========================
                    CENTER NAME
                ========================= */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {center.name}
                </h3>

                {/* =========================
                    LOCATION
                ========================= */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-3
                    text-slate-500
                  "
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />

                  <span>
                    {center.district}, Jharkhand
                  </span>
                </div>

                {/* =========================
                    DESCRIPTION
                ========================= */}
                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-7
                  "
                >
                  Premium learning facility with modern
                  infrastructure for quality education and
                  skill development.
                </p>

                {/* =========================
                    VIEW DETAILS
                ========================= */}
                {/* <Link
                  href={`/centers/${center.id}`}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-emerald-700
                    font-semibold
                    group-hover:gap-4
                    transition-all
                    duration-300
                  "
                >
                  View Details

                  <ArrowRight className="w-4 h-4" />
                </Link> */}

                {/* =========================
                    HOVER ACCENT
                ========================= */}
                <div
                  className="
                    absolute
                    -right-10
                    -bottom-10
                    w-28
                    h-28
                    bg-emerald-50
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

              </div>
            ))}

          </div>
        )}

        {/* =========================
            VIEW ALL CENTERS
        ========================= */}
        <div className="flex justify-center mt-14">

          <Link
            href="/centers"
            className="
              bg-white
              border
              border-slate-300
              px-8
              py-4
              rounded-xl
              font-medium
              text-slate-700
              hover:border-emerald-500
              hover:text-emerald-700
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            View All Centers
          </Link>

        </div>

      </div>
    </section>
  );
}