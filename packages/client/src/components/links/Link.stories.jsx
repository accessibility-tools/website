import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Link from './Link.tsx';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';

export default {
  title: 'Design System|Link',
  component: Link
};

export const primary = () => (
  <StoryWrapper>
    <Link url={text('url', '#')} text={text('text', 'Hello Link')} />
  </StoryWrapper>
);

export const secondary = () => (
  <StoryWrapper>
    <Link
      url={text('url', '#')}
      text={text('text', 'Hello Link')}
      isSecondary={boolean('secondary', true)}
    />
  </StoryWrapper>
);

export const secondaryWithIcon = () => (
  <StoryWrapper>
    <Link
      url={text('url', '#')}
      text={text('text', 'Hello Link')}
      icon={text('icon', 'extLink')}
      isSecondary={boolean('secondary', true)}
    />
  </StoryWrapper>
);

export const externalWithIcon = () => (
  <StoryWrapper>
    <Link
      url={text('url', '#')}
      text={text('text', 'Hello Link')}
      icon={text('icon', 'extLink')}
      isExternal={boolean('external', true)}
    />
  </StoryWrapper>
);
