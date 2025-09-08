import React from "react";
import { Star, Play } from "lucide-react";

export const LessonPath = () => {
  return (
    <div className="relative max-w-[280px] mx-auto">
      <div className="flex flex-col items-center">
        {/* Start Node */}
        <div className="mb-6 text-center">
          <div className="text-[#58CC02] font-bold mb-2">START</div>
          <div className="w-[72px] h-[72px] bg-[#58CC02] rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-colors">
            <Star className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Locked Node 1 - Left */}
        <div className="mb-6 -ml-20">
          <div className="w-[72px] h-[72px] bg-[#1f1f1f] border-4 border-[#2c2c2c] rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-[#3c3c3c]" />
          </div>
        </div>

        {/* Locked Node 2 - Right */}
        <div className="mb-6 ml-20">
          <div className="w-[72px] h-[72px] bg-[#1f1f1f] border-4 border-[#2c2c2c] rounded-full flex items-center justify-center">
            <div className="w-10 h-8 bg-[#3c3c3c] rounded"></div>
          </div>
        </div>

        {/* Duo Character - Center */}
        <div className="mb-6">
          <div className="w-[84px] h-[84px] bg-[#58CC02] rounded-full flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#42a302] rounded-full flex items-center justify-center">
              <div className="text-4xl transform -rotate-12">🦉</div>
            </div>
          </div>
        </div>

        {/* Locked Node 3 - Left */}
        <div className="mb-6 -ml-20">
          <div className="w-[72px] h-[72px] bg-[#1f1f1f] border-4 border-[#2c2c2c] rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-[#3c3c3c]" />
          </div>
        </div>

        {/* Locked Node 4 - Right */}
        <div className="mb-12 ml-20">
          <div className="w-[72px] h-[72px] bg-[#1f1f1f] border-4 border-[#2c2c2c] rounded-full flex items-center justify-center">
            <div className="w-10 h-8 bg-[#3c3c3c] rounded"></div>
          </div>
        </div>

        {/* Describe your family section */}
        <div className="text-center border-t border-[#2c2c2c] pt-8 mt-8">
          <div className="text-[#777] text-lg mb-4">Describe your family</div>
          <button className="bg-[#8033C6] text-white px-6 py-2 rounded-xl font-bold mb-4 hover:bg-opacity-90">
            JUMP HERE?
          </button>
          <div className="w-[72px] h-[72px] mx-auto bg-[#8033C6] rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-colors">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
