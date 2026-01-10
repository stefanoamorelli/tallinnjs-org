import { MapPin, ExternalLink } from "lucide-react";
import { venue } from "@/data/sponsors";
import { topics } from "@/data/stats";

export const Venue = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/5" id="venue">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 section-title">
                Where We Meet
              </h2>
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{venue.name}</h3>
                    <p className="text-slate-400">{venue.address}</p>
                    <p className="text-slate-400">{venue.city}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  {venue.description}
                </p>
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-yellow text-sm hover:underline"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 section-title">
                Topics We Cover
              </h2>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 mt-6 text-sm">
                Whether you're a beginner or an experienced developer, there's
                something for everyone at TallinnJS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
