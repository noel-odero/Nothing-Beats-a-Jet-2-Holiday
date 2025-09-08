"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Progress } from "@/app/(tvt-student)/_components/ui/progress";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  X,
  Star,
  Award,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LessonContentProps {
  lessonId: string;
}

interface Question {
  id: string;
  type: "multiple-choice" | "drag-drop" | "true-false" | "fill-blank";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

const lessonData = {
  "4": {
    title: "Metal Preparation",
    description:
      "Learn proper metal preparation techniques for quality welding",
    totalSteps: 5,
    xpReward: 80,
    questions: [
      {
        id: "1",
        type: "multiple-choice" as const,
        question: "What is the first step in metal preparation for welding?",
        options: [
          "Apply flux",
          "Clean the surface",
          "Heat the metal",
          "Apply primer",
        ],
        correctAnswer: "Clean the surface",
        explanation:
          "Cleaning the surface removes dirt, oil, and oxidation that can cause weld defects.",
        points: 20,
      },
      {
        id: "2",
        type: "true-false" as const,
        question: "Rust should always be completely removed before welding.",
        correctAnswer: "true",
        explanation:
          "Rust can cause porosity and weak welds, so it must be removed completely.",
        points: 15,
      },
      {
        id: "3",
        type: "drag-drop" as const,
        question: "Arrange these metal preparation steps in the correct order:",
        options: [
          "Apply primer",
          "Clean surface",
          "Remove rust",
          "Inspect for defects",
        ],
        correctAnswer: [
          "Clean surface",
          "Remove rust",
          "Inspect for defects",
          "Apply primer",
        ],
        explanation:
          "This sequence ensures proper preparation from cleaning to final coating.",
        points: 25,
      },
    ],
  },
};

export function LessonContent({ lessonId }: LessonContentProps) {
  const lesson = lessonData[lessonId as keyof typeof lessonData];
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [dragItems, setDragItems] = useState<string[]>([]);

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Link href="/dashboard/learning">
          <Button>Back to Learning Path</Button>
        </Link>
      </div>
    );
  }

  const currentQuestion = lesson.questions[currentStep];
  const progress = ((currentStep + 1) / lesson.totalSteps) * 100;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer && currentQuestion.type !== "drag-drop") return;

    const isCorrect =
      currentQuestion.type === "drag-drop"
        ? JSON.stringify(dragItems) ===
          JSON.stringify(currentQuestion.correctAnswer)
        : selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + currentQuestion.points);
    }

    setShowResult(true);
  };

  const handleNext = () => {
    if (currentStep < lesson.questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setDragItems([]);
    } else {
      // Lesson completed
      console.log("Lesson completed with score:", score);
    }
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "multiple-choice":
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option) => (
              <Button
                key={option}
                variant={selectedAnswer === option ? "default" : "outline"}
                className="w-full justify-start text-left h-auto p-4"
                onClick={() => handleAnswer(option)}
                disabled={showResult}
              >
                {option}
              </Button>
            ))}
          </div>
        );

      case "true-false":
        return (
          <div className="flex gap-4">
            <Button
              variant={selectedAnswer === "true" ? "default" : "outline"}
              className="flex-1"
              onClick={() => handleAnswer("true")}
              disabled={showResult}
            >
              True
            </Button>
            <Button
              variant={selectedAnswer === "false" ? "default" : "outline"}
              className="flex-1"
              onClick={() => handleAnswer("false")}
              disabled={showResult}
            >
              False
            </Button>
          </div>
        );

      case "drag-drop":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Available Items:</h4>
                <div className="space-y-2">
                  {currentQuestion.options
                    ?.filter((item) => !dragItems.includes(item))
                    .map((item) => (
                      <Button
                        key={item}
                        variant="outline"
                        className="w-full justify-start bg-transparent"
                        onClick={() => setDragItems([...dragItems, item])}
                        disabled={showResult}
                      >
                        {item}
                      </Button>
                    ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Correct Order:</h4>
                <div className="space-y-2">
                  {dragItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg bg-muted"
                    >
                      <span>{item}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setDragItems(dragItems.filter((_, i) => i !== index))
                        }
                        disabled={showResult}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/dashboard/learning">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Learning Path
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="font-medium">{score} XP</span>
          </div>
          <Badge variant="outline">
            Step {currentStep + 1} of {lesson.totalSteps}
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="mb-2" />
          <p className="text-muted-foreground">{lesson.description}</p>
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderQuestion()}

          {showResult && (
            <div
              className={cn(
                "p-4 rounded-lg border",
                (
                  currentQuestion.type === "drag-drop"
                    ? JSON.stringify(dragItems) ===
                      JSON.stringify(currentQuestion.correctAnswer)
                    : selectedAnswer === currentQuestion.correctAnswer
                )
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                {(
                  currentQuestion.type === "drag-drop"
                    ? JSON.stringify(dragItems) ===
                      JSON.stringify(currentQuestion.correctAnswer)
                    : selectedAnswer === currentQuestion.correctAnswer
                ) ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <X className="h-5 w-5 text-red-600" />
                )}
                <span className="font-medium">
                  {(
                    currentQuestion.type === "drag-drop"
                      ? JSON.stringify(dragItems) ===
                        JSON.stringify(currentQuestion.correctAnswer)
                      : selectedAnswer === currentQuestion.correctAnswer
                  )
                    ? "Correct!"
                    : "Incorrect"}
                </span>
              </div>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" disabled={currentStep === 0}>
              Previous
            </Button>
            {!showResult ? (
              <Button
                onClick={handleSubmit}
                disabled={
                  !selectedAnswer &&
                  (currentQuestion.type !== "drag-drop" ||
                    dragItems.length === 0)
                }
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentStep < lesson.questions.length - 1 ? (
                  <>
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Complete Lesson <Award className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
