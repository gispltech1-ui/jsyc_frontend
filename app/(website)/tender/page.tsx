import {
  FileText,
  Calendar,
  Download,
  Clock,
  Building2,
  Search,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const tenders = [
  {
    id: "JSYC/TEN/2026/001",
    title: "Supply of Computer Systems",
    category: "IT Infrastructure",
    closingDate: "15 Jun 2026",
    status: "Open",
  },
  {
    id: "JSYC/TEN/2026/002",
    title: "Training Center Renovation",
    category: "Civil Works",
    closingDate: "22 Jun 2026",
    status: "Open",
  },
  {
    id: "JSYC/TEN/2026/003",
    title: "Digital Learning Platform Enhancement",
    category: "Software Services",
    closingDate: "30 Jun 2026",
    status: "Open",
  },
  {
    id: "JSYC/TEN/2026/004",
    title: "Furniture Procurement",
    category: "Office Infrastructure",
    closingDate: "05 Jul 2026",
    status: "Open",
  },
];

export default function TenderPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#005F2F] to-cyan-700 text-white">

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

          <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm">
            Government Procurement Portal
          </span>

          <h1 className="mt-6 text-4xl  font-bold">
            Tenders & Procurement
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Explore current procurement opportunities,
            bidding notices, and government tenders
            published by JSYC.
          </p>

        </div>

      </section>

  
      {/* Stats */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">
              <FileText className="w-12 h-12 mx-auto text-blue-700" />
              <h3 className="mt-4 text-3xl font-bold">
                35
              </h3>
              <p className="mt-2 text-slate-500">
                Active Tenders
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">
              <Building2 className="w-12 h-12 mx-auto text-green-600" />
              <h3 className="mt-4 text-3xl font-bold">
                12
              </h3>
              <p className="mt-2 text-slate-500">
                Departments
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">
              <Calendar className="w-12 h-12 mx-auto text-orange-500" />
              <h3 className="mt-4 text-3xl font-bold">
                8
              </h3>
              <p className="mt-2 text-slate-500">
                Closing Soon
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">
              <Clock className="w-12 h-12 mx-auto text-purple-600" />
              <h3 className="mt-4 text-3xl font-bold">
                24x7
              </h3>
              <p className="mt-2 text-slate-500">
                Online Access
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Active Tenders */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold text-[#005F2F]">
              Active Tenders
            </h2>

            <p className="mt-4 text-lg text-slate-500">
              Browse current procurement opportunities
            </p>

          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">

            <table className="w-full">

              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-5 font-semibold">
                    Tender ID
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Tender Title
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Category
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Closing Date
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Status
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {tenders.map((tender) => (
                  <tr
                    key={tender.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="p-5 font-medium">
                      {tender.id}
                    </td>

                    <td className="p-5">
                      {tender.title}
                    </td>

                    <td className="p-5">
                      {tender.category}
                    </td>

                    <td className="p-5">
                      {tender.closingDate}
                    </td>

                    <td className="p-5">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tender.status}
                      </span>
                    </td>

                    <td className="p-5">
                      <button className="flex items-center gap-2 text-[#005F2F] font-semibold">
                        <Download size={16} />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* Submission Process */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              Tender Submission Process
            </h2>

            <p className="mt-4 text-xl text-slate-500">
              Follow these simple steps
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Download Tender Document",
              "Prepare Required Documents",
              "Submit Bid Proposal",
              "Evaluation & Award",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#005F2F] text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#005F2F] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Tender Assistance?
          </h2>

          <p className="mt-5 text-xl text-blue-100">
            Our procurement team is available to assist
            vendors and bidders regarding tender-related
            queries.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-10">

            <div className="flex items-center gap-2">
              <Phone size={18} />
              +91 98765 *****
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              procurement@jsyc.in
            </div>

          </div>

          <button className="mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
            Contact Procurement Team
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}