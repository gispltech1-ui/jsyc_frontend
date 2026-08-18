"use client"
import {
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const subjects = [
  {
    name: "Programming Fundamentals",
    center: "Ranchi Central",
    students: 65,
  },
  {
    name: "Web Development",
    center: "Ranchi Central",
    students: 52,
  },
  {
    name: "Data Structures",
    center: "Jamshedpur",
    students: 39,
  },
];

const sessions = [
  {
    subject: "Programming Fundamentals",
    center: "Ranchi",
    time: "Today, 10:00 AM",
  },
  {
    subject: "Web Development",
    center: "Ranchi",
    time: "Today, 2:00 PM",
  },
  {
    subject: "Data Structures",
    center: "Jamshedpur",
    time: "Tomorrow, 10:00 AM",
  },
];

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState<any>(null);

  useEffect(() => {
  const user = localStorage.getItem("user");

  if (!user) return;

  const parsedUser = JSON.parse(user);

  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teacher/${parsedUser.id}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setTeacher(data.data);
      }
    })
    .catch(console.error);

}, []);

if (!teacher) {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      Loading...
    </div>
  );
}
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl space-y-5">
        <div className="rounded-2xl bg-white border border-slate-200 p-6">

  <div className="flex items-center gap-5">

      
      <div className="w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-bold">
        {teacher?.fullName
          ?.split(" ")
          .map((x: string) => x[0])
          .join("")
          .substring(0, 2)}
      </div>
    

    <div>

      <h1 className="text-2xl font-bold">
        {teacher?.fullName}
      </h1>

      <p className="text-slate-500">
        {teacher?.highestQualification}
      </p>

      <p className="text-sm text-slate-400 mt-1">
        {teacher?.user?.email}
      </p>

      <p className="text-sm text-slate-400">
        +91 {teacher?.user?.mobileNumber}
      </p>

    </div>

  </div>

</div>
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Status"
value={
  teacher.payments?.[0]?.status === "SUCCESS"
    ? "Active"
    : "Pending"
}            valueClass="text-green-600"
            icon={<CheckCircle2 className="h-8 w-8 text-green-600" />}
          />

          <StatCard
            title="Total Students"
value="--"
            icon={<Users className="h-8 w-8 text-blue-700" />}
          />

          <StatCard
            title="Subjects"
value={
  teacher.subjectsCanTeach
    ? teacher.subjectsCanTeach.split(",").length.toString()
    : "0"
}            icon={<BookOpen className="h-8 w-8 text-teal-600" />}
          />

          <StatCard
            title="Centers"
value={
  [
    teacher.preferredCenter1,
    teacher.preferredCenter2,
  ]
    .filter(Boolean)
    .length.toString()
}            icon={<Building2 className="h-8 w-8 text-amber-600" />}
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* Assigned Subjects */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Assigned Subjects
            </h2>

            <div className="space-y-3">
              {teacher.subjectsCanTeach
  ?.split(",")
  .map((subject: string, index: number) => (
    <div
      key={index}
      className="flex items-center justify-between rounded-xl bg-slate-50 p-4 hover:bg-slate-100"
    >
      <div>

        <h3 className="text-base font-medium">
          {subject.trim()}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {teacher.preferredCenter1}
        </p>

      </div>

      <span className="rounded-lg bg-teal-600 px-3 py-1 text-xs font-medium text-white">
        Assigned
      </span>

    </div>
))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Upcoming Sessions
            </h2>

            <div className="rounded-xl bg-slate-50 p-6 text-center">

  <CalendarDays
    className="mx-auto text-slate-400"
    size={40}
  />

  <h3 className="mt-3 font-semibold">
    No Sessions Scheduled
  </h3>

  <p className="text-sm text-slate-500 mt-1">
    Upcoming classes will appear here.
  </p>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  valueClass?: string;
};

function StatCard({
  title,
  value,
  icon,
  valueClass = "text-slate-900",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className={`mt-1 text-2xl font-semibold ${valueClass}`}>
            {value}
          </h3>
        </div>

        <div>{icon}</div>
      </div>
    </div>
  );
}