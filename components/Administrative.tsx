"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const administrators = [
  {
    name: "Shri.Kumar Gaurav",
    designation: "Chairman",
    description:
      "Hon'ble Chairman",
    image: "/profile.png",
    phone: "+91 ********65",
    email: "xy@gmail.com",
  },
  {
    name: "Shri.Ved Ratna Mohan",
    designation: "Administrative Joint secretary -cum-Member Secretary",
    description:
      "Hon'ble Administrative Joint secretary",
    image: "/profile.png",
    phone: "+91 ********65",
    email: "xy@gmail.com",
  },
];

export default function Administratives() {
  return (
    <section className="bg-[#FDF4D5] py-25">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
          <h2 className="text-center text-4xl font-semibold text-black mb-7">
          Administratives
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2  justify-items-center">

          {administrators.map((item, index) => (
            <div
              key={index}
              className="relative w-[430px] h-[180px]"
            >
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
                  px-5 z-40
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
                <h4 className="text-[#0b6b35] text-[14px] font-semibold">
                  {item.designation}
                </h4>

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
          ))}

        </div>

      </div>
    </section>
  );
}