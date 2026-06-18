"use client";

import Image from "next/image";

const stats = [
  {
    value: "25,000+",
    label: "Active Students",
  },
  {
    value: "500+",
    label: "Qualified Teachers",
  },
  {
    value: "50+",
    label: "Centers Across State",
  },
  {
    value: "100+",
    label: "Courses Offered",
  },
];

// sfd

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-700 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}

          <div className="flex justify-center">
            <Image
              src="/img3.png"
              alt="JSYC"
              width={650}
              height={500}
              className="rounded-2xl shadow-xl w-full max-w-[650px] h-auto"
            />
          </div>

          {/* Right Stats */}

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-3xl
                  border border-white/15
                  bg-white/10
                  backdrop-blur-md
                  p-8
                  min-h-[190px]
                  flex
                  flex-col
                  justify-center
                  hover:bg-white/15
                  transition-all
                "
              >
                <h3 className="text-white text-5xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-5 text-white/90 text-xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}