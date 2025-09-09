"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
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
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

import {
  stats,
  activeJobs,
  draftJobs,
  closedJobs,
  topApplicants,
  conversations,
} from "@/data/hiring-dashboard";

export function HiringDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">
              NextWork
            </h1>
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground hidden sm:inline-flex"
            >
              Employer
            </Badge>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search TVET graduates, skills..."
                className="w-48 lg:w-64 pl-10"
              />
            </div>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
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
          className={` h-screen
          fixed lg:static inset-y-0 left-0 z-50 w-64 border-r border-sidebar-border bg-sidebar transform transition-transform duration-200 ease-in-out lg:transform-none
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("overview");
                setSidebarOpen(false);
              }}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "jobs" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("jobs");
                setSidebarOpen(false);
              }}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Open Positions
            </Button>
            <Button
              variant={activeTab === "applicants" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("applicants");
                setSidebarOpen(false);
              }}
            >
              <Users className="mr-2 h-4 w-4" />
              TVET Candidates
            </Button>
            <Button
              variant={activeTab === "messages" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab("messages");
                setSidebarOpen(false);
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
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
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {stat.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Jobs & Top Applicants */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Active Jobs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Open Technical Positions
                    </CardTitle>
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
                          <h4 className="font-medium text-foreground">
                            {job.title}
                          </h4>
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
                              <Badge
                                key={skill}
                                variant="outline"
                                className="text-xs"
                              >
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
                    <CardTitle className="text-foreground">
                      Top TVET Candidates
                    </CardTitle>
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
                            <AvatarImage
                              src={applicant.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback>
                              {applicant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-foreground truncate">
                              {applicant.name}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 truncate">
                              {applicant.role}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-xs text-slate-600 dark:text-slate-300">
                                  {applicant.rating}
                                </span>
                              </div>
                              <span className="text-xs text-slate-600 dark:text-slate-300">
                                •
                              </span>
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
                          <p className="font-medium text-foreground text-sm">
                            {applicant.experience}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-transparent w-full sm:w-auto"
                          >
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
                  <CardTitle className="text-foreground">
                    Recent Activity
                  </CardTitle>
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
                          New application from IPRC graduate for{" "}
                          <strong>Automotive Technician</strong>
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          15 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          Skills assessment scheduled with Jean Baptiste Uwimana
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <strong>Electrical Installation</strong> position
                          received 8 new applications from TVET graduates
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          5 hours ago
                        </p>
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
                  <Button
                    className="bg-primary text-primary-foreground"
                    size="sm"
                  >
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
                <TabsContent
                  value="active"
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4"
                >
                  {activeJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {job.title}
                            </h3>
                            <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
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
                              <span className="text-sm text-muted-foreground">
                                {job.applicants} applicants
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Application Progress
                              </span>
                              <span className="text-foreground">
                                {job.applicants}/100 applications
                              </span>
                            </div>
                            <Progress
                              value={(job.applicants / 100) * 100}
                              className="w-full"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-transparent"
                            >
                              View Applications
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full"
                            >
                              <MoreHorizontal className="h-4 w-4 mr-2" />
                              More Options
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent
                  value="draft"
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4"
                >
                  {draftJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {job.title}
                            </h3>
                            <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
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
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-transparent"
                            >
                              Continue Editing
                            </Button>
                            <Button
                              size="sm"
                              className="bg-primary text-primary-foreground w-full"
                            >
                              Publish
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent
                  value="closed"
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4"
                >
                  {closedJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-4 lg:p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {job.title}
                            </h3>
                            <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
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
                              <span className="text-sm text-muted-foreground">
                                {job.applicants} total applicants
                              </span>
                            </div>
                            {job.hired && (
                              <p className="text-sm text-green-600">
                                <strong>Hired:</strong> {job.hired}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-transparent"
                            >
                              View Details
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full"
                            >
                              <MoreHorizontal className="h-4 w-4 mr-2" />
                              More Options
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
                <h2 className="text-2xl font-bold text-foreground">
                  TVET Candidates
                </h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Filter by Skills</span>
                    <span className="sm:hidden">Filter</span>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {topApplicants.map((applicant) => (
                  <Card key={applicant.id}>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar className="h-12 w-12 flex-shrink-0">
                            <AvatarImage
                              src={applicant.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback>
                              {applicant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2 min-w-0 flex-1">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">
                                {applicant.name}
                              </h3>
                              <p className="text-muted-foreground">
                                {applicant.role}
                              </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm">
                              <div className="flex items-center">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-foreground">
                                  {applicant.rating}
                                </span>
                              </div>
                              <span className="hidden sm:inline text-muted-foreground">
                                •
                              </span>
                              <span className="text-muted-foreground">
                                {applicant.institution}
                              </span>
                              <span className="hidden sm:inline text-muted-foreground">
                                •
                              </span>
                              <span className="text-muted-foreground">
                                {applicant.experience}
                              </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                              <Badge
                                variant="secondary"
                                className="text-xs w-fit"
                              >
                                {applicant.certification}
                              </Badge>
                              <span className="hidden sm:inline text-muted-foreground text-xs">
                                •
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {applicant.location}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {applicant.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-left lg:text-right space-y-2">
                          <p className="text-sm font-medium text-foreground">
                            Available for hire
                          </p>
                          <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full sm:w-auto bg-transparent"
                            >
                              View Portfolio
                            </Button>
                            <Button
                              size="sm"
                              className="bg-primary text-primary-foreground w-full sm:w-auto"
                            >
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

          {activeTab === "messages" && <MessagesTab />}
        </main>
      </div>
    </div>
  );
}

function MessagesTab() {
  const [selectedConversation, setSelectedConversation] = useState<
    (typeof conversations)[0] | null
  >(null);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(false); // For mobile navigation

  const handleConversationSelect = (
    conversation: (typeof conversations)[0]
  ) => {
    setSelectedConversation(conversation);
    setShowChat(true); // Show chat on mobile
  };

  const handleBackToList = () => {
    setShowChat(false); // Go back to conversation list on mobile
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex">
      {/* Conversations Sidebar */}
      <div
        className={`${
          showChat ? "hidden lg:flex" : "flex"
        } w-full lg:w-80 border-r border-border flex-col bg-card`}
      >
        {/* Search Bar */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleConversationSelect(conversation)}
              className={`p-4 lg:p-4 border-b border-border cursor-pointer hover:bg-accent/50 active:bg-accent/70 transition-colors touch-manipulation ${
                selectedConversation?.id === conversation.id
                  ? "bg-accent/30"
                  : ""
              } ${conversation.unread ? "bg-blue-50/50" : ""}`}
            >
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage
                    src={conversation.avatar || "/placeholder.svg"}
                  />
                  <AvatarFallback>
                    {conversation.participant
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground truncate">
                      {conversation.participant}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-muted-foreground">
                        {conversation.timestamp}
                      </span>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.position}
                  </p>
                  <p className="text-sm text-foreground truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unread && (
                    <Badge
                      variant="default"
                      className="text-xs mt-1 bg-blue-500"
                    >
                      New
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Content */}
      <div
        className={`${
          showChat ? "flex" : "hidden lg:flex"
        } flex-1 flex-col bg-background`}
      >
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-border bg-card flex items-center space-x-3">
              {/* Mobile Back Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={handleBackToList}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={selectedConversation.avatar || "/placeholder.svg"}
                />
                <AvatarFallback>
                  {selectedConversation.participant
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  {selectedConversation.participant}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedConversation.position}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 lg:p-4 overflow-y-auto space-y-4">
              {selectedConversation.messages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "employer"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div className="max-w-[280px] sm:max-w-xs lg:max-w-md">
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "employer"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p
                        className={`text-sm ${
                          message.sender === "employer"
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {message.text}
                      </p>
                    </div>
                    <p
                      className={`text-xs text-muted-foreground mt-1 ${
                        message.sender === "employer" ? "text-right" : ""
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              )) || (
                /* Fallback sample messages if no messages exist */
                <>
                  <div className="flex justify-start">
                    <div className="max-w-[280px] sm:max-w-xs lg:max-w-md">
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-sm text-foreground">
                          Hello! Thank you for considering my application.
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {selectedConversation.timestamp}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Message Input */}
            <div className="p-3 lg:p-4 border-t border-border bg-card">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && newMessage.trim()) {
                      // Handle send message
                      setNewMessage("");
                    }
                  }}
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground px-3 lg:px-4"
                  disabled={!newMessage.trim()}
                >
                  <span className="hidden sm:inline">Send</span>
                  <span className="sm:hidden">→</span>
                </Button>
              </div>
            </div>
          </>
        ) : (
          /* Welcome/Placeholder Screen - Hidden on mobile when no conversation is selected */
          <div className="flex-1 flex items-center justify-center bg-muted/20">
            <div className="text-center space-y-4 max-w-md px-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  NextWork Messages
                </h3>
                <p className="text-muted-foreground">
                  Select a conversation to start messaging with TVET candidates
                  and manage your recruitment communications.
                </p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Direct communication with candidates</p>
                <p>• Share job details and requirements</p>
                <p>• Schedule interviews and assessments</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
