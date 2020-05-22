import React from "react";
import ToolDetails from "./ToolDetails";
import StoryWrapper from "../story-wrapper/StoryWrapper";
import Center from "../layout-components/Center";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Design System|ToolDetails",
  component: ToolDetails,
};

export const webCheckerInfo = () => (
  <StoryWrapper>
    <Center>
      <ToolDetails
        title={text("title", "Accessibility checker")}
        tool="webChecker"
      />
    </Center>
  </StoryWrapper>
);
