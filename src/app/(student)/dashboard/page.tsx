'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Flame,
  Star,
  ChevronRight,
  CheckCircle,
  Lock,
  Play,
  Share2,
  Eye,
  Menu,
  X,
  Award,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  mockStudent,
  mockPathway,
  mockCertificates,
  mockSoftSkills,
  mockJobs,
  mockLeaderboard,
} from '@/lib/mock';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const currentStudent = mockStudent;
  const currentPathway = mockPathway;
  const certificates = mockCertificates;
  const softSkills = mockSoftSkills;
  const jobs = mockJobs;
  const leaderboard = mockLeaderboard;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 z-40 bg-white/80 backdrop-blur-md">
        <div className="container-responsive flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700"
            >
              {sidebarOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
            <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Flame className="size-4 text-orange-500" />
              <span>{currentStudent.streak} day streak</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Star className="size-4 text-yellow-500" />
              <span>{currentStudent.xp} XP</span>
            </div>
            <div className="relative size-8 rounded-full overflow-hidden border border-slate-200">
              <Image
                src={currentStudent.avatar}
                alt={currentStudent.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <div className="relative size-16 rounded-full overflow-hidden border border-slate-200">
                <Image
                  src={currentStudent.avatar}
                  alt={currentStudent.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1 text-slate-900">
                  Welcome back, {currentStudent.name.split(' ')[0]}!
                </h2>
                <p className="text-slate-600">
                  You&apos;ve earned{' '}
                  <span className="text-yellow-600 font-semibold">
                    {currentStudent.weeklyXp} XP
                  </span>{' '}
                  this week
                </p>
              </div>
              <div className="flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2">
                <Flame className="size-5 text-orange-600" />
                <span className="font-semibold text-orange-800">
                  {currentStudent.streak} day streak
                </span>
              </div>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-6">
              <div className="relative size-20">
                <svg
                  className="size-20 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-slate-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-yellow-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${
                      (currentStudent.weeklyXp / 500) * 100
                    }, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-slate-700">
                    {Math.round((currentStudent.weeklyXp / 500) * 100)}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600">Weekly Goal</p>
                <p className="text-lg font-semibold text-slate-900">
                  {currentStudent.weeklyXp}/500 XP
                </p>
              </div>
            </div>
          </section>

          {/* Pathways Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Your Learning Path
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900"
              >
                View full roadmap <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>

            <Card className="bg-white border-slate-200 shadow-sm p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1 text-slate-900">
                  {currentStudent.careerPath}
                </h4>
                <p className="text-slate-600 text-sm">
                  Master the fundamentals of electrical work
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {currentPathway.map((node) => (
                  <div
                    key={node.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`relative size-16 rounded-full flex items-center justify-center text-2xl ${
                        node.status === 'completed'
                          ? 'bg-green-500'
                          : node.status === 'unlocked'
                          ? 'bg-blue-500'
                          : 'bg-gray-400'
                      }`}
                    >
                      {node.status === 'completed' ? (
                        <CheckCircle className="size-8 text-white" />
                      ) : node.status === 'locked' ? (
                        <Lock className="size-6 text-white" />
                      ) : (
                        <span>{node.icon}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-slate-800">
                        {node.title}
                      </p>
                      <p className="text-xs text-slate-500">{node.xp} XP</p>
                    </div>
                    {node.status === 'unlocked' && (
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Play className="size-3 mr-1" />
                        Start
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Certificates Section */}
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-6 text-slate-900">
              Your Certificates
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <Card
                  key={cert.id}
                  className="bg-white border-slate-200 shadow-sm p-4"
                >
                  <div className="flex gap-4">
                    <div className="relative size-16 rounded-lg overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-slate-900">
                        {cert.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-2">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                          <Award className="size-3" />
                          Verified on blockchain
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-slate-600 hover:text-slate-900"
                          onClick={() => setSelectedCertificate(cert.id)}
                        >
                          <Eye className="size-3 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-slate-600 hover:text-slate-900"
                        >
                          <Share2 className="size-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-8">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-slate-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Target className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-slate-900">
                    Next Steps
                  </h4>
                  <p className="text-slate-700 mb-3">
                    Complete &quot;Wiring Fundamentals&quot; to unlock the
                    Safety Certificate and advance to Advanced Circuits.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Continue Learning
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Jobs for You */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Jobs for You</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900"
              >
                See all jobs <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="bg-white border-slate-200 shadow-sm p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold mb-1 text-slate-900">
                        {job.title}
                      </h4>
                      <p className="text-slate-600 text-sm">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold text-sm">
                        {job.matchScore}% match
                      </div>
                      <div className="text-slate-600 text-xs">{job.salary}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {job.location}
                    </span>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Apply
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Leaderboard */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Leaderboard</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900"
              >
                View full leaderboard <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
            <Card className="bg-white border-slate-200 shadow-sm p-6">
              <div className="space-y-4">
                {leaderboard.map((entry) => (
                  <div key={entry.id} className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-8 rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                      {entry.rank}
                    </div>
                    <div className="relative size-10 rounded-full overflow-hidden">
                      <Image
                        src={entry.avatar}
                        alt={entry.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{entry.name}</p>
                      <p className="text-slate-600 text-sm">
                        {entry.careerPath}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">
                        {entry.xp} XP
                      </p>
                      <p className="text-slate-600 text-sm">
                        Level {entry.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </main>

        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
          fixed md:relative md:translate-x-0 top-0 right-0 h-full w-80 bg-white border-l border-slate-200 
          transition-transform duration-300 z-30 md:z-auto shadow-lg`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Boost Your Soft Skills
              </h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden p-1 rounded-lg hover:bg-slate-100 text-slate-700"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-4">
              {softSkills.map((skill) => (
                <Card
                  key={skill.id}
                  className="bg-slate-50 border-slate-200 shadow-sm p-4"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`size-10 rounded-full flex items-center justify-center text-lg ${skill.color}`}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-slate-900">
                        {skill.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-2">
                        {skill.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-1 bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-600">
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          {skill.completedLessons}/{skill.totalLessons} lessons
                        </span>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Play className="size-3 mr-1" />
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
          <Card className="bg-white text-slate-900 max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Certificate Details
              </h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-600"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="text-center">
              <div className="size-32 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-sm text-slate-600">QR Code</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Blockchain Hash: 0xABC123...DEF456
              </p>
              <p className="text-xs text-slate-500">
                Verified on blockchain • Issued by Rwanda TVET Board
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden shadow-lg">
        <div className="flex items-center justify-around py-2">
          <button className="flex flex-col items-center gap-1 p-2 text-slate-900">
            <div className="size-6 rounded-full bg-slate-200" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-600">
            <div className="size-6 rounded-full bg-slate-100" />
            <span className="text-xs">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-900">
            <div className="size-6 rounded-full bg-blue-600" />
            <span className="text-xs">Learn</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-600">
            <div className="size-6 rounded-full bg-slate-100" />
            <span className="text-xs">Jobs</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-slate-600">
            <div className="size-6 rounded-full bg-slate-100" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
