"use client";

import {
  DollarSign,
  TrendingUp,
  Clock3,
  RefreshCw,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function PaymentManagement() {
  const [dashboard, setDashboard] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>(null);

  // ==========================================
  // GET PAYMENT DASHBOARD
  // ==========================================

  const getDashboard = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setDashboard(data.data);
      }
    } catch (error) {
      console.error("Dashboard error:", error);
    }
  };

  // ==========================================
  // GET ALL PAYMENTS
  // ==========================================

  const getPayments = async (currentPage = 1) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/admin/all?page=${currentPage}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setTransactions(data.data);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Payments error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL API CALL
  // ==========================================

  useEffect(() => {
    getDashboard();
    getPayments(1);
  }, []);

  // ==========================================
  // PAGE CHANGE
  // ==========================================

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    getPayments(newPage);
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (!dashboard) {
    return (
      <div className="bg-slate-50 p-6">
        Loading payment dashboard...
      </div>
    );
  }

  // ==========================================
  // STATS FROM API
  // ==========================================

  const stats = [
    {
      title: "Daily Revenue",

      value: `₹${Number(
        dashboard.dailyRevenue
      ).toLocaleString("en-IN")}`,

      icon: DollarSign,

      bg: "bg-green-50",

      color: "text-green-600",
    },

    {
      title: "Monthly Revenue",

      value: `₹${Number(
        dashboard.monthlyRevenue
      ).toLocaleString("en-IN")}`,

      icon: TrendingUp,

      bg: "bg-green-50",

      color: "text-green-600",
    },

    {
      title: "Pending Payments",

      value: dashboard.pendingPayments,

      icon: Clock3,

      bg: "bg-amber-50",

      color: "text-amber-600",
    },

    {
      title: "Refund Requests",

      value: dashboard.refundRequests,

      icon: RefreshCw,

      bg: "bg-red-50",

      color: "text-red-600",
    },
  ];

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="bg-slate-50">

      {/* Header */}

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-900">
          Payment Management
        </h1>

        <p className="text-[13px] text-slate-500 mt-1">
          Monitor and manage all transactions
        </p>
      </div>


      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-[13px] text-slate-500">
                  {item.title}
                </p>

                <h3 className="text-2xl font-semibold mt-2 text-slate-900">
                  {item.value}
                </h3>

              </div>


              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
              >

                <item.icon
                  className={`w-6 h-6 ${item.color}`}
                />

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* Recent Transactions */}

      <div className="bg-white border border-slate-200 rounded-xl p-5">

        <h2 className="text-xl font-semibold text-slate-900 mb-5">
          Recent Transactions
        </h2>


        {loading ? (

          <div className="py-10 text-center text-slate-500">
            Loading transactions...
          </div>

        ) : transactions.length === 0 ? (

          <div className="py-10 text-center text-slate-500">
            No transactions found
          </div>

        ) : (

          <div className="space-y-3">

            {transactions.map((txn) => (

              <div
                key={txn.id}
                className="border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
              >

                <div className="flex items-center justify-between">

                  {/* Left */}

                  <div>

                    <h3 className="text-[16px] font-medium text-slate-900">
                      {txn.name}
                    </h3>


                    <p className="text-[12px] text-slate-500 mt-2">

                      {txn.transactionId}

                      <span className="mx-2">
                        •
                      </span>

                      {txn.type}

                      <span className="mx-2">
                        •
                      </span>

                      {new Date(
                        txn.createdAt
                      ).toLocaleDateString("en-IN")}

                    </p>

                  </div>


                  {/* Right */}

                  <div className="flex items-center gap-5">

                    <h4 className="text-[18px] font-semibold text-slate-900">

                      ₹
                      {Number(
                        txn.amount
                      ).toLocaleString("en-IN")}

                    </h4>


                    {txn.status === "SUCCESS" ? (

                      <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        paid
                      </span>

                    ) : txn.status === "PENDING" ? (

                      <span className="px-4 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        pending
                      </span>

                    ) : (

                      <span className="px-4 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                        failed
                      </span>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}


        {/* Pagination */}

        {pagination &&
          pagination.totalPages > 1 && (

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-200">

              <button
                disabled={!pagination.hasPreviousPage}
                onClick={() =>
                  handlePageChange(page - 1)
                }
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm disabled:opacity-40"
              >
                Previous
              </button>


              <p className="text-sm text-slate-500">

                Page {pagination.currentPage} of{" "}
                {pagination.totalPages}

              </p>


              <button
                disabled={!pagination.hasNextPage}
                onClick={() =>
                  handlePageChange(page + 1)
                }
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm disabled:opacity-40"
              >
                Next
              </button>

            </div>

          )}

      </div>

    </div>
  );
}