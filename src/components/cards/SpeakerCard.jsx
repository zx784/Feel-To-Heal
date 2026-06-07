import { Mic2 } from "lucide-react";

export default function SpeakerCard({ speaker }) {
  return (
    <article className="rounded-[2rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_18px_55px_-35px_rgba(6,78,59,0.35)]">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        <Mic2 size={28} />
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="font-heading text-xl font-semibold text-slate-900">{speaker.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{speaker.role}</p>
        </div>
        <p className="text-sm font-medium text-slate-500">{speaker.eventLabel}</p>
      </div>
    </article>
  );
}
