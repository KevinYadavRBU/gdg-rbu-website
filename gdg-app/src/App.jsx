import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import PortfolioPage from "./pages/PortfolioPage";
import MorePage from "./pages/MorePage";
import Footer from "./components/Footer";

const pageNames = {
  "/": "Home",
  "/team": "Team",
  "/events": "Events",
  "/gallery": "Gallery",
  "/portfolio": "Portfolio",
  "/more": "More",
};

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const pageName = pageNames[location.pathname] ?? "Page";

  return (
    <>
      <Navbar />
      {loading ? (
        <PageLoader name={pageName} />
      ) : (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/more" element={<MorePage />} />
        
      </Routes>
      )}
      <Footer />
    </>
  );
}