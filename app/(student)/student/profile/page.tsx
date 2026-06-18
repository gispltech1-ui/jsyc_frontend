import { Mail, Phone, Calendar, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          My Profile
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Welcome back, John Doe!
        </p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl  p-4">

        <h2 className="text-base font-semibold mb-5">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-xs text-slate-500">
              Full Name
            </p>
            <p className="text-base font-medium mt-1">
              John Doe
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Email
            </p>
            <p className="text-base font-medium mt-1">
              john@example.com
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Mobile
            </p>
            <p className="text-base font-medium mt-1">
              +91 9876543210
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Date of Birth
            </p>
            <p className="text-base font-medium mt-1">
              15/05/2000
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-xs text-slate-500">
              Address
            </p>
            <p className="text-base font-medium mt-1">
              123 Main Street, Ranchi, Jharkhand - 834001
            </p>
          </div>

        </div>

      </div>

      {/* Academic Information */}
      <div className="bg-white rounded-xl  p-4">

        <h2 className="text-base font-semibold mb-5">
          Academic Information
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-xs text-slate-500">
              Qualification
            </p>
            <p className="text-base font-medium mt-1">
              12th Standard
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              School / College
            </p>
            <p className="text-base font-medium mt-1">
              ABC High School
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Passing Year
            </p>
            <p className="text-base font-medium mt-1">
              2018
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Category
            </p>
            <p className="text-base font-medium mt-1">
              General
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}