"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Save, Upload, FileText, ImageIcon, CreditCard, Wallet, Landmark, BadgeIndianRupee, GraduationCap } from "lucide-react";

const steps = [
  "Mobile Verification","Personal Details","Academic Details",
  "Enrollment Details","Document Upload","Review Details","Payment","Confirmation"
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
    mobile: "", otp: "",
    firstName: "", fatherName: "", motherName: "",
    gender: "", dob: "", email: "", address: "", district: "",
    academicQualification: "", schoolCollegeName: "", passingYear: "", category: "", experience: "",
    courseId: "", subjectId: "", centerId: "", batchId: "", learningMode: "", preferredTiming: "",
    photo: null as File | null, signature: null as File | null,
    aadhaar: null as File | null, certificate: null as File | null,
    declarationAccepted: false,
    paymentMethod: "", transactionId: "", amount: 5500,
  });

  const update = (key: string, value: unknown) => setFormData(prev => ({ ...prev, [key]: value }));
  const enrollmentId = "JSYC" + Date.now();
  const progress = Math.round((currentStep / steps.length) * 100);

  const submitRegistration = async () => {
    try {
      const payload = new FormData();
      payload.append("studentData", JSON.stringify({ ...formData, enrollmentId }));
      if (formData.photo) payload.append("photo", formData.photo);
      if (formData.signature) payload.append("signature", formData.signature);
      if (formData.aadhaar) payload.append("aadhaar", formData.aadhaar);
      if (formData.certificate) payload.append("certificate", formData.certificate);
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
    if (currentStep === 6 && !formData.declarationAccepted) return alert("Please accept the declaration");
    setCurrentStep(p => Math.min(p + 1, steps.length));
  };
  const prevStep = () => setCurrentStep(p => Math.max(p - 1, 1));
  const saveDraft = () => { localStorage.setItem("student-registration", JSON.stringify({ currentStep, formData })); alert("Draft saved"); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50">

     

      {/* Page title */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-2">
        <h1 className="text-2xl font-bold text-slate-900">Student Enrollment</h1>
        <p className="text-slate-500 mt-1">Complete the steps below to enroll</p>
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
                <h2 className="text-xl font-bold text-slate-900 mb-6">Personal Details</h2>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Full Name *"><input type="text" className={inputCls} placeholder="Enter full name" value={formData.firstName} onChange={e => update("firstName", e.target.value)} /></Field>
                  <Field label="Father's Name *"><input type="text" className={inputCls} placeholder="Father's name" value={formData.fatherName} onChange={e => update("fatherName", e.target.value)} /></Field>
                  <Field label="Mother's Name *"><input type="text" className={inputCls} placeholder="Mother's name" value={formData.motherName} onChange={e => update("motherName", e.target.value)} /></Field>
                  <Field label="Date of Birth *"><input type="date" className={inputCls} value={formData.dob} onChange={e => update("dob", e.target.value)} /></Field>
                  <Field label="Gender *">
                    <select className={selectCls} value={formData.gender} onChange={e => update("gender", e.target.value)}>
                      <option value="">Select Gender</option>
                      {["Male","Female","Other"].map(g => <option key={g}>{g}</option>)}
                    </select>
                  </Field>
                  <Field label="Email *"><input type="email" className={inputCls} placeholder="your@email.com" value={formData.email} onChange={e => update("email", e.target.value)} /></Field>
                  <Field label="Address *" span2><textarea rows={3} className={`${inputCls} h-auto py-3`} placeholder="Complete address" value={formData.address} onChange={e => update("address", e.target.value)} /></Field>
                  <Field label="District *">
                    <select className={selectCls} value={formData.district} onChange={e => update("district", e.target.value)}>
                      <option value="">Select District</option>
                      {["Ranchi","Dhanbad","Bokaro","Jamshedpur","Giridih","Hazaribag","Deoghar","Dumka"].map(d => <option key={d}>{d}</option>)}
                    </select>
                  </Field>
                  <Field label="State"><input className={`${inputCls} bg-slate-50 text-slate-400 cursor-not-allowed`} value="Jharkhand" disabled /></Field>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Academic Details</h2>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Highest Qualification *">
                    <select className={selectCls} value={formData.academicQualification} onChange={e => update("academicQualification", e.target.value)}>
                      <option value="">Select Qualification</option>
                      {[["10th","10th Pass"],["12th","12th Pass"],["Diploma","Diploma"],["Graduation","Graduation"],["Post Graduation","Post Graduation"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="School / College Name *"><input type="text" className={inputCls} placeholder="Institution name" value={formData.schoolCollegeName} onChange={e => update("schoolCollegeName", e.target.value)} /></Field>
                  <Field label="Passing Year *"><input type="number" className={inputCls} placeholder="YYYY" value={formData.passingYear} onChange={e => update("passingYear", e.target.value)} /></Field>
                  <Field label="Category *">
                    <select className={selectCls} value={formData.category} onChange={e => update("category", e.target.value)}>
                      <option value="">Select Category</option>
                      {["General","OBC","SC","ST","EWS"].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Previous Experience (If Any)" span2><textarea rows={3} className={`${inputCls} h-auto py-3`} placeholder="Describe any relevant experience" value={formData.experience} onChange={e => update("experience", e.target.value)} /></Field>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Enrollment Details</h2>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Select Course *">
                    <select className={selectCls} value={formData.courseId} onChange={e => update("courseId", e.target.value)}>
                      <option value="">Choose Course</option>
                      {[["computer-science","Computer Science"],["mathematics","Mathematics"],["english","English Language"],["science","Science"],["soft-skills","Soft Skills"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="Select Subject *">
                    <select className={selectCls} value={formData.subjectId} onChange={e => update("subjectId", e.target.value)}>
                      <option value="">Choose Subject</option>
                      {[["programming","Programming"],["algebra","Algebra"],["physics","Physics"],["spoken-english","Spoken English"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="Select Center *">
                    <select className={selectCls} value={formData.centerId} onChange={e => update("centerId", e.target.value)}>
                      <option value="">Choose Center</option>
                      {[["ranchi","Ranchi Center"],["jamshedpur","Jamshedpur Center"],["dhanbad","Dhanbad Center"],["bokaro","Bokaro Center"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="Select Batch *">
                    <select className={selectCls} value={formData.batchId} onChange={e => update("batchId", e.target.value)}>
                      <option value="">Choose Batch</option>
                      {[["morning","Morning Batch"],["afternoon","Afternoon Batch"],["evening","Evening Batch"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="Learning Mode *">
                    <select className={selectCls} value={formData.learningMode} onChange={e => update("learningMode", e.target.value)}>
                      <option value="">Select Mode</option>
                      {[["offline","Offline"],["online","Online"],["hybrid","Hybrid"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred Timing *"><input type="text" className={inputCls} placeholder="e.g. 10 AM - 12 PM" value={formData.preferredTiming} onChange={e => update("preferredTiming", e.target.value)} /></Field>
                </div>
              </div>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Document Upload</h2>
                <div className="grid gap-4">
                  {([
                    { label: "Passport Photo", key: "photo", accept: "image/*", icon: <ImageIcon size={18} />, bg: "bg-blue-50 text-blue-600", hint: "JPG, PNG - Max 2 MB" },
                    { label: "Signature", key: "signature", accept: "image/*", icon: <ImageIcon size={18} />, bg: "bg-purple-50 text-purple-600", hint: "JPG, PNG - Max 1 MB" },
                    { label: "Aadhaar Card", key: "aadhaar", accept: ".pdf,image/*", icon: <FileText size={18} />, bg: "bg-orange-50 text-orange-500", hint: "PDF, JPG, PNG" },
                    { label: "Academic Certificate", key: "certificate", accept: ".pdf,image/*", icon: <FileText size={18} />, bg: "bg-green-50 text-green-600", hint: "PDF, JPG, PNG" },
                  ] as const).map(({ label, key, accept, icon, bg, hint }) => (
                    <label key={key} className="flex items-center justify-between border-2 border-dashed border-slate-200 rounded-xl p-5 cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition group">
                      <input type="file" accept={accept} className="hidden" onChange={e => update(key, e.target.files?.[0] ?? null)} />
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>{icon}</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{hint}</p>
                          {formData[key] && <p className="text-xs text-green-600 font-medium mt-1">checkmark {(formData[key] as File).name}</p>}
                        </div>
                      </div>
                      <Upload size={18} className="text-slate-300 group-hover:text-blue-500 transition" />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6 */}
            {currentStep === 6 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Review Details</h2>
                <div className="grid gap-4 mb-5">
                  <ReviewBlock title="Personal Information" color="blue" rows={[["Name",formData.firstName],["Email",formData.email],["Mobile",formData.mobile],["Date of Birth",formData.dob],["Gender",formData.gender],["District",formData.district]]} />
                  <ReviewBlock title="Academic Information" color="indigo" rows={[["Qualification",formData.academicQualification],["Institution",formData.schoolCollegeName],["Passing Year",formData.passingYear],["Category",formData.category]]} />
                  <ReviewBlock title="Enrollment Details" color="green" rows={[["Course",formData.courseId],["Subject",formData.subjectId],["Center",formData.centerId],["Batch",formData.batchId],["Mode",formData.learningMode]]} />
                  <ReviewBlock title="Uploaded Documents" color="orange" rows={[["Photo",formData.photo?.name ?? "Not uploaded"],["Signature",formData.signature?.name ?? "Not uploaded"],["Aadhaar",formData.aadhaar?.name ?? "Not uploaded"],["Certificate",formData.certificate?.name ?? "Not uploaded"]]} />
                </div>
                <label className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-blue-700 w-4 h-4" checked={formData.declarationAccepted} onChange={e => update("declarationAccepted", e.target.checked)} />
                  <span className="text-sm text-slate-700 leading-relaxed">I hereby declare that all the information provided is correct and I agree to the terms and conditions of JSYC Platform.</span>
                </label>
              </div>
            )}

            {/* Step 7 */}
            {currentStep === 7 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">Payment</h2>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-800 mb-4">Payment Summary</h3>
                  <div className="space-y-3 text-sm">
                    {[["Course Fee","5,000"],["Registration Fee","500"]].map(([l,v]) => (
                      <div key={l} className="flex justify-between text-slate-600"><span>{l}</span><span>Rs. {v}</span></div>
                    ))}
                    <hr className="border-blue-200" />
                    <div className="flex justify-between font-bold text-base text-slate-900">
                      <span>Total Amount</span><span className="text-blue-700">Rs. 5,500</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-slate-800 mb-3">Select Payment Method</h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[{label:"UPI",value:"upi",Icon:Wallet},{label:"Credit Card",value:"credit",Icon:CreditCard},{label:"Debit Card",value:"debit",Icon:CreditCard},{label:"Net Banking",value:"netbanking",Icon:Landmark}].map(({label,value,Icon}) => (
                    <button key={value} type="button" onClick={() => update("paymentMethod", value)}
                      className={`flex items-center gap-3 border-2 rounded-xl p-4 text-left transition ${formData.paymentMethod === value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-blue-300"}`}>
                      <Icon size={22} className={formData.paymentMethod === value ? "text-blue-700" : "text-slate-400"} />
                      <span className="text-sm font-semibold">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
                  <BadgeIndianRupee size={20} className="text-green-600 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Payment Status</p>
                    <p className="text-xs text-slate-400">Pending Payment</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8 */}
            {currentStep === 8 && (
              <div className="text-center py-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={36} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-700 mb-2">Enrollment Successful!</h2>
                <p className="text-slate-500 mb-7">Your enrollment has been completed successfully.</p>
                <div className="max-w-md mx-auto bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden mb-7">
                  {[["Enrollment ID",enrollmentId],["Transaction ID",formData.transactionId||""],["Course",formData.courseId],["Center",formData.centerId]].map(([k,v]) => (
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