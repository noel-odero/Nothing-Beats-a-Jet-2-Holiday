import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { JobSearch } from "@/app/(tvt-student)/_components/jobs/job-search";
import { JobList } from "@/app/(tvt-student)/_components/jobs/job-list";
import { JobStats } from "@/app/(tvt-student)/_components/jobs/job-stats";

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Job Opportunities</h1>
          <p className="text-muted-foreground">
            Find internships and jobs that match your skills
          </p>
        </div>

        {/* <JobStats /> */}
        <JobSearch />
        <JobList />
      </div>
    </DashboardLayout>
  );
}
