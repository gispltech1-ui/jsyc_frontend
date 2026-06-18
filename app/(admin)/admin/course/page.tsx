"use client";

import { Search, Plus, BookOpen } from "lucide-react";

const courses = [
  {
    id: "CRS001",
    name: "Computer Science",
    duration: "2 Years",
    subjects: 12,
    students: 1850,
    status: "active",
  },
  {
    id: "CRS002",
    name: "Electronics",
    duration: "2 Years",
    subjects: 10,
    students: 1420,
    status: "active",
  },
  {
    id: "CRS003",
    name: "Mechanical",
    duration: "2 Years",
    subjects: 11,
    students: 1280,
    status: "active",
  },
];

export default function CourseManagement() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Course Management
          </h1>

          <p className="text-[13px] text-slate-500 mt-1">
            Manage all courses and programs
          </p>
        </div>

        <button className="h-11 px-5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus size={16} />
          Add Course
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        {/* Search */}
        <div className="relative mb-5">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search courses..."
            className="w-full h-10 rounded-lg border border-slate-200 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Course Cards */}
        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center">
                    <BookOpen
                      size={26}
                      className="text-blue-700"
                    />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-medium text-slate-900">
                      {course.name}
                    </h3>

                    <p className="text-[12px] text-slate-500 mt-1">
                      {course.id}
                    </p>
                  </div>
                </div>

                {/* Right Stats */}
                <div className="flex items-center gap-14">
                  <div>
                    <p className="text-[12px] text-slate-500">
                      Duration
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {course.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-500">
                      Subjects
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {course.subjects}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-500">
                      Students
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {course.students}
                    </p>
                  </div>

                  <div>
                    <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                      {course.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}