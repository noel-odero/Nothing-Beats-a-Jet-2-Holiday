import React from "react";
import { ArrowLeft, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <div className="mb-8">
      <div className="bg-green-500 rounded-lg p-4 max-w-md">
        <div className="flex items-center text-green-900 mb-2">
          <ArrowLeft size={16} className="mr-2" />
          <span className="text-sm font-medium">SECTION 1, UNIT 1</span>
        </div>
        <h2 className="text-white text-xl font-bold">Order in a cafe</h2>
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-2">
            <BookOpen size={20} className="text-white" />
            <span className="ml-1 text-white font-medium">GUIDEBOOK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
