import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated particles */}
        <Particles />

        {/* Decorative glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-500/15 rounded-full blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm text-yellow-400 font-medium uppercase tracking-wider">Estonia's #1 JS Community</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
                <span className="gradient-text block">TALLINN</span>
                <span className="text-white block">JAVASCRIPT</span>
                <span className="gradient-text block">MEETUP</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-lg mb-10">
                Join a community of 1,200+ developers for talks, workshops, and networking events, open to all skill levels!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="px-8 py-6 text-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-colors"
                >
                  <a
                    href="https://www.meetup.com/tallinn-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JOIN THE COMMUNITY
                    <ExternalLinkIcon className="ml-2 size-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-6 text-lg border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 rounded-full transition-colors"
                >
                  <Link to="/events">
                    VIEW EVENTS
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>

              {/* Member avatars */}
              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-3">
                  {[
                    "https://secure.meetupstatic.com/photos/member/c/2/5/e/highres_315289758.jpeg",
                    "https://secure.meetupstatic.com/photos/member/a/0/0/a/highres_321580970.jpeg",
                    "https://secure.meetupstatic.com/photos/member/a/3/1/9/highres_321101753.jpeg",
                    "https://secure.meetupstatic.com/photos/member/2/1/9/a/highres_295148602.jpeg",
                  ].map((src, index) => (
                    <Avatar
                      key={index}
                      className="border-2 border-[#0a0a0a] size-12 ring-2 ring-yellow-400/30"
                    >
                      <AvatarImage src={src} />
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-yellow-400 font-bold">1,200+</span>
                  <span className="text-white/50 ml-1">active members</span>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl" />

                {/* Main image */}
                <img
                  src="/images/tallinnjs.jpeg"
                  alt="TallinnJS Community"
                  className="relative w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "1,200+", label: "MEMBERS" },
              { value: "50+", label: "EVENTS" },
              { value: "100+", label: "SPEAKERS" },
              { value: "2017", label: "FOUNDED" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-7xl font-black text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-black/60 font-medium tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Event CTA */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-8">
              Don't Miss Out
            </span>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">JOIN OUR</span><br />
              <span className="gradient-text">NEXT MEETUP</span>
            </h2>

            <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
              Be part of Estonia's most vibrant JavaScript community.
              All skill levels welcome. Always free.
            </p>

            <Button
              asChild
              className="px-12 py-8 text-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full shadow-lg shadow-yellow-400/25 transition-colors"
            >
              <a
                href="https://www.meetup.com/tallinn-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP NOW
                <ExternalLinkIcon className="ml-3 size-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
