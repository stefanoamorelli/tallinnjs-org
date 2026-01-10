export interface Sponsor {
  name: string;
  description: string;
  url: string;
  logo?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Codemagic",
    description: "Mobile app release automation platform",
    url: "https://codemagic.io",
  },
  {
    name: "LIFT99",
    description: "Flagship of Estonian startup community & the go-to place for founders",
    url: "https://lift99.co",
  },
];

export const venue = {
  name: "LIFT99",
  address: "Telliskivi 60a/5, B-building",
  city: "Tallinn, Estonia",
  description: "Flagship of Estonian startup community & the go-to place for founders",
  mapUrl: "https://maps.google.com/?q=Telliskivi+60a/5+Tallinn+Estonia",
};
