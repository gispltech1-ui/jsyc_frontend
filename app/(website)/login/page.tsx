"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Users, Shield } from "lucide-react";
import Link from "next/link";
import { loginUser } from "@/services/auth.service";

export default function LoginPage() {
  const [role, setRole] = useState<
    "STUDENT" | "TEACHER" | "ADMIN"
  >("STUDENT");

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const data = await loginUser({
      identifier: email,
      password,
      role,
    });

    localStorage.setItem("token", data.token);
localStorage.setItem("role", data.user.role);
localStorage.setItem("user", JSON.stringify(data.user));

document.cookie = `token=${data.token}; path=/; max-age=604800; SameSite=Lax`;

window.location.href =
  data.user.role === "ADMIN"
    ? "/admin/dashboard"
    : data.user.role === "TEACHER"
    ? "/teacher/panel"
    : "/student/dashboard";

//     console.log("data", data)
// localStorage.setItem("token", data.token);
// localStorage.setItem("role", data.user.role);
// localStorage.setItem("user", JSON.stringify(data.user));

// document.cookie = `token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
// document.cookie = `role=${data.user.role}; path=/; max-age=604800; SameSite=Lax`;


// console.log("data.user.role", data.user.role)
// // Redirect
// if (data.user.role === "STUDENT") {
//   router.replace("/student/dashboard");
// } else if (data.user.role === "TEACHER") {
//   router.replace("/teacher/panel");
// } else if (data.user.role === "ADMIN") {
//   router.replace("/admin/dashboard");
// }
  } catch (error: any) {
    alert(error.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

// const handleLogin = (e: React.FormEvent) => {
//   e.preventDefault();

//   // Student
//   if (
//     role === "student" &&
//     email === "student@jsyc.com" &&
//     password === "student123"
//   ) {
//     localStorage.setItem(
//       "token",
//       "student_dummy_token"
//     );

//     localStorage.setItem("role", "student");

//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id: 1,
//         name: "John Doe",
//         email: "student@jsyc.com",
//         role: "student",
//       })
//     );

//     router.push("/student/dashboard");
//     return;
//   }

//   // Teacher
//   if (
//     role === "teacher" &&
//     email === "teacher@jsyc.com" &&
//     password === "teacher123"
//   ) {
//     localStorage.setItem(
//       "token",
//       "teacher_dummy_token"
//     );

//     localStorage.setItem("role", "teacher");

//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id: 2,
//         name: "Rahul Sharma",
//         email: "teacher@jsyc.com",
//         role: "teacher",
//       })
//     );

//     router.push("/teacher/panel");
//     return;
//   }

//   // Admin
//   if (
//     role === "admin" &&
//     email === "admin@jsyc.com" &&
//     password === "admin123"
//   ) {
//     localStorage.setItem(
//       "token",
//       "admin_dummy_token"
//     );

//     localStorage.setItem("role", "admin");

//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         id: 3,
//         name: "Admin User",
//         email: "admin@jsyc.com",
//         role: "admin",
//       })
//     );

//     router.push("/admin/dashboard");
//     return;
//   }

//   alert("Invalid credentials");
// };

  return (
    <div className="min-h-screen bg-[#edf6f8] flex items-center justify-center">
      <div className="w-full max-w-[450px]">

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-md text-slate-500">
            Login to access your dashboard
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

          {/* Role Selector */}
          <div className="bg-slate-100 rounded-2xl p-1 flex mb-8">

            <button
              type="button"
              onClick={() => setRole("STUDENT")}
              className={`flex-1 flex cursor-pointer items-center justify-center gap-2 h-11 rounded-xl transition-all text-sm font-medium ${
                role === "STUDENT"
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-600"
              }`}
            >
              <GraduationCap size={18} />
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("TEACHER")}
              className={`flex-1 flex cursor-pointer items-center justify-center gap-2 h-11 rounded-xl transition-all text-sm font-medium ${
                role === "TEACHER"
                  ? "bg-white shadow-sm text-slate-900 "
                  : "text-slate-600"
              }`}
            >
              <Users size={18} />
              Teacher
            </button>

            <button
              type="button"
              onClick={() => setRole("ADMIN")}
              className={`flex-1 flex items-center cursor-pointer justify-center gap-2 h-11 rounded-xl transition-all text-sm font-medium ${
                role === "ADMIN"
                  ? "bg-white shadow-sm text-slate-900"
                  : "text-slate-600"
              }`}
            >
              <Shield size={18} />
              Admin
            </button>

          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Email or Mobile Number
              </label>

              <input
                type="text"
                value={email}
                  onChange={(e) => setEmail(e.target.value)}

                placeholder="Enter your email or mobile"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">

                <label className="text-sm font-semibold text-slate-900">
                  Password
                </label>

                {/* <button
                  type="button"
                  className="text-sm text-blue-700 hover:underline"
                >
                  Forgot password?
                </button> */}

              </div>

              <input
                type="password"
                value={password}
                  onChange={(e) => setPassword(e.target.value)}

                placeholder="Enter your password"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer h-12 rounded-xl bg-[#005F2F] text-white font-semibold transition-all"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <div className="text-center mt-8">
            <span className="text-slate-500 text-sm">
              Don't have an account?
            </span>

            <Link
              href="/register"
              className="ml-1 text-sm font-semibold text-[#005F2F] hover:underline"
            >
              Register Now
            </Link>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-8">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>

      </div>
    </div>
  );
}