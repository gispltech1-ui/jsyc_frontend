import CTASection from "@/components/CTASection";
import DepartmentStructure from "@/components/Department";
import NoticeBar from "@/components/StatsSection";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#E8DFC7]">
      <NoticeBar />

      <Image src={"/About.svg"}
        width={100}
        height={100}
        alt="image"
        className="w-full p-2"
      />

      {/* Heading */}
      <div className="p-8">
        <h2 className=" text-4xl font-semibold text-black">
          Our Story
        </h2>

        <p className="mt-3 text-base text-gray-700">
          Jharkhand Rajya Yuva Aayog is a government-established body dedicated to empowering,
          engaging, and representing the youth of Jharkhand. The Commission promotes
          leadership, participation, skill development, and youth welfare while serving as
          a vital link between young citizens and the Government. Through various initiatives
          and policy support, it aims to create opportunities that enable the youth to
          contribute actively to the state's growth and development.          </p>

        <p className="mt-3 text-base text-gray-700">


          The Commission works towards fostering youth participation in social, cultural,
          educational, and developmental initiatives while acting as a bridge between young citizens and the Government. It strives to promote leadership, innovation, skill development, employment awareness, social responsibility, and inclusive growth among the youth of Jharkhand
        </p>

        <p className="mt-3 text-base text-gray-700">

          Jharkhand Rajya Yuva Aayog continues to work towards building a vibrant, responsible, and future-ready generation that contributes meaningfully to the socio-economic growth of Jharkhand and the nation.
        </p>
      </div>


        <div className="mx-8">
                   
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
      
                {/* Mission Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60" >
      
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
                     To provide accessible, quality education and skill training to every citizen of Jharkhand.
                    </p>
      
                  </div>
      
                </div>
      
                {/* Vision Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60">
      
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
Building a skilled and educated Jharkhand for sustainable development      
                    </p>
      
                  </div>
      
                </div>

                {/* Excellence Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60">
      
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
                      Excellence
                    </h3>
      
                  </div>
      
                  {/* Content */}
                  <div className="p-6 min-h-[160px]">
      
                    <p className="text-[15px] leading-8 text-gray-600">
Committed to maintaining the highest standards in education delivery      
                    </p>
      
                  </div>
      
                </div>
      
              </div>



              <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-5">
      
                {/* Accessibility Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60" >
      
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
                      Accessibility
                    </h3>
      
                  </div>
      
                  {/* Content */}
                  <div className="p-6 min-h-[160px]">
      
                    <p className="text-[15px] leading-8 text-gray-600">
                     Making quality education available across all districts of Jharkhand
                    </p>
      
                  </div>
      
                </div>
      
                {/* Community Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60">
      
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
                      Community
                    </h3>
      
                  </div>
      
                  {/* Content */}
                  <div className="p-6 min-h-[160px]">
      
                    <p className="text-[15px] leading-8 text-gray-600">
Building a strong network of learners, teachers, and institutions      
                    </p>
      
                  </div>
      
                </div>

                {/* Impact Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-60">
      
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
                      Impact
                    </h3>
      
                  </div>
      
                  {/* Content */}
                  <div className="p-6 min-h-[160px]">
      
                    <p className="text-[15px] leading-8 text-gray-600">
Creating lasting positive change in the lives of our students      
                    </p>
      
                  </div>
      
                </div>
      
              </div>
      
        </div>


        <div className="m-8 ">
      <div className="">

        <div className="bg-[#eef3f6] rounded-[32px] px-10 md:px-16 py-8">

          {/* Heading */}
                  <h2 className=" text-center text-4xl font-semibold text-black mb-10">

            Key Highlights
          </h2>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                What We Offer
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    100+ courses across multiple disciplines
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    Digital enrollment and management system
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    Modern learning infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    Expert teachers and mentors
                  </span>
                </div>

              </div>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Our Achievements
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 fill-teal-600 text-teal-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    25,000+ students successfully enrolled
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 fill-teal-600 text-teal-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    95% student satisfaction rate
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 fill-teal-600 text-teal-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    50+ centers across Jharkhand
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 fill-teal-600 text-teal-600 shrink-0" />
                  <span className="text-[18px] text-slate-700">
                    Government recognized certification
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
        </div>


<DepartmentStructure />
<CTASection />
















      {/* <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">

        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Government of Jharkhand Initiative
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            About JSYC Platform
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Transforming education and skill development across
            Jharkhand through innovative digital solutions and
            accessible learning opportunities.
          </p>

        </div>

      </section>

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span className="text-blue-600 font-semibold">
                OUR STORY
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Empowering Education Through Innovation
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-8">
                The JSYC Digital Enrollment & Management Platform
                was established to create a unified educational
                ecosystem across Jharkhand. Our mission is to
                bridge the gap between students, educators, and
                institutions through modern technology.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-8">
                We provide seamless enrollment, training,
                monitoring, and educational management tools
                designed to improve learning outcomes and
                accessibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Users className="text-blue-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    25K+
                  </h3>
                  <p className="text-slate-500">
                    Students
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <GraduationCap className="text-green-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    500+
                  </h3>
                  <p className="text-slate-500">
                    Teachers
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Building2 className="text-orange-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    50+
                  </h3>
                  <p className="text-slate-500">
                    Centers
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Award className="text-purple-600 w-10 h-10" />
                  <h3 className="mt-4 text-3xl font-bold">
                    95%
                  </h3>
                  <p className="text-slate-500">
                    Success Rate
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">

            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <Eye className="w-14 h-14 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                To create a digitally empowered educational
                ecosystem that ensures equal opportunities for
                every learner in Jharkhand.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <Target className="w-14 h-14 text-green-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                To provide accessible, innovative, and
                technology-driven educational solutions for
                students, teachers, and institutions.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Why Choose Us
            </h2>

            <p className="mt-4 text-xl text-slate-500">
              Building the future of education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Digital Learning Platform",
              "Expert Teachers",
              "Statewide Network",
              "Career-Oriented Programs",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <CheckCircle className="text-blue-600 w-8 h-8" />

                <h3 className="mt-4 font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our Educational Journey
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Become part of a growing community dedicated to
            learning, innovation, and success.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Get Started Today
          </button>

        </div>

      </section> */}

    </main>
  );
}