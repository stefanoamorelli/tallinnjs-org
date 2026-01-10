import { Users, Calendar, Star, MapPin } from "lucide-react";
import { communityStats } from "@/data/stats";

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: communityStats.members.toLocaleString(),
      label: "Members",
    },
    {
      icon: Calendar,
      value: communityStats.totalEvents,
      label: "Events",
    },
    {
      icon: Star,
      value: `${communityStats.rating}/5`,
      label: `${communityStats.totalRatings} ratings`,
    },
    {
      icon: MapPin,
      value: "Since 2017",
      label: communityStats.location,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent-yellow" />
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
