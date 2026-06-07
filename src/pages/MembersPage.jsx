import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import MemberCard from "../components/cards/MemberCard";
import { advisor, projectLeader, teamMembers } from "../data/members";

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Members"
        title="The people guiding, leading, and building Feel To Heal AIU."
        description="This page now reflects the real project hierarchy, from advisor and project leader to the coordinators and technical support team helping the initiative grow."
      />
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:px-8 lg:px-10">
        <div>
          <SectionHeader
            eyebrow="Advisor"
            title="Academic guidance at the heart of the project"
            description="A featured card gives the project advisor a more premium and visible presentation."
          />
          <div className="mt-10">
            <MemberCard member={advisor} variant="featured" />
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Leadership"
            title="Project coordination and direction"
            description="The project leader is highlighted separately to reflect her central role in planning and implementation."
          />
          <div className="mt-10">
            <MemberCard member={projectLeader} variant="leader" />
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Core team"
            title="Coordinators and technical support"
            description="This grid presents the remaining team hierarchy clearly while keeping a calm green-and-cream visual language."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
