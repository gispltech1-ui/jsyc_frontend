import {
  Code2,
  Calculator,
  Palette,
  Globe,
  BookOpen,
  Heart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Computer Science",
    description: "Learn programming and software development",
    students: "5,200 Students",
    icon: Code2,
  },
  {
    title: "Mathematics",
    description: "Advanced mathematics and problem solving",
    students: "4,800 Students",
    icon: Calculator,
  },
  {
    title: "Arts & Design",
    description: "Creative arts and graphic design",
    students: "3,500 Students",
    icon: Palette,
  },
  {
    title: "English Language",
    description: "Communication and language skills",
    students: "6,100 Students",
    icon: Globe,
  },
  {
    title: "Science",
    description: "Physics, Chemistry, and Biology",
    students: "5,500 Students",
    icon: BookOpen,
  },
  {
    title: "Soft Skills",
    description: "Personality development and leadership",
    students: "4,200 Students",
    icon: Heart,
  },
];

export default function Courses() {
  return (
    <section className="bg-[#007234] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          
          <h2 className="text-center text-4xl font-semibold text-white mb-7">
            Featured Courses 
          </h2>

          <p className="mt-4 text-md text-white">
            Explore our wide range of courses designed for your success
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm  hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start">

                  <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>

                  <span className="bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-lg">
                    {course.students}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-4 text-md text-slate-500 leading-relaxed">
                  {course.description}
                </p>

                <button className="mt-8 w-full bg-slate-100 hover:bg-blue-50 rounded-xl py-4 flex items-center justify-center gap-3 font-semibold text-slate-800 group-hover:text-blue-700 transition">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            );
          })}

        </div>

        {/* Optional View All Button */}
        <div className="flex justify-center mt-14">
          <Link href="/courses" className="px-8 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 font-medium">
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}