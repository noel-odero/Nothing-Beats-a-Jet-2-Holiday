import { Card, CardContent } from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(tvt-student)/_components/ui/avatar";
import { Quote, ArrowRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export function FeaturedStory() {
  const featuredStory = {
    id: "featured-1",
    name: "Maria Santos",
    title: "Senior Welding Supervisor",
    company: "Aerospace Manufacturing Corp",
    program: "Welding Technology",
    graduationYear: "2019",
    location: "Metro City",
    avatar: "/maria-avatar.jpg",
    quote:
      "TVET gave me the practical skills I needed, but more importantly, it gave me confidence. Today, I lead a team of 15 welders on critical aerospace projects.",
    achievement: "Promoted 3 times in 5 years",
    salary: "$75,000/year",
    image: "/featured-story-bg.jpg",
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div
          className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredStory.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/20 text-white border-white/30">
              Featured Story
            </Badge>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={featuredStory.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {featuredStory.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{featuredStory.name}</h3>
            <p className="text-muted-foreground">{featuredStory.title}</p>
            <p className="text-sm text-muted-foreground">
              {featuredStory.company}
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {featuredStory.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Class of {featuredStory.graduationYear}
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="mb-2">
              {featuredStory.program}
            </Badge>
            <p className="text-sm font-medium text-primary">
              {featuredStory.salary}
            </p>
            <p className="text-xs text-muted-foreground">
              {featuredStory.achievement}
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg relative">
          <Quote className="h-6 w-6 text-primary/40 absolute top-2 left-2" />
          <p className="text-sm italic pl-8">{featuredStory.quote}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              Leadership
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Career Growth
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Aerospace
            </Badge>
          </div>
          <Link href={`/student/dashboard/stories/${featuredStory.id}`}>
            <Button>
              Read Full Story <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
