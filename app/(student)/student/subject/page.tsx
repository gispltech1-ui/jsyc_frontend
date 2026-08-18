"use client";

import { Search, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

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
   const [student, setStudent] = useState<any>(null);
    
      useEffect(() => {
        const user = localStorage.getItem("user");
    
        if (!user) return;
    
        const parsedUser = JSON.parse(user);
    
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/student/${parsedUser.id}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setStudent(data.data);
            }
          })
          .catch(console.error);
    
      }, []);
    
      if (!student) {
        return (
          <div className="flex justify-center items-center h-[70vh]">
            Loading...
          </div>
        );
      }
    
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
        {/* <div className="relative mb-5">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search subjects..."
            className="w-full h-10 rounded-lg border border-slate-200 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* Subject Cards */}
        <div className="space-y-3">

  <div className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition">

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
            {student.enrollment?.subject?.name}
          </h3>

          <p className="text-[12px] text-slate-500 mt-1">
            {student.enrollment?.subject?.id}
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
            {student.enrollment?.course?.name}
          </p>

        </div>

        <div>

          <p className="text-[12px] text-slate-500">
            Center
          </p>

          <p className="text-[14px] font-medium mt-1">
            {student.enrollment?.center?.name}
          </p>

        </div>

        <div>

          <p className="text-[12px] text-slate-500">
            Batch
          </p>

          <p className="text-[14px] font-medium mt-1">
            {student.enrollment?.batch}
          </p>

        </div>

      </div>

      <div>

        <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
          {student.payments?.[0]?.status === "SUCCESS"
            ? "Active"
            : "Pending"}
        </span>

      </div>

    </div>

    {/* Bottom Row */}

    <div className="grid md:grid-cols-3 gap-4 mt-5 border-t pt-4">

      <div>

        <p className="text-xs text-slate-500">
          Learning Mode
        </p>

        <p className="font-medium">
          {student.enrollment?.learningMode}
        </p>

      </div>

      <div>

        <p className="text-xs text-slate-500">
          Preferred Timing
        </p>

        <p className="font-medium">
          {student.enrollment?.preferredTiming}
        </p>

      </div>

      <div>

        <p className="text-xs text-slate-500">
          Center District
        </p>

        <p className="font-medium">
          {student.enrollment?.center?.district}
        </p>

      </div>

    </div>

  </div>

</div>
      </div>
    </div>
  );
}