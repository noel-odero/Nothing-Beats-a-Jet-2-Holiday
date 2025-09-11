"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(tvt-student)/_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/(tvt-student)/_components/ui/tabs";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Progress } from "@/app/(tvt-student)/_components/ui/progress";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(tvt-student)/_components/ui/avatar";
import {
  Award,
  Download,
  QrCode,
  Trophy,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

export function ProfileHub() {
  const [activeTab, setActiveTab] = useState("credentials");

  const credentials = [
    {
      title: "Basic Welding Safety",
      type: "Certificate",
      date: "2024-01-15",
      status: "completed",
      icon: CheckCircle,
    },
    {
      title: "Arc Welding Fundamentals",
      type: "Badge",
      date: "2024-02-20",
      status: "completed",
      icon: Award,
    },
    {
      title: "Metal Preparation",
      type: "Badge",
      date: "2024-03-10",
      status: "completed",
      icon: Award,
    },
    {
      title: "Advanced Techniques",
      type: "Certificate",
      date: "In Progress",
      status: "in-progress",
      icon: Clock,
    },
  ];

  const skills = [
    { name: "Arc Welding", level: 85, category: "Core" },
    { name: "Safety Protocols", level: 95, category: "Essential" },
    { name: "Metal Preparation", level: 78, category: "Core" },
    { name: "Quality Control", level: 65, category: "Advanced" },
    { name: "Blueprint Reading", level: 72, category: "Technical" },
    { name: "Equipment Maintenance", level: 58, category: "Technical" },
  ];

  const rankings = [
    { rank: 1, name: "Sarah Johnson", score: 2450, avatar: "SJ" },
    { rank: 2, name: "Mike Chen", score: 2380, avatar: "MC" },
    { rank: 3, name: "Alex Rivera", score: 2320, avatar: "AR" },
    {
      rank: 15,
      name: "John Doe (You)",
      score: 1890,
      avatar: "JD",
      isCurrentUser: true,
    },
  ];

  return (
    <Card className="border border-white/10 bg-white/5 ">
      <CardHeader>
        <CardTitle className="flex text-white text-sm font-medium items-center gap-2">
          My Skills Passport
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="credentials">Credentials</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cv">CV</TabsTrigger>
            <TabsTrigger value="ranking">Ranking</TabsTrigger>
          </TabsList>

          <TabsContent value="credentials" className="space-y-4">
            <div className="grid gap-3">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <credential.icon
                      className={`h-5 w-5 ${
                        credential.status === "completed"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{credential.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {credential.type} • {credential.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      credential.status === "completed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {credential.status === "completed"
                      ? "Earned"
                      : "In Progress"}
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cv" className="space-y-4">
            <div className="text-center space-y-4">
              <div className="p-6 border-2 border-dashed border-border rounded-lg">
                <QrCode className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">Digital Skills CV</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your auto-generated CV with verified badges and skills
                </p>
                <div className="flex gap-2 justify-center">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline">
                    <QrCode className="h-4 w-4 mr-2" />
                    QR Code
                  </Button>
                </div>
              </div>
              <div className="text-left space-y-2">
                <h4 className="font-medium">CV Includes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Verified certificates and badges</li>
                  <li>• Skills competency levels</li>
                  <li>• Learning progress timeline</li>
                  <li>• QR code for employer verification</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ranking" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Welding Technology Program</h4>
                <Badge variant="outline">
                  <Users className="h-3 w-3 mr-1" />
                  156 students
                </Badge>
              </div>
              {rankings.map((student) => (
                <div
                  key={student.rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    student.isCurrentUser
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                        student.rank <= 3
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {student.rank <= 3 ? (
                        <Trophy className="h-4 w-4" />
                      ) : (
                        student.rank
                      )}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{student.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p
                        className={`font-medium ${
                          student.isCurrentUser ? "text-primary" : ""
                        }`}
                      >
                        {student.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        #{student.rank}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{student.score}</p>
                    <p className="text-sm text-muted-foreground">XP</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
