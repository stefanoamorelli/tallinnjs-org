import { Link, useParams } from "react-router-dom";
import { Linkedin, Github, Twitter, Globe, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Team member data
const teamMembers = {
  "stefano-amorelli": {
    name: "Stefano Amorelli",
    role: "Community Lead",
    image: "https://github.com/stefanoamorelli.png",
    bio: "Software engineer, builder, from Sicily, now based in Tallinn, Estonia. Passionate about JavaScript and giving back to the community, whether it's through community or open source.",
    location: "Tallinn, Estonia",
    links: {
      linkedin: "https://linkedin.com/in/stefanoamorelli",
      github: "https://github.com/stefanoamorelli",
      twitter: "https://twitter.com/stefanoamorelli",
      website: "https://amorelli.tech"
    }
  }
};

const pastOrganizers = [
  { name: "To be added", role: "Past Organizer" }
];

const originalFounders = [
  { name: "To be added", role: "Original Founder" }
];

// Team member card component
const TeamMemberCard = ({ member, slug }: { member: typeof teamMembers["stefano-amorelli"], slug: string }) => (
  <Link
    to={`/team/${slug}`}
    className="group block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-colors duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-32 h-32 rounded-full object-cover ring-4 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all"
        />
      </div>
      <h3 className="font-display text-xl font-black mb-1">{member.name}</h3>
      <p className="text-yellow-400 text-sm font-medium uppercase tracking-wider">{member.role}</p>
    </div>
  </Link>
);

// Team member detail view
const TeamMemberDetail = ({ member }: { member: typeof teamMembers["stefano-amorelli"] }) => (
  <div className="min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">
    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden flex-grow">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-white/50 hover:text-yellow-400 transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to Team
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-2xl" />
              <img
                src={member.image}
                alt={member.name}
                className="relative w-48 h-48 rounded-full object-cover ring-4 ring-yellow-400/30"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-4">
                {member.role}
              </span>

              <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
                {member.name}
              </h1>

              <p className="text-white/60 text-lg mb-6 max-w-xl">
                {member.bio}
              </p>

              <p className="text-white/40 text-sm mb-6">
                {member.location}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-yellow-400/20 transition-colors"
                  >
                    <Linkedin className="size-5 text-white/70 hover:text-yellow-400" />
                  </a>
                )}
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-yellow-400/20 transition-colors"
                  >
                    <Github className="size-5 text-white/70 hover:text-yellow-400" />
                  </a>
                )}
                {member.links.twitter && (
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-yellow-400/20 transition-colors"
                  >
                    <Twitter className="size-5 text-white/70 hover:text-yellow-400" />
                  </a>
                )}
                {member.links.website && (
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl hover:bg-yellow-400/20 transition-colors"
                  >
                    <Globe className="size-5 text-white/70 hover:text-yellow-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

// Main Team page
const TeamPage = () => {
  const { memberId } = useParams();

  // If viewing a specific member
  if (memberId && teamMembers[memberId as keyof typeof teamMembers]) {
    return <TeamMemberDetail member={teamMembers[memberId as keyof typeof teamMembers]} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      <SEO
        title="Team"
        canonical="/team"
        description="Meet the organizers behind TallinnJS. The passionate people who make Estonia's largest JavaScript community happen. Join us for free meetups in Tallinn."
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium uppercase tracking-wider mb-8">
              Our Team
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9]">
              <span className="text-white block">MEET THE</span>
              <span className="gradient-text block">ORGANIZERS</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
              The passionate people behind TallinnJS who make our community events happen.
            </p>
          </div>
        </div>
      </section>

      {/* Current Organizers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="text-white">CURRENT</span>{" "}
            <span className="gradient-text">ORGANIZERS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Object.entries(teamMembers).map(([slug, member]) => (
              <TeamMemberCard key={slug} member={member} slug={slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Organizers */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="text-white">PAST</span>{" "}
            <span className="gradient-text">ORGANIZERS</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/50 mb-8">
              We're grateful to all the organizers who have contributed to TallinnJS over the years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {pastOrganizers.map((person, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/50"
                >
                  {person.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Original Founders */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-12 text-center">
            <span className="text-white">ORIGINAL</span>{" "}
            <span className="gradient-text">FOUNDERS</span>
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/50 mb-8">
              The visionaries who started TallinnJS in 2017.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {originalFounders.map((person, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/50"
                >
                  {person.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400" />

        <div className="container mx-auto px-6 relative text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-black mb-4">
            WANT TO HELP ORGANIZE?
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
            We're always looking for passionate people to help grow the community.
          </p>
          <Button
            asChild
            className="bg-black hover:bg-black/80 text-yellow-400 rounded-full px-8 py-6 text-lg"
          >
            <a
              href="https://www.meetup.com/tallinn-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GET IN TOUCH
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
