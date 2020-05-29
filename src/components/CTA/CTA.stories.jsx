import React from "react";
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
    <CTA href={tempHref} text={texts.tool} />
    <CTA href={tempHref} text={texts.github} />
  </StoryWrapper>
);

export const secondary = () => (
  <StoryWrapper>
    <CTA href={tempHref} text={texts.tool} isSecondary={true} />
    <CTA href={tempHref} text={texts.github} isSecondary={true} />
  </StoryWrapper>
);

export const withIcon = () => (
  <StoryWrapper>
    <CTA href={tempHref} icon="github" text={texts.github} />
    <CTA href={tempHref} icon="github" text={texts.github} isSecondary={true} />
  </StoryWrapper>
);
