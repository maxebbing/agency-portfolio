import type { ComponentType } from "react";
import type { ProjectPalette } from "@/lib/projects";
import HearthMockup from "./HearthMockup";
import BeaconMockup from "./BeaconMockup";
import FernMockup from "./FernMockup";

export interface MockupEntry {
  domain: string;
  Body: ComponentType<{ palette: ProjectPalette }>;
}

/** Browser-mockup body + fictional domain per project slug. */
export const MOCKUP_BODIES: Record<string, MockupEntry> = {
  "hearth-and-vine": { domain: "hearthandvine.cafe", Body: HearthMockup },
  beacon: { domain: "beacon.io", Body: BeaconMockup },
  "fern-and-frame": { domain: "fernandframe.shop", Body: FernMockup },
};
