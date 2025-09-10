"use client";

import { Star, Lock, CheckCircle, Play } from "lucide-react";
import { Button } from "../ui/button";

interface LessonNodeProps {
  status: "completed" | "current" | "locked";
  position: "left" | "right" | "center";
  icon?: React.ReactNode;
  title?: string;
  isStart?: boolean;
  isJumpNode?: boolean;
}

import { useRouter } from "next/navigation";

export function LessonNode({
  status,
  position,
  icon,
  title,
  isStart = false,
  isJumpNode = false,
  lessonId,
}: LessonNodeProps & { lessonId?: string }) {
  const router = useRouter();

  const handleClick = () => {
    if (status === "locked") return;
    if (isJumpNode) {
      // Navigate to advanced section
      router.push("/student/dashboard/learning/advanced");
      return;
    }
    // Navigate to specific lesson
    router.push(`/student/dashboard/learning/lesson/${lessonId || "intro"}`);
  };
  const getNodeStyles = () => {
    if (isStart) {
      return "bg-primary text-white";
    }
    if (isJumpNode) {
      return "bg-accent text-accent-foreground";
    }
    switch (status) {
      case "completed":
        return "bg-chart-2 text-white";
      case "current":
        return "bg-white border-4 border-primary text-primary";
      case "locked":
        return "bg-muted text-muted-foreground";
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case "left":
        return "-ml-20";
      case "right":
        return "ml-20";
      default:
        return "";
    }
  };

  return (
    <div className={`mb-6 ${getPositionStyles()}`}>
      <div className="text-center">
        {isStart && <div className="text-white font-bold mb-2">START</div>}
        <div
          onClick={handleClick}
          className={`w-[72px] h-[72px] ${getNodeStyles()} rounded-full flex items-center justify-center ${
            status !== "locked" ? "cursor-pointer" : "cursor-not-allowed"
          } hover:bg-opacity-90 transition-colors shadow-lg`}
        >
          {status !== "locked" ? (
            icon
          ) : (
            <Lock className="text-white/80 w-8 h-8" />
          )}
        </div>
        {title && (
          <div
            className={`mt-2 text-sm ${
              status === "locked"
                ? "text-muted-foreground"
                : "text-white/80 font-medium"
            }`}
          >
            {title}
          </div>
        )}
        {isJumpNode && (
          <>
            <Button variant="secondary" className="mt-4 mb-2">
              JUMP HERE?
            </Button>
            <div className="w-[72px] h-[72px] mx-auto bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-colors shadow-lg">
              <Play className="w-8 h-8 text-accent-foreground ml-1" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
