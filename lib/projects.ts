export interface ProjectPalette {
  bg: string;
  fg: string;
  accent: string;
}

export interface Project {
  slug: string;
  client: string;
  sector: string;
  year: number;
  services: string[];
  tagline: string;
  summary: string;
  palette: ProjectPalette;
  /** All projects here are fictional concept work, always labeled as such. */
  concept: true;
}

export const projects: Project[] = [
  {
    slug: "hearth-and-vine",
    client: "Hearth & Vine",
    sector: "Neighborhood bistro",
    year: 2026,
    services: ["Brand identity", "Web design", "Menu system"],
    tagline: "A table always set.",
    summary:
      "A concept identity and site for a neighborhood bistro, built around warm materials, handset type, and a menu that changes with the season.",
    palette: {
      bg: "#2E1F1A",
      fg: "#F5E9DC",
      accent: "#E07A3F",
    },
    concept: true,
  },
  {
    slug: "beacon",
    client: "Beacon",
    sector: "SaaS analytics platform",
    year: 2026,
    services: ["Product marketing site", "Design system", "Art direction"],
    tagline: "See the signal, not the noise.",
    summary:
      "A concept marketing site for an analytics platform, translating dense product data into a calm, confident editorial layout for a technical buyer.",
    palette: {
      bg: "#0E1526",
      fg: "#E8EDF7",
      accent: "#4F7DF0",
    },
    concept: true,
  },
  {
    slug: "fern-and-frame",
    client: "Fern & Frame",
    sector: "Plant & pottery shop",
    year: 2026,
    services: ["Brand identity", "Web design", "Photography direction"],
    tagline: "Slow things, well made.",
    summary:
      "A concept storefront and journal for a plant and pottery shop, pairing earthy tones and generous whitespace with a quietly tactile shopping experience.",
    palette: {
      bg: "#22301F",
      fg: "#EFEAE0",
      accent: "#C9A227",
    },
    concept: true,
  },
];
