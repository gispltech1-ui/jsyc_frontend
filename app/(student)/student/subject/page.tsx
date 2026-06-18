"use client";

import { Search, BookOpen } from "lucide-react";

const subjects = [
  {
    id: "SUB001",
    name: "Programming",
    course: "Computer Science",
    teacher: "Prof. Rajesh Sharma",
    students: 320,
    status: "active",
  },
  {
    id: "SUB002",
    name: "Database Systems",
    course: "Computer Science",
    teacher: "Dr. Anil Verma",
    students: 280,
    status: "active",
  },
  {
    id: "SUB003",
    name: "Web Development",
    course: "Computer Science",
    teacher: "Prof. Meena Singh",
    students: 295,
    status: "active",
  },
  {
    id: "SUB004",
    name: "Data Structures",
    course: "Computer Science",
    teacher: "Suresh Kumar",
    students: 260,
    status: "active",
  },
];

export default function StudentSubjectsPage() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-slate-900">
          Subjects
        </h1>

        <p className="text-[13px] text-slate-500 mt-1">
          View all enrolled subjects
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        {/* Search */}
        <div className="relative mb-5">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search subjects..."
            className="w-full h-10 rounded-lg border border-slate-200 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject Cards */}
        <div className="space-y-3">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <BookOpen
                      size={22}
                      className="text-blue-700"
                    />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-medium text-slate-900">
                      {subject.name}
                    </h3>

                    <p className="text-[12px] text-slate-500 mt-1">
                      {subject.id}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-[12px] text-slate-500">
                      Course
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {subject.course}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-500">
                      Teacher
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {subject.teacher}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-500">
                      Students
                    </p>

                    <p className="text-[14px] font-medium mt-1">
                      {subject.students}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                    {subject.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}