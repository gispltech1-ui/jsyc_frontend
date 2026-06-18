"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#007a2f] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-white text-4xl font-semibold mb-5">
          Ready to Start Your Journey?
        </h2>

        {/* Subtitle */}
        <p className="text-white/95 text-[18px] mb-10">
          Join thousands of students and teachers who are already part of the
          YSYC family
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/register"
            className="
              bg-[#ffd600]
              text-black
              font-medium
              text-lg
              px-10
              py-3
              rounded-md
              hover:bg-[#ffcc00]
              transition
            "
          >
            Enroll Now
          </Link>

          <Link
            href="/contact"
            className="
              border
              border-white
              text-white
              font-medium
              text-lg
              px-10
              py-3
              rounded-md
              hover:bg-white
              hover:text-[#007a2f]
              transition
            "
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}