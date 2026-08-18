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
import { useEffect, useState } from "react";

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
  { title: "Add Center", icon: Building2 },
  { title: "Add Course", icon: BookOpen },
  { title: "Add Subject", icon: BookMarked },
  { title: "Publish News", icon: Newspaper },
  { title: "Publish Tender", icon: FileText },
  // { title: "Send Notification", icon: Bell },
];

const colors = [
  "#2447B2",
  "#18958B",
  "#2099D0",
  "#3D7BE0",
  "#25B2A6",
];

export default function AdminDashboard() {

  const [dashboard, setDashboard] = useState<any>(null);

  const [showCenterModal, setShowCenterModal] = useState(false);

  const [centerForm, setCenterForm] = useState({
    name: "",
    district: "",
  });

  const [savingCenter, setSavingCenter] = useState(false);

  const [showCourseModal, setShowCourseModal] = useState(false);

  const [courseForm, setCourseForm] = useState({
    name: "",
    fee: "",
  });

  const [savingCourse, setSavingCourse] = useState(false);

  const [showTenderModal, setShowTenderModal] = useState(false);

  const [tenderForm, setTenderForm] = useState({
    tenderNo: "",
    title: "",
    description: "",
    publishDate: "",
    closingDate: "",
    pdf: null as File | null,
  });

  const [savingTender, setSavingTender] = useState(false);

  const [showSubjectModal, setShowSubjectModal] = useState(false);

const [subjectForm, setSubjectForm] = useState({
  name: "",
});

const [savingSubject, setSavingSubject] = useState(false);

const [showNewsModal, setShowNewsModal] = useState(false);

const [newsForm, setNewsForm] = useState({
  title: "",
  description: "",
  content: "",
  publishDate: "",
  imageUrl: "",
});

const [savingNews, setSavingNews] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setDashboard(res.data);
        }
      });
  }, []);

  const handleCreateCenter = async () => {
    if (!centerForm.name.trim()) {
      alert("Enter center name");
      return;
    }

    if (!centerForm.district.trim()) {
      alert("Enter district");
      return;
    }

    try {
      setSavingCenter(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/center`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(centerForm),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.message || "Failed to create center");
        return;
      }

      alert("Center created successfully");

      setCenterForm({
        name: "",
        district: "",
      });

      setShowCenterModal(false);

      // Refresh dashboard so Total Centers changes immediately
      const dashboardResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dashboardData = await dashboardResponse.json();

      if (dashboardData.success) {
        setDashboard(dashboardData.data);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSavingCenter(false);
    }
  };

  const handleCreateCourse = async () => {
    if (!courseForm.name.trim()) {
      alert("Enter course name");
      return;
    }

    if (!courseForm.fee || Number(courseForm.fee) < 0) {
      alert("Enter valid course fee");
      return;
    }

    try {
      setSavingCourse(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/course`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: courseForm.name,
            fee: Number(courseForm.fee),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.message || "Failed to create course");
        return;
      }

      alert("Course created successfully");

      // Reset form
      setCourseForm({
        name: "",
        fee: "",
      });

      // Close modal
      setShowCourseModal(false);

      // Refresh dashboard
      const dashboardResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dashboardData = await dashboardResponse.json();

      if (dashboardData.success) {
        setDashboard(dashboardData.data);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSavingCourse(false);
    }
  };

  const handleCreateTender = async () => {
    if (!tenderForm.tenderNo.trim()) {
      alert("Enter tender number");
      return;
    }

    if (!tenderForm.title.trim()) {
      alert("Enter tender title");
      return;
    }

    if (!tenderForm.closingDate) {
      alert("Select closing date");
      return;
    }

    if (!tenderForm.pdf) {
      alert("Upload tender PDF");
      return;
    }

    try {
      setSavingTender(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append(
        "tenderNo",
        tenderForm.tenderNo
      );

      formData.append(
        "title",
        tenderForm.title
      );

      formData.append(
        "description",
        tenderForm.description
      );

      formData.append(
        "publishDate",
        tenderForm.publishDate
      );

      formData.append(
        "closingDate",
        tenderForm.closingDate
      );

      formData.append(
        "pdf",
        tenderForm.pdf
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/tender`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(
          data.message ||
          "Failed to publish tender"
        );
        return;
      }

      alert("Tender published successfully");

      // Reset
      setTenderForm({
        tenderNo: "",
        title: "",
        description: "",
        publishDate: "",
        closingDate: "",
        pdf: null,
      });

      // Close modal
      setShowTenderModal(false);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSavingTender(false);
    }
  };

  const stats = [
    {
      title: "Total Students",
      value: dashboard?.cards?.totalStudents,
      icon: Users,
      change: "",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Total Teachers",
      value: dashboard?.cards?.totalTeachers,
      icon: GraduationCap,
      change: "",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "Total Centers",
      value: dashboard?.cards?.totalCenters,
      icon: Building2,
      change: "",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Active Courses",
      value: dashboard?.cards?.totalCourses,
      icon: BookOpen,
      change: "",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Active Subjects",
      value: dashboard?.cards?.totalSubjects,
      icon: BookMarked,
      change: "",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "Pending Payments",
      value: dashboard?.cards?.pendingPayments,
      icon: AlertCircle,
      change: "",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Revenue",
      value: `₹${dashboard?.cards?.totalRevenue}`,
      icon: DollarSign,
      change: "",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Successful Payments",
      value: dashboard?.cards?.successPayments,
      icon: TrendingUp,
      change: "",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  if (!dashboard) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        Loading...
      </div>
    );
  }

  const recentActivities = [
    ...dashboard.recentStudents.map((student: any) => ({
      title: "New Student Registration",
      name: student.fullName,
      time: new Date(student.createdAt).toLocaleString(),
      type: "student",
    })),

    ...dashboard.recentTeachers.map((teacher: any) => ({
      title: "New Teacher Registration",
      name: teacher.fullName,
      time: new Date(teacher.createdAt).toLocaleString(),
      type: "teacher",
    })),
  ].sort(
    (a, b) =>
      new Date(b.time).getTime() -
      new Date(a.time).getTime()
  );

  const handleCreateSubject = async () => {
  if (!subjectForm.name.trim()) {
    alert("Enter subject name");
    return;
  }

  try {
    setSavingSubject(true);

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/subject`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: subjectForm.name,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      alert(data.message || "Failed to create subject");
      return;
    }

    alert("Subject created successfully");

    setSubjectForm({
      name: "",
    });

    setShowSubjectModal(false);

    // Refresh admin dashboard
    const dashboardResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const dashboardData = await dashboardResponse.json();

    if (dashboardData.success) {
      setDashboard(dashboardData.data);
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setSavingSubject(false);
  }
};

const handleCreateNews = async () => {
  if (!newsForm.title.trim()) {
    alert("Enter news title");
    return;
  }

  if (!newsForm.description.trim()) {
    alert("Enter news description");
    return;
  }

  try {
    setSavingNews(true);

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/news`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          title: newsForm.title,
          description: newsForm.description,
          content: newsForm.content,
          publishDate: newsForm.publishDate || undefined,
          imageUrl: newsForm.imageUrl || undefined,
          isPublished: true,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      alert(data.message || "Failed to publish news");
      return;
    }

    alert("News published successfully");

    setNewsForm({
      title: "",
      description: "",
      content: "",
      publishDate: "",
      imageUrl: "",
    });

    setShowNewsModal(false);

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setSavingNews(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats?.map((item) => (
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

                {item?.change && (
                  <p className="text-green-600 text-sm mt-3">
                    ↑ {item?.change}
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

      {/* <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-6">
            Student Enrollment Trends
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={dashboard.enrollmentTrend}>
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
            <Pie
  data={dashboard?.districtEnrollment || []}
  dataKey="value"
  outerRadius={100}
  label={({ name, value }) => `${name}: ${value}%`}
>
  {(dashboard?.districtEnrollment || []).map(
    (_: any, index: number) => (
      <Cell
        key={index}
        fill={colors[index % colors.length]}
      />
    )
  )}
</Pie>
          </ResponsiveContainer>
        </div>
      </div> */}

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-xl p-6">
  <h2 className="font-bold text-xl mb-6">
    Course Popularity Analysis
  </h2>

  <div className="h-[320px]">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={dashboard?.coursePopularity || []}
          dataKey="students"
          nameKey="course"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {(dashboard?.coursePopularity || []).map(
            (_: any, index: number) => (
              <Cell
                key={index}
                fill={colors[index % colors.length]}
              />
            )
          )}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>

        <div className="bg-white  rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4">
            Recent Activities
          </h2>

          <div className="h-[320px] overflow-y-auto pr-2">
            {recentActivities.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 py-5 border-b last:border-b-0"
              >
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
                  {item.type === "student" ? (
                    <Users className="w-5 h-5 text-blue-600" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-teal-600" />
                  )}
                </div>

                <div>
                  <p className="text-slate-500 text-xs">
                    {item.title}
                  </p>

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
              // onClick={() => {
              //   if (action.title === "Add Center") {
              //     setShowCenterModal(true);
              //   }
              // }}

              onClick={() => {
                if (action.title === "Add Center") {
                  setShowCenterModal(true);
                }

                if (action.title === "Add Course") {
                  setShowCourseModal(true);
                }

                if (action.title === "Publish Tender") {
                  setShowTenderModal(true);
                }
                if (action.title === "Add Subject") {
  setShowSubjectModal(true);
}
if (action.title === "Publish News") {
    setShowNewsModal(true);
  }
              }}
              className="rounded-xl py-6 hover:bg-slate-50 transition cursor-pointer"
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

      {showCenterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Add Center
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Create a new JSYC center
                </p>
              </div>

              <button
                onClick={() => setShowCenterModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xl"
              >
                ×
              </button>

            </div>

            {/* Form */}
            <div className="p-6 space-y-5">

              {/* Center Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Center Name
                </label>

                <input
                  type="text"
                  placeholder="Enter center name"
                  value={centerForm.name}
                  onChange={(e) =>
                    setCenterForm({
                      ...centerForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full h-11 px-4 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  District
                </label>

                <input
                  type="text"
                  placeholder="Enter district"
                  value={centerForm.district}
                  onChange={(e) =>
                    setCenterForm({
                      ...centerForm,
                      district: e.target.value,
                    })
                  }
                  className="w-full h-11 px-4 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200">

              <button
                onClick={() => {
                  setShowCenterModal(false);

                  setCenterForm({
                    name: "",
                    district: "",
                  });
                }}
                className="px-5 py-2.5 text-sm font-medium border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateCenter}
                disabled={savingCenter}
                className="px-5 py-2.5 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
              >
                {savingCenter ? "Saving..." : "Save Center"}
              </button>

            </div>

          </div>

        </div>
      )}

      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Add Course
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Create a new JSYC course
                </p>
              </div>

              <button
                onClick={() => setShowCourseModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xl"
              >
                ×
              </button>

            </div>

            {/* Form */}
            <div className="p-6 space-y-5">

              {/* Course Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Course Name
                </label>

                <input
                  type="text"
                  placeholder="Enter course name"
                  value={courseForm.name}
                  onChange={(e) =>
                    setCourseForm({
                      ...courseForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full h-11 px-4 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Course Fee */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Course Fee
                </label>

                <input
                  type="number"
                  min="0"
                  placeholder="Enter course fee"
                  value={courseForm.fee}
                  onChange={(e) =>
                    setCourseForm({
                      ...courseForm,
                      fee: e.target.value,
                    })
                  }
                  className="w-full h-11 px-4 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200">

              <button
                onClick={() => {
                  setShowCourseModal(false);

                  setCourseForm({
                    name: "",
                    fee: "",
                  });
                }}
                className="px-5 py-2.5 text-sm font-medium border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateCourse}
                disabled={savingCourse}
                className="px-5 py-2.5 text-sm font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
              >
                {savingCourse ? "Saving..." : "Save Course"}
              </button>

            </div>

          </div>

        </div>
      )}

      {showTenderModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

    <div className="w-full max-w-md bg-white rounded-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Publish Tender
          </h2>

          <p className="text-[11px] text-slate-500 mt-1">
            Add a new tender
          </p>
        </div>

        <button
          onClick={() => setShowTenderModal(false)}
          className="text-slate-400 hover:text-slate-700 text-lg"
        >
          ×
        </button>
      </div>

      {/* Form */}
      <div className="p-5 space-y-3">

        {/* Tender Number */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Tender Number
          </label>

          <input
            type="text"
            placeholder="JSYC/TEN/2026/001"
            value={tenderForm.tenderNo}
            onChange={(e) =>
              setTenderForm({
                ...tenderForm,
                tenderNo: e.target.value,
              })
            }
            className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Tender Title
          </label>

          <input
            type="text"
            placeholder="Enter tender title"
            value={tenderForm.title}
            onChange={(e) =>
              setTenderForm({
                ...tenderForm,
                title: e.target.value,
              })
            }
            className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Description
          </label>

          <textarea
            placeholder="Enter tender description"
            value={tenderForm.description}
            onChange={(e) =>
              setTenderForm({
                ...tenderForm,
                description: e.target.value,
              })
            }
            rows={2}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-3">

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Publish Date
            </label>

            <input
              type="date"
              value={tenderForm.publishDate}
              onChange={(e) =>
                setTenderForm({
                  ...tenderForm,
                  publishDate: e.target.value,
                })
              }
              className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Closing Date
            </label>

            <input
              type="date"
              value={tenderForm.closingDate}
              onChange={(e) =>
                setTenderForm({
                  ...tenderForm,
                  closingDate: e.target.value,
                })
              }
              className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* PDF */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Tender PDF
          </label>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setTenderForm({
                ...tenderForm,
                pdf: e.target.files?.[0] || null,
              })
            }
            className="w-full text-xs border border-slate-300 rounded-lg p-2"
          />

          <p className="text-[10px] text-slate-400 mt-1">
            PDF only
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 px-5 py-3 border-t border-slate-200">

        <button
          onClick={() => {
            setShowTenderModal(false);

            setTenderForm({
              tenderNo: "",
              title: "",
              description: "",
              publishDate: "",
              closingDate: "",
              pdf: null,
            });
          }}
          className="px-4 py-2 text-xs font-medium border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          onClick={handleCreateTender}
          disabled={savingTender}
          className="px-4 py-2 text-xs font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
        >
          {savingTender ? "Publishing..." : "Publish"}
        </button>

      </div>

    </div>
  </div>
)}

{showSubjectModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

    <div className="w-full max-w-sm bg-white rounded-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Add Subject
          </h2>

          <p className="text-[11px] text-slate-500 mt-1">
            Create a new subject
          </p>
        </div>

        <button
          onClick={() => setShowSubjectModal(false)}
          className="text-slate-400 hover:text-slate-700 text-lg"
        >
          ×
        </button>

      </div>

      {/* Form */}
      <div className="p-5">

        <label className="block text-xs font-medium text-slate-700 mb-1">
          Subject Name
        </label>

        <input
          type="text"
          placeholder="Enter subject name"
          value={subjectForm.name}
          onChange={(e) =>
            setSubjectForm({
              name: e.target.value,
            })
          }
          className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 px-5 py-3 border-t border-slate-200">

        <button
          onClick={() => {
            setShowSubjectModal(false);

            setSubjectForm({
              name: "",
            });
          }}
          className="px-4 py-2 text-xs font-medium border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          onClick={handleCreateSubject}
          disabled={savingSubject}
          className="px-4 py-2 text-xs font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
        >
          {savingSubject ? "Saving..." : "Save Subject"}
        </button>

      </div>

    </div>

  </div>
)}

{showNewsModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

    <div className="w-full max-w-md bg-white rounded-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Publish News
          </h2>

          <p className="text-[11px] text-slate-500 mt-1">
            Add a new news announcement
          </p>
        </div>

        <button
          onClick={() => setShowNewsModal(false)}
          className="text-slate-400 hover:text-slate-700 text-lg"
        >
          ×
        </button>

      </div>


      {/* Form */}
      <div className="p-5 space-y-3">

        {/* Title */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            News Title
          </label>

          <input
            type="text"
            placeholder="Enter news title"
            value={newsForm.title}
            onChange={(e) =>
              setNewsForm({
                ...newsForm,
                title: e.target.value,
              })
            }
            className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Description */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Short Description
          </label>

          <textarea
            placeholder="Enter short description"
            value={newsForm.description}
            onChange={(e) =>
              setNewsForm({
                ...newsForm,
                description: e.target.value,
              })
            }
            rows={2}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>


        {/* Content */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            News Content
          </label>

          <textarea
            placeholder="Enter full news content"
            value={newsForm.content}
            onChange={(e) =>
              setNewsForm({
                ...newsForm,
                content: e.target.value,
              })
            }
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>


        {/* Publish Date */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Publish Date
          </label>

          <input
            type="date"
            value={newsForm.publishDate}
            onChange={(e) =>
              setNewsForm({
                ...newsForm,
                publishDate: e.target.value,
              })
            }
            className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Image */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Image URL
          </label>

          <input
            type="text"
            placeholder="https://..."
            value={newsForm.imageUrl}
            onChange={(e) =>
              setNewsForm({
                ...newsForm,
                imageUrl: e.target.value,
              })
            }
            className="w-full h-10 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>


      {/* Footer */}
      <div className="flex justify-end gap-2 px-5 py-3 border-t border-slate-200">

        <button
          onClick={() => {
            setShowNewsModal(false);

            setNewsForm({
              title: "",
              description: "",
              content: "",
              publishDate: "",
              imageUrl: "",
            });
          }}
          className="px-4 py-2 text-xs font-medium border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          onClick={handleCreateNews}
          disabled={savingNews}
          className="px-4 py-2 text-xs font-medium bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50"
        >
          {savingNews ? "Publishing..." : "Publish"}
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}