"use client";

import { useEffect, useState } from "react";

export default function TeacherProfile() {
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
      <div className="flex items-center justify-center h-[70vh]">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-8">
          Teacher Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Full Name
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.fullName}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Email
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.user?.email || "-"}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Mobile
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.user?.mobileNumber}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Qualification
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.highestQualification}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Experience
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.teachingExperience || 0} Years
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Expertise Subjects
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.expertiseSubjects || "-"}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Gender
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.gender}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Date of Birth
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.dob
                ? new Date(teacher.dob).toLocaleDateString()
                : "-"}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-[13px] text-slate-500 mb-1">
              Address
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.address}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-[13px] text-slate-500 mb-1">
              Skills
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.skills || "-"}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-[13px] text-slate-500 mb-1">
              Certifications
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.certifications || "-"}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Preferred Center 1
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.preferredCenter1 || "-"}
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Preferred Center 2
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.preferredCenter2 || "-"}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-[13px] text-slate-500 mb-1">
              Subjects Can Teach
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              {teacher.subjectsCanTeach || "-"}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}