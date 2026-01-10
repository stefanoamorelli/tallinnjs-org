import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Stats, Events, Speakers, Sponsors, Venue } from "@/components/sections";

import "./App.css";

const Hero = () => {
  return (
    <section className="lg:py-32 pt-12 mx-auto container px-8">
      <div className="overflow-hidden">
        <div className="container">
          <div className="mx-auto flex flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center text-pretty text-4xl font-medium lg:text-8xl logo">
                <img
                  src="/images/logo.png"
                  className="size-24"
                  alt="TallinnJS Community"
                />
                TallinnJS
              </h1>
              <p className="mx-auto mt-4 lg:mt-12 lg:text-3xl text-xl leading-relaxed">
                We are the flagship JavaScript community in Tallinn
              </p>
              <p className="mx-auto lg:text-xl lg:pt-12 pt-4">
                Join us for engaging talks, hands-on workshops, and lively
                discussions - let's learn, collaborate, and build together!
              </p>
              <span className="mt-12 mx-4 inline-flex items-center -space-x-4">
                {[
                  "https://secure.meetupstatic.com/photos/member/c/2/5/e/highres_315289758.jpeg",
                  "https://secure.meetupstatic.com/photos/member/a/0/0/a/highres_321580970.jpeg",
                  "https://secure.meetupstatic.com/photos/member/a/3/1/9/highres_321101753.jpeg",
                  "https://secure.meetupstatic.com/photos/member/2/1/9/a/highres_295148602.jpeg",
                  "https://secure.meetupstatic.com/photos/member/b/9/c/6/highres_319067558.jpeg",
                ].map((src, index) => (
                  <Avatar
                    key={index}
                    className="border-8 border-primary lg:size-20 size-12"
                  >
                    <AvatarImage src={src} />
                  </Avatar>
                ))}
                <div className="lg:pl-6 pl-4 text-sm lg:text-md text-slate-500">
                  +1,200 members
                </div>
              </span>
              <div className="mt-8 lg:mb-12 w-full items-center container px-8 mx-auto flex flex-col justify-center gap-2 sm:flex-col">
                <Button className="py-6 primary-cta" asChild>
                  <a
                    href="https://www.meetup.com/tallinn-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join us on Meetup
                    <ExternalLinkIcon className="" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <img
            src="/images/tallinnjs.jpeg"
            alt="TallinnJS Community"
            className="mx-auto mt-12 max-h-[700px] w-full max-w-5xl rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-secondary/20">
      <div className="container mx-auto px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="https://www.meetup.com/tallinn-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent-yellow transition-colors"
          >
            Meetup
          </a>
          <a
            href="https://archive.tallinnjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent-yellow transition-colors"
          >
            Archive
          </a>
          <a
            href="mailto:stefano@tallinnjs.org"
            className="text-slate-400 hover:text-accent-yellow transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          TallinnJS - JavaScript community in Tallinn, Estonia
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Founded September 2017 | Organized by Stefano Amorelli
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Events />
      <Speakers />
      <Sponsors />
      <Venue />
      <Footer />
    </div>
  );
}

export default App;
