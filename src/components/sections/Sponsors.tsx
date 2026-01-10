import { Heart, ExternalLink } from "lucide-react";
import { sponsors } from "@/data/sponsors";

export const Sponsors = () => {
  return (
    <section className="py-16 lg:py-24" id="sponsors">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 section-title">
          Our Sponsors
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Supported by amazing companies in the Estonian tech ecosystem
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-xl bg-secondary/10 border border-secondary/20 text-center hover:border-accent-yellow/50 transition-all hover:scale-105 group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-yellow transition-colors flex items-center justify-center gap-2">
                {sponsor.name}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400">{sponsor.description}</p>
            </a>
          ))}
        </div>

        <p className="text-slate-500 text-center mt-12 text-sm">
          Interested in sponsoring TallinnJS?{" "}
          <a
            href="mailto:stefano@tallinnjs.org"
            className="text-accent-yellow hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
};
