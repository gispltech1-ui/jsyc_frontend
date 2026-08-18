"use client"
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {

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

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          My Profile
        </h1>

       <p className="text-sm text-slate-500 mt-1">
  Welcome back, {student?.fullName}!
</p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl  p-4">

        <h2 className="text-base font-semibold mb-5">
          Personal Information
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-xs text-slate-500">
              Full Name
            </p>
            <p className="text-base font-medium mt-1">
  {student?.fullName}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Email
            </p>
           <p className="text-base font-medium mt-1">
  {student?.user?.email || "-"}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Mobile
            </p>
           <p className="text-base font-medium mt-1">
  +91 {student?.user?.mobileNumber}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Date of Birth
            </p>
            <p className="text-base font-medium mt-1">
  {student?.dob
    ? new Date(student.dob).toLocaleDateString("en-GB")
    : "-"}
</p>
          </div>

          <div className="col-span-2">
            <p className="text-xs text-slate-500">
              Address
            </p>
            <p className="text-base font-medium mt-1">
  {student?.address}, {student?.district}, {student?.state}
</p>
          </div>

        </div>

      </div>

      {/* Academic Information */}
      <div className="bg-white rounded-xl  p-4">

        <h2 className="text-base font-semibold mb-5">
          Academic Information
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-xs text-slate-500">
              Qualification
            </p>
            <p className="text-base font-medium mt-1">
  {student?.highestQualification}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              School / College
            </p>
           <p className="text-base font-medium mt-1">
  {student?.schoolCollege}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Passing Year
            </p>
            <p className="text-base font-medium mt-1">
  {student?.passingYear}
</p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Category
            </p>
           <p className="text-base font-medium mt-1">
  {student?.category}
</p>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-xl p-4">

  <h2 className="text-base font-semibold mb-5">
    Enrollment Information
  </h2>

  <div className="grid grid-cols-2 gap-5">

    <div>
      <p className="text-xs text-slate-500">
        Course
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.course?.name}
      </p>
    </div>

    <div>
      <p className="text-xs text-slate-500">
        Subject
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.subject?.name}
      </p>
    </div>

    <div>
      <p className="text-xs text-slate-500">
        Center
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.center?.name}
      </p>
    </div>

    <div>
      <p className="text-xs text-slate-500">
        Batch
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.batch}
      </p>
    </div>

    <div>
      <p className="text-xs text-slate-500">
        Learning Mode
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.learningMode}
      </p>
    </div>

    <div>
      <p className="text-xs text-slate-500">
        Preferred Timing
      </p>
      <p className="text-base font-medium mt-1">
        {student?.enrollment?.preferredTiming}
      </p>
    </div>

  </div>

</div>

    </div>
  );
}