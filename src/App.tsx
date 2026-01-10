import { Button } from "@/components/ui/button";

import "./App.css";

import {
  ExternalLinkIcon,
  Users,
  Calendar,
  MessageSquare,
  Code,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// Feature card component inspired by NodeSchool's workshop sections
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="feature-card group flex flex-col items-center p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 bg-slate-900/50">
    <div className="hexagon-icon mb-4 p-4 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
      <Icon className="size-8 text-yellow-500" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-400 text-center text-sm">{description}</p>
  </div>
);

// Stats component inspired by NodeSchool's community reach
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl lg:text-5xl font-bold text-yellow-500">{value}</div>
    <div className="text-slate-400 mt-1 text-sm lg:text-base">{label}</div>
  </div>
);

const Hero = () => {
  return (
    <section className="lg:py-24 pt-12 mx-auto container px-8">
      <div className="overflow-hidden">
        <div className="container">
          {/* Hero Section */}
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
              <p className="mx-auto lg:text-xl lg:pt-8 pt-4 text-slate-400 max-w-2xl">
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
                    className="border-4 border-primary lg:size-16 size-12"
                  >
                    <AvatarImage src={src} />
                  </Avatar>
                ))}
                <div className="lg:pl-6 pl-4 text-sm lg:text-md text-slate-500">
                  +1k members
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

          {/* Community Photo */}
          <img
            src="/images/tallinnjs.jpeg"
            alt="TallinnJS Community"
            className="mx-auto mt-12 max-h-[500px] w-full max-w-4xl rounded-xl object-cover shadow-xl"
          />

          {/* What We Do Section - Inspired by NodeSchool's workshop sections */}
          <div className="mt-24 lg:mt-32">
            <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-4">
              What We Do
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
              Open source community events for JavaScript enthusiasts of all
              levels
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <FeatureCard
                icon={MessageSquare}
                title="Talks"
                description="Learn from experienced developers sharing real-world insights and best practices"
              />
              <FeatureCard
                icon={Code}
                title="Workshops"
                description="Hands-on sessions to level up your JavaScript skills with guided exercises"
              />
              <FeatureCard
                icon={Users}
                title="Networking"
                description="Connect with fellow developers, share ideas, and grow your professional network"
              />
              <FeatureCard
                icon={Calendar}
                title="Events"
                description="Regular meetups, hackathons, and special events throughout the year"
              />
            </div>
          </div>

          {/* Community Stats - Inspired by NodeSchool's global reach */}
          <div className="mt-24 lg:mt-32 py-12 px-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-12">
              Our Community
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatItem value="1000+" label="Members" />
              <StatItem value="50+" label="Events Hosted" />
              <StatItem value="100+" label="Speakers" />
              <StatItem value="2017" label="Founded" />
            </div>
          </div>

          {/* Archive Link */}
          <div className="mt-24 text-center">
            <p className="text-slate-400 mb-4">
              Looking for past talks and resources?
            </p>
            <Button asChild variant="secondary">
              <a
                className="border"
                href="https://archive.tallinnjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse the Archive
                <ExternalLinkIcon className="ml-2 size-4" />
              </a>
            </Button>
          </div>

          {/* Footer */}
          <footer className="mt-24 lg:mt-32 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>
              Made with ❤️ by the TallinnJS community • Inspired by{" "}
              <a
                href="https://nodeschool.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                NodeSchool
              </a>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <Hero />
    </>
  );
}

export default App;
