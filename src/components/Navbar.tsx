import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MeetupLogo from "./MeetupLogo";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/events", label: "Events" },
    { to: "/speakers", label: "Speakers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              className="size-10"
              alt="TallinnJS"
            />
            <span className="text-xl font-bold text-yellow-400">TallinnJS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 transition-colors ${
                  isActive(link.to)
                    ? "text-yellow-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="https://www.meetup.com/tallinn-js/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black hover:text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              <MeetupLogo className="size-4" />
              Join Meetup
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors ${
                  isActive(link.to)
                    ? "text-yellow-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.meetup.com/tallinn-js/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black hover:text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              <MeetupLogo className="size-4" />
              Join Meetup
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
