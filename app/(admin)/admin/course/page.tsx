"use client";

import { Search, Plus, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function CourseManagement() {
  const [courses, setCourses] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10,
    totalCourses: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  // =========================
  // GET COURSES
  // =========================

  const fetchCourses = async (page = 1) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/courses?page=${page}&limit=10`
      );

      const data = await res.json();

      if (data.success) {
        setCourses(data.data);

        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    fetchCourses(1);
  }, []);

  // =========================
  // SEARCH
  // =========================

  const filteredCourses = courses.filter((course) =>
    course.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // =========================
  // PAGE CHANGE
  // =========================

  const handlePageChange = (page: number) => {
    fetchCourses(page);
  };

  return (
    <div className="bg-slate-50">

      {/* ================= HEADER ================= */}

      <div className="flex items-start justify-between mb-5">

        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Course Management
          </h1>

          <p className="text-[13px] text-slate-500 mt-1">
            Manage all courses and programs
          </p>
        </div>

        <button
          className="
            h-11 px-5
            bg-blue-700
            hover:bg-blue-800
            text-white
            rounded-lg
            flex items-center gap-2
            text-sm font-medium
          "
        >
          <Plus size={16} />
          Add Course
        </button>

      </div>

      {/* ================= MAIN CARD ================= */}

      <div className="bg-white border border-slate-200 rounded-xl p-5">

        {/* SEARCH */}

        <div className="relative mb-5">

          <Search
            size={18}
            className="
              absolute left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              h-10
              rounded-lg
              border border-slate-200
              pl-11 pr-4
              text-sm
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* ================= TOP INFO ================= */}

        <div className="flex items-center justify-between mb-4">

          <p className="text-[13px] text-slate-600">
            Showing{" "}
            <span className="font-semibold">
              {courses.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              {pagination.totalCourses}
            </span>{" "}
            courses
          </p>

          <p className="text-[13px] text-slate-500">
            Page{" "}
            <span className="font-semibold text-slate-800">
              {pagination.currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800">
              {pagination.totalPages}
            </span>
          </p>

        </div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="py-10 text-center text-sm text-slate-500">
            Loading courses...
          </div>
        )}

        {/* ================= EMPTY ================= */}

        {!loading &&
          filteredCourses.length === 0 && (
            <div className="py-10 text-center text-sm text-slate-500">
              No courses found.
            </div>
          )}

        {/* ================= COURSE LIST ================= */}

        {!loading &&
          filteredCourses.length > 0 && (

            <div className="space-y-3">

              {filteredCourses.map((course) => (

                <div
                  key={course.id}
                  className="
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    hover:bg-slate-50
                    transition
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-5
                    "
                  >

                    {/* LEFT */}

                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-xl
                          bg-slate-100
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <BookOpen
                          size={26}
                          className="text-blue-700"
                        />

                      </div>

                      <div>

                        <h3
                          className="
                            text-[16px]
                            font-medium
                            text-slate-900
                          "
                        >
                          {course.name}
                        </h3>

                        <p
                          className="
                            text-[12px]
                            text-slate-500
                            mt-1
                          "
                        >
                          {course.id}
                        </p>

                      </div>

                    </div>

                    {/* RIGHT */}

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-8
                        lg:gap-14
                      "
                    >

                      {/* FEE */}

                      <div>

                        <p className="text-[12px] text-slate-500">
                          Fee
                        </p>

                        <p className="text-[14px] font-medium mt-1">
                          ₹{course.fee}
                        </p>

                      </div>

                      {/* CREATED */}

                      <div>

                        <p className="text-[12px] text-slate-500">
                          Created
                        </p>

                        <p className="text-[14px] font-medium mt-1">
                          {new Date(
                            course.createdAt
                          ).toLocaleDateString()}
                        </p>

                      </div>

                      {/* STATUS */}

                      <div>

                        <span
                          className="
                            px-4
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
                          Active
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        {/* ================= PAGINATION ================= */}

        {!loading &&
          pagination.totalPages > 0 && (

            <div
              className="
                flex
                items-center
                justify-between
                mt-6
                pt-5
                border-t
                border-slate-200
              "
            >

              {/* PREVIOUS */}

              <button
                disabled={!pagination.hasPreviousPage}
                onClick={() =>
                  handlePageChange(
                    pagination.currentPage - 1
                  )
                }
                className={`
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  border
                  transition
                  ${
                    pagination.hasPreviousPage
                      ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                      : "border-slate-200 text-slate-300 cursor-not-allowed"
                  }
                `}
              >
                Previous
              </button>

              {/* PAGE NUMBERS */}

              <div className="flex items-center gap-2">

                {Array.from(
                  {
                    length: pagination.totalPages,
                  },
                  (_, index) => index + 1
                ).map((page) => (

                  <button
                    key={page}
                    onClick={() =>
                      handlePageChange(page)
                    }
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      text-sm
                      font-medium
                      ${
                        page ===
                        pagination.currentPage
                          ? "bg-blue-700 text-white"
                          : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }
                    `}
                  >
                    {page}
                  </button>

                ))}

              </div>

              {/* NEXT */}

              <button
                disabled={!pagination.hasNextPage}
                onClick={() =>
                  handlePageChange(
                    pagination.currentPage + 1
                  )
                }
                className={`
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  border
                  transition
                  ${
                    pagination.hasNextPage
                      ? "border-slate-300 text-slate-700 hover:bg-slate-50"
                      : "border-slate-200 text-slate-300 cursor-not-allowed"
                  }
                `}
              >
                Next
              </button>

            </div>

          )}

      </div>

    </div>
  );
}