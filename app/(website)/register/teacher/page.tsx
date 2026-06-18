"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Save, Upload, FileText, ImageIcon, CreditCard, Wallet, Landmark, BadgeIndianRupee, GraduationCap } from "lucide-react";

const steps = [
  "Mobile Verification",
  "Personal Details",
  "Professional Info",
  "Preferred Centers",
  "Document Upload",
  "Payment",
  "Confirmation"
];

const inputCls = "w-full h-12 border border-slate-300 rounded-md px-4 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none bg-white text-slate-700 placeholder:text-slate-400";
const selectCls = "w-full h-12 border border-slate-300 rounded-md px-4 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-700";
const labelCls = "block text-sm font-semibold text-slate-700 mb-2";

function Field({ label, children, span2 = false }: { label: string; children: React.ReactNode; span2?: boolean }) {
  return (
    <div className={span2 ? "col-span-2" : ""}>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function ReviewBlock({ title, color, rows }: { title: string; color: string; rows: [string, string][] }) {
  const head: Record<string, string> = {
    blue: "bg-blue-50 text-blue-800 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-800 border-indigo-100",
    green: "bg-emerald-50 text-emerald-800 border-emerald-100",
    orange: "bg-orange-50 text-orange-800 border-orange-100",
  };
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className={`px-4 py-2.5 text-sm font-semibold border-b ${head[color]}`}>{title}</div>
      <div className="grid grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="px-4 py-3 border-b border-slate-100 last:border-0">
            <p className="text-xs text-slate-400 mb-0.5">{k}</p>
            <p className="text-sm font-semibold text-slate-700 truncate">{v || "—"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StudentRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({
  mobile: "",
  otp: "",

  fullName: "",
  dob: "",
  gender: "",
  email: "",
  address: "",

  highestQualification: "",
  teachingExperience: "",
  expertiseSubjects: "",
  skills: "",
  certifications: "",

  preferredCenter1: "",
  preferredCenter2: "",
  subjectsCanTeach: "",

  photo: null as File | null,
  resume: null as File | null,
  educationalCertificates: null as File | null,
  idProof: null as File | null,

  paymentMethod: "",
  registrationFee: 1000,
});

  const update = (key: string, value: unknown) => setFormData(prev => ({ ...prev, [key]: value }));
  const enrollmentId = "JSYC" + Date.now();
  const progress = Math.round((currentStep / steps.length) * 100);

  const submitRegistration = async () => {
    try {
      const payload = new FormData();
      payload.append("studentData", JSON.stringify({ ...formData, enrollmentId }));
      if (formData.photo) payload.append("photo", formData.photo);
  
      const res = await fetch("/api/student/register", { method: "POST", body: payload });
      const data = await res.json();
      if (data.success) localStorage.removeItem("student-registration");
    } catch (err) { console.error(err); }
  };

  useEffect(() => { if (currentStep === 8) submitRegistration(); }, [currentStep]);

  useEffect(() => {
    const saved = localStorage.getItem("student-registration");
    if (saved) {
      try {
        const draft = JSON.parse(saved);
        setCurrentStep(draft.currentStep || 1);
        setFormData(prev => ({ ...prev, ...(draft.formData || {}) }));
      } catch {}
    }
  }, []);

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.mobile.trim()) return alert("Enter mobile number");
      if (!formData.otp.trim()) return alert("Enter OTP");
    }
    setCurrentStep(p => Math.min(p + 1, steps.length));
  };
  const prevStep = () => setCurrentStep(p => Math.max(p - 1, 1));
  const saveDraft = () => { localStorage.setItem("student-registration", JSON.stringify({ currentStep, formData })); alert("Draft saved"); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">

       <div className="max-w-5xl mx-auto px-6 pt-8 pb-2">
        <h1 className="text-2xl font-bold text-slate-900">Teacher Enrollment</h1>
        <p className="text-slate-500 mt-1">Join our teaching community</p>
      </div>

    

      {/* Progress */}
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-700">Step {currentStep} of {steps.length}</span>
          <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">{progress}% Complete</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-gradient-to-r from-blue-700 to-teal-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="hidden md:flex justify-between">
          {steps.map((step, i) => {
            const n = i + 1, done = n < currentStep, active = n === currentStep;
            return (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all
                  ${done ? "bg-teal-600 border-teal-600 text-white" : active ? "bg-blue-700 border-blue-700 text-white" : "bg-white border-slate-300 text-slate-400"}`}>
                  {done ? <CheckCircle size={16} /> : n}
                </div>
                <span className={`text-xs text-center max-w-[72px] leading-tight font-medium
                  ${active ? "text-blue-700" : done ? "text-teal-700" : "text-slate-400"}`}>{step}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="p-8">

            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Mobile Verification</h2>
                <div className=" grid gap-5">
                  <Field label="Mobile Number">
                    <input type="tel" className={inputCls} placeholder="+91 XXXXXXXXXX"
                      value={formData.mobile} onChange={e => update("mobile", e.target.value)} />
                  </Field>
                  <div>
                    <button className="h-12 px-8 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-md transition">
                      Send OTP
                    </button>
                  </div>
                  <Field label="Enter OTP">
                    <input type="text" className={inputCls} placeholder="Enter 6-digit OTP"
                      value={formData.otp} onChange={e => update("otp", e.target.value)} />
                  </Field>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
  <div>
    <h2 className="text-xl font-bold text-slate-900 mb-6">
      Personal Details
    </h2>

    <div className="grid grid-cols-2 gap-5">

      <Field label="Full Name">
        <input
          type="text"
          className={inputCls}
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) =>
            update("fullName", e.target.value)
          }
        />
      </Field>

      <Field label="Date of Birth">
        <input
          type="date"
          className={inputCls}
          value={formData.dob}
          onChange={(e) =>
            update("dob", e.target.value)
          }
        />
      </Field>

      <Field label="Gender">
        <select
          className={selectCls}
          value={formData.gender}
          onChange={(e) =>
            update("gender", e.target.value)
          }
        >
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </Field>

      <Field label="Email">
        <input
          type="email"
          className={inputCls}
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) =>
            update("email", e.target.value)
          }
        />
      </Field>

      <Field label="Address" span2>
        <textarea
          rows={3}
          className={`${inputCls} h-auto py-3`}
          placeholder="Complete address"
          value={formData.address}
          onChange={(e) =>
            update("address", e.target.value)
          }
        />
      </Field>

    </div>
  </div>
)}

            {/* Step 3 */}
            {currentStep === 3 && (
  <div>
    <h2 className="text-xl font-bold text-slate-900 mb-6">
      Professional Info
    </h2>

    <div className="grid grid-cols-2 gap-5">

      <Field label="Highest Qualification">
        <select
          className={selectCls}
          value={formData.highestQualification}
          onChange={(e) =>
            update("highestQualification", e.target.value)
          }
        >
          <option>Select qualification</option>
          <option>B.Ed</option>
          <option>M.Ed</option>
          <option>Graduation</option>
          <option>Post Graduation</option>
          <option>PhD</option>
        </select>
      </Field>

      <Field label="Teaching Experience (years)">
        <input
          className={inputCls}
          placeholder="Years of experience"
          value={formData.teachingExperience}
          onChange={(e) =>
            update("teachingExperience", e.target.value)
          }
        />
      </Field>

      <Field label="Expertise Subjects" span2>
        <input
          className={inputCls}
          placeholder="e.g. Mathematics, Physics, Computer Science"
          value={formData.expertiseSubjects}
          onChange={(e) =>
            update("expertiseSubjects", e.target.value)
          }
        />
      </Field>

      <Field label="Skills" span2>
        <textarea
          rows={3}
          className={`${inputCls} h-auto py-3`}
          placeholder="Describe your teaching skills and methodologies"
          value={formData.skills}
          onChange={(e) =>
            update("skills", e.target.value)
          }
        />
      </Field>

      <Field label="Certifications" span2>
        <textarea
          rows={3}
          className={`${inputCls} h-auto py-3`}
          placeholder="List your professional certifications"
          value={formData.certifications}
          onChange={(e) =>
            update("certifications", e.target.value)
          }
        />
      </Field>

    </div>
  </div>
)}

            {/* Step 4 */}
           {currentStep === 4 && (
  <div>
    <h2 className="text-xl font-bold text-slate-900 mb-6">
      Preferred Centers
    </h2>

    <div className="grid grid-cols-2 gap-5">

      <Field label="Preferred Center 1">
        <select
          className={selectCls}
          value={formData.preferredCenter1}
          onChange={(e) =>
            update("preferredCenter1", e.target.value)
          }
        >
          <option value="">Select center</option>
          <option>Ranchi</option>
          <option>Dhanbad</option>
          <option>Bokaro</option>
          <option>Jamshedpur</option>
        </select>
      </Field>

      <Field label="Preferred Center 2">
        <select
          className={selectCls}
          value={formData.preferredCenter2}
          onChange={(e) =>
            update("preferredCenter2", e.target.value)
          }
        >
          <option value="">Select center</option>
          <option>Ranchi</option>
          <option>Dhanbad</option>
          <option>Bokaro</option>
          <option>Jamshedpur</option>
        </select>
      </Field>

      <Field label="Subjects You Can Teach" span2>
        <input
          type="text"
          className={inputCls}
          placeholder="Select subjects you're qualified to teach"
          value={formData.subjectsCanTeach}
          onChange={(e) =>
            update("subjectsCanTeach", e.target.value)
          }
        />
      </Field>

    </div>
  </div>
)}

            {/* Step 5 */}
           {currentStep === 5 && (
  <div>
    <h2 className="text-xl font-bold text-slate-900 mb-6">
      Document Upload
    </h2>

    <div className="grid gap-4">

      {[
        {
          label: "Photo",
          key: "photo",
          hint: "Click to upload or drag and drop",
        },
        {
          label: "Resume/CV",
          key: "resume",
          hint: "Click to upload or drag and drop",
        },
        {
          label: "Educational Certificates",
          key: "educationalCertificates",
          hint: "Click to upload or drag and drop",
        },
        {
          label: "ID Proof",
          key: "idProof",
          hint: "Click to upload or drag and drop",
        },
      ].map((item) => (
        <label
          key={item.key}
          className="flex items-center justify-between border-2 border-dashed border-slate-200 rounded-xl p-5 cursor-pointer hover:border-blue-400"
        >
          <input
            type="file"
            className="hidden"
            onChange={(e) =>
              update(
                item.key,
                e.target.files?.[0] ?? null
              )
            }
          />

          <div>
            <p className="text-lg font-semibold text-slate-800">
              {item.label}
            </p>

            <p className="text-sm text-slate-500">
              {item.hint}
            </p>
          </div>

          <Upload
            size={22}
            className="text-slate-400"
          />
        </label>
      ))}
    </div>
  </div>
)}

          
            {/* Step 7 */}
            {currentStep === 6 && (
             <div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mb-6">

  <h3 className="text-3xl font-bold text-teal-600">
    ₹1,000
  </h3>

  <p className="text-slate-500 mt-2">
    One-time registration fee for teacher enrollment
  </p>

</div>

<button
  className="w-full h-12 bg-teal-600 text-white font-semibold rounded-md"
>
  Proceed to Payment
</button>
                </div>
            )}

            {/* Step 8 */}
            {currentStep === 7 && (
              <div className="text-center py-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={36} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Enrollment Successful!</h2>
                <p className="text-slate-500 mb-7">Your enrollment has been completed successfully.</p>
                <div className="max-w-md mx-auto bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden mb-7">
                  {[["Enrollment ID",enrollmentId],].map(([k,v]) => (
                    <div key={k} className="flex justify-between items-center px-5 py-3.5 border-b border-blue-100 last:border-0">
                      <span className="text-sm text-slate-500">{k}</span>
                      <span className="text-sm font-bold font-mono">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <button className="px-6 py-2.5 text-sm font-semibold border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition">Download Receipt</button>
                  <button onClick={() => window.location.href = "/dashboard"} className="px-6 py-2.5 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition">Go To Dashboard</button>
                </div>
              </div>
            )}

          </div>

          {currentStep < 8 && (
            <div className="flex justify-between items-center px-8 py-5 border-t border-slate-100">
              <button onClick={prevStep} disabled={currentStep === 1}
                className="px-7 py-2.5 text-sm font-semibold border border-slate-300 rounded-md text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition">
                Previous
              </button>
              <button onClick={nextStep}
                className="px-8 py-2.5 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-md transition">
                {currentStep === 7 ? "Pay & Confirm" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}