import React from "react";
import ToolOverview from "./ToolOverview";
import StoryWrapper from "../story-wrapper/StoryWrapper";
import Center from "../layout-components/Center";
import { text, select } from "@storybook/addon-knobs";

export default {
  title: "Design System|ToolOverview",
  component: ToolOverview,
};

const tools = {
  "Web Checker": "webChecker",
  "CI Tool": "ciTool",
};

export const webCheckerInfo = () => (
  <StoryWrapper>
    <Center>
      <ToolOverview
        title={text("title", "Accessibility checker")}
        tool={select("tool", tools, "webChecker")}
      />
    </Center>
  </StoryWrapper>
);
