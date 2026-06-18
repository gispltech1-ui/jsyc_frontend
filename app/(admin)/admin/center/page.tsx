"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Download,
  Eye,
  Pencil,
  X,
  Building2
} from "lucide-react";

const centers = [
  {
    id: "CTR001",
    name: "Ranchi Central Branch",
    district: "Ranchi",
    capacity: 500,
    students: 420,
    teachers: 18,
    status: "active",
  },
  {
    id: "CTR002",
    name: "Jamshedpur East",
    district: "Jamshedpur",
    capacity: 400,
    students: 350,
    teachers: 15,
    status: "active",
  },
  {
    id: "CTR003",
    name: "Dhanbad North",
    district: "Dhanbad",
    capacity: 350,
    students: 280,
    teachers: 12,
    status: "active",
  },
  {
    id: "CTR004",
    name: "Bokaro Central",
    district: "Bokaro",
    capacity: 300,
    students: 245,
    teachers: 10,
    status: "active",
  },
];

export default function CenterManagement() {
  const [showModal, setShowModal] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

const [formData, setFormData] = useState({
  centerName: "",
  centerCode: "",
  district: "",
  block: "",
});

  return (
    <>
      <div className="bg-slate-50">
        {/* Header */}

        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Center Management
            </h1>

            <p className="text-[13px] text-slate-500 mt-1">
              Manage all training centers
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="h-11 px-5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 text-sm font-medium"
          >
            <Plus size={16} />
            Add Center
          </button>
        </div>

        {/* Card */}

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          {/* Search */}

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search centers..."
                className="w-full h-11 rounded-lg pl-10 pr-4 text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="h-11 px-4 border border-slate-200 rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
              <Filter size={16} />
              Filters
            </button>

            <button className="h-11 px-4 border border-slate-200 rounded-lg flex items-center gap-2 text-sm hover:bg-slate-50">
              <Download size={16} />
              Export
            </button>
          </div>

          {/* Table */}

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    CENTER ID
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    CENTER NAME
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    DISTRICT
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    CAPACITY
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    STUDENTS
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    TEACHERS
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    STATUS
                  </th>

                  <th className="px-4 py-3 text-left text-[11px] font-semibold">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody>
                {centers.map((center) => (
                  <tr
                    key={center.id}
                    className="border-t border-slate-200 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 text-[12px] font-mono">
                      {center.id}
                    </td>

                    <td className="px-4 py-3 text-[14px] font-medium">
                      {center.name}
                    </td>

                    <td className="px-4 py-3 text-[13px]">
                      {center.district}
                    </td>

                    <td className="px-4 py-3 text-[13px]">
                      {center.capacity}
                    </td>

                    <td className="px-4 py-3 text-[13px]">
                      {center.students}
                    </td>

                    <td className="px-4 py-3 text-[13px]">
                      {center.teachers}
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        active
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Eye
                          size={16}
                          className="text-blue-600 cursor-pointer"
                        />

                        <Pencil
                          size={16}
                          className="text-slate-500 cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}

      {showModal && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Add New Center
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Complete the center registration process
          </p>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-10 h-10 rounded-lg hover:bg-slate-100 flex items-center justify-center transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Step Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-lg">
            Step {currentStep} of 5
          </span>
        </div>

        {/* Progress */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all ${
                step <= currentStep
                  ? "bg-blue-700"
                  : "bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* STEP 1 */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Basic Information
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Center Name
                </label>

                <input
                  type="text"
                  placeholder="Enter center name"
                  value={formData.centerName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      centerName: e.target.value,
                    })
                  }
                  className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Center Code
                </label>

                <input
                  type="text"
                  placeholder="Enter center code"
                  value={formData.centerCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      centerCode: e.target.value,
                    })
                  }
                  className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    District
                  </label>

                  <select
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        district: e.target.value,
                      })
                    }
                    className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">
                      Select District
                    </option>

                    <option>Ranchi</option>
                    <option>Jamshedpur</option>
                    <option>Dhanbad</option>
                    <option>Bokaro</option>
                    <option>Deoghar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Block
                  </label>

                  <input
                    type="text"
                    placeholder="Enter block"
                    value={formData.block}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        block: e.target.value,
                      })
                    }
                    className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="py-20 text-center text-slate-500">
            Address Details Form Here
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <div className="py-20 text-center text-slate-500">
            Contact Details Form Here
          </div>
        )}

        {/* STEP 4 */}
        {currentStep === 4 && (
          <div className="py-20 text-center text-slate-500">
            Infrastructure Form Here
          </div>
        )}

        {/* STEP 5 */}
        {currentStep === 5 && (
          <div className="py-20 text-center text-slate-500">
            Documents & Review Here
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-slate-200 mt-8 pt-6 flex justify-between">
          <button
            onClick={() =>
              setCurrentStep((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentStep === 1}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium border ${
              currentStep === 1
                ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed"
                : "border-slate-300 hover:bg-slate-50"
            }`}
          >
            Previous
          </button>

          {currentStep < 5 ? (
            <button
              onClick={() =>
                setCurrentStep((prev) => prev + 1)
              }
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-medium"
            >
              Next Step
            </button>
          ) : (
            <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium">
              Submit Center
            </button>
          )}
        </div>

      </div>
    </div>
  </div>
)}
    </>
  );
}