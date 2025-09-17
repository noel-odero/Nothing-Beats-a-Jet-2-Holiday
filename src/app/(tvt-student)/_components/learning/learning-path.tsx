"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Progress } from "@/app/(tvt-student)/_components/ui/progress";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import { CheckCircle, Lock, Play, Star, Award } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LessonNode } from "./lesson-node";
import {
  Lesson,
  programLessons,
  softSkillLessons,
} from "../../data/learning-path";

export function LearningPath() {
  const lessons = [
    {
      id: "1",
      status: "completed",
      position: "left",
      title: "Intro to Welding",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      id: "2",
      status: "completed",
      position: "right",
      title: "Safety Protocols Quiz",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      id: "3",
      status: "completed",
      position: "left",
      title: "Arc Welding Basics",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      id: "4",
      status: "current",
      position: "right",
      title: "Metal Preparation",
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: "5",
      status: "locked",
      position: "left",
      title: "Welding Positions Challenge",
      icon: <Lock className="w-8 h-8" />,
    },
    {
      id: "6",
      status: "locked",
      position: "right",
      title: "Quality Control Assessment",
      icon: <Lock className="w-8 h-8" />,
    },
    {
      id: "7",
      status: "locked",
      position: "left",
      title: "Advanced Techniques",
      icon: <Lock className="w-8 h-8" />,
    },
  ];

  return (
    <div className="relative max-w-[280px] mx-auto mt-8">
      <div className="flex flex-col items-center">
        {/* Start Node */}
        <LessonNode
          status="completed"
          position="center"
          icon={<Star className="w-10 h-10" />}
          isStart
          lessonId="4"
        />

        {/* Lesson Nodes */}
        {lessons.map((lesson) => (
          <LessonNode
            key={lesson.id}
            status={lesson.status as "completed" | "current" | "locked"}
            position={lesson.position as "left" | "right"}
            icon={lesson.icon}
            title={lesson.title}
            lessonId={lesson.id}
          />
        ))}
        {/* Character Node */}
        <div className="mb-6 mt-6">
          <div className="w-[84px] h-[84px] bg-primary rounded-full flex items-center justify-center p-1 shadow-lg">
            <div className="w-full h-full bg-primary-foreground rounded-full flex items-center justify-center">
              <div className="text-4xl transform -rotate-12">🦸‍♂️</div>
            </div>
          </div>
        </div>
        {/* Jump Node */}
        <div className="text-center border-t border-border pt-8 mt-8">
          <div className="text-muted-foreground text-lg mb-4">
            Master Certification
          </div>
          <LessonNode status="locked" position="center" isJumpNode />
        </div>
      </div>
    </div>
  );
}

function ProgramPath() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const getStatusIcon = (status: Lesson["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-primary" />;
      case "available":
        return <Play className="h-6 w-6 text-primary" />;
      case "locked":
        return <Lock className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getTypeIcon = (type: Lesson["type"]) => {
    switch (type) {
      case "quiz":
        return "❓";
      case "challenge":
        return "⚡";
      case "assessment":
        return "🎯";
      default:
        return "📚";
    }
  };

  const getDifficultyColor = (difficulty: Lesson["difficulty"]) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-white/10 bg-white/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Welding Technology Path</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Progress:</span>
              <Progress value={68} className="w-32" />
              <span className="text-sm font-medium">68%</span>
            </div>
          </div>

          <div className="grid gap-4">
            {programLessons.map((lesson, index) => (
              <div key={lesson.id} className="relative">
                {/* Connection line */}
                {index < programLessons.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-border" />
                )}

                <Card
                  className={cn(
                    "transition-all duration-200 hover:shadow-md cursor-pointer",
                    lesson.status === "locked" && "opacity-60",
                    selectedLesson === lesson.id && "ring-2 ring-primary"
                  )}
                  onClick={() =>
                    lesson.status !== "locked" && setSelectedLesson(lesson.id)
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {getStatusIcon(lesson.status)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">
                            {getTypeIcon(lesson.type)}
                          </span>
                          <h4 className="font-semibold truncate">
                            {lesson.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "text-xs",
                              getDifficultyColor(lesson.difficulty)
                            )}
                          >
                            {lesson.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                              {lesson.xp} XP
                            </span>
                          </div>
                          {lesson.status === "completed" && (
                            <Badge variant="outline" className="text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {lesson.status !== "locked" && (
                          <Link
                            href={`/student/dashboard/learning/lesson/${lesson.id}`}
                          >
                            <Button
                              variant={
                                lesson.status === "completed"
                                  ? "outline"
                                  : "default"
                              }
                              size="sm"
                            >
                              {lesson.status === "completed"
                                ? "Review"
                                : "Start"}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SoftSkillsPath() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const getStatusIcon = (status: Lesson["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-primary" />;
      case "available":
        return <Play className="h-6 w-6 text-primary" />;
      case "locked":
        return <Lock className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getTypeIcon = (type: Lesson["type"]) => {
    switch (type) {
      case "quiz":
        return "";
      case "challenge":
        return "⚡";
      case "assessment":
        return "";
      default:
        return "";
    }
  };

  const getDifficultyColor = (difficulty: Lesson["difficulty"]) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Soft Skills Path</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Progress:</span>
              <Progress value={68} className="w-32" />
              <span className="text-sm font-medium">68%</span>
            </div>
          </div>

          <div className="grid gap-4">
            {softSkillLessons.map((lesson, index) => (
              <div key={lesson.id} className="relative">
                {/* Connection line */}
                {index < softSkillLessons.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-border" />
                )}

                <Card
                  className={cn(
                    "transition-all duration-200 hover:shadow-md cursor-pointer",
                    lesson.status === "locked" && "opacity-60",
                    selectedLesson === lesson.id && "ring-2 ring-primary"
                  )}
                  onClick={() =>
                    lesson.status !== "locked" && setSelectedLesson(lesson.id)
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {getStatusIcon(lesson.status)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">
                            {getTypeIcon(lesson.type)}
                          </span>
                          <h4 className="font-semibold truncate">
                            {lesson.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "text-xs",
                              getDifficultyColor(lesson.difficulty)
                            )}
                          >
                            {lesson.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                              {lesson.xp} XP
                            </span>
                          </div>
                          {lesson.status === "completed" && (
                            <Badge variant="outline" className="text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {lesson.status !== "locked" && (
                          <Link
                            href={`/student/dashboard/learning/lesson/${lesson.id}`}
                          >
                            <Button
                              variant={
                                lesson.status === "completed"
                                  ? "outline"
                                  : "default"
                              }
                              size="sm"
                            >
                              {lesson.status === "completed"
                                ? "Review"
                                : "Start"}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
