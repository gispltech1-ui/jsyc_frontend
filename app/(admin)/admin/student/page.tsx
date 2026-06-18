"use client";

import {
  Search,
  Plus,
  Filter,
  Download,
  Eye,
  Pencil,
  Check,
  X,
} from "lucide-react";

const students = [
  {
    id: "STU001",
    photo: "👦",
    name: "Rajesh Kumar",
    mobile: "+91 9876543210",
    center: "Ranchi Central",
    course: "Computer Science",
    subject: "Programming",
    date: "15 May 2026",
    status: "active",
  },
  {
    id: "STU002",
    photo: "👩",
    name: "Priya Sharma",
    mobile: "+91 9876543211",
    center: "Jamshedpur East",
    course: "Electronics",
    subject: "Circuit Design",
    date: "18 May 2026",
    status: "active",
  },
  {
    id: "STU003",
    photo: "👦",
    name: "Amit Singh",
    mobile: "+91 9876543212",
    center: "Dhanbad North",
    course: "Mechanical",
    subject: "Thermodynamics",
    date: "22 May 2026",
    status: "pending",
  },
  {
    id: "STU004",
    photo: "👩",
    name: "Sneha Patel",
    mobile: "+91 9876543213",
    center: "Bokaro Central",
    course: "Civil",
    subject: "Structural Engineering",
    date: "25 May 2026",
    status: "active",
  },
  {
    id: "STU005",
    photo: "👦",
    name: "Vikram Yadav",
    mobile: "+91 9876543214",
    center: "Ranchi South",
    course: "Computer Science",
    subject: "Database Systems",
    date: "28 May 2026",
    status: "pending",
  },
];

export default function StudentManagement() {
  return (
    <div className="bg-slate-50">
      {/* Header */}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Student Management
          </h1>

          <p className="text-[13px] text-slate-500 mt-1">
            Manage and monitor all student enrollments
          </p>
        </div>

        {/* <button className="h-10 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus size={16} />
          Add Student
        </button> */}
      </div>

      {/* Main Card */}

      <div className="bg-white border border-slate-200 rounded-xl p-4">
        {/* Search */}

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by ID, name, mobile, or center..."
              className="w-full h-10  rounded-lg pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="h-10 px-4  rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
            <Filter size={16} />
            Filters
          </button>

          <button className="h-10 px-4  rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
            <Download size={16} />
            Export
          </button>
        </div>

        {/* Top Info */}

        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] text-slate-600">
            Showing <span className="font-semibold">5</span> students
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-slate-500">
              Rows per page:
            </span>

            <select className="h-8 px-2  rounded text-sm">
              <option>10</option>
            </select>
          </div>
        </div>

        {/* Table */}

       <div className="overflow-x-auto rounded-xl">
  <table className="w-full">
    <thead>
      <tr className="bg-slate-100">
        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          STUDENT ID
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          NAME
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          MOBILE
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          CENTER
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          COURSE
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          SUBJECT
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          ENROLLMENT DATE
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          STATUS
        </th>

        <th className="px-3 py-2 text-left text-[10px] font-semibold tracking-wider text-slate-700">
          ACTIONS
        </th>
      </tr>
    </thead>

    <tbody>
      {students.map((student) => (
        <tr
          key={student.id}
          className="border-t border-slate-200 hover:bg-slate-50 transition"
        >
          <td className="px-3 py-2 text-[11px] font-mono">
            {student.id}
          </td>

          <td className="px-3 py-2 text-[13px] font-medium">
            {student.name}
          </td>

          <td className="px-3 py-2 text-[12px]">
            {student.mobile}
          </td>

          <td className="px-3 py-2 text-[12px]">
            {student.center}
          </td>

          <td className="px-3 py-2 text-[12px]">
            {student.course}
          </td>

          <td className="px-3 py-2 text-[12px]">
            {student.subject}
          </td>

          <td className="px-3 py-2 text-[12px]">
            {student.date}
          </td>

          <td className="px-3 py-2">
            {student.status === "active" ? (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                active
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                pending
              </span>
            )}
          </td>

          <td className="px-3 py-2">
            <div className="flex items-center gap-2">
              <button>
                <Eye
                  size={14}
                  className="text-blue-600"
                />
              </button>

              <button>
                <Pencil
                  size={14}
                  className="text-slate-500"
                />
              </button>

              {student.status === "pending" && (
                <>
                  <button>
                    <Check
                      size={14}
                      className="text-green-600"
                    />
                  </button>

                  <button>
                    <X
                      size={14}
                      className="text-red-500"
                    />
                  </button>
                </>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
}