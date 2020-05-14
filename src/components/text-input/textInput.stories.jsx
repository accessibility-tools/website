import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const StoryWrapper = styled.div`
  margin: 1rem;
`;

export default {
  title: "Design System|TextInput",
  component: TextInput,
};

export const textInput = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      value={text("value", "")}
      hintText={text("hintText", "")}
      disabled={boolean("disabled", false)}
      errorText={text("errorText", "")}
      valid={boolean("valid", undefined)}
      required={boolean("required", false)}
      onChange={action("input-change")}
      width={number("width", 340)}
    />
  </StoryWrapper>
);

export const disabledTextInput = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      value={text("value", "")}
      disabled={boolean("disabled", true)}
    />
  </StoryWrapper>
);

export const textInputWithHint = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      value={text("value", "")}
      hintText={text("hintText", "answer should be x characters long")}
      disabled={boolean("disabled", false)}
    />
  </StoryWrapper>
);

export const textInputWithError = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      errorText={text("errorText", "answer should be x characters long")}
      value={text("value", "Some unappropriate text")}
      disabled={boolean("disabled", false)}
    />
  </StoryWrapper>
);

export const validTextInput = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      valid={boolean("valid", true)}
      value={text("value", "Some appropriate text")}
      disabled={boolean("disabled", false)}
    />
  </StoryWrapper>
);

export const textInputWithWidth = () => (
  <StoryWrapper>
    <TextInput
      id={text("id", "text-input")}
      label={text("label", "Input label")}
      placeholder={text("placeholder", "Placeholder text")}
      value={text("value", "")}
      hintText={text("hintText", "")}
      disabled={boolean("disabled", false)}
      errorText={text("errorText", "")}
      valid={boolean("valid", undefined)}
      required={boolean("required", false)}
      onChange={action("input-change")}
      width={number("width", 123)}
    />
  </StoryWrapper>
);
