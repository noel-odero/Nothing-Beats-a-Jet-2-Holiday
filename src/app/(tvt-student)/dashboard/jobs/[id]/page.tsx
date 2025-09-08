import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { JobDetails } from "@/app/(tvt-student)/_components/jobs/job-details";

interface JobPageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: JobPageProps) {
  return (
    <DashboardLayout>
      <JobDetails jobId={params.id} />
    </DashboardLayout>
  );
}
