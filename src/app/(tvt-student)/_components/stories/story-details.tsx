"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(tvt-student)/_components/ui/avatar";
import {
  ArrowLeft,
  Heart,
  Share2,
  Bookmark,
  MapPin,
  Calendar,
  TrendingUp,
  Quote,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface StoryDetailsProps {
  storyId: string;
}

const storyData = {
  "1": {
    id: "1",
    name: "Carlos Rodriguez",
    title: "Lead Welder",
    company: "Bridge Construction Inc",
    program: "Welding Technology",
    graduationYear: "2020",
    location: "Industrial City",
    avatar: "/carlos-avatar.jpg",
    coverImage: "/story-cover-1.jpg",
    summary:
      "From struggling to find work to leading major infrastructure projects. Carlos shows how dedication and continuous learning can transform your career.",
    fullStory: `
      When Carlos graduated from the TVET Welding Technology program in 2020, the job market was challenging due to the pandemic. Despite having solid technical skills, he struggled to find his first job for several months.

      "I was starting to doubt myself," Carlos recalls. "But my instructors always told us that persistence and continuous learning were key to success in this field."

      His breakthrough came when he accepted an entry-level position at a small fabrication shop, even though the pay was lower than he hoped. Carlos used this opportunity to perfect his skills and learn about different welding techniques.

      Within six months, his dedication caught the attention of Bridge Construction Inc, a major infrastructure company. They offered him a position as a junior welder on their team.

      "The transition to infrastructure work was challenging," Carlos explains. "Bridge welding requires precision and adherence to strict safety standards. But the TVET program had prepared me well for this."

      Carlos quickly proved himself on various projects, from highway overpasses to pedestrian bridges. His attention to detail and leadership qualities didn't go unnoticed.

      After two years, he was promoted to Senior Welder, and just last year, he became Lead Welder on a $2 million bridge project connecting two major districts in the city.

      "Today, I lead a team of 8 welders, and we're responsible for some of the most critical welds on major infrastructure projects. The skills I learned at TVET were just the beginning – the real growth came from never stopping to learn and improve."

      Carlos's advice to current students: "Don't be discouraged by initial setbacks. Every challenge is an opportunity to grow. The technical skills you learn are important, but developing leadership and problem-solving abilities will set you apart."
    `,
    achievement: "Led team on $2M bridge project",
    careerPath: [
      {
        title: "Junior Welder",
        company: "Small Fab Shop",
        year: "2020",
        salary: "$35,000",
      },
      {
        title: "Welder",
        company: "Bridge Construction Inc",
        year: "2021",
        salary: "$45,000",
      },
      {
        title: "Senior Welder",
        company: "Bridge Construction Inc",
        year: "2022",
        salary: "$58,000",
      },
      {
        title: "Lead Welder",
        company: "Bridge Construction Inc",
        year: "2024",
        salary: "$72,000",
      },
    ],
    skills: [
      "Arc Welding",
      "Structural Welding",
      "Safety Management",
      "Team Leadership",
      "Quality Control",
    ],
    achievements: [
      "Led $2M bridge construction project",
      "Zero safety incidents in 4 years",
      "Mentored 15+ junior welders",
      "Certified in 5 welding processes",
    ],
    advice: [
      "Never stop learning new techniques",
      "Safety should always be your top priority",
      "Build relationships with your colleagues",
      "Take on challenging projects to grow",
    ],
    tags: ["Infrastructure", "Leadership", "Career Growth"],
    likes: 124,
    isLiked: false,
    isBookmarked: true,
  },
};

export function StoryDetails({ storyId }: StoryDetailsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(true);
  const story = storyData[storyId as keyof typeof storyData];

  if (!story) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Story not found</h2>
        <Link href="/student/dashboard/stories">
          <Button>Back to Success Stories</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/student/dashboard/stories">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={cn(
                "h-4 w-4 mr-2",
                isLiked ? "fill-red-500 text-red-500" : ""
              )}
            />
            {story.likes + (isLiked ? 1 : 0)}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark
              className={cn(
                "h-4 w-4",
                isBookmarked ? "fill-primary text-primary" : ""
              )}
            />
          </Button>
        </div>
      </div>

      {/* Story Header */}
      <Card>
        <div
          className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${story.coverImage})` }}
        >
          <div className="h-full bg-gradient-to-r from-black/60 to-black/30 rounded-t-lg flex items-end p-6">
            <div className="text-white">
              <Badge className="bg-white/20 text-white border-white/30 mb-2">
                {story.program}
              </Badge>
              <h1 className="text-3xl font-bold">{story.name}</h1>
              <p className="text-lg opacity-90">{story.title}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary/20">
              <AvatarImage src={story.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {story.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {story.company}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {story.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Class of {story.graduationYear}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Story */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Success Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              {story.fullStory.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-sm leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-5 w-5" />
                Advice for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {story.advice.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Career Path */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Career Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {story.careerPath.map((step, index) => (
                <div key={index} className="relative">
                  {index < story.careerPath.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-8 bg-border" />
                  )}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{step.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {step.company}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          {step.year}
                        </span>
                        <span className="text-xs font-medium text-primary">
                          {step.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Key Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {story.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5" />
                Major Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {story.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
