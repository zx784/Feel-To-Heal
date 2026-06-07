import { AtSign, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../data/siteInfo";
import LogoMark from "../ui/LogoMark";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),linear-gradient(180deg,_#07140f_0%,_#0d1b15_100%)] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:px-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <LogoMark size="sm" />
            <div>
              <p className="font-heading text-lg font-semibold text-white">{siteInfo.name}</p>
              <p className="text-sm text-slate-400">Creative wellbeing initiative at AIU</p>
            </div>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-400">{siteInfo.description}</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><Link to="/about" className="transition hover:text-white">About Us</Link></li>
            <li><Link to="/activities" className="transition hover:text-white">Activities</Link></li>
            <li><Link to="/events" className="transition hover:text-white">Events</Link></li>
            <li><Link to="/members" className="transition hover:text-white">Members</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${siteInfo.email}`} className="transition hover:text-white">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <AtSign size={16} />
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {siteInfo.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={16} />
              <span>Facebook coming soon</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
