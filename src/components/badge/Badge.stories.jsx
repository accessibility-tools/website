import React from "react";
import { select, number } from "@storybook/addon-knobs";
import Badge from "./Badge";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Badge",
  component: Badge,
};

const issues = {
  critical: 6,
  serious: 10,
  moderate: 3,
  minor: 1,
};

const label = "level: ";
const levels = ["critical", "serious", "moderate", "minor"];

export const allBadges = () => {
  return (
    <StoryWrapper>
      {Object.keys(issues).map((key) => {
        return (
          <Badge
            key={"level name: " + key}
            level={select(label + key, levels, key)}
            issueCount={number(key + " issues", issues[key], { min: 0 })}
          />
        );
      })}
    </StoryWrapper>
  );
};
