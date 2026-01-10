import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Heart, Target, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MeetupLogo from "@/components/MeetupLogo";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-8">
              About Us
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
              <span className="text-white block">WE ARE</span>
              <span className="gradient-text block">TALLINNJS</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
              A passionate community of JavaScript developers in Tallinn, Estonia.
              We learn, share, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "OUR MISSION",
                description: "Create a welcoming space where JavaScript enthusiasts of all levels can learn, share knowledge, and build meaningful connections."
              },
              {
                icon: Heart,
                title: "OUR VALUES",
                description: "Inclusivity, knowledge sharing, and community first. We believe everyone has something to teach and something to learn."
              },
              {
                icon: Users,
                title: "OPEN TO ALL",
                description: "Whether you're a complete beginner or a seasoned expert, you're welcome here. Our events are free and open to everyone."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-yellow-400/10 mb-6 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <item.icon className="size-8 text-yellow-400" />
                </div>
                <h3 className="font-display text-xl font-black mb-4 tracking-wide">{item.title}</h3>
                <p className="text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "2017", label: "FOUNDED" },
              { value: "1,200+", label: "MEMBERS" },
              { value: "50+", label: "EVENTS" },
              { value: "100+", label: "SPEAKERS" },
              { value: "TALLINN", label: "LOCATION" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-5xl font-black text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-black/60 font-medium tracking-wider text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">WHAT WE</span>{" "}
              <span className="gradient-text">COVER</span>
            </h2>
            <p className="text-white/50 text-lg">Topics we explore at our meetups</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React", "Vue.js", "Node.js", "TypeScript", "Next.js",
              "Deno", "Testing", "Performance", "DevOps", "GraphQL",
              "REST APIs", "Serverless", "Web3", "AI/ML", "Accessibility"
            ].map((topic, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 hover:border-yellow-400/30 hover:text-yellow-400 transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Rocket className="size-16 text-yellow-400 mx-auto mb-8" />

            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-white">READY TO</span><br />
              <span className="gradient-text">JOIN US?</span>
            </h2>

            <p className="text-white/50 text-xl mb-10">
              Come to our next meetup and become part of the TallinnJS family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                asChild
                variant="outline"
                className="px-10 py-6 text-lg border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 rounded-full transition-colors"
              >
                <Link to="/events">
                  VIEW EVENTS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
