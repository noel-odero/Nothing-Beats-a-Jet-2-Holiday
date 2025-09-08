import React from "react";
import { Trophy } from "lucide-react";

export const StatsSidebar = () => {
  return (
    <div className="w-80 p-6 bg-gray-800">
      {/* Top Stats */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-6 bg-red-500 rounded"></div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs">0</span>
            </div>
            <span className="text-xs text-gray-400">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              500
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              ♥
            </div>
            <span className="text-red-400 text-xs">5</span>
          </div>
        </div>
      </div>

      {/* Unlock Leaderboards */}
      <div className="bg-gray-700 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg mb-3">Unlock Leaderboards!</h3>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Trophy size={20} className="text-gray-400" />
          </div>
          <p className="text-gray-300 text-sm">
            Complete 10 more lessons to start competing
          </p>
        </div>
      </div>

      {/* Profile Creation */}
      <div className="bg-gray-700 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">
          Create a profile to save your progress!
        </h3>
        <div className="space-y-3">
          <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            CREATE A PROFILE
          </button>
          <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            SIGN IN
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-xs text-gray-500 space-y-2">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-gray-300">
            ABOUT
          </a>
          <a href="#" className="hover:text-gray-300">
            BLOG
          </a>
          <a href="#" className="hover:text-gray-300">
            STORE
          </a>
        </div>
      </div>
    </div>
  );
};
