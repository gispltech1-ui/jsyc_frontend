"use client";

import { useEffect, useState } from "react";

export default function Topbar() {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "student",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const pageTitle =
    user.role === "teacher"
      ? "Teacher Panel"
      : user.role === "admin"
      ? "Admin Dashboard"
      : "Student Dashboard";

  const initials = user.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-5 flex items-center justify-between">

      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          {pageTitle}
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back, {user.name}
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="text-right">
          <p className="text-sm font-medium text-slate-900">
            {user.name}
          </p>

          <p className="text-xs text-slate-500 capitalize">
            {user.role}
          </p>
        </div>

        <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-semibold">
          {initials}
        </div>

      </div>

    </header>
  );
}