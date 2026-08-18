"use client";

import {
  Search,
  Eye,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function StudentManagement() {
  const [students, setStudents] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    totalStudents: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  // =====================================
  // GET STUDENTS
  // =====================================

  const getStudents = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/student/get-all-student?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
      );

      const result = await res.json();

      if (result.success) {
        setStudents(result.data);

        setPagination(result.pagination);
      }
    } catch (error) {
      console.error(
        "Failed to fetch students:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // CALL API WHEN PAGE CHANGES
  // =====================================

  useEffect(() => {
    getStudents();
  }, [page]);

  // =====================================
  // SEARCH
  // =====================================

  const filteredStudents = students.filter(
    (student) => {
      const searchText =
        search.toLowerCase();

      return (
        student.fullName
          ?.toLowerCase()
          .includes(searchText) ||

        student.user?.email
          ?.toLowerCase()
          .includes(searchText) ||

        student.user?.mobileNumber?.includes(
          search
        ) ||

        student.district
          ?.toLowerCase()
          .includes(searchText)
      );
    }
  );

  // =====================================
  // LOADING
  // =====================================

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-slate-500">
          Loading students...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HEADER */}

      <div className="mb-6">

        <h1 className="text-2xl font-semibold text-slate-900">
          Student Management
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Manage all registered students
        </p>

      </div>


      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white border border-slate-200 rounded-xl p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Total Students
              </p>

              <h2 className="text-2xl font-bold mt-1">
                {pagination.totalStudents}
              </h2>

            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">

              <Users className="text-blue-600" />

            </div>

          </div>

        </div>

      </div>


      {/* MAIN CARD */}

      <div className="bg-white border border-slate-200 rounded-xl">

        {/* SEARCH */}

        <div className="p-5 border-b border-slate-200">

          <div className="relative max-w-md">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search student..."
              className="
                w-full
                h-10
                border
                border-slate-200
                rounded-lg
                pl-10
                pr-4
                text-sm
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

        </div>


        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Student
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Contact
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Course
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Subject
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Center
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-slate-500">
                  Location
                </th>

                {/* <th className="text-right px-5 py-4 text-xs font-semibold text-slate-500">
                  Action
                </th> */}

              </tr>

            </thead>


            <tbody>

              {filteredStudents.length === 0 ? (

                <tr>

                  <td
                    colSpan={7}
                    className="text-center py-12 text-slate-500"
                  >
                    No students found.
                  </td>

                </tr>

              ) : (

                filteredStudents.map(
                  (student) => (

                    <tr
                      key={student.id}
                      className="
                        border-t
                        border-slate-100
                        hover:bg-slate-50
                      "
                    >

                      {/* STUDENT */}

                      <td className="px-5 py-4">

                        <div className="flex items-center gap-3">

                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">

                            {student.fullName
                              ?.charAt(0)
                              ?.toUpperCase()}

                          </div>

                          <div>

                            <p className="font-medium text-sm text-slate-900">
                              {student.fullName}
                            </p>

                            <p className="text-xs text-slate-500">
                              ID: {student.id}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* CONTACT */}

                      <td className="px-5 py-4">

                        <div className="space-y-1">

                          <div className="flex items-center gap-2 text-xs text-slate-600">

                            <Mail size={13} />

                            {student.user?.email ||
                              "-"}

                          </div>

                          <div className="flex items-center gap-2 text-xs text-slate-600">

                            <Phone size={13} />

                            {student.user
                              ?.mobileNumber ||
                              "-"}

                          </div>

                        </div>

                      </td>


                      {/* COURSE */}

                      <td className="px-5 py-4">

                        <p className="text-sm font-medium text-slate-800">

                          {student.enrollment
                            ?.course?.name ||
                            "-"}

                        </p>

                      </td>


                      {/* SUBJECT */}

                      <td className="px-5 py-4">

                        <p className="text-sm text-slate-700">

                          {student.enrollment
                            ?.subject?.name ||
                            "-"}

                        </p>

                      </td>


                      {/* CENTER */}

                      <td className="px-5 py-4">

                        <p className="text-sm text-slate-700">

                          {student.enrollment
                            ?.center?.name ||
                            "-"}

                        </p>

                      </td>


                      {/* LOCATION */}

                      <td className="px-5 py-4">

                        <div className="flex items-center gap-2">

                          <MapPin
                            size={14}
                            className="text-slate-400"
                          />

                          <div>

                            <p className="text-sm text-slate-700">
                              {student.district ||
                                "-"}
                            </p>

                            <p className="text-xs text-slate-400">
                              {student.state ||
                                "-"}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* ACTION */}
{/* 
                      <td className="px-5 py-4 text-right">

                        <button
                          onClick={() =>
                            console.log(
                              student
                            )
                          }
                          className="
                            inline-flex
                            items-center
                            gap-2
                            px-3
                            py-2
                            rounded-lg
                            text-xs
                            font-medium
                            text-blue-700
                            bg-blue-50
                            hover:bg-blue-100
                          "
                        >

                          <Eye size={14} />

                          View

                        </button>

                      </td> */}

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>


        {/* ===============================
            PAGINATION
        =============================== */}

        <div className="flex items-center justify-between px-5 py-4 border-t border-slate-200">

          {/* RESULT COUNT */}

          <p className="text-sm text-slate-500">

            Showing{" "}

            <span className="font-medium text-slate-700">
              {pagination.totalStudents === 0
                ? 0
                : (page - 1) * 10 + 1}
            </span>

            {" - "}

            <span className="font-medium text-slate-700">
              {Math.min(
                page * 10,
                pagination.totalStudents
              )}
            </span>

            {" of "}

            <span className="font-medium text-slate-700">
              {pagination.totalStudents}
            </span>

          </p>


          {/* BUTTONS */}

          <div className="flex items-center gap-2">

            <button
              disabled={
                !pagination.hasPreviousPage
              }
              onClick={() =>
                setPage((prev) => prev - 1)
              }
              className="
                flex
                items-center
                gap-1
                px-3
                py-2
                border
                border-slate-200
                rounded-lg
                text-sm
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:bg-slate-50
              "
            >

              <ChevronLeft size={16} />

              Previous

            </button>


            <span className="px-3 py-2 text-sm font-medium">

              Page {pagination.currentPage} of{" "}
              {pagination.totalPages}

            </span>


            <button
              disabled={
                !pagination.hasNextPage
              }
              onClick={() =>
                setPage((prev) => prev + 1)
              }
              className="
                flex
                items-center
                gap-1
                px-3
                py-2
                border
                border-slate-200
                rounded-lg
                text-sm
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:bg-slate-50
              "
            >

              Next

              <ChevronRight size={16} />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}