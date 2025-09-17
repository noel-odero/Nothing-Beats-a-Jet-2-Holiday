"use client";

import Link from "next/link";
import { mockCertificates } from "./data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Clock, Download, Eye, User } from "lucide-react";

export default function CertificatesPage() {
  const completedCertificates = mockCertificates.filter(
    (cert) => cert.status === "completed"
  );
  const inProgressCertificates = mockCertificates.filter(
    (cert) => cert.status === "in-progress"
  );

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            My Certificates
          </h1>
          <p className="mt-2 text-muted-foreground">
            View and download your earned certificates and track your learning
            progress.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Completed
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {completedCertificates.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    In Progress
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {inProgressCertificates.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Hours
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {completedCertificates.reduce((total, cert) => {
                      const hours = parseInt(cert.lengthHours.split(" ")[0]);
                      return total + hours;
                    }, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Latest
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {completedCertificates.length > 0
                      ? new Date(
                          completedCertificates[
                            completedCertificates.length - 1
                          ].completedAt
                        ).toLocaleDateString()
                      : "None yet"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Completed Certificates */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Completed Certificates
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {completedCertificates.map((certificate) => (
              <Card
                key={certificate.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Completed
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {certificate.certificateNo.split("-")[1]?.substring(0, 8)}
                      ...
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {certificate.courseTitle}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-4 text-xs">
                    <span className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{certificate.instructors}</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Completed</span>
                      </span>
                      <span>{certificate.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Duration</span>
                      </span>
                      <span>{certificate.lengthHours}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/student/certificates/${certificate.id}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Link
                        href={`/student/certificates/${certificate.id}?download=true`}
                      >
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* In Progress Certificates */}
        {inProgressCertificates.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              In Progress
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inProgressCertificates.map((certificate) => (
                <Card key={certificate.id} className="opacity-75">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge
                        variant="outline"
                        className="border-blue-200 text-blue-800"
                      >
                        In Progress
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {certificate.courseTitle}
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-xs">
                      <span className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{certificate.instructors}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>Duration</span>
                        </span>
                        <span>{certificate.lengthHours}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button disabled size="sm" className="w-full">
                        Complete course to unlock certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {completedCertificates.length === 0 &&
          inProgressCertificates.length === 0 && (
            <Card className="p-8 text-center">
              <Award className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No certificates yet
              </h3>
              <p className="mt-2 text-muted-foreground">
                Complete your first course to earn your first certificate!
              </p>
              <Button asChild className="mt-4">
                <Link href="/student/dashboard">Browse Courses</Link>
              </Button>
            </Card>
          )}
      </div>
    </div>
  );
}
