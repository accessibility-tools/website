import React from "react";
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

export const allBadges = () => (
  <StoryWrapper>
    <Badge level={LEVELS.CRITICAL} />
    <Badge level={LEVELS.SERIOUS} />
    <Badge level={LEVELS.MODERATE} />
    <Badge level={LEVELS.MINOR} />
  </StoryWrapper>
);
