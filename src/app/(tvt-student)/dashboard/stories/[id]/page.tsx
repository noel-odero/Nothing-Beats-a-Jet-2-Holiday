import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { StoryDetails } from "@/app/(tvt-student)/_components/stories/story-details";

interface StoryPageProps {
  params: {
    id: string;
  };
}

export default function StoryPage({ params }: StoryPageProps) {
  return (
    <DashboardLayout>
      <StoryDetails storyId={params.id} />
    </DashboardLayout>
  );
}
