import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import EventCard from "../components/cards/EventCard";
import { events } from "../data/events";
import { activitiesBySlug } from "../data/activities";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="An official event timeline that stays clean and easy to follow."
        description="This page lists all official Feel To Heal AIU events in sequence and links each one to the same detail page used in the activities section, avoiding duplicated content."
        contentClassName="max-w-5xl"
        titleClassName="lg:text-nowrap"
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Timeline"
          title="All official project events in one place"
          description="Activities provide the full workshop showcase. Events provides the official project timeline and routes visitors back to those shared detail pages."
        />
        <div className="mt-10 space-y-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} activity={activitiesBySlug[event.slug]} />
          ))}
        </div>
      </section>
    </>
  );
}
