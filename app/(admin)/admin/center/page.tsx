"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Eye,
  Pencil,
} from "lucide-react";

export default function CenterManagement() {
  // ==========================================
  // CENTER DATA
  // ==========================================

  const [centers, setCenters] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  // ==========================================
  // SEARCH
  // ==========================================

  const [search, setSearch] = useState("");

  // ==========================================
  // PAGINATION
  // ==========================================

  const [page, setPage] = useState(1);

  const [pagination, setPagination] =
    useState<any>(null);

  const limit = 10;

  // ==========================================
  // GET CENTERS
  // ==========================================

  const getCenters = async (
    currentPage = 1,
    searchValue = ""
  ) => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const params = new URLSearchParams();

      params.append(
        "page",
        String(currentPage)
      );

      params.append(
        "limit",
        String(limit)
      );

      if (searchValue.trim()) {
        params.append(
          "search",
          searchValue.trim()
        );
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/center?${params.toString()}`,
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error(
          "Get centers failed:",
          result
        );

        return;
      }

      if (result.success) {
        setCenters(result.data || []);

        setPagination(
          result.pagination || null
        );
      }
    } catch (error) {
      console.error(
        "GET CENTERS ERROR:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    getCenters(1, "");
  }, []);

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = (
    value: string
  ) => {
    setSearch(value);

    // Whenever search changes,
    // start from page 1

    setPage(1);

    getCenters(1, value);
  };

  // ==========================================
  // PAGINATION
  // ==========================================

  const handlePageChange = (
    newPage: number
  ) => {
    if (newPage < 1) return;

    setPage(newPage);

    getCenters(
      newPage,
      search
    );
  };

  // ==========================================
  // VIEW CENTER
  // ==========================================

  const handleViewCenter = (
    id: string
  ) => {
    console.log(
      "View center:",
      id
    );
  };

  // ==========================================
  // EDIT CENTER
  // ==========================================

  const handleEditCenter = (
    id: string
  ) => {
    console.log(
      "Edit center:",
      id
    );
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="bg-slate-50">

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}

      <div className="mb-5">

        <h1 className="text-xl font-semibold text-slate-900">
          Center Management
        </h1>

        <p className="text-[13px] text-slate-500 mt-1">
          Manage all training centers
        </p>

      </div>


      {/* ================================= */}
      {/* MAIN CARD */}
      {/* ================================= */}

      <div className="bg-white border border-slate-200 rounded-xl p-4">


        {/* ================================= */}
        {/* SEARCH */}
        {/* ================================= */}

        <div className="relative mb-4">

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              handleSearch(
                e.target.value
              )
            }
            placeholder="Search by center name, ID or district..."
            className="w-full h-11 rounded-lg pl-10 pr-4 text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>


        {/* ================================= */}
        {/* TABLE */}
        {/* ================================= */}

        <div className="overflow-x-auto border border-slate-200 rounded-xl">

          <table className="w-full">

            {/* TABLE HEADER */}

            <thead>

              <tr className="bg-slate-100">

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  CENTER ID
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  CENTER NAME
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  DISTRICT
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  STUDENTS
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  CREATED
                </th>

                <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  STATUS
                </th>

                {/* <th className="px-4 py-3 text-left text-[11px] font-semibold text-slate-700">
                  ACTIONS
                </th> */}

              </tr>

            </thead>


            {/* ================================= */}
            {/* TABLE BODY */}
            {/* ================================= */}

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={7}
                    className="text-center py-12 text-slate-500 text-sm"
                  >
                    Loading centers...
                  </td>

                </tr>

              ) : centers.length === 0 ? (

                <tr>

                  <td
                    colSpan={7}
                    className="text-center py-12 text-slate-500 text-sm"
                  >
                    {search
                      ? "No centers found for your search"
                      : "No centers found"}
                  </td>

                </tr>

              ) : (

                centers.map(
                  (center) => (

                    <tr
                      key={center.id}
                      className="border-t border-slate-200 hover:bg-slate-50 transition"
                    >

                      {/* CENTER ID */}

                      <td className="px-4 py-3 text-[12px] font-mono">
                        {center.id}
                      </td>


                      {/* CENTER NAME */}

                      <td className="px-4 py-3 text-[14px] font-medium text-slate-900">
                        {center.name}
                      </td>


                      {/* DISTRICT */}

                      <td className="px-4 py-3 text-[13px] text-slate-700">
                        {center.district}
                      </td>


                      {/* STUDENTS */}

                      <td className="px-4 py-3 text-[13px] text-slate-700">
                        {center.studentCount}
                      </td>


                      {/* CREATED */}

                      <td className="px-4 py-3 text-[13px] text-slate-600">

                        {center.createdAt
                          ? new Date(
                              center.createdAt
                            ).toLocaleDateString(
                              "en-IN"
                            )
                          : "-"}

                      </td>


                      {/* STATUS */}

                      <td className="px-4 py-3">

                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          active
                        </span>

                      </td>


                      {/* ACTIONS */}

                      {/* <td className="px-4 py-3">

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              handleViewCenter(
                                center.id
                              )
                            }
                            title="View"
                          >
                            <Eye
                              size={16}
                              className="text-blue-600 hover:text-blue-800 cursor-pointer"
                            />
                          </button>


                          <button
                            onClick={() =>
                              handleEditCenter(
                                center.id
                              )
                            }
                            title="Edit"
                          >
                            <Pencil
                              size={16}
                              className="text-slate-500 hover:text-slate-700 cursor-pointer"
                            />
                          </button>

                        </div>

                      </td> */}

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>


        {/* ================================= */}
        {/* PAGINATION */}
        {/* ================================= */}

        {pagination &&
          pagination.totalPages > 0 && (

            <div className="flex items-center justify-between mt-4 px-2">

              <div className="text-sm text-slate-500">

                Showing{" "}

                <span className="font-medium text-slate-700">
                  {centers.length}
                </span>{" "}

                centers

                {" "}•{" "}

                Page{" "}

                <span className="font-medium text-slate-700">
                  {pagination.currentPage}
                </span>

                {" "}of{" "}

                <span className="font-medium text-slate-700">
                  {pagination.totalPages}
                </span>

              </div>


              <div className="flex items-center gap-2">

                <button
                  disabled={
                    !pagination.hasPreviousPage
                  }
                  onClick={() =>
                    handlePageChange(
                      page - 1
                    )
                  }
                  className="px-4 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>


                <button
                  disabled={
                    !pagination.hasNextPage
                  }
                  onClick={() =>
                    handlePageChange(
                      page + 1
                    )
                  }
                  className="px-4 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>

              </div>

            </div>

          )}

      </div>

    </div>
  );
}