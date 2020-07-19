import React from 'react';
import Button from './Button.tsx';
import StoryWrapper from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|Button',
  component: Button
};

export const allButtons = () => (
  <StoryWrapper>
    <Button text="Hello Button" />
    <Button disabled={true} text="Hello Button" />
    <Button isSecondary={true} text="Hello Button" />
    <Button isSecondary={true} disabled={true} text="Hello Button" />
    <Button icon="github" text="Hello Button" />
    <Button isSecondary={true} icon="github" text="Hello Button" />
  </StoryWrapper>
);

export const primary = () => (
  <StoryWrapper>
    <Button isSecondary={false} text="Hello Button" />
  </StoryWrapper>
);

export const secondary = () => (
  <StoryWrapper>
    <Button isSecondary={true} text="Hello Button" />
  </StoryWrapper>
);

export const disabled = () => (
  <StoryWrapper>
    <Button disabled={true} text="Hello Button" />
    <Button isSecondary={true} disabled={true} text="Hello Button" />
  </StoryWrapper>
);

export const withIcon = () => (
  <StoryWrapper>
    <Button icon="github" text="Hello Button" />
    <Button isSecondary={true} icon="github" text="Hello Button" />
  </StoryWrapper>
);
