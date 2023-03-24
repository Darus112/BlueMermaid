import React from "react";
import DBLeftSection from "../components/dashboard/DBLeftSection";
import DBRightSection from "../components/dashboard/DBRightSection";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen flex items-center">
      <DBLeftSection />
      <DBRightSection />
    </div>
  );
}
