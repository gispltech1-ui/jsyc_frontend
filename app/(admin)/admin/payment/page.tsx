"use client";

import {
  DollarSign,
  TrendingUp,
  Clock3,
  RefreshCw,
} from "lucide-react";

const stats = [
  {
    title: "Daily Revenue",
    value: "₹1.8L",
    icon: DollarSign,
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    title: "Monthly Revenue",
    value: "₹42.5L",
    icon: TrendingUp,
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    title: "Pending Payments",
    value: "28",
    icon: Clock3,
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    title: "Refund Requests",
    value: "5",
    icon: RefreshCw,
    bg: "bg-red-50",
    color: "text-red-600",
  },
];

const transactions = [
  {
    name: "Rajesh Kumar",
    id: "TXN001",
    role: "Student",
    date: "15 May 2026",
    amount: "₹5,000",
    status: "paid",
  },
  {
    name: "Priya Sharma",
    id: "TXN002",
    role: "Student",
    date: "16 May 2026",
    amount: "₹15,000",
    status: "paid",
  },
  {
    name: "Amit Singh",
    id: "TXN003",
    role: "Student",
    date: "22 May 2026",
    amount: "₹5,000",
    status: "pending",
  },
];

export default function PaymentManagement() {
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
                    {txn.id}
                    <span className="mx-2">•</span>
                    {txn.role}
                    <span className="mx-2">•</span>
                    {txn.date}
                  </p>
                </div>

                {/* Right */}

                <div className="flex items-center gap-5">
                  <h4 className="text-[18px] font-semibold text-slate-900">
                    {txn.amount}
                  </h4>

                  {txn.status === "paid" ? (
                    <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                      paid
                    </span>
                  ) : (
                    <span className="px-4 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                      pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}