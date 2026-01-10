import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// Speaker data from TallinnJS archive
const speakers = [
  // TallinnJS #10 - July 2024
  {
    name: "Kacper Pietrzak",
    company: "Dropbox",
    role: "Software Engineer",
    talk: "Better debugging in JS",
    event: "TallinnJS #10",
    date: "July 2024",
    image: "https://archive.tallinnjs.org/images/kacper.jpeg",
  },
  {
    name: "Bartek Legięć",
    company: "Craft Docs",
    role: "Senior Web Product Engineer",
    talk: "WTF.JS - Javascript Quirks",
    event: "TallinnJS #10",
    date: "July 2024",
    image: "https://archive.tallinnjs.org/images/bartek.jpeg",
  },
  {
    name: "Daniel Yuschick",
    company: "Noice",
    role: "Senior Frontend Developer",
    talk: "Get Lost JavaScript, Just Kidding",
    event: "TallinnJS #10",
    date: "July 2024",
    image: "https://archive.tallinnjs.org/images/daniel.jpeg",
  },
  // TallinnJS #9 - April 2023
  {
    name: "Illia Osmanov",
    company: "Cisco",
    role: "Software Engineer",
    talk: "Typescript is cute 🙃",
    event: "TallinnJS #9",
    date: "April 2023",
    image: "https://archive.tallinnjs.org/tjs9/images/illia.jpg",
  },
  {
    name: "Stefan Djokovic",
    company: "Red Sift",
    role: "Software Engineer",
    talk: "Full Stack Type Safety",
    event: "TallinnJS #9",
    date: "April 2023",
    image: "https://archive.tallinnjs.org/tjs9/images/stefan.jpg",
  },
  {
    name: "Kateryna Porshnieva",
    company: "Veriff",
    role: "Head of Developer Relations",
    talk: "Building accessible forms",
    event: "TallinnJS #9",
    date: "April 2023",
    image: "https://archive.tallinnjs.org/tjs9/images/katya.jpg",
  },
  // TallinnJS #8 - December 2022
  {
    name: "Ilia Chernetskii",
    company: "Evolution",
    role: "Javascript Engineer",
    talk: "How Svelte works for Reactaholics",
    event: "TallinnJS #8",
    date: "December 2022",
    image: "https://archive.tallinnjs.org/tjs8/images/ichernetskii.jpg",
  },
  // TallinnJS #7 - September 2022
  {
    name: "Bogdan Bashev",
    company: "Veriff",
    role: "Staff Quality Engineer",
    talk: "Your ESLint - your (custom) rules",
    event: "TallinnJS #7",
    date: "September 2022",
    image: "https://archive.tallinnjs.org/tjs7/images/bogdan_bashev.jpeg",
  },
  {
    name: "Anton Vorozheev",
    company: "Malwarebytes",
    role: "Software Engineer",
    talk: "Migrating Legacy Systems With MicroFrontends",
    event: "TallinnJS #7",
    date: "September 2022",
    image: "https://archive.tallinnjs.org/tjs7/images/anton_vorozheev.jpg",
  },
];

// Company logos (using placeholder for companies without public logos)
const companyLogos: Record<string, string> = {
  "Dropbox": "https://logo.clearbit.com/dropbox.com",
  "Craft Docs": "https://logo.clearbit.com/craft.do",
  "Noice": "https://logo.clearbit.com/noice.com",
  "Cisco": "https://logo.clearbit.com/cisco.com",
  "Red Sift": "https://logo.clearbit.com/redsift.com",
  "Veriff": "https://logo.clearbit.com/veriff.com",
  "Evolution": "https://logo.clearbit.com/evolution.com",
  "Malwarebytes": "https://logo.clearbit.com/malwarebytes.com",
};

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

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Speaker Photo */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=ffe45e&color=000&size=80`;
                      }}
                    />
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display text-lg font-black mb-1 truncate">{speaker.name}</h3>

                    {/* Company with logo */}
                    <div className="flex items-center gap-2 mb-2">
                      {companyLogos[speaker.company] && (
                        <img
                          src={companyLogos[speaker.company]}
                          alt={speaker.company}
                          className="w-4 h-4 rounded"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      )}
                      <span className="text-yellow-400 text-sm font-medium">{speaker.company}</span>
                    </div>

                    <p className="text-white/40 text-xs mb-3">{speaker.role}</p>
                  </div>
                </div>

                {/* Talk Info */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/70 text-sm font-medium mb-2">"{speaker.talk}"</p>
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span>{speaker.event}</span>
                    <span>{speaker.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Archive Link */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 rounded-full px-8 py-6 text-lg transition-colors"
            >
              <a
                href="https://archive.tallinnjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ALL IN ARCHIVE
                <ExternalLinkIcon className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">30+</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">SPEAKERS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">10</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">EVENTS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-black text-black mb-1">2017</div>
              <div className="text-black/60 font-medium tracking-wider text-sm">SINCE</div>
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
