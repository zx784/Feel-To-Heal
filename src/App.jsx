import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import EventsPage from "./pages/EventsPage";
import GuestSpeakersPage from "./pages/GuestSpeakersPage";
import MembersPage from "./pages/MembersPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:slug" element={<ActivityDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/guest-speakers" element={<GuestSpeakersPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
