import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import SpeakerCard from "../components/cards/SpeakerCard";
import { speakers } from "../data/speakers";

export default function GuestSpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Guest Speakers"
        title="Voices of encouragement, mentorship, and shared perspective."
        description="Feel To Heal AIU includes guest speaker participation to strengthen reflection, confidence, and healthier conversations around student life."
        contentClassName="max-w-5xl"
        titleClassName="lg:text-nowrap"
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Profiles"
          title="Approved guest speakers and emcee"
          description="This page presents the approved public-facing people associated with Feel To Heal AIU sessions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
    </>
  );
}
