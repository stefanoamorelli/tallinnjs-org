export interface Talk {
  title: string;
  speaker: string;
  company?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  attendees: number;
  talks: Talk[];
}

export const pastEvents: Event[] = [
  {
    id: 13,
    title: "TallinnJS - Summer Event",
    date: "June 19, 2025",
    attendees: 63,
    talks: [
      {
        title: "Building Telegram Mini Apps",
        speaker: "Pavel Grigorev",
        company: "Bolt",
      },
      {
        title: "Responsive React Applications",
        speaker: "Kateryna Porshnieva",
        company: "Buffer",
      },
    ],
  },
  {
    id: 12,
    title: "TallinnJS Event #12",
    date: "March 12, 2025",
    attendees: 67,
    talks: [
      {
        title: "UI Accessibility Best Practices",
        speaker: "Stepan Bolotnikov",
        company: "Splunk",
      },
      {
        title: "Modern Browser Features",
        speaker: "Fotis Papadogeorgopoulos",
        company: "Wolt",
      },
      {
        title: "JavaScript Signals",
        speaker: "Eugene Mirotin",
        company: "Speechify",
      },
    ],
  },
  {
    id: 11,
    title: "Back to School Event #11",
    date: "September 25, 2024",
    attendees: 52,
    talks: [
      {
        title: "Telegram Bot WebApp Integration",
        speaker: "Dmitrii Baranov",
      },
      {
        title: "Workerd JavaScript Runtime",
        speaker: "Jan Johannes",
      },
    ],
  },
  {
    id: 10,
    title: "Summer Event #10",
    date: "July 11, 2024",
    attendees: 70,
    talks: [
      {
        title: "JavaScript Debugging Techniques",
        speaker: "Kacper Pietrzak",
        company: "Dropbox",
      },
      {
        title: "Modern HTML/CSS Features",
        speaker: "Daniel Yuschick",
        company: "Noice",
      },
      {
        title: "JavaScript Quirks & Hidden Gems",
        speaker: "Bartek Legięć",
        company: "Craft Docs",
      },
    ],
  },
];
