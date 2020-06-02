import React from "react";
import { text } from "@storybook/addon-knobs";
import CTA from "./CTA";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|CTA",
  component: CTA,
};

const texts = {
  tool: "CHECK OUT THE TOOL",
  github: "VIEW ON GITHUB",
};

const tempHref = "#";

export const primary = () => (
  <StoryWrapper>
    <CTA href={tempHref} text={text("placeholder text", texts.tool)} />
  </StoryWrapper>
);

export const secondary = () => (
  <StoryWrapper>
    <CTA
      href={tempHref}
      text={text("placeholder text", texts.tool)}
      isSecondary={true}
    />
  </StoryWrapper>
);

export const withIcon = () => (
  <StoryWrapper>
    <CTA
      href={tempHref}
      icon="github"
      text={text("placeholder text", texts.github)}
    />
    <CTA
      href={tempHref}
      icon="github"
      text={text("placeholder text", texts.github)}
      isSecondary={true}
    />
  </StoryWrapper>
);
