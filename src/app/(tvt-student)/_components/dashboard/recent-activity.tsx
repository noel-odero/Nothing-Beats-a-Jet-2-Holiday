import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import { BookOpen, Award, Users, TrendingUp, Clock } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      type: "achievement",
      title: "Earned Metal Preparation Badge",
      time: "2 hours ago",
      icon: Award,
      color: "text-primary",
    },
    {
      type: "learning",
      title: "Completed Arc Welding Module 3",
      time: "1 day ago",
      icon: BookOpen,
      color: "text-chart-2",
    },
    {
      type: "ranking",
      title: "Moved up 3 positions in ranking",
      time: "2 days ago",
      icon: TrendingUp,
      color: "text-chart-4",
    },
    {
      type: "social",
      title: "New student joined your program",
      time: "3 days ago",
      icon: Users,
      color: "text-muted-foreground",
    },
    {
      type: "reminder",
      title: "Assignment due tomorrow",
      time: "1 week ago",
      icon: Clock,
      color: "text-destructive",
    },
  ];

  const upcomingEvents = [
    {
      title: "Practical Welding Assessment",
      date: "Tomorrow, 9:00 AM",
      type: "Assessment",
    },
    {
      title: "Safety Workshop",
      date: "Friday, 2:00 PM",
      type: "Workshop",
    },
    {
      title: "Industry Visit - Local Factory",
      date: "Next Monday",
      type: "Field Trip",
    },
  ];

  return (
    <div className="space-y-6">
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div>
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {event.type}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
