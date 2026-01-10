import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" className="size-10" alt="TallinnJS" />
              <span className="text-2xl font-black gradient-text">TALLINNJS</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                About
              </Link>
              <Link to="/team" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/events" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                Events
              </Link>
              <Link to="/speakers" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                Speakers
              </Link>
              <a
                href="https://www.meetup.com/tallinn-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-yellow-400 transition-colors font-medium"
              >
                Meetup
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Subfooter */}
      <div className="py-6 border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
            <p>© {currentYear} TallinnJS. All rights reserved.</p>
            <p>The JavaScript Community in Tallinn, Estonia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
