"use client";

import { useEffect, useState } from "react";

export default function TeachingSubjects() {
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

  const subjects =
    teacher.subjectsCanTeach
      ?.split(",")
      .map((s: string) => s.trim())
      .filter(Boolean) || [];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-8">
        Teaching Subjects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Primary Subject
          </p>

          <h3 className="text-[15px] font-medium text-slate-900">
            {subjects[0] || "-"}
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Secondary Subject
          </p>

          <h3 className="text-[15px] font-medium text-slate-900">
            {subjects[1] || "-"}
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            All Subjects
          </p>

          <h3 className="text-[15px] font-medium text-slate-900">
            {teacher.subjectsCanTeach || "-"}
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
            Total Subjects
          </p>

          <h3 className="text-[15px] font-medium text-slate-900">
            {subjects.length}
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Teaching Experience
          </p>

          <h3 className="text-[15px] font-medium text-slate-900">
            {teacher.teachingExperience
              ? `${teacher.teachingExperience} Years`
              : "-"}
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

      </div>
    </div>
  );
}