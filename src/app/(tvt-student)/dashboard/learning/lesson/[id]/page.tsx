import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { LessonContent } from "@/components/learning/lesson-content"

interface LessonPageProps {
  params: {
    id: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <DashboardLayout>
      <LessonContent lessonId={params.id} />
    </DashboardLayout>
  )
}
