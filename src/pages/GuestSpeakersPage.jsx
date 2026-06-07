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
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Profiles"
          title="Official opening ceremony speakers and emcee"
          description="This page presents the public-facing speaker lineup from the opening ceremony."
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
