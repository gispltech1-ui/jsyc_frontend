import { Suspense } from "react";
import PaymentSuccessClient from "./paymentClient";

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-lg font-semibold">
              Loading payment details...
            </p>
          </div>
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}