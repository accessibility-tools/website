import React from "react";
import { object } from "@storybook/addon-knobs";
import CTA from "./CTA";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|CTA",
  component: CTA,
};

const label = "CTA-props";

export const primary = () => {
  const ciTool = {
    ctaText: "view on github",
    ctaUrl: "https://github.com/accessibility-tools/ci",
    isExternal: true,
  };
  const data = object(label, ciTool);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};

export const secondary = () => {
  const webChecker = {
    ctaText: "check out the tool",
    ctaUrl: "/",
    isSecondary: true,
  };
  const data = object(label, webChecker);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};

export const primaryWithIcon = () => {
  const ciTool = {
    ctaText: "view on github",
    ctaUrl: "https://github.com/accessibility-tools/ci",
    ctaIcon: "extLink",
    isExternal: true,
  };
  const data = object(label, ciTool);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};
export const secondaryWithIcon = () => {
  const webChecker = {
    ctaText: "check out the tool",
    ctaUrl: "https://github.com/accessibility-tools/website",
    ctaIcon: "extLink",
    isExternal: true,
    isSecondary: true,
  };
  const data = object(label, webChecker);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};
