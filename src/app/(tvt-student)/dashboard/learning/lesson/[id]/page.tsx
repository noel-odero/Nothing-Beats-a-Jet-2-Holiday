import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { LessonContent } from "@/app/(tvt-student)/_components/learning/lesson-content";

interface LessonPageProps {
  params: {
    id: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <DashboardLayout>
      <LessonContent lessonId={params.id} />
    </DashboardLayout>
  );
}
