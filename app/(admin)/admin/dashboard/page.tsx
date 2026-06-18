"use client";

import {
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  BookMarked,
  AlertCircle,
  DollarSign,
  TrendingUp,
  Bell,
  FileText,
  Newspaper,
  UserPlus,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  {
    title: "Total Students",
    value: "9,200",
    icon: Users,
    change: "+12.5% from last month",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Total Teachers",
    value: "542",
    icon: GraduationCap,
    change: "+8.2% from last month",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Total Centers",
    value: "48",
    icon: Building2,
    change: "+4 new centers",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Active Courses",
    value: "24",
    icon: BookOpen,
    change: "",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Active Subjects",
    value: "186",
    icon: BookMarked,
    change: "",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Pending Approvals",
    value: "127",
    icon: AlertCircle,
    change: "",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Total Revenue",
    value: "₹42.5L",
    icon: DollarSign,
    change: "+18.4% from last month",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Today's Revenue",
    value: "₹1.8L",
    icon: TrendingUp,
    change: "+₹35K from yesterday",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const enrollmentData = [
  { month: "Jan", students: 420 },
  { month: "Feb", students: 580 },
  { month: "Mar", students: 720 },
  { month: "Apr", students: 890 },
  { month: "May", students: 1170 },
];

const districtData = [
  { name: "Ranchi", value: 27 },
  { name: "Jamshedpur", value: 20 },
  { name: "Dhanbad", value: 17 },
  { name: "Bokaro", value: 14 },
  { name: "Others", value: 23 },
];

const courseData = [
  { course: "Computer Science", students: 1850 },
  { course: "Electronics", students: 1420 },
  { course: "Mechanical", students: 1270 },
  { course: "Civil", students: 1150 },
];

const activities = [
  {
    title: "New student registration",
    name: "Rajesh Kumar",
    time: "5 minutes ago",
    icon: UserPlus,
  },
  {
    title: "Payment received",
    name: "Priya Sharma - ₹5,000",
    time: "12 minutes ago",
    icon: DollarSign,
  },
  {
    title: "New teacher registration",
    name: "Dr. Anil Verma",
    time: "28 minutes ago",
    icon: GraduationCap,
  },
  {
    title: "New center added",
    name: "Ranchi Central Branch",
    time: "1 hour ago",
    icon: Building2,
  },
];

const quickActions = [
  { title: "Add Student", icon: Users },
  { title: "Add Teacher", icon: GraduationCap },
  { title: "Add Center", icon: Building2 },
  { title: "Add Course", icon: BookOpen },
  { title: "Add Subject", icon: BookMarked },
  { title: "Publish News", icon: Newspaper },
  { title: "Publish Tender", icon: FileText },
  { title: "Send Notification", icon: Bell },
];

const colors = [
  "#2447B2",
  "#18958B",
  "#2099D0",
  "#3D7BE0",
  "#25B2A6",
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-600 text-sm">{item.title}</p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {item.value}
                </h3>

                {item.change && (
                  <p className="text-green-600 text-sm mt-3">
                    ↑ {item.change}
                  </p>
                )}
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-6">
            Student Enrollment Trends
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#2447B2"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-6">
            District-wise Enrollment
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={districtData}
                dataKey="value"
                outerRadius={100}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {districtData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-6">
            Course Popularity Analysis
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="course" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="students"
                fill="#18958B"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4">
            Recent Activities
          </h2>

          <div className="h-[320px] overflow-y-auto pr-2">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 py-5 border-b last:border-b-0"
              >
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-slate-500 text-xs">{item.title}</p>
                  <h4 className="font-semibold text-md">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white  rounded-xl p-6 mt-6">
        <h2 className="font-bold text-xl mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.title}
              className=" rounded-xl py-6 hover:bg-slate-50 transition"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-50 flex items-center justify-center">
                <action.icon className="w-6 h-6 text-indigo-600" />
              </div>

              <p className="mt-4 text-sm font-medium">
                {action.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}