export interface ProjectPalette {
  bg: string;
  fg: string;
  accent: string;
}

export interface ProjectCaseStudy {
  /** One-line editorial opener for the case page. */
  heroStatement: string;
  /** Paragraphs: the (fictional) client situation & goals. */
  brief: string[];
  /** Paragraphs: how the design problem was tackled. */
  approach: string[];
  /** Typefaces chosen for that concept brand + rationale note. */
  typography: {
    display: string;
    text: string;
    note: string;
  };
  /** Why those colors. */
  paletteNote: string;
  /** Paragraphs: honest concept-project framing of results (no fake metrics). */
  outcome: string[];
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
  caseStudy: ProjectCaseStudy;
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
    caseStudy: {
      heroStatement:
        "A bistro site that behaves like the room it belongs to: warm, unhurried, and set before you arrive.",
      brief: [
        "Hearth & Vine is the bistro I invented to think through a problem I keep seeing: restaurant sites that bury the three things anyone actually wants — tonight's menu, the hours, a table — under a carousel of stock photography. The imagined brief was a fifteen-table neighborhood spot with a kitchen that rewrites the menu whenever the market does, and no patience for a site that goes stale between updates.",
        "The constraints followed from the fiction. The menu had to be typeset, not uploaded as a PDF. The site had to be updatable by someone mid-service on a phone. And the whole thing had to feel like the room — worn wood, low light, handwriting on the specials board — without resorting to a single photograph of an empty dining chair.",
      ],
      approach: [
        "I started with the menu, because the menu is the site. It gets the full print treatment: dotted leaders between dish and price, prices set in the display face like a wine list, a seasonal note in italic where a chef would actually write one. Everything else — hours, address, booking — hangs off that spine in a strict typographic hierarchy, so the page reads top to bottom like a well-set menu card.",
        "Warmth came from material choices rather than imagery: a deep espresso ground, cream type, and one burnt-orange accent used the way a restaurant uses candlelight — sparingly, and only where you want the eye to land. The identity is nearly all typography; the ampersand in the wordmark does the work a logo usually does.",
      ],
      typography: {
        display: "GT Alpina",
        text: "Untitled Sans",
        note: "A sharp-nibbed serif with real warmth for the wordmark and menu prices, over a deliberately plain sans for everything functional. The contrast is the point: the food gets the flourish, the logistics stay legible.",
      },
      paletteNote:
        "Espresso, cream, and burnt orange — the palette of the room itself. The dark ground lets the menu read like chalk on a board, and the orange is rationed to prices, the ampersand, and the reservation call-to-action.",
      outcome: [
        "As a concept, Hearth & Vine demonstrates how I'd handle a hospitality brand where the budget is small and the menu changes weekly: put the typography where the money isn't, and build the update path before the homepage. The menu system is designed so the kitchen owns the words and the layout protects itself.",
        "The client is fictional; the decisions aren't. Every choice here — the dotted leaders, the rationed accent, the no-photography rule — is one I'd defend across the table from a real restaurateur.",
      ],
    },
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
    caseStudy: {
      heroStatement:
        "A marketing site for people who are professionally suspicious of marketing sites.",
      brief: [
        "Beacon is an invented analytics platform, and its invented problem is the one every B2B data product has: the site that sells the tool looks nothing like the tool. Gradients and grinning stock teams out front; dense, careful software behind the login. The imagined buyer is a staff engineer who has read a hundred of these pages and trusts none of them.",
        "So the brief I set myself was to make the marketing site earn credibility the way the product would — by being calm, specific, and visibly well-made. Show real interface, real numbers in real charts, and prose that respects the reader's time. No abstract 3D blobs standing in for 'data'.",
      ],
      approach: [
        "The layout borrows from editorial design rather than SaaS convention: a strict grid, generous margins, and product screenshots treated like plates in a printed annual report — captioned, framed, given room. The headline speaks plainly ('See the signal, not the noise') and the supporting copy is written like documentation with a pulse.",
        "The interface itself supplies the color. A near-black navy ground keeps long reading comfortable, and one signal blue is reserved for exactly the things Beacon wants you to notice — the live datapoint, the trend delta, the call-to-action. If everything glows, nothing does; the design system's first rule is restraint.",
      ],
      typography: {
        display: "Söhne",
        text: "Inter",
        note: "One family of grotesks doing quiet, technical work: Söhne's tighter cuts for headlines and numerals, Inter for interface and body text. No serif anywhere — credibility here comes from precision, not warmth.",
      },
      paletteNote:
        "Deep navy, paper-white text, and a single signal blue. The dark ground reads as 'terminal, but composed', and the blue is used the way a good chart uses it — only on the line that matters.",
      outcome: [
        "Beacon is my argument for how technical products should be sold: with the same rigor they're built. The concept demonstrates a marketing layout system, a chart language, and a tone of voice that could extend from landing page to changelog without a seam.",
        "No invented metrics, no imaginary customer logos — the deliverable of a concept like this is the system itself, and the judgment behind it. That part is real, and it's what a real data company would be hiring.",
      ],
    },
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
    caseStudy: {
      heroStatement:
        "An online shop with the pace of a Sunday morning — browsing as its own reward.",
      brief: [
        "Fern & Frame is a fictional plant-and-pottery shop, invented to explore the opposite of conversion-obsessed e-commerce. The imagined owners throw pots slowly, propagate plants slowly, and wanted a shop that doesn't panic the customer with countdown timers and exit popups. Their inventory is small, irregular, and mostly one-of-a-kind — which most shop templates treat as a bug.",
        "The brief-behind-the-brief: design a storefront where scarcity is presented honestly ('there is one of these, because a person made it') and where the journal — care guides, kiln notes — sits beside the shop as an equal, not as an SEO afterthought.",
      ],
      approach: [
        "The product grid is set like a plate section in a garden book: matte green ground, objects shown as simple forms with room around them, prices in a small ochre serif rather than a shouting button. Product names read like captions. The one accent — a clay-ochre gold — belongs to the pottery itself, so the palette feels dug out of the ground the plants grow in.",
        "Pace is a design material here. Transitions are slow and few, the type is set a size larger than strictly efficient, and nothing on the page moves unless the visitor asks it to. The 'Bag' is quiet punctuation in the corner, not a persistent anxiety. It's retail typography borrowed from people who label seed packets by hand.",
      ],
      typography: {
        display: "Reckless Neue",
        text: "Karla",
        note: "A slightly unruly contemporary serif for names and headings — it has the wobble of something hand-thrown — paired with Karla's friendly, even texture for care instructions and checkout. Warm, but never twee.",
      },
      paletteNote:
        "Moss green, unbleached linen, and clay-ochre gold. The green is the ground, the linen is the light, and the ochre appears exactly where the glaze would — on the objects, the prices, and nowhere else.",
      outcome: [
        "Fern & Frame demonstrates the retail register of my work: an e-commerce layout that treats small inventory as a feature, a journal that shares the shop's spine instead of living in a subdomain, and a palette-and-type system a two-person shop could actually maintain.",
        "It's concept work, plainly labeled — but it's also a working answer to a question real shops keep asking me: can an online store feel like walking into the good kind of quiet? I think the answer looks like this.",
      ],
    },
  },
];
