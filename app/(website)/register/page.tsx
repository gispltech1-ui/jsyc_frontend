import Link from "next/link";
import {
  GraduationCap,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-cyan-50 py-14 px-6">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-blue-50 text-[#005F2F] px-4 py-2 text-sm font-medium border border-blue-100">
            Government of Jharkhand Initiative
          </span>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Join JSYC Platform
          </h1>

          <p className="mt-3 text-lg text-slate-500 max-w-xl mx-auto">
            Choose your registration type and get started.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mt-12">

          {/* Student Card */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-3xl
              border
              border-slate-200
              p-7
              hover:border-blue-200
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#005F2F] to-[#316e50]" />

            {/* Header */}
            <div className="flex items-center justify-between">

              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#005F2F] text-xs font-semibold">
                Student Portal
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#005F2F] to-[#316e50] flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

            </div>

            {/* Content */}
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Student Registration
            </h2>

            <p className="mt-2 text-slate-500">
              Enroll in courses and start your learning journey.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-3">

              {[
                "100+ Courses",
                "50+ Centers",
                "Digital Learning",
                "Certificates",
                "Online Tracking",
                "Career Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-green-600" />

                  <span className="text-sm text-slate-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              href="/register/student"
              className="
                mt-7
                h-12
                rounded-xl
                bg-[#005F2F]
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-2
                hover:shadow-lg
                transition
              "
            >
              Register Now
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* Teacher Card */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-3xl
              border
              border-slate-200
              p-7
              hover:border-emerald-200
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-600 to-cyan-500" />

            {/* Header */}
            <div className="flex items-center justify-between">

              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                Teacher Portal
              </span>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>

            </div>

            {/* Content */}
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Teacher Registration
            </h2>

            <p className="mt-2 text-slate-500">
              Join our teaching community and make an impact.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-3">

              {[
                "Teach Expertise",
                "Flexible Schedule",
                "Professional Growth",
                "Good Compensation",
                "Statewide Network",
                "Training Programs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-green-600" />

                  <span className="text-sm text-slate-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              href="/register/teacher"
              className="
                mt-7
                h-12
                rounded-xl
                bg-gradient-to-r
                from-emerald-600
                to-teal-500
                text-white
                font-medium
                flex
                items-center
                justify-center
                gap-2
                hover:shadow-lg
                transition
              "
            >
              Register Now
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

        {/* Bottom Login */}
        <div className="text-center mt-10">

          <p className="text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#005F2F] hover:text-[#0f4e2f]"
            >
              Sign In
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}