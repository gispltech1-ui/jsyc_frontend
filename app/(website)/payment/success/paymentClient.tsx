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

export default function PaymentSuccessClient() {
  const params = useSearchParams();

  const txnid = params.get("txnid");

  const [payment, setPayment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!txnid) {
      setError("Transaction ID is missing");
      setLoading(false);
      return;
    }

    const getPayment = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/payment/${txnid}`
        );

        const result = await response.json();

        console.log("PAYMENT RESPONSE:", result);

        if (!response.ok || !result.success) {
          setError(
            result.message || "Unable to fetch payment details"
          );

          return;
        }

        setPayment(result.data);

      } catch (error) {
        console.error("PAYMENT FETCH ERROR:", error);

        setError("Unable to fetch payment details");

      } finally {
        setLoading(false);
      }
    };

    getPayment();

  }, [txnid]);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white rounded-xl shadow-lg p-10">
          <p className="text-lg font-semibold text-slate-800">
            Loading payment details...
          </p>
        </div>
      </div>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (error || !payment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full">

          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <Receipt className="w-8 h-8 text-red-600" />
          </div>

          <h1 className="text-xl font-bold text-slate-900 mt-5">
            Payment Details Not Found
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            {error || "Unable to load payment information."}
          </p>

          <Link
            href="/"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Go Home
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* =========================
              SUCCESS HEADER
          ========================= */}

          <div className="bg-green-600 text-white text-center py-10">

            <CheckCircle
              size={70}
              className="mx-auto mb-4"
            />

            <h1 className="text-3xl font-bold">
              Payment Successful
            </h1>

            <p className="mt-2 opacity-90">
              Your enrollment has been completed successfully.
            </p>

          </div>

          {/* =========================
              PAYMENT DETAILS
          ========================= */}

          <div className="p-8">

            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Receipt />

              Payment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Transaction ID */}

              <InfoCard
                icon={<Receipt />}
                title="Transaction ID"
                value={payment.transactionId}
              />

              {/* Amount */}

              <InfoCard
                icon={<IndianRupee />}
                title="Amount"
                value={`₹ ${payment.amount}`}
              />

              {/* Student / Teacher */}

              <InfoCard
                icon={<User />}
                title={
                  payment.student
                    ? "Student Name"
                    : "Teacher Name"
                }
                value={
                  payment.student?.fullName ||
                  payment.teacher?.fullName
                }
              />

              {/* Status */}

              <InfoCard
                icon={<CreditCard />}
                title="Status"
                value={payment.status}
                green={payment.status === "SUCCESS"}
              />

              {/* Payment Date */}

              <InfoCard
                icon={<Calendar />}
                title="Payment Date"
                value={
                  payment.paidAt
                    ? new Date(
                        payment.paidAt
                      ).toLocaleString("en-IN")
                    : "-"
                }
              />

              {/* Payment Method */}

              <InfoCard
                icon={<Receipt />}
                title="Payment Method"
                value={payment.paymentMethod}
              />

            </div>

            {/* =========================
                PAYMENT FOR
            ========================= */}

            <div className="mt-5">

              <InfoCard
                icon={<Receipt />}
                title="Payment For"
                value={payment.paymentFor}
              />

            </div>

            {/* =========================
                BUTTON
            ========================= */}

            <div className="flex gap-4 mt-10">

              <Link
                href="/"
                className="
                  flex-1
                  text-center
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                "
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


/* =========================
   INFO CARD
========================= */

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
          className={`
            w-10
            h-10
            rounded-lg
            flex
            items-center
            justify-center
            ${
              green
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }
          `}
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