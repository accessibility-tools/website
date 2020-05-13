import React from 'react';
import { Button } from './Button';
import { StoryWrapper } from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|Button',
  component: Button,
};

export const allButtons = () => (
  <StoryWrapper>
    <Button>Hello Button</Button>
    <Button disabled={true}>Hello Button</Button>
    <Button isSecondary={true}>Hello Button</Button>
    <Button isSecondary={true} disabled={true}>Hello Button</Button>
    <Button icon="github">Hello Button</Button>
    <Button isSecondary={true} icon="github">Hello Button</Button>
  </StoryWrapper>
)

export const primary = () => (
  <StoryWrapper>
    <Button isSecondary={false}>Hello Button</Button>
  </StoryWrapper>
)

export const secondary = () => (
<StoryWrapper>
  <Button isSecondary={true}>Hello Button</Button>
</StoryWrapper>
)

export const disabled = () => (
  <StoryWrapper>
    <Button disabled={true}>Hello Button</Button>
    <Button isSecondary={true} disabled={true}>Hello Button</Button>
  </StoryWrapper>
)

export const withIcon = () => (
  <StoryWrapper>
    <Button icon="github">Hello Button</Button>
    <Button isSecondary={true} icon="github">Hello Button</Button>
  </StoryWrapper>
); 