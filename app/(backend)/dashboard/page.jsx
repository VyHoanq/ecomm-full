import Heading from "@/components/backend/layout/Heading";
import DashboardCharts from "@/components/data-display/DashboardCharts";
import LargeCards from "@/components/data-display/LargeCards";
import SmallCards from "@/components/data-display/SmallCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
    </div>
  );
}
