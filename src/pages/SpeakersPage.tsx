import { ExternalLinkIcon, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-8">
              Speakers
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
              <span className="text-white block">OUR</span>
              <span className="gradient-text block">SPEAKERS</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
              Amazing developers who have shared their knowledge at TallinnJS events.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
              <Mic className="size-16 text-yellow-400/50 mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-black mb-4">
                SPEAKER ARCHIVE COMING SOON
              </h2>
              <p className="text-white/50 mb-8">
                We're working on building a comprehensive archive of all the amazing speakers
                who have presented at TallinnJS events since 2017. In the meantime, check out
                our archive for past talk recordings.
              </p>
              <Button
                asChild
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full px-8 py-6 text-lg transition-colors"
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">100+</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">SPEAKERS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">50+</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">EVENTS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">13+</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">RECORDED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Speak CTA */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
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
                GET IN TOUCH
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

export default SpeakersPage;
