import React from "react";
import { Sidebar } from "../_components/Sidebar";
import { Header } from "../_components/Header";
import { LessonPath } from "../_components/LessonPath";
import { StatsSidebar } from "../_components/StatsSidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Content */}
        <div className="flex-1 p-8">
          <Header />
          <LessonPath />
        </div>

        {/* Right Sidebar */}
        <StatsSidebar />
      </div>
    </div>
  );
}
