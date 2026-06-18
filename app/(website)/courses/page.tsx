import {
  Code2,
  Calculator,
  Palette,
  Globe,
  BookOpen,
  Heart,
  Search,
  Users,
  Clock3,
  Award,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Computer Science",
    icon: Code2,
    students: "5200",
    duration: "12 Months",
    level: "Advanced",
    color: "bg-blue-50",
  },
  {
    title: "Mathematics",
    icon: Calculator,
    students: "4800",
    duration: "10 Months",
    level: "Intermediate",
    color: "bg-green-50",
  },
  {
    title: "Arts & Design",
    icon: Palette,
    students: "3200",
    duration: "8 Months",
    level: "Beginner",
    color: "bg-pink-50",
  },
  {
    title: "English",
    icon: Globe,
    students: "6100",
    duration: "6 Months",
    level: "Beginner",
    color: "bg-orange-50",
  },
  {
    title: "Science",
    icon: BookOpen,
    students: "5500",
    duration: "12 Months",
    level: "Advanced",
    color: "bg-cyan-50",
  },
  {
    title: "Soft Skills",
    icon: Heart,
    students: "4200",
    duration: "4 Months",
    level: "Beginner",
    color: "bg-purple-50",
  },
];

export default function CoursesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-4xl font-bold">
            Explore Our Courses
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Discover industry-focused programs designed to
            help students build skills and achieve success.
          </p>

        

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Course Categories
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">

            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition"
                >
                  <Icon className="mx-auto w-10 h-10 text-blue-700" />

                  <h3 className="mt-4 font-semibold">
                    {course.title}
                  </h3>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* COURSE CARDS */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-2xl font-bold">
              Featured Courses
            </h2>

            <p className="mt-4 text-xl text-slate-500">
              Learn from experienced educators
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-7">

            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
                >

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${course.color}`}
                  >
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-slate-500">
                    Comprehensive training program with
                    practical learning modules.
                  </p>

                  <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-4 h-4" />
                      {course.students} Students
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock3 className="w-4 h-4" />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="w-4 h-4" />
                      {course.level}
                    </div>

                  </div>

                  <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                    View Course
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-700">
                25K+
              </h3>
              <p className="mt-2 text-slate-500">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700">
                500+
              </h3>
              <p className="mt-2 text-slate-500">
                Teachers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700">
                50+
              </h3>
              <p className="mt-2 text-slate-500">
                Centers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700">
                95%
              </h3>
              <p className="mt-2 text-slate-500">
                Success Rate
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 py-20 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready To Start Learning?
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Join thousands of students already building
            their future with JSYC.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
            Enroll Now
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

    </main>
  );
}