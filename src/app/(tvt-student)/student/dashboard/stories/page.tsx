import { DashboardLayout } from "@/app/(tvt-student)/_components/dashboard/dashboard-layout";
import { StoriesHero } from "@/app/(tvt-student)/_components/stories/stories-hero";
import { StoriesFilter } from "@/app/(tvt-student)/_components/stories/stories-filter";
import { StoriesGrid } from "@/app/(tvt-student)/_components/stories/stories-grid";
import { FeaturedStory } from "@/app/(tvt-student)/_components/stories/featured-story";

export default function StoriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="mb-8">
          <StoriesHero />
        </section>

        <section className="mb-8">
          <FeaturedStory />
        </section>

        <section className="mb-8">
          <div className="bg-white border-slate-200 shadow-sm rounded-lg p-6">
            <StoriesFilter />
            <div className="mt-6">
              <StoriesGrid />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
