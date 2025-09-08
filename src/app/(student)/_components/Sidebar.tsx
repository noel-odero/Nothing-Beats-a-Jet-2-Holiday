import React from "react";
import { Home, Trophy, ShoppingBag, User, MoreHorizontal } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-800 p-4">
      <div className="mb-8">
        <h1 className="text-green-400 text-2xl font-bold">duolingo</h1>
      </div>

      <nav className="space-y-2">
        <div className="flex items-center space-x-3 bg-gray-700 rounded-lg p-3 text-orange-400">
          <Home size={20} />
          <span className="font-medium">LEARN</span>
        </div>

        <div className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
          <Trophy size={20} className="text-yellow-400" />
          <span className="font-medium">LEADERBOARDS</span>
        </div>

        <div className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
          <ShoppingBag size={20} className="text-red-400" />
          <span className="font-medium">SHOP</span>
        </div>

        <div className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
          <User size={20} className="text-blue-400" />
          <span className="font-medium">PROFILE</span>
        </div>

        <div className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-700 cursor-pointer">
          <MoreHorizontal size={20} className="text-purple-400" />
          <span className="font-medium">MORE</span>
        </div>
      </nav>
    </div>
  );
};
