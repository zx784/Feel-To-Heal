import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { activities } from "../../data/activities";
import LogoMark from "../ui/LogoMark";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Guest Speakers", to: "/guest-speakers" },
  { label: "Members", to: "/members" },
  { label: "Contact", to: "/contact" },
];

function linkClass({ isActive }) {
  return `transition-colors ${
    isActive ? "text-emerald-700" : "text-slate-700 hover:text-emerald-700"
  }`;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [desktopActivitiesOpen, setDesktopActivitiesOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const desktopButtonRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!desktopDropdownRef.current?.contains(event.target)) {
        setDesktopActivitiesOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setDesktopActivitiesOpen(false);
        setActivitiesOpen(false);
        desktopButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeAllMenus() {
    setDesktopActivitiesOpen(false);
    setActivitiesOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark size="sm" />
          <div>
            <p className="font-heading text-lg font-semibold text-slate-900">Feel To Heal AIU</p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Student Wellbeing Project</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <div ref={desktopDropdownRef} className="relative z-[70]">
            <button
              ref={desktopButtonRef}
              type="button"
              className={`inline-flex items-center gap-1 transition-colors ${
                desktopActivitiesOpen ? "text-emerald-700" : "text-slate-700 hover:text-emerald-700"
              }`}
              aria-haspopup="menu"
              aria-expanded={desktopActivitiesOpen}
              aria-controls="desktop-activities-menu"
              onClick={() => setDesktopActivitiesOpen((value) => !value)}
            >
              Activities
              <ChevronDown size={16} className={`transition ${desktopActivitiesOpen ? "rotate-180" : ""}`} />
            </button>
            {desktopActivitiesOpen ? (
              <div
                id="desktop-activities-menu"
                role="menu"
                className="absolute left-0 top-full mt-3 w-64 rounded-3xl border border-emerald-100 bg-white/98 p-3 shadow-[0_30px_60px_-35px_rgba(6,78,59,0.35)] backdrop-blur"
              >
                <NavLink
                  to="/activities"
                  role="menuitem"
                  className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={closeAllMenus}
                >
                  Activities Overview
                </NavLink>
                {activities.map((activity) => (
                  <NavLink
                    key={activity.slug}
                    to={`/activities/${activity.slug}`}
                    role="menuitem"
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    onClick={closeAllMenus}
                  >
                    {activity.category}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
          {mainLinks.slice(2).map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-slate-700 shadow-sm transition hover:text-emerald-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-emerald-100 bg-white/95 px-6 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={linkClass} onClick={closeAllMenus}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={closeAllMenus}>
              About Us
            </NavLink>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left font-medium text-slate-800"
                onClick={() => setActivitiesOpen((value) => !value)}
                aria-expanded={activitiesOpen}
                aria-controls="mobile-activities-menu"
              >
                Activities
                <ChevronDown
                  size={18}
                  className={`transition ${activitiesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {activitiesOpen ? (
                <div id="mobile-activities-menu" className="mt-3 flex flex-col gap-1">
                  <NavLink
                    to="/activities"
                    className="rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-emerald-700"
                    onClick={closeAllMenus}
                  >
                    Activities Overview
                  </NavLink>
                  {activities.map((activity) => (
                    <NavLink
                      key={activity.slug}
                      to={`/activities/${activity.slug}`}
                      className="rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-emerald-700"
                      onClick={closeAllMenus}
                    >
                      {activity.category}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
            {mainLinks.slice(2).map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} onClick={closeAllMenus}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
