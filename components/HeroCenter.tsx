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

// export default function HeroCentersSection() {
//   return (
//     <section className="bg-[#FDF4D5] py-15">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-8">
//                       <h2 className="text-center text-4xl font-semibold text-slate-900 mb-7">

//           {/* <h2 className="text-3xl font-bold text-slate-900"> */}
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
import {
  MapPin,
  ArrowRight,
  Building2,
} from "lucide-react";
import Link from "next/link";

const centers = [
  {
    title: "Ranchi Center",
    desc: "Premium learning facility with modern infrastructure",
    students: "8,500 Students",
  },
  {
    title: "Jamshedpur Center",
    desc: "Premium learning facility with modern infrastructure",
    students: "6,200 Students",
  },
  {
    title: "Dhanbad Center",
    desc: "Premium learning facility with modern infrastructure",
    students: "5,800 Students",
  },
  {
    title: "Bokaro Center",
    desc: "Premium learning facility with modern infrastructure",
    students: "4,500 Students",
  },
];

export default function HeroCentersSection() {
  return (
    <section className="bg-[#FDF4D5] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Our Centers
          </h2>

          <p className="text-slate-500 text-lg">
            Quality education centers across Jharkhand
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {centers.map((center, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-7
                overflow-hidden
                shadow-sm
                hover:border-emerald-400
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]
                transition-all
                duration-300
              "
            >
              {/* Top Green Strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600" />

              {/* Top Section */}
              <div className="flex justify-between items-start">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-100">
                  <Building2 className="w-7 h-7 text-white" />
                </div>

                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {center.students}
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {center.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 mt-3 text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Jharkhand, India</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-slate-600 leading-7">
                {center.desc}
              </p>

              {/* CTA */}
              <Link
            href="/centers" className="mt-8 flex items-center gap-2 text-emerald-700 font-semibold group-hover:gap-4 transition-all duration-300">
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Hover Background Accent */}
              <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/centers"
            className="
              bg-white
              border
              border-slate-300
              px-8
              py-4
              rounded-xl
              font-medium
              text-slate-700
              hover:border-emerald-500
              hover:text-emerald-700
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            View All Centers
          </Link>
        </div>

      </div>
    </section>
  );
}