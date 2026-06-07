import { AtSign, Mail, MapPin } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { siteInfo } from "../data/siteInfo";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with Feel To Heal AIU."
        description="For project updates, collaboration, or general enquiries, use the official project email or Instagram channel below."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(6,78,59,0.35)]">
            <h2 className="font-heading text-3xl font-semibold text-slate-900">Official contact</h2>
            <div className="mt-8 space-y-5 text-sm text-slate-600">
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-4 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/60 px-5 py-4 transition hover:border-emerald-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                  <Mail size={20} />
                </span>
                <span>{siteInfo.email}</span>
              </a>
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[1.5rem] border border-emerald-100 bg-white px-5 py-4 transition hover:border-emerald-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 shadow-sm">
                  <AtSign size={20} />
                </span>
                <span>{siteInfo.instagramHandle}</span>
              </a>
              <div className="flex items-center gap-4 rounded-[1.5rem] border border-emerald-100 bg-white px-5 py-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 shadow-sm">
                  <MapPin size={20} />
                </span>
                <span>{siteInfo.location}</span>
              </div>
            </div>
          </article>

          <article className="rounded-[2.5rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-emerald-50 p-8 shadow-[0_24px_60px_-40px_rgba(6,78,59,0.3)]">
            <span className="inline-flex rounded-full border border-white bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 shadow-sm">
              Social connection
            </span>
            <h2 className="mt-5 font-heading text-3xl font-semibold text-slate-900">
              A supportive student initiative that welcomes conversation.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Feel To Heal AIU is designed to build calm, creativity, and meaningful connection on campus. The contact page stays intentionally simple and trustworthy, highlighting the official email and current Instagram presence while keeping the public contact options clear.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Email the team
              </a>
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Open Instagram
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
