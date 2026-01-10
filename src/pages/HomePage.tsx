import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ArrowRight, ArrowDown, Code2, Users, Zap, Mic } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section - Eventhall inspired */}
      <section className="relative min-h-screen flex items-center">
        {/* Decorative geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large yellow glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px]" />

          {/* Decorative circles */}
          <div className="absolute top-1/4 right-20 w-64 h-64 border border-yellow-400/20 rounded-full" />
          <div className="absolute top-1/3 right-32 w-40 h-40 border border-yellow-400/10 rounded-full" />
          <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-yellow-400/5 rounded-full" />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm text-yellow-400 font-medium uppercase tracking-wider">Estonia's #1 JS Community</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up leading-[0.9]">
                <span className="text-white block">THE</span>
                <span className="gradient-text block">TALLINN</span>
                <span className="text-white block">JAVASCRIPT</span>
                <span className="gradient-text block">MEETUP</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-md mb-10 animate-fade-in-up delay-200">
                Join 1,200+ developers for talks, workshops, and networking events.
                Free and open to all skill levels.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button
                  asChild
                  className="px-8 py-6 text-lg btn-primary rounded-full group"
                >
                  <a
                    href="https://www.meetup.com/tallinn-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JOIN THE COMMUNITY
                    <ExternalLinkIcon className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 rounded-full group"
                >
                  <Link to="/events">
                    VIEW EVENTS
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Member avatars */}
              <div className="flex items-center gap-4 mt-10 animate-fade-in-up delay-400">
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
            <div className="relative animate-fade-in-right delay-200">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />

                {/* Main image */}
                <img
                  src="/images/tallinnjs.jpeg"
                  alt="TallinnJS Community"
                  className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-3xl"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black px-6 py-4 rounded-2xl glow-yellow">
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-sm font-medium uppercase">Events Hosted</div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-yellow-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="size-5 text-yellow-400" />
        </div>
      </section>

      {/* Features Section - Bold cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">WHAT WE</span>{" "}
              <span className="gradient-text">DO</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Building the JavaScript ecosystem in Tallinn through community events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Mic,
                title: "TALKS",
                description: "Learn from industry experts sharing real-world insights",
                stat: "100+",
                statLabel: "Speakers"
              },
              {
                icon: Code2,
                title: "WORKSHOPS",
                description: "Hands-on sessions to level up your skills",
                stat: "20+",
                statLabel: "Workshops"
              },
              {
                icon: Users,
                title: "NETWORKING",
                description: "Connect with fellow developers and grow your network",
                stat: "1200+",
                statLabel: "Members"
              },
              {
                icon: Zap,
                title: "HACKATHONS",
                description: "Build cool projects and compete with other teams",
                stat: "5+",
                statLabel: "Events"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 card-hover overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="inline-flex p-4 rounded-2xl bg-yellow-400/10 mb-6 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                    <feature.icon className="size-8 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-xl font-black mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-white/50 text-sm mb-6">{feature.description}</p>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-2xl font-black text-yellow-400">{feature.stat}</span>
                    <span className="text-white/40 text-sm ml-2">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />
        <div className="absolute inset-0 noise-overlay" />

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
              className="px-12 py-8 text-xl btn-primary rounded-full glow-yellow-intense"
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

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" className="size-10" alt="TallinnJS" />
              <span className="text-2xl font-black gradient-text">TALLINNJS</span>
            </div>

            <div className="flex gap-8">
              <Link to="/about" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                About
              </Link>
              <Link to="/events" className="text-white/50 hover:text-yellow-400 transition-colors font-medium">
                Events
              </Link>
              <a
                href="https://www.meetup.com/tallinn-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-yellow-400 transition-colors font-medium"
              >
                Meetup
              </a>
              <a
                href="https://archive.tallinnjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-yellow-400 transition-colors font-medium"
              >
                Archive
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
            The JavaScript Community in Tallinn, Estonia
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
