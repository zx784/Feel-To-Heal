export default function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={`space-y-4 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
