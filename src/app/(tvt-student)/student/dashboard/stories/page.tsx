import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { StoriesHero } from "@/app/(tvt-student)/_components/stories/stories-hero";
import { StoriesFilter } from "@/app/(tvt-student)/_components/stories/stories-filter";
import { StoriesGrid } from "@/app/(tvt-student)/_components/stories/stories-grid";
import { FeaturedStory } from "@/app/(tvt-student)/_components/stories/featured-story";

export default function StoriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <StoriesHero />
        <FeaturedStory />
        <StoriesFilter />
        <StoriesGrid />
      </div>
    </DashboardLayout>
  );
}
