import React from "react";
import { text } from "@storybook/addon-knobs";
import StoryWrapper from "../story-wrapper/StoryWrapper";
import Banner from "./Banner";

export default {
  title: "Design System|Banner",
  component: Banner,
};

export const primary = () => {
  return (
    <StoryWrapper>
      <Banner text={text("text", "this is some placeholder text")} />
    </StoryWrapper>
  );
};
