import { DashboardLayout } from "../_components/dashboard/dashboard-layout";
import { ProfileHub } from "@/app/(tvt-student)/_components/dashboard/profile-hub";
import { DashboardStats } from "@/app/(tvt-student)/_components/dashboard/dashboard-stats";
import { RecentActivity } from "@/app/(tvt-student)/_components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Continue your learning journey in Welding Technology
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProfileHub />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
