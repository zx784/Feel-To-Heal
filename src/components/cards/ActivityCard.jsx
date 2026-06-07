import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActivityCard({ activity }) {
  const previewImage = activity.cardImage || activity.heroImage;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_25px_70px_-40px_rgba(6,78,59,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(6,78,59,0.45)]">
      <div className="relative h-72 overflow-hidden bg-emerald-100">
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${activity.title} preview`}
            className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
              activity.cardImage ? "object-contain bg-gradient-to-br from-white to-emerald-50 p-4" : "object-cover"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-100 to-orange-100 p-6 text-center text-sm font-medium text-slate-600">
            Official visuals will be added here once available.
          </div>
        )}
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
          {activity.category}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-semibold text-slate-900">{activity.title}</h3>
          <p className="text-sm text-slate-500">
            {activity.date} • {activity.venue}
          </p>
        </div>
        <p className="text-sm leading-7 text-slate-600">{activity.shortDescription}</p>
        <Link
          to={`/activities/${activity.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:gap-3"
        >
          Explore details
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
