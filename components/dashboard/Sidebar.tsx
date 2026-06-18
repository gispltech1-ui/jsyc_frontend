"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  GraduationCap,
  Calendar,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Users,
  ClipboardList,
  Building2,
} from "lucide-react";

const studentMenus = [
  {
    name: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Profile",
    href: "/student/profile",
    icon: User,
  },
  {
    name: "Subjects",
    href: "/student/subject",
    icon: GraduationCap,
  },
//   {
//     name: "Attendance",
//     href: "/attendance",
//     icon: Calendar,
//   },
//   {
//     name: "Payments",
//     href: "/payments",
//     icon: CreditCard,
//   },
//   {
//     name: "Notifications",
//     href: "/notifications",
//     icon: Bell,
//   },
//   {
//     name: "Settings",
//     href: "/settings",
//     icon: Settings,
//   },
];

const teacherMenus = [
  {
    name: "Dashboard",
    href: "/teacher/panel",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    href: "/teacher/profile",
    icon: User,
  },
  {
    name: "Subjects",
    href: "/teacher/subject",
    icon: GraduationCap,
  },
//   {
//     name: "Students",
//     href: "/teacher/students",
//     icon: Users,
//   },
//   {
//     name: "Attendance",
//     href: "/teacher/attendance",
//     icon: Calendar,
//   },
//   {
//     name: "Assignments",
//     href: "/teacher/assignments",
//     icon: ClipboardList,
//   },
//   {
//     name: "Settings",
//     href: "/teacher/settings",
//     icon: Settings,
//   },
];

const adminMenus = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Student Management",
    href: "/admin/student",
    icon: Users,
  },
  {
    name: "Teachers Management",
    href: "/admin/teacher",
    icon: GraduationCap,
  },
  {
    name: "Course Management",
    href: "/admin/course",
    icon: Building2,
  },
  {
    name: "Payment Management",
    href: "/admin/payment",
    icon: CreditCard,
  },
  {
    name: "Center Management",
    href: "/admin/center",
    icon: Building2,
  },
   {
    name: "News Management",
    href: "/admin/news",
    icon: Building2,
  },
   {
    name: "Tender Management",
    href: "/admin/tender",
    icon: Building2,
  },
   {
    name: "Notification Center",
    href: "/admin/notification",
    icon: Building2,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");

  router.push("/login");
};

  // TEMPORARY FOR UI
  const role =
    typeof window !== "undefined"
      ? localStorage.getItem("role") || "student"
      : "student";

  const menus =
    role === "teacher"
      ? teacherMenus
      : role === "admin"
      ? adminMenus
      : studentMenus;

  return (
<aside className="w-[240px] shrink-0 bg-blue-700 text-white flex flex-col">
      {/* Logo */}
      <div className="h-14 px-3 flex items-center border-b border-blue-600">

        <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
          <GraduationCap size={16} />
        </div>

        <div className="ml-2">
          <h2 className="font-semibold text-sm">
            JSYC Portal
          </h2>

          <p className="text-[10px] text-blue-100">
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 p-1 space-y-1">

        {menus.map((menu) => {
          const Icon = menu.icon;

          const isActive =
            pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`
                flex items-center gap-3
                px-3 py-2
                rounded-lg
                text-xs
                transition-all
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-100 hover:bg-blue-600"
                }
              `}
            >
              <Icon size={14} />

              <span>{menu.name}</span>
            </Link>
          );
        })}

      </nav>

      {/* Logout */}
      <div className="p-1 border-t border-blue-600">

       <button
  onClick={handleLogout}
  className="
    flex items-center gap-3
    w-full px-3 py-2
    rounded-lg text-sm
    text-blue-100
    hover:bg-blue-600
    transition-all cursor-pointer
  "
>
  <LogOut size={16} />
  Logout
</button>

      </div>

    </aside>
  );
}