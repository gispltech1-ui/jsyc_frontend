"use client";

import {
  FileText,
  Calendar,
  Download,
  Clock,
  Building2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function TenderPage() {
  const [tenders, setTenders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/tender`
        );

        const data = await res.json();

        if (data.success) {
          setTenders(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch tenders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  // Active tenders
  const activeTenders = tenders.filter((tender) => {
    if (!tender.closingDate) return true;

    return new Date(tender.closingDate) >= new Date();
  });

  // Closing within next 7 days
  const closingSoon = tenders.filter((tender) => {
    if (!tender.closingDate) return false;

    const today = new Date();
    const closing = new Date(tender.closingDate);

    const diff =
      closing.getTime() - today.getTime();

    const days =
      diff / (1000 * 60 * 60 * 24);

    return days >= 0 && days <= 7;
  });

  const formatDate = (date: string) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  const getPdfUrl = (pdfUrl: string) => {
    if (!pdfUrl) return "#";

    // If backend already returns full URL
    if (pdfUrl.startsWith("http")) {
      return pdfUrl;
    }

    // Convert uploads/xxx.pdf into API URL
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${pdfUrl.replace(
      /\\/g,
      "/"
    )}`;
  };

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#005F2F] text-white">

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

          <h1 className="mt-6 text-4xl font-bold">
            Tenders & Procurement
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Explore current procurement opportunities,
            bidding notices, and government tenders
            published by JSYC.
          </p>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Active */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">

              <FileText className="w-12 h-12 mx-auto text-blue-700" />

              <h3 className="mt-4 text-3xl font-bold">
                {activeTenders.length}
              </h3>

              <p className="mt-2 text-slate-500">
                Active Tenders
              </p>

            </div>


            {/* Departments */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">

              <Building2 className="w-12 h-12 mx-auto text-green-600" />

              <h3 className="mt-4 text-3xl font-bold">
                JSYC
              </h3>

              <p className="mt-2 text-slate-500">
                Procurement Department
              </p>

            </div>


            {/* Closing Soon */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition">

              <Calendar className="w-12 h-12 mx-auto text-orange-500" />

              <h3 className="mt-4 text-3xl font-bold">
                {closingSoon.length}
              </h3>

              <p className="mt-2 text-slate-500">
                Closing Soon
              </p>

            </div>


            {/* Online */}
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


      {/* ================= ACTIVE TENDERS ================= */}

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


          {loading ? (

            <div className="text-center py-20">
              <p className="text-slate-500">
                Loading tenders...
              </p>
            </div>

          ) : activeTenders.length === 0 ? (

            <div className="text-center py-20 border rounded-3xl">
              <FileText
                className="mx-auto text-slate-300"
                size={50}
              />

              <p className="mt-4 text-slate-500">
                No active tenders available.
              </p>
            </div>

          ) : (

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
                      Description
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

                  {activeTenders.map((tender) => (

                    <tr
                      key={tender.id}
                      className="border-t hover:bg-slate-50"
                    >

                      {/* Tender Number */}

                      <td className="p-5 font-medium">

                        {tender.tenderNo ||
                          tender.id}

                      </td>


                      {/* Title */}

                      <td className="p-5">

                        <p className="font-medium">
                          {tender.title}
                        </p>

                      </td>


                      {/* Description */}

                      <td className="p-5">

                        <p className="text-sm text-slate-500 max-w-xs">
                          {tender.description ||
                            "-"}
                        </p>

                      </td>


                      {/* Closing Date */}

                      <td className="p-5">

                        {formatDate(
                          tender.closingDate
                        )}

                      </td>


                      {/* Status */}

                      <td className="p-5">

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                          Open

                        </span>

                      </td>


                      {/* PDF */}

                      <td className="p-5">

                        <a
                          href={getPdfUrl(
                            tender.pdfUrl
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#005F2F] font-semibold hover:underline"
                        >

                          <Download size={16} />

                          Download

                        </a>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </section>


      {/* ================= SUBMISSION PROCESS ================= */}

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


      {/* ================= CTA ================= */}

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