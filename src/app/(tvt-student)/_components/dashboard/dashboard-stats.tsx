import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import { Progress } from "@/app/(tvt-student)/_components/ui/progress";
import { Award, BookOpen, Target, TrendingUp } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Learning Progress",
      value: "68%",
      description: "Main Course completion",
      icon: BookOpen,
      progress: 68,
      color: "text-primary",
    },
    {
      title: "Badges Earned",
      value: "12",
      description: "Total achievements",
      icon: Award,
      color: "text-accent",
    },
    {
      title: "Skills Mastered",
      value: "8",
      description: "Core competencies",
      icon: Target,
      color: "text-chart-2",
    },
    {
      title: "Ranking",
      value: "#15",
      description: "In your program",
      icon: TrendingUp,
      color: "text-chart-4",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            {stat.progress && (
              <Progress value={stat.progress} className="mt-2" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
