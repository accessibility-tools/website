import React from "react";
import Link from "./Links";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Link",
  component: Link,
};

export const allLinks = () => (
  <StoryWrapper>
    <Link href="#" text="Hello Link" />
    <Link href="#" isSecondary={true} text="Hello Link" />
    <Link href="#" isSecondary={true} icon="extLink" text="Hello Link" />
    <Link href="#" isExternal={true} icon="extLink" text="Hello Link" />
  </StoryWrapper>
);
