import { speakers, featuredCompanies } from "@/data/speakers";

export const Speakers = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/5" id="speakers">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 section-title">
          Featured Speakers
        </h2>
        <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
          Learn from developers at leading tech companies
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {featuredCompanies.map((company) => (
            <span
              key={company}
              className="px-4 py-2 rounded-full bg-accent-yellow/10 text-accent-yellow text-sm font-medium border border-accent-yellow/20"
            >
              {company}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {speakers.slice(0, 6).map((speaker, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-secondary/10 border border-secondary/20 text-left hover:border-accent-yellow/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/20 flex items-center justify-center text-accent-yellow font-bold">
                  {speaker.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold">{speaker.name}</h3>
                  {speaker.company && (
                    <p className="text-sm text-accent-yellow">{speaker.company}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-300">{speaker.topic}</p>
              <p className="text-xs text-slate-500 mt-2">{speaker.event}</p>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-center mt-8">
          And many more talented speakers from the community!
        </p>
      </div>
    </section>
  );
};
