import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { assetPath } from "../utils/assetPath";

const objectives = [
  "Conduct affordable creative wellbeing sessions at AIU.",
  "Support students’ emotional wellbeing, self-expression, and social connection.",
  "Contribute to Zero Net Carbon by reusing glass bottles and jars collected from AIU students and staff.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Feel To Heal AIU"
        title="A student-led response to pressure, stress, and the need for meaningful connection."
        description="Feel To Heal AIU creates a simple creative space where students can paint, talk, relax, and receive encouragement through guest sharing sessions."
      />

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="Background"
              title="Why this project exists"
              description="University students may experience academic pressure, stress, loneliness, and limited opportunities for affordable relaxation."
            />
            <p className="text-base leading-8 text-slate-600">
              Feel To Heal AIU responds by building a warm, creative environment where students can slow down, express themselves through painting, and strengthen social bonds in a supportive setting. The website presents that story in a clean, professional format suitable for students, lecturers, visitors, and evaluators.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_90px_-45px_rgba(6,78,59,0.35)]">
            <img
              src={assetPath("/assets/activities/opening-ceremony/WhatsApp Image 2026-06-07 at 5.16.29 PM.jpeg")}
              alt="Feel To Heal AIU opening ceremony group photo"
              className="h-full min-h-[360px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-900">Mission</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              To create an affordable and supportive creative space for AIU students to express emotions, relieve stress, and build meaningful social connections through art, while contributing to the 3ZERO goal of Zero Net Carbon by transforming reusable glass into creative materials and encouraging sustainable campus practices.
            </p>
          </article>
          <article className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-900">Vision</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              To develop Feel To Heal AIU into a continuing campus wellbeing initiative that uses creative art and recycled materials to support students’ emotional wellness, strengthen social connection, and contribute to AIU’s low-waste culture.
            </p>
          </article>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/80 p-8">
            <h2 className="font-heading text-2xl font-semibold text-slate-900">Objectives</h2>
            <ol className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              {objectives.map((objective, index) => (
                <li key={objective} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-semibold text-emerald-700 shadow-sm">
                    {index + 1}
                  </span>
                  <span>{objective}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.25)]">
            <h2 className="font-heading text-2xl font-semibold text-slate-900">3ZERO and SCI collaboration</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Zero Poverty", "Affordable wellbeing activities designed to stay student-friendly."],
                ["Zero Unemployment", "Real experience in teamwork, leadership, communication, and event planning."],
                ["Zero Net Carbon", "Creative reuse of glass bottles and jars to support a low-waste campus culture."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[1.5rem] border border-white bg-white/90 p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              A dedicated SCI collaboration note can be expanded here further if formal wording, partner details, or branding assets are provided later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
