export default function TeachingSubjects() {
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
            Programming
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Secondary Subject
          </p>
          <h3 className="text-[15px] font-medium text-slate-900">
            Web Development
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Department
          </p>
          <h3 className="text-[15px] font-medium text-slate-900">
            Computer Science
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Classes Assigned
          </p>
          <h3 className="text-[15px] font-medium text-slate-900">
            BCA, MCA, B.Tech CSE
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Total Subjects
          </p>
          <h3 className="text-[15px] font-medium text-slate-900">
            4
          </h3>
        </div>

        <div>
          <p className="text-[13px] text-slate-500 mb-1">
            Teaching Since
          </p>
          <h3 className="text-[15px] font-medium text-slate-900">
            2010
          </h3>
        </div>
      </div>
    </div>
  );
}