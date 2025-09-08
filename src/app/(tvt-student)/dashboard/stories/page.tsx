import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StoriesHero } from "@/components/stories/stories-hero"
import { StoriesFilter } from "@/components/stories/stories-filter"
import { StoriesGrid } from "@/components/stories/stories-grid"
import { FeaturedStory } from "@/components/stories/featured-story"

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
  )
}
