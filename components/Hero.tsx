// import {
//   GraduationCap,
//   Users,
// } from "lucide-react";

// const stats = [
//   {
//     value: "25,000+",
//     label: "Active Students",
//   },
//   {
//     value: "500+",
//     label: "Qualified Teachers",
//   },
//   {
//     value: "50+",
//     label: "Centers Across State",
//   },
//   {
//     value: "100+",
//     label: "Courses Offered",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-[#1e40af] via-[#1d4ed8] to-[#0369a1] text-white">

//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, white 1px, transparent 1px)",
//             backgroundSize: "56px 56px",
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 py-20">

//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Side */}
//           <div>

//             <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium">
//               Government of Jharkhand Initiative
//             </span>

//             <h1 className="mt-2 text-5xl text-2xl font-extrabold leading-tight tracking-tight">
//               JSYC Digital
//               <br />
//               Enrollment &
//               <br />
//               Management
//               <br />
//               Platform
//             </h1>

//             <p className="mt-8 max-w-2xl text-xl text-blue-100 leading-relaxed">
//               Empowering education and skill development across
//               Jharkhand through innovative digital solutions and
//               quality teaching.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-10">

//               <button className="flex items-center gap-3 bg-white text-blue-800 font-semibold px-7 py-4 rounded-xl hover:scale-105 transition-all shadow-lg">
//                 <GraduationCap size={20} />
//                 Enroll as Student
//               </button>

//               <button className="flex items-center gap-3 border border-white/40 bg-white/5 backdrop-blur px-7 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
//                 <Users size={20} />
//                 Register as Teacher
//               </button>

//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

//             {stats.map((stat) => (
//               <div
//                 key={stat.value}
//                 className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <h3 className="text-5xl font-bold">
//                   {stat.value}
//                 </h3>

//                 <p className="mt-4 text-lg text-blue-100">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = ["/Home11.png", "/Home12.png", "/Home13.png", "/Home14.png"];

  return (
   <section className="bg-[#e8dfc7] px-4">
  <div className="mx-auto">
    <Swiper
      modules={[Autoplay, Pagination]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center">
            <Image
              src={image}
              alt=""
              width={1800}
              height={200}
              className="rounded-lg shadow"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}