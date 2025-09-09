import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import { Briefcase, MapPin, Users, TrendingUp } from "lucide-react";

export function JobStats() {
  const stats = [
    {
      title: "Available Jobs",
      value: "127",
      description: "In your area",
      icon: Briefcase,
      color: "text-primary",
    },
    {
      title: "Skill Matches",
      value: "23",
      description: "Perfect fit for you",
      icon: TrendingUp,
      color: "text-chart-2",
    },
    {
      title: "Applications Sent",
      value: "5",
      description: "This month",
      icon: Users,
      color: "text-chart-4",
    },
    {
      title: "Interview Requests",
      value: "2",
      description: "Pending response",
      icon: MapPin,
      color: "text-accent",
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
