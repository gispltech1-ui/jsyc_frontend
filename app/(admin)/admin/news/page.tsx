"use client";

import { Clock3 } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
        
        <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
          <Clock3
            size={40}
            className="text-blue-700"
          />
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Coming Soon
        </h1>

        <p className="mt-4 text-slate-500 text-base leading-relaxed">
          We're currently working on this feature.
          It will be available soon with exciting
          functionality and improvements.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
          🚀 Under Development
        </div>

        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-medium transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}