// import {
//   MapPin,
//   ArrowRight,
//   Building2,
// } from "lucide-react";
// import Link from "next/link";

// const centers = [
//   {
//     title: "Ranchi Center",
//     desc: "Premium learning facility with modern infrastructure",
//     students: "8,500 Students",
//   },
//   {
//     title: "Jamshedpur Center",
//     desc: "Premium learning facility with modern infrastructure",
//     students: "6,200 Students",
//   },
//   {
//     title: "Dhanbad Center",
//     desc: "Premium learning facility with modern infrastructure",
//     students: "5,800 Students",
//   },
//   {
//     title: "Bokaro Center",
//     desc: "Premium learning facility with modern infrastructure",
//     students: "4,500 Students",
//   },
// ];

// export default function CentersSection() {
//   return (
//     <section className="bg-[#f4f8fb] py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-slate-900">
//             Our Centers
//           </h2>

//           <p className="mt-5 text-md text-slate-500">
//             Quality education centers across Jharkhand
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

//           {centers.map((center, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* Top */}
//               <div className="flex justify-between items-start">

//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
//                   <Building2 className="w-7 h-7 text-white" />
//                 </div>

//                 <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
//                   {center.students}
//                 </span>

//               </div>

//               {/* Title */}
//               <h3 className="mt-6 text-xl font-bold text-slate-900">
//                 {center.title}
//               </h3>

//               {/* Location */}
//               <div className="flex items-center gap-2 mt-3 text-slate-500">
//                 <MapPin className="w-4 h-4" />
//                 <span>Jharkhand, India</span>
//               </div>

//               {/* Description */}
//               <p className="mt-4 text-md text-slate-600 leading-7">
//                 {center.desc}
//               </p>

//               {/* CTA */}
//               <button className="mt-8 flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-4 transition-all">
//                 View Details
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           ))}

//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-14">
//           <Link href="/centers" className="bg-white border border-slate-300 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 hover:shadow-md transition">
//             View All Centers
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const stats = [
  {
    icon: "/c1.svg",
    value: "25 k+",
    label: "Students Enrolled",
  },
  {
    icon: "/c2.svg",
    value: "500+",
    label: "Expert Teachers",
  },
  {
    icon: "/c3.svg",
    value: "50+",
    label: "Learning Centres",
  },
  {
    icon: "/c4.svg",
    value: "95%",
    label: "Success Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FDF4D5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-28 h-28 rounded-full flex items-center justify-center mb-6">

                <Image
                  src={item.icon}
                  alt={item.label}
                  width={90}
                  height={90}
                  className="object-contain"
                />

              </div>

              {/* Number */}
              <h3 className="text-[50px] font-black text-black">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-4 text-[18px] text-[#666666] font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}