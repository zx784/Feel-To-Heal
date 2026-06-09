import { ArrowRight, BrushCleaning, HeartHandshake, Recycle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import ActivityCard from "../components/cards/ActivityCard";
import LogoMark from "../components/ui/LogoMark";
import { activities } from "../data/activities";
import { siteInfo } from "../data/siteInfo";
import { assetPath } from "../utils/assetPath";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Reducing academic stress",
    description: "Creating space for students to pause, express emotions, and feel supported.",
  },
  {
    icon: Sparkles,
    title: "Encouraging self-expression",
    description: "Using painting as a gentle pathway for creativity, reflection, and confidence.",
  },
  {
    icon: BrushCleaning,
    title: "Building social connection",
    description: "Bringing students together through calm, creative, and welcoming sessions.",
  },
  {
    icon: Recycle,
    title: "Reusing glass materials",
    description: "Supporting AIU’s low-waste culture through responsible reuse and creative transformation.",
  },
];

const posterPreview = activities.map((activity) => ({
  slug: activity.slug,
  title: activity.category,
  image: activity.poster.image,
  alt: activity.poster.alt,
}));

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(247,201,182,0.38),_transparent_26%),linear-gradient(180deg,_#fffdf8_0%,_#f6fbf8_100%)]" />
        <div className="absolute -left-12 top-24 h-52 w-52 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute right-0 top-16 h-60 w-60 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-emerald-200 bg-white/90 px-5 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              Student-led wellbeing and social business project
            </div>
            <div className="space-y-6">
              <LogoMark size="md" />
              <div className="space-y-4">
                <h1 className="max-w-3xl text-balance font-heading text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                  Feel To Heal AIU
                </h1>
                <p className="max-w-2xl text-xl leading-8 text-emerald-800">{siteInfo.subtitle}</p>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">
                  A student-led wellbeing project helping AIU students reduce academic stress through painting, mentorship sharing, and social connection.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/activities"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Explore Activities
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-100/70 to-orange-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_90px_-45px_rgba(6,78,59,0.45)] backdrop-blur">
              <img
                src={assetPath("/assets/activities/workshop-1/WhatsApp Image 2026-06-07 at 5.24.01 PM.jpeg")}
                alt="Feel To Heal AIU participants sharing artwork outdoors"
                className="h-[520px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">What We Do</p>
                <div className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <span>Canvas Painting</span>
                  <span>Recycled Glass Painting</span>
                  <span>Guest Speaker Sharing</span>
                  <span>Student Wellbeing Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Why it matters"
          title="From stress to expression, students deserve room to breathe."
          description="Feel To Heal AIU offers more than activities. It creates a softer emotional pathway from pressure into creativity, encouragement, and human connection."
          titleClassName="lg:text-nowrap"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(6,78,59,0.35)]">
            <h3 className="font-heading text-2xl font-semibold text-slate-900">Why Feel To Heal Matters</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              University life can bring pressure, loneliness, and emotional fatigue. Feel To Heal AIU responds with creative sessions that help students reconnect with themselves and with one another in a welcoming setting.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Through painting, guest sharing, and responsible reuse of materials, the project turns stress relief into a meaningful campus culture experience.
            </p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {posterPreview.map((poster) => (
              <Link
                key={poster.slug}
                to={`/activities/${poster.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/95 p-4 shadow-[0_20px_55px_-35px_rgba(6,78,59,0.35)] transition hover:-translate-y-1"
              >
                <img
                  src={poster.image}
                  alt={poster.alt}
                  loading="lazy"
                  className="h-56 w-full rounded-[1.25rem] object-contain bg-gradient-to-br from-white to-emerald-50 p-2 transition group-hover:scale-[1.02]"
                />
                <p className="mt-4 text-sm font-semibold text-slate-900">{poster.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent sm:inset-x-8 lg:inset-x-10" />
        <SectionHeader
          eyebrow="Project impact"
          title="A calm, creative model for student wellbeing."
          description="Feel To Heal AIU blends art, peer connection, and sustainability into a student experience that feels restorative, social, and meaningful."
          titleClassName="lg:text-nowrap"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Icon size={26} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-[linear-gradient(180deg,_rgba(255,255,255,0.72)_0%,_rgba(237,248,241,0.95)_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Featured activities"
            title="Curated highlights from the Feel To Heal journey."
            description="Featured cards now mix real posters and event photos to make the project feel more visual, polished, and memorable."
            titleClassName="lg:text-nowrap"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {activities.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-8 py-10 text-white shadow-[0_35px_90px_-50px_rgba(6,78,59,0.55)] lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
              3ZERO alignment
            </span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Supporting affordable wellbeing, leadership growth, and responsible reuse.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Feel To Heal AIU supports affordable student wellbeing activities, practical teamwork and communication experience, and low-waste campus culture through creative reuse of bottles and jars.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Zero Poverty", "Affordable and accessible creative wellbeing sessions."],
              ["Zero Unemployment", "Leadership, planning, teamwork, and event coordination experience."],
              ["Zero Net Carbon", "Reusing glass bottles and jars in creative student activities."],
            ].map(([label, text]) => (
              <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5">
                <h3 className="font-heading text-lg font-semibold">{label}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
