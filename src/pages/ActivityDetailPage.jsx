import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, MapPin, Wallet, UserRound, Sparkles } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import ImagePreviewGrid from "../components/ui/ImagePreviewGrid";
import { activitiesBySlug } from "../data/activities";
import { speakers } from "../data/speakers";

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-emerald-100 bg-white/95 p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
          <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default function ActivityDetailPage() {
  const { slug } = useParams();
  const activity = activitiesBySlug[slug];

  const relatedSpeakers = useMemo(
    () => speakers.filter((speaker) => activity?.speakers.includes(speaker.id)),
    [activity],
  );

  if (!activity) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="font-heading text-4xl font-semibold text-slate-900">Activity not found</h1>
        <p className="mt-4 text-slate-600">The requested activity page is not available.</p>
        <Link
          to="/activities"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Return to activities
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={activity.category}
        title={activity.title}
        description={activity.identityLine}
        contentClassName="max-w-5xl"
        titleClassName="lg:text-nowrap"
      />
      <section className="mx-auto max-w-7xl space-y-16 px-6 py-16 sm:px-8 lg:px-10">
        <Link
          to="/activities"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-700"
        >
          <ArrowLeft size={16} />
          Back to activities
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-3 shadow-[0_35px_90px_-45px_rgba(6,78,59,0.35)]">
              {activity.heroImage ? (
                <img
                  src={activity.heroImage}
                  alt={`${activity.title} hero`}
                  className="h-[420px] w-full rounded-[2rem] object-cover"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-50 to-orange-50 text-center text-slate-600">
                  Official event visuals will be added here once available.
                </div>
              )}
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
              <h2 className="font-heading text-2xl font-semibold text-slate-900">Short description</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{activity.description}</p>
            </div>
            <div className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
              <h2 className="font-heading text-2xl font-semibold text-slate-900">What participants experienced</h2>
              <ul className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                {activity.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {activity.emcee ? (
                <div className="mt-8 rounded-[1.5rem] bg-emerald-50 px-5 py-4 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Emcee:</span> {activity.emcee}
                </div>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <MetaItem icon={CalendarDays} label="Date" value={activity.date} />
              <MetaItem icon={Clock3} label="Time" value={activity.time} />
              <MetaItem icon={MapPin} label="Venue" value={activity.venue} />
              <MetaItem icon={Wallet} label="Fee" value={activity.fee} />
              <MetaItem icon={UserRound} label="Organizer" value={activity.organizer} />
              <MetaItem icon={Sparkles} label="Theme" value={activity.theme} />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-4 shadow-[0_22px_60px_-38px_rgba(6,78,59,0.35)]">
              <img
                src={activity.poster.image}
                alt={activity.poster.alt}
                className="w-full rounded-[1.5rem] object-contain bg-gradient-to-br from-white to-emerald-50"
              />
            </div>

            {relatedSpeakers.length ? (
              <div className="rounded-[2rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
                <h2 className="font-heading text-2xl font-semibold text-slate-900">Speakers</h2>
                <div className="mt-5 space-y-4">
                  {relatedSpeakers.map((speaker) => (
                    <div key={speaker.id} className="rounded-[1.5rem] bg-slate-50 p-4">
                      <h3 className="font-semibold text-slate-900">{speaker.name}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-semibold text-slate-900">Curated photo highlights</h2>
          <ImagePreviewGrid images={activity.gallery} title={activity.title} />
        </div>
      </section>
    </>
  );
}
