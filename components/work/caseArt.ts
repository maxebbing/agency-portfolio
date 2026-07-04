import type { ComponentType } from "react";
import type { ProjectPalette } from "@/lib/projects";
import HearthMenuDetail from "./details/HearthMenuDetail";
import BeaconChartDetail from "./details/BeaconChartDetail";
import FernProductDetail from "./details/FernProductDetail";

export interface CaseArtEntry {
  /** Close-up detail panel for the design-decisions spread. */
  Detail: ComponentType<{ palette: ProjectPalette }>;
  /** Caption under the full-width browser mockup. */
  mockupCaption: string;
  /** Caption under the detail panel. */
  detailCaption: string;
  /**
   * Stand-in styling used to *suggest* the intended faces in the specimen
   * (rendered with the site's own fonts; the intended cuts are named).
   */
  specimen: { displayClass: string; textClass: string };
}

export const CASE_ART: Record<string, CaseArtEntry> = {
  "hearth-and-vine": {
    Detail: HearthMenuDetail,
    mockupCaption:
      "The menu page — typeset, not uploaded. Dotted leaders carry the eye from dish to price.",
    detailCaption:
      "Menu close-up: the specials system at reading size, chalk-on-board contrast.",
    specimen: {
      displayClass: "font-display font-light tracking-tight",
      textClass: "font-sans",
    },
  },
  beacon: {
    Detail: BeaconChartDetail,
    mockupCaption:
      "The landing hero — product interface shown as the sales pitch, captioned like a plate in a report.",
    detailCaption:
      "Chart detail: one emphasized series, gridlines whispering, the delta doing the talking.",
    specimen: {
      displayClass: "font-sans font-semibold tracking-tight",
      textClass: "font-sans",
    },
  },
  "fern-and-frame": {
    Detail: FernProductDetail,
    mockupCaption:
      "The shop grid — objects as simple forms with room around them, prices set like captions.",
    detailCaption:
      "Product close-up: one-of-a-kind inventory presented as a fact, not a fire sale.",
    specimen: {
      displayClass: "font-display italic tracking-tight",
      textClass: "font-sans",
    },
  },
};
