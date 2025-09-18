import { DashboardLayout } from '@/app/(tvt-student)/_components/dashboard/dashboard-layout';
import { LearningPath } from '@/app/(tvt-student)/_components/learning/learning-path';
import { LearningStats } from '@/app/(tvt-student)/_components/learning/learning-stats';

export default function LearningPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1 text-foreground">
                Learning Path
              </h1>
              <p className="text-muted-foreground">
                Master welding skills through interactive lessons
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row mb-8">
          <div className="flex-3">
            <LearningPath />
          </div>
          <div className="flex-1">
            <LearningStats />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
