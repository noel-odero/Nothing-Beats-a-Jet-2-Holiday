"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Clock,
  Star,
  MapPin,
  Filter,
  MoreHorizontal,
  Eye,
  MessageSquare,
  Award,
  Menu,
  X,
} from "lucide-react"

export function HiringDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    { title: "Active Positions", value: "8", change: "+3 this week", icon: Briefcase, color: "text-blue-600" },
    { title: "TVET Applicants", value: "156", change: "+24 today", icon: Users, color: "text-green-600" },
    { title: "Skills Assessments", value: "12", change: "5 pending", icon: Award, color: "text-purple-600" },
    {
      title: "Training Budget",
      value: "RWF 2.8M",
      change: "45% allocated",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ]

  const activeJobs = [
    {
      id: 1,
      title: "Automotive Technician",
      budget: "RWF 180,000 - 250,000/month",
      applicants: 28,
      posted: "2 days ago",
      status: "Active",
      location: "Kigali, Rwanda",
      skills: ["Engine Repair", "Diagnostics", "Electrical Systems"],
    },
    {
      id: 2,
      title: "Electrical Installation Specialist",
      budget: "RWF 200,000 - 300,000/month",
      applicants: 19,
      posted: "4 days ago",
      status: "Active",
      location: "Musanze, Rwanda",
      skills: ["Wiring", "Circuit Design", "Safety Protocols"],
    },
    {
      id: 3,
      title: "Welding & Fabrication Technician",
      budget: "RWF 160,000 - 220,000/month",
      applicants: 22,
      posted: "1 week ago",
      status: "Active",
      location: "Huye, Rwanda",
      skills: ["Arc Welding", "Metal Fabrication", "Blueprint Reading"],
    },
  ]

  const draftJobs = [
    {
      id: 4,
      title: "Plumbing & Water Systems Technician",
      budget: "RWF 170,000 - 240,000/month",
      location: "Rubavu, Rwanda",
      skills: ["Pipe Installation", "Water Treatment", "System Maintenance"],
      lastEdited: "3 hours ago",
    },
    {
      id: 5,
      title: "Construction Equipment Operator",
      budget: "RWF 190,000 - 280,000/month",
      location: "Nyagatare, Rwanda",
      skills: ["Heavy Machinery", "Site Safety", "Equipment Maintenance"],
      lastEdited: "1 day ago",
    },
    {
      id: 6,
      title: "Solar Panel Installation Technician",
      budget: "RWF 200,000 - 320,000/month",
      location: "Kayonza, Rwanda",
      skills: ["Solar Systems", "Electrical Wiring", "Green Energy"],
      lastEdited: "2 days ago",
    },
  ]

  const closedJobs = [
    {
      id: 7,
      title: "HVAC Maintenance Technician",
      budget: "RWF 185,000 - 260,000/month",
      location: "Kigali, Rwanda",
      applicants: 45,
      hired: "Marie Uwimana",
      closedDate: "1 week ago",
      reason: "Position Filled",
    },
    {
      id: 8,
      title: "Motorcycle Repair Specialist",
      budget: "RWF 150,000 - 200,000/month",
      location: "Musanze, Rwanda",
      applicants: 32,
      hired: "Joseph Nkurunziza",
      closedDate: "2 weeks ago",
      reason: "Position Filled",
    },
    {
      id: 9,
      title: "Carpentry & Furniture Making",
      budget: "RWF 140,000 - 190,000/month",
      location: "Huye, Rwanda",
      applicants: 28,
      hired: null,
      closedDate: "3 weeks ago",
      reason: "Budget Constraints",
    },
  ]

  const topApplicants = [
    {
      id: 1,
      name: "Jean Baptiste Uwimana",
      role: "Automotive Technology Graduate",
      rating: 4.7,
      experience: "2 years internship",
      location: "Kigali, Rwanda",
      avatar: "/professional-woman-developer.png",
      skills: ["Engine Diagnostics", "Brake Systems", "Transmission Repair"],
      institution: "IPRC Kigali",
      certification: "Level 3 Automotive",
    },
    {
      id: 2,
      name: "Marie Claire Mukamana",
      role: "Electrical Installation Graduate",
      rating: 4.8,
      experience: "1.5 years apprentice",
      location: "Musanze, Rwanda",
      avatar: "/professional-man-designer.jpg",
      skills: ["Industrial Wiring", "PLC Programming", "Motor Control"],
      institution: "IPRC Musanze",
      certification: "Level 4 Electrical",
    },
    {
      id: 3,
      name: "Patrick Niyonzima",
      role: "Welding & Fabrication Graduate",
      rating: 4.6,
      experience: "6 months workshop",
      location: "Huye, Rwanda",
      avatar: "/professional-woman-engineer.png",
      skills: ["MIG Welding", "Steel Fabrication", "Quality Control"],
      institution: "IPRC Huye",
      certification: "Level 3 Welding",
    },
  ]

  const conversations = [
    {
      id: 1,
      participant: "Jean Baptiste Uwimana",
      avatar: "/professional-woman-developer.png",
      lastMessage: "Thank you for considering my application. I'm excited about the automotive technician position.",
      timestamp: "2 hours ago",
      unread: true,
      position: "Automotive Technician",
    },
    {
      id: 2,
      participant: "Marie Claire Mukamana",
      avatar: "/professional-man-designer.jpg",
      lastMessage: "I've completed the skills assessment. When can we schedule the practical test?",
      timestamp: "5 hours ago",
      unread: true,
      position: "Electrical Installation Specialist",
    },
    {
      id: 3,
      participant: "Patrick Niyonzima",
      avatar: "/professional-woman-engineer.png",
      lastMessage: "I have additional welding certifications I'd like to share with you.",
      timestamp: "1 day ago",
      unread: false,
      position: "Welding & Fabrication Technician",
    },
    {
      id: 4,
      participant: "IPRC Kigali Coordinator",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We have 5 new automotive graduates ready for placement. Would you like to review their profiles?",
      timestamp: "2 days ago",
      unread: false,
      position: "Partnership Discussion",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">TVET Connect</h1>
            <Badge variant="secondary" className="bg-accent text-accent-foreground hidden sm:inline-flex">
              Employer
            </Badge>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search TVET graduates, skills..." className="w-48 lg:w-64 pl-10" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
              <Plus className="mr-0 lg:mr-2 h-4 w-4" />
              <span className="hidden lg:inline">Post Position</span>
            </Button>
            <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
              <AvatarImage src="/professional-employer-avatar.jpg" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 border-r border-sidebar-border bg-sidebar transform transition-transform duration-200 ease-in-out lg:transform-none
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="font-semibold">Menu</span>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("overview")
                setSidebarOpen(false)
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "jobs" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("jobs")
                setSidebarOpen(false)
              }}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Open Positions
            </Button>
            <Button
              variant={activeTab === "applicants" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("applicants")
                setSidebarOpen(false)
              }}
            >
              <Users className="mr-2 h-4 w-4" />
              TVET Candidates
            </Button>
            <Button
              variant={activeTab === "messages" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("messages")
                setSidebarOpen(false)
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </nav>
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 min-w-0">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{stat.change}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Jobs & Top Applicants */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Active Jobs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Open Technical Positions</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      Current opportunities for TVET graduates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeJobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border border-border rounded-lg space-y-3 lg:space-y-0"
                      >
                        <div className="space-y-1 flex-1">
                          <h4 className="font-medium text-foreground">{job.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-slate-600 dark:text-slate-300">
                            <span className="flex items-center">
                              <DollarSign className="mr-1 h-3 w-3" />
                              {job.budget}
                            </span>
                            <span className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              {job.applicants} applicants
                            </span>
                            <span className="flex items-center">
                              <MapPin className="mr-1 h-3 w-3" />
                              {job.location}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {job.skills.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {job.skills.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{job.skills.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-end space-x-2">
                          <Badge variant="secondary">{job.status}</Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Top Applicants */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Top TVET Candidates</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      Skilled graduates ready for employment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topApplicants.map((applicant) => (
                      <div
                        key={applicant.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg space-y-3 sm:space-y-0"
                      >
                        <div className="flex items-center space-x-3 flex-1">
                          <Avatar>
                            <AvatarImage src={applicant.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {applicant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-foreground truncate">{applicant.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 truncate">{applicant.role}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-xs text-slate-600 dark:text-slate-300">{applicant.rating}</span>
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-300">•</span>
                              <span className="text-xs text-slate-600 dark:text-slate-300 truncate">
                                {applicant.institution}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {applicant.certification}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right sm:text-left">
                          <p className="font-medium text-foreground text-sm">{applicant.experience}</p>
                          <Button variant="outline" size="sm" className="mt-2 bg-transparent w-full sm:w-auto">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Activity</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Latest updates on TVET recruitment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          New application from IPRC graduate for <strong>Automotive Technician</strong>
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          Skills assessment scheduled with Jean Baptiste Uwimana
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <strong>Electrical Installation</strong> position received 8 new applications from TVET
                          graduates
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "jobs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                <h2 className="text-2xl font-bold text-foreground">My Jobs</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button className="bg-primary text-primary-foreground" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Post New Job</span>
                    <span className="sm:hidden">Post Job</span>
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="active">Active (8)</TabsTrigger>
                  <TabsTrigger value="draft">Drafts (3)</TabsTrigger>
                  <TabsTrigger value="closed">Closed (8)</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="space-y-4">
                  {activeJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <DollarSign className="mr-1 h-3 w-3" />
                                {job.budget}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                Posted {job.posted}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary">{job.status}</Badge>
                              <span className="text-sm text-muted-foreground">{job.applicants} applicants</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                              View Applications
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Application Progress</span>
                            <span className="text-foreground">{job.applicants}/100 applications</span>
                          </div>
                          <Progress value={(job.applicants / 100) * 100} className="mt-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="draft" className="space-y-4">
                  {draftJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <DollarSign className="mr-1 h-3 w-3" />
                                {job.budget}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                Last edited {job.lastEdited}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">Draft</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {job.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                              Continue Editing
                            </Button>
                            <Button size="sm" className="bg-primary text-primary-foreground w-full sm:w-auto">
                              Publish
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="closed" className="space-y-4">
                  {closedJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <DollarSign className="mr-1 h-3 w-3" />
                                {job.budget}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                Closed {job.closedDate}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary">{job.reason}</Badge>
                              <span className="text-sm text-muted-foreground">{job.applicants} total applicants</span>
                            </div>
                            {job.hired && (
                              <p className="text-sm text-green-600">
                                <strong>Hired:</strong> {job.hired}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                              View Details
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === "applicants" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                <h2 className="text-2xl font-bold text-foreground">TVET Candidates</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Filter by Skills</span>
                    <span className="sm:hidden">Filter</span>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {topApplicants.map((applicant) => (
                  <Card key={applicant.id}>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12 flex-shrink-0">
                            <AvatarImage src={applicant.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {applicant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2 min-w-0 flex-1">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{applicant.name}</h3>
                              <p className="text-muted-foreground">{applicant.role}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-foreground">{applicant.rating}</span>
                              </div>
                              <span className="hidden sm:inline text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{applicant.institution}</span>
                              <span className="hidden sm:inline text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{applicant.experience}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                              <Badge variant="secondary" className="text-xs w-fit">
                                {applicant.certification}
                              </Badge>
                              <span className="hidden sm:inline text-muted-foreground text-xs">•</span>
                              <span className="text-muted-foreground text-xs">{applicant.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {applicant.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-left lg:text-right space-y-2">
                          <p className="text-sm font-medium text-foreground">Available for hire</p>
                          <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2">
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                              View Portfolio
                            </Button>
                            <Button size="sm" className="bg-primary text-primary-foreground w-full sm:w-auto">
                              Skills Test
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Messages</h2>
              <div className="space-y-4">
                {conversations.map((conversation) => (
                  <Card
                    key={conversation.id}
                    className={`cursor-pointer hover:bg-accent/50 transition-colors ${conversation.unread ? "border-primary/50" : ""}`}
                  >
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12 flex-shrink-0">
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {conversation.participant
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-1 sm:space-y-0">
                            <div>
                              <h4 className="font-semibold text-foreground">{conversation.participant}</h4>
                              <p className="text-sm text-muted-foreground">{conversation.position}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                              {conversation.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                            </div>
                          </div>
                          <p className="text-sm text-foreground line-clamp-2">{conversation.lastMessage}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                            <div className="flex items-center space-x-2">
                              {conversation.unread && (
                                <Badge variant="secondary" className="text-xs">
                                  New
                                </Badge>
                              )}
                            </div>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
