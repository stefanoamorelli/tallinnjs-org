import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Calendar, Bell, Mic } from "lucide-react";
import Footer from "@/components/Footer";
import MeetupLogo from "@/components/MeetupLogo";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-8">
              Events & Meetups
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
              <span className="gradient-text block">UPCOMING</span>
              <span className="text-white block">EVENTS</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
              Join us for talks, workshops, and networking.
              All events are free and open to everyone!
            </p>
          </div>
        </div>
      </section>

      {/* No Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
              <Calendar className="size-16 text-yellow-400/50 mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-black mb-4">
                NO UPCOMING EVENTS
              </h2>
              <p className="text-white/50 mb-8">
                We're planning our next meetup. Join us on Meetup to get notified when we announce new events!
              </p>
              <Button
                asChild
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full px-8 py-6 text-lg transition-colors"
              >
                <a
                  href="https://www.meetup.com/tallinn-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MeetupLogo className="mr-2 size-5" />
                  JOIN US ON MEETUP
                  <Bell className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />
        <div className="absolute inset-0 noise-overlay" />

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-black mb-2">
                13+ PAST EVENTS
              </h2>
              <p className="text-black/60 text-lg">
                Browse our archive of past talks and resources
              </p>
            </div>
            <Button
              asChild
              className="bg-black hover:bg-black/80 text-yellow-400 rounded-full px-8 py-6 text-lg"
            >
              <a
                href="https://archive.tallinnjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                BROWSE ARCHIVE
                <ExternalLinkIcon className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Photo */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src="/images/tallinnjs.jpeg"
                alt="TallinnJS Community"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-black mb-2">
                  OUR COMMUNITY
                </h3>
                <p className="text-white/60">
                  1,200+ JavaScript developers in Tallinn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker CTA */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Mic className="size-16 text-yellow-400 mx-auto mb-8" />

            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">WANT TO</span><br />
              <span className="gradient-text">SPEAK?</span>
            </h2>

            <p className="text-white/50 text-xl mb-10">
              We're always looking for speakers! Share your knowledge with the community.
              All topics related to JavaScript and web development are welcome.
            </p>

            <Button
              asChild
              className="px-10 py-6 text-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-colors"
            >
              <a
                href="https://www.meetup.com/tallinn-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MeetupLogo className="mr-2 size-5" />
                JOIN US ON MEETUP
                <ExternalLinkIcon className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
