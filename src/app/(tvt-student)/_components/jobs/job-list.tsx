"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(tvt-student)/_components/ui/avatar";
import { MapPin, Clock, DollarSign, Users, Star, Bookmark } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
  requiredSkills: string[];
  matchPercentage: number;
  applicants: number;
  isBookmarked: boolean;
  companyLogo?: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Junior Welder",
    company: "SteelCorp Manufacturing",
    location: "Industrial District, City",
    type: "Full Time",
    salary: "$45,000 - $55,000",
    postedDate: "2 days ago",
    description:
      "Join our team as a Junior Welder. Perfect opportunity for recent TVET graduates to apply their welding skills in a professional environment.",
    requiredSkills: ["Arc Welding", "Safety Protocols", "Metal Preparation"],
    matchPercentage: 95,
    applicants: 12,
    isBookmarked: false,
    companyLogo: "/company-logo-1.png",
  },
  {
    id: "2",
    title: "Welding Apprentice",
    company: "Metro Construction",
    location: "Downtown, City",
    type: "Apprenticeship",
    salary: "$35,000 - $40,000",
    postedDate: "1 week ago",
    description:
      "Learn from experienced professionals while earning. This apprenticeship program offers hands-on training and career development.",
    requiredSkills: ["Basic Welding", "Safety Protocols", "Teamwork"],
    matchPercentage: 88,
    applicants: 8,
    isBookmarked: true,
  },
  {
    id: "3",
    title: "Quality Control Inspector",
    company: "Precision Metals Ltd",
    location: "Industrial Park, City",
    type: "Full Time",
    salary: "$50,000 - $60,000",
    postedDate: "3 days ago",
    description:
      "Inspect welded components for quality and compliance. Requires attention to detail and knowledge of welding standards.",
    requiredSkills: [
      "Quality Control",
      "Blueprint Reading",
      "Inspection Tools",
    ],
    matchPercentage: 72,
    applicants: 15,
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Maintenance Welder",
    company: "PowerGen Industries",
    location: "Energy Sector, City",
    type: "Full Time",
    salary: "$55,000 - $65,000",
    postedDate: "5 days ago",
    description:
      "Maintain and repair industrial equipment. Requires advanced welding skills and problem-solving abilities.",
    requiredSkills: [
      "Advanced Welding",
      "Equipment Maintenance",
      "Problem Solving",
    ],
    matchPercentage: 65,
    applicants: 20,
    isBookmarked: false,
  },
];

export function JobList() {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 bg-green-50";
    if (percentage >= 75) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recommended Jobs</h3>
        <p className="text-sm text-muted-foreground">
          {jobs.length} jobs found
        </p>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="border border-white/10 bg-white/5 hover:shadow-md transition-shadow"
          >
            <CardHeader className="">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.companyLogo || "/placeholder.svg"} />
                    <AvatarFallback>
                      {job.company.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {job.title}
                    </h4>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex text-white/80 items-center gap-4 mt-1 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.postedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {job.applicants} applicants
                  </div>
                </div>
                <div className="flex text-white items-center gap-4 text-sm">
                  <Badge className="text-white/80" variant="outline">
                    {job.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>

                <p className="text-sm text-white/80 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.requiredSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link href={`/student/dashboard/jobs/${job.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm">Quick Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
