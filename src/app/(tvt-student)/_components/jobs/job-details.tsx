'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/(tvt-student)/_components/ui/card';
import { Button } from '@/app/(tvt-student)/_components/ui/button';
import { Badge } from '@/app/(tvt-student)/_components/ui/badge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/(tvt-student)/_components/ui/avatar';
import { Separator } from '@/app/(tvt-student)/_components/ui/separator';
import { Progress } from '@/app/(tvt-student)/_components/ui/progress';
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  Bookmark,
  Building,
  CheckCircle,
  AlertCircle,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface JobDetailsProps {
  jobId: string;
}

const jobData = {
  '1': {
    id: '1',
    title: 'Junior Welder',
    company: 'SteelCorp Manufacturing',
    location: 'Industrial District, City',
    type: 'Full Time',
    salary: '$45,000 - $55,000',
    postedDate: '2 days ago',
    description:
      "Join our team as a Junior Welder. Perfect opportunity for recent TVET graduates to apply their welding skills in a professional environment. You'll work on various projects including structural welding, fabrication, and repair work.",
    requirements: [
      'TVET certification in Welding Technology',
      'Proficiency in Arc Welding techniques',
      'Knowledge of safety protocols and procedures',
      'Ability to read and interpret blueprints',
      'Physical stamina and attention to detail',
      'Willingness to work in industrial environments',
    ],
    responsibilities: [
      'Perform arc welding on various metal components',
      'Follow safety protocols and maintain clean work environment',
      'Inspect welded joints for quality and compliance',
      'Collaborate with team members on project completion',
      'Maintain welding equipment and tools',
      'Document work progress and report issues',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health and dental insurance coverage',
      'Professional development opportunities',
      'Safety equipment and training provided',
      'Career advancement pathways',
      'Retirement savings plan',
    ],
    requiredSkills: [
      'Arc Welding',
      'Safety Protocols',
      'Metal Preparation',
      'Blueprint Reading',
    ],
    matchPercentage: 95,
    applicants: 12,
    isBookmarked: false,
    companyLogo: '/company-logo-1.png',
    companyInfo: {
      name: 'SteelCorp Manufacturing',
      size: '500-1000 employees',
      industry: 'Manufacturing',
      founded: '1985',
      description:
        'Leading manufacturer of steel components for construction and industrial applications.',
    },
  },
};

export function JobDetails({ jobId }: JobDetailsProps) {
  const [isApplying, setIsApplying] = useState(false);
  const job = jobData[jobId as keyof typeof jobData];

  if (!job) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-2xl font-bold mb-4">Job not found</h2>
        <Link href="/student/dashboard/jobs">
          <Button>Back to Jobs</Button>
        </Link>
      </div>
    );
  }

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const handleApply = () => {
    setIsApplying(true);
    // Simulate application process
    setTimeout(() => {
      setIsApplying(false);
      // Show success message or redirect
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/student/dashboard/jobs">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save Job
          </Button>
          <Button onClick={handleApply} disabled={isApplying}>
            {isApplying ? 'Applying...' : 'Apply Now'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={job.companyLogo || '/placeholder.svg'} />
                  <AvatarFallback>
                    {job.company.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-2xl text-foreground font-bold">
                    {job.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">{job.company}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {job.applicants} applicants
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-muted-foreground">
                    <Badge variant="secondary">{job.type}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Job Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{job.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Skills Match */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground text-lg">
                Skills Match
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl text-foreground font-bold">
                  {job.matchPercentage}%
                </div>
                <p className="text-sm text-muted-foreground">Overall Match</p>
              </div>
              <Progress value={job.matchPercentage} className="h-2" />
              <div className="space-y-2">
                {job.requiredSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between text-sm text-muted-foreground"
                  >
                    <span>{skill}</span>
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground text-lg flex items-center gap-2">
                <Building className="h-5 w-5" />
                About Company
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">
                  {job.companyInfo.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {job.companyInfo.description}
                </p>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground">Industry:</span>
                  <span className="text-muted-foreground">
                    {job.companyInfo.industry}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Company Size:</span>
                  <span className="text-muted-foreground">
                    {job.companyInfo.size}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Founded:</span>
                  <span className="text-muted-foreground">
                    {job.companyInfo.founded}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Apply */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quick Apply
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Apply with your Skills CV that includes verified badges and
                competencies.
              </p>
              <Button
                variant="secondary"
                onClick={handleApply}
                className="w-full"
                disabled={isApplying}
              >
                {isApplying
                  ? 'Submitting Application...'
                  : 'Apply with Skills CV'}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your application will include your verified skills and
                achievements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
