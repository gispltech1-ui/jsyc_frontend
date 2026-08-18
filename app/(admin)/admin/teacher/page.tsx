"use client";

import {
  Search,
  Filter,
  Download,
  Eye,
  Pencil,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 10,
    totalTeachers: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  // ==========================================
  // GET ALL TEACHERS
  // ==========================================

  const getTeachers = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/teacher/get-all-teacher?page=${page}`,
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
        setTeachers(result.data);

        setPagination(result.pagination);
      }
    } catch (error) {
      console.error(
        "Failed to fetch teachers:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CALL API WHEN PAGE CHANGES
  // ==========================================

  useEffect(() => {
    getTeachers();
  }, [page]);

  // ==========================================
  // SEARCH
  // ==========================================

  const filteredTeachers = teachers.filter(
    (teacher) => {
      const searchText =
        search.toLowerCase();

      return (
        teacher.id
          ?.toLowerCase()
          .includes(searchText) ||

        teacher.fullName
          ?.toLowerCase()
          .includes(searchText) ||

        teacher.expertiseSubjects
          ?.toLowerCase()
          .includes(searchText) ||

        teacher.subjectsCanTeach
          ?.toLowerCase()
          .includes(searchText) ||

        teacher.preferredCenter1
          ?.toLowerCase()
          .includes(searchText) ||

        teacher.preferredCenter2
          ?.toLowerCase()
          .includes(searchText)
      );
    }
  );

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-sm text-slate-500">
          Loading teachers...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex items-start justify-between mb-4">

        <div>

          <h1 className="text-xl font-semibold text-slate-900">
            Teacher Management
          </h1>

          <p className="text-[13px] text-slate-500 mt-1">
            Manage and monitor all teacher registrations
          </p>

        </div>

      </div>


      {/* ======================================
          MAIN CARD
      ====================================== */}

      <div className="bg-white border border-slate-200 rounded-xl p-4">

        {/* SEARCH */}

        <div className="flex flex-wrap gap-3 mb-4">

          <div className="relative flex-1 min-w-[300px]">

            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by ID, name, subject, or center..."
              className="
                w-full
                h-10
                rounded-lg
                pl-10
                pr-4
                text-sm
                outline-none
                border
                border-slate-200
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>


          <button
            className="
              h-10
              px-4
              border
              border-slate-200
              rounded-lg
              flex
              items-center
              gap-2
              text-sm
              hover:bg-slate-50
            "
          >
            <Filter size={16} />

            Filters

          </button>


          <button
            className="
              h-10
              px-4
              border
              border-slate-200
              rounded-lg
              flex
              items-center
              gap-2
              text-sm
              hover:bg-slate-50
            "
          >
            <Download size={16} />

            Export

          </button>

        </div>


        {/* ======================================
            TOP INFO
        ====================================== */}

        <div className="flex items-center justify-between mb-3">

          <p className="text-[13px] text-slate-600">

            Showing{" "}

            <span className="font-semibold">
              {filteredTeachers.length}
            </span>

            {" "}of{" "}

            <span className="font-semibold">
              {pagination.totalTeachers}
            </span>

            {" "}teachers

          </p>


          <div className="flex items-center gap-2">

            <span className="text-[13px] text-slate-500">
              Rows per page:
            </span>

            <select
              disabled
              value={10}
              className="
                h-8
                px-2
                border
                border-slate-200
                rounded
                text-sm
                bg-white
              "
            >
              <option value={10}>
                10
              </option>
            </select>

          </div>

        </div>


        {/* ======================================
            TABLE
        ====================================== */}

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

                {/* <th className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider text-slate-700">
                  ACTIONS
                </th> */}

              </tr>

            </thead>


            <tbody>

              {filteredTeachers.length === 0 ? (

                <tr>

                  <td
                    colSpan={8}
                    className="text-center py-12 text-slate-500"
                  >
                    No teachers found.
                  </td>

                </tr>

              ) : (

                filteredTeachers.map(
                  (teacher) => (

                    <tr
                      key={teacher.id}
                      className="
                        border-t
                        border-slate-200
                        hover:bg-slate-50
                        transition
                      "
                    >

                      {/* TEACHER ID */}

                      <td className="px-4 py-3 text-[12px] font-mono">

                        {teacher.id}

                      </td>


                      {/* NAME */}

                      <td className="px-4 py-3">

                        <div className="flex items-center gap-3">

                          {teacher.documents?.photo ? (

                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${teacher.documents.photo}`}
                              alt={teacher.fullName}
                              className="
                                w-9
                                h-9
                                rounded-full
                                object-cover
                              "
                            />

                          ) : (

                            <div
                              className="
                                w-9
                                h-9
                                rounded-full
                                bg-blue-100
                                text-blue-700
                                flex
                                items-center
                                justify-center
                                font-semibold
                              "
                            >
                              {teacher.fullName
                                ?.charAt(0)
                                ?.toUpperCase()}
                            </div>

                          )}

                          <div>

                            <p className="text-[14px] font-medium">
                              {teacher.fullName}
                            </p>

                            <p className="text-[11px] text-slate-500">
                              {teacher.user?.email ||
                                "-"}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* QUALIFICATION */}

                      <td className="px-4 py-3 text-[13px]">

                        {teacher.highestQualification ||
                          "-"}

                      </td>


                      {/* EXPERIENCE */}

                      <td className="px-4 py-3 text-[13px]">

                        {teacher.teachingExperience !=
                        null
                          ? `${teacher.teachingExperience} years`
                          : "Not specified"}

                      </td>


                      {/* SUBJECT */}

                      <td className="px-4 py-3 text-[13px]">

                        {teacher.subjectsCanTeach ||
                          teacher.expertiseSubjects ||
                          "-"}

                      </td>


                      {/* CENTER */}

                      <td className="px-4 py-3 text-[13px]">

                        {teacher.preferredCenter1 ||
                          teacher.preferredCenter2 ||
                          "-"}

                      </td>


                      {/* STATUS */}

                      <td className="px-4 py-3">

                        {teacher.payments?.[0]
                          ?.status ===
                        "SUCCESS" ? (

                          <span
                            className="
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              font-medium
                              bg-green-50
                              text-green-700
                              border
                              border-green-200
                            "
                          >
                            active
                          </span>

                        ) : (

                          <span
                            className="
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              font-medium
                              bg-amber-50
                              text-amber-700
                              border
                              border-amber-200
                            "
                          >
                            pending
                          </span>

                        )}

                      </td>


                      {/* ACTIONS */}

                   
                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>


        {/* ======================================
            PAGINATION
        ====================================== */}

        <div className="flex items-center justify-between mt-4">

          {/* RESULT */}

          <p className="text-[13px] text-slate-500">

            Showing{" "}

            <span className="font-medium text-slate-700">
              {pagination.totalTeachers === 0
                ? 0
                : (page - 1) * 10 + 1}
            </span>

            {" - "}

            <span className="font-medium text-slate-700">
              {Math.min(
                page * 10,
                pagination.totalTeachers
              )}
            </span>

            {" of "}

            <span className="font-medium text-slate-700">
              {pagination.totalTeachers}
            </span>

          </p>


          {/* BUTTONS */}

          <div className="flex items-center gap-2">

            <button
              disabled={
                !pagination.hasPreviousPage
              }
              onClick={() =>
                setPage(
                  (prev) => prev - 1
                )
              }
              className="
                h-9
                px-3
                border
                border-slate-200
                rounded-lg
                flex
                items-center
                gap-1
                text-sm
                disabled:opacity-40
                disabled:cursor-not-allowed
                hover:bg-slate-50
              "
            >

              <ChevronLeft size={16} />

              Previous

            </button>


            {/* PAGE NUMBER */}

            <span
              className="
                h-9
                min-w-9
                px-3
                flex
                items-center
                justify-center
                rounded-lg
                bg-blue-700
                text-white
                text-sm
                font-medium
              "
            >
              {pagination.currentPage}
            </span>


            <button
              disabled={
                !pagination.hasNextPage
              }
              onClick={() =>
                setPage(
                  (prev) => prev + 1
                )
              }
              className="
                h-9
                px-3
                border
                border-slate-200
                rounded-lg
                flex
                items-center
                gap-1
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