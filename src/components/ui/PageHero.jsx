export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.14),_transparent_38%),linear-gradient(180deg,_#fffdf8_0%,_#f7fbf8_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl space-y-5">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm">
            {eyebrow}
          </span>
          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="text-pretty text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
