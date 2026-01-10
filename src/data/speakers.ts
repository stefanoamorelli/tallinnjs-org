export interface Speaker {
  name: string;
  company: string;
  topic: string;
  event: string;
}

export const speakers: Speaker[] = [
  {
    name: "Pavel Grigorev",
    company: "Bolt",
    topic: "Building Telegram Mini Apps",
    event: "Summer Event 2025",
  },
  {
    name: "Kateryna Porshnieva",
    company: "Buffer",
    topic: "Responsive React Applications",
    event: "Summer Event 2025",
  },
  {
    name: "Stepan Bolotnikov",
    company: "Splunk",
    topic: "UI Accessibility Best Practices",
    event: "Event #12",
  },
  {
    name: "Fotis Papadogeorgopoulos",
    company: "Wolt",
    topic: "Modern Browser Features",
    event: "Event #12",
  },
  {
    name: "Eugene Mirotin",
    company: "Speechify",
    topic: "JavaScript Signals",
    event: "Event #12",
  },
  {
    name: "Dmitrii Baranov",
    company: "",
    topic: "Telegram Bot WebApp Integration",
    event: "Event #11",
  },
  {
    name: "Jan Johannes",
    company: "",
    topic: "Workerd JavaScript Runtime",
    event: "Event #11",
  },
  {
    name: "Kacper Pietrzak",
    company: "Dropbox",
    topic: "JavaScript Debugging Techniques",
    event: "Event #10",
  },
  {
    name: "Daniel Yuschick",
    company: "Noice",
    topic: "Modern HTML/CSS Features",
    event: "Event #10",
  },
  {
    name: "Bartek Legięć",
    company: "Craft Docs",
    topic: "JavaScript Quirks & Hidden Gems",
    event: "Event #10",
  },
];

export const featuredCompanies = [
  "Bolt",
  "Buffer",
  "Splunk",
  "Wolt",
  "Speechify",
  "Dropbox",
  "Noice",
  "Craft Docs",
];
