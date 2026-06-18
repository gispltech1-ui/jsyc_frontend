// import {
//   Users,
//   GraduationCap,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";
// import Image from "next/image";

// const stats = [
//   {
//     icon: Users,
//     value: "25,000+",
//     label: "Students Enrolled",
//     color: "from-blue-600 to-cyan-500",
//   },
//   {
//     icon: GraduationCap,
//     value: "500+",
//     label: "Expert Teachers",
//     color: "from-emerald-600 to-green-500",
//   },
//   {
//     icon: Building2,
//     value: "50+",
//     label: "Learning Centers",
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     icon: BadgeCheck,
//     value: "95%",
//     label: "Success Rate",
//     color: "from-purple-600 to-pink-500",
//   },
// ];

// export default function StatsSection() {
//   return (
//     <section className="relative overflow-hidden py-12 bg-gradient-to-b from-slate-50 to-white">
//   {/* Background Pattern */}
//   <div className="absolute inset-0 opacity-[0.03]">
//     <div
//       className="w-full h-full"
//       style={{
//         backgroundImage:
//           "radial-gradient(#2563eb 1px, transparent 1px)",
//         backgroundSize: "30px 30px",
//       }}
//     />
//   </div>

//   <div className="relative max-w-7xl mx-auto px-6">
//     <div className="grid lg:grid-cols-2 gap-12 items-center">

//       {/* Left Side Image */}

//       <div className="flex justify-center">
//         <Image
//           src="/img3.png"
//           alt="JSYC"
//           width={700}
//           height={550}
//           className="rounded-3xl shadow-xl w-full h-auto"
//         />
//       </div>

//       {/* Right Side Content */}

//       <div>
//         {/* Heading */}

//         <div className="mb-10">
//           <span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium">
//             Platform Statistics
//           </span>

//           <h2 className="mt-5 text-3xl font-bold text-slate-900">
//             Making Impact Across Jharkhand
//           </h2>

//           <p className="mt-4 text-lg text-slate-500">
//             Empowering students, teachers, and institutions
//             through modern education and digital innovation.
//           </p>
//         </div>

//         {/* Stats Grid */}

//         <div className="grid grid-cols-2 gap-5">

//           {stats.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="
//                   group
//                   bg-white
//                   rounded-3xl
//                   border
//                   border-slate-200
//                   p-6
//                   shadow-sm
//                   hover:shadow-xl
//                   hover:-translate-y-1
//                   transition-all
//                 "
//               >
//                 <div
//                   className={`
//                     w-14 h-14 rounded-2xl
//                     bg-gradient-to-r ${item.color}
//                     flex items-center justify-center
//                     shadow-lg
//                   `}
//                 >
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>

//                 <h3 className="mt-5 text-3xl font-bold text-slate-900">
//                   {item.value}
//                 </h3>

//                 <p className="mt-2 text-slate-600 text-sm">
//                   {item.label}
//                 </p>
//               </div>
//             );
//           })}

//         </div>
//       </div>

//     </div>
//   </div>
// </section>
//   );
// }


"use client";

import { Megaphone } from "lucide-react";

export default function NoticeBar() {
  return (
    <div className="w-full px-2 py-2 bg-[#e8dfc7]">
      <div className="flex items-center overflow-hidden rounded-xl shadow-sm">

        {/* Left Label */}
        <div className="flex items-center gap-3 bg-[#e9cf67] px-8 h-12 shrink-0">
          <span className="font-medium text-black text-sm">
            What's New
          </span>

          <Megaphone size={16} className="text-black" />
        </div>

        {/* Right Marquee */}
        <div className="relative flex-1 h-12 bg-[#007a2f] overflow-hidden">
          <div className="absolute whitespace-nowrap marquee text-white text-sm font-medium leading-[48px]">
            📢 Admissions Open for 2026 • New Training Centers Added •
            Scholarship Applications Available • Important Notice for Students •
            Upcoming Events & Workshops • Admissions Open for 2026 • New Training Centers Added •
            Scholarship Applications Available • Important Notice for Students •
            Upcoming Events & Workshops •
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}