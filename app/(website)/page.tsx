"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Courses from "@/components/Courses";
import StatsSection from "@/components/StatsSection";
import CentersSection from "@/components/CentersSection";
import ImportantDesk from "@/components/ImportantDesk";
import Administratives from "@/components/Administrative";
import HeroCentersSection from "@/components/HeroCenter";
import CTASection from "@/components/CTASection";
import GovernmentPartners from "@/components/Partner";
import PageLoader from "@/components/PageLoader";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 sec

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Hero />
      <StatsSection />
      <VisionMission />
      <CentersSection />
      <ImportantDesk />
      <Administratives />
      <Courses />
      <HeroCentersSection />
      <CTASection />
      <GovernmentPartners />
    </>
  );
}