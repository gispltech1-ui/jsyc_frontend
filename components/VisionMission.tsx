// import { Eye, Target } from "lucide-react";

// export default function VisionMission() {
//   return (
//     <section className="py-5 bg-white">
//       <div className="max-w-7xl mx-auto px-2">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
//             Our Foundation
//           </span>

//           <h2 className="mt-2 text-3xl font-bold text-slate-900">
//             Our Vision & Mission
//           </h2>

//           <p className="mt-5 text-lg text-slate-500 leading-relaxed">
//             Building a skilled and educated Jharkhand through
//             innovative digital 
//           </p>
//         </div>

//          {/* Cards */}
//         <div className="grid lg:grid-cols-2 gap-8 mt-16">

//           {/* Vision */}
//           <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">

//             <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
//               <Eye className="w-8 h-8 text-white" />
//             </div>

//             <h3 className="mt-4 text-xl font-bold text-slate-900">
//               Our Vision
//             </h3>

//             <p className="mt-2 text-sm text-slate-600 leading-8">
//               To create a comprehensive digital ecosystem that
//               ensures quality education and skill development
//               opportunities
//             </p>

//             <div className="mt-2 pt-6 border-t border-blue-100">
//               <span className="text-blue-700 font-semibold text-sm">
//                 Empower • Educate • Transform
//               </span>
//             </div>

//           </div>

//           {/* Mission */}
//           <div className="group bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-5 hover:shadow-xl transition-all duration-300">

//             <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center">
//               <Target className="w-8 h-8 text-white" />
//             </div>

//             <h3 className="mt-4 text-xl font-bold text-slate-900">
//               Our Mission
//             </h3>

//             <p className="mt-2 text-sm text-slate-600 leading-8">
//               To provide world-class educational infrastructure,
//               modern digital learning tools, expert guidance,
//               and accessible skill development programs that
//               prepare.
//             </p>

//             <div className="mt-4 pt-6 border-t border-emerald-100">
//               <span className="text-emerald-700 font-semibold text-sm">
//                 Innovate • Learn • Achieve
//               </span>
//             </div>

//           </div>

//         </div>
   

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="bg-[#e8e0c9] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-center text-4xl font-semibold text-black">
            Our Vision & Mission
          </h2>

          <p className="mt-3 text-base text-gray-500">
            Building a skilled and educated Jharkhand for a brighter tomorrow
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

          {/* Mission Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-90" >

            {/* Header */}
            <div className="bg-[#007b2d] px-5 py-5 flex items-center gap-4">

              <div className="w-16 h-16 flex items-center justify-center shrink-0">

                {/* Replace with your icon */}
                <Image
                  src="/s1.svg"
                  alt="Mission"
                  width={60}
                  height={60}
                  className="object-contain"
                />

              </div>

              <h3 className="text-[26px] font-semibold text-white">
                Mission
              </h3>

            </div>

            {/* Content */}
            <div className="p-6 min-h-[160px]">

              <p className="text-[15px] leading-8 text-gray-600">
                Empower youth through participation, awareness, and leadership opportunities.
Promote skill development, innovation, and employability.
Represent youth interests and aspirations in policy-making.
Encourage social responsibility, cultural engagement, and community development.
              </p>

            </div>

          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-90">

            {/* Header */}
            <div className="bg-[#007b2d] px-5 py-5 flex items-center gap-4">

              <div className="w-16 h-16 rounded-full  flex items-center justify-center shrink-0">

                {/* Replace with your icon */}
                <Image
                  src="/s2.svg"
                  alt="Vision"
                  width={60}
                  height={60}
                  className="object-contain"
                />

              </div>

              <h3 className="text-[26px] font-semibold text-white">
                Vision
              </h3>

            </div>

            {/* Content */}
            <div className="p-6 min-h-[160px]">

              <p className="text-[15px] leading-8 text-gray-600">
                To build an empowered, inclusive, and future-ready youth community that actively contributes to the social, cultural, and economic development of Jharkhand.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}