import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { LearningPath } from "@/app/(tvt-student)/_components/learning/learning-path";
import { LearningStats } from "@/app/(tvt-student)/_components/learning/learning-stats";

export default function LearningPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Learning Path</h1>
          <p className="text-muted-foreground">
            Master welding skills through interactive lessons
          </p>
        </div>

        <LearningStats />
        <LearningPath />
      </div>
    </DashboardLayout>
  );
}
