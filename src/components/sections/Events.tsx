import { Calendar, Users, Mic } from "lucide-react";
import { pastEvents } from "@/data/events";

export const Events = () => {
  return (
    <section className="py-16 lg:py-24" id="events">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 section-title">
          Past Events
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          We host regular meetups featuring talks from developers at top tech
          companies
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 rounded-xl bg-secondary/10 border border-secondary/20 text-left hover:border-accent-yellow/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">
                  #{event.id}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {event.attendees} attendees
                </span>
              </div>

              <div className="space-y-3">
                {event.talks.map((talk, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Mic className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white">{talk.title}</span>
                      <span className="text-slate-400">
                        {" "}
                        - {talk.speaker}
                        {talk.company && (
                          <span className="text-accent-yellow">
                            {" "}
                            ({talk.company})
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
