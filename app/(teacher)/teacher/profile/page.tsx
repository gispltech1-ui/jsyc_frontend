export default function TeacherProfile() {
  return (
    <div className="bg-slate-50">
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-8">
          Teacher Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">
          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Name
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              Prof. Rajesh Sharma
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Email
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              prof.sharma@jsyc.gov.in
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Mobile
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              +91 9876543210
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Qualification
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              PhD in Computer Science
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Experience
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              15 Years
            </h3>
          </div>

          <div>
            <p className="text-[13px] text-slate-500 mb-1">
              Expertise
            </p>
            <h3 className="text-[15px] font-medium text-slate-900">
              Programming, Web Development
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}