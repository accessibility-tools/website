import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import Link from "./Link";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Link",
  component: Link,
};

export const primary = () => (
  <StoryWrapper>
    <Link linkUrl={text("url", "#")} linkText={text("text", "Hello Link")} />
  </StoryWrapper>
);

export const secondary = () => (
  <StoryWrapper>
    <Link
      linkUrl={text("url", "#")}
      linkText={text("text", "Hello Link")}
      isSecondary={boolean("secondary", true)}
    />
  </StoryWrapper>
);

export const secondaryWithIcon = () => (
  <StoryWrapper>
    <Link
      linkUrl={text("url", "#")}
      linkText={text("text", "Hello Link")}
      linkIcon={text("icon", "extLink")}
      isSecondary={boolean("secondary", true)}
    />
  </StoryWrapper>
);

export const externalWithIcon = () => (
  <StoryWrapper>
    <Link
      linkUrl={text("url", "#")}
      linkText={text("text", "Hello Link")}
      linkIcon={text("icon", "extLink")}
      isExternal={boolean("external", true)}
    />
  </StoryWrapper>
);
