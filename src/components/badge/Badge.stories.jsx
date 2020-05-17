import React from "react";
import { text, number } from "@storybook/addon-knobs";
import Badge from "./Badge";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Badge",
  component: Badge,
};

const LEVELS = {
  CRITICAL: "critical",
  SERIOUS: "serious",
  MODERATE: "moderate",
  MINOR: "minor",
};

// mock data, to be replaced with report data later
const ISSUECOUNT = {
  CRITICAL: 6,
  SERIOUS: 10,
  MODERATE: 3,
  MINOR: 1,
};

export const allBadges = () => (
  <StoryWrapper>
    <Badge
      level={text("level 1", LEVELS.CRITICAL)}
      issueCount={number(LEVELS.CRITICAL + " issues", ISSUECOUNT.CRITICAL)}
    />
    <Badge
      level={text("level 2", LEVELS.SERIOUS)}
      issueCount={number(LEVELS.SERIOUS + " issues", ISSUECOUNT.SERIOUS)}
    />
    <Badge
      level={text("level 3", LEVELS.MODERATE)}
      issueCount={number(LEVELS.MODERATE + " issues", ISSUECOUNT.MODERATE)}
    />
    <Badge
      level={text("level 4", LEVELS.MINOR)}
      issueCount={number(LEVELS.MINOR + " issues", ISSUECOUNT.MINOR)}
    />
  </StoryWrapper>
);
