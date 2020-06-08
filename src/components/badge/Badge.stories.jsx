import React from "react";
import { select, number } from "@storybook/addon-knobs";
import Badge from "./Badge";
import { color } from "../../shared/style";
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
        issueCount={number("issueCount", 6, { min: 0 })}
        iconColor={color.error}
        iconName="circle"
      />
      <Badge
        level={select(label, LEVELS, LEVELS.CRITICAL)}
        iconColor={color.error}
        iconName="circle"
      />
    </StoryWrapper>
  );
};

export const seriousBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.SERIOUS)}
        issueCount={number("issueCount", 10, { min: 0 })}
        iconColor={color.error}
        iconName="issue"
      />
      <Badge
        level={select(label, LEVELS, LEVELS.SERIOUS)}
        iconColor={color.error}
        iconName="issue"
      />
    </StoryWrapper>
  );
};

export const moderateBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.MODERATE)}
        issueCount={number("issueCount", 7, { min: 0 })}
        iconColor={color.darkBlue}
        iconName="issue"
      />
      <Badge
        level={select(label, LEVELS, LEVELS.MODERATE)}
        iconColor={color.darkBlue}
        iconName="issue"
      />
    </StoryWrapper>
  );
};

export const minorBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        level={select(label, LEVELS, LEVELS.MINOR)}
        issueCount={number("issueCount", 2, { min: 0 })}
        iconColor={color.primary}
        iconName="issue"
      />
      <Badge
        level={select(label, LEVELS, LEVELS.MINOR)}
        iconColor={color.primary}
        iconName="issue"
      />
    </StoryWrapper>
  );
};
