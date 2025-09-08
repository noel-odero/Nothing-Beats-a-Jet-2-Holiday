"use client";

import { useState } from "react";
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
import {
  Heart,
  Share2,
  Bookmark,
  MapPin,
  Calendar,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Story {
  id: string;
  name: string;
  title: string;
  company: string;
  program: string;
  graduationYear: string;
  location: string;
  avatar?: string;
  summary: string;
  achievement: string;
  careerPath: string[];
  tags: string[];
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  salaryGrowth: string;
}

const stories: Story[] = [
  {
    id: "1",
    name: "Carlos Rodriguez",
    title: "Lead Welder",
    company: "Bridge Construction Inc",
    program: "Welding Technology",
    graduationYear: "2020",
    location: "Industrial City",
    summary:
      "From struggling to find work to leading major infrastructure projects. Carlos shows how dedication and continuous learning can transform your career.",
    achievement: "Led team on $2M bridge project",
    careerPath: ["Junior Welder", "Welder", "Senior Welder", "Lead Welder"],
    tags: ["Infrastructure", "Leadership", "Career Growth"],
    likes: 124,
    isLiked: false,
    isBookmarked: true,
    salaryGrowth: "+150% in 4 years",
  },
  {
    id: "2",
    name: "Sarah Kim",
    title: "Welding Instructor & Entrepreneur",
    company: "Kim's Welding Academy",
    program: "Welding Technology",
    graduationYear: "2018",
    location: "Tech Valley",
    summary:
      "Sarah combined her welding expertise with teaching passion to start her own training academy, now serving 200+ students annually.",
    achievement: "Founded successful training academy",
    careerPath: ["Welder", "Senior Welder", "Instructor", "Academy Owner"],
    tags: ["Entrepreneurship", "Education", "Innovation"],
    likes: 89,
    isLiked: true,
    isBookmarked: false,
    salaryGrowth: "+300% as entrepreneur",
  },
  {
    id: "3",
    name: "Ahmed Hassan",
    title: "Quality Control Manager",
    company: "Precision Manufacturing",
    program: "Welding Technology",
    graduationYear: "2017",
    location: "Manufacturing Hub",
    summary:
      "Ahmed's attention to detail and quality focus led him from the welding floor to managing quality across multiple production lines.",
    achievement: "Reduced defects by 40%",
    careerPath: ["Welder", "QC Inspector", "QC Supervisor", "QC Manager"],
    tags: ["Quality Control", "Management", "Process Improvement"],
    likes: 67,
    isLiked: false,
    isBookmarked: false,
    salaryGrowth: "+120% in 6 years",
  },
  {
    id: "4",
    name: "Jennifer Thompson",
    title: "Underwater Welder",
    company: "Marine Services Ltd",
    program: "Welding Technology",
    graduationYear: "2019",
    location: "Coastal City",
    summary:
      "Jennifer specialized in underwater welding, one of the most challenging and well-paid welding specializations in the industry.",
    achievement: "Certified commercial diver-welder",
    careerPath: ["Welder", "Specialized Training", "Underwater Welder"],
    tags: ["Specialization", "Marine", "High-Demand Skills"],
    likes: 156,
    isLiked: false,
    isBookmarked: true,
    salaryGrowth: "+200% with specialization",
  },
  {
    id: "5",
    name: "Michael Chen",
    title: "Robotics Technician",
    company: "AutoTech Industries",
    program: "Welding Technology",
    graduationYear: "2021",
    location: "Innovation District",
    summary:
      "Michael transitioned from manual welding to programming and maintaining robotic welding systems, combining traditional skills with modern technology.",
    achievement: "Automated 3 production lines",
    careerPath: ["Welder", "Tech Training", "Robotics Technician"],
    tags: ["Technology", "Automation", "Future Skills"],
    likes: 92,
    isLiked: true,
    isBookmarked: false,
    salaryGrowth: "+180% with tech skills",
  },
  {
    id: "6",
    name: "Lisa Martinez",
    title: "Welding Sales Engineer",
    company: "Industrial Equipment Co",
    program: "Welding Technology",
    graduationYear: "2016",
    location: "Business District",
    summary:
      "Lisa leveraged her technical welding knowledge to excel in sales, helping customers choose the right equipment and solutions.",
    achievement: "Top sales performer 3 years running",
    careerPath: ["Welder", "Technical Support", "Sales Engineer"],
    tags: ["Sales", "Technical Knowledge", "Customer Relations"],
    likes: 78,
    isLiked: false,
    isBookmarked: false,
    salaryGrowth: "+160% in sales role",
  },
];

export function StoriesGrid() {
  const [likedStories, setLikedStories] = useState<Set<string>>(
    new Set(["2", "5"])
  );
  const [bookmarkedStories, setBookmarkedStories] = useState<Set<string>>(
    new Set(["1", "4"])
  );

  const toggleLike = (storyId: string) => {
    const newLiked = new Set(likedStories);
    if (newLiked.has(storyId)) {
      newLiked.delete(storyId);
    } else {
      newLiked.add(storyId);
    }
    setLikedStories(newLiked);
  };

  const toggleBookmark = (storyId: string) => {
    const newBookmarked = new Set(bookmarkedStories);
    if (newBookmarked.has(storyId)) {
      newBookmarked.delete(storyId);
    } else {
      newBookmarked.add(storyId);
    }
    setBookmarkedStories(newBookmarked);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Success Stories</h3>
        <p className="text-sm text-muted-foreground">
          {stories.length} stories found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={story.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {story.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {story.company}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {story.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Class of {story.graduationYear}
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {story.program}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {story.summary}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {story.achievement}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Career Path: {story.careerPath.join(" → ")}
                </div>
                <div className="text-xs font-medium text-primary">
                  {story.salaryGrowth}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={() => toggleLike(story.id)}
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 mr-1",
                        likedStories.has(story.id)
                          ? "fill-red-500 text-red-500"
                          : "text-muted-foreground"
                      )}
                    />
                    <span className="text-xs">
                      {story.likes + (likedStories.has(story.id) ? 1 : 0)}
                    </span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Share2 className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-xs">Share</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={() => toggleBookmark(story.id)}
                  >
                    <Bookmark
                      className={cn(
                        "h-4 w-4",
                        bookmarkedStories.has(story.id)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </Button>
                </div>
                <Link href={`/dashboard/stories/${story.id}`}>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
