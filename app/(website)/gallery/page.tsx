"use client"
import CTASection from "@/components/CTASection";
import DepartmentStructure from "@/components/Department";
import NoticeBar from "@/components/StatsSection";
import { Calendar, Check, Clock, Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaGallery from "@/components/Media";


import Image from "next/image";

const circulars = [
  {
    id: 1,
    notificationNo: "59 Dt. 09.05.2017",
    date: "",
    description: "District Level Sports Operational Committee",
  },
  {
    id: 2,
    notificationNo: "553 Dt.-17.05.2002",
    date: "",
    description: "Sportsperson Welfare Fund",
  },
  {
    id: 3,
    notificationNo: "56",
    date: "07/11/2014",
    description: "Direct Recruitment Related Notification",
  },
  {
    id: 4,
    notificationNo: "178",
    date: "06/18/2015",
    description: "Direct Recruitment Related Notification",
  },
  {
    id: 5,
    notificationNo: "479",
    date: "03/31/2002",
    description:
      "Notification Regarding Grant to State Sports Association",
  },
  {
    id: 6,
    notificationNo: "622",
    date: "03/07/2002",
    description:
      "Notification Regarding Grant to State Sports Association",
  },
  {
    id: 7,
    notificationNo: "",
    date: "06/10/2021",
    description: "Important Notice Regarding Scholarship",
  },
  {
    id: 8,
    notificationNo: "02",
    date: "01/21/2022",
    description:
      "Notification Regarding Committee for Sanctioning Grant to Sports Associations",
  },
];


























const news = [
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
  {
    category: "Admission",
    title: "New Enrollment Session Opens for 2026-27",
    date: "2026-05-25",
    time: "10:00 AM",
    description:
      "We are excited to announce that enrollments for the 2026-27 academic session are now open. Students can apply online through our digital platform.",
  },
];

const categories = [
  "All News",
  "Admission",
  "Technology",
  "Training",
  "Expansion",
  "Events",
  "Partnership",
];

export default function AboutPage() {
  return (
    <main className="bg-[#E8DFC7]">
      
      <MediaGallery />

      <CTASection />

    </main>
  );
}