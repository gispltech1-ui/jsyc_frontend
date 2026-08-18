"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  Receipt,
  User,
  CreditCard,
  Calendar,
  IndianRupee,
} from "lucide-react";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const txnid = params.get("txnid");

  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    if (!txnid) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/${txnid}`)
      .then((res) => res.json())
      .then((data) => setPayment(data.data))
      .catch(console.error);
  }, [txnid]);

  if (!payment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white rounded-xl shadow-lg p-10">
          <p className="text-lg font-semibold">
            Loading payment details...
          </p>
        </div>
      </div>
    );
  }

  const isTeacher =
    payment.paymentFor === "TEACHER_REGISTRATION";

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="bg-green-600 text-white text-center py-10">
            <CheckCircle
              size={70}
              className="mx-auto mb-4"
            />

            <h1 className="text-3xl font-bold">
              Payment Successful
            </h1>

            <p className="mt-2 opacity-90">
              {isTeacher
                ? "Your teacher registration has been completed successfully."
                : "Your student enrollment has been completed successfully."}
            </p>
          </div>

          <div className="p-8">

            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Receipt />

              {isTeacher
                ? "Teacher Registration Receipt"
                : "Student Registration Receipt"}
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <InfoCard
                icon={<Receipt />}
                title="Transaction ID"
                value={payment.transactionId}
              />

              <InfoCard
                icon={<IndianRupee />}
                title="Amount"
                value={`₹ ${payment.amount}`}
              />

              <InfoCard
                icon={<User />}
                title={isTeacher ? "Teacher Name" : "Student Name"}
                value={
                  isTeacher
                    ? payment.teacher?.fullName
                    : payment.student?.fullName
                }
              />

              <InfoCard
                icon={<CreditCard />}
                title="Status"
                value={payment.status}
                green
              />

              <InfoCard
                icon={<Calendar />}
                title="Payment Date"
                value={
                  payment.paidAt
                    ? new Date(
                        payment.paidAt
                      ).toLocaleString()
                    : "-"
                }
              />

              <InfoCard
                icon={<Receipt />}
                title="Payment Method"
                value={payment.paymentMethod}
              />

            </div>

            <div className="flex gap-4 mt-10">
              <Link
                href="/"
                className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                Go Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
  green,
}: {
  icon: React.ReactNode;
  title: string;
  value: any;
  green?: boolean;
}) {
  return (
    <div className="border rounded-xl p-5 bg-slate-50">

      <div className="flex items-center gap-3 mb-3">

        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            green
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {icon}
        </div>

        <p className="text-sm text-slate-500">
          {title}
        </p>

      </div>

      <p className="font-bold text-slate-800 break-all">
        {value || "-"}
      </p>

    </div>
  );
}