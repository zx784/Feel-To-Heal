import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventCard({ event, activity }) {
  return (
    <article className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {event.label}
        </span>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
          Official event
        </span>
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="font-heading text-2xl font-semibold text-slate-900">{event.title}</h3>
        <div className="flex flex-col gap-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} className="text-emerald-700" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-emerald-700" />
            {event.venue}
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-600">{activity.shortDescription}</p>
        <Link
          to={`/activities/${event.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View shared detail page
        </Link>
      </div>
    </article>
  );
}
