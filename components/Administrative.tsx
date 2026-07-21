"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const administrators = [
  {
    name: "Shri. Ved Ratna Mohan",
    designation: "Joint secretary -cum-Member Secretary",
    description:
      "Hon'ble Chairman",
    image: "/image2.jpeg",
    phone: "+91 ********65",
    email: "xy@gmail.com",
  },
  {
    name: "Shri. Hemant Soren",
    designation: "Hon'ble Chief Minister of Jharkhand",
    // description:
    //   "Hon'ble Administrative Joint secretary",
    image: "/images.jpg",
    // phone: "+91 ********65",
    // email: "xy@gmail.com",
  },
];

export default function Administratives() {
  return (
    <section className="bg-[#FDF4D5] py-25">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
          <h2 className="text-center text-4xl  font-semibold text-black mb-15">
          Administratives
        </h2>

        {/* Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
  {administrators.map((item, index) => (
    <div key={index}>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 mt-14">
        <div className="relative max-w-sm mx-auto">

          {/* Profile Image */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Green Header */}
            <div className="bg-[#b7e4bc] pt-16 pb-6 px-5 text-center">
              <h3 className="text-xl font-semibold text-black leading-7">
                {item.name}
              </h3>
            </div>

            {/* White Section */}
            <div className="px-5 py-5 text-center">
              <h4 className="text-[#0b6b35] font-semibold text-base">
                {item.designation}
              </h4>

              {/*
              <p className="text-sm text-gray-600 mt-3">
                {item.description}
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex justify-center items-center gap-2">
                  <Phone size={16} />
                  {item.phone}
                </div>

                <div className="flex justify-center items-center gap-2">
                  <Mail size={16} />
                  {item.email}
                </div>
              </div>
              */}
            </div>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative w-[430px] h-[180px]">

        {/* Green Card */}
        <div
          className="
            absolute
            left-0
            bottom-0
            w-[260px]
            h-[160px]
            bg-[#b7e4bc]
            rounded-md
            flex
            items-center
            justify-center
            px-5
            z-40
          "
        >
          <h3 className="text-[18px] font-medium text-center leading-8 text-black">
            {item.name}
          </h3>
        </div>

        {/* White Card */}
        <div
          className="
            absolute
            left-[260px]
            bottom-[14px]
            w-[275px]
            h-[125px]
            bg-white
            border
            border-gray-200
            shadow-md
            px-4
            py-3
          "
        >
          <h4 className="text-[#0b6b35] text-[15px] mt-6 font-semibold">
            {item.designation}
          </h4>

          {/*
          <p className="text-[10px] text-gray-600 leading-4 mt-2">
            {item.description}
          </p>

          <div className="flex items-center gap-4 mt-4 text-[10px] text-gray-500">
            <div className="flex items-center gap-1">
              <Phone size={10} />
              {item.phone}
            </div>

            <div className="flex items-center gap-1">
              <Mail size={10} />
              {item.email}
            </div>
          </div>
          */}
        </div>

        {/* Profile Image */}
        <div
          className="
            absolute
            left-[105px]
            top-[-30px]
            w-[90px]
            h-[90px]
            rounded-full
            overflow-hidden
            z-50
          "
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

      </div>

    </div>
  ))}
</div>
      </div>
    </section>
  );
}