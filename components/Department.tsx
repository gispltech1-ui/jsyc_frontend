"use client";

import { UserRound } from "lucide-react";

function PersonCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div className="w-[200px] rounded-xl overflow-hidden shadow-md bg-white">
      <div className="h-[125px] bg-[#efefef] flex items-center justify-center">
        <UserRound
          size={72}
          strokeWidth={1.5}
          className="text-blue-300"
        />
      </div>

      <div className="bg-green-700 text-white text-center py-3 px-2">
        <p className="font-semibold text-[15px] leading-5">
          {name}
        </p>

        <p className="text-[14px] opacity-95 mt-1">
          ({role})
        </p>
      </div>
    </div>
  );
}

export default function DepartmentStructure() {
  return (
    <section className="bg-[#f5edd0] py-10">
      <div className="">

        {/* Title */}
                <h2 className="text-center text-4xl font-semibold text-black mb-15">

          Commission Structure
        </h2>

        <div className="relative">

          {/* Top Row */}
          <div className="flex justify-center gap-10">

            {/* <PersonCard
              name="Shri. Hemant Soren"
              role="Chief Minister"
            /> */}

            <PersonCard
              name="--"
              role="Vibhagiya Minister"
            />

          </div>

          {/* Top Connector */}
          <div className="relative h-[90px]">

            {/* Center Vertical */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[50px] bg-black" />

            {/* Horizontal */}
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[420px] h-[1px] bg-black" />

            {/* Down Lines */}
            <div className="absolute top-[50px] left-[calc(50%-210px)] w-[1px] h-[50px] bg-black" />

            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[1px] h-[50px] bg-black" />

            <div className="absolute top-[50px] left-[calc(50%+210px)] w-[1px] h-[50px] bg-black" />

          </div>

          {/* Middle Row */}
          <div className="flex justify-center gap-8">

            <PersonCard
              name="--"
              role="Chairman"
            />

            <PersonCard
              name="--"
              role="Members"
            />

            <PersonCard
              name="--"
              role="Members"
            />

          </div>

          {/* Bottom Connector */}
          <div className="relative h-[120px]">

            {/* Left Vertical */}
            <div className="absolute left-[calc(50%-208px)] top-0 w-[1px] h-[75px] bg-black" />

            {/* Middle Vertical */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-[75px] bg-black" />

            {/* Right Vertical */}
            <div className="absolute left-[calc(50%+208px)] top-0 w-[1px] h-[75px] bg-black" />

            {/* Horizontal */}
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[416px] h-[1px] bg-black" />

            {/* Down to Secretary */}
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[1px] h-[45px] bg-black" />

          </div>

          {/* Bottom Card */}
          <div className="flex justify-center">
            <PersonCard
              name="--"
              role="Members Secretary"
            />
          </div>

        </div>
      </div>
    </section>
  );
}