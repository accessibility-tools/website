import React from "react";
import { select, number } from "@storybook/addon-knobs";
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

const label = "level";

export const criticalBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.CRITICAL)}
        issueCount={number("issue count", 6, { min: 0 })}
      />
      <Badge level={select(label, LEVELS, LEVELS.CRITICAL)} />
    </StoryWrapper>
  );
};

export const seriousBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.SERIOUS)}
        issueCount={number("issue count", 10, { min: 0 })}
      />
      <Badge level={select(label, LEVELS, LEVELS.SERIOUS)} />
    </StoryWrapper>
  );
};

export const moderateBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.MODERATE)}
        issueCount={number("issue count", 7, { min: 0 })}
      />
      <Badge level={select(label, LEVELS, LEVELS.MODERATE)} />
    </StoryWrapper>
  );
};

export const minorBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.MINOR)}
        issueCount={number("issue count", 2, { min: 0 })}
      />
      <Badge level={select(label, LEVELS, LEVELS.MINOR)} />
    </StoryWrapper>
  );
};
