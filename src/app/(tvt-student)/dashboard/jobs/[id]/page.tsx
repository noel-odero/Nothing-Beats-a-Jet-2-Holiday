import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { JobDetails } from "@/components/jobs/job-details"

interface JobPageProps {
  params: {
    id: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  return (
    <DashboardLayout>
      <JobDetails jobId={params.id} />
    </DashboardLayout>
  )
}
