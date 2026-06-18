import {
  Building2,
  MapPin,
  Users,
  Phone,
  Mail,
  ArrowRight,
  Wifi,
  BookOpen,
  Monitor,
} from "lucide-react";

const centers = [
  {
    name: "Ranchi Center",
    location: "Ranchi, Jharkhand",
    students: "8500+",
  },
  {
    name: "Jamshedpur Center",
    location: "Jamshedpur, Jharkhand",
    students: "6200+",
  },
  {
    name: "Dhanbad Center",
    location: "Dhanbad, Jharkhand",
    students: "5800+",
  },
  {
    name: "Bokaro Center",
    location: "Bokaro, Jharkhand",
    students: "4500+",
  },
];

export default function CentersPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#007a2f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-4xl font-bold">
            Our Learning Centers
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Delivering quality education through modern
            learning centers across Jharkhand.
          </p>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#007a2f]">
                50+
              </h3>
              <p className="mt-2 text-slate-500">
                Centers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#007a2f]">
                25K+
              </h3>
              <p className="mt-2 text-slate-500">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#007a2f]">
                500+
              </h3>
              <p className="mt-2 text-slate-500">
                Teachers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#007a2f]">
                95%
              </h3>
              <p className="mt-2 text-slate-500">
                Success Rate
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Featured Centers
            </h2>

            <p className="mt-4 text-slate-500 text-xl">
              Explore our education hubs
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

            {centers.map((center) => (
              <div
                key={center.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
              >

                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-[#007a2f] to-[#6cd092] flex items-center justify-center">
                  <Building2 className="w-20 h-20 text-white" />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {center.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    {center.location}
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-slate-500">
                    <Users className="w-4 h-4" />
                    {center.students} Students
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-[#007a2f] font-semibold">
                    View Center
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Facilities & Infrastructure
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Monitor className="w-14 h-14 text-[#007a2f] mx-auto" />
              <h3 className="mt-5 text-xl font-bold">
                Smart Classrooms
              </h3>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <Wifi className="w-14 h-14 text-[#007a2f] mx-auto" />
              <h3 className="mt-5 text-xl font-bold">
                High-Speed Internet
              </h3>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 text-center">
              <BookOpen className="w-14 h-14 text-[#007a2f] mx-auto" />
              <h3 className="mt-5 text-xl font-bold">
                Digital Library
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Contact CTA */}
      <section className="bg-[#005F2F] text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Find Your Nearest Center
          </h2>

          <p className="mt-5 text-md text-blue-100">
            Connect with us and begin your learning journey.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <div className="flex items-center gap-2">
              <Phone size={18} />
              +91 98765 43210
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              support@jsyc.in
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}