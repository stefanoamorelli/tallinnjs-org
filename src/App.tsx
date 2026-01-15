import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import EventsPage from "@/pages/EventsPage";
import TeamPage from "@/pages/TeamPage";
import SpeakersPage from "@/pages/SpeakersPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:memberId" element={<TeamPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
