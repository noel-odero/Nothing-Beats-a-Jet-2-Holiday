import { Card, CardContent } from "@/app/(tvt-student)/_components/ui/card";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import { Trophy, Users, TrendingUp } from "lucide-react";

export function StoriesHero() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Success Stories</h1>
        <p className="text-muted-foreground">
          Get inspired by fellow TVET graduates who turned their skills into
          successful careers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">500+</div>
            <p className="text-sm text-muted-foreground">Success Stories</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-chart-2 mx-auto mb-2" />
            <div className="text-2xl font-bold">15</div>
            <p className="text-sm text-muted-foreground">TVET Programs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">85%</div>
            <p className="text-sm text-muted-foreground">Employment Rate</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Personalized for You
            </Badge>
          </div>
          <p className="text-sm">
            Since you're studying <strong>Welding Technology</strong>, we've
            curated stories from successful welders and related fields to
            inspire your journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
