import {
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Users,
} from "lucide-react";

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
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Status"
            value="Active"
            valueClass="text-green-600"
            icon={<CheckCircle2 className="h-8 w-8 text-green-600" />}
          />

          <StatCard
            title="Total Students"
            value="156"
            icon={<Users className="h-8 w-8 text-blue-700" />}
          />

          <StatCard
            title="Subjects"
            value="3"
            icon={<BookOpen className="h-8 w-8 text-teal-600" />}
          />

          <StatCard
            title="Centers"
            value="2"
            icon={<Building2 className="h-8 w-8 text-amber-600" />}
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
              {subjects.map((subject) => (
                <div
                  key={subject.name}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-4 transition-all hover:bg-slate-100"
                >
                  <div>
                    <h3 className="text-base font-medium text-slate-900">
                      {subject.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {subject.center}
                    </p>
                  </div>

                  <span className="rounded-lg bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                    {subject.students} Students
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

            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.subject}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-teal-50 p-2">
                      <CalendarDays className="h-5 w-5 text-teal-600" />
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-slate-900">
                        {session.subject}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {session.center}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-medium text-teal-600">
                    {session.time}
                  </span>
                </div>
              ))}
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