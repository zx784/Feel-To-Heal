import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import ActivityCard from "../components/cards/ActivityCard";
import { activities } from "../data/activities";

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="A curated overview of workshops and creative wellbeing moments."
        description="This section presents each Feel To Heal AIU activity in full, with dedicated detail pages and a clean visual summary rather than a crowded image gallery."
        contentClassName="max-w-5xl"
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Overview"
          title="From launch event to workshop sessions"
          description="Each card below links to a dedicated detail page with official information, curated photos, and space for future poster or speaker updates."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </section>
    </>
  );
}
