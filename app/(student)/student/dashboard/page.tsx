"use client"
import {
  CheckCircle,
  Calendar,
  BookOpen,
  CreditCard,
  Clock3,
  Bell,
  Building2,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) return;

    const parsedUser = JSON.parse(user);

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/student/${parsedUser.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStudent(data.data);
        }
      })
      .catch(console.error);

  }, []);

  if (!student) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white rounded-xl  p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">
              Enrollment Status
            </p>
            <h2 className="text-xl font-bold text-green-600 mt-1">
              <h2 className="text-xl font-bold text-green-600 mt-1">
                {student?.payments?.[0]?.status === "SUCCESS"
                  ? "Active"
                  : "Pending"}
              </h2>
            </h2>
          </div>
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>



        <div className="bg-white rounded-xl  p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">
              Subjects
            </p>
            <h2 className="text-xl font-bold mt-1">
              <h2 className="text-xl font-bold mt-1">
                <h2 className="text-xl font-bold mt-1">
                  {student?.enrollment?.subject?.name}
                </h2></h2>
            </h2>
          </div>
          <BookOpen className="w-7 h-7 text-teal-600" />
        </div>

        <div className="bg-white rounded-xl  p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">
              Payments
            </p>
            <h2 className="text-xl font-bold text-green-600 mt-1">
              {student?.payments?.[0]?.status}
            </h2>
          </div>
          <CreditCard className="w-7 h-7 text-green-600" />
        </div>

      </div>

      {/* Profile + Classes */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Profile */}
        <div className="bg-white rounded-xl  p-5">

          <h3 className="text-base font-semibold mb-5">
            Student Profile
          </h3>


          <div className="flex flex-col items-center">

            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
              {/* {student?.documents?.passportPhoto ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}/${student.documents.passportPhoto.replace(/\\/g, "/")}`}
                  className="w-20 h-20 rounded-full object-cover"
                  alt="Profile"
                />
              ) : ( */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {student?.fullName
                    ?.split(" ")
                    .map((x: string) => x[0])
                    .join("")
                    .substring(0, 2)}
                </div>
              {/* )} */}
            </div>

            <h4 className="text-lg font-semibold mt-3">
              {student.fullName}
            </h4>
            <span className="bg-blue-700 text-white text-[11px] px-3 py-1 rounded-lg mt-2">
              {student?.id}
            </span>
          </div>

          <hr className="my-5" />

          <div className="space-y-2 text-xs">

            <div className="flex justify-between">
              <span className="text-slate-500">
                Email
              </span>
              <span>{student?.user?.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Mobile
              </span>
              <span>
                +91 {student?.user?.mobileNumber}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Course
              </span>
              <span>
                {student?.enrollment?.course?.name}
              </span>
            </div>

          </div>



        </div>

        {/* Upcoming Classes */}
        <div className="xl:col-span-2 bg-white rounded-xl  p-5">

          <h3 className="text-base font-semibold mb-5">
            Upcoming Classes
          </h3>

          <div className="space-y-3">

            {[
              {
                subject: student?.enrollment?.subject?.name,
                teacher: "Not Assigned",
                time: "Coming Soon",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex gap-3">

                  <Clock3 className="w-5 h-5 text-blue-600 mt-0.5" />

                  <div>
                    <h4 className="text-sm font-medium">
                      {item.subject}
                    </h4>

                    <p className="text-xs text-slate-500">
                      {item.teacher}
                    </p>
                  </div>

                </div>

                <span className="text-xs font-medium text-blue-600">
                  {item.time}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Notifications + Center */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        <div className="xl:col-span-2 bg-white rounded-xl  p-5">

          <h3 className="text-base font-semibold mb-5">
            Recent Notifications
          </h3>

          <div className="space-y-4">

            {[
              "Assignment Due Tomorrow",
              "Fee Payment Confirmed",
              "New Study Material Uploaded",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-3"
              >
                <Bell className="w-4 h-4 text-teal-600 mt-1" />

                <div>
                  <p className="text-sm font-medium">
                    {item}
                  </p>

                  <p className="text-xs text-slate-500">
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        <div className="bg-white rounded-xl  p-5">

          <h3 className="text-base font-semibold mb-5">
            Center Information
          </h3>

          <div className="flex gap-3">

            <Building2 className="w-5 h-5 text-blue-600" />

            <div>
              <p className="text-sm font-medium">
                {student?.enrollment?.center?.name}
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Main Road, Ranchi,
                Jharkhand
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}