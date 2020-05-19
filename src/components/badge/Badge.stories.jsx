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

const label = "level: ";

export const allBadges = () => {
  return (
    <StoryWrapper>
      {Object.values(LEVELS).map((value) => {
        return (
          <Badge
            key={"level name: " + value}
            level={select(label + value, LEVELS, value)}
            issueCount={number(value + " issues", 6, { min: 0 })}
          />
        );
      })}
    </StoryWrapper>
  );
};
