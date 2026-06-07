function InitialsAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-orange-100 text-3xl font-semibold text-emerald-700">
      {initials}
    </div>
  );
}

export default function MemberCard({ member, variant = "standard" }) {
  const imageHeight =
    variant === "featured" ? "h-96 lg:h-full" : variant === "leader" ? "h-96" : "h-80";
  const wrapperClass =
    variant === "featured"
      ? "grid gap-8 overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/95 p-4 shadow-[0_32px_90px_-45px_rgba(6,78,59,0.38)] lg:grid-cols-[0.8fr_1.2fr]"
      : variant === "leader"
        ? "grid gap-8 overflow-hidden rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/70 p-4 shadow-[0_28px_75px_-40px_rgba(6,78,59,0.4)] lg:grid-cols-[0.85fr_1.15fr]"
        : "overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 shadow-[0_24px_60px_-40px_rgba(6,78,59,0.35)] transition hover:-translate-y-1";

  return (
    <article className={wrapperClass}>
      <div className={`${imageHeight} overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-50 to-orange-50`}>
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <InitialsAvatar name={member.name} />
        )}
      </div>
      <div className={`space-y-4 ${variant === "standard" ? "p-6" : "self-center px-2 py-4 lg:pr-8"}`}>
        {member.badge ? (
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {member.badge}
          </span>
        ) : null}
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-semibold text-slate-900 sm:text-3xl">{member.name}</h3>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">{member.role}</p>
        </div>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">{member.description}</p>
      </div>
    </article>
  );
}
