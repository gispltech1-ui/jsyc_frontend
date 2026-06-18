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

const teachers = [
  {
    id: "TCH001",
    name: "Dr. Anil Verma",
    qualification: "PhD Computer Science",
    experience: "15 years",
    subject: "Programming",
    center: "Ranchi Central",
    status: "active",
  },
  {
    id: "TCH002",
    name: "Prof. Meena Singh",
    qualification: "M.Tech Electronics",
    experience: "12 years",
    subject: "Circuit Design",
    center: "Jamshedpur East",
    status: "active",
  },
  {
    id: "TCH003",
    name: "Suresh Kumar",
    qualification: "M.Tech Mechanical",
    experience: "8 years",
    subject: "Thermodynamics",
    center: "Dhanbad North",
    status: "pending",
  },
  {
    id: "TCH004",
    name: "Rekha Patel",
    qualification: "M.Tech Civil",
    experience: "10 years",
    subject: "Structural Engineering",
    center: "Bokaro Central",
    status: "active",
  },
];

export default function TeacherManagement() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Teacher Management
          </h1>

          <p className="text-[13px] text-slate-500 mt-1">
            Manage and monitor all teacher registrations
          </p>
        </div>

        {/* <button className="h-10 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium">
          <Plus size={16} />
          Add Teacher
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
              placeholder="Search by ID, name, subject, or center..."
              className="w-full h-10 rounded-lg pl-10 pr-4 text-sm outline-none border border-slate-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="h-10 px-4 border border-slate-200 rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
            <Filter size={16} />
            Filters
          </button>

          <button className="h-10 px-4 border border-slate-200 rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
            <Download size={16} />
            Export
          </button>
        </div>

        {/* Top Info */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] text-slate-600">
            Showing <span className="font-semibold">4</span> teachers
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-slate-500">
              Rows per page:
            </span>

            <select className="h-8 px-2 border border-slate-200 rounded text-sm">
              <option>10</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  TEACHER ID
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  NAME
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  QUALIFICATION
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  EXPERIENCE
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  SUBJECT
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  CENTER
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  STATUS
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-t border-slate-200 hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-3 text-[12px] font-mono">
                    {teacher.id}
                  </td>

                  <td className="px-4 py-3 text-[14px] font-medium">
                    {teacher.name}
                  </td>

                  <td className="px-4 py-3 text-[13px]">
                    {teacher.qualification}
                  </td>

                  <td className="px-4 py-3 text-[13px]">
                    {teacher.experience}
                  </td>

                  <td className="px-4 py-3 text-[13px]">
                    {teacher.subject}
                  </td>

                  <td className="px-4 py-3 text-[13px]">
                    {teacher.center}
                  </td>

                  <td className="px-4 py-3">
                    {teacher.status === "active" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        active
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        pending
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button>
                        <Eye
                          size={16}
                          className="text-blue-600 hover:text-blue-700"
                        />
                      </button>

                      <button>
                        <Pencil
                          size={16}
                          className="text-slate-500 hover:text-slate-700"
                        />
                      </button>

                      {teacher.status === "pending" && (
                        <>
                          <button>
                            <Check
                              size={16}
                              className="text-green-600 hover:text-green-700"
                            />
                          </button>

                          <button>
                            <X
                              size={16}
                              className="text-red-500 hover:text-red-600"
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