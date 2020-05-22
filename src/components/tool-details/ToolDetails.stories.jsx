import React from "react";
import ToolDetails from "./ToolDetails";
import StoryWrapper from "../story-wrapper/StoryWrapper";
import Center from "../layout-components/Center";
import { text, select } from "@storybook/addon-knobs";

export default {
  title: "Design System|ToolDetails",
  component: ToolDetails,
};

const tools = {
  "Web Checker": "webChecker",
  "CI Tool": "ciTool",
};

export const webCheckerInfo = () => (
  <StoryWrapper>
    <Center>
      <ToolDetails
        title={text("title", "Accessibility checker")}
        tool={select("tool", tools, "webChecker")}
      />
    </Center>
  </StoryWrapper>
);
