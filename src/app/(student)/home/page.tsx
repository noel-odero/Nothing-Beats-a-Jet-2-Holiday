import React from "react";
import {
  Home,
  Trophy,
  ShoppingBag,
  User,
  MoreHorizontal,
  Star,
  Play,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

const DuolingoPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar */}
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

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Content */}
        <div className="flex-1 p-8">
          {/* Header */}
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

          {/* Lesson Path */}
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            {/* Start Button */}
            <div className="text-center">
              <div className="text-green-400 font-bold mb-2">START</div>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors">
                <Star size={32} className="text-white fill-white" />
              </div>
            </div>

            {/* Lesson Nodes */}
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <Star size={24} className="text-gray-400" />
            </div>

            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-6 bg-gray-500 rounded"></div>
            </div>

            {/* Duo Character */}
            <div className="relative">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🦉</div>
                </div>
              </div>
            </div>

            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <Star size={24} className="text-gray-400" />
            </div>

            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-6 bg-gray-500 rounded"></div>
            </div>

            {/* Family Description Section */}
            <div className="mt-16 text-center">
              <div className="text-gray-400 text-lg mb-4">
                Describe your family
              </div>

              <div className="mb-4">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-block">
                  JUMP HERE?
                </div>
              </div>

              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-400 transition-colors">
                <Play size={24} className="text-white fill-white ml-1" />
              </div>
            </div>

            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <Star size={24} className="text-gray-400" />
            </div>

            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-6 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
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
              <a href="#" className="hover:text-gray-300">
                EFFICACY
              </a>
              <a href="#" className="hover:text-gray-300">
                CAREERS
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-300">
                INVESTORS
              </a>
              <a href="#" className="hover:text-gray-300">
                TERMS
              </a>
              <a href="#" className="hover:text-gray-300">
                PRIVACY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuolingoPage;
