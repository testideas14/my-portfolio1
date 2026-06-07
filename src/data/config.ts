import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/mrcoffeebean14",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrcoffeebean14",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:singhmps14@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Mandeep Singh",
  title: "AI Engineer & full stack developer",
  description: "Building scalable apps, websites, and automations.",
  location: "New Delhi, India",
  coordinates: "28.6139° N, 77.2090° E",
  timezone: "GMT+5:30",
};
