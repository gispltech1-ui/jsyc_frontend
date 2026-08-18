"use client";

import {
  Code2,
  Calculator,
  Palette,
  Globe,
  BookOpen,
  Heart,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

const icons = [
  Code2,
  Calculator,
  Palette,
  Globe,
  BookOpen,
  Heart,
];

type Course = {
  id: string;
  name: string;
  fee: string | number;
  createdAt: string;
};

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/courses`
        );

        const result = await response.json();

        console.log("COURSES API:", result);

        if (result.success) {
          setCourses(result.data || []);
        }
      } catch (error) {
        console.error("GET COURSES ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  return (
    <section className="bg-[#007234] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-center text-4xl font-semibold text-white mb-7">
            Featured Courses
          </h2>

          <p className="mt-4 text-md text-white">
            Explore our wide range of courses designed for your success
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-white py-10">
            Loading courses...
          </div>
        )}

        {/* No Courses */}
        {!loading && courses.length === 0 && (
          <div className="text-center text-white py-10">
            No courses available.
          </div>
        )}

        {/* Cards */}
        {!loading && courses.length > 0 && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {courses.map((course, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={course.id}
                  className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="flex justify-between items-start">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-700" />
                    </div>

                    {/* Fee */}
                    <span className="bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-lg">
                      ₹{Number(course.fee).toLocaleString("en-IN")}
                    </span>

                  </div>

                  {/* Course Name */}
                  <h3 className="mt-8 text-xl font-semibold text-slate-900">
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-md text-slate-500 leading-relaxed">
                    Explore this course and develop the skills required
                    for your academic and professional growth.
                  </p>

                  {/* Learn More */}
                  {/* <Link
                    href={`/courses/${course.id}`}
                    className="mt-8 w-full bg-slate-100 hover:bg-blue-50 rounded-xl py-4 flex items-center justify-center gap-3 font-semibold text-slate-800 group-hover:text-blue-700 transition"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link> */}

                </div>
              );
            })}

          </div>
        )}

        {/* View All */}
        <div className="flex justify-center mt-14">
          <Link
            href="/courses"
            className="px-8 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 font-medium"
          >
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}