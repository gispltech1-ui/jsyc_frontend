"use client";

import Image from "next/image";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">

      <div className="relative flex items-center justify-center w-[180px] h-[180px]">

        {/* Glow */}
        <div className="absolute w-24 h-24 rounded-full bg-green-100 blur-2xl animate-pulse" />

        {/* Outer Ring */}
        <div
          className="
            absolute
            w-[160px]
            h-[160px]
            rounded-full
            border-[2px]
            border-dashed
            border-green-500
            animate-spin
          "
          style={{ animationDuration: "8s" }}
        />

        {/* Inner Ring */}
        <div
          className="
            absolute
            w-[130px]
            h-[130px]
            rounded-full
            border-[2px]
            border-dashed
            border-emerald-600
            animate-spin
          "
          style={{
            animationDuration: "5s",
            animationDirection: "reverse",
          }}
        />

        {/* White Circle */}
        <div className="absolute w-[110px] h-[110px] rounded-full bg-white shadow-lg border border-green-100" />

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/govjhar 3.svg"
            alt="Logo"
            width={85}
            height={85}
            className="object-contain"
            priority
          />
        </div>

      </div>

      {/* Loading Text */}
      <div className="absolute bottom-[20%] text-center">
        <p className="text-slate-700 font-medium text-lg">
          Jharkhand State Youth Commission
        </p>

        <p className="text-slate-400 text-sm mt-1">
          Loading...
        </p>
      </div>

    </div>
  );
}